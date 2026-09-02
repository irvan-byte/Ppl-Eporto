import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen, GraduationCap, FileText, Video, Camera } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import DocumentCard from '@/components/DocumentCard';
import VideoCard from '@/components/VideoCard';
import { siklusData } from '@/data/pplData';

export default function SiklusDetail() {
  const { nomor } = useParams();
  const siklus = siklusData.find((s) => s.nomor === Number(nomor));

  if (!siklus) {
    return (
      <div className="container-academic py-20 text-center">
        <h2 className="text-xl font-semibold text-slate-900">Siklus tidak ditemukan</h2>
        <Link to="/praktik-mengajar" className="btn-primary mt-4">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Praktik Mengajar
        </Link>
      </div>
    );
  }

  const isPrepared = siklus.status === 'disiapkan';

  return (
    <div>
      <PageHeader
        label="PRAKTIK MENGAJAR"
        title={siklus.judul}
        subtitle={siklus.deskripsi}
        badge={isPrepared ? 'Disiapkan' : undefined}
      >
        <Link to="/praktik-mengajar" className="btn-ghost">
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Praktik Mengajar
        </Link>
      </PageHeader>

      <section className="container-academic py-12 space-y-8">
        {/* Info */}
        <div className="card p-6">
          <h2 className="font-semibold text-slate-900 text-lg mb-4">Informasi Praktik</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, label: 'Mata Pelajaran', value: siklus.mataPelajaran },
              { icon: GraduationCap, label: 'Kelas', value: siklus.kelas },
              { icon: FileText, label: 'Materi', value: siklus.materi },
              { icon: Calendar, label: 'Tanggal', value: siklus.tanggal },
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

        {/* Rancangan */}
        <div>
          <h2 className="section-title mb-4">Rancangan / Perencanaan Pembelajaran</h2>
          <DocumentCard
            nama={`Rancangan Pembelajaran ${siklus.judul}`}
            deskripsi="Dokumen rancangan pembelajaran lengkap untuk praktik mengajar mandiri."
            tanggal={siklus.tanggal}
            konteks={`Digunakan pada ${siklus.judul}`}
            linkDokumen={siklus.linkRancangan}
          />
        </div>

        {/* Video */}
        <div>
          <h2 className="section-title mb-4">Video Pelaksanaan</h2>
          <VideoCard
            judul={`Video Praktik Mengajar ${siklus.judul}`}
            linkVideo={siklus.linkVideo}
            deskripsi={`Video pelaksanaan praktik mengajar mandiri ${siklus.judul}.`}
            tanggal={siklus.tanggal}
          />
        </div>

        {/* Dokumentasi */}
        <div>
          <h2 className="section-title mb-4">Dokumentasi</h2>
          <div className="card p-6">
            <div className="flex items-center gap-3 text-slate-500">
              <Camera className="w-5 h-5" />
              <span className="font-mono text-sm">{siklus.linkDokumentasi}</span>
            </div>
            {isPrepared && (
              <p className="mt-3 text-sm text-slate-400">
                Dokumentasi akan ditambahkan setelah pelaksanaan praktik.
              </p>
            )}
          </div>
        </div>

        {/* Link to UTS/UAS */}
        {siklus.nomor === 1 ? (
          <Link to="/uts" className="card card-hover p-5 border-l-4 border-l-cyan-500 block group">
            <div className="flex items-center justify-between">
              <div>
                <span className="label-small text-cyan-600">PRODUK UTS</span>
                <h3 className="mt-1 font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  Lihat Produk Terbaik Siklus 1 (UTS)
                </h3>
              </div>
              <ArrowLeft className="w-5 h-5 text-slate-400 rotate-180 group-hover:text-cyan-600 transition-colors" />
            </div>
          </Link>
        ) : (
          <Link to="/uas" className="card card-hover p-5 border-l-4 border-l-slate-300 block group">
            <div className="flex items-center justify-between">
              <div>
                <span className="label-small text-slate-500">PRODUK UAS</span>
                <h3 className="mt-1 font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  Lihat Produk Terbaik Siklus 2–4 (UAS)
                </h3>
              </div>
              <ArrowLeft className="w-5 h-5 text-slate-400 rotate-180 group-hover:text-cyan-600 transition-colors" />
            </div>
          </Link>
        )}
      </section>
    </div>
  );
}
