import { useState } from 'react';
import { Activity, Beaker, Info } from 'lucide-react';
import { Language } from '../../data/curriculum';

export default function ChemistryInteractive({ language }: { language: Language }) {
  const [activeIsomer, setActiveIsomer] = useState<'chain' | 'position' | 'functional' | 'metamerism'>('chain');

  const renderInline = (str: any) => {
    if (!str) return '';
    if (language === 'bilingual') return `${str.en} / ${str.ml}`;
    return str[language];
  };

  const TextContent = ({ enText, mlText, className = "" }: any) => {
    const isBilingual = language === 'bilingual';
    return (
      <div className={`mb-2 ${className}`}>
        {(language === 'en' || isBilingual) && <div className={isBilingual ? "text-slate-800 dark:text-slate-200" : ""}>{enText}</div>}
        {(language === 'ml' || isBilingual) && <div className={isBilingual ? "text-slate-600 dark:text-slate-400 text-sm mt-1" : ""}>{mlText}</div>}
      </div>
    );
  };

  const t = {
    title: { en: 'Interactive Isomerism Explorer', ml: 'സംവേദനാത്മക ഐസോമെറിസം എക്സ്പ്ലോറർ' },
    desc: { en: 'Select a type of isomerism to see how molecules with the same formula can have different structures.', ml: 'ഒരേ ഫോർമുലയുള്ള തന്മാത്രകൾക്ക് എങ്ങനെ വ്യത്യസ്ത ഘടനകൾ ഉണ്ടാകാമെന്ന് കാണാൻ ഒരു ഐസോമെറിസം തിരഞ്ഞെടുക്കുക.' },
    chain: { en: 'Chain Isomerism', ml: 'ചെയിൻ ഐസോമെറിസം' },
    position: { en: 'Position Isomerism', ml: 'പൊസിഷൻ ഐസോമെറിസം' },
    functional: { en: 'Functional Isomerism', ml: 'ഫങ്ഷണൽ ഐസോമെറിസം' },
    metamerism: { en: 'Metamerism', ml: 'മെറ്റാമെറിസം' },
  };

  const isomerData = {
    chain: {
      formula: 'C₄H₁₀',
      desc: { en: 'Same molecular formula but differ in the structures of carbon chain.', ml: 'ഒരേ തന്മാത്രാ വാക്യവും എന്നാൽ കാർബൺ ശൃംഖലയുടെ ഘടനയിൽ വ്യത്യാസവുമുള്ള സംയുക്തങ്ങൾ.' },
      examples: [
        { name: 'Butane', struct: 'CH₃ - CH₂ - CH₂ - CH₃', highlight: 'Straight chain' },
        { name: '2-Methylpropane', struct: 'CH₃ - CH(CH₃) - CH₃', highlight: 'Branched chain' }
      ]
    },
    position: {
      formula: 'C₃H₈O',
      desc: { en: 'Same molecular formula and functional group, but differ in the position of the functional group.', ml: 'ഒരേ തന്മാത്രാ വാക്യവും ഒരേ ഫങ്ഷണൽ ഗ്രൂപ്പും, എന്നാൽ ഫങ്ഷണൽ ഗ്രൂപ്പിന്റെ സ്ഥാനത്തിൽ (position) വ്യത്യാസവുമുള്ള സംയുക്തങ്ങൾ.' },
      examples: [
        { name: 'Propan-1-ol', struct: 'CH₃ - CH₂ - CH₂ - OH', highlight: '-OH at position 1' },
        { name: 'Propan-2-ol', struct: 'CH₃ - CH(OH) - CH₃', highlight: '-OH at position 2' }
      ]
    },
    functional: {
      formula: 'C₂H₆O',
      desc: { en: 'Same molecular formula but different functional groups.', ml: 'ഒരേ തന്മാത്രാ വാക്യവും എന്നാൽ വ്യത്യസ്ത ഫങ്ഷണൽ ഗ്രൂപ്പുകളുമുള്ള സംയുക്തങ്ങൾ.' },
      examples: [
        { name: 'Ethanol', struct: 'CH₃ - CH₂ - OH', highlight: 'Alcohol (-OH)' },
        { name: 'Methoxymethane', struct: 'CH₃ - O - CH₃', highlight: 'Ether (-O-)' }
      ]
    },
    metamerism: {
      formula: 'C₄H₁₀O',
      desc: { en: 'Same molecular formula but different alkyl groups attached to either side of the functional group.', ml: 'ഒരേ തന്മാത്രാ വാക്യവും, എന്നാൽ ഫങ്ഷണൽ ഗ്രൂപ്പിന്റെ ഇരുവശത്തുമുള്ള ആൽക്കൈൽ ഗ്രൂപ്പുകളിൽ വ്യത്യാസവുമുള്ള ഐസോമറുകൾ.' },
      examples: [
        { name: 'Methoxypropane', struct: 'CH₃ - O - CH₂ - CH₂ - CH₃', highlight: 'Methyl & Propyl' },
        { name: 'Ethoxyethane', struct: 'CH₃ - CH₂ - O - CH₂ - CH₃', highlight: 'Ethyl & Ethyl' }
      ]
    }
  };

  const activeData = isomerData[activeIsomer];

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
        <div className="w-14 h-14 bg-brand-green/10 dark:bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green">
          <Beaker className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-brand-primary dark:text-white">{renderInline(t.title)}</h3>
          <p className="text-slate-500 dark:text-slate-400 font-semibold mt-1">
            <TextContent enText={t.desc.en} mlText={t.desc.ml} />
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Controls */}
        <div className="lg:col-span-4 space-y-3">
          {(Object.keys(isomerData) as Array<keyof typeof isomerData>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveIsomer(key)}
              className={`w-full text-left px-5 py-4 rounded-2xl font-bold transition-all duration-200 border-2 ${
                activeIsomer === key 
                  ? 'bg-brand-green/10 dark:bg-brand-green/20 border-brand-green text-brand-green dark:text-brand-green' 
                  : 'bg-slate-50 dark:bg-slate-800/50 border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {renderInline(t[key])}
            </button>
          ))}
        </div>

        {/* Visualization Area */}
        <div className="lg:col-span-8">
          <div className="bg-brand-bg rounded-3xl p-8 border border-slate-200 dark:border-slate-700 h-full transition-colors duration-300">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-display text-2xl font-bold text-brand-primary dark:text-white">
                {renderInline(t[activeIsomer])}
              </h4>
              <span className="bg-white dark:bg-slate-800 px-4 py-1.5 rounded-xl font-mono font-bold text-brand-teal shadow-sm border border-slate-100 dark:border-slate-700">
                {activeData.formula}
              </span>
            </div>
            
            <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-xl mb-8 border border-slate-200/60 dark:border-slate-700/60 flex gap-3 items-start">
              <Info className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
              <div className="text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                <TextContent enText={activeData.desc.en} mlText={activeData.desc.ml} />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {activeData.examples.map((ex, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-green opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <h5 className="font-bold text-lg text-brand-primary dark:text-white mb-4">{ex.name}</h5>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-4 flex items-center justify-center min-h-[100px] border border-slate-100 dark:border-slate-700 overflow-x-auto">
                    <code className="font-mono text-lg font-bold text-slate-800 dark:text-slate-200 tracking-wider text-center whitespace-nowrap">
                      {ex.struct}
                    </code>
                  </div>
                  
                  <div className="inline-block bg-brand-accent/20 dark:bg-brand-accent/10 text-brand-primary dark:text-brand-accent px-3 py-1 rounded-lg text-sm font-bold">
                    {ex.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
