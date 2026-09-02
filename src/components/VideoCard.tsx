import { Play, ExternalLink, Calendar } from 'lucide-react';

interface VideoCardProps {
  judul: string;
  linkVideo: string;
  deskripsi: string;
  tanggal: string;
}

export default function VideoCard({ judul, linkVideo, deskripsi, tanggal }: VideoCardProps) {
  const isPlaceholder = linkVideo.startsWith('[');
  const isYouTube = !isPlaceholder && (linkVideo.includes('youtube.com') || linkVideo.includes('youtu.be'));

  let embedUrl = '';
  if (isYouTube) {
    const match = linkVideo.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    embedUrl = match ? `https://www.youtube.com/embed/${match[1]}` : '';
  }

  return (
    <div className="card p-5">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
          <Play className="w-5 h-5 text-cyan-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 text-base">{judul}</h4>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">{deskripsi}</p>
          <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {tanggal}
            </span>
          </div>
        </div>
      </div>

      {/* Video embed or placeholder */}
      <div className="rounded-lg overflow-hidden bg-slate-900 aspect-video">
        {isYouTube && embedUrl ? (
          <iframe
            src={embedUrl}
            title={judul}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-3">
            <Play className="w-12 h-12 opacity-40" />
            <p className="font-mono text-sm">{linkVideo}</p>
          </div>
        )}
      </div>

      {!isPlaceholder && (
        <a
          href={linkVideo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs mt-4"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Buka Video
        </a>
      )}
    </div>
  );
}
