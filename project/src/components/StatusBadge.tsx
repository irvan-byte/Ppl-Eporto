import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface StatusBadgeProps {
  status: 'selesai' | 'berjalan' | 'disiapkan';
}

const config = {
  selesai: { label: 'Selesai', icon: CheckCircle2, color: 'text-success-600 bg-success-50' },
  berjalan: { label: 'Berjalan', icon: Clock, color: 'text-cyan-600 bg-cyan-50' },
  disiapkan: { label: 'Disiapkan', icon: Circle, color: 'text-slate-400 bg-slate-100' },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { label, icon: Icon, color } = config[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${color}`}>
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
}

interface CardLinkProps {
  to: string;
  nomor: string;
  judul: string;
  deskripsi: string;
  status?: 'selesai' | 'berjalan' | 'disiapkan';
}

export function CardLink({ to, nomor, judul, deskripsi, status }: CardLinkProps) {
  return (
    <Link to={to} className="card card-hover p-5 block group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-2xl font-bold text-slate-300 font-mono group-hover:text-cyan-400 transition-colors">
          {nomor}
        </span>
        {status && <StatusBadge status={status} />}
      </div>
      <h3 className="font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">{judul}</h3>
      <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{deskripsi}</p>
    </Link>
  );
}
