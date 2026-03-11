import { useState, useEffect } from 'react';
import { Trophy, RotateCcw, CheckCircle2, XCircle, Brain } from 'lucide-react';
import { Language } from '../data/curriculum';

interface Conjugation {
  ar: string;
  en: string;
  ml: string;
  person: string;
  gender: string;
  number: string;
}

const verbs = [
  {
    root: 'فعل',
    name: 'Fa\'ala (To Do)',
    forms: [
      { ar: 'فَعَلَ', en: 'He did', ml: 'അവൻ ചെയ്തു', person: '3rd', gender: 'M', number: 'S' },
      { ar: 'فَعَلَا', en: 'They two (m) did', ml: 'അവർ രണ്ടുപേർ (പു) ചെയ്തു', person: '3rd', gender: 'M', number: 'D' },
      { ar: 'فَعَلُوْا', en: 'They (m) did', ml: 'അവർ (പു) ചെയ്തു', person: '3rd', gender: 'M', number: 'P' },
      { ar: 'فَعَلَتْ', en: 'She did', ml: 'അവൾ ചെയ്തു', person: '3rd', gender: 'F', number: 'S' },
      { ar: 'فَعَلَتَا', en: 'They two (f) did', ml: 'അവർ രണ്ടുപേർ (സ്ത്രീ) ചെയ്തു', person: '3rd', gender: 'F', number: 'D' },
      { ar: 'فَعَلْنَ', en: 'They (f) did', ml: 'അവർ (സ്ത്രീ) ചെയ്തു', person: '3rd', gender: 'F', number: 'P' },
      { ar: 'فَعَلْتَ', en: 'You (m) did', ml: 'നീ ചെയ്തു', person: '2nd', gender: 'M', number: 'S' },
      { ar: 'فَعَلْتُمَا', en: 'You two (m/f) did', ml: 'നിങ്ങൾ രണ്ടുപേർ ചെയ്തു', person: '2nd', gender: 'Both', number: 'D' },
      { ar: 'فَعَلْتُمْ', en: 'You (m) did', ml: 'നിങ്ങൾ (പു) ചെയ്തു', person: '2nd', gender: 'M', number: 'P' },
      { ar: 'فَعَلْتِ', en: 'You (f) did', ml: 'നീ (സ്ത്രീ) ചെയ്തു', person: '2nd', gender: 'F', number: 'S' },
      { ar: 'فَعَلْتُنَّ', en: 'You (f) did', ml: 'നിങ്ങൾ (സ്ത്രീ) ചെയ്തു', person: '2nd', gender: 'F', number: 'P' },
      { ar: 'فَعَلْتُ', en: 'I did', ml: 'ഞാൻ ചെയ്തു', person: '1st', gender: 'Both', number: 'S' },
      { ar: 'فَعَلْنَا', en: 'We did', ml: 'ഞങ്ങൾ ചെയ്തു', person: '1st', gender: 'Both', number: 'P' },
    ]
  },
  {
    root: 'نصر',
    name: 'Nasara (To Help)',
    forms: [
      { ar: 'نَصَرَ', en: 'He helped', ml: 'അവൻ സഹായിച്ചു', person: '3rd', gender: 'M', number: 'S' },
      { ar: 'نَصَرَا', en: 'They two (m) helped', ml: 'അവർ രണ്ടുപേർ (പു) സഹായിച്ചു', person: '3rd', gender: 'M', number: 'D' },
      { ar: 'نَصَرُوْا', en: 'They (m) helped', ml: 'അവർ (പു) സഹായിച്ചു', person: '3rd', gender: 'M', number: 'P' },
      { ar: 'نَصَرَتْ', en: 'She helped', ml: 'അവൾ സഹായിച്ചു', person: '3rd', gender: 'F', number: 'S' },
      { ar: 'نَصَرَتَا', en: 'They two (f) helped', ml: 'അവർ രണ്ടുപേർ (സ്ത്രീ) സഹായിച്ചു', person: '3rd', gender: 'F', number: 'D' },
      { ar: 'نَصَرْنَ', en: 'They (f) helped', ml: 'അവർ (സ്ത്രീ) സഹായിച്ചു', person: '3rd', gender: 'F', number: 'P' },
      { ar: 'نَصَرْتَ', en: 'You (m) helped', ml: 'നീ സഹായിച്ചു', person: '2nd', gender: 'M', number: 'S' },
      { ar: 'نَصَرْتُمَا', en: 'You two (m/f) helped', ml: 'നിങ്ങൾ രണ്ടുപേർ സഹായിച്ചു', person: '2nd', gender: 'Both', number: 'D' },
      { ar: 'نَصَرْتُمْ', en: 'You (m) helped', ml: 'നിങ്ങൾ (പു) സഹായിച്ചു', person: '2nd', gender: 'M', number: 'P' },
      { ar: 'نَصَرْتِ', en: 'You (f) helped', ml: 'നീ (സ്ത്രീ) സഹായിച്ചു', person: '2nd', gender: 'F', number: 'S' },
      { ar: 'نَصَرْتُنَّ', en: 'You (f) helped', ml: 'നിങ്ങൾ (സ്ത്രീ) സഹായിച്ചു', person: '2nd', gender: 'F', number: 'P' },
      { ar: 'نَصَرْتُ', en: 'I helped', ml: 'ഞാൻ സഹായിച്ചു', person: '1st', gender: 'Both', number: 'S' },
      { ar: 'نَصَرْنَا', en: 'We helped', ml: 'ഞങ്ങൾ സഹായിച്ചു', person: '1st', gender: 'Both', number: 'P' },
    ]
  }
];

export default function SarfPractice({ language }: { language: Language }) {
  const [currentVerb, setCurrentVerb] = useState(verbs[0]);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>('start');

  const startNewGame = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    setCurrentVerb(randomVerb);
    setCurrentFormIndex(0);
    setScore(0);
    setGameState('playing');
    generateOptions(randomVerb, 0);
  };

  const generateOptions = (verb: typeof verbs[0], index: number) => {
    const correct = verb.forms[index].ar;
    const others = verb.forms
      .filter(f => f.ar !== correct)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(f => f.ar);
    
    setOptions([correct, ...others].sort(() => 0.5 - Math.random()));
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handleOptionSelect = (option: string) => {
    if (selectedOption) return;
    
    setSelectedOption(option);
    const correct = currentVerb.forms[currentFormIndex].ar === option;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 10);

    setTimeout(() => {
      if (currentFormIndex < currentVerb.forms.length - 1) {
        setCurrentFormIndex(i => i + 1);
        generateOptions(currentVerb, currentFormIndex + 1);
      } else {
        setGameState('end');
      }
    }, 1500);
  };

  const renderLabel = (en: string, ml: string) => {
    if (language === 'en') return en;
    if (language === 'ml') return ml;
    return `${en} / ${ml}`;
  };

  if (gameState === 'start') {
    return (
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 text-center shadow-sm">
        <div className="w-20 h-20 bg-brand-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Brain className="w-10 h-10 text-brand-primary dark:text-slate-300" />
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-primary dark:text-white mb-2">
          {renderLabel('Sarf Challenge', 'സ്വറഫ് ചലഞ്ച്')}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
          {renderLabel('Test your knowledge of Arabic verb conjugations. Can you get all 14 forms correct?', 'അറബിക് ക്രിയകളുടെ രൂപമാറ്റത്തെക്കുറിച്ചുള്ള നിങ്ങളുടെ അറിവ് പരിശോധിക്കുക. 14 രൂപങ്ങളും ശരിയായി പറയാൻ നിങ്ങൾക്ക് കഴിയുമോ?')}
        </p>
        <button
          onClick={startNewGame}
          className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
        >
          {renderLabel('Start Practice', 'പരിശീലനം ആരംഭിക്കുക')}
        </button>
      </div>
    );
  }

  if (gameState === 'end') {
    return (
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 text-center shadow-sm">
        <div className="w-20 h-20 bg-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10 text-yellow-500" />
        </div>
        <h3 className="font-display text-3xl font-bold text-brand-primary dark:text-white mb-2">
          {renderLabel('Excellent!', 'മികച്ച പ്രവർത്തനം!')}
        </h3>
        <p className="text-xl font-bold text-brand-teal mb-4">
          {renderLabel(`Final Score: ${score}`, `ആകെ സ്കോർ: ${score}`)}
        </p>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          {renderLabel('You have mastered the conjugation of ' + currentVerb.name, currentVerb.name + ' എന്ന ക്രിയയുടെ രൂപമാറ്റം നിങ്ങൾ പഠിച്ചുകഴിഞ്ഞു.')}
        </p>
        <button
          onClick={startNewGame}
          className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white px-8 py-3 rounded-xl font-bold mx-auto hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          {renderLabel('Try Another Verb', 'മറ്റൊരു ക്രിയ നോക്കാം')}
        </button>
      </div>
    );
  }

  const currentForm = currentVerb.forms[currentFormIndex];

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{currentVerb.name}</span>
          <h4 className="text-lg font-bold text-brand-primary dark:text-white">
            {renderLabel('Identify the Form', 'സീഗ തിരിച്ചറിയുക')}
          </h4>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-brand-teal">{score}</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Score</div>
        </div>
      </div>

      <div className="text-center mb-10">
        <div className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">
          {currentForm.person} {currentForm.gender === 'M' ? 'Male' : currentForm.gender === 'F' ? 'Female' : 'Both'} {currentForm.number === 'S' ? 'Singular' : currentForm.number === 'D' ? 'Dual' : 'Plural'}
        </div>
        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {renderLabel(currentForm.en, currentForm.ml)}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option, idx) => (
          <button
            key={idx}
            disabled={!!selectedOption}
            onClick={() => handleOptionSelect(option)}
            className={`p-6 rounded-2xl text-2xl font-bold transition-all border-2 ${
              selectedOption === option
                ? isCorrect 
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
                  : 'bg-rose-50 border-rose-500 text-rose-700'
                : selectedOption && option === currentForm.ar
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                  : 'bg-slate-50 dark:bg-slate-700/50 border-transparent text-slate-700 dark:text-slate-200 hover:border-brand-primary'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {isCorrect !== null && (
        <div className={`mt-8 flex items-center justify-center gap-2 font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isCorrect ? (
            <><CheckCircle2 className="w-5 h-5" /> {renderLabel('Correct!', 'ശരിയാണ്!')}</>
          ) : (
            <><XCircle className="w-5 h-5" /> {renderLabel('Wrong! The correct form is ' + currentForm.ar, 'തെറ്റാണ്! ശരിയായ രൂപം ' + currentForm.ar + ' എന്നാണ്.')}</>
          )}
        </div>
      )}

      <div className="mt-8 flex gap-1 justify-center">
        {currentVerb.forms.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all ${
              idx === currentFormIndex 
                ? 'w-8 bg-brand-primary' 
                : idx < currentFormIndex ? 'w-4 bg-brand-teal' : 'w-2 bg-slate-200 dark:bg-slate-700'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
