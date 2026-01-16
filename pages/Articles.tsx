import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import SectionHeader from '../components/SectionHeader';
import { Clock, User, ChevronRight } from 'lucide-react';

const Articles: React.FC = () => {
    const { articles } = useData();
    const [activeTab, setActiveTab] = useState<'All' | 'Ilmiah' | 'Populer' | 'Inovasi'>('All');

    const filteredArticles = activeTab === 'All' 
        ? articles 
        : articles.filter(a => {
            if (activeTab === 'Ilmiah') return a.category === 'Best Practice' || a.category === 'Ilmiah';
            return a.category === activeTab;
        });

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <SectionHeader 
        title="Artikel Pendidikan" 
        subtitle="Wawasan terbaru seputar PTK, Best Practice, dan inovasi pembelajaran."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-fit mb-8 mx-auto">
            {['All', 'Ilmiah', 'Populer', 'Inovasi'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
                <article key={article.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                        <img 
                            src={article.imageUrl} 
                            alt={article.title} 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm">
                            {article.category}
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                            <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {article.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 hover:text-primary-600 cursor-pointer">
                            {article.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                            {article.summary}
                        </p>
                        <button className="text-primary-600 font-semibold text-sm flex items-center hover:gap-2 transition-all group mt-auto">
                            Baca Selengkapnya <ChevronRight size={16} className="ml-1 group-hover:text-primary-700" />
                        </button>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;