import React from 'react';
import { useData } from '../context/DataContext';
import SectionHeader from '../components/SectionHeader';
import { Book, DownloadCloud, FileText } from 'lucide-react';

const Regulations: React.FC = () => {
  const { regulations } = useData();

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
        <SectionHeader 
            title="Regulasi Pendidikan" 
            subtitle="Kumpulan Permendikbud, Juknis, dan Surat Edaran resmi terbaru."
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
                <div className="divide-y divide-slate-100">
                    {regulations.map((reg) => (
                        <div key={reg.id} className="p-6 hover:bg-slate-50 transition flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0 hidden md:block">
                                <div className="h-14 w-14 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                                    <Book size={28} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded uppercase">
                                        {reg.category}
                                    </span>
                                    <span className="text-xs text-slate-400">Tahun {reg.year}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-1">{reg.title}</h3>
                                <p className="text-sm font-medium text-primary-700 mb-2">{reg.number}</p>
                                <p className="text-sm text-slate-500">{reg.description}</p>
                            </div>
                            <div className="flex items-center">
                                <button className="flex items-center justify-center w-full md:w-auto px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition">
                                    <FileText size={18} className="mr-2" />
                                    Buka PDF
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Regulations;