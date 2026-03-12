import { Lesson } from './curriculum';

export const physicsUnit1: Lesson = {
  id: "sc-phy-10-sound",
  title: { en: "Sound Waves", ml: "ശബ്ദ തരംഗങ്ങൾ" },
  estimated_time_mins: 60,
  videos: [
    {
      title: "Sound Waves - Chapter 1",
      url: "https://youtu.be/NmK_0a0-tUA?si=_NMobmQj4ENB-I0Q"
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
      q_id: "q1",
      type: "mcq",
      stem: { en: "What is the SI unit of frequency?", ml: "ആവൃത്തിയുടെ SI യൂണിറ്റ് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Metre", ml: "മീറ്റർ" } },
        { k: "B", text: { en: "Second", ml: "സെക്കൻഡ്" } },
        { k: "C", text: { en: "Hertz", ml: "ഹെർട്സ്" } },
        { k: "D", text: { en: "Newton", ml: "ന്യൂട്ടൺ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Frequency is measured in Hertz (Hz).", ml: "ആവൃത്തി അളക്കുന്നത് ഹെർട്സിലാണ് (Hz)." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "What is the minimum distance to hear an echo in air?", ml: "വായുവിലൂടെ പ്രതിധ്വനി കേൾക്കാൻ ആവശ്യമായ കുറഞ്ഞ അകലം എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "10 m", ml: "10 മീറ്റർ" } },
        { k: "B", text: { en: "17.5 m", ml: "17.5 മീറ്റർ" } },
        { k: "C", text: { en: "34 m", ml: "34 മീറ്റർ" } },
        { k: "D", text: { en: "100 m", ml: "100 മീറ്റർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The minimum distance is approximately 17.5 m based on sound speed and persistence of hearing.", ml: "ശബ്ദവേഗതയും ശ്രവണസ്ഥിരതയും അടിസ്ഥാനമാക്കി കുറഞ്ഞ അകലം ഏകദേശം 17.5 മീറ്റർ ആണ്." }
    }
  ]
} as const;
