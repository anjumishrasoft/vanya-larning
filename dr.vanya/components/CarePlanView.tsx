
import React, { useState, useEffect } from 'react';
import { Language, DiagnosisResult, CarePlan } from '../types';
import { generateCarePlan } from '../services/geminiService';

const CarePlanView: React.FC<{ lang: Language; initialDiagnosis: DiagnosisResult | null }> = ({ lang, initialDiagnosis }) => {
  const [plan, setPlan] = useState<CarePlan | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlan = async () => {
      setLoading(true);
      try {
        const historyStr = initialDiagnosis 
          ? `Patient has ${initialDiagnosis.condition} with ${initialDiagnosis.severity} severity.` 
          : "General maintenance for a healthy patient.";
        const res = await generateCarePlan(historyStr, lang);
        setPlan(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlan();
  }, [initialDiagnosis, lang]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-64 space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent"></div>
      <p className="text-slate-500 font-medium">Generating your AI Personalized Care Plan...</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-700">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6">AI Personalized Care Plan</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-teal-700 font-bold mb-4 flex items-center">
              <span className="bg-teal-100 p-1 rounded mr-2">🦷</span>
              Daily Routine
            </h4>
            <ul className="space-y-3">
              {plan?.dailyRoutine.map((item, i) => (
                <li key={i} className="flex items-start text-slate-600 text-sm">
                  <span className="text-teal-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-700 font-bold mb-4 flex items-center">
              <span className="bg-emerald-100 p-1 rounded mr-2">🍏</span>
              Dietary Advice
            </h4>
            <ul className="space-y-3">
              {plan?.dietaryAdvice.map((item, i) => (
                <li key={i} className="flex items-start text-slate-600 text-sm">
                  <span className="text-emerald-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 p-4 bg-teal-50 border border-teal-100 rounded-xl">
          <h4 className="font-bold text-teal-800 mb-1">Follow-up Instruction</h4>
          <p className="text-teal-700 text-sm">{plan?.followUp}</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 shadow-sm transition-all">
          Download PDF
        </button>
        <button className="px-6 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 shadow-md shadow-teal-100 transition-all">
          Share with Dentist
        </button>
      </div>
    </div>
  );
};

export default CarePlanView;
