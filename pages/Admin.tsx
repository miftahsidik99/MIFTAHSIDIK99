import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Trash2, Plus, Lock, LayoutDashboard, FileText, BookOpen, Bell, Scale, Link as LinkIcon } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'resources' | 'articles' | 'info' | 'regulations'>('overview');

  const { 
    resources, addResource, deleteResource,
    articles, addArticle, deleteArticle,
    infoUpdates, addInfo, deleteInfo,
    regulations, addRegulation, deleteRegulation
  } = useData();

  // Simple authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Kode PIN salah!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <div className="flex justify-center mb-6 text-primary-600">
            <Lock size={48} />
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Akses Admin</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Masukkan Kode PIN</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="PIN Default: admin123"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 rounded-lg font-bold hover:bg-primary-700 transition"
            >
              Masuk Dashboard
            </button>
          </form>
          <p className="text-xs text-center text-slate-400 mt-4">Hanya untuk pengelola website.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <div className="bg-slate-900 text-white py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <LayoutDashboard size={28} />
             <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-slate-400 text-sm">Kelola konten website MIFTAHSIDIK99</p>
             </div>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-slate-700"
          >
            Keluar
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar / Tabs */}
            <div className="w-full md:w-64 flex-shrink-0">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                    <nav className="flex flex-col">
                        <button 
                            onClick={() => setActiveTab('overview')}
                            className={`flex items-center gap-3 px-4 py-3 text-left border-l-4 transition ${activeTab === 'overview' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-transparent hover:bg-slate-50 text-slate-600'}`}
                        >
                            <LayoutDashboard size={18} /> Overview
                        </button>
                        <button 
                            onClick={() => setActiveTab('resources')}
                            className={`flex items-center gap-3 px-4 py-3 text-left border-l-4 transition ${activeTab === 'resources' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-transparent hover:bg-slate-50 text-slate-600'}`}
                        >
                            <BookOpen size={18} /> Perangkat Ajar
                        </button>
                        <button 
                            onClick={() => setActiveTab('articles')}
                            className={`flex items-center gap-3 px-4 py-3 text-left border-l-4 transition ${activeTab === 'articles' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-transparent hover:bg-slate-50 text-slate-600'}`}
                        >
                            <FileText size={18} /> Artikel
                        </button>
                        <button 
                            onClick={() => setActiveTab('info')}
                            className={`flex items-center gap-3 px-4 py-3 text-left border-l-4 transition ${activeTab === 'info' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-transparent hover:bg-slate-50 text-slate-600'}`}
                        >
                            <Bell size={18} /> Info Pendidikan
                        </button>
                        <button 
                            onClick={() => setActiveTab('regulations')}
                            className={`flex items-center gap-3 px-4 py-3 text-left border-l-4 transition ${activeTab === 'regulations' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-transparent hover:bg-slate-50 text-slate-600'}`}
                        >
                            <Scale size={18} /> Regulasi
                        </button>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                             <h3 className="text-slate-500 font-medium mb-1">Total Perangkat</h3>
                             <p className="text-3xl font-bold text-slate-800">{resources.length}</p>
                         </div>
                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                             <h3 className="text-slate-500 font-medium mb-1">Total Artikel</h3>
                             <p className="text-3xl font-bold text-slate-800">{articles.length}</p>
                         </div>
                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                             <h3 className="text-slate-500 font-medium mb-1">Total Info</h3>
                             <p className="text-3xl font-bold text-slate-800">{infoUpdates.length}</p>
                         </div>
                         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                             <h3 className="text-slate-500 font-medium mb-1">Total Regulasi</h3>
                             <p className="text-3xl font-bold text-slate-800">{regulations.length}</p>
                         </div>
                    </div>
                )}

                {activeTab === 'resources' && <ResourceManager resources={resources} onAdd={addResource} onDelete={deleteResource} />}
                {activeTab === 'articles' && <ArticleManager articles={articles} onAdd={addArticle} onDelete={deleteArticle} />}
                {activeTab === 'info' && <InfoManager infos={infoUpdates} onAdd={addInfo} onDelete={deleteInfo} />}
                {activeTab === 'regulations' && <RegulationManager regulations={regulations} onAdd={addRegulation} onDelete={deleteRegulation} />}
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-components for Forms and Lists ---

const ResourceManager = ({ resources, onAdd, onDelete }: any) => {
    const [formData, setFormData] = useState({ title: '', category: 'Modul Ajar', grade: 'Fase A', description: '', downloadUrl: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({
            id: Date.now().toString(),
            ...formData,
            date: new Date().toISOString().split('T')[0],
            downloads: 0
        });
        setFormData({ title: '', category: 'Modul Ajar', grade: 'Fase A', description: '', downloadUrl: '' });
        alert('Perangkat berhasil ditambahkan!');
    };

    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Plus size={20} /> Tambah Perangkat</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="text-sm font-medium">Judul Dokumen</label>
                        <input required type="text" className="w-full p-2 border rounded" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Kategori</label>
                        <select className="w-full p-2 border rounded" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                            <option>Modul Ajar</option>
                            <option>CP/TP/ATP</option>
                            <option>Prota/Prosem</option>
                            <option>Administrasi</option>
                            <option>Asesmen</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium">Fase / Kelas</label>
                        <select className="w-full p-2 border rounded" value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})}>
                            <option>Fase A</option>
                            <option>Fase B</option>
                            <option>Fase C</option>
                            <option>Umum</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                         <label className="text-sm font-medium">Deskripsi Singkat</label>
                         <textarea required className="w-full p-2 border rounded" rows={2} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
                    </div>
                    <div className="col-span-2">
                         <label className="text-sm font-medium flex items-center gap-2"><LinkIcon size={14}/> Link Download (Google Drive/PDF)</label>
                         <input required type="url" placeholder="https://drive.google.com/..." className="w-full p-2 border rounded text-blue-600" value={formData.downloadUrl} onChange={e => setFormData({...formData, downloadUrl: e.target.value})} />
                         <p className="text-xs text-slate-400 mt-1">Pastikan link Google Drive sudah diatur ke 'Siapa saja yang memiliki link' (Anyone with the link).</p>
                    </div>
                    <div className="col-span-2">
                        <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700">Simpan Perangkat</button>
                    </div>
                </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Judul</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Kategori</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Link</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {resources.map((item: any) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.title}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{item.category} ({item.grade})</td>
                                <td className="px-6 py-4 text-sm text-blue-600 truncate max-w-xs">
                                    <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Buka Link</a>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => onDelete(item.id)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ArticleManager = ({ articles, onAdd, onDelete }: any) => {
    const [formData, setFormData] = useState({ title: '', category: 'Best Practice', author: '', summary: '', imageUrl: 'https://picsum.photos/800/600' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({
            id: Date.now().toString(),
            ...formData,
            date: new Date().toISOString().split('T')[0]
        });
        setFormData({ title: '', category: 'Best Practice', author: '', summary: '', imageUrl: 'https://picsum.photos/800/600' });
        alert('Artikel berhasil diterbitkan!');
    };

    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Plus size={20} /> Tulis Artikel Baru</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="text-sm font-medium">Judul Artikel</label>
                        <input required type="text" className="w-full p-2 border rounded" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                    </div>
                     <div>
                        <label className="text-sm font-medium">Kategori</label>
                        <select className="w-full p-2 border rounded" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                            <option>Best Practice</option>
                            <option>Ilmiah</option>
                            <option>Populer</option>
                            <option>Inovasi</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium">Penulis</label>
                        <input required type="text" className="w-full p-2 border rounded" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
                    </div>
                    <div className="col-span-2">
                         <label className="text-sm font-medium">Ringkasan / Isi Singkat</label>
                         <textarea required className="w-full p-2 border rounded" rows={3} value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})}></textarea>
                    </div>
                     <div className="col-span-2">
                        <label className="text-sm font-medium">URL Gambar (Opsional)</label>
                        <input type="text" className="w-full p-2 border rounded" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} />
                    </div>
                    <div className="col-span-2">
                        <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700">Terbitkan Artikel</button>
                    </div>
                </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <ul className="divide-y divide-slate-100">
                    {articles.map((item: any) => (
                        <li key={item.id} className="p-4 flex justify-between items-center hover:bg-slate-50">
                            <div className="flex gap-4 items-center">
                                <img src={item.imageUrl} alt="" className="h-10 w-10 rounded object-cover bg-slate-200" />
                                <div>
                                    <p className="font-semibold text-slate-800">{item.title}</p>
                                    <p className="text-xs text-slate-500">{item.category} • {item.author} • {item.date}</p>
                                </div>
                            </div>
                            <button onClick={() => onDelete(item.id)} className="text-red-600 hover:text-red-800 p-2"><Trash2 size={18} /></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const InfoManager = ({ infos, onAdd, onDelete }: any) => {
    const [formData, setFormData] = useState({ title: '', category: 'GTK', content: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({
            id: Date.now().toString(),
            ...formData,
            date: new Date().toISOString().split('T')[0]
        });
        setFormData({ title: '', category: 'GTK', content: '' });
        alert('Info berhasil diposting!');
    };

    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Plus size={20} /> Posting Info Baru</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="text-sm font-medium">Judul Info</label>
                        <input required type="text" className="w-full p-2 border rounded" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Kategori</label>
                        <select className="w-full p-2 border rounded" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                            <option>GTK</option>
                            <option>Kurikulum</option>
                            <option>BOS/BOP</option>
                            <option>Program</option>
                        </select>
                    </div>
                    <div>
                         <label className="text-sm font-medium">Isi Informasi</label>
                         <textarea required className="w-full p-2 border rounded" rows={3} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})}></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700">Posting Info</button>
                    </div>
                </form>
            </div>
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <ul className="divide-y divide-slate-100">
                    {infos.map((item: any) => (
                        <li key={item.id} className="p-4 flex justify-between items-center hover:bg-slate-50">
                            <div>
                                <p className="font-semibold text-slate-800">{item.title}</p>
                                <p className="text-xs text-slate-500">{item.category} • {item.date}</p>
                            </div>
                            <button onClick={() => onDelete(item.id)} className="text-red-600 hover:text-red-800 p-2"><Trash2 size={18} /></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const RegulationManager = ({ regulations, onAdd, onDelete }: any) => {
    const [formData, setFormData] = useState({ title: '', number: '', year: new Date().getFullYear().toString(), category: 'Permendikbud', description: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({
            id: Date.now().toString(),
            ...formData
        });
        setFormData({ title: '', number: '', year: new Date().getFullYear().toString(), category: 'Permendikbud', description: '' });
        alert('Regulasi berhasil ditambahkan!');
    };

    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Plus size={20} /> Tambah Regulasi</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="text-sm font-medium">Judul Regulasi</label>
                        <input required type="text" className="w-full p-2 border rounded" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Nomor</label>
                        <input required type="text" className="w-full p-2 border rounded" value={formData.number} onChange={e => setFormData({...formData, number: e.target.value})} placeholder="Misal: Permendikbud No. 12" />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Tahun</label>
                        <input required type="text" className="w-full p-2 border rounded" value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} />
                    </div>
                     <div>
                        <label className="text-sm font-medium">Kategori</label>
                        <select className="w-full p-2 border rounded" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                            <option>Permendikbud</option>
                            <option>Juknis</option>
                            <option>Surat Edaran</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                         <label className="text-sm font-medium">Deskripsi</label>
                         <textarea required className="w-full p-2 border rounded" rows={2} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
                    </div>
                    <div className="col-span-2">
                        <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700">Simpan Regulasi</button>
                    </div>
                </form>
            </div>
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <ul className="divide-y divide-slate-100">
                    {regulations.map((item: any) => (
                        <li key={item.id} className="p-4 flex justify-between items-center hover:bg-slate-50">
                            <div>
                                <p className="font-semibold text-slate-800">{item.title}</p>
                                <p className="text-xs text-slate-500">{item.number} • {item.year}</p>
                            </div>
                            <button onClick={() => onDelete(item.id)} className="text-red-600 hover:text-red-800 p-2"><Trash2 size={18} /></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Admin;