import { useState, useEffect } from 'react';
import { 
  Users, Activity, BookOpen, Plus, Save, Trash2, Edit2, 
  ChevronRight, ChevronDown, LayoutGrid, Globe, LogOut, ArrowLeft,
  Video, HelpCircle, FileText, Image as ImageIcon, Type, List, Hash,
  GripVertical, Eye, EyeOff, Table as TableIcon, Sigma, Code, Info, 
  Target, MessageSquare, ListChecks, Layers
} from 'lucide-react';
import { Language, Subject, Unit, Lesson, Category, ContentBlock, BilingualString, QuizQuestion } from '../../data/curriculum';
import { useCurriculum } from '../../hooks/useCurriculum';
import { 
  saveSubjectToFirestore, 
  deleteSubjectFromFirestore, 
  fetchCategoriesFromFirestore,
  saveCategoryToFirestore,
  deleteCategoryFromFirestore
} from '../../utils/firestoreData';
import { useNavigate } from 'react-router-dom';

export default function TeacherDashboard({ language: initialLanguage }: { language: Language }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'content' | 'categories' | 'students'>('content');
  const [selectedCurriculum, setSelectedCurriculum] = useState<string>('sslc');
  const { subjects, loading: subjectsLoading } = useCurriculum(selectedCurriculum as any);
  
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingLesson, setEditingLesson] = useState<{unitIdx: number, lessonIdx: number, lesson: Lesson} | null>(null);
  
  const [editorMode, setEditorMode] = useState<'visual' | 'json' | 'preview'>('visual');
  const [previewLanguage, setPreviewLanguage] = useState<'en' | 'ml' | 'ar' | 'ml-ar'>('en');
  const [rawJson, setRawJson] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    setCategoriesLoading(true);
    const data = await fetchCategoriesFromFirestore();
    setCategories(data);
    setCategoriesLoading(false);
  }

  // --- Category Handlers ---
  const handleAddCategory = () => {
    const newCat: Category = {
      id: `cat-${Date.now()}`,
      name: 'New Class',
      mode: 'School',
      active: true,
      icon: 'BookOpen',
      color: 'blue',
      students: '0',
      lessons: 0,
      path: '/new-path'
    };
    setEditingCategory(newCat);
  };

  const handleSaveCategory = async () => {
    if (!editingCategory) return;
    setIsSaving(true);
    try {
      await saveCategoryToFirestore(editingCategory);
      setEditingCategory(null);
      await loadCategories();
    } catch (err) {
      alert('Error saving category');
    } finally {
      setIsSaving(false);
    }
  };

  // --- Subject Handlers ---
  const handleAddSubject = () => {
    const newSubject: Subject = {
      id: `new-subject-${Date.now()}`,
      title: { en: 'New Subject', ml: 'പുതിയ വിഷയം' },
      icon: 'BookOpen',
      color: 'bg-slate-500',
      units: []
    };
    setEditingSubject(newSubject);
  };

  const handleEditSubject = (subject: Subject) => {
    setEditingSubject(JSON.parse(JSON.stringify(subject))); 
  };

  const handleSaveSubject = async () => {
    if (!editingSubject) return;
    setIsSaving(true);
    try {
      await saveSubjectToFirestore(selectedCurriculum, editingSubject);
      setEditingSubject(null);
      window.location.reload();
    } catch (err) {
      alert('Error saving subject');
    } finally {
      setIsSaving(false);
    }
  };

  // --- Lesson Handlers ---
  const openLessonEditor = (unitIdx: number, lessonIdx: number) => {
    if (!editingSubject) return;
    const lesson = JSON.parse(JSON.stringify(editingSubject.units[unitIdx].lessons[lessonIdx]));
    setEditingLesson({ unitIdx, lessonIdx, lesson });
    setRawJson(JSON.stringify(lesson, null, 2));
    setEditorMode('visual');
  };

  const saveLessonContent = () => {
    if (!editingLesson || !editingSubject) return;
    let finalLesson = editingLesson.lesson;
    
    if (editorMode === 'json') {
      try {
        finalLesson = JSON.parse(rawJson);
      } catch (e) {
        alert('Invalid JSON format. Please fix it before saving.');
        return;
      }
    }

    const newSubject = { ...editingSubject };
    newSubject.units[editingLesson.unitIdx].lessons[editingLesson.lessonIdx] = finalLesson;
    setEditingSubject(newSubject);
    setEditingLesson(null);
  };

  const updateLessonJson = (val: string) => {
    setRawJson(val);
    try {
      const parsed = JSON.parse(val);
      setEditingLesson(prev => prev ? { ...prev, lesson: parsed } : null);
    } catch (e) {
      // JSON is mid-edit, don't sync back to state yet
    }
  };

  // Content Block Helpers
  const addBlock = (type: ContentBlock['type']) => {
    if (!editingLesson) return;
    const newBlock: ContentBlock = { type, en: '', ml: '', ar: '' };
    const blocks = [...(editingLesson.lesson.content.blocks || []), newBlock];
    setEditingLesson({
      ...editingLesson,
      lesson: { ...editingLesson.lesson, content: { ...editingLesson.lesson.content, blocks } }
    });
  };

  if (subjectsLoading || categoriesLoading) return <div className="p-12 text-center font-black uppercase tracking-widest text-slate-400 animate-pulse">Initializing Command Center...</div>;

  return (
    <div className="flex-1 h-screen flex flex-col bg-[#F8FAFC] dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Top Header */}
      <header className="px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center z-30">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl hover:scale-105 active:scale-95 transition-all">
             <ArrowLeft className="w-5 h-5 text-brand-primary" />
          </button>
          <div>
            <h1 className="text-xl font-black tracking-tight">Wiselearn Admin</h1>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">v2.1 • Multi-Language Ready</p>
          </div>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          {[
            { id: 'categories', label: 'Classes', icon: LayoutGrid },
            { id: 'content', label: 'Curriculum', icon: Layers },
            { id: 'students', label: 'Students', icon: Users }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-2 ${activeTab === tab.id ? 'bg-white dark:bg-slate-700 text-brand-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 overflow-hidden flex">
        {/* --- CURRICULUM TAB --- */}
        {activeTab === 'content' && (
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar: Subject List */}
            <div className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
               <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                  <label className="text-[9px] font-black uppercase text-slate-400 mb-2 block ml-1 tracking-widest">Curriculum</label>
                  <select 
                    value={selectedCurriculum} 
                    onChange={e => setSelectedCurriculum(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider focus:ring-2 focus:ring-brand-primary/20"
                  >
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
               </div>
               
               <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide">
                  <div className="flex justify-between items-center px-2 py-3 mb-1">
                     <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subjects</h2>
                     <button onClick={handleAddSubject} className="p-1 bg-brand-primary text-white rounded-lg"><Plus className="w-3.5 h-3.5" /></button>
                  </div>
                  {subjects.map(sub => (
                    <button
                      key={sub.id}
                      onClick={() => handleEditSubject(sub)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${editingSubject?.id === sub.id ? 'bg-brand-primary/10 text-brand-primary shadow-sm' : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-500'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${sub.color}`} />
                        <span className="text-xs font-black truncate max-w-[140px] uppercase tracking-wide">{sub.title.en}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-30" />
                    </button>
                  ))}
               </div>
            </div>

            {/* Main Panel: Subject & Chapter List */}
            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide bg-[#FDFDFF] dark:bg-slate-950">
              {editingSubject ? (
                <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-end mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
                    <div>
                       <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">{editingSubject.title.en}</h2>
                       <div className="flex items-center gap-3 mt-2">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{editingSubject.units.length} Units</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{editingSubject.units.reduce((a,u)=>a+u.lessons.length, 0)} Lessons</span>
                       </div>
                    </div>
                    <div className="flex gap-3">
                       <button onClick={handleSaveSubject} className="px-8 py-3 bg-brand-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all">Save All Changes</button>
                    </div>
                  </div>

                  <div className="space-y-10">
                    {editingSubject.units.map((unit, uIdx) => (
                      <section key={unit.id} className="space-y-4">
                        <div className="flex items-center justify-between group">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center font-black text-xs text-brand-primary">U{uIdx+1}</div>
                              <input 
                                value={unit.title.en} 
                                onChange={e => {
                                  const u = [...editingSubject.units]; u[uIdx].title.en = e.target.value; setEditingSubject({...editingSubject, units: u});
                                }}
                                className="bg-transparent border-none p-0 text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight focus:ring-0 w-80"
                              />
                           </div>
                           <button onClick={() => {
                             const u = editingSubject.units.filter((_, i) => i !== uIdx); setEditingSubject({...editingSubject, units: u});
                           }} className="p-2 text-rose-400 opacity-0 group-hover:opacity-100 transition-all hover:text-rose-600"><Trash2 className="w-4.5 h-4.5" /></button>
                        </div>

                        <div className="grid grid-cols-1 gap-3 pl-14 border-l-2 border-slate-100 dark:border-slate-800">
                           {unit.lessons.map((lesson, lIdx) => (
                             <div key={lesson.id} className="flex items-center justify-between p-5 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-brand-primary/20 transition-all group">
                                <div className="flex items-center gap-5">
                                   <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">#{lIdx+1}</div>
                                   <div>
                                      <h4 className="text-sm font-black text-slate-800 dark:text-slate-200">{lesson.title.en}</h4>
                                      <div className="flex items-center gap-3 mt-1.5">
                                         <span className={`flex items-center gap-1 text-[9px] font-black uppercase tracking-widest ${lesson.content.blocks?.length ? 'text-emerald-500' : 'text-amber-500'}`}>
                                            <FileText className="w-3 h-3" /> {lesson.content.blocks?.length || 0} Blocks
                                         </span>
                                         {lesson.title.ar && (
                                           <span className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[8px] font-black uppercase tracking-widest rounded-md">Arabic</span>
                                         )}
                                         {lesson.videos?.length ? (
                                           <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-rose-500"><Video className="w-3 h-3" /> {lesson.videos.length} Videos</span>
                                         ) : null}
                                      </div>
                                   </div>
                                </div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                   <button onClick={() => openLessonEditor(uIdx, lIdx)} className="flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-xl text-[10px] font-black uppercase hover:bg-brand-primary hover:text-white transition-all">
                                      <Edit2 className="w-3.5 h-3.5" /> Manage Content
                                   </button>
                                </div>
                             </div>
                           ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                   <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-8">
                      <Layers className="w-10 h-10 text-slate-200" />
                   </div>
                   <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">Select a subject</h3>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- CATEGORIES TAB --- */}
        {activeTab === 'categories' && (
          <div className="flex-1 p-12 overflow-y-auto">
             {/* Same as before... simplified for now */}
             <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-black uppercase mb-8">Manage Classes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {categories.map(cat => (
                     <div key={cat.id} className="p-6 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex items-center justify-between group">
                        <div className="flex items-center gap-5">
                           <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary"><Hash className="w-6 h-6" /></div>
                           <div>
                              <h4 className="font-black text-lg">{cat.name}</h4>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{cat.mode}</p>
                           </div>
                        </div>
                        <button onClick={() => setEditingCategory({...cat})} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:text-brand-primary opacity-0 group-hover:opacity-100 transition-all"><Edit2 className="w-5 h-5" /></button>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        )}
      </main>

      {/* --- MULTI-LANGUAGE LESSON EDITOR --- */}
      <AnimatePresence>
        {editingLesson && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10">
             <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setEditingLesson(null)} />
             <div className="relative w-full max-w-7xl h-full bg-white dark:bg-slate-900 rounded-[3.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-900 z-10">
                  <div className="flex items-center gap-5">
                     <div className="w-14 h-14 rounded-3xl bg-brand-primary flex items-center justify-center text-white shadow-2xl shadow-brand-primary/30">
                        <FileText className="w-7 h-7" />
                     </div>
                     <div>
                       <h2 className="text-2xl font-black tracking-tight leading-none uppercase">{editingLesson.lesson.title.en}</h2>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">{editingLesson.lesson.id}</p>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
                        {['visual', 'json', 'preview'].map(m => (
                          <button 
                            key={m}
                            onClick={() => setEditorMode(m as any)}
                            className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${editorMode === m ? 'bg-white dark:bg-slate-700 text-brand-primary shadow-sm' : 'text-slate-400'}`}
                          >
                            {m === 'visual' ? <Type className="w-3.5 h-3.5 mr-2 inline" /> : m === 'json' ? <Code className="w-3.5 h-3.5 mr-2 inline" /> : <Eye className="w-3.5 h-3.5 mr-2 inline" />}
                            {m}
                          </button>
                        ))}
                     </div>
                     <button onClick={() => setEditingLesson(null)} className="px-6 py-3 font-black uppercase text-[10px] tracking-widest text-slate-400">Discard</button>
                     <button onClick={saveLessonContent} className="px-10 py-3 bg-brand-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-brand-primary/30 active:scale-95 transition-all">Save Changes</button>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-8 sm:p-12 scrollbar-hide bg-[#FDFDFF] dark:bg-[#020617]">
                  
                  {/* --- VISUAL MODE: Multi-Language Fields --- */}
                  {editorMode === 'visual' && (
                    <div className="max-w-5xl mx-auto space-y-16">
                       {/* Section: Titles */}
                       <section className="space-y-8">
                          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                             <Info className="w-5 h-5 text-brand-primary" /> Multi-Language Titles
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1">English Title</label>
                                <input 
                                  value={editingLesson.lesson.title.en} 
                                  onChange={e => setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, title: {...editingLesson.lesson.title, en: e.target.value}}})}
                                  className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 font-bold text-sm"
                                />
                             </div>
                             <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-slate-400 ml-1">Malayalam Title</label>
                                <input 
                                  value={editingLesson.lesson.title.ml} 
                                  onChange={e => setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, title: {...editingLesson.lesson.title, ml: e.target.value}}})}
                                  className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 py-3 font-bold text-sm"
                                />
                             </div>
                             <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase text-brand-primary ml-1">Arabic / Special Title</label>
                                <input 
                                  value={editingLesson.lesson.title.ar || ''} 
                                  onChange={e => setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, title: {...editingLesson.lesson.title, ar: e.target.value}}})}
                                  className="w-full bg-white dark:bg-slate-900 border border-brand-primary/20 rounded-2xl px-5 py-3 font-bold text-sm text-right"
                                  dir="rtl"
                                />
                             </div>
                          </div>
                       </section>

                       {/* Section: Content Blocks */}
                       <section className="space-y-8">
                          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                             <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Content Blocks</h3>
                             <div className="flex gap-2">
                                {['h2', 'p', 'formula', 'img', 'table'].map(type => (
                                  <button key={type} onClick={() => addBlock(type as any)} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[9px] font-black uppercase hover:bg-brand-primary hover:text-white transition-all">+{type}</button>
                                ))}
                             </div>
                          </div>

                          <div className="space-y-10">
                             {editingLesson.lesson.content.blocks?.map((block, bIdx) => (
                                <div key={bIdx} className="group relative p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
                                   <div className="flex items-center gap-3 mb-6">
                                      <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-[9px] font-black uppercase text-indigo-500 tracking-widest">{block.type}</span>
                                      <div className="flex-1 h-[1px] bg-slate-100 dark:bg-slate-800" />
                                      <button onClick={() => {
                                        const b = [...(editingLesson.lesson.content.blocks || [])]; b.splice(bIdx, 1);
                                        setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, content: {...editingLesson.lesson.content, blocks: b}}});
                                      }} className="p-2 text-rose-400 hover:text-rose-600"><Trash2 className="w-4 h-4" /></button>
                                   </div>

                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                      <div className="space-y-2">
                                         <label className="text-[9px] font-black uppercase text-slate-400">English</label>
                                         <textarea 
                                           value={block.en} 
                                           onChange={e => {
                                             const b = [...(editingLesson.lesson.content.blocks || [])]; b[bIdx].en = e.target.value;
                                             setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, content: {...editingLesson.lesson.content, blocks: b}}});
                                           }}
                                           className="w-full bg-slate-50/50 dark:bg-slate-950/50 border-none rounded-xl p-4 text-xs font-bold min-h-[100px]"
                                         />
                                      </div>
                                      <div className="space-y-2">
                                         <label className="text-[9px] font-black uppercase text-slate-400">Malayalam</label>
                                         <textarea 
                                           value={block.ml} 
                                           onChange={e => {
                                             const b = [...(editingLesson.lesson.content.blocks || [])]; b[bIdx].ml = e.target.value;
                                             setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, content: {...editingLesson.lesson.content, blocks: b}}});
                                           }}
                                           className="w-full bg-slate-50/50 dark:bg-slate-950/50 border-none rounded-xl p-4 text-xs font-bold min-h-[100px]"
                                         />
                                      </div>
                                      <div className="space-y-2">
                                         <label className="text-[9px] font-black uppercase text-brand-primary">Arabic</label>
                                         <textarea 
                                           value={block.ar || ''} 
                                           onChange={e => {
                                             const b = [...(editingLesson.lesson.content.blocks || [])]; b[bIdx].ar = e.target.value;
                                             setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, content: {...editingLesson.lesson.content, blocks: b}}});
                                           }}
                                           className="w-full bg-slate-50/50 dark:bg-slate-950/50 border-none rounded-xl p-4 text-xs font-bold min-h-[100px] text-right"
                                           dir="rtl"
                                         />
                                      </div>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </section>
                    </div>
                  )}

                  {/* --- PREVIEW MODE: Multi-Language combinations --- */}
                  {editorMode === 'preview' && (
                    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-sm">
                       <div className="flex justify-center gap-2 mb-10 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl w-fit mx-auto">
                          {[
                            {id:'en', label:'English'},
                            {id:'ml', label:'Malayalam'},
                            {id:'ar', label:'Arabic'},
                            {id:'ml-ar', label:'ML + AR'}
                          ].map(l => (
                            <button 
                              key={l.id}
                              onClick={() => setPreviewLanguage(l.id as any)}
                              className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${previewLanguage === l.id ? 'bg-white dark:bg-slate-700 text-brand-primary shadow-sm' : 'text-slate-400'}`}
                            >
                              {l.label}
                            </button>
                          ))}
                       </div>

                       <div className="text-center space-y-6">
                          <h1 className={`text-5xl font-black tracking-tight leading-tight ${previewLanguage === 'ar' ? 'font-arabic' : ''}`}>
                             {previewLanguage === 'en' ? editingLesson.lesson.title.en : 
                              previewLanguage === 'ml' ? editingLesson.lesson.title.ml : 
                              previewLanguage === 'ar' ? editingLesson.lesson.title.ar : 
                              `${editingLesson.lesson.title.ar || ''} / ${editingLesson.lesson.title.ml}`}
                          </h1>
                       </div>

                       <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                          {editingLesson.lesson.content.blocks?.map((block, idx) => (
                            <div key={idx} className={previewLanguage === 'ar' || previewLanguage === 'ml-ar' ? 'text-right' : ''}>
                               {block.type === 'h2' && (
                                 <h2 className="text-2xl font-black text-brand-primary border-l-4 border-brand-primary pl-4">
                                    {previewLanguage === 'en' ? block.en : 
                                     previewLanguage === 'ml' ? block.ml : 
                                     previewLanguage === 'ar' ? block.ar : 
                                     <div className="flex flex-col gap-1"><span>{block.ar}</span><span className="text-sm text-slate-400">{block.ml}</span></div>}
                                 </h2>
                               )}
                               {block.type === 'p' && (
                                 <p className="text-lg leading-relaxed font-medium">
                                    {previewLanguage === 'en' ? block.en : 
                                     previewLanguage === 'ml' ? block.ml : 
                                     previewLanguage === 'ar' ? block.ar : 
                                     <div className="flex flex-col gap-2"><span>{block.ar}</span><span className="text-base text-slate-500">{block.ml}</span></div>}
                                 </p>
                               )}
                            </div>
                          ))}
                       </div>
                    </div>
                  )}

                  {/* JSON MODE */}
                  {editorMode === 'json' && (
                    <textarea 
                      value={rawJson}
                      onChange={e => updateLessonJson(e.target.value)}
                      className="w-full h-full bg-slate-950 text-emerald-400 font-mono text-xs p-10 rounded-[2.5rem] border-none"
                    />
                  )}
                </div>
             </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

function AnimatePresence({children}: any) { return <>{children}</>; }
