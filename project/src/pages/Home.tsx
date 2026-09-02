import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, Video, FileText, Lightbulb, Camera, ClipboardCheck,
  GraduationCap, Sparkles, BarChart3,
} from 'lucide-react';
import { profile } from '@/data/profile';

const features = [
  { icon: FileText, label: 'Rancangan Pembelajaran', desc: 'Perencanaan pembelajaran sistematis', to: '/tugas-1' },
  { icon: BookOpen, label: 'Materi Pembelajaran', desc: 'Materi yang digunakan di kelas', to: '/tugas-1' },
  { icon: Video, label: 'Video Praktik', desc: 'Pelaksanaan praktik mengajar', to: '/tugas-1' },
  { icon: BarChart3, label: 'Analisis Mendalam', desc: 'Setiap produk dianalisis secara kritis', to: '/tugas-1' },
  { icon: Lightbulb, label: 'Refleksi Diri', desc: 'Evaluasi dan perbaikan berkelanjutan', to: '/refleksi' },
  { icon: Camera, label: 'Dokumentasi', desc: 'Bukti visual kegiatan PPL', to: '/dokumentasi' },
];

const taskCards = [
  {
    badge: 'Tugas 1',
    title: 'E-Portfolio 1',
    desc: 'Analisis 6 komponen praktik mengajar mandiri: rancangan, materi, media, video, kegiatan nonmengajar, dan instrumen penilaian.',
    to: '/tugas-1',
    color: 'border-cyan-500',
  },
  {
    badge: 'UTS',
    title: 'E-Portfolio 1 — Siklus 1',
    desc: 'Produk terbaik praktik mengajar mandiri Siklus 1: rancangan pembelajaran dan video pelaksanaan.',
    to: '/uts',
    color: 'border-cyan-500',
  },
  {
    badge: 'UAS',
    title: 'E-Portfolio 2 — Siklus 2–4',
    desc: 'Produk terbaik dari praktik mengajar mandiri Siklus 2 sampai Siklus 4.',
    to: '/uas',
    color: 'border-slate-300',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0891b2 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="container-academic py-16 sm:py-24 relative">
          <div className="max-w-3xl">
            <span className="label-small text-cyan-600 bg-cyan-50 px-3 py-1.5 rounded-full">
              <Sparkles className="w-3 h-3" />
              E-PORTFOLIO PPL &middot; PPG INFORMATIKA
            </span>
            <h1 className="mt-6 text-3xl sm:text-5xl font-bold text-slate-900 leading-[1.15]">
              Praktik Mengajar sebagai Ruang untuk{' '}
              <span className="text-cyan-600">Belajar, Mencoba, dan Merefleksikan.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Dokumentasi dan refleksi pelaksanaan Praktik Pengalaman Lapangan melalui
              praktik mengajar mandiri Siklus 1.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div>
                <div className="text-lg font-semibold text-slate-900">{profile.nama}</div>
                <div className="text-sm text-slate-500">{profile.program}</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/tugas-1" className="btn-primary">
                Jelajahi E-Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/uts" className="btn-secondary">
                <GraduationCap className="w-4 h-4" />
                Lihat Produk UTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="container-academic py-16">
        <div className="max-w-3xl">
          <span className="label-small text-cyan-600 mb-3 block">Tentang E-Portfolio Ini</span>
          <p className="text-lg text-slate-700 leading-relaxed">
            E-Portfolio ini mendokumentasikan proses perencanaan, pelaksanaan, analisis, dan
            refleksi selama Praktik Mengajar Mandiri PPL. Setiap produk tidak hanya ditampilkan
            sebagai bukti, tetapi juga dianalisis berdasarkan tujuan pembelajaran, kebutuhan
            peserta didik, proses pelaksanaan, serta perbaikan yang dapat dilakukan.
          </p>
        </div>
      </section>

      {/* Tasks overview */}
      <section className="bg-white border-y border-slate-200">
        <div className="container-academic py-16">
          <div className="text-center mb-10">
            <span className="label-small text-cyan-600 mb-2 block">Struktur Tugas</span>
            <h2 className="section-title">Tiga Komponen Penilaian Utama</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {taskCards.map((task) => (
              <Link
                key={task.badge}
                to={task.to}
                className={`card card-hover p-6 border-t-4 ${task.color} group block`}
              >
                <span className="label-small text-cyan-600">{task.badge}</span>
                <h3 className="mt-3 font-bold text-lg text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {task.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{task.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-600">
                  Lihat detail
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="container-academic py-16">
        <div className="text-center mb-10">
          <span className="label-small text-cyan-600 mb-2 block">Yang Tersedia</span>
          <h2 className="section-title">Komponen E-Portfolio</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <Link
              key={f.label}
              to={f.to}
              className="card card-hover p-5 group block"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center mb-3
                              group-hover:bg-cyan-100 transition-colors">
                <f.icon className="w-5 h-5 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-sm text-slate-900 group-hover:text-cyan-700 transition-colors">
                {f.label}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="container-academic py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Siap mengeksplorasi perjalanan praktik mengajar?
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto">
            Mulai dari profil guru, praktik mengajar mandiri, hingga refleksi diri.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/profil" className="btn-primary">Mulai dari Profil</Link>
            <Link to="/praktik-mengajar" className="btn-secondary bg-transparent border-slate-600 text-slate-300 hover:text-white hover:border-cyan-400">
              Praktik Mengajar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
