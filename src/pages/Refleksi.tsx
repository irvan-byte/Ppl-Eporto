import { Lightbulb, Quote } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { reflectionItems, reflectionClosing } from '@/data/reflectionData';

export default function Refleksi() {
  return (
    <div>
      <PageHeader
        label="REFLEKSI"
        title="Refleksi Praktik Mengajar"
        subtitle="Refleksi personal dan akademik atas proses pelaksanaan praktik mengajar mandiri."
      />

      <section className="container-narrow py-12">
        <div className="space-y-6">
          {reflectionItems.map((item) => (
            <div key={item.no} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-cyan-600 font-mono">{item.no}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 text-base mb-2">{item.pertanyaan}</h3>
                  <div className="text-sm text-slate-400 font-mono bg-slate-50 border border-dashed border-slate-200 rounded-lg px-3 py-3 leading-relaxed">
                    {item.placeholder}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing reflection */}
        <div className="mt-10 relative">
          <div className="card p-8 bg-gradient-to-br from-cyan-50/50 to-white border-l-4 border-l-cyan-500">
            <Quote className="w-8 h-8 text-cyan-200 mb-4" />
            <p className="text-lg text-slate-800 leading-relaxed font-medium italic">
              "{reflectionClosing}"
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 flex items-start gap-3 text-sm text-slate-500 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p>
            Bagian refleksi ini menggunakan placeholder. Ganti teks placeholder dengan
            refleksi Anda sendiri pada file <span className="font-mono">src/data/reflectionData.ts</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
