import { Lesson } from './curriculum';

export const physicsUnit1: Lesson = {
  id: "sc-phy-10-sound",
  title: { en: "Sound Waves", ml: "ശബ്ദ തരംഗങ്ങൾ" },
  estimated_time_mins: 60,
  videos: [
    {
      title: "Quick revision (Exam oriented)",
      url: "https://www.youtube.com/watch?v=s0OctuQTrkE"
    }
  ],
  learning_objectives: [
    { id: "lo1", text: { en: "Understand oscillatory motion and its characteristics.", ml: "ദോലന ചലനവും അതിന്റെ സവിശേഷതകളും മനസ്സിലാക്കുക." } },
    { id: "lo2", text: { en: "Explain the relation between period and frequency.", ml: "പിരിയഡും ആവൃത്തിയും തമ്മിലുള്ള ബന്ധം വിശദീകരിക്കുക." } },
    { id: "lo3", text: { en: "Differentiate between natural frequency, forced vibration, and resonance.", ml: "തനത് ആവൃത്തി, പ്രേരിത കമ്പനം, അനുനാദം എന്നിവ തിരിച്ചറിയുക." } },
    { id: "lo4", text: { en: "Classify waves into mechanical and electromagnetic, longitudinal and transverse.", ml: "തരംഗങ്ങളെ യാന്ത്രികം, വൈദ്യുതകാന്തികം, അനുദൈർഘ്യം, അനുപ്രസ്ഥം എന്നിങ്ങനെ തരംതിരിക്കുക." } },
    { id: "lo5", text: { en: "Understand reflection of sound, echo, and reverberation.", ml: "ശബ്ദത്തിന്റെ പ്രതിപതനം, പ്രതിധ്വനി, അനുരണനം എന്നിവ മനസ്സിലാക്കുക." } }
  ],
  content: {
    intro: {
      en: "Sound is a form of energy that produces the sensation of hearing in our ears. It travels in the form of waves through a medium.",
      ml: "നമ്മുടെ ചെവിയിൽ ശ്രവണാനുഭവം ഉണ്ടാക്കുന്ന ഒരു ഊർജ്ജ രൂപമാണ് ശബ്ദം. ഇത് തരംഗ രൂപത്തിലാണ് ഒരു മാധ്യമത്തിലൂടെ സഞ്ചരിക്കുന്നത്."
    },
    core: {
      en: "This chapter covers the fundamental concepts of sound, including oscillatory motion, wave characteristics, reflection, and the limits of audibility.",
      ml: "ഈ അധ്യായം ദോലന ചലനം, തരംഗ സവിശേഷതകൾ, പ്രതിപതനം, ശ്രവണ പരിധി എന്നിവയുൾപ്പെടെയുള്ള ശബ്ദത്തിന്റെ അടിസ്ഥാന ആശയങ്ങൾ ഉൾക്കൊള്ളുന്നു."
    },
    blocks: [
      { type: 'h2', en: '1. Oscillatory Motion', ml: '1. ദോലന ചലനം' },
      { type: 'img', en: 'Oscillatory motion of a swing', ml: 'ഊഞ്ഞാലിന്റെ ദോലന ചലനം', customId: 'swing-animation' },
      { type: 'p', en: 'Oscillation is a periodic motion in which an object moves to and fro at regular intervals of time about its equilibrium position.', ml: 'ഒരു വസ്തു അതിന്റെ സന്തുലിതാവസ്ഥയെ (equilibrium position) അടിസ്ഥാനമാക്കി തുല്യ സമയവേളകളിൽ മുന്നോട്ടും പിന്നോട്ടും നടത്തുന്ന ചലനമാണ് ദോലനം (Oscillation).' },
      { type: 'h3', en: 'Amplitude (a)', ml: 'ആയതി (a)' },
      { type: 'p', en: 'The magnitude of maximum displacement to one side from its equilibrium position is amplitude. SI unit: metre (m).', ml: 'സന്തുലിതാവസ്ഥയിൽ നിന്ന് ഒരു വശത്തേക്കുള്ള പരമാവധി സ്ഥാനാന്തരമാണ് ആയതി (Amplitude). SI യൂണിറ്റ്: മീറ്റർ (m).' },
      { type: 'p', en: 'One Oscillation: An oscillation is completed when the body returns to its initial position in the same direction from where it started.', ml: 'ഒരു ദോലനം: ഒരു വസ്തു എവിടെ നിന്നാണോ ചലനം തുടങ്ങിയത്, അതേ സ്ഥാനത്തേക്ക് അതേ ദിശയിൽ തിരിച്ചെത്തുമ്പോഴാണ് ഒരു ദോലനം പൂർത്തിയാകുന്നത്.' },
      
      { type: 'h2', en: '2. Period and Frequency', ml: '2. പിരിയഡും ആവൃത്തിയും' },
      { type: 'img', en: 'Pendulum oscillation', ml: 'പെൻഡുലം ദോലനം', customId: 'pendulum-simulation' },
      { type: 'p', en: 'Period (T): The time taken for one oscillation. SI unit: second (s).', ml: 'പിരിയഡ് (T): ഒരു ദോലനം പൂർത്തിയാക്കാൻ എടുക്കുന്ന സമയമാണ് പിരിയഡ്. SI യൂണിറ്റ്: സെക്കൻഡ് (s).' },
      { type: 'p', en: 'Frequency (f): The number of oscillations in one second. SI unit: hertz (Hz).', ml: 'ആവൃത്തി (f): ഒരു സെക്കൻഡിൽ ഉണ്ടാകുന്ന ദോലനങ്ങളുടെ എണ്ണമാണ് ആവൃത്തി. SI യൂണിറ്റ്: ഹെർട്സ് (Hz).' },
      { type: 'formula', en: 'Frequency (f) = 1 / Period (T)', ml: 'ആവൃത്തി (f) = 1 / പിരിയഡ് (T)' },
      { type: 'p', en: 'As the period increases, frequency decreases. When the length of the pendulum increases, frequency decreases.', ml: 'പിരിയഡ് കൂടുമ്പോൾ ആവൃത്തി കുറയുന്നു. പെൻഡുലത്തിന്റെ നീളം കൂടുമ്പോൾ ആവൃത്തി കുറയുന്നു.' },
      
      { type: 'h2', en: '3. Natural Frequency, Forced Vibration & Resonance', ml: '3. തനത് ആവൃത്തി, പ്രേരിത കമ്പനം, അനുനാദം' },
      { type: 'img', en: 'Resonance in tuning forks', ml: 'ട്യൂണിംഗ് ഫോർക്കുകളിലെ അനുനാദം', customId: 'resonance-simulation' },
      { type: 'p', en: 'Natural Frequency: When an object vibrates freely, it vibrates in its innate frequency. Factors influencing it: Length, Size, Nature of material, Elasticity.', ml: 'തനത് ആവൃത്തി: ഒരു വസ്തു സ്വതന്ത്രമായി കമ്പനം ചെയ്യുമ്പോൾ അത് അതിന്റേതായ ആവൃത്തിയിലാണ് കമ്പനം ചെയ്യുന്നത്. സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ: നീളം, വലിപ്പം, വസ്തുവിന്റെ സ്വഭാവം, ഇലാസ്തികത.' },
      { type: 'p', en: 'Forced Vibration: Vibration of an object induced by an external vibrating object.', ml: 'പ്രേരിത കമ്പനം: പുറത്തുനിന്നുള്ള മറ്റൊരു കമ്പനം ചെയ്യുന്ന വസ്തുവിന്റെ സ്വാധീനം മൂലം ഒരു വസ്തുവിനുണ്ടാകുന്ന കമ്പനമാണ് പ്രേരിത കമ്പനം.' },
      { type: 'p', en: 'Resonance: If the natural frequency of the forcing object and that of the forced object are equal, the objects are said to be in resonance. They vibrate with maximum amplitude.', ml: 'അനുനാദം: സ്വാധീനിക്കുന്ന വസ്തുവിന്റെയും സ്വാധീനിക്കപ്പെടുന്ന വസ്തുവിന്റെയും തനത് ആവൃത്തികൾ തുല്യമാകുമ്പോൾ ആ വസ്തുക്കൾ അനുനാദത്തിലാണെന്ന് പറയുന്നു. ഇവ പരമാവധി ആയതിയിൽ കമ്പനം ചെയ്യുന്നു.' },
      { type: 'p', en: 'Applications: MRI scanning, Radio tuning, Musical instruments, Stethoscope.', ml: 'ഉപയോഗങ്ങൾ: MRI സ്കാനിംഗ്, റേഡിയോ ട്യൂണിംഗ്, സംഗത ഉപകരണങ്ങൾ, സ്റ്റെതസ്കോപ്പ്.' },
      
      { type: 'h2', en: '4. Wave Motion', ml: '4. തരംഗ ചലനം' },
      { type: 'img', en: 'Wave propagation in water', ml: 'ജലത്തിലെ തരംഗ പ്രേഷണം', customId: 'waves-simulation' },
      { type: 'p', en: 'The continuous propagation of energy from one part to the other through oscillations without any displacement of the medium particles is called wave motion.', ml: 'മാധ്യമത്തിലെ കണികകൾക്ക് സ്ഥാനാന്തരം സംഭവിക്കാതെ, കമ്പനങ്ങളിലൂടെ ഊർജ്ജം നിരന്തരമായി പ്രേഷണം ചെയ്യുന്ന രീതിയാണ് തരംഗ ചലനം.' },
      { type: 'h3', en: 'Classification of Waves', ml: 'തരംഗങ്ങളുടെ വർഗ്ഗീകരണം' },
      { type: 'table', tableData: {
          headers: [{en: 'Require Medium (Mechanical)', ml: 'മാധ്യമം ആവശ്യമായവ (യാന്ത്രികം)'}, {en: 'No Medium Required (Electromagnetic)', ml: 'മാധ്യമം ആവശ്യമില്ലാത്തവ (വൈദ്യുതകാന്തികം)'}],
          rows: [
            [{en: 'Sound waves', ml: 'ശബ്ദ തരംഗങ്ങൾ'}, {en: 'Light waves', ml: 'പ്രകാശ തരംഗങ്ങൾ'}],
            [{en: 'Seismic waves', ml: 'ഭൂകമ്പ തരംഗങ്ങൾ'}, {en: 'Radio waves', ml: 'റേഡിയോ തരംഗങ്ങൾ'}],
            [{en: 'Water ripples', ml: 'ജല തരംഗങ്ങൾ'}, {en: 'X-rays, Microwaves', ml: 'എക്സ്-റേ, മൈക്രോവേവ്'}]
          ]
      }},
      
      { type: 'h3', en: 'Longitudinal vs Transverse Waves', ml: 'അനുദൈർഘ്യ തരംഗങ്ങളും അനുപ്രസ്ഥ തരംഗങ്ങളും' },
      { type: 'img', en: 'Longitudinal vs Transverse waves', ml: 'അനുദൈർഘ്യ - അനുപ്രസ്ഥ തരംഗങ്ങൾ', customId: 'wave-types-simulation' },
      { type: 'p', en: '1. Longitudinal Waves: Particles vibrate parallel to wave propagation. Forms compressions (high pressure) and rarefactions (low pressure). Sound is a longitudinal wave.', ml: '1. അനുദൈർഘ്യ തരംഗങ്ങൾ: കണികകൾ തരംഗസഞ്ചാര ദിശയ്ക്ക് സമാന്തരമായി കമ്പനം ചെയ്യുന്നു. സാന്ദ്രീകരണങ്ങളും വിരളീകരണങ്ങളും ഉണ്ടാകുന്നു. ശബ്ദം ഒരു അനുദൈർഘ്യ തരംഗമാണ്.' },
      { type: 'p', en: '2. Transverse Waves: Particles vibrate perpendicular to wave propagation. Forms crests (elevated) and troughs (lowest). Electromagnetic waves are transverse.', ml: '2. അനുപ്രസ്ഥ തരംഗങ്ങൾ: കണികകൾ തരംഗസഞ്ചാര ദിശയ്ക്ക് ലംബമായി കമ്പനം ചെയ്യുന്നു. ശൃംഗങ്ങളും ഗർത്തങ്ങളും ഉണ്ടാകുന്നു. വൈദ്യുതകാന്തിക തരംഗങ്ങൾ അനുപ്രസ്ഥ തരംഗങ്ങളാണ്.' },
      
      { type: 'h2', en: '5. Characteristics of Waves', ml: '5. തരംഗങ്ങളുടെ സവിശേഷതകൾ' },
      { type: 'p', en: 'Wavelength (λ): Distance between two consecutive particles in the same phase. SI unit: metre (m).', ml: 'തരംഗദൈർഘ്യം (λ): ഒരേ കമ്പനാവസ്ഥയിലുള്ള അടുത്തടുത്ത രണ്ട് കണികകൾ തമ്മിലുള്ള അകലം. SI യൂണിറ്റ്: മീറ്റർ (m).' },
      { type: 'formula', en: 'Speed of a wave (v) = frequency (f) × wavelength (λ)', ml: 'തരംഗവേഗത (v) = ആവൃത്തി (f) × തരംഗദൈർഘ്യം (λ)' },
      { type: 'p', en: 'When speed is constant, frequency is inversely proportional to wavelength.', ml: 'തരംഗവേഗത സ്ഥിരമായിരിക്കുമ്പോൾ, ആവൃത്തി തരംഗദൈർഘ്യത്തിന് വിപരീതാനുപാതത്തിലായിരിക്കും.' },
      
      { type: 'h2', en: '6. Reflection of Sound', ml: '6. ശബ്ദത്തിന്റെ പ്രതിപതനം' },
      { type: 'img', en: 'Reflection of sound waves', ml: 'ശബ്ദ തരംഗങ്ങളുടെ പ്രതിപതനം', customId: 'reflection-simulation' },
      { type: 'p', en: 'Sound waves reflect when they hit objects. Smooth surfaces reflect sound more effectively.', ml: 'ശബ്ദ തരംഗങ്ങൾ വസ്തുക്കളിൽ തട്ടുമ്പോൾ പ്രതിപതിക്കുന്നു. മിനുസമുള്ള പ്രതലങ്ങൾ ശബ്ദത്തെ നന്നായി പ്രതിപതിപ്പിക്കുന്നു.' },
      { type: 'p', en: 'Multiple Reflection: Reflected sound waves getting reflected again (e.g., Stethoscope).', ml: 'ബഹുല പ്രതിപതനം: പ്രതിപതിച്ച ശബ്ദ തരംഗങ്ങൾ വീണ്ടും പ്രതിപതിക്കുന്നതിനെ ബഹുല പ്രതിപതനം എന്ന് വിളിക്കുന്നു.' },
      { type: 'h3', en: 'Echo and Reverberation', ml: 'പ്രതിധ്വനിയും മാറ്റൊലിയും' },
      { type: 'p', en: 'Echo: Sound heard after a while due to reflection. Persistence of hearing is 0.1 s. Minimum distance required: 17.5 m.', ml: 'പ്രതിധ്വനി (Echo): പ്രതിപതനം മൂലം അല്പസമയത്തിനുശേഷം കേൾക്കുന്ന ശബ്ദം. ശ്രവണസ്ഥിരത 0.1 s ആണ്. ആവശ്യമായ കുറഞ്ഞ അകലം 17.5 മീറ്റർ.' },
      { type: 'p', en: 'Reverberation: Lingering of sound even after the original sound has ceased due to multiple reflection.', ml: 'മാറ്റൊലി അഥവാ അനുരണനം (Reverberation): ബഹുല പ്രതിപതനം കാരണം ശബ്ദം നീണ്ടുനിൽക്കുന്ന പ്രതിഭാസം.' },
      
      { type: 'h2', en: '7. Limits of Audibility', ml: '7. ശ്രവണ പരിധി' },
      { type: 'p', en: 'Audible to humans: 20 Hz to 20,000 Hz (20 kHz).', ml: 'മനുഷ്യന്റെ ശ്രവണ പരിധി: 20 Hz മുതൽ 20,000 Hz വരെ.' },
      { type: 'p', en: 'Infrasonic: Below 20 Hz (e.g., Elephants).', ml: 'ഇൻഫ്രാസോണിക്: 20 Hz-ൽ താഴെ (ഉദാ: ആനകൾ).' },
      { type: 'p', en: 'Ultrasonic: Above 20,000 Hz (e.g., Bats, Dogs).', ml: 'അൾട്രാസോണിക്: 20,000 Hz-ൽ കൂടുതൽ (ഉദാ: വവ്വാലുകൾ, നായ്ക്കൾ).' },
      
      { type: 'h2', en: '8. Uses of Ultrasonic Waves', ml: '8. അൾട്രാസോണിക് തരംഗങ്ങളുടെ ഉപയോഗങ്ങൾ' },
      { type: 'img', en: 'Ultrasonography', ml: 'അൾട്രാസൊണോഗ്രാഫി', customId: 'ultrasound-simulation' },
      { type: 'p', en: 'Medical diagnosis (Ultrasonography), Crushing kidney stones, Cleaning machine parts, SONAR.', ml: 'രോഗനിർണ്ണയം (അൾട്രാസൊണോഗ്രാഫി), വൃക്കയിലെ കല്ലുകൾ പൊടിക്കാൻ, യന്ത്രഭാഗങ്ങൾ വൃത്തിയാക്കാൻ, സോണാർ (SONAR).' },
      
      { type: 'h2', en: '9. Harmful Waves', ml: '9. വിനാശകാരികളായ തരംഗങ്ങൾ' },
      { type: 'p', en: 'Seismic Waves: Travel through Earth\'s crust during earthquakes. Measured by Richter scale.', ml: 'ഭൂകമ്പ തരംഗങ്ങൾ: ഭൂകമ്പ സമയത്ത് ഭൂമിയുടെ പുറംതോടിലൂടെ സഞ്ചരിക്കുന്നവ. റിക്ടർ സ്കെയിൽ ഉപയോഗിച്ച് അളക്കുന്നു.' },
      { type: 'p', en: 'Tsunami: Gigantic ocean waves caused by displacement of large volumes of water.', ml: 'സുനാമി: കടലിൽ വൻതോതിൽ ജലത്തിന് സ്ഥാനഭ്രംശം സംഭവിക്കുന്നതുമൂലം ഉണ്ടാകുന്ന ഭീമാകാരമായ തിരമാലകൾ.' },

      { type: 'h2', en: 'Practice Questions & Answers', ml: 'പരിശീലന ചോദ്യങ്ങളും ഉത്തരങ്ങളും' },
      { type: 'h3', en: 'Q1: What is the difference between natural frequency and resonance?', ml: 'ചോദ്യം 1: തനത് ആവൃത്തിയും അനുനാദവും തമ്മിലുള്ള വ്യത്യാസം എന്ത്?' },
      { type: 'p', en: 'Answer: Natural frequency is the innate frequency at which an object vibrates freely. Resonance occurs when the natural frequency of an external forcing object becomes equal to the natural frequency of the forced object, causing it to vibrate with maximum amplitude.', ml: 'ഉത്തരം: ഒരു വസ്തു സ്വതന്ത്രമായി കമ്പനം ചെയ്യുമ്പോൾ അത് അതിന്റേതായ ഏത് ആവൃത്തിയിലാണോ കമ്പനം ചെയ്യുന്നത്, അതാണ് തനത് ആവൃത്തി. സ്വാധീനിക്കുന്ന വസ്തുവിന്റെ തനത് ആവൃത്തിയും സ്വാധീനിക്കപ്പെടുന്ന വസ്തുവിന്റെ തനത് ആവൃത്തിയും തുല്യമാകുമ്പോൾ അവ പരമാവധി ആയതിയിൽ കമ്പനം ചെയ്യുന്ന അവസ്ഥയാണ് അനുനാദം.' },
      { type: 'h3', en: 'Q2: If a pendulum takes 0.5 s to complete one oscillation, what is its frequency?', ml: 'ചോദ്യം 2: ഒരു പെൻഡുലം ഒരു ദോലനം പൂർത്തിയാക്കാൻ 0.5 s എടുക്കുന്നുവെങ്കിൽ, അതിന്റെ ആവൃത്തി എന്ത്?' },
      { type: 'p', en: 'Answer: Frequency (f) = 1 / Period (T) = 1 / 0.5 = 2 Hz.', ml: 'ഉത്തരം: ആവൃത്തി (f) = 1 / പിരിയഡ് (T) = 1 / 0.5 = 2 Hz.' },
      { type: 'h3', en: 'Q3: What is the minimum distance for echo in water (Speed = 1480 m/s)?', ml: 'ചോദ്യം 3: ജലത്തിൽ പ്രതിധ്വനി കേൾക്കാനുള്ള കുറഞ്ഞ അകലം എത്ര? (വേഗത = 1480 m/s)' },
      { type: 'p', en: 'Answer: Distance (d) = (Speed × Time) / 2 = (1480 × 0.1) / 2 = 74 m.', ml: 'ഉത്തരം: അകലം (d) = (വേഗത × സമയം) / 2 = (1480 × 0.1) / 2 = 74 m.' }
    ]
  },
  glossary: [
    { term: { en: "Oscillation", ml: "ദോലനം" }, definition: { en: "To and fro motion about an equilibrium position.", ml: "സന്തുലിതാവസ്ഥയെ അടിസ്ഥാനമാക്കിയുള്ള മുന്നോട്ടും പിന്നോട്ടുമുള്ള ചലനം." } },
    { term: { en: "Resonance", ml: "അനുനാദം" }, definition: { en: "Vibration with maximum amplitude when frequencies match.", ml: "ആവൃത്തികൾ തുല്യമാകുമ്പോൾ പരമാവധി ആയതിയിലുള്ള കമ്പനം." } },
    { term: { en: "Wavelength", ml: "തരംഗദൈർഘ്യം" }, definition: { en: "Distance between two consecutive similar points in a wave.", ml: "തരംഗത്തിലെ അടുത്തടുത്ത ഒരേപോലെയുള്ള രണ്ട് ബിന്ദുക്കൾ തമ്മിലുള്ള അകലം." } }
  ],
  quiz: [
  {
    "q_id": "u1_q1",
    "type": "mcq",
    "stem": {
      "en": "Sound travels as which type of wave in air?",
      "ml": "വായുവിലൂടെ ശബ്ദം ഏത് തരം തരംഗമായാണ് സഞ്ചരിക്കുന്നത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Transverse wave",
          "ml": "അനുപ്രസ്ഥ തരംഗം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Longitudinal wave",
          "ml": "അനുദൈർഘ്യ തരംഗം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Electromagnetic wave",
          "ml": "വൈദ്യുതകാന്തിക തരംഗം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Non-mechanical wave",
          "ml": "അയാന്ത്രിക തരംഗം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "In air, sound travels as compressions and rarefactions, making it a longitudinal wave.",
      "ml": "വായുവിൽ ശബ്ദം കംപ്രഷനുകളായും റെയർഫാക്ഷനുകളായുമാണ് സഞ്ചരിക്കുന്നത്, അതിനാൽ ഇത് അനുദൈർഘ്യ തരംഗമാണ്."
    }
  },
  {
    "q_id": "u1_q2",
    "type": "mcq",
    "stem": {
      "en": "The maximum displacement of a particle from its mean position is called:",
      "ml": "ഒരു കണികയ്ക്ക് അതിന്റെ മധ്യസ്ഥാനത്തുനിന്നുണ്ടാകുന്ന പരമാവധി സ്ഥാനാന്തരമാണ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Wavelength",
          "ml": "തരംഗദൈർഘ്യം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Frequency",
          "ml": "ആവൃത്തി"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Amplitude",
          "ml": "ആയതി"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Time period",
          "ml": "പിരിയഡ്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Amplitude marks the maximum displacement of the oscillating particle.",
      "ml": "ദോലനം ചെയ്യുന്ന കണികയുടെ പരമാവധി സ്ഥാനാന്തരത്തെ ആയതി എന്ന് വിളിക്കുന്നു."
    }
  },
  {
    "q_id": "u1_q3",
    "type": "mcq",
    "stem": {
      "en": "What is the relation between frequency (f) and period (T)?",
      "ml": "ആവൃത്തിയും (f) പിരിയഡും (T) തമ്മിലുള്ള ബന്ധമെന്ത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "f = T",
          "ml": "f = T"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "f = 1/T",
          "ml": "f = 1/T"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "f = T²",
          "ml": "f = T²"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "f = 2T",
          "ml": "f = 2T"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Frequency is the reciprocal of the time period.",
      "ml": "ആവൃത്തി പിരിയഡിന്റെ വ്യുൽക്രമമാണ്."
    }
  },
  {
    "q_id": "u1_q4",
    "type": "mcq",
    "stem": {
      "en": "The number of oscillations in one second is termed as:",
      "ml": "ഒരു സെക്കൻഡിലുണ്ടാകുന്ന ദോലനങ്ങളുടെ എണ്ണമാണ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Time period",
          "ml": "പിരിയഡ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Frequency",
          "ml": "ആവൃത്തി"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Wavelength",
          "ml": "തരംഗദൈർഘ്യം"
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
    "difficulty": "easy",
    "explanation": {
      "en": "This is the definition of frequency.",
      "ml": "ഇത് ആവൃത്തിയുടെ നിർവചനമാണ്."
    }
  },
  {
    "q_id": "u1_q5",
    "type": "mcq",
    "stem": {
      "en": "Which factor distinguishes a shrill sound from a hoarse sound?",
      "ml": "കൂർത്ത ശബ്ദത്തെയും പരുക്കൻ ശബ്ദത്തെയും വേർതിരിക്കുന്ന ഘടകം ഏതാണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Pitch",
          "ml": "പിച്ച്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Loudness",
          "ml": "ഉച്ചത"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Speed",
          "ml": "വേഗത"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Echo",
          "ml": "പ്രതിധ്വനി"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "Pitch (frequency) helps us identify the sharpness of a sound.",
      "ml": "ശബ്ദത്തിന്റെ കൂർമത തിരിച്ചറിയാൻ പിച്ച് (ആവൃത്തി) സഹായിക്കുന്നു."
    }
  },
  {
    "q_id": "u1_q6",
    "type": "mcq",
    "stem": {
      "en": "Which of the following determines the loudness of a sound?",
      "ml": "താഴെ പറയുന്നവയിൽ ഏതാണ് ശബ്ദത്തിന്റെ ഉച്ചത നിർണ്ണയിക്കുന്നത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Frequency",
          "ml": "ആവൃത്തി"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Time period",
          "ml": "പിരിയഡ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Amplitude",
          "ml": "ആയതി"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Wave speed",
          "ml": "തരംഗ വേഗത"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "A higher amplitude results in a louder sound.",
      "ml": "ഉയർന്ന ആയതി കൂടിയ ശബ്ദത്തിന് കാരണമാകുന്നു."
    }
  },
  {
    "q_id": "u1_q7",
    "type": "mcq",
    "stem": {
      "en": "What is the normal human hearing frequency range?",
      "ml": "മനുഷ്യന്റെ സാധാരണ ശ്രവണ പരിധി എത്രയാണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "20 Hz - 20,000 Hz",
          "ml": "20 Hz - 20,000 Hz"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "10 Hz - 10,000 Hz",
          "ml": "10 Hz - 10,000 Hz"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "50 Hz - 50,000 Hz",
          "ml": "50 Hz - 50,000 Hz"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "100 Hz - 10,000 Hz",
          "ml": "100 Hz - 10,000 Hz"
        }
      }
    ],
    "answer": "A",
    "difficulty": "easy",
    "explanation": {
      "en": "Humans can only hear frequencies between 20 Hz and 20 kHz.",
      "ml": "മനുഷ്യർക്ക് 20 Hz നും 20,000 Hz നും ഇടയിലുള്ള ആവൃത്തികൾ മാത്രമേ കേൾക്കാൻ കഴിയൂ."
    }
  },
  {
    "q_id": "u1_q8",
    "type": "mcq",
    "stem": {
      "en": "Frequencies above 20,000 Hz are known as:",
      "ml": "20,000 Hz ന് മുകളിലുള്ള ആവൃത്തികൾ അറിയപ്പെടുന്നത്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Infrasonic",
          "ml": "ഇൻഫ്രാസോണിക്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Supersonic",
          "ml": "സൂപ്പർസോണിക്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Ultrasonic",
          "ml": "അൾട്രാസോണിക്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Megasonic",
          "ml": "മെഗാസോണിക്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Sounds above the human hearing limit are called ultrasonic.",
      "ml": "മനുഷ്യന്റെ ശ്രവണ പരിധിക്ക് മുകളിലുള്ള ശബ്ദങ്ങളെ അൾട്രാസോണിക് എന്ന് വിളിക്കുന്നു."
    }
  },
  {
    "q_id": "u1_q9",
    "type": "mcq",
    "stem": {
      "en": "Which animal relies on ultrasonic waves to navigate?",
      "ml": "സഞ്ചരിക്കാൻ അൾട്രാസോണിക് തരംഗങ്ങളെ ആശ്രയിക്കുന്ന മൃഗം ഏതാണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Elephant",
          "ml": "ആന"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Bat",
          "ml": "വവ്വാൽ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Lion",
          "ml": "സിംഹം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Eagle",
          "ml": "കഴുകൻ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Bats use echolocation via ultrasonic waves to find prey.",
      "ml": "ഇരപിടിക്കാൻ വവ്വാലുകൾ അൾട്രാസോണിക് തരംഗങ്ങൾ ഉപയോഗിച്ച് എക്കോലൊക്കേഷൻ നടത്തുന്നു."
    }
  },
  {
    "q_id": "u1_q10",
    "type": "mcq",
    "stem": {
      "en": "What is the speed of sound in air at 25°C roughly?",
      "ml": "25°C ൽ വായുവിൽ കൂടെയുള്ള ശബ്ദത്തിന്റെ വേഗത ഏകദേശം എത്രയാണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "1500 m/s",
          "ml": "1500 മീ/സെക്കൻഡ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "300,000 m/s",
          "ml": "300,000 മീ/സെക്കൻഡ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "346 m/s",
          "ml": "346 മീ/സെക്കൻഡ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "5000 m/s",
          "ml": "5000 മീ/സെക്കൻഡ്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "Sound travels faster in warmer air, usually around 346 m/s at 25°C.",
      "ml": "ഊഷ്മാവ് കൂടുമ്പോൾ ശബ്ദ വേഗത വർദ്ധിക്കുന്നു, 25°C-ൽ ഇത് ഏകദേശം 346 m/s ആണ്."
    }
  },
  {
    "q_id": "u1_q11",
    "type": "mcq",
    "stem": {
      "en": "In which medium does sound travel the fastest?",
      "ml": "ഏത് മാധ്യമത്തിലാണ് ശബ്ദം ഏറ്റവും വേഗത്തിൽ സഞ്ചരിക്കുന്നത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Oxygen Gas",
          "ml": "ഓക്സിജൻ വാതകം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Water",
          "ml": "ജലം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Steel",
          "ml": "സ്റ്റീൽ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Vacuum",
          "ml": "ശൂന്യസ്ഥലം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Sound travels much faster in solids (like steel) compared to liquids or gases.",
      "ml": "ദ്രാവകങ്ങളെയോ വാതകങ്ങളെയോ അപേക്ഷിച്ച് ഖരവസ്തുക്കളിൽ (സ്റ്റീൽ പോലെയുള്ള) ശബ്ദം വേഗത്തിൽ സഞ്ചരിക്കുന്നു."
    }
  },
  {
    "q_id": "u1_q12",
    "type": "mcq",
    "stem": {
      "en": "The persistence of hearing in a normal human ear is:",
      "ml": "സാധാരണ മനുഷ്യന്റെ ചെവിയിലെ ശ്രവണസ്ഥിരത എത്രയാണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "0.1 second",
          "ml": "0.1 സെക്കൻഡ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "0.5 second",
          "ml": "0.5 സെക്കൻഡ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "1 second",
          "ml": "1 സെക്കൻഡ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "2 seconds",
          "ml": "2 സെക്കൻഡ്"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "The sensation of sound remains in ear for 1/10th of a second.",
      "ml": "ശബ്ദത്തിന്റെ അനുഭവം ചെവിയിൽ 1/10 സെക്കൻഡ് നീണ്ടുനിൽക്കുന്നു."
    }
  },
  {
    "q_id": "u1_q13",
    "type": "mcq",
    "stem": {
      "en": "To hear a distinct echo, what must be the minimum distance of the obstacle?",
      "ml": "വ്യക്തമായ പ്രതിധ്വനി കേൾക്കണമെങ്കിൽ തടസ്സത്തിലേക്കുള്ള കുറഞ്ഞ അകലം എത്രയായിരിക്കണം?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "10 m",
          "ml": "10 മീറ്റർ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "17 m",
          "ml": "17 മീറ്റർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "34 m",
          "ml": "34 മീറ്റർ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "50 m",
          "ml": "50 മീറ്റർ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "Sound must travel back and forth in >0.1s. (340 * 0.1)/2 = 17m.",
      "ml": "പ്രതിധ്വനി കേൾക്കാൻ ദൂരം കുറഞ്ഞത് 17 മീറ്റർ ആയിരിക്കണം."
    }
  },
  {
    "q_id": "u1_q14",
    "type": "mcq",
    "stem": {
      "en": "Multiple reflections of sound in a closed room causing a lingering effect is called:",
      "ml": "അടഞ്ഞ മുറിയിൽ ശബ്ദം പലതവണ പ്രതിപതിച്ചുണ്ടാകുന്ന നീണ്ടുനിൽക്കുന്ന അവസ്ഥയെ പറയുന്ന പേര്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Echo",
          "ml": "പ്രതിധ്വനി"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Resonance",
          "ml": "അനുനാദം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Reverberation",
          "ml": "അനുരണനം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Interference",
          "ml": "ഇടപെടൽ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "Reverberation is the continuation of sound due to multiple reflections.",
      "ml": "ഒന്നിലധികം പ്രതിപതനം മൂലം ശബ്ദം നീണ്ടുനിൽക്കുന്നതാണ് അനുരണനം."
    }
  },
  {
    "q_id": "u1_q15",
    "type": "mcq",
    "stem": {
      "en": "Which medical instrument relies on multiple reflection of sound?",
      "ml": "ശബ്ദത്തിന്റെ ബഹുല പ്രതിപതനം അടിസ്ഥാനമാക്കി പ്രവർത്തിക്കുന്ന വൈദ്യ ഉപകരണം ഏത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Thermometer",
          "ml": "തെർമോമീറ്റർ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Stethoscope",
          "ml": "സ്റ്റെതസ്കോപ്പ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Endoscope",
          "ml": "എൻഡോസ്കോപ്പ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Barometer",
          "ml": "ബാരോമീറ്റർ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "A stethoscope uses multiple reflections to channel heartbeats to the ear.",
      "ml": "ഹൃദയമിടിപ്പ് കൂടുതൽ വ്യക്തമായി കേൾക്കാൻ സ്റ്റെതസ്കോപ്പിൽ ശബ്ദത്തിന്റെ ബഹുല പ്രതിപതനം ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u1_q16",
    "type": "mcq",
    "stem": {
      "en": "SONAR stands for:",
      "ml": "SONAR-ന്റെ പൂർണ്ണരൂപം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Sound Navigation and Ranging",
          "ml": "സൗണ്ട് നാവിഗേഷൻ ആൻഡ് റേഞ്ചിംഗ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Sound Note and Radius",
          "ml": "സൗണ്ട് നോട്ട് ആൻഡ് റേഡിയസ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Sonic Natural Resonance",
          "ml": "സോണിക് നാച്ചുറൽ റെസൊണൻസ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Solar Navigation and Radar",
          "ml": "സോളാർ നാവിഗേഷൻ ആൻഡ് റഡാർ"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "SONAR uses ultrasonic waves for Sound Navigation And Ranging.",
      "ml": "അൾട്രാസോണിക് തരംഗങ്ങൾ ഉപയോഗിക്കുന്ന സൗണ്ട് നാവിഗേഷൻ ആൻഡ് റേഞ്ചിംഗ് ആണ് SONAR."
    }
  },
  {
    "q_id": "u1_q17",
    "type": "mcq",
    "stem": {
      "en": "If a wave has a frequency of 50 Hz, what is its period?",
      "ml": "ഒരു തരംഗത്തിന്റെ ആവൃത്തി 50 Hz ആണെങ്കിൽ അതിന്റെ പിരിയഡ് എത്ര?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "2 seconds",
          "ml": "2 സെക്കൻഡ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "0.5 second",
          "ml": "0.5 സെക്കൻഡ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "0.02 second",
          "ml": "0.02 സെക്കൻഡ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "50 seconds",
          "ml": "50 സെക്കൻഡ്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "hard",
    "explanation": {
      "en": "Period T = 1/f = 1/50 = 0.02 s.",
      "ml": "പിരിയഡ് T = 1/f = 1/50 = 0.02 സെക്കൻഡ്."
    }
  },
  {
    "q_id": "u1_q18",
    "type": "mcq",
    "stem": {
      "en": "Natural frequency depends on:",
      "ml": "തനത് ആവൃത്തി എന്തിനെയൊക്കെ ആശ്രയിച്ചിരിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Nature, shape and dimensions of the body",
          "ml": "വസ്തുവിന്റെ പ്രകൃതം, ആകൃതി, വലിപ്പം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Speed of sound",
          "ml": "ശബ്ദ വേഗത"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Time context alone",
          "ml": "സമയത്തിന്റെ ഘടകം മാത്രം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Atmospheric pressure",
          "ml": "അന്തരീക്ഷമർദ്ദം"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "Natural frequency is inherent to the object's physical dimensions and material.",
      "ml": "തനത് ആവൃത്തി വസ്തുവിന്റെ ഭൗതിക അളവുകളെയും മെറ്റീരിയലിനെയുമാണ് ആശ്രയിച്ചിരിക്കുന്നത്."
    }
  },
  {
    "q_id": "u1_q19",
    "type": "mcq",
    "stem": {
      "en": "When an external force vibrates a body exactly at its natural frequency, it leads to:",
      "ml": "ഒരു ബാഹ്യബലം ഒരു വസ്തുവിനെ അതിന്റെ തനത് ആവൃത്തിയിൽ കമ്പനം ചെയ്യിക്കുമ്പോൾ ഉണ്ടാകുന്നത്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Damping",
          "ml": "ഡാംപിംഗ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Resonance",
          "ml": "അനുനാദം"
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
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "Resonance occurs when the driving frequency matches the natural frequency.",
      "ml": "ബാഹ്യബലത്തിന്റെ ആവൃത്തി തനത് ആവൃത്തിയോട് സമമാകുമ്പോഴാണ് അനുനാദം ഉണ്ടാകുന്നത്."
    }
  },
  {
    "q_id": "u1_q20",
    "type": "mcq",
    "stem": {
      "en": "Why do soldiers break steps while crossing a bridge?",
      "ml": "സൈനികർ ഒരു പാലം കടക്കുമ്പോൾ ക്രമബദ്ധമായി നടക്കാത്തത് എന്തുകൊണ്ട്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "To avoid causing resonance with the bridge",
          "ml": "പാലത്തിൽ അനുനാദം ഉണ്ടാക്കാതിരിക്കാൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "To walk faster",
          "ml": "വേഗത്തിൽ നടക്കാൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "To save energy",
          "ml": "ഊർജ്ജം സംരക്ഷിക്കാൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "To avoid slipping",
          "ml": "വഴുതാതിരിക്കാൻ"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "Synchronized marching can hit the bridge's natural frequency, causing resonant collapse.",
      "ml": "എല്ലാവരും ഒരേ താളത്തിൽ നടക്കുന്നത് പാലത്തിന്റെ തനത് ആവൃത്തിയിൽ അനുനാദമുണ്ടാക്കി അതിനെ തകർക്കാൻ സാധ്യതയുണ്ട്."
    }
  },
  {
    "q_id": "u1_q21",
    "type": "mcq",
    "stem": {
      "en": "Ultrasonic waves are commonly used in which scanning technology?",
      "ml": "ഏത് സ്കാനിംഗ് സാങ്കേതികവിദ്യയിലാണ് അൾട്രാസോണിക് തരംഗങ്ങൾ ഉപയോഗിക്കുന്നത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "MRI",
          "ml": "എം.ആർ.ഐ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "X-Ray",
          "ml": "എക്സ്-റേ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "CT Scan",
          "ml": "സി.ടി സ്കാൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Ultrasound Scanning (Sonography)",
          "ml": "അൾട്രാസൗണ്ട് സ്കാനിംഗ്"
        }
      }
    ],
    "answer": "D",
    "difficulty": "easy",
    "explanation": {
      "en": "Sonography uses high-frequency sound to image soft tissues.",
      "ml": "സോണോഗ്രാഫിയിൽ മൃദുകോശങ്ങളുടെ ചിത്രം പകർത്താൻ ഉയർന്ന ആവൃത്തിയുള്ള ശബ്ദം ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u1_q22",
    "type": "mcq",
    "stem": {
      "en": "Distance calculation in SONAR is given by:",
      "ml": "SONAR-ൽ ദൂരം കാണ്ടെത്താനുള്ള സമവാക്യം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "d = v * t",
          "ml": "d = v * t"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "d = (v * t) / 2",
          "ml": "d = (v * t) / 2"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "d = v / t",
          "ml": "d = v / t"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "d = 2 * v * t",
          "ml": "d = 2 * v * t"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "Distance is vt/2 because the sound travels to the object and back.",
      "ml": "തരംഗം പോയി വരുന്ന ദൂരമായതുകൊണ്ട് ദൂരം സമം വേഗത * സമയം ഭാഗം 2 ആയിരിക്കും."
    }
  },
  {
    "q_id": "u1_q23",
    "type": "mcq",
    "stem": {
      "en": "Bats locate their prey using the principle of:",
      "ml": "ഇരയെ കണ്ടെത്താൻ വവ്വാലുകൾ ഉപയോഗിക്കുന്ന തത്വം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Refraction",
          "ml": "അപവർത്തനം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Absorption",
          "ml": "ആഗിരണം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Echo",
          "ml": "പ്രതിധ്വനി (എക്കോലൊക്കേഷൻ)"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Interference",
          "ml": "ഇന്റർഫെറൻസ്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Echolocation relies on recording echos of ultrasonic squeaks.",
      "ml": "അൾട്രാസോണിക് ശബ്ദങ്ങളുടെ പ്രതിധ്വനിയാണ് എക്കോലൊക്കേഷന് സഹായിക്കുന്നത്."
    }
  },
  {
    "q_id": "u1_q24",
    "type": "mcq",
    "stem": {
      "en": "True or False: Pitch depends directly on Amplitude.",
      "ml": "പിച്ച് (Pitch) ആയതിയെ (Amplitude) നേരിട്ട് ആശ്രയിക്കുന്നു. ശരിയോ തെറ്റോ?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "True",
          "ml": "ശരി"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "False",
          "ml": "തെറ്റ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Only in vacuum",
          "ml": "ശൂന്യസ്ഥലത്ത് മാത്രം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Only in liquids",
          "ml": "ദ്രാവകങ്ങളിൽ മാത്രം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Pitch depends on Frequency, while Loudness depends on Amplitude.",
      "ml": "പിച്ച് ആവൃത്തിയെയും ഉച്ചത ആയതിയെയും ആശ്രയിക്കുന്നു."
    }
  },
  {
    "q_id": "u1_q25",
    "type": "mcq",
    "stem": {
      "en": "The property of a sound wave that determines its color/identity (timbre) is:",
      "ml": "വ്യത്യസ്ത വാദ്യോപകരണങ്ങളുടെ ഒരേപോലെയുള്ള ശബ്ദം വേർതിരിച്ചറിയാൻ സഹായിക്കുന്ന സവിശേഷത:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Waveform",
          "ml": "തരംഗ രൂപം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Amplitude",
          "ml": "ആയതി"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Wavelength",
          "ml": "തരംഗദൈർഘ്യം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Velocity",
          "ml": "പ്രവേഗം"
        }
      }
    ],
    "answer": "A",
    "difficulty": "hard",
    "explanation": {
      "en": "Timbre (quality) depends on the exact shape or mixture of waveforms.",
      "ml": "ശബ്ദത്തിന്റെ ഗുണനിലവാരം (ടിമ്പർ) തരംഗങ്ങളുടെ കൃത്യമായ രൂപത്തെ ആശ്രയിച്ചിരിക്കുന്നു."
    }
  },
  {
    "q_id": "u1_q26",
    "type": "mcq",
    "stem": {
      "en": "A tuning fork marked ‘512’ indicates:",
      "ml": "ഒരു ട്യൂണിംഗ് ഫോർക്കിൽ '512' എന്ന് രേഖപ്പെടുത്തിയിരിക്കുന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Its weight in grams",
          "ml": "അതിന്റെ ഭാരം (ഗ്രാമി)"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Its length in mm",
          "ml": "അതിന്റെ നീളം (മി.മീ)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Its resonant frequency is 512 Hz",
          "ml": "അതിന്റെ തനത് ആവൃത്തി 512 Hz ആണ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Its maximum amplitude",
          "ml": "അതിന്റെ പരമാവധി ആയതി"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "It oscillates 512 times per second.",
      "ml": "ഇത് ഒരു സെക്കൻഡിൽ 512 തവണ ദോലനം ചെയ്യുന്നു എന്നാണ് അർത്ഥമാക്കുന്നത്."
    }
  },
  {
    "q_id": "u1_q27",
    "type": "mcq",
    "stem": {
      "en": "Megaphones and horns operate on the basis of:",
      "ml": "മെഗാഫോണുകളും ഹോണുകളും പ്രവർത്തിക്കുന്നതിന്റെ അടിസ്ഥാനം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Repeated reflection of sound",
          "ml": "ശബ്ദത്തിന്റെ ബഹുല പ്രതിപതനം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Refraction",
          "ml": "അപവർത്തനം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Resonance",
          "ml": "അനുനാദം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Dispersion",
          "ml": "വിസരണം"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "A horn aims sound forward by restricting it via multiple reflections inside the tube.",
      "ml": "കുഴലിലൂടെയുള്ള ബഹുല പ്രതിപതനം വഴിയാണ് ഇത്തരം ഉപകരണങ്ങൾ ശബ്ദം ഒരു പ്രത്യേക ദിശയിലേക്ക് അയക്കുന്നത്."
    }
  },
  {
    "q_id": "u1_q28",
    "type": "mcq",
    "stem": {
      "en": "During a thunderstorm, why is lightning seen before thunder is heard?",
      "ml": "ഇടിമിന്നൽ ഉണ്ടാകുമ്പോൾ ഇടിശബ്ദം കേൾക്കുന്നതിനേക്കാൾ മുമ്പ് മിന്നൽ കാണുന്നത് എന്തുകൊണ്ട്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Sound is produced later",
          "ml": "ശബ്ദം വൈകി ഉണ്ടാകുന്നു"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Eyes react faster than ears",
          "ml": "കണ്ണുകൾ കൂടുതൽ വേഗത്തിൽ പ്രതികരിക്കുന്നു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Light travels significantly faster than sound",
          "ml": "പ്രകാശം ശബ്ദത്തേക്കാൾ വളരെ വേഗത്തിൽ സഞ്ചരിക്കുന്നു"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Sound gets absorbed",
          "ml": "ശബ്ദം ആഗിരണം ചെയ്യപ്പെടുന്നു"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Light speed (3x10^8 m/s) is vastly greater than sound speed (~340 m/s).",
      "ml": "പ്രകാശവേഗത ശബ്ദവേഗതയേക്കാൾ ലക്ഷക്കണക്കിന് മടങ്ങ് കൂടുതലാണെന്നതാണ് കാരണം."
    }
  },
  {
    "q_id": "u1_q29",
    "type": "mcq",
    "stem": {
      "en": "The SI unit of Amplitude is:",
      "ml": "ആയതിയുടെ SI യൂണിറ്റ് എന്താണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Hertz",
          "ml": "ഹെർട്സ്"
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
          "en": "Second",
          "ml": "സെക്കൻഡ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Decibel",
          "ml": "ഡെസിബെൽ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Amplitude is a measure of displacement (distance), so its SI unit is the metre (m).",
      "ml": "ആയതി എന്നത് മാക്സിമം സ്ഥാനാന്തരമായതിനാൽ (ദൂരം) അത് മീറ്ററിലാണ് അളക്കുന്നത്."
    }
  },
  {
    "q_id": "u1_q30",
    "type": "mcq",
    "stem": {
      "en": "Which phenomenon proves that sound requires a medium to travel?",
      "ml": "ശബ്ദത്തിന് സഞ്ചരിക്കാൻ മാധ്യമം ആവശ്യമാണെന്ന് തെളിയിക്കുന്ന പരീക്ഷണം ഏത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Bell jar experiment",
          "ml": "ബെൽ ജാർ പരീക്ഷണം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Prism experiment",
          "ml": "പ്രിസം പരീക്ഷണം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Double slit experiment",
          "ml": "ഡബിൾ സ്ളിറ്റ് പരീക്ഷണം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Newton's rings",
          "ml": "ന്യൂട്ടൺസ് റിംഗ്സ്"
        }
      }
    ],
    "answer": "A",
    "difficulty": "easy",
    "explanation": {
      "en": "The vacuum bell jar experiment demonstrates that without air, the bell's sound cannot be heard.",
      "ml": "വായു ഇല്ലാത്ത ശൂന്യസ്ഥലത്ത് ഘടികാര ശബ്ദം കേൾക്കാനാകില്ല എന്ന് ബെൽ ജാർ പരീക്ഷണം തെളിയിക്കുന്നു."
    }
  }
]
} as const;
