import React from 'react';
import { Language } from '../data/curriculum';

const renderWithVariables = (text: string) => {
  if (!text) return '';
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      return <span key={index} className="text-blue-600 dark:text-blue-400 font-bold">{part}</span>;
    }
    return part;
  });
};

export default function FormatsView({ subjectId, language }: { subjectId: string, language: Language }) {
  const isBilingual = language === 'bilingual';
  
  const t = (en: string, ml: string, ar?: string) => {
    if (language === 'en') return en;
    if (language === 'ml') return ml;
    if (language === 'ar' && ar) return ar;
    if (isBilingual) {
      if (ar) return `${ar} / ${en} / ${ml}`;
      return `${en} / ${ml}`;
    }
    return en;
  };

  const FormatLine = ({ hi, en, ml, className = "" }: { hi: string, en: string, ml: string, className?: string }) => {
    return (
      <div className={`mb-3 last:mb-0 ${className}`}>
        <p className="text-slate-900 dark:text-white font-medium">{renderWithVariables(hi)}</p>
        {(language === 'en' || isBilingual) && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 ml-2 italic">EN: {en}</p>
        )}
        {(language === 'ml' || isBilingual) && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 ml-2 italic text-blue-600/70 dark:text-blue-400/70">ML: {ml}</p>
        )}
      </div>
    );
  };

  if (subjectId === 'sub-hindi') {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-8 text-slate-800 dark:text-slate-200">
        <div>
          <h2 className="text-2xl font-bold text-brand-primary dark:text-white mb-4">
            {t("Kerala SSLC Hindi Exam: Easy Formats", "കേരള SSLC ഹിന്ദി പരീക്ഷ: ലളിതമായ ഫോർമാറ്റുകൾ", "केरल SSLC हिंदी परीक्षा: आसान प्रारूप")}
          </h2>
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            {t(
              "This guide has simple, easy-to-memorize templates. Just fill in the [...] blanks with simple words from the question.",
              "ലളിതമായ ടെംപ്ലേറ്റുകൾ ഇവിടെ നൽകുന്നു. ചോദ്യത്തിൽ നിന്ന് അനുയോജ്യമായ വാക്കുകൾ ഉപയോഗിച്ച് [...] ഭാഗം പൂരിപ്പിക്കുക.",
              "इस गाइड में सरल टेम्पलेट हैं। बस प्रश्न से सरल शब्दों के साथ [...] रिक्त स्थान भरें।"
            )}
          </p>
        </div>

        {/* 1. Diary */}
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">
            {t("1. Diary Writing", "1. ഡയറി കുറിപ്പ്", "1. डायरी लेखन")} (4-5 Marks)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">
            {t("Always draw a box around your diary.", "ഡയറിക്ക് ചുറ്റും എപ്പോഴും ഒരു ബോക്സ് വരയ്ക്കുക.", "हमेशा अपनी डायरी के चारों ओर एक बॉक्स बनाएँ।")}
          </p>
          
          <div className="bg-white dark:bg-slate-900 p-6 border border-dashed border-slate-300 dark:border-slate-600 rounded-lg font-sans text-sm mb-4">
            <div className="flex justify-between mb-6 border-b pb-2">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 dark:text-white">{renderWithVariables("[Date]")}(तिथि)</p>
                {t("", "") && <p className="text-[10px] opacity-70 italic">{t("[Date]", "[തിയ്യതി]")}</p>}
              </div>
              <div className="text-right space-y-1">
                <p className="font-bold text-slate-900 dark:text-white">{renderWithVariables("[Day]")}(दिन)</p>
                <p className="text-[10px] opacity-70 italic">{t("[Day]", "[ദിവസം]")}</p>
              </div>
            </div>
            
            <FormatLine 
              hi="[Time, e.g., रात 10:00 बजे]" 
              en="[Time, e.g., 10:00 PM]" 
              ml="[സമയം, ഉദാ: രാത്രി 10:00 മണി]"
              className="mb-6"
            />

            <FormatLine 
              hi="आज का दिन मेरे लिए बहुत [अच्छा / बुरा] था।" 
              en="Today was a very [good / bad] day for me." 
              ml="ഇന്നത്തെ ദിവസം എനിക്ക് വളരെ [നല്ലത് / മോശം] ആയിരുന്നു."
            />

            <FormatLine 
              hi="आज [क्या हुआ - घटना के बारे में 1 वाक्य]।" 
              en="Today [what happened - 1 sentence about the event]." 
              ml="ഇന്ന് [എന്തുണ്ടായി - സംഭവത്തെക്കുറിച്ച് ഒരു വാക്യം]."
            />

            <FormatLine 
              hi="मुझे यह देखकर बहुत [दुख / खुशी] हुई।" 
              en="I felt very [sad / happy] to see this." 
              ml="ഇതു കണ്ടപ്പോൾ എനിക്ക് വളരെ [സങ്കടം / സന്തോഷം] തോന്നി."
            />

            <FormatLine 
              hi="मैं उम्मीद करता हूँ कि आगे सब ठीक होगा। अब मुझे सोना चाहिए।" 
              en="I hope that everything will be fine ahead. Now I should sleep." 
              ml="മുന്നോട്ടുള്ളതെല്ലാം ശുഭമാകുമെന്ന് ഞാൻ പ്രതീക്ഷിക്കുന്നു. ഇനി എനിക്ക് ഉറങ്ങണം."
            />

            <div className="mt-8 text-right border-t pt-2">
              <p className="font-bold text-slate-900 dark:text-white">{renderWithVariables("[Character's Name]")}(नाम)</p>
              <p className="text-[10px] opacity-70 italic">{t("[Character's Name]", "[കഥാപാത്രത്തിന്റെ പേര്]")}</p>
            </div>
          </div>
        </div>

        {/* 2. Letter Writing */}
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">
            {t("2. Letter Writing", "2. കത്തെഴുതൽ", "2. पत्र लेखन")} (5-6 Marks)
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 text-brand-primary dark:text-white italic">
                📝 {t("Informal Letter (To Friend)", "അനൗദ്യോഗിക കത്ത് (കൂട്ടുകാരന്)", "अनौपचारिक पत्र (मित्र को)")}
              </h4>
              <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg text-sm">
                <div className="text-right mb-6 space-y-1">
                  <p className="font-bold">{renderWithVariables("[Place]")}(स्थान)</p>
                  <p className="font-bold">{renderWithVariables("[Date]")}(तिथि)</p>
                </div>
                
                <FormatLine hi="प्रिय [Friend's Name]," en="Dear [Friend's Name]," ml="പ്രിയപ്പെട്ട [കൂട്ടുകാരന്റെ പേര്]," />
                <p className="mb-4 ml-4 font-medium text-slate-900 dark:text-white">सप्रेम नमस्ते।</p>
                
                <FormatLine 
                  hi="मैं यहाँ ठीक हूँ। आशा है तुम भी ठीक होगे। यह पत्र मैं तुम्हें [Topic] के बारे में बताने के लिए लिख रहा हूँ।" 
                  en="I am fine here. Hope you are also fine. I am writing this letter to tell you about [Topic]." 
                  ml="ഞാൻ ഇവിടെ സുഖമായിരിക്കുന്നു. നിനക്കും സുഖമെന്ന് കരുതുന്നു. [വിഷയം] കുറിച്ച് നിന്നോട് പറയാനാണ് ഞാൻ ഈ കത്തെഴുതുന്നത്."
                />
                
                <FormatLine 
                  hi="[विषय के बारे में 2 वाक्य]।" 
                  en="[Write 2 sentences about the topic]." 
                  ml="[വിഷയത്തെക്കുറിച്ച് 2 വാക്യങ്ങൾ]."
                />

                <FormatLine 
                  hi="सबको मेरा प्यार देना। पत्र का उत्तर जल्दी देना।" 
                  en="Give my love to all. Reply to the letter soon." 
                  ml="എല്ലാവർക്കും എന്റെ സ്നേഹം അറിയിക്കുക. കത്തിന് മറുപടി ഉടൻ നൽകുമല്ലോ."
                />

                <div className="text-right mt-6 pt-2 border-t">
                  <p className="font-bold">तुम्हारा मित्र,</p>
                  <p className="font-bold">{renderWithVariables("[Your Name]")}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-brand-primary dark:text-white italic">
                📝 {t("Formal Letter (To Editor)", "ഔദ്യോഗിക കത്ത് (പത്രാധിപർക്ക്)", "औपचारिक पत्र (संपादक को)")}
              </h4>
              <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg text-sm">
                <p className="font-bold mb-1">प्रेषक: (From)</p>
                <div className="ml-4 mb-6 space-y-1 text-slate-600 dark:text-slate-400">
                  <p>{renderWithVariables("[Your Name]")}</p>
                  <p>{renderWithVariables("[Your City]")}</p>
                </div>

                <p className="font-bold mb-1">सेवा में: (To)</p>
                <div className="ml-4 mb-6 space-y-1 text-slate-600 dark:text-slate-400">
                  <p>संपादक महोदय (The Editor)</p>
                  <p>{renderWithVariables("[Newspaper Name]")}</p>
                  <p>{renderWithVariables("[City]")}</p>
                </div>

                <p className="mb-4 text-right font-bold">दिनांक: {renderWithVariables("[Date]")}</p>
                
                <FormatLine 
                  hi="विषय: [Topic, e.g., बाल मजदूरी] के संबंध में।" 
                  en="Subject: Regarding [Topic, e.g., Child Labor]." 
                  ml="വിഷയം: [വിഷയം, ഉദാ: ബാലവേല] സംബന്ധിച്ച്."
                  className="font-bold"
                />

                <p className="mb-2 font-bold text-slate-900 dark:text-white">महोदय, (Sir)</p>
                
                <FormatLine 
                  hi="मैं [Your City] का निवासी हूँ। मैं इस पत्र के माध्यम से [Topic] की ओर ध्यान खींचना चाहता हूँ।" 
                  en="I am a resident of [Your City]. I want to draw attention to [Topic] through this letter." 
                  ml="ഞാൻ [സ്ഥലം] നിവാസിയാണ്. ഈ കത്തിലൂടെ [വിഷയം] ലേക്ക് ശ്രദ്ധ ക്ഷണിക്കാൻ ഞാൻ ആഗ്രഹിക്കുന്നു."
                />

                <FormatLine 
                  hi="हमारे इलाके में [समस्या - 1 वाक्य]। इससे बहुत परेशानी हो रही है।" 
                  en="In our area [Problem - 1 sentence]. This is causing a lot of trouble." 
                  ml="ഞങ്ങളുടെ പ്രദേശത്ത് [പ്രശ്നം - 1 വാക്യം]. ഇത് വലിയ ബുദ്ധിമുട്ട് ഉണ്ടാക്കുന്നു."
                />

                <FormatLine 
                  hi="कृपया इस समस्या को जल्दी सुलझाएँ।" 
                  en="Please solve this problem quickly." 
                  ml="ദയവായി ഈ പ്രശ്നം ഉടൻ പരിഹരിക്കുമല്ലോ."
                />

                <div className="mt-6 pt-2 border-t">
                  <p className="font-bold">धन्यवाद। (Thank you)</p>
                  <p className="mt-2 font-bold">भवदीय, (Yours faithfully)</p>
                  <p className="font-bold">{renderWithVariables("[Your Name]")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Poem Appreciation */}
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">
            {t("3. Poem Appreciation", "3. ആസ്വാദനക്കുറിപ്പ്", "3. आस्वादन टिप्पणी")} (6-8 Marks)
          </h3>
          <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg text-sm space-y-6">
            <div>
              <p className="font-bold">शीर्षक: {renderWithVariables("[Poem Name]")}</p>
              <p className="font-bold">कवि: {renderWithVariables("[Poet's Name]")}</p>
            </div>

            <FormatLine 
              hi="[Poet's Name] बहुत प्रसिद्ध कवि हैं। उनकी यह कविता बहुत अच्छी है।" 
              en="[Poet's Name] is a very famous poet. This poem of theirs is very good." 
              ml="[കവിയുടെ പേര്] വളരെ പ്രശസ്തനായ കവിയാണ്. അദ്ദേഹത്തിന്റെ ഈ കവിത വളരെ മികച്ചതാണ്."
            />

            <FormatLine 
              hi="इस कविता में कवि ने [Main Topic] के बारे में बताया है।" 
              en="In this poem, the poet has told about [Main Topic]." 
              ml="ഈ കവിതയിൽ കവി [പ്രധാന വിഷയം] കുറിച്ചാണ് പറയുന്നത്."
            />

            <FormatLine 
              hi="कवि कहते हैं कि [कविता की कहानी के बारे में 2 वाक्य]।" 
              en="The poet says that [2 sentences about the poem's story]." 
              ml="കവി പറയുന്നത് [കവിതയിലെ കഥയെക്കുറിച്ച് 2 വാക്യം]."
            />

            <FormatLine 
              hi="कविता की भाषा बहुत सरल और सुंदर है।" 
              en="The language of the poem is very simple and beautiful." 
              ml="കവിതയുടെ ഭാഷ വളരെ ലളിതവും മനോഹരവുമാണ്."
            />

            <FormatLine 
              hi="निष्कर्ष: यह कविता हमें यह संदेश देती है कि [Message of the poem]।" 
              en="Conclusion: This poem gives us the message that [Message]." 
              ml="ഉപസംഹാരം: ഈ കവിത [സന്ദേശം] എന്ന സന്ദേശമാണ് നമുക്ക് നൽകുന്നത്."
              className="font-bold"
            />
          </div>
        </div>

        {/* 4. Character Sketch */}
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">
            {t("4. Character Sketch", "4. സ്വഭാവചിത്രീകരണം", "4. चरित्र-चित्रण")} (4-5 Marks)
          </h3>
          <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg text-sm space-y-6">
            <h4 className="font-bold text-center border-b pb-2">{renderWithVariables("[Character Name]")} का चरित्र-चित्रण</h4>
            
            <FormatLine 
              hi="[Character Name] '[Story Name]' का मुख्य पात्र है।" 
              en="[Character Name] is the main character of '[Story Name]'." 
              ml="'[കഥയുടെ പേര്]' എന്ന പാഠഭാഗത്തിലെ പ്രധാന കഥാപാത്രമാണ് [കഥാപാത്രത്തിന്റെ പേര്]."
            />

            <FormatLine 
              hi="वह स्वभाव से बहुत [Quality, e.g., अच्छा / साहसी] है।" 
              en="He/She is very [Quality] by nature." 
              ml="അദ്ദേഹം/അവൾ സ്വഭാവത്താൽ വളരെ [ഗുണം, ഉദാ: നല്ല/ധീരൻ] ആണ്."
            />

            <FormatLine 
              hi="कहानी में हम देखते हैं कि वह [वह क्या करता है - 1 वाक्य]।" 
              en="In the story we see that he/she [what they do]." 
              ml="ഈ കഥയിൽ അദ്ദേഹം/അവൾ [ചെയ്യുന്ന കാര്യം - 1 വാക്യം] എന്ന് നമുക്ക് കാണാൻ കഴിയും."
            />

            <FormatLine 
              hi="उसकी सबसे बड़ी खूबी यह है कि वह [Main Good Habit]।" 
              en="His/Her greatest quality is that he/she [Main Habit]." 
              ml="അദ്ദേഹത്തിന്റെ/അവളുടെ ഏറ്റവും വലിയ പ്രത്യേകത [പ്രധാന ഗുണം] എന്നതാണ്."
            />

            <FormatLine 
              hi="अंत में, यह पात्र बहुत अच्छा है और हमें प्रेरणा देता है।" 
              en="In the end, this character is very good and inspires us." 
              ml="ചുരുക്കത്തിൽ, ഈ കഥാപാത്രം വളരെ മികച്ചതും നമുക്ക് പ്രചോദനം നൽകുന്നതുമാണ്."
            />
          </div>
        </div>

        {/* 5. Profile Writing */}
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">
            {t("5. Profile Writing", "5. ജീവചരിത്രക്കുറിപ്പ്", "5. जीवन परिचय")} (4-5 Marks)
          </h3>
          <p className="text-xs text-slate-500 mb-4">{t("(Turn the given hints into simple sentences. Do not use bullets.)", "(സൂചനകൾ ഉപയോഗിച്ച് ലളിതമായ വാക്യങ്ങളാക്കി മാറ്റുക. ബുള്ളറ്റ് പോയിന്റുകൾ ഒഴിവാക്കുക.)", "(दिए गए संकेतों को सरल वाक्यों में बदलें। बुलेट्स का प्रयोग न करें।)")}</p>
          <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg text-sm space-y-6">
            <h4 className="font-bold text-center underline decoration-2">{renderWithVariables("[Person's Name]")}</h4>
            
            <FormatLine 
              hi="[Person's Name] का जन्म [Date of Birth] को [Place of Birth] में हुआ था।" 
              en="[Name] was born on [Date] in [Place]." 
              ml="[പേര്] [തിയ്യതി] ൽ [സ്ഥലം] ൽ ജനിച്ചു."
            />

            <FormatLine 
              hi="उन्होंने अपनी शिक्षा [Education Hint] से पूरी की।" 
              en="He/She completed his/her education from [Education]." 
              ml="അദ്ദേഹം/അവൾ തന്റെ വിദ്യാഭ്യാസം [വിദ്യാഭ്യാസം] ൽ നിന്ന് പൂർത്തിയാക്കി."
            />

            <FormatLine 
              hi="वे एक महान [Profession, e.g., लेखक / वैज्ञानिक] थे।" 
              en="He/She was a great [Profession]." 
              ml="അദ്ദേഹം/അവൾ ഒരു മികച്ച [തൊഴിൽ, ഉദാ: എഴുത്തുകാരൻ/ശാസ്ത്രജ്ഞൻ] ആയിരുന്നു."
            />

            <FormatLine 
              hi="उनकी प्रमुख रचनाएँ [Books/Works Hint] हैं।" 
              en="His/Her major works are [Works]." 
              ml="അദ്ദേഹത്തിന്റെ/അവളുടെ പ്രധാന കൃതികൾ [കൃതികൾ] എന്നിവയാണ്."
            />

            <FormatLine 
              hi="उन्हें [Awards Hint] पुरस्कार मिला।" 
              en="He/She received the [Awards] award." 
              ml="അദ്ദേഹത്തിന്/അവൾക്ക് [പുരസ്കാരം] പുരസ്കാരം ലഭിച്ചു."
            />

            <FormatLine 
              hi="[Date of Death] को उनका निधन हो गया, लेकिन वे आज भी अमर हैं।" 
              en="He/She passed away on [Date], but he/she is still immortal." 
              ml="[തിയ്യതി] ൽ അദ്ദേഹം/അവൾ അന്തരിച്ചു, എങ്കിലും ഇന്നും അദ്ദേഹം/അവൾ സ്മരിക്കപ്പെടുന്നു."
            />
          </div>
        </div>

        {/* 6. Screenplay */}
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">
            {t("6. Screenplay Scene", "6. തിരക്കഥാ രംഗം", "6. पटकथा लेखन")} (4-6 Marks)
          </h3>
          <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg text-sm space-y-6">
            <div className="space-y-3 border-b pb-4">
              <p className="font-bold text-slate-900 dark:text-white">दृश्य विवरण: (Scene Details)</p>
              <div className="ml-4 space-y-2">
                <p><strong>स्थान (Location):</strong> {renderWithVariables("[Place Name]")}</p>
                <p><strong>समय (Time):</strong> {renderWithVariables("[Day / Night]")}</p>
                <p><strong>पात्र (Characters):</strong> {renderWithVariables("[Character Names]")}</p>
              </div>
            </div>

            <div className="italic text-slate-500 mb-4">
              <FormatLine 
                hi="([ब्रैकेट में पात्र की गतिविधि लिखें - 1 वाक्य])" 
                en="([Write character activity in brackets - 1 sentence])" 
                ml="([കഥാപാത്രത്തിന്റെ പ്രവർത്തികൾ ബ്രാക്കറ്റിൽ എഴുതുക - 1 വാക്യം])"
              />
            </div>

            <div className="space-y-4">
              <div className="pl-4 border-l-4 border-slate-100">
                <p className="font-bold text-brand-primary mb-1">{renderWithVariables("[Character A]")}:</p>
                <FormatLine hi="[संवाद 1]" en="[Dialogue 1]" ml="[സംഭാഷണം 1]" className="mb-0" />
              </div>

              <div className="pl-4 border-l-4 border-brand-teal/20">
                <p className="font-bold text-brand-teal mb-1">{renderWithVariables("[Character B]")}:</p>
                <FormatLine hi="[संवाद 2]" en="[Dialogue 2]" ml="[സംഭാഷണം 2]" className="mb-0" />
              </div>
            </div>

            <p className="text-center italic text-xs text-slate-400 mt-6 border-t pt-2">दृश्य समाप्त (Scene Ends)</p>
          </div>
        </div>

        {/* 7. Conversation */}
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">
            {t("6. Conversation", "6. സംഭാഷണം", "6. वार्तालाप")} (4 Marks)
          </h3>
          <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg text-sm space-y-4">
            <p className="font-bold border-b pb-2">{renderWithVariables("[A]")} और {renderWithVariables("[B]")} के बीच बातचीत:</p>
            
            <FormatLine hi="[A]: नमस्ते! तुम कैसे हो?" en="[A]: Namaste! How are you?" ml="[A]: നമസ്തേ! നിനക്ക് സുഖമാണോ?" />
            <FormatLine hi="[B]: मैं ठीक हूँ। पर तुम इतने [उदास / खुश] क्यों हो?" en="[B]: I am fine. But why are you so [sad / happy]?" ml="[B]: എനിക്ക് സുഖമാണ്. പക്ഷേ നീ എന്താണ് ഇത്ര [സങ്കടത്തിൽ / സന്തോഷത്തിൽ] ഇരിക്കുന്നത്?" />
            <FormatLine hi="[A]: क्या बताऊँ, [Problem/Situation - 1 वाक्य]।" en="[A]: What to say, [Situation]." ml="[A]: എന്തുപറയാനാണ്, [കാര്യം - 1 വാക്യം]." />
            <FormatLine hi="[B]: अरे! यह तो बहुत [बुरी / अच्छी] बात है। अब क्या करें?" en="[B]: Oh! That is very [bad / good]. What to do now?" ml="[B]: അതെയാണോ! അത് വളരെ [മോശം / നല്ല] കാര്യമാണല്ലോ. ഇനിയിപ്പോൾ എന്തുചെയ്യും?" />
            <FormatLine hi="[A]: चलो, हम [Solution / Next step] करते हैं।" en="[A]: Come, let's do [Solution]." ml="[A]: വരൂ, നമുക്ക് [പരിഹാരം] ചെയ്യാം." />
            <FormatLine hi="[B]: हाँ, बिल्कुल ठीक। चलो चलते हैं।" en="[B]: Yes, absolutely right. Let's go." ml="[B]: അതെ, തീർച്ചയായും. നമുക്ക് പോകാം." />
          </div>
        </div>

        {/* 7. Poster & News */}
        <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-4">
            {t("7. Poster & News", "7. പോസ്റ്റർ / വാർത്ത", "7. पोस्टर / समाचार")} (4 Marks)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-brand-primary dark:text-white italic">📝 {t("Program Poster Format", "പ്രോഗ്രാം പോസ്റ്റർ ഫോർമാറ്റ്", "कार्यक्रम पोस्टर प्रारूप")}</h4>
              <div className="bg-white dark:bg-slate-900 p-4 border-4 border-double border-slate-800 dark:border-slate-400 rounded-lg text-center aspect-[3/4] flex flex-col justify-between">
                <div className="space-y-1">
                  <h5 className="text-lg font-bold underline decoration-2">{renderWithVariables("[Program Title, e.g., हिंदी क्लब का उद्घाटन]")}</h5>
                  <p className="text-[10px] opacity-70 italic">{t("(Title)", "(തലക്കെട്ട്)")}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-brand-teal text-sm">उद्घाटन (Inauguration):</p>
                    <p className="font-bold">{renderWithVariables("[Inaugurator Name]")}</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-teal text-sm">अध्यक्ष (President):</p>
                    <p className="font-bold">{renderWithVariables("[President Name]")}</p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                  <p><strong>तिथि (Date):</strong> {renderWithVariables("[Date]")}</p>
                  <p><strong>समय (Time):</strong> {renderWithVariables("[Time]")}</p>
                  <p><strong>स्थान (Venue):</strong> {renderWithVariables("[Venue]")}</p>
                </div>

                <p className="text-xs font-bold text-blue-600/80 uppercase tracking-wider mt-2">आप सबका स्वागत है! (All are welcome)</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-brand-primary dark:text-white italic">📝 {t("News Format", "വാർത്താ ഫോർമാറ്റ്", "समाचार प्रारूप")}</h4>
              <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700 rounded-lg text-sm space-y-4">
                <div className="text-center space-y-1">
                  <h5 className="font-bold text-base underline">{renderWithVariables("[Headline - e.g., बाल मज़दूर को बचाया गया]")}</h5>
                  <p className="text-[10px] opacity-70 italic">{t("(Headline)", "(തലക്കെട്ട്)")}</p>
                </div>

                <p className="mb-2 font-bold">{renderWithVariables("[City]")}, {renderWithVariables("[Date]")}:</p>
                
                <FormatLine 
                  hi="आज [City] में एक घटना हुई। [Group Name] ने एक बच्चे को [Situation] से छुड़ाया।" 
                  en="Today an incident happened in [City]. [Group] rescued a child from [Situation]." 
                  ml="ഇന്ന് [സ്ഥലം] ൽ ഒരു സംഭവം നടന്നു. [കൂട്ടം] ഒരു കുട്ടിയെ [സാഹചര്യം] ൽ നിന്ന് രക്ഷപെടുത്തി."
                />

                <FormatLine 
                  hi="यह घटना सुबह हुई। लोगों ने देखा कि बच्चा बहुत परेशान था।" 
                  en="This incident happened in the morning. People saw the child was very troubled." 
                  ml="സംഭവം രാവിലെയാണ് നടന്നത്. കുട്ടി വളരെ അസ്വസ്ഥനാണെന്ന് ആളുകൾ കണ്ടു."
                />

                <p className="pt-2 border-t text-slate-500 italic">पुलिस इस मामले की जाँच कर रही है। (Police is investigating the matter.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 space-y-8 text-slate-800 dark:text-slate-200">
      <div>
        <h2 className="text-2xl font-bold text-brand-primary dark:text-white mb-4">SSLC Malayalam II: Type C (Essay) Master Formats</h2>
        <p className="mb-4 text-slate-600 dark:text-slate-400">
          To score full marks in 6-8 mark questions, your answer must have a clear structure: <strong>Introduction (ആമുഖം) -&gt; Core Content (വിശദീകരണം) -&gt; Relevance/Style (സവിശേഷതകൾ/കാലികപ്രസക്തി) -&gt; Conclusion (ഉപസംഹാരം)</strong>.
        </p>
        <p className="mb-6">
          Here are the universal templates for the top repeating question types. You can memorize the Malayalam phrases used here to make your paper look highly professional.
        </p>
      </div>

      {/* Format 1 */}
      <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">Format 1: കഥാപാത്ര നിരൂപണം (Character Sketch)</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">Use this when asked to analyze or describe a character's traits, mental state, or role in a story.</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 1: Introduction (ആമുഖം)</h4>
            <p className="mt-1">{renderWithVariables("മലയാള സാഹിത്യത്തിലെ ശ്രദ്ധേയനായ എഴുത്തുകാരൻ/എഴുത്തുകാരി [Author Name] രചിച്ച [Name of the Book/Collection] എന്ന കൃതിയിലെ/കഥയിലെ ശ്രദ്ധേയമായ ഒരു കഥാപാത്രമാണ് [Character Name]. മനുഷ്യ മനസ്സുകളുടെ സങ്കീർണ്ണതകളും സാമൂഹിക ചുറ്റുപാടുകളും ഈ കഥാപാത്രത്തിലൂടെ വളരെ വ്യക്തമായി വരച്ചുകാട്ടാൻ ഗ്രന്ഥകാരന് കഴിഞ്ഞിട്ടുണ്ട്.")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 2: Core Traits & Role in the Story (സ്വഭാവ സവിശേഷതകൾ)</h4>
            <p className="mt-1">വളരെ <span className="underline decoration-brand-accent/50">ജീവസ്സുറ്റതും</span> വായനക്കാരുടെ മനസ്സിൽ മായാതെ നിൽക്കുന്നതുമായ ഒരു കഥാപാത്രമാണിത്. {renderWithVariables("[Character's main trait - e.g., സ്നേഹം, ദാരിദ്ര്യം, നിസ്സഹായത, ധീരത]")} ആണ് ഈ കഥാപാത്രത്തിന്റെ മുഖ്യ സവിശേഷത. കഥയിലെ പ്രധാന സംഭവവികാസങ്ങളെല്ലാം ഈ കഥാപാത്രവുമായി ബന്ധപ്പെട്ടാണ് കിടക്കുന്നത്. {renderWithVariables("[Briefly explain 2-3 sentences about what the character does in the story based on the question]")}. ഈ സന്ദർഭങ്ങളിൽ കഥാപാത്രത്തിന്റെ മാനസികാവസ്ഥ വളരെ ഹൃദയസ്പർശിയായി അവതരിപ്പിച്ചിരിക്കുന്നു.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 3: Evolution & Relevance (മാറ്റങ്ങളും പ്രസക്തിയും)</h4>
            <p className="mt-1">കഥയുടെ തുടക്കം മുതൽ ഒടുക്കം വരെ ഈ കഥാപാത്രത്തിൽ സംഭവിക്കുന്ന മാറ്റങ്ങൾ വായനക്കാരെ ചിന്തിപ്പിക്കുന്നതാണ്. വെറുമൊരു കഥാപാത്രം എന്നതിലുപരി, ഇന്നത്തെ സമൂഹത്തിൽ നാം നിത്യേന കാണുന്ന {renderWithVariables("[Mention the social issue they represent, e.g., സാധാരണക്കാരുടെ / പാർശ്വവൽക്കരിക്കപ്പെട്ടവരുടെ]")} പ്രതിനിധിയായി ഈ കഥാപാത്രത്തെ കാണാൻ സാധിക്കും.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 4: Conclusion (ഉപസംഹാരം)</h4>
            <p className="mt-1">ചുരുക്കത്തിൽ, {renderWithVariables("[Author Name]")}-ന്റെ <span className="underline decoration-brand-accent/50">രചനാവൈഭവം</span> മുഴുവൻ തെളിഞ്ഞുനിൽക്കുന്നത് {renderWithVariables("[Character Name]")} എന്ന ഈ കഥാപാത്ര സൃഷ്ടിയിലൂടെയാണ്. വായനക്കാരുടെ ഉള്ളിൽ അനുകമ്പയും ചിന്തയും ഉണർത്താൻ ഈ കഥാപാത്രത്തിന് പൂർണ്ണമായും കഴിഞ്ഞിട്ടുണ്ട്.</p>
          </div>
        </div>
      </div>

      {/* Format 2 */}
      <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">Format 2: ആസ്വാദനക്കുറിപ്പ് (Poem Appreciation Note)</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">Use this when asked to write an appreciation (Asadana Kurippu) for a poem or a given set of poetic lines.</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 1: Introduction (ആമുഖം)</h4>
            <p className="mt-1">{renderWithVariables("മലയാള കവിതാ ശാഖയിൽ തന്റേതായ വ്യക്തിമുദ്ര പതിപ്പിച്ച പ്രശസ്ത കവി [Poet Name] രചിച്ച [Poem Name] എന്ന കവിതയിലെ ശ്രദ്ധേയമായ വരികളാണ് ഇവിടെ നൽകിയിട്ടുള്ളത്. [Main Theme of the poem, e.g., പ്രകൃതിസ്നേഹം / മാതൃസ്നേഹം / സാമൂഹിക അസമത്വം] ആണ് ഈ കവിതയുടെ മുഖ്യ പ്രമേയം.")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 2: Core Meaning (ആശയ വിശദീകരണം)</h4>
            <p className="mt-1">നൽകിയിരിക്കുന്ന വരികളിൽ അതിമനോഹരവും അർത്ഥവത്തുമായ ആശയമാണ് കവി അവതരിപ്പിക്കുന്നത്. {renderWithVariables("[Explain the meaning of the given lines in 3-4 sentences in simple Malayalam]")}. ലളിതമായ വാക്കുകളിലൂടെ വളരെ ആഴത്തിലുള്ള ജീവൽ സത്യങ്ങളാണ് കവി ഇവിടെ വരച്ചുകാട്ടുന്നത്.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 3: Poetic Devices & Style (കാവ്യസവിശേഷതകൾ)</h4>
            <p className="mt-1">ഈ കവിതയുടെ ഏറ്റവും വലിയ സവിശേഷത ഇതിലെ ശബ്ദഭംഗിയും അർത്ഥഭംഗിയുമാണ്. {renderWithVariables("[Mention any poetic devices if you know, like ഉപമ (simile), രൂപകം (metaphor), or simply write:]")} തികച്ചും അനുयोജ്യമായ പദപ്രയോഗങ്ങളും ബിംബങ്ങളും (imagery) കവിതയെ കൂടുതൽ ആകർഷകമാക്കുന്നു. വായനക്കാരുടെ മനസ്സിൽ ദൃശ്യങ്ങൾ രൂപപ്പെടുത്താൻ കവിയുടെ വരികൾക്ക് പ്രത്യേക കഴിവുണ്ട്.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 4: Conclusion (ഉपസംഹാരം)</h4>
            <p className="mt-1">സാമൂഹിക പ്രസക്തിയുള്ള വലിയൊരു സന്ദേശമാണ് ഈ വരികളിലൂടെ കവി നൽകുന്നത്. കാലം എത്ര കഴിഞ്ഞാലും ഈ കവിതയുടെയും വരികളുടെയും മൂല്യം നഷ്ടപ്പെടുന്നില്ല എന്നതാണ് ഇതിന്റെ ഏറ്റവും വലിയ വിജയം. തികച്ചും ആസ്വാദ്യകരമായ ഒരു കാവ്യാനുഭവമാണ് ഇത് നൽകുന്നത്.</p>
          </div>
        </div>
      </div>

      {/* Format 3 */}
      <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">Format 3: ആശയവിശകലനം / ഉപന്യാസം (Thematic Essay / Quote Elaboration)</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">Use this when a statement or quote from a chapter is given, and you are asked to analyze it in the context of the story and current society.</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 1: Introduction (ആമുഖം)</h4>
            <p className="mt-1">{renderWithVariables("[Author/Poet Name] എഴുതിയ [Chapter Name] എന്ന പാഠഭാഗത്ത് അവതരിപ്പിച്ചിരിക്കുന്ന വളരെ ചിന്തോദ്ദീപകമായ (thought-provoking) ഒരു ആശയമാണ് ചോദ്യത്തിൽ നൽകിയിട്ടുള്ളത്. മനുഷ്യജീവിതവുമായി ബന്ധപ്പെട്ട വലിയൊരു സത്യമാണ് ഈ പ്രസ്താവനത്തിലൂടെ അനാവരണം ചെയ്യപ്പെടുന്നത്.")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 2: Context in the Text (പാഠഭാഗവുമായുള്ള ബന്ധം)</h4>
            <p className="mt-1">പാഠഭാഗത്ത് {renderWithVariables("[Briefly explain the situation in the story/poem where this idea comes up in 3-4 sentences]")}. ഈ ഒരു സാഹചര്യത്തിലാണ് ഇത്തരമൊരു ആശയത്തിന് വലിയ പ്രാധാന്യം കൈവരുന്നത്. കഥാപാത്രങ്ങളുടെ അനുഭവങ്ങളിലൂടെ ഗ്രന്ഥകാരൻ ഈ വിഷയം വളരെ വ്യക്തമായി വായനക്കാരിലേക്ക് എത്തിക്കുന്നു.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 3: Contemporary Relevance (കാലികപ്രസക്തി - VERY IMPORTANT FOR ESSAYS)</h4>
            <p className="mt-1">ഈ ആശയത്തിന് ഇന്നത്തെ സമൂഹത്തിൽ വലിയ <span className="underline decoration-brand-accent/50">കാലികപ്രസക്തിയുണ്ട്</span> (contemporary relevance). {renderWithVariables("[Write 2-3 sentences about how this relates to today's world. E.g., ഇന്നത്തെ സ്വാർത്ഥമായ ലോകത്ത് ഇതിന് വലിയ സ്ഥാനമുണ്ട്...]")}. മനുഷ്യൻ മനുഷ്യനെ തിരിച്ചറിയേണ്ടതിന്റെയും, മൂല്യങ്ങൾ കാത്തുസൂക്ഷിക്കേണ്ടതിന്റെ भी ആവശ്യകത ഇത് നമ്മെ ഓർമ്മിപ്പിക്കുന്നു.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 4: Conclusion (ഉപസംഹാരം)</h4>
            <p className="mt-1">ചുരുക്കത്തിൽ, കേവലം ഒരു പാഠഭാഗം എന്നതിനപ്പുറം നമ്മുടെ ജീവിതത്തിലേക്കും സമൂഹത്തിലേക്കും പിടിച്ച വലിയൊരു കണ്ണാടിയാണ് ഈ പ്രസ്താവന. വായനക്കാരിൽ വലിയൊരു തിരിച്ചറിവ് ഉണ്ടാക്കാൻ ലേഖകന്റെ/കവിയുടെ ഈ വാക്കുകൾക്ക് സാധിക്കുന്നുണ്ട്.</p>
          </div>
        </div>
      </div>

      {/* Format 4 */}
      <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-brand-accent dark:text-brand-accent mb-2">Format 4: വാർത്താക്കുറിപ്പ് / റിപ്പോർട്ട് (News Report)</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">Use this when asked to prepare a news report based on an event or incident in a chapter.</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Title (തലക്കെട്ട്):</h4>
            <p className="mt-1 font-bold underline">{renderWithVariables("[ആകർഷകമായ ഒരു തലക്കെട്ട് നൽകുക - Catchy Title related to the event, e.g., നാടിനെ നടുക്കി വൻ ദുരന്തം / ശ്രദ്ധേയമായി വാർഷികാഘോഷം]")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Dateline (സ്ഥലവും തിയ്യതിയും):</h4>
            <p className="mt-1">{renderWithVariables("[സ്ഥലം], [തിയ്യതി]:")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 1: Lead Paragraph (ആമുഖം - What, When, Where)</h4>
            <p className="mt-1">കഴിഞ്ഞ ദിവസം {renderWithVariables("[സ്ഥലം/ഗ്രാമം]")}-ൽ നടന്ന {renderWithVariables("[സംഭവം - e.g., അപകടം / ആഘോഷം / പ്രക്ഷോഭം]")} ഏവരുടെയും ശ്രദ്ധ പിടിച്ചുപറ്റി. {renderWithVariables("[സമയം/ദിവസം]")}-നാണ് നാടിനെ നടുക്കിയ / നാടിന് അഭിമാനമായ ഈ സംഭവം അരങ്ങേറിയത്.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 2: Detailed Account (വിശദീകരണം - How & Why)</h4>
            <p className="mt-1">{renderWithVariables("[സംഭവത്തിന്റെ പ്രധാന വിശദാംശങ്ങൾ 3-4 വാക്യങ്ങളിൽ പാഠഭാഗത്തെ അടിസ്ഥാനമാക്കി എഴുതുക]")}. അപ്രതീക്ഷിതമായി ഉണ്ടായ ഈ സംഭവത്തിൽ {renderWithVariables("[പ്രധാന വ്യക്തി/കഥാപാത്രം]")}-ന്റെ ഇടപെടൽ വളരെ നിർണ്ണായകമായിരുന്നു. ഇതിന് പിന്നിലെ പ്രധാന കാരണം {renderWithVariables("[കാരണം ചുരുക്കത്തിൽ]")} ആണെന്നാണ് പ്രാഥമിക നിഗമനം. ദൃക്സാക്ഷികളുടെ അഭിപ്രായത്തിൽ സംഭവം വളരെ ഭയാനകമായിരുന്നു / ആവേശകരമായിരുന്നു.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary dark:text-white">Paragraph 3: Conclusion / Current Situation (സമാപനം)</h4>
            <p className="mt-1">സംഭവമറിഞ്ഞ് നിരവധി ആളുകൾ സ്ഥലത്ത് തടിച്ചുകൂടിയിരുന്നു. അധികാരികൾ ഉടൻ തന്നെ ഇടപെടുകയും ആവശ്യമായ തുടർനടപടികൾ സ്വീകരിക്കുകയും ചെയ്തു. ഈ വിഷയം പ്രദേശവാസികൾക്കിടയിൽ വലിയ ചർച്ചാവിഷയമായിരിക്കുകയാണ്.</p>
          </div>
        </div>
      </div>

      {/* Pro-Tips */}
      <div className="bg-brand-teal/10 dark:bg-brand-teal/20 p-6 rounded-xl border border-brand-teal/20 dark:border-brand-teal/30">
        <h3 className="text-xl font-bold text-brand-teal dark:text-brand-teal mb-4">Pro-Tips for SSLC Malayalam II:</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li><strong>Always remember the Author/Poet's names:</strong> Linking the work to the author in the very first sentence guarantees a good first impression.</li>
          <li><strong>Underline Key Words:</strong> When using strong Malayalam words like <span className="underline decoration-brand-teal/50">കാലികപ്രസക്തി</span> (contemporary relevance), <span className="underline decoration-brand-teal/50">ജീവസ്സുറ്റ</span> (lifelike), or <span className="underline decoration-brand-teal/50">രചനാവൈഭവം</span> (writing excellence), underline them lightly with a pencil.</li>
          <li><strong>Paragraphing:</strong> Never write an essay as a single block of text. Always divide it into the paragraphs shown above.</li>
          <li><strong>Formatting for Reports:</strong> For reports (വാർത്താക്കുറിപ്പ്), always remember to write the title in bold (or underline it) and include the Place and Date at the beginning.</li>
          <li><strong>Time Management:</strong> For an 8-mark question, aim for 1.5 to 2 pages depending on your handwriting size. Don't spend more than 15-18 minutes on one essay.</li>
        </ul>
      </div>

    </div>
  );
}
