import { useState } from 'react';
import { Users, Activity, BookOpen, AlertCircle, BarChart3, Settings, Plus, Upload, Video, FileText, HelpCircle, Save } from 'lucide-react';
import { Language } from '../../data/curriculum';

export default function TeacherDashboard({ language }: { language: Language }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'students'>('overview');
  const [selectedSubject, setSelectedSubject] = useState('maths');
  const [selectedChapter, setSelectedChapter] = useState('ch1');

  const stats = [
    { label: language === 'en' ? 'Total Students' : 'ആകെ വിദ്യാർത്ഥികൾ', value: '142', icon: Users, color: 'bg-blue-500' },
    { label: language === 'en' ? 'Avg. Completion' : 'ശരാശരി പൂർത്തീകരണം', value: '78%', icon: Activity, color: 'bg-emerald-500' },
    { label: language === 'en' ? 'Active Lessons' : 'സജീവ പാഠങ്ങൾ', value: '12', icon: BookOpen, color: 'bg-indigo-500' },
    { label: language === 'en' ? 'Needs Attention' : 'ശ്രദ്ധിക്കേണ്ടവ', value: '8', icon: AlertCircle, color: 'bg-rose-500' },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 p-4 md:p-8 min-h-screen font-sans text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
              {language === 'en' ? 'Teacher Dashboard' : 'അധ്യാപക ഡാഷ്‌ബോർഡ്'}
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              {language === 'en' ? 'Manage content and monitor student progress.' : 'ഉള്ളടക്കം നിയന്ത്രിക്കുകയും വിദ്യാർത്ഥികളുടെ പുരോഗതി നിരീക്ഷിക്കുകയും ചെയ്യുക.'}
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'content' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}
            >
              Content Management
            </button>
            <button 
              onClick={() => setActiveTab('students')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'students' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}
            >
              Student Progress
            </button>
          </div>
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
                    <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indigo-500" />
                    Class Performance Overview
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {[
                      { name: 'Concept Mastery', score: 85 },
                      { name: 'Virtual Lab Completion', score: 62 },
                      { name: 'Quiz Average', score: 74 },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-slate-700 dark:text-slate-300">{item.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">{item.score}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="bg-indigo-500 h-2.5 rounded-full" 
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions / Alerts */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {language === 'en' ? 'Needs Attention' : 'ശ്രദ്ധിക്കേണ്ടവ'}
                  </h2>
                </div>
                <div className="p-0">
                  <ul className="divide-y divide-slate-100 dark:divide-slate-700">
                    {[
                      { student: 'Rahul M.', issue: 'Failed Quiz 2 times', time: '2h ago' },
                      { student: 'Sneha K.', issue: 'Missed Virtual Lab', time: '1d ago' },
                      { student: 'Arjun P.', issue: 'Low engagement score', time: '2d ago' },
                    ].map((alert, idx) => (
                      <li key={idx} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-slate-900 dark:text-white text-sm">{alert.student}</span>
                          <span className="text-xs text-slate-400">{alert.time}</span>
                        </div>
                        <p className="text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {alert.issue}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'content' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-indigo-500" />
                Content Management
              </h2>
              <div className="flex gap-2">
                <select 
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300"
                >
                  <option value="maths">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                </select>
                <select 
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300"
                >
                  <option value="ch1">Chapter 1</option>
                  <option value="ch2">Chapter 2</option>
                </select>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upload Notes */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" /> Upload Notes
                </h3>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 dark:text-slate-400">Drag & drop PDF or Word files here</p>
                  <button className="mt-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium">Browse Files</button>
                </div>
              </div>

              {/* Attach Videos */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Video className="w-5 h-5 text-rose-500" /> Attach Video Lesson
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Video Title</label>
                    <input type="text" placeholder="e.g., Intro to Arithmetic Sequences" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">YouTube URL</label>
                    <input type="url" placeholder="https://youtube.com/..." className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm" />
                  </div>
                  <button className="w-full px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" /> Add Video
                  </button>
                </div>
              </div>

              {/* Add Quiz Questions */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-5 md:col-span-2">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-500" /> Add Quiz Question
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Question Text</label>
                    <textarea rows={2} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm" placeholder="Enter the question here..."></textarea>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Option A (Correct)</label>
                      <input type="text" className="w-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Option B</label>
                      <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Option C</label>
                      <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Option D</label>
                      <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Explanation</label>
                    <textarea rows={2} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm" placeholder="Explain why Option A is correct..."></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                      <Save className="w-4 h-4" /> Save Question
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-500" />
                Student Progress Tracker
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="p-4 font-bold text-slate-700 dark:text-slate-300 text-sm">Student Name</th>
                    <th className="p-4 font-bold text-slate-700 dark:text-slate-300 text-sm">Chapter Progress</th>
                    <th className="p-4 font-bold text-slate-700 dark:text-slate-300 text-sm">Quiz Avg</th>
                    <th className="p-4 font-bold text-slate-700 dark:text-slate-300 text-sm">Last Active</th>
                    <th className="p-4 font-bold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  {[
                    { name: 'Adithya S.', progress: 85, quiz: 92, lastActive: 'Today', status: 'Excellent' },
                    { name: 'Meera V.', progress: 60, quiz: 75, lastActive: 'Yesterday', status: 'Good' },
                    { name: 'Rahul M.', progress: 30, quiz: 45, lastActive: '3 days ago', status: 'At Risk' },
                    { name: 'Sneha K.', progress: 95, quiz: 88, lastActive: 'Today', status: 'Excellent' },
                  ].map((student, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 font-medium text-slate-900 dark:text-white">{student.name}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 max-w-[100px]">
                            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-700 dark:text-slate-300">{student.quiz}%</td>
                      <td className="p-4 text-slate-500 dark:text-slate-400 text-sm">{student.lastActive}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          student.status === 'Excellent' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                          student.status === 'Good' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                          'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
