
import React from 'react';
import { Language, Invoice } from '../types';

const Billing: React.FC<{ lang: Language }> = ({ lang }) => {
  const invoices: Invoice[] = [
    { id: 'INV-7892', date: '2023-10-20', service: 'Regular Checkup', amount: 1500, status: 'Paid' },
    { id: 'INV-7901', date: '2023-10-24', service: 'Digital Scan Analysis', amount: 500, status: 'Pending' },
    { id: 'INV-7555', date: '2023-08-15', service: 'Root Canal Therapy', amount: 12000, status: 'Insurance Claimed' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-teal-600 to-emerald-500 p-6 rounded-2xl text-white shadow-lg shadow-teal-100">
          <p className="text-sm opacity-80 mb-1">DentaVision Wallet</p>
          <p className="text-3xl font-extrabold tracking-tight">₹ 4,250</p>
          <div className="mt-4 flex space-x-2">
            <button className="flex-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-sm transition-colors">Add Funds</button>
            <button className="flex-1 bg-white text-teal-600 hover:bg-teal-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-sm">Transfer</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
          <p className="text-sm text-slate-500 mb-1">Unclaimed Benefits</p>
          <p className="text-3xl font-extrabold text-slate-800">₹ 8,500</p>
          <button className="text-teal-600 text-xs font-bold mt-2 hover:underline">Check Policy Coverage →</button>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
          <p className="text-sm text-slate-500 mb-1">Active EMI Plans</p>
          <p className="text-3xl font-extrabold text-orange-500">1 Plan</p>
          <p className="text-xs text-slate-400 mt-1">Next payment in 12 days</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-slate-800">Recent Invoices</h3>
          <button className="text-teal-600 text-sm font-bold">Download All PDF</button>
        </div>
        <div className="divide-y divide-slate-100">
          {invoices.map(inv => (
            <div key={inv.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 border border-teal-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{inv.service}</h4>
                  <p className="text-xs text-slate-400">{inv.id} • {inv.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-extrabold text-slate-800">₹ {inv.amount.toLocaleString()}</p>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                  inv.status === 'Paid' ? 'bg-green-100 text-green-700' :
                  inv.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-teal-100 text-teal-700'
                }`}>
                  {inv.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Billing;
