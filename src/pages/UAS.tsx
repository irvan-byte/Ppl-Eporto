import { Star, ChevronRight, FileText, Video, BookOpen, GraduationCap, Calendar, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Accordion from '@/components/Accordion';
import DocumentCard from '@/components/DocumentCard';
import VideoCard from '@/components/VideoCard';
import StatusBadge from '@/components/StatusBadge';
import { uasSiklus, uasProdukTerbaik } from '@/data/uasData';

export default function UAS() {
  return (
    <div>
      <PageHeader
        label="UAS"
        title="UAS — E-Portfolio 2"
        subtitle="Praktik Mengajar Mandiri Siklus 2–4. Produk terbaik dari Siklus 2 sampai Siklus 4 dipilih untuk tugas UAS."
        badge="E-PORTFOLIO 2"
      />

      {/* Overview cards */}
      <section className="container-academic py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {uasSiklus.map((siklus) => (
            <Link
              key={siklus.nomor}
              to={`/praktik-mengajar/siklus/${siklus.nomor}`}
              className="card card-hover p-5 block group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-slate-300 font-mono group-hover:text-cyan-400 transition-colors">
                  0{siklus.nomor - 1}
                </span>
                <StatusBadge status={siklus.status} />
              </div>
              <h3 className="font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
                {siklus.judul}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{siklus.deskripsi}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan-600">
                Detail
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Produk Terbaik UAS */}
        <div className="card p-6 border-2 border-slate-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <span className="label-small text-slate-500">{uasProdukTerbaik.label}</span>
              <h2 className="mt-1.5 font-bold text-lg text-slate-900">{uasProdukTerbaik.judul}</h2>
              <p className="mt-1 text-sm text-slate-600">{uasProdukTerbaik.subtitle}</p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">{uasProdukTerbaik.catatan}</p>
              <div className="mt-3 text-sm">
                <span className="text-slate-500">Siklus terpilih: </span>
                <span className="font-mono text-slate-400">{uasProdukTerbaik.siklusDipilih}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Per-siklus detail accordions */}
        <div className="space-y-6">
          {uasSiklus.map((siklus) => (
            <Accordion
              key={siklus.nomor}
              nomor={`0${siklus.nomor - 1}`}
              title={`Detail ${siklus.judul}`}
            >
              <div className="space-y-5">
                {/* Informasi */}
                <div className="card p-5 bg-slate-50">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3">Informasi Praktik</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { icon: BookOpen, label: 'Mata Pelajaran', value: siklus.informasi.mataPelajaran },
                      { icon: GraduationCap, label: 'Kelas', value: siklus.informasi.kelas },
                      { icon: FileText, label: 'Materi', value: siklus.informasi.materi },
                      { icon: Calendar, label: 'Tanggal', value: siklus.informasi.tanggal },
                    ].map((item) => {
                      const isPlaceholder = item.value.startsWith('[');
                      return (
                        <div key={item.label}>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-0.5">
                            <item.icon className="w-3.5 h-3.5" />
                            {item.label}
                          </div>
                          <div className={`text-xs ${isPlaceholder ? 'font-mono text-slate-400' : 'font-medium text-slate-900'}`}>
                            {item.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Rancangan */}
                <DocumentCard
                  nama={`Rancangan Pembelajaran ${siklus.judul}`}
                  deskripsi="Dokumen rancangan pembelajaran lengkap."
                  tanggal={siklus.informasi.tanggal}
                  konteks={siklus.judul}
                  linkDokumen={siklus.rancangan.linkDokumen}
                />

                {/* Video */}
                <VideoCard
                  judul={`Video Praktik Mengajar ${siklus.judul}`}
                  linkVideo={siklus.video.linkVideo}
                  deskripsi={siklus.video.deskripsi}
                  tanggal={siklus.informasi.tanggal}
                />

                {/* Dokumentasi */}
                <div className="card p-5">
                  <div className="flex items-center gap-3 text-slate-500">
                    <Camera className="w-5 h-5" />
                    <span className="font-mono text-sm">{siklus.dokumentasi}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">Dokumentasi akan ditambahkan setelah pelaksanaan praktik.</p>
                </div>

                {/* Analisis */}
                <div className="card p-5">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3">Analisis Mendalam</h4>
                  <div className="space-y-3">
                    {siklus.analisisItems.map((item, idx) => (
                      <div key={idx}>
                        <label className="block text-xs font-medium text-slate-600 mb-1">
                          {idx + 1}. {item.label}
                        </label>
                        <div className="text-xs text-slate-400 font-mono bg-slate-50 border border-dashed border-slate-200 rounded px-2.5 py-2">
                          {item.placeholder}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Refleksi */}
                <div className="card p-5 border-l-4 border-l-amber-400">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Refleksi Diri</h4>
                  {siklus.refleksi.map((r, idx) => (
                    <p key={idx} className="text-sm text-slate-500">{r}</p>
                  ))}
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </section>
    </div>
  );
}
