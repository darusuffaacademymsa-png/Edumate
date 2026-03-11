import { Lesson } from './curriculum';

export const darsMeezanNotes: Lesson = {
  id: 'dars-meezan-notes',
  title: {
    en: '📖 Study Notes: Meezan al-Sarf',
    ml: '📖 മീസാൻ പഠനക്കുറിപ്പുകൾ (പദഘടനയുടെ അളവുകോൽ)',
    ar: 'ميزان الصرف'
  },
  estimated_time_mins: 120,
  learning_objectives: [
    { id: 'lo1', text: { en: 'Understand the basics of Arabic Morphology (Sarf)', ml: 'അറബി പദഘടനയുടെ (സ്വറഫ്) അടിസ്ഥാനങ്ങൾ മനസ്സിലാക്കുക' } },
    { id: 'lo2', text: { en: 'Learn the standard scale (Meezan) for weighing Arabic words', ml: 'അറബി പദങ്ങളെ അളക്കുന്ന മീസാൻ (Scale) പഠിക്കുക' } },
    { id: 'lo3', text: { en: 'Memorize the 14 forms of the past tense active verb', ml: 'ഫിലുൽ മാളിയുടെ 14 രൂപങ്ങൾ മനഃപാഠമാക്കുക' } }
  ],
  content: {
    intro: {
      en: 'Welcome to your trilingual study guide for Meezan. This text is the key that unlocks the Arabic language. While Arabic Grammar (Nahw / നഹ്‌വ്) teaches you how to put words together in a sentence, Arabic Morphology (Sarf / സ്വറഫ്) teaches you how to build the words themselves.',
      ml: 'മീസാനിനായുള്ള ത്രിഭാഷാ പഠന സഹായിയിലേക്ക് സ്വാഗതം. അറബി ഭാഷയിലേക്കുള്ള താക്കോലാണ് ഈ പാഠഭാഗം. അറബി വ്യാകരണം (നഹ്‌വ്) പദങ്ങളെ എങ്ങനെ ഒരു വാക്യത്തിൽ ഉപയോഗിക്കണമെന്ന് പഠിപ്പിക്കുമ്പോൾ, അറബി പദഘടന (സ്വറഫ്) പദങ്ങൾ എങ്ങനെ നിർമ്മിക്കപ്പെടുന്നു എന്ന് പഠിപ്പിക്കുന്നു.'
    },
    core: { en: '', ml: '' },
    blocks: [
      {
        type: 'h2',
        en: '1. What is "Ilm al-Sarf"? (എന്താണ് സ്വറഫ്?)',
        ml: '1. എന്താണ് "ഇൽമുസ്സ്വർഫ്"?'
      },
      {
        type: 'p',
        en: 'Sarf literally means "to turn" or "to change" (തിരിക്കുക, മാറ്റുക). In Arabic, you can take a single three-letter root (like N-S-R - ن-ص-ر, meaning "help" / സഹായം) and change it into dozens of different words:',
        ml: 'സ്വറഫ് എന്നാൽ അർത്ഥം "തിരിക്കുക" അല്ലെങ്കിൽ "മാറ്റുക" എന്നാണ്. അറബിയിൽ, ഒരൊറ്റ മൂന്നക്ഷര മൂലരൂപത്തിൽ (ഉദാഹരണത്തിന് N-S-R - ن-ص-ر, അർത്ഥം "സഹായം") നിന്ന് ഡസൻ കണക്കിന് വ്യത്യസ്ത പദങ്ങൾ നിർമ്മിക്കാൻ സാധിക്കും:'
      },
      {
        type: 'ul',
        items: [
          { en: 'He helped (Past)', ml: 'അവൻ സഹായിച്ചു (മാളി)', ar: 'نَصَرَ' },
          { en: 'He is helping (Present)', ml: 'അവൻ സഹായിക്കുന്നു (മുളാരിഅ്)', ar: 'يَنْصُرُ' },
          { en: 'Help! (Command)', ml: 'നീ സഹായിക്കൂ! (അംറ്)', ar: 'اُنْصُرْ' },
          { en: 'The helper (Noun)', ml: 'സഹായിക്കുന്നവൻ (ഇസ്മുൽ ഫായിൽ)', ar: 'نَاصِرٌ' },
          { en: 'The one who is helped (Passive Noun)', ml: 'സഹായിക്കപ്പെട്ടവൻ (ഇസ്മുൽ മഫ്ഊൽ)', ar: 'مَنْصُورٌ' }
        ]
      },
      {
        type: 'p',
        en: 'Meezan gives you the formulas to make these changes systematically.',
        ml: 'ഈ മാറ്റങ്ങൾ വ്യവസ്ഥാപിതമായി വരുത്താനുള്ള ഫോർമുലകളാണ് മീസാൻ നിങ്ങൾക്ക് നൽകുന്നത്.'
      },
      {
        type: 'h2',
        en: '2. The Core Concept: The "Scale" (Al-Meezan / അളവുകോൽ)',
        ml: '2. പ്രധാന ആശയം: മീസാൻ (അളവുകോൽ)'
      },
      {
        type: 'p',
        en: 'The word Meezan means Scale or Balance (ത്രാസ് / അളവുകോൽ). Arab grammarians invented a standard "scale" to weigh every Arabic word. This scale is made of three letters:',
        ml: 'മീസാൻ എന്ന വാക്കിന്റെ അർത്ഥം ത്രാസ് അല്ലെങ്കിൽ അളവുകോൽ എന്നാണ്. അറബി ഭാഷാ പണ്ഡിതന്മാർ ഓരോ അറബി പദത്തെയും അളക്കാൻ ഒരു സ്റ്റാൻഡേർഡ് "അളവുകോൽ" നിർമ്മിച്ചിട്ടുണ്ട്. ഈ സ്കെയിൽ മൂന്ന് അക്ഷരങ്ങൾ ചേർന്നതാണ്:'
      },
      {
        type: 'formula',
        en: 'ف - ع - ل (F - A - L)',
        ml: 'ഫ - ഐൻ - ലാം'
      },
      {
        type: 'p',
        en: 'Every base Arabic verb has three root letters (radicals):',
        ml: 'ഓരോ അടിസ്ഥാന അറബിക് ക്രിയയ്ക്കും മൂന്ന് മൂല അക്ഷരങ്ങളുണ്ട്:'
      },
      {
        type: 'ul',
        items: [
          { en: 'The 1st letter is called the Fa-Kalimah', ml: 'ഒന്നാമത്തെ അക്ഷരത്തെ ഫാ-കലിമ എന്ന് വിളിക്കുന്നു', ar: 'فا الكلمة' },
          { en: 'The 2nd letter is called the Ayn-Kalimah', ml: 'രണ്ടാമത്തെ അക്ഷരത്തെ ഐൻ-കലിമ എന്ന് വിളിക്കുന്നു', ar: 'عين الكلمة' },
          { en: 'The 3rd letter is called the Lam-Kalimah', ml: 'മൂന്നാമത്തെ അക്ഷരത്തെ ലാം-കലിമ എന്ന് വിളിക്കുന്നു', ar: 'لام الكلمة' }
        ]
      },
      {
        type: 'p',
        en: 'Example: Let\'s weigh the word ضَرَبَ (Dha-ra-ba / He hit / അവൻ അടിച്ചു) on the scale of فَعَلَ (Fa-\'a-la).',
        ml: 'ഉദാഹരണം: ضَرَبَ (ളറബ - അവൻ അടിച്ചു) എന്ന പദത്തെ فَعَلَ (ഫഅല) എന്ന സ്കെയിലിൽ അളന്നു നോക്കാം.'
      },
      {
        type: 'ul',
        items: [
          { en: 'ض (Dhad) aligns with ف (Fa) ➡️ Dhad is the Fa-Kalimah.', ml: 'ളാദ് (ض) എന്ന അക്ഷരം ഫ (ف) എന്നതിനോട് യോജിക്കുന്നു ➡️ ളാദ് ആണ് ഫാ-കലിമ.' },
          { en: 'ر (Ra) aligns with ع (Ayn) ➡️ Ra is the Ayn-Kalimah.', ml: 'റാ (ر) എന്ന അക്ഷരം ഐൻ (ع) എന്നതിനോട് യോജിക്കുന്നു ➡️ റാ ആണ് ഐൻ-കലിമ.' },
          { en: 'ب (Ba) aligns with ل (Lam) ➡️ Ba is the Lam-Kalimah.', ml: 'ബാ (ب) എന്ന അക്ഷരം ലാം (ل) എന്നതിനോട് യോജിക്കുന്നു ➡️ ബാ ആണ് ലാം-കലിമ.' }
        ]
      },
      {
        type: 'h2',
        en: '3. The 4 Main Types of Verbs (Al-Fi\'l / ക്രിയകൾ)',
        ml: '3. നാല് പ്രധാന തരം ക്രിയകൾ (ഫിലുകൾ)'
      },
      {
        type: 'p',
        en: 'In Meezan, you will learn to manipulate verbs across four main categories of time/action:',
        ml: 'മീസാനിൽ, സമയം/പ്രവൃത്തി എന്നിവയുടെ അടിസ്ഥാനത്തിൽ നാല് പ്രധാന വിഭാഗങ്ങളിലുള്ള ക്രിയകളെ നിങ്ങൾ പഠിക്കും:'
      },
      {
        type: 'ul',
        items: [
          { en: 'Al-Fi\'l al-Madi: Past Tense / He did', ml: 'ഫിലുൽ മാളി: ഭൂതകാലം (കഴിഞ്ഞുപോയത്) - ഉദാ: അവൻ ചെയ്തു', ar: 'الماضي' },
          { en: 'Al-Fi\'l al-Mudhari: Present & Future Tense / He is doing / He will do', ml: 'ഫിലുൽ മുളാരിഅ്: വർത്തമാന-ഭാവി കാലം - ഉദാ: അവൻ ചെയ്യുന്നു / ചെയ്യും', ar: 'المضارع' },
          { en: 'Al-Fi\'l al-Amr: Command or Imperative / Do!', ml: 'ഫിലുൽ അംറ്: കൽപ്പന - ഉദാ: നീ ചെയ്യ്!', ar: 'الأمر' },
          { en: 'Al-Fi\'l al-Nahy: Prohibition / Don\'t do!', ml: 'ഫിലുൽ നഹ്‌യ്: നിരോധനം (വിലക്ക്) - ഉദാ: നീ ചെയ്യരുത്!', ar: 'النهي' }
        ]
      },
      {
        type: 'p',
        en: 'Additionally, every verb has two "voices":',
        ml: 'കൂടാതെ, ഓരോ ക്രിയയ്ക്കും രണ്ട് രൂപങ്ങളുണ്ട് (Voice):'
      },
      {
        type: 'ul',
        items: [
          { en: 'Ma\'roof: Active Voice (The doer is known - e.g., Zaid hit)', ml: 'മഅ്റൂഫ്: കർത്താവ് അറിയപ്പെട്ടത് - ഉദാ: സൈദ് അടിച്ചു', ar: 'معروف' },
          { en: 'Majhool: Passive Voice (The doer is unknown - e.g., Zaid was hit)', ml: 'മജ്‌ഹൂൽ: കർത്താവ് അറിയപ്പെടാത്തത് - ഉദാ: സൈദ് അടിക്കപ്പെട്ടു', ar: 'مجهول' }
        ]
      },
      {
        type: 'h2',
        en: '4. The 14 Forms (Seeghah - صيغة / പദരൂപങ്ങൾ)',
        ml: '4. 14 പദരൂപങ്ങൾ (സീഗകൾ)'
      },
      {
        type: 'p',
        en: 'Unlike English, which uses pronouns separately (I, you, he, she), Arabic attaches these meanings directly to the structure of the verb. There are 14 distinct forms for every verb tense.',
        ml: 'ഇംഗ്ലീഷിൽ നിന്ന് വ്യത്യസ്തമായി, അറബിയിൽ സർവ്വനാമങ്ങൾ (ഞാൻ, നീ, അവൻ, അവൾ) ക്രിയയുടെ ഘടനയോടൊപ്പം തന്നെയാണ് ചേർക്കപ്പെടുന്നത്. ഓരോ കാലഘട്ടത്തിലെ ക്രിയകൾക്കും 14 വ്യത്യസ്ത രൂപങ്ങളുണ്ട്.'
      },
      {
        type: 'p',
        en: 'They are divided by Person (3rd, 2nd, 1st), Gender (Masculine, Feminine), and Number (Singular, Dual, Plural).',
        ml: 'പുരുഷൻ/സ്ത്രീ, ഏകവചനം/ദ്വിവചനം/ബഹുവചനം, ഉത്തമപുരുഷൻ/മധ്യമപുരുഷൻ/പ്രഥമപുരുഷൻ എന്നിങ്ങനെയാണ് ഇവ തിരിക്കപ്പെട്ടിരിക്കുന്നത്.'
      },
      {
        type: 'h3',
        en: 'Memorization Table: The Past Tense Active (Fi\'l Madi Ma\'roof / فعل ماضي معروف)',
        ml: 'മനഃപാഠമാക്കേണ്ട പട്ടിക: ഫിലുൽ മാളി മഅ്റൂഫ്'
      },
      {
        type: 'table',
        tableData: {
          headers: [
            { en: '#', ml: '#' },
            { en: 'Arabic', ml: 'അറബി' },
            { en: 'Transliteration', ml: 'ട്രാൻസ്ലിറ്ററേഷൻ' },
            { en: 'Meaning (En)', ml: 'അർത്ഥം (En)' },
            { en: 'Meaning (Ml)', ml: 'അർത്ഥം (Ml)' },
            { en: 'Person', ml: 'പുരുഷൻ' },
            { en: 'Gender', ml: 'ലിംഗം' },
            { en: 'Number', ml: 'വചനം' }
          ],
          rows: [
            [{ en: '1', ml: '1' }, { ar: 'فَعَلَ', en: '', ml: '' }, { en: 'Fa\'ala', ml: 'ഫഅല' }, { en: 'He did', ml: 'He did' }, { en: 'അവൻ (ഒരാൾ) ചെയ്തു', ml: 'അവൻ (ഒരാൾ) ചെയ്തു' }, { en: '3rd (Ghaib)', ml: '3rd' }, { en: 'Male', ml: 'പു' }, { en: 'Singular', ml: 'ഏ' }],
            [{ en: '2', ml: '2' }, { ar: 'فَعَلَا', en: '', ml: '' }, { en: 'Fa\'alaa', ml: 'ഫഅലാ' }, { en: 'They two (m) did', ml: 'They two (m) did' }, { en: 'അവർ രണ്ടുപേർ (പു) ചെയ്തു', ml: 'അവർ രണ്ടുപേർ (പു) ചെയ്തു' }, { en: '3rd (Ghaib)', ml: '3rd' }, { en: 'Male', ml: 'പു' }, { en: 'Dual', ml: 'ദ്വി' }],
            [{ en: '3', ml: '3' }, { ar: 'فَعَلُوْا', en: '', ml: '' }, { en: 'Fa\'aloo', ml: 'ഫഅലൂ' }, { en: 'They (all m) did', ml: 'They (all m) did' }, { en: 'അവർ (പുരുഷന്മാർ) ചെയ്തു', ml: 'അവർ (പുരുഷന്മാർ) ചെയ്തു' }, { en: '3rd (Ghaib)', ml: '3rd' }, { en: 'Male', ml: 'പു' }, { en: 'Plural', ml: 'ബ' }],
            [{ en: '4', ml: '4' }, { ar: 'فَعَلَتْ', en: '', ml: '' }, { en: 'Fa\'alat', ml: 'ഫഅലത്ത്' }, { en: 'She did', ml: 'She did' }, { en: 'അവൾ (ഒരാൾ) ചെയ്തു', ml: 'അവൾ (ഒരാൾ) ചെയ്തു' }, { en: '3rd (Ghaib)', ml: '3rd' }, { en: 'Female', ml: 'സ്ത്രീ' }, { en: 'Singular', ml: 'ഏ' }],
            [{ en: '5', ml: '5' }, { ar: 'فَعَلَتَا', en: '', ml: '' }, { en: 'Fa\'alataa', ml: 'ഫഅലതാ' }, { en: 'They two (f) did', ml: 'They two (f) did' }, { en: 'അവർ രണ്ടുപേർ (സ്ത്രീ) ചെയ്തു', ml: 'അവർ രണ്ടുപേർ (സ്ത്രീ) ചെയ്തു' }, { en: '3rd (Ghaib)', ml: '3rd' }, { en: 'Female', ml: 'സ്ത്രീ' }, { en: 'Dual', ml: 'ദ്വി' }],
            [{ en: '6', ml: '6' }, { ar: 'فَعَلْنَ', en: '', ml: '' }, { en: 'Fa\'alna', ml: 'ഫഅൽന' }, { en: 'They (all f) did', ml: 'They (all f) did' }, { en: 'അവർ (സ്ത്രീകൾ) ചെയ്തു', ml: 'അവർ (സ്ത്രീകൾ) ചെയ്തു' }, { en: '3rd (Ghaib)', ml: '3rd' }, { en: 'Female', ml: 'സ്ത്രീ' }, { en: 'Plural', ml: 'ബ' }],
            [{ en: '7', ml: '7' }, { ar: 'فَعَلْتَ', en: '', ml: '' }, { en: 'Fa\'alta', ml: 'ഫഅൽത്ത' }, { en: 'You (m) did', ml: 'You (m) did' }, { en: 'നീ (ഒരു പുരുഷൻ) ചെയ്തു', ml: 'നീ (ഒരു പുരുഷൻ) ചെയ്തു' }, { en: '2nd (Hadhir)', ml: '2nd' }, { en: 'Male', ml: 'പു' }, { en: 'Singular', ml: 'ഏ' }],
            [{ en: '8', ml: '8' }, { ar: 'فَعَلْتُمَا', en: '', ml: '' }, { en: 'Fa\'altumaa', ml: 'ഫഅൽത്തുമാ' }, { en: 'You two (m) did', ml: 'You two (m) did' }, { en: 'നിങ്ങൾ രണ്ടുപേർ (പു) ചെയ്തു', ml: 'നിങ്ങൾ രണ്ടുപേർ (പു) ചെയ്തു' }, { en: '2nd (Hadhir)', ml: '2nd' }, { en: 'Male', ml: 'പു' }, { en: 'Dual', ml: 'ദ്വി' }],
            [{ en: '9', ml: '9' }, { ar: 'فَعَلْتُمْ', en: '', ml: '' }, { en: 'Fa\'altum', ml: 'ഫഅൽത്തും' }, { en: 'You (all m) did', ml: 'You (all m) did' }, { en: 'നിങ്ങൾ (പുരുഷന്മാർ) ചെയ്തു', ml: 'നിങ്ങൾ (പുരുഷന്മാർ) ചെയ്തു' }, { en: '2nd (Hadhir)', ml: '2nd' }, { en: 'Male', ml: 'പു' }, { en: 'Plural', ml: 'ബ' }],
            [{ en: '10', ml: '10' }, { ar: 'فَعَلْتِ', en: '', ml: '' }, { en: 'Fa\'alti', ml: 'ഫഅൽത്തി' }, { en: 'You (f) did', ml: 'You (f) did' }, { en: 'നീ (ഒരു സ്ത്രീ) ചെയ്തു', ml: 'നീ (ഒരു സ്ത്രീ) ചെയ്തു' }, { en: '2nd (Hadhir)', ml: '2nd' }, { en: 'Female', ml: 'സ്ത്രീ' }, { en: 'Singular', ml: 'ഏ' }],
            [{ en: '11', ml: '11' }, { ar: 'فَعَلْتُمَا', en: '', ml: '' }, { en: 'Fa\'altumaa', ml: 'ഫഅൽത്തുമാ' }, { en: 'You two (f) did', ml: 'You two (f) did' }, { en: 'നിങ്ങൾ രണ്ടുപേർ (സ്ത്രീ) ചെയ്തു', ml: 'നിങ്ങൾ രണ്ടുപേർ (സ്ത്രീ) ചെയ്തു' }, { en: '2nd (Hadhir)', ml: '2nd' }, { en: 'Female', ml: 'സ്ത്രീ' }, { en: 'Dual', ml: 'ദ്വി' }],
            [{ en: '12', ml: '12' }, { ar: 'فَعَلْتُنَّ', en: '', ml: '' }, { en: 'Fa\'altunna', ml: 'ഫഅൽത്തുന്ന' }, { en: 'You (all f) did', ml: 'You (all f) did' }, { en: 'നിങ്ങൾ (സ്ത്രീകൾ) ചെയ്തു', ml: 'നിങ്ങൾ (സ്ത്രീകൾ) ചെയ്തു' }, { en: '2nd (Hadhir)', ml: '2nd' }, { en: 'Female', ml: 'സ്ത്രീ' }, { en: 'Plural', ml: 'ബ' }],
            [{ en: '13', ml: '13' }, { ar: 'فَعَلْتُ', en: '', ml: '' }, { en: 'Fa\'altu', ml: 'ഫഅൽത്തു' }, { en: 'I did (m/f)', ml: 'I did (m/f)' }, { en: 'ഞാൻ ചെയ്തു', ml: 'ഞാൻ ചെയ്തു' }, { en: '1st (Mutakallim)', ml: '1st' }, { en: 'Both', ml: 'രണ്ടും' }, { en: 'Singular', ml: 'ഏ' }],
            [{ en: '14', ml: '14' }, { ar: 'فَعَلْنَا', en: '', ml: '' }, { en: 'Fa\'alnaa', ml: 'ഫഅൽനാ' }, { en: 'We did (m/f)', ml: 'We did (m/f)' }, { en: 'ഞങ്ങൾ / നാം ചെയ്തു', ml: 'ഞങ്ങൾ / നാം ചെയ്തു' }, { en: '1st (Mutakallim)', ml: '1st' }, { en: 'Both', ml: 'രണ്ടും' }, { en: 'Dual/Plural', ml: 'ദ്വി/ബ' }]
          ]
        }
      },
      {
        type: 'h2',
        en: '5. How to Study & Master Meezan (എങ്ങനെ പഠിക്കാം)',
        ml: '5. എങ്ങനെ പഠിക്കാം'
      },
      {
        type: 'p',
        en: 'Rote Memorization (Hifz / മനഃപാഠമാക്കൽ) is Required: You cannot skip memorizing the tables. Recite the 14 forms of Fa\'ala out loud, rhythmically, until you can say them fast without thinking.',
        ml: 'മനഃപാഠമാക്കൽ അനിവാര്യമാണ്: പട്ടികകൾ മനഃപാഠമാക്കാതെ നിങ്ങൾക്ക് മുന്നോട്ട് പോകാൻ കഴിയില്ല. ഫഅലയുടെ 14 രൂപങ്ങളും ചിന്തിക്കാതെ തന്നെ വേഗത്തിൽ പറയാൻ കഴിയുന്നത് വരെ താളാത്മകമായി ഉരുവിടുക.'
      },
      {
        type: 'p',
        en: 'The "Finger Method" (വിരലുകൾ ഉപയോഗിച്ചുള്ള എണ്ണൽ): Traditional Ustadhas teach counting the 14 forms using the segments of your right-hand fingers.',
        ml: '"വിരൽ രീതി": വലതു കൈവിരലുകളിലെ ഓരോ ഭാഗങ്ങളും ഉപയോഗിച്ച് 14 രൂപങ്ങളും എണ്ണാൻ ഉസ്താദുമാർ പഠിപ്പിക്കാറുണ്ട്.'
      },
      {
        type: 'ul',
        items: [
          { en: 'Pinky finger (ചെറുവിരൽ) = 3 masculine Ghaib forms', ml: 'ചെറുവിരൽ = 3 മുദക്കർ ഗായിബ് രൂപങ്ങൾ' },
          { en: 'Ring finger (മോതിരവിരൽ) = 3 feminine Ghaib forms', ml: 'മോതിരവിരൽ = 3 മുഅന്നസ് ഗായിബ് രൂപങ്ങൾ' },
          { en: 'Middle finger (നടുവിരൽ) = 3 masculine Hadhir forms', ml: 'നടുവിരൽ = 3 മുദക്കർ ഹാളിർ രൂപങ്ങൾ' },
          { en: 'Index finger (ചൂണ്ടുവിരൽ) = 3 feminine Hadhir forms', ml: 'ചൂണ്ടുവിരൽ = 3 മുഅന്നസ് ഹാളിർ രൂപങ്ങൾ' },
          { en: 'Thumb (തള്ളവിരൽ) = 2 Mutakallim forms (I and We)', ml: 'തള്ളവിരൽ = 2 മുതകല്ലിം രൂപങ്ങൾ' }
        ]
      },
      {
        type: 'p',
        en: 'Apply to New Words (മറ്റു പദങ്ങളിൽ പ്രയോഗിക്കുക): Once you master Fa\'ala (فَعَلَ), practice dropping in new roots:',
        ml: 'മറ്റു പദങ്ങളിൽ പ്രയോഗിക്കുക: ഫഅല (فَعَلَ) പഠിച്ചുകഴിഞ്ഞാൽ, പുതിയ മൂലരൂപങ്ങൾ അതിലേക്ക് ചേർത്ത് പരിശീലിക്കുക:'
      },
      {
        type: 'ul',
        items: [
          { en: 'Try N-S-R (نَصَرَ): Nasara, Nasaraa, Nasaroo, Nasarat... (He helped, They two helped...)', ml: 'N-S-R (نَصَرَ) പരീക്ഷിക്കുക: നസറ, നസറാ, നസറൂ, നസറത്ത്... (അവൻ സഹായിച്ചു, അവർ രണ്ടുപേർ സഹായിച്ചു...)' },
          { en: 'Try K-T-B (كَتَبَ): Kataba, Katabaa, Kataboo, Katabat... (He wrote, They two wrote...)', ml: 'K-T-B (كَتَبَ) പരീക്ഷിക്കുക: കതബ, കതബാ, കതബൂ, കതബത്ത്... (അവൻ എഴുതി, അവർ രണ്ടുപേർ എഴുതി...)' }
        ]
      },
      {
        type: 'p',
        en: 'Learn the "Sarf Sagheer" (ചെറിയ രൂപമാറ്റം): Later in the book, instead of reciting all 14 forms, you will learn to recite the first form of every tense in a chain (e.g., Fa\'ala, Yaf\'ilu, Fa\'lan...).',
        ml: '"സ്വറഫ് സ്വഗീർ" (ചെറിയ രൂപമാറ്റം) പഠിക്കുക: പിന്നീട്, 14 രൂപങ്ങളും ചൊല്ലുന്നതിന് പകരം, ഓരോ കാലഘട്ടത്തിലെയും ആദ്യ രൂപങ്ങൾ ഒരു ശൃംഖലയായി ചൊല്ലാൻ നിങ്ങൾ പഠിക്കും (ഉദാഹരണത്തിന്: ഫഅല, യഫ്ഇലു, ഫഅ്‌ലൻ...).'
      },
      {
        type: 'h2',
        en: '6. Trilingual Glossary of Essential Terms (പ്രധാന പദങ്ങൾ)',
        ml: '6. പ്രധാന പദങ്ങൾ'
      },
      {
        type: 'ul',
        items: [
          { en: 'Sarf Kabeer: The Major Conjugation (The 14-word table)', ml: 'സ്വറഫ് കബീർ: വലിയ രൂപമാറ്റം', ar: 'صرف كبير' },
          { en: 'Madi: Past Tense', ml: 'മാളി: കഴിഞ്ഞ കാലം', ar: 'ماضي' },
          { en: 'Mudhari: Present/Future Tense', ml: 'മുളാരിഅ്: നടക്കുന്ന അല്ലെങ്കിൽ വരാനിരിക്കുന്ന കാലം', ar: 'مضارع' },
          { en: 'Seeghah: The Form/Pattern of the word', ml: 'സീഗ: പദത്തിന്റെ രൂപം', ar: 'صيغة' },
          { en: 'Wahid: Singular', ml: 'വാഹിദ്: ഏകവചനം', ar: 'واحد' },
          { en: 'Tathniyah: Dual (Two)', ml: 'തസ്‌നിയ: ദ്വിവചനം', ar: 'تثنية' },
          { en: 'Jama\': Plural (Three or more)', ml: 'ജംഅ്: ബഹുവചനം', ar: 'جمع' },
          { en: 'Muthakkar: Masculine', ml: 'മുദക്കർ: പുല്ലിംഗം (ആൺ)', ar: 'مذكر' },
          { en: 'Mu\'annath: Feminine', ml: 'മുഅന്നസ്: സ്ത്രീലിംഗം (പെൺ)', ar: 'مؤنث' },
          { en: 'Ghaib: Third Person', ml: 'ഗായിബ്: പരോക്ഷം', ar: 'غائب' },
          { en: 'Hadhir: Second Person', ml: 'ഹാളിർ: പ്രത്യക്ഷം', ar: 'حاضر' },
          { en: 'Mutakallim: First Person', ml: 'മുതകല്ലിം: സംസാരിക്കുന്നവൻ', ar: 'متكلم' }
        ]
      }
    ]
  },
  glossary: [],
  quiz: []
};
