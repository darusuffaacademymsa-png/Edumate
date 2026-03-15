import { Lesson } from './curriculum';

export const physicsUnit5: Lesson = {
  id: 'sc-phy-10-electric-energy',
  title: { en: 'Electric Energy: Consumption and Conservation', ml: 'വൈദ്യുതോർജ്ജം: ഉപയോഗവും സംരക്ഷണവും' },
  estimated_time_mins: 90,
  videos: [
    {
      title: "Quick revision (Exam oriented)",
      url: "https://www.youtube.com/watch?v=haFOPJJDGa4"
    }
  ],
  learning_objectives: [
    { id: 'lo1', text: { en: 'Understand the effects of electric current and energy conversion in appliances.', ml: 'വൈദ്യുത പ്രവാഹത്തിന്റെ ഫലങ്ങളും ഉപകരണങ്ങളിലെ ഊർജ്ജമാറ്റവും മനസ്സിലാക്കുക.' } },
    { id: 'lo2', text: { en: 'Apply Joule\'s Law of heating and calculate electric power and energy.', ml: 'ജൂൾ നിയമം പ്രയോഗിക്കുകയും വൈദ്യുത പവറും ഊർജ്ജവും കണക്കാക്കുകയും ചെയ്യുക.' } },
    { id: 'lo3', text: { en: 'Compare different types of lamps and their energy efficiency.', ml: 'വിവിധ തരം ലാമ്പുകളും അവയുടെ ഊർജ്ജക്ഷമതയും താരതമ്യം ചെയ്യുക.' } },
    { id: 'lo4', text: { en: 'Understand the importance of energy conservation and reducing carbon footprint.', ml: 'ഊർജ്ജ സംരക്ഷണത്തിന്റെ പ്രാധാന്യവും കാർബൺ ഫുട്പ്രിന്റ് കുറയ്ക്കുന്നതും മനസ്സിലാക്കുക.' } }
  ],
  content: {
    intro: {
      en: 'In our daily life, we use various electrical appliances. Have you ever wondered how they work and how much energy they consume? This chapter explores the effects of electric current, how to calculate power and energy, and the importance of conserving energy for a sustainable future.',
      ml: 'നമ്മുടെ ദൈനംദിന ജീവിതത്തിൽ നാം വിവിധ വൈദ്യുത ഉപകരണങ്ങൾ ഉപയോഗിക്കുന്നു. അവ എങ്ങനെ പ്രവർത്തിക്കുന്നുവെന്നും അവ എത്രമാത്രം ഊർജ്ജം ഉപയോഗിക്കുന്നുവെന്നും നിങ്ങൾ എപ്പോഴെങ്കിലും ചിന്തിച്ചിട്ടുണ്ടോ? ഈ അധ്യായം വൈദ്യുത പ്രവാഹത്തിന്റെ ഫലങ്ങൾ, പവറും ഊർജ്ജവും എങ്ങനെ കണക്കാക്കാം, സുസ്ഥിരമായ ഒരു ഭാവിക്കായി ഊർജ്ജം സംരക്ഷിക്കേണ്ടതിന്റെ പ്രാധാന്യം എന്നിവ പര്യവേക്ഷണം ചെയ്യുന്നു.'
    },
    core: { en: '', ml: '' },
    blocks: [
      { type: 'h2', en: '1. Effects of Electric Current', ml: '1. വൈദ്യുത പ്രവാഹത്തിന്റെ ഫലങ്ങൾ' },
      { type: 'p', en: 'Electrical appliances convert electric energy into different forms of energy.', ml: 'വൈദ്യുത ഉപകരണങ്ങൾ വൈദ്യുതോർജ്ജത്തെ മറ്റ് ഊർജ്ജരൂപങ്ങളാക്കി മാറ്റുന്നു.' },
      { type: 'p', en: 'The useful form of energy into which an appliance mainly converts electric energy is considered the effect of electric current in that appliance.', ml: 'ഒരു ഉപകരണം വൈദ്യുതോർജ്ജത്തെ പ്രധാനമായും ഏത് ഉപയോഗപ്രദമായ ഊർജ്ജരൂപത്തിലേക്കാണോ മാറ്റുന്നത്, അതാണ് ആ ഉപകരണത്തിലെ വൈദ്യുത പ്രവാഹത്തിന്റെ ഫലമായി കണക്കാക്കുന്നത്.' },
      { type: 'h3', en: 'Table 5.1: Appliances and Effects', ml: 'പട്ടിക 5.1: ഉപകരണങ്ങളും ഫലങ്ങളും' },
      { type: 'table', tableData: {
        headers: [{en: 'Appliance', ml: 'ഉപകരണം'}, {en: 'Input Energy', ml: 'നൽകുന്ന ഊർജ്ജം'}, {en: 'Output Energy', ml: 'ലഭിക്കുന്ന ഊർജ്ജം'}, {en: 'Effect of Electric Current', ml: 'വൈദ്യുത പ്രവാഹ ഫലം'}],
        rows: [
          [{en: 'Electric kettle', ml: 'ഇലക്ട്രിക് കെറ്റിൽ'}, {en: 'Electric energy', ml: 'വൈദ്യുതോർജ്ജം'}, {en: 'Heat energy', ml: 'താപോർജ്ജം'}, {en: 'Heating effect', ml: 'താപഫലം'}],
          [{en: 'Mixie / Fan', ml: 'മിക്സി / ഫാൻ'}, {en: 'Electric energy', ml: 'വൈദ്യുതോർജ്ജം'}, {en: 'Mechanical energy', ml: 'യാന്ത്രികോർജ്ജം'}, {en: 'Mechanical effect', ml: 'യാന്ത്രികഫലം'}],
          [{en: 'Electric bulb', ml: 'ഇലക്ട്രിക് ബൾബ്'}, {en: 'Electric energy', ml: 'വൈദ്യുതോർജ്ജം'}, {en: 'Light energy', ml: 'പ്രകാശോർജ്ജം'}, {en: 'Lighting effect', ml: 'പ്രകാശഫലം'}]
        ]
      }},

      { type: 'h2', en: '2. Heating Effect of Electric Current & Joule\'s Law', ml: '2. വൈദ്യുത പ്രവാഹത്തിന്റെ താപഫലവും ജൂൾ നിയമവും' },
      { type: 'p', en: 'When current passes through a conductor, a part of the electric energy is converted into heat energy. This is the heating effect.', ml: 'ഒരു ചാലകത്തിലൂടെ വൈദ്യുതി കടന്നുപോകുമ്പോൾ, വൈദ്യുതോർജ്ജത്തിന്റെ ഒരു ഭാഗം താപോർജ്ജമായി മാറുന്നു. ഇതാണ് വൈദ്യുത പ്രവാഹത്തിന്റെ താപഫലം.' },
      { type: 'p', en: '**Joule\'s Law:** The heat ($H$) generated in a current-carrying conductor is directly proportional to the product of the square of the current ($I^2$), the resistance of the conductor ($R$), and the time of flow of current ($t$).', ml: '**ജൂൾ നിയമം:** ഒരു ചാലകത്തിലൂടെ വൈദ്യുതി കടന്നുപോകുമ്പോൾ ഉണ്ടാകുന്ന താപം ($H$), വൈദ്യുത പ്രവാഹ തീവ്രതയുടെ വർഗ്ഗം ($I^2$), ചാലകത്തിന്റെ പ്രതിരോധം ($R$), വൈദ്യുതി പ്രവഹിക്കുന്ന സമയം ($t$) എന്നിവയുടെ ഗുണനഫലത്തിന് നേർഅനുപാതത്തിലായിരിക്കും.' },
      { type: 'formula', en: 'Equation: H = I²Rt\n(Unit of heat is Joules)', ml: 'സമവാക്യം: H = I²Rt\n(താപത്തിന്റെ യൂണിറ്റ് ജൂൾ ആണ്)' },
      
      { type: 'h3', en: 'Other forms of Joule\'s Law equations:', ml: 'ജൂൾ നിയമത്തിന്റെ മറ്റ് സമവാക്യങ്ങൾ:' },
      { type: 'table', tableData: {
        headers: [{en: 'Formula', ml: 'സമവാക്യം'}, {en: 'Used When', ml: 'എപ്പോൾ ഉപയോഗിക്കണം'}, {en: 'Variables Meaning', ml: 'ചരങ്ങളുടെ അർത്ഥം'}],
        rows: [
          [{en: 'H = I²Rt', ml: 'H = I²Rt'}, {en: 'Current (I), Resistance (R), Time (t) are given', ml: 'I, R, t എന്നിവ തരുമ്പോൾ'}, {en: 'I = Current, R = Resistance', ml: 'I = വൈദ്യുത പ്രവാഹം, R = പ്രതിരോധം'}],
          [{en: 'H = VIt', ml: 'H = VIt'}, {en: 'Voltage (V), Current (I), Time (t) are given', ml: 'V, I, t എന്നിവ തരുമ്പോൾ'}, {en: 'V = Voltage, I = Current', ml: 'V = വോൾട്ടേജ്, I = വൈദ്യുത പ്രവാഹം'}],
          [{en: 'H = (V²t) / R', ml: 'H = (V²t) / R'}, {en: 'Voltage (V), Resistance (R), Time (t) are given', ml: 'V, R, t എന്നിവ തരുമ്പോൾ'}, {en: 'V = Voltage, R = Resistance', ml: 'V = വോൾട്ടേജ്, R = പ്രതിരോധം'}]
        ]
      }},

      { type: 'img', en: 'Joule\'s Law Simulation', ml: 'ജൂൾ നിയമം - സിമുലേഷൻ', customId: 'joules-law-simulation' },

      { type: 'h2', en: '3. Heating Appliances and Heating Elements', ml: '3. താപനോപകരണങ്ങളും ഹീറ്റിംഗ് എലമെന്റും' },
      { type: 'p', en: 'Devices that work on the heating effect of electric current are called heating appliances. The part of the appliance that produces heat is the heating element.', ml: 'വൈദ്യുത പ്രവാഹത്തിന്റെ താപഫലത്തെ അടിസ്ഥാനമാക്കി പ്രവർത്തിക്കുന്ന ഉപകരണങ്ങളാണ് താപനോപകരണങ്ങൾ. താപനോപകരണങ്ങളിൽ താപം ഉൽപ്പാദിപ്പിക്കുന്ന ഭാഗമാണ് ഹീറ്റിംഗ് എലമെന്റ്.' },
      { type: 'p', en: '**Nichrome** is an alloy of Nickel, Chromium, and Iron used as the heating element.', ml: 'നിക്കൽ, ക്രോമിയം, ഇരുമ്പ് എന്നിവയുടെ സങ്കരലോഹമായ **നിക്രോം** ആണ് ഹീറ്റിംഗ് എലമെന്റായി ഉപയോഗിക്കുന്നത്.' },
      { type: 'h3', en: 'Properties of Nichrome', ml: 'നിക്രോമിന്റെ സവിശേഷതകൾ' },
      { type: 'p', en: '1. High resistivity\n2. High melting point\n3. Ability to remain in red hot condition for a long time without melting\n4. High resistance to oxidation', ml: '1. ഉയർന്ന റെസിസ്റ്റിവിറ്റി\n2. ഉയർന്ന ദ്രവണാങ്കം\n3. ഉരുകാതെ ദീർഘനേരം ചുട്ടുപഴുത്ത അവസ്ഥയിൽ നിൽക്കാനുള്ള കഴിവ്\n4. ഓക്സീകരണത്തെ പ്രതിരോധിക്കാനുള്ള ഉയർന്ന കഴിവ്' },

      { type: 'h2', en: '4. Electric Power', ml: '4. വൈദ്യുത പവർ' },
      { type: 'p', en: 'Electric power is the amount of electric energy consumed by an electrical appliance in one second.', ml: 'ഒരു വൈദ്യുത ഉപകരണം ഒരു സെക്കൻഡിൽ വിനിയോഗിക്കുന്ന വൈദ്യുതോർജ്ജത്തിന്റെ അളവാണ് വൈദ്യുത പവർ.' },
      { type: 'p', en: 'The SI unit of power is **Watt (W)**.', ml: 'പവറിന്റെ SI യൂണിറ്റ് **വാട്ട് (W)** ആണ്.' },
      { type: 'h3', en: 'Equations for Power', ml: 'പവർ കാണാനുള്ള സമവാക്യങ്ങൾ' },
      { type: 'formula', en: 'P = W / t  or  P = H / t\nP = VI\nP = I²R\nP = V² / R', ml: 'P = W / t  അല്ലെങ്കിൽ  P = H / t\nP = VI\nP = I²R\nP = V² / R' },

      { type: 'h2', en: '5. Commercial Unit of Electric Energy', ml: '5. വൈദ്യുതോർജ്ജത്തിന്റെ വാണിജ്യ യൂണിറ്റ്' },
      { type: 'p', en: 'The commercial unit of electrical energy is **kilowatt-hour (kWh)**.', ml: 'വൈദ്യുതോർജ്ജത്തിന്റെ വാണിജ്യ യൂണിറ്റ് **കിലോവാട്ട് അവർ (kWh)** ആണ്.' },
      { type: 'p', en: '1 kWh is the electrical energy consumed when an appliance of power 1 kilowatt (1000 W) works for 1 hour. 1 kWh is also known as 1 unit (Board of Trade unit / BOT).', ml: '1 കിലോവാട്ട് (1000 W) പവറുള്ള ഒരു ഉപകരണം 1 മണിക്കൂർ പ്രവർത്തിക്കുമ്പോൾ വിനിയോഗിക്കപ്പെടുന്ന വൈദ്യുതോർജ്ജമാണ് 1 kWh. 1 kWh നെ 1 യൂണിറ്റ് (BOT യൂണിറ്റ്) എന്നും വിളിക്കുന്നു.' },
      { type: 'formula', en: 'Energy in kWh = (Power (in Watts) × Time (in hours)) / 1000', ml: 'ഊർജ്ജം (kWh ൽ) = (പവർ (വാട്ടിൽ) × സമയം (മണിക്കൂറിൽ)) / 1000' },

      { type: 'h2', en: '6. Lighting Effect of Electric Current', ml: '6. വൈദ്യുത പ്രവാഹത്തിന്റെ പ്രകാശഫലം' },
      { type: 'h3', en: 'Incandescent Bulbs', ml: 'ഇൻകാൻഡസെന്റ് ബൾബുകൾ' },
      { type: 'p', en: 'They work on the heating effect. **Tungsten** is used as the filament.', ml: 'ഇവ താപഫലത്തിന്റെ അടിസ്ഥാനത്തിൽ പ്രവർത്തിക്കുന്നു. **ടങ്സ്റ്റൺ** ആണ് ഫിലമെന്റായി ഉപയോഗിക്കുന്നത്.' },
      { type: 'p', en: '**Properties of Tungsten:** High melting point, high resistivity, high ductility, emits white light when white-hot.', ml: '**ടങ്സ്റ്റണിന്റെ സവിശേഷതകൾ:** ഉയർന്ന ദ്രവണാങ്കം, ഉയർന്ന റെസിസ്റ്റിവിറ്റി, ഉയർന്ന ഡക്റ്റിലിറ്റി, ചുട്ടുപഴുക്കുമ്പോൾ ധവളപ്രകാശം പുറപ്പെടുവിക്കാനുള്ള കഴിവ്.' },
      { type: 'p', en: 'The bulb is filled with inert gases like Nitrogen or Argon at low pressure to prevent vaporization of the filament.', ml: 'ഫിലമെന്റ് ബാഷ്പീകരിക്കുന്നത് തടയാൻ നൈട്രജൻ, ആർഗൺ തുടങ്ങിയ അലസവാതകങ്ങൾ കുറഞ്ഞ മർദ്ദത്തിൽ ബൾബിൽ നിറയ്ക്കുന്നു.' },
      
      { type: 'h3', en: 'Discharge Lamps', ml: 'ഡിസ്ചാർജ് ലാമ്പുകൾ' },
      { type: 'p', en: 'Glass tubes filled with gases at low pressure. When current passes through, gas molecules get excited and emit light. They contain no filament.', ml: 'കുറഞ്ഞ മർദ്ദത്തിൽ വാതകം നിറച്ച ഗ്ലാസ് ട്യൂബുകളാണിവ. വൈദ്യുതി കടന്നുപോകുമ്പോൾ വാതക തന്മാത്രകൾ ഉത്തേജിപ്പിക്കപ്പെടുകയും പ്രകാശം പുറപ്പെടുവിക്കുകയും ചെയ്യുന്നു. ഇവയിൽ ഫിലമെന്റ് ഇല്ല.' },
      { type: 'p', en: '**Fluorescent Lamps:** UV rays produced by discharge through mercury vapor are absorbed by the fluorescent coating on the tube, emitting visible light.', ml: '**ഫ്ലൂറസെന്റ് ലാമ്പുകൾ:** മെർക്കുറി ബാഷ്പത്തിലൂടെയുള്ള ഡിസ്ചാർജ് വഴി അൾട്രാവയലറ്റ് കിരണങ്ങൾ ഉണ്ടാകുന്നു. ട്യൂബിലെ ഫ്ലൂറസെന്റ് പൂശ് ഇത് ആഗിരണം ചെയ്ത് ദൃശ്യപ്രകാശം പുറപ്പെടുവിക്കുന്നു.' },

      { type: 'h3', en: 'LED Bulbs (Light Emitting Diodes)', ml: 'എൽ.ഇ.ഡി ബൾബുകൾ' },
      { type: 'p', en: '**Advantages of LED:** Less energy consumption, long lifespan, no harmful substances like mercury, environmentally friendly, high efficiency.', ml: '**എൽ.ഇ.ഡി യുടെ ഗുണങ്ങൾ:** കുറഞ്ഞ ഊർജ്ജ ഉപഭോഗം, ദീർഘായുസ്സ്, മെർക്കുറി പോലുള്ള ദോഷകരമായ വസ്തുക്കൾ ഇല്ലാത്തത്, പരിസ്ഥിതി സൗഹൃദം, ഉയർന്ന കാര്യക്ഷമത.' },

      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Incandescent', ml: 'ഇൻകാൻഡസെന്റ്'}, {en: 'Fluorescent', ml: 'ഫ്ലൂറസെന്റ്'}, {en: 'LED', ml: 'എൽ.ഇ.ഡി'}],
        rows: [
          [{en: 'Efficiency', ml: 'കാര്യക്ഷമത'}, {en: 'Low', ml: 'കുറവ്'}, {en: 'Medium', ml: 'ശരാശരി'}, {en: 'High', ml: 'കൂടുതൽ'}],
          [{en: 'Lifespan', ml: 'ആയുസ്സ്'}, {en: 'Short', ml: 'കുറവ്'}, {en: 'Medium', ml: 'ശരാശരി'}, {en: 'Long', ml: 'കൂടുതൽ'}],
          [{en: 'Heat loss', ml: 'താപനഷ്ടം'}, {en: 'High', ml: 'കൂടുതൽ'}, {en: 'Low', ml: 'കുറവ്'}, {en: 'Very Low', ml: 'വളരെ കുറവ്'}]
        ]
      }},

      { type: 'h2', en: '7. Energy Conservation and Carbon Footprint', ml: '7. ഊർജ്ജ സംരക്ഷണവും കാർബൺ ഫുട്പ്രിന്റും' },
      { type: 'p', en: 'Reducing unnecessary use of electricity conserves fossil fuels and reduces greenhouse gas emissions.', ml: 'വൈദ്യുതിയുടെ അനാവശ്യ ഉപയോഗം കുറയ്ക്കുന്നത് ഫോസിൽ ഇന്ധനങ്ങളെ സംരക്ഷിക്കാനും ഹരിതഗൃഹ വാതകങ്ങളുടെ പുറന്തള്ളൽ കുറയ്ക്കാനും സഹായിക്കും.' },
      { type: 'p', en: '**Carbon Footprint** is the total amount of greenhouse gases generated by our actions.', ml: 'നമ്മുടെ പ്രവർത്തനങ്ങളുടെ ഫലമായി ഉണ്ടാകുന്ന ഹരിതഗൃഹ വാതകങ്ങളുടെ ആകെ അളവാണ് **കാർബൺ ഫുട്പ്രിന്റ്**.' },
      { type: 'p', en: 'Using energy-efficient appliances (like LEDs, star-rated appliances) reduces our carbon footprint.', ml: 'ഊർജ്ജക്ഷമതയുള്ള ഉപകരണങ്ങൾ (എൽ.ഇ.ഡി, സ്റ്റാർ റേറ്റിംഗ് ഉള്ള ഉപകരണങ്ങൾ) ഉപയോഗിക്കുന്നത് കാർബൺ ഫുട്പ്രിന്റ് കുറയ്ക്കുന്നു.' },

      { type: 'h2', en: 'Graphs', ml: 'ഗ്രാഫുകൾ' },
      { type: 'p', en: '📈 **Heat (H) vs Current (I)**\n(A parabolic curve showing H ∝ I²)', ml: '📈 **താപം (H) vs വൈദ്യുത പ്രവാഹം (I)**\n(H ∝ I² കാണിക്കുന്ന പരാബോളിക് കർവ്)' },
      { type: 'p', en: '```\n H |\n   |      /\n   |    /\n   |  /\n   | /\n   |/__________ I\n```', ml: '```\n H |\n   |      /\n   |    /\n   |  /\n   | /\n   |/__________ I\n```' },

      { type: 'h2', en: 'Concept Map', ml: 'കൺസെപ്റ്റ് മാപ്പ്' },
      { type: 'p', en: 'Electric Current → Heating Effect → Joule\'s Law → Electric Power → Energy Consumption → Commercial Unit → Energy Conservation → Carbon Footprint', ml: 'വൈദ്യുത പ്രവാഹം → താപഫലം → ജൂൾ നിയമം → വൈദ്യുത പവർ → ഊർജ്ജ ഉപഭോഗം → വാണിജ്യ യൂണിറ്റ് → ഊർജ്ജ സംരക്ഷണം → കാർബൺ ഫുട്പ്രിന്റ്' },

      { type: 'h2', en: '🎯 Quick Revision Box', ml: '🎯 ദ്രുത പുനരവലോകനം' },
      { type: 'table', tableData: {
        headers: [{en: 'Concept', ml: 'ആശയം'}, {en: 'Key Point', ml: 'പ്രധാന പോയിന്റ്'}],
        rows: [
          [{en: 'Heating Element', ml: 'ഹീറ്റിംഗ് എലമെന്റ്'}, {en: 'Nichrome (Ni, Cr, Fe)', ml: 'നിക്രോം (Ni, Cr, Fe)'}],
          [{en: 'Bulb Filament', ml: 'ബൾബ് ഫിലമെന്റ്'}, {en: 'Tungsten', ml: 'ടങ്സ്റ്റൺ'}],
          [{en: 'Bulb Gas', ml: 'ബൾബിലെ വാതകം'}, {en: 'Nitrogen / Argon', ml: 'നൈട്രജൻ / ആർഗൺ'}],
          [{en: 'Commercial Unit', ml: 'വാണിജ്യ യൂണിറ്റ്'}, {en: '1 kWh = 1 Unit', ml: '1 kWh = 1 യൂണിറ്റ്'}]
        ]
      }},

      { type: 'h2', en: '👨‍🏫 Teacher Notes', ml: '👨‍🏫 അധ്യാപകർക്കുള്ള കുറിപ്പുകൾ' },
      { type: 'p', en: '• Demonstrate Nichrome wire heating using a safe low-voltage supply.\n• Show an actual electric bill and calculate the units consumed.\n• Compare the brightness and heat of an incandescent bulb vs LED using a wattmeter.', ml: '• സുരക്ഷിതമായ കുറഞ്ഞ വോൾട്ടേജ് ഉപയോഗിച്ച് നിക്രോം വയർ ചൂടാകുന്നത് കാണിക്കുക.\n• ഒരു യഥാർത്ഥ വൈദ്യുതി ബിൽ കാണിച്ച് ഉപയോഗിച്ച യൂണിറ്റുകൾ കണക്കാക്കുക.\n• വാട്ട്മീറ്റർ ഉപയോഗിച്ച് ഇൻകാൻഡസെന്റ് ബൾബിന്റെയും എൽ.ഇ.ഡിയുടെയും പ്രകാശവും താപവും താരതമ്യം ചെയ്യുക.' },

      { type: 'h2', en: '📝 Student Summary Sheet', ml: '📝 വിദ്യാർത്ഥികൾക്കുള്ള സംഗ്രഹ ഷീറ്റ്' },
      { type: 'p', en: '1. **Joule\'s Law:** H = I²Rt\n2. **Power:** P = VI = I²R = V²/R\n3. **Energy:** E = Pt (in kWh for commercial use)\n4. **Nichrome:** High resistivity, high melting point.\n5. **Tungsten:** High melting point, emits white light.\n6. **LED:** Most efficient, long life, eco-friendly.', ml: '1. **ജൂൾ നിയമം:** H = I²Rt\n2. **പവർ:** P = VI = I²R = V²/R\n3. **ഊർജ്ജം:** E = Pt (വാണിജ്യ ആവശ്യങ്ങൾക്ക് kWh-ൽ)\n4. **നിക്രോം:** ഉയർന്ന റെസിസ്റ്റിവിറ്റി, ഉയർന്ന ദ്രവണാങ്കം.\n5. **ടങ്സ്റ്റൺ:** ഉയർന്ന ദ്രവണാങ്കം, ധവളപ്രകാശം നൽകുന്നു.\n6. **LED:** ഏറ്റവും കാര്യക്ഷമതയുള്ളത്, ദീർഘായുസ്സ്, പരിസ്ഥിതി സൗഹൃദം.' }
    ]
  },
  glossary: [
    { term: { en: 'Carbon Footprint', ml: 'കാർബൺ ഫുട്പ്രിന്റ്' }, definition: { en: 'The total amount of greenhouse gases generated by our actions.', ml: 'നമ്മുടെ പ്രവർത്തനങ്ങളുടെ ഫലമായി ഉണ്ടാകുന്ന ഹരിതഗൃഹ വാതകങ്ങളുടെ ആകെ അളവ്.' } },
    { term: { en: 'Nichrome', ml: 'നിക്രോം' }, definition: { en: 'An alloy of Nickel, Chromium, and Iron used as a heating element.', ml: 'നിക്കൽ, ക്രോമിയം, ഇരുമ്പ് എന്നിവയുടെ സങ്കരലോഹം, ഹീറ്റിംഗ് എലമെന്റായി ഉപയോഗിക്കുന്നു.' } },
    { term: { en: 'Kilowatt-hour (kWh)', ml: 'കിലോവാട്ട് അവർ (kWh)' }, definition: { en: 'The commercial unit of electrical energy.', ml: 'വൈദ്യുതോർജ്ജത്തിന്റെ വാണിജ്യ യൂണിറ്റ്.' } }
  ],
  quiz: [
  {
    "q_id": "u5_q1",
    "type": "mcq",
    "stem": {
      "en": "Refraction is the bending of light when it passes:",
      "ml": "അപവർത്തനം എന്നത് പ്രകാശം കടന്നുപോകുമ്പോൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Through one medium",
          "ml": "ഒരു മാധ്യമത്തിലൂടെ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "From one medium to another",
          "ml": "ഒരു മാധ്യമത്തിൽ നിന്ന് മറ്റൊരു മാധ്യമത്തിലേക്ക്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Along the same surface",
          "ml": "അതേ ഉപരിതലത്തിൽ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Through a mirror",
          "ml": "ദർപ്പണത്തിലൂടെ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Refraction occurs when light changes speed as it moves between media.",
      "ml": "പ്രകാശം ഒരു മാധ്യമം മാറുമ്പോൾ വേഗം മാറി, ദിശ മാറ്റം ഉണ്ടാക്കുന്നു - ഇതാണ് അപവർത്തനം."
    }
  },
  {
    "q_id": "u5_q2",
    "type": "mcq",
    "stem": {
      "en": "Snell's Law is:",
      "ml": "സ്നെൽ നിയമം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "n1 sin θ1 = n2 sin θ2",
          "ml": "n1 sin θ1 = n2 sin θ2"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "n1 cos θ1 = n2 cos θ2",
          "ml": "n1 cos θ1 = n2 cos θ2"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "n1/θ1 = n2/θ2",
          "ml": "n1/θ1 = n2/θ2"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "n1 + n2 = θ1 + θ2",
          "ml": "n1 + n2 = θ1 + θ2"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "Snell's Law states n1 sinθ1 = n2 sinθ2 at the interface.",
      "ml": "stellt n1 sinθ1 = n2 sinθ2 ആണ് Snell's Law."
    }
  },
  {
    "q_id": "u5_q3",
    "type": "mcq",
    "stem": {
      "en": "When light passes from air to glass, it bends:",
      "ml": "പ്രകാശം വായുവിൽ നിന്ന് ഗ്ലാസ്സിലേക്ക് കടക്കുമ്പോൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Away from the normal",
          "ml": "നോർമലിൽ നിന്ന് അകന്ന്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Toward the normal",
          "ml": "നോർമലിലേക്ക് അടുത്ത്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Does not bend",
          "ml": "ദിശ മാറ്റമില്ല"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Reflects back",
          "ml": "തിരകെ പ്രതിഫലിക്കുന്നു"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Going from less-dense (air) to more-dense (glass) bends light toward the normal.",
      "ml": "കുറഞ്ഞ ഡെൻസിറ്റിയിൽ നിന്ന് കൂടിയ ഡെൻസിറ്റിയിലേക്ക് → നോർമലിലേക്ക് ദിശ മാറ്റം."
    }
  },
  {
    "q_id": "u5_q4",
    "type": "mcq",
    "stem": {
      "en": "The refractive index of a medium is:",
      "ml": "ഒരു മാധ്യമത്തിന്റെ അപവർത്തന സൂചിക:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Speed of light in vacuum / speed in medium",
          "ml": "ശൂന്യസ്ഥലത്ത് വേഗം / മാധ്യമത്തിൽ വേഗം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Speed of light in medium / speed in vacuum",
          "ml": "മാധ്യമത്തിൽ / ശൂന്യസ്ഥലത്ത്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "The angle of refraction",
          "ml": "അപവർത്തന കോണ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Same as frequency of light",
          "ml": "പ്രകാശ ആവൃത്തി"
        }
      }
    ],
    "answer": "A",
    "difficulty": "medium",
    "explanation": {
      "en": "n = c/v where c = speed in vacuum, v = speed in medium.",
      "ml": "n = c/v - ഇതാണ് അപവർത്തന സൂചിക."
    }
  },
  {
    "q_id": "u5_q5",
    "type": "mcq",
    "stem": {
      "en": "A medium with higher refractive index is called:",
      "ml": "ഉയർന്ന അപവർത്തന സൂചി ഉള്ള മാധ്യമം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Optically rarer",
          "ml": "ഒപ്റ്റിക്കലി റെയർ (Optically rarer)"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Optically denser",
          "ml": "ഒപ്റ്റിക്കലി ഡെൻസർ (Optically denser)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Electrically conductor",
          "ml": "വൈദ്യുത ചാലകം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Magnetically active",
          "ml": "കാന്തിക സജീവം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Higher n = optically denser medium.",
      "ml": "ഉയർന്ന n = ഒപ്റ്റിക്കലി ഡെൻസർ."
    }
  },
  {
    "q_id": "u5_q6",
    "type": "mcq",
    "stem": {
      "en": "The dispersion of white light through a prism results in:",
      "ml": "ഒരു പ്രിസ്മ്, ശ്വേത പ്രകാശം കടന്നുപോകുമ്പോൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Only reflection",
          "ml": "പ്രതിഫലനം മാത്രം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "A spectrum (rainbow of colours)",
          "ml": "ഒരു സ്പെക്ട്രം (നിറ ശ്രേണി)"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "White light becoming brighter",
          "ml": "ശ്വേത പ്രകാശം കൂടുതൽ ശോഭ കൂടുന്നു"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Light speeding up",
          "ml": "പ്രകാശം വേഗം കൂടുന്നു"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "A prism disperses white light into its constituent colors (VIBGYOR).",
      "ml": "ശ്വേത പ്രകാശം VIBGYOR ഘടകങ്ങളായി വേർതിരിക്കുന്നു."
    }
  },
  {
    "q_id": "u5_q7",
    "type": "mcq",
    "stem": {
      "en": "The order of colors in the visible spectrum from violet to red is called:",
      "ml": "ദൃശ്യ സ്പെക്ട്രത്തിൽ നിറ ക്രമം ഉദ്ദേശിക്കുന്ന ചുരുക്കം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "ROYGBIV",
          "ml": "ROYGBIV"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "VIBGYOR",
          "ml": "VIBGYOR"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "VIBGRYO",
          "ml": "VIBGRYO"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "RGBVCYI",
          "ml": "RGBVCYI"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "VIBGYOR: Violet, Indigo, Blue, Green, Yellow, Orange, Red.",
      "ml": "VIBGYOR: വയലറ്റ്, ഇൻഡിഗോ, ബ്ലൂ, ഗ്രീൻ, യെല്ലോ, ഓറഞ്ച്, റെഡ്."
    }
  },
  {
    "q_id": "u5_q8",
    "type": "mcq",
    "stem": {
      "en": "A convex lens can be used as a:",
      "ml": "ഒരു കോൺവെക്സ് ലെൻസ് ഉപയോഗം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Diverging lens",
          "ml": "വികേന്ദ്രീകരണ ലെൻസ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Magnifying glass",
          "ml": "മാഗ്നിഫൈ ഗ്ലാസ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Rear-view mirror",
          "ml": "പിൻ-കാഴ്ച ദർപ്പണം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Concave mirror",
          "ml": "ആനത ദർപ്പണം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "A convex lens acts as a magnifying glass when the object is within its focal length.",
      "ml": "വസ്തു F-ൻ ഉള്ളിൽ ഇരിക്കുമ്പോൾ കോൺവെക്സ് ലെൻസ് മാഗ്നിഫൈ ഗ്ലാസ്സ് ആയി പ്രവർത്തിക്കുന്നു."
    }
  },
  {
    "q_id": "u5_q9",
    "type": "mcq",
    "stem": {
      "en": "When light goes from glass to air, it bends:",
      "ml": "ഗ്ലാസ്സ് → വായു:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Toward the normal",
          "ml": "നോർമലിലേക്ക്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Away from the normal",
          "ml": "നോർമലിൽ നിന്ന് അകന്ന്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Does not bend",
          "ml": "ദിശ മാറ്റമില്ല"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Completely reflects",
          "ml": "പൂർണ പ്രതിഫലനം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Going from dense (glass) to less-dense (air) bends light away from normal.",
      "ml": "ഡെൻസ് → ലൈറ്റ് = നോർമലിൽ നിന്ന് അകലുന്നു."
    }
  },
  {
    "q_id": "u5_q10",
    "type": "mcq",
    "stem": {
      "en": "A rainbow is formed due to:",
      "ml": "മഴവില്ല് ഉണ്ടാകുന്നത്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Reflection only",
          "ml": "പ്രതിഫലനം മാത്രം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Refraction, dispersion and internal reflection",
          "ml": "അപവർത്തനം, ഡിസ്പർഷൻ, ആന്തരിക പ്രതിഫലനം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Diffraction",
          "ml": "ഡിഫ്രാക്ഷൻ"
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
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Rainbow forms by water droplets dispersing, refracting and internally reflecting sunlight.",
      "ml": "ജലബിന്ദുക്കൾ സൂര്യ പ്രകാശം അപവർത്തനം, ഡിസ്പർഷൻ, ആന്തരിക പ്രതിഫലനം ചെയ്ത് മഴവില്ല് ഉണ്ടാകുന്നു."
    }
  },
  {
    "q_id": "u5_q11",
    "type": "mcq",
    "stem": {
      "en": "Which colour of light is most deviated while passing through a prism?",
      "ml": "ഒരു പ്രിസ്മ്ഗണം കടക്കുമ്പോൾ ഏറ്റവും കൂടുതൽ ദിശ മാറ്റം ഉണ്ടാകുന്ന നിറം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Red",
          "ml": "ചുവപ്പ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Yellow",
          "ml": "മഞ്ഞ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Green",
          "ml": "പച്ച"
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
    "answer": "D",
    "difficulty": "medium",
    "explanation": {
      "en": "Violet has the highest refractive index, so it bends the most.",
      "ml": "ഏറ്റവും ഉയർന്ന അപവർത്തന സൂചി ഉള്ള വയലറ്റ് ഏറ്റവും കൂടുതൽ ദിശ മാറ്റം ഉണ്ടാകുന്നു."
    }
  },
  {
    "q_id": "u5_q12",
    "type": "mcq",
    "stem": {
      "en": "Refractive index of water is approximately:",
      "ml": "ജലത്തിന്റെ അപവർത്തന സൂചിക ഏകദേശം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "1.0",
          "ml": "1.0"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "1.33",
          "ml": "1.33"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "1.5",
          "ml": "1.5"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "2.4",
          "ml": "2.4"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "n of water ≈ 1.33, glass ≈ 1.5, diamond ≈ 2.4.",
      "ml": "ജലം ≈ 1.33, ഗ്ലാസ്സ് ≈ 1.5, ഡയമണ്ട് ≈ 2.4."
    }
  },
  {
    "q_id": "u5_q13",
    "type": "mcq",
    "stem": {
      "en": "Lens formula (Cartesian) is:",
      "ml": "ലെൻസ് സമവാക്യം (കാർട്ടീഷ്യൻ):"
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
          "en": "f = v - u",
          "ml": "f = v - u"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "1/f = v - u",
          "ml": "1/f = v - u"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Lens formula: 1/f = 1/v - 1/u",
      "ml": "ലെൻസ് സമവാക്യം: 1/f = 1/v - 1/u."
    }
  },
  {
    "q_id": "u5_q14",
    "type": "mcq",
    "stem": {
      "en": "Dioptre is a unit of:",
      "ml": "ഡയോപ്റ്റർ ഏതിന്റെ യൂണിറ്റ് ആണ്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Focal length",
          "ml": "ഫോക്കസ് ദൂരം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Power of lens",
          "ml": "ലെൻസ് പവർ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Refractive index",
          "ml": "അപവർത്തന സൂചിക"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Wavelength",
          "ml": "തരംഗദൈർഘ്യം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Power is measured in Dioptres (D) = 1/f (f in metres).",
      "ml": "ലെൻസ് പവർ D = 1/f (f മീറ്ററിൽ)."
    }
  },
  {
    "q_id": "u5_q15",
    "type": "mcq",
    "stem": {
      "en": "An object placed beyond 2F in a convex lens forms an image:",
      "ml": "കോൺവെക്സ് ലെൻസിൽ 2F-ൽ വിദൂരത്ത് ഇരിക്കുന്ന വസ്തുവിന്റെ ചിത്രം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "At 2F, same size",
          "ml": "2F-ൽ, ഒരേ വലിപ്പം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Between F and 2F, diminished, real, inverted",
          "ml": "F-നും 2F-നും ഇടയിൽ, ചെറുത്, യഥാർത്ഥം, തലകീഴ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Beyond 2F magnified",
          "ml": "2F-ൽ, വലുത്"
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
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "Beyond 2F → Image between F and 2F, diminished, real, inverted.",
      "ml": "2F-ൻ അപ്പുറം → F-നും 2F-നും ഇടയിൽ ചിത്രം, ചെറുത്, യഥാർത്ഥം."
    }
  },
  {
    "q_id": "u5_q16",
    "type": "mcq",
    "stem": {
      "en": "Why does a swimming pool appear shallower than its actual depth?",
      "ml": "ഒരു നീന്തൽ കുളം അതിന്റെ യഥാർഥ ആഴത്തേക്കാൾ ആഴം കുറഞ്ഞതായി കാണപ്പെടുന്നത് എന്തുകൊണ്ട്?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Reflection of water",
          "ml": "ജലത്തിന്റെ പ്രതിഫലനം"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Refraction of light at the water surface",
          "ml": "ജല ഉപരിതലത്തിൽ അപവർത്തനം"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Different depth at ends",
          "ml": "അറ്റങ്ങളിൽ ആഴ വ്യത്യാസം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Colour of water",
          "ml": "ജലത്തിന്റെ നിറം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Refraction at the air-water surface makes objects appear closer (shallower).",
      "ml": "ജല ഉപരിതലത്തിൽ ഉണ്ടാകുന്ന അപവർത്തനം കൊണ്ട് കുളം ആഴം കുറഞ്ഞതായി തോന്നും."
    }
  },
  {
    "q_id": "u5_q17",
    "type": "mcq",
    "stem": {
      "en": "Which color of light travels fastest in glass?",
      "ml": "ഗ്ലാസ്സിൽ ഏറ്റവും കൂടുതൽ വേഗതയോടെ സഞ്ചരിക്കുന്ന നിറം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Violet",
          "ml": "വയലറ്റ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Green",
          "ml": "പച്ച"
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
          "en": "Red",
          "ml": "ചുവപ്പ്"
        }
      }
    ],
    "answer": "D",
    "difficulty": "hard",
    "explanation": {
      "en": "Red light has lowest refractive index in glass, hence fastest speed.",
      "ml": "ഏറ്റവും കുറഞ്ഞ n ഉള്ള ചുവപ്പ് ഗ്ലാസ്സിൽ ഏറ്റവും വേഗത്തിൽ സഞ്ചരിക്കുന്നു."
    }
  },
  {
    "q_id": "u5_q18",
    "type": "mcq",
    "stem": {
      "en": "A concave lens is also called:",
      "ml": "ഒരു കോൺകേവ് ലെൻസ് ഏത് പേരിൽ അറിയപ്പെടുന്നു?"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Converging lens",
          "ml": "കേന്ദ്രീകരണ ലെൻസ്"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Diverging lens",
          "ml": "വികേന്ദ്രീകരണ ലെൻസ്"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Thick lens",
          "ml": "കട്ടി ലെൻസ്"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Simple lens",
          "ml": "ലളിത ലെൻസ്"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Concave lens diverges light.",
      "ml": "കോൺകേവ് ലെൻസ് വികേന്ദ്രീകരണ ലെൻസ് ആണ്."
    }
  },
  {
    "q_id": "u5_q19",
    "type": "mcq",
    "stem": {
      "en": "In human eye, refraction mainly occurs at:",
      "ml": "മനുഷ്യ കണ്ണിൽ അപവർത്തനം ഉണ്ടാകുന്ന പ്രധാന ഭാഗം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Retina",
          "ml": "റെറ്റിന"
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
          "en": "Cornea",
          "ml": "കോർണിയ"
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
    "difficulty": "medium",
    "explanation": {
      "en": "Most refraction in the eye occurs at the cornea (~ 2/3 of total).",
      "ml": "കണ്ണിൽ 2/3 അപവർത്തനവും കോർണിയ ഉണ്ടാക്കുന്നു."
    }
  },
  {
    "q_id": "u5_q20",
    "type": "mcq",
    "stem": {
      "en": "If a lens has power +2.5 D, its focal length is:",
      "ml": "ഒരു ലെൻസ് +2.5 D ആണെങ്കിൽ f:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "4 m",
          "ml": "4 m"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "0.4 m",
          "ml": "0.4 m"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "2.5 m",
          "ml": "2.5 m"
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
    "difficulty": "hard",
    "explanation": {
      "en": "f = 1/P = 1/2.5 = 0.4 m.",
      "ml": "f = 1/P = 1/2.5 = 0.4 m."
    }
  },
  {
    "q_id": "u5_q21",
    "type": "mcq",
    "stem": {
      "en": "The critical angle for glass-air interface is approximately:",
      "ml": "ഗ്ലാസ്-വായു ഇന്റർഫേസിന്റെ ക്രിട്ടിക്കൽ ആംഗിൾ ഏകദേശം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "90°",
          "ml": "90°"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "42°",
          "ml": "42°"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "30°",
          "ml": "30°"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "60°",
          "ml": "60°"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "Critical angle for glass-air ≈ 42°.",
      "ml": "ഗ്ലാസ്-വായു ക്രിട്ടിക്കൽ ആംഗിൾ ≈ 42°."
    }
  },
  {
    "q_id": "u5_q22",
    "type": "mcq",
    "stem": {
      "en": "What is the main function of optical fibres?",
      "ml": "ഒപ്റ്റിക്കൽ ഫൈബർ ഉപയോഗം:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Measuring temperature",
          "ml": "താപനില അളക്കൽ"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "Carrying light/data using TIR",
          "ml": "TIR ഉപയോഗിച്ച് ഡേറ്റ/ പ്രകാശം കൊണ്ടുപോകൽ"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "Generating electricity",
          "ml": "വൈദ്യുതി ഉൽപ്പാദനം"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Absorbing heat",
          "ml": "ചൂട് ആഗിരണം"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Optical fibres use total internal reflection (TIR) to transmit light or data.",
      "ml": "ഒപ്റ്റിക്കൽ ഫൈബർ ടോട്ടൽ ഇന്റേണൽ റിഫ്ലക്ഷൻ ഉപയോഗിച്ച് ഡേറ്റ കൊണ്ടുപോകുന്നു."
    }
  },
  {
    "q_id": "u5_q23",
    "type": "mcq",
    "stem": {
      "en": "If we combine two lenses of powers P1 and P2, the combined power is:",
      "ml": "P1 ഉം P2 ഉം ഉള്ള രണ്ട് ലെൻസ് ചേർക്കുമ്പോൾ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "P1 × P2",
          "ml": "P1 × P2"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "P1 + P2",
          "ml": "P1 + P2"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "P1 - P2",
          "ml": "P1 - P2"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "P1 / P2",
          "ml": "P1 / P2"
        }
      }
    ],
    "answer": "B",
    "difficulty": "medium",
    "explanation": {
      "en": "Combined power P = P1 + P2.",
      "ml": "ചേർന്ന ലെൻസ് പവർ P = P1 + P2."
    }
  },
  {
    "q_id": "u5_q24",
    "type": "mcq",
    "stem": {
      "en": "A straw appears bent when placed in water due to:",
      "ml": "ജലത്തിൽ ഒരു കമ്പ് ഇരിക്കുമ്പോൾ ഒടിഞ്ഞ് കാണപ്പെടുന്നത്:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "Reflection",
          "ml": "പ്രതിഫലനം"
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
          "en": "Dispersion",
          "ml": "ഡിസ്പർഷൻ"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "Diffraction",
          "ml": "ഡിഫ്രാക്ഷൻ"
        }
      }
    ],
    "answer": "B",
    "difficulty": "easy",
    "explanation": {
      "en": "Refraction at the water surface makes the straw appear bent.",
      "ml": "ജല ഉപരിതലത്തിൽ ഉണ്ടാകുന്ന അപവർത്തനം കൊണ്ട് കമ്പ് ഒടിഞ്ഞ് കാണപ്പെടുന്നു."
    }
  },
  {
    "q_id": "u5_q25",
    "type": "mcq",
    "stem": {
      "en": "A concave lens with f = -25 cm has power:",
      "ml": "f = -25 cm ഉള്ള ലെൻസ് പവർ:"
    },
    "options": [
      {
        "k": "A",
        "text": {
          "en": "+4 D",
          "ml": "+4 D"
        }
      },
      {
        "k": "B",
        "text": {
          "en": "-4 D",
          "ml": "-4 D"
        }
      },
      {
        "k": "C",
        "text": {
          "en": "-25 D",
          "ml": "-25 D"
        }
      },
      {
        "k": "D",
        "text": {
          "en": "+0.25 D",
          "ml": "+0.25 D"
        }
      }
    ],
    "answer": "B",
    "difficulty": "hard",
    "explanation": {
      "en": "P = 1/f = 1/(-0.25m) = -4 D.",
      "ml": "P = 1/f = 1/(-0.25) = -4 D."
    }
  }
]
} as const;
