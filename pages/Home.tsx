import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, BookOpen, Users, FileText, Star } from 'lucide-react';
import { useData } from '../context/DataContext';

const Home: React.FC = () => {
  const { resources, articles, infoUpdates } = useData();

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative bg-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="text-center md:text-left md:flex items-center justify-between gap-10">
            <div className="md:w-3/5 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500 text-primary-50 text-sm font-medium border border-primary-400">
                Solusi Pendidikan SD & MI
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Membangun Generasi Emas Melalui Pendidikan Berkualitas
              </h1>
              <p className="text-lg text-primary-100 max-w-2xl">
                Dapatkan akses lengkap ke perangkat pembelajaran Kurikulum Merdeka, modul ajar, artikel ilmiah, dan regulasi terbaru secara gratis untuk Guru SD/MI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/perangkat" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-white hover:bg-primary-50 transition shadow-lg">
                  <Download size={20} className="mr-2" />
                  Unduh Perangkat
                </Link>
                <Link to="/forum" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-primary-700 transition">
                  <Users size={20} className="mr-2" />
                  Gabung Forum
                </Link>
              </div>
            </div>
            {/* Abstract Illustration Placeholder */}
            <div className="hidden md:block md:w-2/5">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl">
                    <div className="space-y-4">
                        <div className="h-4 bg-white/30 rounded w-3/4"></div>
                        <div className="h-4 bg-white/20 rounded w-full"></div>
                        <div className="h-4 bg-white/20 rounded w-5/6"></div>
                        <div className="flex gap-4 mt-6">
                             <div className="h-20 w-20 bg-white/20 rounded-lg"></div>
                             <div className="flex-1 space-y-2">
                                <div className="h-4 bg-white/30 rounded w-full"></div>
                                <div className="h-4 bg-white/20 rounded w-4/5"></div>
                             </div>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/20 flex justify-between items-center text-sm">
                        <span>Status: <strong>Aktif Mengajar</strong></span>
                        <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Menu Icons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Modul Ajar', icon: <BookOpen className="text-primary-600" size={28} />, path: '/perangkat' },
            { label: 'Artikel Ilmiah', icon: <FileText className="text-emerald-600" size={28} />, path: '/artikel' },
            { label: 'Info GTK', icon: <Users className="text-orange-600" size={28} />, path: '/info' },
            { label: 'Best Practice', icon: <Star className="text-purple-600" size={28} />, path: '/artikel' },
          ].map((item, idx) => (
            <Link key={idx} to={item.path} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100 flex flex-col items-center text-center group">
              <div className="p-3 bg-slate-50 rounded-full mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="font-semibold text-slate-700">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Perangkat Pembelajaran Terbaru</h2>
            <p className="text-slate-500 mt-1">Dokumen administrasi dan modul ajar terkini.</p>
          </div>
          <Link to="/perangkat" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
            Lihat Semua <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.slice(0, 4).map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:border-primary-200 transition">
              <div className="flex justify-between items-start mb-3">
                <span className={`text-xs px-2 py-1 rounded font-medium ${
                    resource.category === 'Modul Ajar' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                }`}>
                  {resource.grade}
                </span>
                <span className="text-xs text-slate-400">{resource.date}</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2 min-h-[3rem]">{resource.title}</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-3">{resource.description}</p>
              <button className="w-full mt-auto py-2 flex justify-center items-center text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition">
                <Download size={16} className="mr-2" /> Unduh ({resource.downloads})
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Info Updates & Articles Split */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Articles Column */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Artikel & Bacaan</h2>
                <Link to="/artikel" className="text-primary-600 text-sm font-medium">Lihat Semua</Link>
              </div>
              <div className="space-y-6">
                {articles.slice(0, 3).map((article) => (
                  <div key={article.id} className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
                    <img src={article.imageUrl} alt={article.title} className="w-full md:w-48 h-32 object-cover rounded-lg bg-slate-200" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">{article.category}</span>
                            <span className="text-xs text-slate-400">• {article.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2 hover:text-primary-600 cursor-pointer">{article.title}</h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{article.summary}</p>
                      </div>
                      <div className="mt-3 flex items-center text-xs text-slate-500">
                        <span>Oleh: {article.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Info Terkini</h2>
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-6">
                {infoUpdates.map((info) => (
                  <div key={info.id} className="border-l-4 border-primary-500 pl-4 py-1">
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wide">{info.category}</span>
                    <h3 className="font-semibold text-slate-800 mt-1 mb-2 hover:underline cursor-pointer">{info.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-3">{info.content}</p>
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-100">
                    <Link to="/info" className="block w-full text-center py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition">
                        Lihat Info Lainnya
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Forum */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Ingin Diskusi dengan Sesama Guru?</h2>
            <p className="text-slate-300 max-w-xl">
              Bergabunglah di Forum Guru MIFTAHSIDIK99. Tanyakan kendala mengajar, berbagi praktik baik, dan berdiskusi seputar Kurikulum Merdeka.
            </p>
          </div>
          <Link to="/forum" className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-primary-50 transition transform hover:-translate-y-1 shadow-lg whitespace-nowrap">
            Mulai Diskusi
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;