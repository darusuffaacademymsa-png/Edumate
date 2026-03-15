import { Lesson } from './curriculum';

export const physicsUnit7: Lesson = {
  id: 'sc-phy-10-unit-7',
  title: {
    en: 'Chapter 7: Mechanical Advantage in Action',
    ml: 'അധ്യായം 7: യാന്ത്രികലാഭം പ്രവൃത്തിയിൽ'
  },
  estimated_time_mins: 60,
  videos: [
    {
      title: "Quick revision (Exam oriented)",
      url: "https://www.youtube.com/watch?v=zXMA-6ZoQ3E"
    }
  ],
  learning_objectives: [
    {
      id: 'lo1',
      text: {
        en: 'Understand the concept of simple machines and how they make work easier.',
        ml: 'ലഘുയന്ത്രങ്ങൾ എന്ന ആശയവും അവ എങ്ങനെ പ്രവൃത്തി എളുപ്പമാക്കുന്നുവെന്നും മനസ്സിലാക്കുക.'
      }
    },
    {
      id: 'lo2',
      text: {
        en: 'Define and calculate Mechanical Advantage (MA), Velocity Ratio (VR), and Efficiency.',
        ml: 'യാന്ത്രികലാഭം (MA), പ്രവേഗ അനുപാതം (VR), ക്ഷമത എന്നിവ നിർവചിക്കുകയും കണക്കാക്കുകയും ചെയ്യുക.'
      }
    },
    {
      id: 'lo3',
      text: {
        en: 'Classify levers into first, second, and third classes based on the position of fulcrum, load, and effort.',
        ml: 'ആധാരബിന്ദു, ഭാരം, യത്നം എന്നിവയുടെ സ്ഥാനത്തെ അടിസ്ഥാനമാക്കി ഉത്തോലകങ്ങളെ ഒന്നാം, രണ്ടാം, മൂന്നാം വർഗ്ഗങ്ങളായി തരംതിരിക്കുക.'
      }
    },
    {
      id: 'lo4',
      text: {
        en: 'Explain the working of fixed pulleys, movable pulleys, and pulley blocks.',
        ml: 'സ്ഥിരകപ്പി, ചലനക്കപ്പി, കപ്പി വ്യൂഹം എന്നിവയുടെ പ്രവർത്തനം വിശദീകരിക്കുക.'
      }
    },
    {
      id: 'lo5',
      text: {
        en: 'Understand the principles of wheel and axle, and gears.',
        ml: 'ചക്രവും അച്ചുതണ്ടും, ഗിയറുകൾ എന്നിവയുടെ തത്വങ്ങൾ മനസ്സിലാക്കുക.'
      }
    }
  ],
  content: {
    intro: {
      en: 'This chapter explores simple machines like levers, pulleys, and gears, and how they multiply force or speed to make our daily tasks easier.',
      ml: 'ഉത്തോലകങ്ങൾ, കപ്പികൾ, ഗിയറുകൾ തുടങ്ങിയ ലഘുയന്ത്രങ്ങളെക്കുറിച്ചും അവ എങ്ങനെ ബലമോ വേഗതയോ വർദ്ധിപ്പിച്ച് നമ്മുടെ ദൈനംദിന ജോലികൾ എളുപ്പമാക്കുന്നുവെന്നും ഈ അധ്യായം വിശദീകരിക്കുന്നു.'
    },
    core: {
      en: '',
      ml: ''
    },
    blocks: [
      {
        type: 'h2',
        en: '1. Simple Machines',
        ml: '1. ലഘുയന്ത്രങ്ങൾ'
      },
      {
        type: 'p',
        en: 'Devices that make our work easier are called simple machines. They help to overcome a large resistance (Load) by applying a small force (Effort).',
        ml: 'നമ്മുടെ പ്രവൃത്തി എളുപ്പമാക്കാൻ സഹായിക്കുന്ന ഉപകരണങ്ങളാണ് ലഘുയന്ത്രങ്ങൾ. ചെറിയ ബലം (യത്നം/Effort) ഉപയോഗിച്ച് വലിയൊരു പ്രതിരോധത്തെ (ഭാരം/Load) മറികടക്കാൻ ഇവ സഹായിക്കുന്നു.'
      },
      {
        type: 'img',
        customId: 'inclined-plane-simulation',
        en: 'Figure 7.1 shows an inclined plane used to load a lorry. Using an inclined plane reduces the effort needed to lift heavy objects.',
        ml: 'ചിത്രം 7.1 ഒരു ലോറിയിൽ ഭാരം കയറ്റാൻ ചരിവുതലം ഉപയോഗിക്കുന്നത് കാണിക്കുന്നു. ചരിവുതലം ഉപയോഗിക്കുന്നത് ഭാരമുള്ള വസ്തുക്കൾ ഉയർത്താൻ ആവശ്യമായ യത്നം കുറയ്ക്കുന്നു.'
      },
      {
        type: 'h2',
        en: '2. Terms Related to Simple Machines',
        ml: '2. ലഘുയന്ത്രങ്ങളുമായി ബന്ധപ്പെട്ട പദങ്ങൾ'
      },
      {
        type: 'p',
        en: '• **Effort (E)**: The force applied on a machine to do work is called effort.\n• **Load (L)**: The resistance overcome by the machine is called load.',
        ml: '• **യത്നം (E)**: ഒരു യന്ത്രത്തിൽ പ്രവൃത്തി ചെയ്യാൻ നമ്മൾ പ്രയോഗിക്കുന്ന ബലമാണ് യത്നം.\n• **ഭാരം (L)**: യന്ത്രം ഉപയോഗിച്ച് നാം മറികടക്കുന്ന പ്രതിരോധത്തെയാണ് ഭാരം എന്ന് പറയുന്നത്.'
      },
      {
        type: 'h2',
        en: '3. Mechanical Advantage and Velocity Ratio',
        ml: '3. യാന്ത്രികലാഭവും പ്രവേഗ അനുപാതവും'
      },
      {
        type: 'h3',
        en: 'Mechanical Advantage (MA)',
        ml: 'യാന്ത്രികലാഭം (MA)'
      },
      {
        type: 'p',
        en: 'It is the ratio of the Load to the Effort applied. It has no unit because it is a ratio of two forces.',
        ml: 'ഭാരവും യത്നവും തമ്മിലുള്ള അംശബന്ധമാണ് യാന്ത്രികലാഭം. ഇതൊരു അംശബന്ധമായതിനാൽ ഇതിന് യൂണിറ്റ് ഇല്ല.'
      },
      {
        type: 'formula',
        en: 'Mechanical Advantage (MA) = Load (L) / Effort (E)',
        ml: 'യാന്ത്രികലാഭം (MA) = ഭാരം (L) / യത്നം (E)'
      },
      {
        type: 'h3',
        en: 'Velocity Ratio (VR)',
        ml: 'പ്രവേഗ അനുപാതം (VR)'
      },
      {
        type: 'p',
        en: 'Velocity ratio is the ratio of the distance travelled by the effort to the distance travelled by the load.',
        ml: 'യത്നം സഞ്ചരിച്ച ദൂരവും ഭാരം സഞ്ചരിച്ച ദൂരവും തമ്മിലുള്ള അംശബന്ധമാണ് പ്രവേഗ അനുപാതം.'
      },
      {
        type: 'formula',
        en: 'Velocity Ratio (VR) = Distance travelled by effort (d_E) / Distance travelled by load (d_L)',
        ml: 'പ്രവേഗ അനുപാതം (VR) = യത്നം സഞ്ചരിച്ച ദൂരം (d_E) / ഭാരം സഞ്ചരിച്ച ദൂരം (d_L)'
      },
      {
        type: 'h2',
        en: '4. Efficiency of a Machine',
        ml: '4. യന്ത്രത്തിന്റെ ക്ഷമത'
      },
      {
        type: 'p',
        en: 'Efficiency is the ratio of useful work output to the work input, expressed as a percentage. The efficiency of a practical machine is always less than 100% due to friction and the weight of the moving parts of the machine.',
        ml: 'ലഭ്യമായ പ്രവൃത്തിയും (Work output) നൽകിയ പ്രവൃത്തിയും (Work input) തമ്മിലുള്ള അംശബന്ധത്തിന്റെ ശതമാനമാണ് ക്ഷമത. ഘർഷണം (friction), യന്ത്രഭാഗങ്ങളുടെ ഭാരം എന്നിവ കാരണം ഒരു പ്രായോഗിക യന്ത്രത്തിന്റെ ക്ഷമത എപ്പോഴും 100% ൽ താഴെയായിരിക്കും.'
      },
      {
        type: 'formula',
        en: 'Efficiency = (Work Output / Work Input) × 100\nEfficiency = (Mechanical Advantage (MA) / Velocity Ratio (VR)) × 100',
        ml: 'ക്ഷമത = (ലഭ്യമായ പ്രവൃത്തി / നൽകിയ പ്രവൃത്തി) × 100\nക്ഷമത = (യാന്ത്രികലാഭം (MA) / പ്രവേഗ അനുപാതം (VR)) × 100'
      },
      {
        type: 'h2',
        en: '5. Levers',
        ml: '5. ഉത്തോലകങ്ങൾ'
      },
      {
        type: 'p',
        en: 'A lever is a rigid bar that can rotate freely about a fixed point called the fulcrum.',
        ml: 'ആധാരബിന്ദുവിനെ (Fulcrum) അടിസ്ഥാനമാക്കി സ്വതന്ത്രമായി കറങ്ങാൻ കഴിയുന്ന ദൃഢമായ ദണ്ഡാണ് ഉത്തോലകം.'
      },
      {
        type: 'table',
        tableData: {
          headers: [
            { en: 'Class of Lever', ml: 'ഉത്തോലക വർഗ്ഗം' },
            { en: 'Position', ml: 'സ്ഥാനം' },
            { en: 'Examples', ml: 'ഉദാഹരണങ്ങൾ' },
            { en: 'Mechanical Advantage', ml: 'യാന്ത്രികലാഭം' }
          ],
          rows: [
            [
              { en: 'First Class Lever', ml: 'ഒന്നാം വർഗ്ഗ ഉത്തോലകം' },
              { en: 'Fulcrum is between Load and Effort.', ml: 'ആധാരബിന്ദു ഭാരത്തിനും യത്നത്തിനും ഇടയിലായിരിക്കും' },
              { en: 'Scissors, See-saw, Crowbar.', ml: 'കത്രിക, സീ-സോ, കടപ്പാര' },
              { en: 'Can be > 1, = 1, or < 1.', ml: 'ഒന്നിൽ കൂടുതലോ ഒന്നോ ഒന്നിൽ കുറവോ ആകാം' }
            ],
            [
              { en: 'Second Class Lever', ml: 'രണ്ടാം വർഗ്ഗ ഉത്തോലകം' },
              { en: 'Load is between Fulcrum and Effort.', ml: 'ഭാരം ആധാരബിന്ദുവിനും യത്നത്തിനും ഇടയിലായിരിക്കും' },
              { en: 'Nutcracker, Wheelbarrow, Lemon squeezer.', ml: 'പാക്കുവെട്ടി, വീൽബാരോ, നാരങ്ങ പിഴിയുന്ന ഉപകരണം' },
              { en: 'Always greater than 1 (MA > 1).', ml: 'എപ്പോഴും ഒന്നിൽ കൂടുതലായിരിക്കും (MA > 1)' }
            ],
            [
              { en: 'Third Class Lever', ml: 'മൂന്നാം വർഗ്ഗ ഉത്തോലകം' },
              { en: 'Effort is between Fulcrum and Load.', ml: 'യത്നം ആധാരബിന്ദുവിനും ഭാരത്തിനും ഇടയിലായിരിക്കും' },
              { en: 'Tongs, Fishing rod, Tweezers.', ml: 'ചവണ, ചൂണ്ടക്കാമ്പ്, ട്വീസർ' },
              { en: 'Always less than 1 (MA < 1).', ml: 'എപ്പോഴും ഒന്നിൽ കുറവായിരിക്കും (MA < 1)' }
            ]
          ]
        }
      },
      {
        type: 'img',
        customId: 'lever-simulation',
        en: 'Interactive Lever Simulation',
        ml: 'ഇന്ററാക്ടീവ് ഉത്തോലക സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: '6. Pulleys',
        ml: '6. കപ്പികൾ'
      },
      {
        type: 'p',
        en: '• **Fixed Pulley**: The axis of rotation of this pulley is fixed. It does not reduce the effort needed but it changes the direction of the effort to a convenient downward direction. (MA = 1, VR = 1).\n• **Movable Pulley**: The axis of rotation of this pulley moves along with the load. It reduces the applied effort to half of the load. (MA = 2, VR = 2).\n• **Pulley Block / Block and Tackle**: A combination of fixed and movable pulleys. If there are \'n\' pulleys in the system, its Mechanical Advantage and Velocity Ratio will be \'n\'.',
        ml: '• **സ്ഥിരകപ്പി**: ഇതിൽ കറങ്ങുന്ന അച്ചുതണ്ട് സ്ഥിരമായിരിക്കും. ഇത് ഉപയോഗിക്കേണ്ട യത്നത്തിന്റെ അളവ് കുറയ്ക്കുന്നില്ല, മറിച്ച് യത്നം പ്രയോഗിക്കേണ്ട ദിശ സൗകര്യപ്രദമായി താഴേക്ക് മാറ്റാൻ സഹായിക്കുന്നു. (MA = 1, VR = 1).\n• **ചലനക്കപ്പി**: ഇതിൽ കറങ്ങുന്ന അച്ചുതണ്ട് ഭാരത്തോടൊപ്പം ചലിക്കുന്നു. ഈ സംവിധാനം ഉപയോഗിക്കേണ്ട യത്നത്തെ ഭാരത്തിന്റെ പകുതിയായി കുറയ്ക്കുന്നു. (MA = 2, VR = 2).\n• **കപ്പി വ്യൂഹം**: ഒന്നിലധികം സ്ഥിരകപ്പികളും ചലനക്കപ്പികളും ചേർന്ന സംവിധാനം. ഇതിൽ \'n\' കപ്പികൾ ഉണ്ടെങ്കിൽ, ആ വ്യൂഹത്തിന്റെ യാന്ത്രികലാഭവും പ്രവേഗ അനുപാതവും \'n\' ആയിരിക്കും.'
      },
      {
        type: 'img',
        customId: 'pulley-simulation',
        en: 'Interactive Pulley Simulation',
        ml: 'ഇന്ററാക്ടീവ് കപ്പി സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: '7. Wheel and Axle',
        ml: '7. ചക്രവും അച്ചുതണ്ടും'
      },
      {
        type: 'p',
        en: 'It consists of a wheel attached to a smaller cylindrical axle so that these two parts rotate together in the same direction. When effort is applied to the larger wheel, it overcomes a heavy load on the smaller axle. Therefore, the Mechanical Advantage is greater than 1. Examples: Steering wheel of a car, Screwdriver, Doorknob.',
        ml: 'ചെറിയൊരു സിലിണ്ടർ ആകൃതിയിലുള്ള അച്ചുതണ്ടുമായി (axle) ബന്ധിപ്പിച്ച ചക്രം അടങ്ങിയ സംവിധാനമാണിത്. ഇവ രണ്ടും ഒരേ ദിശയിൽ ഒരുമിച്ച് കറങ്ങുന്നു. വലിയ ചക്രത്തിൽ യത്നം പ്രയോഗിക്കുമ്പോൾ ചെറിയ അച്ചുതണ്ടിലെ വലിയ ഭാരത്തെ മറികടക്കാൻ സാധിക്കുന്നു. അതിനാൽ ഇതിന്റെ യാന്ത്രികലാഭം എപ്പോഴും ഒന്നിൽ കൂടുതലാണ്. ഉദാഹരണങ്ങൾ: കാറിന്റെ സ്റ്റിയറിംഗ് വീൽ, സ്ക്രൂഡ്രൈവർ, ഡോർ നോബ്.'
      },
      {
        type: 'h2',
        en: '8. Gears',
        ml: '8. ഗിയറുകൾ'
      },
      {
        type: 'p',
        en: 'Gears are toothed wheels used to transmit power and motion from one part of a machine to another.\n• When a larger gear drives a smaller gear: Speed increases, but the turning effect (torque) decreases.\n• When a smaller gear drives a larger gear: Speed decreases, but the turning effect (torque) increases.',
        ml: 'ഒരു യന്ത്രത്തിന്റെ ഒരു ഭാഗത്തുനിന്ന് മറ്റൊരു ഭാഗത്തേക്ക് പവറും ചലനവും പ്രേഷണം ചെയ്യാൻ ഉപയോഗിക്കുന്ന പല്ലുകളുള്ള ചക്രങ്ങളാണ് ഗിയറുകൾ.\n• വലിയ ഗിയർ ചെറിയ ഗിയറിനെ കറക്കുമ്പോൾ: വേഗത കൂടുകയും എന്നാൽ കറക്കാനുള്ള ശേഷി (ടോർക്ക്) കുറയുകയും ചെയ്യുന്നു.\n• ചെറിയ ഗിയർ വലിയ ഗിയറിനെ കറക്കുമ്പോൾ: വേഗത കുറയുകയും എന്നാൽ കറക്കാനുള്ള ശേഷി (ടോർക്ക്) കൂടുകയും ചെയ്യുന്നു.'
      },
      {
        type: 'img',
        customId: 'gear-simulation',
        en: 'Interactive Gear Simulation',
        ml: 'ഇന്ററാക്ടീവ് ഗിയർ സിമുലേഷൻ'
      },
      {
        type: 'h2',
        en: 'Concept Map',
        ml: 'ആശയ ഭൂപടം'
      },
      {
        type: 'p',
        en: 'Simple Machines -> Make work easier. Types: Levers (Class 1, 2, 3), Pulleys (Fixed, Movable, Block & Tackle), Wheel & Axle, Gears. Key Terms: Effort, Load, Mechanical Advantage (MA), Velocity Ratio (VR), Efficiency.',
        ml: 'ലഘുയന്ത്രങ്ങൾ -> പ്രവൃത്തി എളുപ്പമാക്കുന്നു. ഇനങ്ങൾ: ഉത്തോലകങ്ങൾ (വർഗ്ഗം 1, 2, 3), കപ്പികൾ (സ്ഥിരകപ്പി, ചലനക്കപ്പി, കപ്പി വ്യൂഹം), ചക്രവും അച്ചുതണ്ടും, ഗിയറുകൾ. പ്രധാന പദങ്ങൾ: യത്നം, ഭാരം, യാന്ത്രികലാഭം (MA), പ്രവേഗ അനുപാതം (VR), ക്ഷമത.'
      },
      {
        type: 'h2',
        en: 'Quick Revision',
        ml: 'ദ്രുത പുനരവലോകനം'
      },
      {
        type: 'p',
        en: '• MA = Load / Effort. VR = Effort distance / Load distance.\n• Efficiency is always < 100% due to friction.\n• Class 1 Lever: Fulcrum in middle (e.g., Scissors).\n• Class 2 Lever: Load in middle, MA > 1 (e.g., Nutcracker).\n• Class 3 Lever: Effort in middle, MA < 1 (e.g., Tongs).\n• Fixed Pulley: Changes direction, MA=1. Movable Pulley: Halves effort, MA=2.\n• Gears: Small drives large -> Speed decreases, Torque increases.',
        ml: '• MA = ഭാരം / യത്നം. VR = യത്നം സഞ്ചരിച്ച ദൂരം / ഭാരം സഞ്ചരിച്ച ദൂരം.\n• ഘർഷണം കാരണം ക്ഷമത എപ്പോഴും 100% ൽ താഴെയായിരിക്കും.\n• ഒന്നാം വർഗ്ഗ ഉത്തോലകം: ആധാരബിന്ദു നടുവിൽ (ഉദാ: കത്രിക).\n• രണ്ടാം വർഗ്ഗ ഉത്തോലകം: ഭാരം നടുവിൽ, MA > 1 (ഉദാ: പാക്കുവെട്ടി).\n• മൂന്നാം വർഗ്ഗ ഉത്തോലകം: യത്നം നടുവിൽ, MA < 1 (ഉദാ: ചവണ).\n• സ്ഥിരകപ്പി: ദിശ മാറ്റുന്നു, MA=1. ചലനക്കപ്പി: യത്നം പകുതിയാക്കുന്നു, MA=2.\n• ഗിയറുകൾ: ചെറുത് വലുതിനെ കറക്കുമ്പോൾ -> വേഗത കുറയുന്നു, ടോർക്ക് കൂടുന്നു.'
      },
      {
        type: 'h2',
        en: 'Additional Practice Questions',
        ml: 'കൂടുതൽ പരിശീലന ചോദ്യങ്ങൾ'
      },
      {
        type: 'h3',
        en: 'Assertion - Reason Questions',
        ml: 'പ്രസ്താവന - കാരണ ചോദ്യങ്ങൾ'
      },
      {
        type: 'p',
        en: '**1. Assertion (A):** The mechanical advantage of a class II lever is always greater than 1.\n**Reason (R):** In a class II lever, the effort arm is always longer than the load arm.\n*Answer:* Both A and R are true, and R is the correct explanation of A.',
        ml: '**1. പ്രസ്താവന (A):** രണ്ടാം വർഗ്ഗ ഉത്തോലകത്തിന്റെ യാന്ത്രികലാഭം എപ്പോഴും 1-നേക്കാൾ കൂടുതലായിരിക്കും.\n**കാരണം (R):** രണ്ടാം വർഗ്ഗ ഉത്തോലകത്തിൽ, യത്നഭുജം എപ്പോഴും ഭാരഭുജത്തേക്കാൾ നീളമുള്ളതായിരിക്കും.\n*ഉത്തരം:* A യും R ഉം ശരിയാണ്, കൂടാതെ R എന്നത് A യുടെ ശരിയായ വിശദീകരണമാണ്.'
      },
      {
        type: 'p',
        en: '**2. Assertion (A):** A fixed pulley does not reduce the effort required to lift a load.\n**Reason (R):** The mechanical advantage of a single fixed pulley is 1.\n*Answer:* Both A and R are true, and R is the correct explanation of A.',
        ml: '**2. പ്രസ്താവന (A):** ഒരു സ്ഥിരകപ്പി ഭാരം ഉയർത്താൻ ആവശ്യമായ യത്നത്തെ കുറയ്ക്കുന്നില്ല.\n**കാരണം (R):** ഒരു സ്ഥിരകപ്പിയുടെ യാന്ത്രികലാഭം 1 ആണ്.\n*ഉത്തരം:* A യും R ഉം ശരിയാണ്, കൂടാതെ R എന്നത് A യുടെ ശരിയായ വിശദീകരണമാണ്.'
      },
      {
        type: 'p',
        en: '**3. Assertion (A):** The efficiency of a practical machine is always less than 100%.\n**Reason (R):** Some energy is always lost in overcoming friction and moving the parts of the machine.\n*Answer:* Both A and R are true, and R is the correct explanation of A.',
        ml: '**3. പ്രസ്താവന (A):** ഒരു പ്രായോഗിക യന്ത്രത്തിന്റെ ക്ഷമത എപ്പോഴും 100%-ൽ താഴെയായിരിക്കും.\n**കാരണം (R):** ഘർഷണം മറികടക്കുന്നതിനും യന്ത്രഭാഗങ്ങൾ ചലിപ്പിക്കുന്നതിനും എപ്പോഴും കുറച്ച് ഊർജ്ജം നഷ്ടപ്പെടുന്നു.\n*ഉത്തരം:* A യും R ഉം ശരിയാണ്, കൂടാതെ R എന്നത് A യുടെ ശരിയായ വിശദീകരണമാണ്.'
      },
      {
        type: 'h3',
        en: 'Diagram-Based Questions',
        ml: 'ചിത്രത്തെ അടിസ്ഥാനമാക്കിയുള്ള ചോദ്യങ്ങൾ'
      },
      {
        type: 'p',
        en: '**1. Identify the class of lever shown in the diagram of a pair of scissors. Mark the Fulcrum, Load, and Effort.**\n*Answer:* Class I Lever. Fulcrum is at the central pivot, Effort is applied at the handles, and Load is at the blades cutting the material.',
        ml: '**1. ഒരു കത്രികയുടെ ചിത്രത്തിൽ കാണിച്ചിരിക്കുന്ന ഉത്തോലകത്തിന്റെ വർഗ്ഗം തിരിച്ചറിയുക. ആധാരബിന്ദു, ഭാരം, യത്നം എന്നിവ അടയാളപ്പെടുത്തുക.**\n*ഉത്തരം:* ഒന്നാം വർഗ്ഗ ഉത്തോലകം. ആധാരബിന്ദു മധ്യഭാഗത്താണ്, യത്നം പിടികളിൽ പ്രയോഗിക്കുന്നു, ഭാരം മുറിക്കുന്ന ബ്ലേഡുകളിലാണ്.'
      },
      {
        type: 'p',
        en: '**2. Observe a diagram of a bicycle gear system where the pedal gear is larger than the rear wheel gear. What is the effect on speed and torque?**\n*Answer:* Since a larger gear drives a smaller gear, the speed of rotation increases, but the torque (turning effect) decreases.',
        ml: '**2. പെഡൽ ഗിയർ പിൻ ചക്ര ഗിയറിനേക്കാൾ വലുതായ ഒരു സൈക്കിൾ ഗിയർ സിസ്റ്റത്തിന്റെ ചിത്രം നിരീക്ഷിക്കുക. വേഗതയിലും ടോർക്കിലുമുള്ള ഫലം എന്താണ്?**\n*ഉത്തരം:* വലിയ ഗിയർ ചെറിയ ഗിയറിനെ കറക്കുന്നതിനാൽ, കറങ്ങുന്ന വേഗത കൂടുന്നു, എന്നാൽ ടോർക്ക് (കറക്കാനുള്ള ശേഷി) കുറയുന്നു.'
      },
      {
        type: 'h3',
        en: 'Numerical Problems',
        ml: 'സംഖ്യാ പ്രശ്നങ്ങൾ'
      },
      {
        type: 'p',
        en: '**1. A load of 500 N is lifted using an effort of 100 N. Calculate the Mechanical Advantage.**\n*Answer:* MA = Load / Effort = 500 N / 100 N = 5.',
        ml: '**1. 100 N യത്നം ഉപയോഗിച്ച് 500 N ഭാരം ഉയർത്തുന്നു. യാന്ത്രികലാഭം കണക്കാക്കുക.**\n*ഉത്തരം:* MA = ഭാരം / യത്നം = 500 N / 100 N = 5.'
      },
      {
        type: 'p',
        en: '**2. In a lever, the effort arm is 80 cm and the load arm is 20 cm. What is its Velocity Ratio?**\n*Answer:* VR = Effort arm / Load arm = 80 cm / 20 cm = 4.',
        ml: '**2. ഒരു ഉത്തോലകത്തിൽ, യത്നഭുജം 80 cm ഉം ഭാരഭുജം 20 cm ഉം ആണ്. ഇതിന്റെ പ്രവേഗ അനുപാതം എത്രയാണ്?**\n*ഉത്തരം:* VR = യത്നഭുജം / ഭാരഭുജം = 80 cm / 20 cm = 4.'
      },
      {
        type: 'h3',
        en: 'One-Mark Questions',
        ml: 'ഒരു മാർക്കിന്റെ ചോദ്യങ്ങൾ'
      },
      {
        type: 'p',
        en: '**1. What is the unit of Mechanical Advantage?**\n*Answer:* It has no unit as it is a ratio of two similar quantities (forces).',
        ml: '**1. യാന്ത്രികലാഭത്തിന്റെ യൂണിറ്റ് എന്താണ്?**\n*ഉത്തരം:* സമാനമായ രണ്ട് അളവുകളുടെ (ബലങ്ങളുടെ) അനുപാതമായതിനാൽ ഇതിന് യൂണിറ്റ് ഇല്ല.'
      },
      {
        type: 'p',
        en: '**2. Which class of lever always has a mechanical advantage less than 1?**\n*Answer:* Class III Lever.',
        ml: '**2. ഏത് വർഗ്ഗ ഉത്തോലകത്തിനാണ് എപ്പോഴും 1-നേക്കാൾ കുറഞ്ഞ യാന്ത്രികലാഭം ഉള്ളത്?**\n*ഉത്തരം:* മൂന്നാം വർഗ്ഗ ഉത്തോലകം.'
      },
      {
        type: 'p',
        en: '**3. What is the mechanical advantage of a single movable pulley?**\n*Answer:* 2.',
        ml: '**3. ഒരു ചലനക്കപ്പിയുടെ യാന്ത്രികലാഭം എത്രയാണ്?**\n*ഉത്തരം:* 2.'
      },
      {
        type: 'p',
        en: '**4. Name a machine where the effort is applied between the fulcrum and the load.**\n*Answer:* Tongs (or Tweezers, Fishing rod).',
        ml: '**4. ആധാരബിന്ദുവിനും ഭാരത്തിനും ഇടയിൽ യത്നം പ്രയോഗിക്കുന്ന ഒരു യന്ത്രത്തിന്റെ പേര് പറയുക.**\n*ഉത്തരം:* ചവണ (അല്ലെങ്കിൽ ട്വീസർ, ചൂണ്ടക്കാമ്പ്).'
      },
      {
        type: 'p',
        en: '**5. How is the efficiency of a machine related to MA and VR?**\n*Answer:* Efficiency = (MA / VR) × 100%.',
        ml: '**5. ഒരു യന്ത്രത്തിന്റെ ക്ഷമത MA, VR എന്നിവയുമായി എങ്ങനെ ബന്ധപ്പെട്ടിരിക്കുന്നു?**\n*ഉത്തരം:* ക്ഷമത = (MA / VR) × 100%.'
      },
      {
        type: 'h2',
        en: 'Teacher Notes',
        ml: 'അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ'
      },
      {
        type: 'p',
        en: '• Bring a pair of scissors, a nutcracker, and tongs to class to demonstrate the three classes of levers.\n• Use the interactive simulations to show how moving the fulcrum changes the effort required.\n• Discuss real-world applications like bicycle gears to explain the speed vs torque trade-off.',
        ml: '• മൂന്ന് വർഗ്ഗ ഉത്തോലകങ്ങളെ കാണിക്കാൻ ഒരു കത്രിക, പാക്കുവെട്ടി, ചവണ എന്നിവ ക്ലാസ്സിൽ കൊണ്ടുവരിക.\n• ആധാരബിന്ദു മാറ്റുന്നത് ആവശ്യമായ യത്നത്തെ എങ്ങനെ മാറ്റുന്നുവെന്ന് കാണിക്കാൻ ഇന്ററാക്ടീവ് സിമുലേഷനുകൾ ഉപയോഗിക്കുക.\n• വേഗതയും ടോർക്കും തമ്മിലുള്ള ബന്ധം വിശദീകരിക്കാൻ സൈക്കിൾ ഗിയറുകൾ പോലെയുള്ള യഥാർത്ഥ ലോക ഉദാഹരണങ്ങൾ ചർച്ച ചെയ്യുക.'
      },
      {
        type: 'h2',
        en: 'Student Summary Sheet',
        ml: 'വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ കുറിപ്പ്'
      },
      {
        type: 'p',
        en: '1. Formulas: MA = L/E, VR = d_E/d_L, Efficiency = (MA/VR) * 100.\n2. Lever Classes: FLE (1st: Fulcrum middle, 2nd: Load middle, 3rd: Effort middle).\n3. Pulleys: Fixed (MA=1, changes direction), Movable (MA=2, reduces effort).\n4. Gears: Large driving small = more speed, less torque. Small driving large = less speed, more torque.',
        ml: '1. സമവാക്യങ്ങൾ: MA = L/E, VR = d_E/d_L, ക്ഷമത = (MA/VR) * 100.\n2. ഉത്തോലക വർഗ്ഗങ്ങൾ: FLE (1-ാമത്: ആധാരബിന്ദു നടുവിൽ, 2-ാമത്: ഭാരം നടുവിൽ, 3-ാമത്: യത്നം നടുവിൽ).\n3. കപ്പികൾ: സ്ഥിരകപ്പി (MA=1, ദിശ മാറ്റുന്നു), ചലനക്കപ്പി (MA=2, യത്നം കുറയ്ക്കുന്നു).\n4. ഗിയറുകൾ: വലുത് ചെറുതിനെ കറക്കുമ്പോൾ = വേഗത കൂടുതൽ, ടോർക്ക് കുറവ്. ചെറുത് വലുതിനെ കറക്കുമ്പോൾ = വേഗത കുറവ്, ടോർക്ക് കൂടുതൽ.'
      }
    ]
  },
  glossary: [],
  quiz: [
  {
    "q_id": "u7_q1",
    "type": "mcq",
    "stem": {
      "en": "Which energy resource will eventually run out?",
      "ml": "ഒടുവിൽ തീർന്നുപോകുന്ന ഊർജ്ജ സ്രോതസ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Wind energy",
          "ml": "കാറ്റ് ഊർജ്ജം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Fossil fuels",
          "ml": "ഫോസിൽ ഇന്ധനങ്ങൾ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Solar energy",
          "ml": "സൗര ഊർജ്ജം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Tidal energy",
          "ml": "വേലിയേറ്റ ഊർജ്ജം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Fossil fuels (coal, oil, gas) are non-renewable and will eventually be exhausted.",
      "ml": "ഫോസിൽ ഇന്ധനങ്ങൾ (കൽക്കരി, എണ്ണ, വാതകം) ഒടുക്കം ഇല്ലാതാകും."
    }
  },
  {
    "q_id": "u7_q2",
    "type": "mcq",
    "stem": {
      "en": "Which is a renewable energy source?",
      "ml": "ഒരു നവീകരണ ഊർജ്ജ സ്രോതസ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Petroleum",
          "ml": "കച്ചഎണ്ണ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Coal",
          "ml": "കൽക്കരി"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Solar energy",
          "ml": "സൗര ഊർജ്ജം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Natural gas",
          "ml": "പ്രകൃതി വാതകം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Solar, wind, hydro, and tidal are all renewable sources.",
      "ml": "ആദ്യ ഊർജ്ജ, കാറ്റ്, ജലം, വേലിയേറ്റം - ഇവ എല്ലാം നവീകരണ ഊർജ്ജ സ്രോതസ്."
    }
  },
  {
    "q_id": "u7_q3",
    "type": "mcq",
    "stem": {
      "en": "What is the main cause of the greenhouse effect?",
      "ml": "ഹരിത ഗൃഹ പ്രഭാവത്തിന്റെ പ്രധാന കാരണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Too much oxygen",
          "ml": "വളരെ കൂടുതൽ ഓക്സിജൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Greenhouse gases like CO₂, CH₄",
          "ml": "CO₂, CH₄ തുടങ്ങിയ ഹരിത ഗൃഹ വാതകങ്ങൾ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Ozone formation",
          "ml": "ഓസോൺ ഉൽദ്ദേശ്യം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Solar flares",
          "ml": "സൗര ജ്വാലകൾ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Greenhouse gases trap heat in the atmosphere, causing global warming.",
      "ml": "ഹരിതഗൃഹ വാതകങ്ങൾ ഭൂ താരം ഉൾക്കൊണ്ടിട്ട് ഭൂ ഊഷ്മാവ് ഉയർത്തുന്നു."
    }
  },
  {
    "q_id": "u7_q4",
    "type": "mcq",
    "stem": {
      "en": "Photovoltaic cells convert:",
      "ml": "ഫോട്ടോ വൊൾട്ടൈക് (PV) ഘടകം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Heat to electrical energy",
          "ml": "ചൂട് → വൈദ്യുതം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Light to electrical energy",
          "ml": "പ്രകാശം → വൈദ്യുതം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Electric to static energy",
          "ml": "വൈദ്യുതം → സ്ഥിര ഊർജ്ജം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Chemical to mechanical",
          "ml": "രാസ → യാന്ത്രിക"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Solar PV cells directly convert sunlight into electricity.",
      "ml": "ഫോട്ടോ വൊൾട്ടൈക് ഘടകം (Solar Panel) സൂര്യ പ്രകാശം → വൈദ്യുതം."
    }
  },
  {
    "q_id": "u7_q5",
    "type": "mcq",
    "stem": {
      "en": "A solar cooker concentrates sunlight using:",
      "ml": "ഒരു സൗര ഉടലുകൂട്ടൽ ഉപകരണം (Solar Cooker) ഏതിനെ ഉപയോഗിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Plane mirror",
          "ml": "പ്ലേൻ ദർപ്പണം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Concave mirror/reflector",
          "ml": "ആനത ദർപ്പണം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Glass prism",
          "ml": "ഗ്ലാസ്സ് പ്രിസ്‌മ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Optical fibre",
          "ml": "ഒപ്റ്റിക്കൽ ഫൈബർ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Solar cookers use concave reflectors to focus sunlight on food.",
      "ml": "ആനത ദർപ്പണം (Concave reflector) ഉപ‌ കൊണ്ട് ഭക്ഷ്യ ഘട്ടത്ത് സൂര്യ ഊർജ്ജം കേ‌ൻദ്രീകരിക്കുന്നു."
    }
  },
  {
    "q_id": "u7_q6",
    "type": "mcq",
    "stem": {
      "en": "Biogas mainly contains:",
      "ml": "ബയോ ഗ്യാസ് ഏതിൽ ഉൾക്കൊള്ളുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Hydrogen",
          "ml": "ഹൈഡ്രജൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Methane (CH₄)",
          "ml": "മീഥേൻ (CH₄)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Oxygen",
          "ml": "ഓക്സിജൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Carbon dioxide",
          "ml": "CO₂"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Biogas is primarily methane, produced from organic waste.",
      "ml": "ജൈവ മാലിന്യ ദ്രവ്യ ഭ്രഷ്ടത്തിൽ ഉൽദ്ദേശ്യം, CH₄ ആണ് ബയോ ഗ്യാസ്."
    }
  },
  {
    "q_id": "u7_q7",
    "type": "mcq",
    "stem": {
      "en": "The law of conservation of energy states that:",
      "ml": "ഊർജ്ജ സംരക്ഷണ നിയമം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Energy can be created at will",
          "ml": "ഊർജ്ജം യഥേഷ്ടം സൃഷ്ടിക്കാം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Energy cannot be created or destroyed, only converted",
          "ml": "ഊർജ്ജം സൃഷ്ടിക്കാൻ അথവ നശിപ്പിക്കാൻ ആവില്ല, മൂർത്തീഭവനം ആകും"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Total energy in universe keeps decreasing",
          "ml": "ഊർജ്ജ ആകെ കുറഞ്ഞ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Kinetic energy equals potential energy",
          "ml": "ഗതിക ഊർജ്ജം = ശേഷി ഊർജ്ജം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Energy can only change form, not be created or destroyed.",
      "ml": "ഊർജ്ജം സൃഷ്ടിക്കാൻ അഥവ നശിപ്പിക്കാൻ ആകില്ല, ഒരു രൂപത്തിൽ നിന്ന് മറ്റൊന്നിലേക്ക് മൂർത്തീഭവനം ആകും."
    }
  },
  {
    "q_id": "u7_q8",
    "type": "mcq",
    "stem": {
      "en": "Nuclear fission releases energy by:",
      "ml": "ന്യൂക്ലിയർ ഫിഷൻ ഊർജ്ജം ഉൽദ്ദേശ്യം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Adding protons to a nucleus",
          "ml": "ഒരു neumകൽ പ്രോട്ടോൺ ചേർക്കൽ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Splitting a heavy nucleus into smaller ones",
          "ml": "കനം ഉള്ള ന്യൂക്ലിയസ് ചെറിയ ഭാഗ ആകൽ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Combining two light nuclei",
          "ml": "ലഘു ന്യൂക്ലിയസ് ഒരുമിക്കൽ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Burning in high temperature",
          "ml": "ഉയർന്ന ഊഷ്മാവ് ദഹനം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "A heavy nucleus (like U-235) splits into smaller nuclei, releasing huge energy.",
      "ml": "കനം ഉള്ള U-235 ന്യൂക്ലിയസ് ചെറിയ ഭാഗ ആകൽ ഊർജ്ജ ഉൽദ്ദേശ്യം."
    }
  },
  {
    "q_id": "u7_q9",
    "type": "mcq",
    "stem": {
      "en": "Nuclear fusion involves:",
      "ml": "ന്യൂക്ലിയർ ഫ്യൂഷൻ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Splitting of heavy nuclei",
          "ml": "കനം ഉള്ള ന്യൂക്ലിയസ് ഭ്രഷ്ടം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Joining of light nuclei to form heavier ones",
          "ml": "ലഘു ന്യൂക്ലിയസ് ഒരുമിപ്പ് ഭാരം ഉള്ള ഉൽദ്ദേശ്യം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Burning of fossil fuels",
          "ml": "ഫോസിൽ ഇന്ധന ദഹനം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Conversion of heat to motion",
          "ml": "ചൂട് → ചലനം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Fusion is the energy source of the sun (hydrogen nuclei fusing into helium).",
      "ml": "ഹൈഡ്രജൻ ന്യൂക്ലിയസ് ഒരുമിപ്പ് ഹീലിയം ആകൽ - ഇതാണ് സൂര്യ ഊർജ്ജ ഉൽദ്ദേശ്യ തത്വം."
    }
  },
  {
    "q_id": "u7_q10",
    "type": "mcq",
    "stem": {
      "en": "The energy stored in fossil fuels is actually:",
      "ml": "ഫോസിൽ ഇന്ധനത്തിൽ ഉള്ള ഊർജ്ജ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Geothermal energy",
          "ml": "ഭൂ‌ ഊഷ്‌മ ഊർജ്ജം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Ancient solar energy stored in organic matter",
          "ml": "ഒരു കാലത്ത് ഓർഗാനിക് ദ്രവ്യ ശ്രേഖരിച്ച ഊർജ്ജം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Nuclear energy",
          "ml": "ന്യൂക്ലിയർ ഊർജ്ജം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Tide energy",
          "ml": "വേലിയേറ്റ ഊർജ്ജം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Fossil fuels were formed from ancient organic matter that stored solar energy.",
      "ml": "ഫോസിൽ ഇന്ധനം ഒരു കോടി വർഷ മുമ്പ് ജൈവ ദ്രവ്യ ആഗിരണം ചെയ്ത ഊർജ്ജം."
    }
  },
  {
    "q_id": "u7_q11",
    "type": "mcq",
    "stem": {
      "en": "What is the main advantage of nuclear power over fossil fuels?",
      "ml": "ഫോസിൽ ഇന്ധനേക്കാൾ ന്യൂക്ലിയർ ഊർജ്ജത്തിന്റെ മേൻമ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "No waste produced",
          "ml": "മാലിന്യം ഇല്ല"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Generates large energy with little fuel and less greenhouse gases",
          "ml": "കുറഞ്ഞ ഇന്ധനം, ഉയർന്ന ഊർജ്ജം, ഹരിതഗൃഹ വാതകം ഇല്ല"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Available everywhere",
          "ml": "എല്ലായിടത്തും ലഭ്യം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Completely safe with no radiation",
          "ml": "ആകർഷ ഗൂഢ, ആർദ്ര ഇല്ല"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Nuclear power releases more energy per kilogram with low greenhouse gas emissions.",
      "ml": "ന്യൂക്ലിയർ ഊർജ്ജം ഒരു kg ഇന്ധനത്തിൽ നിന്ന് ഫോസിൽ ഇന്ധനേക്കാൾ ഉയർന്ന ഊർജ്ജം ഉൽദ്ദേശ്യം, ഏറ്റ ഗ്രീൻഹൗസ് ഗ്യാസ് ഇല്ലാതെ."
    }
  },
  {
    "q_id": "u7_q12",
    "type": "mcq",
    "stem": {
      "en": "Wind energy is harnessed using:",
      "ml": "കാറ്റ് ഊർജ്ജ ഉൾക്കൊള്ളൽ ഉപകരണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Turbines (windmills)",
          "ml": "ടർബൈൻ (കാറ്റ് കൽ ആൽ)"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Solar panels",
          "ml": "സൗര ഫലക"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Nuclear reactors",
          "ml": "ന്യൂക്ലിയർ ർൊ..."
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Geothermal pumps",
          "ml": "ഭൂ‌ ഊഷ്‌മ പമ്പ്"
        }
      }
    ],
    "answer": "A",
    "difficulty": "easy",
    "explanation": {
      "en": "Wind turbines (windmills) convert kinetic energy of wind into electricity.",
      "ml": "ടർബൈൻ (windmill) കാറ്റ് ഗതിക ഊർജ്ജം → വൈദ്യുതം."
    }
  },
  {
    "q_id": "u7_q13",
    "type": "mcq",
    "stem": {
      "en": "In a hydroelectric power plant, energy is converted from:",
      "ml": "ജലവൈദ്യുതി ജനേ പ്ലാൻ്റ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Chemical to electrical",
          "ml": "രാസ → വൈദ്യുതം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Gravitational potential energy to electrical",
          "ml": "ഗതി শক്তி ഊർജ്ജം → ← →ŒVW →"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Nuclear to electrical",
          "ml": "ന്യൂക്ലിയർ → ←"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Solar to electrical",
          "ml": "സൗര → ←"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Water at height has potential energy → flows down → drives turbines → produces electricity.",
      "ml": "ഏത്തം ഉള്ള ജലം ഗുരുത്വ ഊർജ്ജം → ടർബൈൻ → വൈദ്യുതം."
    }
  },
  {
    "q_id": "u7_q14",
    "type": "mcq",
    "stem": {
      "en": "Which fuel produces the most pollution?",
      "ml": "ഏത് ഇന്ധനം ഏറ്റ മലിനീകരണം ഉണ്ടാക്കും?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "CNG",
          "ml": "CNG"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "LPG",
          "ml": "LPG"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Coal",
          "ml": "കൽക്കരി"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Solar",
          "ml": "സൗര ഊർജ്ജം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Coal combustion releases the most greenhouse gases and pollutants.",
      "ml": "കൽക്കരി ദഹനം ഏറ്റ ഹരിതഗൃഹ വാതകവും മലിനൻ ഉൽദ്ദേശ്യം."
    }
  },
  {
    "q_id": "u7_q15",
    "type": "mcq",
    "stem": {
      "en": "Tidal energy is generated by:",
      "ml": "വേലിയേറ്റ ഊർജ്ജ ഉൽദ്ദേശ്യ ആധാരം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Waves only",
          "ml": "തരംഗ മാത്രം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Gravity of moon and sun causing tides",
          "ml": "ചന്ദ്ര ഗ്ര, സൂര്യ ആകർഷ ഉണ്ടാക്കുന്ന വേലിയേറ്റ/ ഇറക്കം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Ocean temperature difference",
          "ml": "സമുദ്ര ഊഷ്‌മ അന്തരം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Undersea volcanoes",
          "ml": "കടൽ ഉള്ളിലെ അഗ്‌നിപർ..."
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Tidal energy comes from the gravitational pull of the Moon and Sun creating tidal highs and lows.",
      "ml": "ചന്ദ്ര-സൂര്യ ആകർഷ ഉണ്ടാക്കുന്ന വേലിയേറ്റം/ഇറക്കം ഉൽദ്ദേശ്യ ഊർജ്ജം ആണ് tidal energy."
    }
  },
  {
    "q_id": "u7_q16",
    "type": "mcq",
    "stem": {
      "en": "Solar panels must be placed facing:",
      "ml": "സൗര ഫലക ഏത് ദിശ ഉൾ‌ ഇരിക്കണം?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "North",
          "ml": "ഉത്തര ദിശ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "South (in northern hemisphere)",
          "ml": "ദക്ഷിണ ദിശ (ഉത്തര ഗോളം)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "East",
          "ml": "കിഴക്ക്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "West",
          "ml": "പടിഞ്ഞാറ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "In the northern hemisphere, south-facing panels receive the most sunlight.",
      "ml": "ഉത്തര ഗോളം: ദക്ഷിണ ദിശ ഇരിക്കൽ ഏറ്റ ഊർജ്ജ ലഭ്യ."
    }
  },
  {
    "q_id": "u7_q17",
    "type": "mcq",
    "stem": {
      "en": "Which of the following does NOT emit greenhouse gases during operation?",
      "ml": "ഊർജ്ജ ഉൽദ്ദേശ്യ ഘടനയിൽ ഹരിത ഗൃഹ വാതകം ഉൽദ്ദേശ്യം ഇല്ലാത്ത ഊർജ്ജം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Coal plant",
          "ml": "കൽക്കരി ജ‌ നേ ഘട്ടം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Oil refinery",
          "ml": "ഓയിൽ റിഫൈൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Solar power",
          "ml": "സൗര ഊർജ്ജം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Gas turbine",
          "ml": "ഗ്യാസ് ടർബൈൻ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Solar energy generates no greenhouse gases during operation.",
      "ml": "സൗര ഊർജ്ജ ഉൽദ്ദേശ്യ ഘടനയിൽ ഹരിത ഗൃഹ വാതകം ഇല്ല."
    }
  },
  {
    "q_id": "u7_q18",
    "type": "mcq",
    "stem": {
      "en": "The unit of electrical energy used for billing is:",
      "ml": "ഊർജ്ജ ബിൽ ഉദ്ദേശ്യ ഊർജ്ജ യൂണിറ്റ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Watt",
          "ml": "വാട്ട്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Joule",
          "ml": "ജൂൾ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "kWh (kilowatt-hour)",
          "ml": "kWh (കിലോ‌ വാട്ട്-ആwatch)"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Calorie",
          "ml": "കലോറി"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Electricity is billed in kilowatt-hours (kWh), also called a 'unit'.",
      "ml": "ഒരു 'Unit' = 1 kWh = 1000W × 1hr."
    }
  },
  {
    "q_id": "u7_q19",
    "type": "mcq",
    "stem": {
      "en": "1 kilowatt-hour (kWh) in Joules is:",
      "ml": "1 kWh = ? Joules:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "1000 J",
          "ml": "1000 J"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "3,600,000 J",
          "ml": "36,00,000 J"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "1,000,000 J",
          "ml": "10,00,000 J"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "360 J",
          "ml": "360 J"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "1 kWh = 1000W × 3600s = 3,600,000 J = 3.6 × 10⁶ J.",
      "ml": "1 kWh = 3.6 × 10⁶ J."
    }
  },
  {
    "q_id": "u7_q20",
    "type": "mcq",
    "stem": {
      "en": "The most environmentally friendly power plant is:",
      "ml": "ഏറ്റ പരിസ്ഥ‌ ഭ്ര ഊർജ്ജ ഘട്ടം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Coal power plant",
          "ml": "കൽക്കരി ജ‌നേ ഘട്ടം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Diesel power plant",
          "ml": "ഡീസൽ ഘട്ടം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Solar or Wind power plant",
          "ml": "സൗര/ കാറ്റ് ഊർജ്ജ ഘട്ടം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Nuclear power plant",
          "ml": "ന്യൂക്ലിയർ ഘട്ടം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Solar and wind power produce no emissions during operation.",
      "ml": "സൗര-കാറ്റ് ഊർജ്ജ ഘട്ടം ഉൽദ്ദേശ്യ ഘടനയിൽ ഹരിത ഗൃഹ വാതകം ഇല്ല."
    }
  },
  {
    "q_id": "u7_q21",
    "type": "mcq",
    "stem": {
      "en": "The formula for electrical energy consumed is:",
      "ml": "ഊർജ്ജ ഉൽദ്ദേശ്യ ഉണ്ടാക്കൽ ഫോർമുല:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "E = V/t",
          "ml": "E = V/t"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "E = P × t",
          "ml": "E = P × t"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "E = I/t",
          "ml": "E = I/t"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "E = R × t",
          "ml": "E = R × t"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Electrical energy E = Power (P) × time (t), where P is in watts and t in seconds.",
      "ml": "ഊർജ്ജ E = P × t."
    }
  },
  {
    "q_id": "u7_q22",
    "type": "mcq",
    "stem": {
      "en": "An electric bulb of 100W working for 5 hours consumes how many units of electricity?",
      "ml": "100W ബൾബ് 5 hrs പ്രവൃത്ത, ഊർജ്ജ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "5 units",
          "ml": "5 Units"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "0.5 units",
          "ml": "0.5 Units"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "500 units",
          "ml": "500 Units"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "50 units",
          "ml": "50 Units"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Energy = 100W × 5h = 500Wh = 0.5 kWh = 0.5 units.",
      "ml": "100W × 5h = 500Wh = 0.5 kWh."
    }
  },
  {
    "q_id": "u7_q23",
    "type": "mcq",
    "stem": {
      "en": "BEE (Bureau of Energy Efficiency) promotes:",
      "ml": "BEE ഉദ്ദേശ്യം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Energy wastage",
          "ml": "ഊർജ്ജ ദ്ര‌ ..."
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Energy conservation and efficient use of energy",
          "ml": "ഊർജ്ജ സംർ, ഊർജ്ജ ദക്ഷ ഉൽദ്ദേശ്യ ഉദ്ദേശ്യം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Free electricity for all",
          "ml": "എല്ലാർക്കും ഉൽദ്ദേശ്യ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Nuclear energy only",
          "ml": "ന്യൂക്ലിയർ ഊർജ്ജ മാത്ര"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "BEE promotes energy efficiency in India through regulations and star ratings appliances.",
      "ml": "BEE ഊർജ്ജ ദക്ഷ ഉൽദ്ദേശ്യം Star Rating ഉൾദ്ദേശ്യം."
    }
  },
  {
    "q_id": "u7_q24",
    "type": "mcq",
    "stem": {
      "en": "Geothermal energy comes from:",
      "ml": "ഭൂ‌ ഊഷ്‌മ ഊർജ്ജ ഉൽദ്ദേശ്യ ആധാരം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Burning gases",
          "ml": "വാതക ദഹ‌‌‌"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Heat from inside the Earth",
          "ml": "ഭൂ ആഭ്യന്തര താൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Sun's heat only",
          "ml": "സൂര്യ ചൂട്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Ocean tides",
          "ml": "സമുദ്ര വേലിയേറ്റ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Geothermal energy uses heat from the Earth's interior.",
      "ml": "ഭൂ ആഭ്യന്തര ഊഷ്‌മ ആണ് ഭൂ‌ ഊഷ്‌മ ഊർജ്ജ ഉൽദ്ദേശ്യ ആധാരം."
    }
  },
  {
    "q_id": "u7_q25",
    "type": "mcq",
    "stem": {
      "en": "Which gas is considered the primary greenhouse gas?",
      "ml": "ഏത് വാതകം ആണ് ഹരിത ഗൃഹ ഗ്യാസ് (GHG)?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Oxygen",
          "ml": "ഓക്സിജൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Carbon dioxide (CO₂)",
          "ml": "CO₂"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Nitrogen",
          "ml": "നൈട്രജൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Argon",
          "ml": "ആർഗൺ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "CO₂ is the main greenhouse gas produced by human activities.",
      "ml": "CO₂ ആണ് മനുഷ്യ ക്രിയ ഉൽദ്ദേശ്യ പ്രധാന GHG."
    }
  },
  {
    "q_id": "u7_q26",
    "type": "mcq",
    "stem": {
      "en": "Energy star rating on appliances indicates:",
      "ml": "ഉപകരണ Star Rating ഉദ്ദേശ്യം ‌:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "The power in watts",
          "ml": "ശക്തി (Watts)"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Energy efficiency (more stars = more efficient)",
          "ml": "ഊർജ്ജ ദക്ഷ (കൂടുതൽ നക്ഷത്ര = കൂടുതൽ ദക്ഷ)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Durability in years",
          "ml": "ഉൽദ്ദേശ്യ കാലാവധി"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Country of manufacture",
          "ml": "ഉൽദ്ദേശ്യ ദേശം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "More stars = higher efficiency = lower electricity bill.",
      "ml": "കൂടുതൽ Stars = ഊർജ്ജ ദക്ഷ = കുറഞ്ഞ ബിൽ."
    }
  },
  {
    "q_id": "u7_q27",
    "type": "mcq",
    "stem": {
      "en": "Which of the following is NOT a method to conserve energy?",
      "ml": "ഊർജ്ജ സംർ ഉൾദ്ദേശ്യ ഉൽദ്ദേശ്യ ഇല്ലാത്ത:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Using CFL instead of incandescent bulbs",
          "ml": "CFL = Incandescent ്ജ കുറ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Installing solar panels",
          "ml": "സൗര ഫലക ഹ..."
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Leaving appliances in standby mode",
          "ml": "ഉൽദ്ദേശ്യ Standby mode"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Using energy-efficient cars",
          "ml": "ഊ ദ‌ കാർ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "Standby mode still consumes power (\"phantom load\"). Always switch off appliances completely.",
      "ml": "Standby ഘടന ഊർജ്ജ \"phantom load\" ആയ ഉൽദ്ദേശ്യ, off ആകൽ."
    }
  }
]
} as const;
