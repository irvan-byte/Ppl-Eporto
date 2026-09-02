// ============================================================
// DATA TUGAS 1 — ANALISIS KOMPONEN PRAKTIK MENGAJAR MANDIRI
// ============================================================
// Edit file ini untuk mengisi analisis setiap komponen.
// Field "analisis" dan "refleksi" berisi panduan pertanyaan
// yang dapat Anda isi dengan analisis Anda sendiri.
// ============================================================

export interface AnalysisSubItem {
  label: string;
  placeholder: string;
}

export interface TaskComponent {
  id: string;
  nomor: string;
  judul: string;
  deskripsi: string;
  // Produk / Bukti
  produkNama: string;
  produkDeskripsi: string;
  produkTanggal: string;
  produkKonteks: string;
  linkDokumen: string;
  linkDownload: string;
  // Tujuan
  tujuan: string;
  // Analisis — struktur pertanyaan pemandu
  analisisItems: AnalysisSubItem[];
  // Refleksi
  refleksiPertanyaan: string[];
}

export const taskComponents: TaskComponent[] = [
  {
    id: 'rancangan',
    nomor: '01',
    judul: 'Analisis Rancangan/Perencanaan Pembelajaran',
    deskripsi:
      'Analisis mendalam terhadap produk rancangan/perencanaan pembelajaran yang digunakan ' +
      'dalam praktik mengajar mandiri.',
    produkNama: 'Rancangan Pembelajaran',
    produkDeskripsi: 'Dokumen rancangan pembelajaran lengkap untuk praktik mengajar mandiri Siklus 1.',
    produkTanggal: '[Tanggal]',
    produkKonteks: 'Digunakan pada praktik mengajar mandiri Siklus 1.',
    linkDokumen: '[Link Dokumen Rancangan Pembelajaran]',
    linkDownload: '[Link Download]',
    tujuan:
      'Rancangan pembelajaran disusun sebagai panduan pelaksanaan pembelajaran yang memuat ' +
      'tujuan pembelajaran, strategi, aktivitas peserta didik, dan rencana asesmen.',
    analisisItems: [
      { label: 'Analisis tujuan pembelajaran', placeholder: '[Tuliskan analisis tujuan pembelajaran di sini...]' },
      { label: 'Analisis materi', placeholder: '[Tuliskan analisis materi pembelajaran di sini...]' },
      { label: 'Analisis strategi/metode pembelajaran', placeholder: '[Tuliskan analisis strategi/metode di sini...]' },
      { label: 'Analisis aktivitas peserta didik', placeholder: '[Tuliskan analisis aktivitas peserta didik di sini...]' },
      { label: 'Analisis asesmen', placeholder: '[Tuliskan analisis asesmen di sini...]' },
      { label: 'Kesesuaian dengan kebutuhan peserta didik', placeholder: '[Tuliskan kesesuaian dengan kebutuhan peserta didik...]' },
      { label: 'Kekuatan rancangan', placeholder: '[Tuliskan kekuatan rancangan...]' },
      { label: 'Kekurangan rancangan', placeholder: '[Tuliskan kekurangan rancangan...]' },
      { label: 'Perbaikan setelah praktik', placeholder: '[Tuliskan perbaikan setelah praktik...]' },
    ],
    refleksiPertanyaan: [
      'Apa yang saya pelajari dari produk rancangan pembelajaran ini?',
      'Apa yang akan saya lakukan secara berbeda pada praktik berikutnya?',
    ],
  },
  {
    id: 'materi',
    nomor: '02',
    judul: 'Analisis Materi Pembelajaran',
    deskripsi:
      'Analisis terhadap materi pembelajaran yang digunakan, mencakup kesesuaian, struktur, ' +
      'kejelasan, dan respons peserta didik.',
    produkNama: 'Materi Pembelajaran',
    produkDeskripsi: 'Materi pembelajaran yang digunakan pada praktik mengajar mandiri.',
    produkTanggal: '[Tanggal]',
    produkKonteks: 'Digunakan pada praktik mengajar mandiri Siklus 1.',
    linkDokumen: '[Link Materi Pembelajaran]',
    linkDownload: '[Link Download]',
    tujuan:
      'Materi pembelajaran disusun untuk mendukung pencapaian tujuan pembelajaran dan ' +
      'sesuai dengan tingkat pemahaman peserta didik.',
    analisisItems: [
      { label: 'Kesesuaian materi dengan tujuan pembelajaran', placeholder: '[Tuliskan analisis kesesuaian materi...]' },
      { label: 'Kesesuaian tingkat kesulitan', placeholder: '[Tuliskan analisis tingkat kesulitan...]' },
      { label: 'Struktur dan sistematika materi', placeholder: '[Tuliskan analisis struktur materi...]' },
      { label: 'Kejelasan konsep', placeholder: '[Tuliskan analisis kejelasan konsep...]' },
      { label: 'Relevansi dengan peserta didik', placeholder: '[Tuliskan analisis relevansi...]' },
      { label: 'Kelebihan materi', placeholder: '[Tuliskan kelebihan materi...]' },
      { label: 'Kekurangan materi', placeholder: '[Tuliskan kekurangan materi...]' },
      { label: 'Respons peserta didik', placeholder: '[Tuliskan respons peserta didik...]' },
      { label: 'Perbaikan yang dapat dilakukan', placeholder: '[Tuliskan perbaikan materi...]' },
    ],
    refleksiPertanyaan: [
      'Apa yang saya pelajari dari materi pembelajaran ini?',
      'Apa yang akan saya lakukan secara berbeda pada praktik berikutnya?',
    ],
  },
  {
    id: 'media',
    nomor: '03',
    judul: 'Analisis Media Pembelajaran',
    deskripsi:
      'Analisis terhadap media pembelajaran yang digunakan, mencakup alasan pemilihan, ' +
      'kesesuaian, interaktivitas, dan kendala teknis.',
    produkNama: 'Media Pembelajaran',
    produkDeskripsi: 'Media pembelajaran (presentasi, video, aplikasi, atau media digital lainnya).',
    produkTanggal: '[Tanggal]',
    produkKonteks: 'Digunakan pada praktik mengajar mandiri Siklus 1.',
    linkDokumen: '[Link Media Pembelajaran]',
    linkDownload: '[Link Download]',
    tujuan:
      'Media pembelajaran dipilih untuk mendukung penyampaian materi dan meningkatkan ' +
      'keterlibatan peserta didik dalam proses pembelajaran.',
    analisisItems: [
      { label: 'Alasan memilih media', placeholder: '[Tuliskan alasan pemilihan media...]' },
      { label: 'Kesesuaian media dengan tujuan pembelajaran', placeholder: '[Tuliskan kesesuaian media...]' },
      { label: 'Kemudahan penggunaan', placeholder: '[Tuliskan analisis kemudahan penggunaan...]' },
      { label: 'Daya tarik', placeholder: '[Tuliskan analisis daya tarik media...]' },
      { label: 'Interaktivitas', placeholder: '[Tuliskan analisis interaktivitas...]' },
      { label: 'Aksesibilitas', placeholder: '[Tuliskan analisis aksesibilitas...]' },
      { label: 'Kelebihan media', placeholder: '[Tuliskan kelebihan media...]' },
      { label: 'Kekurangan media', placeholder: '[Tuliskan kekurangan media...]' },
      { label: 'Kendala teknis', placeholder: '[Tuliskan kendala teknis...]' },
      { label: 'Dampak terhadap pembelajaran', placeholder: '[Tuliskan dampak media terhadap pembelajaran...]' },
      { label: 'Perbaikan media', placeholder: '[Tuliskan perbaikan media...]' },
    ],
    refleksiPertanyaan: [
      'Apa yang saya pelajari dari media pembelajaran ini?',
      'Apa yang akan saya lakukan secara berbeda pada praktik berikutnya?',
    ],
  },
  {
    id: 'video',
    nomor: '04',
    judul: 'Analisis Video Pelaksanaan Praktik Mengajar',
    deskripsi:
      'Analisis mendalam terhadap video pelaksanaan praktik mengajar mandiri, mencakup ' +
      'pembukaan, penyampaian, interaksi, pengelolaan kelas, dan penutupan.',
    produkNama: 'Video Praktik Mengajar',
    produkDeskripsi: 'Video pelaksanaan praktik mengajar mandiri Siklus 1.',
    produkTanggal: '[Tanggal]',
    produkKonteks: 'Pelaksanaan praktik mengajar mandiri Siklus 1.',
    linkDokumen: '[Link Video Praktik Mengajar]',
    linkDownload: '',
    tujuan:
      'Video praktik mengajar mendokumentasikan pelaksanaan pembelajaran untuk keperluan ' +
      'analisis dan refleksi.',
    analisisItems: [
      { label: 'Tahap pembukaan', placeholder: '[Analisis tahap pembukaan...]' },
      { label: 'Penyampaian tujuan pembelajaran', placeholder: '[Analisis penyampaian tujuan...]' },
      { label: 'Penguasaan materi', placeholder: '[Analisis penguasaan materi...]' },
      { label: 'Strategi pembelajaran', placeholder: '[Analisis strategi pembelajaran...]' },
      { label: 'Interaksi dengan peserta didik', placeholder: '[Analisis interaksi dengan peserta didik...]' },
      { label: 'Penggunaan media', placeholder: '[Analisis penggunaan media...]' },
      { label: 'Pengelolaan kelas', placeholder: '[Analisis pengelolaan kelas...]' },
      { label: 'Penggunaan waktu', placeholder: '[Analisis penggunaan waktu...]' },
      { label: 'Aktivitas peserta didik', placeholder: '[Analisis aktivitas peserta didik...]' },
      { label: 'Asesmen', placeholder: '[Analisis asesmen selama pembelajaran...]' },
      { label: 'Penutupan pembelajaran', placeholder: '[Analisis penutupan pembelajaran...]' },
    ],
    refleksiPertanyaan: [
      'Apa kekuatan pelaksanaan praktik mengajar saya?',
      'Hal apa yang perlu diperbaiki pada praktik berikutnya?',
      'Pembelajaran apa yang saya dapatkan dari video ini?',
    ],
  },
  {
    id: 'nonmengajar',
    nomor: '05',
    judul: 'Analisis Kegiatan Nonmengajar',
    deskripsi:
      'Dokumentasi dan analisis kegiatan nonmengajar selama PPL, seperti administrasi, ' +
      'observasi, pendampingan, dan koordinasi.',
    produkNama: 'Kegiatan Nonmengajar',
    produkDeskripsi: 'Dokumentasi kegiatan nonmengajar selama PPL.',
    produkTanggal: '[Tanggal]',
    produkKonteks: 'Kegiatan nonmengajar selama PPL.',
    linkDokumen: '[Link Dokumentasi Kegiatan Nonmengajar]',
    linkDownload: '',
    tujuan:
      'Kegiatan nonmengajar mendukung pelaksanaan PPL secara menyeluruh dan memberikan ' +
      'pemahaman konteks sekolah.',
    analisisItems: [
      { label: 'Jenis kegiatan', placeholder: '[Sebutkan jenis kegiatan nonmengajar...]' },
      { label: 'Peran saya dalam kegiatan', placeholder: '[Jelaskan peran Anda...]' },
      { label: 'Hasil kegiatan', placeholder: '[Jelaskan hasil kegiatan...]' },
      { label: 'Pembelajaran yang diperoleh', placeholder: '[Jelaskan pembelajaran yang diperoleh...]' },
      { label: 'Relevansi dengan praktik mengajar', placeholder: '[Jelaskan relevansi dengan praktik mengajar...]' },
    ],
    refleksiPertanyaan: [
      'Apa yang saya pelajari dari kegiatan nonmengajar ini?',
      'Bagaimana kegiatan ini membantu saya sebagai calon guru?',
    ],
  },
  {
    id: 'instrumen',
    nomor: '06',
    judul: 'Instrumen Penilaian dan Analisis',
    deskripsi:
      'Analisis instrumen penilaian yang digunakan, mencakup kesesuaian, kejelasan kriteria, ' +
      'keadilan, dan hasil penerapan.',
    produkNama: 'Instrumen Penilaian',
    produkDeskripsi: 'Instrumen penilaian yang digunakan untuk mengukur ketercapaian tujuan pembelajaran.',
    produkTanggal: '[Tanggal]',
    produkKonteks: 'Digunakan pada praktik mengajar mandiri Siklus 1.',
    linkDokumen: '[Link Instrumen Penilaian]',
    linkDownload: '[Link Download]',
    tujuan:
      'Instrumen penilaian disusun untuk mengukur ketercapaian tujuan pembelajaran secara ' +
      'objektif dan adil.',
    analisisItems: [
      { label: 'Kesesuaian instrumen dengan tujuan pembelajaran', placeholder: '[Analisis kesesuaian instrumen...]' },
      { label: 'Kesesuaian indikator', placeholder: '[Analisis kesesuaian indikator...]' },
      { label: 'Kesesuaian bentuk penilaian', placeholder: '[Analisis bentuk penilaian...]' },
      { label: 'Kejelasan kriteria', placeholder: '[Analisis kejelasan kriteria...]' },
      { label: 'Keadilan penilaian', placeholder: '[Analisis keadilan penilaian...]' },
      { label: 'Kelebihan instrumen', placeholder: '[Tuliskan kelebihan instrumen...]' },
      { label: 'Kekurangan instrumen', placeholder: '[Tuliskan kekurangan instrumen...]' },
      { label: 'Hasil penerapan', placeholder: '[Tuliskan hasil penerapan instrumen...]' },
      { label: 'Perbaikan instrumen', placeholder: '[Tuliskan perbaikan instrumen...]' },
    ],
    refleksiPertanyaan: [
      'Apa yang saya pelajari dari instrumen penilaian ini?',
      'Apa yang akan saya lakukan secara berbeda pada praktik berikutnya?',
    ],
  },
];
