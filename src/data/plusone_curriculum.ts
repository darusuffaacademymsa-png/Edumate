import { Subject } from './curriculum';
import { plusOneEnglishUnit1 } from './plusone_english';
import { plusOneEnglishUnit2 } from './plusone_english_unit2';
import { plusOneEnglishUnit3 } from './plusone_english_unit3';
import { plusOneEnglishUnit4 } from './plusone_english_unit4';
import { plusOneEnglishUnit5 } from './plusone_english_unit5';
import { plusOneEnglishUnit6 } from './plusone_english_unit6';
import { plusOneAccountancyUnit1 } from './plusone_accountancy_unit1';
import { plusOneAccountancyUnit2 } from './plusone_accountancy_unit2';
import { plusOneAccountancyUnit3 } from './plusone_accountancy_unit3';
import { plusOneAccountancyUnit4 } from './plusone_accountancy_unit4';
import { plusOneAccountancyUnit5 } from './plusone_accountancy_unit5';
import { plusOneAccountancyUnit6 } from './plusone_accountancy_unit6';
import { plusOneAccountancyUnit7 } from './plusone_accountancy_unit7';
import { plusOneAccountancyUnit8 } from './plusone_accountancy_unit8';
import { 
  plusOneBusinessStudiesUnit1, plusOneBusinessStudiesUnit2, plusOneBusinessStudiesUnit3,
  plusOneBusinessStudiesUnit4, plusOneBusinessStudiesUnit5, plusOneBusinessStudiesUnit6,
  plusOneBusinessStudiesUnit7, plusOneBusinessStudiesUnit8, plusOneBusinessStudiesUnit9,
  plusOneBusinessStudiesUnit10, plusOneBusinessStudiesUnit11
} from './plusone_business_studies';
import { plusOneIslamicHistoryUnit1 } from './plusone_islamic_history_unit1';
import { plusOneIslamicHistoryUnit2 } from './plusone_islamic_history_unit2';
import { plusOneIslamicHistoryUnit3 } from './plusone_islamic_history_unit3';
import { plusOneIslamicHistoryUnit4 } from './plusone_islamic_history_unit4';
import { plusOneIslamicHistoryUnit5 } from './plusone_islamic_history_unit5';
import { plusOneIslamicHistoryUnit6 } from './plusone_islamic_history_unit6';
import { plusOneIslamicHistoryUnit7 } from './plusone_islamic_history_unit7';

import { plusOneArabicUnit1, plusOneArabicUnit2, plusOneArabicUnit3, plusOneArabicUnit4, plusOneArabicUnit5 } from './plusone_arabic';
import { 
  plusOneUrduUnit1Chapter1, plusOneUrduUnit1Chapter2, plusOneUrduUnit1Chapter3,
  plusOneUrduUnit2Chapter4, plusOneUrduUnit2Chapter5, plusOneUrduUnit2Chapter6,
  plusOneUrduUnit3Chapter7, plusOneUrduUnit3Chapter8, plusOneUrduUnit3Chapter9,
  plusOneUrduUnit4Chapter10, plusOneUrduUnit4Chapter11, plusOneUrduUnit4Chapter12, plusOneUrduUnit4Chapter13
} from './plusone_urdu';

export const plusOneCurriculum: Subject[] = [
  {
    id: "sub-urdu",
    title: { ar: "اردو", en: "Urdu", ml: "ഉറുദു" },
    icon: "BookOpen",
    color: "bg-[#4db6ac]",
    units: [
      {
        id: "u-urdu-1",
        title: { en: "Aati Hai Urdu Zaban Aate Aate", ml: "ആതി ഹേ ഉറുദു സബാൻ ആതേ ആതേ", ar: "آتی ہے اردو زباں آتے آتے" },
        lessons: [plusOneUrduUnit1Chapter1, plusOneUrduUnit1Chapter2, plusOneUrduUnit1Chapter3]
      },
      {
        id: "u-urdu-2",
        title: { en: "Sab Se Pyara Gulistan Hamara", ml: "സബ് സേ പ്യാര ഗുലിസ്താൻ ഹമാര", ar: "سب سے پیارا گلستاں ہمارا" },
        lessons: [plusOneUrduUnit2Chapter4, plusOneUrduUnit2Chapter5, plusOneUrduUnit2Chapter6]
      },
      {
        id: "u-urdu-3",
        title: { en: "Fun Ki Duniya Man Ki Duniya", ml: "ഫൻ കി ദുനിയ മൻ കി ദുനിയ", ar: "فن کی دنیا من کی دنیا" },
        lessons: [plusOneUrduUnit3Chapter7, plusOneUrduUnit3Chapter8, plusOneUrduUnit3Chapter9]
      },
      {
        id: "u-urdu-4",
        title: { en: "Yeh Duniya Hai Sab Ki Yeh Sab Ke Liye", ml: "യേ ദുനിയ ഹേ സബ് കി യേ സബ് കേ ലിയേ", ar: "یہ دنیا ہے سب کی، یہ سب کے لیے" },
        lessons: [plusOneUrduUnit4Chapter10, plusOneUrduUnit4Chapter11, plusOneUrduUnit4Chapter12, plusOneUrduUnit4Chapter13]
      }
    ]
  },
  {
    id: "sub-arabic",
    title: { ar: "العربية", en: "Arabic", ml: "അറബിക്" },
    icon: "Mosque",
    color: "bg-[#009688]",
    units: [
      plusOneArabicUnit1,
      plusOneArabicUnit2,
      plusOneArabicUnit3,
      plusOneArabicUnit4,
      plusOneArabicUnit5
    ]
  },
  {
    id: "sub-english",
    title: { en: "English", ml: "ഇംഗ്ലീഷ്" },
    icon: "Type",
    color: "bg-[#7c4dff]",
    units: [
      {
        id: "u-eng-1",
        title: { en: "Glimpses of Greatness", ml: "മഹത്വത്തിന്റെ കാഴ്ചകൾ" },
        lessons: [plusOneEnglishUnit1]
      },
      {
        id: "u-eng-2",
        title: { en: "Words and Deeds", ml: "വാക്കുകളും പ്രവർത്തികളും" },
        lessons: [plusOneEnglishUnit2]
      },
      {
        id: "u-eng-3",
        title: { en: "Beyond the Horizon", ml: "ദിഗന്തങ്ങൾക്കപ്പുറം" },
        lessons: [plusOneEnglishUnit3]
      },
      {
        id: "u-eng-4",
        title: { en: "Braving the Hazards", ml: "അപകടങ്ങളെ നേരിടുമ്പോൾ" },
        lessons: [plusOneEnglishUnit4]
      },
      {
        id: "u-eng-5",
        title: { en: "Harmony of Life", ml: "ജീവിതത്തിന്റെ താളം" },
        lessons: [plusOneEnglishUnit5]
      },
      {
        id: "u-eng-6",
        title: { en: "Leaps and Bounds", ml: "കുതിച്ചുചാട്ടങ്ങൾ" },
        lessons: [plusOneEnglishUnit6]
      }
    ]
  },
  {
    id: "sub-islamic-history",
    title: { en: "Islamic History", ml: "ഇസ്ലാമിക ചരിത്രം" },
    icon: "Mosque",
    color: "bg-[#f57c00]",
    units: [
      {
        id: "u-isl-1",
        title: { en: "Introduction to Islamic History and Culture", ml: "ഇസ്ലാമിക ചരിത്രത്തിലേക്കും സംസ്കാരത്തിലേക്കും ഒരു ആമുഖം" },
        lessons: [plusOneIslamicHistoryUnit1]
      },
      {
        id: "u-isl-2",
        title: { en: "Arabia: The Cradle of Islam", ml: "അറേബ്യ: ഇസ്ലാമിന്റെ കളിത്തൊട്ടിൽ" },
        lessons: [plusOneIslamicHistoryUnit2]
      },
      {
        id: "u-isl-3",
        title: { en: "The Prophetic Period: Makkah", ml: "പ്രവാചക കാലഘട്ടം: മക്ക" },
        lessons: [plusOneIslamicHistoryUnit3]
      },
      {
        id: "u-isl-4",
        title: { en: "Prophetic Period: Madina", ml: "പ്രവാചക കാലഘട്ടം: മദീന" },
        lessons: [plusOneIslamicHistoryUnit4]
      },
      {
        id: "u-isl-5",
        title: { en: "The Khilafat (632 - 661 CE)", ml: "ഖിലാഫത്ത് (ക്риസ്തുവർഷം 632 - 661)" },
        lessons: [plusOneIslamicHistoryUnit5]
      },
      {
        id: "u-isl-6",
        title: { en: "The Umayyads", ml: "ഉമയ്യത്തുകൾ" },
        lessons: [plusOneIslamicHistoryUnit6]
      },
      {
        id: "u-isl-7",
        title: { en: "Advent of Islam in Kerala", ml: "കേരളത്തിലെ ഇസ്ലാമിന്റെ ആഗമനം" },
        lessons: [plusOneIslamicHistoryUnit7]
      }
    ]
  },
  {
    id: "sub-accountancy",
    title: { en: "Accountancy", ml: "അക്കൗണ്ടൻസി" },
    icon: "BarChart3",
    color: "bg-[#00c853]",
    units: [
      {
        id: "u-acc-1",
        title: { en: "Introduction to Accounting", ml: "അക്കൗണ്ടിംഗിലേക്ക് പരിചയം" },
        lessons: [plusOneAccountancyUnit1]
      },
      {
        id: "u-acc-2",
        title: { en: "Theory Base of Accounting", ml: "അക്കൗണ്ടിംഗിന്റെ സൈദ്ധാന്തിക അടിസ്ഥാനം" },
        lessons: [plusOneAccountancyUnit2]
      },
      {
        id: "u-acc-3",
        title: { en: "Recording of Transactions - I", ml: "ഇടപാടുകൾ രേഖപ്പെടുത്തൽ - I" },
        lessons: [plusOneAccountancyUnit3]
      },
      {
        id: "u-acc-4",
        title: { en: "Recording of Transactions - II", ml: "ഇടപാടുകൾ രേഖപ്പെടുത്തൽ - II" },
        lessons: [plusOneAccountancyUnit4]
      },
      {
        id: "u-acc-5",
        title: { en: "Bank Reconciliation Statement", ml: "ബാങ്ക് റീകൺസിലിയേഷൻ സ്റ്റേറ്റ്മെന്റ്" },
        lessons: [plusOneAccountancyUnit5]
      },
      {
        id: "u-acc-6",
        title: { en: "Trial Balance and Rectification of Errors", ml: "ട്രയൽ ബാലൻസും തെറ്റുകൾ തിരുത്തലും" },
        lessons: [plusOneAccountancyUnit6]
      },
      {
        id: "u-acc-7",
        title: { en: "Depreciation, Provisions and Reserves", ml: "തേയ്മാനം, വ്യവസ്ഥകൾ, കരുതൽ ധനം" },
        lessons: [plusOneAccountancyUnit7]
      },
      {
        id: "u-acc-8",
        title: { en: "Bill of Exchange", ml: "ബിൽ ഓഫ് എക്സ്ചേഞ്ച് (വിനിമയ ബില്ലുകൾ)" },
        lessons: [plusOneAccountancyUnit8]
      }
    ]
  },
  {
    id: "sub-business-studies",
    title: { en: "Business Studies", ml: "ബിസിനസ്സ് സ്റ്റഡീസ്" },
    icon: "Briefcase",
    color: "bg-[#795548]",
    units: [
      {
        id: "u-bs-1",
        title: { en: "Business, Trade and Commerce", ml: "ബിസിനസ്സ്, വ്യാപാരം, വാണിജ്യം" },
        lessons: [plusOneBusinessStudiesUnit1]
      },
      {
        id: "u-bs-2",
        title: { en: "Forms of Business Organisation", ml: "ബിസിനസ്സ് സ്ഥാപനങ്ങളുടെ വിവിധ രൂപങ്ങൾ" },
        lessons: [plusOneBusinessStudiesUnit2]
      },
      {
        id: "u-bs-3",
        title: { en: "Private, Public and Global Enterprises", ml: "സ്വകാര്യ, പൊതു, ആഗോള സംരംഭങ്ങൾ" },
        lessons: [plusOneBusinessStudiesUnit3]
      },
      {
        id: "u-bs-4",
        title: { en: "Business Services", ml: "ബിസിനസ്സ് സേവനങ്ങൾ" },
        lessons: [plusOneBusinessStudiesUnit4]
      },
      {
        id: "u-bs-5",
        title: { en: "Emerging Modes of Business", ml: "ഉയർന്നുവരുന്ന ബിസിനസ്സ് രീതികൾ" },
        lessons: [plusOneBusinessStudiesUnit5]
      },
      {
        id: "u-bs-6",
        title: { en: "Social Responsibilities of Business and Business Ethics", ml: "ബിസിനസ്സിന്റെ സാമൂഹിക ഉത്തരവാദിത്തങ്ങളും ബിസിനസ്സ് ധാർമ്മികതയും" },
        lessons: [plusOneBusinessStudiesUnit6]
      },
      {
        id: "u-bs-7",
        title: { en: "Formation of a Company", ml: "ഒരു കമ്പനിയുടെ രൂപീകരണം" },
        lessons: [plusOneBusinessStudiesUnit7]
      },
      {
        id: "u-bs-8",
        title: { en: "Sources of Business Finance", ml: "ബിസിനസ്സ് ഫിനാൻസിന്റെ ഉറവിടങ്ങൾ" },
        lessons: [plusOneBusinessStudiesUnit8]
      },
      {
        id: "u-bs-9",
        title: { en: "Small Business", ml: "ചെറുകിട ബിസിനസ്സ്" },
        lessons: [plusOneBusinessStudiesUnit9]
      },
      {
        id: "u-bs-10",
        title: { en: "Internal Trade", ml: "ആഭ്യന്തര വ്യാപാരം" },
        lessons: [plusOneBusinessStudiesUnit10]
      },
      {
        id: "u-bs-11",
        title: { en: "International Business", ml: "അന്താരാഷ്ട്ര ബിസിനസ്സ്" },
        lessons: [plusOneBusinessStudiesUnit11]
      }
    ]
  },
  {
    id: "sub-physics",
    title: { en: "Physics", ml: "ഭൗതികശാസ്ത്രം" },
    icon: "Zap",
    color: "bg-[#29b6f6]",
    units: [
      {
        id: "u-phy-1",
        title: { en: "Units and Measurements", ml: "യൂണിറ്റുകളും അളവുകളും" },
        lessons: [
          {
            id: "pl-phy-11-units",
            title: { en: "Introduction to Units", ml: "യൂണിറ്റുകൾ - ഒരാമുഖം" },
            estimated_time_mins: 60,
            learning_objectives: [],
            content: { intro: { en: "Coming soon...", ml: "ഉടൻ വരുന്നു..." }, core: { en: "", ml: "" } },
            glossary: [],
            quiz: []
          }
        ]
      }
    ]
  }
];
