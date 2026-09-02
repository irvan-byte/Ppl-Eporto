import { Star, FileText, Video, BookOpen, GraduationCap, Calendar, Target } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import DocumentCard from '@/components/DocumentCard';
import VideoCard from '@/components/VideoCard';
import Accordion from '@/components/Accordion';
import { utsData } from '@/data/utsData';

export default function UTS() {
  return (
    <div>
      <PageHeader
        label="UTS"
        title="UTS — E-Portfolio Praktik Mengajar Mandiri Siklus 1"
        subtitle="Produk terbaik dari praktik mengajar mandiri Siklus 1, dipilih untuk tugas UTS."
        badge="PRODUK UTS"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200">
          <Star className="w-4 h-4 text-cyan-600 fill-cyan-600" />
          <span className="text-sm font-semibold text-cyan-700">{utsData.judul}</span>
        </div>
      </PageHeader>

      <section className="container-academic py-12 space-y-8">
        {/* Rancangan Pembelajaran */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
              <FileText className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <span className="label-small text-cyan-600">01</span>
              <h2 className="section-title">Rancangan / Perencanaan Pembelajaran</h2>
            </div>
          </div>

          {/* Info grid */}
          <div className="card p-6 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: FileText, label: 'Judul', value: utsData.rancangan.judul },
                { icon: BookOpen, label: 'Mata Pelajaran', value: utsData.rancangan.mataPelajaran },
                { icon: GraduationCap, label: 'Kelas', value: utsData.rancangan.kelas },
                { icon: BookOpen, label: 'Materi', value: utsData.rancangan.materi },
                { icon: Calendar, label: 'Tanggal Pelaksanaan', value: utsData.rancangan.tanggalPelaksanaan },
                { icon: Target, label: 'Tujuan Pembelajaran', value: utsData.rancangan.tujuanPembelajaran },
              ].map((item) => {
                const isPlaceholder = item.value.startsWith('[');
                return (
                  <div key={item.label}>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                    <div className={`text-sm ${isPlaceholder ? 'font-mono text-slate-400' : 'font-medium text-slate-900'}`}>
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <DocumentCard
            nama="Rancangan Pembelajaran Lengkap"
            deskripsi="Dokumen rancangan pembelajaran yang dipilih sebagai produk terbaik Siklus 1."
            tanggal={utsData.rancangan.tanggalPelaksanaan}
            konteks="Produk UTS — Siklus 1"
            linkDokumen={utsData.rancangan.linkDokumen}
          />
        </div>

        {/* Video Pelaksanaan */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
              <Video className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <span className="label-small text-cyan-600">02</span>
              <h2 className="section-title">Video Pelaksanaan Praktik Mengajar</h2>
            </div>
          </div>
          <VideoCard
            judul="Video Pelaksanaan Praktik Mengajar"
            linkVideo={utsData.video.linkVideo}
            deskripsi={utsData.video.deskripsi}
            tanggal={utsData.video.tanggalPelaksanaan}
          />
          <p className="text-xs text-slate-500 mt-2 ml-1">
            Video ini merupakan pelaksanaan dari rancangan pembelajaran yang dipilih.
          </p>
        </div>

        {/* Analisis pemilihan produk terbaik */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
              <Star className="w-5 h-5 text-cyan-600 fill-cyan-600" />
            </div>
            <div>
              <span className="label-small text-cyan-600">03</span>
              <h2 className="section-title">Analisis Produk Terbaik</h2>
            </div>
          </div>

          <Accordion
            title={utsData.analisis.label}
            badge="ANALISIS"
            defaultOpen={true}
          >
            <div className="space-y-4">
              {utsData.analisis.items.map((item, idx) => (
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
          </Accordion>
        </div>
      </section>
    </div>
  );
}
