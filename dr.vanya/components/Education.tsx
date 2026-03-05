
import React, { useState } from 'react';
import { Language } from '../types';
import { getAIConsultationResponse } from '../services/geminiService';

const Education: React.FC<{ lang: Language }> = ({ lang }) => {
  const [explaining, setExplaining] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const procedures = [
    { name: 'Root Canal Treatment', icon: '🦷', description: 'Removing infected tissue from inside the tooth.' },
    { name: 'Dental Implants', icon: '🔩', description: 'Permanent surgical solution for missing teeth.' },
    { name: 'Orthodontic Braces', icon: '🔗', description: 'Correcting alignment of teeth and jaws.' },
    { name: 'Wisdom Tooth Removal', icon: '✂️', description: 'Surgical extraction of impacted molars.' }
  ];

  const handleExplain = async (proc: string) => {
    setExplaining(proc);
    setLoading(true);
    try {
      const res = await getAIConsultationResponse(`Explain the procedure of ${proc} in detail for a patient to understand. Use simple words and tell me why it is important.`, lang);
      setExplanation(res);
    } catch (e) {
      setExplanation("Could not load explanation at this time.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-slate-800">Learn About Dental Health</h2>
        <p className="text-slate-500 mt-2">Interactive AI-powered tools to help you understand your dental journey and procedures.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {procedures.map((proc, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-teal-300 transition-all cursor-pointer group" onClick={() => handleExplain(proc.name)}>
             <div className="flex items-start space-x-4">
               <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{proc.icon}</div>
               <div>
                 <h4 className="font-bold text-slate-800 text-lg">{proc.name}</h4>
                 <p className="text-sm text-slate-500 mt-1">{proc.description}</p>
                 <button className="text-teal-600 text-xs font-bold mt-3 hover:underline">Explain Procedure AI →</button>
               </div>
             </div>
          </div>
        ))}
      </div>

      {explaining && (
        <div className="bg-white p-8 rounded-2xl border-2 border-teal-100 shadow-xl mt-12 animate-in zoom-in-95 duration-300 relative">
          <button onClick={() => setExplaining(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">✕</button>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-800">AI Explains: {explaining}</h3>
          </div>
          
          {loading ? (
            <div className="flex flex-col items-center py-12">
               <div className="animate-spin rounded-full h-10 w-10 border-4 border-teal-600 border-t-transparent"></div>
               <p className="mt-4 text-slate-500 font-medium">Generating visual explanation...</p>
            </div>
          ) : (
            <div className="prose prose-teal max-w-none">
               <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{explanation}</p>
               <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl text-center">
                    <span className="block text-2xl mb-2">⏱️</span>
                    <span className="block text-xs font-bold text-slate-500 uppercase">Duration</span>
                    <span className="text-sm font-bold text-slate-800">45-90 Mins</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-center">
                    <span className="block text-2xl mb-2">💊</span>
                    <span className="block text-xs font-bold text-slate-500 uppercase">Recovery</span>
                    <span className="text-sm font-bold text-slate-800">2-3 Days</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-center">
                    <span className="block text-2xl mb-2">😌</span>
                    <span className="block text-xs font-bold text-slate-500 uppercase">Comfort</span>
                    <span className="text-sm font-bold text-slate-800">Local Anesthesia</span>
                  </div>
               </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Education;
