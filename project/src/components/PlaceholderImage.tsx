import { ImageOff } from 'lucide-react';

interface PlaceholderImageProps {
  caption: string;
  className?: string;
  aspect?: 'video' | 'square' | 'wide';
}

export default function PlaceholderImage({ caption, className = '', aspect = 'square' }: PlaceholderImageProps) {
  const aspectClass = aspect === 'video' ? 'aspect-video' : aspect === 'wide' ? 'aspect-[4/3]' : 'aspect-square';

  return (
    <div
      className={`${aspectClass} bg-slate-50 border border-dashed border-slate-300 rounded-lg
                  flex flex-col items-center justify-center text-slate-400 gap-2 ${className}`}
    >
      <ImageOff className="w-8 h-8 opacity-40" />
      <p className="font-mono text-xs text-center px-2">{caption}</p>
    </div>
  );
}
