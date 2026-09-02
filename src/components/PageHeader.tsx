import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  badge?: string;
}

export default function PageHeader({ label, title, subtitle, children, badge }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="container-academic py-12 sm:py-16">
        {badge && (
          <span className="label-small text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full mb-4 inline-flex">
            {badge}
          </span>
        )}
        {label && !badge && (
          <span className="label-small text-cyan-600 mb-4 block">{label}</span>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  nomor?: string;
  title: string;
  subtitle?: string;
  to?: string;
  linkLabel?: string;
}

export function SectionHeader({ nomor, title, subtitle, to, linkLabel }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <div>
        {nomor && (
          <span className="text-xs font-bold text-cyan-600 font-mono tracking-widest">{nomor}</span>
        )}
        <h2 className="section-title mt-1">{title}</h2>
        {subtitle && <p className="text-sm text-slate-600 mt-2 max-w-2xl">{subtitle}</p>}
      </div>
      {to && linkLabel && (
        <Link to={to} className="btn-ghost shrink-0">
          {linkLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
