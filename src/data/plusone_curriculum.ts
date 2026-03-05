import { Subject } from './curriculum';
import { plusOneEnglishUnit1 } from './plusone_english';
import { plusOneEnglishUnit2 } from './plusone_english_unit2';
import { plusOneEnglishUnit3 } from './plusone_english_unit3';
import { plusOneEnglishUnit4 } from './plusone_english_unit4';
import { plusOneEnglishUnit5 } from './plusone_english_unit5';
import { plusOneEnglishUnit6 } from './plusone_english_unit6';
import { plusOneAccountancyUnit1 } from './plusone_accountancy_unit1';

export const plusOneCurriculum: Subject[] = [
  {
    id: "sub-english",
    title: { en: "English", ml: "ഇംഗ്ലീഷ്" },
    icon: "📝",
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
    id: "sub-accountancy",
    title: { en: "Accountancy", ml: "അക്കൗണ്ടൻസി" },
    icon: "📊",
    color: "bg-[#00c853]",
    units: [
      {
        id: "u-acc-1",
        title: { en: "Introduction to Accounting", ml: "അക്കൗണ്ടിംഗിലേക്ക് പരിചയം" },
        lessons: [plusOneAccountancyUnit1]
      }
    ]
  },
  {
    id: "sub-physics",
    title: { en: "Physics", ml: "ഭൗതികശാസ്ത്രം" },
    icon: "⚡",
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
