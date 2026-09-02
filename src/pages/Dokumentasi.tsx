import { useState } from 'react';
import { Camera, ImageOff } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import PlaceholderImage from '@/components/PlaceholderImage';
import { galleryCategories } from '@/data/documentationData';

export default function Dokumentasi() {
  const [active, setActive] = useState(galleryCategories[0].id);
  const current = galleryCategories.find((c) => c.id === active) ?? galleryCategories[0];

  return (
    <div>
      <PageHeader
        label="DOKUMENTASI"
        title="Galeri Dokumentasi PPL"
        subtitle="Dokumentasi visual kegiatan PPL, mencakup praktik mengajar, persiapan, media, kegiatan nonmengajar, asesmen, dan dokumentasi sekolah."
      />

      <section className="container-academic py-12">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === cat.id
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-cyan-300 hover:text-cyan-700'
              }`}
            >
              {cat.judul}
            </button>
          ))}
        </div>

        {/* Current category */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Camera className="w-5 h-5 text-cyan-600" />
            <h2 className="text-xl font-bold text-slate-900">{current.judul}</h2>
          </div>
          <p className="text-sm text-slate-600">{current.deskripsi}</p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.foto.map((foto, idx) => (
            <div key={idx} className="card overflow-hidden group">
              {foto.src ? (
                <img
                  src={foto.src}
                  alt={foto.caption}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <PlaceholderImage caption={foto.caption} aspect="video" />
              )}
              <div className="p-3">
                <p className="text-xs text-slate-500 truncate">{foto.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 flex items-start gap-3 text-sm text-slate-500 bg-slate-50 border border-slate-200 rounded-lg p-4">
          <ImageOff className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <p>
            Foto dokumentasi belum tersedia. Placeholder akan diganti dengan foto asli
            pada file <span className="font-mono">src/data/documentationData.ts</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
