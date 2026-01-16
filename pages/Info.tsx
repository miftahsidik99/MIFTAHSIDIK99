import React from 'react';
import { useData } from '../context/DataContext';
import SectionHeader from '../components/SectionHeader';
import { Bell } from 'lucide-react';

const Info: React.FC = () => {
  const { infoUpdates } = useData();

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <SectionHeader title="Info Pendidikan" subtitle="Berita terkini seputar GTK, BOS, dan Kurikulum." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
            {infoUpdates.map((info) => (
                <div key={info.id} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-primary-500 flex gap-4">
                    <div className="mt-1 text-primary-500">
                        <Bell size={24} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-slate-500 uppercase">{info.category}</span>
                            <span className="text-xs text-slate-400">• {info.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">{info.title}</h3>
                        <p className="text-slate-600">{info.content}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Info;