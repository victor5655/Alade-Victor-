
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Predictor from './components/Predictor';
import DataExplorer from './components/DataExplorer';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.PREDICTOR:
        return <Predictor />;
      case AppView.DATA_EXPLORER:
        return <DataExplorer />;
      default:
        return <Dashboard />;
    }
  };

  const getViewTitle = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return "Executive Dashboard";
      case AppView.PREDICTOR: return "AI Churn Predictor";
      case AppView.DATA_EXPLORER: return "Customer Data Explorer";
      default: return "";
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 ml-64 p-8 bg-slate-50 overflow-y-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{getViewTitle()}</h1>
            <p className="text-slate-500 text-sm">Real-time predictive analytics for customer retention</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
              <i className="fas fa-bell text-xl"></i>
            </button>
            <div className="h-10 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Admin User</p>
                <p className="text-xs text-slate-500">Data Specialist</p>
              </div>
              <img 
                src="https://picsum.photos/40/40" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              />
            </div>
          </div>
        </header>

        {renderView()}

        <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          <p>This application uses Gemini AI for predictive modeling. Analysis is based on provided historical telecom datasets.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
