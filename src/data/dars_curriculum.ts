import { Subject } from './curriculum';
import { darsMeezanNotes } from './dars_meezan';

export const darsCurriculum: Subject[] = [
  {
    id: "sub-meezan",
    title: { ar: "ميزان الصرف", en: "Meezan al-Sarf", ml: "മീസാൻ" },
    icon: "⚖️",
    color: "bg-[#795548]",
    units: [
      {
        id: "u-meezan-1",
        title: { en: "Introduction to Morphology", ml: "സ്വറഫ് ഒരാമുഖം", ar: "مقدمة في علم الصرف" },
        lessons: [darsMeezanNotes]
      }
    ]
  }
];
