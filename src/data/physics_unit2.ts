import { Lesson } from './curriculum';

export const physicsUnit2: Lesson = {
  id: "sc-phy-10-lenses",
  title: { en: "Lenses", ml: "ലെൻസുകൾ" },
  estimated_time_mins: 90,
  videos: [
    {
      title: "Quick revision (Exam oriented)",
      url: "https://www.youtube.com/watch?v=FrrtuVQgwZ8"
    }
  ],
  learning_objectives: [
    { id: "lo1", text: { en: "Identify different types of lenses and their characteristics.", ml: "വിവിധ തരം ലെൻസുകളെയും അവയുടെ സവിശേഷതകളെയും തിരിച്ചറിയുക." } },
    { id: "lo2", text: { en: "Understand key terms like optic centre, principal focus, and focal length.", ml: "പ്രകാശിക കേന്ദ്രം, മുഖ്യ ഫോക്കസ്, ഫോക്കസ് ദൂരം തുടങ്ങിയ പദങ്ങൾ മനസ്സിലാക്കുക." } },
    { id: "lo3", text: { en: "Explain image formation in convex and concave lenses using ray diagrams.", ml: "രേഖാചിത്രങ്ങൾ ഉപയോഗിച്ച് കോൺവെക്സ്, കോൺകേവ് ലെൻസുകളിലെ പ്രതിബിംബ രൂപീകരണം വിശദീകരിക്കുക." } },
    { id: "lo4", text: { en: "Apply the lens equation and magnification formula to solve problems.", ml: "ലെൻസ് സമവാക്യവും ആവർധന സമവാക്യവും ഉപയോഗിച്ച് പ്രശ്നങ്ങൾ പരിഹരിക്കുക." } },
    { id: "lo5", text: { en: "Understand the power of a lens and its SI unit.", ml: "ലെൻസിന്റെ പവറും അതിന്റെ SI യൂണിറ്റും മനസ്സിലാക്കുക." } },
    { id: "lo6", text: { en: "Describe the working of optical instruments like microscopes and telescopes.", ml: "മൈക്രോസ്കോപ്പ്, ടെലിസ്കോപ്പ് തുടങ്ങിയ പ്രകാശിക ഉപകരണങ്ങളുടെ പ്രവർത്തനം വിവരിക്കുക." } }
  ],
  content: {
    intro: {
      en: "Lenses are transparent mediums with two refracting surfaces. They play a crucial role in various optical devices from spectacles to telescopes.",
      ml: "രണ്ട് അപവർത്തന പ്രതലങ്ങളുള്ള സുതാര്യ മാധ്യമങ്ങളാണ് ലെൻസുകൾ. കണ്ണടകൾ മുതൽ ടെലിസ്കോപ്പുകൾ വരെയുള്ള വിവിധ പ്രകാശിക ഉപകരണങ്ങളിൽ ഇവ പ്രധാന പങ്ക് വഹിക്കുന്നു."
    },
    core: {
      en: "This chapter covers the types of lenses, image formation rules, lens equations, power, and common optical instruments.",
      ml: "ഈ അധ്യായം ലെൻസുകളുടെ തരങ്ങൾ, പ്രതിബിംബ രൂപീകരണ നിയമങ്ങൾ, ലെൻസ് സമവാക്യങ്ങൾ, പവർ, സാധാരണ പ്രകാശിക ഉപകരണങ്ങൾ എന്നിവ ഉൾക്കൊള്ളുന്നു."
    },
    blocks: [
      { type: 'h2', en: '1. Introduction to Lenses', ml: '1. ലെൻസുകൾ - ഒരാമുഖം' },
      { type: 'p', en: 'Lenses are transparent mediums with two refracting surfaces.', ml: 'രണ്ട് അപവർത്തന പ്രതലങ്ങളുള്ള സുതാര്യ മാധ്യമങ്ങളാണ് ലെൻസുകൾ.' },
      
      { type: 'h3', en: 'Types of Lenses', ml: 'ലെൻസുകളുടെ ഇനങ്ങൾ' },
      { type: 'table', tableData: {
          headers: [{en: 'Convex Lens (കോൺവെക്സ് ലെൻസ്)', ml: 'കോൺവെക്സ് ലെൻസ്'}, {en: 'Concave Lens (കോൺകേവ് ലെൻസ്)', ml: 'കോൺകേവ് ലെൻസ്'}],
          rows: [
            [{en: 'Thicker in the middle', ml: 'മധ്യഭാഗം കട്ടിയുള്ളത്'}, {en: 'Thinner in the middle / Thicker at the edges', ml: 'മധ്യഭാഗം കട്ടി കുറഞ്ഞതും വക്കുകൾ കട്ടിയുള്ളതും'}],
            [{en: 'Shows objects magnified', ml: 'വസ്തുക്കളെ വലുതാക്കി കാണിക്കുന്നു'}, {en: 'Shows objects diminished', ml: 'വസ്തുക്കളെ ചെറുതാക്കി കാണിക്കുന്നു'}],
            [{en: 'Converges light rays', ml: 'പ്രകാശകിരണങ്ങളെ കേന്ദ്രീകരിപ്പിക്കുന്നു'}, {en: 'Diverges light rays', ml: 'പ്രകാശകിരണങ്ങളെ വികേന്ദ്രീകരിപ്പിക്കുന്നു'}]
          ]
      }},
      { type: 'img', en: 'Types of Lenses', ml: 'ലെൻസുകളുടെ തരങ്ങൾ', customId: 'lenses-types-simulation' },
      { type: 'img', en: 'Interactive Lens Simulation', ml: 'ഇന്ററാക്ടീവ് ലെൻസ് സിമുലേഷൻ', customId: 'lens-simulation' },

      { type: 'h2', en: '2. Terms Related to Lenses', ml: '2. ലെൻസുകളുമായി ബന്ധപ്പെട്ട പദങ്ങൾ' },
      { type: 'p', en: 'Optic centre (O): The midpoint of a lens is the optic centre.', ml: 'പ്രകാശിക കേന്ദ്രം (O): ഒരു ലെൻസിന്റെ മധ്യബിന്ദുവാണ് പ്രകാശിക കേന്ദ്രം.' },
      { type: 'p', en: 'Centres of curvature (C1, C2): Each refracting surface of a lens is part of a sphere. The centres of such spheres are the centres of curvature.', ml: 'വക്രതാ കേന്ദ്രം (C1, C2): ലെൻസിന്റെ ഓരോ അപവർത്തന പ്രതലവും ഓരോ ഗോളത്തിന്റെ ഭാഗമാണ്. ഈ ഗോളങ്ങളുടെ കേന്ദ്രങ്ങളാണ് വക്രതാ കേന്ദ്രങ്ങൾ.' },
      { type: 'p', en: 'Optic axis: The imaginary line passing through the centres of curvature and the optic centre of a lens.', ml: 'മുഖ്യാക്ഷം: വക്രതാ കേന്ദ്രങ്ങളിലൂടെയും പ്രകാശിക കേന്ദ്രത്തിലൂടെയും കടന്നുപോകുന്ന സാങ്കല്പിക രേഖയാണ് മുഖ്യാക്ഷം.' },
      { type: 'p', en: 'Aperture: The area of the lens through which light passes is called aperture.', ml: 'അപ്പർച്ചർ: പ്രകാശം കടന്നുപോകുന്ന ലെൻസിന്റെ ഭാഗത്തിന്റെ വിസ്തൃതിയാണ് അപ്പർച്ചർ.' },

      { type: 'h2', en: '3. Principal Focus and Focal Length', ml: '3. മുഖ്യ ഫോക്കസും ഫോക്കസ് ദൂരവും' },
      { type: 'h3', en: 'Principal Focus of a Convex Lens', ml: 'കോൺവെക്സ് ലെൻസിന്റെ മുഖ്യ ഫോക്കസ്' },
      { type: 'p', en: 'Light rays near and parallel to the optic axis incident on a convex lens, after refraction converge at a point on the optic axis on the other side of the lens. This point is the principal focus (F) of a convex lens. It is real.', ml: 'കോൺവെക്സ് ലെൻസിന്റെ മുഖ്യാക്ഷത്തിന് സമാന്തരമായി പതിക്കുന്ന പ്രകാശകിരണങ്ങൾ അപവർത്തനത്തിന് ശേഷം ലെൻസിന്റെ മറുവശത്ത് മുഖ്യാക്ഷത്തിലെ ഒരു ബിന്ദുവിലേക്ക് കേന്ദ്രീകരിക്കുന്നു. ഈ ബിന്ദുവാണ് കോൺവെക്സ് ലെൻസിന്റെ മുഖ്യ ഫോക്കസ് (F). ഇത് യഥാർത്ഥമാണ്.' },
      
      { type: 'h3', en: 'Principal Focus of a Concave Lens', ml: 'കോൺകേവ് ലെൻസിന്റെ മുഖ്യ ഫോക്കസ്' },
      { type: 'p', en: 'Light rays, near and parallel to the optic axis incident on a concave lens, after refraction appear to diverge from a point on the optic axis on the same side of the lens. This point is the principal focus (F) of a concave lens. It is virtual.', ml: 'കോൺകേവ് ലെൻസിന്റെ മുഖ്യാക്ഷത്തിന് സമാന്തരമായി പതിക്കുന്ന പ്രകാശകിരണങ്ങൾ അപവർത്തനത്തിന് ശേഷം ലെൻസിന്റെ അതേ വശത്തുള്ള മുഖ്യാക്ഷത്തിലെ ഒരു ബിന്ദുവിൽ നിന്നും വികേന്ദ്രീകരിച്ചു പോകുന്നതായി തോന്നുന്നു. ഈ ബിന്ദുവാണ് കോൺകേവ് ലെൻസിന്റെ മുഖ്യ ഫോക്കസ് (F). ഇത് മിഥ്യയാണ്.' },
      
      { type: 'p', en: 'Focal Length (f): The distance from the optic centre of the lens to the principal focus is the focal length.', ml: 'ഫോക്കസ് ദൂരം (f): ലെൻസിന്റെ പ്രകാശിക കേന്ദ്രത്തിൽ നിന്നും മുഖ്യ ഫോക്കസിലേക്കുള്ള ദൂരമാണ് ഫോക്കസ് ദൂരം.' },
      { type: 'img', en: 'Principal Focus and Focal Length', ml: 'മുഖ്യ ഫോക്കസും ഫോക്കസ് ദൂരവും', customId: 'focus-simulation' },

      { type: 'h2', en: '4. Image Formation by Lenses', ml: '4. ലെൻസുകൾ രൂപീകരിക്കുന്ന പ്രതിബിംബങ്ങൾ' },
      { type: 'p', en: 'Real Image: Images that can be projected on a screen are real images.', ml: 'യഥാർത്ഥ പ്രതിബിംബം (Real Image): സ്ക്രീനിൽ പതിപ്പിക്കാൻ കഴിയുന്ന പ്രതിബിംബങ്ങളാണ് യഥാർത്ഥ പ്രതിബിംബങ്ങൾ.' },
      { type: 'p', en: 'Virtual Image: Images that cannot be captured on a screen, but can only be seen are virtual images.', ml: 'മിഥ്യാ പ്രതിബിംബം (Virtual Image): സ്ക്രീനിൽ പതിപ്പിക്കാൻ കഴിയാത്തതും എന്നാൽ ലെൻസിലൂടെ നോക്കുമ്പോൾ കാണാൻ മാത്രം സാധിക്കുന്നതുമായ പ്രതിബിംബങ്ങളാണ് മിഥ്യാ പ്രതിബിംബങ്ങൾ.' },
      
      { type: 'h3', en: 'Rules for Ray Diagrams', ml: 'രേഖാചിത്രങ്ങൾ വരയ്ക്കുന്നതിനുള്ള നിയമങ്ങൾ' },
      { type: 'p', en: '1. A ray of light parallel to the optic axis passes through the principal focus on the other side (for convex).', ml: '1. മുഖ്യാക്ഷത്തിന് സമാന്തരമായി വരുന്ന കിരണം അപവർത്തനത്തിന് ശേഷം മറുവശത്തെ ഫോക്കസിലൂടെ കടന്നുപോകുന്നു.' },
      { type: 'p', en: '2. A ray of light passing through the optic centre passes undeviated.', ml: '2. പ്രകാശിക കേന്ദ്രത്തിലൂടെ കടന്നുപോകുന്ന കിരണത്തിന് ദിശാമാറ്റം സംഭവിക്കുന്നില്ല.' },
      { type: 'p', en: '3. A ray of light passing through the focus on the same side of the object passes parallel to the optic axis after refraction.', ml: '3. വസ്തു ഇരിക്കുന്ന വശത്തെ ഫോക്കസിലൂടെ കടന്നുവരുന്ന കിരണം അപവർത്തനത്തിന് ശേഷം മുഖ്യാക്ഷത്തിന് സമാന്തരമായി സഞ്ചരിക്കുന്നു.' },

      { type: 'h2', en: '5. Images Formed by a Convex Lens', ml: '5. കോൺവെക്സ് ലെൻസ് രൂപീകരിക്കുന്ന പ്രതിബിംബങ്ങൾ' },
      { type: 'table', tableData: {
          headers: [
            {en: 'Position of the Object', ml: 'വസ്തുവിന്റെ സ്ഥാനം'}, 
            {en: 'Position of the Image', ml: 'പ്രതിബിംബത്തിന്റെ സ്ഥാനം'}, 
            {en: 'Characteristics of the Image', ml: 'പ്രതിബിംബത്തിന്റെ സവിശേഷതകൾ'}
          ],
          rows: [
            [{en: 'Beyond 2F', ml: '2F ന് അപ്പുറം'}, {en: 'Between F and 2F', ml: 'മറുവശത്ത് F നും 2F നും ഇടയിൽ'}, {en: 'Diminished, Inverted, Real', ml: 'ചെറുത്, തലകീഴായത്, യഥാർത്ഥം'}],
            [{en: 'At 2F', ml: '2F ൽ'}, {en: 'At 2F', ml: 'മറുവശത്ത് 2F ൽ'}, {en: 'Same size, Inverted, Real', ml: 'ഒരേ വലിപ്പം, തലകീഴായത്, യഥാർത്ഥം'}],
            [{en: 'Between F and 2F', ml: 'F നും 2F നും ഇടയിൽ'}, {en: 'Beyond 2F', ml: 'മറുവശത്ത് 2F ന് അപ്പുറം'}, {en: 'Magnified, Inverted, Real', ml: 'വലുത്, തലകീഴായത്, യഥാർത്ഥം'}],
            [{en: 'At F', ml: 'F ൽ'}, {en: 'At infinity', ml: 'അനന്തതയിൽ'}, {en: 'Magnified, Inverted, Real', ml: 'വളരെ വലുത്, തലകീഴായത്, യഥാർത്ഥം'}],
            [{en: 'Between F and lens', ml: 'F നും ലെൻസിനും ഇടയിൽ'}, {en: 'On the same side of the object', ml: 'വസ്തുവിന്റെ അതേ വശത്ത്'}, {en: 'Magnified, Erect, Virtual', ml: 'വലുത്, നിവർന്നത്, മിഥ്യ'}]
          ]
      }},

      { type: 'h2', en: '6. Images Formed by a Concave Lens', ml: '6. കോൺകേവ് ലെൻസ് രൂപീകരിക്കുന്ന പ്രതിബിംബങ്ങൾ' },
      { type: 'p', en: 'As a concave lens diverges light rays, the image it forms is always virtual, erect, and diminished.', ml: 'കോൺകേവ് ലെൻസ് പ്രകാശകിരണങ്ങളെ വികേന്ദ്രീകരിപ്പിക്കുന്നതിനാൽ, അതിൽ എപ്പോഴും മിഥ്യയും, നിവർന്നതും, ചെറുതുമായ പ്രതിബിംബം മാത്രമേ രൂപപ്പെടുകയുള്ളൂ.' },
      { type: 'p', en: 'The position of the image is always between F and the lens on the same side of the object.', ml: 'പ്രതിബിംബം എപ്പോഴും വസ്തുവിന്റെ അതേ വശത്ത്, ലെൻസിനും ഫോക്കസിനും (F) ഇടയിലായിരിക്കും.' },

      { type: 'h2', en: '7. Cartesian Sign Convention', ml: '7. കാർട്ടീഷ്യൻ ചിഹ്ന രീതി' },
      { type: 'p', en: '1. All distances should be measured from the optic centre of the lens.', ml: '1. എല്ലാ ദൂരങ്ങളും അളക്കേണ്ടത് ലെൻസിന്റെ പ്രകാശിക കേന്ദ്രത്തിൽ നിന്നാണ്.' },
      { type: 'p', en: '2. Distances measured in the same direction as the incident ray are positive, and those in the opposite direction are negative.', ml: '2. പതനകിരണത്തിന്റെ അതേ ദിശയിൽ അളക്കുന്ന ദൂരങ്ങൾ പോസിറ്റീവ് ആയും എതിർ ദിശയിൽ അളക്കുന്നവ നെഗറ്റീവ് ആയും കണക്കാക്കണം.' },
      { type: 'p', en: '3. Distances measured above the optic axis are positive, and those below are negative.', ml: '3. മുഖ്യാക്ഷത്തിന് മുകളിലേക്കുള്ള ദൂരങ്ങൾ പോസിറ്റീവ് ആയും താഴേക്കുള്ളവ നെഗറ്റീവ് ആയും പരിഗണിക്കണം.' },
      { type: 'p', en: 'Note: Focal length (f) of convex lens is (+), concave lens is (-). Object distance (u) is always (-).', ml: 'കുറിപ്പ്: കോൺവെക്സ് ലെൻസിന്റെ ഫോക്കസ് ദൂരം (+) ഉം, കോൺകേവ് ലെൻസിന്റേത് (-) ഉം ആയിരിക്കും. വസ്തു ദൂരം (u) എപ്പോഴും (-) ആയിരിക്കും.' },

      { type: 'h2', en: '8. Lens Equation and Magnification', ml: '8. ലെൻസ് സമവാക്യവും ആവർധനവും' },
      { type: 'formula', en: 'Lens Equation: 1/f = 1/v - 1/u', ml: 'ലെൻസ് സമവാക്യം: 1/f = 1/v - 1/u' },
      { type: 'p', en: 'Magnification (m) is the ratio of the height of the image to the height of the object.', ml: 'പ്രതിബിംബത്തിന്റെ ഉയരവും വസ്തുവിന്റെ ഉയരവും തമ്മിലുള്ള അംശബന്ധമാണ് ആവർധനം.' },
      { type: 'formula', en: 'm = hi / ho = v / u', ml: 'm = hi / ho = v / u' },
      { type: 'p', en: 'If m is positive (+): Image is Erect and Virtual. If m is negative (-): Image is Inverted and Real.', ml: 'm പോസിറ്റീവ് (+) ആണെങ്കിൽ: നിവർന്നതും മിഥ്യയുമായ പ്രതിബിംബം. m നെഗറ്റീവ് (-) ആണെങ്കിൽ: തലകീഴായതും യഥാർത്ഥവുമായ പ്രതിബിംബം.' },

      { type: 'h2', en: '9. Power of Lens', ml: '9. ലെൻസിന്റെ പവർ' },
      { type: 'p', en: 'The power of a lens is its ability to converge or diverge light rays incident on it. It is the reciprocal of focal length (in meters).', ml: 'ലെൻസിൽ പതിക്കുന്ന പ്രകാശകിരണങ്ങളെ കേന്ദ്രീകരിപ്പിക്കാനോ വികേന്ദ്രീകരിപ്പിക്കാനോ ലെൻസിനുള്ള കഴിവാണ് പവർ. ഇത് ഫോക്കസ് ദൂരത്തിന്റെ (മീറ്ററിൽ) വ്യുൽക്രമമാണ്.' },
      { type: 'formula', en: 'P = 1 / f (f in meters)', ml: 'P = 1 / f (f മീറ്ററിൽ)' },
      { type: 'p', en: 'The SI unit of power is dioptre (D). Convex lens power is (+), Concave lens power is (-).', ml: 'പവറിന്റെ SI യൂണിറ്റ് ഡയോപ്റ്റർ (D) ആണ്. കോൺവെക്സ് ലെൻസിന്റെ പവർ പോസിറ്റീവും, കോൺകേവ് ലെൻസിന്റേത് നെഗറ്റീവും ആയിരിക്കും.' },

      { type: 'h2', en: '10. Optical Instruments', ml: '10. പ്രകാശിക ഉപകരണങ്ങൾ' },
      { type: 'h3', en: 'Compound Microscope', ml: 'സംയുക്ത മൈക്രോസ്കോപ്പ്' },
      { type: 'p', en: 'Objective: Near the object. Small aperture, short focal length. Eyepiece: Near the eye. Larger aperture, longer focal length than the objective.', ml: 'ഒബ്ജക്ടീവ്: വസ്തുവിന്റെ അടുത്തുള്ള ലെൻസ്. അപ്പർച്ചറും ഫോക്കസ് ദൂരവും കുറവാണ്. ഐപീസ്: കണ്ണിനോട് ചേർന്നുള്ള ലെൻസ്. ഒബ്ജക്ടീവിനേക്കാൾ കൂടിയ അപ്പർച്ചറും ഫോക്കസ് ദൂരവും.' },
      
      { type: 'h3', en: 'Telescope', ml: 'ടെലിസ്കോപ്പ്' },
      { type: 'p', en: 'Objective: Facing the distant object. Large focal length, large aperture. Eyepiece: Near the eye. Short focal length, small aperture.', ml: 'ഒബ്ജക്ടീവ്: വിദൂര വസ്തുവിനെ അഭിമുഖീകരിക്കുന്ന ലെൻസ്. കൂടിയ ഫോക്കസ് ദൂരവും വലിയ അപ്പർച്ചറും. ഐപീസ്: കണ്ണിനോട് ചേർന്നുള്ള ലെൻസ്. കുറഞ്ഞ ഫോക്കസ് ദൂരവും ചെറിയ അപ്പർച്ചറും.' },

      { type: 'h2', en: 'Practice Questions & Answers', ml: 'പരിശീലന ചോദ്യങ്ങളും ഉത്തരങ്ങളും' },
      { type: 'h3', en: 'Q1: Write the main difference between a convex lens and a concave lens.', ml: 'ചോദ്യം 1: കോൺവെക്സ് ലെൻസും കോൺകേവ് ലെൻസും തമ്മിലുള്ള പ്രധാന വ്യത്യാസം എഴുതുക.' },
      { type: 'p', en: 'Answer: A convex lens is thicker in the middle and converges light rays. A concave lens is thinner in the middle and diverges light rays.', ml: 'ഉത്തരം: കോൺവെക്സ് ലെൻസിന് മധ്യഭാഗത്ത് കട്ടി കൂടുതലാണ്; ഇത് പ്രകാശകിരണങ്ങളെ കേന്ദ്രീകരിപ്പിക്കുന്നു. കോൺകേവ് ലെൻസിന് മധ്യഭാഗത്ത് കട്ടി കുറവാണ്; ഇത് പ്രകാശകിരണങ്ങളെ വികേന്ദ്രീകരിപ്പിക്കുന്നു.' },
      { type: 'h3', en: 'Q2: The focal length of a concave lens is 50 cm. Calculate its power.', ml: 'ചോദ്യം 2: ഒരു കോൺകേവ് ലെൻസിന്റെ ഫോക്കസ് ദൂരം 50 cm ആണ്. അതിന്റെ പവർ കണക്കാക്കുക.' },
      { type: 'p', en: 'Answer: f = -50 cm = -0.5 m. Power (P) = 1/f = 1/-0.5 = -2 D.', ml: 'ഉത്തരം: f = -50 cm = -0.5 മീറ്റർ. പവർ (P) = 1/f = 1/-0.5 = -2 D.' },
      { type: 'h3', en: 'Q3: If the magnification produced by a lens is -0.5, what is the nature of the image?', ml: 'ചോദ്യം 3: ഒരു ലെൻസ് ഉണ്ടാക്കുന്ന ആവർധനം -0.5 ആണെങ്കിൽ, പ്രതിബിംബത്തിന്റെ സ്വഭാവം എന്തായിരിക്കും?' },
      { type: 'p', en: 'Answer: Real, Inverted, and Diminished.', ml: 'ഉത്തരം: യഥാർത്ഥം, തലകീഴായത്, ചെറുത്.' }
    ]
  },
  glossary: [
    { term: { en: "Optic Centre", ml: "പ്രകാശിക കേന്ദ്രം" }, definition: { en: "The midpoint of a lens.", ml: "ഒരു ലെൻസിന്റെ മധ്യബിന്ദു." } },
    { term: { en: "Principal Focus", ml: "മുഖ്യ ഫോക്കസ്" }, definition: { en: "Point where parallel rays converge or appear to diverge from.", ml: "സമാന്തര കിരണങ്ങൾ കേന്ദ്രീകരിക്കുകയോ വികേന്ദ്രീകരിക്കുകയോ ചെയ്യുന്ന ബിന്ദു." } },
    { term: { en: "Dioptre", ml: "ഡയോപ്റ്റർ" }, definition: { en: "The SI unit of power of a lens.", ml: "ലെൻസിന്റെ പവറിന്റെ SI യൂണിറ്റ്." } }
  ],
  quiz: [
  {
    "q_id": "u2_q1",
    "type": "mcq",
    "stem": {
      "en": "Who discovered the magnetic effect of electric current?",
      "ml": "വൈദ്യുതിയുടെ കാന്തിക ഫലം കണ്ടെത്തിയത് ആര്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Hans Christian Oersted",
          "ml": "ഹാൻസ് ക്രിസ്റ്റ്യൻ ഓർസ്റ്റെഡ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Michael Faraday",
          "ml": "മൈക്കൽ ഫാരഡേ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Nikola Tesla",
          "ml": "നിക്കോള ടെസ്‌ല"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Thomas Edison",
          "ml": "തോമസ് എഡിസൺ"
        }
      }
    ],
    "answer": "A",
    "difficulty": "easy",
    "explanation": {
      "en": "Oersted discovered that an electric current creates a magnetic field.",
      "ml": "വൈദ്യുതി ഒരു കാന്തികമണ്ഡലം സൃഷ്ടിക്കുന്നുവെന്ന് കണ്ടെത്തിയത് ഓർസ്റ്റെഡാണ്."
    }
  },
  {
    "q_id": "u2_q2",
    "type": "mcq",
    "stem": {
      "en": "The direction of the magnetic field around a straight current-carrying conductor is given by:",
      "ml": "വൈദ്യുതി കടന്നുപോകുന്ന നേരായ ചാലകത്തിന് ചുറ്റുമുള്ള കാന്തികമണ്ഡലത്തിന്റെ ദിശ നിർണ്ണയിക്കുന്നത്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Fleming's Left Hand Rule",
          "ml": "ഫ്ലെമിംഗിന്റെ ഇടതുകൈ നിയമം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Fleming's Right Hand Rule",
          "ml": "ഫ്ലെമിംഗിന്റെ വലതുകൈ നിയമം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Right Hand Thumb Rule",
          "ml": "വലതുകൈ പെരുവിരൽ നിയമം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Ampere's Swimming Rule",
          "ml": "ആമ്പിയറുടെ നീന്തൽ നിയമം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "Right Hand Thumb Rule shows field lines wrapping around the conductor.",
      "ml": "കാന്തികമണ്ഡലത്തിന്റെ ദിശ കണ്ടുപിടിക്കാൻ വലതുകൈ പെരുവിരൽ നിയമം ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u2_q3",
    "type": "mcq",
    "stem": {
      "en": "In the Right Hand Thumb Rule, what does the thumb indicate?",
      "ml": "വലതുകൈ പെരുവിരൽ നിയമത്തിൽ, പെരുവിരൽ എന്തിനെ സൂചിപ്പിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Direction of magnetic field",
          "ml": "കാന്തികമണ്ഡലത്തിന്റെ ദിശ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Direction of electric current",
          "ml": "വൈദ്യുത പ്രവാഹത്തിന്റെ ദിശ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Direction of force",
          "ml": "ബലത്തിന്റെ ദിശ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Direction of motion",
          "ml": "ചലനത്തിന്റെ ദിശ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "The thumb points in the direction of the current.",
      "ml": "പെരുവിരൽ വൈദ്യുത പ്രവാഹത്തിന്റെ ദിശയെ സൂചിപ്പിക്കുന്നു."
    }
  },
  {
    "q_id": "u2_q4",
    "type": "mcq",
    "stem": {
      "en": "Magnetic field lines around a straight current bearing conductor are in the shape of:",
      "ml": "നേരായ ചാലകത്തിന് ചുറ്റുമുള്ള കാന്തിക ബലരേഖകളുടെ ആകൃതി എന്താണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Straight lines parallel to the wire",
          "ml": "കമ്പിക്ക് സമാന്തരമായ നേർരേഖകൾ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Concentric circles",
          "ml": "ഏകാക്ഷ വൃത്തങ്ങൾ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Ellipses",
          "ml": "ദീർഘവൃത്തങ്ങൾ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Parabolas",
          "ml": "പരാബോളകൾ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Field lines around a wire form concentric circles.",
      "ml": "ചാലകത്തിന് ചുറ്റുമുള്ള കാന്തിക ബലരേഖകൾ ഏകാക്ഷ വൃത്തങ്ങളാണ്."
    }
  },
  {
    "q_id": "u2_q5",
    "type": "mcq",
    "stem": {
      "en": "Inside a current-carrying solenoid, the magnetic field is:",
      "ml": "വൈദ്യുതി കടന്നുപോകുന്ന സോളിനോയിഡിനുള്ളിലെ കാന്തികമണ്ഡലം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Zero",
          "ml": "പൂജ്യം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Uniform everywhere",
          "ml": "എല്ലായിടത്തും സമാനം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Non-uniform",
          "ml": "അസമാനം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Strongest at the ends",
          "ml": "അറ്റങ്ങളിൽ ഏറ്റവും ശക്തം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "A solenoid creates a uniform magnetic field inside it, similar to a bar magnet.",
      "ml": "സോളിനോയിഡിനുള്ളിൽ എല്ലായിടത്തും കാന്തികമണ്ഡലം സമാനമായിരിക്കും."
    }
  },
  {
    "q_id": "u2_q6",
    "type": "mcq",
    "stem": {
      "en": "What material is best for the core of an electromagnet?",
      "ml": "വൈദ്യുതകാന്തത്തിന്റെ കോർ ആയി ഉപയോഗിക്കാൻ ഏറ്റവും അനുയോജ്യമായ പദാർത്ഥം ഏത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Steel",
          "ml": "സ്റ്റീൽ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Copper",
          "ml": "ചെമ്പ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Soft iron",
          "ml": "പച്ചிரുമ്പ് (സോഫ്റ്റ് അയൺ)"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Aluminum",
          "ml": "അലുമിനിയം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Soft iron gains and loses magnetism quickly, making it ideal.",
      "ml": "പച്ചിരുമ്പിന് വേഗത്തിൽ കാന്തികശക്തി ലഭിക്കാനും നഷ്ടപ്പെടാനുമുള്ള കഴിവുള്ളതിനാൽ ഇത് ഏറ്റവും അനുയോജ്യമാണ്."
    }
  },
  {
    "q_id": "u2_q7",
    "type": "mcq",
    "stem": {
      "en": "When a current-carrying conductor is placed in a magnetic field, it experiences a mechanical force. This is the working principle of:",
      "ml": "ഒരു കാന്തികമണ്ഡലത്തിൽ ഇരിക്കുന്ന വൈദ്യുതി കടന്നുപോകുന്ന ചാലകത്തിൽ ഒരു ബലം അനുഭവപ്പെടുന്നു. ഇത് എന്തിന്റെ പ്രവർത്തന തത്വമാണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Dynamo",
          "ml": "ഡൈനാമോ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Generator",
          "ml": "ജനറേറ്റർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "DC Motor",
          "ml": "ഡി.സി മോട്ടോർ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Transformer",
          "ml": "ട്രാൻസ്ഫോർമർ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "DC motors convert electrical energy to mechanical energy via this motor principle.",
      "ml": "മോട്ടോർ തത്വം ഉപയോഗിച്ചാണ് ഡി.സി മോട്ടോർ പ്രവർത്തിക്കുന്നത്."
    }
  },
  {
    "q_id": "u2_q8",
    "type": "mcq",
    "stem": {
      "en": "Which rule is used to find the direction of force on a conductor in a magnetic field?",
      "ml": "കാന്തികമണ്ഡലത്തിലിരിക്കുന്ന ചാലകത്തിലുണ്ടാകുന്ന ബലത്തിന്റെ ദിശ കണ്ടെത്താൻ ഉപയോഗിക്കുന്ന നിയമം ഏത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Fleming's Right Hand Rule",
          "ml": "ഫ്ലെമിംഗിന്റെ വലതുകൈ നിയമം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Fleming's Left Hand Rule",
          "ml": "ഫ്ലെമിംഗിന്റെ ഇടതുകൈ നിയമം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Right Hand Thumb Rule",
          "ml": "വലതുകൈ പെരുവിരൽ നിയമം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Corkscrew Rule",
          "ml": "കോർക്ക്സ്ക്രൂ നിയമം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Fleming's Left Hand Rule gives the direction of motion/force.",
      "ml": "ബലത്തിന്റെ ദിശ കണ്ടുപിടിക്കാൻ ഫ്ലെമിംഗിന്റെ ഇടതുകൈ നിയമം ഉപയോഗിക്കുന്നു."
    }
  },
  {
    "q_id": "u2_q9",
    "type": "mcq",
    "stem": {
      "en": "In Fleming's Left Hand Rule, the forefinger represents the direction of:",
      "ml": "ഫ്ലെമിംഗിന്റെ ഇടതുകൈ നിയമത്തിൽ ചൂണ്ടുവിരൽ എന്തിനെ സൂചിപ്പിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Current",
          "ml": "വൈദ്യുത പ്രവാഹം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Motion (Force)",
          "ml": "ചലനം (ബലം)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Magnetic Field",
          "ml": "കാന്തികമണ്ഡലം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Voltage",
          "ml": "വോൾട്ടേജ്"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Forefinger = Magnetic Field, Middle finger = Current, Thumb = Motion.",
      "ml": "ചൂണ്ടുവിരൽ കാന്തികമണ്ഡലത്തെയും, നടുവിരൽ വൈദ്യുതപ്രവാഹത്തെയും സൂചിപ്പിക്കുന്നു."
    }
  },
  {
    "q_id": "u2_q10",
    "type": "mcq",
    "stem": {
      "en": "A device that converts electrical energy into mechanical energy is:",
      "ml": "വൈദ്യുതോർജ്ജത്തെ യാന്ത്രികോർജ്ജമാക്കി മാറ്റുന്ന ഉപകരണം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Generator",
          "ml": "ജനറേറ്റർ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Motor",
          "ml": "മോട്ടോർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Galvanometer",
          "ml": "ഗാൽവനോമീറ്റർ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Transformer",
          "ml": "ട്രാൻസ്ഫോർമർ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Electric motors provide mechanical work using electricity.",
      "ml": "വൈദ്യുതോർജ്ജം യാന്ത്രികോർജ്ജമാക്കി മാറ്റുന്നത് മോട്ടോർ ആണ്."
    }
  },
  {
    "q_id": "u2_q11",
    "type": "mcq",
    "stem": {
      "en": "Commutator rings (split rings) in a DC motor are used to:",
      "ml": "ഡി.സി മോട്ടോറിലെ സ്പ്ലിറ്റ് റിംഗുകളുടെ (കമ്മ്യൂട്ടേറ്റർ) ധർമ്മം എന്താണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Increase the speed",
          "ml": "വേഗത കൂട്ടാൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Reverse the current direction in the coil",
          "ml": "കോയിലിലെ വൈദ്യുതപ്രവാഹത്തിന്റെ ദിശ മാറ്റാൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Create the magnetic field",
          "ml": "കാന്തികമണ്ഡലം നിർമ്മിക്കാൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Prevent overheating",
          "ml": "ചൂടാകുന്നത് തടയാൻ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "They reverse the current direction every half cycle to ensure continuous rotation.",
      "ml": "കോയിലിന്റെ തുടർച്ചയായ കറക്കത്തിന് വൈദ്യുത ദിശ മാറ്റാനാണ് ഇവ ഉപയോഗിക്കുന്നത്."
    }
  },
  {
    "q_id": "u2_q12",
    "type": "mcq",
    "stem": {
      "en": "The carbon brushes in a DC motor help to:",
      "ml": "ഡി.സി മോട്ടോറിലെ കാർബൺ ബ്രഷുകളുടെ ഉപയോഗം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Maintain electrical contact with the rotating split rings",
          "ml": "കറങ്ങുന്ന സ്പ്ലിറ്റ് റിംഗുകളുമായി വൈദ്യുത ബന്ധം നിലനിർത്താൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Generate the magnetic field",
          "ml": "കാന്തികമണ്ഡലം ഉണ്ടാക്കാൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Reduce friction only",
          "ml": "ഘർഷണം കുറയ്ക്കാൻ മാത്രം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Cool down the armature",
          "ml": "ആർമേച്ചർ തണുപ്പിക്കാൻ"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "Brushes transfer current from the external circuit to the rotating commutator.",
      "ml": "കറങ്ങുന്ന ഭാഗത്തേക്ക് വൈദ്യുതി എത്തിക്കാൻ ബ്രഷുകൾ സഹായിക്കുന്നു."
    }
  },
  {
    "q_id": "u2_q13",
    "type": "mcq",
    "stem": {
      "en": "Which of the following devices relies on the magnetic effect of current?",
      "ml": "വൈദ്യുതിയുടെ കാന്തിക ഫലം അടിസ്ഥാനമാക്കി പ്രവർത്തിക്കുന്ന ഉപകരണം ഏത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Electric iron",
          "ml": "ഇലക്ട്രിക് അയേൺ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Loudspeaker",
          "ml": "ഉച്ചഭാഷിണി"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Light bulb",
          "ml": "ലൈറ്റ് ബൾബ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Electric heater",
          "ml": "ഇലക്ട്രിക് ഹീറ്റർ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Loudspeakers use electromagnets interacting with permanent magnets to vibrate a cone.",
      "ml": "കാന്തികഫലം ഉപയോഗിച്ച് ശബ്ദമുണ്ടാക്കുന്ന ഉപകരണമാണ് ലൗഡ്സ്പീക്കർ."
    }
  },
  {
    "q_id": "u2_q14",
    "type": "mcq",
    "stem": {
      "en": "In a moving coil loudspeaker, electrical signals are converted into:",
      "ml": "ചലിക്കുന്ന കോയിൽ ലൗഡ്സ്പീക്കറിൽ വൈദ്യുത സിഗ്നലുകളെ ഏതായി മാറ്റുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Light energy",
          "ml": "പ്രകാശോർജ്ജം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Heat energy",
          "ml": "താപോർജ്ജം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Sound energy",
          "ml": "ശബ്ദോർജ്ജം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Chemical energy",
          "ml": "രാസോർജ്ജം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "easy",
    "explanation": {
      "en": "Loudspeakers convert electrical impulses (signal) into sound.",
      "ml": "ലൗഡ്സ്പീക്കർ വൈദ്യുതോർജ്ജത്തെ ശബ്ദോർജ്ജമാക്കി മാറ്റുന്നു."
    }
  },
  {
    "q_id": "u2_q15",
    "type": "mcq",
    "stem": {
      "en": "The strength of an electromagnet can be increased by:",
      "ml": "ഒരു വൈദ്യുതകാന്തത്തിന്റെ ശക്തി കൂട്ടാൻ കഴിയുന്ന മാർഗ്ഗം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Decreasing the current",
          "ml": "വൈദ്യുതപ്രവാഹം കുറയ്ക്കുക"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Decreasing the number of turns in the coil",
          "ml": "കോയിലിലെ ചുറ്റുകളുടെ എണ്ണം കുറയ്ക്കുക"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Increasing the number of turns in the coil",
          "ml": "കോയിലിലെ ചുറ്റുകളുടെ എണ്ണം കൂട്ടുക"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Removing the soft iron core",
          "ml": "പച്ചിരുമ്പ് കോർ മാറ്റുക"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "More turns and more current both increase magnetic strength.",
      "ml": "കോയിലിലെ ചുറ്റുകളുടെ എണ്ണം കൂടുമ്പോൾ കാന്തികശക്തി വർദ്ധിക്കുന്നു."
    }
  },
  {
    "q_id": "u2_q16",
    "type": "mcq",
    "stem": {
      "en": "If the direction of current in a wire is reversed, the magnetic field around it:",
      "ml": "ഒരു ചാലകത്തിലൂടെയുള്ള വൈദ്യുതപ്രവാഹത്തിന്റെ ദിശ മാറ്റിയാൽ കാന്തികമണ്ഡലത്തിന് എന്ത് സംഭവിക്കും?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Disappears",
          "ml": "ഇല്ലാതാകുന്നു"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Reverses its direction",
          "ml": "ദിശ മാറുന്നു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Remains exactly the same",
          "ml": "മാറ്റമില്ലാതെ തുടരുന്നു"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Doubles in strength",
          "ml": "ശക്തി ഇരട്ടിയാകുന്നു"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Current direction directly dictates the direction of the magnetic field (Right Hand Rule).",
      "ml": "വൈദ്യുതപ്രവാഹത്തിന്റെ ദിശ മാറുന്നതിനനുസരിച്ച് കാന്തികമണ്ഡലത്തിന്റെ ദിശയും മാറുന്നു."
    }
  },
  {
    "q_id": "u2_q17",
    "type": "mcq",
    "stem": {
      "en": "What happens to the magnetic field when current through a conductor increases?",
      "ml": "ചാലകത്തിലൂടെയുള്ള വൈദ്യുതപ്രവാഹം കൂടുമ്പോൾ കാന്തികമണ്ഡലത്തിൽ ഉണ്ടാകുന്ന മാറ്റം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Field strength decreases",
          "ml": "കാന്തികശക്തി കുറയുന്നു"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Field strength increases",
          "ml": "കാന്തികശക്തി വർദ്ധിക്കുന്നു"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Direction changes",
          "ml": "ദിശ മാറുന്നു"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "No change occurs",
          "ml": "ഒരു മാറ്റവും ഉണ്ടാകുന്നില്ല"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Field strength is directly proportional to the magnitude of the electric current.",
      "ml": "വൈദ്യുതപ്രവാഹം വർദ്ധിക്കുമ്പോൾ കാന്തികമണ്ഡലത്തിന്റെ ശക്തിയും വർദ്ധിക്കുന്നു."
    }
  },
  {
    "q_id": "u2_q18",
    "type": "mcq",
    "stem": {
      "en": "The armature of a DC motor is placed between:",
      "ml": "ഡി.സി മോട്ടോറിലെ ആർമേച്ചർ എവിടെയാണ് സ്ഥാപിച്ചിരിക്കുന്നത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Two resistors",
          "ml": "രണ്ട് പ്രതിരോധകങ്ങൾക്കിടയിൽ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Two carbon brushes only",
          "ml": "രണ്ട് കാർബൺ ബ്രഷുകൾക്കിടയിൽ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "The poles of a strong magnet",
          "ml": "ശക്തമായ കാന്തത്തിന്റെ ധ്രുവങ്ങൾക്കിടയിൽ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Two slip rings",
          "ml": "രണ്ട് സ്ലിപ്പ് റിംഗുകൾക്കിടയിൽ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "The armature rotates in the magnetic field created by the permanent magnets.",
      "ml": "ശക്തമായ കാന്തത്തിന്റെ ധ്രുവങ്ങൾക്കിടയിലാണ് ആർമേച്ചർ ഇരിക്കുന്നത്."
    }
  },
  {
    "q_id": "u2_q19",
    "type": "mcq",
    "stem": {
      "en": "Which sub-system of a loudspeaker physically moves the air to create sound?",
      "ml": "ഒരു ലൗഡ്സ്പീക്കറിൽ വായുവിനെ കമ്പനം ചെയ്യിപ്പിച്ച് ശബ്ദമുണ്ടാക്കുന്ന ഭാഗം ഏത്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Voice coil",
          "ml": "വോയ്സ് കോയിൽ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Permanent magnet",
          "ml": "സ്ഥിരകാന്തം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Diaphragm (Cone)",
          "ml": "ഡയഫ്രം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Wires",
          "ml": "വയറുകൾ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "The vibrating diaphragm pushes air waves, creating sound.",
      "ml": "ഡയഫ്രം കമ്പനം ചെയ്യുമ്പോഴാണ് വായുവിൽ ശബ്ദതരംഗങ്ങൾ ഉണ്ടാകുന്നത്."
    }
  },
  {
    "q_id": "u2_q20",
    "type": "mcq",
    "stem": {
      "en": "If you look at a circular loop and current is flowing clockwise, that face acts as a:",
      "ml": "ഒരു വൃത്താകാര കോയിലിലൂടെ ക്ലോക്ക് വൈസ് ദിശയിൽ വൈദ്യുതി ഒഴുകുമ്പോൾ ആ പ്രതലം ഏത് ധ്രുവമായി പ്രവർത്തിക്കും?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "North pole",
          "ml": "ഉത്തര ധ്രുവം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "South pole",
          "ml": "ദക്ഷിണ ധ്രുവം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "East pole",
          "ml": "ഈസ്റ്റ് പോൾ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Neutral point",
          "ml": "ന്യൂട്രൽ പോയിന്റ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "Clockwise = South pole. Anti-clockwise = North pole. (Clock face rule).",
      "ml": "ക്ലോക്ക് വൈസ് ദിശയിൽ ഒഴുകുമ്പോൾ ദക്ഷിണ ധ്രുവമായി പ്രവർത്തിക്കുന്നു."
    }
  },
  {
    "q_id": "u2_q21",
    "type": "mcq",
    "stem": {
      "en": "A solenoid behaves like a:",
      "ml": "ഒരു സോളിനോയിഡ് എന്തിനെപ്പോലെ പ്രവർത്തിക്കുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Compass needle",
          "ml": "കോമ്പസ് സൂചി"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Horseshoe magnet",
          "ml": "ലാടകാന്തം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Bar magnet",
          "ml": "ബാർ കാന്തം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Disc magnet",
          "ml": "ഡിസ്ക് കാന്തം"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "A current-carrying solenoid produces field lines exactly like a bar magnet.",
      "ml": "ഒരു സോളിനോയിഡിന്റെ കാന്തികമണ്ഡലം ബാർ കാന്തത്തിന് സമാനമാണ്."
    }
  },
  {
    "q_id": "u2_q22",
    "type": "mcq",
    "stem": {
      "en": "According to Fleming's Left Hand Rule, the fingers are held:",
      "ml": "ഫ്ലെമിംഗിന്റെ ഇടതുകൈ നിയമപ്രകാരം വിരലുകൾ എങ്ങനെ പിടിക്കണം?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Parallel to each other",
          "ml": "പരസ്പരം സമാന്തരമായി"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Mutually perpendicular to each other",
          "ml": "പരസ്പരം ലംബമായി"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "At 45 degrees",
          "ml": "45 ഡിഗ്രി കോണിൽ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Clenched in a fist",
          "ml": "ചുരുട്ടിപ്പിടിച്ച്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "The thumb, forefinger, and middle finger must be mutually perpendicular (at right angles).",
      "ml": "പെരുവിരൽ, ചൂണ്ടുവിരൽ, നടുവിരൽ എന്നിവ പരസ്പരം ലംബമായി പിടിക്കണം."
    }
  },
  {
    "q_id": "u2_q23",
    "type": "mcq",
    "stem": {
      "en": "True or False: Earth's magnetic field affects moving charges.",
      "ml": "ഭൂമിയുടെ കാന്തികമണ്ഡലം ചലിക്കുന്ന ചാർജുകളെ സ്വാധീനിക്കുന്നു. ശരിയോ തെറ്റോ?"
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
          "en": "Only at the equator",
          "ml": "ഭൂമധ്യരേഖയിൽ മാത്രം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Only inside the earth",
          "ml": "ഭൂമിക്കുള്ളിൽ മാത്രം"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "Moving charges in any magnetic field (including Earth's) experience a Lorentz force.",
      "ml": "ഏതൊരു കാന്തികമണ്ഡലത്തിലും ചലിക്കുന്ന ചാർജുകളിൽ ബലം അനുഭവപ്പെടും."
    }
  },
  {
    "q_id": "u2_q24",
    "type": "mcq",
    "stem": {
      "en": "Who formulated the Left Hand Rule?",
      "ml": "ഇടതുകൈ നിയമം ആവിഷ്കരിച്ചത് ആര്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Michael Faraday",
          "ml": "മൈക്കൽ ഫാരഡേ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "John Ambrose Fleming",
          "ml": "ജോൺ ആംബ്രോസ് ഫ്ലെമിംഗ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "James Clerk Maxwell",
          "ml": "ജെയിംസ് ക്ലാർക്ക് മാക്സ്വെൽ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Heinrich Hertz",
          "ml": "ഹെൻറിച്ച് ഹെർട്സ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "John Ambrose Fleming invented the hand rules for motors and generators.",
      "ml": "മോട്ടോറുകളുടെയും ജനറേറ്ററുകളുടെയും പ്രവൃത്തി വിശദീകരിക്കുന്ന നിയമങ്ങൾ ആവിഷ്കരിച്ചത് ഫ്ലെമിംഗ് ആണ്."
    }
  },
  {
    "q_id": "u2_q25",
    "type": "mcq",
    "stem": {
      "en": "The coil of wire wound around a cylinder to form a magnetic field is called a:",
      "ml": "കാന്തികമണ്ഡലം ഉണ്ടാക്കുന്നതിനായി സിലിണ്ടർ ആകൃതിയിൽ ചുറ്റിയെടുക്കുന്ന കമ്പി:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Capacitor",
          "ml": "കപ്പാസിറ്റർ"
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
          "en": "Solenoid",
          "ml": "സോളിനോയിഡ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Armature",
          "ml": "ആർമേച്ചർ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "A solenoid is a cylindrical coil of wire acting as a magnet when carrying electric current.",
      "ml": "വൈദ്യുതി കടന്നുപോകുമ്പോൾ കാന്തമായി പ്രവർത്തിക്കുന്ന ചുരുളുകളുള്ള കമ്പിയാണ് സോളിനോയിഡ്."
    }
  },
  {
    "q_id": "u2_q26",
    "type": "mcq",
    "stem": {
      "en": "In a DC motor, what is the rotating part called?",
      "ml": "ഡി.സി മോട്ടോറിലെ കറങ്ങുന്ന ഭാഗം ഏതാണ്?"
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
          "en": "Armature (Rotor)",
          "ml": "ആർമേച്ചർ (റോട്ടർ)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Brush",
          "ml": "ബ്രഷ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Magnet",
          "ml": "കാന്തം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "The armature is the central coil assembly that spins under magnetic force.",
      "ml": "കാന്തിക ബലം കാരണം കറങ്ങുന്ന മോട്ടോറിലെ പ്രധാന ഭാഗമാണ് ആർമേച്ചർ."
    }
  },
  {
    "q_id": "u2_q27",
    "type": "mcq",
    "stem": {
      "en": "What is the primary function of a magnetic compass?",
      "ml": "ഒരു മാഗ്നെറ്റിക് കോമ്പസിന്റെ പ്രധാന ഉപയോഗം എന്താണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "To measure current",
          "ml": "വൈദ്യുതപ്രവാഹം അളക്കാൻ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "To find geographic directions using Earth's magnetic field",
          "ml": "ഭൂമിയുടെ കാന്തികമണ്ഡലം ഉപയോഗിച്ച് ദിശ കണ്ടെത്താൻ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "To measure voltage",
          "ml": "വോൾട്ടേജ് അളക്കാൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "To locate iron strictly",
          "ml": "ഇരുമ്പ് കണ്ടെത്താൻ മാത്രം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "A compass aligns with magnetic fields, historically used for Earth navigation.",
      "ml": "കാന്തികമണ്ഡലത്തിനനുസരിച്ച് ദിശ കാണിക്കുന്ന ഉപകരണമാണ് കോമ്പസ്."
    }
  },
  {
    "q_id": "u2_q28",
    "type": "mcq",
    "stem": {
      "en": "The magnitude of the magnetic field produced by a straight current-carrying wire is inversely proportional to:",
      "ml": "ഒരു നേരായ ചാലകം ഉണ്ടാക്കുന്ന കാന്തികമണ്ഡലത്തിന്റെ ശക്തി എന്തിനോട് വിപരീത അനുപാതത്തിലാണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Length of wire",
          "ml": "കമ്പിയുടെ നീളം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Disctance from the wire",
          "ml": "കമ്പിയിൽ നിന്നുള്ള അകലം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Current in the wire",
          "ml": "കമ്പിയിലെ വൈദ്യുതപ്രവാഹം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Voltage",
          "ml": "വോൾട്ടേജ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "As you move further away from the wire (increase distance), the magnetic field gets weaker.",
      "ml": "ചാലകത്തിൽ നിന്നുള്ള അകലം കൂടുമ്പോൾ കാന്തികശക്തി കുറയുന്നു."
    }
  },
  {
    "q_id": "u2_q29",
    "type": "mcq",
    "stem": {
      "en": "An electromagnet's magnetism is:",
      "ml": "ഒരു വൈദ്യുതകാന്തത്തിന്റെ കാന്തികശക്തി:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Permanent",
          "ml": "സ്ഥിരമാണ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Temporary (can be turned on/off)",
          "ml": "താൽക്കാലികമാണ് (ഓൺ/ഓഫ് ചെയ്യാൻ കഴിയും)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Exactly same as Earth's",
          "ml": "ഭൂമിയുടേതിന് തുല്യമാണ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Unpredictable",
          "ml": "പ്രവചനാതീതമാണ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Electromagnets only produce a field while electric current is flowing.",
      "ml": "വൈദ്യുതി പ്രവഹിക്കുമ്പോൾ മാത്രം കാന്തമായി പ്രവർത്തിക്കുന്നവയാണ് വൈദ്യുതകാന്തങ്ങൾ."
    }
  },
  {
    "q_id": "u2_q30",
    "type": "mcq",
    "stem": {
      "en": "The stationary magnets in an electric motor are generally known as the:",
      "ml": "മോട്ടോറിനുള്ളിലെ സ്ഥിരമായി നിൽക്കുന്ന കാന്തങ്ങളെ വിളിക്കുന്ന പേര്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Rotor",
          "ml": "റോട്ടർ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Armature",
          "ml": "ആർമേച്ചർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Stator (Field magnet)",
          "ml": "സ്റ്റേറ്റർ (ഫീൽഡ് കാന്തം)"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Commutator",
          "ml": "കമ്മ്യൂട്ടേറ്റർ"
        }
      }
    ],
    "answer": "C",
    "difficulty": "medium",
    "explanation": {
      "en": "The stationary magnetic field generator is the stator.",
      "ml": "മോട്ടോറിനുള്ളിലെ കറങ്ങാത്ത കാന്തിക ഭാഗമാണ് സ്റ്റേറ്റർ."
    }
  }
]
} as const;
