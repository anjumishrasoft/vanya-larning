
import React from 'react';
import { Language } from '../types';
import { LANGUAGES, COLORS } from '../constants';

const Dashboard: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = LANGUAGES[lang];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-gradient-to-r from-teal-600 to-emerald-500 rounded-2xl p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-2">{t.welcome}</h2>
        <p className="opacity-90 max-w-lg">Your oral health is improving! You've maintained your brushing streak for 5 days. Keep it up!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-500 font-medium">{t.status}</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold uppercase">Good</span>
          </div>
          <div className="text-3xl font-bold text-slate-800">85%</div>
          <div className="mt-2 w-full bg-slate-100 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-500 font-medium">{t.nextAppt}</span>
            <button className="text-teal-600 text-sm font-semibold hover:underline">Reschedule</button>
          </div>
          <div className="text-xl font-bold text-slate-800">Oct 24, 10:30 AM</div>
          <p className="text-sm text-slate-400 mt-1">Dr. Sharma • Apollo Dental</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-500 font-medium">{t.streak}</span>
            <span className="text-orange-500">🔥</span>
          </div>
          <div className="text-3xl font-bold text-slate-800">5 Days</div>
          <p className="text-sm text-slate-400 mt-1">Goal: 7 days for Reward</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Tips</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-teal-50 text-teal-600 rounded flex-shrink-0 flex items-center justify-center font-bold">1</div>
              <p className="text-slate-600 text-sm">Floss before bedtime to remove trapped food particles between teeth.</p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-teal-50 text-teal-600 rounded flex-shrink-0 flex items-center justify-center font-bold">2</div>
              <p className="text-slate-600 text-sm">Drink more water after sugary snacks to help neutralize acids.</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Upcoming Routine</h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-slate-50 rounded-lg">
              <input type="checkbox" className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              <span className="ml-3 text-slate-700 text-sm">Morning Brushing</span>
              <span className="ml-auto text-xs text-slate-400">Done</span>
            </div>
            <div className="flex items-center p-3 bg-slate-50 rounded-lg opacity-75">
              <input type="checkbox" className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" />
              <span className="ml-3 text-slate-700 text-sm">Flossing</span>
              <span className="ml-auto text-xs text-slate-400">Tonight</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
