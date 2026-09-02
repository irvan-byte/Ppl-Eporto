import { Link } from 'react-router-dom';
import { Mail, Building2, User, ArrowLeft, BookOpen } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/data/profile';

export default function Kontak() {
  const items = [
    { icon: User, label: 'Nama', value: profile.nama },
    { icon: BookOpen, label: 'PPG', value: profile.program },
    { icon: Mail, label: 'Email', value: profile.email },
    { icon: Building2, label: 'Institusi', value: profile.institusi },
  ];

  return (
    <div>
      <PageHeader
        label="KONTAK"
        title="Kontak"
        subtitle="Informasi kontak untuk pertanyaan terkait E-Portfolio PPL."
      />

      <section className="container-narrow py-12">
        <div className="card p-8">
          <div className="space-y-5">
            {items.map((item) => {
              const isPlaceholder = item.value.startsWith('[');
              return (
                <div key={item.label} className="flex items-center gap-4 pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide">{item.label}</dt>
                    <dd className={`mt-0.5 text-base ${isPlaceholder ? 'font-mono text-slate-400' : 'font-medium text-slate-900'}`}>
                      {item.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Home
          </Link>
        </div>
      </section>
    </div>
  );
}
