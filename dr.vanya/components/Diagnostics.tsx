
import React, { useState } from 'react';
import { Language, DiagnosisResult } from '../types';
import { LANGUAGES, COLORS } from '../constants';
import { analyzeDentalImage } from '../services/geminiService';

const Diagnostics: React.FC<{ lang: Language; onScanResult: (res: DiagnosisResult) => void }> = ({ lang, onScanResult }) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const t = LANGUAGES[lang];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = async () => {
    if (!image) return;
    setLoading(true);
    try {
      const base64 = image.split(',')[1];
      const res = await analyzeDentalImage(base64, lang);
      setResult(res);
      onScanResult(res);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-6">{t.uploadXray}</h3>
        
        {!image ? (
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-12 h-12 mb-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-slate-500">Click to upload or drag and drop</p>
              <p className="text-xs text-slate-400 mt-1">JPG, PNG, DICOM (Max 5MB)</p>
            </div>
            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          </label>
        ) : (
          <div className="relative inline-block w-full max-w-lg">
            <img src={image} alt="Preview" className="rounded-xl shadow-md border border-slate-200" />
            <button 
              onClick={() => { setImage(null); setResult(null); }}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={handleScan}
            disabled={!image || loading}
            className={`px-8 py-3 rounded-xl font-bold text-white transition-all transform active:scale-95 flex items-center justify-center mx-auto space-x-2 ${
              !image || loading ? 'bg-slate-300 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 shadow-teal-200 shadow-lg'
            }`}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Analyzing...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                <span>{t.scanBtn}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {result && (
        <div className="bg-white p-8 rounded-2xl border border-teal-100 shadow-xl animate-in zoom-in-95 duration-300">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-2xl font-bold text-slate-800">AI Diagnosis Result</h4>
            <div className={`px-4 py-1 rounded-full text-sm font-bold uppercase ${
              result.severity === 'high' ? 'bg-red-100 text-red-600' : 
              result.severity === 'medium' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'
            }`}>
              {result.severity} Priority
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-slate-500 mb-1">Detected Condition</p>
            <p className="text-xl font-semibold text-slate-800">{result.condition}</p>
          </div>

          <div className="mb-6">
            <p className="text-slate-500 mb-2">Recommendations</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {result.recommendations.map((rec, i) => (
                <li key={i} className="flex items-center space-x-2 text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="text-teal-500">✓</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-400">
            <span>AI Confidence: {(result.confidence * 100).toFixed(1)}%</span>
            <span>Generated on {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diagnostics;
