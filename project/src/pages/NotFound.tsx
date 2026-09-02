import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center container-academic">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8 text-slate-300" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-slate-600">Halaman yang Anda cari tidak tersedia.</p>
        <Link to="/" className="btn-primary mt-6">
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}
