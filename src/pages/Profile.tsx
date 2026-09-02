import { User, BookOpen, School, GraduationCap, Users, Mail, Building2, Target, Heart, Compass } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/data/profile';

export default function Profile() {
  const infoItems = [
    { icon: User, label: 'Nama', value: profile.nama },
    { icon: BookOpen, label: 'Program PPG', value: profile.program },
    { icon: BookOpen, label: 'Bidang Studi', value: profile.bidangStudi },
    { icon: School, label: 'Sekolah Tempat Praktik', value: profile.sekolah },
    { icon: GraduationCap, label: 'Kelas', value: profile.kelas },
    { icon: Users, label: 'Peran dalam PPL', value: profile.peran },
    { icon: Users, label: 'Guru Pamong', value: profile.guruPamong },
    { icon: GraduationCap, label: 'Dosen Pembimbing', value: profile.dosenPembimbing },
  ];

  const sections = [
    { icon: User, title: 'Profil Singkat', content: profile.profilSingkat, color: 'cyan' },
    { icon: Heart, title: 'Filosofi Mengajar', content: profile.filosofiMengajar, color: 'amber' },
    { icon: Compass, title: 'Komitmen sebagai Guru', content: profile.komitmen, color: 'teal' },
    { icon: Target, title: 'Tujuan Praktik Mengajar', content: profile.tujuanPraktik, color: 'cyan' },
  ];

  const colorMap: Record<string, string> = {
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    amber: 'bg-amber-50 text-amber-600 border-amber-200',
    teal: 'bg-teal-50 text-teal-600 border-teal-200',
  };

  return (
    <div>
      <PageHeader
        label="PROFIL GURU"
        title="Profil Guru"
        subtitle="Identitas dan profil calon guru peserta Praktik Pengalaman Lapangan PPG Informatika."
      />

      <section className="container-academic py-12">
        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {infoItems.map((item) => {
            const isPlaceholder = item.value.startsWith('[');
            return (
              <div key={item.label} className="card p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-slate-500" />
                </div>
                <div className="min-w-0">
                  <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide">{item.label}</dt>
                  <dd className={`mt-0.5 text-sm font-medium ${isPlaceholder ? 'font-mono text-slate-400' : 'text-slate-900'}`}>
                    {item.value}
                  </dd>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sections.map((s) => (
            <div key={s.title} className="card p-6">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 border ${colorMap[s.color]}`}>
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        {/* Contact quick info */}
        <div className="mt-8 card p-6 bg-slate-50">
          <h3 className="font-semibold text-slate-900 text-base mb-4">Kontak</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-4 h-4 text-slate-400" />
              <span className={profile.email.startsWith('[') ? 'font-mono text-slate-400' : ''}>{profile.email}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Building2 className="w-4 h-4 text-slate-400" />
              <span className={profile.institusi.startsWith('[') ? 'font-mono text-slate-400' : ''}>{profile.institusi}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
