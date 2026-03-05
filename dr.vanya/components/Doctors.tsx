
import React from 'react';
import { Language } from '../types';

const Doctors: React.FC<{ lang: Language }> = ({ lang }) => {
  const specialists = [
    { name: 'Dr. Amit Sharma', specialty: 'General Dentist', exp: '12 Yrs', rating: 4.8, distance: '1.2 km', available: 'Today' },
    { name: 'Dr. Priya Mehta', specialty: 'Orthodontist', exp: '8 Yrs', rating: 4.9, distance: '2.5 km', available: 'Tomorrow' },
    { name: 'Dr. Rohan Joshi', specialty: 'Oral Surgeon', exp: '15 Yrs', rating: 4.7, distance: '4.0 km', available: 'Oct 28' },
    { name: 'Dr. Sneha Patil', specialty: 'Pedodontist', exp: '6 Yrs', rating: 4.9, distance: '3.1 km', available: 'Today' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Find Your Specialist</h2>
        <div className="flex space-x-2">
          <input type="text" placeholder="Search by name or specialty..." className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none w-full md:w-64" />
          <button className="bg-slate-100 p-2 rounded-xl text-slate-500 hover:text-teal-600 transition-colors border border-slate-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialists.map((doc, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group border-b-4 border-b-transparent hover:border-b-teal-500">
            <div className="w-20 h-20 bg-slate-100 rounded-2xl mx-auto mb-4 flex items-center justify-center text-teal-600 font-extrabold text-2xl border border-slate-100 group-hover:bg-teal-50 transition-colors">
              {doc.name.split(' ')[1][0]}
            </div>
            <div className="text-center mb-4">
              <h4 className="font-bold text-slate-800 group-hover:text-teal-600 transition-colors">{doc.name}</h4>
              <p className="text-xs text-slate-500 font-medium">{doc.specialty}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              <div className="bg-slate-50 p-2 rounded-lg text-center">
                <span className="block text-slate-700 text-xs">{doc.exp}</span> Exp
              </div>
              <div className="bg-slate-50 p-2 rounded-lg text-center">
                <span className="block text-teal-600 text-xs">★ {doc.rating}</span> Rating
              </div>
            </div>
            <button className="w-full bg-teal-600 text-white py-2 rounded-xl text-sm font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-100">Book Slot</button>
            <p className="text-center text-[10px] text-slate-400 mt-3 font-medium">Available: <span className="text-emerald-500 font-bold">{doc.available}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
