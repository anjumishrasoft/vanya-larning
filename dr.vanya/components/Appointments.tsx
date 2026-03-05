
import React, { useState } from 'react';
import { Language, Appointment } from '../types';

const Appointments: React.FC<{ lang: Language }> = ({ lang }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: '1', doctorName: 'Dr. Amit Sharma', specialty: 'General Dentist', date: '2023-10-25', time: '10:30 AM', type: 'Regular', status: 'Upcoming' },
    { id: '2', doctorName: 'Dr. Priya Mehta', specialty: 'Orthodontist', date: '2023-11-02', time: '02:00 PM', type: 'Consultation', status: 'Upcoming' }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Manage Appointments</h2>
        <button className="bg-teal-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-teal-700 shadow-lg shadow-teal-100 transition-all">+ Book New Visit</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {appointments.map(appt => (
            <div key={appt.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-teal-300 transition-colors group">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-teal-600 font-bold border border-slate-100 group-hover:bg-teal-50">
                  {appt.date.split('-')[2]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{appt.doctorName}</h4>
                  <p className="text-xs text-slate-500">{appt.specialty} • {appt.type}</p>
                  <div className="flex items-center mt-1 text-xs font-medium text-teal-600">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {appt.time}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors border border-slate-100">
                  Reschedule
                </button>
                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-slate-100">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">Quick Calendar</h3>
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 mb-2">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: 31 }).map((_, i) => (
              <div key={i} className={`py-2 text-sm rounded-lg cursor-pointer transition-colors ${i + 1 === 25 ? 'bg-teal-600 text-white font-bold' : 'hover:bg-slate-50 text-slate-600'}`}>
                {i + 1}
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
            <h4 className="text-sm font-bold text-orange-800">Clinic Alert</h4>
            <p className="text-xs text-orange-700 mt-1">Dr. Sharma is unavailable on Oct 26th due to a seminar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
