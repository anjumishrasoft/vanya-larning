
import React from 'react';
import { Language } from '../types';

const Records: React.FC<{ lang: Language }> = ({ lang }) => {
  const records = [
    { id: 'REC-001', date: '2023-08-15', service: 'Root Canal Treatment', doctor: 'Dr. Amit Sharma', attachments: 3 },
    { id: 'REC-002', date: '2023-09-10', service: 'Teeth Whitening', doctor: 'Dr. Priya Mehta', attachments: 1 },
    { id: 'REC-003', date: '2023-10-01', service: 'Initial X-Ray Scan', doctor: 'AI System', attachments: 1 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Medical Records Vault</h2>
          <p className="text-sm text-slate-500">Secure storage for your dental history</p>
        </div>
        <button className="flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-xl hover:bg-slate-200 font-bold transition-all">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
          <span>Upload Record</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Record ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Treatment / Service</th>
              <th className="px-6 py-4">Doctor</th>
              <th className="px-6 py-4 text-center">Files</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {records.map(rec => (
              <tr key={rec.id} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 font-bold text-teal-600">{rec.id}</td>
                <td className="px-6 py-4 text-slate-600">{rec.date}</td>
                <td className="px-6 py-4 font-medium text-slate-800">{rec.service}</td>
                <td className="px-6 py-4 text-slate-600">{rec.doctor}</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-slate-100 text-slate-500 px-2.5 py-1 rounded-lg text-xs font-bold group-hover:bg-teal-100 group-hover:text-teal-700">
                    {rec.attachments} files
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-teal-600 hover:underline font-bold">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Records;
