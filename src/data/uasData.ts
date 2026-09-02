// ============================================================
// DATA UAS — E-PORTFOLIO 2 (SIKLUS 2–4)
// ============================================================
// Edit file ini untuk mengisi produk terbaik UAS.
// Saat ini sebagian besar data masih placeholder karena
// Siklus 2–4 belum dilaksanakan.
// ============================================================

export interface UasSiklusData {
  nomor: number;
  judul: string;
  status: 'disiapkan' | 'berjalan' | 'selesai';
  informasi: {
    mataPelajaran: string;
    kelas: string;
    materi: string;
    tanggal: string;
  };
  rancangan: {
    linkDokumen: string;
  };
  video: {
    linkVideo: string;
    deskripsi: string;
  };
  analisisItems: { label: string; placeholder: string }[];
  refleksi: string[];
  dokumentasi: string;
}

export const uasSiklus: UasSiklusData[] = [
  {
    nomor: 2,
    judul: 'Siklus 2',
    status: 'disiapkan',
    informasi: {
      mataPelajaran: '[Mata Pelajaran]',
      kelas: '[Kelas]',
      materi: '[Materi Pembelajaran]',
      tanggal: '[Tanggal Pelaksanaan]',
    },
    rancangan: {
      linkDokumen: '[Link Rancangan Pembelajaran]',
    },
    video: {
      linkVideo: '[Link Video Praktik Mengajar]',
      deskripsi: 'Video pelaksanaan praktik mengajar mandiri Siklus 2.',
    },
    analisisItems: [
      { label: 'Latar belakang pemilihan produk', placeholder: '[Tuliskan latar belakang...]' },
      { label: 'Tujuan pembelajaran', placeholder: '[Tuliskan tujuan pembelajaran...]' },
      { label: 'Kesesuaian rancangan dengan kebutuhan peserta didik', placeholder: '[Tuliskan kesesuaian...]' },
      { label: 'Kekuatan rancangan', placeholder: '[Tuliskan kekuatan rancangan...]' },
      { label: 'Kelemahan rancangan', placeholder: '[Tuliskan kelemahan rancangan...]' },
      { label: 'Kesesuaian rancangan dengan pelaksanaan', placeholder: '[Tuliskan kesesuaian rancangan dan pelaksanaan...]' },
      { label: 'Analisis pelaksanaan', placeholder: '[Tuliskan analisis pelaksanaan...]' },
      { label: 'Respons peserta didik', placeholder: '[Tuliskan respons peserta didik...]' },
      { label: 'Kendala yang ditemukan', placeholder: '[Tuliskan kendala...]' },
      { label: 'Solusi/perbaikan', placeholder: '[Tuliskan solusi/perbaikan...]' },
      { label: 'Hasil yang diperoleh', placeholder: '[Tuliskan hasil yang diperoleh...]' },
      { label: 'Pembelajaran bagi guru', placeholder: '[Tuliskan pembelajaran bagi guru...]' },
      { label: 'Perbaikan untuk praktik berikutnya', placeholder: '[Tuliskan perbaikan...]' },
    ],
    refleksi: [
      'Refleksi diri Siklus 2 akan ditambahkan setelah pelaksanaan praktik.',
    ],
    dokumentasi: '[Link Dokumentasi Siklus 2]',
  },
  {
    nomor: 3,
    judul: 'Siklus 3',
    status: 'disiapkan',
    informasi: {
      mataPelajaran: '[Mata Pelajaran]',
      kelas: '[Kelas]',
      materi: '[Materi Pembelajaran]',
      tanggal: '[Tanggal Pelaksanaan]',
    },
    rancangan: {
      linkDokumen: '[Link Rancangan Pembelajaran]',
    },
    video: {
      linkVideo: '[Link Video Praktik Mengajar]',
      deskripsi: 'Video pelaksanaan praktik mengajar mandiri Siklus 3.',
    },
    analisisItems: [
      { label: 'Latar belakang pemilihan produk', placeholder: '[Tuliskan latar belakang...]' },
      { label: 'Tujuan pembelajaran', placeholder: '[Tuliskan tujuan pembelajaran...]' },
      { label: 'Kesesuaian rancangan dengan kebutuhan peserta didik', placeholder: '[Tuliskan kesesuaian...]' },
      { label: 'Kekuatan rancangan', placeholder: '[Tuliskan kekuatan rancangan...]' },
      { label: 'Kelemahan rancangan', placeholder: '[Tuliskan kelemahan rancangan...]' },
      { label: 'Kesesuaian rancangan dengan pelaksanaan', placeholder: '[Tuliskan kesesuaian rancangan dan pelaksanaan...]' },
      { label: 'Analisis pelaksanaan', placeholder: '[Tuliskan analisis pelaksanaan...]' },
      { label: 'Respons peserta didik', placeholder: '[Tuliskan respons peserta didik...]' },
      { label: 'Kendala yang ditemukan', placeholder: '[Tuliskan kendala...]' },
      { label: 'Solusi/perbaikan', placeholder: '[Tuliskan solusi/perbaikan...]' },
      { label: 'Hasil yang diperoleh', placeholder: '[Tuliskan hasil yang diperoleh...]' },
      { label: 'Pembelajaran bagi guru', placeholder: '[Tuliskan pembelajaran bagi guru...]' },
      { label: 'Perbaikan untuk praktik berikutnya', placeholder: '[Tuliskan perbaikan...]' },
    ],
    refleksi: [
      'Refleksi diri Siklus 3 akan ditambahkan setelah pelaksanaan praktik.',
    ],
    dokumentasi: '[Link Dokumentasi Siklus 3]',
  },
  {
    nomor: 4,
    judul: 'Siklus 4',
    status: 'disiapkan',
    informasi: {
      mataPelajaran: '[Mata Pelajaran]',
      kelas: '[Kelas]',
      materi: '[Materi Pembelajaran]',
      tanggal: '[Tanggal Pelaksanaan]',
    },
    rancangan: {
      linkDokumen: '[Link Rancangan Pembelajaran]',
    },
    video: {
      linkVideo: '[Link Video Praktik Mengajar]',
      deskripsi: 'Video pelaksanaan praktik mengajar mandiri Siklus 4.',
    },
    analisisItems: [
      { label: 'Latar belakang pemilihan produk', placeholder: '[Tuliskan latar belakang...]' },
      { label: 'Tujuan pembelajaran', placeholder: '[Tuliskan tujuan pembelajaran...]' },
      { label: 'Kesesuaian rancangan dengan kebutuhan peserta didik', placeholder: '[Tuliskan kesesuaian...]' },
      { label: 'Kekuatan rancangan', placeholder: '[Tuliskan kekuatan rancangan...]' },
      { label: 'Kelemahan rancangan', placeholder: '[Tuliskan kelemahan rancangan...]' },
      { label: 'Kesesuaian rancangan dengan pelaksanaan', placeholder: '[Tuliskan kesesuaian rancangan dan pelaksanaan...]' },
      { label: 'Analisis pelaksanaan', placeholder: '[Tuliskan analisis pelaksanaan...]' },
      { label: 'Respons peserta didik', placeholder: '[Tuliskan respons peserta didik...]' },
      { label: 'Kendala yang ditemukan', placeholder: '[Tuliskan kendala...]' },
      { label: 'Solusi/perbaikan', placeholder: '[Tuliskan solusi/perbaikan...]' },
      { label: 'Hasil yang diperoleh', placeholder: '[Tuliskan hasil yang diperoleh...]' },
      { label: 'Pembelajaran bagi guru', placeholder: '[Tuliskan pembelajaran bagi guru...]' },
      { label: 'Perbaikan untuk praktik berikutnya', placeholder: '[Tuliskan perbaikan...]' },
    ],
    refleksi: [
      'Refleksi diri Siklus 4 akan ditambahkan setelah pelaksanaan praktik.',
    ],
    dokumentasi: '[Link Dokumentasi Siklus 4]',
  },
];

export const uasProdukTerbaik = {
  label: 'PRODUK UAS',
  judul: 'Produk Terbaik E-Portfolio 2',
  subtitle: 'Produk terbaik dari praktik mengajar mandiri Siklus 2–4',
  siklusDipilih: '[Siklus Terpilih]',
  catatan:
    'Produk terbaik akan dipilih dari salah satu siklus (Siklus 2–4) ' +
    'setelah seluruh praktik mengajar mandiri dilaksanakan.',
};
