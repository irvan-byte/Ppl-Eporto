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
    judul: '[Judul Rancangan Pembelajaran]',
    mataPelajaran: '[Mata Pelajaran]',
    kelas: '[Kelas]',
    materi: '[Materi Pembelajaran]',
    tujuanPembelajaran: '[Tujuan Pembelajaran]',
    tanggalPelaksanaan: '[Tanggal Pelaksanaan]',
    linkDokumen: '[Link Dokumen Rancangan Pembelajaran]',
  },
  video: {
    linkVideo: '[Link Video Praktik Mengajar]',
    deskripsi: 'Video pelaksanaan praktik mengajar mandiri dari rancangan pembelajaran yang dipilih.',
    tanggalPelaksanaan: '[Tanggal Pelaksanaan]',
  },
  analisis: {
    label: 'Mengapa produk ini dipilih sebagai produk terbaik?',
    items: [
      { label: 'Alasan pemilihan', placeholder: '[Tuliskan alasan pemilihan produk ini...]' },
      { label: 'Kekuatan rancangan', placeholder: '[Tuliskan kekuatan rancangan...]' },
      { label: 'Kesesuaian antara rancangan dan pelaksanaan', placeholder: '[Tuliskan kesesuaian rancangan dan pelaksanaan...]' },
      { label: 'Keberhasilan pelaksanaan', placeholder: '[Tuliskan keberhasilan pelaksanaan...]' },
      { label: 'Respons peserta didik', placeholder: '[Tuliskan respons peserta didik...]' },
      { label: 'Kendala', placeholder: '[Tuliskan kendala yang ditemukan...]' },
      { label: 'Perbaikan', placeholder: '[Tuliskan perbaikan yang diperlukan...]' },
      { label: 'Pembelajaran yang diperoleh', placeholder: '[Tuliskan pembelajaran yang diperoleh...]' },
    ],
  },
};
