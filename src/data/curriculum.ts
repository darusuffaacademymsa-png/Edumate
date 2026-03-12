export type Language = 'en' | 'ml' | 'bilingual' | 'ar';

import { chemUnit2 } from './chem_unit2';
import { chemUnit3 } from './chem_unit3';
import { chemUnit4 } from './chem_unit4';
import { chemUnit5 } from './chem_unit5';
import { chemUnit6 } from './chem_unit6';
import { chemUnit7 } from './chem_unit7';
import { physicsUnit1 } from './physics_unit1';
import { physicsUnit2 } from './physics_unit2';
import { physicsUnit3 } from './physics_unit3';
import { physicsUnit4 } from './physics_unit4';
import { physicsUnit5 } from './physics_unit5';
import { physicsUnit6 } from './physics_unit6';
import { physicsUnit7 } from './physics_unit7';

import { socialScience1Humanism } from './social_science_1_humanism';
import { socialScience1FrenchRevolution } from './social_science_1_french_revolution';
import { socialScience1SociologicalImagination } from './social_science_1_sociological_imagination';
import { socialScience1WealthAndWorld } from './social_science_1_wealth_and_world';
import { socialScience1PublicOpinion } from './social_science_1_public_opinion';
import { socialScience1MassMovement } from './social_science_1_mass_movement';
import { socialScience1GlimpsesOfFreeIndia } from './social_science_1_glimpses_of_free_india';
import { socialScience1DemocracyIndianExperience } from './social_science_1_democracy_indian_experience';
import { socialScience1KnowIndianSocialSystem } from './social_science_1_know_indian_social_system';
import {
  englishLesson1VeryOldMan,
  englishLesson2InTheAttic,
  englishLesson3FriendsRomans
} from './english_unit1_trials_and_triumphs';
import {
  englishLesson4BreakingBarriers,
  englishLesson5PhoenixRises,
  englishLesson6TheSeedling
} from './english_unit2_paths_to_progress';
import {
  englishLesson7AnotherDayInParadise,
  englishLesson8War,
  englishLesson9PieceOfString
} from './english_unit3_trumpets_of_change';
import {
  englishLesson10Shakuntalam,
  englishLesson11TrillsAndThrills,
  englishLesson12WildSwans
} from './english_unit4_woodland_whispers';
import {
  englishLesson13BelovedBoles,
  englishLesson14PreferenceNationale,
  englishLesson15Mirror
} from './english_unit5_songs_of_the_self';
import {
  lessonChithrakari,
  lessonKhalbilenilavu,
  lessonOruPakshikunjinteMaranam
} from './malayalam_ii_unit1';
import {
  lessonVishukkani,
  lessonAnandashrukkal,
  lessonKethaluEtakkuri
} from './malayalam_ii_unit2';
import {
  lessonCharithramRachichaNatakam,
  lessonEnteBhasha,
  lessonVijnanaBhasha
} from './malayalam_ii_unit3';
import { hindiUnits } from './hindi_sslc';

export type BilingualString = {
  en: string;
  ml: string;
  ar?: string;
  className?: string;
  type?: string;
};

export type ContentBlock = {
  type: 'h2' | 'h3' | 'p' | 'formula' | 'table' | 'img' | 'ul';
  en?: string;
  ml?: string;
  ar?: string;
  src?: string;
  customId?: string;
  tableData?: {
    headers: readonly BilingualString[];
    rows: readonly (readonly BilingualString[])[];
  };
  items?: BilingualString[];
};

export interface Lesson {
  id: string;
  title: BilingualString;
  estimated_time_mins: number;
  learning_objectives: any[];
  content: {
    intro: BilingualString;
    core: BilingualString;
    blocks?: readonly ContentBlock[];
  };
  glossary: any[];
  quiz: any[];
  sample_questions?: {
    q_id: string;
    question: BilingualString;
    answer: BilingualString;
  }[];
  videos?: {
    title: string;
    url: string;
  }[];
  translation?: { urdu: string; ml: string; en: string }[];
}

export interface Unit {
  id: string;
  title: BilingualString;
  lessons: Lesson[];
}

export interface Subject {
  id: string;
  title: BilingualString;
  icon: string;
  color: string;
  units: Unit[];
}

export const sslcCurriculum: Subject[] = [
  {
    id: "sub-maths",
    title: { en: "Mathematics", ml: "ഗണിതം" },
    icon: "Calculator",
    color: "bg-[#00bfa5]",
    units: [
      {
        id: "u-math-1",
        title: { en: "Arithmetic Sequences", ml: "സമാന്തര ശ്രേണികൾ" },
        lessons: [
          {
            id: "ma-math-10-arithmetic-progression",
            title: { en: "Introduction to Arithmetic Progressions", ml: "സമാന്തര ശ്രേണികൾ: ഒരാമുഖം" },
            estimated_time_mins: 60,
            learning_objectives: [],
            content: { intro: { en: "Coming soon...", ml: "ഉടൻ വരുന്നു..." }, core: { en: "", ml: "" } },
            glossary: [],
            quiz: []
          }
        ]
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
        title: { en: "Sound Waves", ml: "ശബ്ദ തരംഗങ്ങൾ" },
        lessons: [physicsUnit1]
      },
      {
        id: "u-phy-2",
        title: { en: "Lenses", ml: "ലെൻസുകൾ" },
        lessons: [physicsUnit2]
      },
      {
        id: "u-phy-3",
        title: { en: "The World of Colours and Vision", ml: "വർണ്ണങ്ങളുടെ ലോകവും കാഴ്ചയും" },
        lessons: [physicsUnit3]
      },
      {
        id: "u-phy-4",
        title: { en: "Magnetic Effect of Electric Current", ml: "വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം" },
        lessons: [physicsUnit4]
      },
      {
        id: "u-phy-5",
        title: { en: "Electric Energy: Consumption and Conservation", ml: "വൈദ്യുതോർജ്ജം: ഉപയോഗവും സംരക്ഷണവും" },
        lessons: [physicsUnit5]
      },
      {
        id: "u-phy-6",
        title: { en: "Electromagnetic Induction in Daily Life", ml: "നിത്യജീവിതത്തിൽ വൈദ്യുതകാന്തിക പ്രേരണം" },
        lessons: [physicsUnit6]
      },
      {
        id: "u-phy-7",
        title: { en: "Mechanical Advantage in Action", ml: "യാന്ത്രികലാഭം പ്രവൃത്തിയിൽ" },
        lessons: [physicsUnit7]
      }
    ]
  },
  {
    id: "sub-chemistry",
    title: { en: "Chemistry", ml: "രസതന്ത്രം" },
    icon: "FlaskConical",
    color: "bg-[#66bb6a]",
    units: [
      {
        id: "u-chem-1",
        title: { en: "Nomenclature of Organic Compounds and Isomerism", ml: "ഓർഗാനിക് സംയുക്തങ്ങളുടെ നാമകരണവും ഐസോമെറിസവും" },
        lessons: [
          {
            id: "sc-chem-10-nomenclature",
            title: { en: "Nomenclature & Isomerism", ml: "നാമകരണവും ഐസോമെറിസവും" },
            estimated_time_mins: 60,
            learning_objectives: [
              { id: "lo1", text: { en: "Understand IUPAC nomenclature rules for branched and unsaturated hydrocarbons.", ml: "ശാഖകളുള്ളതും അപൂരിതവുമായ ഹൈഡ്രോകാർബണുകളുടെ IUPAC നാമകരണ നിയമങ്ങൾ മനസ്സിലാക്കുക." } },
              { id: "lo2", text: { en: "Identify functional groups and name compounds containing them.", ml: "ഫങ്ഷണൽ ഗ്രൂപ്പുകളെ തിരിച്ചറിയുകയും അവ അടങ്ങിയ സംയുക്തങ്ങൾക്ക് പേര് നൽകുകയും ചെയ്യുക." } },
              { id: "lo3", text: { en: "Explain different types of isomerism with examples.", ml: "വിവിധ തരം ഐസോമെറിസം ഉദാഹരണ സഹിതം വിശദീകരിക്കുക." } }
            ],
            content: {
              intro: {
                en: "Carbon atoms can form branched compounds. The longest chain containing the maximum number of carbon atoms should be considered as the main chain and the remaining as branches. Numbering should be done in such a way that the carbon atom carrying the branch gets the lowest number.",
                ml: "കാർബൺ ആറ്റങ്ങൾക്ക് ശാഖകളുള്ള സംയുക്തങ്ങൾ നിർമ്മിക്കാൻ കഴിയും. ഏറ്റവും കൂടുതൽ കാർബൺ ആറ്റങ്ങളുള്ള നീളമേറിയ ശൃംഖലയെ പ്രധാന ശൃംഖലയായും (main chain) ബാക്കിയുള്ളവയെ ശാഖകളായും (branches) പരിഗണിക്കണം. ശാഖയുള്ള കാർബൺ ആറ്റത്തിന് ഏറ്റവും ചെറിയ നമ്പർ ലഭിക്കുന്ന രീതിയിൽ നമ്പറിംഗ് നടത്തണം."
              },
              core: {
                en: "Compounds having the same molecular formula and different chemical and physical properties are called isomers. Types include Chain Isomerism, Position Isomerism, Functional Isomerism, and Metamerism.",
                ml: "ഒരേ തന്മാത്രാ വാക്യവും (molecular formula) വ്യത്യസ്ത ഭൗതിക-രാസ ഗുണങ്ങളുമുള്ള സംയുക്തങ്ങളെ ഐസോമറുകൾ എന്ന് വിളിക്കുന്നു. ചെയിൻ ഐസോമെറിസം, പൊസിഷൻ ഐസോമെറിസം, ഫങ്ഷണൽ ഐസോമെറിസം, മെറ്റാമെറിസം എന്നിവയാണ് പ്രധാന ഇനങ്ങൾ."
              },
              blocks: [
                { type: 'h2', en: '1. Nomenclature of Alkanes with One Branch', ml: '1. ഒരു ശാഖയുള്ള ആൽക്കെയ്നുകളുടെ നാമകരണം' },
                { type: 'p', en: 'Carbon atoms can form branched compounds. Certain IUPAC rules are to be followed while naming such branched hydrocarbons.', ml: 'കാർബൺ ആറ്റങ്ങൾക്ക് ശാഖകളുള്ള സംയുക്തങ്ങൾ നിർമ്മിക്കാൻ കഴിയും. ഇത്തരം ശാഖകളുള്ള ഹൈഡ്രോകാർബണുകൾക്ക് പേര് നൽകുമ്പോൾ ചില IUPAC നിയമങ്ങൾ പാലിക്കേണ്ടതുണ്ട്.' },
                { type: 'p', en: 'Rule 1: The longest chain containing the maximum number of carbon atoms should be considered as the main chain and the remaining as branches.', ml: 'നിയമം 1: ഏറ്റവും കൂടുതൽ കാർബൺ ആറ്റങ്ങളുള്ള നീളമേറിയ ശൃംഖലയെ പ്രധാന ശൃംഖലയായും (main chain) ബാക്കിയുള്ളവയെ ശാഖകളായും (branches) പരിഗണിക്കണം.' },
                { type: 'p', en: 'Rule 2: Numbering should be done in such a way that the carbon atom carrying the branch gets the lowest number. You can start numbering either from the right or from the left of the chain.', ml: 'നിയമം 2: ശാഖയുള്ള കാർബൺ ആറ്റത്തിന് ഏറ്റവും ചെറിയ നമ്പർ ലഭിക്കുന്ന രീതിയിൽ നമ്പറിംഗ് നടത്തണം. ശൃംഖലയുടെ വലതുഭാഗത്ത് നിന്നോ ഇടതുഭാഗത്ത് നിന്നോ നമ്പറിംഗ് ആരംഭിക്കാം.' },
                { type: 'h3', en: 'Alkyl Groups', ml: 'ആൽക്കൈൽ ഗ്രൂപ്പുകൾ' },
                { type: 'p', en: 'The small branches attached to carbon atoms are called alkyl groups. An alkyl group is obtained when a hydrogen atom is removed from a carbon atom in a saturated hydrocarbon.', ml: 'കാർബൺ ആറ്റങ്ങളുമായി ബന്ധിപ്പിച്ചിരിക്കുന്ന ചെറിയ ശാഖകളെ ആൽക്കൈൽ ഗ്രൂപ്പുകൾ എന്ന് വിളിക്കുന്നു. ഒരു പൂരിത ഹൈഡ്രോകാർബണിലെ കാർബൺ ആറ്റത്തിൽ നിന്ന് ഒരു ഹൈഡ്രജൻ ആറ്റം നീക്കം ചെയ്യുമ്പോഴാണ് ആൽക്കൈൽ ഗ്രൂപ്പ് ലഭിക്കുന്നത്.' },
                { type: 'formula', en: "Name of alkyl group = Word root + 'yl'", ml: "ആൽക്കൈൽ ഗ്രൂപ്പിന്റെ പേര് = പദമൂലം (Word root) + 'yl'" },
                { type: 'table', tableData: {
                    headers: [{en: 'Name of alkyl group', ml: 'ആൽക്കൈൽ ഗ്രൂപ്പിന്റെ പേര്'}, {en: 'Structural formula', ml: 'ഘടന'}],
                    rows: [
                      [{en: 'Methyl', ml: 'മീഥൈൽ'}, {en: '-CH₃', ml: '-CH₃'}],
                      [{en: 'Ethyl', ml: 'ഈഥൈൽ'}, {en: '-CH₂-CH₃', ml: '-CH₂-CH₃'}],
                      [{en: 'Propyl', ml: 'പ്രൊപ്പൈൽ'}, {en: '-CH₂-CH₂-CH₃', ml: '-CH₂-CH₂-CH₃'}]
                    ]
                }},
                { type: 'formula', en: 'IUPAC Name = Position number of branch + hyphen + name of alkyl group + word root + suffix (ane)', ml: 'IUPAC പേര് = ശാഖയുടെ സ്ഥാന നമ്പർ + ഹൈഫൻ (-) + ആൽക്കൈൽ ഗ്രൂപ്പിന്റെ പേര് + പദമൂലം + പ്രത്യയം (ane)' },
                { type: 'p', en: 'Example: 2-Methylpentane', ml: 'ഉദാഹരണം: 2-മീഥൈൽപെന്റെയ്ൻ' },
                
                { type: 'h2', en: '2. Nomenclature of Alkanes with More Than One Branch', ml: '2. ഒന്നിലധികം ശാഖകളുള്ള ആൽക്കെയ്നുകളുടെ നാമകരണം' },
                { type: 'p', en: 'Rule 3: If more than one branch is present, select the longest carbon chain. Number the carbon atoms from left to right or right to left in such a way that the carbon atoms with branches get the lowest position numbers.', ml: 'നിയമം 3: ഒന്നിലധികം ശാഖകൾ ഉണ്ടെങ്കിൽ, ഏറ്റവും നീളമേറിയ കാർബൺ ശൃംഖല തിരഞ്ഞെടുക്കുക. ശാഖകളുള്ള കാർബൺ ആറ്റങ്ങൾക്ക് ഏറ്റവും ചെറിയ സ്ഥാന നമ്പറുകൾ ലഭിക്കുന്ന രീതിയിൽ ഇടത്തുനിന്ന് വലത്തോട്ടോ വലത്തുനിന്ന് ഇടത്തോട്ടോ നമ്പറിംഗ് നടത്തുക.' },
                { type: 'p', en: 'Rule 4: If the same branch appears more than once in a carbon chain, the number of branches is to be indicated using prefixes like di (two), tri (three), tetra (four) etc. Position numbers should be separated by commas.', ml: 'നിയമം 4: ഒരേ ശാഖ ഒരു കാർബൺ ശൃംഖലയിൽ ഒന്നിലധികം തവണ വന്നാൽ, ശാഖകളുടെ എണ്ണം സൂചിപ്പിക്കാൻ ഡൈ (di - രണ്ട്), ട്രൈ (tri - മൂന്ന്), ടെട്രാ (tetra - നാല്) തുടങ്ങിയ പൂർവ്വപ്രത്യയങ്ങൾ ഉപയോഗിക്കണം. സ്ഥാന നമ്പറുകൾ കോമ (,) ഉപയോഗിച്ച് വേർതിരിക്കണം.' },
                { type: 'p', en: 'Rule 5: If the carbon atom containing the first branch gets the same position number when numbered from either side, then the numbering should be done in such a way that the carbon atom containing the second branch gets a lower position number.', ml: 'നിയമം 5: ഇരുവശത്തുനിന്നും നമ്പറിംഗ് നടത്തുമ്പോൾ ആദ്യത്തെ ശാഖയുള്ള കാർബൺ ആറ്റത്തിന് ഒരേ സ്ഥാന നമ്പർ ലഭിക്കുകയാണെങ്കിൽ, രണ്ടാമത്തെ ശാഖയുള്ള കാർബൺ ആറ്റത്തിന് ചെറിയ സ്ഥാന നമ്പർ ലഭിക്കുന്ന രീതിയിൽ നമ്പറിംഗ് നടത്തണം.' },
                { type: 'p', en: 'Rule 6: If a carbon atom has two identical branches, their position numbers should be repeated.', ml: 'നിയമം 6: ഒരു കാർബൺ ആറ്റത്തിൽ ഒരേപോലെയുള്ള രണ്ട് ശാഖകൾ ഉണ്ടെങ്കിൽ, അവയുടെ സ്ഥാന നമ്പറുകൾ ആവർത്തിക്കണം.' },
                
                { type: 'h2', en: '3. Nomenclature of Unsaturated Hydrocarbons', ml: '3. അപൂരിത ഹൈഡ്രോകാർബണുകളുടെ നാമകരണം' },
                { type: 'p', en: 'In the nomenclature of hydrocarbons with double bonds or triple bonds, the numbering should be done in such a way that the carbon atoms linked by the multiple bond gets the lowest position number.', ml: 'ദ്വിബന്ധനമോ (double bond) ത്രിബന്ധനമോ (triple bond) ഉള്ള ഹൈഡ്രോകാർബണുകളുടെ നാമകരണത്തിൽ, ബന്ധനമുള്ള കാർബൺ ആറ്റങ്ങൾക്ക് ഏറ്റവും ചെറിയ സ്ഥാന നമ്പർ ലഭിക്കുന്ന രീതിയിൽ നമ്പറിംഗ് നടത്തണം.' },
                { type: 'formula', en: 'Alkenes: Word root + hyphen + position of double bond + hyphen + suffix (ene)', ml: 'ആൽക്കീനുകൾ: പദമൂലം + ഹൈഫൻ + ദ്വിബന്ധനത്തിന്റെ സ്ഥാനം + ഹൈഫൻ + പ്രത്യയം (ene)' },
                { type: 'p', en: 'Example: But-1-ene, Pent-2-ene', ml: 'ഉദാഹരണം: ബ്യൂട്ട്-1-ഈൻ, പെന്റ്-2-ഈൻ' },
                { type: 'formula', en: 'Alkynes: Word root + hyphen + position of triple bond + hyphen + suffix (yne)', ml: 'ആൽക്കൈനുകൾ: പദമൂലം + ഹൈഫൻ + ത്രിബന്ധനത്തിന്റെ സ്ഥാനം + ഹൈഫൻ + പ്രത്യയം (yne)' },
                { type: 'p', en: 'Example: But-1-yne, But-2-yne', ml: 'ഉദാഹരണം: ബ്യൂട്ട്-1-ഐൻ, ബ്യൂട്ട്-2-ഐൻ' },

                { type: 'h2', en: '4. Functional Groups', ml: '4. ഫങ്ഷണൽ ഗ്രൂപ്പുകൾ' },
                { type: 'p', en: 'An atom or a group of atoms, bonded to carbon in an organic compound, determines the distinctive chemical and physical properties of that compound. This atom or group of atoms is called a functional group.', ml: 'ഒരു ഓർഗാനിക് സംയുക്തത്തിലെ കാർബണുമായി ബന്ധിപ്പിച്ചിരിക്കുന്നതും ആ സംയുക്തത്തിന്റെ സവിശേഷമായ രാസ-ഭൗതിക ഗുണങ്ങൾ നിർണ്ണയിക്കുന്നതുമായ ആറ്റത്തെയോ ആറ്റങ്ങളുടെ കൂട്ടത്തെയോ ഫങ്ഷണൽ ഗ്രൂപ്പ് എന്ന് വിളിക്കുന്നു.' },
                { type: 'table', tableData: {
                    headers: [{en: 'Functional Group', ml: 'ഫങ്ഷണൽ ഗ്രൂപ്പ്'}, {en: 'Name of functional group', ml: 'ഫങ്ഷണൽ ഗ്രൂപ്പിന്റെ പേര്'}, {en: 'Common name', ml: 'പൊതുവായ പേര്'}],
                    rows: [
                      [{en: '-OH', ml: '-OH'}, {en: 'Hydroxyl', ml: 'ഹൈഡ്രോക്സിൽ'}, {en: 'Alcohol', ml: 'ആൽക്കഹോൾ'}],
                      [{en: '-COOH', ml: '-COOH'}, {en: 'Carboxyl', ml: 'കാർബോക്സിൽ'}, {en: 'Carboxylic acid', ml: 'കാർബോക്സിലിക് ആസിഡ്'}],
                      [{en: '-CHO', ml: '-CHO'}, {en: 'Aldehydic', ml: 'ആൽഡിഹൈഡിക്'}, {en: 'Aldehyde', ml: 'ആൽഡിഹൈഡ്'}],
                      [{en: '>C=O', ml: '>C=O'}, {en: 'Keto', ml: 'കീറ്റോ'}, {en: 'Ketone', ml: 'കീറ്റോൺ'}],
                      [{en: '-O-R', ml: '-O-R'}, {en: 'Alkoxy', ml: 'ആൽക്കോക്സി'}, {en: 'Ether', ml: 'ഈഥർ'}],
                      [{en: '-F, -Cl, -Br, -I', ml: '-F, -Cl, -Br, -I'}, {en: 'Halo', ml: 'ഹാലോ'}, {en: 'Halo compounds', ml: 'ഹാലോ സംയുക്തങ്ങൾ'}]
                    ]
                }},
                { type: 'h3', en: 'A. Hydroxyl group (-OH)', ml: 'A. ഹൈഡ്രോക്സിൽ ഗ്രൂപ്പ് (-OH)' },
                { type: 'p', en: 'The aliphatic hydrocarbons in which -OH group is attached as a functional group are called alcohols. They are named by replacing \'e\' in the name of the corresponding alkane with \'ol\'.', ml: '-OH ഗ്രൂപ്പ് ഫങ്ഷണൽ ഗ്രൂപ്പായി വരുന്ന അലിഫാറ്റിക് ഹൈഡ്രോകാർബണുകളെ ആൽക്കഹോളുകൾ എന്ന് വിളിക്കുന്നു. അനുയോജ്യമായ ആൽക്കെയ്നിന്റെ പേരിലെ \'e\' മാറ്റി \'ol\' ചേർത്താണ് ഇവയ്ക്ക് പേര് നൽകുന്നത്.' },
                { type: 'formula', en: 'Alkane - e + ol → Alkanol (e.g., Methane - e + ol → Methanol)', ml: 'Alkane - e + ol → Alkanol (ഉദാഹരണം: Methane - e + ol → Methanol)' },
                { type: 'p', en: 'When there are more than two carbon atoms, the position of the -OH group needs to be specified. Numbering should give the lowest position number to the carbon attached to the -OH group.', ml: 'രണ്ടിലധികം കാർബൺ ആറ്റങ്ങൾ ഉണ്ടെങ്കിൽ, -OH ഗ്രൂപ്പിന്റെ സ്ഥാനം വ്യക്തമാക്കണം. -OH ഗ്രൂപ്പ് ബന്ധിപ്പിച്ചിട്ടുള്ള കാർബണിന് ഏറ്റവും ചെറിയ സ്ഥാന നമ്പർ ലഭിക്കുന്ന രീതിയിൽ നമ്പറിംഗ് നടത്തണം.' },
                { type: 'h3', en: 'B. Carboxyl group (-COOH)', ml: 'B. കാർബോക്സിൽ ഗ്രൂപ്പ് (-COOH)' },
                { type: 'p', en: 'Compounds containing the -COOH functional group are known as carboxylic acids. The number of carbon atoms in the main chain, including the one in the carboxyl group, must be considered. The last letter \'e\' is replaced with \'oic acid\'.', ml: '-COOH ഫങ്ഷണൽ ഗ്രൂപ്പ് അടങ്ങിയ സംയുക്തങ്ങളെ കാർബോക്സിലിക് ആസിഡുകൾ എന്ന് വിളിക്കുന്നു. കാർബോക്സിൽ ഗ്രൂപ്പിലെ കാർബൺ ഉൾപ്പെടെ പ്രധാന ശൃംഖലയിലെ കാർബൺ ആറ്റങ്ങളുടെ എണ്ണം പരിഗണിക്കണം. അവസാനത്തെ അക്ഷരമായ \'e\' മാറ്റി \'oic acid\' എന്ന് ചേർക്കുന്നു.' },
                { type: 'formula', en: 'Alkane - e + oic acid → Alkanoic acid (e.g., Ethane - e + oic acid → Ethanoic acid)', ml: 'Alkane - e + oic acid → Alkanoic acid (ഉദാഹരണം: Ethane - e + oic acid → Ethanoic acid)' },
                { type: 'p', en: 'Note: Monosodium glutamate (MSG) is often added to food items as a taste enhancer. This compound is the sodium salt of glutamic acid. It is odourless and appears in white crystalline form. This compound is known by the trade name, aginomoto.', ml: 'കുറിപ്പ്: മോണോസോഡിയം ഗ്ലൂട്ടാമേറ്റ് (MSG) പലപ്പോഴും ഭക്ഷണസാധനങ്ങളിൽ രുചി വർദ്ധിപ്പിക്കുന്നതിനായി ചേർക്കുന്നു. ഈ സംയുക്തം ഗ്ലൂട്ടാമിക് ആസിഡിന്റെ സോഡിയം ലവണമാണ്. ഇതിന് ഗന്ധമില്ല, വെളുത്ത പരൽ രൂപത്തിലാണ് കാണപ്പെടുന്നത്. ഈ സംയുക്തം അജിനോമോട്ടോ എന്ന വ്യാപാര നാമത്തിൽ അറിയപ്പെടുന്നു.' },
                { type: 'p', en: 'Note: Fatty acids are saturated or unsaturated carboxylic acids with long aliphatic chains. Palmitic acid and stearic acid are examples of fatty acids. These acids contain 16 and 18 carbon atoms respectively. Fatty acids have large scale industrial application. They are used in the manufacturing of soaps, detergents and cosmetics. Soaps are metallic salts of fatty acids. You might have heard of omega fatty acids which play a major role in human diet.', ml: 'കുറിപ്പ്: നീളമേറിയ അലിഫാറ്റിക് ശൃംഖലകളുള്ള പൂരിതമോ അപൂരിതമോ ആയ കാർബോക്സിലിക് ആസിഡുകളാണ് ഫാറ്റി ആസിഡുകൾ. പാൽമിറ്റിക് ആസിഡ്, സ്റ്റിയറിക് ആസിഡ് എന്നിവ ഫാറ്റി ആസിഡുകൾക്ക് ഉദാഹരണങ്ങളാണ്. ഈ ആസിഡുകളിൽ യഥാക്രമം 16, 18 കാർബൺ ആറ്റങ്ങൾ അടങ്ങിയിരിക്കുന്നു. ഫാറ്റി ആസിഡുകൾക്ക് വലിയ തോതിലുള്ള വ്യാവസായിക ഉപയോഗമുണ്ട്. സോപ്പുകൾ, ഡിറ്റർജന്റുകൾ, സൗന്ദര്യവർദ്ധക വസ്തുക്കൾ എന്നിവയുടെ നിർമ്മാണത്തിൽ ഇവ ഉപയോഗിക്കുന്നു. ഫാറ്റി ആസിഡുകളുടെ ലോഹ ലവണങ്ങളാണ് സോപ്പുകൾ. മനുഷ്യന്റെ ഭക്ഷണത്തിൽ പ്രധാന പങ്ക് വഹിക്കുന്ന ഒമേഗ ഫാറ്റി ആസിഡുകളെക്കുറിച്ച് നിങ്ങൾ കേട്ടിട്ടുണ്ടാകും.' },
                { type: 'h3', en: 'C. Aldehyde group (-CHO)', ml: 'C. ആൽഡിഹൈഡ് ഗ്രൂപ്പ് (-CHO)' },
                { type: 'p', en: 'Compounds with -CHO functional group are called aldehydes. The carbon in the aldehyde group is included in the main chain. The letter \'e\' is replaced with \'-al\'.', ml: '-CHO ഫങ്ഷണൽ ഗ്രൂപ്പുള്ള സംയുക്തങ്ങളെ ആൽഡിഹൈഡുകൾ എന്ന് വിളിക്കുന്നു. ആൽഡിഹൈഡ് ഗ്രൂപ്പിലെ കാർബൺ പ്രധാന ശൃംഖലയിൽ ഉൾപ്പെടുത്തുന്നു. \'e\' എന്ന അക്ഷരം മാറ്റി \'-al\' എന്ന് ചേർക്കുന്നു.' },
                { type: 'formula', en: 'Alkane - e + al → Alkanal (e.g., Ethane - e + al → Ethanal)', ml: 'Alkane - e + al → Alkanal (ഉദാഹരണം: Ethane - e + al → Ethanal)' },
                { type: 'h3', en: 'D. Keto group (>C=O)', ml: 'D. കീറ്റോ ഗ്രൂപ്പ് (>C=O)' },
                { type: 'p', en: 'Ketones are compounds with >C=O as the functional group. The letter \'e\' of the corresponding alkane is replaced with \'one\'. The position of the functional group must be considered for ketones with more than 3 carbon atoms.', ml: '>C=O ഫങ്ഷണൽ ഗ്രൂപ്പായി വരുന്ന സംയുക്തങ്ങളാണ് കീറ്റോണുകൾ. അനുയോജ്യമായ ആൽക്കെയ്നിന്റെ പേരിലെ \'e\' മാറ്റി \'one\' എന്ന് ചേർക്കുന്നു. 3-ൽ കൂടുതൽ കാർബൺ ആറ്റങ്ങളുള്ള കീറ്റോണുകൾക്ക് ഫങ്ഷണൽ ഗ്രൂപ്പിന്റെ സ്ഥാനം പരിഗണിക്കണം.' },
                { type: 'formula', en: 'Alkane - e + one → Alkanone (e.g., Propane - e + one → Propanone)', ml: 'Alkane - e + one → Alkanone (ഉദാഹരണം: Propane - e + one → Propanone)' },
                { type: 'h3', en: 'E. Halo group (-F, -Cl, -Br, -I)', ml: 'E. ഹാലോ ഗ്രൂപ്പ് (-F, -Cl, -Br, -I)' },
                { type: 'p', en: 'Compounds formed when hydrogen atoms in a hydrocarbon are replaced with halogen atoms are called halo compounds.', ml: 'ഒരു ഹൈഡ്രോകാർബണിലെ ഹൈഡ്രജൻ ആറ്റങ്ങൾക്ക് പകരം ഹാലൊജൻ ആറ്റങ്ങൾ വരുമ്പോൾ ഉണ്ടാകുന്ന സംയുക്തങ്ങളെ ഹാലോ സംയുക്തങ്ങൾ എന്ന് വിളിക്കുന്നു.' },
                { type: 'formula', en: 'Position of halo group + hyphen + name of halo group + name of alkane (e.g., 1-Chloropropane)', ml: 'ഹാലോ ഗ്രൂപ്പിന്റെ സ്ഥാനം + ഹൈഫൻ + ഹാലോ ഗ്രൂപ്പിന്റെ പേര് + ആൽക്കെയ്നിന്റെ പേര് (ഉദാഹരണം: 1-ക്ലോറോപ്രൊപ്പെയ്ൻ)' },
                { type: 'h3', en: 'F. Alkoxy group (-O-R)', ml: 'F. ആൽക്കോക്സി ഗ്രൂപ്പ് (-O-R)' },
                { type: 'p', en: 'Ethers are compounds containing alkoxy group. They are named as alkoxyalkane. Of the alkyl groups on either side of ether linkage (-O-), the longer alkyl group is considered as alkane and the shorter as alkoxy group.', ml: 'ആൽക്കോക്സി ഗ്രൂപ്പ് അടങ്ങിയ സംയുക്തങ്ങളാണ് ഈഥറുകൾ. ഇവയ്ക്ക് ആൽക്കോക്സിആൽക്കെയ്ൻ എന്നാണ് പേര് നൽകുന്നത്. ഈഥർ ലിങ്കേജിന്റെ (-O-) ഇരുവശത്തുമുള്ള ആൽക്കൈൽ ഗ്രൂപ്പുകളിൽ, നീളം കൂടിയ ആൽക്കൈൽ ഗ്രൂപ്പിനെ ആൽക്കെയ്ൻ ആയും നീളം കുറഞ്ഞതിനെ ആൽക്കോക്സി ഗ്രൂപ്പായും പരിഗണിക്കുന്നു.' },
                { type: 'formula', en: 'Example: Methoxyethane (CH₃-O-CH₂-CH₃)', ml: 'ഉദാഹരണം: മീഥോക്സിഈഥെയ്ൻ (CH₃-O-CH₂-CH₃)' },

                { type: 'h2', en: '5. Aromatic Compounds', ml: '5. അരോമാറ്റിക് സംയുക്തങ്ങൾ' },
                { type: 'p', en: 'Phenol (C₆H₅-OH) is the compound obtained when a hydrogen atom in benzene is replaced with an -OH group. Similarly, when a hydrogen atom is replaced with a -COOH group, the resulting compound is benzoic acid (C₆H₅-COOH).', ml: 'ബെൻസീനിലെ ഒരു ഹൈഡ്രജൻ ആറ്റത്തിന് പകരം ഒരു -OH ഗ്രൂപ്പ് വരുമ്പോൾ ലഭിക്കുന്ന സംയുക്തമാണ് ഫീനോൾ (C₆H₅-OH). അതുപോലെ, ഒരു ഹൈഡ്രജൻ ആറ്റത്തിന് പകരം ഒരു -COOH ഗ്രൂപ്പ് വരുമ്പോൾ ലഭിക്കുന്ന സംയുക്തമാണ് ബെൻസോയിക് ആസിഡ് (C₆H₅-COOH).' },

                { type: 'h2', en: '6. Isomerism', ml: '6. ഐസോമെറിസം' },
                { type: 'p', en: 'Compounds having same molecular formula and different chemical and physical properties are called isomers. This phenomenon is called isomerism.', ml: 'ഒരേ തന്മാത്രാ വാക്യവും (molecular formula) വ്യത്യസ്ത ഭൗതിക-രാസ ഗുണങ്ങളുമുള്ള സംയുക്തങ്ങളെ ഐസോമറുകൾ എന്ന് വിളിക്കുന്നു. ഈ പ്രതിഭാസമാണ് ഐസോമെറിസം.' },
                { type: 'h3', en: 'A. Chain Isomerism', ml: 'A. ചെയിൻ ഐസോമെറിസം' },
                { type: 'p', en: 'Compounds that have the same molecular formula but differ in the structures of carbon chain are called chain isomers.', ml: 'ഒരേ തന്മാത്രാ വാക്യവും എന്നാൽ കാർബൺ ശൃംഖലയുടെ ഘടനയിൽ വ്യത്യാസവുമുള്ള സംയുക്തങ്ങളെ ചെയിൻ ഐസോമറുകൾ എന്ന് വിളിക്കുന്നു.' },
                { type: 'formula', en: 'Example: Butane & 2-Methylpropane', ml: 'ഉദാഹരണം: ബ്യൂട്ടെയ്ൻ & 2-മീഥൈൽപ്രൊപ്പെയ്ൻ' },
                { type: 'h3', en: 'B. Position Isomerism', ml: 'B. പൊസിഷൻ ഐസോമെറിസം' },
                { type: 'p', en: 'When two compounds have same molecular formula and same functional group, but differ in the position of the functional group, they are called position isomers. Double bond and triple bond are also considered as functional groups.', ml: 'രണ്ട് സംയുക്തങ്ങൾക്ക് ഒരേ തന്മാത്രാ വാക്യവും ഒരേ ഫങ്ഷണൽ ഗ്രൂപ്പും ഉണ്ടായിരിക്കുകയും, എന്നാൽ ഫങ്ഷണൽ ഗ്രൂപ്പിന്റെ സ്ഥാനത്തിൽ വ്യത്യാസമുണ്ടായിരിക്കുകയും ചെയ്താൽ അവയെ പൊസിഷൻ ഐസോമറുകൾ എന്ന് വിളിക്കുന്നു. ദ്വിബന്ധനത്തെയും ത്രിബന്ധനത്തെയും ഫങ്ഷണൽ ഗ്രൂപ്പുകളായി പരിഗണിക്കുന്നു.' },
                { type: 'formula', en: 'Example: Propan-1-ol & Propan-2-ol; But-1-ene & But-2-ene', ml: 'ഉദാഹരണം: പ്രൊപ്പാൻ-1-ഓൾ & പ്രൊപ്പാൻ-2-ഓൾ; ബ്യൂട്ട്-1-ഈൻ & ബ്യൂട്ട്-2-ഈൻ' },
                { type: 'h3', en: 'C. Functional Isomerism', ml: 'C. ഫങ്ഷണൽ ഐസോമെറിസം' },
                { type: 'p', en: 'When compounds have the same molecular formula but different functional groups, they are known as functional isomers.', ml: 'സംയുക്തങ്ങൾക്ക് ഒരേ തന്മാത്രാ വാക്യവും എന്നാൽ വ്യത്യസ്ത ഫങ്ഷണൽ ഗ്രൂപ്പുകളും ഉണ്ടെങ്കിൽ അവയെ ഫങ്ഷണൽ ഐസോമറുകൾ എന്ന് വിളിക്കുന്നു.' },
                { type: 'formula', en: 'Example: Ethanol (Alcohol) & Methoxymethane (Ether); Propanal (Aldehyde) & Propanone (Ketone)', ml: 'ഉദാഹരണം: എഥനോൾ (ആൽക്കഹോൾ) & മീഥോക്സിമീഥെയ്ൻ (ഈഥർ); പ്രൊപ്പനാൽ (ആൽഡിഹൈഡ്) & പ്രൊപ്പനോൺ (കീറ്റോൺ)' },
                { type: 'h3', en: 'D. Metamerism', ml: 'D. മെറ്റാമെറിസം' },
                { type: 'p', en: 'The isomerism exhibited by compounds with the same molecular formula but different alkyl groups on either side of the bivalent functional group (group having valency 2, e.g., -O-, >C=O) is known as metamerism.', ml: 'ഒരേ തന്മാത്രാ വാക്യവും, എന്നാൽ ദ്വിസംയോജക ഫങ്ഷണൽ ഗ്രൂപ്പിന്റെ (വാലൻസി 2 ഉള്ള ഗ്രൂപ്പുകൾ, ഉദാ: -O-, >C=O) ഇരുവശത്തുമുള്ള ആൽക്കൈൽ ഗ്രൂപ്പുകളിൽ വ്യത്യാസവുമുള്ള സംയുക്തങ്ങൾ കാണിക്കുന്ന ഐസോമെറിസമാണ് മെറ്റാമെറിസം.' },
                { type: 'formula', en: 'Example: Methoxypropane & Ethoxyethane; Pentan-2-one & Pentan-3-one', ml: 'ഉദാഹരണം: മീഥോക്സിപ്രൊപ്പെയ്ൻ & ഈഥോക്സിഈഥെയ്ൻ; പെന്റാൻ-2-ഓൺ & പെന്റാൻ-3-ഓൺ' }
              ]
            },
            glossary: [
              {
                term: { en: "Alkyl Group", ml: "ആൽക്കൈൽ ഗ്രൂപ്പ്" },
                definition: { en: "Obtained when a hydrogen atom is removed from a carbon atom in a saturated hydrocarbon.", ml: "ഒരു പൂരിത ഹൈഡ്രോകാർബണിലെ കാർബൺ ആറ്റത്തിൽ നിന്ന് ഒരു ഹൈഡ്രജൻ ആറ്റം നീക്കം ചെയ്യുമ്പോഴാണ് ആൽക്കൈൽ ഗ്രൂപ്പ് ലഭിക്കുന്നത്." }
              },
              {
                term: { en: "Isomerism", ml: "ഐസോമെറിസം" },
                definition: { en: "Phenomenon where compounds have the same molecular formula but different properties.", ml: "ഒരേ തന്മാത്രാ വാക്യവും വ്യത്യസ്ത ഭൗതിക-രാസ ഗുണങ്ങളുമുള്ള പ്രതിഭാസം." }
              },
              {
                term: { en: "Functional Group", ml: "ഫങ്ഷണൽ ഗ്രൂപ്പ്" },
                definition: { en: "An atom or group of atoms that determines the characteristic properties of an organic compound.", ml: "ഒരു ഓർഗാനിക് സംയുക്തത്തിന്റെ സവിശേഷമായ രാസ-ഭൗതിക ഗുണങ്ങൾ നിർണ്ണയിക്കുന്ന ആറ്റത്തെയോ ആറ്റങ്ങളുടെ കൂട്ടത്തെയോ വിളിക്കുന്ന പേര്." }
              }
            ],
            quiz: [
              {
                q_id: "q1",
                type: "mcq",
                stem: { en: "What is considered the main chain in a branched hydrocarbon?", ml: "ഒരു ശാഖകളുള്ള ഹൈഡ്രോകാർബണിൽ പ്രധാന ശൃംഖലയായി പരിഗണിക്കുന്നത് ഏതിനെയാണ്?" },
                options: [
                  { k: "A", text: { en: "The shortest chain", ml: "ഏറ്റവും ചെറിയ ശൃംഖല" } },
                  { k: "B", text: { en: "The longest chain containing the maximum number of carbon atoms", ml: "ഏറ്റവും കൂടുതൽ കാർബൺ ആറ്റങ്ങളുള്ള നീളമേറിയ ശൃംഖല" } },
                  { k: "C", text: { en: "Any chain with a branch", ml: "ശാഖയുള്ള ഏതെങ്കിലും ശൃംഖല" } },
                  { k: "D", text: { en: "The chain with double bonds only", ml: "ദ്വിബന്ധനങ്ങൾ മാത്രമുള്ള ശൃംഖല" } }
                ],
                answer: "B",
                difficulty: "easy",
                explanation: { en: "The longest chain containing the maximum number of carbon atoms should be considered as the main chain.", ml: "ഏറ്റവും കൂടുതൽ കാർബൺ ആറ്റങ്ങളുള്ള നീളമേറിയ ശൃംഖലയെ പ്രധാന ശൃംഖലയായി പരിഗണിക്കണം." }
              },
              {
                q_id: "q2",
                type: "mcq",
                stem: { en: "Which prefix is used if the same branch appears three times in a carbon chain?", ml: "ഒരേ ശാഖ ഒരു കാർബൺ ശൃംഖലയിൽ മൂന്ന് തവണ വന്നാൽ ഉപയോഗിക്കുന്ന പൂർവ്വപ്രത്യയം ഏതാണ്?" },
                options: [
                  { k: "A", text: { en: "di", ml: "ഡൈ" } },
                  { k: "B", text: { en: "tetra", ml: "ടെട്രാ" } },
                  { k: "C", text: { en: "tri", ml: "ട്രൈ" } },
                  { k: "D", text: { en: "poly", ml: "പോളി" } }
                ],
                answer: "C",
                difficulty: "easy",
                explanation: { en: "'tri' is used for three identical branches.", ml: "മൂന്ന് ഒരേ ശാഖകൾ വന്നാൽ 'ട്രൈ' ഉപയോഗിക്കുന്നു." }
              },
              {
                q_id: "q3",
                type: "mcq",
                stem: { en: "Which functional group uses the suffix '-al'?", ml: "'-ആൽ' (-al) എന്ന പ്രത്യയം ഉപയോഗിക്കുന്നത് ഏത് ഫങ്ഷണൽ ഗ്രൂപ്പിനാണ്?" },
                options: [
                  { k: "A", text: { en: "Alcohol (-OH)", ml: "ആൽക്കഹോൾ (-OH)" } },
                  { k: "B", text: { en: "Ketone (>C=O)", ml: "കീറ്റോൺ (>C=O)" } },
                  { k: "C", text: { en: "Carboxylic acid (-COOH)", ml: "കാർബോക്സിലിക് ആസിഡ് (-COOH)" } },
                  { k: "D", text: { en: "Aldehyde (-CHO)", ml: "ആൽഡിഹൈഡ് (-CHO)" } }
                ],
                answer: "D",
                difficulty: "medium",
                explanation: { en: "Aldehyde group (-CHO) uses the suffix '-al'.", ml: "ആൽഡിഹൈഡ് ഗ്രൂപ്പ് (-CHO) '-ആൽ' എന്ന പ്രത്യയം ഉപയോഗിക്കുന്നു." }
              },
              {
                q_id: "q4",
                type: "mcq",
                stem: { en: "What type of isomerism is shown by Propan-1-ol and Propan-2-ol?", ml: "പ്രൊപ്പാൻ-1-ഓൾ, പ്രൊപ്പാൻ-2-ഓൾ എന്നിവ ഏത് തരം ഐസോമെറിസമാണ് കാണിക്കുന്നത്?" },
                options: [
                  { k: "A", text: { en: "Chain Isomerism", ml: "ചെയിൻ ഐസോമെറിസം" } },
                  { k: "B", text: { en: "Position Isomerism", ml: "പൊസിഷൻ ഐസോമെറിസം" } },
                  { k: "C", text: { en: "Functional Isomerism", ml: "ഫങ്ഷണൽ ഐസോമെറിസം" } },
                  { k: "D", text: { en: "Metamerism", ml: "മെറ്റാമെറിസം" } }
                ],
                answer: "B",
                difficulty: "medium",
                explanation: { en: "They differ in the position of the -OH functional group.", ml: "-OH ഫങ്ഷണൽ ഗ്രൂപ്പിന്റെ സ്ഥാനത്തിലുള്ള വ്യത്യാസമാണ് ഇതിന് കാരണം." }
              }
            ]
          }
        ]
      },
      chemUnit2,
      chemUnit3,
      chemUnit4,
      chemUnit5,
      chemUnit6,
      chemUnit7
    ]
  },
  {
    id: "sub-biology",
    title: { en: "Biology", ml: "ജീവശാസ്ത്രം" },
    icon: "Leaf",
    color: "bg-[#f59e0b]",
    units: [
      {
        id: "u-bio-1",
        title: { en: "Sensations and Responses", ml: "അറിയാനും പ്രതികരിക്കാനും" },
        lessons: [
          {
            id: "sc-bio-10-nervous",
            title: { en: "Nervous System", ml: "നാഡീവ്യവസ്ഥ" },
            estimated_time_mins: 45,
            learning_objectives: [],
            content: { intro: { en: "Coming soon...", ml: "ഉടൻ വരുന്നു..." }, core: { en: "", ml: "" } },
            glossary: [],
            quiz: []
          },
          {
            id: "sc-science-10-photosynthesis-v1",
            title: { en: "Photosynthesis (Sample Virtual Lab)", ml: "ഫോട്ടോസിന്തസിസ്" },
            estimated_time_mins: 45,
            learning_objectives: [
              { id: "lo1", text: { en: "Explain photosynthesis and write the balanced equation.", ml: "ഫോട്ടോസിന്തസിസ് വിശദീകരിക്കുകയും സമീകൃത സമവാക്യം എഴുതുകയും ചെയ്യുക." } }
            ],
            content: {
              intro: {
                en: "Photosynthesis is the process by which green plants make their own food using sunlight, carbon dioxide, and water.",
                ml: "സൂര്യപ്രകാശം, കാർബൺ ഡൈ ഓക്സൈഡ്, ജലം എന്നിവ ഉപയോഗിച്ച് പച്ചസസ്യങ്ങൾ സ്വന്തമായി ഭക്ഷണം നിർമ്മിക്കുന്ന പ്രക്രിയയാണ് ഫോട്ടോസിന്തസിസ്."
              },
              core: {
                en: "Chloroplasts contain chlorophyll, the green pigment that absorbs light energy.",
                ml: "ക്ലോറോപ്ലാസ്റ്റുകളിൽ പ്രകാശോർജ്ജം ആഗിരണം ചെയ്യുന്ന പച്ച പിഗ്മെന്റായ ക്ലോറോഫിൽ അടങ്ങിയിരിക്കുന്നു."
              }
            },
            glossary: [
              {
                term: { en: "Photosynthesis", ml: "ഫോട്ടോസിന്തസിസ്" },
                definition: { en: "The process by which green plants make food.", ml: "പച്ചസസ്യങ്ങൾ ഭക്ഷണം ഉണ്ടാക്കുന്ന പ്രക്രിയ." }
              }
            ],
            quiz: [
              {
                q_id: "q1",
                type: "mcq",
                stem: { en: "Which pigment absorbs most light?", ml: "ഏത് പിഗ്മെന്റ് കൂടുതൽ പ്രകാശം ആഗിരണം ചെയ്യുന്നു?" },
                options: [
                  { k: "A", text: { en: "Chlorophyll", ml: "ക്ലോറോഫിൽ" } },
                  { k: "B", text: { en: "Carotene", ml: "കരോട്ടിൻ" } }
                ],
                answer: "A",
                difficulty: "easy",
                explanation: { en: "Chlorophyll is the primary pigment.", ml: "പ്രധാന പിഗ്മെന്റാണ് ക്ലോറോഫിൽ." }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sub-social-1",
    title: { en: "Social Science I", ml: "സാമൂഹ്യശാസ്ത്രം I" },
    icon: "Globe2",
    color: "bg-[#ff6b6b]",
    units: [
      {
        id: "u-soc-1-1",
        title: { en: "Humanism", ml: "മാനവികത" },
        lessons: [socialScience1Humanism]
      },
      {
        id: "u-soc-1-2",
        title: { en: "The French Revolution", ml: "ഫ്രഞ്ച് വിപ്ലവം" },
        lessons: [socialScience1FrenchRevolution]
      },
      {
        id: "u-soc-1-3",
        title: { en: "Social Analysis", ml: "സാമൂഹിക വിശകലനം" },
        lessons: [socialScience1SociologicalImagination]
      },
      {
        id: "u-soc-1-4",
        title: { en: "Wealth and the World", ml: "സമ്പത്തും ലോകവും" },
        lessons: [socialScience1WealthAndWorld]
      },
      {
        id: "u-soc-1-5",
        title: { en: "Public Opinion in Democracy", ml: "ജനാധിപത്യവും പൊതുജനാഭിപ്രായവും" },
        lessons: [socialScience1PublicOpinion]
      },
      {
        id: "u-soc-1-6",
        title: { en: "Mass Movement for Freedom", ml: "സ്വാതന്ത്ര്യത്തിനായുള്ള ജനകീയ പ്രസ്ഥാനം" },
        lessons: [socialScience1MassMovement]
      },
      {
        id: "u-soc-1-7",
        title: { en: "The Glimpses of Free India", ml: "സ്വതന്ത്ര ഇന്ത്യയുടെ നേർക്കാഴ്ചകൾ" },
        lessons: [socialScience1GlimpsesOfFreeIndia]
      },
      {
        id: "u-soc-1-8",
        title: { en: "Democracy An Indian Experience", ml: "ജനാധിപത്യം ഒരു ഇന്ത്യൻ അനുഭവം" },
        lessons: [socialScience1DemocracyIndianExperience]
      },
      {
        id: "u-soc-1-9",
        title: { en: "Know the Indian Social System", ml: "ഇന്ത്യൻ സാമൂഹിക വ്യവസ്ഥയെ അറിയുക" },
        lessons: [socialScience1KnowIndianSocialSystem]
      }
    ]
  },
  {
    id: "sub-social-2",
    title: { en: "Social Science II", ml: "സാമൂഹ്യശാസ്ത്രം II" },
    icon: "Map",
    color: "bg-[#f59e0b]",
    units: []
  },
  {
    id: "sub-english",
    title: { en: "English", ml: "ഇംഗ്ലീഷ്" },
    icon: "Type",
    color: "bg-[#7c4dff]",
    units: [
      {
        id: "u-eng-1",
        title: { en: "Trials and Triumphs", ml: "പരീക്ഷണങ്ങളും വിജയങ്ങളും" },
        lessons: [
          englishLesson1VeryOldMan,
          englishLesson2InTheAttic,
          englishLesson3FriendsRomans
        ]
      },
      {
        id: "u-eng-2",
        title: { en: "Paths to Progress", ml: "പുരോഗതിയിലേക്കുള്ള പാതകൾ" },
        lessons: [
          englishLesson4BreakingBarriers,
          englishLesson5PhoenixRises,
          englishLesson6TheSeedling
        ]
      },
      {
        id: "u-eng-3",
        title: { en: "The Trumpets of Change", ml: "മാറ്റത്തിന്റെ കാഹളങ്ങൾ" },
        lessons: [
          englishLesson7AnotherDayInParadise,
          englishLesson8War,
          englishLesson9PieceOfString
        ]
      },
      {
        id: "u-eng-4",
        title: { en: "Woodland Whispers", ml: "വനമർമ്മരങ്ങൾ" },
        lessons: [
          englishLesson10Shakuntalam,
          englishLesson11TrillsAndThrills,
          englishLesson12WildSwans
        ]
      },
      {
        id: "u-eng-5",
        title: { en: "Songs of the Self", ml: "ആത്മാവിന്റെ ഗീതങ്ങൾ" },
        lessons: [
          englishLesson13BelovedBoles,
          englishLesson14PreferenceNationale,
          englishLesson15Mirror
        ]
      }
    ]
  },
  {
    id: "sub-malayalam",
    title: { en: "Malayalam", ml: "മലയാളം" },
    icon: "Languages",
    color: "bg-[#ec4899]",
    units: [
      {
        id: "u-mal-1",
        title: { en: "Unit 1", ml: "യൂണിറ്റ് 1" },
        lessons: [
          {
            id: "ml-10-lakshmana",
            title: { en: "Lakshmana Santhwanam", ml: "ലക്ഷ്മണസാന്ത്വനം" },
            estimated_time_mins: 40,
            learning_objectives: [],
            content: { intro: { en: "Coming soon...", ml: "ഉടൻ വരുന്നു..." }, core: { en: "", ml: "" } },
            glossary: [],
            quiz: []
          }
        ]
      }
    ]
  },
  {
    id: "sub-malayalam-ii",
    title: { en: "Malayalam II", ml: "മലയാളം II" },
    icon: "Languages",
    color: "bg-[#ec4899]",
    units: [
      {
        id: "u-mal-ii-1",
        title: { en: "Unit 1: Arangum Porulum", ml: "യൂണിറ്റ് 1: അരങ്ങും പൊരുളും" },
        lessons: [
          lessonChithrakari,
          lessonKhalbilenilavu,
          lessonOruPakshikunjinteMaranam
        ]
      },
      {
        id: "u-mal-ii-2",
        title: { en: "Unit 2: Ekodarasodharar Naam", ml: "യൂണിറ്റ് 2: ഏകോദരസോദരർ നാം" },
        lessons: [
          lessonVishukkani,
          lessonAnandashrukkal,
          lessonKethaluEtakkuri
        ]
      },
      {
        id: "u-mal-ii-3",
        title: { en: "Unit 3: Annavinnarivaay Niravaay", ml: "യൂണിറ്റ് 3: അന്നവിന്നറിവായ് നിറവായ്" },
        lessons: [
          lessonCharithramRachichaNatakam,
          lessonEnteBhasha,
          lessonVijnanaBhasha
        ]
      }
    ]
  },
  {
    id: "sub-hindi",
    title: { en: "Hindi", ml: "ഹിന്ദി", ar: "हिन्दी" },
    icon: "Languages",
    color: "bg-[#ff6b6b]",
    units: hindiUnits
  }
];
