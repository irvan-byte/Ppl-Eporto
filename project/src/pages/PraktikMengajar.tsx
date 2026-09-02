import { Link } from 'react-router-dom';
import {
  ClipboardList, BookOpen, Monitor, Presentation, ClipboardCheck,
  BarChart3, Lightbulb, RefreshCw, ArrowRight, Star, ChevronRight,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { SectionHeader } from '@/components/PageHeader';
import { timelineSteps, siklusData, pplTimelineOverview } from '@/data/pplData';
import StatusBadge from '@/components/StatusBadge';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList, BookOpen, Monitor, Presentation, ClipboardCheck, BarChart3, Lightbulb, RefreshCw,
};

export default function PraktikMengajar() {
  return (
    <div>
      <PageHeader
        label="PRAKTIK MENGAJAR"
        title="Praktik Mengajar Mandiri"
        subtitle="Konteks dan proses pelaksanaan Praktik Pengalaman Lapangan (PPL) melalui praktik mengajar mandiri."
      />

      {/* Timeline of process */}
      <section className="container-academic py-12">
        <SectionHeader
          nomor="PROSES"
          title="Proses Praktik Mengajar"
          subtitle="Delapan tahap yang dilalui dalam setiap siklus praktik mengajar mandiri."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {timelineSteps.map((step) => {
            const Icon = iconMap[step.icon] ?? ClipboardList;
            return (
              <div key={step.no} className="card p-5 relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {step.no}
                  </div>
                  <Icon className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900">{step.judul}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.deskripsi}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PPL overview timeline */}
      <section className="bg-white border-y border-slate-200">
        <div className="container-academic py-12">
          <SectionHeader
            nomor="TIMELINE PPL"
            title="Perkembangan Praktik Mengajar"
            subtitle="Alur praktik mengajar mandiri dari Siklus 1 hingga UAS."
          />
          <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0">
            {pplTimelineOverview.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-2 sm:flex-1">
                <div className="card p-4 sm:flex-1 text-center">
                  <div className="text-xs font-bold text-cyan-600">{item.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  <div className="text-[11px] text-slate-400 mt-1.5 font-medium">&rarr; {item.target}</div>
                </div>
                {idx < pplTimelineOverview.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-slate-300 shrink-0 hidden sm:block rotate-90 sm:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Siklus 1 & UTS product card */}
      <section className="container-academic py-12">
        <SectionHeader
          nomor="SIKLUS 1"
          title="Praktik Mengajar Mandiri — Siklus 1"
          subtitle="Siklus 1 merupakan praktik mengajar mandiri yang menjadi dasar pemilihan produk terbaik untuk tugas UTS."
        />

        {/* Featured UTS product card */}
        <Link
          to="/uts"
          className="card card-hover p-6 border-2 border-cyan-500 bg-gradient-to-br from-cyan-50/50 to-white block group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-600 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="label-small text-cyan-600">PRODUK TERBAIK</span>
                <span className="text-xs text-slate-400">UTS</span>
              </div>
              <h3 className="mt-1.5 font-bold text-lg text-slate-900 group-hover:text-cyan-700 transition-colors">
                Produk Terbaik Praktik Mengajar Mandiri Siklus 1
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Rancangan pembelajaran dan video pelaksanaan praktik mengajar yang dipilih sebagai produk UTS.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan-600">
                Lihat produk UTS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* All siklus cards */}
      <section className="bg-white border-t border-slate-200">
        <div className="container-academic py-12">
          <SectionHeader
            nomor="SEMUA SIKLUS"
            title="Siklus Praktik Mengajar"
            subtitle="Setiap siklus dapat dibuka untuk melihat detail rancangan, video, dan dokumentasi."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siklusData.map((siklus) => (
              <Link
                key={siklus.nomor}
                to={`/praktik-mengajar/siklus/${siklus.nomor}`}
                className="card card-hover p-5 block group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {siklus.judul}
                  </h3>
                  <StatusBadge status={siklus.status} />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{siklus.deskripsi}</p>
                <div className="mt-3 text-xs text-slate-500 space-y-1">
                  <div>Mata Pelajaran: <span className="font-mono text-slate-400">{siklus.mataPelajaran}</span></div>
                  <div>Kelas: <span className="font-mono text-slate-400">{siklus.kelas}</span></div>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan-600">
                  Detail siklus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
