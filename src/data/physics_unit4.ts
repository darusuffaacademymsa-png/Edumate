import { Lesson } from './curriculum';

export const physicsUnit4: Lesson = {
  id: 'sc-phy-10-magnetic-effect',
  title: { en: 'Magnetic Effect of Electric Current', ml: 'വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം' },
  estimated_time_mins: 90,
  videos: [
    {
      title: "Quick revision (Exam oriented)",
      url: "https://www.youtube.com/watch?v=qOi89_eQJ2I"
    }
  ],
  learning_objectives: [
    { id: 'lo1', text: { en: 'Understand the concept of magnetic field and field lines.', ml: 'കാന്തികമണ്ഡലം, കാന്തിക ബലരേഖകൾ എന്നീ ആശയങ്ങൾ മനസ്സിലാക്കുക.' } },
    { id: 'lo2', text: { en: 'Explain the magnetic effect of electric current discovered by Oersted.', ml: 'ഒയർസ്റ്റെഡ് കണ്ടെത്തിയ വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം വിശദീകരിക്കുക.' } },
    { id: 'lo3', text: { en: 'Apply Right Hand Thumb Rule and Fleming\'s Left Hand Rule.', ml: 'വലതുകൈ തള്ളവിരൽ നിയമവും ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമവും പ്രയോഗിക്കുക.' } },
    { id: 'lo4', text: { en: 'Describe the working of Solenoid, Electromagnet, DC Motor, and Loudspeaker.', ml: 'സോളിനോയ്ഡ്, വൈദ്യുതകാന്തം, DC മോട്ടോർ, ലൗഡ്സ്പീക്കർ എന്നിവയുടെ പ്രവർത്തനം വിവരിക്കുക.' } }
  ],
  content: {
    intro: {
      en: 'Electricity and Magnetism are closely related. In this chapter, we explore how electric current produces magnetic fields and how these fields exert force on conductors, leading to the invention of motors and speakers.',
      ml: 'വൈദ്യുതിയും കാന്തികതയും തമ്മിൽ അടുത്ത ബന്ധമുണ്ട്. വൈദ്യുത പ്രവാഹം എങ്ങനെ കാന്തികമണ്ഡലങ്ങൾ സൃഷ്ടിക്കുന്നുവെന്നും ഈ മണ്ഡലങ്ങൾ ചാലകങ്ങളിൽ എങ്ങനെ ബലം പ്രയോഗിക്കുന്നുവെന്നും ഈ അധ്യായത്തിൽ നമ്മൾ പഠിക്കുന്നു.'
    },
    core: { en: '', ml: '' },
    blocks: [
      { type: 'h2', en: '1. Magnetic Field and Field Lines', ml: '1. കാന്തികമണ്ഡലവും ബലരേഖകളും' },
      { type: 'p', en: 'There is a **magnetic field** around a magnet. The imaginary lines used to visualise the magnetic field are called **magnetic field lines (flux lines)**.', ml: 'ഒരു കാന്തത്തിന് ചുറ്റും **കാന്തികമണ്ഡലം** ഉണ്ട്. കാന്തികമണ്ഡലത്തെ ചിത്രീകരിക്കാൻ ഉപയോഗിക്കുന്ന സാങ്കല്പിക രേഖകളാണ് **കാന്തിക ബലരേഖകൾ** അഥവാ **ഫ്ലക്സ് രേഖകൾ (Magnetic flux lines)**.' },
      { type: 'p', en: 'The direction of magnetic flux lines is from the **North Pole to the South Pole outside** the magnet. Inside the magnet, the direction of flux lines is from the **South Pole to the North Pole**.', ml: 'കാന്തത്തിന് പുറത്ത് കാന്തിക ബലരേഖകളുടെ ദിശ **ഉത്തര ധ്രുവത്തിൽ (North Pole) നിന്ന് ദക്ഷിണ ധ്രുവത്തിലേക്കാണ് (South Pole)**. കാന്തത്തിനുള്ളിൽ ബലരേഖകളുടെ ദിശ **ദക്ഷിണ ധ്രുവത്തിൽ നിന്ന് ഉത്തര ധ്രുവത്തിലേക്കാണ്**.' },
      
      { type: 'img', en: 'Magnetic Field Lines around a Bar Magnet', ml: 'ഒരു ബാർ കാന്തത്തിന് ചുറ്റുമുള്ള കാന്തിക ബലരേഖകൾ', customId: 'bar-magnet-simulation' },

      { type: 'table', tableData: {
        headers: [{en: 'Property', ml: 'സവിശേഷത'}, {en: 'Description', ml: 'വിവരണം'}],
        rows: [
          [{en: 'Continuity', ml: 'തുടർച്ച'}, {en: 'They form continuous closed loops.', ml: 'അവ അടഞ്ഞ തുടർച്ചയായ ലൂപ്പുകൾ ഉണ്ടാക്കുന്നു.'}],
          [{en: 'Intersection', ml: 'ഖണ്ഡിക്കൽ'}, {en: 'Field lines never intersect each other.', ml: 'ബലരേഖകൾ ഒരിക്കലും പരസ്പരം ഖണ്ഡിക്കില്ല.'}],
          [{en: 'Strength', ml: 'ശക്തി'}, {en: 'Closer lines indicate a stronger magnetic field.', ml: 'ബലരേഖകൾ അടുത്തടുത്തിരിക്കുന്നത് ശക്തമായ കാന്തികമണ്ഡലത്തെ സൂചിപ്പിക്കുന്നു.'}]
        ]
      }},

      { type: 'h2', en: '2. Magnetic Effect of Electric Current', ml: '2. വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം' },
      { type: 'p', en: 'A magnetic field is developed around a current-carrying conductor. This phenomenon is the **magnetic effect of electric current**. This was first discovered by the scientist **Christian Oersted**.', ml: 'വൈദ്യുതി കടന്നുപോകുന്ന ഒരു ചാലകത്തിന് ചുറ്റും ഒരു കാന്തികമണ്ഡലം രൂപപ്പെടുന്നു. ഈ പ്രതിഭാസമാണ് **വൈദ്യുത പ്രവാഹത്തിന്റെ കാന്തികഫലം**. ഇത് ആദ്യമായി കണ്ടെത്തിയത് **ക്രിസ്റ്റ്യൻ ഒയർസ്റ്റെഡ്** എന്ന ശാസ്ത്രജ്ഞനാണ്.' },
      { type: 'p', en: 'When the direction of current changes, the direction of the magnetic field also changes.', ml: 'വൈദ്യുത പ്രവാഹത്തിന്റെ ദിശ മാറുമ്പോൾ കാന്തികമണ്ഡലത്തിന്റെ ദിശയും മാറുന്നു.' },

      { type: 'h2', en: '3. Right Hand Thumb Rule', ml: '3. വലതുകൈ തള്ളവിരൽ നിയമം' },
      { type: 'p', en: 'This rule is used to find the **direction of the magnetic field** around a straight current-carrying conductor.', ml: 'വൈദ്യുതി കടന്നുപോകുന്ന ഒരു നേർചാലകത്തിന് ചുറ്റുമുള്ള **കാന്തികമണ്ഡലത്തിന്റെ ദിശ** കണ്ടെത്താനാണ് ഈ നിയമം ഉപയോഗിക്കുന്നത്.' },
      { type: 'p', en: '**Statement:** Imagine holding a current-carrying straight conductor with your right hand. If the thumb points in the direction of the current, the curled fingers will point in the direction of the magnetic field.', ml: '**നിയമം:** വൈദ്യുതി കടന്നുപോകുന്ന ഒരു നേർചാലകം വലതുകൈ കൊണ്ട് പിടിച്ചിരിക്കുന്നതായി സങ്കൽപ്പിക്കുക. തള്ളവിരൽ വൈദ്യുത പ്രവാഹത്തിന്റെ ദിശയെയാണ് സൂചിപ്പിക്കുന്നതെങ്കിൽ, ചാലകത്തെ ചുരുട്ടിപ്പിടിച്ചിരിക്കുന്ന വിരലുകൾ കാന്തികമണ്ഡലത്തിന്റെ ദിശയെ സൂചിപ്പിക്കുന്നു.' },
      
      { type: 'img', en: 'Right Hand Thumb Rule Illustration', ml: 'വലതുകൈ തള്ളവിരൽ നിയമം - ചിത്രം', customId: 'right-hand-thumb-rule-simulation' },

      { type: 'h2', en: '4. Magnetic Field of a Circular Loop', ml: '4. വൃത്താകാരത്തിലുള്ള ചാലകത്തിന്റെ കാന്തികമണ്ഡലം' },
      { type: 'p', en: 'When current passes through a circular loop, magnetic field lines are formed around it. They appear to enter through one face of the loop and leave through the other.', ml: 'ഒരു വൃത്താകാര ചാലകത്തിലൂടെ (circular loop) വൈദ്യുതി കടന്നുപോകുമ്പോൾ അതിനു ചുറ്റും കാന്തിക ബലരേഖകൾ ഉണ്ടാകുന്നു. അവ ലൂപ്പിന്റെ ഒരു വശത്തുകൂടി പ്രവേശിച്ച് മറുവശത്തുകൂടി പുറത്തേക്ക് വരുന്നതായി കാണപ്പെടുന്നു.' },

      { type: 'h2', en: '5. Solenoid', ml: '5. സോളിനോയ്ഡ്' },
      { type: 'p', en: 'A **solenoid** is an insulated wire wound in the shape of a **helix (spring shape)**. The magnetic field created by a current-carrying solenoid is similar to the magnetic field of a **bar magnet**.', ml: 'ഹെലിക്സ് (സ്പ്രിങ്) ആകൃതിയിൽ ചുറ്റിയെടുത്ത കവചിത കമ്പിയാണ് **സോളിനോയ്ഡ് (Solenoid)**. വൈദ്യുതി കടന്നുപോകുന്ന ഒരു സോളിനോയ്ഡ് സൃഷ്ടിക്കുന്ന കാന്തികമണ്ഡലം ഒരു **ബാർ കാന്തത്തിന്റെ** കാന്തികമണ്ഡലത്തിന് സമാനമാണ്.' },
      
      { type: 'img', en: 'Solenoid Polarity Simulation', ml: 'സോളിനോയ്ഡ് ധ്രുവത - സിമുലേഷൻ', customId: 'solenoid-simulation' },

      { type: 'h3', en: 'Polarity of a Solenoid', ml: 'സോളിനോയ്ഡിന്റെ ധ്രുവത' },
      { type: 'p', en: '• The end of the solenoid where the current flows in a **clockwise** direction acts as the **South Pole (S)**.\n• The end where the current flows in an **anti-clockwise** direction acts as the **North Pole (N)**.', ml: '• സോളിനോയ്ഡിന്റെ ഏത് അറ്റത്താണോ വൈദ്യുത പ്രവാഹം **പ്രദക്ഷിണ ദിശയിലുള്ളത് (Clockwise)**, ആ അറ്റം **ദക്ഷിണ ധ്രുവമായി (South Pole)** പ്രവർത്തിക്കുന്നു.\n• വൈദ്യുത പ്രവാഹം **അപ്രദക്ഷിണ ദിശയിലുള്ള (Anti-clockwise)** അറ്റം **ഉത്തര ധ്രുവമായി (North Pole)** പ്രവർത്തിക്കുന്നു.' },

      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Bar Magnet', ml: 'ബാർ കാന്തം'}, {en: 'Solenoid', ml: 'സോളിനോയ്ഡ്'}],
        rows: [
          [{en: 'Magnetism', ml: 'കാന്തികത'}, {en: 'Permanent', ml: 'സ്ഥിരമായത്'}, {en: 'Temporary (only when current flows)', ml: 'താൽക്കാലികം (വൈദ്യുതി ഉള്ളപ്പോൾ മാത്രം)'}],
          [{en: 'Polarity', ml: 'ധ്രുവത'}, {en: 'Fixed', ml: 'സ്ഥിരമാണ്'}, {en: 'Can be reversed by changing current direction', ml: 'വൈദ്യുത ദിശ മാറ്റി മാറ്റാൻ കഴിയും'}],
          [{en: 'Strength', ml: 'ശക്തി'}, {en: 'Fixed', ml: 'സ്ഥിരമാണ്'}, {en: 'Can be changed by varying current or turns', ml: 'വൈദ്യുതിയോ ചുറ്റുകളോ മാറ്റി മാറ്റാൻ കഴിയും'}]
        ]
      }},

      { type: 'h2', en: '6. Electromagnet', ml: '6. വൈദ്യുതകാന്തം' },
      { type: 'p', en: 'An **electromagnet** is formed by placing a **soft iron core** inside a solenoid and passing current through it.', ml: 'സോളിനോയ്ഡിനുള്ളിൽ **പച്ചയിരുമ്പ് (soft iron)** കോർ വെച്ച ശേഷം അതിലൂടെ വൈദ്യുതി കടത്തിവിടുമ്പോൾ അതൊരു **വൈദ്യുതകാന്തമായി** മാറുന്നു.' },
      { type: 'h3', en: 'Factors affecting the strength of an electromagnet:', ml: 'ഒരു വൈദ്യുതകാന്തത്തിന്റെ ശക്തിയെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ:' },
      { type: 'p', en: '1. **Number of turns** of the coiled wire (B ∝ n)\n2. **Strength of the electric current** (B ∝ I)\n3. The **material of the core** (Soft iron is best)', ml: '1. **കമ്പിച്ചുരുളുകളുടെ എണ്ണം** (B ∝ n)\n2. **വൈദ്യുത പ്രവാഹ തീവ്രത** (B ∝ I)\n3. **കോർ ആയി ഉപയോഗിക്കുന്ന പദാർത്ഥം** (പച്ചയിരുമ്പ് ഏറ്റവും അനുയോജ്യം)' },

      { type: 'h2', en: '7. Force on a Current-Carrying Conductor in a Magnetic Field (Motor Principle)', ml: '7. മോട്ടോർ തത്വം' },
      { type: 'p', en: '**Motor Principle:** A current-carrying conductor placed in a magnetic field experiences a force.', ml: '**മോട്ടോർ തത്വം:** കാന്തികമണ്ഡലത്തിൽ ഇരിക്കുന്നതും വൈദ്യുതി കടന്നുപോകുന്നതുമായ ഒരു ചാലകത്തിൽ ഒരു ബലം അനുഭവപ്പെടുന്നു. ഇതാണ് മോട്ടോർ തത്വം.' },
      { type: 'p', en: 'This force is **maximum** when the conductor is placed **perpendicular (90°)** to the magnetic field.', ml: 'ചാലകം കാന്തികമണ്ഡലത്തിന് **ലംബമായി (90°)** ഇരിക്കുമ്പോഴാണ് ഈ ബലം **ഏറ്റവും കൂടുതലായി** അനുഭവപ്പെടുന്നത്.' },

      { type: 'h2', en: '8. Fleming\'s Left Hand Rule', ml: '8. ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമം' },
      { type: 'p', en: 'This rule is used to find the **direction of movement (force)** of a current-carrying conductor placed in a magnetic field.', ml: 'കാന്തികമണ്ഡലത്തിൽ ഇരിക്കുന്നതും വൈദ്യുതി വഹിക്കുന്നതുമായ ഒരു ചാലകത്തിന്റെ **ചലനദിശ (അനുഭവപ്പെടുന്ന ബലത്തിന്റെ ദിശ)** കണ്ടെത്താനാണ് ഈ നിയമം ഉപയോഗിക്കുന്നത്.' },
      { type: 'p', en: '**Statement:** Hold the forefinger, middle finger, and thumb of the left hand in mutually perpendicular directions.', ml: '**നിയമം:** ഇടതുകൈയിലെ ചൂണ്ടുവിരൽ, നടുവിരൽ, തള്ളവിരൽ എന്നിവ പരസ്പരം ലംബമായി പിടിക്കുക.' },
      { type: 'p', en: '• **Forefinger:** Direction of the **Magnetic Field**.\n• **Middle finger:** Direction of the **Current**.\n• **Thumb:** Direction of **Motion** (Force).', ml: '• **ചൂണ്ടുവിരൽ:** **കാന്തികമണ്ഡലത്തിന്റെ** ദിശ.\n• **നടുവിരൽ:** **വൈദ്യുത പ്രവാഹത്തിന്റെ** ദിശ.\n• **തള്ളവിരൽ:** **ചലനദിശ** (ബലം).' },
      
      { type: 'img', en: 'Fleming\'s Left Hand Rule Simulation', ml: 'ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമം - സിമുലേഷൻ', customId: 'fleming-left-hand-simulation' },

      { type: 'h2', en: '9. Electric Motor', ml: '9. വൈദ്യുത മോട്ടോർ' },
      { type: 'p', en: 'An **electric motor** is a device that converts **electrical energy into mechanical energy**. It works on the basis of the **Motor Principle**.', ml: 'വൈദ്യുതോർജ്ജത്തെ **യാന്ത്രികോർജ്ജമാക്കി (Mechanical energy)** മാറ്റുന്ന ഉപകരണമാണ് **വൈദ്യുത മോട്ടോർ**. ഇത് **മോട്ടോർ തത്വത്തിന്റെ** അടിസ്ഥാനത്തിലാണ് പ്രവർത്തിക്കുന്നത്.' },
      
      { type: 'img', en: 'DC Motor Simulation', ml: 'DC മോട്ടോർ - സിമുലേഷൻ', customId: 'dc-motor-simulation' },

      { type: 'h3', en: 'Parts of a DC Motor', ml: 'DC മോട്ടോറിന്റെ ഭാഗങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Part', ml: 'ഭാഗം'}, {en: 'Function', ml: 'ധർമ്മം'}],
        rows: [
          [{en: 'Armature', ml: 'ആർമേച്ചർ'}, {en: 'Rotating metallic coil in the magnetic field.', ml: 'കാന്തികമണ്ഡലത്തിൽ കറങ്ങുന്ന കമ്പിച്ചുരുൾ.'}],
          [{en: 'Split rings', ml: 'സ്പ്ലിറ്റ് റിംഗുകൾ'}, {en: 'Acts as a commutator; reverses current direction every half rotation.', ml: 'കമ്യൂട്ടേറ്ററായി പ്രവർത്തിക്കുന്നു; ഓരോ അർദ്ധഭ്രമണത്തിലും വൈദ്യുത ദിശ മാറ്റുന്നു.'}],
          [{en: 'Carbon brushes', ml: 'കാർബൺ ബ്രഷുകൾ'}, {en: 'Maintains electrical contact with rotating split rings.', ml: 'സ്പ്ലിറ്റ് റിംഗുകളുമായി വൈദ്യുത സമ്പർക്കം നിലനിർത്തുന്നു.'}],
          [{en: 'Field Magnets', ml: 'കാന്തങ്ങൾ'}, {en: 'Provide the necessary magnetic field.', ml: 'ആവശ്യമായ കാന്തികമണ്ഡലം നൽകുന്നു.'}]
        ]
      }},

      { type: 'h2', en: '10. Moving Coil Loudspeaker', ml: '10. മൂവിങ് കോയിൽ ലൗഡ്സ്പീക്കർ' },
      { type: 'p', en: 'It is a device that converts **electrical energy (signals) into sound energy**. It also works on the **Motor Principle**.', ml: 'വൈദ്യുതോർജ്ജത്തെ (സിഗ്നലുകളെ) **ശബ്ദോർജ്ജമാക്കി** മാറ്റുന്ന ഉപകരണമാണിത്. ഇതും **മോട്ടോർ തത്വത്തിലാണ്** പ്രവർത്തിക്കുന്നത്.' },
      
      { type: 'img', en: 'Moving Coil Loudspeaker Simulation', ml: 'മൂവിങ് കോയിൽ ലൗഡ്സ്പീക്കർ - സിമുലേഷൻ', customId: 'loudspeaker-simulation' },

      { type: 'p', en: '• **Main parts:** Permanent magnet, Voice coil, Diaphragm.\n• **Working:** Electrical signals sent through the voice coil cause it to move back and forth rapidly in the magnetic field. This vibrates the attached diaphragm, producing sound.', ml: '• **പ്രധാന ഭാഗങ്ങൾ:** സ്ഥിരകാന്തം, വോയിസ് കോയിൽ, ഡയഫ്രം.\n• **പ്രവർത്തനം:** വോയിസ് കോയിലിലൂടെ കടന്നുപോകുന്ന വൈദ്യുത സിഗ്നലുകൾ അതിനെ കാന്തികമണ്ഡലത്തിൽ മുന്നോട്ടും പിന്നോട്ടും ചലിപ്പിക്കുന്നു. ഈ ചലനം ഡയഫ്രത്തെ കമ്പനം ചെയ്യിക്കുകയും ശബ്ദം പുറപ്പെടുവിക്കുകയും ചെയ്യുന്നു.' },

      { type: 'h2', en: 'Important Formulas', ml: 'പ്രധാന സമവാക്യങ്ങൾ' },
      { type: 'formula', en: 'Magnetic Field (B) ∝ Current (I)\nB ∝ n (Number of turns per unit length)', ml: 'കാന്തികമണ്ഡലം (B) ∝ വൈദ്യുത പ്രവാഹം (I)\nB ∝ n (യൂണിറ്റ് നീളത്തിലെ ചുറ്റുകളുടെ എണ്ണം)' },
      { type: 'formula', en: 'Force (F) = BIL sinθ\nWhere:\nB = Magnetic Field Strength\nI = Current\nL = Length of conductor\nθ = Angle between conductor and field', ml: 'ബലം (F) = BIL sinθ\nഇവിടെ:\nB = കാന്തികമണ്ഡല തീവ്രത\nI = വൈദ്യുത പ്രവാഹം\nL = ചാലകത്തിന്റെ നീളം\nθ = ചാലകവും മണ്ഡലവും തമ്മിലുള്ള കോൺ' },

      { type: 'h2', en: 'Graphs', ml: 'ഗ്രാഫുകൾ' },
      { type: 'p', en: '📈 **Magnetic Field (B) vs Current (I)**\n(A straight line passing through the origin, showing direct proportionality)', ml: '📈 **കാന്തികമണ്ഡലം (B) vs വൈദ്യുത പ്രവാഹം (I)**\n(നേർരേഖാ ഗ്രാഫ്, നേർ അനുപാതത്തെ സൂചിപ്പിക്കുന്നു)' },
      { type: 'p', en: '```\n B |\n   |    /\n   |   /\n   |  /\n   | /\n   |/__________ I\n```', ml: '```\n B |\n   |    /\n   |   /\n   |  /\n   | /\n   |/__________ I\n```' },

      { type: 'h2', en: 'Concept Map', ml: 'കൺസെപ്റ്റ് മാപ്പ്' },
      { type: 'p', en: 'Electric Current → Magnetic Field → Right Hand Thumb Rule → Solenoid → Electromagnet → Motor Principle → DC Motor → Loudspeaker', ml: 'വൈദ്യുത പ്രവാഹം → കാന്തികമണ്ഡലം → വലതുകൈ തള്ളവിരൽ നിയമം → സോളിനോയ്ഡ് → വൈദ്യുതകാന്തം → മോട്ടോർ തത്വം → DC മോട്ടോർ → ലൗഡ്സ്പീക്കർ' },
      
      { type: 'h2', en: '🎯 Quick Revision Box', ml: '🎯 ദ്രുത പുനരവലോകനം' },
      { type: 'table', tableData: {
        headers: [{en: 'Concept', ml: 'ആശയം'}, {en: 'Key Point', ml: 'പ്രധാന പോയിന്റ്'}],
        rows: [
          [{en: 'Oersted\'s Discovery', ml: 'ഒയർസ്റ്റെഡിന്റെ കണ്ടെത്തൽ'}, {en: 'Current creates magnetic field.', ml: 'വൈദ്യുതി കാന്തികമണ്ഡലം ഉണ്ടാക്കുന്നു.'}],
          [{en: 'Right Hand Thumb Rule', ml: 'വലതുകൈ തള്ളവിരൽ നിയമം'}, {en: 'Direction of Magnetic Field.', ml: 'കാന്തികമണ്ഡലത്തിന്റെ ദിശ.'}],
          [{en: 'Motor Principle', ml: 'മോട്ടോർ തത്വം'}, {en: 'Force on conductor in magnetic field.', ml: 'കാന്തികമണ്ഡലത്തിലെ ചാലകത്തിൽ അനുഭവപ്പെടുന്ന ബലം.'}],
          [{en: 'Fleming\'s Left Hand Rule', ml: 'ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമം'}, {en: 'Direction of Force/Motion.', ml: 'ബലത്തിന്റെ/ചലനത്തിന്റെ ദിശ.'}]
        ]
      }},

      { type: 'h2', en: '👨‍🏫 Teacher Notes', ml: '👨‍🏫 അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ' },
      { type: 'p', en: '• Emphasize the difference between Right Hand Thumb Rule (Field direction) and Fleming\'s Left Hand Rule (Force direction).\n• Use the Solenoid simulation to show how reversing current flips N and S poles.\n• Explain the role of Split Rings as a commutator in DC motors clearly.', ml: '• വലതുകൈ തള്ളവിരൽ നിയമവും (മണ്ഡലത്തിന്റെ ദിശ) ഫ്ലെമിങ്ങിന്റെ ഇടതുകൈ നിയമവും (ബലത്തിന്റെ ദിശ) തമ്മിലുള്ള വ്യത്യാസം ഊന്നിപ്പറയുക.\n• വൈദ്യുത ദിശ മാറുന്നത് എങ്ങനെ ധ്രുവങ്ങളെ മാറ്റുന്നു എന്ന് കാണിക്കാൻ സോളിനോയ്ഡ് സിമുലേഷൻ ഉപയോഗിക്കുക.\n• DC മോട്ടോറുകളിൽ സ്പ്ലിറ്റ് റിംഗുകൾ കമ്യൂട്ടേറ്ററായി പ്രവർത്തിക്കുന്ന വിധം വ്യക്തമായി വിശദീകരിക്കുക.' },

      { type: 'h2', en: '📝 Student Summary Sheet', ml: '📝 വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ ഷീറ്റ്' },
      { type: 'p', en: '1. **Magnetic Field Lines:** Imaginary lines, N to S outside, S to N inside.\n2. **Solenoid:** Helix-shaped coil; acts like a bar magnet.\n3. **Electromagnet:** Solenoid with soft iron core; strength depends on I and n.\n4. **Motor Principle:** Basis for Motors and Loudspeakers.\n5. **DC Motor:** Converts Electrical to Mechanical energy; uses Split Rings.\n6. **Loudspeaker:** Converts Electrical signals to Sound; uses Voice Coil.', ml: '1. **കാന്തിക ബലരേഖകൾ:** സാങ്കല്പിക രേഖകൾ, പുറത്ത് N-ൽ നിന്ന് S-ലേക്ക്, ഉള്ളിൽ S-ൽ നിന്ന് N-ലേക്ക്.\n2. **സോളിനോയ്ഡ്:** ഹെലിക്സ് ആകൃതിയിലുള്ള ചുരുൾ; ബാർ കാന്തം പോലെ പ്രവർത്തിക്കുന്നു.\n3. **വൈദ്യുതകാന്തം:** പച്ചയിരുമ്പ് കോർ ഉള്ള സോളിനോയ്ഡ്; ശക്തി I, n എന്നിവയെ ആശ്രയിച്ചിരിക്കുന്നു.\n4. **മോട്ടോർ തത്വം:** മോട്ടോറുകളുടെയും ലൗഡ്സ്പീക്കറുകളുടെയും അടിസ്ഥാനം.\n5. **DC മോട്ടോർ:** വൈദ്യുതോർജ്ജത്തെ യാന്ത്രികോർജ്ജമാക്കി മാറ്റുന്നു; സ്പ്ലിറ്റ് റിംഗുകൾ ഉപയോഗിക്കുന്നു.\n6. **ലൗഡ്സ്പീക്കർ:** വൈദ്യുത സിഗ്നലുകളെ ശബ്ദമാക്കി മാറ്റുന്നു; വോയിസ് കോയിൽ ഉപയോഗിക്കുന്നു.' }
    ],
  },
  glossary: [
    { term: { en: 'Magnetic Flux', ml: 'കാന്തിക ഫ്ലക്സ്' }, definition: { en: 'The total number of magnetic field lines passing through a surface.', ml: 'ഒരു പ്രതലത്തിലൂടെ കടന്നുപോകുന്ന ആകെ കാന്തിക ബലരേഖകളുടെ എണ്ണം.' } },
    { term: { en: 'Commutator', ml: 'കമ്യൂട്ടേറ്റർ' }, definition: { en: 'A device that reverses the direction of current in a circuit.', ml: 'സർക്യൂട്ടിലെ വൈദ്യുത പ്രവാഹത്തിന്റെ ദിശ മാറ്റുന്ന ഉപകരണം.' } },
    { term: { en: 'Armature', ml: 'ആർമേച്ചർ' }, definition: { en: 'The power-producing component of an electric machine.', ml: 'ഒരു വൈദ്യുത യന്ത്രത്തിലെ ഊർജ്ജം ഉത്പാദിപ്പിക്കുന്ന ഭാഗം.' } }
  ],
  quiz: [
  {
    "q_id": "u4_q1",
    "type": "mcq",
    "stem": {
      "en": "The angle of incidence equals the angle of reflection. This is:",
      "ml": "പതന കോണും, പ്രതിപതന കോണും തുല്യമാണ്. ഇത്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Snell's Law",
          "ml": "സ്നെൽ നിയമം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Law of Reflection",
          "ml": "പ്രതിപതന നിയമം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Law of Refraction",
          "ml": "അപവർത്തന നിയമം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Lens Law",
          "ml": "ലെൻസ് നിയമം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "This is the first law of reflection.",
      "ml": "ഇത് പ്രതിപതനത്തിന്റെ ഒന്നാം നിയമമാണ്."
    }
  },
  {
    "q_id": "u4_q2",
    "type": "mcq",
    "stem": {
      "en": "In a plane mirror, the image formed is:",
      "ml": "ഒരു പ്ലേൻ കണ്ണാടിയിൽ ഉണ്ടാകുന്ന പ്രതിബിംബം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Real, inverted, same size",
          "ml": "യഥാർത്ഥം, തലകീഴായത്, ഒരേ വലിപ്പം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Virtual, erect, laterally inverted",
          "ml": "മിഥ്യ, നിവർന്നത്, ലാറ്ററൽ ഇൻവേർഷൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Real, erect, magnified",
          "ml": "യഥാർത്ഥം, നിവർന്നത്, വലുത്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Virtual, inverted, diminished",
          "ml": "മിഥ്യ, തലകീഴായത്, ചെറുത്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "A plane mirror forms a virtual, erect, and laterally inverted image of the same size at the same distance behind the mirror.",
      "ml": "പ്ലേൻ കണ്ണാടിയിൽ ഒരേ വലിപ്പത്തിൽ, ഒരേ ദൂരത്തിൽ, ലാറ്ററൽ ഇൻവേഴ്ഷൻ ഉള്ള മിഥ്യ പ്രതിബിംബം ഉണ്ടാകുന്നു."
    }
  },
  {
    "q_id": "u4_q3",
    "type": "mcq",
    "stem": {
      "en": "A concave mirror is also known as:",
      "ml": "ഒരു കോൺകേവ് കണ്ണാടിയെ ഏത് പേരിൽ അറിയപ്പെടുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Diverging mirror",
          "ml": "വികേന്ദ്രീകരണ ദർപ്പണം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Plane mirror",
          "ml": "പ്ലേൻ ദർപ്പണം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Converging mirror",
          "ml": "കേന്ദ്രീകരണ ദർപ്പണം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Flat mirror",
          "ml": "ഫ്ലാറ്റ് ദർപ്പണം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Concave mirrors converge reflected rays to a focus.",
      "ml": "കോൺകേവ് കണ്ണാടി (ആനത ദർപ്പണം) പ്രകാശകിരണങ്ങളെ കേന്ദ്രീകരിക്കുന്നു."
    }
  },
  {
    "q_id": "u4_q4",
    "type": "mcq",
    "stem": {
      "en": "Convex mirrors are used as rear-view mirrors because:",
      "ml": "ഉത്തല ദർപ്പണങ്ങൾ പിൻ-കാഴ്ച ദർപ്പണമായി ഉപയോഗിക്കുന്നത് എന്തുകൊണ്ട്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "They form magnified images",
          "ml": "ഇവ വലുതാക്കിയ ചിത്രം ഉണ്ടാക്കുന്നു"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "They have a wide field of view",
          "ml": "ഇവ വിശാലമായ കാഴ്ചേ നൽകുന്നു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "They form real images",
          "ml": "ഇവ യഥാർത്ഥ ചിത്രം ഉണ്ടാക്കുന്നു"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "They are cheaper",
          "ml": "ഇവ വിലകുറഞ്ഞതാണ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Convex mirrors provide a wide field of view with virtual, erect, diminished images.",
      "ml": "ഉത്തല ദർപ്പണം വിശാലമായ വ്യൂ ഏരിയ ഉള്ള മിഥ്യ ചിത്രം ഉണ്ടാക്കുന്നതിനാൽ ഡ്രൈവിംഗ് ദർപ്പണമായി ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u4_q5",
    "type": "mcq",
    "stem": {
      "en": "Which mirror is used by dentists?",
      "ml": "ദന്ത ഡോക്ടർ ഏത് ദർപ്പണം ഉപയോഗിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Convex mirror",
          "ml": "ഉത്തല ദർപ്പണം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Plane mirror",
          "ml": "പ്ലേൻ ദർപ്പണം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Concave mirror",
          "ml": "ആനത ദർപ്പണം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Parabolic mirror",
          "ml": "പരാബോളിക് ദർപ്പണം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Concave mirrors magnify images when the object is close, used by dentists and ENT doctors.",
      "ml": "ആനത ദർപ്പണം വസ്തു F-ൽ നിന്ന് അടുത്ത് ഇരിക്കുമ്പോൾ വലുത്, നിവർന്ന, മിഥ്യ ചിത്രം ഉണ്ടാക്കുന്നതിനാൽ ദന്ത ഡോക്ടർ ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u4_q6",
    "type": "mcq",
    "stem": {
      "en": "Mirror formula is:",
      "ml": "ദർപ്പണ സമവാക്യം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "1/f = 1/v + 1/u",
          "ml": "1/f = 1/v + 1/u"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "1/f = 1/v - 1/u",
          "ml": "1/f = 1/v - 1/u"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "f = v + u",
          "ml": "f = v + u"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "f = v * u",
          "ml": "f = v * u"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "The mirror formula: 1/f = 1/v + 1/u.",
      "ml": "ദർപ്പണ സമവാക്യം: 1/f = 1/v + 1/u."
    }
  },
  {
    "q_id": "u4_q7",
    "type": "mcq",
    "stem": {
      "en": "The focal length of a mirror is:",
      "ml": "ഒരു ദർപ്പണത്തിന്റെ ഫോക്കസ് ദൂരം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Equal to radius of curvature",
          "ml": "ആരം ഒഫ് കർവേചർ ന് തുല്യം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Half the radius of curvature",
          "ml": "ആരത്തിന്റെ പകുതി"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Double the radius of curvature",
          "ml": "ആരത്തിന്റെ ഇരട്ടി"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Unrelated to radius",
          "ml": "ആരവുമായി ബന്ധമില്ലാത്തത്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "f = R/2, where R is the radius of curvature.",
      "ml": "f = R/2, ഇവിടെ R എന്നത് ദർപ്പണത്തിന്റെ ആരം ഒഫ് കർവേചർ ആണ്."
    }
  },
  {
    "q_id": "u4_q8",
    "type": "mcq",
    "stem": {
      "en": "When an object is placed at the centre of curvature (C) of a concave mirror, the image is:",
      "ml": "ഒരു ആനത ദർപ്പണത്തിന്റെ C-ൽ വസ്തു ഇരിക്കുമ്പോൾ ഉണ്ടാകുന്ന ചിത്രം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "At infinity, magnified",
          "ml": "അനന്തതയിൽ, വലുത്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "At F, same size",
          "ml": "F-ൽ, ഒരേ വലിപ്പം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "At C, same size, real, inverted",
          "ml": "C-ൽ, ഒരേ വലിപ്പം, യഥാർത്ഥം, തലകീഴായത്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Between F and C, virtual",
          "ml": "F-നും C-നും ഇടയിൽ, മിഥ്യ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "Object at C → Image at C, same size, real, inverted.",
      "ml": "C-ൽ ഇരിക്കുന്ന വസ്തുവിന്റെ ചിത്രം C-ൽ, ഒരേ വലിപ്പം, യഥാർത്ഥം, തലകീഴായ."
    }
  },
  {
    "q_id": "u4_q9",
    "type": "mcq",
    "stem": {
      "en": "A convex mirror always forms an image that is:",
      "ml": "ഉത്തല ദർപ്പണം എപ്പോഴും ഉണ്ടാക്കുന്ന ചിത്രം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Real, inverted, magnified",
          "ml": "യഥാർത്ഥം, തലകീഴായത്, വലുത്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Virtual, erect, diminished",
          "ml": "മിഥ്യ, നിവർന്നത്, ചെറുത്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Real, erect, same size",
          "ml": "യഥാർത്ഥം, നിവർന്നത്, ഒരേ വലിപ്പം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Virtual, inverted, magnified",
          "ml": "മിഥ്യ, തലകീഴായത്, വലുത്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Convex mirrors always form virtual, erect, diminished images.",
      "ml": "ഉത്തല ദർപ്പണം എപ്പോഴും മിഥ്യ, നിവർന്ന, ചെറിയ ചിത്രം ഉണ്ടാക്കുന്നു."
    }
  },
  {
    "q_id": "u4_q10",
    "type": "mcq",
    "stem": {
      "en": "Which of the following uses a concave mirror?",
      "ml": "ആനത ദർപ്പണം ഉപയോഗിക്കുന്ന ഉപകരണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Rear-view mirror in cars",
          "ml": "കാറിലെ പിൻ-കാഴ്ച ദർป്പണം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Periscope",
          "ml": "പെരിസ്കോപ്പ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Searchlight reflector",
          "ml": "സേർച്ച്ലൈറ്റ് ദർപ്പണം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Shop security mirror",
          "ml": "കടകളിലെ സുരക്ഷ ദർപ്പണം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "Searchlights, torch reflectors, and solar cookers use concave mirrors.",
      "ml": "സേർച്ച്ലൈറ്റ്, ടോർച്ച്, സോളാർ കുക്കർ എന്നിവയിൽ ആനത ദർപ്പണം ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u4_q11",
    "type": "mcq",
    "stem": {
      "en": "Object is placed beyond C of a concave mirror. The image is:",
      "ml": "ഒരു ആനത ദർപ്പണത്തിൽ C-ൻ അപ്പുറം വസ്തു ഇരിക്കുമ്പോൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Beyond C, real, inverted, diminished",
          "ml": "C-ൻ അപ്പുറം, യഥാർത്ഥം, തലകീഴായത്, ചെറുത്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "At F, real, inverted, very large",
          "ml": "F-ൽ, യഥാർത്ഥം, തലകീഴായത്, വളരെ വലുത്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "At C, same size",
          "ml": "C-ൽ, ഒരേ വലിപ്പം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Virtual, erect",
          "ml": "മിഥ്യ, നിവർന്നത്"
        }
      }
    ],
    "answer": "A",
    "difficulty": "hard",
    "explanation": {
      "en": "Beyond C → Image between F and C, real, inverted, diminished.",
      "ml": "C-ൽ നിന്ന് അകലേ ഇരിക്കുന്ന വസ്തുവിന്റെ ചിത്രം F-നും C-നും ഇടയിൽ, ചെറുത്, തലകീഴ്."
    }
  },
  {
    "q_id": "u4_q12",
    "type": "mcq",
    "stem": {
      "en": "What is magnification (m)?",
      "ml": "ആവർധനം (m) എന്നത്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "hi/ho = u/v",
          "ml": "hi/ho = u/v"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "hi/ho = -v/u",
          "ml": "hi/ho = -v/u"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "v - u",
          "ml": "v - u"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "f/u",
          "ml": "f/u"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "m = hi/ho = -v/u. Negative m means inverted image.",
      "ml": "m = -v/u. m നെഗറ്റീവ് ആണെങ്കിൽ ചിത്രം തലകീഴ് ആണ്."
    }
  },
  {
    "q_id": "u4_q13",
    "type": "mcq",
    "stem": {
      "en": "When m is positive, the image is:",
      "ml": "m പോസിറ്റീവ് ആകുമ്പോൾ ചിത്രം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Real and Inverted",
          "ml": "യഥാർത്ഥം, തലകീഴ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Virtual and Erect",
          "ml": "മിഥ്യ, നിവർന്നത്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Real and Erect",
          "ml": "യഥാർത്ഥം, നിവർന്നത്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Virtual and Inverted",
          "ml": "മിഥ്യ, തലകീഴ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "m > 0 means virtual and erect image.",
      "ml": "m > 0 → ചിത്രം മിഥ്യ, നിവർന്നത്."
    }
  },
  {
    "q_id": "u4_q14",
    "type": "mcq",
    "stem": {
      "en": "The pole of a mirror is:",
      "ml": "ദർപ്പണത്തിന്റെ ധ്രുവം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "The focal point",
          "ml": "ഫോക്കൽ പോയിന്റ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "The midpoint of the mirror surface",
          "ml": "ദർപ്പണ ഉപരിതലത്തിന്റെ മധ്യ ബിന്ദു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "The center of curvature",
          "ml": "ആരം ഒഫ് കർവേചർ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "The edge of the mirror",
          "ml": "ദർപ്പണത്തിന്റെ അറ്റം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "The pole (P) is the central point of the reflecting surface.",
      "ml": "ദർപ്പണ ഉപരിതലത്തിന്റെ മധ്യ ബിന്ദുവാണ് ധ്രുവം."
    }
  },
  {
    "q_id": "u4_q15",
    "type": "mcq",
    "stem": {
      "en": "What is the SI unit of power of a mirror?",
      "ml": "ഒരു ദർപ്പണത്തിന്റെ പവറിന്റെ SI യൂണിറ്റ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Dioptre",
          "ml": "ഡയോപ്റ്റർ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Metre",
          "ml": "മീറ്റർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Watt",
          "ml": "വാട്ട്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Hertz",
          "ml": "ഹെർട്സ്"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "Power of a mirror = 1/f, measured in dioptres — same as lenses.",
      "ml": "ദർപ്പണ പവർ ഡയോപ്റ്ററിൽ അളക്കുന്നു."
    }
  },
  {
    "q_id": "u4_q16",
    "type": "mcq",
    "stem": {
      "en": "New Cartesian sign convention: object distance (u) is always:",
      "ml": "സൈൻ കൺവെൻഷൻ പ്രകാരം വസ്തു ദൂരം (u):"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Positive",
          "ml": "പോസിറ്റീവ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Negative",
          "ml": "നെഗറ്റീവ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Zero",
          "ml": "പൂജ്യം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Can be positive or negative",
          "ml": "പോസിറ്റീവോ നെഗറ്റീവോ ആകാം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Object is always placed to the left (incident ray direction), so u is always negative.",
      "ml": "ഒരു ദർപ്പണത്തിൽ വസ്തു ദൂരം (u) എപ്പോഴും നെഗറ്റീവ് ആണ്."
    }
  },
  {
    "q_id": "u4_q17",
    "type": "mcq",
    "stem": {
      "en": "Total internal reflection occurs when light travels from:",
      "ml": "പൂർണ ആന്തരിക പ്രതിബിംബ (Total Internal Reflection) ഉണ്ടാകുന്ന ഘടനം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Rarer to denser medium above critical angle",
          "ml": "കൂടിയ ഒപ്റ്റിക്കൽ ഡെൻസിറ്റിയിൽ നിന്ന് കുറഞ്ഞതിലേക്ക്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Denser to rarer medium above critical angle",
          "ml": "കൂടിയ ഒപ്റ്റിക്കൽ ഡെൻസിറ്റിയിൽ നിന്ന് കുറഞ്ഞ ഡെൻസിറ്റിയിലേക്ക്, ക്രിട്ടിക്കൽ ആങ്കിൾ കവിക്കുമ്പോൾ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Rarer to denser medium at any angle",
          "ml": "ഏത് കോണിലും"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Light passing through vacuum",
          "ml": "ശൂന്യസ്ഥലത്തിലൂടെ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "TIR happens when light goes from denser to rarer medium at angles exceeding critical angle.",
      "ml": "ക്രിട്ടിക്കൽ ആങ്കിൾ കവിക്കുന്ന ഉൽദ്ദീപ്ത കോണിൽ ഒരു ഡെൻസ് മാധ്യമത്തിൽ നിന്ന് ലൈറ്ററിലേക്ക് പ്രകാശം ഒഴുകുമ്പോൾ ആണ് TIR ഉണ്ടാകുന്നത്."
    }
  },
  {
    "q_id": "u4_q18",
    "type": "mcq",
    "stem": {
      "en": "Which of the following is an application of total internal reflection?",
      "ml": "ടോട്ടൽ ഇന്റേണൽ റിഫ്ലക്ഷൻ ഉപയോഗിക്കുന്ന ഒന്ന്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Periscope",
          "ml": "പെരിസ്കോപ്പ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Optical fibre",
          "ml": "ഒപ്റ്റിക്കൽ ഫൈബർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Concave lens",
          "ml": "ആനത ദർപ്പണം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Solar panel",
          "ml": "സോളാർ പാനൽ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Optical fibres use TIR to send light/data through flexible glass strands.",
      "ml": "ഒപ്റ്റിക്കൽ ഫൈബർ ടോട്ടൽ ഇന്റേണൽ റിഫ്ലക്ഷൻ ഉപയോഗിച്ചാണ് പ്രകാശ സിഗ്നലുകൾ കൊണ്ടുപോകുന്നത്."
    }
  },
  {
    "q_id": "u4_q19",
    "type": "mcq",
    "stem": {
      "en": "The principal axis of a mirror is:",
      "ml": "ദർപ്പണത്തിന്റെ മുഖ്യ അക്ഷം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "The reflecting surface",
          "ml": "പ്രതിഫലന ഉപരിതലം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "The imaginary line through the pole/C perpendicular to the mirror",
          "ml": "ദർപ്പണ ഉപരിതലത്തോട് ലംബമായി, P-ലൂടെ കടന്നുപോകുന്ന സാങ്കൽപ്പിക രേഖ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "The edge of the mirror",
          "ml": "ദർപ്പണത്തിന്റെ ഇടം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "The focus",
          "ml": "ഫോക്കസ് ബിന്ദു"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "The principal axis is an imaginary line perpendicular to the mirror through its pole.",
      "ml": "ദർപ്പണ ഉപരിതലത്തോട് ലംബമായ സാങ്കൽപ്പിക രേഖ."
    }
  },
  {
    "q_id": "u4_q20",
    "type": "mcq",
    "stem": {
      "en": "In the sign convention, all distances measured opposite to incident ray are:",
      "ml": "ചിഹ്ന നിയമ പ്രകാരം, പതന കിരണത്തിന് എതിർ ദിശയിൽ അളക്കുന്ന ദൂരങ്ങൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Positive",
          "ml": "പോസിറ്റീവ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Negative",
          "ml": "നെഗറ്റീവ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Zero",
          "ml": "പൂജ്യം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Imaginary",
          "ml": "കൽപ്പിതം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Distances against the direction of incident light are taken as negative.",
      "ml": "പതന കിരണ ദിശക്ക് എതിർ ദിശ നെഗറ്റീവ്."
    }
  },
  {
    "q_id": "u4_q21",
    "type": "mcq",
    "stem": {
      "en": "When the object is at infinity, a concave mirror forms an image:",
      "ml": "ആനത ദർപ്പണത്തിൽ വസ്തു അനന്തതയിൽ ഇരിക്കുമ്പോൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "At C, equal size",
          "ml": "C-ൽ, ഒരേ വലിപ്പം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "At F, very small, real, inverted",
          "ml": "F-ൽ, വളരെ ചെറുത്, യഥാർത്ഥം, തലകീഴ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Between F and pole",
          "ml": "F-നും P-നും ഇടയിൽ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Behind the mirror",
          "ml": "ദർപ്പണത്തിന്റെ പിറകിൽ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Object at infinity → Image at F, tiny, real, inverted.",
      "ml": "അനന്തതയിൽ ഉള്ള വസ്തുവിന്റെ ചിത്രം F-ൽ, ചെറുത്, യഥാർത്ഥ, തലകീഴ്."
    }
  },
  {
    "q_id": "u4_q22",
    "type": "mcq",
    "stem": {
      "en": "What does the radius of curvature of a mirror mean?",
      "ml": "ദർപ്പണത്തിന്റെ ആരം ഒഫ് കർവേചർ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Distance from pole to focus",
          "ml": "ധ്രുവം മുതൽ ഫോക്കസ് വരെ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Distance from pole to the centre of the sphere the mirror is part of",
          "ml": "ദർപ്പണം ഒരു ഭാഗമായ ഗോളത്തിന്റെ കേന്ദ്രത്തിലേക്കുള്ള ദൂരം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "The total length of the mirror",
          "ml": "ദർപ്പണത്തിന്റെ ആകെ നീളം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "The aperture of mirror",
          "ml": "ദർപ്പണ ദ്വാരത്തിന്റെ വലിപ്പം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "R = distance from pole to centre of the sphere the mirror is a part of.",
      "ml": "ദർപ്പണം ഒരു ഭാഗമായ ഗോളത്തിന്റെ ആരം ആണ് R."
    }
  },
  {
    "q_id": "u4_q23",
    "type": "mcq",
    "stem": {
      "en": "A concave mirror's focal length is 15 cm. Its radius of curvature is:",
      "ml": "ആനത ദർപ്പണത്തിന്റെ ഫോക്കസ് ദൂരം 15 cm ആണെങ്കിൽ ആരം ഒഫ് കർവേചർ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "7.5 cm",
          "ml": "7.5 cm"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "15 cm",
          "ml": "15 cm"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "30 cm",
          "ml": "30 cm"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "45 cm",
          "ml": "45 cm"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "R = 2f = 2 × 15 = 30 cm.",
      "ml": "R = 2f = 2 × 15 = 30 cm."
    }
  },
  {
    "q_id": "u4_q24",
    "type": "mcq",
    "stem": {
      "en": "What happens to a ray of light passing through the principal focus of a concave mirror after reflection?",
      "ml": "ആനത ദർപ്പണത്തിന്റെ F-ലൂടെ കടന്നുവരുന്ന കിരണം പ്രതിഫലന ശേഷം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Reflects back through F",
          "ml": "F-ലൂടെ തിരകെ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Passes through C",
          "ml": "C-ലൂടെ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Reflects parallel to principal axis",
          "ml": "മുഖ്യ അക്ഷത്തിന് സമാന്തരമായി"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Reflects at random angle",
          "ml": "ക്രമരഹിതമായ കോണിൽ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "hard",
    "explanation": {
      "en": "A ray through F reflects parallel to the principal axis.",
      "ml": "F-ലൂടെ കടന്നുവരുന്ന കിരണം, പ്രതിഫലന ശേഷം മുഖ്യ അക്ഷത്തിന് സമാന്തരമായി സഞ്ചരിക്കുന്നു."
    }
  },
  {
    "q_id": "u4_q25",
    "type": "mcq",
    "stem": {
      "en": "Reflection through a curved mirror differs between concave and convex in that:",
      "ml": "ആനത ദർപ്പണവും ഉത്തല ദർപ്പണവും പ്രതിഫലനത്തിൽ വ്യത്യാസം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Only concave mirrors follow laws of reflection",
          "ml": "ആനത ദർപ്പണം മാത്രം നിയമം പാലിക്കുന്നു"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Concave converges rays, convex diverges rays",
          "ml": "ആനത കേന്ദ്രീകരിക്കുന്നു, ഉത്തല വികേന്ദ്രീകരിക്കുന്നു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Convex mirror can't form images",
          "ml": "ഉത്തല ദർപ്പണം ചിത്രം ഉണ്ടാക്കില്ല"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "There is no difference",
          "ml": "വ്യത്യാസം ഇല്ല"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Concave = converging mirror, Convex = diverging mirror.",
      "ml": "ആനത ദർപ്പണം (Concave) = കേന്ദ്രീകരണ ദർപ്പണം, ഉത്തല (Convex) = വികേന്ദ്രീകരണ ദർപ്പണം."
    }
  },
  {
    "q_id": "u4_q26",
    "type": "mcq",
    "stem": {
      "en": "In a periscope, plane mirrors are arranged at:",
      "ml": "ഒരു പെരിസ്കോപ്പിൽ ദർപ്പണങ്ങൾ ഏത് കോണിൽ ഇരിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "30°",
          "ml": "30°"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "45°",
          "ml": "45°"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "60°",
          "ml": "60°"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "90°",
          "ml": "90°"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Plane mirrors in a periscope are arranged at 45° to the principal axis.",
      "ml": "ദർപ്പണങ്ങൾ 45° കോണിൽ ഇരിക്കുന്നതിനാൽ ലംബ ദർശനം (vertical vision) സാദ്ധ്യമാകുന്നു."
    }
  }
]
} as const;
