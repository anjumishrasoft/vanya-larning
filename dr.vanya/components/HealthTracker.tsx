
import React, { useState } from 'react';
import { Language } from '../types';

const HealthTracker: React.FC<{ lang: Language }> = ({ lang }) => {
  const [logs, setLogs] = useState([
    { date: '2023-10-20', brushed: true, flossed: true, score: 95 },
    { date: '2023-10-19', brushed: true, flossed: false, score: 70 },
    { date: '2023-10-18', brushed: true, flossed: true, score: 95 },
    { date: '2023-10-17', brushed: true, flossed: true, score: 95 },
    { date: '2023-10-16', brushed: true, flossed: true, score: 95 },
  ]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-teal-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="text-sm opacity-80 mb-1">Weekly Average</div>
          <div className="text-3xl font-bold">90%</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-sm text-slate-500 mb-1">Missed Sessions</div>
          <div className="text-3xl font-bold text-slate-800">1</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-sm text-slate-500 mb-1">Rewards Earned</div>
          <div className="text-3xl font-bold text-teal-600">3</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-sm text-slate-500 mb-1">Next Reward At</div>
          <div className="text-3xl font-bold text-orange-500">10d</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">History Log</h3>
          <button className="text-teal-600 text-sm font-semibold">+ Add Manual Log</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-400 text-xs uppercase font-bold">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Brushed</th>
              <th className="px-6 py-3">Flossed</th>
              <th className="px-6 py-3">Daily Score</th>
              <th className="px-6 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-600 divide-y divide-slate-50">
            {logs.map((log, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium">{new Date(log.date).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <span className={`w-3 h-3 inline-block rounded-full ${log.brushed ? 'bg-green-500' : 'bg-red-400'}`}></span>
                </td>
                <td className="px-6 py-4">
                  <span className={`w-3 h-3 inline-block rounded-full ${log.flossed ? 'bg-green-500' : 'bg-red-400'}`}></span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-32 bg-slate-100 rounded-full h-2">
                    <div className={`h-2 rounded-full ${log.score > 80 ? 'bg-green-500' : 'bg-amber-400'}`} style={{ width: `${log.score}%` }}></div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthTracker;
