import { Resource, Article, Regulation, Info, ForumPost } from './types';

export const RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Modul Ajar Matematika Kelas 1 - Penjumlahan',
    category: 'Modul Ajar',
    grade: 'Fase A',
    description: 'Modul ajar lengkap dengan LKPD dan asesmen formatif untuk materi penjumlahan 1-10.',
    date: '2024-05-10',
    downloads: 1240
  },
  {
    id: '2',
    title: 'Alur Tujuan Pembelajaran (ATP) IPAS Fase B',
    category: 'CP/TP/ATP',
    grade: 'Fase B',
    description: 'Dokumen ATP IPAS untuk kelas 3 dan 4 SD sesuai Kurikulum Merdeka terbaru.',
    date: '2024-04-22',
    downloads: 890
  },
  {
    id: '3',
    title: 'Program Tahunan (Prota) Kelas 6',
    category: 'Prota/Prosem',
    grade: 'Fase C',
    description: 'Excel otomatis Prota dan Prosem untuk kelas 6 semester 1 dan 2.',
    date: '2024-06-01',
    downloads: 2100
  },
  {
    id: '4',
    title: 'Instrumen Asesmen Awal Membaca',
    category: 'Asesmen',
    grade: 'Fase A',
    description: 'Panduan dan instrumen untuk melakukan asesmen diagnostik literasi awal.',
    date: '2024-05-15',
    downloads: 560
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Penerapan Metode Gasing dalam Pembelajaran Matematika SD',
    category: 'Best Practice',
    author: 'Siti Aminah, S.Pd',
    date: '2024-05-20',
    summary: 'Bagaimana metode Gasing meningkatkan pemahaman numerasi siswa kelas 3 di SDN 1 Melati.',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Implementasi P5 Gaya Hidup Berkelanjutan',
    category: 'Populer',
    author: 'Budi Santoso, M.Pd',
    date: '2024-05-18',
    summary: 'Tips praktis melaksanakan projek penguatan profil pelajar pancasila dengan tema sampah plastik.',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Meningkatkan Minat Baca Melalui Pojok Baca Digital',
    category: 'Inovasi',
    author: 'Rina Wati, S.Pd.SD',
    date: '2024-05-12',
    summary: 'Pemanfaatan tablet dan ebook reader di pojok baca kelas untuk literasi digital.',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];

export const REGULATIONS: Regulation[] = [
  {
    id: '1',
    title: 'Standar Proses pada Pendidikan Anak Usia Dini, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah',
    number: 'Permendikbudristek No. 16',
    year: '2022',
    category: 'Permendikbud',
    description: 'Regulasi acuan standar proses pembelajaran kurikulum merdeka.'
  },
  {
    id: '2',
    title: 'Panduan Penyelenggaraan Pembelajaran Inklusif',
    number: 'Juknis 001/2024',
    year: '2024',
    category: 'Juknis',
    description: 'Petunjuk teknis pelaksanaan pendidikan inklusif di sekolah reguler.'
  }
];

export const INFO_UPDATES: Info[] = [
  {
    id: '1',
    title: 'Jadwal Pencairan TPG Triwulan II 2024',
    category: 'GTK',
    date: '2024-06-02',
    content: 'Informasi mengenai mekanisme dan estimasi tanggal pencairan tunjangan profesi guru.'
  },
  {
    id: '2',
    title: 'Pendaftaran Implementasi Kurikulum Merdeka 2024',
    category: 'Kurikulum',
    date: '2024-05-25',
    content: 'Bagi sekolah yang ingin merubah opsi IKM, pendaftaran dibuka hingga akhir Juni.'
  }
];

export const FORUM_POSTS: ForumPost[] = [
  {
    id: '1',
    user: 'Pak Guru Budi',
    role: 'Guru Kelas 5',
    topic: 'Kendala Asesmen Diagnostik',
    content: 'Bapak/Ibu, bagaimana cara efektif melakukan asesmen diagnostik kognitif untuk kelas dengan jumlah siswa 40 orang? Waktunya terasa sangat kurang.',
    date: '2 jam yang lalu',
    replies: 15,
    likes: 24
  },
  {
    id: '2',
    user: 'Bu Kepala Sekolah',
    role: 'Kepala Sekolah',
    topic: 'Pengelolaan Kinerja PMM',
    content: 'Mohon sharing praktik baik pengelolaan kinerja guru di PMM untuk periode Juli-Desember. Apa fokus indikator yang Bapak/Ibu pilih?',
    date: '5 jam yang lalu',
    replies: 42,
    likes: 56
  }
];