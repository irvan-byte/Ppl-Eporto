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
    linkVideo: 'https://drive.google.com/file/d/1zB85xk8zyZDNkN0wDYDZBSiHEVFUkWdb/view?usp=sharing',
    deskripsi: 'Video pelaksanaan praktik mengajar mandiri dengan pendekatan secara emosional.',
    tanggalPelaksanaan: 'Agustus 2026',
  },
  
analisis: {
  label: 'Mengapa produk ini dipilih sebagai produk terbaik?',
  items: [
    {
      label: 'Alasan pemilihan',
      placeholder: 'Rancangan pembelajaran ini dipilih sebagai produk terbaik karena memiliki alur pembelajaran yang terstruktur, tujuan pembelajaran yang jelas, serta dirancang untuk memberikan pengalaman belajar yang aktif dan bermakna bagi peserta didik.'
    },
    {
      label: 'Kekuatan rancangan',
      placeholder: 'Kekuatan rancangan terletak pada keterkaitan antara tujuan pembelajaran, kegiatan pembelajaran, dan asesmen. Setiap tahap pembelajaran disusun secara sistematis sehingga kegiatan yang dilakukan tetap berfokus pada pencapaian tujuan pembelajaran.'
    },
    {
      label: 'Kesesuaian antara rancangan dan pelaksanaan',
      placeholder: 'Secara umum, pelaksanaan pembelajaran dapat mengikuti rancangan yang telah dibuat. Tahapan kegiatan pembelajaran dilaksanakan sesuai dengan alur yang direncanakan, meskipun terdapat beberapa penyesuaian berdasarkan kondisi dan respons peserta didik selama proses pembelajaran.'
    },
    {
      label: 'Keberhasilan pelaksanaan',
      placeholder: 'Pelaksanaan pembelajaran dapat dikatakan berhasil karena kegiatan pembelajaran dapat berlangsung dengan baik dan peserta didik dapat mengikuti tahapan kegiatan yang diberikan. Tujuan pembelajaran juga menjadi acuan dalam mengarahkan proses pembelajaran hingga tahap evaluasi.'
    },
    {
      label: 'Respons peserta didik',
      placeholder: 'Peserta didik menunjukkan respons yang cukup baik selama proses pembelajaran. Mereka mengikuti kegiatan yang diberikan dan terlibat dalam proses pembelajaran, terutama ketika diberikan kesempatan untuk berinteraksi, berdiskusi, dan mengerjakan aktivitas yang berkaitan dengan materi.'
    },
    {
      label: 'Kendala',
      placeholder: 'Beberapa kendala yang ditemukan selama pelaksanaan antara lain pengelolaan waktu, perbedaan tingkat pemahaman peserta didik, serta perlunya melakukan penyesuaian terhadap kondisi kelas. Kendala tersebut menjadi bagian penting dari pengalaman dalam melaksanakan pembelajaran secara nyata.'
    },
    {
      label: 'Perbaikan',
      placeholder: 'Perbaikan yang diperlukan adalah meningkatkan pengelolaan waktu, memberikan instruksi yang lebih jelas dan bertahap, serta menyiapkan alternatif kegiatan untuk mengantisipasi perbedaan kemampuan dan respons peserta didik.'
    },
    {
      label: 'Pembelajaran yang diperoleh',
      placeholder: 'Melalui pelaksanaan rancangan pembelajaran ini, saya memperoleh pengalaman bahwa keberhasilan pembelajaran tidak hanya bergantung pada kelengkapan perencanaan, tetapi juga pada kemampuan guru dalam mengelola kelas, memahami kebutuhan peserta didik, dan melakukan penyesuaian selama proses pembelajaran berlangsung.'
    },

    ],
  },
};
