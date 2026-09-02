import { FileText, ExternalLink, Download, Calendar, Info } from 'lucide-react';

interface DocumentCardProps {
  nama: string;
  deskripsi: string;
  tanggal: string;
  konteks: string;
  linkDokumen: string;
  linkDownload?: string;
}

export default function DocumentCard({
  nama,
  deskripsi,
  tanggal,
  konteks,
  linkDokumen,
  linkDownload,
}: DocumentCardProps) {
  const isPlaceholder = linkDokumen.startsWith('[');

  return (
    <div className="card p-5">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5 text-cyan-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 text-base">{nama}</h4>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">{deskripsi}</p>

          <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {tanggal}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              {konteks}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={isPlaceholder ? undefined : linkDokumen}
              target={isPlaceholder ? undefined : '_blank'}
              rel={isPlaceholder ? undefined : 'noopener noreferrer'}
              className={`btn-primary text-xs ${isPlaceholder ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Lihat Dokumen
            </a>
            {linkDownload && (
              <a
                href={linkDownload.startsWith('[') ? undefined : linkDownload}
                className={`btn-secondary text-xs ${linkDownload.startsWith('[') ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
            )}
          </div>

          {isPlaceholder && (
            <p className="mt-3 text-xs font-mono text-slate-400 bg-slate-50 border border-dashed border-slate-200 rounded px-2 py-1">
              {linkDokumen}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
