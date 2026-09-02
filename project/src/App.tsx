import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import PraktikMengajar from '@/pages/PraktikMengajar';
import SiklusDetail from '@/pages/SiklusDetail';
import Tugas1 from '@/pages/Tugas1';
import UTS from '@/pages/UTS';
import UAS from '@/pages/UAS';
import Refleksi from '@/pages/Refleksi';
import Dokumentasi from '@/pages/Dokumentasi';
import Kontak from '@/pages/Kontak';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/praktik-mengajar" element={<PraktikMengajar />} />
            <Route path="/praktik-mengajar/siklus/:nomor" element={<SiklusDetail />} />
            <Route path="/tugas-1" element={<Tugas1 />} />
            <Route path="/uts" element={<UTS />} />
            <Route path="/uas" element={<UAS />} />
            <Route path="/refleksi" element={<Refleksi />} />
            <Route path="/dokumentasi" element={<Dokumentasi />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
