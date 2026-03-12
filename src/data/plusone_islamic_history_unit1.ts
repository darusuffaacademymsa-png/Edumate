import { Lesson } from './curriculum';
import { plusOneIslamicHistoryUnit1Quiz } from './plusone_islamic_history_quiz_bank';

export const plusOneIslamicHistoryUnit1: Lesson = {
  id: "pl-isl-11-intro",
  title: { en: "Introduction to Islamic History and Culture", ml: "ഇസ്ലാമിക ചരിത്രത്തിലേക്കും സംസ്കാരത്തിലേക്കും ഒരു ആമുഖം" },
  estimated_time_mins: 120,
  learning_objectives: [
    { en: "Understand the definition and sources of history", ml: "ചരിത്രത്തിന്റെ നിർവ്വചനവും ഉറവിടങ്ങളും മനസ്സിലാക്കാൻ" },
    { en: "Explain the meaning and scope of Islamic History", ml: "ഇസ്ലാമിക ചരിത്രത്തിന്റെ അർത്ഥവും വ്യാപ്തിയും വിശദീകരിക്കാൻ" },
    { en: "Identify important Islamic historians", ml: "പ്രധാന ഇസ്ലാമിക ചരിത്രകാരന്മാരെ തിരിച്ചറിയാൻ" },
    { en: "Describe the basic teachings and pillars of Islam", ml: "ഇസ്ലാമിന്റെ അടിസ്ഥാന പഠനങ്ങളും സ്തംഭങ്ങളും വിവരിക്കാൻ" },
    { en: "Discuss the spread of Islam in India", ml: "ഇന്ത്യയിലെ ഇസ്ലാമിന്റെ വ്യാപനത്തെക്കുറിച്ച് ചർച്ച ചെയ്യാൻ" },
    { en: "Study Historiography and important Study Branches", ml: "ഹിസ്റ്റോറിയോഗ്രാഫിയും പ്രധാന പഠനശാഖകളും പഠിക്കുക" },
    { en: "Learn about Ibn Khaldun and his contributions", ml: "ഇബ്നു ഖൽദൂനെയും അദ്ദേഹത്തിന്റെ സംഭാവനകളെയും കുറിച്ച് മനസ്സിലാക്കുക" }
  ],
  content: {
    intro: {
      en: "This chapter introduces the fundamental concepts of Islamic history, its sources, eminent historians, and the core beliefs and practices of Islam.",
      ml: "ഈ അധ്യായം ഇസ്ലാമിക ചരിത്രത്തിന്റെ അടിസ്ഥാന ആശയങ്ങൾ, അതിന്റെ ഉറവിടങ്ങൾ, പ്രഗത്ഭരായ ചരിത്രകാരന്മാർ, ഇസ്ലാമിന്റെ അടിസ്ഥാന വിശ്വാസങ്ങൾ, ആചാരങ്ങൾ എന്നിവ പരിചയപ്പെടുത്തുന്നു."
    },
    core: {
      en: "This unit covers the definition of history, historiography, sources of history, and the core teachings of Islam.",
      ml: "ചരിത്രത്തിന്റെ നിർവ്വചനം, ചരിത്രരചനാശാസ്ത്രം, ചരിത്രത്തിന്റെ ഉറവിടങ്ങൾ, ഇസ്ലാമിന്റെ അടിസ്ഥാന പഠനങ്ങൾ എന്നിവ ഈ യൂണിറ്റ് ഉൾക്കൊള്ളുന്നു."
    },
    blocks: [
        { type: 'h2', en: '1. Topic-wise Explanation', ml: '1. വിഷയാധിഷ്ഠിതമായ വിശദീകരണം' },
        { type: 'h3', en: 'Topic 1: Introduction to History', ml: 'വിഷയം 1: ചരിത്രത്തിലേക്കൊരു ആമുഖം' },
        { type: 'p', en: 'The word ‘history’ is derived from the Greek word ‘istoria’ which means information or inquiry.', ml: "'ചരിത്രം' (history) എന്ന വാക്ക് ഉത്ഭവിച്ചത് 'വിവരങ്ങൾ' അല്ലെങ്കിൽ 'അന്വേഷണം' എന്ന് അർത്ഥമുള്ള 'ഇസ്റ്റോറിയ' എന്ന ഗ്രീക്ക് പദത്തിൽ നിന്നാണ്." },
        { type: 'p', en: 'History is a systematic account of the origin and the development of the human kind.', ml: 'മനുഷ്യവംശത്തിന്റെ ഉത്ഭവത്തിന്റെയും വികാസത്തിന്റെയും ചിട്ടയായ വിവരണം ആണ് ചരിത്രം.' },
        { type: 'p', en: 'It provides an awareness of the development of human beings in economic, social, political and cultural fields and gives a sense of direction for the future.', ml: 'സാമ്പത്തിക, സാമൂഹിക, രാഷ്ട്രീയ, സാംസ്കാരിക മേഖലകളിലെ മനുഷ്യന്റെ വികാസത്തെക്കുറിച്ചുള്ള അവബോധം ഇത് നൽകുകയും ഭാവിക്കായി ഒരു ദിശാബോധം നൽകുകയും ചെയ്യുന്നു.' },
        { type: 'h3', en: 'Definitions of History:', ml: 'ചരിത്രത്തിന്റെ നിർവ്വചനങ്ങൾ:' },
        { type: 'p', en: 'Aristotle: "History is an account of the unchanging past".', ml: 'അരിസ്റ്റോട്ടിൽ: "മാറ്റമില്ലാത്ത ഭൂതകാലത്തിന്റെ വിവരണമാണ് ചരിത്രം."' },
        { type: 'p', en: 'E.H. Carr: "History is a continuous process of interaction between the historian and his facts, an unending dialogue between the present and the past".', ml: 'ഇ.എച്ച്. കാർ: "ചരിത്രകാരനും അയാളുടെ വസ്തുതകളും തമ്മിലുള്ള തുടർച്ചയായ ആശയവിനിമയ പ്രക്രിയയാണ് ചരിത്രം, വർത്തമാനവും ഭൂതകാലവും തമ്മിലുള്ള അവസാനിക്കാത്ത സംഭാഷണമാണത്."' },
        { type: 'p', en: 'Earnest Bernheim: History investigates the evolution of men in their typical and collective activity.', ml: 'ഏണസ്റ്റ് ബേൺഹൈം: മനുഷ്യരുടെ സാധാരണവും കൂട്ടായതുമായ പ്രവർത്തനങ്ങളിലെ പരിണാമത്തെ ചരിത്രം അന്വേഷിക്കുന്നു.' },
        { type: 'p', en: 'Thomas Carlyle: "History is nothing but the biography of great men".', ml: 'തോമസ് കാർലൈൽ: "ചരിത്രം എന്നത് മഹാന്മാരുടെ ജീവചരിത്രമല്ലാതെ മറ്റൊന്നുമല്ല."' },
        { type: 'p', en: 'Rousseau: "History is the art of choosing from among many lies that one which most resembles the truth".', ml: 'റൂസ്സോ: "സത്യത്തോട് ഏറ്റവും അടുത്തുനിൽക്കുന്ന ഒന്നിനെ, നിരവധി നുണകളിൽ നിന്ന് തിരഞ്ഞെടുക്കുന്ന കലയാണ് ചരിത്രം."' },
        { type: 'h3', en: 'Topic 2: Historiography', ml: 'വിഷയം 2: ചരിത്രരചനാശാസ്ത്രം (ഹിസ്റ്റോറിയോഗ്രാഫി)' },
        { type: 'p', en: 'Historiography literally means the art of writing history.', ml: 'ചരിത്രരചനാശാസ്ത്രം (ഹിസ്റ്റോറിയോഗ്രാഫി) എന്നതിന്റെ അക്ഷരാർത്ഥം ചരിത്രരചനയുടെ കല എന്നാണ്.' },
        { type: 'p', en: 'It is nothing but the history of history or the history of historical writing.', ml: 'ഇത് ചരിത്രത്തിന്റെ ചരിത്രമോ ചരിത്രരചനയുടെ ചരിത്രമോ അല്ലാതെ മറ്റൊന്നുമല്ല.' },
        { type: 'h3', en: 'Topic 3: Sources of History', ml: 'വിഷയം 3: ചരിത്രത്തിന്റെ ഉറവിടങ്ങൾ' },
        { type: 'p', en: 'The materials from which information about the past can be collected are called the sources of history.', ml: 'ഭൂതകാലത്തെക്കുറിച്ചുള്ള വിവരങ്ങൾ ശേഖരിക്കാൻ കഴിയുന്ന വസ്തുക്കളെ ചരിത്രത്തിന്റെ ഉറവിടങ്ങൾ എന്ന് വിളിക്കുന്നു.' },
        { type: 'p', en: 'The sources can be divided into material sources and literary sources.', ml: 'ഉറവിടങ്ങളെ ഭൗതിക ഉറവിടങ്ങൾ എന്നും സാഹിത്യ ഉറവിടങ്ങൾ എന്നും രണ്ടായി തിരിക്കാം.' },
        { type: 'p', en: '(See Table 1 for Classification)', ml: '(വർഗ്ഗീകരണത്തിനായി പട്ടിക 1 കാണുക)' },
        { type: 'h3', en: 'Important Branches of Study:', ml: 'പ്രധാന പഠനശാഖകൾ:' },
        { type: 'p', en: 'Archaeology is the scientific study of people and their culture in the past by analysing their artefacts and remains.', ml: 'പുരാവസ്തുക്കളെയും അവശിഷ്ടങ്ങളെയും വിശകലനം ചെയ്തുകൊണ്ട് ഭൂതകാലത്തിലെ ആളുകളെയും അവരുടെ സംസ്കാരത്തെയും കുറിച്ചുള്ള ശാസ്ത്രീയ പഠനമാണ് ആർക്കിയോളജി.' },
        { type: 'p', en: 'Epigraphy is the study of inscriptions.', ml: 'എപ്പിഗ്രാഫി: ലിഖിതങ്ങളെക്കുറിച്ചുള്ള പഠനം.' },
        { type: 'p', en: 'Numismatics is the study of coins.', ml: 'ന്യൂമിസ്മാറ്റിക്സ്: നാണയങ്ങളെക്കുറിച്ചുള്ള പഠനം.' },
        { type: 'h3', en: 'Topic 4: Islamic History and Culture', ml: 'വിഷയം 4: ഇസ്ലാമിക ചരിത്രവും സംസ്കാരവും' },
        { type: 'p', en: "Islamic History contains the history of Arabia before Prophet Muhammad, the development of Muslim society, and their cultural contributions.", ml: "പ്രവാചകൻ മുഹമ്മദ് നബിയുടെ കാലത്തിന് മുൻപുള്ള അറേബ്യയുടെ ചരിത്രം, മുസ്ലീം സമൂഹത്തിന്റെ വികാസം, അവരുടെ സാംസ്കാരിക സംഭാവനകൾ എന്നിവ ഇസ്ലാമിക ചരിത്രത്തിൽ അടങ്ങിയിരിക്കുന്നു." },
        { type: 'p', en: "'Tarikh' is the Arabic term for 'History', meaning 'the past'.", ml: "'ചരിത്രം' എന്നതിനുള്ള അറബി പദമാണ് 'തരീഖ്', ഇതിനർത്ഥം 'ഭൂതകാലം' എന്നാണ്." },
        { type: 'p', en: "'Tarikhul Islam' denotes the history of the Islamic people.", ml: "'തരീഖുൽ ഇസ്ലാം' എന്നത് ഇസ്ലാമിക ജനതയുടെ ചരിത്രത്തെ സൂചിപ്പിക്കുന്നു." },
        { type: 'p', en: "Muslims contributed much to science, literature, painting, architecture, and music.", ml: "ശാസ്ത്രം, സാഹിത്യം, ചിത്രകല, വാസ്തുവിദ്യ, സംഗീതം എന്നിവയ്ക്ക് മുസ്ലീങ്ങൾ വലിയ സംഭാവനകൾ നൽകി." },
        { type: 'p', en: "See table for Muslim Contributions.", ml: "മുസ്ലീം സംഭാവനകൾക്കായി പട്ടിക കാണുക." },
        { type: 'h3', en: 'Topic 5: Sources of Islamic History', ml: 'വിഷയം 5: ഇസ്ലാമിക ചരിത്രത്തിന്റെ ഉറവിടങ്ങൾ' },
        { type: 'p', en: "The main sources of Islamic History are the Qur'an and the Hadith.", ml: 'ഇസ്ലാമിക ചരിത്രത്തിന്റെ പ്രധാന ഉറവിടങ്ങൾ ഖുർആനും ഹദീസും ആണ്.' },
        { type: 'p', en: "Various historical works like Biographies (Sira), Chronicles (Houwaliyat), and Genealogy (Ilmul Ansab) are used.", ml: 'ജീവചരിത്രങ്ങൾ (സീറ), കാലാനുക്രമവിവരണങ്ങൾ (ഹൗവാലാലിയാത്ത്), വംശാവലി പഠനം (ഇൽമുൽ അൻസാബ്) തുടങ്ങിയ വിവിധ ചരിത്ര കൃതികൾ ഉപയോഗിക്കുന്നു.' },
        { type: 'p', en: "See table for Important Works.", ml: "പ്രധാന കൃതികൾക്കായി പട്ടിക കാണുക." },
        { type: 'h3', en: 'Topic 6: Ibn Khaldun and Eminent Historians', ml: 'വിഷയം 6: ഇബ്നു ഖൽദൂനും പ്രഗത്ഭരായ ചരിത്രകാരന്മാരും' },
        { type: 'p', en: "Ibn Khaldun is the most celebrated historian of the medieval period and is considered the 'Father of Sociology'.", ml: "മധ്യകാലഘട്ടത്തിലെ ഏറ്റവും പ്രശസ്തനായ ചരിത്രകാരനാണ് ഇബ്നു ഖൽദൂൻ, അദ്ദേഹത്തെ 'സോഷ്യോളജിയുടെ പിതാവ്' എന്ന് കണക്കാക്കുന്നു." },
        { type: 'p', en: "His greatest work is 'Universal History' (Kitab ul Ibr), and its introduction is the famous 'Muqadhima'.", ml: "അദ്ദേഹത്തിന്റെ ഏറ്റവും മികച്ച കൃതി 'യൂണിവേഴ്സൽ ഹിസ്റ്ററി' (കിതാബ് ഉൾ ഇബർ) ആണ്, അതിന്റെ ആമുഖമാണ് പ്രശസ്തമായ 'മുഖദ്ദിമ'." },
        { type: 'p', en: "Arnold Toynbee called the Muqadhima the greatest work of its kind ever created.", ml: "മുഖദ്ദിമയെ ഇതുവരെ സൃഷ്ടിക്കപ്പെട്ടതിൽ വെച്ച് ഏറ്റവും മികച്ച കൃതി എന്ന് ആർനോൾഡ് ടോയൻബി വിശേഷിപ്പിച്ചു." },
        { type: 'h3', en: 'Topic 7: Teachings and Core Beliefs of Islam', ml: 'വിഷയം 7: ഇസ്ലാമിന്റെ പഠനങ്ങളും അടിസ്ഥാന വിശ്വാസങ്ങളും' },
        { type: 'p', en: 'Tawhid is the essence of Islam, meaning there is only one supreme Lord of the Universe.', ml: 'തൗഹീദ് എന്നത് ഇസ്ലാമിന്റെ സത്തയാണ്, പ്രപഞ്ചത്തിന് ഒരേയൊരു പരമോന്നത നാഥനേ ഉള്ളൂ എന്നാണ് ഇതിനർത്ഥം.' },
        { type: 'p', en: 'Islam is an Arabic word that denotes submission, surrender, obedience, and peace.', ml: 'ഇസ്ലാം എന്നത് സമർപ്പണം, കീഴടങ്ങൽ, അനുസരണം, സമാധാനം എന്നിവയെ സൂചിപ്പിക്കുന്ന ഒരു അറബി പദമാണ്.' },
        { type: 'p', en: 'Islam declared that the entire human race has one and the same parentage - Adam and Eve.', ml: 'മുഴുവൻ മനുഷ്യരാശിക്കും ഒരേ മാതാപിതാക്കളാണുള്ളതെന്ന് - ആദമും ഹവ്വയും - ഇസ്ലാം പ്രഖ്യാപിച്ചു.' },
        { type: 'h3', en: 'Articles of Faith (Six Beliefs):', ml: 'വിശ്വാസ പ്രമാണങ്ങൾ (ആറ് വിശ്വാസങ്ങൾ):' },
        { type: 'p', en: 'Oneness of God, The Angels of God, The Scriptures of God, The Prophets of God, The Day of Judgement, The supremacy of God\'s will (predestination).', ml: 'ദൈവത്തിന്റെ ഏകത്വം, ദൈവത്തിന്റെ മാലാഖമാർ, ദൈവത്തിന്റെ ഗ്രന്ഥങ്ങൾ, ദൈവത്തിന്റെ പ്രവാചകന്മാർ, അന്ത്യവിധി ദിനം, ദൈവഹിതത്തിന്റെ പരമാധികാരം (വിധിവാദം).' },
        { type: 'h3', en: 'Topic 8: Five Pillars of Islam', ml: 'വിഷയം 8: ഇസ്ലാമിന്റെ അഞ്ച് സ്തംഭങ്ങൾ' },
        { type: 'p', en: 'The five pillars are the core and obligatory practices of Muslims.', ml: 'അഞ്ച് സ്തംഭങ്ങൾ മുസ്ലീങ്ങളുടെ അടിസ്ഥാനപരവും നിർബന്ധിതവുമായ ആചാരങ്ങളാണ്.' },
        { type: 'ul', items: [
          { en: 'Profession of faith (Shahada): Proclaiming "there is no God but Allah and Muhammad is the messenger of God".', ml: 'വിശ്വാസ പ്രഖ്യാപനം (ശഹാദത്ത്): "അല്ലാഹുവല്ലാതെ മറ്റൊരു ദൈവമില്ലെന്നും മുഹമ്മദ് നബി അല്ലാഹുവിന്റെ ദൂതനാണെന്നും" പ്രഖ്യാപിക്കുന്നത്.' },
          { en: 'Prayer (Salat): Performing prayers five times each day.', ml: 'പ്രാർത്ഥന (നമസ്കാരം): ദിവസവും അഞ്ച് തവണ പ്രാർത്ഥനകൾ അനുഷ്ഠിക്കുന്നത്.' },
          { en: 'Almsgiving (Zakat): Giving a certain percentage of accumulated wealth to the poor.', ml: 'ദാനധർമ്മം (സക്കാത്ത്): സമ്പാദിച്ച സമ്പത്തിന്റെ ഒരു നിശ്ചിത ശതമാനം പാവപ്പെട്ടവർക്ക് നൽകുന്നത്.' },
          { en: 'Fasting (Sawm): Fasting from dawn to sunset during the month of Ramadan.', ml: 'വ്രതാനുഷ്ഠാനം (നോമ്പ്): റമദാൻ മാസത്തിൽ പ്രഭാതം മുതൽ സൂര്യാസ്തമയം വരെ വ്രതം അനുഷ്ഠിക്കുന്നത്.' },
          { en: 'Pilgrimage (Hajj): Performing the annual pilgrimage to Makkah at least once in a lifetime.', ml: 'തീർത്ഥാടനം (ഹജ്ജ്): ജീവിതത്തിൽ ഒരിക്കലെങ്കിലും മക്കയിലേക്ക് വാർഷിക തീർത്ഥാടനം നടത്തുന്നത്.' }
        ]},
        { type: 'h3', en: 'Topic 9: Islam in India and Global Population', ml: 'വിഷയം 9: ഇന്ത്യയിലെ ഇസ്ലാമും ആഗോള ജനസംഖ്യയും' },
        { type: 'p', en: 'Islam first came to India in Kerala through Arab merchants, supported by the Hindu rulers of Kodungallur.', ml: 'കൊടുങ്ങല്ലൂരിലെ ഹിന്ദു ഭരണാധികാരികളുടെ പിന്തുണയോടെ അറബ് വ്യാപാരികൾ മുഖേനയാണ് ഇസ്ലാം ആദ്യമായി ഇന്ത്യയിൽ കേരളത്തിൽ എത്തിയത്.' },
        { type: 'p', en: 'Islam is the world’s second-largest religion with an estimated 1.6 billion Muslims.', ml: 'ഏകദേശം 1.6 ബില്യൺ മുസ്ലീങ്ങളുള്ള ലോകത്തിലെ രണ്ടാമത്തെ വലിയ മതമാണ് ഇസ്ലാം.' },
        { type: 'p', en: 'Indonesia has the largest Muslim population, while India has the second-largest in raw numbers.', ml: 'ഏറ്റവും കൂടുതൽ മുസ്ലീം ജനസംഖ്യയുള്ളത് ഇന്തോനേഷയയിലാണ്, അതേസമയം സംഖ്യാപരമായി ഇന്ത്യ രണ്ടാം സ്ഥാനത്താണ്.' },
        { type: 'h2', en: '2. Tables / Diagrams / Graphs', ml: '2. പട്ടികകൾ / രേഖാചിത്രങ്ങൾ / ഗ്രാഫുകൾ' },
        { type: 'h3', en: 'Table 1: Sources of History', ml: 'പട്ടിക 1: ചരിത്രത്തിന്റെ ഉറവിടങ്ങൾ' },
        { type: 'table', tableData: {
          headers: [{ en: 'Material Sources', ml: 'ഭൗതിക ഉറവിടങ്ങൾ' }, { en: 'Literary Sources', ml: 'സാഹിത്യ ഉറവിടങ്ങൾ' }],
          rows: [
            [{ en: 'Coins', ml: 'നാണയങ്ങൾ' }, { en: 'Travelogues', ml: 'യാത്രാവിവരണങ്ങൾ' }],
            [{ en: 'Pottery', ml: 'മൺപാത്രങ്ങൾ' }, { en: 'Poetry', ml: 'കവിതകൾ' }],
            [{ en: 'Forts, palaces, temples', ml: 'കോട്ടകൾ, കൊട്ടാരങ്ങൾ, ക്ഷേത്രങ്ങൾ' }, { en: 'Biographies', ml: 'ജീവചരിത്രങ്ങൾ' }],
            [{ en: 'Inscriptions', ml: 'ലിഖിതങ്ങൾ' }, { en: 'Autobiographies', ml: 'ആത്മകഥകൾ' }],
            [{ en: 'Remains of dwellings', ml: 'വാസസ്ഥലങ്ങളുടെ അവശിഷ്ടങ്ങൾ' }, { en: 'Religious texts', ml: 'മതഗ്രന്ഥങ്ങൾ' }]
          ]
        } },
        { type: 'h3', en: 'Table 2: Muslim Contributions to Science and Literature', ml: 'പട്ടിക 2: ശാസ്ത്ര-സാഹിത്യ മേഖലകളിലെ മുസ്ലീം സംഭാവനകൾ' },
        { type: 'table', tableData: {
          headers: [{ en: 'Work / Field', ml: 'കൃതി / മേഖല' }, { en: 'Author', ml: 'രചയിതാവ്' }],
          rows: [
            [{ en: 'Khaleela wa Dimna (Literature)', ml: 'ഖലീല വ ദിംന (സാഹിത്യം)' }, { en: 'Ibn Muqaff', ml: 'ഇബ്നു മുഖഫ്' }],
            [{ en: 'Kanun fi Tibb (Medicine)', ml: 'കാനൂൻ ഫി ത്വിബ്ബ് (വൈദ്യശാസ്ത്രം)' }, { en: 'Avicenna', ml: 'അവിസെന്ന' }],
            [{ en: 'Tahafut al Tahafut (Philosophy)', ml: 'തഹാഫുത് അൽ തഹാഫുത് (തത്ത്വചിന്ത)' }, { en: 'Ibn Rushd', ml: 'ഇബ്നു റുഷ്ദ്' }],
            [{ en: 'Muajab al Buldun (Geography)', ml: 'മുഅജബ് അൽ ബുൽദുൻ (ഭൂമിശാസ്ത്രം)' }, { en: 'Al-Idrisi', ml: 'അൽ-ഇദ്രീസി' }],
            [{ en: 'Al-Jabr al Muqabalah (Mathematics)', ml: 'അൽ-ജബർ അൽ മുഖാബല (ഗണിതശാസ്ത്രം)' }, { en: 'Al Qawarsmi', ml: 'അൽ ഖവാരിസ്മി' }],
            [{ en: 'Kitab al Rahma (Alchemy)', ml: 'കിതാബ് അൽ റഹ്മ (രസതന്ത്രം)' }, { en: 'Jabir ibn Hayyan', ml: 'ജാബിർ ഇബ്നു ഹയ്യാൻ' }]
          ]
        } },
        { type: 'h3', en: 'Table 3: Important Works on Islamic History', ml: 'പട്ടിക 3: ഇസ്ലാമിക ചരിത്രത്തിലെ പ്രധാന കൃതികൾ' },
        { type: 'table', tableData: {
          headers: [{ en: 'Book', ml: 'പുസ്തകം' }, { en: 'Author', ml: 'രചയിതാവ്' }],
          rows: [
            [{ en: 'Sirathul Rasulullah', ml: 'സിറത്തുൽ റസൂലുല്ല' }, { en: 'Ibn Ishaq', ml: 'ഇബ്നു ഇസ്ഹാഖ്' }],
            [{ en: 'Thariq-ul-Rasul-wal-Muluk', ml: 'താരിഖ്-ഉൽ-റസൂൽ-വൽ-മുലൂക്' }, { en: 'Al Tabari', ml: 'അൽ തബ്രി' }],
            [{ en: 'Muqadhima', ml: 'മുഖദ്ദിമ' }, { en: 'Ibn Khaldun', ml: 'ഇബ്നു ഖൽദൂൻ' }],
            [{ en: 'Akbar Nama', ml: 'അക്ബർ നാമ' }, { en: 'Abul Fazal', ml: 'അബുൽ ഫസൽ' }],
            [{ en: 'Kitabul Hind', ml: 'കിതാബുൽ ഹിന്ദ്' }, { en: 'Al-Biruni', ml: 'അൽ-ബിറൂനി' }],
            [{ en: 'Thuhfathul Mujahidin', ml: 'തുഹ്ഫത്തുൽ മുജാഹിദീൻ' }, { en: 'Shaik Zainudin', ml: 'ശൈഖ് സൈനുദ്ദീൻ' }]
          ]
        } },
        { type: 'h2', en: '3. Summary Points', ml: '3. ചുരുക്കരൂപം' },
        { type: 'p', en: 'History is the study of the human past, utilizing both material and literary sources.', ml: 'ചരിത്രം എന്നത് ഭൗതികവും സാഹിത്യപരവുമായ ഉറവിടങ്ങൾ ഉപയോഗിച്ച് മനുഷ്യന്റെ ഭൂതകാലത്തെക്കുറിച്ചുള്ള പഠനമാണ്.' },
        { type: 'p', en: 'Islamic history encompasses the holistic development and cultural achievements of Muslims.', ml: 'ഇസ്ലാമിക ചരിത്രം മുസ്ലീങ്ങളുടെ സമഗ്രമായ വികസനവും സാംസ്കാരിക നേട്ടങ്ങളും ഉൾക്കൊള്ളുന്നു.' },
        { type: 'p', en: 'Ibn Khaldun, the author of Muqadhima, is widely regarded as the father of sociology.', ml: 'മുഖദ്ദിമയുടെ രചയിതാവായ ഇബ്നു ഖൽദൂൻ സോഷ്യോളജിയുടെ പിതാവായി പരക്കെ കണക്കാക്കപ്പെടുന്നു.' },
        { type: 'p', en: 'Tawhid (monotheism) is the foundational doctrine of Islam.', ml: 'തൗഹീദ് (ഏകദൈവ വിശ്വാസം) ഇസ്ലാമിന്റെ അടിസ്ഥാന സിദ്ധാന്തമാണ്.' },
        { type: 'p', en: 'The Five Pillars of Islam form the fundamental religious duties of a Muslim.', ml: 'ഇസ്ലാമിന്റെ അഞ്ച് സ്തംഭങ്ങൾ ഒരു മുസ്ലീമിന്റെ അടിസ്ഥാന മതപരമായ കടമകൾ രൂപപ്പെടുത്തുന്നു.' },
        { type: 'h2', en: 'PRACTICE QUESTIONS SECTION', ml: 'പരിശീലന ചോദ്യങ്ങൾ' },
        { type: 'p', en: "Question 1: What is the origin of the word 'History'?", ml: "ചോദ്യം 1: 'ചരിത്രം' എന്ന വാക്കിന്റെ ഉത്ഭവം എവിടെ നിന്നാണ്?" },
        { type: 'p', en: "Answer 1: The word 'history' is derived from the Greek word 'istoria', which means information or inquiry.", ml: "ഉത്തരം 1: 'വിവരങ്ങൾ' അല്ലെങ്കിൽ 'അന്വേഷണം' എന്ന് അർത്ഥമുള്ള 'ഇസ്റ്റോറിയ' എന്ന ഗ്രീക്ക് പദത്തിൽ നിന്നാണ് 'ചരിത്രം' എന്ന വാക്ക് ഉത്ഭവിച്ചത്." },
        { type: 'p', en: "Question 2: How did E.H. Carr define history?", ml: "ചോദ്യം 2: ഇ.എച്ച്. കാർ ചരിത്രത്തെ എങ്ങനെ നിർവ്വചിച്ചു?" },
        { type: 'p', en: "Answer 2: E.H. Carr defined history as \"an unending dialogue between the present and the past\".", ml: "ഉത്തരം 2: \"വർത്തമാനവും ഭൂതകാലവും തമ്മിലുള്ള അവസാനിക്കാത്ത സംഭാഷണമാണ് ചരിത്രം\" എന്ന് ഇ.എച്ച്. കാർ നിർവ്വചിച്ചു." },
        { type: 'p', en: "Question 3: What is meant by Historiography?", ml: "ചോദ്യം 3: ചരിത്രരചനാശാസ്ത്രം (ഹിസ്റ്റോറിയോഗ്രാഫി) എന്നാൽ എന്താണ് അർത്ഥമാക്കുന്നത്?" },
        { type: 'p', en: "Answer 3: Historiography literally means the art of writing history; it is the history of historical writing.", ml: "ഉത്തരം 3: ചരിത്രരചനാശാസ്ത്രം (ഹിസ്റ്റോറിയോഗ്രാഫി) എന്നതിന്റെ അക്ഷരാർത്ഥം ചരിത്രരചനയുടെ കല എന്നാണ്; അത് ചരിത്രരചനയുടെ ചരിത്രമാണ്." },
        { type: 'p', en: "Question 4: What are the two main classifications of the sources of history?", ml: "ചോദ്യം 4: ചരിത്രത്തിന്റെ ഉറവിടങ്ങളുടെ രണ്ട് പ്രധാന വർഗ്ഗീകരണങ്ങൾ ഏവ?" },
        { type: 'p', en: "Answer 4: The sources of history are divided into material sources and literary sources.", ml: "ഉത്തരം 4: ചരിത്രത്തിന്റെ ഉറവിടങ്ങളെ ഭൗതിക ഉറവിടങ്ങൾ എന്നും സാഹിത്യ ഉറവിടങ്ങൾ എന്നും തിരിച്ചിരിക്കുന്നു." },
        { type: 'p', en: "Question 5: Which Arabic terms are used to denote history and Islamic history?", ml: "ചോദ്യം 5: ചരിത്രത്തെയും ഇസ്ലാമിക ചരിത്രത്തെയും സൂചിപ്പിക്കാൻ ഉപയോഗിക്കുന്ന അറബി പദങ്ങൾ ഏവ?" },
        { type: 'p', en: "Answer 5: 'Tarikh' is the Arabic term for history, and 'Tarikhul Islam' denotes Islamic history.", ml: "ഉത്തരം 5: ചരിത്രത്തിനുള്ള അറബി പദമാണ് 'തരീഖ്', ഇസ്ലാമിക ചരിത്രത്തെ സൂചിപ്പിക്കുന്നത് 'തരീഖുൽ ഇസ്ലാം' ആണ്." },
        { type: 'p', en: "Question 6: Who is considered the 'Father of Sociology' and what is his famous introduction called?", ml: "ചോദ്യം 6: 'സോഷ്യോളജിയുടെ പിതാവ്' എന്ന് കണക്കാക്കപ്പെടുന്നത് ആരെയാണ്, അദ്ദേഹത്തിന്റെ പ്രശസ്തമായ ആമുഖം എന്താണ് വിളിക്കപ്പെടുന്നത്?" },
        { type: 'p', en: "Answer 6: Ibn Khaldun is considered the 'Father of Sociology' and his famous introduction is the 'Muqadhima'.", ml: "ഉത്തരം 6: ഇബ്നു ഖൽദൂനെ 'സോഷ്യോളജിയുടെ പിതാവ്' എന്ന് കണക്കാക്കുന്നു, അദ്ദേഹത്തിന്റെ പ്രശസ്തമായ ആമുഖം 'മുഖദ്ദിമ' എന്നാണ് വിളിക്കപ്പെടുന്നത്." },
        { type: 'p', en: "Question 7: What does the concept of 'Tawhid' signify in Islam?", ml: "ചോദ്യം 7: ഇസ്ലാമിൽ 'തൗഹീദ്' എന്ന ആശയം എന്താണ് അർത്ഥമാക്കുന്നത്?" },
        { type: 'p', en: "Answer 7: Tawhid signifies that there is only one supreme Lord of the Universe.", ml: "ഉത്തരം 7: പ്രപഞ്ചത്തിന് ഒരേയൊരു പരമോന്നത നാഥനേ ഉള്ളൂ എന്നാണ് തൗഹീദ് അർത്ഥമാക്കുന്നത്." },
        { type: 'p', en: "Question 8: List the Five Pillars of Islam.", ml: "ചോദ്യം 8: ഇസ്ലാമിന്റെ അഞ്ച് സ്തംഭങ്ങൾ പട്ടികപ്പെടുത്തുക." },
        { type: 'p', en: "Answer 8: The Five Pillars are: Profession of faith, Prayer, Almsgiving (Zakat), Fast of Ramadan, and Pilgrimage (Hajj).", ml: "ഉത്തരം 8: അഞ്ച് സ്തംഭങ്ങൾ ഇവയാണ്: വിശ്വാസ പ്രഖ്യാപനം, പ്രാർത്ഥന, ദാനധർമ്മം (സക്കാത്ത്), റമദാൻ വ്രതം, തീർത്ഥാടനം (ഹജ്ജ്)." },
        { type: 'p', en: "Question 9: Through which Indian state did Islam first enter India, and who supported it?", ml: "ചോദ്യം 9: ഇന്ത്യയിലെ ഏത് സംസ്ഥാനത്തിലൂടെയാണ് ഇസ്ലാം ആദ്യമായി ഇന്ത്യയിൽ പ്രവേശിച്ചത്, ഇതിനെ പിന്തുണച്ചത് ആരാണ്?" },
        { type: 'p', en: "Answer 9: Islam first came to India through Kerala, supported by the Hindu rulers of Kodungallur.", ml: "ഉത്തരം 9: കേരളത്തിലൂടെയാണ് ഇസ്ലാം ആദ്യമായി ഇന്ത്യയിൽ എത്തിയത്, ഇതിനെ പിന്തുണച്ചത് കൊടുങ്ങല്ലൂരിലെ ഹിന്ദു ഭരണാധികാരികളാണ്." },
        { type: 'p', en: "Question 10: Which country currently has the world's largest Muslim population?", ml: "ചോദ്യം 10: നിലവിൽ ലോകത്തിൽ ഏറ്റവും കൂടുതൽ മുസ്ലീം ജനസംഖ്യയുള്ള രാജ്യം ഏതാണ്?" },
        { type: 'p', en: "Answer 10: Indonesia has the largest Muslim population in the world.", ml: "ഉത്തരം 10: ലോകത്തിൽ ഏറ്റവും കൂടുതൽ മുസ്ലീം ജനസംഖ്യയുള്ളത് ഇന്തോനേഷ്യയിലാണ്." }
      ]
    },
    glossary: [
    { term: { en: "History", ml: "ചരിത്രം" }, definition: { en: "A systematic account of the origin and the development of the human kind.", ml: "മнуഷ്യവംശത്തിന്റെ ഉത്ഭവത്തിന്റെയും വികാസത്തിന്റെയും ചിട്ടയായ വിവരണം." } },
    { term: { en: "Historiography", ml: "ചരിത്രരചനാശാസ്ത്രം" }, definition: { en: "The art of writing history.", ml: "ചരിത്രരചനയുടെ കല." } },
    { term: { en: "Tawhid", ml: "തൗഹീദ്" }, definition: { en: "The essence of Islam, meaning there is only one supreme Lord of the Universe.", ml: "പ്രപഞ്ചത്തിന് ഒരേയൊരു പരമോന്നത നാഥനേ ഉള്ളൂ എന്ന ഇസ്ലാമിന്റെ സത്ത." } }
  ],
  videos: [
    {
      title: "ഇസ്ലാമിക ചരിത്രവും സംസ്കാരവും - Video Tutorial",
      url: "https://www.youtube.com/watch?v=e_ae8i2lfCU"
    }
  ],
  quiz: plusOneIslamicHistoryUnit1Quiz
};
