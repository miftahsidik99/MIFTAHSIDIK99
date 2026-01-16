import React from 'react';
import { useData } from '../context/DataContext';
import SectionHeader from '../components/SectionHeader';
import { MessageSquare, ThumbsUp, UserCircle, Plus } from 'lucide-react';

const Forum: React.FC = () => {
  const { forumPosts } = useData();

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
        <SectionHeader 
            title="Forum Diskusi Guru" 
            subtitle="Ruang kolaborasi dan tanya jawab seputar dunia pendidikan SD/MI."
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Stats */}
            <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
                    <button className="w-full bg-primary-600 text-white rounded-lg py-3 font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition shadow-md mb-6">
                        <Plus size={20} /> Buat Topik Baru
                    </button>
                    
                    <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Kategori Populer</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex justify-between items-center cursor-pointer hover:text-primary-600">
                            <span>Kurikulum Merdeka</span>
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">120</span>
                        </li>
                        <li className="flex justify-between items-center cursor-pointer hover:text-primary-600">
                            <span>Manajemen Kelas</span>
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">85</span>
                        </li>
                        <li className="flex justify-between items-center cursor-pointer hover:text-primary-600">
                            <span>Info GTK & PMM</span>
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">240</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
                {forumPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <UserCircle size={48} className="text-slate-300" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-slate-900 font-bold hover:text-primary-600 cursor-pointer text-lg">
                                            {post.topic}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                                            <span className="font-medium text-primary-600">{post.user}</span>
                                            <span>•</span>
                                            <span className="bg-slate-100 px-2 rounded text-xs">{post.role}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 text-slate-700 leading-relaxed">
                                    {post.content}
                                </p>
                                <div className="mt-4 flex items-center gap-6 pt-4 border-t border-slate-100">
                                    <button className="flex items-center gap-2 text-slate-500 hover:text-primary-600 text-sm font-medium transition">
                                        <MessageSquare size={18} /> {post.replies} Balasan
                                    </button>
                                    <button className="flex items-center gap-2 text-slate-500 hover:text-primary-600 text-sm font-medium transition">
                                        <ThumbsUp size={18} /> {post.likes} Suka
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Simulated Infinite Scroll Loader */}
                <div className="text-center py-8">
                    <button className="text-primary-600 font-medium hover:underline">Muat lebih banyak diskusi...</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Forum;