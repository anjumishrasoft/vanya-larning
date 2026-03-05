
import React, { useState } from 'react';
import { AppView, Language, DiagnosisResult } from './types';
import { ICONS, LANGUAGES } from './constants';
import Dashboard from './components/Dashboard';
import Diagnostics from './components/Diagnostics';
import Consultation from './components/Consultation';
import HealthTracker from './components/HealthTracker';
import CarePlanView from './components/CarePlanView';
import Appointments from './components/Appointments';
import Records from './components/Records';
import Billing from './components/Billing';
import Doctors from './components/Doctors';
import Analytics from './components/Analytics';
import Education from './components/Education';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [lang, setLang] = useState<Language>('en');
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const t = LANGUAGES[lang];

  const SidebarItem = ({ view, icon: Icon, label }: { view: AppView, icon: any, label: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
        currentView === view ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'
      }`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 ${currentView === view ? 'text-white' : 'text-slate-400'}`} />
      <span className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-opacity duration-300 ${!isSidebarOpen ? 'opacity-0 w-0' : 'opacity-100'}`}>
        {label}
      </span>
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-50 font-inter overflow-hidden">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-slate-200 shadow-xl z-20 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100 flex-shrink-0">
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            {isSidebarOpen && <span className="text-lg font-extrabold text-slate-800 tracking-tight">{t.title}</span>}
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1.5 mt-2 overflow-y-auto custom-scrollbar">
          <SidebarItem view={AppView.DASHBOARD} icon={ICONS.Dashboard} label={t.dashboard} />
          <div className="pt-4 pb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isSidebarOpen ? 'Care & Support' : '•••'}</div>
          <SidebarItem view={AppView.DIAGNOSTICS} icon={ICONS.Camera} label={t.diagnostics} />
          <SidebarItem view={AppView.CONSULTATION} icon={ICONS.Chat} label={t.consultation} />
          <SidebarItem view={AppView.APPOINTMENTS} icon={ICONS.Calendar} label={t.appointments} />
          <SidebarItem view={AppView.TRACKER} icon={ICONS.History} label={t.tracker} />
          <SidebarItem view={AppView.CARE_PLAN} icon={ICONS.Chart} label={t.carePlan} />
          
          <div className="pt-4 pb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isSidebarOpen ? 'Clinic Services' : '•••'}</div>
          <SidebarItem view={AppView.RECORDS} icon={ICONS.Book} label={t.records} />
          <SidebarItem view={AppView.DOCTORS} icon={ICONS.Users} label={t.doctors} />
          <SidebarItem view={AppView.BILLING} icon={ICONS.Wallet} label={t.billing} />
          <SidebarItem view={AppView.ANALYTICS} icon={ICONS.Chart} label={t.analytics} />
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
           {isSidebarOpen && (
             <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              className="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm text-slate-600 outline-none focus:ring-2 focus:ring-teal-500 mb-4"
             >
               <option value="en">English</option>
               <option value="hi">हिंदी</option>
               <option value="mr">मराठी</option>
             </select>
           )}
           <button 
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
             className="w-full flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-teal-600 hover:bg-teal-50 transition-colors"
           >
             {isSidebarOpen ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg> : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>}
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            {LANGUAGES[lang][currentView.toLowerCase() as keyof typeof LANGUAGES['en']] || t.dashboard}
          </h1>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
               <span className="text-teal-600 font-bold text-sm">450 DentaCoins 💎</span>
            </div>
            <button className="relative p-2 text-slate-400 hover:text-teal-600 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 p-0.5 shadow-lg shadow-teal-100 cursor-pointer">
              <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-teal-600 font-extrabold text-xs">JD</div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto pb-24">
          {currentView === AppView.DASHBOARD && <Dashboard lang={lang} />}
          {currentView === AppView.DIAGNOSTICS && <Diagnostics lang={lang} onScanResult={setDiagnosis} />}
          {currentView === AppView.CONSULTATION && <Consultation lang={lang} />}
          {currentView === AppView.TRACKER && <HealthTracker lang={lang} />}
          {currentView === AppView.CARE_PLAN && <CarePlanView lang={lang} initialDiagnosis={diagnosis} />}
          {currentView === AppView.APPOINTMENTS && <Appointments lang={lang} />}
          {currentView === AppView.RECORDS && <Records lang={lang} />}
          {currentView === AppView.BILLING && <Billing lang={lang} />}
          {currentView === AppView.DOCTORS && <Doctors lang={lang} />}
          {currentView === AppView.ANALYTICS && <Analytics lang={lang} />}
          {currentView === AppView.EDUCATION && <Education lang={lang} />}
        </div>
      </main>
    </div>
  );
};

export default App;
