// ============================================================
// DATA REFLEKSI
// ============================================================
// Edit file ini untuk mengisi refleksi diri.
// ============================================================

export interface ReflectionItem {
  no: number;
  pertanyaan: string;
  placeholder: string;
}

export const reflectionItems: ReflectionItem[] = [
  {
    no: 1,
    pertanyaan: 'Apa yang saya rencanakan?',
    placeholder: '[Tuliskan apa yang Anda rencanakan sebelum praktik mengajar...]',
  },
  {
    no: 2,
    pertanyaan: 'Apa yang terjadi saat pelaksanaan?',
    placeholder: '[Tuliskan apa yang terjadi saat pelaksanaan...]',
  },
  {
    no: 3,
    pertanyaan: 'Apa yang berjalan dengan baik?',
    placeholder: '[Tuliskan apa yang berjalan dengan baik...]',
  },
  {
    no: 4,
    pertanyaan: 'Apa yang belum berjalan sesuai rencana?',
    placeholder: '[Tuliskan apa yang belum berjalan sesuai rencana...]',
  },
  {
    no: 5,
    pertanyaan: 'Bagaimana respons peserta didik?',
    placeholder: '[Tuliskan respons peserta didik...]',
  },
  {
    no: 6,
    pertanyaan: 'Apa yang saya pelajari?',
    placeholder: '[Tuliskan apa yang Anda pelajari...]',
  },
  {
    no: 7,
    pertanyaan: 'Apa yang akan saya perbaiki?',
    placeholder: '[Tuliskan apa yang akan Anda perbaiki...]',
  },
  {
    no: 8,
    pertanyaan: 'Bagaimana pengalaman ini membentuk saya sebagai calon guru Informatika?',
    placeholder: '[Tuliskan bagaimana pengalaman ini membentuk Anda...]',
  },
];

export const reflectionClosing =
  'Menjadi guru bukan hanya tentang menyampaikan materi, tetapi tentang membaca kebutuhan ' +
  'peserta didik, mengevaluasi proses, dan terus memperbaiki praktik pembelajaran.';
