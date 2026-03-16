import { useState, useEffect, useMemo } from 'react';
import { Play, RotateCcw, CheckCircle, XCircle, HelpCircle, ChevronRight, Settings, BarChart, Trophy, AlertCircle } from 'lucide-react';
import { Language } from '../data/curriculum';
import { motion, AnimatePresence } from 'framer-motion';
import { saveQuizScore } from '../utils/progressTracker';

interface QuizQuestion {
  q_id: string;
  type: string;
  stem: { en: string; ml: string };
  options: { k: string; text: { en: string; ml: string } }[];
  answer: string;
  explanation?: { en: string; ml: string };
}

interface QuizViewProps {
  questions: QuizQuestion[];
  language: Language;
  quizId?: string;
}

export default function QuizView({ questions, language, quizId = 'default_quiz' }: QuizViewProps) {
  const [quizState, setQuizState] = useState<'setup' | 'active' | 'result'>('setup');
  const [questionCount, setQuestionCount] = useState(20);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<Record<string, any[]>>({});
  const [showReview, setShowReview] = useState(false);

  // Helper to render text based on language
  const renderText = (obj: { en: string; ml: string } | undefined) => {
    if (!obj) return '';
    if (language === 'en') return obj.en;
    if (language === 'ml') return obj.ml;
    return (
      <span className="flex flex-col gap-1">
        <span className="text-slate-900 dark:text-slate-100">{obj.en}</span>
        <span className="text-slate-600 dark:text-slate-400 text-sm">{obj.ml}</span>
      </span>
    );
  };

  const renderSimpleText = (obj: { en: string; ml: string } | undefined) => {
      if (!obj) return '';
      if (language === 'en') return obj.en;
      if (language === 'ml') return obj.ml;
      return `${obj.en} / ${obj.ml}`;
  }

  // Shuffle array helper
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Helper to normalize question data
  const normalizeQuestion = (q: any): QuizQuestion => {
    const options = q.options?.map((opt: any, idx: number) => ({
      k: (opt.k || opt.id || idx).toString(),
      text: opt.text || opt
    })) || [];

    let answerKey = '0';
    if (typeof q.correctAnswer === 'number') {
      answerKey = q.correctAnswer.toString();
    } else if (typeof q.answer === 'number') {
      answerKey = q.answer.toString();
    } else if (typeof q.answer === 'string') {
      answerKey = q.answer;
    } else if (typeof q.correctAnswer === 'string') {
      answerKey = q.correctAnswer;
    }

    return {
      q_id: q.q_id || q.id || Math.random().toString(36).substring(7),
      type: q.type || (q.options ? 'mcq' : 'short_answer'),
      stem: q.stem || q.question,
      options: options,
      answer: answerKey,
      explanation: q.explanation
    };
  };

  const startQuiz = () => {
    // 0. Normalize all questions first
    const normalizedQuestions = questions.map(normalizeQuestion);
    
    // 1. Shuffle all questions
    const shuffled = shuffleArray(normalizedQuestions);
    // 2. Slice to requested count
    const selected = shuffled.slice(0, Math.min(questionCount, questions.length));
    
    // 3. Shuffle options for each question
    const optionsMap: Record<string, any[]> = {};
    selected.forEach(q => {
      optionsMap[q.q_id] = shuffleArray(q.options);
    });

    setActiveQuestions(selected);
    setShuffledOptions(optionsMap);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setQuizState('active');
  };

  const handleOptionSelect = (optionKey: string) => {
    if (showExplanation) return; // Prevent changing after revealing
    setSelectedAnswers(prev => ({
      ...prev,
      [activeQuestions[currentQuestionIndex].q_id]: optionKey
    }));
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
    } else {
      const finalScore = calculateScore();
      saveQuizScore(quizId, Math.round((finalScore / activeQuestions.length) * 100));
      setQuizState('result');
    }
  };

  const calculateScore = () => {
    let correct = 0;
    activeQuestions.forEach(q => {
      if (selectedAnswers[q.q_id] === q.answer) correct++;
    });
    return correct;
  };

  const getPerformanceMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return { text: "Excellent! 🌟", color: "text-emerald-600" };
    if (percentage >= 70) return { text: "Very Good! 👍", color: "text-blue-600" };
    if (percentage >= 50) return { text: "Good 📘", color: "text-indigo-600" };
    return { text: "Needs Improvement 📖", color: "text-orange-600" };
  };

  // Setup Screen
  if (quizState === 'setup') {
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Settings className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {language === 'en' ? 'Quiz Setup' : language === 'ml' ? 'ക്വിസ് ക്രമീകരണം' : 'Quiz Setup / ക്വിസ് ക്രമീകരണം'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {language === 'en' ? 'Customize your quiz experience' : language === 'ml' ? 'നിങ്ങളുടെ ക്വിസ് അനുഭവം ക്രമീകരിക്കുക' : 'Customize your quiz experience / നിങ്ങളുടെ ക്വിസ് അനുഭവം ക്രമീകരിക്കുക'}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
              {language === 'en' ? 'Number of Questions' : language === 'ml' ? 'ചോദ്യങ്ങളുടെ എണ്ണം' : 'Number of Questions / ചോദ്യങ്ങളുടെ എണ്ണം'}
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {[10, 20, 30, 50, questions.length].map((num, idx) => (
                <button
                  key={`${num}-${idx}`}
                  onClick={() => setQuestionCount(num)}
                  className={`py-2 px-3 rounded-lg text-sm font-bold border transition-all ${
                    questionCount === num
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-105'
                      : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500'
                  }`}
                >
                  {num === questions.length ? 'All' : num}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              {language === 'en' ? 'Quiz Info' : language === 'ml' ? 'ക്വിസ് വിവരങ്ങൾ' : 'Quiz Info / ക്വിസ് വിവരങ്ങൾ'}
            </h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
              <li>{language === 'en' ? `Total available questions: ${questions.length}` : language === 'ml' ? `ആകെ ലഭ്യമായ ചോദ്യങ്ങൾ: ${questions.length}` : `Total available questions: ${questions.length} / ആകെ ലഭ്യമായ ചോദ്യങ്ങൾ: ${questions.length}`}</li>
              <li>{language === 'en' ? 'Questions are shuffled every time' : language === 'ml' ? 'ഓരോ തവണയും ചോദ്യങ്ങൾ ക്രമരഹിതമായി വരുന്നു' : 'Questions are shuffled every time / ഓരോ തവണയും ചോദ്യങ്ങൾ ക്രമരഹിതമായി വരുന്നു'}</li>
              <li>{language === 'en' ? 'Immediate feedback with explanations' : language === 'ml' ? 'ഉടനടി ഉത്തരവും വിശദീകരണവും ലഭ്യമാണ്' : 'Immediate feedback with explanations / ഉടനടി ഉത്തരവും വിശദീകരണവും ലഭ്യമാണ്'}</li>
            </ul>
          </div>

          <button
            onClick={startQuiz}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 dark:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            {language === 'en' ? 'Start Quiz' : language === 'ml' ? 'ക്വിസ് ആരംഭിക്കുക' : 'Start Quiz / ക്വിസ് ആരംഭിക്കുക'}
          </button>
        </div>
      </div>
    );
  }

  // Active Quiz Screen
  if (quizState === 'active') {
    const currentQuestion = activeQuestions[currentQuestionIndex];
    
    if (!currentQuestion) {
      return null;
    }

    const currentOptions = shuffledOptions[currentQuestion.q_id];
    
    if (!currentOptions) {
      return null;
    }

    const selectedAnswer = selectedAnswers[currentQuestion.q_id];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    return (
      <div className="fixed inset-0 z-50 bg-slate-50 dark:bg-slate-950 flex flex-col overflow-hidden md:relative md:inset-auto md:z-0 md:bg-transparent md:dark:bg-transparent md:flex-none">
        {/* Mobile Header with Progress */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-3 flex-shrink-0 md:hidden">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span>Question {currentQuestionIndex + 1} / {activeQuestions.length}</span>
            <button 
              onClick={() => {
                if (confirm('Exit quiz? Progress will be lost.')) setQuizState('setup');
              }}
              className="text-red-500 hover:text-red-600"
            >
              Exit
            </button>
          </div>
          <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
              className="h-full bg-indigo-600"
            />
          </div>
        </div>

        {/* Desktop Progress Bar */}
        <div className="hidden md:block mb-6">
          <div className="flex justify-between text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
            <span>Question {currentQuestionIndex + 1} of {activeQuestions.length}</span>
            <span>{Math.round(((currentQuestionIndex + 1) / activeQuestions.length) * 100)}% Completed</span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 transition-all duration-300 ease-out"
              style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Quiz Area - Scrollable only if content is huge, but designed to fit */}
        <div className="flex-1 flex flex-col p-4 md:p-0 overflow-y-auto md:overflow-visible">
          <div className="flex-1 flex flex-col bg-white dark:bg-slate-800 rounded-2xl md:shadow-sm md:border md:border-slate-200 md:dark:border-slate-700 overflow-hidden max-h-full">
            <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col">
              {/* Question Text */}
              <div className="mb-6 flex-shrink-0">
                <h3 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {renderText(currentQuestion.stem)}
                </h3>
              </div>

              {/* Options - Grid for better space utilization on mobile if needed, but list is standard */}
              <div className="space-y-2 md:space-y-3 pb-4">
                {currentOptions.map((opt, idx) => {
                  const isSelected = selectedAnswer === opt.k;
                  const isThisCorrect = opt.k === currentQuestion.answer;
                  const showResult = showExplanation;

                  let optionClass = "w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all flex items-start gap-3 md:gap-4 ";
                  
                  if (showResult) {
                    if (isThisCorrect) {
                      optionClass += "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-900 dark:text-emerald-100";
                    } else if (isSelected && !isThisCorrect) {
                      optionClass += "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-900 dark:text-red-100";
                    } else {
                      optionClass += "border-slate-100 dark:border-slate-700 opacity-50";
                    }
                  } else {
                    if (isSelected) {
                      optionClass += "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-900 dark:text-indigo-100";
                    } else {
                      optionClass += "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800";
                    }
                  }

                  return (
                    <button
                      key={opt.k}
                      onClick={() => handleOptionSelect(opt.k)}
                      disabled={showExplanation}
                      className={optionClass}
                    >
                      <span className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm ${
                        showResult && isThisCorrect ? 'bg-emerald-200 text-emerald-800' :
                        showResult && isSelected && !isThisCorrect ? 'bg-red-200 text-red-800' :
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 pt-0.5 text-sm md:text-base font-medium">
                        {renderText(opt.text)}
                      </span>
                      {showResult && isThisCorrect && <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />}
                      {showResult && isSelected && !isThisCorrect && <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600" />}
                    </button>
                  );
                })}
              </div>

              {/* Result/Explanation Overlay or Section */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={`mt-4 p-4 rounded-xl flex-shrink-0 ${isCorrect ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}
                  >
                    <div className="flex items-start gap-3 overflow-y-auto max-h-32">
                      <div className={`p-1.5 rounded-full flex-shrink-0 ${isCorrect ? 'bg-emerald-200 dark:bg-emerald-800' : 'bg-red-200 dark:bg-red-800'}`}>
                        {isCorrect ? <CheckCircle className="w-4 h-4 text-emerald-700 dark:text-emerald-300" /> : <XCircle className="w-4 h-4 text-red-700 dark:text-red-300" />}
                      </div>
                      <div>
                        <h4 className={`font-bold text-xs md:text-sm mb-1 ${isCorrect ? 'text-emerald-800 dark:text-emerald-200' : 'text-red-800 dark:text-red-200'}`}>
                          {isCorrect ? 'Correct!' : 'Incorrect'}
                        </h4>
                        <div className="text-slate-700 dark:text-slate-300 text-xs md:text-sm leading-snug">
                          {renderText(currentQuestion.explanation)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sticky Mobile/Desktop Footer */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-t border-slate-100 dark:border-slate-800 flex-shrink-0">
              {!showExplanation ? (
                <div className="flex justify-stretch">
                  <button
                    onClick={handleCheckAnswer}
                    disabled={!selectedAnswer}
                    className={`w-full py-3 rounded-xl font-bold text-white transition-all ${
                      selectedAnswer 
                        ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg' 
                        : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed'
                    }`}
                  >
                    {language === 'en' ? 'Check Answer' : language === 'ml' ? 'ഉത്തരം പരിശോധിക്കുക' : 'Check'}
                  </button>
                </div>
              ) : (
                <div className="flex justify-stretch">
                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    {currentQuestionIndex < activeQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (quizState === 'result') {
    const score = calculateScore();
    const total = activeQuestions.length;
    const performance = getPerformanceMessage(score, total);

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="bg-slate-900 dark:bg-slate-950 p-8 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Trophy className="w-12 h-12 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold mb-2">
                {language === 'en' ? 'Quiz Completed!' : language === 'ml' ? 'ക്വിസ് പൂർത്തിയായി!' : 'Quiz Completed! / ക്വിസ് പൂർത്തിയായി!'}
              </h2>
              <p className="text-slate-300">
                {language === 'en' ? 'Here is how you performed' : language === 'ml' ? 'നിങ്ങളുടെ പ്രകടനം താഴെ നൽകുന്നു' : 'Here is how you performed / നിങ്ങളുടെ പ്രകടനം താഴെ നൽകുന്നു'}
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="text-6xl font-black text-slate-900 dark:text-white mb-2">
                {score}<span className="text-3xl text-slate-400 font-bold">/{total}</span>
              </div>
              <div className={`text-xl font-bold ${performance.color}`}>
                {performance.text}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-800 text-center">
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-2xl mb-1">{score}</div>
                <div className="text-emerald-800 dark:text-emerald-200 text-xs font-bold uppercase tracking-wider">Correct</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl border border-red-100 dark:border-red-800 text-center">
                <div className="text-red-600 dark:text-red-400 font-bold text-2xl mb-1">{total - score}</div>
                <div className="text-red-800 dark:text-red-200 text-xs font-bold uppercase tracking-wider">Incorrect</div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowReview(!showReview)}
                className="w-full py-4 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 rounded-xl font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all flex items-center justify-center gap-2"
              >
                {showReview ? (
                  <>
                    <XCircle className="w-5 h-5" />
                    {language === 'en' ? 'Hide Review' : language === 'ml' ? 'റിവ്യൂ മറയ്ക്കുക' : 'Hide Review / റിവ്യൂ മറയ്ക്കുക'}
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {language === 'en' ? 'Review Answers' : language === 'ml' ? 'ഉത്തരങ്ങൾ പരിശോധിക്കുക' : 'Review Answers / ഉത്തരങ്ങൾ പരിശോധിക്കുക'}
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setQuizState('setup');
                  setShowReview(false);
                }}
                className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                {language === 'en' ? 'Restart Quiz' : language === 'ml' ? 'ക്വിസ് പുനരാരംഭിക്കുക' : 'Restart Quiz / ക്വിസ് പുനരാരംഭിക്കുക'}
              </button>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <AnimatePresence>
          {showReview && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-6 pb-12"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white px-2">
                {language === 'en' ? 'Detailed Review' : language === 'ml' ? 'വിശദമായ പരിശോധന' : 'Detailed Review / വിശദമായ പരിശോധന'}
              </h3>
              
              {activeQuestions.map((q, idx) => {
                const userAns = selectedAnswers[q.q_id];
                const isCorrect = userAns === q.answer;
                // Find the text for the user's answer and the correct answer
                // Note: We need to look up in the original options, not shuffled ones, 
                // but since we stored normalized questions in activeQuestions, we can use q.options directly.
                // However, q.options might be shuffled if we shuffled them in place? 
                // Wait, startQuiz creates a new array for activeQuestions but does it deep clone options?
                // The shuffleArray function creates a shallow copy of the array.
                // But startQuiz does: 
                // const optionsMap: Record<string, any[]> = {};
                // selected.forEach(q => { optionsMap[q.q_id] = shuffleArray(q.options); });
                // activeQuestions stores the questions with their original options array (unshuffled).
                
                const userOption = q.options.find(opt => opt.k === userAns);
                const correctOption = q.options.find(opt => opt.k === q.answer);

                return (
                  <div key={q.q_id} className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border-l-4 shadow-sm ${
                    isCorrect ? 'border-l-emerald-500' : 'border-l-red-500'
                  }`}>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                        <span className="text-slate-400 mr-2">#{idx + 1}</span>
                        {renderText(q.stem)}
                      </h4>
                      {isCorrect ? (
                        <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Correct
                        </span>
                      ) : (
                        <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                          <XCircle className="w-3 h-3" /> Incorrect
                        </span>
                      )}
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className={`p-3 rounded-lg text-sm ${
                        isCorrect ? 'bg-emerald-50 dark:bg-emerald-900/10' : 'bg-red-50 dark:bg-red-900/10'
                      }`}>
                        <span className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1">Your Answer</span>
                        <div className="font-medium">
                          {userOption ? renderText(userOption.text) : 'Not Answered'}
                        </div>
                      </div>
                      
                      {!isCorrect && (
                        <div className="p-3 rounded-lg text-sm bg-emerald-50 dark:bg-emerald-900/10">
                          <span className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1 text-emerald-700 dark:text-emerald-300">Correct Answer</span>
                          <div className="font-medium text-emerald-900 dark:text-emerald-100">
                            {correctOption ? renderText(correctOption.text) : 'Unknown'}
                          </div>
                        </div>
                      )}
                    </div>

                    {q.explanation && (
                      <div className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                        <span className="font-bold block mb-1 text-slate-900 dark:text-slate-200 flex items-center gap-2">
                          <HelpCircle className="w-3 h-3" /> Explanation
                        </span>
                        {renderText(q.explanation)}
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return null;
}
