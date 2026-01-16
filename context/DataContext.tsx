import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { RESOURCES as INITIAL_RESOURCES, ARTICLES as INITIAL_ARTICLES, REGULATIONS as INITIAL_REGULATIONS, INFO_UPDATES as INITIAL_INFO, FORUM_POSTS as INITIAL_FORUM } from '../constants';
import { Resource, Article, Regulation, Info, ForumPost } from '../types';

interface DataContextType {
  resources: Resource[];
  articles: Article[];
  regulations: Regulation[];
  infoUpdates: Info[];
  forumPosts: ForumPost[];
  addResource: (item: Resource) => void;
  deleteResource: (id: string) => void;
  addArticle: (item: Article) => void;
  deleteArticle: (id: string) => void;
  addRegulation: (item: Regulation) => void;
  deleteRegulation: (id: string) => void;
  addInfo: (item: Info) => void;
  deleteInfo: (id: string) => void;
  addForumPost: (item: ForumPost) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load data from localStorage or fallback to constants
  const [resources, setResources] = useState<Resource[]>(() => {
    const saved = localStorage.getItem('miftah_resources');
    return saved ? JSON.parse(saved) : INITIAL_RESOURCES;
  });

  const [articles, setArticles] = useState<Article[]>(() => {
    const saved = localStorage.getItem('miftah_articles');
    return saved ? JSON.parse(saved) : INITIAL_ARTICLES;
  });

  const [regulations, setRegulations] = useState<Regulation[]>(() => {
    const saved = localStorage.getItem('miftah_regulations');
    return saved ? JSON.parse(saved) : INITIAL_REGULATIONS;
  });

  const [infoUpdates, setInfoUpdates] = useState<Info[]>(() => {
    const saved = localStorage.getItem('miftah_info');
    return saved ? JSON.parse(saved) : INITIAL_INFO;
  });

  const [forumPosts, setForumPosts] = useState<ForumPost[]>(() => {
    const saved = localStorage.getItem('miftah_forum');
    return saved ? JSON.parse(saved) : INITIAL_FORUM;
  });

  // Sync to localStorage
  useEffect(() => { localStorage.setItem('miftah_resources', JSON.stringify(resources)); }, [resources]);
  useEffect(() => { localStorage.setItem('miftah_articles', JSON.stringify(articles)); }, [articles]);
  useEffect(() => { localStorage.setItem('miftah_regulations', JSON.stringify(regulations)); }, [regulations]);
  useEffect(() => { localStorage.setItem('miftah_info', JSON.stringify(infoUpdates)); }, [infoUpdates]);
  useEffect(() => { localStorage.setItem('miftah_forum', JSON.stringify(forumPosts)); }, [forumPosts]);

  // Actions
  const addResource = (item: Resource) => setResources([item, ...resources]);
  const deleteResource = (id: string) => setResources(resources.filter(i => i.id !== id));

  const addArticle = (item: Article) => setArticles([item, ...articles]);
  const deleteArticle = (id: string) => setArticles(articles.filter(i => i.id !== id));

  const addRegulation = (item: Regulation) => setRegulations([item, ...regulations]);
  const deleteRegulation = (id: string) => setRegulations(regulations.filter(i => i.id !== id));

  const addInfo = (item: Info) => setInfoUpdates([item, ...infoUpdates]);
  const deleteInfo = (id: string) => setInfoUpdates(infoUpdates.filter(i => i.id !== id));

  const addForumPost = (item: ForumPost) => setForumPosts([item, ...forumPosts]);

  return (
    <DataContext.Provider value={{
      resources, articles, regulations, infoUpdates, forumPosts,
      addResource, deleteResource,
      addArticle, deleteArticle,
      addRegulation, deleteRegulation,
      addInfo, deleteInfo,
      addForumPost
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};