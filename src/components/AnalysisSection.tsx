import { useState } from 'react';
import { ChevronDown, Target, BarChart3, Lightbulb } from 'lucide-react';

interface AnalysisItem {
  label: string;
  placeholder: string;
}

interface AnalysisSectionProps {
  tujuan?: string;
  analisisItems: AnalysisItem[];
  refleksiPertanyaan?: string[];
  defaultOpen?: boolean;
}

export default function AnalysisSection({
  tujuan,
  analisisItems,
  refleksiPertanyaan,
  defaultOpen = false,
}: AnalysisSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="space-y-4">
      {/* Tujuan */}
      {tujuan && (
        <div className="card p-5 border-l-4 border-l-cyan-500">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">Tujuan</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{tujuan}</p>
            </div>
          </div>
        </div>
      )}

      {/* Analisis — accordion */}
      <div className="card overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-cyan-600 shrink-0" />
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">Analisis Mendalam</h4>
              <p className="text-xs text-slate-500 mt-0.5">{analisisItems.length} poin analisis</p>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        {open && (
          <div className="border-t border-slate-100 p-5 space-y-4 animate-fade-in">
            {analisisItems.map((item, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  {idx + 1}. {item.label}
                </label>
                <div className="text-sm text-slate-400 font-mono bg-slate-50 border border-dashed border-slate-200 rounded-lg px-3 py-2.5 leading-relaxed">
                  {item.placeholder}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Refleksi */}
      {refleksiPertanyaan && refleksiPertanyaan.length > 0 && (
        <div className="card p-5 border-l-4 border-l-amber-400">
          <div className="flex items-start gap-3 mb-3">
            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <h4 className="font-semibold text-slate-900 text-sm">Refleksi</h4>
          </div>
          <div className="space-y-3 ml-8">
            {refleksiPertanyaan.map((q, idx) => (
              <div key={idx}>
                <p className="text-sm font-medium text-slate-700 mb-1">{q}</p>
                <div className="text-sm text-slate-400 font-mono bg-slate-50 border border-dashed border-slate-200 rounded-lg px-3 py-2">
                  [Tuliskan refleksi Anda di sini...]
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
