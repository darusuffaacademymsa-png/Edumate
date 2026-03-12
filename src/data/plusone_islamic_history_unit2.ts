import { Lesson } from './curriculum';
import { plusOneIslamicHistoryUnit2Quiz } from './plusone_islamic_history_quiz_bank';

export const plusOneIslamicHistoryUnit2: Lesson = {
  id: "pl-isl-11-arabia",
  title: { en: "Arabia: The Cradle of Islam", ml: "അറേബ്യ: ഇസ്ലാമിന്റെ കളിത്തൊട്ടിൽ" },
  estimated_time_mins: 120,
  learning_objectives: [
    { en: "Understand the geographical features of Arabia", ml: "അറേബ്യയുടെ ഭൂമിശാസ്ത്രപരമായ സവിശേഷതകൾ മനസ്സിലാക്കാൻ" },
    { en: "Explain the divisions of the desert and its climate", ml: "മരുഭൂമിയുടെ വിഭജനങ്ങളും കാലാവസ്ഥയും വിശദീകരിക്കാൻ" },
    { en: "Describe the flora and fauna of Arabia", ml: "അറേബ്യയിലെ സസ്യജാലങ്ങളെയും ജീവജാലങ്ങളെയും കുറിച്ച് വിവരിക്കാൻ" },
    { en: "Identify the different races of Arabs", ml: "അറബികളുടെ വിവിധ വംശങ്ങളെ തിരിച്ചറിയാൻ" },
    { en: "Discuss the social, political, and religious life of pre-Islamic Arabs", ml: "ഇസ്ലാമിന് മുൻപുള്ള അറബികളുടെ സാമൂഹിക, രാഷ്ട്രീയ, മതപരമായ ജീവിതത്തെക്കുറിച്ച് ചർച്ച ചെയ്യാൻ" },
    { en: "Explain the significance of the Ka'ba and the city of Makkah", ml: "കഅബയുടെയും മക്ക നഗരത്തിന്റെയും പ്രാധാന്യം വിശദീകരിക്കാൻ" },
    { en: "Study the Camel: The Ship of the Desert", ml: "ഒട്ടകത്തെക്കുറിച്ച് പഠിക്കുക: മരുഭൂമിയിലെ കപ്പൽ" }
  ],
  content: {
    intro: {
      en: "This chapter explores the geographical, social, and cultural landscape of Arabia before the advent of Islam, highlighting why it is called the 'Cradle of Islam'.",
      ml: "ഇസ്ലാം മതത്തിന്റെ ആവിർഭാവത്തിന് മുൻപുള്ള അറേബ്യയുടെ ഭൂമിശാസ്ത്രപരവും സാമൂഹികവും സാംസ്കാരികവുമായ പശ്ചാത്തലം ഈ അധ്യായം പര്യവേക്ഷണം ചെയ്യുന്നു, എന്തുകൊണ്ടാണ് ഇതിനെ 'ഇസ്ലാമിന്റെ കളിത്തൊട്ടിൽ' എന്ന് വിളിക്കുന്നത് എന്ന് ഇത് വ്യക്തമാക്കുന്നു."
    },
    core: {
      en: "This unit covers the geography of Arabia, the life of Bedouins, and the socio-political conditions of the Jahiliyya period.",
      ml: "അറേബ്യയുടെ ഭൂമിശാസ്ത്രം, ബെദൂയിനുകളുടെ ജീവിതം, ജാഹിലിയ്യ കാലഘട്ടത്തിലെ സാമൂഹിക-രാഷ്ട്രീയ സാഹചര്യങ്ങൾ എന്നിവ ഈ യൂണിറ്റ് ഉൾക്കൊള്ളുന്നു."
    },
    blocks: [
      { type: 'h2', en: '1. Topic-wise Explanation', ml: '1. വിഷയാധിഷ്ഠിതമായ വിശദീകരണം' },
      { type: 'h3', en: 'Topic 1: Geography of Arabia', ml: 'വിഷയം 1: അറേബ്യയുടെ ഭൂമിശാസ്ത്രം' },
      { type: 'p', en: 'Arabia is the largest peninsula in the world, located in the southwest of Asia.', ml: 'ഏഷ്യയുടെ തെക്കുപടിഞ്ഞാറായി സ്ഥിതി ചെയ്യുന്ന ലോകത്തിലെ ഏറ്റവും വലിയ ഉപദ്വീപാണ് അറേബ്യ.' },
      { type: 'p', en: 'It is surrounded by water on three sides: the Red Sea on the west, the Arabian Sea on the south, and the Persian Gulf on the east.', ml: 'ഇതിന്റെ മൂന്ന് വശങ്ങളും വെള്ളത്താൽ ചുറ്റപ്പെട്ടിരിക്കുന്നു: പടിഞ്ഞാറ് ചെങ്കടൽ, തെക്ക് അറബിക്കടൽ, കിഴറ് പേർഷ്യൻ ഗൾഫ്.' },
      { type: 'p', en: 'The Arabs call their land "Jazirat-ul-Arab", which means the Island of Arabia.', ml: 'അറബികൾ അവരുടെ നാടിനെ "ജസീറത്തുൽ അറബ്" എന്ന് വിളിക്കുന്നു, ഇതിനർത്ഥം അറേബ്യൻ ദ്വീപ് എന്നാണ്.' },
      { type: 'h3', en: 'Topic 2: Desert Divisions', ml: 'വിഷയം 2: മരുഭൂമിയുടെ വിഭജനങ്ങൾ' },
      { type: 'p', en: 'The Arabian desert is divided into three main parts:', ml: 'അറേബ്യൻ മരുഭൂമിയെ പ്രധാനമായും മൂന്നായി തിരിച്ചിരിക്കുന്നു:' },
      { type: 'ul', items: [
        { en: 'An-Nafud: The northern part with white and red sands.', ml: 'അൻ-നഫൂദ്: വെളുത്തതും ചുവന്നതും മണലുകളുള്ള വടക്കൻ ഭാഗം.' },
        { en: 'Ad-Dahna: The central part with red sands connecting the north and south.', ml: 'അദ്-ദഹ്ന: വടക്കും തെക്കും തമ്മിൽ ബന്ധിപ്പിക്കുന്ന ചുവന്ന മണലുകളുള്ള മധ്യഭാഗം.' },
        { en: 'Al-Rub-al-Khali: The southern part, known as the "Empty Quarter", the largest continuous sand desert.', ml: 'അൽ-റുബ്അൽ-ഖാലി: "ശൂന്യമായ പ്രദേശം" എന്നറിയപ്പെടുന്ന തെക്കൻ ഭാഗം, ലോകത്തിലെ ഏറ്റവും വലിയ മണൽ മരുഭൂമിയാണിത്.' }
      ] },
      { type: 'h3', en: 'Topic 3: Climate and Environment', ml: 'വിഷയം 3: കാലാവസ്ഥയും പരിസ്ഥിതിയും' },
      { type: 'p', en: 'Arabia is one of the driest and hottest regions in the world.', ml: 'ലോകത്തിലെ ഏറ്റവും വരണ്ടതും ചൂടുള്ളതുമായ പ്രദേശങ്ങളിൽ ഒന്നാണ് അറേബ്യ.' },
      { type: 'p', en: 'Rainfall is very scarce, and there are no perennial rivers. Water is found in "Oases" (fertile spots in the desert).', ml: 'മഴ വളരെ കുറവാണ്, വറ്റാത്ത നദികളില്ല. "ഒയാസിസുകളിൽ" (മരുപ്പച്ചകൾ) ആണ് വെള്ളം കാണപ്പെടുന്നത്.' },
      { type: 'h3', en: 'Topic 4: Flora and Fauna', ml: 'വിഷയം 4: സസ്യജാലങ്ങളും ജീവജാലങ്ങളും' },
      { type: 'p', en: 'The Date Palm is the most important tree in Arabia, providing food and materials for various uses.', ml: 'അറേബ്യയിലെ সবচেয়ে പ്രധാനപ്പെട്ട മരമാണ് ഈന്തപ്പന, ഇത് ഭക്ഷണവും വിവിധ ആവശ്യങ്ങൾക്കുള്ള വസ്തുക്കളും നൽകുന്നു.' },
      { type: 'p', en: 'The Camel is the most essential animal, known as the "Ship of the Desert" because of its ability to survive long periods without water.', ml: 'ഏറ്റവും അത്യാവശ്യമായ മൃഗം ഒട്ടകമാണ്, വെള്ളമില്ലാതെ ദീർഘകാലം അതിജീവിക്കാനുള്ള കഴിവ് കാരണം ഇതിനെ "മരുഭൂമിയിലെ കപ്പൽ" എന്ന് വിളിക്കുന്നു.' },
      { type: 'p', en: 'The Arabian Horse is world-famous for its speed, beauty, and endurance.', ml: 'അറേബ്യൻ കുതിരകൾ അവയുടെ വേഗതയ്ക്കും സൗന്ദര്യത്തിനും കരുത്തിനും ലോകപ്രശസ്തമാണ്.' },
      { type: 'h3', en: 'Topic 5: Races of Arabs', ml: 'വിഷയം 5: അറബികളുടെ വംശങ്ങൾ' },
      { type: 'p', en: 'Arabs are mainly divided into three groups:', ml: 'അറബികളെ പ്രധാനമായും മൂന്ന് ഗ്രൂപ്പുകളായി തിരിച്ചിരിക്കുന്നു:' },
      { type: 'ul', items: [
        { en: 'Extinct Arabs (Arab-al-Baida): Ancient tribes like Ad and Thamud who perished.', ml: 'നശിച്ചുപോയ അറബികൾ (അറബ് അൽ-ബൈദ): ആദ്, സമൂദ് തുടങ്ങിയ പുരാതന ഗോത്രങ്ങൾ.' },
        { en: 'Pure Arabs (Arab-al-Ariba): Descendants of Qahtan, mainly from Yemen.', ml: 'ശുദ്ധ അറബികൾ (അറബ് അൽ-അരിബ): ഖഹ്താന്റെ പിൻഗാമികൾ, പ്രധാനമായും യമനിൽ നിന്നുള്ളവർ.' },
        { en: 'Arabized Arabs (Arab-al-Mustariba): Descendants of Ishmael (Ismail), mainly in the north.', ml: 'അറബികളായി മാറിയവർ (അറബ് അൽ-മുസ്തരിബ): ഇസ്മായിൽ നബിയുടെ പിൻഗാമികൾ, പ്രധാനമായും വടക്കൻ ഭാഗത്തുള്ളവർ.' }
      ] },
      { type: 'h3', en: 'Topic 6: Social Life - Bedouins and Town Dwellers', ml: 'വിഷയം 6: സാമൂഹിക ജീവിതം - ബെദൂയിനുകളും നഗരവാസികളും' },
      { type: 'p', en: 'Bedouins (Ahl-al-Badiya) are nomadic tribes who move from place to place in search of water and pasture.', ml: 'ബെദൂയിനുകൾ (അഹ്ലുൽ ബാദിയ) വെള്ളവും മേച്ചിൽപ്പുറവും തേടി ഒരിടത്തുനിന്ന് മറ്റൊരിടത്തേക്ക് മാറുന്ന നാടോടി ഗോത്രങ്ങളാണ്.' },
      { type: 'p', en: 'Town Dwellers (Ahl-al-Hadar) live in settled communities like Makkah, Madinah, and Taif, engaging in trade and agriculture.', ml: 'നഗരവാസികൾ (അഹ്ലുൽ ഹളർ) മക്ക, മദീന, ത്വാഇഫ് തുടങ്ങിയ സ്ഥിരതാമസമാക്കിയ കമ്മ്യൂണിറ്റികളിൽ താമസിക്കുന്നു, വ്യാപാരത്തിലും കൃഷിയിലും ഏർപ്പെടുന്നു.' },
      { type: 'h3', en: 'Topic 7: Political Life - The Tribal System', ml: 'വിഷയം 7: രാഷ്ട്രീയ ജീവിതം - ഗോത്ര വ്യവസ്ഥ' },
      { type: 'p', en: 'The basic unit of Arab society was the tribe (Qabila).', ml: 'അറബ് സമൂഹത്തിന്റെ അടിസ്ഥാന യൂണിറ്റ് ഗോത്രമായിരുന്നു (ഖബീല).' },
      { type: 'p', en: 'Each tribe was headed by a "Sheikh", chosen for his wisdom, bravery, and wealth.', ml: 'ഓരോ ഗോത്രത്തെയും നയിച്ചിരുന്നത് ഒരു "ശൈഖ്" ആയിരുന്നു, അദ്ദേഹത്തിന്റെ ജ്ഞാനം, ധീരത, സമ്പത്ത് എന്നിവ കണക്കിലെടുത്താണ് അദ്ദേഹത്തെ തിരഞ്ഞെടുത്തത്.' },
      { type: 'p', en: 'Tribal loyalty (Asabiyya) was the strongest bond among the Arabs.', ml: 'ഗോത്രത്തോടുള്ള കൂറ് (അസബിയ്യ) അറബികൾക്കിടയിലെ ഏറ്റവും ശക്തമായ ബന്ധമായിരുന്നു.' },
      { type: 'h3', en: 'Topic 8: Religious Life in Pre-Islamic Arabia', ml: 'വിഷയം 8: ഇസ്ലാമിന് മുൻപുള്ള അറേബ്യയിലെ മതജീവിതം' },
      { type: 'p', en: 'Most Arabs were idol worshippers, with each tribe having its own idol.', ml: 'മിക്ക അറബികളും വിഗ്രഹാരാധകരായിരുന്നു, ഓരോ ഗോത്രത്തിനും അതിന്റേതായ വിഗ്രഹമുണ്ടായിരുന്നു.' },
      { type: 'p', en: 'The Ka\'ba in Makkah contained 360 idols, the chief being Hubal.', ml: 'മക്കയിലെ കഅബയിൽ 360 വിഗ്രഹങ്ങൾ ഉണ്ടായിരുന്നു, അതിൽ പ്രധാനി ഹുബൽ ആയിരുന്നു.' },
      { type: 'p', en: 'There were also followers of Christianity, Judaism, and the "Hanifs" (monotheists following the religion of Abraham).', ml: 'ക്രിസ്തുമതം, യഹൂദമതം എന്നിവ പിന്തുടരുന്നവരും "ഹനീഫുകളും" (ഇബ്രാഹിം നബിയുടെ മതം പിന്തുടരുന്ന ഏകദൈവ വിശ്വാസികൾ) ഉണ്ടായിരുന്നു.' },
      { type: 'h3', en: 'Topic 9: The Significance of Makkah', ml: 'വിഷയം 9: മക്കയുടെ പ്രാധാന്യം' },
      { type: 'p', en: 'Makkah was a major commercial and religious center.', ml: 'മക്ക ഒരു പ്രധാന വാണിജ്യ-മത കേന്ദ്രമായിരുന്നു.' },
      { type: 'p', en: 'It was located on the trade route connecting the south and north.', ml: 'തെക്കും വടക്കും തമ്മിൽ ബന്ധിപ്പിക്കുന്ന വ്യാപാര പാതയിലാണ് ഇത് സ്ഥിതി ചെയ്തിരുന്നത്.' },
      { type: 'p', en: 'The Ka\'ba, built by Abraham and Ishmael, made Makkah a place of pilgrimage for all Arabs.', ml: 'ഇബ്രാഹിം നബിയും ഇസ്മായിൽ നബിയും ചേർന്ന് നിർമ്മിച്ച കഅബ മക്കയെ എല്ലാ അറബികളുടെയും തീർത്ഥാടന കേന്ദ്രമാക്കി മാറ്റി.' },
      { type: 'h2', en: '2. Tables / Diagrams / Graphs', ml: '2. പട്ടികകൾ / രേഖാചിത്രങ്ങൾ / ഗ്രാഫുകൾ' },
      { type: 'h3', en: 'Table 1: Desert Divisions of Arabia', ml: 'പട്ടിക 1: അറേബ്യയിലെ മരുഭൂമി വിഭജനങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{ en: 'Division', ml: 'വിഭാഗം' }, { en: 'Location', ml: 'സ്ഥാനം' }, { en: 'Characteristics', ml: 'സവിശേഷതകൾ' }],
        rows: [
          [{ en: 'An-Nafud', ml: 'അൻ-നഫൂദ്' }, { en: 'North', ml: 'വടക്ക്' }, { en: 'White and red sands', ml: 'വെളുത്തതും ചുവന്നതുമായ മണൽ' }],
          [{ en: 'Ad-Dahna', ml: 'അദ്-ദഹ്ന' }, { en: 'Central', ml: 'മധ്യം' }, { en: 'Connects north and south', ml: 'വടക്കും തെക്കും തമ്മിൽ ബന്ധിപ്പിക്കുന്നു' }],
          [{ en: 'Al-Rub-al-Khali', ml: 'അൽ-റുബ്അൽ-ഖാലി' }, { en: 'South', ml: 'തെക്ക്' }, { en: 'Largest continuous sand desert', ml: 'ഏറ്റവും വലിയ മണൽ മരുഭൂമി' }]
        ]
      } },
      { type: 'h3', en: 'Table 2: Bedouins vs. Town Dwellers', ml: 'പട്ടിക 2: ബെദൂയിനുകളും നഗരവാസികളും' },
      { type: 'table', tableData: {
        headers: [{ en: 'Feature', ml: 'സവിശേഷത' }, { en: 'Bedouins (Ahl-al-Badiya)', ml: 'ബെദൂയിനുകൾ' }, { en: 'Town Dwellers (Ahl-al-Hadar)', ml: 'നഗരവാസികൾ' }],
        rows: [
          [{ en: 'Lifestyle', ml: 'ജീവിതശൈലി' }, { en: 'Nomadic', ml: 'നാടോടി' }, { en: 'Settled', ml: 'സ്ഥിരതാമസം' }],
          [{ en: 'Occupation', ml: 'തൊഴിൽ' }, { en: 'Herding', ml: 'മൃഗപരിപാലനം' }, { en: 'Trade/Agriculture', ml: 'വ്യാപാരം/കൃഷി' }],
          [{ en: 'Dwelling', ml: 'താമസം' }, { en: 'Tents', ml: 'കൂടാരങ്ങൾ' }, { en: 'Houses', ml: 'വീടുകൾ' }]
        ]
      } },
      { type: 'h2', en: '3. Summary Points', ml: '3. ചുരുക്കരൂപം' },
      { type: 'ul', items: [
        { en: 'Arabia is the world\'s largest peninsula and the birthplace of Islam.', ml: 'ലോകത്തിലെ ഏറ്റവും വലിയ ഉപദ്വീപും ഇസ്ലാമിന്റെ ജന്മസ്ഥലവുമാണ് അറേബ്യ.' },
        { en: 'The harsh desert climate shaped the character and lifestyle of the Arabs.', ml: 'കഠിനമായ മരുഭൂമി കാലാവസ്ഥ അറബികളുടെ സ്വഭാവത്തെയും ജീവിതശൈലിയെയും രൂപപ്പെടുത്തി.' },
        { en: 'The camel and the date palm were essential for survival in the desert.', ml: 'മരുഭൂമിയിലെ അതിജീവനത്തിന് ഒട്ടകവും ഈന്തപ്പനയും അത്യാവശ്യമായിരുന്നു.' },
        { en: 'Pre-Islamic society was based on tribal loyalty and headed by a Sheikh.', ml: 'ഇസ്ലാമിന് മുൻപുള്ള സമൂഹം ഗോത്രത്തോടുള്ള കൂറിലധിഷ്ഠിതമായിരുന്നു, ഒരു ശൈഖ് ആയിരുന്നു അതിന്റെ തലവൻ.' },
        { en: 'Makkah was the most important city due to its trade and the presence of the Ka\'ba.', ml: 'വ്യാപാരവും കഅബയുടെ സാന്നിധ്യവും കാരണം മക്ക ഏറ്റവും പ്രധാനപ്പെട്ട നഗരമായിരുന്നു.' }
      ] },
      { type: 'h2', en: 'PRACTICE QUESTIONS', ml: 'പരിശീലന ചോദ്യങ്ങൾ' },
      { type: 'p', en: 'Q1. What is the meaning of "Jazirat-ul-Arab"?', ml: 'ചോദ്യം 1: "ജസീറത്തുൽ അറബ്" എന്നതിന്റെ അർത്ഥമെന്താണ്?' },
      { type: 'p', en: 'Answer: It means the "Island of Arabia".', ml: 'ഉത്തരം: "അറേബ്യൻ ദ്വീപ്" എന്നാണ് ഇതിനർത്ഥം.' },
      { type: 'p', en: 'Q2. Why is the camel called the "Ship of the Desert"?', ml: 'ചോദ്യം 2: എന്തുകൊണ്ടാണ് ഒട്ടകത്തെ "മരുഭൂമിയിലെ കപ്പൽ" എന്ന് വിളിക്കുന്നത്?' },
      { type: 'p', en: 'Answer: Because of its ability to travel long distances in the desert without water.', ml: 'ഉത്തരം: വെള്ളമില്ലാതെ മരുഭൂമിയിലൂടെ ദീർഘദൂരം സഞ്ചരിക്കാനുള്ള കഴിവ് കാരണമാണ് ഇതിനെ ഇങ്ങനെ വിളിക്കുന്നത്.' },
      { type: 'p', en: 'Q3. Who are the Bedouins?', ml: 'ചോദ്യം 3: ആരാണ് ബെദൂയിനുകൾ?' },
      { type: 'p', en: 'Answer: They are the nomadic Arabs who live in the desert.', ml: 'ഉത്തരം: മരുഭൂമിയിൽ താമസിക്കുന്ന നാടോടികളായ അറബികളാണ് ഇവർ.' },
      { type: 'p', en: 'Q4. What was the chief idol in the Ka\'ba before Islam?', ml: 'ചോദ്യം 4: ഇസ്ലാമിന് മുൻപ് കഅബയിലെ പ്രധാന വിഗ്രഹം ഏതായിരുന്നു?' },
      { type: 'p', en: 'Answer: Hubal.', ml: 'ഉത്തരം: ഹുബൽ.' }
    ]
  },
  glossary: [
    { term: { en: "Jazirat-ul-Arab", ml: "ജസീറത്തുൽ അറബ്" }, definition: { en: "The Arabic name for the Arabian Peninsula, meaning 'Island of the Arabs'.", ml: "അറേബ്യൻ ഉപദ്വീപിന്റെ അറബി നാമം, 'അറബികളുടെ ദ്വീപ്' എന്നർത്ഥം." } },
    { term: { en: "Sheikh", ml: "ശൈഖ്" }, definition: { en: "The head of an Arabic tribe.", ml: "ഒരു അറബ് ഗോത്രത്തിന്റെ തലവൻ." } },
    { term: { en: "Asabiyya", ml: "അസബിയ്യ" }, definition: { en: "Tribal loyalty or social solidarity among Arabs.", ml: "അറബികൾക്കിടയിലെ ഗോത്രത്തോടുള്ള കൂറ് അല്ലെങ്കിൽ സാമൂഹിക ഐക്യദാർഢ്യം." } },
    { term: { en: "Jahiliyya", ml: "ജാഹിലിയ്യ" }, definition: { en: "The period of 'ignorance' in Arabia before the advent of Islam.", ml: "ഇസ്ലാമിന്റെ ആവിർഭാവത്തിന് മുൻപുള്ള അറേബ്യയിലെ 'അജ്ഞതയുടെ' കാലഘട്ടം." } }
  ],
  videos: [
    {
      title: "അറേബ്യ: ഇസ്ലാമിന്റെ കളിത്തൊട്ടിൽ - Video Tutorial",
      url: "https://www.youtube.com/watch?v=-CRu91I9Tlk"
    }
  ],
  quiz: plusOneIslamicHistoryUnit2Quiz
};
