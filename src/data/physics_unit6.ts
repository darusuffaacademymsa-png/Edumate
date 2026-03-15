import { Lesson } from './curriculum';

export const physicsUnit6: Lesson = {
  id: 'sc-phy-10-unit-6',
  title: {
    en: 'Chapter 6: Electromagnetic Induction in Daily Life',
    ml: 'അധ്യായം 6: നിത്യജീവിതത്തിൽ വൈദ്യുതകാന്തിക പ്രേരണം'
  },
  estimated_time_mins: 60,
  videos: [
    {
      title: "Quick revision (Exam oriented)",
      url: "https://www.youtube.com/watch?v=QkWalWhZI7g"
    }
  ],
  learning_objectives: [
    {
      id: 'lo1',
      text: {
        en: 'Understand the phenomenon of electromagnetic induction and the factors affecting induced EMF.',
        ml: 'വൈദ്യുതകാന്തിക പ്രേരണം എന്ന പ്രതിഭാസവും പ്രേരിത ഇ.എം.എഫിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങളും മനസ്സിലാക്കുക.'
      }
    },
    {
      id: 'lo2',
      text: {
        en: 'Explain the working principle and parts of AC and DC generators.',
        ml: 'AC, DC ജനറേറ്ററുകളുടെ പ്രവർത്തന തത്വവും ഭാഗങ്ങളും വിശദീകരിക്കുക.'
      }
    },
    {
      id: 'lo3',
      text: {
        en: 'Differentiate between mutual induction and self-induction.',
        ml: 'മ്യൂച്വൽ ഇൻഡക്ഷനും സെൽഫ് ഇൻഡക്ഷനും തമ്മിലുള്ള വ്യത്യാസം മനസ്സിലാക്കുക.'
      }
    },
    {
      id: 'lo4',
      text: {
        en: 'Understand the working of step-up and step-down transformers.',
        ml: 'സ്റ്റെപ്പ് അപ്പ്, സ്റ്റെപ്പ് ഡൗൺ ട്രാൻസ്ഫോർമറുകളുടെ പ്രവർത്തനം മനസ്സിലാക്കുക.'
      }
    },
    {
      id: 'lo5',
      text: {
        en: 'Familiarize with household electrification components and safety measures like earthing, ELCB, and MCB.',
        ml: 'ഗാർഹിക വൈദ്യുതീകരണ ഘടകങ്ങളും എർത്തിംഗ്, ELCB, MCB തുടങ്ങിയ സുരക്ഷാ സംവിധാനങ്ങളും പരിചയപ്പെടുക.'
      }
    }
  ],
  content: {
    intro: {
      en: 'This chapter explores how electricity is generated using magnetism through electromagnetic induction, the working of generators and transformers, and how electricity is safely distributed in our homes.',
      ml: 'വൈദ്യുതകാന്തിക പ്രേരണത്തിലൂടെ കാന്തികശക്തി ഉപയോഗിച്ച് എങ്ങനെ വൈദ്യുതി ഉത്പാദിപ്പിക്കുന്നുവെന്നും, ജനറേറ്ററുകളുടെയും ട്രാൻസ്ഫോർമറുകളുടെയും പ്രവർത്തനവും, നമ്മുടെ വീടുകളിൽ വൈദ്യുതി സുരക്ഷിതമായി വിതരണം ചെയ്യുന്നതെങ്ങനെയെന്നും ഈ അധ്യായം വിശദീകരിക്കുന്നു.'
    },
    core: {
      en: '',
      ml: ''
    },
    blocks: [
      {
        type: 'h2',
        en: '1. Electromagnetic Induction',
        ml: '1. വൈദ്യുതകാന്തിക പ്രേരണം'
      },
      {
        type: 'p',
        en: 'Whenever there is a relative motion between a magnet and a coil, an electromotive force (EMF) is induced in the coil. This phenomenon is called electromagnetic induction.',
        ml: 'ഒരു കാന്തവും കമ്പിച്ചുരുളും തമ്മിൽ ആപേക്ഷിക ചലനം ഉണ്ടാകുമ്പോൾ കമ്പിച്ചുരുളിൽ ഒരു ഇ.എം.എഫ് (EMF) പ്രേരിതമാകുന്നു. ഈ പ്രതിഭാസമാണ് വൈദ്യുതകാന്തിക പ്രേരണം.'
      },
      {
        type: 'p',
        en: 'The current formed due to this induced EMF is called induced current. A galvanometer is used to detect the presence and direction of minute electrical currents in a circuit. This principle was discovered by the scientist Michael Faraday.',
        ml: 'ഈ പ്രേരിത ഇ.എം.എഫ് മൂലം ഉണ്ടാകുന്ന വൈദ്യുത പ്രവാഹത്തെ പ്രേരിത വൈദ്യുത പ്രവാഹം (Induced current) എന്ന് വിളിക്കുന്നു. ഒരു സർക്യൂട്ടിലെ വളരെ ചെറിയ വൈദ്യുത പ്രവാഹത്തിന്റെ സാന്നിധ്യവും ദിശയും തിരിച്ചറിയാൻ ഗാൽവനോമീറ്റർ ഉപയോഗിക്കുന്നു. ഈ തത്വം കണ്ടെത്തിയത് മൈക്കൽ ഫാരഡെ എന്ന ശാസ്ത്രജ്ഞനാണ്.'
      },
      {
        type: 'h3',
        en: 'Factors Affecting Induced EMF',
        ml: 'പ്രേരിത ഇ.എം.എഫിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ'
      },
      {
        type: 'p',
        en: 'The magnitude of the induced EMF depends on:\n1. Number of turns of the coiled wire.\n2. Strength of the magnetic field.\n3. Speed of relative motion between the magnet and the coil.',
        ml: 'പ്രേരിത ഇ.എം.എഫിന്റെ അളവിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ:\n1. കമ്പിച്ചുരുളുകളുടെ എണ്ണം.\n2. കാന്തികമണ്ഡലത്തിന്റെ ശക്തി.\n3. കാന്തവും കമ്പിച്ചുരുളും തമ്മിലുള്ള ആപേക്ഷിക ചലനത്തിന്റെ വേഗത.'
      },
      {
        type: 'h2',
        en: '2. Electric Generators',
        ml: '2. വൈദ്യുത ജനറേറ്ററുകൾ'
      },
      {
        type: 'p',
        en: 'A generator is a device that converts mechanical energy into electrical energy using the principle of electromagnetic induction.',
        ml: 'വൈദ്യുതകാന്തിക പ്രേരണം എന്ന തത്വത്തിന്റെ അടിസ്ഥാനത്തിൽ യാന്ത്രികോർജ്ജത്തെ വൈദ്യുതോർജ്ജമാക്കി മാറ്റുന്ന ഉപകരണമാണ് ജനറേറ്റർ.'
      },
      {
        type: 'h3',
        en: 'AC Generator',
        ml: 'AC ജനറേറ്റർ'
      },
      {
        type: 'p',
        en: 'It produces Alternating Current (AC), which changes its direction continuously. Main Parts:\n• Field Magnet: Provides the required magnetic field.\n• Armature: An arrangement of insulated conducting wire wound over a soft iron core. It rotates in the magnetic field.\n• Slip Rings: Two metal rings welded to the ends of the armature. They rotate along with the armature.\n• Brushes: Carbon brushes make sliding contact with the slip rings to pass current to the external circuit.',
        ml: 'ഇതിൽ നിന്നും ലഭിക്കുന്നത് ദിശ തുടർച്ചയായി മാറിക്കൊണ്ടിരിക്കുന്ന പ്രത്യാവർത്തി ധാര (Alternating Current - AC) ആണ്. പ്രധാന ഭാഗങ്ങൾ:\n• ഫീൽഡ് കാന്തം: ആവശ്യമായ കാന്തികമണ്ഡലം നൽകുന്നു.\n• ആർമേച്ചർ: പച്ചയിരുമ്പ് കോറിന് മുകളിൽ ചുറ്റിയ കവചിത കമ്പിച്ചുരുൾ. ഇത് കാന്തികമണ്ഡലത്തിൽ കിടന്ന് കറങ്ങുന്നു.\n• സ്ലിപ്പ് റിംഗുകൾ: ആർമേച്ചറിന്റെ രണ്ടറ്റങ്ങളിലായി ബന്ധിപ്പിച്ചിട്ടുള്ള ലോഹവളയങ്ങൾ. ഇവ ആർമേച്ചറിനൊപ്പം കറങ്ങുന്നു.\n• ബ്രഷുകൾ: സ്ലിപ്പ് റിംഗുകളുമായി സമ്പർക്കത്തിലിരുന്ന് ബാഹ്യ സർക്യൂട്ടിലേക്ക് വൈദ്യുതി കടത്തിവിടുന്ന കാർബൺ ബ്രഷുകൾ.'
      },
      {
        type: 'h3',
        en: 'DC Generator',
        ml: 'DC ജനറേറ്റർ'
      },
      {
        type: 'p',
        en: 'It produces Direct Current (DC), which flows only in one direction. Instead of slip rings, a split ring commutator is used in a DC generator. The split rings change the connection to the brushes every half rotation, ensuring the current in the external circuit flows in a single direction.',
        ml: 'ഇതിൽ നിന്നും ലഭിക്കുന്നത് ഒരേ ദിശയിൽ മാത്രം പ്രവഹിക്കുന്ന നേർധാര (Direct Current - DC) ആണ്. DC ജനറേറ്ററിൽ സ്ലിപ്പ് റിംഗുകൾക്ക് പകരം സ്പ്ലിറ്റ് റിംഗ് കമ്യൂട്ടേറ്ററാണ് ഉപയോഗിക്കുന്നത്. ഓരോ അർദ്ധഭ്രമണത്തിലും സ്പ്ലിറ്റ് റിംഗുകൾ ബ്രഷുകളുമായുള്ള സമ്പർക്കം മാറ്റുന്നതിനാൽ ബാഹ്യ സർക്യൂട്ടിൽ എപ്പോഴും ഒരേ ദിശയിലുള്ള വൈദ്യുത പ്രവാഹം ലഭിക്കുന്നു.'
      },
      {
        type: 'img',
        customId: 'generator-simulation',
        en: 'AC and DC Generator Simulation',
        ml: 'AC, DC ജനറേറ്റർ സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: '3. Mutual Induction',
        ml: '3. മ്യൂച്വൽ ഇൻഡക്ഷൻ (പരസ്പര പ്രേരണം)'
      },
      {
        type: 'p',
        en: 'Consider two coils placed side by side. The coil to which the voltage is supplied is the primary coil, and the coil in which EMF is induced is the secondary coil. Mutual Induction is the phenomenon where a change in current in the primary coil induces an EMF in the secondary coil.',
        ml: 'അടുത്തടുത്ത് വെച്ചിരിക്കുന്ന രണ്ട് കമ്പിച്ചുരുളുകളിൽ, വോൾട്ടേജ് നൽകുന്ന കമ്പിച്ചുരുളിനെ പ്രൈമറി എന്നും, ഇ.എം.എഫ് പ്രേരിതമാകുന്ന കമ്പിച്ചുരുളിനെ സെക്കൻഡറി എന്നും വിളിക്കുന്നു. പ്രൈമറി കോയിലിലെ വൈദ്യുത പ്രവാഹത്തിൽ മാറ്റം ഉണ്ടാകുമ്പോൾ, സെക്കൻഡറി കോയിലിൽ ഒരു ഇ.എം.എഫ് പ്രേരിതമാകുന്ന പ്രതിഭാസമാണ് മ്യൂച്വൽ ഇൻഡക്ഷൻ.'
      },
      {
        type: 'h2',
        en: '4. Transformer',
        ml: '4. ട്രാൻസ്ഫോർമർ'
      },
      {
        type: 'p',
        en: 'A transformer is a device used to increase or decrease AC voltage without power loss. It works on the principle of mutual induction. Transformers only work with AC, not DC. DC cannot produce a continuously changing magnetic field.',
        ml: 'പവർ നഷ്ടമില്ലാതെ AC വോൾട്ടേജ് കൂട്ടാനോ കുറയ്ക്കാനോ ഉപയോഗിക്കുന്ന ഉപകരണമാണ് ട്രാൻസ്ഫോർമർ. ഇത് മ്യൂച്വൽ ഇൻഡക്ഷൻ തത്വത്തിലാണ് പ്രവർത്തിക്കുന്നത്. ട്രാൻസ്ഫോർമറുകൾ AC യിൽ മാത്രമേ പ്രവർത്തിക്കൂ, DC യിൽ പ്രവർത്തിക്കില്ല. കാരണം DC യ്ക്ക് തുടർച്ചയായി മാറിക്കൊണ്ടിരിക്കുന്ന കാന്തികമണ്ഡലം സൃഷ്ടിക്കാൻ കഴിയില്ല.'
      },
      {
        type: 'table',
        tableData: {
          headers: [
            { en: 'Step-up Transformer', ml: 'സ്റ്റെപ്പ് അപ്പ് ട്രാൻസ്ഫോർമർ' },
            { en: 'Step-down Transformer', ml: 'സ്റ്റെപ്പ് ഡൗൺ ട്രാൻസ്ഫോർമർ' }
          ],
          rows: [
            [
              { en: 'Increases AC voltage', ml: 'AC വോൾട്ടേജ് കൂട്ടുന്നു' },
              { en: 'Decreases AC voltage', ml: 'AC വോൾട്ടേജ് കുറയ്ക്കുന്നു' }
            ],
            [
              { en: 'Number of turns is greater in the secondary coil (Ns > Np)', ml: 'സെക്കൻഡറി ചുറ്റുകളുടെ എണ്ണം കൂടുതലാണ് (Ns > Np)' },
              { en: 'Number of turns is greater in the primary coil (Np > Ns)', ml: 'പ്രൈമറി ചുറ്റുകളുടെ എണ്ണം കൂടുതലാണ് (Np > Ns)' }
            ],
            [
              { en: 'Secondary wire is thinner, Primary wire is thicker', ml: 'സെക്കൻഡറിയിൽ വണ്ണം കുറഞ്ഞ കമ്പിയും പ്രൈമറിയിൽ വണ്ണം കൂടിയ കമ്പിയും' },
              { en: 'Secondary wire is thicker, Primary wire is thinner', ml: 'സെക്കൻഡറിയിൽ വണ്ണം കൂടിയ കമ്പിയും പ്രൈമറിയിൽ വണ്ണം കുറഞ്ഞ കമ്പിയും' }
            ],
            [
              { en: 'Decreases the current', ml: 'വൈദ്യുത പ്രവാഹം കുറയ്ക്കുന്നു' },
              { en: 'Increases the current', ml: 'വൈദ്യുത പ്രവാഹം കൂട്ടുന്നു' }
            ]
          ]
        }
      },
      {
        type: 'formula',
        en: 'Vs / Vp = Ns / Np\n(Vs = Secondary Voltage, Vp = Primary Voltage, Ns = Secondary turns, Np = Primary turns)',
        ml: 'Vs / Vp = Ns / Np\n(Vs = സെക്കൻഡറി വോൾട്ടേജ്, Vp = പ്രൈമറി വോൾട്ടേജ്, Ns = സെക്കൻഡറി ചുറ്റുകൾ, Np = പ്രൈമറി ചുറ്റുകൾ)'
      },
      {
        type: 'formula',
        en: 'In an ideal transformer: Vp × Ip = Vs × Is (Input Power = Output Power)',
        ml: 'ഒരു ആദർശ ട്രാൻസ്ഫോർമറിൽ: Vp × Ip = Vs × Is (ഇൻപുട്ട് പവർ = ഔട്ട്പുട്ട് പവർ)'
      },
      {
        type: 'img',
        customId: 'transformer-simulation',
        en: 'Transformer Simulation',
        ml: 'ട്രാൻസ്ഫോർമർ സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: '5. Self Induction and Inductor',
        ml: '5. സെൽഫ് ഇൻഡക്ഷനും ഇൻഡക്റ്ററും'
      },
      {
        type: 'p',
        en: 'Self Induction: When the current flowing through a coil changes, the magnetic flux around it changes, inducing an EMF in the same coil. This is self-induction.',
        ml: 'സെൽഫ് ഇൻഡക്ഷൻ: ഒരു കമ്പിച്ചുരുളിലൂടെയുള്ള വൈദ്യുത പ്രവാഹത്തിൽ മാറ്റമുണ്ടാകുമ്പോൾ അതിനുചുറ്റുമുള്ള കാന്തിക ഫ്ലക്സിൽ മാറ്റമുണ്ടാകുകയും, അത് ആ കമ്പിച്ചുരുളിൽ തന്നെ ഒരു ഇ.എം.എഫ് പ്രേരിതമാക്കാൻ കാരണമാകുകയും ചെയ്യുന്നു. ഈ പ്രതിഭാസമാണ് സെൽഫ് ഇൻഡക്ഷൻ.'
      },
      {
        type: 'p',
        en: 'Inductor: An inductor is a component made by winding insulated copper wire over a soft iron core. It works on the principle of self-induction. Use: It is used to control AC current in a circuit without causing power loss (unlike a resistor which dissipates power as heat).',
        ml: 'ഇൻഡക്റ്റർ: പച്ചയിരുമ്പ് കോറിന് മുകളിൽ കവചിത ചെമ്പുകമ്പി ചുറ്റിയുണ്ടാക്കുന്ന ഉപകരണമാണ് ഇൻഡക്റ്റർ. ഇത് സെൽഫ് ഇൻഡക്ഷൻ തത്വത്തിലാണ് പ്രവർത്തിക്കുന്നത്. ഉപയോഗം: പവർ നഷ്ടം (താപമായി) ഉണ്ടാക്കാതെ ഒരു സർക്യൂട്ടിലെ AC പ്രവാഹത്തെ നിയന്ത്രിക്കാൻ ഇത് ഉപയോഗിക്കുന്നു.'
      },
      {
        type: 'h2',
        en: '6. Household Electrification',
        ml: '6. ഗാർഹിക വൈദ്യുതീകരണം'
      },
      {
        type: 'p',
        en: 'Electricity from the electric pole reaches our home through two wires: Phase line and Neutral line. Components in sequence: Watt-hour meter → Main switch → ELCB (Earth Leakage Circuit Breaker) / RCCB → MCB (Miniature Circuit Breaker) → Branch circuits.',
        ml: 'ഇലക്ട്രിക് പോസ്റ്റിൽ നിന്നും ഫേസ്, ന്യൂട്രൽ എന്നീ രണ്ട് ലൈനുകളിലൂടെയാണ് വൈദ്യുതി വീടുകളിൽ എത്തുന്നത്. ഉപകരണങ്ങളുടെ ക്രമം: വാട്ട്-അവർ മീറ്റർ → മെയിൻ സ്വിച്ച് → ഇ.എൽ.സി.ബി / ആർ.സി.സി.ബി → എം.സി.ബി → ബ്രാഞ്ച് സർക്യൂട്ടുകൾ.'
      },
      {
        type: 'p',
        en: 'Main Switch: Used to disconnect the entire household circuit from the power supply when needed. ELCB / RCCB: Automatically cuts off the power supply during an earth leakage or electric shock to ensure human safety. MCB: Automatically breaks the circuit if short circuit or overloading occurs.',
        ml: 'മെയിൻ സ്വിച്ച്: ആവശ്യമുള്ളപ്പോൾ വീടിന്റെ മുഴുവൻ സർക്യൂട്ടിലേക്കുമുള്ള വൈദ്യുത പ്രവാഹം വിച്ഛേദിക്കാൻ ഉപയോഗിക്കുന്നു. ഇ.എൽ.സി.ബി: ഷോക്കോ എർത്ത് ചോർച്ചയോ ഉണ്ടായാൽ സ്വയം സർക്യൂട്ട് വിച്ഛേദിച്ച് സുരക്ഷ ഉറപ്പാക്കുന്നു. എം.സി.ബി: ഷോർട്ട് സർക്യൂട്ടോ ഓവർലോഡിംഗോ ഉണ്ടായാൽ തനിയെ സർക്യൂട്ട് വിച്ഛേദിക്കുന്നു.'
      },
      {
        type: 'h3',
        en: 'Earthing and 3-Pin Plug',
        ml: 'എർത്തിംഗും ത്രീ പിൻ പ്ലഗും'
      },
      {
        type: 'p',
        en: 'Earthing: To prevent electric shocks from metallic bodies of appliances, the metallic body is connected to the earth. This is earthing. 3-Pin Plug: Has Earth (E), Live/Phase (L), and Neutral (N) pins.',
        ml: 'എർത്തിംഗ്: ലോഹനിർമ്മിതമായ ഉപകരണങ്ങളിൽ നിന്ന് ഷോക്കേൽക്കുന്നത് ഒഴിവാക്കാൻ ഉപകരണത്തിന്റെ പുറംഭാഗം എർത്തുമായി ബന്ധിപ്പിക്കുന്നു. ഇതാണ് എർത്തിംഗ്. ത്രീ പിൻ പ്ലഗ്: ഇതിൽ എർത്ത് (E), ലൈവ് അഥവാ ഫേസ് (L), ന്യൂട്രൽ (N) എന്നീ മൂന്ന് പിന്നുകളുണ്ട്.'
      },
      {
        type: 'p',
        en: 'The Earth pin is thicker and longer. It is longer so that it connects to the earth terminal first before the phase and neutral connect, ensuring safety. It is thicker so that it cannot be mistakenly inserted into the phase or neutral holes.',
        ml: 'എർത്ത് പിന്നിന് നീളവും വണ്ണവും കൂടുതലാണ്. പ്ലഗ് കുത്തുമ്പോൾ ആദ്യം എർത്തുമായി ബന്ധം സ്ഥാപിക്കാനും അതുവഴി സുരക്ഷ ഉറപ്പാക്കാനുമാണ് നീളം കൂടുതൽ നൽകിയിരിക്കുന്നത്. അബദ്ധത്തിൽ ഫേസിലോ ന്യൂട്രലിലോ കയറാതിരിക്കാനാണ് വണ്ണം കൂടുതൽ നൽകിയിരിക്കുന്നത്.'
      },
      {
        type: 'p',
        en: 'Colour Coding of Wires: Phase (Red/Brown), Neutral (Black/Light Blue), Earth (Green/Yellow-Green).',
        ml: 'വയറുകളുടെ നിറം: ഫേസ് (ചുവപ്പ്/ബ്രൗൺ), ന്യൂട്രൽ (കറുപ്പ്/ഇളം നീല), എർത്ത് (പച്ച/മഞ്ഞ കലർന്ന പച്ച).'
      },
      {
        type: 'img',
        customId: 'household-circuit-simulation',
        en: 'Household Circuit & Safety Simulation',
        ml: 'ഗാർഹിക സർക്യൂട്ട് സുരക്ഷാ സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: 'Concept Map',
        ml: 'ആശയ ഭൂപടം'
      },
      {
        type: 'p',
        en: 'Electromagnetic Induction -> Induced EMF -> AC/DC Generators. Mutual Induction -> Transformers (Step-up/Step-down). Self Induction -> Inductors. Household Circuit -> Watt-hour meter -> Main Switch -> ELCB -> MCB.',
        ml: 'വൈദ്യുതകാന്തിക പ്രേരണം -> പ്രേരിത ഇ.എം.എഫ് -> AC/DC ജനറേറ്ററുകൾ. മ്യൂച്വൽ ഇൻഡക്ഷൻ -> ട്രാൻസ്ഫോർമറുകൾ (സ്റ്റെപ്പ് അപ്പ്/സ്റ്റെപ്പ് ഡൗൺ). സെൽഫ് ഇൻഡക്ഷൻ -> ഇൻഡക്റ്ററുകൾ. ഗാർഹിക സർക്യൂട്ട് -> വാട്ട്-അവർ മീറ്റർ -> മെയിൻ സ്വിച്ച് -> ഇ.എൽ.സി.ബി -> എം.സി.ബി.'
      },
      {
        type: 'h2',
        en: 'Quick Revision',
        ml: 'ദ്രുത പുനരവലോകനം'
      },
      {
        type: 'p',
        en: '• Electromagnetic Induction: Inducing EMF by changing magnetic flux.\n• Generator: Converts mechanical energy to electrical energy (AC or DC).\n• Transformer: Changes AC voltage without power loss (Mutual Induction).\n• Inductor: Controls AC without power loss (Self Induction).\n• Safety Devices: ELCB (Earth leakage), MCB (Short circuit/Overload), Earthing.',
        ml: '• വൈദ്യുതകാന്തിക പ്രേരണം: കാന്തിക ഫ്ലക്സിലെ മാറ്റം വഴി ഇ.എം.എഫ് പ്രേരിതമാക്കുന്നു.\n• ജനറേറ്റർ: യാന്ത്രികോർജ്ജത്തെ വൈദ്യുതോർജ്ജമാക്കുന്നു (AC അല്ലെങ്കിൽ DC).\n• ട്രാൻസ്ഫോർമർ: പവർ നഷ്ടമില്ലാതെ AC വോൾട്ടേജ് മാറ്റുന്നു (മ്യൂച്വൽ ഇൻഡക്ഷൻ).\n• ഇൻഡക്റ്റർ: പവർ നഷ്ടമില്ലാതെ AC നിയന്ത്രിക്കുന്നു (സെൽഫ് ഇൻഡക്ഷൻ).\n• സുരക്ഷാ ഉപകരണങ്ങൾ: ഇ.എൽ.സി.ബി (എർത്ത് ചോർച്ച), എം.സി.ബി (ഷോർട്ട് സർക്യൂട്ട്/ഓവർലോഡ്), എർത്തിംഗ്.'
      },
      {
        type: 'h2',
        en: 'Teacher Notes',
        ml: 'അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ'
      },
      {
        type: 'p',
        en: '• Use the simulations to clearly demonstrate the difference between AC (slip rings) and DC (split rings) generators.\n• Emphasize why transformers only work on AC.\n• Discuss real-life examples of household safety devices tripping and the reasons behind it.',
        ml: '• AC (സ്ലിപ്പ് റിംഗുകൾ), DC (സ്പ്ലിറ്റ് റിംഗുകൾ) ജനറേറ്ററുകൾ തമ്മിലുള്ള വ്യത്യാസം വ്യക്തമാക്കാൻ സിമുലേഷനുകൾ ഉപയോഗിക്കുക.\n• ട്രാൻസ്ഫോർമറുകൾ AC യിൽ മാത്രം പ്രവർത്തിക്കുന്നത് എന്തുകൊണ്ടാണെന്ന് ഊന്നിപ്പറയുക.\n• ഗാർഹിക സുരക്ഷാ ഉപകരണങ്ങൾ ട്രിപ്പ് ആകുന്നതിന്റെ യഥാർത്ഥ ജീവിത ഉദാഹരണങ്ങളും അതിന് പിന്നിലെ കാരണങ്ങളും ചർച്ച ചെയ്യുക.'
      },
      {
        type: 'h2',
        en: 'Student Summary Sheet',
        ml: 'വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ കുറിപ്പ്'
      },
      {
        type: 'p',
        en: '1. What is Electromagnetic Induction? (Definition & factors affecting EMF)\n2. Working of AC vs DC Generator (Parts & differences)\n3. Transformer (Step-up vs Step-down, Principle)\n4. Household Circuit (Sequence of devices & safety functions)',
        ml: '1. വൈദ്യുതകാന്തിക പ്രേരണം എന്നാൽ എന്ത്? (നിർവചനവും ഇ.എം.എഫിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങളും)\n2. AC, DC ജനറേറ്ററുകളുടെ പ്രവർത്തനം (ഭാഗങ്ങളും വ്യത്യാസങ്ങളും)\n3. ട്രാൻസ്ഫോർമർ (സ്റ്റെപ്പ് അപ്പ്, സ്റ്റെപ്പ് ഡൗൺ, പ്രവർത്തന തത്വം)\n4. ഗാർഹിക സർക്യൂട്ട് (ഉപകരണങ്ങളുടെ ക്രമവും സുരക്ഷാ ധർമ്മങ്ങളും)'
      }
    ]
  },
  glossary: [],
  quiz: [
  {
    "q_id": "u6_q1",
    "type": "mcq",
    "stem": {
      "en": "The human eye can adjust its focal length to see objects at different distances. This property is called:",
      "ml": "കണ്ണിന്റെ ഫോക്കൽ ദൈർഘ്യം മാറ്റി വ്യത്യസ്ത ദൂരത്ത് കാണുന്ന ശേഷി:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Accommodation",
          "ml": "ഉൾക്കൊള്ളൽ ശക്തി (Accommodation)"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Persistence of vision",
          "ml": "ദർശന സ്ഥിരത"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Dispersion",
          "ml": "ഡിസ്പർഷൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Refraction",
          "ml": "അപവർത്തനം"
        }
      }
    ],
    "answer": "A",
    "difficulty": "easy",
    "explanation": {
      "en": "Accommodation is the ability of the eye to adjust to different distances.",
      "ml": "വ്യത്യസ്ത ദൂരത്ത് കാണാൻ കണ്ണ് ഫോക്കൽ ദൂരം ക്രമീകരിക്കുന്ന ശേഷിയേ Accommodation (ഉൾക്കൊള്ളൽ ശക്തി) എന്ന് പറയുന്നു."
    }
  },
  {
    "q_id": "u6_q2",
    "type": "mcq",
    "stem": {
      "en": "The image formed on the retina in a human eye is:",
      "ml": "മനുഷ്യ കണ്ണിലെ റെറ്റിനയിൽ ഉണ്ടാകുന്ന ചിത്രം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Erect and virtual",
          "ml": "നിവർന്നതും, മിഥ്യയും"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Inverted and real",
          "ml": "തലകീഴ്, യഥാർത്ഥം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Erect and magnified",
          "ml": "നിവർന്നതും, വലുതും"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Inverted and virtual",
          "ml": "തലകീഴ്, മിഥ്യ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "The eye forms a real, inverted, diminished image on the retina.",
      "ml": "കണ്ണ് യഥാർത്ഥം, തലകീഴ്, ചെറിയ ചിത്രം റെറ്റിനയിൽ ഉണ്ടാക്കുന്നു."
    }
  },
  {
    "q_id": "u6_q3",
    "type": "mcq",
    "stem": {
      "en": "The defect of vision where distant objects appear blurred is:",
      "ml": "ദൂര ദൃഷ്ടി വൈകല്യം (ദൂരെ ഉള്ളത് കാണാൻ ബുദ്ധിമുട്ട്):"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Hypermetropia",
          "ml": "ദൂരക്കാഴ്ച (Hypermetropia)"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Myopia",
          "ml": "സമീപ ദോഷക്കാഴ്ച (Myopia)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Astigmatism",
          "ml": "ആസ്ടിഗ്‌മാറ്റിസം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Presbyopia",
          "ml": "പ്രെസ്ബയോപ്പിയ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Myopia (shortsightedness) is corrected with a concave/diverging lens.",
      "ml": "Myopia-ൽ ദൂരത്ത് ഉള്ളത് കാണൻ ബുദ്ധിമുട്ടായ് തോന്നുകയും, ഇത് കോൺകേവ് ലെൻസ് ഉപയോഗിച്ച് ശരിയാക്കാം."
    }
  },
  {
    "q_id": "u6_q4",
    "type": "mcq",
    "stem": {
      "en": "What corrective lens is used for hypermetropia?",
      "ml": "ദൂരക്കാഴ്ചക്ക് ഉപയോഗിക്കുന്ന ലെൻസ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Concave lens",
          "ml": "കോൺകേവ് ലെൻസ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Convex lens",
          "ml": "കോൺവെക്സ് ലെൻസ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Cylindrical lens",
          "ml": "സിലിണ്ടർ ലെൻസ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Bifocal lens",
          "ml": "ബൈഫോക്കൽ ലെൻസ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Hypermetropia (farsightedness) is corrected with a convex lens.",
      "ml": "ദൂരക്കാഴ്ച (Hypermetropia) ശരിയാക്കാൻ കോൺവെക്സ് ലെൻസ് ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u6_q5",
    "type": "mcq",
    "stem": {
      "en": "The cells in the retina responsible for color vision are:",
      "ml": "നിറ ദർശനത്തിന് ഉത്തരവാദിയായ റെറ്റിന കോശങ്ങൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Rods",
          "ml": "ദണ്ഡ കോശങ്ങൾ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Cones",
          "ml": "ശംഖ കോശങ്ങൾ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Bipolar cells",
          "ml": "ദ്വിധ്രുവ കോശങ്ങൾ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Amacrine cells",
          "ml": "അമക്രൈൻ കോശങ്ങൾ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Cones detect color (need bright light); Rods detect motion in dim light.",
      "ml": "ശംഖ കോശങ്ങൾ (Cones) തിളക്കമേറിയ ആലോകത്തിൽ നിറ ദർശനം നൽകുന്നു."
    }
  },
  {
    "q_id": "u6_q6",
    "type": "mcq",
    "stem": {
      "en": "Primary colors of light are:",
      "ml": "പ്രകാശത്തിന്റെ പ്രാഥമിക നിറങ്ങൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Red, Green, Blue",
          "ml": "ചുവപ്പ്, പച്ച, നീല"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Red, Yellow, Blue",
          "ml": "ചുവപ്പ്, മഞ്ഞ, നീല"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Red, Orange, Yellow",
          "ml": "ചുവപ്പ്, ഓറഞ്ച്, മഞ്ഞ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Violet, Green, Red",
          "ml": "വയലറ്റ്, പച്ച, ചുവപ്പ്"
        }
      }
    ],
    "answer": "A",
    "difficulty": "easy",
    "explanation": {
      "en": "The three primary colors of light (additive) are Red, Green, and Blue (RGB).",
      "ml": "ആദ്ദേഹ(Additive) നിറ സൂചകം: Red + Green + Blue = White."
    }
  },
  {
    "q_id": "u6_q7",
    "type": "mcq",
    "stem": {
      "en": "Night blindness is caused by deficiency of:",
      "ml": "രാത്രി അന്ധത ഉണ്ടാകുന്ന കാരണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Vitamin A deficiency",
          "ml": "വിറ്റാമിൻ A കുറവ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Vitamin C deficiency",
          "ml": "വിറ്റാമിൻ C കുറവ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Calcium deficiency",
          "ml": "കാൽസ്യം കുറവ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Iron deficiency",
          "ml": "ഇരുമ്പ് കുറവ്"
        }
      }
    ],
    "answer": "A",
    "difficulty": "easy",
    "explanation": {
      "en": "Vitamin A is required for producing rhodopsin in rod cells.",
      "ml": "ദണ്ഡ കോശങ്ങളിൽ rhodopsin ഉൽദ്ദേശ്യം ഉണ്ടാക്കാൻ വിറ്റാമിൻ A ആവശ്യമാണ്."
    }
  },
  {
    "q_id": "u6_q8",
    "type": "mcq",
    "stem": {
      "en": "Scattering of sunlight by the atmosphere explains why the sky is:",
      "ml": "അന്തരീക്ഷം വ്യാപ്ത ചെയ്ത സൂര്യ പ്രകാശം ആകാശം ഏത് നിറത്തിൽ ആകുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Red during noon",
          "ml": "ഉച്ചക്ക് ചുവപ്പ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Blue during the day",
          "ml": "പകൽ നീല"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Green at dawn",
          "ml": "ഉദയ സമയം പച്ച"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Yellow at dusk",
          "ml": "സന്ധ്യക്ക് മഞ്ഞ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Shorter wavelength blue light scatters more, making the sky appear blue.",
      "ml": "ചെറിയ തരംഗദൈർഘ്യ ഉള്ള നീല വ്യാപ്ത ആകുന്നതിനാൽ ആകാശം നീലയായ് കാണാം."
    }
  },
  {
    "q_id": "u6_q9",
    "type": "mcq",
    "stem": {
      "en": "At sunrise/sunset, the sun appears red because:",
      "ml": "ഉദയ/അസ്‌ത സമയം സൂര്യൻ ചുവപ്പ് കാണപ്പെടുന്നത്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Sun emits red light only",
          "ml": "സൂര്യൻ ചുവപ്പ് മാത്രം ഉദ്‌വമിക്കുന്നു"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Other colors are scattered away, leaving red",
          "ml": "ചുവപ്പ് ഒഴിയുള്ള നിറ വ്യാപ്ത ചെയ്ത്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Eye perceives red at longer angles",
          "ml": "കണ്ണ് ചരിഞ്ഞ കോണിൽ ചുവപ്പ് കാണും"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Temperature drops",
          "ml": "താപനില കുറയുന്നു"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "At horizon, light travels through more atmosphere, scattering blue/violet, leaving reddish hues.",
      "ml": "ഉദയ/അസ്‌ത ക്ഷിതിജ ദൂരത്ത് നീലയും വയലറ്റ്ഉം കൂടുതൽ വ്യാപ്ത, ചുവപ്പ് ദൃശ്യമാകുന്നു."
    }
  },
  {
    "q_id": "u6_q10",
    "type": "mcq",
    "stem": {
      "en": "The cells responsible for vision in dim light are:",
      "ml": "കുറഞ്ഞ വെളിച്ചത്തിൽ ദർശനം നൽകുന്ന കോശങ്ങൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Cones",
          "ml": "ശംഖ കോശങ്ങൾ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Rods",
          "ml": "ദണ്ഡ കോശങ്ങൾ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Irises",
          "ml": "ഐറിസ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Pupils",
          "ml": "ശ്വേതപടലം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Rods work in low light and detect motion.",
      "ml": "ദണ്ഡ കോശങ്ങൾ കുറഞ്ഞ ആലോകത്തിൽ ദർശനം നൽകുന്നു."
    }
  },
  {
    "q_id": "u6_q11",
    "type": "mcq",
    "stem": {
      "en": "Persistence of vision means:",
      "ml": "ദർശന സ്ഥിരത:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Eye can't see fast motion",
          "ml": "കണ്ണ് വേഗ ചലം കണ്ടെത്തില്ല"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "A visual impression remains for 1/16s after stimulus",
          "ml": "ഉത്തേജനം തീർന്നാലും (1/16 s) ദർശനം നൽകുന്നു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Eye adjusts to darkness",
          "ml": "ഇരുട്ടിൽ ചേർന്ന കണ്ണ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Night vision ability",
          "ml": "രാത്രി ദർശന ക്ഷമത"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "A visual image stays on the retina for about 1/16th of a second.",
      "ml": "ഒരു ചിത്രം 1/16 സ. വരെ ദർശനം ബാക്കി."
    }
  },
  {
    "q_id": "u6_q12",
    "type": "mcq",
    "stem": {
      "en": "Far point of a normal human eye is at:",
      "ml": "ഒരു ആരോഗ്യ കണ്ണിന്റെ ദൂര ബിന്ദു (far point):"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "25 cm",
          "ml": "25 cm"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "25 m",
          "ml": "25 m"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Infinity",
          "ml": "അനന്തത"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "10 m",
          "ml": "10 m"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "A normal eye can see clearly from 25 cm (near point) to infinity (far point).",
      "ml": "ആരോഗ്യ കണ്ണ് 25 cm (near point) → Infinity (far point) കാണും."
    }
  },
  {
    "q_id": "u6_q13",
    "type": "mcq",
    "stem": {
      "en": "The near point of a normal human eye is at:",
      "ml": "ഒരു ആരോഗ്യ കണ്ണിന്റെ സമീപ ബിന്ദു:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "10 cm",
          "ml": "10 cm"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "25 cm",
          "ml": "25 cm"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "50 cm",
          "ml": "50 cm"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "1 m",
          "ml": "1 m"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Normal near point is 25 cm (called least distance of distinct vision).",
      "ml": "ഒരു ആരോഗ്യ കണ്ണിന്റെ near point 25 cm ആണ്."
    }
  },
  {
    "q_id": "u6_q14",
    "type": "mcq",
    "stem": {
      "en": "Colorblindness is due to deficiency of:",
      "ml": "വർണ്ണ അന്ധത ഉണ്ടാകുന്ന കാരണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Vitamin B",
          "ml": "വിറ്റാ B"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Defective or absent cone cells",
          "ml": "ശംഖ കോശ ($\\text{Cone}$) ദോഷം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Overactive rods",
          "ml": "ദണ്ഡ കോശ ഉദ്ദേശ്യ ആധിക്യം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Inflammation of cornea",
          "ml": "കോർണിയ ദൗർബ്ബല്യം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Defective or missing cone cells cause colorblindness.",
      "ml": "ശംഖ കോശ (Cone) ദോഷം കൊണ്ടാണ് വർണ്ണ അന്ധത ഉണ്ടാകുന്നത്."
    }
  },
  {
    "q_id": "u6_q15",
    "type": "mcq",
    "stem": {
      "en": "A person with myopia should use:",
      "ml": "Myopia ശരിയാക്കാൻ ഉപയോഗിക്കുന്ന ലെൻസ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Convex lens",
          "ml": "കോൺവെക്സ് ലെൻസ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Concave lens",
          "ml": "കോൺകേവ് ലെൻസ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Bifocal lens",
          "ml": "ബൈഫോക്കൽ ലെൻസ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Prism",
          "ml": "പ്രിസ്‌മ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Myopia is corrected with a concave (diverging) lens.",
      "ml": "Myopia ശരിയാക്കാൻ കോൺകേവ് ലെൻസ് ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u6_q16",
    "type": "mcq",
    "stem": {
      "en": "In presbyopia, the problem is with:",
      "ml": "Presbyopia-ൽ ഉണ്ടാകുന്ന പ്രശ്നം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Cornea degeneration",
          "ml": "കോർണിയ ദൗർബ്ബല്യം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Loss of accommodation in old age",
          "ml": "വൃദ്ധ ഘടനയിൽ കണ്ണ് ഉൾക്കൊള്ളൽ ശക്തി നഷ്ടം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Excess near vision",
          "ml": "അതിരിക്കൽ ആശ്ചര്യ ദർശനം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Rod cell damage",
          "ml": "ദണ്ഡ കോശ നാശം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Presbyopia is the loss of accommodation due to aging.",
      "ml": "ഉൾക്കൊള്ളൽ ശക്തി (Accommodation) വൃദ്ധ ഘടനയിൽ കുറഞ്ഞ് Presbyopia ഉണ്ടാകുന്നു."
    }
  },
  {
    "q_id": "u6_q17",
    "type": "mcq",
    "stem": {
      "en": "Mixing red and blue light gives:",
      "ml": "ചുവപ്പ് + നീല പ്രകാശ മിശ്രണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Yellow",
          "ml": "മഞ്ഞ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Magenta",
          "ml": "Magenta"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Cyan",
          "ml": "Cyan"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "White",
          "ml": "ശ്വേതം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Red + Blue = Magenta (additive colour mixing).",
      "ml": "ചുവപ്പ് + നീല = Magenta (ആദ്ദേഹ (Additive) Color mixing)."
    }
  },
  {
    "q_id": "u6_q18",
    "type": "mcq",
    "stem": {
      "en": "Red + Green light gives:",
      "ml": "ചുവപ്പ് + പച്ച:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Cyan",
          "ml": "Cyan"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Magenta",
          "ml": "Magenta"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Yellow",
          "ml": "മഞ്ഞ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "White",
          "ml": "ശ്വേതം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "Red + Green = Yellow (additive mixing).",
      "ml": "ചുവപ്പ് + പച്ച = മഞ്ഞ."
    }
  },
  {
    "q_id": "u6_q19",
    "type": "mcq",
    "stem": {
      "en": "Red + Green + Blue (light) gives:",
      "ml": "ചുവപ്പ് + പച്ച + നീല:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Brown",
          "ml": "ബ്രൗൺ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Black",
          "ml": "കറുപ്പ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "White",
          "ml": "ശ്വേതം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Violet",
          "ml": "വയലറ്റ്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "RGB additive mixing = White light.",
      "ml": "RGB = ശ്വേത പ്രകാശം."
    }
  },
  {
    "q_id": "u6_q20",
    "type": "mcq",
    "stem": {
      "en": "The lens of the eye is made of:",
      "ml": "കണ്ണിന്റെ ലെൻസ് ഉണ്ടാക്കുന്ന ദ്രവ്യം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Corneal tissue",
          "ml": "കോർണിയ കോശം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Transparent elastik protein (crystalline lens)",
          "ml": "സ്ഫടിക ലെൻസ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Fluid only",
          "ml": "ദ്രാബം മാത്രം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Glass",
          "ml": "ഗ്ലാസ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "The eye's lens (crystalline lens) is a transparent, flexible structure.",
      "ml": "കണ്ണ് ലെൻസ് (crystalline lens) ഒരു സ്ഫടിക, ഇലാസ്തിക് ഘടനയാണ്."
    }
  },
  {
    "q_id": "u6_q21",
    "type": "mcq",
    "stem": {
      "en": "The change of colors we see in the sky at different times of day is largely due to:",
      "ml": "ദിവസം വ്യത്യസ്ത സമയത്ത് ആകാശ നിറ മാറ്റം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Absorption by clouds",
          "ml": "മേഘ ആഗിരണം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Scattering (Rayleigh scattering)",
          "ml": "Rayleigh Scattering (വ്യാപ്ത)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Reflection by atmosphere",
          "ml": "ആകാശ പ്രതിഫലനം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Thermal emission",
          "ml": "ഊഷ്മക ഉദ്‌വമനം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Rayleigh scattering of sunlight by atmospheric particles causes the different sky colors.",
      "ml": "Rayleigh Scattering ആണ് ആകാശ നിറ വ്യതിയാനത്തിന് കാരണം."
    }
  },
  {
    "q_id": "u6_q22",
    "type": "mcq",
    "stem": {
      "en": "The cornea of the eye contributes to:",
      "ml": "കണ്ണിന്റെ കോർണിയ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Color detection",
          "ml": "നിറ ദർശനം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Most of the eye's focusing power",
          "ml": "ദർശനത്തിന്റെ ഭൂരിഭാഗ ഫോക്കസ് ശക്തി"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Pupil dilation",
          "ml": "ശ്വേതപടലം വികാസം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Tear production",
          "ml": "കണ്ണ് ജലം ഉൽദ്ദേശ്യം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Cornea provides about 2/3 of the total focusing power.",
      "ml": "കോർണിയ കണ്ണ് ഫോക്കസ് ശക്തിയുടെ 2/3 ഉൽദ്ദേശ്യം."
    }
  },
  {
    "q_id": "u6_q23",
    "type": "mcq",
    "stem": {
      "en": "Scattering of light (Rayleigh) is inversely proportional to:",
      "ml": "Rayleigh Scattering ഏതിനോട് വിപരീത അനുപാതത്തിലായിരിക്കും?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Speed of light",
          "ml": "പ്രകാശ വേഗം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Fourth power of wavelength",
          "ml": "തരംഗദൈർഘ്യത്തിന്റെ നാലാം ഘാതം (λ⁴)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Frequency",
          "ml": "ആവൃത്തി"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Amplitude",
          "ml": "ആയതി"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "Rayleigh Scattering intensity ∝ 1/λ⁴, so shorter wavelengths scatter more.",
      "ml": "Scattering ∝ 1/λ⁴ - ചെറിയ λ = കൂടുതൽ Scattering."
    }
  },
  {
    "q_id": "u6_q24",
    "type": "mcq",
    "stem": {
      "en": "A camera forms an image similar to the human eye. The film/sensor corresponds to:",
      "ml": "ഒരു ക്യാമറ ചിത്രം ഉണ്ടാക്കുന്ന ഭാഗം കണ്ണ് ഘടനയിൽ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Cornea",
          "ml": "കോർണിയ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Iris",
          "ml": "ഐറിസ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Retina",
          "ml": "റെറ്റിന"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Pupil",
          "ml": "ശ്വേതപടലം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "The film/sensor detects light like the retina does.",
      "ml": "ക്യാമറ ഫിലിം = കണ്ണ് റെറ്റിന."
    }
  },
  {
    "q_id": "u6_q25",
    "type": "mcq",
    "stem": {
      "en": "The iris in the eye controls:",
      "ml": "കണ്ണ് ഐറിസ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Focusing",
          "ml": "ഫോക്കസ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Light entering (pupil size)",
          "ml": "കടക്കുന്ന പ്രകാശ അളവ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Color detection",
          "ml": "നിറ ദർശനം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Tear production",
          "ml": "കണ്ണ് ദ്രവ ഉൽദ്ദേശ്യം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Iris controls pupil size to regulate the amount of light entering the eye.",
      "ml": "ഐറിസ് ശ്വേതപടലം (Pupil) വലിപ്പം ക്രമീകരിച്ച് ഉൾ കടക്കുന്ന പ്രകാശ അളവ് ക്രമീകരിക്കുന്നു."
    }
  }
]
} as const;
