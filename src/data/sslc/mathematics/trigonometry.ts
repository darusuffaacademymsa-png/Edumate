import { Lesson } from '../../curriculum';

export const trigonometry: Lesson = {
  id: "math-ch6",
  title: { en: "Trigonometry", ml: "ത്രികോണമിതി" },
  estimated_time_mins: 90,
  learning_objectives: [
    { id: "lo1", text: { en: "Understand the ratios of sides in standard right triangles (45-45-90 and 30-60-90).", ml: "സവിശേഷ മട്ടത്രികോണങ്ങളിലെ (45-45-90, 30-60-90) വശങ്ങൾ തമ്മിലുള്ള അനുപാതം മനസ്സിലാക്കുക." } },
    { id: "lo2", text: { en: "Define and apply Sine, Cosine, and Tangent ratios.", ml: "സൈൻ, കോസൈൻ, ടാൻജെന്റ് എന്നീ അളവുകൾ നിർവചിക്കുകയും പ്രയോഗിക്കുകയും ചെയ്യുക." } },
    { id: "lo3", text: { en: "Calculate chord lengths and triangle areas using trigonometric measures.", ml: "ത്രികോണമിതി ഉപയോഗിച്ച് വൃത്തത്തിലെ ഞാണുകളുടെ നീളവും ത്രികോണങ്ങളുടെ പരപ്പളവും കണക്കാക്കുക." } },
    { id: "lo4", text: { en: "Solve real-world height and distance problems using elevation and depression.", ml: "മേൽക്കോൺ, കീഴ്ക്കോൺ എന്നിവ ഉപയോഗിച്ച് ഉയരവും ദൂരവും സംബന്ധിച്ച പ്രായോഗിക പ്രശ്നങ്ങൾ പരിഹരിക്കുക." } }
  ],
  content: {
    intro: {
      en: "Trigonometry studies the relationship between the angles and side lengths of triangles. It allows us to calculate inaccessible heights and distances.",
      ml: "ത്രികോണങ്ങളുടെ കോണുകളും വശങ്ങളുടെ നീളവും തമ്മിലുള്ള ബന്ധത്തെക്കുറിച്ചുള്ള പഠനമാണ് ത്രികോണമിതി. നേരിട്ട് അളക്കാൻ കഴിയാത്ത ഉയരങ്ങളും ദൂരങ്ങളും കണക്കാക്കാൻ ഇത് നമ്മെ സഹായിക്കുന്നു."
    },
    core: {
      en: "This chapter introduces special right triangles, the three primary trigonometric ratios (sin, cos, tan), and their applications in geometry and real-world scenarios.",
      ml: "സവിശേഷ മട്ടത്രികോണങ്ങൾ, മൂന്ന് പ്രധാന ത്രികോണമിതി അളവുകൾ (sin, cos, tan), അവയുടെ ജ്യാമിതീയവും പ്രായോഗികവുമായ ഉപയോഗങ്ങൾ എന്നിവ ഈ അധ്യായം പരിചയപ്പെടുത്തുന്നു."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter introduces **Trigonometry**, the branch of mathematics that studies the relationship between the angles and side lengths of triangles. It establishes standard side ratios for specific right-angled triangles and introduces new angle measures: **sine, cosine, and tangent**. The chapter then applies these concepts to practical problems, such as finding the area of shapes, computing the lengths of circle chords, and measuring real-world heights and distances using angles of elevation and depression.', ml: 'ത്രികോണങ്ങളുടെ കോണുകളും വശങ്ങളുടെ നീളവും തമ്മിലുള്ള ബന്ധത്തെക്കുറിച്ച് പഠിക്കുന്ന ഗണിതശാസ്ത്ര ശാഖയായ **ത്രികോണമിതി (Trigonometry)** ഈ അധ്യായത്തിൽ പരിചയപ്പെടുന്നു. സവിശേഷ മട്ടത്രികോണങ്ങളുടെ വശങ്ങൾ തമ്മിലുള്ള അനുപാതങ്ങൾ കണ്ടെത്തുകയും **സൈൻ (Sine), കോസൈൻ (Cosine), ടാൻജെന്റ് (Tangent)** എന്നീ പുതിയ അളവുകൾ പഠിക്കുകയും ചെയ്യുന്നു. ഈ ആശയങ്ങൾ ഉപയോഗിച്ച് രൂപങ്ങളുടെ പരപ്പളവ്, വൃത്തത്തിലെ ഞാണുകളുടെ നീളം, മേൽക്കോണും കീഴ്ക്കോണും ഉപയോഗിച്ചുള്ള ഉയരവും ദൂരവും കണ്ടെത്തൽ തുടങ്ങിയ പ്രായോഗിക പ്രശ്നങ്ങൾ ഈ പാഠഭാഗത്ത് പഠിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: '**Standard Right Triangles:** Triangles with specific angles (like 45°-45°-90° or 30°-60°-90°) have fixed, predictable ratios between their side lengths.', ml: '**സവിശേഷ മട്ടത്രികോണങ്ങൾ (Standard Right Triangles):** 45°-45°-90°, 30°-60°-90° എന്നീ കോണുകളുള്ള ത്രികോണങ്ങളുടെ വശങ്ങൾ തമ്മിൽ കൃത്യമായ ഒരു അനുപാതം എപ്പോഴും ഉണ്ടായിരിക്കും.' },
        { en: '**Trigonometric Ratios:** Special numbers that express the ratio between different sides of a right triangle based on a specific angle.', ml: '**ത്രികോണമിതി അളവുകൾ (Trigonometric Ratios):** ഒരു മട്ടത്രികോണത്തിലെ കോണുകളെ അടിസ്ഥാനമാക്കി വശങ്ങൾ തമ്മിലുള്ള ബന്ധം സൂചിപ്പിക്കുന്ന പ്രത്യേക സംഖ്യകൾ.' },
        { en: '**Chords and Circles:** The length of a chord in a circle can be accurately calculated if we know the radius and the central angle.', ml: '**ഞാണുകളും വൃത്തങ്ങളും:** വൃത്തത്തിന്റെ ആരവും ഞാൺ കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോണും അറിഞ്ഞാൽ ഞാണിന്റെ നീളം കൃത്യമായി കണക്കാക്കാം.' },
        { en: '**Lines of Vision:** The angle created looking up is the **angle of elevation**, and looking down is the **angle of depression**.', ml: '**ദർശനരേഖകൾ:** തിരശ്ചീന രേഖയ്ക്ക് മുകളിലേക്ക് നോക്കുമ്പോൾ ഉണ്ടാകുന്ന കോണിനെ **മേൽക്കോൺ (Angle of Elevation)** എന്നും താഴേക്ക് നോക്കുമ്പോൾ ഉണ്ടാകുന്നതിനെ **കീഴ്ക്കോൺ (Angle of Depression)** എന്നും വിളിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      { type: 'img', en: 'Interactive Trigonometry Lab', ml: 'ത്രികോണമിതി ലാബ്', customId: 'trig-lab' },
      
      { type: 'h3', en: '3.1 Angles and Sides (Standard Triangles)', ml: '3.1 കോണുകളും വശങ്ങളും (സവിശേഷ ത്രികോണങ്ങൾ)' },
      { type: 'p', en: '**45°-45°-90° Triangle:** Because two angles are equal, it is an isosceles right triangle. Both shorter perpendicular sides are equal. The longest side (hypotenuse) is **$\\sqrt{2}$ times** the length of the shorter sides. Ratio: $1 : 1 : \\sqrt{2}$.', ml: '**45°-45°-90° ത്രികോണം:** രണ്ട് കോണുകൾ തുല്യമായതിനാൽ ഇതൊരു സമപാർശ്വ മട്ടത്രികോണമാണ്. ഇതിന്റെ ലംബവശങ്ങൾ തുല്യമായിരിക്കും. കർണ്ണം (Hypotenuse) ലംബവശങ്ങളുടെ **$\\sqrt{2}$ മടങ്ങ്** ആയിരിക്കും. അനുപാതം: $1 : 1 : \\sqrt{2}$.' },
      { type: 'p', en: '**30°-60°-90° Triangle:** The hypotenuse is exactly **$2$ times** the shortest side. The side opposite the 60° angle is **$\\sqrt{3}$ times** the shortest side. Ratio: $1 : \\sqrt{3} : 2$.', ml: '**30°-60°-90° ത്രികോണം:** ഇതിൽ കർണ്ണം ഏറ്റവും ചെറിയ വശത്തിന്റെ (30°-ക്ക് എതിരെയുള്ള വശം) **2 മടങ്ങ്** ആയിരിക്കും. 60°-ക്ക് എതിരെയുള്ള വശം ചെറിയ വശത്തിന്റെ **$\\sqrt{3}$ മടങ്ങ്** ആയിരിക്കും. അനുപാതം: $1 : \\sqrt{3} : 2$.' },

      { type: 'h3', en: '3.2 Trigonometric Measures (Sine, Cosine, Tangent)', ml: '3.2 ത്രികോണമിതി അളവുകൾ (സൈൻ, കോസൈൻ, ടാൻജെന്റ്)' },
      { type: 'p', en: '**Sine (sin):** The ratio of the opposite side of the angle to the hypotenuse.', ml: '**സൈൻ (Sine):** ഒരു കോണിന് എതിരെയുള്ള വശവും കർണ്ണവും തമ്മിലുള്ള അനുപാതം.' },
      { type: 'p', en: '**Cosine (cos):** The ratio of the adjacent side to the hypotenuse.', ml: '**കോസൈൻ (Cosine):** ഒരു കോണിനോട് ചേർന്ന വശവും (സമീപവശം) കർണ്ണവും തമ്മിലുള്ള അനുപാതം.' },
      { type: 'p', en: '**Tangent (tan):** The ratio of the opposite side to the adjacent side.', ml: '**ടാൻജെന്റ് (Tangent):** ഒരു കോണിന് എതിരെയുള്ള വശവും സമീപവശവും തമ്മിലുള്ള അനുപാതം.' },
      
      { type: 'h3', en: '3.3 Triangles, Chords, and Circles', ml: '3.3 ത്രികോണങ്ങൾ, ഞാണുകൾ, വൃത്തങ്ങൾ' },
      { type: 'p', en: 'The length of any chord of a circle is calculated using: **$2r \\sin(c/2)$** (where $r$ is radius and $c$ is central angle).', ml: 'ഒരു വൃത്തത്തിലെ ഞാണിന്റെ നീളം കാണാനുള്ള സൂത്രവാക്യം: **$2r \\sin(c/2)$** ($r$ ആരം, $c$ കേന്ദ്രകോൺ).' },
      { type: 'p', en: 'The ratio of the sides of any triangle is directly proportional to the sines of their opposite angles.', ml: 'ഏതൊരു ത്രികോണത്തിന്റെയും വശങ്ങളുടെ അനുപാതം അവയ്ക്ക് എതിരെയുള്ള കോണുകളുടെ സൈൻ (Sine) വിലകളുടെ അനുപാതത്തിന് തുല്യമായിരിക്കും.' },

      { type: 'h3', en: '3.4 Heights and Distances', ml: '3.4 ഉയരങ്ങളും ദൂരങ്ങളും' },
      { type: 'p', en: '**Angle of Elevation:** Angle formed when looking at an object *above* eye level.', ml: '**മേൽക്കോൺ (Angle of Elevation):** കണ്ണിന്റെ നിരപ്പിന് മുകളിലുള്ള ഒരു വസ്തുവിലേക്ക് നോക്കുമ്പോൾ ദർശനരേഖ തിരശ്ചീനരേഖയുമായി ഉണ്ടാക്കുന്ന കോൺ.' },
      { type: 'p', en: '**Angle of Depression:** Angle formed when looking at an object *below* eye level.', ml: '**കീഴ്ക്കോൺ (Angle of Depression):** കണ്ണിന്റെ നിരപ്പിന് താഴെയുള്ള ഒരു വസ്തുവിലേക്ക് നോക്കുമ്പോൾ ദർശനരേഖ തിരശ്ചീനരേഖയുമായി ഉണ്ടാക്കുന്ന കോൺ.' },
      { type: 'p', en: 'A **clinometer** is used to measure these angles practically. Using the **tangent** ratio, we find inaccessible heights.', ml: 'ഈ കോണുകൾ അളക്കാൻ **ക്ലൈനോമീറ്റർ (Clinometer)** എന്ന ഉപകരണം ഉപയോഗിക്കുന്നു. **ടാൻജെന്റ് (Tangent)** വില ഉപയോഗിച്ച് നമുക്ക് ഉയരങ്ങൾ കണക്കാക്കാം.' },

      { type: 'h2', en: '4. Tables', ml: '4. പട്ടികകൾ' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Term', ml: 'പദം'}, {en: 'Meaning', ml: 'അർത്ഥം'}, {en: 'Example', ml: 'ഉദാഹരണം'}],
          rows: [
            [{en: 'Hypotenuse', ml: 'കർണ്ണം (Hypotenuse)'}, {en: 'Longest side, opposite the 90° angle.', ml: 'മട്ടത്രികോണത്തിലെ ഏറ്റവും വലിയ വശം.'}, {en: 'In 30-60-90, if short side is 1, Hyp is 2.', ml: '30-60-90-ൽ ചെറിയ വശം 1 ആയാൽ കർണ്ണം 2.'}],
            [{en: 'Opposite Side', ml: 'എതിർവശം (Opposite Side)'}, {en: 'Side directly across from the specified angle.', ml: 'പരിഗണിക്കുന്ന കോണിന് നേരെ എതിരെയുള്ള വശം.'}, {en: 'Perpendicular height.', ml: 'ലംബ ഉയരം.'}],
            [{en: 'Adjacent Side', ml: 'സമീപവശം (Adjacent Side)'}, {en: 'Side next to the specified angle.', ml: 'കോണിനോട് ചേർന്ന് നിൽക്കുന്ന വശം.'}, {en: 'The base line.', ml: 'പാദരേഖ.'}],
            [{en: 'Clinometer', ml: 'ക്ലൈനോമീറ്റർ (Clinometer)'}, {en: 'Instrument used to measure vertical angles.', ml: 'ലംബകോണുകൾ അളക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണം.'}, {en: 'Used to find a tree\'s elevation.', ml: 'മരത്തിന്റെ മേൽക്കോൺ അളക്കാൻ ഉപയോഗിക്കുന്നു.'}]
          ]
      }},

      { type: 'h3', en: 'Comparison Table: Standard Triangles Ratios', ml: 'സവിശേഷ ത്രികോണങ്ങളുടെ വശങ്ങളുടെ അനുപാതം' },
      { type: 'table', tableData: {
          headers: [{en: 'Triangle Type', ml: 'ത്രികോണം'}, {en: 'Short Side', ml: 'ചെറിയ വശം'}, {en: 'Medium Side', ml: 'ഇടത്തരം വശം'}, {en: 'Hypotenuse', ml: 'കർണ്ണം'}],
          rows: [
            [{en: '45°-45°-90°', ml: '45°-45°-90°'}, {en: '1', ml: '1'}, {en: '1', ml: '1'}, {en: '$\\sqrt{2}$', ml: '$\\sqrt{2}$'}],
            [{en: '30°-60°-90°', ml: '30°-60°-90°'}, {en: '1', ml: '1'}, {en: '$\\sqrt{3}$', ml: '$\\sqrt{3}$'}, {en: '2', ml: '2'}]
          ]
      }},

      { type: 'h3', en: 'Formula Explanations', ml: 'സൂത്രവാക്യങ്ങൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Concept', ml: 'ആശയം'}, {en: 'Formula', ml: 'സൂത്രവാക്യം'}, {en: 'Use', ml: 'ഉപയോഗം'}],
          rows: [
            [{en: 'Sine (sin)', ml: 'സൈൻ'}, {en: 'Opposite / Hypotenuse', ml: 'എതിർവശം / കർണ്ണം'}, {en: 'Finding height from slant distance.', ml: 'കർണ്ണത്തിൽ നിന്ന് ലംബദൂരം കാണാൻ.'}],
            [{en: 'Cosine (cos)', ml: 'കോസൈൻ'}, {en: 'Adjacent / Hypotenuse', ml: 'സമീപവശം / കർണ്ണം'}, {en: 'Finding horizontal from slant distance.', ml: 'കർണ്ണത്തിൽ നിന്ന് തിരശ്ചീനദൂരം കാണാൻ.'}],
            [{en: 'Tangent (tan)', ml: 'ടാൻജെന്റ്'}, {en: 'Opposite / Adjacent', ml: 'എതിർവശം / സമീപവശം'}, {en: 'Finding height from ground distance.', ml: 'അകലം അറിയാമെങ്കിൽ ഉയരം കാണാൻ.'}],
            [{en: 'Chord Length', ml: 'ഞാണിന്റെ നീളം'}, {en: '$2r \\sin(c/2)$', ml: '$2r \\sin(c/2)$'}, {en: 'Finding length using radius and angle.', ml: 'ആരവും കോണും ഉപയോഗിച്ച് നീളം കാണാൻ.'}]
          ]
      }},

      { type: 'h3', en: 'Process Table: Finding the Height of an Object', ml: 'ഉയരം കാണുന്ന രീതി' },
      { type: 'table', tableData: {
          headers: [{en: 'Step', ml: 'ഘട്ടം'}, {en: 'Description', ml: 'വിവരണം'}],
          rows: [
            [{en: 'Step 1', ml: 'ഘട്ടം 1'}, {en: 'Stand at a known horizontal distance (e.g., 10m).', ml: 'വസ്തുവിൽ നിന്നുള്ള തിരശ്ചീന ദൂരം അളക്കുക (ഉദാ: 10 മീറ്റർ).'}],
            [{en: 'Step 2', ml: 'ഘട്ടം 2'}, {en: 'Measure angle of elevation with a clinometer (e.g., 40°).', ml: 'ക്ലൈനോമീറ്റർ ഉപയോഗിച്ച് മേൽക്കോൺ അളക്കുക (ഉദാ: 40°).'}],
            [{en: 'Step 3', ml: 'ഘട്ടം 3'}, {en: 'Use: $\\tan(\\text{angle}) = \\text{Height} / \\text{Distance}$.', ml: '$\\tan(\\text{കോൺ}) = \\text{ഉയരം} / \\text{അകലം}$ എന്ന സൂത്രവാക്യം ഉപയോഗിക്കുക.'}],
            [{en: 'Step 4', ml: 'ഘട്ടം 4'}, {en: 'Calculate: $\\text{Height} = \\text{Distance} \\times \\tan(\\text{angle})$.', ml: 'കണ്ണിന്റെ നിരപ്പിന് മുകളിലുള്ള ഉയരം കണക്കാക്കുക.'}],
            [{en: 'Step 5', ml: 'ഘട്ടം 5'}, {en: 'Add observer\'s eye-level height.', ml: 'നോക്കുന്ന ആളുടെ ഉയരം കൂടി ഇതിനോട് കൂട്ടുക.'}]
          ]
      }},

      { type: 'h2', en: '5. Highlights', ml: '5. പ്രധാന കാര്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Sides are in a fixed ratio for triangles with the same angles.', ml: 'ഒരേ കോണുകളുള്ള ത്രികോണങ്ങളുടെ വശങ്ങൾ ഒരേ അനുപാതത്തിലായിരിക്കും.' },
        { en: 'Trig ratios depend *only* on the angle, not the size.', ml: 'ത്രികോണമിതി അളവുകൾ കോണിനെ മാത്രമാണ് ആശ്രയിക്കുന്നത്, വലിപ്പത്തെയല്ല.' },
        { en: '**Exam Tip:** Always add observer height to calculated height.', ml: '**ഓർക്കുക:** ഉയരം കാണുമ്പോൾ നോക്കുന്ന ആളുടെ ഉയരം കൂട്ടാൻ മറക്കരുത്.' },
        { en: 'Standard values: $\\sin 30 = 1/2, \\sin 45 = 1/\\sqrt{2}, \\sin 60 = \\sqrt{3}/2$.', ml: 'വിലകൾ: $\\sin 30 = 1/2, \\sin 45 = 1/\\sqrt{2}, \\sin 60 = \\sqrt{3}/2$.' }
      ]},

      { type: 'h2', en: '6. Quick Revision', ml: '6. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: '45-45-90 ratio is $1:1:\\sqrt{2}$.', ml: '45-45-90 അനുപാതം $1:1:\\sqrt{2}$.' },
        { en: '30-60-90 ratio is $1:\\sqrt{3}:2$.', ml: '30-60-90 അനുപാതം $1:\\sqrt{3}:2$.' },
        { en: 'Elevation (looking up), Depression (looking down).', ml: 'മേൽക്കോൺ (മുകളിലേക്ക്), കീഴ്ക്കോൺ (താഴേക്ക്).' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "Sine", ml: "സൈൻ" }, definition: { en: "Opposite/Hypotenuse", ml: "എതിർവശം/കർണ്ണം" } },
    { term: { en: "Cosine", ml: "കോസൈൻ" }, definition: { en: "Adjacent/Hypotenuse", ml: "സമീപവശം/കർണ്ണം" } },
    { term: { en: "Tangent", ml: "ടാൻജെന്റ്" }, definition: { en: "Opposite/Adjacent", ml: "എതിർവശം/സമീപവശം" } },
    { term: { en: "Elevation", ml: "മേൽക്കോൺ" }, definition: { en: "Angle above horizontal.", ml: "തിരശ്ചീനരേഖയ്ക്ക് മുകളിലുള്ള കോൺ." } }
  ],
  quiz: [
    {
      q_id: "trig_q1",
      type: "mcq",
      stem: { en: "In a 45°-45°-90° triangle, if the perpendicular side is 5cm, what is the hypotenuse?", ml: "45°-45°-90° ത്രികോണത്തിൽ ഒരു ലംബവശം 5cm ആയാൽ കർണ്ണം എത്ര?" },
      options: [
        { k: "A", text: { en: "5 cm", ml: "5 cm" } },
        { k: "B", text: { en: "$5\\sqrt{2}$ cm", ml: "$5\\sqrt{2}$ cm" } },
        { k: "C", text: { en: "10 cm", ml: "10 cm" } },
        { k: "D", text: { en: "$5\\sqrt{3}$ cm", ml: "$5\\sqrt{3}$ cm" } }
      ],
      answer: "B",
      explanation: { en: "Ratio is $1:1:\\sqrt{2}$. So $5:5:5\\sqrt{2}$.", ml: "അനുപാതം $1:1:\\sqrt{2}$ ആയതിനാൽ കർണ്ണം $5\\sqrt{2}$." }
    },
    {
      q_id: "trig_q2",
      type: "mcq",
      stem: { en: "In a 30°-60°-90° triangle, which side is 2 times the shortest side?", ml: "30°-60°-90° ത്രികോണത്തിൽ ഏറ്റവും ചെറിയ വശത്തിന്റെ 2 മടങ്ങുള്ള വശം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Hypotenuse", ml: "കർണ്ണം (Hypotenuse)" } },
        { k: "B", text: { en: "Side opposite 60°", ml: "60°-ക്ക് എതിരെയുള്ള വശം" } },
        { k: "C", text: { en: "Side adjacent to 30°", ml: "30°-നോട് ചേർന്ന വശം" } },
        { k: "D", text: { en: "No such side", ml: "അങ്ങനെയൊരു വശമില്ല" } }
      ],
      answer: "A",
      explanation: { en: "In 30-60-90, the hypotenuse is twice the side opposite 30°.", ml: "30-60-90-ൽ കർണ്ണം 30°-ക്ക് എതിരെയുള്ള വശത്തിന്റെ ഇരട്ടിയാണ്." }
    },
    {
      q_id: "trig_q3",
      type: "mcq",
      stem: { en: "What is $\\sin 30^\circ$?", ml: "$\\sin 30^\circ$ എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "1", ml: "1" } },
        { k: "B", text: { en: "$\\sqrt{3}/2$", ml: "$\\sqrt{3}/2$" } },
        { k: "C", text: { en: "1/2", ml: "1/2" } },
        { k: "D", text: { en: "$1/\\sqrt{2}$", ml: "$1/\\sqrt{2}$" } }
      ],
      answer: "C",
      explanation: { en: "From 30-60-90 ratio ($1:\\sqrt{3}:2$), $\\sin 30 = 1/2$.", ml: "30-60-90 അനുപാതം പ്രകാരം $\\sin 30 = 1/2$." }
    },
    {
      q_id: "trig_q4",
      type: "mcq",
      stem: { en: "Which ratio is Opposite / Adjacent?", ml: "എതിർവശം / സമീപവശം എന്നത് ഏത് ത്രികോണമിതി അളവാണ്?" },
      options: [
        { k: "A", text: { en: "Sine", ml: "സൈൻ (Sine)" } },
        { k: "B", text: { en: "Cosine", ml: "കോസൈൻ (Cosine)" } },
        { k: "C", text: { en: "Tangent", ml: "ടാൻജെന്റ് (Tangent)" } },
        { k: "D", text: { en: "Chord", ml: "ഞാൺ" } }
      ],
      answer: "C",
      explanation: { en: "Tangent is the ratio of opposite side to adjacent side.", ml: "എതിർവശം / സമീപവശം എന്നത് ടാൻജെന്റ് ആണ്." }
    },
    {
      q_id: "trig_q5",
      type: "mcq",
      stem: { en: "The angle formed looking down at an object is:", ml: "താഴെയുള്ള ഒരു വസ്തുവിലേക്ക് നോക്കുമ്പോൾ ഉണ്ടാകുന്ന കോൺ ഏത്?" },
      options: [
        { k: "A", text: { en: "Elevation", ml: "മേൽക്കോൺ" } },
        { k: "B", text: { en: "Depression", ml: "കീഴ്ക്കോൺ" } },
        { k: "C", text: { en: "Right angle", ml: "മട്ടകോൺ" } },
        { k: "D", text: { en: "Central angle", ml: "കേന്ദ്രകോൺ" } }
      ],
      answer: "B",
      explanation: { en: "Looking below horizontal creates an angle of depression.", ml: "താഴേക്ക് നോക്കുമ്പോൾ ഉണ്ടാകുന്നത് കീഴ്ക്കോൺ ആണ്." }
    },
    {
      q_id: "trig_q6",
      type: "mcq",
      stem: { en: "Instrument used to measure elevation angles is:", ml: "മേൽക്കോൺ അളക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണം ഏത്?" },
      options: [
        { k: "A", text: { en: "Barometer", ml: "ബാരോമീറ്റർ" } },
        { k: "B", text: { en: "Clinometer", ml: "ക്ലൈനോമീറ്റർ" } },
        { k: "C", text: { en: "Ammeter", ml: "അമീറ്റർ" } },
        { k: "D", text: { en: "Thermometer", ml: "തെർമോമീറ്റർ" } }
      ],
      answer: "B",
      explanation: { en: "A clinometer is designed for vertical angles.", ml: "ലംബകോണുകൾ അളക്കാൻ ക്ലൈനോമീറ്റർ ഉപയോഗിക്കുന്നു." }
    },
    {
      q_id: "trig_q7",
      type: "mcq",
      stem: { en: "What is $\\tan 45^\circ$?", ml: "$\\tan 45^\circ$ എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "0", ml: "0" } },
        { k: "B", text: { en: "1", ml: "1" } },
        { k: "C", text: { en: "$\\sqrt{2}$", ml: "$\\sqrt{2}$" } },
        { k: "D", text: { en: "1/2", ml: "1/2" } }
      ],
      answer: "B",
      explanation: { en: "In 45-45-90, Opp = Adj, so ratio is 1.", ml: "45-45-90 ത്രികോണത്തിൽ ലംബവശങ്ങൾ തുല്യമായതിനാൽ ടാൻജെന്റ് 1 ആണ്." }
    },
    {
      q_id: "trig_q8",
      type: "mcq",
      stem: { en: "If $\\cos \\theta = \\text{Adj} / \\text{Hyp}$, and $\\text{Adj}=6, \\text{Hyp}=12$, find $\\theta$.", ml: "$\\cos \\theta = 6/12$ ആയാൽ $\\theta$ എത്ര?" },
      options: [
        { k: "A", text: { en: "30°", ml: "30°" } },
        { k: "B", text: { en: "45°", ml: "45°" } },
        { k: "C", text: { en: "60°", ml: "60°" } },
        { k: "D", text: { en: "90°", ml: "90°" } }
      ],
      answer: "C",
      explanation: { en: "$\\cos \\theta = 1/2$. $\\cos 60 = 1/2$.", ml: "$\\cos \\theta = 1/2$. ഇത് 60 ഡിഗ്രിക്ക് തുല്യമാണ്." }
    },
    {
      q_id: "trig_q9",
      type: "mcq",
      stem: { en: "Formula for chord length is:", ml: "ഞാണിന്റെ നീളം കാണാനുള്ള സൂത്രവാക്യം ഏത്?" },
      options: [
        { k: "A", text: { en: "$r \\sin c$", ml: "$r \\sin c$" } },
        { k: "B", text: { en: "$2r \\sin c$", ml: "$2r \\sin c$" } },
        { k: "C", text: { en: "$2r \\sin(c/2)$", ml: "$2r \\sin(c/2)$" } },
        { k: "D", text: { en: "$r^2 \\sin c$", ml: "$r^2 \\sin c$" } }
      ],
      answer: "C",
      explanation: { en: "Length = $2 \\times \\text{radius} \\times \\sin(\\text{half angle})$.", ml: "നീളം = $2r \\sin(c/2)$." }
    },
    {
      q_id: "trig_q10",
      type: "mcq",
      stem: { en: "If we double the radius of a circle, the length of a chord with the same central angle will:", ml: "ഒരു വൃത്തത്തിന്റെ ആരം ഇരട്ടിയാക്കിയാൽ അതേ കേന്ദ്രകോണുള്ള ഞാണിന്റെ നീളം:" },
      options: [
        { k: "A", text: { en: "Remain same", ml: "മാറ്റമില്ലാതെ തുടരും" } },
        { k: "B", text: { en: "Double", ml: "ഇരട്ടിയാകും" } },
        { k: "C", text: { en: "Half", ml: "പകുതിയാകും" } },
        { k: "D", text: { en: "Triple", ml: "മൂന്ന് മടങ്ങാകും" } }
      ],
      answer: "B",
      explanation: { en: "Chord length is proportional to the radius ($2r \\sin(c/2)$).", ml: "ഞാണിന്റെ നീളം ആരത്തിന് നേർ അനുപാതത്തിലാണ്." }
    },
    {
      q_id: "trig_q11",
      type: "mcq",
      stem: { en: "In 30-60-90, if the side opposite 60° is $3\\sqrt{3}$, the shortest side is:", ml: "30-60-90-ൽ 60°-ക്ക് എതിരെയുള്ള വശം $3\\sqrt{3}$ ആയാൽ ഏറ്റവും ചെറിയ വശം എത്ര?" },
      options: [
        { k: "A", text: { en: "3", ml: "3" } },
        { k: "B", text: { en: "6", ml: "6" } },
        { k: "C", text: { en: "9", ml: "9" } },
        { k: "D", text: { en: "$1.5$", ml: "1.5" } }
      ],
      answer: "A",
      explanation: { en: "Side opposite 60 is $\\sqrt{3}$ times short side. So $3\\sqrt{3} / \\sqrt{3} = 3$.", ml: "60°-ക്ക് എതിരെയുള്ള വശം ചെറിയ വശത്തിന്റെ $\\sqrt{3}$ മടങ്ങാണ്. അതിനാൽ $3\\sqrt{3} / \\sqrt{3} = 3$." }
    },
    {
      q_id: "trig_q12",
      type: "mcq",
      stem: { en: "The value of $\\sin^2 45 + \\cos^2 45$ is:", ml: "$\\sin^2 45 + \\cos^2 45$ എത്ര?" },
      options: [
        { k: "A", text: { en: "0", ml: "0" } },
        { k: "B", text: { en: "1/2", ml: "1/2" } },
        { k: "C", text: { en: "1", ml: "1" } },
        { k: "D", text: { en: "2", ml: "2" } }
      ],
      answer: "C",
      explanation: { en: "$\\sin^2 \\theta + \\cos^2 \\theta = 1$ for any angle.", ml: "ഏതൊരു കോണിനും $\\sin^2 \\theta + \\cos^2 \\theta = 1$ ആയിരിക്കും." }
    },
    {
      q_id: "trig_q13",
      type: "mcq",
      stem: { en: "A man sees a bird at 30° elevation. If the horizontal distance is 20m, the height above eye level is:", ml: "ഒരാൾ ഒരു പക്ഷിയെ 30° മേൽക്കോണിൽ കാണുന്നു. അകലം 20 മീറ്റർ ആയാൽ ഉയരം എത്ര?" },
      options: [
        { k: "A", text: { en: "$20\\sqrt{3}$", ml: "$20\\sqrt{3}$" } },
        { k: "B", text: { en: "$20/\\sqrt{3}$", ml: "$20/\\sqrt{3}$" } },
        { k: "C", text: { en: "10", ml: "10" } },
        { k: "D", text: { en: "40", ml: "40" } }
      ],
      answer: "B",
      explanation: { en: "$\\tan 30 = H/20 \\Rightarrow 1/\\sqrt{3} = H/20 \\Rightarrow H = 20/\\sqrt{3}$.", ml: "$\\tan 30 = H/20$. പരിഹരിച്ചാൽ $H = 20/\\sqrt{3}$." }
    },
    {
      q_id: "trig_q14",
      type: "mcq",
      stem: { en: "Which trig ratio involves the Hypotenuse and Adjacent side?", ml: "കർണ്ണവും സമീപവശവും തമ്മിലുള്ള ബന്ധം ഏത് അളവിലാണ് ഉള്ളത്?" },
      options: [
        { k: "A", text: { en: "Sine", ml: "സൈൻ" } },
        { k: "B", text: { en: "Cosine", ml: "കോസൈൻ" } },
        { k: "C", text: { en: "Tangent", ml: "ടാൻജെന്റ്" } },
        { k: "D", text: { en: "None", ml: "ഒന്നുമല്ല" } }
      ],
      answer: "B",
      explanation: { en: "Cosine = Adjacent / Hypotenuse.", ml: "കോസൈൻ = സമീപവശം / കർണ്ണം." }
    },
    {
      q_id: "trig_q15",
      type: "mcq",
      stem: { en: "If angles of a triangle are 30°, 60°, 90°, what is the ratio of its sides?", ml: "30°, 60°, 90° കോണുകളുള്ള ത്രികോണത്തിന്റെ വശങ്ങളുടെ അനുപാതം എന്ത്?" },
      options: [
        { k: "A", text: { en: "$1:1:\\sqrt{2}$", ml: "$1:1:\\sqrt{2}$" } },
        { k: "B", text: { en: "$1:\\sqrt{3}:2$", ml: "$1:\\sqrt{3}:2$" } },
        { k: "C", text: { en: "$1:2:3$", ml: "$1:2:3$" } },
        { k: "D", text: { en: "$2:3:4$", ml: "$2:3:4$" } }
      ],
      answer: "B",
      explanation: { en: "Standard ratio for 30-60-90 is $1:\\sqrt{3}:2$.", ml: "30-60-90-ന്റെ സ്റ്റാൻഡേർഡ് അനുപാതം $1:\\sqrt{3}:2$ ആണ്." }
    },
    {
      q_id: "trig_q16",
      type: "mcq",
      stem: { en: "Area of a triangle with sides $a, b$ and included angle $C$ is:", ml: "$a, b$ എന്നീ വശങ്ങളും അവയ്ക്കിടയിലെ കോൺ $C$-യും ഉള്ള ത്രികോണത്തിന്റെ പരപ്പളവ്:", enText: "Note: Using sine ratio for height." },
      options: [
        { k: "A", text: { en: "$\\frac{1}{2}ab$", ml: "$\\frac{1}{2}ab$" } },
        { k: "B", text: { en: "$\\frac{1}{2}ab \\sin C$", ml: "$\\frac{1}{2}ab \\sin C$" } },
        { k: "C", text: { en: "$ab \\sin C$", ml: "$ab \\sin C$" } },
        { k: "D", text: { en: "$\\frac{1}{2}ab \\cos C$", ml: "$\\frac{1}{2}ab \\cos C$" } }
      ],
      answer: "B",
      explanation: { en: "Height $h = a \\sin C$. Area = $\\frac{1}{2}bh = \\frac{1}{2}ab \\sin C$.", ml: "ഉയരം $h = a \\sin C$ ആയതിനാൽ പരപ്പളവ് $\\frac{1}{2}ab \\sin C$." }
    },
    {
      q_id: "trig_q17",
      type: "mcq",
      stem: { en: "What is $\\cos 45^\circ$?", ml: "$\\cos 45^\circ$ എത്ര?" },
      options: [
        { k: "A", text: { en: "1/2", ml: "1/2" } },
        { k: "B", text: { en: "$1/\\sqrt{2}$", ml: "$1/\\sqrt{2}$" } },
        { k: "C", text: { en: "$\\sqrt{3}/2$", ml: "$\\sqrt{3}/2$" } },
        { k: "D", text: { en: "1", ml: "1" } }
      ],
      answer: "B",
      explanation: { en: "$\\cos 45 = \\text{Adj}/\\text{Hyp} = 1/\\sqrt{2}$.", ml: "$\\cos 45 = 1/\\sqrt{2}$." }
    },
    {
      q_id: "trig_q18",
      type: "mcq",
      stem: { en: "Which trig value increases as the angle grows from 0 to 90?", ml: "0 മുതൽ 90 വരെ കോൺ കൂടുമ്പോൾ വില കൂടുന്ന അളവ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Sine", ml: "സൈൻ (Sine)" } },
        { k: "B", text: { en: "Cosine", ml: "കോസൈൻ (Cosine)" } },
        { k: "C", text: { en: "Tangent", ml: "ടാൻജെന്റ് (Tangent)" } },
        { k: "D", text: { en: "Both A and C", ml: "A-യും C-യും" } }
      ],
      answer: "D",
      explanation: { en: "Sin and Tan increase as the angle increases.", ml: "കോൺ കൂടുമ്പോൾ സൈൻ, ടാൻജെന്റ് വിലകൾ വർദ്ധിക്കുന്നു." }
    },
    {
      q_id: "trig_q19",
      type: "mcq",
      stem: { en: "If $\\tan \\theta = 1$, find $\\theta$.", ml: "$\\tan \\theta = 1$ ആയാൽ $\\theta$ എത്ര?" },
      options: [
        { k: "A", text: { en: "0°", ml: "0°" } },
        { k: "B", text: { en: "30°", ml: "30°" } },
        { k: "C", text: { en: "45°", ml: "45°" } },
        { k: "D", text: { en: "60°", ml: "60°" } }
      ],
      answer: "C",
      explanation: { en: "$\\tan 45 = 1$.", ml: "$\\tan 45 = 1$ ആണ്." }
    },
    {
      q_id: "trig_q20",
      type: "mcq",
      stem: { en: "A chord of central angle 120° in a circle of radius 10cm has length:", ml: "10cm ആരമുള്ള വൃത്തത്തിൽ 120° കേന്ദ്രകോണുള്ള ഞാണിന്റെ നീളം എത്ര?" },
      options: [
        { k: "A", text: { en: "$20 \\sin 60$", ml: "$20 \\sin 60$" } },
        { k: "B", text: { en: "$20 \\sin 120$", ml: "$20 \\sin 120$" } },
        { k: "C", text: { en: "$10 \\sin 60$", ml: "$10 \\sin 60$" } },
        { k: "D", text: { en: "20", ml: "20" } }
      ],
      answer: "A",
      explanation: { en: "Using $2r \\sin(c/2) = 2(10) \\sin(60) = 20 \\sin 60$.", ml: "$2r \\sin(c/2)$ ഉപയോഗിച്ച് $20 \\sin 60$ എന്ന് ലഭിക്കും." }
    },
    {
      q_id: "trig_q21",
      type: "mcq",
      stem: { en: "What is $\\sin 60^\circ$?", ml: "$\\sin 60^\circ$ എത്ര?" },
      options: [
        { k: "A", text: { en: "1/2", ml: "1/2" } },
        { k: "B", text: { en: "$\\sqrt{3}/2$", ml: "$\\sqrt{3}/2$" } },
        { k: "C", text: { en: "$1/\\sqrt{2}$", ml: "$1/\\sqrt{2}$" } },
        { k: "D", text: { en: "$\\sqrt{3}$", ml: "$\\sqrt{3}$" } }
      ],
      answer: "B",
      explanation: { en: "From 30-60-90 ratio ($1:\\sqrt{3}:2$), $\\sin 60 = \\sqrt{3}/2$.", ml: "30-60-90 അനുപാതം പ്രകാരം $\\sin 60 = \\sqrt{3}/2$." }
    },
    {
      q_id: "trig_q22",
      type: "mcq",
      stem: { en: "If elevation is 45°, Height is 10m, what is the Distance?", ml: "മേൽക്കോൺ 45°, ഉയരം 10 മീറ്റർ ആയാൽ അകലം എത്ര?" },
      options: [
        { k: "A", text: { en: "5 m", ml: "5 m" } },
        { k: "B", text: { en: "10 m", ml: "10 m" } },
        { k: "C", text: { en: "$10\\sqrt{2}$ m", ml: "$10\\sqrt{2}$ m" } },
        { k: "D", text: { en: "20 m", ml: "20 m" } }
      ],
      answer: "B",
      explanation: { en: "$\\tan 45 = 1$. So Height = Distance.", ml: "$\\tan 45 = 1$ ആയതിനാൽ ഉയരവും അകലവും തുല്യമായിരിക്കും." }
    },
    {
      q_id: "trig_q23",
      type: "mcq",
      stem: { en: "Value of $\\cos 90^\circ$ is:", ml: "$\\cos 90^\circ$ എത്ര?" },
      options: [
        { k: "A", text: { en: "0", ml: "0" } },
        { k: "B", text: { en: "1", ml: "1" } },
        { k: "C", text: { en: "Infinity", ml: "അനന്തം" } },
        { k: "D", text: { en: "1/2", ml: "1/2" } }
      ],
      answer: "A",
      explanation: { en: "As angle approach 90, the adjacent side (base) becomes zero.", ml: "90 ഡിഗ്രിയിൽ സമീപവശം പൂജ്യമാകുന്നതിനാൽ കോസൈൻ പൂജ്യമാണ്." }
    },
    {
      q_id: "trig_q24",
      type: "mcq",
      stem: { en: "What happens to Cosine as the angle increases?", ml: "കോൺ കൂടുമ്പോൾ കോസൈൻ വിലയ്ക്ക് എന്ത് സംഭവിക്കും?" },
      options: [
        { k: "A", text: { en: "Increases", ml: "കൂടുന്നു" } },
        { k: "B", text: { en: "Decreases", ml: "കുറയുന്നു" } },
        { k: "C", text: { en: "Remains same", ml: "മാറ്റമില്ലാതെ തുടരുന്നു" } },
        { k: "D", text: { en: "First increases then decreases", ml: "ആദ്യം കൂടുന്നു പിന്നെ കുറയുന്നു" } }
      ],
      answer: "B",
      explanation: { en: "Cosine decreases from 1 to 0 as angle goes from 0 to 90.", ml: "കോൺ കൂടുമ്പോൾ കോസൈൻ വില കുറഞ്ഞുവരുന്നു." }
    },
    {
      q_id: "trig_q25",
      type: "mcq",
      stem: { en: "In 45-45-90, if hypotenuse is 10, what is the side?", ml: "45-45-90 ത്രികോണത്തിൽ കർണ്ണം 10 ആയാൽ ലംബവശം എത്ര?" },
      options: [
        { k: "A", text: { en: "$10\\sqrt{2}$", ml: "$10\\sqrt{2}$" } },
        { k: "B", text: { en: "$5\\sqrt{2}$", ml: "$5\\sqrt{2}$" } },
        { k: "C", text: { en: "5", ml: "5" } },
        { k: "D", text: { en: "7", ml: "7" } }
      ],
      answer: "B",
      explanation: { en: "$x\\sqrt{2} = 10 \\Rightarrow x = 10/\\sqrt{2} = 5\\sqrt{2}$.", ml: "$x\\sqrt{2} = 10$. പരിഹരിച്ചാൽ $x = 5\\sqrt{2}$." }
    },
    {
      q_id: "trig_q26",
      type: "mcq",
      stem: { en: "Relation between $\\sin \\theta$ and $\\cos(90-\\theta)$ is:", ml: "$\\sin \\theta$-യും $\\cos(90-\\theta)$-യും തമ്മിലുള്ള ബന്ധം:", enText: "Complementary angles." },
      options: [
        { k: "A", text: { en: "They are equal", ml: "അവ തുല്യമാണ്" } },
        { k: "B", text: { en: "Sin is greater", ml: "സൈൻ ആണ് വലുത്" } },
        { k: "C", text: { en: "Cos is greater", ml: "കോസൈൻ ആണ് വലുത്" } },
        { k: "D", text: { en: "Sum is 1", ml: "തുക 1 ആണ്" } }
      ],
      answer: "A",
      explanation: { en: "$\\sin 30 = \\cos 60, \\sin 40 = \\cos 50$ etc.", ml: "പരസ്പര പൂരകകോണുകളുടെ സൈൻ, കോസൈൻ വിലകൾ തുല്യമാണ്." }
    },
    {
      q_id: "trig_q27",
      type: "mcq",
      stem: { en: "Tangent is not defined for which angle?", ml: "ഏത് കോണിനാണ് ടാൻജെന്റ് വില നിർവചിക്കാത്തത്?" },
      options: [
        { k: "A", text: { en: "0°", ml: "0°" } },
        { k: "B", text: { en: "45°", ml: "45°" } },
        { k: "C", text: { en: "90°", ml: "90°" } },
        { k: "D", text: { en: "180°", ml: "180°" } }
      ],
      answer: "C",
      explanation: { en: "$\\tan 90 = \\text{Opp}/0$, which is undefined.", ml: "90 ഡിഗ്രിയിൽ ടാൻജെന്റ് വില നിർവചിച്ചിട്ടില്ല (അനന്തം)." }
    },
    {
      q_id: "trig_q28",
      type: "mcq",
      stem: { en: "If a shadow's length equals the object's height, the sun's elevation is:", ml: "നിഴലിന്റെ നീളം വസ്തുവിന്റെ ഉയരത്തിന് തുല്യമായാൽ സൂര്യന്റെ മേൽക്കോൺ എത്ര?" },
      options: [
        { k: "A", text: { en: "30°", ml: "30°" } },
        { k: "B", text: { en: "45°", ml: "45°" } },
        { k: "C", text: { en: "60°", ml: "60°" } },
        { k: "D", text: { en: "90°", ml: "90°" } }
      ],
      answer: "B",
      explanation: { en: "$\\tan \\theta = H/S$. If $H=S, \\tan \\theta = 1 \\Rightarrow \\theta = 45^\circ$.", ml: "ഉയരവും നിഴലും തുല്യമാകുമ്പോൾ ടാൻജെന്റ് 1 ആണ്. അതായത് 45 ഡിഗ്രി." }
    },
    {
      q_id: "trig_q29",
      type: "mcq",
      stem: { en: "Ratio of sides of any triangle is $a:b:c = ...$", ml: "ഏതൊരു ത്രികോണത്തിന്റെയും വശങ്ങളുടെ അനുപാതം:" },
      options: [
        { k: "A", text: { en: "$\\sin A : \\sin B : \\sin C$", ml: "$\\sin A : \\sin B : \\sin C$" } },
        { k: "B", text: { en: "$A : B : C$", ml: "$A : B : C$" } },
        { k: "C", text: { en: "$\\cos A : \\cos B : \\cos C$", ml: "$\\cos A : \\cos B : \\cos C$" } },
        { k: "D", text: { en: "$\\tan A : \\tan B : \\tan C$", ml: "$\\tan A : \\tan B : \\tan C$" } }
      ],
      answer: "A",
      explanation: { en: "Law of sines: sides are proportional to sines of opposite angles.", ml: "വശങ്ങളുടെ അനുപാതം എതിർ കോണുകളുടെ സൈൻ വിലകളുടെ അനുപാതത്തിന് തുല്യമാണ്." }
    },
    {
      q_id: "trig_q30",
      type: "mcq",
      stem: { en: "What is $\\sin 45^\circ$?", ml: "$\\sin 45^\circ$ എത്ര?" },
      options: [
        { k: "A", text: { en: "1/2", ml: "1/2" } },
        { k: "B", text: { en: "$1/\\sqrt{2}$", ml: "$1/\\sqrt{2}$" } },
        { k: "C", text: { en: "$\\sqrt{3}/2$", ml: "$\\sqrt{3}/2$" } },
        { k: "D", text: { en: "1", ml: "1" } }
      ],
      answer: "B",
      explanation: { en: "In 45-45-90, $\\sin 45 = \\text{Opp}/\\text{Hyp} = 1/\\sqrt{2}$.", ml: "$\\sin 45 = 1/\\sqrt{2}$ ആണ്." }
    }
  ]
};
