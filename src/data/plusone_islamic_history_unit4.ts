import { Lesson } from './curriculum';
import { plusOneIslamicHistoryUnit4Quiz } from './plusone_islamic_history_quiz_bank';

export const plusOneIslamicHistoryUnit4: Lesson = {
  id: "pl-isl-11-madina",
  title: { en: "Prophetic Period: Madina", ml: "പ്രവാചക കാലഘട്ടം: മദീന" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Describe the arrival of the Prophet in Madina and the construction of the Quba Mosque", ml: "പ്രവാചകന്റെ മദീനയിലേക്കുള്ള വരവും ഖുബ പള്ളിയുടെ നിർമ്മാണവും വിവരിക്കാൻ" },
    { en: "Explain the significance of Masjid-un-Nabavi and the concept of brotherhood (Muhajirs and Ansars)", ml: "മസ്ജിദുന്നബവിയുടെ പ്രാധാന്യവും സാഹോദര്യ സങ്കൽപ്പവും (മുഹാജിറുകളും അൻസാറുകളും) വിശദീകരിക്കാൻ" },
    { en: "Understand the Madina Charter and its role as a constitution", ml: "മദീന ഭരണഘടനയെക്കുറിച്ചും ഒരു ഭരണഘടന എന്ന നിലയിൽ അതിന്റെ പങ്കിനെക്കുറിച്ചും മനസ്സിലാക്കാൻ" },
    { en: "Discuss the major battles of Badr, Uhd, and Khandaq", ml: "ബദർ, ഉഹ്ദ്, ഖന്ദഖ് എന്നീ പ്രധാന യുദ്ധങ്ങളെക്കുറിച്ച് ചർച്ച ചെയ്യാൻ" },
    { en: "Explain the concept of Jihad and the significance of the Hudaibiya Treaty and the Fall of Makkah", ml: "ജിഹാദ് എന്ന ആശയവും ഹുദൈബിയ സന്ധിയുടെയും മക്കാ വിജയത്തിന്റെയും പ്രാധാന്യവും വിശദീകരിക്കാൻ" },
    { en: "Summarize the teachings of the Farewell Pilgrimage and the Last Sermon", ml: "വിടവാങ്ങൽ തീർത്ഥാടനത്തിലെയും അവസാന പ്രസംഗത്തിലെയും പാഠങ്ങൾ സംഗ്രഹിക്കാൻ" },
    { en: "Evaluate Prophet Muhammad as a reformer and statesman", ml: "ഒരു പരിഷ്കർത്താവായും ഭരണതന്ത്രജ്ഞനായയും മുഹമ്മദ് നബിയെ വിലയിരുത്താൻ" },
    { en: "Study the Jews and the Prophet's interactions", ml: "ജൂതന്മാരും പ്രവാചകനും തമ്മിലുള്ള ആശയവിനിമയങ്ങളെക്കുറിച്ച് പഠിക്കുക" }
  ],
  content: {
    intro: {
      en: "This chapter details the Prophetic period in Madina, covering the establishment of the first Islamic state, major defensive battles, and the ultimate victory in Makkah.",
      ml: "ഈ അധ്യായം മദീനയിലെ പ്രവാചക കാലഘട്ടത്തെ വിശദീകരിക്കുന്നു, ആദ്യത്തെ ഇസ്ലാമിക രാഷ്ട്രത്തിന്റെ സ്ഥാപനം, പ്രധാന പ്രതിരോധ യുദ്ധങ്ങൾ, മക്കയിലെ അന്തിമ വിജയം എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു."
    },
    core: {
      en: "This unit covers the Hijra, the Madina Charter, the battles of Badr, Uhd, and Khandaq, the Hudaibiya Treaty, the conquest of Makkah, and the Prophet's final sermon.",
      ml: "ഹിജ്റ, മദീന ചാർട്ടർ, ബദർ, ഉഹ്ദ്, ഖന്ദഖ് യുദ്ധങ്ങൾ, ഹുദൈബിയ സന്ധി, മക്കാ വിജയം, പ്രവാചകന്റെ അവസാന പ്രസംഗം എന്നിവ ഈ യൂണിറ്റ് ഉൾക്കൊള്ളുന്നു."
    },
    blocks: [
      { type: 'h2', en: '1. Topic-wise Explanation', ml: '1. വിഷയാധിഷ്ഠിതമായ വിശദീകരണം' },
      { type: 'h3', en: 'Topic 1: Arrival of the Prophet and Quba Mosque', ml: 'വിഷയം 1: പ്രവാചകന്റെ വരവും ഖുബ പള്ളിയും' },
      { type: 'p', en: 'The migration of the Prophet from Makkah to Yathrib is termed \'Hijra\'.', ml: 'മക്കയിൽ നിന്ന് യസ്രിബിലേക്കുള്ള പ്രവാചകന്റെ പലായനത്തെ \'ഹിജ്റ\' എന്ന് വിളിക്കുന്നു.' },
      { type: 'p', en: 'Along with Abu Bakr, Muhammad reached Quba, six and a half miles south of Madina, and stayed there for four days.', ml: 'അബൂബക്കറിനൊപ്പം മദീനയ്ക്ക് ആറര മൈൽ തെക്കുള്ള ഖുബയിൽ എത്തിയ മുഹമ്മദ് നബി അവിടെ നാല് ദിവസം തങ്ങി.' },
      { type: 'p', en: 'During this time, he established the Quba Mosque, the first mosque built by the Prophet.', ml: 'ഈ സമയത്ത് അദ്ദേഹം ഖുബ പള്ളി സ്ഥാപിച്ചു, പ്രവാചകൻ നിർമ്മിച്ച ആദ്യത്തെ പള്ളിയാണിത്.' },
      { type: 'p', en: 'Ali bin Abi Talib joined the Prophet at Quba by walking during the night and hiding during the daytime.', ml: 'രാത്രിയിൽ നടന്നുകൊണ്ടും പകൽ ഒളിച്ചിരുന്നുകൊണ്ടും അലി ബിൻ അബി താലിബ് ഖുബയിൽ വെച്ച് പ്രവാചകനോടൊപ്പം ചേർന്നു.' },
      { type: 'p', en: 'On September 24, 622 C.E., the Prophet reached Yathrib.', ml: 'ക്риസ്തുവർഷം 622 സെപ്റ്റംബർ 24-ന് പ്രവാചകൻ യസ്രിബിൽ എത്തിച്ചേർന്നു.' },
      { type: 'h3', en: 'Topic 2: Masjid-un-Nabavi and Brotherhood', ml: 'വിഷയം 2: മസ്ജിദുന്നബവിയും സാഹോദര്യവും' },
      { type: 'p', en: 'The Prophet’s camel stopped at a yard belonging to two orphans named Sahal and Suhail.', ml: 'സഹൽ, സുഹൈൽ എന്നീ രണ്ട് അനാഥ കുട്ടികളുടെ ഉടമസ്ഥതയിലുള്ള ഒരു മുറ്റത്താണ് പ്രവാചകന്റെ ഒട്ടകം നിന്നത്.' },
      { type: 'p', en: 'He bought the yard, promised to satisfy the orphans\' needs, and built the Masjid-un-Nabavi with his companions.', ml: 'അദ്ദേഹം ആ മുറ്റം വാങ്ങുകയും അനാഥരുടെ ആവശ്യങ്ങൾ നിറവേറ്റാമെന്ന് വാഗ്ദാനം ചെയ്യുകയും അനുയായികൾക്കൊപ്പം മസ്ജിദുന്നബവി നിർമ്മിക്കുകയും ചെയ്തു.' },
      { type: 'p', en: 'With Hijra, the Makkan period ended, and Yathrib was renamed to Madinath-un-Nabi, the city of the Prophet.', ml: 'ഹിജ്റയോടെ മക്കാ കാലഘട്ടം അവസാനിക്കുകയും യസ്രിബിനെ പ്രവാചകന്റെ നഗരം എന്നർത്ഥം വരുന്ന മദീനത്തുന്നബി എന്ന് പുനർനാമകരണം ചെയ്യുകയും ചെയ്തു.' },
      { type: 'p', en: 'The emigrants from Makkah were called the Muhajirs, and the local helpers of Madina were called the Ansars.', ml: 'മക്കയിൽ നിന്നുള്ള കുടിയേറ്റക്കാരെ മുഹാജിറുകൾ എന്നും മദീനയിലെ പ്രാദേശിക സഹായികളെ അൻസാറുകൾ എന്നും വിളിച്ചു.' },
      { type: 'p', en: 'The Prophet united the Muhajirs and Ansars to establish economic security and a genuine brotherhood.', ml: 'സാമ്പത്തിക ഭദ്രതയും യഥാർത്ഥ സാഹോദര്യവും സ്ഥാപിക്കുന്നതിനായി പ്രവാചകൻ മുഹാജിറുകളെയും അൻസാറുകളെയും ഒന്നിപ്പിച്ചു.' },
      { type: 'h3', en: 'Topic 3: Madina Charter (Sahifath ul Madina)', ml: 'വിഷയം 3: മദീന ഭരണഘടന (സഹീഫത്തുൽ മദീന)' },
      { type: 'p', en: 'After reaching Madina, the Prophet promulgated a charter outlining the rights and duties of all citizens.', ml: 'മദീനയിൽ എത്തിയ ശേഷം, എല്ലാ പൗരന്മാരുടെയും അവകാശങ്ങളും കടമകളും വ്യക്തമാക്കുന്ന ഒരു ഭരണഘടന പ്രവാചകൻ പ്രഖ്യാപിച്ചു.' },
      { type: 'p', en: 'It declared that Muslims of Quraish and Yathrib form one nation called the Ummah.', ml: 'ഖുറൈശികളിലെയും യസ്രിബിലെയും മുസ്ലീങ്ങൾ ഉമ്മത്ത് എന്ന് വിളിക്കപ്പെടുന്ന ഒരു ജനതയാണെന്ന് ഇത് പ്രഖ്യാപിച്ചു.' },
      { type: 'p', en: 'It promised social, legal, and economic equality to all loyal citizens, including the Jews.', ml: 'ജൂതന്മാർ ഉൾപ്പെടെയുള്ള എല്ലാ വിശ്വസ്തരായ പൗരന്മാരും സാമൂഹികവും നിയമപരവും സാമ്പത്തികവുമായ സമത്വം ഇത് വാഗ്ദാനം ചെയ്തു.' },
      { type: 'h3', en: 'Topic 4: The Major Battles', ml: 'വിഷയം 4: പ്രധാന യുദ്ധങ്ങൾ' },
      { type: 'p', en: 'Battle of Badr (March 624 C.E.): The Makkans confiscated properties of emigrants, leading Muslims to conduct raids on Makkan caravans. A Makkan army of 950 infantry, 100 horses, and 170 camels met 313 Muslims with two horses and seventy camels at Badr. The Muslims won, setting a humane example by allowing prisoners to pay ransom or teach ten Madinites to read and write.', ml: 'ബദർ യുദ്ധം (ക്രിസ്തുവർഷം 624 മാർച്ച്): മക്കക്കാർ കുടിയേറ്റക്കാരുടെ സ്വത്തുക്കൾ കണ്ടുകെട്ടി, ഇത് മക്കാ കച്ചവടസംഘങ്ങൾക്ക് നേരെ ആക്രമണം നടത്താൻ മുസ്ലീങ്ങളെ പ്രേരിപ്പിച്ചു. 950 കാലാൾപ്പടയും 100 കുതിരകളും 170 ഒട്ടകങ്ങളുമുള്ള മക്കാ സൈന്യം, രണ്ട് കുതിരകളും എഴുപത് ഒട്ടകങ്ങളുമുള്ള 313 മുസ്ലീങ്ങളെ ബദറിൽ വെച്ച് നേരിട്ടു. മുസ്ലീങ്ങൾ വിജയിച്ചു, തടവുകാരെ മോചനദ്രവ്യം നൽകാനോ അല്ലെങ്കിൽ പത്ത് മദീനക്കാരെ വായിക്കാനും എഴുതാനും പഠിപ്പിക്കാനോ അനുവദിച്ചുകൊണ്ട് അവർ ഒരു മാനുഷിക മാതൃക സൃഷ്ടിച്ചു.' },
      { type: 'p', en: 'Battle of Uhd (March 625 C.E.): The Quraish attacked Madina with 3,000 soldiers to take revenge for Badr. Abdulla Ibn Ubayy and his 300 Munafiqin deserted the Muslims, leaving the Prophet with 700 men. Fifty archers left their posts to collect spoils, allowing Khalid Ibn Walid to attack from the rear. The Prophet was wounded, and the Muslims suffered heavy losses for disobeying instructions.', ml: 'ഉഹ്ദ് യുദ്ധം (ക്രിസ്തുവർഷം 625 മാർച്ച്): ബദർ യുദ്ധത്തിന് പകരം വീട്ടാനായി ഖുറൈശികൾ 3,000 സൈനികരുമായി മദീനയെ ആക്രമിച്ചു. അബ്ദുല്ല ഇബ്നു ഉബയ്യും അദ്ദേഹത്തിന്റെ 300 മുനാഫിഖുകളും (കപടവിശ്വാസികൾ) മുസ്ലീങ്ങളെ ഉപേക്ഷിച്ചു, ഇതോടെ പ്രവാചകന്റെ കൂടെ 700 പേർ മാത്രമായി. യുദ്ധമുതലുകൾ ശേഖരിക്കാനായി അൻപത് വില്ലാളികൾ തങ്ങളുടെ സ്ഥാനങ്ങൾ ഉപേക്ഷിച്ചു, ഇത് പിന്നിൽ നിന്ന് ആക്രമിക്കാൻ ഖാലിദ് ഇബ്നു വലീദിന് അവസരമൊരുക്കി. പ്രവാചകന് പരിക്കേൽക്കുകയും നിർദ്ദേശങ്ങൾ ലംഘിച്ചതിനാൽ മുസ്ലീങ്ങൾക്ക് വലിയ നാശനഷ്ടങ്ങൾ നേരിടേണ്ടി വരികയും ചെയ്തു.' },
      { type: 'p', en: 'Battle of Ditch or Khandaq (March 627 C.E.): A coalition army of 10,000 Makkans under Abu Sufiyan marched against Madina. Under the direction of Salman-al-Farsi, 3,000 Muslims dug a huge ditch around the city. The siege continued for a month but failed, forcing the Makkans to withdraw.', ml: 'കിടങ്ങ് യുദ്ധം അഥവാ ഖന്ദഖ് യുദ്ധം (ക്രിസ്തുവർഷം 627 മാർച്ച്): അബു സുഫിയാന്റെ നേതൃത്വത്തിൽ 10,000 മക്കക്കാരുടെ ഒരു സഖ്യസേന മദീനയ്ക്കെതിരെ മാർച്ച് ചെയ്തു. സൽമാനുൽ ഫാരിസിയുടെ നിർദ്ദേശപ്രകാരം, 3,000 മുസ്ലീങ്ങൾ നഗരത്തിന് ചുറ്റും ഒരു വലിയ കിടങ്ങ് കുഴിച്ചു. ഉപരോധം ഒരു മാസം നീണ്ടുനിന്നെങ്കിലും പരാജയപ്പെട്ടു, ഇത് പിന്മാറാൻ മക്കക്കാരെ നിർബന്ധിതരാക്കി.' },
      { type: 'h3', en: 'Topic 5: The Jews and the Prophet', ml: 'വിഷയം 5: ജൂതന്മാരും പ്രവാചകനും' },
      { type: 'p', en: 'The Jewish tribes in Madina lent money at high interest rates and were threatened by the rise of Islam.', ml: 'മദീനയിലെ ജൂത ഗോത്രങ്ങൾ ഉയർന്ന പലിശ നിരക്കിൽ പണം കടം കൊടുത്തിരുന്നു, കൂടാതെ ഇസ്ലാമിന്റെ വളർച്ച അവരെ ഭയപ്പെടുത്തി.' },
      { type: 'p', en: 'Banu Kainuqa was expelled from Madina for violating the pact, and Banu Nadir was exiled to Khaibar for plotting to kill the Prophet.', ml: 'കരാർ ലംഘിച്ചതിന് ബനൂ കൈനുഖയെ മദീനയിൽ നിന്ന് പുറത്താക്കി, കൂടാതെ പ്രവാചകനെ കൊല്ലാൻ ഗൂഢാലോചന നടത്തിയതിന് ബനൂ നദീറിനെ ഖൈബറിലേക്ക് നാടുകടത്തി.' },
      { type: 'p', en: 'During Khandaq, Banu Quraiza allied with the Makkans; later they were forced to surrender to the Muslims.', ml: 'ഖന്ദഖ് യുദ്ധസമയത്ത് ബനൂ ഖുറൈസ മക്കക്കാരുമായി സഖ്യമുണ്ടാക്കി; പിന്നീട് മുസ്ലീങ്ങൾക്ക് കീഴടങ്ങാൻ അവർ നിർബന്ധിതരായി.' },
      { type: 'h3', en: 'Topic 6: Jihad (The Struggle)', ml: 'വിഷയം 6: ജിഹാദ് (പോരാട്ടം)' },
      { type: 'p', en: 'Jihad means to strive or struggle in the way of God.', ml: 'ദൈവമാർഗ്ഗത്തിൽ പരിശ്രമിക്കുക അല്ലെങ്കിൽ പോരാടുക എന്നാണ് ജിഹാദ് അർത്ഥമാക്കുന്നത്.' },
      { type: 'p', en: 'Jihad ul Akbar is the greater struggle to overcome one\'s own evil desires.', ml: 'സ്വന്തം തിന്മയായ ആഗ്രഹങ്ങളെ മറികടക്കാനുള്ള വലിയ പോരാട്ടമാണ് ജിഹാദുൽ അക്ബർ.' },
      { type: 'p', en: 'Jihad ul Asghar is the lesser struggle, referring to the collective defense of Islam, not aggressive warfare.', ml: 'ആക്രമണാത്മക യുദ്ധത്തെയല്ല, മറിച്ച് ഇസ്ലാമിനെ സംരക്ഷിക്കാനുള്ള കൂട്ടായ പോരാട്ടത്തെ സൂചിപ്പിക്കുന്ന ചെറിയ പോരാട്ടമാണ് ജിഹാദുൽ അസ്ഗർ.' },
      { type: 'h3', en: 'Topic 7: The Hudaibiya Treaty', ml: 'വിഷയം 7: ഹുദൈബിയ സന്ധി' },
      { type: 'p', en: 'In 628 C.E., the Prophet and 1,400 Muslims encamped at Hudaibiya for Hajj but were stopped by the Quraish.', ml: 'ക്രിസ്തുവർഷം 628-ൽ പ്രവാചകനും 1,400 മുസ്ലീങ്ങളും ഹജ്ജിനായി ഹുദൈബിയയിൽ തമ്പടിച്ചുവെങ്കിലും ഖുറൈശികൾ അവരെ തടഞ്ഞു.' },
      { type: 'p', en: 'A rumor of Uthman\'s murder led the Muslims to take a pledge of loyalty known as \'Bai\'ath ul Ridwan\'.', ml: 'ഉസ്മാൻ കൊല്ലപ്പെട്ടുവെന്ന അഭ്യൂഹം മുസ്ലീങ്ങളെ \'ബൈഅത്തുൽ രിദ്വാൻ\' എന്നറിയപ്പെടുന്ന കൂറ് പ്രഖ്യാപനത്തിന് പ്രേരിപ്പിച്ചു.' },
      { type: 'p', en: 'A treaty was signed: war was suspended for ten years, Muslims would return the next year for three days, and peaceful mixing was permitted.', ml: 'ഒരു സന്ധി ഒപ്പുവെച്ചു: പത്ത് വർഷത്തേക്ക് യുദ്ധം നിർത്തിവെച്ചു, മുസ്ലീങ്ങൾ അടുത്ത വർഷം മൂന്ന് ദിവസത്തേക്ക് മടങ്ങിവരാം, സമാധാനപരമായ ആശയവിനിമയങ്ങൾ അനുവദിച്ചു.' },
      { type: 'p', en: 'This led to the conversion of leading Makkans like Khalid ibn Walid and Amr Ibn Aas to Islam.', ml: 'ഇത് ഖാലിദ് ഇബ്നു വലീദ്, അംറ് ഇബ്നു ആസ് തുടങ്ങിയ പ്രമുഖ മക്കക്കാർ ഇസ്ലാം സ്വീകരിക്കുന്നതിലേക്ക് നയിച്ചു.' },
      { type: 'h3', en: 'Topic 8: Fall of Makkah', ml: 'വിഷയം 8: മക്കാ വിജയം' },
      { type: 'p', en: 'In 630 C.E., the Quraish broke the treaty by supporting Banu Bakr\'s attack on Banu Khuzah, a Muslim ally.', ml: 'ക്രിസ്തുവർഷം 630-ൽ, മുസ്ലീങ്ങളുടെ സഖ്യകക്ഷിയായ ബനൂ ഖുസഅയെ ബനൂ ബക്കർ ആക്രമിച്ചതിനെ പിന്തുണച്ചുകൊണ്ട് ഖുറൈശികൾ സന്ധി ലംഘിച്ചു.' },
      { type: 'p', en: 'The Prophet marched with 10,000 men and conquered Makkah without resistance, acting as a \'Bloodless Revolution\'.', ml: 'പ്രവാചകൻ 10,000 ആളുകളുമായി മാർച്ച് ചെയ്യുകയും ചെറുത്തുനിൽപ്പില്ലാതെ മക്ക കീഴടക്കുകയും ചെയ്തു, ഇത് ഒരു \'രക്തരഹിത വിപ്ലവമായി\' പ്രവർത്തിച്ചു.' },
      { type: 'p', en: 'Abu Sufiyan accepted Islam, and the Prophet cleared all idols from the Ka\'aba.', ml: 'അബു സുഫിയാൻ ഇസ്ലാം സ്വീകരിച്ചു, പ്രവാചകൻ കഅബയിൽ നിന്ന് എല്ലാ വിഗ്രഹങ്ങളും നീക്കം ചെയ്തു.' },
      { type: 'h3', en: 'Topic 9: Farewell Pilgrimage and the Last Sermon', ml: 'വിഷയം 9: വിടവാങ്ങൽ തീർത്ഥാടനവും അവസാന പ്രസംഗവും' },
      { type: 'p', en: 'In 632 C.E., the Prophet performed his last Hajj and addressed the people at Mount Arafa.', ml: 'ക്രിസ്തുവർഷം 632-ൽ പ്രവാചകൻ തന്റെ അവസാന ഹജ്ജ് നിർവഹിക്കുകയും അറഫാ പർവതത്തിൽ വെച്ച് ജനങ്ങളെ അഭിസംബോധന ചെയ്യുകയും ചെയ്തു.' },
      { type: 'p', en: 'He emphasized the sacredness of life and property, abolished usury, and declared equal rights for women.', ml: 'ജീവന്റെയും സ്വത്തിന്റെയും പവിത്രത അദ്ദേഹം ഊന്നിപ്പറഞ്ഞു, പലിശ നിർത്തലാക്കി, സ്ത്രീകൾക്ക് തുല്യ അവകാശങ്ങൾ പ്രഖ്യാപിച്ചു.' },
      { type: 'p', en: 'He stated that all mankind is from Adam and Eve, abolishing racism, and left the Quran and Sunnah for guidance.', ml: 'എല്ലാ മനുഷ്യരും ആദമിൽ നിന്നും ഹവ്വയിൽ നിന്നുമാണെന്ന് അദ്ദേഹം പ്രസ്താവിച്ചു, വംശീയത ഇല്ലാതാക്കി, മാർഗ്ഗനിർദ്ദേശത്തിനായി ഖുറആനും സുന്നത്തും അവശേഷിപ്പിച്ചു.' },
      { type: 'h3', en: 'Topic 10: Prophet Muhammad: Reformer and Statesman', ml: 'വിഷയം 10: ഒരു പരിഷ്കർത്താവായും ഭരണതന്ത്രജ്ഞനായും മുഹമ്മദ് നബി' },
      { type: 'p', en: 'The Prophet brought a revolution by uprooting superstitious practices and ignorance (Jahiliyya) from Arabian society.', ml: 'അറേബ്യൻ സമൂഹത്തിൽ നിന്നും അന്ധവിശ്വാസങ്ങളെയും അജ്ഞാനത്തെയും (ജാഹിലിയ്യ) പിഴുതെറിഞ്ഞുകൊണ്ട് പ്രവാചകൻ ഒരു വിപ്ലവം കൊണ്ടുവന്നു.' },
      { type: 'p', en: 'He established a religiously bonded community governed by God\'s law instead of tribal customs.', ml: 'ഗോത്ര ആചാരങ്ങൾക്ക് പകരം ദൈവത്തിന്റെ നിയമത്താൽ നിയന്ത്രിക്കപ്പെടുന്ന മതപരമായി ബന്ധിതമായ ഒരു സമൂഹം അദ്ദേഹം സ്ഥാപിച്ചു.' },
      { type: 'p', en: 'He successfully united Arabia under an Islamic state, combining diplomacy, law, education, and social services.', ml: 'നയതന്ത്രം, നിയമം, വിദ്യാഭ്യാസം, സാമൂഹിക സേവനങ്ങൾ എന്നിവ സംയോജിപ്പിച്ച് ഒരു ഇസ്ലാമിക രാഷ്ട്രത്തിന് കീഴിൽ അദ്ദേഹം അറേബ്യയെ വിജയകരമായി ഒന്നിപ്പിച്ചു.' },
      { type: 'h2', en: '2. Tables / Diagrams / Graphs', ml: '2. പട്ടികകൾ / രേഖാചിത്രങ്ങൾ / ഗ്രാഫുകൾ' },
      { type: 'h3', en: 'Table 1: Important Battles of the Madina Period', ml: 'പട്ടിക 1: മദീനാ കാലഘട്ടത്തിലെ പ്രധാന യുദ്ധങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{ en: 'Name of the Battle', ml: 'യുദ്ധത്തിന്റെ പേര്' }, { en: 'Year (C.E.)', ml: 'വർഷം (C.E.)' }, { en: 'Key Detail / Result', ml: 'പ്രധാന വിശദാംശം / ഫലം' }],
        rows: [
          [{ en: 'Battle of Badr', ml: 'ബദർ യുദ്ധം' }, { en: '624 C.E.', ml: '624 C.E.' }, { en: 'First battle; decisive Muslim victory.', ml: 'ആദ്യത്തെ യുദ്ധം; മുസ്ലീങ്ങളുടെ നിർണ്ണായക വിജയം.' }],
          [{ en: 'Battle of Uhd', ml: 'ഉഹ്ദ് യുദ്ധം' }, { en: '625 C.E.', ml: '625 C.E.' }, { en: 'Muslims suffered losses due to archers leaving posts.', ml: 'വില്ലാളികൾ സ്ഥാനം ഉപേക്ഷിച്ചതിനാൽ മുസ്ലീങ്ങൾക്ക് നഷ്ടം സംഭവിച്ചു.' }],
          [{ en: 'Battle of Khandaq', ml: 'ഖന്ദഖ് യുദ്ധം' }, { en: '627 C.E.', ml: '627 C.E.' }, { en: 'Muslims defended Madina by digging a huge trench.', ml: 'ഒരു വലിയ കിടങ്ങ് കുഴിച്ചുകൊണ്ട് മുസ്ലീങ്ങൾ മദീനയെ പ്രതിരോധിച്ചു.' }]
        ]
      } },
      { type: 'h3', en: 'Flowchart 1: The Events of the Hudaibiya Pact', ml: 'ഫ്ലോചാർട്ട് 1: ഹുദൈബിയ കരാറിന്റെ സംഭവവികാസങ്ങൾ' },
      { type: 'p', en: 'Journey for Hajj (1400 Muslims) -> Stopped by Quraish -> Uthman sent as Emissary -> Rumor of Uthman\'s death -> Pledge of Bai\'ath ul Ridwan -> Treaty of Hudaibiya signed.', ml: 'ഹജ്ജിനായുള്ള യാത്ര (1400 മുസ്ലീങ്ങൾ) -> ഖുറൈശികൾ തടഞ്ഞു -> ഉസ്മാനെ ദൂതനായി അയച്ചു -> ഉസ്മാൻ മരിച്ചുവെന്ന അഭ്യൂഹം -> ബൈഅത്തുൽ രിദ്വാൻ പ്രതിജ്ഞ -> ഹുദൈബിയ കരാർ ഒപ്പുവെച്ചു.' },
      { type: 'h2', en: '3. Summary Points', ml: '3. ചുരുക്കരൂപം' },
      { type: 'ul', items: [
        { en: 'Prophet reached Madina in 622 C.E, marking the start of the Hijri era.', ml: 'ക്രിസ്തുവർഷം 622-ൽ പ്രവാചകൻ മദീനയിലെത്തി, ഇത് ഹിജ്റ യുഗത്തിന്റെ തുടക്കം കുറിച്ചു.' },
        { en: 'The Madina Charter established the first Islamic state based on equality and justice.', ml: 'സമത്വത്തിലും നീതിയിലും അധിഷ്ഠിതമായ ആദ്യത്തെ ഇസ്ലാമിക രാഷ്ട്രം മദീന ചാർട്ടർ സ്ഥാപിച്ചു.' },
        { en: 'Defensive battles like Badr, Uhd, and Khandaq were fought to protect the new state.', ml: 'പുതിയ രാഷ്ട്രത്തെ സംരക്ഷിക്കാൻ ബദർ, ഉഹ്ദ്, ഖന്ദഖ് തുടങ്ങിയ പ്രതിരോധ യുദ്ധങ്ങൾ നടന്നു.' },
        { en: 'The Treaty of Hudaibiya led to a period of peace and rapid spread of Islam.', ml: 'ഹുദൈബിയ സന്ധി സമാധാന കാലഘട്ടത്തിലേക്കും ഇസ്ലാമിന്റെ ദ്രുതഗതിയിലുള്ള വ്യാപനത്തിലേക്കും നയിച്ചു.' },
        { en: 'Makkah was conquered peacefully in 630 C.E, and idolatry was abolished.', ml: 'ക്രിസ്തുവർഷം 630-ൽ മക്ക സമാധാനപരമായി കീഴടക്കുകയും വിഗ്രഹാരാധന നിർത്തലാക്കുകയും ചെയ്തു.' },
        { en: 'The Last Sermon summarized the core human rights and religious teachings of Islam.', ml: 'അവസാന പ്രസംഗം ഇസ്ലാമിന്റെ അടിസ്ഥാന മനുഷ്യാവകാശങ്ങളെയും മതപരമായ അധ്യാപനങ്ങളെയും സംഗ്രഹിച്ചു.' }
      ] },
      { type: 'h2', en: 'PRACTICE QUESTIONS', ml: 'പരിശീലന ചോദ്യങ്ങൾ' },
      { type: 'p', en: 'Q1. What was the first mosque built by the Prophet?', ml: 'ചോദ്യം 1: പ്രവാചകൻ നിർമ്മിച്ച ആദ്യത്തെ പള്ളി ഏതായിരുന്നു?' },
      { type: 'p', en: 'Answer: Masjid-al-Quba.', ml: 'ഉത്തരം: ഖുബ പള്ളി.' },
      { type: 'p', en: 'Q2. Who were the Muhajirs and Ansars?', ml: 'ചോദ്യം 2: മുഹാജിറുകളും അൻസാറുകളും ആരായിരുന്നു?' },
      { type: 'p', en: 'Answer: Muhajirs were the emigrants from Makkah, and Ansars were the local helpers of Madina.', ml: 'ഉത്തരം: മക്കയിൽ നിന്ന് വന്ന പലായനം ചെയ്തവരാണ് മുഹാജിറുകൾ, മദീനയിലെ പ്രാദേശിക സഹായികളാണ് അൻസാറുകൾ.' },
      { type: 'p', en: 'Q3. What was the significance of the Madina Charter?', ml: 'ചോദ്യം 3: മദീന ഭരണഘടനയുടെ പ്രാധാന്യം എന്തായിരുന്നു?' },
      { type: 'p', en: 'Answer: It was the first written constitution of Islam, providing rights and duties to all citizens.', ml: 'ഉത്തരം: ഇത് ഇസ്ലാമിലെ ആദ്യത്തെ എഴുതപ്പെട്ട ഭരണഘടനയായിരുന്നു, എല്ലാ പൗരന്മാർക്കും അവകാശങ്ങളും കടമകളും ഇത് നൽകി.' },
      { type: 'p', en: 'Q4. When did the Fall of Makkah occur?', ml: 'ചോദ്യം 4: മക്കാ വിജയം നടന്നത് എപ്പോഴാണ്?' },
      { type: 'p', en: 'Answer: In 630 C.E.', ml: 'ഉത്തരം: ക്രിസ്തുവർഷം 630-ൽ.' }
    ]
  },
  glossary: [
    { term: { en: "Hijra", ml: "ഹിജ്റ" }, definition: { en: "The migration of Prophet Muhammad from Makkah to Madina in 622 C.E.", ml: "ക്രിസ്തുവർഷം 622-ൽ മുഹമ്മദ് നബി മക്കയിൽ നിന്ന് മദീനയിലേക്ക് നടത്തിയ പലായനം." } },
    { term: { en: "Muhajir", ml: "മുഹാജിർ" }, definition: { en: "An emigrant who migrated from Makkah to Madina for the sake of Islam.", ml: "ഇസ്ലാമിന് വേണ്ടി മക്കയിൽ നിന്ന് മദീനയിലേക്ക് പലായനം ചെയ്ത വ്യക്തി." } },
    { term: { en: "Ansar", ml: "അൻസാർ" }, definition: { en: "A local inhabitant of Madina who helped the Muhajirs.", ml: "മുഹാജിറുകളെ സഹായിച്ച മദീനയിലെ പ്രാദേശികവാസി." } },
    { term: { en: "Ummah", ml: "ഉമ്മത്ത്" }, definition: { en: "The collective community of Islamic peoples.", ml: "മുസ്ലീം സമുദായം." } },
    { term: { en: "Jihad", ml: "ജിഹാദ്" }, definition: { en: "Striving or struggling in the way of God.", ml: "ദൈവമാർഗ്ഗത്തിലുള്ള പരിശ്രമം അല്ലെങ്കിൽ പോരാട്ടം." } }
  ],
  videos: [
    {
      title: "പ്രവാചക കാലഘട്ടം: മദീന - Video Tutorial",
      url: "https://www.youtube.com/watch?v=tABzjhU83hY"
    }
  ],
  quiz: plusOneIslamicHistoryUnit4Quiz
};
