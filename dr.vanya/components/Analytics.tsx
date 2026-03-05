
import React from 'react';
import { Language } from '../types';

const Analytics: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-slate-800">Your Oral Health Index</h3>
            <p className="text-slate-500 max-w-sm mt-1">AI-calculated score based on scans, habit logs, and clinic visits over the last 30 days.</p>
          </div>
          <div className="relative w-48 h-48">
             <svg className="w-full h-full transform -rotate-90">
               <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
               <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="552.92" strokeDashoffset="138" className="text-teal-500 transition-all duration-1000 ease-out" />
             </svg>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-4xl font-extrabold text-slate-800">75%</span>
                <span className="block text-xs font-bold text-teal-600 uppercase tracking-widest mt-1">Healthy</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            Brushing Consistency (Last 7 Days)
          </h3>
          <div className="flex items-end space-x-4 h-48 pt-4">
            {[80, 100, 70, 90, 100, 60, 95].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group">
                <div className="w-full bg-teal-50 rounded-t-lg relative group-hover:bg-teal-100 transition-colors" style={{ height: `${val}%` }}>
                   <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">{val}%</span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Treatment Progress
          </h3>
          <div className="space-y-6 pt-2">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                <span>Alignment (Invisalign)</span>
                <span className="text-teal-600">65% Completed</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                <span>Gum Sensitivity Recovery</span>
                <span className="text-emerald-500">90% Recovered</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="p-4 bg-teal-50 rounded-xl mt-4 flex items-center">
               <div className="p-2 bg-white rounded-lg mr-3 shadow-sm">🏆</div>
               <p className="text-xs text-teal-800 font-medium">You're in the top 5% of consistent brushers this month!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
