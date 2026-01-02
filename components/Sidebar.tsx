
import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: AppView.DASHBOARD, label: 'Dashboard', icon: 'fa-chart-pie' },
    { id: AppView.PREDICTOR, label: 'Churn Predictor', icon: 'fa-robot' },
    { id: AppView.DATA_EXPLORER, label: 'Data Explorer', icon: 'fa-table' },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-slate-300 flex flex-col fixed left-0 top-0 z-20">
      <div className="p-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
          <i className="fas fa-satellite-dish text-xl"></i>
        </div>
        <span className="font-bold text-xl text-white">InsightPro</span>
      </div>
      
      <nav className="flex-1 mt-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center px-6 py-4 transition-colors ${
              currentView === item.id 
                ? 'bg-blue-600/10 text-blue-400 border-r-4 border-blue-600' 
                : 'hover:bg-slate-800 hover:text-white'
            }`}
          >
            <i className={`fas ${item.icon} w-6 text-center mr-4`}></i>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 text-xs text-slate-500 border-t border-slate-800">
        <p>Telecom Churn Predictor v1.0</p>
        <p className="mt-1">&copy; 2025 AI Solutions</p>
      </div>
    </div>
  );
};

export default Sidebar;
