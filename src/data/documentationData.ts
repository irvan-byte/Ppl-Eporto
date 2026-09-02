// ============================================================
// DATA DOKUMENTASI
// ============================================================
// Edit file ini untuk menambahkan foto/visual dokumentasi.
// Gunakan link foto asli atau biarkan placeholder.
// ============================================================

export interface GalleryCategory {
  id: string;
  judul: string;
  deskripsi: string;
  foto: { src: string; caption: string }[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'praktik-mengajar',
    judul: 'Praktik Mengajar',
    deskripsi: 'Dokumentasi pelaksanaan praktik mengajar di kelas.',
    foto: [
      { src: '', caption: '[Foto Praktik Mengajar 1]' },
      { src: '', caption: '[Foto Praktik Mengajar 2]' },
      { src: '', caption: '[Foto Praktik Mengajar 3]' },
    ],
  },
  {
    id: 'persiapan',
    judul: 'Persiapan',
    deskripsi: 'Dokumentasi kegiatan persiapan pembelajaran.',
    foto: [
      { src: '', caption: '[Foto Persiapan 1]' },
      { src: '', caption: '[Foto Persiapan 2]' },
      { src: '', caption: '[Foto Persiapan 3]' },
    ],
  },
  {
    id: 'media',
    judul: 'Media Pembelajaran',
    deskripsi: 'Dokumentasi media pembelajaran yang digunakan.',
    foto: [
      { src: '', caption: '[Foto Media 1]' },
      { src: '', caption: '[Foto Media 2]' },
      { src: '', caption: '[Foto Media 3]' },
    ],
  },
  {
    id: 'nonmengajar',
    judul: 'Kegiatan Nonmengajar',
    deskripsi: 'Dokumentasi kegiatan nonmengajar selama PPL.',
    foto: [
      { src: '', caption: '[Foto Kegiatan Nonmengajar 1]' },
      { src: '', caption: '[Foto Kegiatan Nonmengajar 2]' },
      { src: '', caption: '[Foto Kegiatan Nonmengajar 3]' },
    ],
  },
  {
    id: 'asesmen',
    judul: 'Asesmen',
    deskripsi: 'Dokumentasi pelaksanaan asesmen.',
    foto: [
      { src: '', caption: '[Foto Asesmen 1]' },
      { src: '', caption: '[Foto Asesmen 2]' },
      { src: '', caption: '[Foto Asesmen 3]' },
    ],
  },
  {
    id: 'sekolah',
    judul: 'Dokumentasi Sekolah',
    deskripsi: 'Dokumentasi lingkungan dan kegiatan sekolah.',
    foto: [
      { src: '', caption: '[Foto Sekolah 1]' },
      { src: '', caption: '[Foto Sekolah 2]' },
      { src: '', caption: '[Foto Sekolah 3]' },
    ],
  },
];
