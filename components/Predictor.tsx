
import React, { useState } from 'react';
import { predictChurn } from '../services/geminiService';
import { ChurnPredictionResponse, CustomerRecord } from '../types';

const Predictor: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ChurnPredictionResponse | null>(null);
  const [formData, setFormData] = useState<Partial<CustomerRecord>>({
    fullName: '',
    age: 30,
    state: 'Lagos',
    device: '4G Router',
    satisfactionRate: 3,
    tenureMonths: 12,
    subscriptionPlan: 'Monthly Plan',
    totalRevenue: 50000,
    dataUsage: 50.5
  });

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const prediction = await predictChurn(formData);
      setResult(prediction);
    } catch (error) {
      console.error("Prediction failed:", error);
      alert("Failed to get prediction. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <div className="xl:col-span-1">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm sticky top-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Customer Profile</h3>
          <form onSubmit={handlePredict} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
              <input 
                type="text" 
                value={formData.fullName}
                onChange={e => setFormData({...formData, fullName: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Ngozi Berry"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Age</label>
                <input 
                  type="number" 
                  value={formData.age}
                  onChange={e => setFormData({...formData, age: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Satisfaction (1-5)</label>
                <select 
                  value={formData.satisfactionRate}
                  onChange={e => setFormData({...formData, satisfactionRate: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none"
                >
                  <option value="1">1 (Poor)</option>
                  <option value="2">2 (Fair)</option>
                  <option value="3">3 (Good)</option>
                  <option value="4">4 (Very Good)</option>
                  <option value="5">5 (Excellent)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">State</label>
              <input 
                type="text" 
                value={formData.state}
                onChange={e => setFormData({...formData, state: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none"
                placeholder="Kwara"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Device Type</label>
              <select 
                value={formData.device}
                onChange={e => setFormData({...formData, device: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none"
              >
                <option value="4G Router">4G Router</option>
                <option value="5G Broadband Router">5G Broadband Router</option>
                <option value="Mobile SIM Card">Mobile SIM Card</option>
                <option value="Broadband MiFi">Broadband MiFi</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tenure (Mo)</label>
                <input 
                  type="number" 
                  value={formData.tenureMonths}
                  onChange={e => setFormData({...formData, tenureMonths: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Usage (GB)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={formData.dataUsage}
                  onChange={e => setFormData({...formData, dataUsage: parseFloat(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none"
                />
              </div>
            </div>
            
            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold text-white transition-all ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200'}`}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Analyzing Trends...
                </>
              ) : 'Predict Churn Probability'}
            </button>
          </form>
        </div>
      </div>

      <div className="xl:col-span-2">
        {!result && !loading && (
          <div className="h-full flex flex-col items-center justify-center p-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl text-slate-400">
            <i className="fas fa-brain text-6xl mb-4"></i>
            <p className="text-lg font-medium">Ready to Analyze</p>
            <p className="text-sm text-center max-w-xs mt-2">Fill out the customer profile on the left to see the AI's prediction and risk analysis.</p>
          </div>
        )}

        {loading && (
          <div className="h-full flex flex-col items-center justify-center space-y-4 animate-pulse">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fas fa-robot text-blue-500 text-3xl"></i>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-slate-800 font-bold text-xl">Gemini 3 Pro is Thinking...</p>
              <p className="text-slate-500">Cross-referencing customer behavior with historical churn patterns.</p>
            </div>
          </div>
        )}

        {result && !loading && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className={`p-8 rounded-xl border flex flex-col md:flex-row items-center justify-between ${
              result.riskLevel === 'High' ? 'bg-red-50 border-red-100' : 
              result.riskLevel === 'Medium' ? 'bg-yellow-50 border-yellow-100' : 
              'bg-green-50 border-green-100'
            }`}>
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Predicted Churn Risk</p>
                <h2 className={`text-5xl font-black ${
                  result.riskLevel === 'High' ? 'text-red-600' : 
                  result.riskLevel === 'Medium' ? 'text-yellow-600' : 
                  'text-green-600'
                }`}>{result.riskLevel}</h2>
                <p className="text-slate-600 mt-2 font-medium">Probability Score: {(result.churnProbability * 100).toFixed(1)}%</p>
              </div>
              <div className="w-32 h-32 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-200" />
                  <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="12" fill="transparent" 
                    strokeDasharray={339.29} 
                    strokeDashoffset={339.29 * (1 - result.churnProbability)}
                    className={result.riskLevel === 'High' ? 'text-red-500' : result.riskLevel === 'Medium' ? 'text-yellow-500' : 'text-green-500'} 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-slate-800">
                  {(result.churnProbability * 100).toFixed(0)}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                  <i className="fas fa-exclamation-triangle text-yellow-500 mr-2"></i>
                  Key Risk Factors
                </h4>
                <ul className="space-y-2">
                  {result.keyRiskFactors.map((factor, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                      <i className="fas fa-check-circle text-blue-500 mr-2 mt-1"></i>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                  <i className="fas fa-lightbulb text-blue-500 mr-2"></i>
                  Retention Strategy
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{result.recommendation}"
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-4">AI Deep Analysis</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {result.analysis}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Predictor;
