import { Link } from 'react-router-dom';
import { GraduationCap, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="container-academic py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cyan-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-white">E-Portfolio PPL</div>
                <div className="text-[11px] text-slate-400">PPG Informatika</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dokumentasi dan refleksi pelaksanaan Praktik Pengalaman Lapangan melalui
              praktik mengajar mandiri.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigasi</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/profil" className="text-slate-400 hover:text-cyan-400 transition-colors">Profil Guru</Link>
              <Link to="/praktik-mengajar" className="text-slate-400 hover:text-cyan-400 transition-colors">Praktik Mengajar</Link>
              <Link to="/tugas-1" className="text-slate-400 hover:text-cyan-400 transition-colors">Tugas 1</Link>
              <Link to="/uts" className="text-slate-400 hover:text-cyan-400 transition-colors">UTS</Link>
              <Link to="/uas" className="text-slate-400 hover:text-cyan-400 transition-colors">UAS</Link>
              <Link to="/refleksi" className="text-slate-400 hover:text-cyan-400 transition-colors">Refleksi</Link>
              <Link to="/dokumentasi" className="text-slate-400 hover:text-cyan-400 transition-colors">Dokumentasi</Link>
              <Link to="/kontak" className="text-slate-400 hover:text-cyan-400 transition-colors">Kontak</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Identitas</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="font-medium text-slate-200">{profile.nama}</div>
              <div>{profile.program}</div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{profile.institusi}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {profile.nama} — E-Portfolio PPL PPG Informatika
          </p>
          <p className="text-xs text-slate-500">
            Tugas 1 &middot; UTS &middot; UAS
          </p>
        </div>
      </div>
    </footer>
  );
}
