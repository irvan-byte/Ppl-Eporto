// ============================================================
// DATA PROFIL GURU / CALON GURU
// ============================================================
// Edit file ini untuk mengubah informasi profil.
// Placeholder dalam format [NAMA SEKOLAH] dll. akan diganti
// dengan data asli Anda.
// ============================================================

export interface ProfileData {
  nama: string;
  program: string;
  bidangStudi: string;
  sekolah: string;
  kelas: string;
  peran: string;
  guruPamong: string;
  dosenPembimbing: string;
  email: string;
  institusi: string;
  profilSingkat: string;
  filosofiMengajar: string;
  komitmen: string;
  tujuanPraktik: string;
}

export const profile: ProfileData = {
  nama: 'Irvan Hadi Abiyoga',
  program: 'PPG Informatika',
  bidangStudi: 'Informatika',
  sekolah: '[Nama Sekolah]',
  kelas: '[Kelas]',
  peran: 'Guru Praktik (Praktik Mengajar Mandiri)',
  guruPamong: '[Nama Guru Pamong]',
  dosenPembimbing: '[Nama Dosen Pembimbing]',
  email: '[Email]',
  institusi: '[Institusi]',
  profilSingkat:
    'Saya adalah mahasiswa PPG Informatika yang sedang menjalani Praktik Pengalaman Lapangan (PPL). ' +
    'Saya memiliki ketertarikan pada pembelajaran teknologi informasi dan komputasi serta ' +
    'berkomitmen untuk mengembangkan praktik pembelajaran yang bermakna bagi peserta didik.',
  filosofiMengajar:
    'Pembelajaran yang bermakna terjadi ketika peserta didik diberi ruang untuk mencoba, ' +
    'berpikir kritis, dan merefleksikan apa yang mereka pelajari. Guru bertugas bukan hanya ' +
    'menyampaikan materi, tetapi merancang pengalaman belajar yang relevan dengan kebutuhan ' +
    'dan dunia peserta didik.',
  komitmen:
    'Saya berkomitmen untuk menjadi guru yang terus belajar, reflektif, dan adaptif terhadap ' +
    'perkembangan teknologi serta kebutuhan peserta didik. Saya berusaha merancang pembelajaran ' +
    'yang tidak hanya transfer pengetahuan, tetapi juga membentuk keterampilan berpikir dan sikap ' +
    'positif terhadap teknologi.',
  tujuanPraktik:
    'Melalui praktik mengajar mandiri ini, saya bertujuan untuk menerapkan teori pembelajaran ' +
    'ke dalam praktik nyata, mengembangkan kemampuan perencanaan dan pelaksanaan pembelajaran ' +
    'Informatika, serta melakukan refleksi yang mendalam untuk perbaikan berkelanjutan.',
};
