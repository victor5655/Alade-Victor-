
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: 'blue' | 'red' | 'green' | 'yellow';
  trend?: string;
  isPositive?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color, trend, isPositive }) => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    red: 'bg-red-100 text-red-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
          {trend && (
            <div className={`flex items-center mt-2 text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <i className={`fas fa-arrow-${isPositive ? 'up' : 'down'} mr-1`}></i>
              {trend} vs last month
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorMap[color]}`}>
          <i className={`fas ${icon} text-lg`}></i>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
