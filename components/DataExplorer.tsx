
import React, { useState } from 'react';
import { dataset } from '../data/dataset';

const DataExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = dataset.filter(c => 
    c.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Customer Records</h3>
          <p className="text-sm text-slate-500">Browsing historical data for model context</p>
        </div>
        <div className="relative">
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input 
            type="text" 
            placeholder="Search name, ID or state..."
            className="pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full md:w-64 text-sm"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">ID / Name</th>
              <th className="px-6 py-4">State</th>
              <th className="px-6 py-4">Plan / Usage</th>
              <th className="px-6 py-4">Satisfaction</th>
              <th className="px-6 py-4">Revenue</th>
              <th className="px-6 py-4 text-center">Churned?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredData.slice(0, 50).map((customer) => (
              <tr key={customer.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-900">{customer.fullName}</div>
                  <div className="text-xs text-slate-500">{customer.id}</div>
                </td>
                <td className="px-6 py-4 text-slate-600">{customer.state}</td>
                <td className="px-6 py-4">
                  <div className="text-slate-700 font-medium truncate max-w-[150px]">{customer.subscriptionPlan}</div>
                  <div className="text-xs text-slate-500">{customer.dataUsage} GB Used</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      customer.satisfactionRate >= 4 ? 'bg-green-500' :
                      customer.satisfactionRate >= 3 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></span>
                    {customer.satisfactionRate}/5 ({customer.satisfactionLabel})
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-slate-600 font-medium">₦{customer.totalRevenue.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    customer.churnStatus === 'Yes' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {customer.churnStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length > 50 && (
          <div className="p-4 text-center text-slate-500 text-xs italic border-t border-slate-100">
            Showing first 50 results. Refine your search to find more specific records.
          </div>
        )}
      </div>
    </div>
  );
};

export default DataExplorer;
