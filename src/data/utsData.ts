// ============================================================
// DATA UTS — E-PORTFOLIO 1 (SIKLUS 1)
// ============================================================
// Edit file ini untuk mengisi produk terbaik UTS.
// ============================================================

export interface UtsData {
  label: string;
  judul: string;
  subtitle: string;
  rancangan: {
    judul: string;
    mataPelajaran: string;
    kelas: string;
    materi: string;
    tujuanPembelajaran: string;
    tanggalPelaksanaan: string;
    linkDokumen: string;
  };
  video: {
    linkVideo: string;
    deskripsi: string;
    tanggalPelaksanaan: string;
  };
  analisis: {
    label: string;
    items: { label: string; placeholder: string }[];
  };
}

export const utsData: UtsData = {
  label: 'PRODUK UTS',
  judul: 'Produk Terbaik Praktik Mengajar Mandiri Siklus 1',
  subtitle: 'E-Portfolio 1 — Praktik Mengajar Mandiri Siklus 1',
  rancangan: {
    judul: 'Modul ajar berpikir komputasional',
    mataPelajaran: 'TIK',
    kelas: '9',
    materi: 'Berpikir Komputasional',
    tujuanPembelajaran: 'Memecahkan masalah besar lewat dekomposisi bagian kecil.Mengembangkan kemampuan berpikir kritis dan analitis.Merancang solusi inovatif dan kreatif.Melatih pola pikir algoritmik yang terstruktur.',
    tanggalPelaksanaan: 'September 2026',
    linkDokumen: 'https://drive.google.com/file/d/1TwhB0imlgi4juTHSESH5nRfc9daiFrOF/view?usp=sharing',
  },
  video: {
    linkVideo: '[Link Video Praktik Mengajar]',
    deskripsi: 'Video pelaksanaan praktik mengajar mandiri dari rancangan pembelajaran yang dipilih.',
    tanggalPelaksanaan: '[Tanggal Pelaksanaan]',
  },
};
