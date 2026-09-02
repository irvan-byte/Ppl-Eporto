import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';

interface AccordionProps {
  title: string;
  nomor?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  badge?: string;
}

export default function Accordion({ title, nomor, children, defaultOpen = false, badge }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          {nomor && (
            <span className="text-xs font-bold text-cyan-600 font-mono tracking-widest shrink-0">{nomor}</span>
          )}
          <h3 className="font-semibold text-slate-900 text-base truncate">{title}</h3>
          {badge && (
            <span className="label-small text-amber-600 bg-amber-50 px-2 py-0.5 rounded shrink-0">{badge}</span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="border-t border-slate-100 p-5 animate-fade-in">{children}</div>
      )}
    </div>
  );
}
