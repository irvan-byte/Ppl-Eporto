// ============================================================
// DATA PRAKTIK MENGAJAR (TIMELINE & SIKLUS)
// ============================================================
// Edit file ini untuk mengubah informasi siklus praktik mengajar.
// ============================================================

export interface TimelineStep {
  no: number;
  judul: string;
  deskripsi: string;
  icon: string;
}

export interface SiklusInfo {
  nomor: number;
  judul: string;
  status: 'selesai' | 'berjalan' | 'disiapkan';
  deskripsi: string;
  mataPelajaran: string;
  kelas: string;
  materi: string;
  tanggal: string;
  linkRancangan: string;
  linkVideo: string;
  linkDokumentasi: string;
}

export const timelineSteps: TimelineStep[] = [
  { no: 1, judul: 'Perencanaan', deskripsi: 'Analisis kebutuhan, penyusunan tujuan pembelajaran, dan rancangan pembelajaran.', icon: 'ClipboardList' },
  { no: 2, judul: 'Persiapan Materi', deskripsi: 'Pengembangan materi pembelajaran sesuai tujuan dan karakteristik peserta didik.', icon: 'BookOpen' },
  { no: 3, judul: 'Pengembangan Media', deskripsi: 'Pemilihan dan pembuatan media pembelajaran yang mendukung pencapaian tujuan.', icon: 'Monitor' },
  { no: 4, judul: 'Pelaksanaan', deskripsi: 'Pelaksanaan praktik mengajar mandiri di kelas.', icon: 'Presentation' },
  { no: 5, judul: 'Asesmen', deskripsi: 'Pelaksanaan asesmen untuk mengukur ketercapaian tujuan pembelajaran.', icon: 'ClipboardCheck' },
  { no: 6, judul: 'Analisis', deskripsi: 'Analisis mendalam terhadap produk dan pelaksanaan praktik mengajar.', icon: 'BarChart3' },
  { no: 7, judul: 'Refleksi', deskripsi: 'Refleksi diri atas proses pembelajaran yang telah dilakukan.', icon: 'Lightbulb' },
  { no: 8, judul: 'Perbaikan', deskripsi: 'Perencanaan perbaikan untuk praktik mengajar berikutnya.', icon: 'RefreshCw' },
];

export const siklusData: SiklusInfo[] = [
  {
    nomor: 1,
    judul: 'Siklus 1',
    status: 'berjalan',
    deskripsi:
      'Praktik mengajar mandiri pertama yang menjadi dasar penyusunan E-Portfolio 1 (UTS). ' +
      'Siklus ini fokus pada penerapan rancangan pembelajaran di kelas nyata.',
    mataPelajaran: '[Mata Pelajaran]',
    kelas: '[Kelas]',
    materi: '[Materi Pembelajaran]',
    tanggal: '[Tanggal Pelaksanaan]',
    linkRancangan: '[Link Rancangan Pembelajaran]',
    linkVideo: '[Link Video Praktik Mengajar]',
    linkDokumentasi: '[Link Dokumentasi]',
  },
  {
    nomor: 2,
    judul: 'Siklus 2',
    status: 'disiapkan',
    deskripsi:
      'Praktik mengajar mandiri kedua. Siklus ini disiapkan untuk E-Portfolio 2 (UAS). ' +
      'Data akan ditambahkan setelah pelaksanaan praktik.',
    mataPelajaran: '[Mata Pelajaran]',
    kelas: '[Kelas]',
    materi: '[Materi Pembelajaran]',
    tanggal: '[Tanggal Pelaksanaan]',
    linkRancangan: '[Link Rancangan Pembelajaran]',
    linkVideo: '[Link Video Praktik Mengajar]',
    linkDokumentasi: '[Link Dokumentasi]',
  },
  {
    nomor: 3,
    judul: 'Siklus 3',
    status: 'disiapkan',
    deskripsi:
      'Praktik mengajar mandiri ketiga. Siklus ini disiapkan untuk E-Portfolio 2 (UAS). ' +
      'Data akan ditambahkan setelah pelaksanaan praktik.',
    mataPelajaran: '[Mata Pelajaran]',
    kelas: '[Kelas]',
    materi: '[Materi Pembelajaran]',
    tanggal: '[Tanggal Pelaksanaan]',
    linkRancangan: '[Link Rancangan Pembelajaran]',
    linkVideo: '[Link Video Praktik Mengajar]',
    linkDokumentasi: '[Link Dokumentasi]',
  },
  {
    nomor: 4,
    judul: 'Siklus 4',
    status: 'disiapkan',
    deskripsi:
      'Praktik mengajar mandiri keempat. Siklus ini disiapkan untuk E-Portfolio 2 (UAS). ' +
      'Data akan ditambahkan setelah pelaksanaan praktik.',
    mataPelajaran: '[Mata Pelajaran]',
    kelas: '[Kelas]',
    materi: '[Materi Pembelajaran]',
    tanggal: '[Tanggal Pelaksanaan]',
    linkRancangan: '[Link Rancangan Pembelajaran]',
    linkVideo: '[Link Video Praktik Mengajar]',
    linkDokumentasi: '[Link Dokumentasi]',
  },
];

export const pplTimelineOverview = [
  { label: 'Siklus 1', desc: 'Praktik Mengajar Mandiri Pertama', target: 'UTS / E-Portfolio 1' },
  { label: 'Siklus 2', desc: 'Praktik Mengajar Mandiri Kedua', target: 'UAS / E-Portfolio 2' },
  { label: 'Siklus 3', desc: 'Praktik Mengajar Mandiri Ketiga', target: 'UAS / E-Portfolio 2' },
  { label: 'Siklus 4', desc: 'Praktik Mengajar Mandiri Keempat', target: 'UAS / E-Portfolio 2' },
];
