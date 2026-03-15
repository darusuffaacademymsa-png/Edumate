import { Lesson } from './curriculum';

export const physicsUnit3: Lesson = {
  id: "phy-u3",
  title: {
    en: "Chapter 3: The World of Colours and Vision",
    ml: "അധ്യായം 3: വർണ്ണങ്ങളുടെ ലോകവും കാഴ്ചയും"
  },
  estimated_time_mins: 90,
  videos: [
    {
      title: "Quick revision (Exam oriented)",
      url: "https://www.youtube.com/watch?v=ytHqcJwq_ew"
    }
  ],
  learning_objectives: [
    { id: "lo1", text: { en: "Explain refraction through a prism and the phenomenon of dispersion.", ml: "പ്രിസത്തിലൂടെയുള്ള അപവർത്തനവും പ്രകീർണ്ണനവും വിശദീകരിക്കുക." } },
    { id: "lo2", text: { en: "Understand the formation of a rainbow and recombination of colours.", ml: "മഴവില്ല് രൂപീകരണവും വർണ്ണങ്ങളുടെ സംയോജനവും മനസ്സിലാക്കുക." } },
    { id: "lo3", text: { en: "Identify primary, secondary, and complementary colours of light.", ml: "പ്രകാശത്തിന്റെ പ്രാഥമിക, ദ്വിതീയ, പൂരക വർണ്ണങ്ങളെ തിരിച്ചറിയുക." } },
    { id: "lo4", text: { en: "Explain scattering of light and its real-life examples like blue sky and red sunset.", ml: "പ്രകാശത്തിന്റെ വിസരണവും ആകാശം നീലയാകുന്നതും ഉദയാസ്തമയങ്ങളിൽ സൂര്യൻ ചുവക്കുന്നതും വിശദീകരിക്കുക." } },
    { id: "lo5", text: { en: "Describe eye defects like Myopia and Hypermetropia and their rectification.", ml: "ഹ്രസ്വദൃഷ്ടി, ദീർഘദൃഷ്ടി തുടങ്ങിയ കണ്ണിന്റെ ന്യൂനതകളും അവയുടെ പരിഹാരങ്ങളും വിവരിക്കുക." } }
  ],
  content: {
    intro: {
      en: "This chapter explores the fascinating world of light, colours, and how our eyes perceive them. We will learn about dispersion, scattering, and the mechanics of human vision.",
      ml: "പ്രകാശം, വർണ്ണങ്ങൾ, നമ്മുടെ കണ്ണുകൾ അവയെ എങ്ങനെ കാണുന്നു തുടങ്ങിയ കാര്യങ്ങളാണ് ഈ അധ്യായത്തിൽ പഠിക്കുന്നത്. പ്രകീർണ്ണനം, വിസരണം, കാഴ്ചയുടെ രഹസ്യങ്ങൾ എന്നിവ നമുക്ക് പരിശോധിക്കാം."
    },
    core: {
      en: "Light is a form of energy that enables us to see. When white light passes through a prism, it splits into seven colours. This is called dispersion. Scattering of light explains why the sky is blue and the sunset is red.",
      ml: "കാഴ്ച സാധ്യമാക്കുന്ന ഒരു ഊർജ്ജരൂപമാണ് പ്രകാശം. ധവളപ്രകാശം ഒരു പ്രിസത്തിലൂടെ കടന്നുപോകുമ്പോൾ ഏഴ് നിറങ്ങളായി പിരിയുന്നു. ഇതിനെ പ്രകീർണ്ണനം എന്ന് വിളിക്കുന്നു. ആകാശം നീലയാകുന്നതും ഉദയാസ്തമയങ്ങളിൽ സൂര്യൻ ചുവക്കുന്നതും പ്രകാശത്തിന്റെ വിസരണം മൂലമാണ്."
    },
    blocks: [
      { type: 'h2', en: '1. Refraction through a Glass Prism', ml: '1. ഗ്ലാസ് പ്രിസത്തിലൂടെയുള്ള അപവർത്തനം' },
      { type: 'p', en: 'When a light ray enters and leaves a prism, it **deviates towards the base** of the prism due to refraction. The angle between the incident ray and the emergent ray is called the **Angle of Deviation**.', ml: 'ഒരു പ്രകാശകിരണം പ്രിസത്തിൽ പ്രവേശിക്കുമ്പോഴും പുറത്തുവരുമ്പോഴും അപവർത്തനം മൂലം പ്രിസത്തിന്റെ **പാദത്തിലേക്ക് (base) വ്യതിചലിക്കുന്നു**. പതനകിരണവും നിർഗ്ഗമനകിരണവും തമ്മിലുള്ള കോണിനെ **വ്യതിയാന കോൺ (Angle of Deviation)** എന്ന് വിളിക്കുന്നു.' },
      { type: 'img', en: 'Prism Refraction Simulation', ml: 'പ്രിസത്തിലൂടെയുള്ള അപവർത്തനം - സിമുലേഷൻ', customId: 'prism-simulation' },
      { type: 'p', en: '🔬 **Interactive Experiment Idea:**\nTitle: Prism Refraction\nObjective: Observe how light bends.\nControls: Angle of incidence slider.\nExpected Observation: Light always bends towards the base.', ml: '🔬 **Interactive Experiment Idea:**\nTitle: Prism Refraction\nObjective: പ്രകാശം എങ്ങനെ വളയുന്നു എന്ന് നിരീക്ഷിക്കുക.\nControls: പതനകോൺ മാറ്റാനുള്ള സ്ലൈഡർ.\nExpected Observation: പ്രകാശം എപ്പോഴും പാദത്തിലേക്ക് വ്യതിചലിക്കുന്നു.' },

      { type: 'h2', en: '2. Dispersion of Light', ml: '2. പ്രകാശത്തിന്റെ പ്രകീർണ്ണനം' },
      { type: 'p', en: '**Dispersion** is the phenomenon of splitting up of a composite light into its component colours. White light is a **composite light**.', ml: '**പ്രകീർണ്ണനം** എന്നത് സമന്വിത പ്രകാശം അതിന്റെ ഘടക വർണ്ണങ്ങളായി വേർതിരിയുന്ന പ്രതിഭാസമാണ്. ധവളപ്രകാശം ഒരു **സമന്വിത പ്രകാശമാണ്**.' },
      { type: 'p', en: 'The orderly arrangement of colours is called the **Spectrum**. The order is **VIBGYOR**.', ml: 'നിറങ്ങളുടെ ക്രമമായ വിന്യാസമാണ് **സ്പെക്ട്രം**. ഇതിന്റെ ക്രമം **VIBGYOR** ആണ്.' },
      { type: 'table', tableData: {
        headers: [{en: 'Colour', ml: 'നിറം'}, {en: 'Wavelength', ml: 'തരംഗദൈർഘ്യം'}, {en: 'Deviation', ml: 'വ്യതിയാനം'}],
        rows: [
          [{en: 'Violet', ml: 'വയലറ്റ്'}, {en: 'Shortest', ml: 'ഏറ്റവും കുറവ്'}, {en: 'Maximum', ml: 'ഏറ്റവും കൂടുതൽ'}],
          [{en: 'Red', ml: 'ചുവപ്പ്'}, {en: 'Longest', ml: 'ഏറ്റവും കൂടുതൽ'}, {en: 'Minimum', ml: 'ഏറ്റവും കുറവ്'}]
        ]
      }},
      { type: 'p', en: '📈 **Graph: Deviation vs Wavelength**\nAs wavelength increases, deviation decreases. (Inverse relation)', ml: '📈 **Graph: Deviation vs Wavelength**\nതരംഗദൈർഘ്യം കൂടുമ്പോൾ വ്യതിയാനം കുറയുന്നു. (വിപരീത അനുപാതം)' },

      { type: 'h2', en: '3. Rainbow', ml: '3. മഴവില്ല്' },
      { type: 'p', en: 'A rainbow is formed by the combined effect of three phenomena in water droplets:\n1. **Refraction**\n2. **Dispersion**\n3. **Internal Reflection**', ml: 'ജലകണികകളിൽ സംഭവിക്കുന്ന മൂന്ന് പ്രതിഭാസങ്ങളുടെ സംയോജിത ഫലമായാണ് മഴവില്ല് ഉണ്ടാകുന്നത്:\n1. **അപവർത്തനം (Refraction)**\n2. **പ്രകീർണ്ണനം (Dispersion)**\n3. **ആന്തര പ്രതിപതനം (Internal Reflection)**' },
      { type: 'p', en: '🔁 **Flowchart: Rainbow Formation**\n**Sunlight** → Enters Water Droplet (**Refraction & Dispersion**) → Hits back surface (**Internal Reflection**) → Leaves Droplet (**Refraction**) → **Rainbow**', ml: '🔁 **Flowchart: Rainbow Formation**\n**സൂര്യപ്രകാശം** → ജലകണികയിൽ പ്രവേശിക്കുന്നു (**അപവർത്തനവും പ്രകീർണ്ണനവും**) → പിൻഭാഗത്ത് തട്ടുന്നു (**ആന്തര പ്രതിപതനം**) → പുറത്തുവരുന്നു (**അപവർത്തനം**) → **മഴവില്ല്**' },
      { type: 'img', en: 'Rainbow Formation Simulation', ml: 'മഴവില്ല് രൂപീകരണം - സിമുലേഷൻ', customId: 'rainbow-simulation' },

      { type: 'h2', en: '4. Recombination of Colours', ml: '4. വർണ്ണങ്ങളുടെ സംയോജനം' },
      { type: 'p', en: 'Using an inverted prism, dispersed colours can be recombined to form white light again.', ml: 'ഒരു തലകീഴായ പ്രിസം ഉപയോഗിച്ച് പ്രകീർണ്ണനം സംഭവിച്ച വർണ്ണങ്ങളെ വീണ്ടും സംയോജിപ്പിച്ച് ധവളപ്രകാശം ഉണ്ടാക്കാം.' },

      { type: 'h2', en: '5. Electromagnetic Spectrum', ml: '5. വൈദ്യുതകാന്തിക സ്പെക്ട്രം' },
      { type: 'table', tableData: {
        headers: [{en: 'Radiation', ml: 'വികിരണം'}, {en: 'Wavelength Order', ml: 'തരംഗദൈർഘ്യ ക്രമം'}],
        rows: [
          [{en: 'Gamma Rays', ml: 'ഗാമാ റേ'}, {en: 'Lowest', ml: 'ഏറ്റവും കുറവ്'}],
          [{en: 'X-Rays', ml: 'എക്സ്-റേ'}, {en: '...', ml: '...'}],
          [{en: 'Ultraviolet', ml: 'അൾട്രാവയലറ്റ്'}, {en: '...', ml: '...'}],
          [{en: 'Visible Light', ml: 'ദൃശ്യപ്രകാശം'}, {en: '...', ml: '...'}],
          [{en: 'Infrared', ml: 'ഇൻഫ്രാറെഡ്'}, {en: '...', ml: '...'}],
          [{en: 'Microwaves', ml: 'മൈക്രോവേവ്'}, {en: '...', ml: '...'}],
          [{en: 'Radio Waves', ml: 'റേഡിയോ വേവ്'}, {en: 'Highest', ml: 'ഏറ്റവും കൂടുതൽ'}]
        ]
      }},

      { type: 'h2', en: '6. Primary and Secondary Colours', ml: '6. പ്രകാശത്തിന്റെ പ്രാഥമിക - ദ്വിതീയ വർണ്ണങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Primary 1', ml: 'പ്രാഥമിക 1'}, {en: 'Primary 2', ml: 'പ്രാഥമിക 2'}, {en: 'Secondary Result', ml: 'ദ്വിതീയ വർണ്ണം'}],
        rows: [
          [{en: 'Red', ml: 'ചുവപ്പ്'}, {en: 'Green', ml: 'പച്ച'}, {en: 'Yellow', ml: 'മഞ്ഞ'}],
          [{en: 'Red', ml: 'ചുവപ്പ്'}, {en: 'Blue', ml: 'നീല'}, {en: 'Magenta', ml: 'മജന്ത'}],
          [{en: 'Blue', ml: 'നീല'}, {en: 'Green', ml: 'പച്ച'}, {en: 'Cyan', ml: 'സിയാൻ'}]
        ]
      }},
      { type: 'p', en: '**Complementary Colours:** Two colours that combine to give white light. E.g., Yellow + Blue = White.', ml: '**പൂരക വർണ്ണങ്ങൾ:** കൂടിച്ചേരുമ്പോൾ ധവളപ്രകാശം നൽകുന്ന രണ്ട് വർണ്ണങ്ങൾ. ഉദാ: മഞ്ഞ + നീല = വെള്ള.' },

      { type: 'h2', en: '7. Persistence of Vision', ml: '7. ദൃഷ്ടിസ്ഥിരത' },
      { type: 'p', en: 'Visual experience persists for **1/16 of a second**. Newton\'s Colour Disc appears white when rotated fast due to this.', ml: 'കാഴ്ചാനുഭവം **1/16 സെക്കൻഡ്** നേരത്തേക്ക് നിലനിൽക്കുന്നു. ന്യൂട്ടന്റെ വർണ്ണ ഡിസ്ക് വേഗത്തിൽ കറക്കുമ്പോൾ വെള്ളയായി കാണപ്പെടുന്നത് ഇതുകൊണ്ടാണ്.' },
      { type: 'img', en: 'Newton\'s Colour Disc Simulation', ml: 'ന്യൂട്ടന്റെ വർണ്ണ ഡിസ്ക് സിമുലേഷൻ', customId: 'newton-disc-simulation' },

      { type: 'h2', en: '8. Colour of Objects', ml: '8. വസ്തുക്കളുടെ നിറം' },
      { type: 'p', en: 'Objects appear in the colour they **reflect**. A white surface reflects all, black absorbs all.', ml: 'വസ്തുക്കൾ അവ **പ്രതിപതിപ്പിക്കുന്ന** നിറത്തിൽ കാണപ്പെടുന്നു. വെള്ള പ്രതലം എല്ലാം പ്രതിപതിപ്പിക്കുന്നു, കറുപ്പ് എല്ലാം ആഗിരണം ചെയ്യുന്നു.' },

      { type: 'h2', en: '9. Scattering of Light', ml: '9. പ്രകാശത്തിന്റെ വിസരണം' },
      { type: 'p', en: '**Scattering** is the irregular deviation of light by particles in its path. The intensity of scattering is inversely proportional to the fourth power of wavelength (**Rayleigh Scattering**).', ml: '**വിസരണം** എന്നത് പ്രകാശത്തിന്റെ പാതയിലുള്ള കണികകളിൽ തട്ടിയുണ്ടാകുന്ന ക്രമരഹിതമായ വ്യതിയാനമാണ്. വിസരണത്തിന്റെ തീവ്രത തരംഗദൈർഘ്യത്തിന്റെ നാലാം ഘാതത്തിന് വിപരീതാനുപാതത്തിലാണ് (**റയ്ലി വിസരണം**).' },
      { type: 'p', en: '• **Tyndall Effect:** Scattering of light by colloidal particles.\n• **Blue Sky:** Blue light has a shorter wavelength, so it scatters more.\n• **Red Sunset/Sunrise:** During sunrise and sunset, light travels a longer distance. Most colours scatter away, and only red (longest wavelength) reaches our eyes.', ml: '• **ടിൻഡാൽ പ്രഭാവം:** കൊളോയ്ഡ് കണികകൾ പ്രകാശത്തെ വിസരണം ചെയ്യുന്നത്.\n• **നീല ആകാശം:** നീല പ്രകാശത്തിന് തരംഗദൈർഘ്യം കുറവായതിനാൽ അത് കൂടുതൽ വിസരണം ചെയ്യപ്പെടുന്നു.\n• **ചുവന്ന സൂര്യൻ:** ഉദയാസ്തമയങ്ങളിൽ പ്രകാശം കൂടുതൽ ദൂരം സഞ്ചരിക്കണം. മിക്ക നിറങ്ങളും വിസരണം ചെയ്യപ്പെടുകയും ചുവപ്പ് (കൂടുതൽ തരംഗദൈർഘ്യമുള്ളത്) മാത്രം നമ്മുടെ കണ്ണുകളിൽ എത്തുകയും ചെയ്യുന്നു.' },

      { type: 'h2', en: '10. Eye and Vision', ml: '10. കണ്ണും കാഴ്ചയും' },
      { type: 'p', en: '• **Power of Accommodation:** The ability of the eye to adjust its focal length using ciliary muscles to see objects at different distances.\n• **Near Point:** The minimum distance at which an object can be seen clearly (**25 cm** for a normal eye).\n• **Far Point:** The maximum distance up to which an eye can see objects clearly (**Infinity** for a normal eye).', ml: '• **സമഞ്ജനക്ഷമത:** വിവിധ ദൂരങ്ങളിലുള്ള വസ്തുക്കളെ കാണുന്നതിനായി സിലിയറി പേശികൾ ഉപയോഗിച്ച് ഫോക്കസ് ദൂരം ക്രമീകരിക്കാനുള്ള കണ്ണിന്റെ കഴിവ്.\n• **സമീപ ബിന്ദു:** വ്യക്തമായ കാഴ്ചയ്ക്കുള്ള ഏറ്റവും കുറഞ്ഞ അകലം (ആരോഗ്യമുള്ള കണ്ണിന് ഇത് **25 cm** ആണ്).\n• **വിദൂര ബിന്ദു:** കണ്ണിന് വ്യക്തമായി കാണാൻ കഴിയുന്ന പരമാവധി ദൂരം (ആരോഗ്യമുള്ള കണ്ണിന് ഇത് **അനന്തത** ആണ്).' },

      { type: 'h2', en: '11. Defects of the Eye', ml: '11. കണ്ണിന്റെ ന്യൂനതകൾ' },
      { type: 'img', en: 'Eye Defects and Correction Simulation', ml: 'കണ്ണിന്റെ ന്യൂനതകളും പരിഹാരവും - സിമുലേഷൻ', customId: 'eye-defect-simulation' },
      { type: 'table', tableData: {
        headers: [{en: 'Defect', ml: 'ന്യൂനത'}, {en: 'Symptoms', ml: 'ലക്ഷണങ്ങൾ'}, {en: 'Rectification', ml: 'പരിഹാരം'}],
        rows: [
          [{en: 'Myopia', ml: 'ഹ്രസ്വദൃഷ്ടി'}, {en: 'Cannot see far', ml: 'അകലെ കാണില്ല'}, {en: 'Concave Lens', ml: 'കോൺകേവ് ലെൻസ്'}],
          [{en: 'Hypermetropia', ml: 'ദീർഘദൃഷ്ടി'}, {en: 'Cannot see near', ml: 'അടുത്ത് കാണില്ല'}, {en: 'Convex Lens', ml: 'കോൺവെക്സ് ലെൻസ്'}]
        ]
      }},

      { type: 'h2', en: '12. Light Pollution', ml: '12. പ്രകാശ മലിനീകരണം' },
      { type: 'p', en: 'Excessive artificial light affecting animals and plants.', ml: 'ജീവികളെയും സസ്യങ്ങളെയും ബാധിക്കുന്ന അമിതമായ കൃത്രിമ പ്രകാശം.' },

      { type: 'h2', en: '🎯 Quick Revision Box', ml: '🎯 ദ്രുത പുനരവലോകനം' },
      { type: 'p', en: '1. Composite light: Light with multiple colours.\n2. VIBGYOR: Order of spectrum.\n3. Red: Least deviation, Longest wavelength.\n4. Violet: Most deviation, Shortest wavelength.\n5. Rainbow: Refraction + Dispersion + Internal Reflection.\n6. Primary Colours: R, G, B.\n7. Secondary Colours: Y, M, C.\n8. Persistence of Vision: 1/16s.\n9. Scattering: Blue sky, Red sunset.\n10. Near Point: 25cm.', ml: '1. സമന്വിത പ്രകാശം: പല നിറങ്ങളുള്ള പ്രകാശം.\n2. VIBGYOR: സ്പെക്ട്രം ക്രമം.\n3. ചുവപ്പ്: കുറഞ്ഞ വ്യതിയാനം, കൂടുതൽ തരംഗദൈർഘ്യം.\n4. വയലറ്റ്: കൂടുതൽ വ്യതിയാനം, കുറഞ്ഞ തരംഗദൈർഘ്യം.\n5. മഴവില്ല്: അപവർത്തനം + പ്രകീർണ്ണനം + ആന്തര പ്രതിപതനം.\n6. പ്രാഥമിക വർണ്ണങ്ങൾ: R, G, B.\n7. ദ്വിതീയ വർണ്ണങ്ങൾ: Y, M, C.\n8. ദൃഷ്ടിസ്ഥിരത: 1/16s.\n9. വിസരണം: നീല ആകാശം, ചുവന്ന സൂര്യൻ.\n10. സമീപ ബിന്ദു: 25cm.' },

      { type: 'h2', en: '👨‍🏫 Teacher Notes', ml: '👨‍🏫 അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ' },
      { type: 'p', en: '• Use a prism in a dark room to show dispersion.\n• Demonstrate Newton\'s disc.\n• Use a laser pointer in muddy water to show Tyndall effect.', ml: '• ഇരുണ്ട മുറിയിൽ പ്രിസം ഉപയോഗിച്ച് പ്രകീർണ്ണനം കാണിക്കുക.\n• ന്യൂട്ടന്റെ വർണ്ണ ഡിസ്ക് പരീക്ഷിച്ചു നോക്കുക.\n• കലങ്ങിയ വെള്ളത്തിൽ ലേസർ അടിച്ച് ടിൻഡാൽ പ്രഭാവം കാണിക്കുക.' },

      { type: 'h2', en: '📝 Student Summary Sheet', ml: '📝 വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ ഷീറ്റ്' },
      { type: 'p', en: '• **Dispersion:** Splitting of light into 7 colours.\n• **Spectrum:** VIBGYOR.\n• **Rainbow:** Refraction + Dispersion + Internal Reflection.\n• **Primary Colours:** Red, Green, Blue.\n• **Secondary Colours:** Yellow (R+G), Magenta (R+B), Cyan (B+G).\n• **Persistence of Vision:** 1/16s.\n• **Scattering:** Blue sky (short wavelength), Red sunset (long wavelength).\n• **Eye Defects:** Myopia (Concave), Hypermetropia (Convex).', ml: '• **പ്രകീർണ്ണനം:** പ്രകാശം 7 നിറങ്ങളായി പിരിയുന്നത്.\n• **സ്പെക്ട്രം:** VIBGYOR.\n• **മഴവില്ല്:** അപവർത്തനം + പ്രകീർണ്ണനം + ആന്തര പ്രതിപതനം.\n• **പ്രാഥമിക വർണ്ണങ്ങൾ:** ചുവപ്പ്, പച്ച, നീല.\n• **ദ്വിതീയ വർണ്ണങ്ങൾ:** മഞ്ഞ (R+G), മജന്ത (R+B), സിയാൻ (B+G).\n• **ദൃഷ്ടിസ്ഥിരത:** 1/16s.\n• **വിസരണം:** നീല ആകാശം (കുറഞ്ഞ തരംഗദൈർഘ്യം), ചുവന്ന സൂര്യൻ (കൂടുതൽ തരംഗദൈർഘ്യം).\n• **കണ്ണിന്റെ ന്യൂനതകൾ:** ഹ്രസ്വദൃഷ്ടി (കോൺകേവ്), ദീർഘദൃഷ്ടി (കോൺവെക്സ്).' }
    ]
  },
  glossary: [
    { term: { en: "Dispersion", ml: "പ്രകീർണ്ണനം" }, definition: { en: "Splitting of composite light into component colours.", ml: "സമന്വിത പ്രകാശം ഘടക വർണ്ണങ്ങളായി വേർതിരിയുന്നത്." } },
    { term: { en: "Scattering", ml: "വിസരണം" }, definition: { en: "Irregular deviation of light by particles.", ml: "കണികകളിൽ തട്ടിയുള്ള പ്രകാശത്തിന്റെ ക്രമരഹിതമായ വ്യതിയാനം." } }
  ],
  quiz: [
  {
    "q_id": "u3_q1",
    "type": "mcq",
    "stem": {
      "en": "Electromagnetic induction was discovered by:",
      "ml": "വൈദ്യുതകാന്തിക ഇൻഡക്ഷൻ കണ്ടെത്തിയ ശാസ്ത്രജ്ഞൻ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Oersted",
          "ml": "ഓർസ്റ്റെഡ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Maxwell",
          "ml": "മാക്സ്വെൽ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Michael Faraday",
          "ml": "മൈക്കൽ ഫാരഡേ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Edison",
          "ml": "എഡിസൺ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Faraday discovered that a changing magnetic field induces an EMF.",
      "ml": "മൈക്കൽ ഫാരഡേ ആണ് 1831-ൽ വൈദ്യുതകാന്തിക ഇൻഡക്ഷൻ കണ്ടെത്തിയത്."
    }
  },
  {
    "q_id": "u3_q2",
    "type": "mcq",
    "stem": {
      "en": "The phenomenon generating electricity by changing magnetic flux through a coil is called:",
      "ml": "ഒരു കോയിലിലൂടെ കടന്നുപോകുന്ന കാന്തിക ഫ്ലക്സ് മാറ്റി വൈദ്യുതി ഉൽപ്പാദിക്കുന്ന പ്രതിഭാസം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Magnetic saturation",
          "ml": "കാന്തിക സൂക്ഷ്‌മഘടന"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Electromagnetic induction",
          "ml": "വൈദ്യുതകാന്തിക ഇൻഡക്ഷൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Electric discharge",
          "ml": "വൈദ്യുത ഡിസ്ചാർജ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Galvanism",
          "ml": "ഗൽവാനിസം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Electromagnetic induction is the basis of generators and transformers.",
      "ml": "ജനറേറ്ററുകളുടെ അടിസ്ഥാനമാണ് ഇൻഡക്ഷൻ."
    }
  },
  {
    "q_id": "u3_q3",
    "type": "mcq",
    "stem": {
      "en": "Faraday's Law states that induced EMF is proportional to:",
      "ml": "ഫാരഡേ നിയമം പ്രകാരം ഉൽപ്രേരിത EMF ആനുപാതികമാണ്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "The strength of the magnet",
          "ml": "കാന്തത്തിന്റെ ശക്തി"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "The rate of change of magnetic flux",
          "ml": "കാന്തിക ഫ്ലക്സ് മാറ്റത്തിന്റെ നിരക്ക്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "The temperature of the coil",
          "ml": "കോയിലിന്റെ താപനില"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "The resistance of the wire",
          "ml": "കമ്പിയുടെ പ്രതിരോധം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "EMF is proportional to rate of change of flux.",
      "ml": "ഫ്ലക്സ് മാറ്റം വേഗത്തിൽ ആകുമ്പോൾ ഉൽപ്രേരിത EMF കൂടുന്നു."
    }
  },
  {
    "q_id": "u3_q4",
    "type": "mcq",
    "stem": {
      "en": "Lenz's Law is related to the conservation of:",
      "ml": "ലെൻസ് നിയമം ഏതിന്റെ സംരക്ഷണവുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Charge",
          "ml": "ചാർജ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Momentum",
          "ml": "ആക്കം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Energy",
          "ml": "ഊർജ്ജം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Mass",
          "ml": "ദ്രവ്യമാനം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "hard",
    "explanation": {
      "en": "Lenz's Law says induced current opposes change, conserving energy.",
      "ml": "ഊർജ്ജ സംരക്ഷണ നിയമം ഉൾക്കൊള്ളിക്കുന്ന നിയമമാണ് ലെൻസ് നിയമം."
    }
  },
  {
    "q_id": "u3_q5",
    "type": "mcq",
    "stem": {
      "en": "The direction of induced current is determined by:",
      "ml": "ഉൽപ്രേരിത വൈദ്യുത പ്രവാഹത്തിന്റെ ദിശ നിർണ്ണയിക്കുന്ന നിയമം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Fleming's Left Hand Rule",
          "ml": "ഫ്ലെമിംഗ് ഇടതുകൈ നിയമം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Lenz's Law",
          "ml": "ലെൻസ് നിയമം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Ohm's Law",
          "ml": "ഓം നിയമം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Kirchhoff's Law",
          "ml": "കിർഹോഫ് നിയമം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Lenz's Law gives the direction of induced current.",
      "ml": "ഉൽദ്ദേശകത്തിനെ എതിർക്കുന്ന ദിശയിലായിരിക്കും ഉൽപ്രേരിത ധാര."
    }
  },
  {
    "q_id": "u3_q6",
    "type": "mcq",
    "stem": {
      "en": "A device that converts mechanical energy to electrical energy is:",
      "ml": "യാന്ത്രികോർജ്ജം വൈദ്യുതോർജ്ജമാക്കി മാറ്റുന്ന ഉപകരണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Motor",
          "ml": "മോട്ടോർ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Transformer",
          "ml": "ട്രാൻസ്ഫോർമർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Electric Generator",
          "ml": "ഇലക്ട്രിക് ജനറേറ്റർ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Battery",
          "ml": "ബാറ്ററി"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Generators use electromagnetic induction to produce electricity.",
      "ml": "ഇലക്ട്രോ മാഗ്നറ്റിക് ഇൻഡക്ഷൻ ഉപയോഗിച്ചാണ് ജനറേറ്റർ പ്രവർത്തിക്കുന്നത്."
    }
  },
  {
    "q_id": "u3_q7",
    "type": "mcq",
    "stem": {
      "en": "Fleming's Right Hand Rule determines the direction of:",
      "ml": "ഫ്ലെമിംഗ് വലതുകൈ നിയമം ഏതിന്റെ ദിശ കണ്ടുപിടിക്കാൻ ഉപയോഗിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Force on a conductor",
          "ml": "ചാലകത്തിൽ ഉണ്ടാകുന്ന ബലം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Induced current in a generator",
          "ml": "ഉൽപ്രേരിത വൈദ്യുതപ്രവാഹം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Magnetic field direction",
          "ml": "കാന്തികമണ്ഡലത്തിന്റെ ദിശ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Voltage polarity",
          "ml": "വോൾട്ടേജ് ദ്രുവത"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Right Hand Rule applies to generators.",
      "ml": "ജനറേറ്ററിലെ ഇൻഡ്യൂഡ് ധാര നിർണ്ണയിക്കാൻ വലതുകൈ നിയമം ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u3_q8",
    "type": "mcq",
    "stem": {
      "en": "AC is produced by:",
      "ml": "ആൾടർനേറ്റിംഗ് കറന്റ് ഉൽപ്പാദിപ്പിക്കുന്ന ഉപകരണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "DC Generator",
          "ml": "DC ജനറേറ്റർ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "AC Generator (Alternator)",
          "ml": "AC ജനറേറ്റർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Battery",
          "ml": "ബാറ്ററി"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Transistor",
          "ml": "ട്രാൻസിസ്റ്റർ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "An alternator uses slip rings to generate AC.",
      "ml": "AC ജനറേറ്ററിൽ സ്ലിപ്പ് റിംഗ് ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u3_q9",
    "type": "mcq",
    "stem": {
      "en": "A step-up transformer increases:",
      "ml": "ഒരു സ്റ്റെപ്-അപ്പ് ട്രാൻസ്ഫോർമർ ഏതിനെ കൂട്ടുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Current only",
          "ml": "കറന്റ് മാത്രം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Voltage, while reducing current",
          "ml": "വോൾട്ടേജ്, കറന്റ് കുറക്കുന്നു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Both voltage and current",
          "ml": "വോൾട്ടേജും കറന്റും"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Frequency",
          "ml": "ആവൃത്തി"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "A step-up transformer increases voltage while reducing current.",
      "ml": "സ്റ്റെപ്-അപ്പ് ട്രാൻസ്ഫോർമർ വോൾട്ടേജ് കൂട്ടുകയും കറന്റ് കുറക്കുകയും ചെയ്യുന്നു."
    }
  },
  {
    "q_id": "u3_q10",
    "type": "mcq",
    "stem": {
      "en": "Why is power transmitted at high voltage?",
      "ml": "ഉയർന്ന വോൾട്ടേജിൽ വൈദ്യുതി പ്രേഷണം ചെയ്യുന്നത് എന്തുകൊണ്ട്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "To reduce current and thereby heat losses",
          "ml": "കറന്റ് കുറക്കൽ വഴി ചൂടാകൽ നഷ്ടം കുറക്കാൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "To increase current",
          "ml": "കറന്റ് കൂട്ടാൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "To make wires bigger",
          "ml": "കമ്പികൾ വലിപ്പം കൂട്ടാൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "To light more bulbs",
          "ml": "കൂടുതൽ ബൾബ് കത്തിക്കാൻ"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "High voltage → low I → low P_loss = I²R.",
      "ml": "ഉയർന്ന വോൾട്ടേജ് → കുറഞ്ഞ കറന്റ് → P=I²R കുറഞ്ഞ ചൂടാകൽ നഷ്ടം."
    }
  },
  {
    "q_id": "u3_q11",
    "type": "mcq",
    "stem": {
      "en": "Transformer principle is based on:",
      "ml": "ട്രാൻസ്ഫോർമർ ഏത് തത്വത്തെ ആധാരിച്ചിരിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Amplification",
          "ml": "ആംപ്ലിഫിക്കേഷൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Mutual induction",
          "ml": "പരസ്പര ഇൻഡക്ഷൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Self-induction",
          "ml": "സ്വം ഇൻഡക്ഷൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Resonance",
          "ml": "അനുനാദം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Mutual induction: flux change in primary induces EMF in secondary.",
      "ml": "പ്രൈമറി ഫ്ലക്സ് മാറ്റം സെക്കൻഡറിയിൽ EMF ഉൽപ്രേരിപ്പിക്കുന്നു."
    }
  },
  {
    "q_id": "u3_q12",
    "type": "mcq",
    "stem": {
      "en": "A transformer works with:",
      "ml": "ഒരു ട്രാൻസ്ഫോർമർ ഏത് തരം വൈദ്യുതിയിൽ പ്രവർത്തിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "DC only",
          "ml": "DC മാത്രം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "AC only",
          "ml": "AC മാത്രം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Both AC and DC",
          "ml": "AC ഉം DC ഉം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Static electricity",
          "ml": "സ്ഥിര വൈദ്യുതി"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Transformers need changing magnetic flux, so only AC works.",
      "ml": "DC ഒരു സ്ഥിര ഫ്ലക്സ് ഉണ്ടാക്കുന്നതിനാൽ ട്രാൻസ്ഫോർമർ DC-ൽ പ്രവർത്തിക്കില്ല."
    }
  },
  {
    "q_id": "u3_q13",
    "type": "mcq",
    "stem": {
      "en": "The iron core of a transformer is laminated to:",
      "ml": "ട്രാൻസ്ഫോർമർ കോർ ലാമിനേറ്റ് ചെയ്യുന്നത്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Increase eddy currents",
          "ml": "എഡ്ഡി കറന്റ് കൂട്ടാൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Reduce eddy current losses",
          "ml": "എഡ്ഡി കറന്റ് നഷ്ടം കുറക്കാൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Increase magnetic strength",
          "ml": "കാന്തിക ശക്തി വർദ്ധിക്കാൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Reduce weight",
          "ml": "ഭാരം കുറക്കാൻ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "Laminated cores reduce eddy current paths, minimizing energy loss.",
      "ml": "ഇൻസുലേറ്റഡ് ലേയറുകൾ ഉള്ള ലാമിനേഷൻ എഡ്ഡി കറന്റ് കുറക്കുന്നു."
    }
  },
  {
    "q_id": "u3_q14",
    "type": "mcq",
    "stem": {
      "en": "In a generator coil, if turns are doubled, the EMF:",
      "ml": "ജനറേറ്ററിലെ ചുറ്റുകൾ ഇരട്ടിക്കുമ്പോൾ EMF:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Halves",
          "ml": "പകുതിയാകുന്നു"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Doubles",
          "ml": "ഇരട്ടിക്കുന്നു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Remains same",
          "ml": "മാറ്റമില്ലാതിരിക്കുന്നു"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Becomes zero",
          "ml": "പൂജ്യമാകുന്നു"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "EMF ∝ N (number of turns).",
      "ml": "EMF, ചുറ്റുകളുടെ എണ്ണത്തിന് ആനുപാതികമാണ്."
    }
  },
  {
    "q_id": "u3_q15",
    "type": "mcq",
    "stem": {
      "en": "Slip rings in an AC generator:",
      "ml": "AC ജനറേറ്ററിലെ സ്ലിപ്പ് റിംഗ็:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Commutate the current",
          "ml": "കറന്റ് കമ്മ്യൂട്ടേറ്റ് ചെയ്യുന്നു"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Maintain contact with rotating coil",
          "ml": "കറങ്ങുന്ന കോയിലുമായി ബന്ധം നൽകുന്നു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Reduce rotation speed",
          "ml": "കറക്ക വേഗത കുറക്കുന്നു"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Store energy",
          "ml": "ഊർജ്ജം ശേഖരിക്കുന്നു"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Slip rings allow AC to flow freely from the rotating part.",
      "ml": "AC ജനറേറ്ററിൽ കറങ്ങുന്ന കോയിലുമായി ബന്ধം നൽകുന്നത് സ്ലിപ്പ് റിംഗ് ആണ്."
    }
  },
  {
    "q_id": "u3_q16",
    "type": "mcq",
    "stem": {
      "en": "A galvanometer is used to detect:",
      "ml": "ഗാൽവനോമീറ്റർ ഉപയോഗം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Voltage",
          "ml": "വോൾട്ടേജ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Resistance",
          "ml": "പ്രതിരോധം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Small electric currents",
          "ml": "ചെറിയ വൈദ്യുതി പ്രവാഹം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Magnetic flux",
          "ml": "കാന്തിക ഫ്ലക്സ്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "A galvanometer detects very small currents.",
      "ml": "ഗാൽവനോമീറ്റർ ചെറിയ വൈദ്യുതപ്രവാഹം കണ്ടെത്തുന്നു."
    }
  },
  {
    "q_id": "u3_q17",
    "type": "mcq",
    "stem": {
      "en": "The frequency of AC in India is:",
      "ml": "ഇന്ത്യയിൽ AC ആവൃത്തി:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "50 Hz",
          "ml": "50 Hz"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "60 Hz",
          "ml": "60 Hz"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "100 Hz",
          "ml": "100 Hz"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "25 Hz",
          "ml": "25 Hz"
        }
      }
    ],
    "answer": "A",
    "difficulty": "easy",
    "explanation": {
      "en": "India uses 50 Hz AC supply.",
      "ml": "ഇന്ത്യയിൽ AC ആവൃത്തി 50 Hz ആണ്."
    }
  },
  {
    "q_id": "u3_q18",
    "type": "mcq",
    "stem": {
      "en": "Which component is NOT in an AC generator?",
      "ml": "AC ജനറേറ്ററിൽ കാണാത്ത ഭാഗം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Slip rings",
          "ml": "സ്ലിപ്പ് റിംഗ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Coil",
          "ml": "കോയിൽ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Split rings (Commutator)",
          "ml": "സ്പ്ലിറ്റ് റിംഗ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Carbon brushes",
          "ml": "കാർബൺ ബ്രഷ്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "hard",
    "explanation": {
      "en": "Split rings are for DC generators; AC generators use slip rings.",
      "ml": "DC ജനറേറ്ററിൽ സ്പ്ലിറ്റ് റിംഗ്, AC ജനറേറ്റിൽ സ്ലിപ്പ് റിംഗ്."
    }
  },
  {
    "q_id": "u3_q19",
    "type": "mcq",
    "stem": {
      "en": "Eddy currents are caused by:",
      "ml": "എഡ്ഡി കറന്റ് ഉണ്ടാകുന്ന കാരണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Static magnetic field",
          "ml": "സ്ഥിര കാന്തികമണ്ഡലം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Changing magnetic flux through a conductor",
          "ml": "ചാലകത്തിലൂടെ മാറുന്ന ഫ്ലക്സ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "High voltage",
          "ml": "ഉയർന്ന വോൾട്ടേജ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Chemical reaction",
          "ml": "രാസ പ്രക്രിയ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "Eddy currents are induced in bulk conductors by changing flux.",
      "ml": "ചലിക്കുന്ന കാന്തിക ഫ്ലക്സ് ഒരു ഖര ചാലകത്തിൽ ചെറിയ ചുറ്റുന്ന ധാരകൾ ഉൽദ്ദേശിക്കുന്നു."
    }
  },
  {
    "q_id": "u3_q20",
    "type": "mcq",
    "stem": {
      "en": "An electric generator converts:",
      "ml": "ഒരു ഇലക്ട്രിക് ജനറേറ്റർ ഊർജ്ജ മാറ്റം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Electrical to chemical",
          "ml": "വൈദ്യുതം → രാസ ഊർജ്ജം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Chemical to electrical",
          "ml": "രാസ ഊർജ്ജം → വൈദ്യുതം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Mechanical to electrical",
          "ml": "യാന്ത്രിക ഊർജ്ജം → വൈദ്യുതം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Thermal to electrical",
          "ml": "താപ ഊർജ്ജം → വൈദ്യുതം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Generators convert mechanical energy to electrical energy.",
      "ml": "ജനറേറ്റർ, യാന്ത്രിക ഊർജ്ജം വൈദ്യുതോർജ്ജമാക്കി മാറ്റുന്നു."
    }
  },
  {
    "q_id": "u3_q21",
    "type": "mcq",
    "stem": {
      "en": "The transformer equation is:",
      "ml": "ട്രാൻസ്ഫോർമർ സമവാക്യം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Vs/Vp = Ns/Np",
          "ml": "Vs/Vp = Ns/Np"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Vs * Vp = Ns + Np",
          "ml": "Vs * Vp = Ns + Np"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Vs = Vp + Ns",
          "ml": "Vs = Vp + Ns"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Ns/Np = Is/Ip",
          "ml": "Ns/Np = Is/Ip"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "The transformer voltage ratio equals the turns ratio.",
      "ml": "ട്രാൻസ്ഫോർമർ സമവാക്യം: Vs/Vp = Ns/Np."
    }
  },
  {
    "q_id": "u3_q22",
    "type": "mcq",
    "stem": {
      "en": "The induced EMF can be increased by:",
      "ml": "ഉൽപ്രേരിത EMF കൂട്ടാൻ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Moving the magnet slowly",
          "ml": "കാന്തം പതുക്കെ ചലിപ്പിക്കുക"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Reducing number of turns",
          "ml": "ചുറ്റുകൾ കുറക്കുക"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Moving the magnet faster",
          "ml": "കാന്തം വേഗത്തിൽ ചലിപ്പിക്കുക"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Using a smaller coil",
          "ml": "ചെറിയ കോയിൽ ഉപയോഗിക്കുക"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "Faster flux change = greater induced EMF.",
      "ml": "ഫ്ലക്സ് മാറ്റം വേഗത്തിൽ ആകുമ്പോൾ ഉൽപ്രേരിത EMF കൂടുന്നു."
    }
  },
  {
    "q_id": "u3_q23",
    "type": "mcq",
    "stem": {
      "en": "The rotating part of a generator is called:",
      "ml": "ജനറേറ്ററിലെ കറങ്ങുന്ന ഭാഗം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Stator",
          "ml": "സ്റ്റേറ്റർ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Commutator",
          "ml": "കമ്മ്യൂട്ടേറ്റർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Armature (Rotor)",
          "ml": "ആർമേച്ചർ (റോട്ടർ)"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Brush",
          "ml": "ബ്രഷ്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "The rotating coil assembly is the armature or rotor.",
      "ml": "ജനറേറ്ററിൽ കറങ്ങുന്ن ഭാഗമാണ് ആർമേച്ചർ."
    }
  },
  {
    "q_id": "u3_q24",
    "type": "mcq",
    "stem": {
      "en": "What is the purpose of using a step-down transformer at homes?",
      "ml": "വീടുകളിൽ സ്റ്റെപ്-ഡൌൺ ട്രാൻസ്ഫോർമർ ഉപയോഗിക്കുന്നത് എന്തിനാണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "To increase frequency",
          "ml": "ആവൃത്തി കൂട്ടാൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "To reduce the voltage to safe levels",
          "ml": "സുരക്ഷിത നിലയ്ക്ക് വോൾട്ടേജ് കുറക്കാൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "To convert AC to DC",
          "ml": "AC-നെ DC-ആക്കാൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "To store electricity",
          "ml": "വൈദ്യുതി ശേഖരിക്കാൻ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Step-down transformers reduce high transmission voltage to safe household levels.",
      "ml": "ദൂര പ്രേഷണ ശേഷം ഗൃഹ ഉദ്ദേശ്യത്തിന് സ്റ്റെപ്-ഡൌൺ ട്രാൻസ്ഫോർമർ വോൾട്ടേജ് കുറക്കുന്നു."
    }
  },
  {
    "q_id": "u3_q25",
    "type": "mcq",
    "stem": {
      "en": "When the number of secondary coil turns is less than primary in a transformer:",
      "ml": "ഒരു ട്രാൻസ്ഫോർമറിൽ സെക്കൻഡറിയിലെ ചുറ്റുകൾ പ്രൈമറിയേക്കാൾ കുറവാണെങ്കിൽ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "It is a step-up transformer",
          "ml": "ഇത് ഒരു സ്റ്റെപ്-അപ്പ് ട്രാൻസ്ഫോർമർ ആണ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "It is a step-down transformer",
          "ml": "ഇത് ഒരു സ്റ്റെപ്-ഡൌൺ ട്രാൻസ്ഫോർമർ ആണ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Voltage remains same",
          "ml": "വോൾട്ടേജ് മാറ്റമില്ലാതെ തുടരുന്നു"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "The transformer stops working",
          "ml": "ട്രാൻസ്ഫോർമർ പ്രവർത്തനം നിർത്തുന്നു"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Secondary turns < Primary turns → Voltage is stepped down.",
      "ml": "സെക്കൻഡറി ചുറ്റുകൾ < പ്രൈമറി ചുറ്റുകൾ → സ്റ്റെപ്-ഡൌൺ ട്രാൻസ്ഫോർമർ."
    }
  },
  {
    "q_id": "u3_q26",
    "type": "mcq",
    "stem": {
      "en": "Induced current direction opposes the motion causing it. This is known as:",
      "ml": "ഉൽദ്ദേശകമാകുന്ന ചലനത്തിനെ ഉൽപ്രേരിത ധാര എതിർക്കുന്ന നിയമം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Faraday's first law",
          "ml": "ഫാരഡേ ഒന്നാം നിയമം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Lenz's Law",
          "ml": "ലെൻസ് നിയമം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Ampere's Law",
          "ml": "ആമ്പിയർ നിയമം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Joule's Law",
          "ml": "ജൂൾ നിയമം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Lenz's law: Induced current direction opposes the cause.",
      "ml": "ഉൽദ്ദേശകത്തിനെ ഉൽപ്രേരിത ധാര എതിർക്കുന്നു - ഇത് ലെൻസ് നിയമമാണ്."
    }
  },
  {
    "q_id": "u3_q27",
    "type": "mcq",
    "stem": {
      "en": "In an ideal transformer, if primary power input is 1000W and secondary power output is:",
      "ml": "ഒരു ഇഡ്ഡൽ ട്രാൻസ്ഫോർമറിൽ പ്രൈമറി ഇൻ‌പുട്ട് 1000W ആണെങ്കിൽ സെക്കൻഡറി ഔട്ട്‌പുട്ട്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "500W",
          "ml": "500 W"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "2000W",
          "ml": "2000 W"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "1000W",
          "ml": "1000 W"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "250W",
          "ml": "250 W"
        }
      }
    ],
    "answer": "C",
    "difficulty": "hard",
    "explanation": {
      "en": "An ideal transformer has 100% efficiency (no losses), so output = input = 1000W.",
      "ml": "ഒരു ഇഡ്ഡൽ ട്രാൻസ്ഫോർമർ ഊർജ്ജ നഷ്ടം ഇല്ലാതെ പ്രവർത്തിക്കും."
    }
  }
]
} as const;
