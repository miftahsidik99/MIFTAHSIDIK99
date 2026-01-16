import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Search, Filter, Download, FileText } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Resources: React.FC = () => {
  const { resources } = useData();
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Modul Ajar', 'CP/TP/ATP', 'Prota/Prosem', 'Administrasi', 'Asesmen'];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = filterCategory === 'All' || resource.category === filterCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
        <SectionHeader 
            title="Perangkat Pembelajaran SD/MI" 
            subtitle="Unduh dokumen administrasi, modul ajar, dan perangkat kurikulum lengkap."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Cari perangkat (misal: Modul Ajar IPAS)"
                            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                         {categories.map(cat => (
                             <button
                                key={cat}
                                onClick={() => setFilterCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                    filterCategory === cat 
                                    ? 'bg-primary-600 text-white' 
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                             >
                                 {cat}
                             </button>
                         ))}
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 gap-4">
                {filteredResources.length > 0 ? (
                    filteredResources.map((resource) => (
                        <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-slate-100 p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition">
                            <div className="flex-shrink-0">
                                <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                                    <FileText size={32} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-primary-600 uppercase bg-primary-50 px-2 py-0.5 rounded">{resource.category}</span>
                                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{resource.grade}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{resource.title}</h3>
                                <p className="text-slate-600 mb-4">{resource.description}</p>
                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                    <span>Diunggah: {resource.date}</span>
                                    <span>•</span>
                                    <span>{resource.downloads}x diunduh</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <a 
                                    href={resource.downloadUrl || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition flex items-center justify-center cursor-pointer"
                                >
                                    <Download size={18} className="mr-2" /> Download
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                        <div className="mx-auto h-12 w-12 text-slate-400 mb-4">
                            <Filter size={48} />
                        </div>
                        <h3 className="text-lg font-medium text-slate-900">Tidak ada perangkat ditemukan</h3>
                        <p className="text-slate-500">Coba ubah kata kunci pencarian atau kategori.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default Resources;