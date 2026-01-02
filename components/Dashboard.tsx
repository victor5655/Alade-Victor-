
import React, { useMemo } from 'react';
import { dataset } from '../data/dataset';
import MetricCard from './MetricCard';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';

const Dashboard: React.FC = () => {
  const stats = useMemo(() => {
    const total = dataset.length;
    const churned = dataset.filter(c => c.churnStatus === 'Yes').length;
    const churnRate = ((churned / total) * 100).toFixed(1);
    const totalRev = dataset.reduce((sum, c) => sum + c.totalRevenue, 0);
    const avgSatisfaction = (dataset.reduce((sum, c) => sum + c.satisfactionRate, 0) / total).toFixed(1);

    // Churn by state
    const stateMap: Record<string, { total: number; churn: number }> = {};
    dataset.forEach(c => {
      if (!stateMap[c.state]) stateMap[c.state] = { total: 0, churn: 0 };
      stateMap[c.state].total++;
      if (c.churnStatus === 'Yes') stateMap[c.state].churn++;
    });
    
    const stateData = Object.entries(stateMap)
      .map(([name, data]) => ({ name, rate: ((data.churn / data.total) * 100).toFixed(1) }))
      .sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate))
      .slice(0, 8);

    // Churn by plan
    const planMap: Record<string, { total: number; churn: number }> = {};
    dataset.forEach(c => {
      const plan = c.subscriptionPlan.includes('Monthly') ? 'Monthly' : 
                   c.subscriptionPlan.includes('Yearly') ? 'Yearly' : 'Daily/Others';
      if (!planMap[plan]) planMap[plan] = { total: 0, churn: 0 };
      planMap[plan].total++;
      if (c.churnStatus === 'Yes') planMap[plan].churn++;
    });

    const planData = Object.entries(planMap).map(([name, data]) => ({
      name,
      value: data.churn
    }));

    return { total, churned, churnRate, totalRev, avgSatisfaction, stateData, planData };
  }, []);

  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Customers" value={stats.total} icon="fa-users" color="blue" trend="2.4%" isPositive={true} />
        <MetricCard title="Churned Customers" value={stats.churned} icon="fa-user-minus" color="red" trend="1.2%" isPositive={false} />
        <MetricCard title="Churn Rate" value={`${stats.churnRate}%`} icon="fa-percentage" color="yellow" trend="0.5%" isPositive={false} />
        <MetricCard title="Total Revenue (₦)" value={stats.totalRev.toLocaleString()} icon="fa-coins" color="green" trend="5.1%" isPositive={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Top States by Churn Rate (%)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.stateData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
                <Bar dataKey="rate" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Churned Customers by Plan Type</h3>
          <div className="h-80 flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats.planData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {stats.planData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Churn Reasons Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from(new Set(dataset.map(c => c.reasonForChurn).filter(Boolean))).map((reason, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center">
              <span className="text-sm font-medium text-slate-700">{reason}</span>
              <span className="text-xl font-bold text-blue-600">
                {dataset.filter(c => c.reasonForChurn === reason).length}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
