export interface Resource {
  id: string;
  title: string;
  category: 'Modul Ajar' | 'CP/TP/ATP' | 'Prota/Prosem' | 'Administrasi' | 'Asesmen';
  grade: 'Fase A' | 'Fase B' | 'Fase C' | 'Umum';
  description: string;
  date: string;
  downloads: number;
}

export interface Article {
  id: string;
  title: string;
  category: 'Ilmiah' | 'Populer' | 'Best Practice' | 'Inovasi';
  author: string;
  date: string;
  summary: string;
  content?: string;
  imageUrl: string;
}

export interface Regulation {
  id: string;
  title: string;
  number: string;
  year: string;
  category: 'Permendikbud' | 'Juknis' | 'Surat Edaran';
  description: string;
}

export interface Info {
  id: string;
  title: string;
  category: 'GTK' | 'Kurikulum' | 'BOS/BOP' | 'Program';
  date: string;
  content: string;
}

export interface ForumPost {
  id: string;
  user: string;
  role: string;
  topic: string;
  content: string;
  date: string;
  replies: number;
  likes: number;
}