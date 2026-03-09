import { useState } from 'react';
import { Play, RotateCcw, CheckCircle, XCircle, HelpCircle, ChevronRight, Settings, Trophy } from 'lucide-react';
import { Language } from '../../data/curriculum';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

interface QuizEngineProps {
  questions: QuizQuestion[];
  language: Language;
}

export default function QuizEngine({ questions, language }: QuizEngineProps) {
  const [quizState, setQuizState] = useState<'setup' | 'active' | 'result'>('setup');
  const [questionCount, setQuestionCount] = useState(questions.length > 10 ? 10 : questions.length);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<Record<number, string[]>>({});
  const [showReview, setShowReview] = useState(false);

  // Shuffle array helper
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startQuiz = () => {
    // 1. Shuffle all questions
    const shuffled = shuffleArray(questions);
    // 2. Slice to requested count
    const selected = shuffled.slice(0, Math.min(questionCount, questions.length));
    
    // 3. Shuffle options for each question
    const optionsMap: Record<number, string[]> = {};
    selected.forEach((q, idx) => {
      optionsMap[idx] = shuffleArray(q.options);
    });

    setActiveQuestions(selected);
    setShuffledOptions(optionsMap);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setQuizState('active');
  };

  const handleOptionSelect = (option: string) => {
    if (showExplanation) return; // Prevent changing after revealing
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: option
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
      setQuizState('result');
    }
  };

  const calculateScore = () => {
    let correct = 0;
    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) correct++;
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
            Quiz Setup
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Customize your quiz experience
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
              Number of Questions
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {[5, 10, 15, 20, questions.length].filter((v, i, a) => a.indexOf(v) === i && v <= questions.length).map((num, idx) => (
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
              Quiz Info
            </h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
              <li>Total available questions: {questions.length}</li>
              <li>Questions are shuffled every time</li>
              <li>Immediate feedback with explanations</li>
            </ul>
          </div>

          <button
            onClick={startQuiz}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 dark:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Active Quiz Screen
  if (quizState === 'active') {
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const currentOptions = shuffledOptions[currentQuestionIndex];
    const selectedAnswer = selectedAnswers[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    return (
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-6">
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

        {/* Question Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed mb-8">
              {currentQuestion.question}
            </h3>

            <div className="space-y-3">
              {currentOptions.map((opt, idx) => {
                const isSelected = selectedAnswer === opt;
                const isThisCorrect = opt === currentQuestion.answer;
                const showResult = showExplanation;

                let optionClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-4 ";
                
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
                    key={idx}
                    onClick={() => handleOptionSelect(opt)}
                    disabled={showExplanation}
                    className={optionClass}
                  >
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      showResult && isThisCorrect ? 'bg-emerald-200 text-emerald-800' :
                      showResult && isSelected && !isThisCorrect ? 'bg-red-200 text-red-800' :
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 pt-1 font-medium text-slate-900 dark:text-slate-100">
                      {opt}
                    </span>
                    {showResult && isThisCorrect && <CheckCircle className="w-6 h-6 text-emerald-600" />}
                    {showResult && isSelected && !isThisCorrect && <XCircle className="w-6 h-6 text-red-600" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer / Actions */}
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 border-t border-slate-100 dark:border-slate-800">
            {!showExplanation ? (
              <div className="flex justify-end">
                <button
                  onClick={handleCheckAnswer}
                  disabled={!selectedAnswer}
                  className={`px-6 py-3 rounded-xl font-bold text-white transition-all ${
                    selectedAnswer 
                      ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 dark:shadow-none' 
                      : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed'
                  }`}
                >
                  Check Answer
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className={`p-4 rounded-xl ${isCorrect ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${isCorrect ? 'bg-emerald-200 dark:bg-emerald-800' : 'bg-red-200 dark:bg-red-800'}`}>
                      {isCorrect ? <CheckCircle className="w-5 h-5 text-emerald-700 dark:text-emerald-300" /> : <XCircle className="w-5 h-5 text-red-700 dark:text-red-300" />}
                    </div>
                    <div>
                      <h4 className={`font-bold mb-1 ${isCorrect ? 'text-emerald-800 dark:text-emerald-200' : 'text-red-800 dark:text-red-200'}`}>
                        {isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
                      </h4>
                      <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        <span className="font-semibold block mb-1 opacity-70 uppercase tracking-wider text-xs">Explanation</span>
                        {currentQuestion.explanation}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-all flex items-center gap-2"
                  >
                    {currentQuestionIndex < activeQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
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
                Quiz Completed!
              </h2>
              <p className="text-slate-300">
                Here is how you performed
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
                    Hide Review
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Review Answers
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
                Restart Quiz
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
                Detailed Review
              </h3>
              
              {activeQuestions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.answer;

                return (
                  <div key={idx} className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border-l-4 shadow-sm ${
                    isCorrect ? 'border-l-emerald-500' : 'border-l-red-500'
                  }`}>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                        <span className="text-slate-400 mr-2">#{idx + 1}</span>
                        {q.question}
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
                        <div className="font-medium text-slate-900 dark:text-slate-100">
                          {userAns || 'Not Answered'}
                        </div>
                      </div>
                      
                      {!isCorrect && (
                        <div className="p-3 rounded-lg text-sm bg-emerald-50 dark:bg-emerald-900/10">
                          <span className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1 text-emerald-700 dark:text-emerald-300">Correct Answer</span>
                          <div className="font-medium text-emerald-900 dark:text-emerald-100">
                            {q.answer}
                          </div>
                        </div>
                      )}
                    </div>

                    {q.explanation && (
                      <div className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                        <span className="font-bold block mb-1 text-slate-900 dark:text-slate-200 flex items-center gap-2">
                          <HelpCircle className="w-3 h-3" /> Explanation
                        </span>
                        {q.explanation}
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
