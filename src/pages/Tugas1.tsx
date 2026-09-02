import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Accordion from '@/components/Accordion';
import DocumentCard from '@/components/DocumentCard';
import AnalysisSection from '@/components/AnalysisSection';
import { taskComponents } from '@/data/tasksData';

export default function Tugas1() {
  return (
    <div>
      <PageHeader
        label="TUGAS 1"
        title="Tugas 1 — E-Portfolio 1"
        subtitle="Analisis terhadap 6 komponen praktik mengajar mandiri: rancangan, materi, media, video, kegiatan nonmengajar, dan instrumen penilaian."
      />

      {/* Overview cards */}
      <section className="container-academic py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {taskComponents.map((comp) => (
            <a
              key={comp.id}
              href={`#${comp.id}`}
              className="card card-hover p-5 group block"
            >
              <span className="text-2xl font-bold text-slate-300 font-mono group-hover:text-cyan-400 transition-colors">
                {comp.nomor}
              </span>
              <h3 className="mt-2 font-semibold text-sm text-slate-900 group-hover:text-cyan-700 transition-colors">
                {comp.judul}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">{comp.deskripsi}</p>
            </a>
          ))}
        </div>

        {/* Detailed accordion sections */}
        <div className="space-y-6">
          {taskComponents.map((comp) => (
            <div key={comp.id} id={comp.id} className="scroll-mt-20">
              <Accordion
                nomor={comp.nomor}
                title={comp.judul}
                defaultOpen={comp.id === 'rancangan'}
              >
                <div className="space-y-5">
                  {/* Deskripsi */}
                  <p className="text-sm text-slate-600 leading-relaxed">{comp.deskripsi}</p>

                  {/* Produk / Bukti */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Produk / Bukti</h4>
                    <DocumentCard
                      nama={comp.produkNama}
                      deskripsi={comp.produkDeskripsi}
                      tanggal={comp.produkTanggal}
                      konteks={comp.produkKonteks}
                      linkDokumen={comp.linkDokumen}
                      linkDownload={comp.linkDownload || undefined}
                    />
                  </div>

                  {/* Tujuan, Analisis, Refleksi */}
                  <AnalysisSection
                    tujuan={comp.tujuan}
                    analisisItems={comp.analisisItems}
                    refleksiPertanyaan={comp.refleksiPertanyaan}
                    defaultOpen={false}
                  />
                </div>
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA to UTS */}
        <div className="mt-12 text-center">
          <Link to="/uts" className="btn-primary">
            Lihat Produk Terbaik UTS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
