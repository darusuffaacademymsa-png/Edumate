import { Lesson } from './curriculum';

const placeholderContent = {
  intro: { en: "Coming soon...", ml: "ഉടൻ വരുന്നു..." },
  core: { en: "", ml: "" }
};

export const plusOneBusinessStudiesUnit1: Lesson = {
  id: "pl-bs-11-unit1",
  title: { en: "Business, Trade and Commerce", ml: "ബിസിനസ്സ്, വ്യാപാരം, വാണിജ്യം" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Understand the evolution of trade and commerce in ancient India", ml: "പുരാതന ഇന്ത്യയിലെ വ്യാപാരത്തിന്റെയും വാണിജ്യത്തിന്റെയും വികാസം മനസ്സിലാക്കുക" },
    { en: "Distinguish between economic and non-economic activities", ml: "സാമ്പത്തിക പ്രവർത്തനങ്ങളും സാമ്പത്തികേതര പ്രവർത്തനങ്ങളും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയുക" },
    { en: "Explain the characteristics and classification of business activities", ml: "ബിസിനസ്സ് പ്രവർത്തനങ്ങളുടെ സവിശേഷതകളും തരംതിരിക്കലും വിവരിക്കുക" },
    { en: "Analyze business risks and the 'Make in India' initiative", ml: "ബിസിനസ്സ് റിസ്കുകളും 'മേയ്ക്ക് ഇൻ ഇന്ത്യ' പദ്ധതിയും വിശകലനം ചെയ്യുക" }
  ],
  content: {
    intro: {
      en: "This chapter explores the historical evolution of trade and commerce in ancient India and transitions to the modern fundamentals of business.",
      ml: "പുരാതന ഇന്ത്യയിലെ വ്യാപാരത്തിന്റെയും വാണിജ്യത്തിന്റെയും ചരിത്രപരമായ വികാസത്തെക്കുറിച്ചും ആധുനിക ബിസിനസ്സിന്റെ അടിസ്ഥാന തത്വങ്ങളെക്കുറിച്ചും ഈ അധ്യായം പ്രതിപാദിക്കുന്നു."
    },
    core: {
      en: "Detailed study of business evolution, classifications (Industry and Commerce), objectives, and risks.",
      ml: "ബിസിനസ്സിന്റെ വികാസം, തരംതിരിക്കൽ (വ്യവസായം, വാണിജ്യം), ലക്ഷ്യങ്ങൾ, റിസ്കുകൾ എന്നിവയെക്കുറിച്ചുള്ള വിശദമായ പഠനം."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter explores the historical evolution of trade and commerce in ancient India, highlighting the role of indigenous banking and major trade centers. It then transitions to the modern fundamentals of business, explaining its nature, characteristics, the classification of business activities into industry and commerce, the multiple objectives of a business, the risks involved, and the essential factors to consider when starting a new enterprise.', ml: 'പുരാതന ഇന്ത്യയിലെ വ്യാപാരത്തിന്റെയും വാണിജ്യത്തിന്റെയും ചരിത്രപരമായ വികാസം, തദ്ദേശീയ ബാങ്കിംഗ് സമ്പ്രദായം (Indigenous Banking System), പ്രധാന വ്യാപാര കേന്ദ്രങ്ങൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു. തുടർന്ന് ആധുനിക ബിസിനസ്സിന്റെ അടിസ്ഥാന തത്വങ്ങൾ, സവിശേഷതകൾ, വ്യവസായം (Industry), വാണിജ്യം (Commerce) എന്നിങ്ങനെയുള്ള തരംതിരിക്കൽ, ബിസിനസ്സ് ലക്ഷ്യങ്ങൾ, റിസ്കുകൾ, പുതിയൊരു സംരംഭം തുടങ്ങുമ്പോൾ ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ എന്നിവയും വിശദീകരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Business: An economic activity involving the continuous production and sale of goods or services to earn profits by satisfying human needs in society.', ml: 'ബിസിനസ്സ് (Business): ലാഭം നേടുക എന്ന ലക്ഷ്യത്തോടെ സമൂഹത്തിലെ ആവശ്യങ്ങൾ നിറവേറ്റുന്നതിനായി തുടർച്ചയായി സാധനങ്ങളോ സേവനങ്ങളോ ഉൽപ്പാദിപ്പിക്കുകയും വിൽക്കുകയും ചെയ്യുന്ന ഒരു സാമ്പത്തിക പ്രവർത്തനമാണ് ബിസിനസ്സ്.' },
        { en: 'Economic vs. Non-Economic Activities: Economic activities (like running a factory) are done to earn a livelihood, while non-economic activities (like cooking for family) are performed out of love, sympathy, or sentiment.', ml: 'സാമ്പത്തിക vs സാമ്പത്തികേതര പ്രവർത്തനങ്ങൾ (Economic vs. Non-Economic Activities): ഉപജീവനത്തിനായി നടത്തുന്ന പ്രവർത്തനങ്ങളെ സാമ്പത്തിക പ്രവർത്തനങ്ങൾ (Economic Activities) എന്നും (ഉദാ: ഫാക്ടറി നടത്തുന്നത്), സ്നേഹം, സഹതാപം എന്നിവയുടെ അടിസ്ഥാനത്തിൽ നടത്തുന്നവയെ സാമ്പത്തികേതര പ്രവർത്തനങ്ങൾ (Non-Economic Activities) എന്നും (ഉദാ: കുടുംബത്തിനായി ഭക്ഷണം പാകം ചെയ്യുന്നത്) വിളിക്കുന്നു.' },
        { en: 'Commerce: The bridge between producers and consumers. It includes all activities that facilitate the exchange of goods and services by removing hindrances of place, time, risk, finance, and information.', ml: 'വാണിജ്യം (Commerce): ഉൽപ്പാദകരും ഉപഭോക്താക്കളും തമ്മിലുള്ള പാലമാണ് വാണിജ്യം. സ്ഥലം, സമയം, റിസ്ക്, ധനകാര്യം, വിവരം എന്നിവയുമായി ബന്ധപ്പെട്ട തടസ്സങ്ങൾ നീക്കി സാധനങ്ങളുടെയും സേവനങ്ങളുടെയും കൈമാറ്റം സുഗമമാക്കുന്ന എല്ലാ പ്രവർത്തനങ്ങളും ഇതിൽ ഉൾപ്പെടുന്നു.' },
        { en: 'Business Risk: The possibility of inadequate profits or losses due to unexpected events or uncertainties (e.g., changes in consumer taste, natural disasters).', ml: 'ബിസിനസ്സ് റിസ്ക് (Business Risk): അപ്രതീക്ഷിത സംഭവങ്ങൾ അല്ലെങ്കിൽ അനിശ്ചിതത്വങ്ങൾ കാരണം ലാഭം കുറയാനോ നഷ്ടം സംഭവിക്കാനോ ഉള്ള സാധ്യതയെ ബിസിനസ്സ് റിസ്ക് എന്ന് വിളിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      { type: 'h3', en: '3.1 History of Trade and Commerce in Ancient India', ml: '3.1 പുരാതന ഇന്ത്യയിലെ വ്യാപാരവും വാണിജ്യവും' },
      { type: 'ul', items: [
        { en: 'Trade Routes: Silk Route (land) and Spice Route (maritime).', ml: 'വ്യാപാര പാതകൾ: സിൽക്ക് റൂട്ട് (Silk Route - കരമാർഗ്ഗം), സ്പൈസ് റൂട്ട് (Spice Route - സമുദ്രമാർഗ്ഗം).' },
        { en: 'Indigenous Banking System: Use of Hundi and Chitti for transactions. Seths financed trade.', ml: 'തദ്ദേശീയ ബാങ്കിംഗ് സമ്പ്രദായം: ഇടപാടുകൾക്കായി ഹുണ്ടി (Hundi), ചിട്ടി (Chitti) എന്നിവയുടെ ഉപയോഗം. സേഠുമാർ (Seths) വ്യാപാരത്തിന് പണം നൽകി.' },
        { en: 'Merchant Corporations (Guilds): Formed to protect interests and collect taxes.', ml: 'മർച്ചന്റ് കോർപ്പറേഷനുകൾ (Merchant Corporations/Guilds): വ്യാപാരികളുടെ താൽപ്പര്യങ്ങൾ സംരക്ഷിക്കാനും നികുതി പിരിക്കാനും രൂപീകരിച്ചവ.' },
        { en: 'Major Trade Centres: Pataliputra, Peshawar, Taxila, Surat, and Calicut.', ml: 'പ്രധാന വ്യാപാര കേന്ദ്രങ്ങൾ: പാടലീപുത്രം, പെഷവാർ, തക്ഷശില, സൂറത്ത്, കാലിക്കറ്റ്.' }
      ]},

      { type: 'h3', en: '3.2 Characteristics of Business Activities', ml: '3.2 ബിസിനസ്സ് പ്രവർത്തനങ്ങളുടെ സവിശേഷതകൾ' },
      { type: 'ul', items: [
        { en: 'Economic Activity: Driven by the objective to earn a livelihood.', ml: 'സാമ്പത്തിക പ്രവർത്തനം (Economic Activity): ഉപജീവനത്തിനായി നടത്തുന്ന പ്രവർത്തനം.' },
        { en: 'Production/Procurement: Manufacturing or acquiring goods.', ml: 'ഉൽപ്പാദനം അല്ലെങ്കിൽ സംഭരണം (Production/Procurement): സാധനങ്ങൾ നിർമ്മിക്കുകയോ ശേഖരിക്കുകയോ ചെയ്യുക.' },
        { en: 'Sale or Exchange: Transfer of goods/services for value.', ml: 'വിൽപ്പന അല്ലെങ്കിൽ കൈമാറ്റം (Sale or Exchange): മൂല്യത്തിന് പകരമായി സാധനങ്ങളോ സേവനങ്ങളോ കൈമാറണം.' },
        { en: 'Regular Basis: Continuous transactions, not a single deal.', ml: 'തുടർച്ചയായ പ്രവർത്തനം (Regular Basis): ഇടപാടുകൾ തുടർച്ചയായി നടക്കണം.' },
        { en: 'Profit Earning: Primary motive for survival.', ml: 'ലാഭം നേടുക (Profit Earning): ബിസിനസ്സിന്റെ പ്രാഥമിക ലക്ഷ്യം.' },
        { en: 'Uncertainty & Risk: Returns are never guaranteed.', ml: 'അനിശ്ചിതത്വവും റിസ്കും (Uncertainty & Risk): വരുമാനം ഉറപ്പില്ലാത്തതും നഷ്ടത്തിന് സാധ്യതയുള്ളതുമാണ്.' }
      ]},

      { type: 'h3', en: '3.3 Classification of Business Activities', ml: '3.3 ബിസിനസ്സ് പ്രവർത്തനങ്ങളുടെ തരംതിരിക്കൽ' },
      { type: 'ul', items: [
        { en: 'Industry: Extraction, production, or processing. (Primary, Secondary, Tertiary).', ml: 'വ്യവസായം (Industry): സാധനങ്ങൾ ഉൽപ്പാദിപ്പിക്കുന്നതിനോ പ്രോസസ്സ് ചെയ്യുന്നതിനോ ബന്ധപ്പെട്ടത് (പ്രൈമറി, സെക്കണ്ടറി, ടെർഷ്യറി).' },
        { en: 'Commerce: Includes Trade (buying/selling) and Auxiliaries to Trade (Transport, Banking, etc.).', ml: 'വാണിജ്യം (Commerce): ഇതിൽ വ്യാപാരവും (Trade), വ്യാപാരത്തെ സഹായിക്കുന്ന ഘടകങ്ങളും (Auxiliaries to Trade - ഗതാഗതം, ബാങ്കിംഗ് മുതലായവ) ഉൾപ്പെടുന്നു.' }
      ]},

      { type: 'h2', en: '4. Tables for Easy Learning', ml: '4. പഠിക്കാൻ എളുപ്പത്തിനുള്ള പട്ടികകൾ' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം'}, {en: 'Meaning', ml: 'അർത്ഥം'}, {en: 'Example', ml: 'ഉദാഹരണം'}],
        rows: [
          [{en: 'Hundi', ml: 'ഹുണ്ടി'}, {en: 'Ancient financial instrument', ml: 'പുരാതന സാമ്പത്തിക രേഖ'}, {en: 'Dhani-jog', ml: 'ധാനി-ജോഗ്'}],
          [{en: 'Karkhana', ml: 'കാർഖാന'}, {en: 'Workshops for artisans', ml: 'തൊഴിൽശാലകൾ'}, {en: 'Textile weaving', ml: 'തുണി നെയ്ത്ത്'}],
          [{en: 'Entrepot', ml: 'എൻട്രെപോട്ട്'}, {en: 'Import for re-export', ml: 'വീണ്ടും കയറ്റുമതി ചെയ്യാനുള്ള ഇറക്കുമതി'}, {en: 'Importing from China to sell to Nepal', ml: 'ചൈനയിൽ നിന്ന് വാങ്ങി നേപ്പാളിൽ വിൽക്കുന്നത്'}]
        ]
      }},
      { type: 'h3', en: 'Comparison: Business, Profession, and Employment', ml: 'താരതമ്യം: ബിസിനസ്സ്, പ്രൊഫഷൻ, ജോലി' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Business', ml: 'ബിസിനസ്സ്'}, {en: 'Profession', ml: 'പ്രൊഫഷൻ'}, {en: 'Employment', ml: 'ജോലി'}],
        rows: [
          [{en: 'Qualification', ml: 'യോഗ്യത'}, {en: 'None', ml: 'വേണ്ടതില്ല'}, {en: 'Specialized', ml: 'പ്രത്യേക വൈദഗ്ധ്യം'}, {en: 'As per employer', ml: 'തൊഴിലുടമ നിശ്ചയിക്കുന്നത്'}],
          [{en: 'Reward', ml: 'പ്രതിഫലം'}, {en: 'Profit', ml: 'ലാഭം'}, {en: 'Fees', ml: 'ഫീസ്'}, {en: 'Salary/Wages', ml: 'ശമ്പളം'}],
          [{en: 'Risk', ml: 'റിസ്ക്'}, {en: 'High', ml: 'കൂടുതൽ'}, {en: 'Some', ml: 'കുറച്ച്'}, {en: 'None', ml: 'ഇല്ല'}]
        ]
      }},
      { type: 'h3', en: 'Types of Industries', ml: 'വ്യവസായങ്ങളുടെ തരങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Category', ml: 'വിഭാഗം'}, {en: 'Description', ml: 'വിവരണം'}, {en: 'Examples', ml: 'ഉദാഹരണം'}],
        rows: [
          [{en: 'Primary', ml: 'പ്രൈമറി'}, {en: 'Natural resources', ml: 'പ്രകൃതി വിഭവങ്ങൾ'}, {en: 'Mining, Farming', ml: 'ഖനനം, കൃഷി'}],
          [{en: 'Secondary', ml: 'സെക്കണ്ടറി'}, {en: 'Manufacturing', ml: 'നിർമ്മാണം'}, {en: 'Cement, Sugar', ml: 'സിമന്റ്, പഞ്ചസാര'}],
          [{en: 'Tertiary', ml: 'ടെർഷ്യറി'}, {en: 'Support services', ml: 'സേവനങ്ങൾ'}, {en: 'Banking, Transport', ml: 'ബാങ്കിംഗ്, ഗതാഗതം'}]
        ]
      }},

      { type: 'h2', en: '5. Extract and Highlight', ml: '5. എടുത്തു പറയേണ്ട കാര്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Auxiliaries to trade remove hindrances: Transport (Place), Warehousing (Time), Insurance (Risk), Banking (Finance), Advertising (Information).', ml: 'വ്യാപാരത്തെ സഹായിക്കുന്ന ഘടകങ്ങൾ തടസ്സങ്ങൾ നീക്കുന്നു: ഗതാഗതം (സ്ഥലം), വെയർഹൗസിംഗ് (സമയം), ഇൻഷുറൻസ് (റിസ്ക്), ബാങ്കിംഗ് (ധനകാര്യം), പരസ്യം (വിവരം).' },
        { en: '‘Make in India’: Launched Sept 25, 2014, to encourage manufacturing in India.', ml: '‘മേയ്ക്ക് ഇൻ ഇന്ത്യ’ (Make in India): 2014 സെപ്റ്റംബർ 25-ന് ഇന്ത്യയിൽ ഉൽപ്പാദനം വർദ്ധിപ്പിക്കാനായി ആരംഭിച്ച പദ്ധതി.' }
      ]},

      { type: 'h2', en: '6. Quick Revision', ml: '6. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: 'Business is an economic activity aimed at continuous production and exchange for profit.', ml: 'ലാഭം നേടുക എന്ന ലക്ഷ്യത്തോടെ തുടർച്ചയായി സാധനങ്ങളോ സേവനങ്ങളോ ഉൽപ്പാദിപ്പിക്കുകയും കൈമാറ്റം ചെയ്യുകയും ചെയ്യുന്ന സാമ്പത്തിക പ്രവർത്തനമാണ് ബിസിനസ്സ്.' },
        { en: 'Business comprises Industry and Commerce.', ml: 'വ്യവസായവും വാണിജ്യവും ചേർന്നതാണ് ബിസിനസ്സ്.' },
        { en: 'Starting a business requires selecting the line, size, location, and financing.', ml: 'ബിസിനസ്സ് തുടങ്ങുമ്പോൾ അതിന്റെ സ്വഭാവം, വലിപ്പം, സ്ഥാനം, സാമ്പത്തികം എന്നിവ ശ്രദ്ധിക്കണം.' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "Columbus", ml: "കൊളംബസ് (Columbus)" }, definition: { en: "A historical explorer whose search for an alternate spice route to India led to the discovery of America in the late 15th century.", ml: "പതിനഞ്ചാം നൂറ്റാണ്ടിന്റെ അവസാനത്തിൽ ഇന്ത്യയിലേക്കുള്ള ഒരു ബദൽ സുഗന്ധവ്യഞ്ജന പാത (Spice Route) കണ്ടെത്താനുള്ള അന്വേഷണത്തിനിടയിൽ അമേരിക്ക കണ്ടെത്തിയ ചരിത്രപ്രസിദ്ധനായ പര്യവേക്ഷകനാണ് കൊളംബസ് (Columbus)." } },
    { term: { en: "Vasco da Gama", ml: "വാസ്കോ ഡ ഗാമ (Vasco da Gama)" }, definition: { en: "A historical explorer whose journey to locate India brought him to the shores of Malabar in 1498.", ml: "ഇന്ത്യയെ കണ്ടെത്താനുള്ള യാത്രയ്ക്കിടയിൽ 1498-ൽ മലബാർ തീരത്തെത്തിയ ചരിത്രപ്രസിദ്ധനായ പര്യവേക്ഷകനാണ് വാസ്കോ ഡ ഗാമ (Vasco da Gama)." } },
    { term: { en: "Megasthenes", ml: "മെഗസ്തനീസ് (Megasthenes)" }, definition: { en: "A historical traveller whose writings referred to the immense wealth and prosperity of the ancient Indian subcontinent.", ml: "പുരാതന ഇന്ത്യൻ ഉപഭൂഖണ്ഡത്തിന്റെ വലിയ സമ്പത്തിനെയും സമൃദ്ധിയെയും കുറിച്ച് തന്റെ രചനകളിൽ പരാമർശിച്ച ചരിത്രപ്രസിദ്ധനായ സഞ്ചാരിയാണ് മെഗസ്തനീസ് (Megasthenes)." } },
    { term: { en: "Silk Route", ml: "സിൽക്ക് റൂട്ട് (Silk Route)" }, definition: { en: "An ancient network of land routes that helped establish commercial and political contacts between India and foreign kingdoms.", ml: "ഇന്ത്യയും വിദേശ രാജ്യങ്ങളും തമ്മിൽ വാണിജ്യപരവും രാഷ്ട്രീയവുമായ ബന്ധങ്ങൾ സ്ഥാപിക്കാൻ സഹായിച്ച പുരാതനമായ കരമാർഗ്ഗ വ്യാപാര ശൃംഖലയാണ് സിൽക്ക് റൂട്ട് (Silk Route)." } },
    { term: { en: "Spice Route", ml: "സ്പൈസ് റൂട്ട് (Spice Route)" }, definition: { en: "Ancient maritime routes linking the East and the West by sea, primarily used for the trade of spices.", ml: "പ്രധാനമായും സുഗന്ധവ്യഞ്ജനങ്ങളുടെ വ്യാപാരത്തിനായി ഉപയോഗിച്ചിരുന്നതും കിഴക്കും പടിഞ്ഞാറും തമ്മിൽ സമുദ്രമാർഗ്ഗം ബന്ധിപ്പിക്കുന്നതുമായ പുരാതന പാതകളാണ് സ്പൈസ് റൂട്ട് (Spice Route)." } },
    { term: { en: "Hundi", ml: "ഹുണ്ടി (Hundi)" }, definition: { en: "An ancient indigenous financial instrument of exchange used for carrying out transactions and transferring money unconditionally.", ml: "നിരുപാധികമായി പണം കൈമാറുന്നതിനും ഇടപാടുകൾ നടത്തുന്നതിനും ഉപയോഗിച്ചിരുന്ന പുരാതന തദ്ദേശീയ സാമ്പത്തിക വിനിമയ രേഖയാണ് ഹുണ്ടി (Hundi)." } },
    { term: { en: "Jagat Seths", ml: "ജഗത് സേഠുമാർ (Jagat Seths)" }, definition: { en: "A powerful indigenous banking institution that exercised great influence during the Mughal period and the East India Company era.", ml: "മുഗൾ കാലഘട്ടത്തിലും ഈസ്റ്റ് ഇന്ത്യാ കമ്പനിയുടെ കാലത്തും വലിയ സ്വാധീനം ചെലുത്തിയിരുന്ന ശക്തമായ ഒരു തദ്ദേശീയ ബാങ്കിംഗ് സ്ഥാപനമാണ് ജഗത് സേഠുമാർ (Jagat Seths)." } },
    { term: { en: "Business", ml: "ബിസിനസ്സ് (Business)" }, definition: { en: "An economic activity involving the continuous production and sale of goods and services to earn profits by satisfying human needs.", ml: "മനുഷ്യന്റെ ആവശ്യങ്ങൾ നിറവേറ്റിക്കൊണ്ട് ലാഭം നേടുന്നതിനായി സാധനങ്ങളുടെയും സേവനങ്ങളുടെയും (Goods and Services) തുടർച്ചയായ ഉൽപ്പാദനവും വിൽപ്പനയും ഉൾപ്പെടുന്ന സാമ്പത്തിക പ്രവർത്തനമാണ് ബിസിനസ്സ് (Business)." } },
    { term: { en: "Profession", ml: "പ്രൊഫഷൻ (Profession)" }, definition: { en: "An economic activity requiring specialised knowledge, expertise, and adherence to a professional code of conduct in return for a fee.", ml: "പ്രത്യേക അറിവും വൈദഗ്ധ്യവും ആവശ്യമായതും, ഒരു നിശ്ചിത ഫീസിന് പകരമായി ഒരു പ്രൊഫഷണൽ പെരുമാറ്റച്ചട്ടം (Professional Code of Conduct) പാലിച്ചുകൊണ്ട് നടത്തുന്നതുമായ സാമ്പത്തിക പ്രവർത്തനമാണ് പ്രൊഫഷൻ (Profession)." } },
    { term: { en: "Employment", ml: "ജോലി (Employment)" }, definition: { en: "An economic activity where an individual works regularly for another person or organisation in exchange for a fixed salary or wage.", ml: "നിശ്ചിത ശമ്പളത്തിനോ കൂലിക്കോ പകരമായി ഒരു വ്യക്തി മറ്റൊരു വ്യക്തിക്കോ സ്ഥാപനത്തിനോ വേണ്ടി സ്ഥിരമായി ജോലി ചെയ്യുന്ന സാമ്പത്തിക പ്രവർത്തനമാണ് ജോലി (Employment)." } },
    { term: { en: "Industry", ml: "വ്യവസായം (Industry)" }, definition: { en: "Economic activities concerned with the extraction, production, processing, or conversion of resources into useful goods.", ml: "വിഭവങ്ങളെ ഉപയോഗപ്രദമായ സാധനങ്ങളാക്കി മാറ്റുന്ന പ്രക്രിയയുമായോ ഉൽപ്പാദനവുമായോ ബന്ധപ്പെട്ട സാമ്പത്തിക പ്രവർത്തനങ്ങളെയാണ് വ്യവസായം (Industry) എന്ന് വിളിക്കുന്നത്." } },
    { term: { en: "Commerce", ml: "വാണിജ്യം (Commerce)" }, definition: { en: "All activities involving the removal of hindrances of persons, place, time, risk, and finance to facilitate the exchange of goods and services.", ml: "സാധനങ്ങളുടെയും സേവനങ്ങളുടെയും കൈമാറ്റം സുഗമമാക്കുന്നതിനായി വ്യക്തികൾ, സ്ഥലം, സമയം, റിസ്ക്, ധനകാര്യം എന്നിവയുമായി ബന്ധപ്പെട്ട തടസ്സങ്ങൾ നീക്കം ചെയ്യുന്ന പ്രവർത്തനങ്ങളെ വാണിജ്യം (Commerce) എന്ന് വിളിക്കുന്നു." } },
    { term: { en: "Trade", ml: "വ്യാപാരം (Trade)" }, definition: { en: "An essential part of commerce that specifically refers to the actual buying, selling, or exchanging of goods.", ml: "വാണിജ്യത്തിന്റെ (Commerce) ഒരു പ്രധാന ഭാഗമായ ഇത് സാധനങ്ങളുടെ യഥാർത്ഥ വാങ്ങലിനെയും വിൽപ്പനയെയും അല്ലെങ്കിൽ കൈമാറ്റത്തെയോ സൂചിപ്പിക്കുന്നു." } },
    { term: { en: "Business Risk", ml: "ബിസിനസ്സ് റിസ്ക് (Business Risk)" }, definition: { en: "The possibility of inadequate profits or even losses due to uncertainties or unexpected future events.", ml: "അനിശ്ചിതത്വങ്ങൾ അല്ലെങ്കിൽ അപ്രതീക്ഷിത സംഭവങ്ങൾ കാരണം ലാഭം കുറയാനോ നഷ്ടം സംഭവിക്കാനോ ഉള്ള സാധ്യതയെ ബിസിനസ്സ് റിസ്ക് (Business Risk) എന്ന് വിളിക്കുന്നു." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "Which of the following is an economic activity?", ml: "താഴെ പറയുന്നവയിൽ സാമ്പത്തിക പ്രവർത്തനം (Economic activity) ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Cooking for family", ml: "കുടുംബത്തിനായി ഭക്ഷണം പാകം ചെയ്യുന്നത്" } },
        { k: "B", text: { en: "Running a factory", ml: "ഒരു ഫാക്ടറി നടത്തുന്നത്" } },
        { k: "C", text: { en: "Helping a blind person cross road", ml: "അന്ധനായ ഒരാളെ റോഡ് മുറിച്ചുകടക്കാൻ സഹായിക്കുന്നത്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Economic activities are done to earn a livelihood.", ml: "ഉപജീവനത്തിനായി നടത്തുന്ന പ്രവർത്തനങ്ങളെയാണ് സാമ്പത്തിക പ്രവർത്തനങ്ങൾ എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "Business means ____ activity.", ml: "ബിസിനസ്സ് എന്നത് ഒരു ____ പ്രവർത്തനമാണ്." },
      options: [
        { k: "A", text: { en: "Social", ml: "സാമൂഹിക" } },
        { k: "B", text: { en: "Economic", ml: "സാമ്പത്തിക (Economic)" } },
        { k: "C", text: { en: "Political", ml: "രാഷ്ട്രീയ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Business is primarily an economic activity to earn profit.", ml: "ലാഭം നേടുക എന്ന ലക്ഷ്യത്തോടെ നടത്തുന്ന പ്രവർത്തനമായതിനാൽ ബിസിനസ്സ് ഒരു സാമ്പത്തിക പ്രവർത്തനമാണ്." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "The primary objective of business is?", ml: "ബിസിനസ്സിന്റെ പ്രാഥമിക ലക്ഷ്യം എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Service", ml: "സേവനം" } },
        { k: "B", text: { en: "Profit Earning", ml: "ലാഭം നേടുക (Profit Earning)" } },
        { k: "C", text: { en: "Donation", ml: "ദാനം നൽകൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Profit is essential for the survival and growth of a business.", ml: "ബിസിനസ്സിന്റെ നിലനിൽപ്പിനും വളർച്ചയ്ക്കും ലാഭം അത്യാവശ്യമാണ്." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "Hundi was used in ancient India for?", ml: "പുരാതന ഇന്ത്യയിൽ 'ഹുണ്ടി' (Hundi) എന്തിനാണ് ഉപയോഗിച്ചിരുന്നത്?" },
      options: [
        { k: "A", text: { en: "Agriculture", ml: "കൃഷി" } },
        { k: "B", text: { en: "Fund transfer/Transactions", ml: "പണം കൈമാറാൻ / ഇടപാടുകൾക്ക്" } },
        { k: "C", text: { en: "Education", ml: "വിദ്യാഭ്യാസം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Hundi was an ancient financial instrument for fund transfer.", ml: "പണം കൈമാറാൻ പുരാതന ഇന്ത്യയിൽ ഉപയോഗിച്ചിരുന്ന ഒരു സാമ്പത്തിക രേഖയായിരുന്നു ഹുണ്ടി." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "The transfer of goods for value is called?", ml: "മൂല്യത്തിന് പകരമായി സാധനങ്ങൾ കൈമാറുന്നതിനെ എന്തു വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Donation", ml: "ദാനം" } },
        { k: "B", text: { en: "Sale or Exchange", ml: "വിൽപ്പന അല്ലെങ്കിൽ കൈമാറ്റം" } },
        { k: "C", text: { en: "Service", ml: "സേവനം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Business involves the sale or exchange of goods for value.", ml: "ബിസിനസ്സിൽ മൂല്യത്തിന് പകരമായി സാധനങ്ങളോ സേവനങ്ങളോ കൈമാറണം." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "Which industry extracts products from natural sources?", ml: "പ്രകൃതി വിഭവങ്ങളിൽ നിന്ന് സാധനങ്ങൾ ഉൽപ്പാദിപ്പിക്കുന്ന വ്യവസായം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Primary Industry", ml: "പ്രൈമറി വ്യവസായം (Primary Industry)" } },
        { k: "B", text: { en: "Secondary Industry", ml: "സെക്കണ്ടറി വ്യവസായം" } },
        { k: "C", text: { en: "Tertiary Industry", ml: "ടെർഷ്യറി വ്യവസായം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Primary industries (extractive) get products from nature.", ml: "ഖനനം, കൃഷി തുടങ്ങിയവ പ്രൈമറി വ്യവസായങ്ങൾക്ക് ഉദാഹരണമാണ്." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "Trade means?", ml: "വ്യാപാരം (Trade) എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Production of goods", ml: "സാധനങ്ങളുടെ ഉൽപ്പാദനം" } },
        { k: "B", text: { en: "Buying and selling of goods", ml: "സാധനങ്ങൾ വാങ്ങുന്നതും വിൽക്കുന്നതും" } },
        { k: "C", text: { en: "Providing service", ml: "സേവനം നൽകുക" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Trade refers to the actual buying and selling of goods.", ml: "സാധനങ്ങളുടെ ക്രയവിക്രയത്തെയാണ് വ്യാപാരം എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "Which of the following is an auxiliary to trade?", ml: "താഴെ പറയുന്നവയിൽ വ്യാപാരത്തെ സഹായിക്കുന്ന ഘടകം (Auxiliary to trade) ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Mining", ml: "ഖനനം" } },
        { k: "B", text: { en: "Transport", ml: "ഗതാഗതം (Transport)" } },
        { k: "C", text: { en: "Farming", ml: "കൃഷി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Transport facilitates the movement of goods from producers to consumers.", ml: "സാധനങ്ങൾ ഒരിടത്തുനിന്ന് മറ്റൊരിടത്തേക്ക് എത്തിക്കാൻ ഗതാഗതം സഹായിക്കുന്നു." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "Possibility of loss due to uncertainty is called?", ml: "അനിശ്ചിതത്വങ്ങൾ കാരണം നഷ്ടമുണ്ടാകാനുള്ള സാധ്യതയെ എന്തു വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Profit", ml: "ലാഭം" } },
        { k: "B", text: { en: "Business Risk", ml: "ബിസിനസ്സ് റിസ്ക് (Business Risk)" } },
        { k: "C", text: { en: "Investment", ml: "നിക്ഷേപം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Business risk is the chance of getting less profit or suffering a loss.", ml: "പ്രതീക്ഷിച്ച ലാഭം ലഭിക്കാത്തതിനെയോ നഷ്ടമുണ്ടാകുന്നതിനെയോ ആണ് റിസ്ക് എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "Which center was famous for wool and horses in ancient India?", ml: "പുരാതന ഇന്ത്യയിൽ കമ്പിളിക്കും കുതിരകൾക്കും പ്രശസ്തമായിരുന്ന സ്ഥലം?" },
      options: [
        { k: "A", text: { en: "Pataliputra", ml: "പാടലീപുത്രം" } },
        { k: "B", text: { en: "Peshawar", ml: "പെഷവാർ" } },
        { k: "C", text: { en: "Calicut", ml: "കാലിക്കറ്റ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Peshawar was a major trade center for wool and horses.", ml: "പുരാതന കാലത്ത് കമ്പിളിയുടെയും കുതിരകളുടെയും പ്രധാന വ്യാപാര കേന്ദ്രമായിരുന്നു പെഷവാർ." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "The 'Silk Route' connected India with?", ml: "'സിൽക്ക് റൂട്ട്' ഇന്ത്യയെ ഏതുമായാണ് ബന്ധിപ്പിച്ചത്?" },
      options: [
        { k: "A", text: { en: "America", ml: "അമേരിക്ക" } },
        { k: "B", text: { en: "China and the West", ml: "ചൈനയും പാശ്ചാത്യ രാജ്യങ്ങളും" } },
        { k: "C", text: { en: "Australia", ml: "ഓസ്‌ട്രേലിയ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Silk route was an ancient land route for international trade.", ml: "ചൈനയിലേക്കും പാശ്ചാത്യ രാജ്യങ്ങളിലേക്കും കരമാർഗ്ഗം വ്യാപാരം നടന്നിരുന്നത് സിൽക്ക് റൂട്ട് വഴിയാണ്." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "Industry providing support services to other sectors is?", ml: "മറ്റ് മേഖലകൾക്ക് സഹായ സേവനങ്ങൾ നൽകുന്ന വ്യവസായം?" },
      options: [
        { k: "A", text: { en: "Genetic industry", ml: "ജനറ്റിക് വ്യവസായം" } },
        { k: "B", text: { en: "Tertiary industry", ml: "ടെർഷ്യറി വ്യവസായം (Tertiary Industry)" } },
        { k: "C", text: { en: "Extractive industry", ml: "എക്സ്ട്രാക്റ്റീവ് വ്യവസായം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Tertiary industries provide support to primary and secondary sectors.", ml: "സേവന മേഖലയിലുള്ള ബാങ്കിംഗ്, ഇൻഷുറൻസ് തുടങ്ങിയവ ടെർഷ്യറി വ്യവസായങ്ങളാണ്." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "Business risk involving only chance of loss or no loss is?", ml: "നഷ്ടത്തിന് മാത്രം സാധ്യതയുള്ള ബിസിനസ്സ് റിസ്ക് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Speculative Risk", ml: "സ്പെക്കുലേറ്റീവ് റിസ്ക്" } },
        { k: "B", text: { en: "Pure Risk", ml: "പ്യുവർ റിസ്ക് (Pure Risk)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Pure risks like fire or theft have only two possibilities: loss or no loss.", ml: "തീപിടുത്തം, മോഷണം തുടങ്ങിയ നഷ്ടം മാത്രം സംഭവിക്കാവുന്ന റിസ്കുകളെ പ്യുവർ റിസ്ക് എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "Earthquakes and floods are examples of which cause of risk?", ml: "ഭൂകമ്പവും പ്രളയവും ഏത് തരം റിസ്ക് കാരണങ്ങൾക്ക് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Human cause", ml: "മനുഷ്യസൃഷ്ടം" } },
        { k: "B", text: { en: "Natural cause", ml: "പ്രകൃതിദത്തം (Natural Cause)" } },
        { k: "C", text: { en: "Economic cause", ml: "സാമ്പത്തികം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Natural disasters are beyond human control.", ml: "മനുഷ്യന് നിയന്ത്രിക്കാൻ കഴിയാത്ത പ്രകൃതിക്ഷോഭങ്ങൾ പ്രകൃതിദത്ത കാരണങ്ങളാണ്." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "The 'Make in India' initiative was launched in?", ml: "'മേയ്ക്ക് ഇൻ ഇന്ത്യ' പദ്ധതി ആരംഭിച്ചത് എന്ന്?" },
      options: [
        { k: "A", text: { en: "2010", ml: "2014 സെപ്റ്റംബർ 25" } },
        { k: "B", text: { en: "2014", ml: "2014" } },
        { k: "C", text: { en: "2020", ml: "2020" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Make in India was launched on Sept 25, 2014.", ml: "2014 സെപ്റ്റംബർ 25-നാണ് ഭാരത സർക്കാർ ഈ പദ്ധതി പ്രഖ്യാപിച്ചത്." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "Which activity is performed out of love and sentiment?", ml: "സ്നേഹത്തിന്റെയും സഹതാപത്തിന്റെയും അടിസ്ഥാനത്തിൽ നടത്തുന്ന പ്രവർത്തനം?" },
      options: [
        { k: "A", text: { en: "Economic activity", ml: "സാമ്പത്തിക പ്രവർത്തനം" } },
        { k: "B", text: { en: "Non-economic activity", ml: "സാമ്പത്തികേതര പ്രവർത്തനം (Non-economic)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Non-economic activities are not done for money.", ml: "ലാഭത്തിന് വേണ്ടിയല്ലാതെ മാനസിക സംതൃപ്തിക്കായി ചെയ്യുന്നതാണ് ഇത്തരം പ്രവർത്തനങ്ങൾ." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "Specialized training and expertise are needed for?", ml: "പ്രത്യേക പരിശീലനവും വൈദഗ്ധ്യവും അത്യാവശ്യം ഏതിനാണ്?" },
      options: [
        { k: "A", text: { en: "Business", ml: "ബിസിനസ്സ്" } },
        { k: "B", text: { en: "Profession", ml: "പ്രൊഫഷൻ (Profession)" } },
        { k: "C", text: { en: "Employment", ml: "ജോലി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Professions like Doctors or Lawyers need specialized training.", ml: "ഡോക്ടർമാർ, അഭിഭാഷകർ തുടങ്ങിയ പ്രൊഫഷണലുകൾക്ക് പ്രത്യേക പരിശീലനം വേണം." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "Which industry breeds plants and animals?", ml: "സസ്യങ്ങളുടെയും മൃഗങ്ങളുടെയും വർദ്ധനവുമായി ബന്ധപ്പെട്ട വ്യവസായം?" },
      options: [
        { k: "A", text: { en: "Extractive", ml: "എക്സ്ട്രാക്റ്റീവ്" } },
        { k: "B", text: { en: "Genetic", ml: "ജനറ്റിക് (Genetic)" } },
        { k: "C", text: { en: "Manufacturing", ml: "നിർമ്മാണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Genetic industries like poultry farms breed species for reproduction.", ml: "സസ്യങ്ങളും മൃഗങ്ങളും വളർത്തുന്ന വിഭാഗമാണ് ജനറ്റിക് വ്യവസായം." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "Banking removes the hindrance of?", ml: "ബാങ്കിംഗ് ഏത് തടസ്സത്തെയാണ് നീക്കം ചെയ്യുന്നത്?" },
      options: [
        { k: "A", text: { en: "Risk", ml: "റിസ്ക്" } },
        { k: "B", text: { en: "Finance", ml: "ധനകാര്യം (Finance)" } },
        { k: "C", text: { en: "Place", ml: "സ്ഥലം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Banks provide funds needed for business activities.", ml: "ബിസിനസ്സിന് ആവശ്യമായ പണം നൽകി സാമ്പത്തിക തടസ്സം നീക്കാൻ ബാങ്കിംഗ് സഹായിക്കുന്നു." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "Profit is the reward for?", ml: "ലാഭം എന്നത് ഏതിനുള്ള പ്രതിഫലമാണ്?" },
      options: [
        { k: "A", text: { en: "Risk-taking", ml: "റിസ്ക് എടുക്കൽ (Risk-taking)" } },
        { k: "B", text: { en: "Management", ml: "മാനേജ്‌മെന്റ്" } },
        { k: "C", text: { en: "Capital", ml: "മൂലധനം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Profit is the reward for bearing business risks.", ml: "ബിസിനസ്സിലെ റിസ്ക് ഏറ്റെടുക്കുന്നതിനായി സംരംഭകന് ലഭിക്കുന്ന പ്രതിഫലമാണ് ലാഭം." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "Which city was famous for textiles and zari in ancient India?", ml: "പുരാതന ഇന്ത്യയിൽ തുണിത്തരങ്ങൾക്കും സാരിക്കും പ്രശസ്തമായ സ്ഥലം?" },
      options: [
        { k: "A", text: { en: "Taxila", ml: "തക്ഷശില" } },
        { k: "B", text: { en: "Surat", ml: "സൂറത്ത്" } },
        { k: "C", text: { en: "Madurai", ml: "മധുര" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Surat was a hub for textiles and gold-bordered zari.", ml: "വസ്ത്ര നിർമ്മാണത്തിനും സൂറത്ത് പണ്ട് പ്രശസ്തമായിരുന്നു." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "Intermediaries like 'Seths' provided?", ml: "'സേഠുമാർ' (Seths) തുടങ്ങിയവർ നൽകിയിരുന്നത്?" },
      options: [
        { k: "A", text: { en: "Raw materials", ml: "അസംസ്കൃത വസ്തുക്കൾ" } },
        { k: "B", text: { en: "Financial security/Loans", ml: "സാമ്പത്തിക സുരക്ഷ / വായ്പകൾ" } },
        { k: "C", text: { en: "Transport", ml: "ഗതാഗതം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Indigenous bankers like Seths financed trade.", ml: "തദ്ദേശീയ ബാങ്കർമാരായിരുന്ന ഇവർ വ്യാപാരത്തിന് ആവശ്യമായ പണം നൽകി." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "Warehousing removes the hindrance of?", ml: "വെയർഹൗസിംഗ് ഏത് തടസ്സമാണ് നീക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Finance", ml: "ധനകാര്യം" } },
        { k: "B", text: { en: "Time", ml: "സമയം (Time)" } },
        { k: "C", text: { en: "Risk", ml: "റിസ്ക്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Warehousing stores goods until they are needed, removing time gap.", ml: "സാധനങ്ങൾ ആവശ്യമുള്ള സമയം വരെ സൂക്ഷിച്ചുവെക്കാൻ വെയർഹൗസിംഗ് സഹായിക്കുന്നു." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "Selling an old mobile phone once is a business activity?", ml: "ഒരിക്കൽ മാത്രം പഴയ മൊബൈൽ ഫോൺ വിൽക്കുന്നത് ബിസിനസ്സ് ആണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "അല്ല (No)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Business must be done on a regular basis.", ml: "ഇടപാടുകൾ തുടർച്ചയായി നടന്നെങ്കിൽ മാത്രമേ അതിനെ ബിസിനസ്സ് എന്ന് വിളിക്കൂ." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "Which objective ensures efficient use of resources?", ml: "വിഭവങ്ങൾ കാര്യക്ഷമമായി ഉപയോഗിക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കുന്ന ലക്ഷ്യം?" },
      options: [
        { k: "A", text: { en: "Innovation", ml: "നവീനത" } },
        { k: "B", text: { en: "Productivity", ml: "ഉൽപ്പാദനക്ഷമത (Productivity)" } },
        { k: "C", text: { en: "Market standing", ml: "വിപണിയിലെ സ്ഥാനം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Productivity is a measure of efficiency in resource use.", ml: "കുറഞ്ഞ ചെലവിൽ കൂടുതൽ ഉൽപ്പാദനം നടത്തുക എന്നതാണ് ഇതിന്റെ അർത്ഥം." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "Insurance removes the hindrance of?", ml: "ഇൻഷുറൻസ് ഏത് തടസ്സമാണ് നീക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Place", ml: "സ്ഥലം" } },
        { k: "B", text: { en: "Risk", ml: "റിസ്ക് (Risk)" } },
        { k: "C", text: { en: "Information", ml: "വിവരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Insurance protects against potential business losses.", ml: "നഷ്ടസാധ്യതകൾക്കെതിരെ സാമ്പത്തിക സുരക്ഷ നൽകാൻ ഇൻഷുറൻസ് സഹായിക്കുന്നു." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "External trade includes?", ml: "വിദേശ വ്യാപാരത്തിൽ (External trade) ഉൾപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Wholesale", ml: "മൊത്തവ്യാപാരം" } },
        { k: "B", text: { en: "Import, Export, Entrepot", ml: "ഇറക്കുമതി, കയറ്റുമതി, എൻട്രെപോട്ട്" } },
        { k: "C", text: { en: "Retail", ml: "ചില്ലറ വ്യാപാരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "External trade is between different countries.", ml: "മറ്റൊരു രാജ്യവുമായി നടത്തുന്ന വ്യാപാരമാണ് വിദേശ വ്യാപാരം." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "In ancient India, artisans worked in?", ml: "പുരാതന ഇന്ത്യയിൽ വിദഗ്ദ്ധ തൊഴിലാളികൾ പണിയെടുത്തിരുന്ന സ്ഥലം?" },
      options: [
        { k: "A", text: { en: "MNCs", ml: "എം.എൻ.സികൾ" } },
        { k: "B", text: { en: "Karkhanas", ml: "കാർഖാനകൾ (Karkhanas)" } },
        { k: "C", text: { en: "Banks", ml: "ബാങ്കുകൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Karkhanas were workshops where artisans converted raw materials into goods.", ml: "സാധനങ്ങൾ നിർമ്മിക്കുന്ന തൊഴിൽശാലകളെയാണ് കാർഖാനകൾ എന്ന് വിളിച്ചിരുന്നത്." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "Employee negligence is a ____ cause of risk.", ml: "തൊഴിലാളികളുടെ അശ്രദ്ധ ഏത് തരം റിസ്ക് കാരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Natural", ml: "പ്രകൃതിദത്തം" } },
        { k: "B", text: { en: "Human", ml: "മനുഷ്യസൃഷ്ടം (Human Cause)" } },
        { k: "C", text: { en: "Economic", ml: "സാമ്പത്തികം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Human causes include employee strikes or carelessness.", ml: "മനുഷ്യരുടെ പ്രവൃത്തികൾ മൂലം ബിസിനസ്സിൽ റിസ്ക് ഉണ്ടായേക്കാം." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "Business is an essential part of ____.", ml: "ബിസിനസ്സ് എന്തിന്റെ ഒഴിച്ചുകൂടാനാവാത്ത ഭാഗമാണ്?" },
      options: [
        { k: "A", text: { en: "Politics", ml: "രാഷ്ട്രീയം" } },
        { k: "B", text: { en: "Society", ml: "സമൂഹം (Society)" } },
        { k: "C", text: { en: "Religion", ml: "മതം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Business provides goods and services to society.", ml: "സമൂഹത്തിന്റെ ആവശ്യങ്ങൾ നിറവേറ്റുന്നതിനാൽ ബിസിനസ്സ് സമൂഹത്തിന്റെ ഭാഗമാണ്." }
    }
  ],
  videos: [
    { title: "01 ബിസിനസ്, ട്രേഡ് & കൊമേഴ്സ്", url: "https://www.youtube.com/watch?v=xN0LxJMyngg" }
  ]
};

export const plusOneBusinessStudiesUnit2: Lesson = {
  id: "pl-bs-11-unit2",
  title: { en: "Forms of Business Organisation", ml: "ബിസിനസ്സ് സ്ഥാപനങ്ങളുടെ വിവിധ രൂപങ്ങൾ" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Identify different forms of business organizations", ml: "വിവിധ തരത്തിലുള്ള ബിസിനസ്സ് സ്ഥാപനങ്ങളെ തിരിച്ചറിയുക" },
    { en: "Understand the features, merits, and limitations of each form", ml: "ഓരോ രൂപത്തിന്റെയും സവിശേഷതകൾ, ഗുണങ്ങൾ, പരിമിതികൾ എന്നിവ മനസ്സിലാക്കുക" },
    { en: "Explain the factors determining the choice of business structure", ml: "ബിസിനസ്സ് ഘടന തിരഞ്ഞെടുക്കുന്നതിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ വിവരിക്കുക" },
    { en: "Distinguish between private and public companies", ml: "സ്വകാര്യ കമ്പനികളും പൊതു കമ്പനികളും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയുക" }
  ],
  content: {
    intro: {
      en: "This chapter explores various forms of business organizations like Sole Proprietorship, Partnership, and Companies, helping entrepreneurs choose the right structure.",
      ml: "ഏകാംഗ ഉടമസ്ഥാവകാശം, പങ്കാളിത്തം, കമ്പനികൾ തുടങ്ങിയ വിവിധ ബിസിനസ്സ് രൂപങ്ങളെക്കുറിച്ചും ഒരു സംരംഭത്തിന് അനുയോജ്യമായ ഘടന എങ്ങനെ തിരഞ്ഞെടുക്കാമെന്നും ഈ അധ്യായം വിശദീകരിക്കുന്നു."
    },
    core: {
      en: "Compare Sole Proprietorship, HUF, Partnership, Cooperatives, and Companies based on liability, control, capital, and continuity.",
      ml: "ബാധ്യത, നിയന്ത്രണം, മൂലധനം, നിലനിൽപ്പ് എന്നിവയുടെ അടിസ്ഥാനത്തിൽ ഏകാംഗ ഉടമസ്ഥാവകാശം, പങ്കാളിത്തം, സഹകരണ സംഘങ്ങൾ, കമ്പനികൾ എന്നിവയെ താരതമ്യം ചെയ്യുക."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter explores the different forms of business organizations available to entrepreneurs, namely Sole Proprietorship, Joint Hindu Family Business, Partnership, Cooperative Societies, and Joint Stock Companies. It details their features, merits, and limitations.', ml: 'ഏകാംഗ ഉടമസ്ഥാവകാശം (Sole Proprietorship), ജോയിന്റ് ഹിന്ദു ഫാമിലി ബിസിനസ്സ് (Joint Hindu Family Business), പങ്കാളിത്തം (Partnership), സഹകരണ സംഘങ്ങൾ (Cooperative Societies), ജോയിന്റ് സ്റ്റോക്ക് കമ്പനികൾ (Joint Stock Companies) എന്നീ വിവിധ ബിസിനസ്സ് രൂപങ്ങളെക്കുറിച്ചാണ് ഈ അധ്യായം പ്രതിപാദിക്കുന്നത്.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Sole Proprietorship: Owned, managed, and controlled by a single individual.', ml: 'ഏകാംഗ ഉടമസ്ഥാവകാശം (Sole Proprietorship): ഒരാൾ മാത്രം ഉടമസ്ഥത വഹിക്കുകയും നിയന്ത്രിക്കുകയും ചെയ്യുന്ന ബിസിനസ്സ്.' },
        { en: 'Partnership: Legal relation between persons who agree to share profits of a business carried on by all or any of them acting for all.', ml: 'പങ്കാളിത്തം (Partnership): ലാഭം പങ്കുവെക്കാമെന്ന കരാറോടെ രണ്ടോ അതിലധികമോ ആളുകൾ ചേർന്ന് നടത്തുന്ന ബിസിനസ്സ്.' },
        { en: 'Joint Stock Company: An artificial person created by law, having separate legal entity and perpetual succession.', ml: 'ജോയിന്റ് സ്റ്റോക്ക് കമ്പനി (Joint Stock Company): നിയമത്താൽ നിർമ്മിക്കപ്പെട്ട ഒരു കൃത്രിമ വ്യക്തി. ഇതിന് സ്വന്തമായി നിയമപരമായ നിലനിൽപ്പും ശാശ്വത നിലനിൽപ്പും (Perpetual Succession) ഉണ്ട്.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      { type: 'h3', en: '3.1 Sole Proprietorship', ml: '3.1 ഏകാംഗ ഉടമസ്ഥാവകാശം' },
      { type: 'p', en: 'The owner has unlimited liability, meaning personal assets can be used to pay business debts. It offers quick decision-making and complete confidentiality.', ml: 'ഉടമയ്ക്ക് അമിതമായ ബാധ്യത (Unlimited Liability) ഉണ്ടായിരിക്കും. അതായത് ബിസിനസ്സിലെ കടങ്ങൾ വീട്ടാൻ ഉടമയുടെ വ്യക്തിപരമായ സ്വത്തുക്കളും ഉപയോഗിക്കേണ്ടി വരും. വേഗത്തിലുള്ള തീരുമാനമെടുക്കൽ, രഹസ്യസ്വഭാവം എന്നിവ ഇതിന്റെ ഗുണങ്ങളാണ്.' },

      { type: 'h3', en: '3.2 Joint Hindu Family Business', ml: '3.2 ജോയിന്റ് ഹിന്ദു ഫാമിലി ബിസിനസ്സ്' },
      { type: 'p', en: 'Controlled by the eldest male member called the Karta. The Karta has unlimited liability, while other members (co-parceners) have limited liability.', ml: 'കുടുംബത്തിലെ ഏറ്റവും മുതിർന്ന അംഗമായ കർത്താ (Karta) ആണ് ബിസിനസ്സ് നിയന്ത്രിക്കുന്നത്. കർത്താവിന് അമിത ബാധ്യതയും മറ്റ് അംഗങ്ങൾക്ക് (Co-parceners) പരിമിതമായ ബാധ്യതയുമാണ് ഉള്ളത്.' },

      { type: 'h3', en: '3.3 Partnership', ml: '3.3 പങ്കാളിത്തം (Partnership)' },
      { type: 'p', en: 'Governed by the Indian Partnership Act, 1932. Partners share risks and resources. A partnership deed specifies the terms and conditions.', ml: '1932-ലെ ഇന്ത്യൻ പാർട്ണർഷിപ്പ് ആക്ട് പ്രകാരമാണ് ഇത് പ്രവർത്തിക്കുന്നത്. പങ്കാളികൾ തമ്മിലുള്ള വ്യവസ്ഥകൾ രേഖപ്പെടുത്തിയ കരാറിനെ പങ്കാളിത്ത ആധാരം (Partnership Deed) എന്ന് വിളിക്കുന്നു.' },

      { type: 'h3', en: '3.4 Cooperative Society', ml: '3.4 സഹകരണ സംഘം (Cooperative Society)' },
      { type: 'p', en: 'Based on mutual welfare. Follows the principle of "One man, one vote" regardless of capital contributed.', ml: 'പരസ്പര സഹായം എന്നതാണ് ഇതിന്റെ ലക്ഷ്യം. എത്ര മൂലധനം നിക്ഷേപിച്ചാലും "ഒരാൾക്ക് ഒരു വോട്ട്" എന്ന ജനാധിപത്യ രീതിയാണ് ഇവിടെ പിന്തുടരുന്നത്.' },

      { type: 'h3', en: '3.5 Joint Stock Company', ml: '3.5 ജോയിന്റ് സ്റ്റോക്ക് കമ്പനി' },
      { type: 'p', en: 'Registration is compulsory. It has a separate legal entity from its members. Shareholders have limited liability.', ml: 'രജിസ്ട്രേഷൻ നിർബന്ധമാണ്. ഓഹരിയുടമകൾക്ക് (Shareholders) പരിമിതമായ ബാധ്യത (Limited Liability) മാത്രമേ ഉള്ളൂ.' },

      { type: 'h2', en: '4. Comparison: Private vs. Public Company', ml: '4. താരതമ്യം: സ്വകാര്യ vs. പൊതു കമ്പനി' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Private Company', ml: 'സ്വകാര്യ കമ്പനി'}, {en: 'Public Company', ml: 'പൊതു കമ്പനി'}],
        rows: [
          [{en: 'Min Members', ml: 'കുറഞ്ഞ അംഗങ്ങൾ'}, {en: '2', ml: '2'}, {en: '7', ml: '7'}],
          [{en: 'Max Members', ml: 'പരമാവധി അംഗങ്ങൾ'}, {en: '200', ml: '200'}, {en: 'Unlimited', ml: 'പരിധിയില്ല'}],
          [{en: 'Min Directors', ml: 'കുറഞ്ഞ ഡയറക്ടർമാർ'}, {en: '2', ml: '2'}, {en: '3', ml: '3'}],
          [{en: 'Share Transfer', ml: 'ഓഹരി കൈമാറ്റം'}, {en: 'Restricted', ml: 'നിയന്ത്രണമുണ്ട്'}, {en: 'Free', ml: 'സ്വതന്ത്രമാണ്'}]
        ]
      }},

      { type: 'h2', en: '5. Types of Partners', ml: '5. പങ്കാളികളുടെ തരങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Type', ml: 'ഇനം'}, {en: 'Capital', ml: 'മൂലധനം'}, {en: 'Management', ml: 'മാനേജ്മെന്റ്'}, {en: 'Liability', ml: 'ബാധ്യത'}],
        rows: [
          [{en: 'Active', ml: 'സജീവ പങ്കാളി'}, {en: 'Yes', ml: 'ഉണ്ട്'}, {en: 'Yes', ml: 'ഉണ്ട്'}, {en: 'Unlimited', ml: 'അമിതം'}],
          [{en: 'Sleeping', ml: 'നിഷ്ക്രിയ പങ്കാളി'}, {en: 'Yes', ml: 'ഉണ്ട്'}, {en: 'No', ml: 'ഇല്ല'}, {en: 'Unlimited', ml: 'അമിതം'}],
          [{en: 'Nominal', ml: 'നാമമാത്ര പങ്കാളി'}, {en: 'No', ml: 'ഇല്ല'}, {en: 'No', ml: 'ഇല്ല'}, {en: 'Unlimited', ml: 'അമിതം'}]
        ]
      }},

      { type: 'h2', en: '6. Types of Cooperative Societies', ml: '6. വിവിധതരം സഹകരണ സംഘങ്ങൾ' },
      { type: 'ul', items: [
        { en: "Consumer's: Protects consumers from middlemen.", ml: "ഉപഭോക്തൃ സഹകരണ സംഘം: ഉപഭോക്താക്കളെ ചൂഷണത്തിൽ നിന്ന് സംരക്ഷിക്കുന്നു." },
        { en: "Producer's: Helps small producers with raw materials.", ml: "ഉൽപ്പാദക സഹകരണ സംഘം: ചെറുകിട ഉൽപ്പാദകരെ സഹായിക്കുന്നു." },
        { en: "Marketing: Helps in selling products.", ml: "വിപണന സഹകരണ സംഘം: ഉൽപ്പന്നങ്ങൾ വിൽക്കാൻ സഹായിക്കുന്നു." },
        { en: "Credit: Provides easy loans.", ml: "വായ്പാ സഹകരണ സംഘം: കുറഞ്ഞ പലിശയ്ക്ക് വായ്പ നൽകുന്നു." }
      ]},

      { type: 'h2', en: '7. Quick Revision', ml: '7. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: 'Sole Proprietorship is best for small scale.', ml: 'ചെറുകിട ബിസിനസ്സുകൾക്ക് ഏകാംഗ ഉടമസ്ഥാവകാശം അനുയോജ്യമാണ്.' },
        { en: 'Partnership allows pooling of skills but has unlimited liability.', ml: 'പങ്കാളിത്തം കൂടുതൽ വിഭവങ്ങൾ നൽകുന്നുണ്ടെങ്കിലും അമിത ബാധ്യത ഒരു ദോഷമാണ്.' },
        { en: 'Companies are separate legal persons with perpetual life.', ml: 'കമ്പനികൾക്ക് നിയമപരമായ പ്രത്യേക നിലനിൽപ്പും ശാശ്വത നിലനിൽപ്പും ഉണ്ട്.' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "John Stith Pemberton", ml: "ജോൺ സ്റ്റിത്ത് പെംബർട്ടൺ (John Stith Pemberton)" }, definition: { en: "A historical pharmacist who originally invented the Coca-Cola syrup as a sole proprietor.", ml: "കൊക്കകോള സിറപ്പ് (Coca-Cola syrup) ആദ്യമായി കണ്ടുപിടിച്ച ഒരു ഫാർമസിസ്റ്റാണ് ജോൺ സ്റ്റിത്ത് പെംബർട്ടൺ (John Stith Pemberton)." } },
    { term: { en: "Asa G. Candler", ml: "ആസ ജി. കാൻഡ്‌ലർ (Asa G. Candler)" }, definition: { en: "A businessman who bought the business rights to Coca-Cola and formed it into a corporate entity.", ml: "കൊക്കകോളയുടെ (Coca-Cola) ബിസിനസ്സ് അവകാശങ്ങൾ വാങ്ങുകയും അതിനെ ഒരു കോർപ്പറേറ്റ് സ്ഥാപനമായി മാറ്റുകയും ചെയ്ത ബിസിനസ്സുകാരനാണ് ആസ ജി. കാൻഡ്‌ലർ (Asa G. Candler)." } },
    { term: { en: "Sole Proprietorship", ml: "ഏകാംഗ ഉടമസ്ഥാവകാശം (Sole Proprietorship)" }, definition: { en: "A business owned, managed, and controlled by a single individual who is the recipient of all profits and bearer of all risks.", ml: "ഒരു വ്യക്തി മാത്രം ഉടമസ്ഥത വഹിക്കുകയും നിയന്ത്രിക്കുകയും ചെയ്യുന്ന ബിസിനസ്സാണിത്. ഇതിലെ എല്ലാ ലാഭവും നഷ്ടവും ഉടമയ്ക്ക് മാത്രമുള്ളതാണ്." } },
    { term: { en: "Joint Hindu Family Business", ml: "ജോയിന്റ് ഹിന്ദു ഫാമിലി ബിസിനസ്സ് (Joint Hindu Family Business)" }, definition: { en: "A unique Indian business structure owned and carried on by members of a Hindu Undivided Family (HUF).", ml: "ഒരു ഹിന്ദു അവിഭക്ത കുടുംബത്തിലെ (HUF) അംഗങ്ങൾ ചേർന്ന് നടത്തുന്ന പ്രത്യേക തരം ഇന്ത്യൻ ബിസിനസ്സ് രീതിയാണിത്." } },
    { term: { en: "Karta", ml: "കർത്താ (Karta)" }, definition: { en: "The eldest male member of a Joint Hindu family who exercises absolute control over the business and has unlimited liability.", ml: "ജോയിന്റ് ഹിന്ദു ഫാമിലി ബിസിനസ്സ് നിയന്ത്രിക്കുന്ന ഏറ്റവും മുതിർന്ന അംഗമാണ് കർത്താ (Karta). അദ്ദേഹത്തിന് അമിത ബാധ്യത (Unlimited Liability) ഉണ്ടായിരിക്കും." } },
    { term: { en: "Co-parceners", ml: "കോ-പാർസണർമാർ (Co-parceners)" }, definition: { en: "The members of a Joint Hindu family business who acquire an equal ownership right over ancestral property by birth.", ml: "ജന്മനാ തന്നെ കുടുംബ സ്വത്തിൽ തുല്യ അവകാശം ലഭിക്കുന്ന ജോയിന്റ് ഹിന്ദു ഫാമിലി ബിസിനസ്സിലെ അംഗങ്ങളാണ് കോ-പാർസണർമാർ (Co-parceners)." } },
    { term: { en: "Partnership", ml: "പങ്കാളിത്തം (Partnership)" }, definition: { en: "The legal relation between persons who have agreed to share the profits of a lawful business carried on by all or any one of them acting for all.", ml: "എല്ലാവരും ചേർന്നോ എല്ലാവർക്കും വേണ്ടി ഒരാളോ നടത്തുന്ന ബിസിനസ്സിലെ ലാഭം പങ്കുവെക്കാമെന്ന് സമ്മതിച്ച വ്യക്തികൾ തമ്മിലുള്ള നിയമപരമായ ബന്ധമാണ് പങ്കാളിത്തം (Partnership)." } },
    { term: { en: "Mutual Agency", ml: "പരസ്പര ഏജൻസി (Mutual Agency)" }, definition: { en: "The core partnership principle where every partner is both an agent representing the firm and a principal bound by the acts of other partners.", ml: "ഓരോ പങ്കാളിയും ഒരേ സമയം സ്ഥാപനത്തിന്റെ ഏജന്റും (Agent) മറ്റ് പങ്കാളികളുടെ പ്രവൃത്തികൾക്ക് ഉത്തരവാദിയായ പ്രിൻസിപ്പലുമാണ് (Principal) എന്ന തത്വമാണ് പരസ്പര ഏജൻസി (Mutual Agency)." } },
    { term: { en: "Partner by Estoppel", ml: "എസ്റ്റോപ്പൽ പങ്കാളി (Partner by Estoppel)" }, definition: { en: "A person who, through their own conduct, gives the impression to others that they are a partner in a firm, making them liable for its debts.", ml: "തന്റെ സംസാരത്തിലൂടെയോ പ്രവൃത്തിയിലൂടെയോ താൻ ഒരു സ്ഥാപനത്തിലെ പങ്കാളിയാണെന്ന് മറ്റുള്ളവരെ വിശ്വസിപ്പിക്കുകയും അതുവഴി ആ സ്ഥാപനത്തിന്റെ കടബാധ്യതകൾക്ക് ഉത്തരവാദിയാവുകയും ചെയ്യുന്ന വ്യക്തിയാണ് എസ്റ്റോപ്പൽ പങ്കാളി (Partner by Estoppel)." } },
    { term: { en: "Partnership Deed", ml: "പങ്കാളിത്ത ആധാരം (Partnership Deed)" }, definition: { en: "A written agreement that specifies the terms, conditions, and rules governing the relationship among partners in a firm.", ml: "പങ്കാളികൾ തമ്മിലുള്ള ബന്ധവും ബിസിനസ്സ് വ്യവസ്ഥകളും വ്യക്തമാക്കുന്ന രേഖാമൂലമുള്ള കരാറാണ് പങ്കാളിത്ത ആധാരം (Partnership Deed)." } },
    { term: { en: "Cooperative Society", ml: "സഹകരണ സംഘം (Cooperative Society)" }, definition: { en: "A voluntary association of persons democratically working together to protect their economic interests against exploitative middlemen.", ml: "ചൂഷണം ചെയ്യുന്ന ഇടനിലക്കാരിൽ നിന്ന് സാമ്പത്തിക താൽപ്പര്യങ്ങൾ സംരക്ഷിക്കുന്നതിനായി ജനാധിപത്യപരമായി പ്രവർത്തിക്കുന്ന വ്യക്തികളുടെ കൂട്ടായ്മയാണ് സഹകരണ സംഘം (Cooperative Society)." } },
    { term: { en: "Joint Stock Company", ml: "ജോയിന്റ് സ്റ്റോക്ക് കമ്പനി (Joint Stock Company)" }, definition: { en: "An artificial legal person created by law, having a separate entity, perpetual succession, and a common seal.", ml: "നിയമത്താൽ നിർമ്മിക്കപ്പെട്ട ഒരു കൃത്രിമ വ്യക്തിയാണ് ജോയിന്റ് സ്റ്റോക്ക് കമ്പനി (Joint Stock Company). ഇതിന് സ്വന്തമായ നിലനിൽപ്പും ശാശ്വത നിലനിൽപ്പും (Perpetual Succession) ഒരു പൊതുമുദ്രയും (Common Seal) ഉണ്ടായിരിക്കും." } },
    { term: { en: "Perpetual Succession", ml: "ശാശ്വത നിലനിൽപ്പ് (Perpetual Succession)" }, definition: { en: "The legal concept ensuring that a company's existence continues independently of the death, insolvency, or retirement of its members.", ml: "അംഗങ്ങളുടെ മരണമോ വിരമിക്കലോ കമ്പനിയുടെ നിലനിൽപ്പിനെ ബാധിക്കില്ല എന്ന നിയമപരമായ ആശയമാണ് ശാശ്വത നിലനിൽപ്പ് (Perpetual Succession)." } }
  ],
  quiz: [],
  videos: [
    { title: "02 ബിസിനസ് സ്റ്റഡീസ് ചാപ്റ്റർ 2", url: "https://www.youtube.com/watch?v=fI7zkMZqGGQ" }
  ]
};

export const plusOneBusinessStudiesUnit3: Lesson = {
  id: "pl-bs-11-unit3",
  title: { en: "Private, Public and Global Enterprises", ml: "സ്വകാര്യ, പൊതു, ആഗോള സംരംഭങ്ങൾ" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Understand the concept of mixed economy in India", ml: "ഇന്ത്യയിലെ സമ്മിശ്ര സമ്പദ്‌വ്യവസ്ഥ എന്ന ആശയം മനസ്സിലാക്കുക" },
    { en: "Identify different forms of public sector enterprises", ml: "പൊതുമേഖലാ സ്ഥാപനങ്ങളുടെ വിവിധ രൂപങ്ങൾ തിരിച്ചറിയുക" },
    { en: "Analyze the changing role of public sector since 1991", ml: "1991 മുതൽ പൊതുമേഖലയുടെ മാറിക്കൊണ്ടിരിക്കുന്ന പങ്ക് വിശകലനം ചെയ്യുക" },
    { en: "Explain features of Global Enterprises (MNCs) and Joint Ventures", ml: "ആഗോള സംരംഭങ്ങളുടെയും (MNCs) സംയുക്ത സംരംഭങ്ങളുടെയും സവിശേഷതകൾ വിവരിക്കുക" },
    { en: "Explain the concept of Public Private Partnership (PPP)", ml: "പബ്ലിക് പ്രൈവറ്റ് പാർട്ണർഷിപ്പ് (PPP) എന്ന ആശയം വിവരിക്കുക" }
  ],
  content: {
    intro: {
      en: "This chapter explains how the Indian economy is a mixed economy comprising both private and public sectors, and explores various forms of public and global enterprises.",
      ml: "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ സ്വകാര്യ-പൊതു മേഖലകളുടെ പങ്ക്, പൊതുമേഖലാ സ്ഥാപനങ്ങൾ, ബഹുരാഷ്ട്ര കമ്പനികൾ (MNCs), സംയുക്ത സംരംഭങ്ങൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം വിശദീകരിക്കുന്നു."
    },
    core: {
      en: "Detailed study of Departmental Undertakings, Statutory Corporations, Government Companies, MNCs, Joint Ventures, and PPP.",
      ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗുകൾ, സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷനുകൾ, ഗവൺമെന്റ് കമ്പനികൾ, എം.എൻ.സികൾ (MNCs), സംയുക്ത സംരംഭങ്ങൾ, പി.പി.പി (PPP) എന്നിവയെക്കുറിച്ചുള്ള വിശദമായ പഠനം."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'The Indian economy is a mixed economy comprising both private and public sectors. This chapter details the different forms of public enterprises—departmental undertakings, statutory corporations, and government companies—and examines their features, merits, and limitations. Additionally, it evaluates the changing role of the public sector since 1991, global enterprises (MNCs), joint ventures, and Public Private Partnerships (PPP).', ml: 'ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥ സ്വകാര്യ മേഖലയും പൊതുമേഖലയും ചേർന്ന ഒരു സമ്മിശ്ര സമ്പദ്‌വ്യവസ്ഥയാണ്. ഈ അധ്യായത്തിൽ പൊതുമേഖലാ സ്ഥാപനങ്ങളുടെ വിവിധ രൂപങ്ങളായ ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗുകൾ, സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷനുകൾ, ഗവൺമെന്റ് കമ്പനികൾ എന്നിവയെക്കുറിച്ച് വിശദീകരിക്കുന്നു. കൂടാതെ 1991-ന് ശേഷമുള്ള പൊതുമേഖലയുടെ മാറ്റങ്ങൾ, ആഗോള സംരംഭങ്ങൾ (MNCs), സംയുക്ത സംരംഭങ്ങൾ, പബ്ലിക് പ്രൈവറ്റ് പാർട്ണർഷിപ്പ് (PPP) എന്നിവയും ചർച്ച ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Private Sector: Businesses owned, managed, and controlled by individuals or groups (e.g., sole proprietorships, partnerships).', ml: 'സ്വകാര്യ മേഖല (Private Sector): വ്യക്തികളുടെയോ വ്യക്തികളുടെ ഗ്രൂപ്പിന്റെയോ ഉടമസ്ഥതയിലുള്ളതും നിയന്ത്രിക്കപ്പെടുന്നതുമായ ബിസിനസ്സുകൾ (ഉദാ: ഏകാംഗ ഉടമസ്ഥാവകാശം, പങ്കാളിത്തം).' },
        { en: 'Public Sector: Organizations owned and managed partly or wholly by the central or state government.', ml: 'പൊതുമേഖല (Public Sector): കേന്ദ്ര അല്ലെങ്കിൽ സംസ്ഥാന സർക്കാരിന്റെ ഭാഗികമായോ പൂർണ്ണമായോ ഉടമസ്ഥതയിലുള്ള സ്ഥാപനങ്ങൾ.' },
        { en: 'Global Enterprises (MNCs): Gigantic corporations operating through a network of branches in several countries.', ml: 'ആഗോള സംരംഭങ്ങൾ (MNCs): പല രാജ്യങ്ങളിൽ ശാഖകളുള്ള വൻകിട കമ്പനികൾ.' },
        { en: 'Joint Venture: Pooling of resources and expertise by two or more businesses to achieve a common goal.', ml: 'സംയുക്ത സംരംഭം (Joint Venture): രണ്ടോ അതിലധികമോ ബിസിനസ്സുകൾ വിഭവങ്ങളും വൈദഗ്ധ്യവും ഒന്നിച്ച് ഉപയോഗിക്കുന്ന രീതി.' },
        { en: 'Public Private Partnership (PPP): Relationship between public (government) and private entities for infrastructure and other services.', ml: 'പബ്ലിക് പ്രൈവറ്റ് പാർട്ണർഷിപ്പ് (PPP): അടിസ്ഥാന സൗകര്യ വികസനത്തിനായി സർക്കാരും സ്വകാര്യ മേഖലയും കൈകോർക്കുന്ന രീതി.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      { type: 'h3', en: '3.1 Forms of Organising Public Sector Enterprises', ml: '3.1 പൊതുമേഖലാ സ്ഥാപനങ്ങളുടെ രൂപങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Departmental Undertaking: Established as departments of a ministry (e.g., Railways, Post and Telegraph).', ml: 'ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ്: ഒരു മന്ത്രാലയത്തിന്റെ വകുപ്പായി പ്രവർത്തിക്കുന്നു (ഉദാ: റെയിൽവേ, തപാൽ വകുപ്പ്).' },
        { en: 'Statutory Corporation: Corporate body created by a Special Act of Parliament (e.g., LIC, RBI).', ml: 'സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ: പാർലമെന്റ് പാസാക്കിയ പ്രത്യേക നിയമത്തിലൂടെ നിലവിൽ വരുന്നു (ഉദാ: എൽ.ഐ.സി (LIC), ആർ.ബി.ഐ (RBI)).' },
        { en: 'Government Company: Registered under the Companies Act where at least 51% capital is held by the government.', ml: 'ഗവൺമെന്റ് കമ്പനി: കമ്പനി നിയമപ്രകാരം രജിസ്റ്റർ ചെയ്തതും 51% എങ്കിലും ഓഹരി മൂലധനം സർക്കാരിന്റെ പക്കലുള്ളതുമായ സ്ഥാപനം.' }
      ]},

      { type: 'h3', en: '3.2 Departmental Undertakings', ml: '3.2 ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗുകൾ' },
      { type: 'ul', items: [
        { en: 'Features: Funded from Government Treasury; employees are civil servants; subject to direct ministerial control.', ml: 'സവിശേഷതകൾ: ഗവൺമെന്റ് ട്രഷറിയിൽ നിന്നുള്ള ഫണ്ട്; ജീവനക്കാർ ഗവൺമെന്റ് ഉദ്യോഗസ്ഥരാണ്; മന്ത്രാലയത്തിന്റെ നേരിട്ടുള്ള നിയന്ത്രണം.' },
        { en: 'Merits: High accountability; revenue goes to treasury; effective Parliament control.', ml: 'ഗുണങ്ങൾ: ഉയർന്ന ഉത്തരവാദിത്തം; വരുമാനം നേരിട്ട് ട്രഷറിയിലേക്ക്; പാർലമെന്റിന്റെ ഫലപ്രദമായ നിയന്ത്രണം.' },
        { en: 'Limitations: Lacks flexibility; delayed decisions; political interference.', ml: 'പരിമിതികൾ: പ്രവർത്തന സ്വാതന്ത്ര്യം കുറവാണ്; തീരുമാനമെടുക്കാൻ കാലതാമസം; രാഷ്ട്രീയ ഇടപെടലുകൾ.' }
      ]},

      { type: 'h3', en: '3.3 Statutory Corporations', ml: '3.3 സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷനുകൾ' },
      { type: 'ul', items: [
        { en: 'Features: Setup under Act of Parliament; independently financed; employees are not civil servants.', ml: 'സവിശേഷതകൾ: പാർലമെന്റ് നിയമപ്രകാരം രൂപീകരണം; സ്വതന്ത്രമായ ധനസമാഹരണം; ജീവനക്കാർ ഗവൺമെന്റ് ഉദ്യോഗസ്ഥരല്ല.' },
        { en: 'Merits: Operational flexibility; autonomous policy framing.', ml: 'ഗുണങ്ങൾ: പ്രവർത്തന സ്വാതന്ത്ര്യം; സ്വതന്ത്രമായ നയരൂപീകരണം.' },
        { en: 'Limitations: Political interference in major decisions; potential for corruption.', ml: 'പരിമിതികൾ: പ്രധാന തീരുമാനങ്ങളിൽ രാഷ്ട്രീയ ഇടപെടൽ; അഴിമതിക്കുള്ള സാധ്യത.' }
      ]},

      { type: 'h3', en: '3.4 Government Companies', ml: '3.4 ഗവൺമെന്റ് കമ്പനികൾ' },
      { type: 'ul', items: [
        { en: 'Features: Separate legal entity; funds from government and private shareholders.', ml: 'സവിശേഷതകൾ: പ്രത്യേക നിയമപരമായ നിലനിൽപ്പ്; ഗവൺമെന്റിൽ നിന്നും സ്വകാര്യ വ്യക്തികളിൽ നിന്നും മൂലധനം ശേഖരിക്കുന്നു.' },
        { en: 'Merits: Easy to establish; management autonomy.', ml: 'ഗുണങ്ങൾ: എളുപ്പത്തിൽ തുടങ്ങാം; മാനേജ്‌മെന്റിൽ സ്വയംഭരണാധികാരം.' },
        { en: 'Limitations: Evades direct responsibility to Parliament.', ml: 'പരിമിതികൾ: പാർലമെന്റിനോടുള്ള നേരിട്ടുള്ള ഉത്തരവാദിത്തം ഒഴിവാക്കപ്പെടുന്നു.' }
      ]},

      { type: 'h3', en: '3.5 Changing Role of the Public Sector', ml: '3.5 പൊതുമേഖലയുടെ മാറുന്ന പങ്ക്' },
      { type: 'ul', items: [
        { en: 'Infrastructure Development: Govt mobilized capital for heavy industries.', ml: 'അടിസ്ഥാന സൗകര്യ വികസനം: വൻകിട വ്യവസായങ്ങൾക്കായി സർക്കാർ മൂലധനം മുടക്കി.' },
        { en: 'Regional Balance: PSUs setup in backward areas to remove disparities.', ml: 'പ്രാദേശിക സന്തുലിതാവസ്ഥ: പിന്നോക്ക മേഖലകളിൽ വ്യവസായങ്ങൾ തുടങ്ങിക്കൊണ്ട് വികസനം എത്തിച്ചു.' },
        { en: '1991 Policy Reforms: Disinvestment and restructuring of PSUs. Reserved industries reduced to 3 (Atomic energy, Arms, Rail transport).', ml: '1991-ലെ പരിഷ്കാരങ്ങൾ: പൊതുമേഖലാ സ്ഥാപനങ്ങളുടെ ഓഹരി വിറ്റഴിക്കലും (Disinvestment) പുനഃസംഘടനയും. സർക്കാർ മേഖലയ്ക്കായി സംവരണം ചെയ്ത വ്യവസായങ്ങൾ 3 ആയി കുറച്ചു (ആറ്റോമിക് എനർജി, ആയുധങ്ങൾ, റെയിൽ ഗതാഗതം).' }
      ]},

      { type: 'h2', en: '4. Tables for Easy Learning', ml: '4. പഠിക്കാൻ എളുപ്പത്തിനുള്ള പട്ടികകൾ' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം'}, {en: 'Meaning', ml: 'അർത്ഥം'}],
        rows: [
          [{en: 'Disinvestment', ml: 'ഓഹരി വിറ്റഴിക്കൽ'}, {en: 'Sale of equity shares of PSUs to the private sector and public.', ml: 'പൊതുമേഖലാ സ്ഥാപനങ്ങളുടെ ഓഹരികൾ സ്വകാര്യ മേഖലയ്ക്കും പൊതുജനങ്ങൾക്കും വിൽക്കുന്നത്.'}],
          [{en: 'BIFR', ml: 'ബി.ഐ.എഫ്.ആർ (BIFR)'}, {en: 'Board for Industrial and Financial Reconstruction; decides PSU revival or closure.', ml: 'നഷ്ടത്തിലായ പൊതുമേഖലാ സ്ഥാപനങ്ങൾ പുനരുദ്ധരിക്കണോ അതോ പൂട്ടണോ എന്ന് തീരുമാനിക്കുന്ന ബോർഡ്.'}],
          [{en: 'MoU', ml: 'എം.ഒ.യു (MoU)'}, {en: 'Memorandum of Understanding for PSU autonomy and accountability.', ml: 'സ്വയംഭരണാധികാരവും ഉത്തരവാദിത്തവും ഉറപ്പാക്കുന്നതിനായി ഒപ്പിടുന്ന ധാരണാപത്രം.'}]
        ]
      }},

      { type: 'h3', en: 'Comparison of Forms of Public Enterprises', ml: 'പൊതുമേഖലാ സ്ഥാപനങ്ങളുടെ താരതമ്യം' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Dept. Undertaking', ml: 'ഡിപ്പാർട്ട്‌മെന്റൽ'}, {en: 'Statutory Corp.', ml: 'സ്റ്റാറ്റ്യൂട്ടറി'}, {en: 'Govt. Company', ml: 'ഗവ. കമ്പനി'}],
        rows: [
          [{en: 'Formation', ml: 'രൂപീകരണം'}, {en: 'Ministry', ml: 'മന്ത്രാലയം'}, {en: 'Special Act', ml: 'പ്രത്യേക നിയമം'}, {en: 'Companies Act', ml: 'കമ്പനി നിയമം'}],
          [{en: 'Legal Status', ml: 'നിയമപരമായ പദവി'}, {en: 'No separate entity', ml: 'പ്രത്യേക പദവിയില്ല'}, {en: 'Separate body', ml: 'പ്രത്യേക പദവിയുണ്ട്'}, {en: 'Separate entity', ml: 'പ്രത്യേക പദവിയുണ്ട്'}],
          [{en: 'Funding', ml: 'ധനസമാഹരണം'}, {en: 'Treasury', ml: 'ട്രഷറി'}, {en: 'Indep. / Loans', ml: 'സ്വതന്ത്രം'}, {en: 'Govt. / Market', ml: 'സർക്കാർ/വിപണി'}],
          [{en: 'Employees', ml: 'ജീവനക്കാർ'}, {en: 'Civil Servants', ml: 'ഗവ. ഉദ്യോഗസ്ഥർ'}, {en: 'Non-Civil Servants', ml: 'ഗവ. ഉദ്യോഗസ്ഥരല്ല'}, {en: 'Own rules', ml: 'സ്വന്തം നിയമം'}]
        ]
      }},

      { type: 'h2', en: '5. Extract and Highlight', ml: '5. എടുത്തു പറയേണ്ട കാര്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Government Company Criterion: Government Stake >= 51% of Paid-up Capital.', ml: 'ഗവൺമെന്റ് കമ്പനി മാനദണ്ഡം: 51% എങ്കിലും ഓഹരി മൂലധനം സർക്കാരിന്റെ പക്കൽ ഉണ്ടായിരിക്കണം.' },
        { en: 'Strategic Sectors: Atomic energy, arms, and rail transport are reserved for the public sector.', ml: 'തന്ത്രപ്രധാന മേഖലകൾ: ആറ്റോമിക് എനർജി, ആയുധങ്ങൾ, റെയിൽ ഗതാഗതം എന്നിവ പൊതുമേഖലയ്ക്കായി സംവരണം ചെയ്തിരിക്കുന്നു.' },
        { en: 'PPP Model: Combines government social responsibility with private operational expertise.', ml: 'പി.പി.പി (PPP) മോഡൽ: സർക്കാരിന്റെ സാമൂഹിക ഉത്തരവാദിത്തവും സ്വകാര്യ മേഖലയുടെ പ്രവർത്തന മികവും ഒന്നിപ്പിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '6. Quick Revision', ml: '6. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: 'Economy consists of private and public sectors (Mixed Economy).', ml: 'സമ്പദ്‌വ്യവസ്ഥയിൽ സ്വകാര്യ-പൊതു മേഖലകൾ ഉൾപ്പെടുന്നു (സമ്മിശ്ര സമ്പദ്‌വ്യവസ്ഥ).' },
        { en: 'Public enterprises: Departmental Undertakings, Statutory Corporations, Government Companies.', ml: 'പൊതുമേഖലാ സ്ഥാപനങ്ങൾ: ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗുകൾ, സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷനുകൾ, ഗവൺമെന്റ് കമ്പനികൾ.' },
        { en: 'Post-1991: Focus shifted towards disinvestment and privatization.', ml: '1991-ന് ശേഷം: ഓഹരി വിറ്റഴിക്കലിലേക്കും സ്വകാര്യവൽക്കരണത്തിലേക്കും ശ്രദ്ധ മാറി.' },
        { en: 'MNCs, Joint Ventures, and PPPs drive global integration.', ml: 'എം.എൻ.സികൾ, സംയുക്ത സംരംഭങ്ങൾ, പി.പി.പികൾ എന്നിവ ആഗോള ഏകീകരണത്തിന് സഹായിക്കുന്നു.' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "Private Sector", ml: "സ്വകാര്യ മേഖല (Private Sector)" }, definition: { en: "The sector of the economy consisting of businesses owned, managed, and controlled by individuals or groups of individuals.", ml: "വ്യക്തികളുടെയോ വ്യക്തികളുടെ ഗ്രൂപ്പിന്റെയോ ഉടമസ്ഥതയിലുള്ളതും നിയന്ത്രിക്കപ്പെടുന്നതുമായ ബിസിനസ്സുകൾ ഉൾപ്പെടുന്ന സമ്പദ്‌വ്യവസ്ഥയിലെ വിഭാഗമാണ് സ്വകാര്യ മേഖല (Private Sector)." } },
    { term: { en: "Public Sector", ml: "പൊതുമേഖല (Public Sector)" }, definition: { en: "The sector of the economy consisting of various organizations owned and managed partly or wholly by the central or state government.", ml: "കേന്ദ്ര അല്ലെങ്കിൽ സംസ്ഥാന സർക്കാരിന്റെ ഭാഗികമായോ പൂർണ്ണമായോ ഉടമസ്ഥതയിലുള്ള വിവിധ സ്ഥാപനങ്ങൾ ഉൾപ്പെടുന്ന സമ്പദ്‌വ്യവസ്ഥയിലെ വിഭാഗമാണ് പൊതുമേഖല (Public Sector)." } },
    { term: { en: "Departmental Undertakings", ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗുകൾ (Departmental Undertakings)" }, definition: { en: "The oldest form of public enterprise, established and financed as an extension or department of a government ministry.", ml: "ഒരു ഗവൺമെന്റ് മന്ത്രാലയത്തിന്റെ വകുപ്പായി സ്ഥാപിതമാവുകയും പ്രവർത്തിക്കുകയും ചെയ്യുന്ന ഏറ്റവും പഴയ രീതിയിലുള്ള പൊതുമേഖലാ സ്ഥാപനമാണ് ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗുകൾ (Departmental Undertakings)." } },
    { term: { en: "Statutory Corporations", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷനുകൾ (Statutory Corporations)" }, definition: { en: "Public enterprises brought into existence by a Special Act of Parliament that defines their powers, functions, and financial independence.", ml: "പാർലമെന്റ് പാസാക്കിയ പ്രത്യേക നിയമത്തിലൂടെ (Special Act of Parliament) നിലവിൽ വരുന്നതും സ്വന്തമായ അധികാരങ്ങളും സാമ്പത്തിക സ്വാതന്ത്ര്യവുമുള്ള പൊതുമേഖലാ സ്ഥാപനങ്ങളാണ് സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷനുകൾ (Statutory Corporations)." } },
    { term: { en: "Government Company", ml: "ഗവൺമെന്റ് കമ്പനി (Government Company)" }, definition: { en: "A company registered under the Companies Act in which the government holds not less than 51 per cent of the paid-up share capital.", ml: "കമ്പനി നിയമപ്രകാരം (Companies Act) രജിസ്റ്റർ ചെയ്തതും 51% എങ്കിലും ഓഹരി മൂലധനം സർക്കാരിന്റെ പക്കലുള്ളതുമായ സ്ഥാപനമാണ് ഗവൺമെന്റ് കമ്പനി (Government Company)." } },
    { term: { en: "Disinvestment", ml: "ഓഹരി വിറ്റഴിക്കൽ (Disinvestment)" }, definition: { en: "The government policy of selling its equity shares in public sector enterprises to the private sector and the general public.", ml: "പൊതുമേഖലാ സ്ഥാപനങ്ങളിലെ ഗവൺമെന്റ് ഓഹരികൾ സ്വകാര്യ മേഖലയ്ക്കോ പൊതുജനങ്ങൾക്കോ വിൽക്കുന്ന സർക്കാർ നയമാണ് ഓഹരി വിറ്റഴിക്കൽ (Disinvestment)." } },
    { term: { en: "Global Enterprises (MNCs)", ml: "ആഗോള സംരംഭങ്ങൾ (Global Enterprises/MNCs)" }, definition: { en: "Gigantic industrial organizations that extend their operations, advanced technology, and marketing through a network of branches in several countries.", ml: "പല രാജ്യങ്ങളിൽ ശാഖകളുള്ളതും അത്യാധുനിക സാങ്കേതിക വിദ്യയും വിപണന രീതികളും ഉപയോഗിക്കുന്നതുമായ വൻകിട കമ്പനികളാണ് ആഗോള സംരംഭങ്ങൾ (Global Enterprises) അഥവാ ബഹുരാഷ്ട്ര കമ്പനികൾ (MNCs)." } },
    { term: { en: "Joint Venture", ml: "സംയുക്ത സംരംഭം (Joint Venture)" }, definition: { en: "A business arrangement where two or more independent firms pool their resources and expertise to achieve a common goal and share the risks.", ml: "രണ്ടോ അതിലധികമോ സ്വതന്ത്ര സ്ഥാപനങ്ങൾ ഒരു പൊതു ലക്ഷ്യത്തിനായി വിഭവങ്ങളും വൈദഗ്ധ്യവും പങ്കിട്ടുകൊണ്ട് തുടങ്ങുന്ന ബിസിനസ്സ് രീതിയാണ് സംയുക്ത സംരംഭം (Joint Venture)." } },
    { term: { en: "Public Private Partnership (PPP)", ml: "പബ്ലിക് പ്രൈവറ്റ് പാർട്ണർഷിപ്പ് (Public Private Partnership/PPP)" }, definition: { en: "A collaborative model between public government entities and private businesses to optimally allocate tasks and risks for infrastructure projects.", ml: "അടിസ്ഥാന സൗകര്യ വികസന പദ്ധതികൾക്കായി സർക്കാരും സ്വകാര്യ മേഖലയും കൈകോർക്കുന്ന വികസന മാതൃകയാണ് പബ്ലിക് പ്രൈവറ്റ് പാർട്ണർഷിപ്പ് (PPP)." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "The Indian economy is a ____ economy.", ml: "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥ ഒരു ____ സമ്പദ്‌വ്യവസ്ഥയാണ്." },
      options: [
        { k: "A", text: { en: "Capitalist", ml: "മുതലാളിത്ത" } },
        { k: "B", text: { en: "Socialist", ml: "സോഷ്യലിസ്റ്റ്" } },
        { k: "C", text: { en: "Mixed", ml: "സമ്മിശ്ര (Mixed)" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "India follows a mixed economy model where both private and public sectors coexist.", ml: "സ്വകാര്യ മേഖലയും പൊതുമേഖലയും ഒത്തുപോകുന്നതിനാൽ ഇന്ത്യയെ സമ്മിശ്ര സമ്പദ്‌വ്യവസ്ഥ എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "Which form of public enterprise is established as a part of a ministry?", ml: "ഒരു മന്ത്രാലയത്തിന്റെ ഭാഗമായി സ്ഥാപിക്കപ്പെടുന്ന പൊതുമേഖലാ സ്ഥാപനം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Government Company", ml: "ഗവൺമെന്റ് കമ്പനി" } },
        { k: "B", text: { en: "Statutory Corporation", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ" } },
        { k: "C", text: { en: "Departmental Undertaking", ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ്" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Departmental undertakings are part of the ministry (e.g., Railways).", ml: "റെയിൽവേ പോലുള്ള മന്ത്രാലയത്തിന്റെ വകുപ്പായി പ്രവർത്തിക്കുന്നവയാണ് ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗുകൾ." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "Indian Railways is an example of which form of public enterprise?", ml: "ഇന്ത്യൻ റെയിൽവേ ഏത് തരം പൊതുമേഖലാ സ്ഥാപനത്തിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Statutory Corporation", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ" } },
        { k: "B", text: { en: "Departmental Undertaking", ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ്" } },
        { k: "C", text: { en: "Government Company", ml: "ഗവൺമെന്റ് കമ്പനി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Railways are directly managed as a government department.", ml: "റെയിൽവേ ഗവൺമെന്റ് നേരിട്ട് നടത്തുന്ന ഒരു വകുപ്പായതിനാൽ ഇത് ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ് ആണ്." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "A statutory corporation is brought into existence by?", ml: "ഒരു സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ നിലവിൽ വരുന്നത് ഏതിലൂടെയാണ്?" },
      options: [
        { k: "A", text: { en: "Companies Act", ml: "കമ്പനി നിയമം" } },
        { k: "B", text: { en: "Partnership Deed", ml: "പങ്കാളിത്ത കരാർ" } },
        { k: "C", text: { en: "Special Act of Parliament", ml: "പാർലമെന്റിന്റെ പ്രത്യേക നിയമം" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "They are created by a specific law passed by the Parliament (e.g., RBI Act).", ml: "പാർലമെന്റ് പാസാക്കുന്ന പ്രത്യേക നിയമത്തിലൂടെയാണ് ഇത്തരം സ്ഥാപനങ്ങൾ രൂപീകരിക്കുന്നത്." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "What is the minimum percentage of paid-up capital the government must hold in a Government Company?", ml: "ഒരു ഗവൺമെന്റ് കമ്പനിയിൽ സർക്കാരിന് കുറഞ്ഞത് എത്ര ശതമാനം ഓഹരി ഉണ്ടായിരിക്കണം?" },
      options: [
        { k: "A", text: { en: "25%", ml: "25%" } },
        { k: "B", text: { en: "50%", ml: "50%" } },
        { k: "C", text: { en: "51%", ml: "51%" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "A company is a government company if the government holds at least 51% of its capital.", ml: "കുറഞ്ഞത് 51 ശതമാനം ഓഹരി സർക്കാരിന്റെ പക്കലുണ്ടെങ്കിൽ മാത്രമേ അതിനെ ഗവൺമെന്റ് കമ്പനി എന്ന് വിളിക്കൂ." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "Which form of enterprise is registered under the Companies Act, 2013?", ml: "2013-ലെ കമ്പനി നിയമപ്രകാരം രജിസ്റ്റർ ചെയ്യുന്ന പൊതുമേഖലാ സ്ഥാപനം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Departmental Undertaking", ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ്" } },
        { k: "B", text: { en: "Government Company", ml: "ഗവൺമെന്റ് കമ്പനി" } },
        { k: "C", text: { en: "Statutory Corporation", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Government companies follow the same registration rules as private companies.", ml: "സാധാരണ കമ്പനികളെപ്പോലെ കമ്പനി നിയമപ്രകാരം രജിസ്റ്റർ ചെയ്യുന്നവയാണ് ഗവൺമെന്റ് കമ്പനികൾ." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "Life Insurance Corporation (LIC) is an example of?", ml: "ലൈഫ് ഇൻഷുറൻസ് കോർപ്പറേഷൻ (LIC) ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Statutory Corporation", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ" } },
        { k: "B", text: { en: "Departmental Undertaking", ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "LIC was established under the LIC Act passed by the Parliament.", ml: "പാർലമെന്റ് പാസാക്കിയ എൽ.ഐ.സി (LIC) ആക്ട് പ്രകാരമാണ് ഇത് നിലവിൽ വന്നത്." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "Employees of which enterprise are considered government civil servants?", ml: "ഏത് സ്ഥാപനത്തിലെ ജീവനക്കാരാണ് ഗവൺമെന്റ് ഉദ്യോഗസ്ഥരായി (Civil servants) പരിഗണിക്കപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Statutory Corporation", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ" } },
        { k: "B", text: { en: "Departmental Undertaking", ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ്" } },
        { k: "C", text: { en: "Government Company", ml: "ഗവൺമെന്റ് കമ്പനി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Since they are part of the ministry, their employees are government servants.", ml: "മന്ത്രാലയത്തിന്റെ വകുപ്പായതിനാൽ ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗിലെ ജീവനക്കാർ ഗവൺമെന്റ് ഉദ്യോഗസ്ഥരാണ്." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "What is meant by disinvestment?", ml: "ഓഹരി വിറ്റഴിക്കൽ (Disinvestment) എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Buying shares of private companies", ml: "സ്വകാര്യ കമ്പനികളുടെ ഓഹരികൾ വാങ്ങുക" } },
        { k: "B", text: { en: "Selling govt. equity in PSUs to the private sector", ml: "പൊതുമേഖലാ സ്ഥാപനങ്ങളിലെ ഗവ. ഓഹരികൾ സ്വകാര്യ മേഖലയ്ക്ക് വിൽക്കുക" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Disinvestment refers to the sale of government shares in public sector units.", ml: "പൊതുമേഖലാ സ്ഥാപനങ്ങളിലെ സർക്കാരിന്റെ വിഹിതം സ്വകാര്യ വ്യക്തികൾക്കോ കമ്പനികൾക്കോ വിൽക്കുന്നതിനെയാണ് ഡിസിൻവെസ്റ്റ്‌മെന്റ് എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "How many industries are currently reserved for the public sector?", ml: "നിലവിൽ എത്ര വ്യവസായങ്ങളാണ് പൊതുമേഖലയ്ക്കായി സംവരണം ചെയ്തിരിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "17", ml: "17" } },
        { k: "B", text: { en: "8", ml: "8" } },
        { k: "C", text: { en: "3", ml: "3" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Only atomic energy, arms, and rail transport are reserved.", ml: "ആറ്റോമിക് എനർജി, ആയുധങ്ങൾ, റെയിൽ ഗതാഗതം എന്നീ മൂന്ന് മേഖലകൾ മാത്രമാണ് ഇപ്പോൾ സർക്കാരിനായി മാറ്റിവെച്ചിട്ടുള്ളത്." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "MNCs stand for?", ml: "എം.എൻ.സി (MNC) എന്നാൽ?" },
      options: [
        { k: "A", text: { en: "Multi-National Corporations", ml: "Multi-National Corporations" } },
        { k: "B", text: { en: "Mixed National Companies", ml: "Mixed National Companies" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Multi-National Corporations operate in several countries.", ml: "പല രാജ്യങ്ങളിൽ ശാഖകളുള്ള വൻകിട കമ്പനികളാണ് എം.എൻ.സികൾ (MNCs)." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "A business arrangement where two or more firms work together is?", ml: "രണ്ടോ അതിലധികമോ സ്ഥാപനങ്ങൾ ഒന്നിച്ച് പ്രവർത്തിക്കുന്ന രീതി?" },
      options: [
        { k: "A", text: { en: "Sole Proprietorship", ml: "ഏകാംഗ ഉടമസ്ഥാവകാശം" } },
        { k: "B", text: { en: "Joint Venture", ml: "സംയുക്ത സംരംഭം (Joint Venture)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "In a joint venture, companies pool resources for mutual benefit.", ml: "വിഭവങ്ങൾ പങ്കിട്ടുകൊണ്ട് പുതിയൊരു സംരംഭം തുടങ്ങുന്നതിനെയാണ് സംയുക്ത സംരംഭം എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "Which model combines public social responsibility with private efficiency?", ml: "സർക്കാരിന്റെ സാമൂഹിക കടമയും സ്വകാര്യ മേഖലയുടെ മികവും ഒന്നിപ്പിക്കുന്ന രീതി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "MNC", ml: "MNC" } },
        { k: "B", text: { en: "PPP", ml: "പി.പി.പി (PPP)" } },
        { k: "C", text: { en: "PSU", ml: "PSU" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Public-Private Partnership (PPP) is used for infrastructure development.", ml: "അടിസ്ഥാന സൗകര്യ വികസനത്തിന് സർക്കാരും സ്വകാര്യ മേഖലയും ഒന്നിക്കുന്നതാണ് പി.പി.പി." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "The Board for Industrial and Financial Reconstruction (BIFR) is for?", ml: "BIFR എന്ന ബോർഡ് എന്തിനാണ് രൂപീകരിച്ചത്?" },
      options: [
        { k: "A", text: { en: "Starting new businesses", ml: "പുതിയ ബിസിനസ്സുകൾ തുടങ്ങാൻ" } },
        { k: "B", text: { en: "Deciding revival or closure of sick PSUs", ml: "നഷ്ടത്തിലുള്ള പൊതുമേഖലാ സ്ഥാപനങ്ങളെ പുനരുദ്ധരിക്കാനോ നിർത്താനോ തീരുമാനിക്കാൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "BIFR reviews loss-making public enterprises.", ml: "നഷ്ടത്തിൽ പ്രവർത്തിക്കുന്ന പൊതുമേഖലാ സ്ഥാപനങ്ങളുടെ ഭാവി തീരുമാനിക്കുന്നത് ബി.ഐ.എഫ്.ആർ ആണ്." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "Which form has the highest degree of Parliament control?", ml: "പാർലമെന്റിന് ഏറ്റവും കൂടുതൽ നിയന്ത്രണമുള്ള പൊതുമേഖലാ സ്ഥാപനം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Government Company", ml: "ഗവൺമെന്റ് കമ്പനി" } },
        { k: "B", text: { en: "Statutory Corporation", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ" } },
        { k: "C", text: { en: "Departmental Undertaking", ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ്" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Being part of the ministry, they are directly answerable to Parliament.", ml: "മന്ത്രാലയത്തിന്റെ വകുപ്പായതിനാൽ ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗുകൾക്ക് പാർലമെന്റിനോട് നേരിട്ട് ഉത്തരവാദിത്തമുണ്ട്." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "Global enterprises are also known as?", ml: "ആഗോള സംരംഭങ്ങളെ മറ്റേത് പേരിൽ അറിയപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Partnerships", ml: "പങ്കാളിത്തം" } },
        { k: "B", text: { en: "MNCs", ml: "എം.എൻ.സികൾ (MNCs)" } },
        { k: "C", text: { en: "Sole traders", ml: "ഏകാംഗ ബിസിനസ്സ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Global enterprises are commonly called Multi-National Corporations.", ml: "പല രാജ്യങ്ങളിൽ പ്രവർത്തനങ്ങളുള്ളതിനാലാണ് ഇവയെ ബഹുരാഷ്ട്ര കമ്പനികൾ (MNCs) എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "Which year marked a major shift in India's industrial policy?", ml: "ഇന്ത്യയുടെ വ്യവസായ നയത്തിൽ വലിയ മാറ്റമുണ്ടായ വർഷം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "1947", ml: "1947" } },
        { k: "B", text: { en: "1991", ml: "1991" } },
        { k: "C", text: { en: "2014", ml: "2014" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The 1991 Industrial Policy introduced liberalization and privatization.", ml: "1991-ലെ പുതിയ സാമ്പത്തിക നയമാണ് ഇന്ത്യയിലെ പൊതുമേഖലയിൽ വലിയ മാറ്റങ്ങൾ വരുത്തിയത്." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "A Memorandum of Understanding (MoU) system was introduced to?", ml: "ധാരണാപത്രം (MoU) സമ്പ്രദായം എന്തിനാണ് കൊണ്ടുവന്നത്?" },
      options: [
        { k: "A", text: { en: "Grant PSUs operational autonomy", ml: "പൊതുമേഖലാ സ്ഥാപനങ്ങൾക്ക് പ്രവർത്തന സ്വാതന്ത്ര്യം നൽകാൻ" } },
        { k: "B", text: { en: "Close PSUs", ml: "സ്ഥാപനങ്ങൾ പൂട്ടാൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "MoUs exchange accountability for autonomy in results.", ml: "കൃത്യമായ ലക്ഷ്യങ്ങൾ നൽകിക്കൊണ്ട് സ്ഥാപനങ്ങൾക്ക് കൂടുതൽ സ്വാതന്ത്ര്യം നൽകാനാണ് എം.ഒ.യു ഉപയോഗിക്കുന്നത്." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "Which form of enterprise can borrow money from the public?", ml: "പൊതുജനങ്ങളിൽ നിന്ന് പണം കടമെടുക്കാൻ അധികാരമുള്ള പൊതുമേഖലാ സ്ഥാപനം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Statutory Corporation", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ" } },
        { k: "B", text: { en: "Departmental Undertaking", ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Statutory corporations are independently financed and can borrow from public.", ml: "സ്വതന്ത്രമായ ധനകാര്യ അധികാരമുള്ളതിനാൽ സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷനുകൾക്ക് പൊതുജനങ്ങളിൽ നിന്ന് പണം സമാഹരിക്കാം." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "Host country refers to?", ml: "'ഹോസ്റ്റ് കൺട്രി' (Host country) എന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "The home country of an MNC", ml: "MNC-യുടെ സ്വന്തം രാജ്യം" } },
        { k: "B", text: { en: "The country where an MNC sets up branches", ml: "MNC ശാഖകൾ തുടങ്ങുന്ന രാജ്യം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "An MNC is headquartered in one country and has branches in host countries.", ml: "ഒരു വിദേശ കമ്പനി ബിസിനസ്സ് നടത്തുന്ന മറ്റ് രാജ്യങ്ങളെയാണ് ഹോസ്റ്റ് കൺട്രി എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "Which form lacks flexibility due to ministerial control?", ml: "മന്ത്രാലയത്തിന്റെ നിയന്ത്രണം കാരണം പ്രവർത്തന സ്വാതന്ത്ര്യം കുറഞ്ഞ വിഭാഗം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Departmental Undertaking", ml: "ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗ്" } },
        { k: "B", text: { en: "Statutory Corporation", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Direct control by the ministry restricts their quick decisions.", ml: "മന്ത്രാലയത്തിന്റെ ഭാഗമായതിനാൽ ഡിപ്പാർട്ട്‌മെന്റൽ അണ്ടർടേക്കിംഗുകൾക്ക് തീരുമാനങ്ങളെടുക്കാൻ സ്വാതന്ത്ര്യം കുറവാണ്." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "MoFA stands for?", ml: "MOFA എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Majority Owned Foreign Affiliates", ml: "Majority Owned Foreign Affiliates" } },
        { k: "B", text: { en: "Main Office of Foreign Affairs", ml: "Main Office of Foreign Affairs" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "MOFA are branches or subsidiaries of MNCs in foreign nations.", ml: "വിദേശ രാജ്യങ്ങളിലുള്ള ആഗോള കമ്പനികളുടെ ശാഖകളെയാണ് ഇങ്ങനെ വിളിക്കുന്നത്." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "Public sector was highly prioritized in which plans?", ml: "ഏത് പദ്ധതികളിലാണ് പൊതുമേഖലയ്ക്ക് കൂടുതൽ പ്രാധാന്യം നൽകിയത്?" },
      options: [
        { k: "A", text: { en: "Early Five Year Plans", ml: "ആദ്യകാല പഞ്ചവത്സര പദ്ധതികൾ" } },
        { k: "B", text: { en: "Plans after 2014", ml: "2014-ന് ശേഷമുള്ള പദ്ധതികൾ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The initial focus was on state-led development through heavy industries.", ml: "ഇന്ത്യയുടെ ആദ്യകാല വികസനത്തിൽ പൊതുമേഖലാ സ്ഥാപനങ്ങൾക്കാണ് മുൻതൂക്കം നൽകിയിരുന്നത്." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "Atomic energy is an industry reserved for?", ml: "ആറ്റോമിക് എനർജി ഏത് മേഖലയ്ക്കായി സംവരണം ചെയ്തിരിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Private sector", ml: "സ്വകാര്യ മേഖല" } },
        { k: "B", text: { en: "Public sector", ml: "പൊതുമേഖല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Atomic energy is a strategic sector reserved for the government.", ml: "തന്ത്രപ്രധാനമായ മേഖലയായതിനാൽ ആറ്റോമിക് എനർജി സർക്കാരിന്റെ കീഴിലാണ്." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "What is a contractual joint venture?", ml: "കരാർ അധിഷ്ഠിത സംയുക്ത സംരംഭം (CJV) എന്നാൽ?" },
      options: [
        { k: "A", text: { en: "Creating a new jointly owned legal entity", ml: "പുതിയൊരു സ്ഥാപനം രൂപീകരിക്കുന്നു" } },
        { k: "B", text: { en: "Working together without creating a new entity", ml: "പുതിയൊരു സ്ഥാപനം തുടങ്ങാതെ ഒന്നിച്ച് പ്രവർത്തിക്കുന്നു" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Contractual Joint Venture is just an agreement to cooperate.", ml: "പുതിയൊരു നിയമപരമായ സ്ഥാപനം തുടങ്ങാതെ കരാർ വഴി ജോലികൾ പങ്കിടുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "Economies of scale refers to?", ml: "'ഇക്കണോമീസ് ഓഫ് സ്കെയിൽ' (Economies of scale) എന്നാൽ?" },
      options: [
        { k: "A", text: { en: "Lower costs due to large scale production", ml: "വൻകിട ഉൽപ്പാദനം വഴി ചെലവ് കുറയുന്നു" } },
        { k: "B", text: { en: "Higher taxes", ml: "കൂടിയ നികുതി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Large scale units can reduce per-unit production cost.", ml: "കൂടുതൽ സാധനങ്ങൾ നിർമ്മിക്കുന്നതിലൂടെ ഓരോ സാധനത്തിന്റെയും ചെലവ് കുറയ്ക്കാൻ സാധിക്കും." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "PSUs are audited by?", ml: "പൊതുമേഖലാ സ്ഥാപനങ്ങളുടെ ഓഡിറ്റിംഗ് നടത്തുന്നത്?" },
      options: [
        { k: "A", text: { en: "Private auditors", ml: "സ്വകാര്യ ഓഡിറ്റർമാർ" } },
        { k: "B", text: { en: "Government auditors/CAG", ml: "ഗവൺമെന്റ് ഓഡിറ്റർമാർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Public enterprises are subject to government accounting and audit rules.", ml: "സർക്കാർ ഫണ്ട് ഉപയോഗിക്കുന്നതിനാൽ ഇവയുടെ കണക്കുകൾ സർക്കാർ ഉദ്യോഗസ്ഥർ തന്നെ പരിശോധിക്കണം." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "Which entry mode helps in accessing advanced technology easily?", ml: "ആധുനിക സാങ്കേതികവിദ്യ എളുപ്പത്തിൽ ലഭ്യമാക്കാൻ സഹായിക്കുന്ന രീതി?" },
      options: [
        { k: "A", text: { en: "Sole trade", ml: "ഏകാംഗ ബിസിനസ്സ്" } },
        { k: "B", text: { en: "Joint Venture with foreign firms", ml: "വിദേശ കമ്പനികളുമായുള്ള സംയുക്ത സംരംഭം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Joining with global firms gives access to their tech and skills.", ml: "വിദേശ കമ്പനികളുമായി സഹകരിക്കുന്നത് അവരുടെ സാങ്കേതിക വിദ്യ ഇന്ത്യയിൽ എത്തിക്കാൻ സഹായിക്കും." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "Government equity in non-strategic PSUs was aimed to be reduced to?", ml: "തന്ത്രപ്രധാനമല്ലാത്ത PSUs-കളിലെ ഗവൺമെന്റ് ഓഹരി എത്രയാക്കി കുറയ്ക്കാനാണ് തീരുമാനിച്ചത്?" },
      options: [
        { k: "A", text: { en: "26% or lower", ml: "26% അല്ലെങ്കിൽ താഴെ" } },
        { k: "B", text: { en: "51%", ml: "51%" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Post-1991, the goal was to privatize non-strategic units.", ml: "1991-ലെ നയപ്രകാരം പ്രധാനമല്ലാത്ത സ്ഥാപനങ്ങളിൽ സർക്കാരിന്റെ പങ്ക് 26 ശതമാനമായി കുറയ്ക്കാൻ തീരുമാനിച്ചു." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "MNCs have centralized control from which country?", ml: "ബഹുരാഷ്ട്ര കമ്പനികളുടെ പ്രധാന നിയന്ത്രണം ഏത് രാജ്യത്ത് നിന്നാണ്?" },
      options: [
        { k: "A", text: { en: "Host country", ml: "ഹോസ്റ്റ് രാജ്യം" } },
        { k: "B", text: { en: "Parent/Home country", ml: "മാതൃരാജ്യം (Home country)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The main headquarters in the home country controls all global branches.", ml: "കമ്പനിയുടെ ആസ്ഥാനം എവിടെയാണോ അവിടെ നിന്നാണ് ലോകത്തെ എല്ലാ ശാഖകളെയും നിയന്ത്രിക്കുന്നത്." }
    }
  ],
  videos: [
    { title: "03 സ്വകാര്യ, പൊതു, ആഗോള സംരംഭങ്ങൾ", url: "https://www.youtube.com/watch?v=YgIFEJWfXqY" }
  ]
};

export const plusOneBusinessStudiesUnit4: Lesson = {
  id: "pl-bs-11-unit4",
  title: { en: "Business Services", ml: "ബിസിനസ്സ് സേവനങ്ങൾ" },
  estimated_time_mins: 120,
  learning_objectives: [
    { en: "Distinguish between goods and services", ml: "സാധനങ്ങളും സേവനങ്ങളും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയുക" },
    { en: "Understand the five basic features of services (5 'I's)", ml: "സേവനങ്ങളുടെ അഞ്ച് അടിസ്ഥാന സവിശേഷതകൾ (5 'I's) മനസ്സിലാക്കുക" },
    { en: "Identify different types of business services", ml: "വിവിധ തരത്തിലുള്ള ബിസിനസ്സ് സേവനങ്ങളെ തിരിച്ചറിയുക" },
    { en: "Explain the functions of commercial banks and the importance of e-banking", ml: "വാണിജ്യ ബാങ്കുകളുടെ ധർമ്മങ്ങളും ഇ-ബാങ്കിംഗിന്റെ പ്രാധാന്യവും വിവരിക്കുക" },
    { en: "Understand the principles and types of insurance", ml: "ഇൻഷുറൻസിന്റെ തത്വങ്ങളും തരങ്ങളും മനസ്സിലാക്കുക" },
    { en: "Explain communication and warehousing services", ml: "വാർത്താവിനിമയം, വെയർഹൗസിംഗ് സേവനങ്ങൾ എന്നിവ വിശദീകരിക്കുക" }
  ],
  content: {
    intro: {
      en: "This chapter explores the essential services that facilitate the smooth functioning of business activities. It distinguishes services from physical goods and classifies various types of business services.",
      ml: "ബിസിനസ്സ് പ്രവർത്തനങ്ങൾ സുഗമമാക്കാൻ സഹായിക്കുന്ന അത്യാവശ്യ സേവനങ്ങളെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു. സാധനങ്ങളും സേവനങ്ങളും തമ്മിലുള്ള വ്യത്യാസവും വിവിധ ബിസിനസ്സ് സേവനങ്ങളെയും ഇവിടെ വിശദീകരിക്കുന്നു."
    },
    core: {
      en: "Comprehensive look at Banking, e-Banking, Insurance principles, Communication, Transportation, and Warehousing.",
      ml: "ബാങ്കിംഗ്, ഇ-ബാങ്കിംഗ്, ഇൻഷുറൻസ് തത്വങ്ങൾ, വാർത്താവിനിമയം, ഗതാഗതം, വെയർഹൗസിംഗ് എന്നിവയെക്കുറിച്ചുള്ള സമഗ്രമായ പഠനം."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter explores the essential services that facilitate the smooth functioning of business activities. It distinguishes services from physical goods and classifies various types of business services, with a deep dive into banking, e-banking, insurance, communication, transportation, and warehousing.', ml: 'ബിസിനസ്സ് പ്രവർത്തനങ്ങൾ സുഗമമാക്കാൻ സഹായിക്കുന്ന അത്യാവശ്യ സേവനങ്ങളെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു. സാധനങ്ങളും സേവനങ്ങളും തമ്മിലുള്ള വ്യത്യാസവും ബാങ്കിംഗ്, ഇ-ബാങ്കിംഗ്, ഇൻഷുറൻസ്, വാർത്താവിനിമയം, ഗതാഗതം, വെയർഹൗസിംഗ് തുടങ്ങിയ വിവിധ ബിസിനസ്സ് സേവനങ്ങളെക്കുറിച്ചും ഇവിടെ വിശദമായി പ്രതിപാദിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Services: Separately identifiable, essentially intangible economic activities that provide satisfaction of wants and involve interaction between the provider and the consumer.', ml: 'സേവനങ്ങൾ (Services): ആവശ്യങ്ങൾ നിറവേറ്റുന്നതിനായി നൽകുന്നതും നേരിട്ട് കാണാൻ കഴിയാത്തതുമായ (Intangible) സാമ്പത്തിക പ്രവർത്തനങ്ങൾ. ഇതിൽ സേവനം നൽകുന്നയാളും സ്വീകരിക്കുന്നയാളും തമ്മിലുള്ള ഇടപെടൽ പ്രധാനമാണ്.' },
        { en: 'Goods: Physical products capable of being delivered to a purchaser, involving the transfer of ownership.', ml: 'സാധനങ്ങൾ (Goods): ഉടമസ്ഥാവകാശം കൈമാറാൻ കഴിയുന്നതും ഭൗതികമായി നിലനിൽപ്പുള്ളതുമായ ഉൽപ്പന്നങ്ങൾ.' },
        { en: 'Business Services: Services used by business enterprises to conduct their activities effectively (e.g., banking, insurance, transport).', ml: 'ബിസിനസ്സ് സേവനങ്ങൾ (Business Services): ബിസിനസ്സ് പ്രവർത്തനങ്ങൾ ഫലപ്രദമായി നടത്തുന്നതിന് ഉപയോഗിക്കുന്ന സേവനങ്ങൾ (ഉദാ: ബാങ്കിംഗ്, ഇൻഷുറൻസ്, ഗതാഗതം).' },
        { en: 'e-Banking: A service that allows customers to conduct banking transactions over the internet using electronic devices.', ml: 'ഇ-ബാങ്കിംഗ് (e-Banking): ഇലക്ട്രോണിക് ഉപകരണങ്ങൾ ഉപയോഗിച്ച് ഇന്റർനെറ്റ് വഴി ബാങ്കിംഗ് ഇടപാടുകൾ നടത്തുന്ന രീതി.' },
        { en: 'Insurance: A risk-management device by which the loss likely to be caused by an uncertain event is spread over a number of persons exposed to the same risk.', ml: 'ഇൻഷുറൻസ് (Insurance): അപ്രതീക്ഷിതമായ സംഭവങ്ങൾ മൂലമുണ്ടാകുന്ന നഷ്ടം സമാനമായ റിസ്കുള്ള നിരവധി ആളുകൾക്കിടയിൽ പങ്കുവെക്കുന്ന ഒരു റിസ്ക് മാനേജ്‌മെന്റ് സംവിധാനം.' },
        { en: 'Warehousing: Logistical services that ensure the right quantity of goods are stored and made available at the right place, time, and cost.', ml: 'വെയർഹൗസിംഗ് (Warehousing): സാധനങ്ങൾ ശരിയായ അളവിൽ, ശരിയായ സ്ഥലത്ത്, ശരിയായ സമയത്ത് ലഭ്യമാക്കുന്നതിനായി സൂക്ഷിച്ചുവെക്കുന്ന സേവനം.' }
      ]},

      { type: 'h2', en: "3. Nature of Services (The 5 'I's)", ml: "3. സേവനങ്ങളുടെ സ്വഭാവം (അഞ്ച് 'I'കൾ)" },
      { type: 'p', en: "Services possess five basic features that distinguish them from goods:", ml: "സാധനങ്ങളിൽ നിന്ന് സേവനങ്ങളെ വേർതിരിക്കുന്ന അഞ്ച് അടിസ്ഥാന സവിശേഷതകൾ താഴെ പറയുന്നവയാണ്:" },
      { type: 'ul', items: [
        { en: "Intangibility: They cannot be touched or seen, only experienced (e.g., a doctor's treatment).", ml: "അദൃശ്യത (Intangibility): സേവനങ്ങളെ സ്പർശിക്കാനോ കാണാനോ കഴിയില്ല, അനുഭവിക്കാനേ സാധിക്കൂ (ഉദാ: ഡോക്ടറുടെ ചികിത്സ)." },
        { en: "Inconsistency: There is no standard tangible product; services must be modified each time.", ml: "വൈരുദ്ധ്യം/മാറ്റങ്ങൾ (Inconsistency): സേവനങ്ങൾക്ക് ഒരു നിശ്ചിത മാതൃകയില്ല; ഓരോ തവണയും ആവശ്യത്തിനനുസരിച്ച് അവയിൽ മാറ്റം വരുത്തേണ്ടി വരും." },
        { en: "Inseparability: Production and consumption happen simultaneously.", ml: "വേർപെടുത്താനാവാത്തത് (Inseparability): സേവനത്തിന്റെ ഉൽപ്പാദനവും ഉപഭോഗവും ഒരേസമയം നടക്കുന്നു." },
        { en: "Inventory (Less): Services cannot be stored for future use; they are perishable.", ml: "ശേഖരിച്ചു വെക്കാനാവാത്തത് (Inventory Less): സേവനങ്ങളെ ഭാവിയിലേക്ക് കരുതിവെക്കാൻ കഴിയില്ല; അവ വേഗം നശിച്ചുപോകുന്നവയാണ്." },
        { en: "Involvement: The customer actively participates in the service delivery process.", ml: "പങ്കാളിത്തം (Involvement): സേവനം നൽകുന്ന പ്രക്രിയയിൽ ഉപഭോക്താവിന്റെ സജീവ പങ്കാളിത്തം ആവശ്യമാണ്." }
      ]},

      { type: 'h2', en: '4. Banking', ml: '4. ബാങ്കിംഗ്' },
      { type: 'p', en: 'Banks accept deposits from the public for lending and investment, stimulating economic activity.', ml: 'ബാങ്കുകൾ പൊതുജനങ്ങളിൽ നിന്ന് നിക്ഷേപങ്ങൾ സ്വീകരിക്കുകയും അവ വായ്പയായോ നിക്ഷേപമായോ നൽകി സമ്പദ്‌വ്യവസ്ഥയെ ഉത്തേജിപ്പിക്കുകയും ചെയ്യുന്നു.' },
      { type: 'h3', en: 'Types of Banks', ml: 'വിവിധതരം ബാങ്കുകൾ' },
      { type: 'ul', items: [
        { en: 'Commercial Banks: Deal in money; divided into public and private sectors.', ml: 'വാണിജ്യ ബാങ്കുകൾ (Commercial Banks): പണമിടപാടുകൾ നടത്തുന്നു; ഇവയെ പൊതുമേഖലയെന്നും സ്വകാര്യ മേഖലയെന്നും തിരിക്കാം.' },
        { en: 'Cooperative Banks: Provide cheap credit to members.', ml: 'സഹകരണ ബാങ്കുകൾ (Cooperative Banks): അംഗങ്ങൾക്ക് കുറഞ്ഞ പലിശയിൽ വായ്പ നൽകുന്നു.' },
        { en: 'Specialised Banks: Cater to unique needs like foreign exchange (e.g., EXIM banks).', ml: 'സ്പെഷ്യലൈസ്ഡ് ബാങ്കുകൾ: വിദേശ നാണയ വിനിമയം പോലുള്ള പ്രത്യേക ആവശ്യങ്ങൾക്കായി പ്രവർത്തിക്കുന്നു (ഉദാ: എക്സിം ബാങ്ക്).' },
        { en: 'Central Bank: Supervises all commercial banks; Reserve Bank of India (RBI) is India\'s central bank.', ml: 'സെൻട്രൽ ബാങ്ക്: എല്ലാ വാണിജ്യ ബാങ്കുകളെയും നിയന്ത്രിക്കുന്നു; ഭാരതീയ റിസർവ് ബാങ്ക് (RBI) ആണ് ഇന്ത്യയുടെ സെൻട്രൽ ബാങ്ക്.' }
      ]},
      { type: 'h3', en: 'Functions of Commercial Banks', ml: 'വാണിജ്യ ബാങ്കുകളുടെ ധർമ്മങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Acceptance of deposits (current, savings, fixed accounts).', ml: 'നിക്ഷേപങ്ങൾ സ്വീകരിക്കുക (കറന്റ്, സേവിംഗ്സ്, ഫിക്സഡ് അക്കൗണ്ടുകൾ).' },
        { en: 'Lending of funds (loans, overdrafts, cash credits).', ml: 'വായ്പകൾ നൽകുക (ലോണുകൾ, ഓവർഡ്രാഫ്റ്റുകൾ, ക്യാഷ് ക്രെഡിറ്റുകൾ).' },
        { en: 'Cheque facility, Remittance of funds, and Allied services (lockers, bill payments).', ml: 'ചെക്ക് സൗകര്യം, പണം കൈമാറൽ, അനുബന്ധ സേവനങ്ങൾ (ലോക്കർ, ബില്ലുകൾ അടയ്ക്കൽ).' }
      ]},

      { type: 'h2', en: '5. e-Banking', ml: '5. ഇ-ബാങ്കിംഗ്' },
      { type: 'ul', items: [
        { en: 'Benefits to Customers: 24/7 access, digital payments from anywhere, and increased security.', ml: 'ഉപഭോക്താക്കൾക്കുള്ള ഗുണങ്ങൾ: 24 മണിക്കൂറും സേവനം ലഭ്യമാണ്, എവിടെനിന്നും പണമിടപാടുകൾ നടത്താം, കൂടുതൽ സുരക്ഷിതത്വം.' },
        { en: 'Benefits to Banks: Competitive advantage, unlimited network, and reduced load on physical branches.', ml: 'ബാങ്കുകൾക്കുള്ള ഗുണങ്ങൾ: മത്സരത്തിൽ മുന്നിലെത്താം, ശൃംഖല വിപുലമാക്കാം, ശാഖകളിലെ തിരക്ക് കുറയ്ക്കാം.' }
      ]},

      { type: 'h2', en: '6. Principles of Insurance', ml: '6. ഇൻഷുറൻസ് തത്വങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Utmost Good Faith (Uberrimae Fidei): Both insurer and insured must honestly disclose all facts.', ml: 'പരമമായ വിശ്വാസം (Utmost Good Faith): ഇൻഷുറൻസ് എടുക്കുന്നവരും നൽകുന്നവരും എല്ലാ വിവരങ്ങളും സത്യസന്ധമായി വെളിപ്പെടുത്തണം.' },
        { en: 'Insurable Interest: The insured must have a financial interest in the subject matter.', ml: 'ഇൻഷുറബിൾ ഇൻട്രസ്റ്റ്: ഇൻഷുർ ചെയ്യുന്ന വസ്തുവിൽ ഇൻഷുറൻസ് എടുക്കുന്നയാൾക്ക് സാമ്പത്തിക താൽപ്പര്യം ഉണ്ടായിരിക്കണം.' },
        { en: 'Indemnity: Compensation to put the insured in the same financial position as before the loss.', ml: 'നഷ്ടപരിഹാര തത്വം (Indemnity): നഷ്ടമുണ്ടാകുന്നതിന് മുൻപുള്ള സാമ്പത്തിക നിലയിലേക്ക് ഇൻഷുറൻസ് എടുത്തയാളെ തിരികെ എത്തിക്കുന്നു.' },
        { en: 'Proximate Cause: Compensation is only paid if the loss is directly caused by a stated peril.', ml: 'അടുത്ത കാരണം (Proximate Cause): ഇൻഷുർ ചെയ്ത കാരണത്താലാണ് നഷ്ടമുണ്ടായതെങ്കിൽ മാത്രമേ പരിഹാരം ലഭിക്കൂ.' },
        { en: 'Subrogation: Insurer takes ownership rights of damaged property after settling claim.', ml: 'അവകാശ കൈമാറ്റം (Subrogation): നഷ്ടപരിഹാരം നൽകിയ ശേഷം തകരാറിലായ വസ്തുവിന്റെ അവകാശം ഇൻഷുറൻസ് കമ്പനിക്ക് ലഭിക്കുന്നു.' },
        { en: 'Contribution: Multiple insurers share the loss proportionately if more than one policy exists.', ml: 'കോൺട്രിബ്യൂഷൻ (Contribution): ഒന്നിലധികം പോളിസികൾ ഉണ്ടെങ്കിൽ എല്ലാ കമ്പനികളും ചേർന്ന് ആനുപാതികമായി നഷ്ടം പങ്കിടുന്നു.' },
        { en: 'Mitigation: The insured must take reasonable steps to minimize loss/damage.', ml: 'നഷ്ടം ലഘൂകരിക്കൽ (Mitigation): നഷ്ടം കുറയ്ക്കുന്നതിനായി ഇൻഷുറൻസ് എടുത്തയാൾ ആവശ്യമായ നടപടികൾ സ്വീകരിക്കണം.' }
      ]},

      { type: 'h2', en: '7. Communication Services', ml: '7. വാർത്താവിനിമയ സേവനങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Postal Services: Mail facilities (speed post, registered mail) and financial facilities (PPF).', ml: 'തപാൽ സേവനങ്ങൾ: മെയിൽ സൗകര്യങ്ങളും (സ്പീഡ് പോസ്റ്റ്), സാമ്പത്തിക സേവനങ്ങളും (PPF).' },
        { en: 'Telecom Services: Cellular mobile, Fixed-line, Cable, VSAT, and DTH services.', ml: 'ടെലികോം സേവനങ്ങൾ: മൊബൈൽ, ഫിക്സഡ് ലൈൻ, കേബിൾ, VSAT, DTH സേവനങ്ങൾ.' }
      ]},

      { type: 'h2', en: '8. Warehousing', ml: '8. വെയർഹൗസിംഗ്' },
      { type: 'ul', items: [
        { en: 'Types: Private, Public, Bonded (for imported goods), Government, and Cooperative.', ml: 'തരങ്ങൾ: പ്രൈവറ്റ്, പബ്ലിക്, ബോണ്ടഡ് (ഇറക്കുമതി സാധനങ്ങൾക്കായി), ഗവൺമെന്റ്, കോപ്പറേറ്റീവ്.' },
        { en: 'Functions: Consolidation, Break the bulk, Stock piling, and Price stabilization.', ml: 'ധർമ്മങ്ങൾ: ഏകീകരണം (Consolidation), വിഭജനം (Break the bulk), ശേഖരണം (Stock piling), വില നിലവാരം ക്രമീകരിക്കൽ.' }
      ]},

      { type: 'h2', en: '9. Tables for Easy Learning', ml: '9. പഠിക്കാൻ എളുപ്പത്തിനുള്ള പട്ടികകൾ' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം'}, {en: 'Meaning', ml: 'അർത്ഥം'}],
        rows: [
          [{en: 'Bonded Warehouse', ml: 'ബോണ്ടഡ് വെയർഹൗസ്'}, {en: 'Facility to store imported goods until customs duty is paid.', ml: 'നികുതി അടയ്ക്കുന്നത് വരെ ഇറക്കുമതി സാധനങ്ങൾ സൂക്ഷിക്കുന്ന സ്ഥലം.'}],
          [{en: 'Subrogation', ml: 'അവകാശ കൈമാറ്റം'}, {en: 'Insurer\'s right to ownership after settling claim.', ml: 'ക്ലെയിം നൽകിയ ശേഷം വസ്തുവിൻമേൽ ഇൻഷുറർക്ക് ലഭിക്കുന്ന അവകാശം.'}],
          [{en: 'VSAT', ml: 'വി-സാറ്റ് (VSAT)'}, {en: 'Satellite-based communication service.', ml: 'ഉപഗ്രഹം വഴിയുള്ള വാർത്താവിനിമയ സേവനം.'}]
        ]
      }},
      { type: 'h3', en: 'Comparison: Goods vs. Services', ml: 'താരതമ്യം: സാധനങ്ങളും സേവനങ്ങളും' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Goods', ml: 'സാധനങ്ങൾ'}, {en: 'Services', ml: 'സേവനങ്ങൾ'}],
        rows: [
          [{en: 'Nature', ml: 'സ്വഭാവം'}, {en: 'Physical object', ml: 'ഭൗതിക വസ്തു'}, {en: 'Activity/Process', ml: 'പ്രവർത്തനം'}],
          [{en: 'Tangibility', ml: 'കാണാൻ കഴിയുന്നത്'}, {en: 'Tangible', ml: 'കഴിയും'}, {en: 'Intangible', ml: 'കഴിയില്ല'}],
          [{en: 'Inseparability', ml: 'വേർപെടുത്താനാവാത്തത്'}, {en: 'Separable', ml: 'വേർപെടുത്താം'}, {en: 'Inseparable', ml: 'പറ്റില്ല'}]
        ]
      }},
      { type: 'h3', en: 'Comparison: Life vs. Fire vs. Marine Insurance', ml: 'താരതമ്യം: ഇൻഷുറൻസ് തരങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Life', ml: 'ജീവൻ'}, {en: 'Fire', ml: 'തീപിടുത്തം'}, {en: 'Marine', ml: 'കടൽ'}],
        rows: [
          [{en: 'Subject', ml: 'വിഷയം'}, {en: 'Human Life', ml: 'മനുഷ്യ ജീവൻ'}, {en: 'Physical Property', ml: 'സ്വത്ത്'}, {en: 'Ship/Cargo', ml: 'കപ്പൽ/സാധനങ്ങൾ'}],
          [{en: 'Indemnity', ml: 'നഷ്ടപരിഹാരം'}, {en: 'Not applicable', ml: 'ബാധകമല്ല'}, {en: 'Applicable', ml: 'ബാധകം'}, {en: 'Applicable', ml: 'ബാധകം'}],
          [{en: 'Duration', ml: 'കാലാവധി'}, {en: 'Long term', ml: 'ദീർഘകാലം'}, {en: 'Usually 1 year', ml: 'ഒരു വർഷം'}, {en: 'Voyage/Period', ml: 'യാത്ര/സമയം'}]
        ]
      }},

      { type: 'h2', en: '10. Extract and Highlight', ml: '10. എടുത്തു പറയേണ്ട കാര്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Services vs. Goods: Core difference is non-transferability of ownership.', ml: 'സേവനം vs സാധനം: ഉടമസ്ഥാവകാശം കൈമാറാൻ കഴിയില്ല എന്നതാണ് പ്രധാന വ്യത്യാസം.' },
        { en: 'e-Banking mechanisms: ATMs, PoS, EDI, NEFT, and RTGS.', ml: 'ഇ-ബാങ്കിംഗ് രീതികൾ: എ.ടി.എം, പി.ഒ.എസ്, ഇ.ഡി.ഐ, നെഫ്റ്റ്, ആർ.ടി.ജി.എസ്.' },
        { en: 'Bonded Warehouses promote entrepot trade.', ml: 'ബോണ്ടഡ് വെയർഹൗസുകൾ എൻട്രെപോട്ട് വ്യാപാരത്തെ സഹായിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '11. Quick Revision', ml: '11. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: 'Services are intangible and inseparable.', ml: 'സേവനങ്ങൾ കാണാൻ കഴിയില്ല, അവയുടെ ഉൽപ്പാദനവും ഉപഭോഗവും ഒരേസമയം നടക്കുന്നു.' },
        { en: 'Commercial banks provide savings and lending services.', ml: 'വാണിജ്യ ബാങ്കുകൾ നിക്ഷേപം സ്വീകരിക്കുകയും വായ്പ നൽകുകയും ചെയ്യുന്നു.' },
        { en: 'Insurance works on the principle of sharing risk.', ml: 'നഷ്ടസാധ്യത പങ്കുവെക്കുക എന്നതാണ് ഇൻഷുറൻസിന്റെ അടിസ്ഥാനം.' },
        { en: 'Modern warehouses offer value-added services like packaging.', ml: 'ആധുനിക വെയർഹൗസുകൾ പാക്കേജിംഗ് പോലുള്ള അധിക സേവനങ്ങളും നൽകുന്നു.' }
      ]},

      { type: 'h2', en: '12. Possible Exam Questions', ml: '12. പരീക്ഷാ ചോദ്യങ്ങൾ' },
      { type: 'h3', en: 'Short Answer Questions', ml: 'ഹ്രസ്വ ഉത്തര ചോദ്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: "What are the 'Five Is' of services?", ml: "സേവനങ്ങളുടെ 'അഞ്ച് I-കൾ' ഏവ?" },
        { en: "Difference between NEFT and RTGS.", ml: "നെഫ്റ്റും (NEFT) ആർ.ടി.ജി.എസും (RTGS) തമ്മിലുള്ള വ്യത്യാസം." },
        { en: "Define 'Proximate Cause' in insurance.", ml: "'അടുത്ത കാരണം' (Proximate Cause) നിർവ്വചിക്കുക." }
      ]},
      { type: 'h3', en: 'Long Answer Questions', ml: 'ദീർഘ ഉത്തര ചോദ്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: "Explain different types of life insurance policies.", ml: "വിവിധതരം ലൈഫ് ഇൻഷുറൻസ് പോളിസികൾ വിശദീകരിക്കുക." },
        { en: "Discuss various functions of modern warehouses.", ml: "ആധുനിക വെയർഹൗസുകളുടെ ധർമ്മങ്ങൾ ചർച്ച ചെയ്യുക." }
      ]}
    ]
  },
  glossary: [
    { term: { en: "Intangibility", ml: "അദൃശ്യത" }, definition: { en: "The quality of not being physical and not being able to be touched.", ml: "കാണാനോ സ്പർശിക്കാനോ കഴിയാത്ത അവസ്ഥ." } },
    { term: { en: "Indemnity", ml: "നഷ്ടപരിഹാരം" }, definition: { en: "Security or protection against a financial loss.", ml: "നഷ്ടത്തിൽ നിന്ന് ലഭിക്കുന്ന സാമ്പത്തിക സുരക്ഷ അല്ലെങ്കിൽ സംരക്ഷണം." } },
    { term: { en: "NEFT", ml: "നെഫ്റ്റ്" }, definition: { en: "National Electronic Funds Transfer for moving money between bank accounts.", ml: "ഒരു ബാങ്ക് അക്കൗണ്ടിൽ നിന്ന് മറ്റൊന്നിലേക്ക് പണം കൈമാറുന്നതിനുള്ള ഇലക്ട്രോണിക് സംവിധാനം." } }
  ],
  quiz: [],
  videos: [
    { title: "04 ബിസിനസ്സ് സേവനങ്ങൾ", url: "https://www.youtube.com/watch?v=K0imIFYlOzM" }
  ]
};

export const plusOneBusinessStudiesUnit5: Lesson = {
  id: "pl-bs-11-unit5",
  title: { en: "Emerging Modes of Business", ml: "ഉയർന്നുവരുന്ന ബിസിനസ്സ് രീതികൾ" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Understand the concept and scope of e-business", ml: "ഇ-ബിസിനസ്സിന്റെ ആശയവും വ്യാപ്തിയും മനസ്സിലാക്കുക" },
    { en: "Distinguish between e-business and e-commerce", ml: "ഇ-ബിസിനസ്സും ഇ-കൊമേഴ്‌സും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയുക" },
    { en: "Analyze the benefits and limitations of e-business", ml: "ഇ-ബിസിനസ്സിന്റെ ഗുണങ്ങളും പരിമിതികളും വിശകലനം ചെയ്യുക" },
    { en: "Explain the process of online transactions and security measures", ml: "ഓൺലൈൻ ഇടപാടുകളുടെ രീതിയും സുരക്ഷാ മാർഗങ്ങളും വിവരിക്കുക" },
    { en: "Understand the concept and need for Business Process Outsourcing (BPO)", ml: "ബിസിനസ്സ് പ്രോസസ് ഔട്ട്‌സോഴ്‌സിംഗ് (BPO) എന്ന ആശയവും അതിന്റെ ആവശ്യകതയും മനസ്സിലാക്കുക" }
  ],
  content: {
    intro: {
      en: "This chapter discusses the fundamental changes in how business is conducted today, primarily focusing on e-business and Business Process Outsourcing (BPO).",
      ml: "ഇന്നത്തെ കാലത്ത് ബിസിനസ്സ് നടത്തുന്ന രീതിയിലുണ്ടായ അടിസ്ഥാനപരമായ മാറ്റങ്ങളെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്, പ്രധാനമായും ഇ-ബിസിനസ്സിലും ബിസിനസ്സ് പ്രോസസ് ഔട്ട്‌സോഴ്‌സിംഗിലും (BPO) ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു."
    },
    core: {
      en: "Explore the scope of e-business (B2B, B2C, C2C, Intra-B), benefits like global reach, limitations like lack of personal touch, and the importance of outsourcing for efficiency.",
      ml: "ഇ-ബിസിനസ്സിന്റെ വ്യാപ്തി (B2B, B2C, C2C, Intra-B), ആഗോള വ്യാപനം പോലുള്ള ഗുണങ്ങൾ, വ്യക്തിപരമായ സ്പർശനത്തിന്റെ കുറവ് പോലുള്ള പരിമിതികൾ, കാര്യക്ഷമത വർദ്ധിപ്പിക്കുന്നതിൽ ഔട്ട്‌സോഴ്‌സിംഗിന്റെ പ്രാധാന്യം എന്നിവ പരിശോധിക്കുക."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter discusses the fundamental changes in how business is conducted today, primarily focusing on two major trends: the digitisation of business (e-business) and Business Process Outsourcing (BPO). It explains the scope, benefits, limitations, and security concerns of e-business, as well as the need for and concerns over outsourcing.', ml: 'ഇന്നത്തെ കാലത്ത് ബിസിനസ്സ് നടത്തുന്ന രീതിയിലുണ്ടായ അടിസ്ഥാനപരമായ മാറ്റങ്ങളെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. ബിസിനസ്സിന്റെ ഡിജിറ്റൈസേഷൻ (e-business), ബിസിനസ്സ് പ്രോസസ്സ് ഔട്ട്‌സോഴ്‌സിംഗ് (BPO) എന്നീ രണ്ട് പ്രധാന പ്രവണതകളിലാണ് ഇത് ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നത്. ഇ-ബിസിനസ്സിന്റെ വ്യാപ്തി, ഗുണങ്ങൾ, പരിമിതികൾ, സുരക്ഷാ പ്രശ്നങ്ങൾ എന്നിവയും ഔട്ട്‌സോഴ്‌സിംഗിന്റെ ആവശ്യകതയും ഇതിൽ വിവരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'e-Business: The conduct of industry, trade, and commerce using computer networks, such as the internet.', ml: 'ഇ-ബിസിനസ്സ് (e-Business): ഇന്റർനെറ്റ് പോലുള്ള കമ്പ്യൂട്ടർ നെറ്റ്‌വർക്കുകൾ ഉപയോഗിച്ച് വ്യവസായം, വ്യാപാരം, വാണിജ്യം എന്നിവ നടത്തുന്ന രീതി.' },
        { en: 'e-Commerce: A subset of e-business that covers a firm\'s interactions with its customers and suppliers over the internet.', ml: 'ഇ-കൊമേഴ്‌സ് (e-Commerce): ഇ-ബിസിനസ്സിന്റെ ഒരു ഭാഗമാണിത്. ഒരു സ്ഥാപനം അതിന്റെ ഉപഭോക്താക്കളുമായും വിതരണക്കാരുമായും ഇന്റർനെറ്റ് വഴി നടത്തുന്ന ഇടപെടലുകളെ ഇത് സൂചിപ്പിക്കുന്നു.' },
        { en: 'Digitisation: The conversion of text, sound, images, and video into electronic ones and zeroes.', ml: 'ഡിജിറ്റൈസേഷൻ (Digitisation): അക്ഷരങ്ങൾ, ശബ്ദം, ചിത്രങ്ങൾ, വീഡിയോ എന്നിവയെ ഇലക്ട്രോണിക് രൂപത്തിലേക്ക് മാറ്റുന്ന പ്രക്രിയ.' },
        { en: 'Outsourcing: Contracting out non-core business activities to specialists to benefit from their expertise.', ml: 'ഔട്ട്‌സോഴ്‌സിംഗ് (Outsourcing): ഒരു ബിസിനസ്സിലെ പ്രധാനമല്ലാത്ത പ്രവർത്തനങ്ങൾ അവയിൽ വൈദഗ്ധ്യമുള്ള പുറത്തുള്ള ഏജൻസികളെ ഏൽപ്പിക്കുന്ന രീതി.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      { type: 'h3', en: '3.1 Scope of e-Business', ml: '3.1 ഇ-ബിസിനസ്സിന്റെ വ്യാപ്തി (Scope)' },
      { type: 'ul', items: [
        { en: 'B2B (Business-to-Business): Both parties involved are business firms (e.g., placing orders with suppliers).', ml: 'B2B (Business-to-Business): ഇടപാടിൽ ഏർപ്പെടുന്ന രണ്ട് ഭാഗവും ബിസിനസ്സ് സ്ഥാപനങ്ങളായിരിക്കും (ഉദാ: വിതരണക്കാർക്ക് ഓർഡർ നൽകുന്നത്).' },
        { en: 'B2C (Business-to-Customers): Transactions between business firms and their customers (e.g., online shopping).', ml: 'B2C (Business-to-Customers): ബിസിനസ്സ് സ്ഥാപനങ്ങളും അവരുടെ ഉപഭോക്താക്കളും തമ്മിലുള്ള ഇടപാടുകൾ (ഉദാ: ഓൺലൈൻ ഷോപ്പിംഗ്).' },
        { en: 'Intra-B Commerce: Parties involved are from within the same business firm (e.g., interaction between departments).', ml: 'ഇൻട്രാ-ബി വാണിജ്യം (Intra-B Commerce): ഒരു ബിസിനസ്സ് സ്ഥാപനത്തിനുള്ളിലെ വിവിധ വിഭാഗങ്ങൾ തമ്മിലുള്ള ഇടപാടുകൾ.' },
        { en: 'C2C (Consumer-to-Consumer): Transactions where both parties are consumers (e.g., selling used goods on eBay).', ml: 'C2C (Consumer-to-Consumer): ഉപഭോക്താക്കൾ തമ്മിലുള്ള ഇടപാടുകൾ (ഉദാ: പഴയ സാധനങ്ങൾ ഓൺലൈനായി വിൽക്കുന്നത്).' }
      ]},

      { type: 'h3', en: '3.2 Benefits and Limitations of e-Business', ml: '3.2 ഇ-ബിസിനസ്സിന്റെ ഗുണങ്ങളും പരിമിതികളും' },
      { type: 'p', en: 'Benefits:', ml: 'ഗുണങ്ങൾ:' },
      { type: 'ul', items: [
        { en: 'Ease of formation and lower investment.', ml: 'രൂപീകരണത്തിലെ എളുപ്പവും കുറഞ്ഞ നിക്ഷേപവും.' },
        { en: 'Convenience (24/7/365 access).', ml: 'സൗകര്യം (എപ്പോഴും ലഭ്യമാണ്).' },
        { en: 'Speed and Global reach.', ml: 'വേഗതയും ആഗോള വ്യാപനവും.' },
        { en: 'Movement towards a paperless society.', ml: 'പേപ്പർ രഹിത ഇടപാടുകളിലേക്കുള്ള മാറ്റം.' }
      ]},
      { type: 'p', en: 'Limitations:', ml: 'പരിമിതികൾ:' },
      { type: 'ul', items: [
        { en: 'Low personal touch.', ml: 'വ്യക്തിപരമായ സമ്പർക്കത്തിന്റെ കുറവ്.' },
        { en: 'Incongruence in speed (instant info vs delayed delivery).', ml: 'വേഗതയിലെ പൊരുത്തക്കേട് (വിവരം വേഗത്തിൽ ലഭിക്കുമെങ്കിലും സാധനം എത്താൻ സമയമെടുക്കും).' },
        { en: 'Digital divide and security risks.', ml: 'ഡിജിറ്റൽ വിഭജനവും സുരക്ഷാ പ്രശ്നങ്ങളും.' }
      ]},

      { type: 'h3', en: '3.3 Online Transactions', ml: '3.3 ഓൺലൈൻ ഇടപാടുകൾ' },
      { type: 'p', en: 'Steps involved:', ml: 'പ്രധാന ഘട്ടങ്ങൾ:' },
      { type: 'ul', items: [
        { en: 'Registration: Creating an account with the vendor.', ml: 'രജിസ്ട്രേഷൻ (Registration): വെണ്ടർക്ക് നൽകുന്ന വിവരങ്ങളിലൂടെ അക്കൗണ്ട് തുടങ്ങുക.' },
        { en: 'Placing an order: Using an online shopping cart.', ml: 'ഓർഡർ നൽകൽ (Placing an order): ഷോപ്പിംഗ് കാർട്ട് ഉപയോഗിച്ച് സാധനങ്ങൾ തിരഞ്ഞെടുക്കുക.' },
        { en: 'Payment mechanism: CoD, Cheque, Net-banking, Credit/Debit cards, Digital Cash.', ml: 'പണം നൽകുന്ന രീതികൾ (Payment): സി.ഒ.ഡി (CoD), നെറ്റ് ബാങ്കിംഗ്, കാർഡുകൾ, ഡിജിറ്റൽ ക്യാഷ്.' }
      ]},

      { type: 'h3', en: '3.4 Security and Safety of e-Transactions', ml: '3.4 ഇ-ഇടപാടുകളുടെ സുരക്ഷ' },
      { type: 'ul', items: [
        { en: 'Transaction Risks: Default on order, delivery, or payment.', ml: 'ഇടപാടിലെ റിസ്കുകൾ: ഓർഡർ നൽകുന്നതിലോ പണമടയ്ക്കുന്നതിലോ ഉള്ള തകരാറുകൾ.' },
        { en: 'Data Risks: Theft or modification via viruses or interception.', ml: 'വിവരങ്ങളിലെ റിസ്കുകൾ: വൈറസ് (Virus) ആക്രമണം വഴി വിവരങ്ങൾ ചോർത്തപ്പെടുകയോ നശിപ്പിക്കപ്പെടുകയോ ചെയ്യുക.' },
        { en: 'Privacy Risks: Misuse of personal data.', ml: 'സ്വകാര്യതയിലുള്ള റിസ്കുകൾ: വ്യക്തിഗത വിവരങ്ങൾ ദുരുപയോഗം ചെയ്യപ്പെടുക.' }
      ]},

      { type: 'h3', en: '3.5 Outsourcing (BPO)', ml: '3.5 ഔട്ട്‌സോഴ്‌സിംഗ് (BPO)' },
      { type: 'p', en: 'Outsourcing involves contracting out non-core activities to specialists.', ml: 'ബിസിനസ്സിലെ പ്രധാനമല്ലാത്ത ജോലികൾ പുറത്തുള്ള ഏജൻസികളെ ഏൽപ്പിക്കുന്നതിനെ ഔട്ട്‌സോഴ്‌സിംഗ് എന്ന് വിളിക്കുന്നു.' },
      { type: 'ul', items: [
        { en: 'Need: Focusing attention on core competencies, cost reduction, and excellence.', ml: 'ആവശ്യകത: പ്രധാന പ്രവർത്തനങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക, ചെലവ് കുറയ്ക്കുക, മികവ് പുലർത്തുക.' },
        { en: 'Concerns: Confidentiality issues, ethical concerns, and resentment over job losses.', ml: 'ആശങ്കകൾ: രഹസ്യസ്വഭാവം നഷ്ടപ്പെടാനുള്ള സാധ്യത, ധാർമ്മിക പ്രശ്നങ്ങൾ, തൊഴിൽ നഷ്ടം.' }
      ]},

      { type: 'h2', en: '4. Tables for Easy Learning', ml: '4. പഠിക്കാൻ എളുപ്പത്തിനുള്ള പട്ടികകൾ' },
      { type: 'h3', en: 'Comparison: Traditional vs. e-Business', ml: 'താരതമ്യം: പരമ്പരാഗത ബിസിനസ്സ് vs ഇ-ബിസിനസ്സ്' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Traditional', ml: 'പരമ്പരാഗതം'}, {en: 'e-Business', ml: 'ഇ-ബിസിനസ്'}],
        rows: [
          [{en: 'Formation', ml: 'രൂപീകരണം'}, {en: 'Difficult', ml: 'പ്രയാസം'}, {en: 'Simple', ml: 'എളുപ്പം'}],
          [{en: 'Physical presence', ml: 'ഭൗതിക സാന്നിധ്യം'}, {en: 'Required', ml: 'ആവശ്യമാണ്'}, {en: 'Not required', ml: 'ആവശ്യമില്ല'}],
          [{en: 'Operating cost', ml: 'പ്രവർത്തന ചെലവ്'}, {en: 'High', ml: 'കൂടുതൽ'}, {en: 'Low', ml: 'കുറവ്'}],
          [{en: 'Response time', ml: 'പ്രതികരണ സമയം'}, {en: 'Long', ml: 'കൂടുതൽ'}, {en: 'Instant', ml: 'വേഗത്തിൽ'}]
        ]
      }},

      { type: 'h2', en: '5. Extract and Highlight', ml: '5. എടുത്തു പറയേണ്ട കാര്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'e-business is broader than e-commerce.', ml: 'ഇ-കൊമേഴ്‌സിനേക്കാൾ വിപുലമായ ഒന്നാണ് ഇ-ബിസിനസ്.' },
        { en: 'India is a preferred destination for BPO due to low-cost skilled manpower.', ml: 'കുറഞ്ഞ ചെലവിൽ വിദഗ്ദ്ധ തൊഴിലാളികൾ ലഭ്യമായതിനാൽ ഇന്ത്യ ഔട്ട്‌സോഴ്‌സിംഗിന് അനുയോജ്യമാണ്.' },
        { en: 'VIRUS stands for Vital Information Under Siege.', ml: 'വൈറസ് (VIRUS) എന്നാൽ Vital Information Under Siege എന്നാണ് അർത്ഥം.' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "e-Business", ml: "ഇ-ബിസിനസ്സ്" }, definition: { en: "Conducting business using computer networks.", ml: "കമ്പ്യൂട്ടർ നെറ്റ്‌വർക്കുകൾ ഉപയോഗിച്ച് ബിസിനസ്സ് നടത്തുന്നത്." } },
    { term: { en: "BPO", ml: "ബി.പി.ഒ" }, definition: { en: "Business Process Outsourcing of non-core activities.", ml: "ബിസിനസ്സ് പ്രവർത്തനങ്ങൾ പുറത്തുള്ള ഏജൻസികളെ ഏൽപ്പിക്കുന്നത്." } },
    { term: { en: "Cryptography", ml: "ക്രിപ്റ്റോഗ്രാഫി" }, definition: { en: "Protecting info by converting into unreadable format.", ml: "വിവരങ്ങൾ മറ്റാർക്കും വായിക്കാൻ കഴിയാത്ത രൂപത്തിലേക്ക് മാറ്റി സംരക്ഷിക്കുന്നത്." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "Which term is broader in scope?", ml: "താഴെ പറയുന്നവയിൽ വ്യാപ്തി കൂടുതൽ ഏതിനാണ്?" },
      options: [
        { k: "A", text: { en: "e-Commerce", ml: "ഇ-കൊമേഴ്‌സ്" } },
        { k: "B", text: { en: "e-Business", ml: "ഇ-ബിസിനസ്സ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "e-business is a broader term that includes e-commerce and internal business functions.", ml: "ഇ-കൊമേഴ്‌സും ആന്തരിക ബിസിനസ്സ് പ്രവർത്തനങ്ങളും ഉൾക്കൊള്ളുന്ന വിപുലമായ പദമാണ് ഇ-ബിസിനസ്സ്." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "Transactions between business firms and suppliers are known as?", ml: "ബിസിനസ്സ് സ്ഥാപനങ്ങളും വിതരണക്കാരും തമ്മിലുള്ള ഇടപാടുകൾ അറിയപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "B2C", ml: "B2C" } },
        { k: "B", text: { en: "B2B", ml: "B2B" } },
        { k: "C", text: { en: "C2C", ml: "C2C" } },
        { k: "D", text: { en: "Intra-B", ml: "ഇൻട്രാ-ബി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "B2B stands for Business-to-Business transactions.", ml: "ബിസിനസ്സ് സ്ഥാപനങ്ങൾ തമ്മിലുള്ള ഇടപാടുകളെ B2B എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "Selling used books online by an individual is an example of?", ml: "ഒരാൾ തന്റെ പഴയ പുസ്തകങ്ങൾ ഓൺലൈനായി വിൽക്കുന്നത് ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "B2B", ml: "B2B" } },
        { k: "B", text: { en: "B2C", ml: "B2C" } },
        { k: "C", text: { en: "C2C", ml: "C2C" } },
        { k: "D", text: { en: "Intra-B", ml: "ഇൻട്രാ-ബി" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "C2C involves transactions between two consumers.", ml: "ഉപഭോക്താക്കൾ തമ്മിലുള്ള ഇടപാടുകളെ C2C എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "Which of the following is an internal e-business interaction?", ml: "താഴെ പറയുന്നവയിൽ ബിസിനസ്സ് സ്ഥാപനത്തിനുള്ളിലെ ഇടപാടുകൾ ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "B2B", ml: "B2B" } },
        { k: "B", text: { en: "B2C", ml: "B2C" } },
        { k: "C", text: { en: "Intra-B", ml: "ഇൻട്രാ-ബി" } },
        { k: "D", text: { en: "C2C", ml: "C2C" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Intra-B commerce involves interactions within departments of a firm.", ml: "ഒരു സ്ഥാപനത്തിനുള്ളിലെ വിവിധ വിഭാഗങ്ങൾ തമ്മിലുള്ള ഇടപാടുകളെ ഇൻട്രാ-ബി എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "What is the primary benefit of e-business over traditional business?", ml: "പരമ്പരാഗത ബിസിനസ്സിനേക്കാൾ ഇ-ബിസിനസ്സ് കൊണ്ടുള്ള പ്രധാന മെച്ചം എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Personal touch", ml: "വ്യക്തിപരമായ സമ്പർക്കം" } },
        { k: "B", text: { en: "Global reach", ml: "ആഗോള വ്യാപനം" } },
        { k: "C", text: { en: "High operating cost", ml: "കൂടുതൽ പ്രവർത്തന ചെലവ്" } },
        { k: "D", text: { en: "Delayed response", ml: "വൈകിയുള്ള പ്രതികരണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "e-Business allows trading globally without boundaries.", ml: "ഭൂമിശാസ്ത്രപരമായ പരിധികളില്ലാതെ ആഗോളതലത്തിൽ ബിസിനസ്സ് നടത്താൻ ഇ-ബിസിനസ്സ് സഹായിക്കുന്നു." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "Online shopping step where items are collected before checkout is?", ml: "ചെക്ക്ഔട്ടിന് മുൻപായി സാധനങ്ങൾ തിരഞ്ഞെടുത്ത് വെക്കുന്ന ഓൺലൈൻ ഷോപ്പിംഗ് ഘട്ടം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Registration", ml: "രജിസ്ട്രേഷൻ" } },
        { k: "B", text: { en: "Shopping Cart", ml: "ഷോപ്പിംഗ് കാർട്ട്" } },
        { k: "C", text: { en: "Payment", ml: "പേയ്‌മെന്റ്" } },
        { k: "D", text: { en: "Delivery", ml: "ഡെലിവറി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Items chosen while browsing are dropped into a digital shopping cart.", ml: "തിരഞ്ഞെടുക്കുന്ന സാധനങ്ങൾ ഷോപ്പിംഗ് കാർട്ടിലാണ് നിക്ഷേപിക്കുന്നത്." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "Payment made at the time of physical delivery of goods is?", ml: "സാധനങ്ങൾ കൈപ്പറ്റുമ്പോൾ പണം നൽകുന്ന രീതി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Digital Cash", ml: "ഡിജിറ്റൽ ക്യാഷ്" } },
        { k: "B", text: { en: "Credit Card", ml: "ക്രെഡിറ്റ് കാർഡ്" } },
        { k: "C", text: { en: "Cash on Delivery", ml: "ക്യാഷ് ഓൺ ഡെലിവറി (CoD)" } },
        { k: "D", text: { en: "Net banking", ml: "നെറ്റ് ബാങ്കിംഗ്" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "CoD allows payment when the product is delivered.", ml: "സാധനം വീട്ടിലെത്തുമ്പോൾ പണം നൽകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "Conversion of data into a secret code to protect it is called?", ml: "വിവരങ്ങൾ സുരക്ഷിതമാക്കാൻ രഹസ്യ കോഡുകളാക്കി മാറ്റുന്ന രീതി?" },
      options: [
        { k: "A", text: { en: "Digitisation", ml: "ഡിജിറ്റൈസേഷൻ" } },
        { k: "B", text: { en: "Cryptography", ml: "ക്രിപ്റ്റോഗ്രാഫി" } },
        { k: "C", text: { en: "Registration", ml: "രജിസ്ട്രേഷൻ" } },
        { k: "D", text: { en: "Browsing", ml: "ബ്രൗസിംഗ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Cryptography transforms data into unreadable ciphertext.", ml: "വിവരങ്ങൾ രഹസ്യ രൂപത്തിലേക്ക് മാറ്റുന്ന സാങ്കേതിക വിദ്യയാണിത്." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "What does VIRUS stand for in computing?", ml: "കമ്പ്യൂട്ടറിലെ VIRUS എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Vital Information Under Siege", ml: "Vital Information Under Siege" } },
        { k: "B", text: { en: "Very Important Resource Under Search", ml: "Very Important Resource Under Search" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "VIRUS stands for Vital Information Under Siege.", ml: "വൈറസ് എന്നാൽ Vital Information Under Siege എന്നാണ്." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "Contracting out non-core activities to third parties is?", ml: "പ്രധാനമല്ലാത്ത ജോലികൾ പുറത്തുള്ള ഏജൻസികളെ ഏൽപ്പിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "e-Commerce", ml: "ഇ-കൊമേഴ്‌സ്" } },
        { k: "B", text: { en: "Outsourcing", ml: "ഔട്ട്‌സോഴ്‌സിംഗ്" } },
        { k: "C", text: { en: "Digitisation", ml: "ഡിജിറ്റൈസേഷൻ" } },
        { k: "D", text: { en: "Integration", ml: "ഇന്റഗ്രേഷൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Outsourcing helps firms focus on core competencies.", ml: "ജോലികൾ പുറംകരാർ നൽകുന്നതിനെ ഔട്ട്‌സോഴ്‌സിംഗ് എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "A BPO unit set up exclusively for one parent firm is called?", ml: "ഒരു പ്രത്യേക സ്ഥാപനത്തിന് വേണ്ടി മാത്രം തുടങ്ങുന്ന ബി.പി.ഒ വിഭാഗം?" },
      options: [
        { k: "A", text: { en: "Third party", ml: "തേർഡ് പാർട്ടി" } },
        { k: "B", text: { en: "Captive unit", ml: "ക്യാപ്റ്റീവ് യൂണിറ്റ്" } },
        { k: "C", text: { en: "Segment", ml: "സെഗ്മെന്റ്" } },
        { k: "D", text: { en: "Vertical", ml: "വെർട്ടിക്കൽ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Captive BPO units serve only their parent organization.", ml: "ഒരു മാതൃസ്ഥാപനത്തിന് വേണ്ടി മാത്രം സേവനം നൽകുന്ന യൂണിറ്റാണിത്." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "Which of the following is an ethical concern in outsourcing?", ml: "ഔട്ട്‌സോഴ്‌സിംഗിലെ ഒരു ധാർമ്മിക ആശങ്ക താഴെ പറയുന്നവയിൽ ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Speed", ml: "വേഗത" } },
        { k: "B", text: { en: "Child labor in host countries", ml: "ബാലവേല" } },
        { k: "C", text: { en: "Cost reduction", ml: "ചെലവ് കുറയ്ക്കൽ" } },
        { k: "D", text: { en: "Efficiency", ml: "കാര്യക്ഷമത" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Outsourcing to countries with weak labor laws raises ethical issues.", ml: "തൊഴിലാളി നിയമങ്ങൾ കർശനമല്ലാത്ത രാജ്യങ്ങളിലെ ബാലവേല ഒരു ധാർമ്മിക പ്രശ്നമാണ്." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "About what percentage of online transactions are made via credit cards?", ml: "ഓൺലൈൻ ഇടപാടുകളിൽ എത്ര ശതമാനം ക്രെഡിറ്റ് കാർഡ് വഴിയാണ് നടക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "50%", ml: "50%" } },
        { k: "B", text: { en: "75%", ml: "75%" } },
        { k: "C", text: { en: "95%", ml: "95%" } },
        { k: "D", text: { en: "100%", ml: "100%" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Around 95% of online consumer transactions involve credit cards.", ml: "ഏകദേശം 95 ശതമാനം ഇടപാടുകളും ക്രെഡിറ്റ് കാർഡ് വഴിയാണ്." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "SSL is used for?", ml: "SSL എന്തിനാണ് ഉപയോഗിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Browsing speed", ml: "വേഗത വർദ്ധിപ്പിക്കാൻ" } },
        { k: "B", text: { en: "Secure transactions", ml: "സുരക്ഷിതമായ ഇടപാടുകൾക്ക്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Secure Sockets Layer (SSL) ensures safety in e-transactions.", ml: "ഇടപാടുകൾ സുരക്ഷിതമാക്കാൻ SSL സഹായിക്കുന്നു." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "Which mode of business has lower operating costs?", ml: "പ്രവർത്തന ചെലവ് കുറഞ്ഞ ബിസിനസ്സ് രീതി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Traditional Business", ml: "പരമ്പരാഗത ബിസിനസ്സ്" } },
        { k: "B", text: { en: "e-Business", ml: "ഇ-ബിസിനസ്സ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "e-Business lacks heavy physical facility investment, reducing costs.", ml: "ഭൗതിക സൗകര്യങ്ങൾ കുറവായതിനാൽ ഇ-ബിസിനസ്സിൽ ചെലവ് കുറവായിരിക്കും." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "The divide created by varying degrees of computer familiarity is called?", ml: "കമ്പ്യൂട്ടർ പരിജ്ഞാനത്തിന്റെ അടിസ്ഥാനത്തിൽ സമൂഹത്തിലുണ്ടാകുന്ന വിഭജനം?" },
      options: [
        { k: "A", text: { en: "Social divide", ml: "സാമൂഹിക വിഭജനം" } },
        { k: "B", text: { en: "Digital divide", ml: "ഡിജിറ്റൽ വിഭജനം" } },
        { k: "C", text: { en: "Economic divide", ml: "സാമ്പത്തിക വിഭജനം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Digital divide separates those with and without tech access.", ml: "സാങ്കേതിക വിദ്യ ഉപയോഗിക്കാൻ കഴിയുന്നവരും ഇല്ലാത്തവരും തമ്മിലുള്ള വ്യത്യാസമാണിത്." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "Which of the following is a transaction risk?", ml: "താഴെ പറയുന്നവയിൽ ഇടപാടിലെ റിസ്ക് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Virus", ml: "വൈറസ്" } },
        { k: "B", text: { en: "Default on delivery", ml: "ഡെലിവറിയിലെ പാളിച്ച" } },
        { k: "C", text: { en: "Hacking", ml: "ഹാക്കിംഗ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Default on delivery is a risk during the transaction process.", ml: "സാധനം എത്തിക്കാതിരിക്കുന്നത് ഇടപാടിലെ ഒരു റിസ്കാണ്." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "Electronic currency that exists only in cyberspace is?", ml: "സൈബർ ലോകത്ത് മാത്രം നിലനിൽപ്പുള്ള ഇലക്ട്രോണിക് കറൻസി?" },
      options: [
        { k: "A", text: { en: "Check", ml: "ചെക്ക്" } },
        { k: "B", text: { en: "Digital Cash", ml: "ഡിജിറ്റൽ ക്യാഷ്" } },
        { k: "C", text: { en: "Draft", ml: "ഡ്രാഫ്റ്റ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Digital cash is an electronic form of money.", ml: "ഇലക്ട്രോണിക് രൂപത്തിലുള്ള പണമാണ് ഡിജിറ്റൽ ക്യാഷ്." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "Why is India preferred for BPO?", ml: "എന്തുകൊണ്ടാണ് ഇന്ത്യ ഔട്ട്‌സോഴ്‌സിംഗിന് പ്രിയപ്പെട്ട ഇടമാകുന്നത്?" },
      options: [
        { k: "A", text: { en: "High cost", ml: "കൂടുതൽ ചെലവ്" } },
        { k: "B", text: { en: "Low-cost skilled manpower", ml: "കുറഞ്ഞ ചെലവിൽ വിദഗ്ദ്ധരായ തൊഴിലാളികൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "India offers abundant talent at competitive costs.", ml: "വിദഗ്ദ്ധ തൊഴിലാളികൾ കുറഞ്ഞ നിരക്കിൽ ലഭ്യമാണ് എന്നതാണ് പ്രധാന കാരണം." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "Outsourcing focuses on which activities?", ml: "ഔട്ട്‌സോഴ്‌സിംഗ് പ്രധാനമായും ഏത് പ്രവർത്തനങ്ങളിലാണ് ശ്രദ്ധിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Core", ml: "പ്രധാനം" } },
        { k: "B", text: { en: "Non-core", ml: "പ്രധാനമല്ലാത്തത്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Firms usually outsource routine or non-core activities.", ml: "സാധാരണയായി പ്രധാനമല്ലാത്ത ജോലികളാണ് ഔട്ട്‌സോഴ്‌സ് ചെയ്യുന്നത്." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "Benefit of e-business involving mouse clicks?", ml: "ഒരു ക്ലിക്കിലൂടെ വിവരങ്ങൾ കൈമാറാൻ കഴിയുന്ന ഇ-ബിസിനസ് ഗുണം?" },
      options: [
        { k: "A", text: { en: "Speed", ml: "വേഗത" } },
        { k: "B", text: { en: "Risk", ml: "റിസ്ക്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Information exchange in e-business is instantaneous.", ml: "ഇ-ബിസിനസ്സിൽ വിവരങ്ങൾ അതിവേഗം കൈമാറാൻ കഴിയും." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "Which tool reads consumer preferences on websites?", ml: "ഉപഭോക്താക്കളുടെ താൽപ്പര്യങ്ങൾ തിരിച്ചറിയാൻ വെബ്‌സൈറ്റുകൾ ഉപയോഗിക്കുന്ന ഉപകരണം?" },
      options: [
        { k: "A", text: { en: "VIRUS", ml: "വൈറസ്" } },
        { k: "B", text: { en: "Cookies", ml: "കുക്കീസ് (Cookies)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Cookies store user info to customize the web experience.", ml: "ഉപഭോക്താക്കളുടെ വിവരങ്ങൾ ശേഖരിക്കാൻ കുക്കീസ് ഉപയോഗിക്കുന്നു." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "Main disadvantage of e-business for clothes?", ml: "വസ്ത്രങ്ങൾ വാങ്ങുമ്പോൾ ഇ-ബിസിനസ്സിനുള്ള പ്രധാന പോരായ്മ?" },
      options: [
        { k: "A", text: { en: "Lack of personal touch", ml: "നേരിട്ടുള്ള പരിശോധനയുടെ കുറവ്" } },
        { k: "B", text: { en: "Global reach", ml: "ആഗോള വ്യാപനം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "You cannot feel or try on products in e-business.", ml: "സാധനങ്ങൾ നേരിട്ട് തൊട്ടുനോക്കാനോ പരിശോധിക്കാനോ കഴിയില്ല." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "Step after registration in online trading is?", ml: "ഓൺലൈൻ വ്യാപാരത്തിൽ രജിസ്ട്രേഷന് ശേഷമുള്ള ഘട്ടം?" },
      options: [
        { k: "A", text: { en: "Payment", ml: "പേയ്‌മെന്റ്" } },
        { k: "B", text: { en: "Placing an order", ml: "ഓർഡർ നൽകൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "After registering, you browse and place an order.", ml: "രജിസ്റ്റർ ചെയ്തുകഴിഞ്ഞാൽ സാധനങ്ങൾ തിരഞ്ഞെടുത്ത് ഓർഡർ നൽകാം." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "Encryption of data is part of?", ml: "ഡാറ്റ എൻക്രിപ്റ്റ് ചെയ്യുന്നത് ഏതിന്റെ ഭാഗമാണ്?" },
      options: [
        { k: "A", text: { en: "Delivery", ml: "ഡെലിവറി" } },
        { k: "B", text: { en: "Cryptography", ml: "ക്രിപ്റ്റോഗ്രാഫി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Encryption is used in cryptography to secure data.", ml: "വിവരങ്ങൾ സുരക്ഷിതമായി മാറ്റുന്ന പ്രക്രിയയാണിത്." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "Does e-business require a paper-based system?", ml: "ഇ-ബിസിനസ്സിന് പേപ്പർ രേഖകൾ നിർബന്ധമാണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No (Paperless)", ml: "അല്ല (പേപ്പർ രഹിതം)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "e-Business moves towards a paperless society.", ml: "ഇ-ബിസിനസ്സ് പേപ്പർ രഹിത സംവിധാനത്തെ പ്രോത്സാഹിപ്പിക്കുന്നു." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "In B2C, 'C' stands for?", ml: "B2C-യിൽ 'C' എന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Company", ml: "കമ്പനി" } },
        { k: "B", text: { en: "Customer", ml: "ഉപഭോക്താവ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "B2C is Business-to-Customer.", ml: "ബിസിനസ്സും ഉപഭോക്താവും തമ്മിലുള്ള ഇടപാടാണത്." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "Sweat-shopping is a concern in?", ml: "സ്വെറ്റ് ഷോപ്പിംഗ് (Sweat-shopping) ഏതുമായി ബന്ധപ്പെട്ട ആശങ്കയാണ്?" },
      options: [
        { k: "A", text: { en: "Traditional Business", ml: "പരമ്പരാഗത ബിസിനസ്സ്" } },
        { k: "B", text: { en: "Outsourcing", ml: "ഔട്ട്‌സോഴ്‌സിംഗ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Exploiting low-cost labor in BPO is called sweat-shopping.", ml: "ഔട്ട്‌സോഴ്‌സിംഗിൽ കുറഞ്ഞ കൂലിക്ക് തൊഴിലാളികളെ ചൂഷണം ചെയ്യുന്നത് ഒരു പ്രശ്നമാണ്." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "Is e-business easy to form compared to traditional?", ml: "പരമ്പരാഗത ബിസിനസ്സിനേക്കാൾ ഇ-ബിസിനസ്സ് തുടങ്ങാൻ എളുപ്പമാണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "അല്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It is relatively easy to set up an e-business.", ml: "ഇ-ബിസിനസ്സ് തുടങ്ങുന്നത് താരതമ്യേന എളുപ്പമാണ്." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "What promotes ITES in India?", ml: "ഇന്ത്യയിൽ ഐടി സേവനങ്ങൾ മെച്ചപ്പെടാൻ കാരണമെന്ത്?" },
      options: [
        { k: "A", text: { en: "Lack of manpower", ml: "തൊഴിലാളികളുടെ കുറവ്" } },
        { k: "B", text: { en: "Large pool of English speaking manpower", ml: "ഇംഗ്ലീഷ് അറിയാവുന്ന വിദഗ്ദ്ധ തൊഴിലാളികൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Skilled, English-speaking youth is India's strength.", ml: "ഇംഗ്ലീഷ് സംസാരിക്കുന്ന മിടുക്കരായ യുവാക്കൾ ഇന്ത്യയുടെ ശക്തിയാണ്." }
    }
  ],
  videos: [
    { title: "05 ബിസിനസ്സ് പുതിയ വഴികൾ", url: "https://www.youtube.com/watch?v=HLUvBq1iIBA" }
  ]
};

export const plusOneBusinessStudiesUnit6: Lesson = {
  id: "pl-bs-11-unit6",
  title: { en: "Social Responsibilities of Business and Business Ethics", ml: "ബിസിനസ്സിന്റെ സാമൂഹിക ഉത്തരവാദിത്തങ്ങളും ബിസിനസ്സ് ധാർമ്മികതയും" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Understand the concept and need for social responsibility of business", ml: "ബിസിനസ്സിന്റെ സാമൂഹിക ഉത്തരവാദിത്തം എന്ന ആശയവും അതിന്റെ ആവശ്യകതയും മനസ്സിലാക്കുക" },
    { en: "Identify the responsibilities of business towards various interest groups", ml: "വിവിധ താൽപ്പര്യ ഗ്രൂപ്പുകളോട് ബിസിനസ്സിനുള്ള ഉത്തരവാദിത്തങ്ങൾ തിരിച്ചറിയുക" },
    { en: "Analyze the role of business in environmental protection", ml: "പരിസ്ഥിതി സംരക്ഷണത്തിൽ ബിസിനസ്സ് ഉള്ള പങ്ക് വിശകലനം ചെയ്യുക" },
    { en: "Explain the elements of business ethics and corporate social responsibility (CSR)", ml: "ബിസിനസ്സ് ധാർമ്മികതയുടെ ഘടകങ്ങളും കോർപ്പറേറ്റ് സാമൂഹിക ഉത്തരവാദിത്തവും (CSR) വിവരിക്കുക" }
  ],
  content: {
    intro: {
      en: "This chapter explains the transition of business objectives from mere profit maximization to actively participating in social welfare.",
      ml: "വെറും ലാഭം നേടുക എന്നതിൽ നിന്ന് മാറി സാമൂഹിക ക്ഷേമത്തിൽ സജീവമായി പങ്കുചേരുന്ന ബിസിനസ്സ് ലക്ഷ്യങ്ങളെക്കുറിച്ച് ഈ അധ്യായം വിവരിക്കുന്നു."
    },
    core: {
      en: "Learn about obligations towards shareholders, workers, and consumers, environmental protection, and the moral principles of business ethics.",
      ml: "ഓഹരിയുടമകൾ, തൊഴിലാളികൾ, ഉപഭോക്താക്കൾ എന്നിവരോടുള്ള ഉത്തരവാദിത്തങ്ങൾ, പരിസ്ഥിതി സംരക്ഷണം, ബിസിനസ്സ് ധാർമ്മികതയുടെ മൂല്യങ്ങൾ എന്നിവയെക്കുറിച്ച് പഠിക്കുക."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter explains the transition of business objectives from mere profit maximization to actively participating in social welfare. It covers the concept and need for social responsibility, specific obligations towards interest groups, environmental protection, and core elements of business ethics.', ml: 'ലാഭം വർദ്ധിപ്പിക്കുക എന്നതിലുപരി സാമൂഹിക ക്ഷേമത്തിന് ബിസിനസ്സ് നൽകേണ്ട പ്രാധാന്യത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. സാമൂഹിക ഉത്തരവാദിത്തത്തിന്റെ ആവശ്യകത, വിവിധ വിഭാഗങ്ങളോടുള്ള കടമകൾ, പരിസ്ഥിതി സംരക്ഷണം, ബിസിനസ്സ് ധാർമ്മികത (Business Ethics) എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Social Responsibility: Obligation to make decisions and take actions that align with societal values.', ml: 'സാമൂഹിക ഉത്തരവാദിത്തം (Social Responsibility): സമൂഹത്തിന്റെ താൽപ്പര്യങ്ങൾക്കും മൂല്യങ്ങൾക്കും അനുസൃതമായി തീരുമാനങ്ങൾ എടുക്കാനും പ്രവർത്തിക്കാനുമുള്ള ബിസിനസ്സിന്റെ ബാധ്യത.' },
        { en: 'Corporate Social Responsibility (CSR): Companies integrating social and environmental concerns into business operations.', ml: 'കോർപ്പറേറ്റ് സാമൂഹിക ഉത്തരവാദിത്തം (CSR): ബിസിനസ്സ് പ്രവർത്തനങ്ങളിൽ സാമൂഹികവും പാരിസ്ഥിതികവുമായ കാര്യങ്ങൾ കൂടി ഉൾപ്പെടുത്തുന്ന രീതി.' },
        { en: 'Environmental Protection: Minimizing or eliminating pollution generated by business activities.', ml: 'പരിസ്ഥിതി സംരക്ഷണം (Environmental Protection): ബിസിനസ്സ് പ്രവർത്തനങ്ങൾ മൂലമുണ്ടാകുന്ന മലിനീകരണം കുറയ്ക്കുകയും പ്രകൃതിയെ സംരക്ഷിക്കുകയും ചെയ്യുക.' },
        { en: 'Business Ethics: Socially determined moral principles that govern business activities.', ml: 'ബിസിനസ്സ് ധാർമ്മികത (Business Ethics): ബിസിനസ്സ് പ്രവർത്തനങ്ങളെ നിയന്ത്രിക്കുന്ന സാമൂഹികമായി അംഗീകരിക്കപ്പെട്ട ധാർമ്മിക തത്വങ്ങൾ.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      { type: 'h3', en: '3.1 Need for Social Responsibility', ml: '3.1 സാമൂഹിക ഉത്തരവാദിത്തത്തിന്റെ ആവശ്യകത' },
      { type: 'p', en: 'Arguments FOR:', ml: 'അനുകൂല വാദങ്ങൾ:' },
      { type: 'ul', items: [
        { en: 'Justification for existence: Society provides resources, so business must serve society.', ml: 'നിലനിൽപ്പിനുള്ള ന്യായീകരണം: സമൂഹം വിഭവങ്ങൾ നൽകുന്നതിനാൽ ബിസിനസ്സ് സമൂഹത്തെ സേവിക്കണം.' },
        { en: 'Long-term interest: Improves public image and long-term profits.', ml: 'ദീർഘകാല താൽപ്പര്യം: ബിസിനസ്സിന്റെ സൽപ്പേരും ദീർഘകാല ലാഭവും വർദ്ധിപ്പിക്കുന്നു.' },
        { en: 'Avoidance of government regulation: Voluntary action reduces strict laws.', ml: 'സർക്കാർ നിയന്ത്രണങ്ങൾ ഒഴിവാക്കൽ: സ്വമേധയാ ഉത്തരവാദിത്തം ഏറ്റെടുക്കുന്നത് കർശന നിയമങ്ങളെ ഒഴിവാക്കാൻ സഹായിക്കുന്നു.' }
      ]},
      { type: 'p', en: 'Arguments AGAINST:', ml: 'പ്രതികൂല വാദങ്ങൾ:' },
      { type: 'ul', items: [
        { en: 'Violation of profit maximisation: Business exists solely for profit.', ml: 'ലാഭം പരമാവധിയാക്കുക എന്ന ലക്ഷ്യത്തിന് വിരുദ്ധം: ബിസിനസ്സ് ലാഭത്തിന് വേണ്ടിയുള്ളതാണ്.' },
        { en: 'Burden on consumers: Costs of social work are shifted via higher prices.', ml: 'ഉപഭോക്താക്കൾക്ക് ഭാരം: സാമൂഹിക പ്രവർത്തനങ്ങളുടെ ചെലവ് വില വർദ്ധനയിലൂടെ ഉപഭോക്താക്കളിൽ എത്തുന്നു.' }
      ]},

      { type: 'h3', en: '3.2 Responsibility Towards Different Groups', ml: '3.2 വിവിധ താൽപ്പര്യ ഗ്രൂപ്പുകളോടുള്ള ഉത്തരവാദിത്തങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Shareholders: Fair return on investment and safety of capital.', ml: 'ഓഹരിയുടമകൾ (Shareholders): മുടക്കുമുതലിന് കൃത്യമായ ലാഭവിഹിതം നൽകുകയും മൂലധനം സംരക്ഷിക്കുകയും ചെയ്യുക.' },
        { en: 'Workers: Fair wages and safe working conditions.', ml: 'തൊഴിലാളികൾ (Workers): അർഹമായ വേതനവും സുരക്ഷിതമായ ജോലി സാഹചര്യങ്ങളും ഉറപ്പാക്കുക.' },
        { en: 'Consumers: Quality goods at reasonable prices and honest advertising.', ml: 'ഉപഭോക്താക്കൾ (Consumers): ഗുണമേന്മയുള്ള സാധനങ്ങൾ ന്യായമായ വിലയ്ക്ക് നൽകുകയും പരസ്യങ്ങളിൽ സത്യസന്ധത പാലിക്കുകയും ചെയ്യുക.' },
        { en: 'Government: Honesty in paying taxes and following laws.', ml: 'സർക്കാരും സമൂഹവും: കൃത്യമായി നികുതി അടയ്ക്കുകയും നിയമങ്ങൾ പാലിക്കുകയും ചെയ്യുക.' }
      ]},

      { type: 'h3', en: '3.3 Business and Environmental Protection', ml: '3.3 ബിസിനസ്സും പരിസ്ഥിതി സംരക്ഷണവും' },
      { type: 'p', en: 'Pollution types caused by industry: Air, Water, Land, and Noise.', ml: 'വ്യവസായങ്ങൾ മൂലം ഉണ്ടാകുന്ന മലിനീകരണങ്ങൾ: വായു, ജലം, മണ്ണ്, ശബ്ദ മലിനീകരണം.' },
      { type: 'ul', items: [
        { en: 'Need for control: Reduces health hazards and saves operating costs.', ml: 'നിയന്ത്രണത്തിന്റെ ആവശ്യകത: ആരോഗ്യ പ്രശ്നങ്ങൾ കുറയ്ക്കാനും പ്രവർത്തന ചെലവ് ലാഭിക്കാനും സഹായിക്കുന്നു.' },
        { en: 'Role of business: Top management commitment and eco-friendly policies.', ml: 'ബിസിനസ്സിന്റെ പങ്ക്: പരിസ്ഥിതി സൗഹൃദ നയങ്ങൾ നടപ്പിലാക്കുക.' }
      ]},

      { type: 'h3', en: '3.4 Elements of Business Ethics', ml: '3.4 ബിസിനസ്സ് ധാർമ്മികതയുടെ ഘടകങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Top management commitment.', ml: 'ഉന്നത മാനേജ്‌മെന്റിന്റെ പ്രതിബദ്ധത.' },
        { en: 'Publication of a Code of conduct.', ml: 'ധാർമ്മിക പെരുമാറ്റച്ചട്ടം (Code) പ്രസിദ്ധീകരിക്കൽ.' },
        { en: 'Establishment of compliance mechanisms.', ml: 'നിയമപാലന സംവിധാനങ്ങൾ ഒരുക്കൽ.' },
        { en: 'Involving employees at all levels.', ml: 'തൊഴിലാളികളെ ഉൾപ്പെടുത്തൽ.' }
      ]},

      { type: 'h2', en: '4. Tables for Easy Learning', ml: '4. പഠിക്കാൻ എളുപ്പത്തിനുള്ള പട്ടികകൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Type of Pollution', ml: 'മലിനീകരണം'}, {en: 'Cause', ml: 'കാരണം'}, {en: 'Impact', ml: 'ആഘാതം'}],
        rows: [
          [{en: 'Air', ml: 'വായു'}, {en: 'Automobiles/Smoke', ml: 'വാഹനങ്ങൾ/പുക'}, {en: 'Ozone depletion', ml: 'ഓസോൺ തകർച്ച'}],
          [{en: 'Water', ml: 'ജലം'}, {en: 'Chemical waste', ml: 'രാസമാലിന്യം'}, {en: 'Threat to aquatic life', ml: 'ജലജീവികൾക്ക് ഭീഷണി'}],
          [{en: 'Noise', ml: 'ശബ്ദം'}, {en: 'Factories/Vehicles', ml: 'യന്ത്രങ്ങൾ/വാഹനങ്ങൾ'}, {en: 'Hearing loss', ml: 'കേൾവിക്കുറവ്'}]
        ]
      }},

      { type: 'h2', en: '5. Extract and Highlight', ml: '5. എടുത്തു പറയേണ്ട കാര്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'CSR Spending: 2% of average net profit of the previous three years.', ml: 'CSR ചെലവ്: കഴിഞ്ഞ മൂന്ന് വർഷത്തെ ശരാശരി ലാഭത്തിന്റെ 2%.' },
        { en: 'Companies Act 2013: Clause 135 mandates CSR for large firms.', ml: '2013-ലെ കമ്പനി നിയമം: വൻകിട കമ്പനികൾക്ക് CSR നിർബന്ധമാക്കി.' },
        { en: 'Legal vs Social: Social responsibility is broader than legal.', ml: 'നിയമപരവും സാമൂഹികവും: നിയമപരമായ ബാധ്യതയേക്കാൾ വിപുലമാണ് സാമൂഹിക ഉത്തരവാദിത്തം.' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "CSR", ml: "സി.എസ്.ആർ (CSR)" }, definition: { en: "Corporate Social Responsibility toward society.", ml: "സമൂഹത്തോടുള്ള കമ്പനികളുടെ സാമൂഹിക ബാധ്യത." } },
    { term: { en: "Ethics", ml: "ധാർമ്മികത" }, definition: { en: "Moral principles governing behavior.", ml: "പെരുമാറ്റത്തെ നിയന്ത്രിക്കുന്ന ധാർമ്മിക മൂല്യങ്ങൾ." } },
    { term: { en: "Pollution", ml: "മലിനീകരണം" }, definition: { en: "Injection of harmful substances into environment.", ml: "പരിസ്ഥിതിയിലേക്ക് ദോഷകരമായ വസ്തുക്കൾ കടത്തിവിടുന്നത്." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "Social responsibility is ____ than legal responsibility.", ml: "സാമൂഹിക ഉത്തരവാദിത്തം നിയമപരമായ ഉത്തരവാദിത്തത്തേക്കാൾ ____ ആണ്." },
      options: [
        { k: "A", text: { en: "Narrower", ml: "കുറവാണ്" } },
        { k: "B", text: { en: "Broader", ml: "കൂടുതലാണ് (വിപുലം)" } },
        { k: "C", text: { en: "Same", ml: "തുല്യമാണ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Social responsibility includes voluntary actions beyond what is required by law.", ml: "നിയമപരമായ നിബന്ധനകൾക്കും അപ്പുറത്തുള്ള സന്നദ്ധ പ്രവർത്തനങ്ങൾ സാമൂഹിക ഉത്തരവാദിത്തത്തിൽ ഉൾപ്പെടുന്നു." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "What is the primary responsibility of a business?", ml: "ഒരു ബിസിനസ്സിന്റെ പ്രാഥമിക ഉത്തരവാദിത്തം എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Legal", ml: "നിയമപരം" } },
        { k: "B", text: { en: "Economic", ml: "സാമ്പത്തികം (ലാഭം)" } },
        { k: "C", text: { en: "Ethical", ml: "ധാർമ്മികം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The primary (economic) responsibility is to produce goods/services and earn profit.", ml: "ലാഭമുണ്ടാക്കി സാധനങ്ങളും സേവനങ്ങളും ഉൽപ്പാദിപ്പിക്കുക എന്നതാണ് ഏറ്റവും പ്രധാനപ്പെട്ട സാമ്പത്തിക ഉത്തരവാദിത്തം." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "Donating funds for flood victims is an example of which responsibility?", ml: "പ്രളയബാധിതർക്ക് ധനസഹായം നൽകുന്നത് ഏത് ഉത്തരവാദിത്തത്തിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Legal", ml: "നിയമപരം" } },
        { k: "B", text: { en: "Discretionary", ml: "വിവേചനാധികാരപരമായ (സ്വമേധയാ ഉള്ളത്)" } },
        { k: "C", text: { en: "Economic", ml: "സാമ്പത്തികം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Discretionary responsibilities are purely voluntary obligations.", ml: "സ്വമേധയാ ചെയ്യുന്ന ഇത്തരം കാര്യങ്ങളെ ഡിസ്ക്риഷണറി ഉത്തരവാദിത്തം എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "To which group does a business owe the responsibility of providing fair wages?", ml: "തൊഴിലാളികൾക്ക് അർഹമായ വേതനം നൽകുക എന്നത് ബിസിനസ്സിന് ആരോടുള്ള ഉത്തരവാദിത്തമാണ്?" },
      options: [
        { k: "A", text: { en: "Consumers", ml: "ഉപഭോക്താക്കൾ" } },
        { k: "B", text: { en: "Shareholders", ml: "ഓഹരിയുടമകൾ" } },
        { k: "C", text: { en: "Workers", ml: "തൊഴിലാളികൾ" } },
        { k: "D", text: { en: "Government", ml: "സർക്കാർ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Businesses must provide fair wages and safe conditions to their employees.", ml: "തൊഴിലാളികൾക്ക് സുരക്ഷിതമായ ജോലി സാഹചര്യവും വേതനവും നൽകേണ്ടത് ബിസിനസ്സിന്റെ കടമയാണ്." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "Ethics is derived from the Greek word 'Ethos', which means?", ml: "'എത്തോസ്' (Ethos) എന്ന ഗ്രീക്ക് പദത്തിൽ നിന്നാണ് എത്തിക്സ് ഉണ്ടായത്. ഇതിന്റെ അർത്ഥം?" },
      options: [
        { k: "A", text: { en: "Profit", ml: "ലാഭം" } },
        { k: "B", text: { en: "Character/Norms", ml: "സ്വഭാവം/പെരുമാറ്റ രീതി" } },
        { k: "C", text: { en: "Law", ml: "നിയമം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Ethics refers to moral character and norms of conduct.", ml: "ധാർമ്മികമായ സ്വഭാവത്തെയും പെരുമാറ്റത്തെയുമാണ് ഇത് സൂചിപ്പിക്കുന്നത്." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "Which pollution contributes most to global warming?", ml: "ആഗോളതാപനത്തിന് (Global warming) ഏറ്റവും കൂടുതൽ കാരണമാകുന്ന മലിനീകരണം?" },
      options: [
        { k: "A", text: { en: "Water", ml: "ജലം" } },
        { k: "B", text: { en: "Air", ml: "വായു" } },
        { k: "C", text: { en: "Noise", ml: "ശബ്ദം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Air pollution from factories and vehicles contributes to global warming.", ml: "വാഹനങ്ങളിൽ നിന്നും ഫാക്ടറികളിൽ നിന്നുമുള്ള പുക വായുമലിനീകരണത്തിനും അതുവഴി ആഗോളതാപനത്തിനും കാരണമാകുന്നു." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "What percentage of net profit is encouraged for CSR activities in India?", ml: "CSR പ്രവർത്തനങ്ങൾക്കായി ലാഭത്തിന്റെ എത്ര ശതമാനം ചെലവാക്കാനാണ് ഇന്ത്യയിൽ നിർദ്ദേശിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "1%", ml: "1%" } },
        { k: "B", text: { en: "2%", ml: "2%" } },
        { k: "C", text: { en: "5%", ml: "5%" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Companies are encouraged to spend 2% of their average net profit on CSR.", ml: "ശരാശരി ലാഭത്തിന്റെ 2 ശതമാനം CSR-നായി മാറ്റിവെക്കാൻ കമ്പനി നിയമം ആവശ്യപ്പെടുന്നു." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "Environmental protection helps in reducing ____ liability.", ml: "പരിസ്ഥിതി സംരക്ഷണം ബിസിനസ്സിന്റെ ____ ബാധ്യത കുറയ്ക്കാൻ സഹായിക്കുന്നു." },
      options: [
        { k: "A", text: { en: "Profit", ml: "ലാഭം" } },
        { k: "B", text: { en: "Legal", ml: "നിയമപരമായ" } },
        { k: "C", text: { en: "Share", ml: "ഓഹരി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Pollution control reduces risk of fines and legal compensation.", ml: "മലിനീകരണം തടയുന്നതിലൂടെ പിഴകളിൽ നിന്നും മറ്റ് നിയമനടപടികളിൽ നിന്നും ഒഴിവാകാം." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "Which of these is an element of business ethics?", ml: "ബിസിനസ്സ് ധാർമ്മികതയുടെ ഒരു ഘടകം താഴെ പറയുന്നവയിൽ ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Code of Conduct", ml: "പെരുമാറ്റച്ചട്ടം (Code)" } },
        { k: "B", text: { en: "High Prices", ml: "കൂടിയ വില" } },
        { k: "C", text: { en: "Misleading ads", ml: "തെറ്റായ പരസ്യങ്ങൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "An ethical business creates a written Code of Conduct.", ml: "ധാർമ്മികമായി പ്രവർത്തിക്കുന്ന ഒരു സ്ഥാപനത്തിന് വ്യക്തമായ പെരുമാറ്റച്ചട്ടം ഉണ്ടായിരിക്കും." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "Carbon monoxide emission is a major cause of?", ml: "കാർബൺ മോണോക്സൈഡ് പുറന്തള്ളുന്നത് പ്രധാനമായും ഏത് മലിനീകരണത്തിന് കാരണമാകുന്നു?" },
      options: [
        { k: "A", text: { en: "Water pollution", ml: "ജലമലിനീകരണം" } },
        { k: "B", text: { en: "Air pollution", ml: "വായുമലിനീകരണം" } },
        { k: "C", text: { en: "Land pollution", ml: "മണ്ണുമലിനീകരണം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Gases from vehicles and industries pollute the air.", ml: "വ്യവസായങ്ങളിൽ നിന്നും വാഹനങ്ങളിൽ നിന്നുമുള്ള പുക വായുവിനെ മലിനമാക്കുന്നു." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "Providing accurate information to investors is a responsibility towards?", ml: "നിക്ഷേപകർക്ക് കൃത്യമായ വിവരങ്ങൾ നൽകുക എന്നത് ആരോടുള്ള ഉത്തരവാദിത്തമാണ്?" },
      options: [
        { k: "A", text: { en: "Government", ml: "സർക്കാർ" } },
        { k: "B", text: { en: "Shareholders", ml: "ഓഹരിയുടമകൾ" } },
        { k: "C", text: { en: "Consumers", ml: "ഉപഭോക്താക്കൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Investors/Shareholders have the right to know about company growth.", ml: "നിക്ഷേപകർക്ക് കമ്പനിയുടെ വളർച്ചയെക്കുറിച്ച് അറിയാനുള്ള അവകാശമുണ്ട്." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "The term 'Caveat Emptor' means?", ml: "'കാവിയറ്റ് എംപ്റ്റർ' (Caveat Emptor) എന്നാൽ അർത്ഥമാക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Let the seller beware", ml: "വിൽക്കുന്നവൻ ശ്രദ്ധിക്കട്ടെ" } },
        { k: "B", text: { en: "Let the buyer beware", ml: "വാങ്ങുന്നവൻ ശ്രദ്ധിക്കട്ടെ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is a principle meaning the buyer is responsible for checking quality.", ml: "സാധനങ്ങൾ വാങ്ങുമ്പോൾ വാങ്ങുന്നവർ ജാഗ്രത പാലിക്കണം എന്ന തത്വമാണിത്." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "Which of the following is NOT an argument for social responsibility?", ml: "സാമൂഹിക ഉത്തരവാദിത്തത്തിന് അനുകൂലമല്ലാത്ത വാദം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Long term interest", ml: "ദീർഘകാല താൽപ്പര്യം" } },
        { k: "B", text: { en: "Avoidance of govt. regulation", ml: "സർക്കാർ നിയന്ത്രണം ഒഴിവാക്കൽ" } },
        { k: "C", text: { en: "Violation of profit motive", ml: "ലാഭലക്ഷ്യത്തിന് വിരുദ്ധം" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Violation of profit motive is an argument against social responsibility.", ml: "ബിസിനസ്സ് ലാഭത്തിന് വേണ്ടിയുള്ളതാണെന്നും സാമൂഹിക ഉത്തരവാദിത്തം അതിന് തടസ്സമാണെന്നുമുള്ള വാദം എതിർപ്പാണ്." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "Dumping toxic wastes on soil causes?", ml: "വിഷമാലിന്യങ്ങൾ മണ്ണിലേക്ക് തള്ളുന്നത് എന്തിന് കാരണമാകുന്നു?" },
      options: [
        { k: "A", text: { en: "Water pollution", ml: "ജലമലിനീകരണം" } },
        { k: "B", text: { en: "Land pollution", ml: "മണ്ണുമലിനീകരണം" } },
        { k: "C", text: { en: "Noise pollution", ml: "ശബ്ദമലിനീകരണം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Toxic chemicals damage the soil quality.", ml: "രാസമാലിന്യങ്ങൾ മണ്ണിന്റെ ഗുണനിലവാരം നശിപ്പിക്കുന്നു." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "Ethical behavior results in?", ml: "ധാർമ്മികമായ പെരുമാറ്റം ബിസിനസ്സിൽ എന്തുണ്ടാക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Losses", ml: "നഷ്ടം" } },
        { k: "B", text: { en: "Improved public image", ml: "മികച്ച സൽപ്പേര്" } },
        { k: "C", text: { en: "Fines", ml: "പിഴ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Good ethics build trust and reputation for the firm.", ml: "സത്യസന്ധതയും ധാർമ്മികതയും ബിസിനസ്സിന്റെ സൽപ്പേര് വർദ്ധിപ്പിക്കുന്നു." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "The responsibility to pay taxes honestly is towards?", ml: "കൃത്യമായി നികുതി അടയ്ക്കുക എന്നത് ആരോടുള്ള ഉത്തരവാദിത്തമാണ്?" },
      options: [
        { k: "A", text: { en: "Government", ml: "സർക്കാർ" } },
        { k: "B", text: { en: "Consumers", ml: "ഉപഭോക്താക്കൾ" } },
        { k: "C", text: { en: "Shareholders", ml: "ഓഹരിയുടമകൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Businesses must pay taxes to the government for national development.", ml: "രാജ്യപുരോഗതിക്കായി സർക്കാരിലേക്ക് കൃത്യമായി നികുതി നൽകേണ്ടത് ബിസിനസ്സിന്റെ കടമയാണ്." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "Is legal responsibility broader than social responsibility?", ml: "നിയമപരമായ ഉത്തരവാദിത്തം സാമൂഹിക ഉത്തരവാദിത്തത്തേക്കാൾ വിപുലമാണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "അല്ല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Social responsibility is broader as it includes voluntary ethical acts.", ml: "നിയമത്തിനപ്പുറം സന്നദ്ധമായി ചെയ്യുന്ന കാര്യങ്ങൾ കൂടി ഉൾപ്പെടുന്നതിനാൽ സാമൂഹിക ഉത്തരവാദിത്തമാണ് കൂടുതൽ വിപുലം." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "Pollution control measures can ____ operating costs in the long run.", ml: "മലിനീകരണ നിയന്ത്രണ മാർഗങ്ങൾ ദീർഘകാലാടിസ്ഥാനത്തിൽ പ്രവർത്തന ചെലവ് ____." },
      options: [
        { k: "A", text: { en: "Increase", ml: "വർദ്ധിപ്പിക്കും" } },
        { k: "B", text: { en: "Reduce (Save)", ml: "കുറയ്ക്കും (ലാഭിക്കും)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "By reducing waste, firms can save money on raw materials and cleaning.", ml: "മാലിന്യങ്ങൾ കുറയ്ക്കുന്നതിലൂടെ അസംസ്കൃത വസ്തുക്കൾ ലാഭിക്കാനും ചെലവ് കുറയ്ക്കാനും സാധിക്കും." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "Noise pollution is primarily caused by?", ml: "ശബ്ദമലിനീകരണത്തിന് പ്രധാന കാരണം?" },
      options: [
        { k: "A", text: { en: "Chemicals", ml: "രാസവസ്തുക്കൾ" } },
        { k: "B", text: { en: "Heavy machinery and vehicles", ml: "യന്ത്രങ്ങളും വാഹനങ്ങളും" } },
        { k: "C", text: { en: "Sewage", ml: "മലിനജലം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Loud noise from factories and transport causes noise pollution.", ml: "ഫാക്ടറികളിലെ വലിയ യന്ത്രങ്ങളും വാഹനങ്ങളുടെ ശബ്ദവുമാണ് ഇതിന് കാരണം." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "Responsibility to supply right quality of goods at reasonable price is towards?", ml: "ഗുണമേന്മയുള്ള സാധനങ്ങൾ ന്യായവിലയ്ക്ക് നൽകുക എന്നത് ആരോടുള്ള കടമയാണ്?" },
      options: [
        { k: "A", text: { en: "Shareholders", ml: "ഓഹരിയുടമകൾ" } },
        { k: "B", text: { en: "Government", ml: "സർക്കാർ" } },
        { k: "C", text: { en: "Consumers", ml: "ഉപഭോക്താക്കൾ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Consumers deserve good products for the price they pay.", ml: "ഉപഭോക്താക്കൾക്ക് നല്ല ഉൽപ്പന്നങ്ങൾ നൽകേണ്ടത് ബിസിനസ്സിന്റെ പ്രധാന കടമയാണ്." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "Top management commitment is essential for?", ml: "ഉന്നത മാനേജ്‌മെന്റിന്റെ പ്രതിബദ്ധത എന്തിനാണ് അത്യാവശ്യം?" },
      options: [
        { k: "A", text: { en: "Legal rules", ml: "നിയമങ്ങൾ പാലിക്കാൻ" } },
        { k: "B", text: { en: "Ethical behavior in organization", ml: "ധാർമ്മികത വളർത്താൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Leadership must set an example for ethical standards.", ml: "സ്ഥാപനത്തിൽ ധാർമ്മിക മൂല്യങ്ങൾ നിലനിർത്താൻ നേതൃത്വം മാതൃകയാകണം." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "Which of these is a social problem a business can help solve?", ml: "ബിസിനസ്സിന് പരിഹരിക്കാൻ സഹായിക്കാവുന്ന ഒരു സാമൂഹിക പ്രശ്നം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Unemployment", ml: "തൊഴിലില്ലായ്മ" } },
        { k: "B", text: { en: "Net profit", ml: "അറ്റാദായം" } },
        { k: "C", text: { en: "Stock price", ml: "ഓഹരി വില" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "By expanding and hiring, businesses reduce unemployment.", ml: "കൂടുതൽ തൊഴിലവസരങ്ങൾ സൃഷ്ടിക്കുന്നതിലൂടെ ബിസിനസ്സ് സമൂഹത്തെ സഹായിക്കുന്നു." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "The Companies Act 2013 mandates CSR for which type of firms?", ml: "2013-ലെ കമ്പനി നിയമപ്രകാരം ഏത് തരം സ്ഥാപനങ്ങൾക്കാണ് CSR നിർബന്ധം?" },
      options: [
        { k: "A", text: { en: "All small shops", ml: "എല്ലാ ചെറിയ കടകൾക്കും" } },
        { k: "B", text: { en: "Firms meeting specific profit/turnover criteria", ml: "നിശ്ചിത ലാഭമുള്ള വലിയ കമ്പനികൾക്ക്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Large firms with high profit/turnover must follow CSR rules.", ml: "വലിയ വിറ്റുവരവും ലാഭവും ഉള്ള കമ്പനികൾക്ക് മാത്രമാണ് ഇത് ബാധകം." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "Business ethics values include?", ml: "ബിസിനസ്സ് ധാർമ്മികതയുടെ മൂല്യങ്ങളിൽ ഉൾപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Honesty", ml: "സത്യസന്ധത" } },
        { k: "B", text: { en: "Adulteration", ml: "മായം ചേർക്കൽ" } },
        { k: "C", text: { en: "Cheating", ml: "ചതി" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Honesty, fairness, and safety are key ethical values.", ml: "സത്യസന്ധതയും നീതിയുമാണ് ധാർമ്മികതയുടെ അടിസ്ഥാനം." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "Dumping chemical wastes into rivers causes?", ml: "രാസമാലിന്യങ്ങൾ പുഴകളിലേക്ക് ഒഴുക്കുന്നത് എന്തിന് കാരണമാകുന്നു?" },
      options: [
        { k: "A", text: { en: "Air pollution", ml: "വായുമലിനീകരണം" } },
        { k: "B", text: { en: "Water pollution", ml: "ജലമലിനീകരണം" } },
        { k: "C", text: { en: "Noise pollution", ml: "ശബ്ദമലിനീകരണം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Industrial waste pollutes drinking water and kills fish.", ml: "മാലിന്യങ്ങൾ കുടിവെള്ളം നശിപ്പിക്കുകയും ജലജീവികളെ കൊല്ലുകയും ചെയ്യുന്നു." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "Providing a good working environment is a responsibility towards?", ml: "നല്ലൊരു തൊഴിൽ സാഹചര്യം ഒരുക്കുക എന്നത് ആരോടുള്ള കടമയാണ്?" },
      options: [
        { k: "A", text: { en: "Government", ml: "സർക്കാർ" } },
        { k: "B", text: { en: "Employees/Workers", ml: "തൊഴിലാളികൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Workers spend a lot of time at business, so it must be safe.", ml: "ജോലിസ്ഥലം സുരക്ഷിതമായിരിക്കുക എന്നത് തൊഴിലാളികളുടെ അവകാശമാണ്." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "Who must set the example for ethical conduct in a firm?", ml: "ധാർമ്മികമായ പെരുമാറ്റത്തിന് സ്ഥാപനത്തിൽ മാതൃകയാകേണ്ടത് ആര്?" },
      options: [
        { k: "A", text: { en: "CEO/Top Management", ml: "സി.ഇ.ഒ (CEO)/ഉന്നത മാനേജ്‌മെന്റ്" } },
        { k: "B", text: { en: "Janitors", ml: "ശുചീകരണ തൊഴിലാളികൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Ethics starts from the top of the organization.", ml: "മുകളിൽ നിന്നുള്ളവരാണ് ധാർമ്മികതയ്ക്ക് നേതൃത്വം നൽകേണ്ടത്." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "Does CSR apply to activities only for employee families?", ml: "സ്വന്തം തൊഴിലാളികളുടെ കുടുംബത്തിന് വേണ്ടി മാത്രം ചെയ്യുന്ന കാര്യങ്ങൾ CSR ആയി പരിഗണിക്കുമോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "അല്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Activities exclusively for employees do not qualify as CSR.", ml: "തൊഴിലാളികൾക്ക് മാത്രമായുള്ള ആനുകൂല്യങ്ങളെ CSR ആയി കണക്കാക്കില്ല." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "Industrial growth has often led to ____ of environment.", ml: "വ്യവസായങ്ങളുടെ വളർച്ച പലപ്പോഴും പരിസ്ഥിതിയുടെ ____ കാരണമായിട്ടുണ്ട്." },
      options: [
        { k: "A", text: { en: "Protection", ml: "സംരക്ഷണം" } },
        { k: "B", text: { en: "Degradation (Damage)", ml: "നാശം (മലിനീകരണം)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Unregulated industry causes heavy pollution.", ml: "നിയന്ത്രണമില്ലാത്ത വ്യവസായങ്ങൾ പരിസ്ഥിതിയെ നശിപ്പിക്കുന്നു." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "Good ethics is good ____.", ml: "നല്ല ധാർമ്മികത എന്നത് നല്ല ____ കൂടിയാണ്." },
      options: [
        { k: "A", text: { en: "Business", ml: "ബിസിനസ്സ്" } },
        { k: "B", text: { en: "Trouble", ml: "കുഴപ്പം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Being ethical helps a business succeed in the long run.", ml: "ധാർമ്മികത പുലർത്തുന്നത് ദീർഘകാലാടിസ്ഥാനത്തിൽ ബിസിനസ്സിനെ സഹായിക്കും." }
    }
  ],
  videos: [
    { title: "06 ബിസിനസ്സിന്റെ സാമൂഹിക ഉത്തരവാദിത്തങ്ങൾ", url: "https://www.youtube.com/watch?v=QKkbg1Xxy_U" }
  ]
};

export const plusOneBusinessStudiesUnit7: Lesson = {
  id: "pl-bs-11-unit7",
  title: { en: "Formation of a Company", ml: "ഒരു കമ്പനിയുടെ രൂപീകരണം" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Understand the three stages of company formation", ml: "കമ്പനി രൂപീകരണത്തിന്റെ മൂന്ന് ഘട്ടങ്ങൾ മനസ്സിലാക്കുക" },
    { en: "Explain the functions and legal position of promoters", ml: "പ്രൊമോട്ടർമാരുടെ ചുമതലകളും നിയമപരമായ സ്ഥാനവും വിവരിക്കുക" },
    { en: "Identify critical documents like MoA, AoA, and Prospectus", ml: "MoA, AoA, പ്രോസ്പെക്ടസ് തുടങ്ങിയ പ്രധാന രേഖകൾ തിരിച്ചറിയുക" },
    { en: "Understand the process of incorporation and capital subscription", ml: "രജിസ്ട്രേഷൻ (Incorporation), മൂലധന സമാഹരണം എന്നിവയുടെ രീതി മനസ്സിലാക്കുക" },
    { en: "Learn about the concept of One Person Company (OPC)", ml: "ഏകാംഗ കമ്പനി (OPC) എന്ന ആശയത്തെക്കുറിച്ച് പഠിക്കുക" }
  ],
  content: {
    intro: {
      en: "This chapter details the complex process and legal formalities involved in bringing a company into existence, from promotion to capital subscription.",
      ml: "ഒരു കമ്പനി നിലവിൽ വരുന്നതിലെ സങ്കീർണ്ണമായ നിയമനടപടികളെക്കുറിച്ച് ഈ അധ്യായം വിശദീകരിക്കുന്നു. പ്രൊമോഷൻ മുതൽ മൂലധന സമാഹരണം വരെയുള്ള കാര്യങ്ങൾ ഇതിൽ ഉൾപ്പെടുന്നു."
    },
    core: {
      en: "Learn about the roles of Promoters, the importance of Memorandum and Articles of Association, the Certificate of Incorporation, and SEBI guidelines.",
      ml: "പ്രൊമോട്ടർമാരുടെ പങ്ക്, മെമ്മോറാണ്ടം, ആർട്ടിക്കിൾസ് ഓഫ് അസോസിയേഷൻ എന്നിവയുടെ പ്രാധാന്യം, രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റ്, സെബി (SEBI) മാർഗ്ഗനിർദ്ദേശങ്ങൾ എന്നിവയെക്കുറിച്ച് പഠിക്കുക."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'The formation of a company involves three distinct stages: Promotion, Incorporation, and Capital Subscription. While private companies only need promotion and incorporation, public companies must also complete the capital subscription stage to raise funds from the public.', ml: 'ഒരു കമ്പനി രൂപീകരിക്കുന്നതിൽ പ്രധാനമായും മൂന്ന് ഘട്ടങ്ങളാണുള്ളത്: പ്രൊമോഷൻ (Promotion), രജിസ്ട്രേഷൻ (Incorporation), മൂലധന സമാഹരണം (Capital Subscription). സ്വകാര്യ കമ്പനികൾക്ക് ആദ്യ രണ്ട് ഘട്ടങ്ങൾ മാത്രം മതിയാകും, എന്നാൽ പൊതു കമ്പനികൾക്ക് പൊതുജനങ്ങളിൽ നിന്ന് പണം സമാഹരിക്കുന്നതിന് മൂന്നാം ഘട്ടം കൂടി ആവശ്യമാണ്.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Promoter: A person or group who takes the initiative to form a company and assumes the associated risks.', ml: 'പ്രൊമോട്ടർ (Promoter): ഒരു ബിസിനസ്സ് ആശയം കണ്ടെത്തുകയും കമ്പനി രൂപീകരിക്കാൻ മുൻകൈ എടുക്കുകയും ചെയ്യുന്ന വ്യക്തി അല്ലെങ്കിൽ ഗ്രൂപ്പ്.' },
        { en: 'Incorporation: The legal registration of a company with the Registrar of Companies (ROC).', ml: 'രജിസ്ട്രേഷൻ (Incorporation): കമ്പനി രജിസ്ട്രാർ ഓഫീസിൽ കമ്പനി നിയമപരമായി രജിസ്റ്റർ ചെയ്യുന്ന പ്രക്രിയ.' },
        { en: 'Memorandum of Association (MoA): Defines core objectives and the limits of the company\'s authorized activities.', ml: 'മെമ്മോറാണ്ടം ഓഫ് അസോസിയേഷൻ (MoA): കമ്പനിയുടെ പ്രധാന ലക്ഷ്യങ്ങളും അധികാര പരിധിയും നിശ്ചയിക്കുന്ന അടിസ്ഥാന രേഖ.' },
        { en: 'Articles of Association (AoA): Contains rules and regulations for the internal management of the company.', ml: 'ആർട്ടിക്കിൾസ് ഓഫ് അസോസിയേഷൻ (AoA): കമ്പനിയുടെ ആഭ്യന്തര ഭരണം നിയന്ത്രിക്കുന്ന നിയമങ്ങൾ അടങ്ങിയ രേഖ.' },
        { en: 'Prospectus: An invitation to the public to subscribe to the company\'s shares or debentures.', ml: 'പ്രോസ്പെക്ടസ് (Prospectus): കമ്പനിയുടെ ഓഹരികൾ വാങ്ങാൻ പൊതുജനങ്ങളെ ക്ഷണിക്കുന്ന രേഖ.' }
      ]},

      { type: 'h2', en: '3. Stages of Formation', ml: '3. രൂപീകരണ ഘട്ടങ്ങൾ' },
      { type: 'h3', en: '3.1 Promotion', ml: '3.1 പ്രൊമോഷൻ (Promotion)' },
      { type: 'p', en: 'Promoters identify opportunities, conduct feasibility studies (Technical, Financial, Economic), and get the company name approved.', ml: 'പ്രൊമോട്ടർമാർ ബിസിനസ്സ് അവസരങ്ങൾ കണ്ടെത്തുകയും അവയുടെ പ്രായോഗികത (Feasibility) പരിശോധിക്കുകയും ചെയ്യുന്നു. തുടർന്ന് കമ്പനിയുടെ പേരിന് അനുമതി വാങ്ങുന്നു.' },

      { type: 'h3', en: '3.2 Incorporation (Registration)', ml: '3.2 രജിസ്ട്രേഷൻ (Incorporation)' },
      { type: 'p', en: 'Documents like MoA, AoA, and consent of directors are filed with the Registrar. Upon satisfaction, the Registrar issues a Certificate of Incorporation.', ml: 'MoA, AoA തുടങ്ങിയ രേഖകൾ രജിസ്ട്രാർക്ക് സമർപ്പിക്കുന്നു. രേഖകൾ തൃപ്തികരമെങ്കിൽ രജിസ്ട്രാർ \'സർട്ടിഫിക്കറ്റ് ഓഫ് ഇൻകോർപ്പറേഷൻ\' നൽകുന്നു.' },
      { type: 'p', en: 'The Certificate of Incorporation is conclusive evidence of the legal existence of the company.', ml: 'രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റ് ലഭിക്കുന്നതോടെ കമ്പനി നിയമപരമായി നിലവിൽ വരുന്നു. ഇത് കമ്പനിയുടെ അസ്തിത്വത്തിനുള്ള വ്യക്തമായ തെളിവാണ്.' },

      { type: 'h3', en: '3.3 Capital Subscription', ml: '3.3 മൂലധന സമാഹരണം' },
      { type: 'ul', items: [
        { en: 'SEBI Approval: Public companies must follow SEBI guidelines for investor protection.', ml: 'സെബി (SEBI) അനുമതി: പൊതുജനങ്ങളിൽ നിന്ന് പണം സമാഹരിക്കുന്നതിന് മുൻപ് സെബിയുടെ മാർഗ്ഗനിർദ്ദേശങ്ങൾ പാലിക്കണം.' },
        { en: 'Minimum Subscription: Must receive 90% of the issue size before allotting shares.', ml: 'കുറഞ്ഞ സബ്‌സ്‌ക്രിപ്‌ഷൻ (Minimum Subscription): ഓഹരികൾ വിതരണം ചെയ്യുന്നതിന് മുൻപ് മൊത്തം ഓഹരികളുടെ 90% എങ്കിലും ആളുകൾ ആവശ്യപ്പെട്ടിരിക്കണം.' }
      ]},

      { type: 'h2', en: '4. Comparison: MoA vs. AoA', ml: '4. താരതമ്യം: MoA vs. AoA' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Memorandum (MoA)', ml: 'മെമ്മോറാണ്ടം'}, {en: 'Articles (AoA)', ml: 'ആർട്ടിക്കിൾസ്'}],
        rows: [
          [{en: 'Position', ml: 'സ്ഥാനം'}, {en: 'Main document', ml: 'പ്രധാന രേഖ'}, {en: 'Subsidiary document', ml: 'അനുബന്ധ രേഖ'}],
          [{en: 'Scope', ml: 'വ്യാപ്തി'}, {en: 'Defines objectives', ml: 'ലക്ഷ്യങ്ങൾ നിശ്ചയിക്കുന്നു'}, {en: 'Internal rules', ml: 'ആഭ്യന്തര നിയമങ്ങൾ'}],
          [{en: 'Relationship', ml: 'ബന്ധം'}, {en: 'Company and Outsiders', ml: 'പുറത്തുള്ളവരുമായി'}, {en: 'Company and Members', ml: 'അംഗങ്ങളുമായി'}]
        ]
      }},

      { type: 'h2', en: '5. One Person Company (OPC)', ml: '5. ഏകാംഗ കമ്പനി (OPC)' },
      { type: 'p', en: 'An OPC has only one person as a member. It was introduced to encourage small entrepreneurs to enter the corporate sector.', ml: 'ഒരാൾ മാത്രം അംഗമായുള്ള കമ്പനിയാണിത്. ചെറുകിട സംരംഭകരെ സഹായിക്കുന്നതിനായാണ് ഈ സംവിധാനം കൊണ്ടുവന്നത്.' },

      { type: 'h2', en: '6. Quick Revision', ml: '6. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: 'Promoters perform feasibility studies and name approval.', ml: 'പ്രൊമോട്ടർമാർ കമ്പനിയുടെ പ്രായോഗികത പരിശോധിക്കുകയും പേരിന് അനുമതി വാങ്ങുകയും ചെയ്യുന്നു.' },
        { en: 'MoA is the charter of the company.', ml: 'കമ്പനിയുടെ അടിസ്ഥാന ഭരണഘടനയാണ് മെമ്മോറാണ്ടം (MoA).' },
        { en: 'Certificate of Incorporation is the birth certificate of a company.', ml: 'കമ്പനിയുടെ ജനന സർട്ടിഫിക്കറ്റാണ് രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റ്.' },
        { en: 'Public companies need 90% minimum subscription to proceed.', ml: 'പൊതു കമ്പനികൾക്ക് ഓഹരി വിതരണം ചെയ്യാൻ 90% മിനിമം സബ്‌സ്‌ക്രിപ്‌ഷൻ നിർബന്ധമാണ്.' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "Promotion", ml: "പ്രൊമോഷൻ (Promotion)" }, definition: { en: "The very first stage of company formation involving the discovery of a business idea and taking the initiative to exploit it.", ml: "ഒരു ബിസിനസ്സ് ആശയം കണ്ടെത്തുന്നതും അത് പ്രയോജനപ്പെടുത്തുന്നതിന് മുൻകൈ എടുക്കുന്നതും ഉൾപ്പെടുന്ന കമ്പനി രൂപീകരണത്തിന്റെ ഏറ്റവും ആദ്യത്തെ ഘട്ടമാണ് പ്രൊമോഷൻ (Promotion)." } },
    { term: { en: "Promoter", ml: "പ്രൊമോട്ടർ (Promoter)" }, definition: { en: "A person or group who undertakes the necessary steps, feasibility studies, and risks to bring a company into legal existence.", ml: "ഒരു കമ്പനിയെ നിയമപരമായി നിലവിൽ കൊണ്ടുവരുന്നതിന് ആവശ്യമായ നടപടികൾ, പ്രായോഗിക പഠനങ്ങൾ (Feasibility Studies), റിസ്കുകൾ എന്നിവ ഏറ്റെടുക്കുന്ന വ്യക്തിയോ ഗ്രൂപ്പോ ആണ് പ്രൊമോട്ടർ (Promoter)." } },
    { term: { en: "Incorporation", ml: "ഇൻകോർപ്പറേഷൻ (Incorporation)" }, definition: { en: "The complex legal process of registering a company with the Registrar of Companies to establish its separate legal identity.", ml: "ഒരു കമ്പനിക്ക് പ്രത്യേക നിയമപരമായ അസ്തിത്വം നൽകുന്നതിനായി കമ്പനി രജിസ്ട്രാർക്ക് (Registrar of Companies) കീഴിൽ രജിസ്റ്റർ ചെയ്യുന്ന സങ്കീർണ്ണമായ നിയമ പ്രക്രിയയാണ് ഇൻകോർപ്പറേഷൻ (Incorporation)." } },
    { term: { en: "Certificate of Incorporation", ml: "സർട്ടിഫിക്കറ്റ് ഓഫ് ഇൻകോർപ്പറേഷൻ (Certificate of Incorporation)" }, definition: { en: "The conclusive legal evidence and \"birth certificate\" issued by the Registrar proving that a company has been legally formed.", ml: "ഒരു കമ്പനി നിയമപരമായി രൂപീകൃതമായി എന്ന് തെളിയിക്കുന്നതിനായി രജിസ്ട്രാർ നൽകുന്ന അന്തിമ നിയമപരമായ തെളിവാണ് സർട്ടിഫിക്കറ്റ് ഓഫ് ഇൻകോർപ്പറേഷൻ (Certificate of Incorporation). ഇതിനെ കമ്പനിയുടെ 'ജനന സർട്ടിഫിക്കറ്റ്' എന്ന് വിളിക്കുന്നു." } },
    { term: { en: "Memorandum of Association (MoA)", ml: "മെമ്മോറാണ്ടം ഓഫ് അസോസിയേഷൻ (Memorandum of Association - MoA)" }, definition: { en: "The most important founding document that defines the external objectives of the company and limits its authorized activities.", ml: "കമ്പനിയുടെ ബാഹ്യ ലക്ഷ്യങ്ങൾ നിർവചിക്കുകയും അതിന്റെ അധികാരപരിധിയിലുള്ള പ്രവർത്തനങ്ങളെ പരിമിതപ്പെടുത്തുകയും ചെയ്യുന്ന ഏറ്റവും പ്രധാനപ്പെട്ട സ്ഥാപക രേഖയാണ് മെമ്മോറാണ്ടം ഓഫ് അസോസിയേഷൻ (MoA)." } },
    { term: { en: "Articles of Association (AoA)", ml: "ആർട്ടിക്കിൾസ് ഓഫ് അസോസിയേഷൻ (Articles of Association - AoA)" }, definition: { en: "The subsidiary document containing the internal rules and regulations regarding the day-to-day management of the company.", ml: "കമ്പനിയുടെ ദൈനംദിന മാനേജ്‌മെന്റുമായി ബന്ധപ്പെട്ട ആഭ്യന്തര നിയമങ്ങളും ചട്ടങ്ങളും അടങ്ങിയ അനുബന്ധ രേഖയാണ് ആർട്ടിക്കിൾസ് ഓഫ് അസോസിയേഷൻ (AoA)." } },
    { term: { en: "Prospectus", ml: "പ്രോസ്പെക്ടസ് (Prospectus)" }, definition: { en: "A formal document issued by a public company inviting the general public to subscribe to its shares or debentures.", ml: "പൊതുജനങ്ങളെ കമ്പനിയുടെ ഓഹരികളോ (Shares) കടപ്പത്രങ്ങളോ (Debentures) വാങ്ങാൻ ക്ഷണിച്ചുകൊണ്ട് ഒരു പബ്ലിക് കമ്പനി പുറപ്പെടുവിക്കുന്ന ഔദ്യോഗിക രേഖയാണ് പ്രോസ്പെക്ടസ് (Prospectus)." } },
    { term: { en: "Minimum Subscription", ml: "മിനിമം സബ്‌സ്‌ക്രിപ്‌ഷൻ (Minimum Subscription)" }, definition: { en: "The legal requirement that a public company must receive applications for at least 90 percent of its issued shares before making an allotment.", ml: "ഓഹരികൾ വിതരണം ചെയ്യുന്നതിന് മുൻപ് ഒരു പബ്ലിക് കമ്പനി പുറപ്പെടുവിച്ച ഓഹരികളുടെ 90 ശതമാനത്തിനെങ്കിലും അപേക്ഷകൾ ലഭിച്ചിരിക്കണം എന്ന നിയമപരമായ നിബന്ധനയാണ് മിനിമം സബ്‌സ്‌ക്രിപ്‌ഷൻ (Minimum Subscription)." } },
    { term: { en: "One Person Company (OPC)", ml: "വൺ പേഴ്സൺ കമ്പനി (One Person Company - OPC)" }, definition: { en: "A modern corporate entity allowing a single natural person to form a company with limited liability and perpetual succession.", ml: "പരിമിതമായ ബാധ്യതയോടും (Limited Liability) ശാശ്വത നിലനിൽപ്പോടും (Perpetual Succession) കൂടി ഒരു വ്യക്തിക്ക് മാത്രം കമ്പനി രൂപീകരിക്കാൻ അനുവദിക്കുന്ന ആധുനിക കോർപ്പറേറ്റ് രീതിയാണ് വൺ പേഴ്സൺ കമ്പനി (OPC)." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "The first stage in the formation of a company is?", ml: "ഒരു കമ്പനി രൂപീകരണത്തിന്റെ ആദ്യ ഘട്ടം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Incorporation", ml: "രജിസ്ട്രേഷൻ" } },
        { k: "B", text: { en: "Promotion", ml: "പ്രൊമോഷൻ" } },
        { k: "C", text: { en: "Capital Subscription", ml: "മൂലധന സമാഹരണം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Promotion is the first stage where the idea is conceived.", ml: "കമ്പനി തുടങ്ങാനുള്ള ആശയം ഉടലെടുക്കുന്ന പ്രൊമോഷൻ ആണ് ആദ്യ ഘട്ടം." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "A person who performs the necessary steps to start a company is called?", ml: "കമ്പനി തുടങ്ങാൻ ആവശ്യമായ നടപടികൾ സ്വീകരിക്കുന്ന വ്യക്തി?" },
      options: [
        { k: "A", text: { en: "Manager", ml: "മാനേജർ" } },
        { k: "B", text: { en: "Promoter", ml: "പ്രൊമോട്ടർ" } },
        { k: "C", text: { en: "Director", ml: "ഡയറക്ടർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The promoter takes the initiative to form the company.", ml: "കമ്പനി രൂപീകരണത്തിന് നേതൃത്വം നൽകുന്നത് പ്രൊമോട്ടർ ആണ്." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "Which document defines the external objects of the company?", ml: "കമ്പനിയുടെ പുറത്തുള്ളവരുമായുള്ള ബന്ധവും ലക്ഷ്യങ്ങളും വിവരിക്കുന്ന രേഖ?" },
      options: [
        { k: "A", text: { en: "Articles of Association", ml: "ആർട്ടിക്കിൾസ് ഓഫ് അസോസിയേഷൻ" } },
        { k: "B", text: { en: "Memorandum of Association", ml: "മെമ്മോറാണ്ടം ഓഫ് അസോസിയേഷൻ" } },
        { k: "C", text: { en: "Prospectus", ml: "പ്രോസ്പെക്ടസ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "MoA defines the relationship of the company with the outside world.", ml: "പുറത്തുള്ളവരുമായുള്ള കമ്പനിയുടെ ബന്ധത്തെക്കുറിച്ച് മെമ്മോറാണ്ടം (MoA) ആണ് പറയുന്നത്." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "The internal rules of a company are contained in?", ml: "കമ്പനിയുടെ ആഭ്യന്തര നിയമങ്ങൾ അടങ്ങിയ രേഖ ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Memorandum of Association", ml: "മെമ്മോറാണ്ടം ഓഫ് അസോസിയേഷൻ" } },
        { k: "B", text: { en: "Articles of Association", ml: "ആർട്ടിക്കിൾസ് ഓഫ് അസോസിയേഷൻ" } },
        { k: "C", text: { en: "Statutory Declaration", ml: "സ്റ്റാറ്റ്യൂട്ടറി ഡിക്ലറേഷൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "AoA contains rules for internal management.", ml: "കമ്പനിയുടെ ആഭ്യന്തര ഭരണം നിയന്ത്രിക്കുന്നത് ആർട്ടിക്കിൾസ് ഓഫ് അസോസിയേഷൻ (AoA) ആണ്." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "Which document is considered the birth certificate of a company?", ml: "ഒരു കമ്പനിയുടെ ജനന സർട്ടിഫിക്കറ്റായി കണക്കാക്കുന്നത് ഏതിനെയാണ്?" },
      options: [
        { k: "A", text: { en: "Certificate of Incorporation", ml: "രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റ്" } },
        { k: "B", text: { en: "Memorandum of Association", ml: "മെമ്മോറാണ്ടം ഓഫ് അസോസിയേഷൻ" } },
        { k: "C", text: { en: "Prospectus", ml: "പ്രോസ്പെക്ടസ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Certificate of Incorporation is conclusive evidence of a company's existence.", ml: "രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റ് കമ്പനിയുടെ നിയമപരമായ നിലനിൽപ്പിന്റെ തെളിവാണ്." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "The minimum subscription for a public issue is?", ml: "ഒരു പബ്ലിക് ഇഷ്യുവിന്റെ മിനിമം സബ്‌സ്‌ക്രിപ്‌ഷൻ എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "50%", ml: "50%" } },
        { k: "B", text: { en: "90%", ml: "90%" } },
        { k: "C", text: { en: "100%", ml: "100%" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "SEBI guidelines mandate 90% minimum subscription.", ml: "സെബി നിയമപ്രകാരം 90 ശതമാനം ഓഹരികൾക്കെങ്കിലും ആളുകൾ അപേക്ഷിച്ചിരിക്കണം." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "Which company is prohibited from inviting public to subscribe its shares?", ml: "പൊതുജനങ്ങളെ ഓഹരിയെടുക്കാൻ ക്ഷണിക്കാൻ അനുവാദമില്ലാത്ത കമ്പനി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Public Company", ml: "പൊതു കമ്പനി" } },
        { k: "B", text: { en: "Private Company", ml: "സ്വകാര്യ കമ്പനി" } },
        { k: "C", text: { en: "Statutory Corporation", ml: "സ്റ്റാറ്റ്യൂട്ടറി കോർപ്പറേഷൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Private companies cannot raise funds from the general public.", ml: "സ്വകാര്യ കമ്പനികൾക്ക് പൊതുജനങ്ങളിൽ നിന്ന് മൂലധനം സമാഹരിക്കാൻ കഴിയില്ല." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "What does OPC stand for?", ml: "OPC എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Only Private Company", ml: "Only Private Company" } },
        { k: "B", text: { en: "One Person Company", ml: "One Person Company (ഏകാംഗ കമ്പനി)" } },
        { k: "C", text: { en: "Owner's Personal Company", ml: "Owner's Personal Company" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "OPC is a company with only one member.", ml: "OPC എന്നത് ഒരാൾ മാത്രം അംഗമായുള്ള കമ്പനിയാണ്." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "Who issues the Certificate of Incorporation?", ml: "രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റ് നൽകുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "SEBI", ml: "സെബി (SEBI)" } },
        { k: "B", text: { en: "Registrar of Companies", ml: "കമ്പനി രജിസ്ട്രാർ (ROC)" } },
        { k: "C", text: { en: "Reserve Bank", ml: "റിസർവ് ബാങ്ക്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The ROC issues the incorporation certificate after verifying documents.", ml: "കമ്പനി രജിസ്ട്രാർ ആണ് രജിസ്ട്രേഷൻ നടപടികൾ പൂർത്തിയാക്കി സർട്ടിഫിക്കറ്റ് നൽകുന്നത്." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "How many members must sign the MoA for a public company?", ml: "ഒരു പൊതു കമ്പനിയുടെ MoA-യിൽ എത്രപേർ കുറഞ്ഞത് ഒപ്പിടണം?" },
      options: [
        { k: "A", text: { en: "2", ml: "2" } },
        { k: "B", text: { en: "7", ml: "7" } },
        { k: "C", text: { en: "50", ml: "50" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "At least 7 members are required for a public company MoA.", ml: "പൊതു കമ്പനി രജിസ്റ്റർ ചെയ്യാൻ കുറഞ്ഞത് 7 അംഗങ്ങളുടെ ഒപ്പ് ആവശ്യമാണ്." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "What is the legal position of a promoter?", ml: "ഒരു പ്രൊമോട്ടറുടെ നിയമപരമായ സ്ഥാനം എന്ത്?" },
      options: [
        { k: "A", text: { en: "Agent", ml: "ഏജന്റ്" } },
        { k: "B", text: { en: "Trustee", ml: "ട്രസ്റ്റി" } },
        { k: "C", text: { en: "Fiduciary position", ml: "വിശ്വാസപരമായ സ്ഥാനം (Fiduciary)" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Promoters hold a position of trust and must not make secret profits.", ml: "പ്രൊമോട്ടർമാർക്ക് വിശ്വാസപരമായ ഒരു സ്ഥാനമാണ് ഉള്ളത്, അവർ രഹസ്യമായി ലാഭമുണ്ടാക്കാൻ പാടില്ല." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "SEBI stands for?", ml: "SEBI എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Securities and Exchange Bank of India", ml: "Securities and Exchange Bank of India" } },
        { k: "B", text: { en: "Securities and Exchange Board of India", ml: "Securities and Exchange Board of India" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "SEBI is the regulatory body for securities market in India.", ml: "ഇന്ത്യയിലെ ഓഹരി വിപണിയെ നിയന്ത്രിക്കുന്ന സ്ഥാപനമാണ് സെബി." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "Which clause of MoA is the most important?", ml: "MoA-യിലെ ഏറ്റവും പ്രധാനപ്പെട്ട ക്ലോസ് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Name Clause", ml: "പേര് വിവരിക്കുന്ന ഭാഗം" } },
        { k: "B", text: { en: "Objects Clause", ml: "ലക്ഷ്യങ്ങൾ വിവരിക്കുന്ന ഭാഗം" } },
        { k: "C", text: { en: "Capital Clause", ml: "മൂലധനം വിവരിക്കുന്ന ഭാഗം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Objects clause defines the purpose for which company is formed.", ml: "കമ്പനി എന്തിനുവേണ്ടി പ്രവർത്തിക്കുന്നു എന്ന് വ്യക്തമാക്കുന്നതിനാൽ ഒബ്‌ജക്റ്റ്‌സ് ക്ലോസ് പ്രധാനമാണ്." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "Qualification shares must be bought by?", ml: "യോഗ്യതാ ഓഹരികൾ (Qualification shares) വാങ്ങേണ്ടത് ആരാണ്?" },
      options: [
        { k: "A", text: { en: "Promoters", ml: "പ്രൊമോട്ടർമാർ" } },
        { k: "B", text: { en: "Proposed Directors", ml: "ഡയറക്ടർമാർ" } },
        { k: "C", text: { en: "Bankers", ml: "ബാങ്കർമാർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Proposed directors buy these shares to have a financial stake.", ml: "ഡയറക്ടർമാർക്ക് കമ്പനിയിൽ താൽപ്പര്യമുണ്ടെന്ന് ഉറപ്പാക്കാൻ അവർ നിശ്ചിത ഓഹരികൾ വാങ്ങണം." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "Can a public company commence business immediately after incorporation?", ml: "രജിസ്ട്രേഷൻ കഴിഞ്ഞാലുടൻ ഒരു പൊതു കമ്പനിക്ക് ബിസിനസ്സ് തുടങ്ങാമോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "അല്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Public companies must complete capital subscription stage first.", ml: "പൊതു കമ്പനികൾക്ക് മൂലധന സമാഹരണത്തിന് ശേഷമേ ബിസിനസ്സ് തുടങ്ങാൻ കഴിയൂ." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "Contracts signed before incorporation are called?", ml: "രജിസ്ട്രേഷന് മുൻപ് ഒപ്പിടുന്ന കരാറുകളെ എന്തു വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Final contracts", ml: "അവസാന കരാറുകൾ" } },
        { k: "B", text: { en: "Preliminary contracts", ml: "പ്രിലിമിനറി കരാറുകൾ" } },
        { k: "C", text: { en: "Statutory contracts", ml: "നിയമപരമായ കരാറുകൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "These are pre-incorporation contracts.", ml: "രജിസ്ട്രേഷന് മുൻപുള്ള കരാറുകളെ പ്രിലിമിനറി എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "Minimum number of members for a private company is?", ml: "ഒരു സ്വകാര്യ കമ്പനിയിൽ കുറഞ്ഞത് എത്ര അംഗങ്ങൾ വേണം?" },
      options: [
        { k: "A", text: { en: "2", ml: "2" } },
        { k: "B", text: { en: "7", ml: "7" } },
        { k: "C", text: { en: "50", ml: "50" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "A private company needs at least 2 members.", ml: "രണ്ടുപേരുണ്ടെങ്കിൽ ഒരു സ്വകാര്യ കമ്പനി തുടങ്ങാം." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "Which study checks if enough money can be raised?", ml: "ആവശ്യത്തിന് പണം സമാഹരിക്കാൻ കഴിയുമോ എന്ന് പരിശോധിക്കുന്ന പഠനം?" },
      options: [
        { k: "A", text: { en: "Technical feasibility", ml: "സാങ്കേതിക പ്രായോഗികത" } },
        { k: "B", text: { en: "Financial feasibility", ml: "സാമ്പത്തിക പ്രായോഗികത" } },
        { k: "C", text: { en: "Legal feasibility", ml: "നിയമപരമായ പ്രായോഗികത" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Financial feasibility checks the viability of raising capital.", ml: "പണം കണ്ടെത്താൻ കഴിയുമോ എന്ന പരിശോധനയാണിത്." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "Name approval application is sent to?", ml: "കമ്പനിയുടെ പേരിന് അനുമതി ചോദിക്കുന്നത് ആരോടാണ്?" },
      options: [
        { k: "A", text: { en: "SEBI", ml: "സെബി (SEBI)" } },
        { k: "B", text: { en: "ROC", ml: "രജിസ്ട്രാർ (ROC)" } },
        { k: "C", text: { en: "State Government", ml: "സംസ്ഥാന സർക്കാർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "ROC approves the proposed name of the company.", ml: "കമ്പനി രജിസ്ട്രാർ ആണ് പേരിന് അനുമതി നൽകുന്നത്." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "A nominee is required in which type of company?", ml: "ഒരു നോമിനിയെ (Nominee) നിശ്ചയിക്കേണ്ടത് ഏത് തരം കമ്പനിയിലാണ്?" },
      options: [
        { k: "A", text: { en: "Public Company", ml: "പൊതു കമ്പനി" } },
        { k: "B", text: { en: "One Person Company", ml: "ഏകാംഗ കമ്പനി (OPC)" } },
        { k: "C", text: { en: "Partnership", ml: "പങ്കാളിത്തം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "OPC requires a nominee in case the member dies.", ml: "ഏകാംഗ കമ്പനിയിൽ ഒരാൾ മാത്രമേ ഉള്ളൂ എന്നതിനാൽ ഒരു നോമിനി ആവശ്യമാണ്." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "Who guarantees the purchase of unsold shares?", ml: "ആരും വാങ്ങാത്ത ബാക്കി ഓഹരികൾ വാങ്ങാമെന്ന് ഏറ്റെടുക്കുന്നവർ?" },
      options: [
        { k: "A", text: { en: "Underwriters", ml: "അണ്ടർറൈറ്റർമാർ (Underwriters)" } },
        { k: "B", text: { en: "Managers", ml: "മാനേജർമാർ" } },
        { k: "C", text: { en: "Consumers", ml: "ഉപഭോക്താക്കൾ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Underwriters ensure the company meets minimum subscription.", ml: "ബാക്കി വരുന്ന ഓഹരികൾ വാങ്ങുന്നവർ അണ്ടർറൈറ്റർമാർ ആണ്." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "Is registration of a company compulsory?", ml: "ഒരു കമ്പനിയുടെ രജിസ്ട്രേഷൻ നിർബന്ധമാണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "അല്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Every company must be registered under the Companies Act.", ml: "കമ്പനി നിയമപ്രകാരം എല്ലാ കമ്പനികളും രജിസ്റ്റർ ചെയ്തിരിക്കണം." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "The maximum amount of capital a company can raise is mentioned in?", ml: "ഒരു കമ്പനിക്ക് സമാഹരിക്കാവുന്ന പരമാവധി മൂലധനം എവിടെയാണ് രേഖപ്പെടുത്തുന്നത്?" },
      options: [
        { k: "A", text: { en: "Articles of Association", ml: "ആർട്ടിക്കിൾസ് ഓഫ് അസോസിയേഷൻ" } },
        { k: "B", text: { en: "Memorandum of Association", ml: "മെമ്മോറാണ്ടം ഓഫ് അസോസിയേഷൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Capital clause of MoA states the authorized capital.", ml: "മെമ്മോറാണ്ടത്തിലെ മൂലധന ക്ലോസിലാണ് ഇത് പറയുന്നത്." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "What if minimum subscription is not received?", ml: "മിനിമം സബ്‌സ്‌ക്риപ്‌ഷൻ ലഭിച്ചില്ലെങ്കിൽ എന്തു സംഭവിക്കും?" },
      options: [
        { k: "A", text: { en: "Proceed anyway", ml: "തുടരാം" } },
        { k: "B", text: { en: "Return money to applicants", ml: "അപേക്ഷകർക്ക് പണം തിരികെ നൽകണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The company must return all application money if it fails to get 90%.", ml: "90% ലഭിച്ചില്ലെങ്കിൽ ഓഹരികൾ വിതരണം ചെയ്യാൻ കഴിയില്ല, പണം തിരികെ നൽകണം." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "A natural person who is an Indian resident can form which company?", ml: "ഇന്ത്യയിൽ താമസിക്കുന്ന ഒരു വ്യക്തിക്ക് തുടങ്ങാൻ കഴിയുന്ന കമ്പനി?" },
      options: [
        { k: "A", text: { en: "OPC", ml: "ഏകാംഗ കമ്പനി (OPC)" } },
        { k: "B", text: { en: "Statutory company", ml: "സ്റ്റാറ്റ്യൂട്ടറി കമ്പനി" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "OPC is designed for individual entrepreneurs.", ml: "ഒറ്റയ്ക്ക് ബിസിനസ്സ് തുടങ്ങുന്നവർക്കുള്ളതാണ് OPC." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "Liability clause of MoA states the liability of?", ml: "മെമ്മോറാണ്ടത്തിലെ ലയബിലിറ്റി ക്ലോസ് ആരുടെ ബാധ്യതയെക്കുറിച്ചാണ് പറയുന്നത്?" },
      options: [
        { k: "A", text: { en: "Creditors", ml: "കടക്കാർ" } },
        { k: "B", text: { en: "Members (Shareholders)", ml: "അംഗങ്ങൾ (ഓഹരിയുടമകൾ)" } },
        { k: "C", text: { en: "Customers", ml: "ഉപഭോക്താക്കൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It defines the limited liability of shareholders.", ml: "ഓഹരിയുടമകളുടെ ബാധ്യത എത്രയാണെന്ന് ഇതിൽ വ്യക്തമാക്കുന്നു." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "Company registration fees depend on?", ml: "കമ്പനി രജിസ്ട്രേഷൻ ഫീസ് എന്തിനെയാണ് ആശ്രയിച്ചിരിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Number of workers", ml: "തൊഴിലാളികളുടെ എണ്ണം" } },
        { k: "B", text: { en: "Authorized capital", ml: "അംഗീകൃത മൂലധനം" } },
        { k: "C", text: { en: "Location", ml: "സ്ഥാനം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Fees are calculated based on the company's capital size.", ml: "മൂലധനത്തിന് അനുസരിച്ചാണ് ഫീസ് നിശ്ചയിക്കുന്നത്." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "Can a promoter be a signatory to the MoA?", ml: "ഒരു പ്രൊമോട്ടർക്ക് MoA-യിൽ ഒപ്പിടാൻ കഴിയുമോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "അല്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Promoters often act as the first signatories.", ml: "പ്രൊമോട്ടർമാർക്ക് തന്നെ ആദ്യത്തെ അംഗങ്ങളായി ഒപ്പിടാവുന്നതാണ്." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "Corporate Identity Number (CIN) is allotted during?", ml: "CIN നമ്പർ ലഭിക്കുന്നത് ഏത് ഘട്ടത്തിലാണ്?" },
      options: [
        { k: "A", text: { en: "Promotion", ml: "പ്രൊമോഷൻ" } },
        { k: "B", text: { en: "Incorporation", ml: "രജിസ്ട്രേഷൻ" } },
        { k: "C", text: { en: "Winding up", ml: "അവസാനിപ്പിക്കുമ്പോൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "CIN is given along with the Certificate of Incorporation.", ml: "രജിസ്ട്രേഷൻ സമയത്താണ് കമ്പനിക്ക് ഒരു തിരിച്ചറിയൽ നമ്പർ (CIN) ലഭിക്കുന്നത്." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "Minimum members for a public company is?", ml: "ഒരു പൊതു കമ്പനിയിൽ കുറഞ്ഞത് എത്ര അംഗങ്ങൾ വേണം?" },
      options: [
        { k: "A", text: { en: "2", ml: "2" } },
        { k: "B", text: { en: "7", ml: "7" } },
        { k: "C", text: { en: "Unlimited", ml: "പരിധിയില്ല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "A public company requires at least 7 members.", ml: "ഏഴുപേരുണ്ടെങ്കിൽ മാത്രമേ ഒരു പൊതു കമ്പനി തുടങ്ങാൻ സാധിക്കൂ." }
    }
  ],
  videos: [
    { title: "07 ഒരു കമ്പനിയുടെ രൂപീകരണം", url: "https://www.youtube.com/watch?v=3q4CbTrRcms" }
  ]
};

export const plusOneBusinessStudiesUnit8: Lesson = {
  id: "pl-bs-11-unit8",
  title: { en: "Sources of Business Finance", ml: "ബിസിനസ്സ് ഫിനാൻസിന്റെ ഉറവിടങ്ങൾ" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Understand the concept and importance of business finance", ml: "ബിസിനസ്സ് ഫിനാൻസ് എന്ന ആശയവും അതിന്റെ പ്രാധാന്യവും മനസ്സിലാക്കുക" },
    { en: "Classify sources of finance based on period, ownership, and generation", ml: "കാലയളവ്, ഉടമസ്ഥാവകാശം, സമാഹരണ രീതി എന്നിവയുടെ അടിസ്ഥാനത്തിൽ ഫിനാൻസിനെ തരംതിരിക്കുക" },
    { en: "Evaluate merits and limitations of various sources like shares and debentures", ml: "ഓഹരികൾ, ഡിബഞ്ചറുകൾ തുടങ്ങിയ വിവിധ ഉറവിടങ്ങളുടെ ഗുണങ്ങളും പരിമിതികളും വിലയിരുത്തുക" },
    { en: "Identify international sources of business finance", ml: "അന്താരാഷ്ട്ര ധനസമാഹരണ മാർഗ്ഗങ്ങൾ തിരിച്ചറിയുക" },
    { en: "Analyze factors affecting the choice of a suitable source of finance", ml: "അനുയോജ്യമായ ധനസമാഹരണ മാർഗ്ഗം തിരഞ്ഞെടുക്കുന്നതിനെ സ്വാധീനിക്കുന്ന ഘടകങ്ങൾ വിശകലനം ചെയ്യുക" }
  ],
  content: {
    intro: {
      en: "This chapter provides an overview of the various sources from where funds can be procured for starting and running a business.",
      ml: "ഒരു ബിസിനസ്സ് തുടങ്ങുന്നതിനും നടത്തുന്നതിനും ആവശ്യമായ പണം എവിടെ നിന്നൊക്കെ കണ്ടെത്താം എന്നതിനെക്കുറിച്ചാണ് ഈ അധ്യായം പ്രതിപാദിക്കുന്നത്."
    },
    core: {
      en: "Learn about Equity and Preference shares, Debentures, Retained Earnings, Public Deposits, and international instruments like GDR and ADR.",
      ml: "ഇക്വിറ്റി-പ്രിഫറൻസ് ഓഹരികൾ, ഡിബഞ്ചറുകൾ, റീറ്റൈൻഡ് ഏണിംഗ്സ്, പബ്ലിക് ഡിപ്പോസിറ്റുകൾ, GDR, ADR തുടങ്ങിയ അന്താരാഷ്ട്ര രേഖകളെക്കുറിച്ച് പഠിക്കുക."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter provides an overview of the various sources from where funds can be procured for starting and running a business. It details the classification of business finance based on time period, ownership, and source of generation. Furthermore, it evaluates the relative merits and limitations of various sources, identifies international sources of finance, and examines the critical factors that affect the choice of an appropriate source of finance.', ml: 'ബിസിനസ്സ് തുടങ്ങുന്നതിനും നടത്തുന്നതിനും ആവശ്യമായ പണം (Funds) എവിടെ നിന്നൊക്കെ കണ്ടെത്താം എന്നതിനെക്കുറിച്ചാണ് ഈ അധ്യായം പ്രതിപാദിക്കുന്നത്. കാലയളവ്, ഉടമസ്ഥാവകാശം, സമാഹരണ രീതി എന്നിവയുടെ അടിസ്ഥാനത്തിൽ ബിസിനസ്സ് ഫിനാൻസിനെ തരംതിരിക്കുന്നു. ഓഹരികൾ, ഡിബഞ്ചറുകൾ, റീറ്റൈൻഡ് ഏണിംഗ്സ്, പബ്ലിക് ഡിപ്പോസിറ്റുകൾ എന്നിവയെക്കുറിച്ചും അന്താരാഷ്ട്ര ധനസമാഹരണ രീതികളെക്കുറിച്ചും ഇവിടെ പഠിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Business Finance: The money required by a business to carry out its activities, often called the life blood of any business.', ml: 'ബിസിനസ്സ് ഫിനാൻസ് (Business Finance): ബിസിനസ്സ് പ്രവർത്തനങ്ങൾക്കായി ആവശ്യമായ പണം. ഇതിനെ ബിസിനസ്സിന്റെ \'രക്തധമനി\' (Life blood) എന്ന് വിളിക്കുന്നു.' },
        { en: 'Fixed Capital: Funds required to purchase fixed assets like land, building, and machinery, which remain invested for a long time.', ml: 'സ്ഥിര മൂലധനം (Fixed Capital): ഭൂമി, കെട്ടിടം, യന്ത്രങ്ങൾ തുടങ്ങിയ സ്ഥിര ആസ്തികൾ വാങ്ങാൻ ആവശ്യമായ പണം. ഇത് ദീർഘകാലത്തേക്ക് ബിസിനസ്സിൽ നിലനിൽക്കുന്നു.' },
        { en: 'Working Capital: Funds needed for day-to-day operations, such as stock, salaries, and rent.', ml: 'പ്രവർത്തന മൂലധനം (Working Capital): ദൈനംദിന പ്രവർത്തനങ്ങൾക്കായി (ശമ്പളം, വാടക, സ്റ്റോക്ക്) ആവശ്യമായ പണം.' },
        { en: 'Owner’s Funds: Funds provided by the owners (sole trader, partners, or shareholders), which dictate management control.', ml: 'ഉടമസ്ഥന്റെ ഫണ്ട് (Owner’s Funds): ഉടമസ്ഥർ നൽകുന്ന പണം. ഇത് ബിസിനസ്സിന്റെ നിയന്ത്രണാവകാശം നൽകുന്നു.' },
        { en: 'Borrowed Funds: Funds raised through loans or borrowings that must be repaid after a specified period with interest.', ml: 'കടമെടുത്ത ഫണ്ട് (Borrowed Funds): പലിശ സഹിതം തിരിച്ചുനൽകേണ്ട വ്യവസ്ഥയിൽ വായ്പകളിലൂടെയോ കടപ്പത്രങ്ങളിലൂടെയോ സമാഹരിക്കുന്ന പണം.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      { type: 'h3', en: '3.1 Classification of Sources of Funds', ml: '3.1 ഉറവിടങ്ങളുടെ തരംതിരിക്കൽ' },
      { type: 'ul', items: [
        { en: 'Period Basis: Long-term (> 5 yrs), Medium-term (1-5 yrs), Short-term (< 1 yr).', ml: 'കാലയളവ്: ദീർഘകാലം (5 വർഷത്തിന് മുകളിൽ), മധ്യകാലം (1-5 വർഷം), ഹ്രസ്വകാലം (1 വർഷം വരെ).' },
        { en: 'Ownership Basis: Owner\'s Funds (Equity Shares, Retained Earnings) and Borrowed Funds (Loans, Debentures, Public Deposits).', ml: 'ഉടമസ്ഥാവകാശം: ഉടമസ്ഥന്റെ ഫണ്ട് (ഇക്വിറ്റി ഓഹരികൾ, റീറ്റൈൻഡ് ഏണിംഗ്സ്), കടമെടുത്ത ഫണ്ട് (വായ്പകൾ, ഡിബഞ്ചറുകൾ, പബ്ലിക് ഡിപ്പോസിറ്റ്).' },
        { en: 'Generation Basis: Internal Sources (Retained earnings) and External Sources (Raised from suppliers, lenders, and investors).', ml: 'സമാഹരണ രീതി: ആന്തരിക ഉറവിടങ്ങൾ (ബിസിനസ്സിനുള്ളിൽ നിന്ന്), ബാഹ്യ ഉറവിടങ്ങൾ (പുറത്തുള്ളവരിൽ നിന്ന്).' }
      ]},

      { type: 'h3', en: '3.2 Short-Term and Internal Sources', ml: '3.2 ഹ്രസ്വകാലവും ആന്തരികവുമായ ഉറവിടങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Retained Earnings: A portion of net earnings kept in the business for future use. Permanent, cost-free source.', ml: 'റീറ്റൈൻഡ് ഏണിംഗ്സ് (Retained Earnings): ലാഭത്തിന്റെ ഒരു ഭാഗം ഭാവി ആവശ്യങ്ങൾക്കായി ബിസിനസ്സിൽ തന്നെ നിലനിർത്തുന്നത് (Ploughing back of profits).' },
        { en: 'Trade Credit: Credit extended by one trader to another for purchasing goods and services.', ml: 'ട്രേഡ് ക്രെഡിറ്റ് (Trade Credit): സാധനങ്ങൾ വാങ്ങുമ്പോൾ വിതരണക്കാർ നൽകുന്ന ക്രെഡിറ്റ് സൗകര്യം.' },
        { en: 'Factoring: Selling receivables to a \'factor\' at a discount to accelerate cash flow.', ml: 'ഫാക്ടറിംഗ് (Factoring): ലഭിക്കാനുള്ള ബില്ലുകൾ (Receivables) ഒരു ഏജന്റിന് (Factor) ഡിസ്കൗണ്ടിൽ വിൽക്കുന്ന രീതി.' },
        { en: 'Commercial Paper (CP): Unsecured promissory note issued by highly-rated firms for 90 to 364 days.', ml: 'കൊമേഴ്സ്യൽ പേപ്പർ (CP): വലിയ കമ്പനികൾ ഹ്രസ്വകാലത്തേക്ക് പണം കണ്ടെത്താൻ പുറപ്പെടുവിക്കുന്ന ഈടില്ലാത്ത രേഖ (90 മുതൽ 364 ദിവസം വരെ).' }
      ]},

      { type: 'h3', en: '3.3 Long and Medium-Term Sources', ml: '3.3 ദീർഘകാല - മധ്യകാല ഉറവിടങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Lease Financing: Renting an asset for periodic payment (lease rental) without ownership.', ml: 'ലീസ് ഫിനാൻസിംഗ് (Lease Financing): നിശ്ചിത വാടക നൽകി ഒരു ആസ്തി നിശ്ചിത കാലത്തേക്ക് ഉപയോഗിക്കാനുള്ള അനുവാദം.' },
        { en: 'Public Deposits: Deposits raised directly from the public at higher interest than banks.', ml: 'പബ്ലിക് ഡിപ്പോസിറ്റ് (Public Deposits): പൊതുജനങ്ങളിൽ നിന്ന് നേരിട്ട് സ്വീകരിക്കുന്ന നിക്ഷേപങ്ങൾ.' },
        { en: 'Equity Shares: Represent ownership, have voting rights, residual claim, and carry high risk.', ml: 'ഇക്വിറ്റി ഓഹരികൾ (Equity Shares): ബിസിനസ്സിന്റെ ഉടമസ്ഥാവകാശം ലഭിക്കുന്നു, വോട്ടിംഗ് അവകാശമുണ്ട്, റിസ്ക് കൂടുതലാണ്.' },
        { en: 'Preference Shares: Preferential claim over dividends and repayment. Fixed rate of return.', ml: 'പ്риഫറൻസ് ഓഹരികൾ (Preference Shares): ലാഭവിഹിതത്തിനും മൂലധനം തിരികെ ലഭിക്കുന്നതിനും മുൻഗണന ലഭിക്കുന്നു.' },
        { en: 'Debentures: Long-term debt instruments with fixed interest. Holders are creditors, not owners.', ml: 'ഡിബഞ്ചറുകൾ (Debentures): സ്ഥിരമായ പലിശ നൽകുന്ന ദീർഘകാല കടപ്പത്രങ്ങൾ. ഇവ വാങ്ങുന്നവർ കമ്പനിയുടെ കടക്കാരാണ്.' },
        { en: 'Commercial Banks & Financial Institutions: Provide short to long-term loans and technical advice.', ml: 'വാണിജ്യ ബാങ്കുകൾ & ധനകാര്യ സ്ഥാപനങ്ങൾ: ആവശ്യാനുസരണം വിവിധ കാലയളവുകളിലേക്ക് വായ്പകൾ നൽകുന്നു.' }
      ]},

      { type: 'h3', en: '3.4 International Financing', ml: '3.4 അന്താരാഷ്ട്ര ധനസമാഹരണം' },
      { type: 'ul', items: [
        { en: 'GDR (Global Depository Receipt): Negotiable instrument issued abroad to raise funds in foreign currency.', ml: 'GDR (Global Depository Receipt): വിദേശ രാജ്യങ്ങളിൽ നിന്ന് വിദേശ നാണയത്തിൽ പണം സമാഹരിക്കാൻ ഉപയോഗിക്കുന്ന രേഖ.' },
        { en: 'ADR (American Depository Receipt): Issued to American citizens and traded on US stock exchanges.', ml: 'ADR (American Depository Receipt): അമേരിക്കൻ പൗരന്മാർക്ക് മാത്രമായി പുറപ്പെടുവിക്കുന്ന ഡിപ്പോസിറ്ററി രസീത്.' },
        { en: 'FCCB (Foreign Currency Convertible Bonds): Equity-linked debt securities issued in foreign currency.', ml: 'FCCB: വിദേശ നാണയത്തിലുള്ള ബോണ്ടുകൾ, ഇവയെ പിന്നീട് ഓഹരികളാക്കി മാറ്റാം.' }
      ]},

      { type: 'h2', en: '4. Tables for Easy Learning', ml: '4. പഠിക്കാൻ എളുപ്പത്തിനുള്ള പട്ടികകൾ' },
      { type: 'h3', en: 'Comparison: Equity vs. Preference Shares', ml: 'താരതമ്യം: ഇക്വിറ്റി vs. പ്രിഫറൻസ് ഓഹരികൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Equity Shares', ml: 'ഇക്വിറ്റി ഓഹരികൾ'}, {en: 'Preference Shares', ml: 'പ്രിഫറൻസ് ഓഹരികൾ'}],
        rows: [
          [{en: 'Dividend', ml: 'ലാഭവിഹിതം'}, {en: 'Fluctuating', ml: 'മാറിക്കൊണ്ടിരിക്കും'}, {en: 'Fixed Rate', ml: 'സ്ഥിരമായിരിക്കും'}],
          [{en: 'Voting Rights', ml: 'വോട്ടിംഗ് അവകാശം'}, {en: 'Full rights', ml: 'ഉണ്ട്'}, {en: 'Generally no rights', ml: 'സാധാരണയായി ഇല്ല'}],
          [{en: 'Repayment Claim', ml: 'തിരിച്ചടവ് മുൻഗണന'}, {en: 'Paid last', ml: 'അവസാനം നൽകുന്നു'}, {en: 'Preferential claim', ml: 'മുൻഗണന ലഭിക്കുന്നു'}],
          [{en: 'Risk Level', ml: 'റിസ്ക്'}, {en: 'High', ml: 'കൂടുതൽ'}, {en: 'Low', ml: 'കുറവ്'}]
        ]
      }},
      { type: 'h3', en: 'Classification of Sources', ml: 'ഉറവിടങ്ങളുടെ തരംതിരിക്കൽ' },
      { type: 'table', tableData: {
        headers: [{en: 'Basis', ml: 'അടിസ്ഥാനം'}, {en: 'Categories', ml: 'വിഭാഗങ്ങൾ'}, {en: 'Examples', ml: 'ഉദാഹരണങ്ങൾ'}],
        rows: [
          [{en: 'Period', ml: 'കാലയളവ്'}, {en: 'Long, Medium, Short', ml: 'ദീർഘ, മധ്യ, ഹ്രസ്വ കാലം'}, {en: 'Shares, Public Deposits, Trade Credit'}],
          [{en: 'Ownership', ml: 'ഉടമസ്ഥാവകാശം'}, {en: 'Owner, Borrowed', ml: 'ഉടമസ്ഥന്റെ, കടമെടുത്തത്'}, {en: 'Equity, Debentures/Loans'}],
          [{en: 'Generation', ml: 'സമാഹരണം'}, {en: 'Internal, External', ml: 'ആന്തരികം, ബാഹ്യം'}, {en: 'Retained Earnings, Shares/Loans'}]
        ]
      }},

      { type: 'h2', en: '5. Extract and Highlight', ml: '5. എടുത്തു പറയേണ്ട കാര്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Tax Shield: Interest on debentures and loans is tax deductible.', ml: 'നികുതി ആനുകൂല്യം (Tax Shield): ഡിബഞ്ചറുകൾക്കും വായ്പകൾക്കും നൽകുന്ന പലിശ നികുതിയിളവിന് അർഹമാണ്.' },
        { en: 'Combination of sources: No single best source exists for all needs.', ml: 'ഉറവിടങ്ങളുടെ സംയോജനം: എല്ലാ ആവശ്യങ്ങൾക്കും അനുയോജ്യമായ ഒരൊറ്റ ഉറവിടം ലഭ്യമല്ല; ഒരു കോമ്പിനേഷൻ തിരഞ്ഞെടുക്കണം.' },
        { en: 'Public Deposits are regulated by the Reserve Bank of India.', ml: 'പബ്ലിക് ഡിപ്പോസിറ്റുകൾ ആർ.ബി.ഐ (RBI) ആണ് നിയന്ത്രിക്കുന്നത്.' }
      ]},

      { type: 'h2', en: '6. Quick Revision', ml: '6. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: 'Finance is the life blood of business (Fixed and Working capital).', ml: 'ഫിനാൻസിനെ ബിസിനസ്സിന്റെ രക്തധമനി എന്ന് വിളിക്കുന്നു (സ്ഥിര, പ്രവർത്തന മൂലധനം).' },
        { en: 'Owner\'s funds include Equity and Retained Earnings.', ml: 'ഉടമസ്ഥന്റെ ഫണ്ടിൽ ഇക്വിറ്റി ഓഹരികളും ലാഭവിഹിതവും (Retained Earnings) ഉൾപ്പെടുന്നു.' },
        { en: 'Borrowed funds include Debentures, Loans, and Public Deposits.', ml: 'കടമെടുത്ത ഫണ്ടിൽ ഡിബഞ്ചറുകൾ, വായ്പകൾ, പബ്ലിക് ഡിപ്പോസിറ്റുകൾ എന്നിവ ഉൾപ്പെടുന്നു.' },
        { en: 'International sources: GDR, ADR, FCCB, and IDR.', ml: 'അന്താരാഷ്ട്ര ഉറവിടങ്ങൾ: GDR, ADR, FCCB, IDR.' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "Business Finance", ml: "ബിസിനസ്സ് ഫിനാൻസ് (Business Finance)" }, definition: { en: "The funds required by a business to establish operations, purchase assets, and run day-to-day activities.", ml: "ഒരു ബിസിനസ്സ് ആരംഭിക്കുന്നതിനും ആസ്തികൾ വാങ്ങുന്നതിനും ദൈനംദിന പ്രവർത്തനങ്ങൾ നടത്തുന്നതിനും ആവശ്യമായ പണമാണ് ബിസിനസ്സ് ഫിനാൻസ് (Business Finance)." } },
    { term: { en: "Retained Earnings", ml: "റീറ്റൈൻഡ് ഏണിംഗ്സ് (Retained Earnings)" }, definition: { en: "The portion of a company's net profit that is not distributed as dividends but reinvested back into the business for future use.", ml: "കമ്പനിയുടെ അറ്റാദായത്തിന്റെ ഒരു ഭാഗം ലാഭവിഹിതമായി (Dividends) നൽകാതെ ഭാവി ആവശ്യങ്ങൾക്കായി ബിസിനസ്സിൽ തന്നെ വീണ്ടും നിക്ഷേപിക്കുന്നതിനെയാണ് റീറ്റൈൻഡ് ഏണിംഗ്സ് (Retained Earnings) എന്ന് വിളിക്കുന്നത്." } },
    { term: { en: "Trade Credit", ml: "ട്രേഡ് ക്രെഡിറ്റ് (Trade Credit)" }, definition: { en: "A short-term financing arrangement where one business allows another to purchase goods or services without immediate cash payment.", ml: "ഉടൻ പണം നൽകാതെ തന്നെ സാധനങ്ങളോ സേവനങ്ങളോ വാങ്ങാൻ ഒരു ബിസിനസ്സ് മറ്റൊരു ബിസിനസ്സിനെ അനുവദിക്കുന്ന ഹ്രസ്വകാല ധനസമാഹരണ രീതിയാണ് ട്രേഡ് ക്രെഡിറ്റ് (Trade Credit)." } },
    { term: { en: "Factoring", ml: "ഫാക്ടറിംഗ് (Factoring)" }, definition: { en: "A financial service where a firm sells its accounts receivable to a third party at a discount in exchange for immediate cash and debt collection services.", ml: "ഒരു സ്ഥാപനം അതിന്റെ കടക്കാർ (Accounts Receivable) നൽകാനുള്ള തുക ഒരു മൂന്നാം കക്ഷിക്ക് ഡിസ്കൗണ്ടിൽ നൽകി ഉടനടി പണം വാങ്ങുന്ന സാമ്പത്തിക സേവനമാണ് ഫാക്ടറിംഗ് (Factoring)." } },
    { term: { en: "Lease Financing", ml: "ലീസ് ഫിനാൻസിംഗ് (Lease Financing)" }, definition: { en: "A contractual agreement where the owner of an asset allows another party to use it for a specified period in return for a periodic rental payment.", ml: "ഒരു ആസ്തിയുടെ ഉടമസ്ഥൻ അത് ഉപയോഗിക്കാൻ മറ്റൊരു കക്ഷിയെ നിശ്ചിത വാടകയ്ക്ക് പകരമായി അനുവദിക്കുന്ന കരാറാണ് ലീസ് ഫിനാൻസിംഗ് (Lease Financing)." } },
    { term: { en: "Public Deposits", ml: "പബ്ലിക് ഡിപ്പോസിറ്റ് (Public Deposits)" }, definition: { en: "Medium to short-term funds raised by companies directly from the general public at interest rates typically higher than bank deposits.", ml: "സാധാരണ ബാങ്ക് നിക്ഷേപങ്ങളേക്കാൾ ഉയർന്ന പലിശ നിരക്കിൽ കമ്പനികൾ പൊതുജനങ്ങളിൽ നിന്ന് നേരിട്ട് സ്വീകരിക്കുന്ന ഹ്രസ്വകാല-മധ്യകാല നിക്ഷേപങ്ങളാണ് പബ്ലിക് ഡിപ്പോസിറ്റ് (Public Deposits)." } },
    { term: { en: "Commercial Paper (CP)", ml: "കൊമേഴ്സ്യൽ പേപ്പർ (Commercial Paper - CP)" }, definition: { en: "An unsecured, short-term promissory note issued by highly rated firms to raise large amounts of funds.", ml: "മികച്ച നിലവാരമുള്ള കമ്പനികൾ വലിയ തുക സമാഹരിക്കുന്നതിനായി പുറപ്പെടുവിക്കുന്ന ഈടില്ലാത്ത (Unsecured) ഹ്രസ്വകാല വാഗ്ദാന പത്രമാണ് കൊമേഴ്സ്യൽ പേപ്പർ (CP)." } },
    { term: { en: "Equity Shares", ml: "ഇക്വിറ്റി ഷെയറുകൾ (Equity Shares)" }, definition: { en: "The primary source of long-term ownership capital where shareholders bear the highest risk but enjoy voting rights and variable profit returns.", ml: "ദീർഘകാല ഉടമസ്ഥാവകാശ മൂലധനത്തിന്റെ പ്രധാന ഉറവിടമാണിത്. ഓഹരിയുടമകൾ (Shareholders) ഉയർന്ന റിസ്ക് ഏറ്റെടുക്കുന്നുണ്ടെങ്കിലും അവർക്ക് വോട്ടിംഗ് അവകാശവും ലാഭവിഹിതവും ലഭിക്കുന്നു." } },
    { term: { en: "Preference Shares", ml: "പ്രിഫറൻസ് ഷെയറുകൾ (Preference Shares)" }, definition: { en: "A type of share capital that gives investors a priority claim over equity shareholders regarding fixed dividend payments and repayment of capital during liquidation.", ml: "ലാഭവിഹിതം ലഭിക്കുന്നതിലും കമ്പനി അവസാനിപ്പിക്കുമ്പോൾ മൂലധനം തിരികെ ലഭിക്കുന്നതിലും ഇക്വിറ്റി ഓഹരിയുടമകളേക്കാൾ മുൻഗണന ലഭിക്കുന്ന ഓഹരികളാണ് പ്രിഫറൻസ് ഷെയറുകൾ (Preference Shares)." } },
    { term: { en: "Debentures", ml: "ഡിബഞ്ചറുകൾ (Debentures)" }, definition: { en: "A long-term debt instrument acknowledging a company's borrowing, carrying a fixed rate of interest without providing voting rights to the holders.", ml: "കമ്പനി കടം വാങ്ങി എന്ന് സാക്ഷ്യപ്പെടുത്തുന്ന ദീർഘകാല കടപ്പത്രമാണ് ഡിബഞ്ചർ (Debenture). ഇതിന് നിശ്ചിത പലിശ നിരക്ക് ലഭിക്കുമെങ്കിലും വോട്ടിംഗ് അവകാശം ഉണ്ടാകില്ല." } },
    { term: { en: "Global Depository Receipts (GDRs)", ml: "ഗ്ലോബൽ ഡിപ്പോസിറ്ററി രസീതുകൾ (Global Depository Receipts - GDRs)" }, definition: { en: "Negotiable financial instruments issued abroad by a depository bank in foreign currency against the local shares of an Indian company.", ml: "ഒരു ഇന്ത്യൻ കമ്പനിയുടെ ഓഹരികൾക്ക് പകരമായി ഒരു വിദേശ ബാങ്ക് വിദേശ നാണയത്തിൽ പുറപ്പെടുവിക്കുന്ന കൈമാറ്റം ചെയ്യാവുന്ന സാമ്പത്തിക രേഖകളാണ് ജി.ഡി.ആറുകൾ (GDRs)." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "Which of the following is called the life blood of business?", ml: "ബിസിനസ്സിന്റെ 'രക്തധമനി' എന്ന് വിളിക്കപ്പെടുന്നത് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Management", ml: "മാനേജ്‌മെന്റ്" } },
        { k: "B", text: { en: "Finance", ml: "ഫിനാൻസ് (ധനകാര്യം)" } },
        { k: "C", text: { en: "Marketing", ml: "മാർക്കറ്റിംഗ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Finance is required for all business activities, making it the life blood.", ml: "എല്ലാ ബിസിനസ്സ് പ്രവർത്തനങ്ങൾക്കും പണം ആവശ്യമായതിനാൽ ഫിനാൻസിനെ രക്തധമനി എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "Funds required for purchasing land and machinery are known as?", ml: "ഭൂമിയും യന്ത്രങ്ങളും വാങ്ങാൻ ആവശ്യമായ പണം അറിയപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Working Capital", ml: "പ്രവർത്തന മൂലധനം" } },
        { k: "B", text: { en: "Fixed Capital", ml: "സ്ഥിര മൂലധനം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Fixed capital is used for long-term assets.", ml: "ദീർഘകാല ആസ്തികൾ വാങ്ങാൻ ഉപയോഗിക്കുന്ന പണമാണ് സ്ഥിര മൂലധനം." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "Money needed for day-to-day operations like salaries is?", ml: "ശമ്പളം നൽകുന്നത് പോലുള്ള ദൈനംദിന ആവശ്യങ്ങൾക്കുള്ള പണം?" },
      options: [
        { k: "A", text: { en: "Fixed Capital", ml: "സ്ഥിര മൂലധനം" } },
        { k: "B", text: { en: "Working Capital", ml: "പ്രവർത്തന മൂലധനം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Working capital covers daily business expenses.", ml: "ദൈനംദിന ചെലവുകൾക്ക് ഉപയോഗിക്കുന്ന പണമാണ് പ്രവർത്തന മൂലധനം." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "Retained earnings is an ____ source of finance.", ml: "റീറ്റൈൻഡ് ഏണിംഗ്സ് ഒരു ____ ഉറവിടമാണ്." },
      options: [
        { k: "A", text: { en: "Internal", ml: "ആന്തരിക (Internal)" } },
        { k: "B", text: { en: "External", ml: "ബാഹ്യ (External)" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It is generated within the business from its own profits.", ml: "ബിസിനസ്സിലെ ലാഭത്തിൽ നിന്ന് സമാഹരിക്കുന്നതിനാൽ ഇത് ഒരു ആന്തരിക ഉറവിടമാണ്." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "Reinvesting a portion of net earnings back into the business is called?", ml: "ലാഭത്തിന്റെ ഒരു ഭാഗം ബിസിനസ്സിൽ തന്നെ വീണ്ടും നിക്ഷേപിക്കുന്നതിനെ എന്തു വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Factoring", ml: "ഫാക്ടറിംഗ്" } },
        { k: "B", text: { en: "Ploughing back of profits", ml: "ലാഭം പുനർനിക്ഷേപിക്കൽ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is also known as retained earnings.", ml: "ലാഭം ബിസിനസ്സിൽ തന്നെ നിക്ഷേപിക്കുന്നതിനെ Ploughing back എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "Credit extended by one trader to another for purchasing goods is?", ml: "സാധനങ്ങൾ വാങ്ങുമ്പോൾ ഒരു വ്യാപാരി മറ്റൊരാൾക്ക് നൽകുന്ന കടം?" },
      options: [
        { k: "A", text: { en: "Bank loan", ml: "ബാങ്ക് വായ്പ" } },
        { k: "B", text: { en: "Trade Credit", ml: "ട്രേഡ് ക്രെഡിറ്റ്" } },
        { k: "C", text: { en: "Public Deposit", ml: "പബ്ലിക് ഡിപ്പോസിറ്റ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Trade credit is given by suppliers to purchasers.", ml: "വിതരണക്കാർ ഉപഭോക്താക്കൾക്ക് നൽകുന്ന ക്രെഡിറ്റ് സൗകര്യമാണിത്." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "The process of selling receivables to a third party is?", ml: "ലഭിക്കാനുള്ള ബില്ലുകൾ ഒരു മൂന്നാം കക്ഷിക്ക് വിൽക്കുന്ന രീതി?" },
      options: [
        { k: "A", text: { en: "Leasing", ml: "ലീസിംഗ്" } },
        { k: "B", text: { en: "Factoring", ml: "ഫാക്ടറിംഗ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Factoring helps in immediate cash flow from debtors.", ml: "ബില്ലുകൾ വിറ്റ് പണം കണ്ടെത്തുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "Commercial paper is an ____ promissory note.", ml: "കൊമേഴ്സ്യൽ പേപ്പർ ഒരു ____ രേഖയാണ്." },
      options: [
        { k: "A", text: { en: "Secured", ml: "ഈടുള്ള" } },
        { k: "B", text: { en: "Unsecured", ml: "ഈടില്ലാത്ത (Unsecured)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is issued without any collateral by highly-rated firms.", ml: "വലിയ കമ്പനികൾ ഈടില്ലാതെ പുറപ്പെടുവിക്കുന്ന രേഖയാണിത്." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "Maturity period of Commercial Paper is generally?", ml: "കൊമേഴ്സ്യൽ പേപ്പറിന്റെ കാലാവധി സാധാരണയായി?" },
      options: [
        { k: "A", text: { en: "1 to 5 years", ml: "1 മുതൽ 5 വർഷം" } },
        { k: "B", text: { en: "90 to 364 days", ml: "90 മുതൽ 364 ദിവസം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is a short-term instrument.", ml: "ഇത് ഒരു ഹ്രസ്വകാല ധനസമാഹരണ മാർഗ്ഗമാണ്." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "Renting an asset for a specific period is called?", ml: "ഒരു ആസ്തി നിശ്ചിത കാലത്തേക്ക് വാടകയ്ക്ക് എടുക്കുന്ന രീതി?" },
      options: [
        { k: "A", text: { en: "Factoring", ml: "ഫാക്ടറിംഗ്" } },
        { k: "B", text: { en: "Lease Financing", ml: "ലീസ് ഫിനാൻസിംഗ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Lease allows use of an asset without owning it.", ml: "ആസ്തി വാങ്ങാതെ തന്നെ അത് ഉപയോഗിക്കാൻ ലീസ് സഹായിക്കുന്നു." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "The owner of the asset in a lease agreement is the?", ml: "ലീസ് കരാറിൽ ആസ്തിയുടെ ഉടമസ്ഥൻ ആരാണ്?" },
      options: [
        { k: "A", text: { en: "Lessee", ml: "ലെസി (Lessee)" } },
        { k: "B", text: { en: "Lessor", ml: "ലെസർ (Lessor)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Lessor is the owner who grants the right to use.", ml: "ആസ്തിയുടെ ഉടമയെ ലെസർ എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "Which source is regulated by the RBI and raised from public?", ml: "RBI നിയന്ത്രിക്കുന്നതും പൊതുജനങ്ങളിൽ നിന്ന് സ്വീകരിക്കുന്നതുമായ നിക്ഷേപം?" },
      options: [
        { k: "A", text: { en: "Trade Credit", ml: "ട്രേഡ് ക്രെഡിറ്റ്" } },
        { k: "B", text: { en: "Public Deposits", ml: "പബ്ലിക് ഡിപ്പോസിറ്റ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Companies raise public deposits at higher interest rates than banks.", ml: "പൊതുജനങ്ങളിൽ നിന്ന് നേരിട്ട് നിക്ഷേപം സ്വീകരിക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "Equity shareholders have the right to?", ml: "ഇക്വിറ്റി ഓഹരിയുടമകൾക്ക് താഴെ പറയുന്നവയിൽ ഏത് അവകാശമുണ്ട്?" },
      options: [
        { k: "A", text: { en: "Fixed dividend", ml: "സ്ഥിരമായ ലാഭവിഹിതം" } },
        { k: "B", text: { en: "Vote in management", ml: "വോട്ടിംഗ് അവകാശം" } },
        { k: "C", text: { en: "Guaranteed repayment", ml: "തിരിച്ചടവ് ഉറപ്പ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Equity shares carry voting rights to control management.", ml: "കമ്പനിയുടെ കാര്യങ്ങളിൽ തീരുമാനമെടുക്കാൻ ഇക്വിറ്റി ഉടമകൾക്ക് വോട്ട് ചെയ്യാം." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "Preference shares have priority in receiving ____.", ml: "പ്രിഫറൻസ് ഓഹരിയുടമകൾക്ക് എന്തിനാണ് മുൻഗണന ലഭിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Votes", ml: "വോട്ട്" } },
        { k: "B", text: { en: "Dividends", ml: "ലാഭവിഹിതം (Dividend)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "They get dividends before equity shareholders.", ml: "ഇക്വിറ്റി ഉടമകൾക്ക് മുൻപ് ലാഭവിഹിതം ലഭിക്കാൻ ഇവർക്ക് അർഹതയുണ്ട്." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "Which holders are considered creditors of the company?", ml: "കമ്പനിയുടെ കടക്കാരായി (Creditors) പരിഗണിക്കപ്പെടുന്നത് ആരെയാണ്?" },
      options: [
        { k: "A", text: { en: "Shareholders", ml: "ഓഹരിയുടമകൾ" } },
        { k: "B", text: { en: "Debenture holders", ml: "ഡിബഞ്ചർ ഉടമകൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Debentures are debt instruments, making holders creditors.", ml: "കടപ്പത്രങ്ങൾ (Debentures) വാങ്ങുന്നവർ കമ്പനിക്ക് കടം നൽകിയവരാണ്." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "Interest on debentures is ____.", ml: "ഡിബഞ്ചറുകൾക്ക് നൽകുന്ന പലിശ ____." },
      options: [
        { k: "A", text: { en: "Tax-deductible", ml: "നികുതിയിളവിന് അർഹമാണ്" } },
        { k: "B", text: { en: "Not tax-deductible", ml: "നികുതിയിളവ് ലഭിക്കില്ല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Interest paid on debt reduces the taxable income.", ml: "വായ്പയുടെ പലിശ ബിസിനസ്സ് ചെലവായി കണക്കാക്കി നികുതി കുറയ്ക്കാൻ സാധിക്കും." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "ADR is issued to citizens of?", ml: "ADR പുറപ്പെടുവിക്കുന്നത് ഏത് രാജ്യത്തെ പൗരന്മാർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "India", ml: "ഇന്ത്യ" } },
        { k: "B", text: { en: "USA", ml: "അമേരിക്ക (USA)" } },
        { k: "C", text: { en: "UK", ml: "യുകെ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "ADR stands for American Depository Receipt.", ml: "അമേരിക്കൻ വിപണിയിൽ നിന്ന് പണം സമാഹരിക്കാനാണ് ADR ഉപയോഗിക്കുന്നത്." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "Global Depository Receipt (GDR) full form?", ml: "GDR-ന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Global Depository Receipt", ml: "Global Depository Receipt" } },
        { k: "B", text: { en: "General Deposit Rate", ml: "General Deposit Rate" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "GDR is used to raise foreign currency globally.", ml: "ആഗോള വിപണിയിൽ നിന്ന് വിദേശ നാണ്യം കണ്ടെത്താൻ GDR സഹായിക്കുന്നു." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "Foreign Currency Convertible Bonds (FCCB) can be converted into?", ml: "FCCB-കളെ പിന്നീട് ഏത് രൂപത്തിലേക്ക് മാറ്റാം?" },
      options: [
        { k: "A", text: { en: "Loans", ml: "വായ്പകൾ" } },
        { k: "B", text: { en: "Equity shares", ml: "ഇക്വിറ്റി ഓഹриകൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "FCCBs are hybrid instruments that can become equity.", ml: "ഇവയെ നിശ്ചിത കാലത്തിന് ശേഷം ഓഹриകളാക്കി മാറ്റാൻ കഴിയും." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "Issuing equity shares may result in ____ of control.", ml: "ഇക്വിറ്റി ഓഹരികൾ പുറപ്പെടുവിക്കുന്നത് നിയന്ത്രണം ____ കാരണമാകും." },
      options: [
        { k: "A", text: { en: "Dilution", ml: "കുറയാൻ (Dilution)" } },
        { k: "B", text: { en: "Concentration", ml: "കൂടാൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "More shareholders mean management control is shared among more people.", ml: "കൂടുതൽ ആളുകൾക്ക് വോട്ടിംഗ് അവകാശം ലഭിക്കുന്നത് നിയന്ത്രണം കുറയാൻ കാരണമാകും." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "IFCI and ICICI are examples of?", ml: "IFCI, ICICI എന്നിവ ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Commercial Banks", ml: "വാണിജ്യ ബാങ്കുകൾ" } },
        { k: "B", text: { en: "Financial Institutions", ml: "ധനകാര്യ സ്ഥാപനങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "These are specialized development banks.", ml: "ബിസിനസ്സുകൾക്ക് ദീർഘകാല സഹായം നൽകുന്ന പ്രത്യേക സ്ഥാപനങ്ങളാണിവ." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "Trade credit is suitable for ____ needs.", ml: "ട്രേഡ് ക്രെഡിറ്റ് ഏത് തരം ആവശ്യങ്ങൾക്കാണ് അനുയോജ്യം?" },
      options: [
        { k: "A", text: { en: "Long-term", ml: "ദീർഘകാല" } },
        { k: "B", text: { en: "Short-term", ml: "ഹ്രസ്വകാല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It is used for purchasing raw materials for immediate use.", ml: "ചെറിയ കാലയളവിലേക്കുള്ള ആവശ്യങ്ങൾക്കാണ് ഇത് ഉപയോഗിക്കുന്നത്." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "Which source has the highest risk for the investor?", ml: "നിക്ഷേപകനെ സംബന്ധിച്ചിടത്തോളം ഏറ്റവും കൂടുതൽ റിസ്ക് ഉള്ളത് ഏതിലാണ്?" },
      options: [
        { k: "A", text: { en: "Debentures", ml: "ഡിബഞ്ചറുകൾ" } },
        { k: "B", text: { en: "Equity Shares", ml: "ഇക്വിറ്റി ഓഹриകൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Equity returns are not guaranteed and capital is paid back last.", ml: "ഇക്വിറ്റി ഉടമകൾക്ക് ലാഭവിഹിതം ഉറപ്പില്ലാത്തതിനാൽ റിസ്ക് കൂടുതലാണ്." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "Medium term finance is for a period of ____ years.", ml: "മധ്യകാല ഫിനാൻസ് എത്ര വർഷത്തേക്കുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Less than 1", ml: "1-ൽ താഴെ" } },
        { k: "B", text: { en: "1 to 5", ml: "1 മുതൽ 5 വർഷം" } },
        { k: "C", text: { en: "More than 10", ml: "10-ന് മുകളിൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Medium term is between 1 and 5 years.", ml: "ഒന്ന് മുതൽ അഞ്ച് വർഷം വരെയുള്ള കാലയളവിനെ മധ്യകാലം എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "IDR stands for?", ml: "IDR എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Indian Depository Receipt", ml: "Indian Depository Receipt" } },
        { k: "B", text: { en: "Internal Deposit Rate", ml: "Internal Deposit Rate" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "IDR is issued by foreign companies to raise funds in India.", ml: "വിദേശ കമ്പനികൾ ഇന്ത്യയിൽ നിന്ന് പണം സമാഹരിക്കാൻ ഉപയോഗിക്കുന്ന രേഖയാണിത്." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "Which source provides a 'Tax Shield'?", ml: "\'ടാക്സ് ഷീൽഡ്\' (നികുതി ലാഭം) നൽകുന്ന ധനസമാഹരണ മാർഗ്ഗം?" },
      options: [
        { k: "A", text: { en: "Equity", ml: "ഇക്വിറ്റി" } },
        { k: "B", text: { en: "Borrowed funds (Debt)", ml: "കടമെടുത്ത ഫണ്ട് (Debt)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Interest on debt is an expense that reduces tax liability.", ml: "കടത്തിന്റെ പലിശ നികുതി കുറയ്ക്കാൻ സഹായിക്കുന്നു." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "A company that needs funds for 10 years should issue?", ml: "10 വർഷത്തേക്ക് പണം ആവശ്യമുള്ള ഒരു കമ്പനി ഏതാണ് പുറപ്പെടുവിക്കേണ്ടത്?" },
      options: [
        { k: "A", text: { en: "Commercial Paper", ml: "കൊമേഴ്സ്യൽ പേപ്പർ" } },
        { k: "B", text: { en: "Shares/Debentures", ml: "ഓഹരികൾ/ഡിബഞ്ചറുകൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Long-term needs are met by shares or debentures.", ml: "ദീർഘകാല ആവശ്യങ്ങൾക്ക് ഓഹരികളോ കടപ്പത്രങ്ങളോ ആണ് നല്ലത്." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "Which source has no fixed burden of interest?", ml: "സ്ഥിരമായി പലിശ നൽകേണ്ട ബാധ്യത ഇല്ലാത്തത് ഏതിലാണ്?" },
      options: [
        { k: "A", text: { en: "Loans", ml: "വായ്പകൾ" } },
        { k: "B", text: { en: "Equity Shares", ml: "ഇക്വിറ്റി ഓഹരികൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Dividends on equity are paid only if there is profit.", ml: "ലാഭമുണ്ടായാൽ മാത്രം ലാഭവിഹിതം നൽകിയാൽ മതി എന്നതാണ് ഇക്വിറ്റിയുടെ ഗുണം." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "Inter Corporate Deposits (ICD) are made between?", ml: "ICD-കൾ ആർക്കിടയിലുള്ള ഇടപാടുകളാണ്?" },
      options: [
        { k: "A", text: { en: "Bank and Public", ml: "ബാങ്കും പൊതുജനവും" } },
        { k: "B", text: { en: "One company and another", ml: "രണ്ട് കമ്പനികൾ തമ്മിൽ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "ICDs are unsecured deposits made by one company with another.", ml: "ഒരു കമ്പനി മറ്റൊരു കമ്പനിക്ക് നൽകുന്ന ഹ്രസ്വകാല നിക്ഷേപമാണിത്." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "Preference shares are also called ____ instruments.", ml: "പ്риഫറൻസ് ഓഹരികളെ ____ ഇൻസ്ട്രുമെന്റുകൾ എന്നും വിളിക്കുന്നു." },
      options: [
        { k: "A", text: { en: "Hybrid", ml: "ഹൈബ്രിഡ് (Hybrid)" } },
        { k: "B", text: { en: "Pure equity", ml: "പ്യുവർ ഇക്വിറ്റി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "They have features of both equity and debentures.", ml: "ഇക്വിറ്റിയുടെയും ഡിബഞ്ചറിന്റെയും ഗുണങ്ങൾ ഉള്ളതിനാൽ ഇവയെ ഹൈബ്രിഡ് എന്ന് വിളിക്കുന്നു." }
    }
  ],
  videos: [
    { title: "08 ബിസിനസ് സ്റ്റഡീസ് അധ്യായം 8", url: "https://www.youtube.com/watch?v=CA8C4opnBKk" }
  ]
};

export const plusOneBusinessStudiesUnit9: Lesson = {
  id: "pl-bs-11-unit9",
  title: { en: "Small Business", ml: "ചെറുകിട ബിസിനസ്സ്" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Define small business and understand MSMED Act 2006", ml: "ചെറുകിട ബിസിനസ്സ് നിർവ്വചിക്കുകയും 2006-ലെ MSMED ആക്ട് മനസ്സിലാക്കുകയും ചെയ്യുക" },
    { en: "Discuss the role of small business in India's economy and rural areas", ml: "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലും ഗ്രാമപ്രദേശങ്ങളിലും ചെറുകിട ബിസിനസ്സിന്റെ പങ്ക് ചർച്ച ചെയ്യുക" },
    { en: "Identify major problems faced by small businesses", ml: "ചെറുകിട ബിസിനസ്സുകൾ നേരിടുന്ന പ്രധാന പ്രശ്നങ്ങൾ തിരിച്ചറിയുക" },
    { en: "Explain institutional support like NABARD, NSIC, and DIC", ml: "നബാർഡ് (NABARD), NSIC, DIC തുടങ്ങിയ സ്ഥാപനങ്ങളുടെ സഹായം വിവരിക്കുക" },
    { en: "Learn about incentives for backward and hilly areas", ml: "പിന്നോക്ക-മലയോര മേഖലകൾക്കുള്ള ആനുകൂല്യങ്ങളെക്കുറിച്ച് പഠിക്കുക" }
  ],
  content: {
    intro: {
      en: "This chapter explores the meaning, nature, and classification of small businesses in India, primarily based on the MSMED Act, 2006.",
      ml: "2006-ലെ MSMED ആക്ടിന്റെ അടിസ്ഥാനത്തിൽ ഇന്ത്യയിലെ ചെറുകിട ബിസിനസ്സുകളുടെ അർത്ഥം, സ്വഭാവം, തരംതിരിക്കൽ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു."
    },
    core: {
      en: "Learn about Manufacturing and Services classification, the role of SSIs in employment and exports, and institutional support systems like DIC and NABARD.",
      ml: "നിർമ്മാണ-സേവന വിഭാഗങ്ങളുടെ തരംതിരിക്കൽ, തൊഴിലവസരങ്ങളിലും കയറ്റുമതിയിലും ചെറുകിട വ്യവസായങ്ങളുടെ പങ്ക്, DIC, നബാർഡ് തുടങ്ങിയ പിന്തുണാ സംവിധാനങ്ങളെക്കുറിച്ച് പഠിക്കുക."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter explores the meaning, nature, and classification of small businesses in India, primarily based on the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006. It highlights the crucial role these businesses play in the socio-economic development of the country.', ml: '2006-ലെ മൈക്രോ, സ്മോൾ ആൻഡ് മീഡിയം എന്റർപ്രൈസസ് ഡെവലപ്‌മെന്റ് (MSMED) ആക്ടിന്റെ അടിസ്ഥാനത്തിൽ ഇന്ത്യയിലെ ചെറുകിട ബിസിനസ്സുകളെക്കുറിച്ച് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നു. രാജ്യത്തിന്റെ സാമൂഹിക-സാമ്പത്തിക വികസനത്തിൽ ഈ സ്ഥാപനങ്ങൾ വഹിക്കുന്ന നിർണ്ണായക പങ്ക് ഇത് എടുത്തുകാണിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Small Business: Measured by capital invested in plant and machinery or equipment.', ml: 'ചെറുകിട ബിസിനസ്സ് (Small Business): പ്ലാന്റുകളിലും യന്ത്രങ്ങളിലും നിക്ഷേപിച്ചിട്ടുള്ള മൂലധനത്തിന്റെ അടിസ്ഥാനത്തിലാണ് ഇതിന്റെ വലിപ്പം അളക്കുന്നത്.' },
        { en: 'MSMED Act, 2006: Provides a legal framework for classifying enterprises into Manufacturing and Services.', ml: 'MSMED ആക്ട്, 2006: സംരംഭങ്ങളെ നിർമ്മാണം (Manufacturing), സേവനം (Services) എന്നിങ്ങനെ തരംതിരിക്കുന്നതിനുള്ള നിയമപരമായ ചട്ടക്കൂട് നൽകുന്നു.' },
        { en: 'Cottage Industries: Traditional rural industries using family labour and simple indigenous technology.', ml: 'കുടിൽ വ്യവസായങ്ങൾ (Cottage Industries): കുടുംബാംഗങ്ങളുടെ അധ്വാനവും ലളിതമായ സാങ്കേതിക വിദ്യയും ഉപയോഗിച്ച് നടത്തുന്ന പരമ്പരാഗത ഗ്രാമീണ വ്യവസായങ്ങൾ.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      { type: 'h3', en: '3.1 Administrative Setup', ml: '3.1 ഭരണപരമായ സംവിധാനം' },
      { type: 'ul', items: [
        { en: 'Ministry of MSME: Nodal ministry for formulating policies.', ml: 'MSME മന്ത്രാലയം: നയങ്ങൾ രൂപീകരിക്കുന്നതിനുള്ള പ്രധാന മന്ത്രാലയം.' },
        { en: 'SIDO (Small Industries Development Organisation): Implements and monitors policies.', ml: 'SIDO: നയങ്ങൾ നടപ്പിലാക്കുകയും നിരീക്ഷിക്കുകയും ചെയ്യുന്നു.' },
        { en: 'DICs (District Industries Centres): Focal point at district level for all assistance.', ml: 'DIC (District Industries Centres): ജില്ലാതലത്തിൽ എല്ലാ സഹായങ്ങളും നൽകുന്ന കേന്ദ്രം.' }
      ]},

      { type: 'h3', en: '3.2 Role of Small Business in India', ml: '3.2 ഇന്ത്യയിൽ ചെറുകിട ബിസിനസ്സിന്റെ പങ്ക്' },
      { type: 'ul', items: [
        { en: 'Account for 95% of industrial units and 45% of India\'s exports.', ml: 'വ്യവസായ യൂണിറ്റുകളുടെ 95 ശതമാനവും ഇന്ത്യയുടെ കയറ്റുമതിയുടെ 45 ശതമാനവും ഇവയാണ്.' },
        { en: 'Second largest employer after agriculture.', ml: 'കൃഷി കഴിഞ്ഞാൽ ഏറ്റവും കൂടുതൽ തൊഴിൽ നൽകുന്ന മേഖല.' },
        { en: 'Promotes balanced regional development by using local resources.', ml: 'പ്രാദേശിക വിഭവങ്ങൾ ഉപയോഗിച്ച് എല്ലാ മേഖലകളിലും വികസനം എത്തിക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.3 Problems of Small Business', ml: '3.3 ചെറുകിട ബിസിനസ്സുകൾ നേരിടുന്ന പ്രശ്നങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Finance: Inadequate access to capital markets and high interest from money lenders.', ml: 'ധനകാര്യം: മൂലധന വിപണിയിലെ പരിമിതമായ ലഭ്യതയും ഉയർന്ന പലിശയും.' },
        { en: 'Raw Materials: Low bargaining power and quality compromises.', ml: 'അസംസ്കൃത വസ്തുക്കൾ: കുറഞ്ഞ അളവിൽ വാങ്ങുന്നതിനാൽ വിലപേശാനുള്ള ശേഷിക്കുറവ്.' },
        { en: 'Global Competition: Cut-throat competition from multinational giants.', ml: 'ആഗോള മത്സരം: വൻകിട കമ്പനികളിൽ നിന്നുള്ള കടുത്ത മത്സരം.' }
      ]},

      { type: 'h3', en: '3.4 Government Assistance', ml: '3.4 സർക്കാർ സഹായങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'NABARD: Promotes rural development and cottage industries.', ml: 'നബാർഡ് (NABARD): ഗ്രാമീണ വികസനവും കുടിൽ വ്യവസായങ്ങളും പ്രോത്സാഹിപ്പിക്കുന്നു.' },
        { en: 'NSIC (National Small Industries Corporation): Supplies machines on hire-purchase.', ml: 'NSIC: യന്ത്രങ്ങൾ വാടക-വാങ്ങൽ (Hire-purchase) അടിസ്ഥാനത്തിൽ നൽകുന്നു.' },
        { en: 'SIDBI: Apex bank for meeting credit needs of small businesses.', ml: 'SIDBI: ചെറുകിട ബിസിനസ്സുകളുടെ വായ്പാ ആവശ്യങ്ങൾ നിറവേറ്റുന്ന പ്രധാന ബാങ്ക്.' }
      ]},

      { type: 'h2', en: '4. Tables for Easy Learning', ml: '4. പഠിക്കാൻ എളുപ്പത്തിനുള്ള പട്ടികകൾ' },
      { type: 'h3', en: 'MSMED Act, 2006 Investment Limits', ml: 'MSMED ആക്ട് പ്രകാരമുള്ള നിക്ഷേപ പരിധികൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Category', ml: 'വിഭാഗം'}, {en: 'Manufacturing (Plant & Machinery)', ml: 'നിർമ്മാണം (യന്ത്രങ്ങൾ)'}, {en: 'Services (Equipment)', ml: 'സേവനം (ഉപകരണങ്ങൾ)'}],
        rows: [
          [{en: 'Micro', ml: 'മൈക്രോ'}, {en: 'Up to ₹25 Lakh', ml: '25 ലക്ഷം വരെ'}, {en: 'Up to ₹10 Lakh', ml: '10 ലക്ഷം വരെ'}],
          [{en: 'Small', ml: 'ചെറുകിട'}, {en: '₹25 Lakh to ₹5 Crore', ml: '25 ലക്ഷം - 5 കോടി'}, {en: '₹10 Lakh to ₹2 Crore', ml: '10 ലക്ഷം - 2 കോടി'}],
          [{en: 'Medium', ml: 'ഇടത്തരം'}, {en: '₹5 Crore to ₹10 Crore', ml: '5 കോടി - 10 കോടി'}, {en: '₹2 Crore to ₹5 Crore', ml: '2 കോടി - 5 കോടി'}]
        ]
      }},

      { type: 'h2', en: '5. Extract and Highlight', ml: '5. എടുത്തു പറയേണ്ട കാര്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'SSI units generate 40% of gross industrial value added.', ml: 'വ്യവസായ മൂല്യവർദ്ധനവിന്റെ 40 ശതമാനവും ചെറുകിട വ്യവസായങ്ങളിൽ നിന്നാണ്.' },
        { en: 'Definition relies on investment due to capital-scarce environment.', ml: 'മൂലധന ദൗർലഭ്യം ഉള്ളതിനാൽ നിക്ഷേപത്തിന്റെ അടിസ്ഥാനത്തിലാണ് ബിസിനസ്സിനെ നിർവ്വചിക്കുന്നത്.' },
        { en: 'Mantra: "Think Global, Act Local".', ml: 'സൂക്തം: "ആഗോളമായി ചിന്തിക്കുക, പ്രാദേശികമായി പ്രവർത്തിക്കുക".' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "Small Scale Industries (SSI)", ml: "ചെറുകിട വ്യവസായങ്ങൾ (Small Scale Industries - SSI)" }, definition: { en: "Enterprises defined and classified by the government based primarily on their maximum capital investment in plant and machinery.", ml: "പ്ലാന്റുകളിലും യന്ത്രങ്ങളിലും (Plant and Machinery) ഉള്ള നിക്ഷേപത്തിന്റെ അടിസ്ഥാനത്തിൽ സർക്കാർ നിർവചിച്ചിട്ടുള്ള വ്യവസായങ്ങളാണ് ചെറുകിട വ്യവസായങ്ങൾ (SSI)." } },
    { term: { en: "MSMED Act, 2006", ml: "എം.എസ്.എം.ഇ.ഡി ആക്ട്, 2006 (MSMED Act, 2006)" }, definition: { en: "The Micro, Small and Medium Enterprises Development Act providing a single legal framework to classify and support manufacturing and service enterprises.", ml: "നിർമ്മാണ (Manufacturing), സേവന (Service) സംരംഭങ്ങളെ തരംതിരിക്കുന്നതിനും സഹായിക്കുന്നതിനുമായി രൂപീകരിച്ച മൈക്രോ, സ്മോൾ ആൻഡ് മീഡിയം എന്റർപ്രൈസസ് ഡെവലപ്‌മെന്റ് നിയമമാണ് MSMED Act, 2006." } },
    { term: { en: "Village Industries", ml: "ഗ്രാമ വ്യവസായങ്ങൾ (Village Industries)" }, definition: { en: "Small industries located in rural areas that produce goods or render services with specified low fixed-capital investment per artisan.", ml: "ഗ്രാമപ്രദേശങ്ങളിൽ സ്ഥിതി ചെയ്യുന്നതും നിശ്ചിത തുകയിൽ താഴെ മാത്രം മൂലധന നിക്ഷേപമുള്ളതുമായ ചെറുകിട വ്യവസായങ്ങളാണ് ഗ്രാമ വ്യവസായങ്ങൾ (Village Industries)." } },
    { term: { en: "Cottage Industries", ml: "കുടിൽ വ്യവസായങ്ങൾ (Cottage Industries)" }, definition: { en: "Traditional industries organized by individuals using private resources, family labor, and simple indigenous technology without strict capital limits.", ml: "കുടുംബാംഗങ്ങളുടെ അധ്വാനവും പ്രാദേശിക സാങ്കേതിക വിദ്യയും ഉപയോഗിച്ച് വ്യക്തികൾ നടത്തുന്ന പരമ്പരാഗത വ്യവസായങ്ങളാണ് കുടിൽ വ്യവസായങ്ങൾ (Cottage Industries)." } },
    { term: { en: "NABARD", ml: "നബാർഡ് (NABARD)" }, definition: { en: "The National Bank for Agriculture and Rural Development, an apex institution promoting integrated rural development and supporting rural artisans.", ml: "ഗ്രാമീണ വികസനത്തിനും ഗ്രാമീണ തൊഴിലുകൾക്കും സഹായം നൽകുന്നതിനുമായി രൂപീകരിച്ചിട്ടുള്ള ഏറ്റവും ഉയർന്ന സ്ഥാപനമാണ് നാഷണൽ ബാങ്ക് ഫോർ അഗ്രികൾച്ചർ ആൻഡ് റൂറൽ ഡെവലപ്‌മെന്റ് (NABARD)." } },
    { term: { en: "NSIC", ml: "എൻ.എസ്.ഐ.സി (NSIC)" }, definition: { en: "The National Small Industries Corporation, an enterprise that supplies machinery, distributes raw materials, and supports the marketing of small businesses.", ml: "ചെറുകിട വ്യവസായങ്ങൾക്ക് യന്ത്രങ്ങൾ നൽകുന്നതിനും അസംസ്കൃത വസ്തുക്കൾ വിതരണം ചെയ്യുന്നതിനും വിപണന സഹായം നൽകുന്നതിനുമായി പ്രവർത്തിക്കുന്ന സ്ഥാപനമാണ് നാഷണൽ സ്മോൾ ഇൻഡസ്ട്രീസ് കോർപ്പറേഷൻ (NSIC)." } },
    { term: { en: "SIDBI", ml: "സിഡ്ബി (SIDBI)" }, definition: { en: "The Small Industries Development Bank of India, set up as the apex bank to meet the direct and indirect credit needs of small business organizations.", ml: "ചെറുകിട വ്യവസായങ്ങളുടെ വായ്പാ ആവശ്യങ്ങൾ നിറവേറ്റുന്നതിനായി പ്രവർത്തിക്കുന്ന പ്രധാന ബാങ്കാണ് സ്മോൾ ഇൻഡസ്ട്രീസ് ഡെവലപ്‌മെന്റ് ബാങ്ക് ഓഫ് ഇന്ത്യ (SIDBI)." } },
    { term: { en: "District Industries Centres (DICs)", ml: "ജില്ലാ വ്യവസായ കേന്ദ്രങ്ങൾ (District Industries Centres - DICs)" }, definition: { en: "Institutions at the district level providing an integrated administrative framework and support services to rural entrepreneurs.", ml: "ജില്ലാതലത്തിൽ സംരംഭകർക്ക് ആവശ്യമായ എല്ലാ സഹായങ്ങളും സേവനങ്ങളും ഒരു കുടക്കീഴിൽ നൽകുന്ന സ്ഥാപനമാണ് ജില്ലാ വ്യവസായ കേന്ദ്രം (DIC)." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "Which Act governs the classification of small businesses in India?", ml: "ഇന്ത്യയിലെ ചെറുകിട ബിസിനസ്സുകളുടെ തരംതിരിക്കലിനെ നിയന്ത്രിക്കുന്ന നിയമം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Companies Act", ml: "കമ്പനി നിയമം" } },
        { k: "B", text: { en: "MSMED Act, 2006", ml: "MSMED ആക്ട്, 2006" } },
        { k: "C", text: { en: "Partnership Act", ml: "പങ്കാളിത്ത നിയമം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Micro, Small and Medium Enterprises Development Act, 2006 provides the legal framework.", ml: "2006-ലെ MSMED ആക്ട് ആണ് ഇതിനാവശ്യമായ നിയമപരമായ ചട്ടക്കൂട് നൽകുന്നത്." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "In India, the size of a small business is primarily measured by?", ml: "ഇന്ത്യയിൽ ചെറുകിട ബിസിനസ്സിന്റെ വലിപ്പം പ്രധാനമായും അളക്കുന്നത് ഏതിന്റെ അടിസ്ഥാനത്തിലാണ്?" },
      options: [
        { k: "A", text: { en: "Number of workers", ml: "തൊഴിലാളികളുടെ എണ്ണം" } },
        { k: "B", text: { en: "Capital invested in plant and machinery", ml: "യന്ത്രങ്ങളിൽ നിക്ഷേപിച്ച മൂലധനം" } },
        { k: "C", text: { en: "Annual sales", ml: "വാർഷിക വിൽപ്പന" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Investment in plant and machinery is the primary criteria in India.", ml: "യന്ത്രസാമഗ്രികളിലെ നിക്ഷേപമാണ് ഇന്ത്യയിൽ പ്രധാന മാനദണ്ഡമായി കണക്കാക്കുന്നത്." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "Small industries account for what percentage of industrial units in India?", ml: "ഇന്ത്യയിലെ വ്യവസായ യൂണിറ്റുകളുടെ എത്ര ശതമാനമാണ് ചെറുകിട വ്യവസായങ്ങൾ?" },
      options: [
        { k: "A", text: { en: "50%", ml: "50%" } },
        { k: "B", text: { en: "75%", ml: "75%" } },
        { k: "C", text: { en: "95%", ml: "95%" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Small industries account for about 95% of industrial units in India.", ml: "ഇന്ത്യയിലെ വ്യവസായ യൂണിറ്റുകളിൽ ഏകദേശം 95 ശതമാനവും ചെറുകിട മേഖലയിലാണ്." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "Which sector is the second largest employer in India after agriculture?", ml: "കൃഷി കഴിഞ്ഞാൽ ഇന്ത്യയിൽ ഏറ്റവും കൂടുതൽ തൊഴിൽ നൽകുന്ന മേഖല ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Public sector", ml: "പൊതുമേഖല" } },
        { k: "B", text: { en: "Small business sector", ml: "ചെറുകിട ബിസിനസ്സ് മേഖല" } },
        { k: "C", text: { en: "IT sector", ml: "ഐടി മേഖല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Small businesses are highly labour-intensive and generate massive employment.", ml: "ചെറുകിട ബിസിനസ്സുകൾ കൂടുതൽ ആളുകൾക്ക് തൊഴിൽ നൽകുന്ന രണ്ടാമത്തെ വലിയ മേഖലയാണ്." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "Traditional rural industries using family labour are known as?", ml: "കുടുംബാംഗങ്ങളുടെ അധ്വാനം ഉപയോഗിച്ചു നടത്തുന്ന പരമ്പരാഗത ഗ്രാമീണ വ്യവസായങ്ങൾ?" },
      options: [
        { k: "A", text: { en: "MNCs", ml: "എം.എൻ.സികൾ" } },
        { k: "B", text: { en: "Cottage Industries", ml: "കുടിൽ വ്യവസായങ്ങൾ (Cottage Industries)" } },
        { k: "C", text: { en: "Medium enterprises", ml: "ഇടത്തരം സംരംഭങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Cottage industries rely on private resources and family labour.", ml: "സ്വന്തം വിഭവങ്ങളും കുടുംബാംഗങ്ങളുടെ അധ്വാനവുമാണ് കുടിൽ വ്യവസായങ്ങളുടെ പ്രത്യേകത." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "What is the investment limit for a Micro Manufacturing Enterprise under MSMED Act 2006?", ml: "2006-ലെ MSMED ആക്ട് പ്രകാരം ഒരു മൈക്രോ നിർമ്മാണ യൂണിറ്റിന്റെ നിക്ഷേപ പരിധി?" },
      options: [
        { k: "A", text: { en: "Up to ₹10 lakh", ml: "10 ലക്ഷം വരെ" } },
        { k: "B", text: { en: "Up to ₹25 lakh", ml: "25 ലക്ഷം വരെ" } },
        { k: "C", text: { en: "Up to ₹1 crore", ml: "1 കോടി വരെ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "For micro manufacturing, investment in plant and machinery should not exceed ₹25 lakh.", ml: "നിർമ്മാണ മേഖലയിലെ മൈക്രോ യൂണിറ്റുകൾക്ക് നിക്ഷേപം 25 ലക്ഷം രൂപയിൽ കൂടാൻ പാടില്ല." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "For a Small Service Enterprise, the investment in equipment must be between?", ml: "ചെറുകിട സേവന വിഭാഗത്തിൽ (Small Service) ഉപകരണങ്ങളിലെ നിക്ഷേപം എത്രയായിരിക്കണം?" },
      options: [
        { k: "A", text: { en: "₹10 lakh to ₹2 crore", ml: "10 ലക്ഷം - 2 കോടി" } },
        { k: "B", text: { en: "₹25 lakh to ₹5 crore", ml: "25 ലക്ഷം - 5 കോടി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Small service enterprise limit is ₹10 lakh to ₹2 crore.", ml: "സേവന മേഖലയിലെ ചെറുകിട യൂണിറ്റുകൾക്ക് 10 ലക്ഷം മുതൽ 2 കോടി വരെയാണ് പരിധി." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "Which institution is the apex body for rural development and artisans?", ml: "ഗ്രാമീണ വികസനത്തിനും കലാകാരന്മാർക്കും വേണ്ടിയുള്ള ഏറ്റവും ഉയർന്ന സ്ഥാപനം?" },
      options: [
        { k: "A", text: { en: "SIDBI", ml: "സിഡ്ബി (SIDBI)" } },
        { k: "B", text: { en: "NABARD", ml: "നബാർഡ് (NABARD)" } },
        { k: "C", text: { en: "SIDO", ml: "SIDO" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "NABARD promotes integrated rural development.", ml: "ഗ്രാമീണ മേഖലയുടെ സമഗ്ര വികസനത്തിനായി പ്രവർത്തിക്കുന്ന സ്ഥാപനമാണ് നബാർഡ്." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "Which organization supplies machines on hire-purchase basis to small units?", ml: "ചെറുകിട യൂണിറ്റുകൾക്ക് വാടക-വാങ്ങൽ (Hire-purchase) അടിസ്ഥാനത്തിൽ യന്ത്രങ്ങൾ നൽകുന്ന സ്ഥാപനം?" },
      options: [
        { k: "A", text: { en: "DIC", ml: "DIC" } },
        { k: "B", text: { en: "NSIC", ml: "എൻ.എസ്.ഐ.സി (NSIC)" } },
        { k: "C", text: { en: "RBI", ml: "RBI" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "NSIC supplies both indigenous and imported machines on hire-purchase.", ml: "യന്ത്രങ്ങൾ നൽകുന്നതിലും വിപണന സഹായം നൽകുന്നതിലും NSIC പ്രധാന പങ്ക് വഹിക്കുന്നു." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "What is the focal point at the district level for integrated administrative framework?", ml: "ജില്ലാതലത്തിൽ വ്യവസായങ്ങൾക്കുള്ള എല്ലാ സഹായങ്ങളും നൽകുന്ന പ്രധാന കേന്ദ്രം?" },
      options: [
        { k: "A", text: { en: "NABARD", ml: "നബാർഡ്" } },
        { k: "B", text: { en: "District Industries Centre (DIC)", ml: "ജില്ലാ വ്യവസായ കേന്ദ്രം (DIC)" } },
        { k: "C", text: { en: "NSIC", ml: "NSIC" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "DICs provide all services and support to entrepreneurs at the district level.", ml: "ജില്ലാതലത്തിൽ സംരംഭകർക്ക് ആവശ്യമായ എല്ലാ സഹായങ്ങളും ഒരു കുടക്കീഴിൽ നൽകുന്നതാണ് DIC." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "Small businesses contribute what percentage to India's total exports?", ml: "ഇന്ത്യയുടെ മൊത്തം കയറ്റുമതിയിൽ ചെറുകിട ബിസിനസ്സുകളുടെ പങ്ക് എത്ര ശതമാനമാണ്?" },
      options: [
        { k: "A", text: { en: "20%", ml: "20%" } },
        { k: "B", text: { en: "45%", ml: "45%" } },
        { k: "C", text: { en: "90%", ml: "90%" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "They account for approximately 45% of India's total exports.", ml: "ഇന്ത്യയുടെ കയറ്റുമതി വരുമാനത്തിന്റെ 45 ശതമാനവും ഈ മേഖലയിൽ നിന്നാണ്." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "Which problem arises due to low purchasing volume in small units?", ml: "കുറഞ്ഞ അളവിൽ സാധനങ്ങൾ വാങ്ങുന്നതിനാൽ ചെറുകിട യൂണിറ്റുകൾ നേരിടുന്ന പ്രശ്നം?" },
      options: [
        { k: "A", text: { en: "Lack of technology", ml: "സാങ്കേതിക വിദ്യയുടെ കുറവ്" } },
        { k: "B", text: { en: "Weak bargaining power for raw materials", ml: "അസംസ്കൃത വസ്തുക്കൾക്കായി വിലപേശാനുള്ള ശേഷിക്കുറവ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Small size limits their ability to negotiate lower prices for materials.", ml: "വലിയ അളവിൽ വാങ്ങാൻ കഴിയാത്തതിനാൽ കുറഞ്ഞ വിലയ്ക്ക് സാധനങ്ങൾ ലഭിക്കാൻ പ്രയാസമാണ്." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "A 'Tax Holiday' means exemption from?", ml: "'ടാക്സ് ഹോളിഡേ' (Tax Holiday) എന്നാൽ ഏതിൽ നിന്നുള്ള ഇളവാണ്?" },
      options: [
        { k: "A", text: { en: "Export duty", ml: "കയറ്റുമതി നികുതി" } },
        { k: "B", text: { en: "Paying taxes for a specific period", ml: "നിശ്ചിത കാലത്തേക്ക് നികുതി നൽകുന്നതിൽ നിന്നുള്ള ഇളവ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It is an incentive where new units don't pay tax for initial years.", ml: "പുതിയ വ്യവസായങ്ങളെ സഹായിക്കാൻ സർക്കാർ നൽകുന്ന നികുതി ഇളവാണിത്." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "Small businesses prevent migration from rural areas to ____.", ml: "ഗ്രാമീണ ജനത എങ്ങോട്ട് കുടിയേറുന്നത് തടയാൻ ചെറുകിട വ്യവസായങ്ങൾ സഹായിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Other villages", ml: "മറ്റ് ഗ്രാമങ്ങളിലേക്ക്" } },
        { k: "B", text: { en: "Urban areas (Cities)", ml: "നഗരങ്ങളിലേക്ക്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Local employment opportunities stop people from moving to cities.", ml: "ഗ്രാമങ്ങളിൽ തന്നെ ജോലി ലഭിക്കുന്നതിനാൽ ആളുകൾ നഗരങ്ങളിലേക്ക് പോകുന്നത് കുറയുന്നു." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "Incentives for backward areas often include power supply at ____.", ml: "പിന്നോക്ക മേഖലകളിലെ വ്യവസായങ്ങൾക്ക് വൈദ്യുതി നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "High rates", ml: "ഉയർന്ന നിരക്കിൽ" } },
        { k: "B", text: { en: "Concessional rates", ml: "കുറഞ്ഞ (സബ്‌സിഡി) നിരക്കിൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Government provides electricity at subsidized or lower rates to these units.", ml: "വ്യവസായങ്ങളെ ആകർഷിക്കാൻ കുറഞ്ഞ നിരക്കിൽ വൈദ്യുതി സർക്കാർ നൽകുന്നു." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "Which institution distributes raw materials to small units?", ml: "ചെറുകിട യൂണിറ്റുകൾക്ക് അസംസ്കൃത വസ്തുക്കൾ വിതരണം ചെയ്യുന്ന സ്ഥാപനം?" },
      options: [
        { k: "A", text: { en: "NSIC", ml: "എൻ.എസ്.ഐ.സി (NSIC)" } },
        { k: "B", text: { en: "RBI", ml: "RBI" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "NSIC helps in distributing indigenous and imported raw materials.", ml: "അസംസ്കൃത വസ്തുക്കളുടെ ലഭ്യത ഉറപ്പാക്കാൻ NSIC സഹായിക്കുന്നു." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "Small businesses face competition from?", ml: "ചെറുകിട ബിസിനസ്സുകൾ ആരിൽ നിന്നാണ് മത്സരം നേരിടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Only other small units", ml: "മറ്റ് ചെറുകിട യൂണിറ്റുകളിൽ നിന്ന് മാത്രം" } },
        { k: "B", text: { en: "Multinational giants", ml: "വൻകിട ബഹുരാഷ്ട്ര കമ്പനികളിൽ നിന്ന്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Globalization has brought intense competition from large MNCs.", ml: "ആഗോളവൽക്കരണം മൂലം വലിയ കമ്പനികളിൽ നിന്നുള്ള മത്സരം ഈ മേഖലയ്ക്ക് ഭീഷണിയാണ്." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "Investment limit for Medium Manufacturing Enterprise is up to?", ml: "ഇടത്തരം നിർമ്മാണ യൂണിറ്റുകളുടെ (Medium Manufacturing) നിക്ഷേപ പരിധി?" },
      options: [
        { k: "A", text: { en: "₹5 crore", ml: "5 കോടി" } },
        { k: "B", text: { en: "₹10 crore", ml: "10 കോടി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Medium manufacturing limit is more than ₹5 crore but up to ₹10 crore.", ml: "നിർമ്മാണ മേഖലയിലെ ഇടത്തരം യൂണിറ്റുകൾക്ക് 10 കോടി രൂപ വരെയാണ് പരിധി." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "Which sector is considered the backbone of India's economy?", ml: "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയുടെ നട്ടെല്ലായി കണക്കാക്കുന്നത് ഏതിനെയാണ്?" },
      options: [
        { k: "A", text: { en: "Public sector", ml: "പൊതുമേഖല" } },
        { k: "B", text: { en: "Small business sector", ml: "ചെറുകിട ബിസിനസ്സ് മേഖല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Small businesses drive a massive part of industrial units and exports.", ml: "സാമ്പത്തിക വികസനത്തിൽ വലിയ പങ്കുവഹിക്കുന്നതിനാൽ ഇവയെ സമ്പദ്‌വ്യവസ്ഥയുടെ നട്ടെല്ല് എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "Lack of creditworthiness makes it hard for small units to get?", ml: "ക്രെഡിറ്റ് യോഗ്യത (Creditworthiness) ഇല്ലാത്തത് ചെറുകിട യൂണിറ്റുകൾക്ക് എന്തിനെയാണ് ബാധിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Raw materials", ml: "അസംസ്കൃത വസ്തുക്കൾ" } },
        { k: "B", text: { en: "Bank loans/finance", ml: "ബാങ്ക് വായ്പകൾ/പണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Banks are often reluctant to lend to units without strong financial records.", ml: "വായ്പകൾ ലഭിക്കുന്നതിന് ഈ പ്രശ്നം വലിയ തടസ്സമാണ്." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "Village industries are located in ____ areas.", ml: "ഗ്രാമ വ്യവസായങ്ങൾ (Village industries) എവിടെയാണ് സ്ഥിതി ചെയ്യുന്നത്?" },
      options: [
        { k: "A", text: { en: "Urban", ml: "നഗരങ്ങളിൽ" } },
        { k: "B", text: { en: "Rural", ml: "ഗ്രാമങ്ങളിൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Village industries are specifically rural-based units.", ml: "ഗ്രാമപ്രദേശങ്ങളിൽ പ്രവർത്തിക്കുന്ന ചെറുകിട വ്യവസായങ്ങളാണിവ." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "Which mantra is suggested for small businesses to survive globalization?", ml: "ആഗോളവൽക്കരണത്തെ നേരിടാൻ ചെറുകിട ബിസിനസ്സുകൾക്ക് നൽകുന്ന സൂക്തം?" },
      options: [
        { k: "A", text: { en: "Think global, act local", ml: "ആഗോളമായി ചിന്തിക്കുക, പ്രാദേശികമായി പ്രവർത്തിക്കുക" } },
        { k: "B", text: { en: "Only focus local", ml: "പ്രാദേശികമായി മാത്രം ശ്രദ്ധിക്കുക" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "They must meet global quality while leveraging local advantages.", ml: "ആഗോള നിലവാരം പുലർത്തുകയും പ്രാദേശിക ഗുണങ്ങൾ ഉപയോഗിക്കുകയും വേണം." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "High employee turnover in small units is often due to?", ml: "ചെറുകിട യൂണിറ്റുകളിൽ തൊഴിലാളികൾ വേഗം ജോലി വിട്ടുപോകാൻ കാരണമെന്ത്?" },
      options: [
        { k: "A", text: { en: "Too much work", ml: "കൂടുതൽ ജോലി" } },
        { k: "B", text: { en: "Inability to pay high wages", ml: "ഉയർന്ന ശമ്പളം നൽകാൻ കഴിയാത്തത്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Limited finance makes it hard to retain skilled workers with high pay.", ml: "കുറഞ്ഞ ശമ്പളം ആയതിനാൽ തൊഴിലാളികൾ മെച്ചപ്പെട്ട അവസരങ്ങൾ തേടി പോകുന്നു." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "The investment in safe devices is ____ while calculating investment limits.", ml: "നിക്ഷേപ പരിധി കണക്കാക്കുമ്പോൾ സുരക്ഷാ ഉപകരണങ്ങളുടെ ചെലവ് ____." },
      options: [
        { k: "A", text: { en: "Included", ml: "ഉൾപ്പെടുത്തും" } },
        { k: "B", text: { en: "Excluded", ml: "ഒഴിവാക്കും" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Cost of pollution control and safety devices is excluded from limits.", ml: "സുരക്ഷാ ഉപകരണങ്ങൾ, മലിനീകരണ നിയന്ത്രണം എന്നിവയുടെ ചെലവ് ഇതിൽ കണക്കാക്കില്ല." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "Small businesses help reduce income ____.", ml: "ചെറുകിട ബിസിനസ്സുകൾ എന്ത് കുറയ്ക്കാൻ സഹായിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Growth", ml: "വളർച്ച" } },
        { k: "B", text: { en: "Inequality", ml: "അസമത്വം (Inequality)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Dispersed industrialization ensures wealth reaches more people.", ml: "സമ്പത്ത് കൂടുതൽ ആളുകളിലേക്ക് എത്തുന്നതിലൂടെ സാമ്പത്തിക അസമത്വം കുറയുന്നു." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "Which institution coordinates Village and Khadi industries?", ml: "ഗ്രാമ-ഖാദി വ്യവസായങ്ങളെ ഏകോപിപ്പിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "KVIC", ml: "കെ.വി.ഐ.സി (KVIC)" } },
        { k: "B", text: { en: "SEBI", ml: "SEBI" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Khadi and Village Industries Commission handles these units.", ml: "ഖാദി, ഗ്രാമ വ്യവസായങ്ങളുടെ ചുമതല KVIC-യ്ക്കാണ്." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "Small units are ____-intensive.", ml: "ചെറുകിട യൂണിറ്റുകൾ ____-അധിഷ്ഠിതമാണ്." },
      options: [
        { k: "A", text: { en: "Capital", ml: "മൂലധന" } },
        { k: "B", text: { en: "Labour", ml: "തൊഴിൽ (Labour)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "They use more labour and less capital compared to large firms.", ml: "കൂടുതൽ തൊഴിലാളികളെ ഉപയോഗിക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "Incentives for hilly areas help in balanced ____ development.", ml: "മലയോര മേഖലകളിലെ ആനുകൂല്യങ്ങൾ ഏത് തരത്തിലുള്ള വികസനത്തിനാണ് സഹായിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Regional", ml: "പ്രാദേശിക (Regional)" } },
        { k: "B", text: { en: "Only urban", ml: "നഗരങ്ങളിൽ മാത്രം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It ensures that all regions grow together.", ml: "എല്ലാ പ്രദേശങ്ങൾക്കും ഒരേപോലെ വികസനം ലഭിക്കാൻ ഇത് സഹായിക്കുന്നു." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "The SFURTI fund is for regenerating ____ industries.", ml: "SFURTI ഫണ്ട് ഏത് വ്യവസായങ്ങളുടെ പുനരുദ്ധാരണത്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "IT", ml: "ഐടി" } },
        { k: "B", text: { en: "Traditional", ml: "പരമ്പരാഗത വ്യവസായങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is for Regeneration of Traditional Industries.", ml: "പരമ്പരാഗത വ്യവസായങ്ങളെ സംരക്ഷിക്കാനുള്ള പദ്ധതിയാണിത്." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "ISO 9000 certification is related to?", ml: "ISO 9000 സർട്ടിഫിക്കറ്റ് ഏതുമായി ബന്ധപ്പെട്ടതാണ്?" },
      options: [
        { k: "A", text: { en: "Tax", ml: "നികുതി" } },
        { k: "B", text: { en: "Quality", ml: "ഗുണമേന്മ (Quality)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is an international standard for quality management.", ml: "ഉൽപ്പന്നങ്ങളുടെ അന്താരാഷ്ട്ര ഗുണമേന്മ ഉറപ്പാക്കുന്ന സർട്ടിഫിക്കറ്റാണിത്." }
    }
  ],
  videos: [
    { title: "09 ചെറുകിട ബിസിനസ് അധ്യായം 9", url: "https://www.youtube.com/watch?v=2qKNG38QQ1s" }
  ]
};

export const plusOneBusinessStudiesUnit10: Lesson = {
  id: "pl-bs-11-unit10",
  title: { en: "Internal Trade", ml: "ആഭ്യന്തര വ്യാപാരം" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Understand the concept and nature of internal trade", ml: "ആഭ്യന്തര വ്യാപാരം എന്ന ആശയവും അതിന്റെ സ്വഭാവവും മനസ്സിലാക്കുക" },
    { en: "Explain the roles and services of wholesalers and retailers", ml: "മൊത്തവ്യാപാരികളുടെയും (Wholesalers) ചില്ലറ വ്യാപാരികളുടെയും (Retailers) ധർമ്മങ്ങളും സേവനങ്ങളും വിവരിക്കുക" },
    { en: "Classify different types of itinerant and fixed shop retailers", ml: "വിവിധ തരം സഞ്ചരിക്കുന്ന വ്യാപാരികളെയും സ്ഥിരമായ കടകളുള്ള വ്യാപാരികളെയും തരംതിരിക്കുക" },
    { en: "Understand the structure and benefits of Goods and Services Tax (GST)", ml: "ചരക്ക് സേവന നികുതിയുടെ (GST) ഘടനയും ഗുണങ്ങളും മനസ്സിലാക്കുക" },
    { en: "Recognize the role of commerce and industry associations", ml: "വാണിജ്യ-വ്യവസായ അസോസിയേഷനുകളുടെ പങ്ക് തിരിച്ചറിയുക" }
  ],
  content: {
    intro: {
      en: "This chapter explores internal trade, detailing the functions of wholesalers, retailers, and the impact of GST on the national market.",
      ml: "ആഭ്യന്തര വ്യാപാരം, മൊത്തവ്യാപാരികൾ, ചില്ലറ വ്യാപാരികൾ എന്നിവരുടെ ധർമ്മങ്ങളെക്കുറിച്ചും ജി.എസ്.ടി (GST) ദേശീയ വിപണിയിൽ ചെലുത്തുന്ന സ്വാധീനത്തെക്കുറിച്ചും ഈ അധ്യായം വിശദീകരിക്കുന്നു."
    },
    core: {
      en: "Learn about distribution channels, types of retail formats (departmental stores, chain stores), GST structure (CGST, SGST, IGST), and trade associations.",
      ml: "വിതരണ ശൃംഖലകൾ, വിവിധ തരം ചില്ലറ വ്യാപാര രീതികൾ (ഡിപ്പാർട്ട്മെന്റൽ സ്റ്റോറുകൾ, ചെയിൻ സ്റ്റോറുകൾ), ജി.എസ്.ടി ഘടന (CGST, SGST, IGST), ട്രേഡ് അസോസിയേഷനുകൾ എന്നിവയെക്കുറിച്ച് പഠിക്കുക."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'Internal trade refers to the buying and selling of goods and services within the geographical boundaries of a country. It is divided into wholesale and retail trade. The chapter also covers various retailing formats, GST, and the role of trade associations.', ml: 'ഒരു രാജ്യത്തിന്റെ ഭൂമിശാസ്ത്രപരമായ അതിരുകൾക്കുള്ളിൽ നടക്കുന്ന സാധനങ്ങളുടെയും സേവനങ്ങളുടെയും വാങ്ങലിനെയും വിൽക്കലിനെയും ആഭ്യന്തര വ്യാപാരം (Internal Trade) എന്ന് വിളിക്കുന്നു. ഇതിനെ മൊത്തവ്യാപാരം (Wholesale Trade), ചില്ലറ വ്യാപാരം (Retail Trade) എന്നിങ്ങനെ രണ്ടായി തിരിച്ചിരിക്കുന്നു. വിവിധ തരം വ്യാപാര രീതികൾ, ജി.എസ്.ടി, ട്രേഡ് അസോസിയേഷനുകൾ എന്നിവയും ഈ അധ്യായത്തിൽ ഉൾപ്പെടുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Internal Trade: Buying and selling within a nation\'s boundaries, without custom or import duties.', ml: 'ആഭ്യന്തര വ്യാപാരം (Internal Trade): ഒരു രാജ്യത്തിന്റെ അതിരുകൾക്കുള്ളിൽ നടക്കുന്ന വ്യാപാരം. ഇതിന് കസ്റ്റംസ് ഡ്യൂട്ടിയോ ഇറക്കുമതി തീരുവയോ നൽകേണ്ടതില്ല.' },
        { en: 'Wholesale Trade: Purchase and sale of goods in large quantities for resale or intermediate use.', ml: 'മൊത്തവ്യാപാരം (Wholesale Trade): വീണ്ടും വിൽക്കുന്നതിനായി വലിയ അളവിൽ സാധനങ്ങൾ വാങ്ങുന്നതും വിൽക്കുന്നതുമായ രീതി.' },
        { en: 'Retail Trade: Sale of goods in small quantities directly to the ultimate consumers.', ml: 'ചില്ലറ വ്യാപാരം (Retail Trade): കുറഞ്ഞ അളവിൽ സാധനങ്ങൾ നേരിട്ട് ഉപഭോക്താക്കൾക്ക് വിൽക്കുന്ന രീതി.' },
        { en: 'Itinerant Retailers: Traders without a fixed place of business who move from place to place.', ml: 'സഞ്ചരിക്കുന്ന വ്യാപാരികൾ (Itinerant Retailers): ബിസിനസ്സ് നടത്താൻ സ്ഥിരമായ ഒരിടമില്ലാത്തവരും സാധനങ്ങളുമായി ഒരിടത്തുനിന്ന് മറ്റൊരിടത്തേക്ക് സഞ്ചരിക്കുന്നവരുമായ വ്യാപാരികൾ.' },
        { en: 'GST: A destination-based single tax on the supply of goods and services.', ml: 'ജി.എസ്.ടി (GST): സാധനങ്ങളുടെയും സേവനങ്ങളുടെയും വിതരണത്തിന്മേൽ ഏർപ്പെടുത്തിയിട്ടുള്ള ഉപഭോഗാധിഷ്ഠിത നികുതി (Destination-based tax).' }
      ]},

      { type: 'h2', en: '3. Services of Wholesalers', ml: '3. മൊത്തവ്യാപാരികളുടെ സേവനങ്ങൾ' },
      { type: 'h3', en: 'Services to Manufacturers', ml: 'നിർമ്മാതാക്കൾക്കുള്ള സേവനങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Facilitate large-scale production by collecting small orders.', ml: 'ചെറിയ ഓർഡറുകൾ ശേഖരിച്ച് വൻതോതിലുള്ള ഉൽപ്പാദനം സാധ്യമാക്കുന്നു.' },
        { en: 'Bear risk of storage and price fluctuations.', ml: 'ശേഖരണവും വിലയിലെ മാറ്റങ്ങളും മൂലമുണ്ടാകുന്ന റിസ്ക് ഏറ്റെടുക്കുന്നു.' },
        { en: 'Provide financial assistance through cash payments.', ml: 'പണമായി പണം നൽകി സാമ്പത്തിക സഹായം നൽകുന്നു.' },
        { en: 'Offer expert market advice and relief from storage burden.', ml: 'വിപണിയെക്കുറിച്ചുള്ള വിദഗ്ദ്ധ ഉപദേശം നൽകുകയും സംഭരണ ചുമതലയിൽ നിന്ന് ഒഴിവാക്കുകയും ചെയ്യുന്നു.' }
      ]},
      { type: 'h3', en: 'Services to Retailers', ml: 'ചില്ലറ വ്യാപാരികൾക്കുള്ള സേവനങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Ensure ready availability of varied goods.', ml: 'വിവിധ തരം സാധനങ്ങൾ എപ്പോഴും ലഭ്യമാണെന്ന് ഉറപ്പാക്കുന്നു.' },
        { en: 'Provide marketing support and credit facilities.', ml: 'വിപണന സഹായവും കടം (Credit) നൽകാനുള്ള സൗകര്യവും നൽകുന്നു.' },
        { en: 'Share specialized product knowledge and absorb inventory risk.', ml: 'ഉൽപ്പന്നങ്ങളെക്കുറിച്ചുള്ള പ്രത്യേക അറിവ് നൽകുകയും സ്റ്റോക്ക് സൂക്ഷിക്കുന്നതിലെ റിസ്ക് ഏറ്റെടുക്കുകയും ചെയ്യുന്നു.' }
      ]},

      { type: 'h2', en: '4. Services of Retailers', ml: '4. ചില്ലറ വ്യാപാരികളുടെ സേവനങ്ങൾ' },
      { type: 'h3', en: 'Services to Manufacturers/Wholesalers', ml: 'നിർമ്മാതാക്കൾക്കും മൊത്തവ്യാപാരികൾക്കുമുള്ള സേവനങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Help in widespread distribution and personal selling.', ml: 'സാധനങ്ങൾ പരമാവധി ആളുകളിൽ എത്തിക്കാനും വ്യക്തിഗതമായി വിൽക്കാനും സഹായിക്കുന്നു.' },
        { en: 'Collect vital market information and execute promotional campaigns.', ml: 'പ്രധാനപ്പെട്ട വിപണി വിവരങ്ങൾ ശേഖരിക്കുകയും പരസ്യ പ്രവർത്തനങ്ങളിൽ സഹായിക്കുകയും ചെയ്യുന്നു.' }
      ]},
      { type: 'h3', en: 'Services to Consumers', ml: 'ഉപഭോക്താക്കൾക്കുള്ള സേവനങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Maintain regular availability and offer buying convenience.', ml: 'സാധനങ്ങൾ എപ്പോഴും ലഭ്യമാക്കുകയും അടുത്തുള്ള സ്ഥലങ്ങളിൽ നിന്ന് വാങ്ങാനുള്ള സൗകര്യം നൽകുകയും ചെയ്യുന്നു.' },
        { en: 'Provide wide selection and after-sales services (home delivery, repairs).', ml: 'തിരഞ്ഞെടുക്കാൻ നിരവധി ഓപ്ഷനുകൾ നൽകുകയും ഹോം ഡെലിവറി, റിപ്പയർ തുടങ്ങിയ സേവനങ്ങൾ നൽകുകയും ചെയ്യുന്നു.' }
      ]},

      { type: 'h2', en: '5. Types of Itinerant Retailers', ml: '5. വിവിധ തരം സഞ്ചരിക്കുന്ന വ്യാപാരികൾ' },
      { type: 'ul', items: [
        { en: 'Peddlers and hawkers: Carry products on cycles or handcarts.', ml: 'ഫെറിക്കാർ (Peddlers and hawkers): സൈക്കിളിലോ തലയിലോ സാധനങ്ങൾ ചുമന്ന് നടന്നു വിൽക്കുന്നവർ.' },
        { en: 'Market traders: Open shops at different places on fixed days (e.g., Saturday markets).', ml: 'ചന്ത വ്യാപാരികൾ (Market traders): നിശ്ചിത ദിവസങ്ങളിൽ നിശ്ചിത സ്ഥലങ്ങളിൽ കടയിടുന്നവർ (ഉദാ: ശനിയാഴ്ച ചന്ത).' },
        { en: 'Street traders: Found at busy places like railway stations.', ml: 'തെരുവ് വ്യാപാരികൾ (Street traders): ബസ് സ്റ്റാൻഡ്, റെയിൽവേ സ്റ്റേഷൻ തുടങ്ങിയ തിരക്കുള്ള സ്ഥലങ്ങളിൽ സാധനങ്ങൾ വിൽക്കുന്നവർ.' },
        { en: 'Cheap jacks: Temporary shops in business localities.', ml: 'ചീപ്പ് ജാക്ക്സ് (Cheap jacks): നിശ്ചിത കാലത്തേക്ക് വാടകയ്ക്ക് കടകൾ എടുത്ത് സാധനങ്ങൾ വിൽക്കുന്നവർ.' }
      ]},

      { type: 'h2', en: '6. Fixed Shop Retailers', ml: '6. സ്ഥിരമായ കടകളുള്ള വ്യാപാരികൾ' },
      { type: 'h3', en: 'Small Scale', ml: 'ചെറുകിടക്കാർ' },
      { type: 'ul', items: [
        { en: 'General Stores: Daily items in residential areas.', ml: 'ജനറൽ സ്റ്റോറുകൾ: താമസസ്ഥലങ്ങൾക്ക് അടുത്തുള്ള നിത്യോപയോഗ സാധനങ്ങൾ വിൽക്കുന്ന കടകൾ.' },
        { en: 'Speciality Shops: Focus on specific lines (e.g., children\'s garments).', ml: 'സ്പെഷ്യാലിറ്റി ഷോപ്പുകൾ: ഒരു പ്രത്യേക തരം സാധനങ്ങൾ മാത്രം വിൽക്കുന്നവർ (ഉദാ: കുട്ടികളുടെ വസ്ത്രങ്ങൾ).' },
        { en: 'Second-hand Goods Shop: Used books, clothes, etc.', ml: 'സെക്കൻഡ് ഹാൻഡ് കടകൾ: ഉപയോഗിച്ച പുസ്തകങ്ങൾ, വസ്ത്രങ്ങൾ എന്നിവ വിൽക്കുന്നവർ.' }
      ]},
      { type: 'h3', en: 'Large Scale', ml: 'വൻകിടക്കാർ' },
      { type: 'ul', items: [
        { en: 'Departmental Stores: Diverse products under one roof.', ml: 'ഡിപ്പാർട്ട്മെന്റൽ സ്റ്റോറുകൾ: എല്ലാ തരം സാധനങ്ങളും ഒരേ കെട്ടിടത്തിന് കീഴിൽ ലഭ്യമാകുന്ന കടകൾ.' },
        { en: 'Chain Stores: Uniform shops owned by a single organization.', ml: 'ചെയിൻ സ്റ്റോറുകൾ: ഒരേ കമ്പനിയുടെ കീഴിലുള്ള ഒരേ രൂപത്തിലുള്ള കടകളുടെ ശൃംഖല.' },
        { en: 'Mail Order Houses: Selling through post/mail without personal contact.', ml: 'മെയ്ൽ ഓർഡർ ഹൗസുകൾ: തപാൽ വഴി സാധനങ്ങൾ വിൽക്കുന്ന രീതി.' },
        { en: 'Super Markets: Low price, self-service units.', ml: 'സൂപ്പർ മാർക്കറ്റുകൾ: കുറഞ്ഞ വിലയിൽ സാധനങ്ങൾ ലഭിക്കുന്ന സ്വയം സേവന (Self-service) രീതിയിലുള്ള കടകൾ.' },
        { en: 'Vending Machines: Coin operated machines.', ml: 'വെൻഡിംഗ് മെഷീനുകൾ: കോയിൻ ഉപയോഗിച്ച് പ്രവർത്തിക്കുന്ന യന്ത്രങ്ങൾ.' }
      ]},

      { type: 'h2', en: '7. Goods and Services Tax (GST)', ml: '7. ചരക്ക് സേവന നികുതി (GST)' },
      { type: 'p', en: 'Implemented on July 1, 2017, under \'One Nation and One Tax\'.', ml: '2017 ജൂലൈ 1-ന് \'ഒരു രാജ്യം ഒരു നികുതി\' എന്ന ലക്ഷ്യത്തോടെ നടപ്പിലാക്കി.' },
      { type: 'ul', items: [
        { en: 'Destination-based consumption tax.', ml: 'ഉപഭോഗാധിഷ്ഠിത നികുതിയാണിത്.' },
        { en: 'Intra-state: CGST (Central) and SGST (State).', ml: 'സംസ്ഥാനത്തിനുള്ളിലെ വ്യാപാരം: CGST (കേന്ദ്രം), SGST (സംസ്ഥാനം).' },
        { en: 'Inter-state: IGST (Integrated).', ml: 'സംസ്ഥാനങ്ങൾ തമ്മിലുള്ള വ്യാപാരം: IGST.' },
        { en: 'Major Slabs: 5%, 12%, 18%, and 28%.', ml: 'പ്രധാന സ്ലാബുകൾ: 5%, 12%, 18%, 28%.' }
      ]},

      { type: 'h2', en: '8. Tables for Easy Learning', ml: '8. പഠിക്കാൻ എളുപ്പത്തിനുള്ള പട്ടികകൾ' },
      { type: 'h3', en: 'Comparison: Departmental Stores vs. Chain Stores', ml: 'താരതമ്യം: ഡിപ്പാർട്ട്മെന്റൽ സ്റ്റോർ vs. ചെയിൻ സ്റ്റോർ' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Dept. Stores', ml: 'ഡിപ്പാർട്ട്മെന്റൽ'}, {en: 'Chain Stores', ml: 'ചെയിൻ സ്റ്റോറുകൾ'}],
        rows: [
          [{en: 'Location', ml: 'സ്ഥാനം'}, {en: 'Central place', ml: 'നഗരമദ്ധ്യത്തിൽ'}, {en: 'Various localities', ml: 'വിവിധ ജനവാസ മേഖലകളിൽ'}],
          [{en: 'Range', ml: 'വൈവിധ്യം'}, {en: 'Wide variety', ml: 'വളരെ കൂടുതൽ'}, {en: 'Limited/Specific', ml: 'പരിമിതമായ ഇനങ്ങൾ'}],
          [{en: 'Pricing', ml: 'വില'}, {en: 'Flexible', ml: 'വ്യത്യാസപ്പെടാം'}, {en: 'Fixed/Uniform', ml: 'സ്ഥിരമായ വില'}]
        ]
      }},
      { type: 'h3', en: 'Important Trade Terms', ml: 'പ്രധാന വ്യാപാര പദങ്ങൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം'}, {en: 'Meaning', ml: 'അർത്ഥം'}],
        rows: [
          [{en: 'COD', ml: 'സി.ഒ.ഡി (COD)'}, {en: 'Cash on Delivery', ml: 'സാധനം നൽകുമ്പോൾ പണം നൽകുക.'}],
          [{en: 'FOB', ml: 'എഫ്.ഒ.ബി (FOB)'}, {en: 'Free on Board; seller pays till delivery to carrier.', ml: 'കയറ്റി അയക്കുന്നിടം വരെയുള്ള ചെലവ് വിൽക്കുന്നയാൾ വഹിക്കുന്നു.'}],
          [{en: 'E&OE', ml: 'E&OE'}, {en: 'Errors and Omissions Excepted', ml: 'തെറ്റുകൾ തിരുത്താൻ വിധേയം.'}]
        ]
      }},

      { type: 'h2', en: '9. Quick Revision', ml: '9. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: 'Wholesalers link manufacturers and retailers.', ml: 'മൊത്തവ്യാപാരികൾ നിർമ്മാതാക്കളെയും ചില്ലറ വ്യാപാരികളെയും തമ്മിൽ ബന്ധിപ്പിക്കുന്നു.' },
        { en: 'Retailers deal directly with consumers.', ml: 'ചില്ലറ വ്യാപാരികൾ നേരിട്ട് ഉപഭോക്താക്കളുമായി ഇടപഴകുന്നു.' },
        { en: 'GST unifies the Indian market into one.', ml: 'ജി.എസ്.ടി ഇന്ത്യൻ വിപണിയെ ഒന്നിപ്പിക്കുന്നു.' },
        { en: 'Trade associations protect the interests of business.', ml: 'ട്രേഡ് അസോസിയേഷനുകൾ ബിസിനസ്സ് താൽപ്പര്യങ്ങൾ സംരക്ഷിക്കുന്നു.' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "Internal Trade", ml: "ആഭ്യന്തര വ്യാപാരം (Internal Trade)" }, definition: { en: "The buying and selling of goods and services within the geographical boundaries of a single nation.", ml: "ഒരു രാജ്യത്തിന്റെ ഭൂമിശാസ്ത്രപരമായ അതിരുകൾക്കുള്ളിൽ സാധനങ്ങളും സേവനങ്ങളും വാങ്ങുകയും വിൽക്കുകയും ചെയ്യുന്നതിനെയാണ് ആഭ്യന്തര വ്യാപാരം (Internal Trade) എന്ന് വിളിക്കുന്നത്." } },
    { term: { en: "Wholesale Trade", ml: "മൊത്തവ്യാപാരം (Wholesale Trade)" }, definition: { en: "The purchase and sale of goods in large bulk quantities primarily for the purpose of resale or intermediate industrial use.", ml: "വീണ്ടും വിൽക്കുന്നതിനോ മറ്റ് വ്യവസായ ആവശ്യങ്ങൾക്കോ വേണ്ടി വലിയ അളവിൽ സാധനങ്ങൾ വാങ്ങുകയും വിൽക്കുകയും ചെയ്യുന്നതിനെ മൊത്തവ്യാപാരം (Wholesale Trade) എന്ന് വിളിക്കുന്നു." } },
    { term: { en: "Retail Trade", ml: "ചില്ലറ വ്യാപാരം (Retail Trade)" }, definition: { en: "The final stage of distribution involving the sale of goods in relatively small quantities directly to the ultimate consumers.", ml: "വിതരണ ശൃംഖലയിലെ അവസാന ഘട്ടമാണിത്. സാധനങ്ങൾ ചെറിയ അളവിൽ നേരിട്ട് ഉപഭോക്താക്കൾക്ക് വിൽക്കുന്നതിനെ ചില്ലറ വ്യാപാരം (Retail Trade) എന്ന് വിളിക്കുന്നു." } },
    { term: { en: "Itinerant Retailers", ml: "സഞ്ചരിക്കുന്ന വ്യാപാരികൾ (Itinerant Retailers)" }, definition: { en: "Small traders like hawkers and cheap jacks who do not maintain a fixed place of business and move around to sell their merchandise.", ml: "സ്ഥിരമായ ഒരു വ്യാപാര കേന്ദ്രമില്ലാത്തവരും ഒരിടത്തുനിന്ന് മറ്റൊരിടത്തേക്ക് സഞ്ചരിച്ച് കച്ചവടം നടത്തുന്നവരുമായ വ്യാപാരികളാണിവർ." } },
    { term: { en: "Departmental Stores", ml: "ഡിപ്പാർട്ട്മെന്റൽ സ്റ്റോറുകൾ (Departmental Stores)" }, definition: { en: "Large-scale fixed retail establishments offering a massive variety of product lines divided into separate departments under one roof.", ml: "വിവിധ തരം ഉൽപ്പന്നങ്ങൾ പ്രത്യേക വിഭാഗങ്ങളായി (Departments) തിരിച്ച് ഒരേ കെട്ടിടത്തിൽ വിൽക്കുന്ന വൻകിട വ്യാപാര സ്ഥാപനങ്ങളാണ് ഡിപ്പാർട്ട്മെന്റൽ സ്റ്റോറുകൾ (Departmental Stores)." } },
    { term: { en: "Chain Stores (Multiple Shops)", ml: "ചെയിൻ സ്റ്റോറുകൾ (Chain Stores / Multiple Shops)" }, definition: { en: "A network of identical retail shops owned by a single manufacturer or intermediary selling standardized, branded products across various localities.", ml: "ഒരേ ഉടമസ്ഥതയിൽ വിവിധ സ്ഥലങ്ങളിലായി ഒരേ മാതൃകയിൽ പ്രവർത്തിക്കുന്ന കടകളുടെ ശൃംഖലയാണ് ചെയിൻ സ്റ്റോറുകൾ (Chain Stores)." } },
    { term: { en: "Mail Order Houses", ml: "മെയ്ൽ ഓർഡർ ഹൗസുകൾ (Mail Order Houses)" }, definition: { en: "Retail outlets that conduct business entirely through mail and postal services without any direct personal contact with the buyers.", ml: "ഉപഭോക്താക്കളുമായി നേരിട്ട് ബന്ധപ്പെടാതെ തപാൽ സൗകര്യം മാത്രം ഉപയോഗിച്ച് വ്യാപാരം നടത്തുന്ന സ്ഥാപനങ്ങളാണ് മെയ്ൽ ഓർഡർ ഹൗസുകൾ (Mail Order Houses)." } },
    { term: { en: "Super Markets", ml: "സൂപ്പർ മാർക്കറ്റുകൾ (Super Markets)" }, definition: { en: "Large retailing business units selling a wide variety of consumer and food goods based on low-price appeal and a self-service model.", ml: "കുറഞ്ഞ വിലയിൽ വിവിധ തരം നിത്യോപയോഗ സാധനങ്ങളും ഭക്ഷണ പദാർത്ഥങ്ങളും സ്വയം സേവന (Self-service) രീതിയിൽ വിൽക്കുന്ന വലിയ കടകളാണ് സൂപ്പർ മാർക്കറ്റുകൾ (Super Markets)." } },
    { term: { en: "Goods and Services Tax (GST)", ml: "ചരക്ക് സേവന നികുതി (Goods and Services Tax - GST)" }, definition: { en: "A revolutionary destination-based single indirect tax that replaced multiple cascading taxes to create a unified national market in India.", ml: "ഇന്ത്യയിലുടനീളം ഏകീകൃത വിപണി സൃഷ്ടിക്കുന്നതിനായി നിലവിലുണ്ടായിരുന്ന ഒന്നിലധികം പരോക്ഷ നികുതികൾക്ക് പകരമായി കൊണ്ടുവന്ന ഉപഭോഗാധിഷ്ഠിത (Destination-based) നികുതിയാണ് ജി.എസ്.ടി (GST)." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "Trade conducted within the geographical boundaries of a country is called?", ml: "ഒരു രാജ്യത്തിന്റെ അതിരുകൾക്കുള്ളിൽ നടക്കുന്ന വ്യാപാരത്തെ എന്തു വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "External Trade", ml: "വിദേശ വ്യാപാരം" } },
        { k: "B", text: { en: "Internal Trade", ml: "ആഭ്യന്തര വ്യാപാരം" } },
        { k: "C", text: { en: "International Trade", ml: "അന്താരാഷ്ട്ര വ്യാപാരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Internal trade happens within a single nation's territory.", ml: "രാജ്യത്തിനകത്ത് നടക്കുന്ന വ്യാപാരത്തെയാണ് ആഭ്യന്തര വ്യാപാരം എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "Buying and selling in large quantities for resale is known as?", ml: "വീണ്ടും വിൽക്കുന്നതിനായി വലിയ അളവിൽ സാധനങ്ങൾ വാങ്ങുകയും വിൽക്കുകയും ചെയ്യുന്നത്?" },
      options: [
        { k: "A", text: { en: "Retail Trade", ml: "ചില്ലറ വ്യാപാരം" } },
        { k: "B", text: { en: "Wholesale Trade", ml: "മൊത്തവ്യാപാരം" } },
        { k: "C", text: { en: "Export", ml: "കയറ്റുമതി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Wholesalers deal in bulk quantities.", ml: "മൊത്തവ്യാപാരികൾ (Wholesalers) വലിയ അളവിലാണ് സാധനങ്ങൾ കൈകാര്യം ചെയ്യുന്നത്." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "Who acts as a link between the wholesaler and the ultimate consumer?", ml: "മൊത്തവ്യാപാരിയും ഉപഭോക്താവും തമ്മിലുള്ള കണ്ണിയായി പ്രവർത്തിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Manufacturer", ml: "നിർമ്മാതാവ്" } },
        { k: "B", text: { en: "Retailer", ml: "ചില്ലറ വ്യാപാരി (Retailer)" } },
        { k: "C", text: { en: "Agent", ml: "ഏജന്റ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Retailers buy from wholesalers and sell to final consumers.", ml: "മൊത്തവ്യാപാരികളിൽ നിന്ന് വാങ്ങി ഉപഭോക്താക്കൾക്ക് വിൽക്കുന്നത് ചില്ലറ വ്യാപാരികളാണ്." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "Providing market information to manufacturers is a service of?", ml: "നിർമ്മാതാക്കൾക്ക് വിപണി വിവരങ്ങൾ നൽകുന്നത് ആരുടെ സേവനമാണ്?" },
      options: [
        { k: "A", text: { en: "Consumer", ml: "ഉപഭോക്താവ്" } },
        { k: "B", text: { en: "Wholesaler", ml: "മൊത്തവ്യാപാരി" } },
        { k: "C", text: { en: "Retailer", ml: "ചില്ലറ വ്യാപാരി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Wholesalers share expert market advice with manufacturers.", ml: "വിപണിയെക്കുറിച്ച് ആഴത്തിലുള്ള അറിവുള്ള മൊത്തവ്യാപാരികൾ നിർമ്മാതാക്കളെ സഹായിക്കുന്നു." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "Traders who do not have a fixed place of business are called?", ml: "ബിസിനസ്സ് നടത്താൻ സ്ഥിരമായ ഒരിടമില്ലാത്ത വ്യാപാരികളെ എന്തു വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Fixed shop retailers", ml: "സ്ഥിരമായ കടകളുള്ളവർ" } },
        { k: "B", text: { en: "Itinerant retailers", ml: "സഞ്ചരിക്കുന്ന വ്യാപാരികൾ (Itinerant)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "They move from place to place to reach customers.", ml: "ഒരിടത്തുനിന്നും മറ്റൊരിടത്തേക്ക് സഞ്ചരിച്ചു കച്ചവടം നടത്തുന്നവരെ ഇറ്റിനറന്റ് വ്യാപാരികൾ എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "Traders found near railway stations selling daily items are?", ml: "റെയിൽവേ സ്റ്റേഷനുകൾക്ക് സമീപം നിത്യോപയോഗ സാധനങ്ങൾ വിൽക്കുന്ന വ്യാപാരികൾ?" },
      options: [
        { k: "A", text: { en: "Market traders", ml: "ചന്ത വ്യാപാരികൾ" } },
        { k: "B", text: { en: "Street traders", ml: "തെരുവ് വ്യാപാരികൾ (Street traders)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Street traders locate themselves where floating population is high.", ml: "ആളുകൾ ധാരാളമായി വന്നുപോകുന്ന റെയിൽവേ സ്റ്റേഷൻ പോലുള്ള സ്ഥലങ്ങളിൽ ഇവർ കച്ചവടം നടത്തുന്നു." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "Shops dealing in used books or clothes are known as?", ml: "ഉപയോഗിച്ച പുസ്തകങ്ങളോ വസ്ത്രങ്ങളോ വിൽക്കുന്ന കടകൾ അറിയപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "General stores", ml: "ജനറൽ സ്റ്റോറുകൾ" } },
        { k: "B", text: { en: "Second-hand goods shops", ml: "സെക്കൻഡ് ഹാൻഡ് കടകൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "They sell used items at lower prices.", ml: "പഴയ സാധനങ്ങൾ കുറഞ്ഞ വിലയ്ക്ക് വിൽക്കുന്ന കടകളാണിവ." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "Which store offers a wide variety of products under one roof?", ml: "എല്ലാ തരം സാധനങ്ങളും ഒരു കുടക്കീഴിൽ ലഭ്യമാകുന്ന കട ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Chain store", ml: "ചെയിൻ സ്റ്റോർ" } },
        { k: "B", text: { en: "Departmental store", ml: "ഡിപ്പാർട്ട്മെന്റൽ സ്റ്റോർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Departmental stores have separate departments for different goods.", ml: "വിവിധ തരം സാധനങ്ങൾക്കായി പ്രത്യേക വിഭാഗങ്ങളുള്ള വലിയ കടകളാണിവ." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "A network of uniform retail shops owned by a single organization is?", ml: "ഒരേ ഉടമസ്ഥതയിലുള്ള ഒരേ പോലെയുള്ള കടകളുടെ ശൃംഖല?" },
      options: [
        { k: "A", text: { en: "Departmental store", ml: "ഡിപ്പാർട്ട്മെന്റൽ സ്റ്റോർ" } },
        { k: "B", text: { en: "Chain stores", ml: "ചെയിൻ സ്റ്റോറുകൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Chain stores sell standardized branded products.", ml: "പല സ്ഥലങ്ങളിലായി ഒരേ പോലെ പ്രവർത്തിക്കുന്ന കടകളാണ് ചെയിൻ സ്റ്റോറുകൾ." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "Selling merchandise through post without direct personal contact is?", ml: "നേരിട്ടുള്ള ബന്ധമില്ലാതെ തപാൽ വഴി സാധനങ്ങൾ വിൽക്കുന്ന രീതി?" },
      options: [
        { k: "A", text: { en: "Super market", ml: "സൂപ്പർ മാർക്കറ്റ്" } },
        { k: "B", text: { en: "Mail order houses", ml: "മെയ്ൽ ഓർഡർ ഹൗസുകൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Mail order houses use catalogues and advertisements.", ml: "പരസ്യങ്ങളിലൂടെ ഓർഡർ സ്വീകരിച്ച് തപാൽ വഴി സാധനങ്ങൾ അയച്ചു കൊടുക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "Supermarkets primarily work on the principle of?", ml: "സൂപ്പർ മാർക്കറ്റുകൾ പ്രധാനമായും ഏത് തത്വത്തിലാണ് പ്രവർത്തിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Personal selling", ml: "വ്യക്തിഗത വിൽപ്പന" } },
        { k: "B", text: { en: "Self-service", ml: "സ്വയം സേവനം (Self-service)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Consumers pick their own products in supermarkets.", ml: "സൂപ്പർ മാർക്കറ്റുകളിൽ ഉപഭോക്താക്കൾ തന്നെ സാധനങ്ങൾ തിരഞ്ഞെടുക്കുന്നു." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "Which retailing format uses coin-operated machines?", ml: "കോയിൻ ഉപയോഗിച്ച് പ്രവർത്തിക്കുന്ന യന്ത്രങ്ങൾ ഉപയോഗിച്ചുള്ള കച്ചവടം?" },
      options: [
        { k: "A", text: { en: "Vending machines", ml: "വെൻഡിംഗ് മെഷീനുകൾ" } },
        { k: "B", text: { en: "Super market", ml: "സൂപ്പർ മാർക്കറ്റ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Vending machines are automated for quick sales.", ml: "കാർഡോ കോയിനോ ഉപയോഗിച്ച് സാധനങ്ങൾ ലഭ്യമാക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "What does GST stand for?", ml: "GST എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Goods and Services Tax", ml: "Goods and Services Tax" } },
        { k: "B", text: { en: "General Sales Tax", ml: "General Sales Tax" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "GST replaced various indirect taxes in India.", ml: "ഇന്ത്യയിലെ പരോക്ഷ നികുതികൾക്കെല്ലാം പകരമായി കൊണ്ടുവന്നതാണ് ജി.എസ്.ടി." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "GST was implemented in India on?", ml: "ഇന്ത്യയിൽ ജി.എസ്.ടി നിലവിൽ വന്നത് എന്ന്?" },
      options: [
        { k: "A", text: { en: "January 1, 2017", ml: "ജനുവരി 1, 2017" } },
        { k: "B", text: { en: "July 1, 2017", ml: "ജൂലൈ 1, 2017" } },
        { k: "C", text: { en: "August 15, 2017", ml: "ഓഗസ്റ്റ് 15, 2017" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "GST was launched on July 1, 2017.", ml: "2017 ജൂലൈ ഒന്നാം തീയതി മുതലാണ് ജി.എസ്.ടി പ്രാബല്യത്തിൽ വന്നത്." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "GST is a ____ consumption tax.", ml: "ജി.എസ്.ടി ഒരു ____ ഉപഭോഗ നികുതിയാണ്." },
      options: [
        { k: "A", text: { en: "Origin-based", ml: "ഉൽപ്പാദനാധിഷ്ഠിത" } },
        { k: "B", text: { en: "Destination-based", ml: "ഉപഭോഗാധിഷ്ഠിത (Destination-based)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The tax goes to the state where the product is consumed.", ml: "സാധനം ഉപയോഗിക്കുന്ന സംസ്ഥാനത്തിനാണ് നികുതി വരുമാനം ലഭിക്കുന്നത്." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "What does IGST stand for?", ml: "IGST എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Integrated Goods and Services Tax", ml: "Integrated Goods and Services Tax" } },
        { k: "B", text: { en: "Internal Goods and Services Tax", ml: "Internal Goods and Services Tax" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "IGST applies to inter-state supplies.", ml: "സംസ്ഥാനങ്ങൾ തമ്മിലുള്ള വ്യാപാരത്തിന് ഐ.ജി.എസ്.ടി ആണ് നൽകേണ്ടത്." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "The tax on tax effect removed by GST is called?", ml: "ജി.എസ്.ടി വഴി ഒഴിവാക്കിയ 'നികുതിക്ക് മേൽ നികുതി' എന്ന അവസ്ഥയുടെ പേര്?" },
      options: [
        { k: "A", text: { en: "Direct effect", ml: "നേരിട്ടുള്ള സ്വാധീനം" } },
        { k: "B", text: { en: "Cascading effect", ml: "കാസ്കേഡിംഗ് പ്രഭാവം (Cascading)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "GST prevents multiple taxes on the same item at different levels.", ml: "ഒരു സാധനത്തിന് മേൽ പലതവണ നികുതി വരുന്നത് ഒഴിവാക്കാൻ ജി.എസ്.ടി സഹായിക്കുന്നു." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "FICCI and CII are examples of?", ml: "FICCI, CII എന്നിവ ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Government Departments", ml: "സർക്കാർ വകുപ്പുകൾ" } },
        { k: "B", text: { en: "Trade Associations", ml: "ട്രേഡ് അസോസിയേഷനുകൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "They represent the interests of commerce and industry.", ml: "വാണിജ്യ-വ്യവസായ മേഖലയുടെ താൽപ്പര്യങ്ങൾ സംരക്ഷിക്കുന്ന സംഘടനകളാണിവ." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "COD stands for?", ml: "COD എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Cash on Delivery", ml: "Cash on Delivery" } },
        { k: "B", text: { en: "Credit on Delivery", ml: "Credit on Delivery" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Payment is made at the time of delivery.", ml: "സാധനം ലഭിക്കുമ്പോൾ പണം നൽകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "E&OE in trade documents means?", ml: "വ്യാപാര രേഖകളിലെ E&OE എന്നതിന്റെ അർത്ഥം?" },
      options: [
        { k: "A", text: { en: "Errors and Omissions Excepted", ml: "Errors and Omissions Excepted" } },
        { k: "B", text: { en: "Entry and Output Expected", ml: "Entry and Output Expected" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It indicates that the document can be corrected if there are mistakes.", ml: "രേഖയിൽ തെറ്റുകൾ ഉണ്ടെങ്കിൽ അത് തിരുത്താൻ അർഹതയുണ്ട് എന്നാണ് ഇതിന്റെ അർത്ഥം." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "Which of these is a large-scale fixed retailer?", ml: "താഴെ പറയുന്നവയിൽ വൻകിട സ്ഥിര വ്യാപാരി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Cheap jack", ml: "ചീപ്പ് ജാക്ക്" } },
        { k: "B", text: { en: "Mail order house", ml: "മെയ്ൽ ഓർഡർ ഹൗസ്" } },
        { k: "C", text: { en: "Hawker", ml: "ഫെറിക്കാരൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Mail order houses operate on a large scale.", ml: "വൻതോതിൽ കച്ചവടം നടത്തുന്ന സ്ഥിര സ്ഥാപനമാണ് മെയ്ൽ ഓർഡർ ഹൗസ്." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "The main advantage of Departmental stores is?", ml: "ഡിപ്പാർട്ട്മെന്റൽ സ്റ്റോറുകളുടെ പ്രധാന ഗുണം?" },
      options: [
        { k: "A", text: { en: "Low cost", ml: "കുറഞ്ഞ ചെലവ്" } },
        { k: "B", text: { en: "Variety of goods under one roof", ml: "എല്ലാ സാധനങ്ങളും ഒരിടത്ത് ലഭിക്കുന്നു" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Consumers can buy everything they need in one place.", ml: "ഒരു കുടക്കീഴിൽ തന്നെ വൈവിധ്യമാർന്ന സാധനങ്ങൾ ലഭിക്കുന്നു എന്നതാണ് ഇതിന്റെ പ്രത്യേകത." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "Chain stores generally sell goods on ____ basis.", ml: "ചെയിൻ സ്റ്റോറുകൾ സാധാരണയായി എങ്ങനെയാണ് സാധനങ്ങൾ വിൽക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Credit", ml: "കടം (Credit)" } },
        { k: "B", text: { en: "Cash", ml: "പണം (Cash)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Most chain stores operate strictly on a cash basis.", ml: "ചെയിൻ സ്റ്റോറുകളിൽ മിക്കവാറും പണത്തിന് മാത്രമേ വിൽക്കാറുള്ളൂ." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "Goods in Mail Order houses are often sent via?", ml: "മെയ്ൽ ഓർഡർ ഹൗസുകൾ സാധനങ്ങൾ അയക്കുന്നത് ഏത് വഴിയാണ്?" },
      options: [
        { k: "A", text: { en: "Free Delivery", ml: "സൗജന്യ ഡെലിവറി" } },
        { k: "B", text: { en: "Value Payable Post (VPP)", ml: "VPP (Value Payable Post)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "VPP ensures payment is collected upon delivery through post.", ml: "തപാൽ വഴി സാധനം ലഭിക്കുമ്പോൾ പണം നൽകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "Retailers inform consumers about ____.", ml: "ചില്ലറ വ്യാപാരികൾ ഉപഭോക്താക്കൾക്ക് എന്തിനെക്കുറിച്ചാണ് വിവരം നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Manufacturing secrets", ml: "നിർമ്മാണ രഹസ്യങ്ങൾ" } },
        { k: "B", text: { en: "New arrivals", ml: "പുതിയ ഉൽപ്പന്നങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Retailers keep consumers updated on new products in the market.", ml: "വിപണിയിൽ പുതുതായി വരുന്ന സാധനങ്ങളെക്കുറിച്ച് ഉപഭോക്താക്കളെ അറിയിക്കുന്നത് ഇവരാണ്." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "Who bears the risk of price falls in bulk storage?", ml: "വലിയ അളവിൽ സാധനങ്ങൾ സൂക്ഷിക്കുമ്പോൾ വില കുറയുന്നതിലെ റിസ്ക് ആരുടേതാണ്?" },
      options: [
        { k: "A", text: { en: "Retailer", ml: "ചില്ലറ വ്യാപാരി" } },
        { k: "B", text: { en: "Wholesaler", ml: "മൊത്തവ്യാപാരി" } },
        { k: "C", text: { en: "Consumer", ml: "ഉപഭോക്താവ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Wholesalers stock in large volumes, so they bear the storage risk.", ml: "വൻതോതിൽ സാധനങ്ങൾ സംഭരിക്കുന്നതിനാൽ അതിന്റെ റിസ്ക് മൊത്തവ്യാപാരികൾക്കാണ്." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "Which GST components apply to intra-state supply?", ml: "സംസ്ഥാനത്തിനകത്തെ വ്യാപാരത്തിന് ഏതൊക്കെ ജി.എസ്.ടി ഘടകങ്ങളാണ് ബാധകം?" },
      options: [
        { k: "A", text: { en: "Only IGST", ml: "IGST മാത്രം" } },
        { k: "B", text: { en: "CGST and SGST", ml: "CGST-യും SGST-യും" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "For intra-state trade, both central and state GST are collected.", ml: "സംസ്ഥാനത്തിനകത്താണെങ്കിൽ കേന്ദ്രത്തിനും സംസ്ഥാനത്തിനുമുള്ള വിഹിതങ്ങൾ നികുതിയായി നൽകണം." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "Majority required for decisions in the GST Council is?", ml: "ജി.എസ്.ടി കൗൺസിലിന്റെ തീരുമാനങ്ങൾക്ക് എത്ര ഭൂരിപക്ഷം വേണം?" },
      options: [
        { k: "A", text: { en: "50%", ml: "50%" } },
        { k: "B", text: { en: "75%", ml: "75%" } },
        { k: "C", text: { en: "100%", ml: "100%" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "A 75% majority is needed for GST Council decisions.", ml: "ജി.എസ്.ടി കൗൺസിലിൽ ഏതൊരു തീരുമാനത്തിനും 75 ശതമാനം ഭൂരിപക്ഷം ആവശ്യമാണ്." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "FOB contract means seller bears expenses up to?", ml: "FOB കരാർ പ്രകാരം വിൽക്കുന്നയാൾ എതുവരെ ചെലവ് വഹിക്കണം?" },
      options: [
        { k: "A", text: { en: "Destination", ml: "ഉപഭോക്താവിന്റെ അടുത്തെത്തുന്നത് വരെ" } },
        { k: "B", text: { en: "Delivery to carrier", ml: "വാഹനത്തിൽ സാധനം കയറ്റുന്നത് വരെ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Free on Board covers costs till the carrier (ship/rail).", ml: "കപ്പലിലോ ട്രെയിനിലോ സാധനം കയറ്റുന്നത് വരെയുള്ള ചെലവ് വിൽക്കുന്നയാൾ നൽകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "CIF price includes?", ml: "CIF വിലയിൽ എന്തൊക്കെ ഉൾപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Only cost", ml: "വില മാത്രം" } },
        { k: "B", text: { en: "Cost, Insurance, and Freight", ml: "വില, ഇൻഷുറൻസ്, കടത്തുകൂലി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "CIF covers the product cost, insurance, and shipping charges.", ml: "സാധനത്തിന്റെ വിലയ്ക്ക് പുറമെ ഇൻഷുറൻസും കടത്തുകൂലിയും കൂടി ഉൾപ്പെടുന്നതാണത്." }
    }
  ],
  videos: [
    { title: "10 കൊമേഴ്സ് ഇന്റേണൽ ട്രേഡ്", url: "https://www.youtube.com/watch?v=iC1wlLrm_dc" }
  ]
};

export const plusOneBusinessStudiesUnit11: Lesson = {
  id: "pl-bs-11-unit11",
  title: { en: "International Business", ml: "അന്താരാഷ്ട്ര ബിസിനസ്സ്" },
  estimated_time_mins: 150,
  learning_objectives: [
    { en: "Understand the concept and scope of international business", ml: "അന്താരാഷ്ട്ര ബിസിനസ്സ് എന്ന ആശയവും അതിന്റെ വ്യാപ്തിയും മനസ്സിലാക്കുക" },
    { en: "Identify different modes of entry into international markets", ml: "വിദേശ വിപണികളിൽ പ്രവേശിക്കുന്നതിനുള്ള വിവിധ രീതികൾ തിരിച്ചറിയുക" },
    { en: "Learn the detailed procedures for export and import transactions", ml: "കയറ്റുമതി, ഇറക്കുമതി ഇടപാടുകളുടെ വിശദമായ നടപടിക്രമങ്ങൾ പഠിക്കുക" },
    { en: "Understand the role of global institutions like WTO, IMF, and World Bank", ml: "ഡബ്ല്യു.ടി.ഒ (WTO), ഐ.എം.എഫ് (IMF), ലോകബാങ്ക് തുടങ്ങിയ ആഗോള സ്ഥാപനങ്ങളുടെ പങ്ക് മനസ്സിലാക്കുക" }
  ],
  content: {
    intro: {
      en: "This chapter explores the fundamental shift in global economies from self-reliance to increasing integration, known as globalization.",
      ml: "ആഗോളവൽക്കരണം (Globalization) വഴി ലോക സമ്പദ്‌വ്യവസ്ഥകളിൽ ഉണ്ടായ മാറ്റങ്ങളെക്കുറിച്ചും അന്താരാഷ്ട്ര വ്യാപാരത്തിന്റെ വിവിധ വശങ്ങളെക്കുറിച്ചും ഈ അധ്യായം പ്രതിപാദിക്കുന്നു."
    },
    core: {
      en: "Learn about export-import procedures, modes of entry (Licensing, Franchising, Joint Ventures), and global institutions like WTO and IMF.",
      ml: "കയറ്റുമതി-ഇറക്കുമതി നടപടിക്രമങ്ങൾ, വിദേശ വിപണിയിലെ പ്രവേശന രീതികൾ (ലൈസൻസിംഗ്, ഫ്രാഞ്ചൈസിംഗ്, സംയുക്ത സംരംഭങ്ങൾ), WTO, IMF തുടങ്ങിയ ആഗോള സ്ഥാപനങ്ങളെക്കുറിച്ച് പഠിക്കുക."
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം' },
      { type: 'p', en: 'This chapter explores the fundamental shift in global economies from self-reliance to increasing integration, known as globalization. It outlines the scope of international business, diverse modes of entry into foreign markets, and the detailed procedures required for export and import transactions. It also discusses global institutions like the World Bank, IMF, and WTO.', ml: 'ആഗോളവൽക്കരണം (Globalization) വഴി ലോക സമ്പദ്‌വ്യവസ്ഥയിലുണ്ടായ മാറ്റങ്ങളെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. അന്താരാഷ്ട്ര ബിസിനസ്സിന്റെ വ്യാപ്തി, വിദേശ വിപണികളിലേക്കുള്ള പ്രവേശന രീതികൾ, കയറ്റുമതി-ഇറക്കുമതി നടപടിക്രമങ്ങൾ എന്നിവ ഇതിൽ വിവരിക്കുന്നു. ലോകബാങ്ക്, ഐ.എം.എഫ് (IMF), ഡബ്ല്യു.ടി.ഒ (WTO) തുടങ്ങിയ ആഗോള സ്ഥാപനങ്ങളുടെ പങ്കും ഇവിടെ ചർച്ച ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'International Business: Manufacturing and trade beyond geographical boundaries of one\'s own country.', ml: 'അന്താരാഷ്ട്ര ബിസിനസ്സ് (International Business): ഒരു രാജ്യത്തിന്റെ അതിരുകൾക്ക് പുറത്ത് നടക്കുന്ന നിർമ്മാണവും വ്യാപാരവും.' },
        { en: 'Contract Manufacturing: Outsourcing production to local manufacturers in foreign countries.', ml: 'കോൺട്രാക്ട് മാനുഫാക്ചറിംഗ് (Contract Manufacturing): വിദേശ രാജ്യങ്ങളിലെ പ്രാദേശിക നിർമ്മാതാക്കൾക്ക് ഉൽപ്പന്ന നിർമ്മാണ ചുമതല കരാർ അടിസ്ഥാനത്തിൽ നൽകുന്ന രീതി.' },
        { en: 'Licensing and Franchising: Licensing applies to goods (patents/trademarks), while Franchising specifically applies to services.', ml: 'ലൈസൻസിംഗ് & ഫ്രാഞ്ചൈസിംഗ്: ലൈസൻസിംഗ് സാധനങ്ങളുടെ ഉൽപ്പാദനത്തിനും ഫ്രാഞ്ചൈസിംഗ് സേവന മേഖലയ്ക്കും (ഉദാ: മക്ഡൊണാൾഡ്സ്) ബാധകമാണ്.' },
        { en: 'Joint Venture: A firm jointly owned by two or more independent firms sharing risks and rewards.', ml: 'സംയുക്ത സംരംഭം (Joint Venture): രണ്ടോ അതിലധികമോ സ്വതന്ത്ര സ്ഥാപനങ്ങൾ ചേർന്ന് റിസ്കുകളും ലാഭവും പങ്കിട്ടുകൊണ്ട് തുടങ്ങുന്ന സംരംഭം.' },
        { en: 'Letter of Credit: A secure guarantee issued by an importer\'s bank to ensure payment to the exporter.', ml: 'ലെറ്റർ ഓഫ് ക്രെഡിറ്റ് (Letter of Credit): ഇറക്കുമതിക്കാരന്റെ ബാങ്ക് കയറ്റുമതിക്കാരന് നൽകുന്ന സാമ്പത്തിക സുരക്ഷാ ഉറപ്പ്.' }
      ]},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ' },
      { type: 'h3', en: '3.1 Scope of International Business', ml: '3.1 അന്താരാഷ്ട്ര ബിസിനസ്സിന്റെ വ്യാപ്തി (Scope)' },
      { type: 'ul', items: [
        { en: 'Merchandise exports and imports: Trade in tangible goods.', ml: 'സാധനങ്ങളുടെ കയറ്റുമതിയും ഇറക്കുമതിയും (Merchandise): ദൃശ്യമായ സാധനങ്ങളുടെ വ്യാപാരം.' },
        { en: 'Service exports and imports: Intangibles (invisible trade) like tourism and banking.', ml: 'സേവനങ്ങളുടെ കയറ്റുമതിയും ഇറക്കുമതിയും (Service): ടൂറിസം, ബാങ്കിംഗ് തുടങ്ങിയ അദൃശ്യമായ വ്യാപാരങ്ങൾ.' },
        { en: 'Foreign Investments: Includes Foreign Direct Investment (FDI) and portfolio investment.', ml: 'വിദേശ നിക്ഷേപം: വിദേശ നേരിട്ടുള്ള നിക്ഷേപം (FDI), പോർട്ട്‌ഫോളിയോ നിക്ഷേപം എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു.' }
      ]},

      { type: 'h3', en: '3.2 Modes of Entry', ml: '3.2 വിദേശ വിപണിയിലെ പ്രവേശന രീതികൾ' },
      { type: 'ul', items: [
        { en: 'Exporting and Importing: Easiest way with minimal investment.', ml: 'കയറ്റുമതിയും ഇറക്കുമതിയും: കുറഞ്ഞ നിക്ഷേപത്തിൽ വിദേശ വിപണിയിലെത്താനുള്ള ഏറ്റവും എളുപ്പവഴി.' },
        { en: 'Licensing/Franchising: Inexpensive entry by allowing others to use your brand for a fee.', ml: 'ലൈസൻസിംഗ്/ഫ്രാഞ്ചൈസിംഗ്: ബ്രാൻഡ് ഉപയോഗിക്കാൻ മറ്റുള്ളവർക്ക് അനുവാദം നൽകി പണം നേടുന്ന രീതി.' },
        { en: 'Wholly Owned Subsidiaries: Parent company has 100% control but involves high risk and investment.', ml: 'ഹോളി ഓൺഡ് സബ്സിഡിയറികൾ: മാതൃസ്ഥാപനത്തിന് പൂർണ്ണ നിയന്ത്രണമുള്ള ശാഖകൾ. ഇതിൽ കൂടുതൽ നിക്ഷേപം ആവശ്യമാണ്.' }
      ]},

      { type: 'h3', en: '3.3 Global Trade Institutions', ml: '3.3 ആഗോള വ്യാപാര സ്ഥാപനങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'World Bank (IBRD): Focuses on reconstruction and development of nations.', ml: 'ലോകബാങ്ക് (World Bank): രാജ്യങ്ങളുടെ വികസനത്തിലും പുനർനിർമ്മാണത്തിലും ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു.' },
        { en: 'International Monetary Fund (IMF): Promotes exchange rate stability and international payments.', ml: 'അന്താരാഷ്ട്ര നാണയ നിധി (IMF): വിനിമയ നിരക്കിലെ സ്ഥിരതയും അന്താരാഷ്ട്ര പണമിടപാടുകളും സുഗമമാക്കുന്നു.' },
        { en: 'World Trade Organization (WTO): Successor to GATT, governs global trade rules and settles disputes.', ml: 'ലോക വ്യാപാര സംഘടന (WTO): ഗാട്ടിന് (GATT) പകരമായി വന്ന സ്ഥാപനം. ആഗോള വ്യാപാര നിയമങ്ങൾ രൂപീകരിക്കുകയും തർക്കങ്ങൾ പരിഹരിക്കുകയും ചെയ്യുന്നു.' }
      ]},

      { type: 'h2', en: '4. Tables for Easy Learning', ml: '4. പഠിക്കാൻ എളുപ്പത്തിനുള്ള പട്ടികകൾ' },
      { type: 'h3', en: 'Domestic vs. International Business', ml: 'താരതമ്യം: ആഭ്യന്തര vs അന്താരാഷ്ട്ര ബിസിനസ്സ്' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Domestic', ml: 'ആഭ്യന്തരം'}, {en: 'International', ml: 'അന്താരാഷ്ട്രം'}],
        rows: [
          [{en: 'Buyers/Sellers', ml: 'വാങ്ങുന്നവർ/വിൽക്കുന്നവർ'}, {en: 'Same country', ml: 'ഒരേ രാജ്യം'}, {en: 'Different countries', ml: 'വ്യത്യസ്ത രാജ്യങ്ങൾ'}],
          [{en: 'Currency', ml: 'നാണയം'}, {en: 'Domestic currency', ml: 'സ്വന്തം നാണയം'}, {en: 'Different currencies', ml: 'വിവിധ നാണയങ്ങൾ'}],
          [{en: 'Risks', ml: 'റിസ്ക്'}, {en: 'Low', ml: 'കുറവ്'}, {en: 'High', ml: 'കൂടുതൽ'}]
        ]
      }},
      { type: 'h3', en: 'Important Trade Documents', ml: 'പ്രധാന വ്യാപാര രേഖകൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Document', ml: 'രേഖ'}, {en: 'Meaning', ml: 'അർത്ഥം'}],
        rows: [
          [{en: 'Bill of Lading', ml: 'ബിൽ ഓഫ് ലാഡിംഗ്'}, {en: 'Contract from shipping company to carry goods.', ml: 'സാധനങ്ങൾ കൊണ്ടുപോകുന്നതിനായി ഷിപ്പിംഗ് കമ്പനി നൽകുന്ന കരാർ.'}],
          [{en: 'Mate\'s Receipt', ml: 'മേറ്റ്സ് റസീത്'}, {en: 'Proof of loading cargo on ship.', ml: 'കപ്പലിൽ സാധനങ്ങൾ കയറ്റിയതിന്റെ തെളിവ്.'}],
          [{en: 'Bill of Entry', ml: 'ബിൽ ഓഫ് എൻട്രി'}, {en: 'Document for customs clearance of imports.', ml: 'ഇറക്കുമതി സാധനങ്ങളുടെ നികുതി പരിശോധനയ്ക്കുള്ള രേഖ.'}]
        ]
      }},

      { type: 'h2', en: '5. Extract and Highlight', ml: '5. എടുത്തു പറയേണ്ട കാര്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'International business is broader than international trade.', ml: 'അന്താരാഷ്ട്ര വ്യാപാരത്തേക്കാൾ വിപുലമായ ഒന്നാണ് അന്താരാഷ്ട്ര ബിസിനസ്സ്.' },
        { en: 'WTO replaced GATT on January 1, 1995.', ml: '1995 ജനുവരി 1-ന് ഗാട്ടിന് (GATT) പകരമായി ഡബ്ല്യു.ടി.ഒ (WTO) നിലവിൽ വന്നു.' },
        { en: 'Duty Drawback is the refund of taxes paid on export production.', ml: 'ഡ്യൂട്ടി ഡ്രോബാക്ക് (Duty Drawback) എന്നാൽ കയറ്റുമതി ചെയ്യുന്ന സാധനങ്ങൾക്കായി അടച്ച നികുതി തിരികെ നൽകുന്ന പദ്ധതിയാണ്.' }
      ]},

      { type: 'h2', en: '6. Quick Revision', ml: '6. ദ്രുത പുനരവലോകനം' },
      { type: 'ul', items: [
        { en: 'International business involves cross-border movement of goods and capital.', ml: 'അതിരുകൾക്കപ്പുറമുള്ള സാധനങ്ങളുടെയും മൂലധനത്തിന്റെയും നീക്കമാണ് അന്താരാഷ്ട്ര ബിസിനസ്സ്.' },
        { en: 'Export procedure involves trade enquiry, indent, and shipping bill.', ml: 'കയറ്റുമതിക്ക് ട്രേഡ് എൻക്വയറി, ഇൻഡന്റ്, ഷിപ്പിംഗ് ബിൽ തുടങ്ങിയവ ആവശ്യമാണ്.' },
        { en: 'WTO acts as a global dispute settlement body.', ml: 'ആഗോള വ്യാപാര തർക്കങ്ങൾ പരിഹരിക്കുന്ന സ്ഥാപനമാണ് ഡബ്ല്യു.ടി.ഒ (WTO).' }
      ]}
    ]
  },
  glossary: [
    { term: { en: "J.M. Keynes", ml: "ജെ.എം. കെയിൻസ് (J.M. Keynes)" }, definition: { en: "A noted historical economist who led the representative nations at the Bretton Woods conference to establish the IMF and World Bank.", ml: "ഐ.എം.എഫ് (IMF), ലോകബാങ്ക് (World Bank) എന്നിവ സ്ഥാപിക്കുന്നതിനായി നടന്ന ബ്രെട്ടൺ വുഡ്സ് കോൺഫറൻസിൽ പ്രതിനിധി രാജ്യങ്ങളെ നയിച്ച പ്രശസ്ത സാമ്പത്തിക ശാസ്ത്രജ്ഞനാണ് ജെ.എം. കെയിൻസ് (J.M. Keynes)." } },
    { term: { en: "International Business", ml: "അന്താരാഷ്ട്ര ബിസിനസ്സ് (International Business)" }, definition: { en: "All business activities, including trade, investments, and technology transfers, that take place across the national frontiers of different countries.", ml: "വ്യത്യസ്ത രാജ്യങ്ങളുടെ അതിരുകൾക്കപ്പുറം നടക്കുന്ന വ്യാപാരം, നിക്ഷേപം, സാങ്കേതിക കൈമാറ്റം എന്നിവയുൾപ്പെടെയുള്ള എല്ലാ ബിസിനസ്സ് പ്രവർത്തനങ്ങളെയും അന്താരാഷ്ട്ര ബിസിനസ്സ് (International Business) എന്ന് വിളിക്കുന്നു." } },
    { term: { en: "Exporting", ml: "കയറ്റുമതി (Exporting)" }, definition: { en: "The process of selling and sending domestic goods and services to foreign countries.", ml: "സ്വന്തം രാജ്യത്തെ സാധനങ്ങളും സേവനങ്ങളും വിദേശ രാജ്യങ്ങളിലേക്ക് വിൽക്കുന്നതിനെയും അയക്കുന്നതിനെയും കയറ്റുമതി (Exporting) എന്ന് വിളിക്കുന്നു." } },
    { term: { en: "Importing", ml: "ഇറക്കുമതി (Importing)" }, definition: { en: "The process of purchasing foreign products and bringing them into one's home country.", ml: "വിദേശ ഉൽപ്പന്നങ്ങൾ വാങ്ങി സ്വന്തം രാജ്യത്തേക്ക് കൊണ്ടുവരുന്നതിനെ ഇറക്കുമതി (Importing) എന്ന് വിളിക്കുന്നു." } },
    { term: { en: "Contract Manufacturing", ml: "കോൺട്രാക്ട് മാനുഫാക്ചറിംഗ് (Contract Manufacturing)" }, definition: { en: "An arrangement where an international firm outsources the production of its components or goods to local manufacturers in foreign countries.", ml: "ഒരു അന്താരാഷ്ട്ര സ്ഥാപനം അതിന്റെ ഉൽപ്പന്നങ്ങളോ ഭാഗങ്ങളോ വിദേശ രാജ്യങ്ങളിലെ പ്രാദേശിക നിർമ്മാതാക്കൾക്ക് കരാർ നൽകി നിർമ്മിക്കുന്ന രീതിയാണിത്." } },
    { term: { en: "Licensing", ml: "ലൈസൻസിംഗ് (Licensing)" }, definition: { en: "A contractual entry mode where a firm permits a foreign entity to use its patents, trademarks, or technology in exchange for a royalty fee.", ml: "ഒരു സ്ഥാപനം അതിന്റെ പേറ്റന്റുകളോ വ്യാപാരമുദ്രകളോ (Trademarks) സാങ്കേതിക വിദ്യയോ റോയൽറ്റിക്ക് പകരമായി മറ്റൊരു വിദേശ സ്ഥാപനത്തിന് ഉപയോഗിക്കാൻ അനുവാദം നൽകുന്ന രീതിയാണിത്." } },
    { term: { en: "Joint Venture", ml: "സംയുക്ത സംരംഭം (Joint Venture)" }, definition: { en: "A collaborative global entry strategy where two or more independent firms from different countries share equity, costs, and risks to establish a new enterprise.", ml: "വ്യത്യസ്ത രാജ്യങ്ങളിൽ നിന്നുള്ള രണ്ടോ അതിലധികമോ സ്വതന്ത്ര സ്ഥാപനങ്ങൾ മൂലധനവും റിസ്കും പങ്കിട്ടുകൊണ്ട് ഒരു പുതിയ സംരംഭം തുടങ്ങുന്ന രീതിയാണിത്." } },
    { term: { en: "Wholly Owned Subsidiaries", ml: "ഹോളി ഓൺഡ് സബ്സിഡിയറികൾ (Wholly Owned Subsidiaries)" }, definition: { en: "A high-control international entry mode where a parent company makes a 100 percent equity investment to own a foreign corporate entity completely.", ml: "ഒരു മാതൃസ്ഥാപനം (Parent Company) വിദേശത്തുള്ള ഒരു കമ്പനിയിൽ നൂറ് ശതമാനം നിക്ഷേപം നടത്തി അതിന്റെ പൂർണ്ണ ഉടമസ്ഥാവകാശം ഏറ്റെടുക്കുന്ന രീതിയാണിത്." } },
    { term: { en: "Letter of Credit", ml: "ലെറ്റർ ഓഫ് ക്രെഡിറ്റ് (Letter of Credit)" }, definition: { en: "A highly secure bank guarantee demanded by exporters stating that the importer's bank will honor payment of export bills up to a specified amount.", ml: "ഇറക്കുമതിക്കാരന്റെ ബാങ്ക് കയറ്റുമതിക്കാരന് പണം നൽകുമെന്ന് ഉറപ്പുനൽകുന്ന സുരക്ഷിതമായ ബാങ്ക് രേഖയാണിത്." } },
    { term: { en: "Bill of Lading", ml: "ബിൽ ഓഫ് ലാഡിംഗ് (Bill of Lading)" }, definition: { en: "An official receipt and legal contract issued by a shipping company proving they have accepted the goods for transport to a foreign destination.", ml: "സാധനങ്ങൾ വിദേശത്തേക്ക് കൊണ്ടുപോകുന്നതിനായി സ്വീകരിച്ചുവെന്ന് തെളിയിക്കുന്നതിനായി ഷിപ്പിംഗ് കമ്പനി നൽകുന്ന ഔദ്യോഗിക രസീതും നിയമപരമായ കരാറുമാണിത്." } },
    { term: { en: "World Bank (IBRD)", ml: "ലോകബാങ്ക് (World Bank - IBRD)" }, definition: { en: "A major international financial institution formed at Bretton Woods to assist in the development and structural reconstruction of global economies.", ml: "രാജ്യങ്ങളുടെ വികസനത്തിനും പുനർനിർമ്മാണത്തിനുമായി ബ്രെട്ടൺ വുഡ്സ് കോൺഫറൻസിൽ രൂപീകരിച്ച അന്താരാഷ്ട്ര ധനകാര്യ സ്ഥാപനമാണ് ലോകബാങ്ക്." } },
    { term: { en: "International Monetary Fund (IMF)", ml: "അന്താരാഷ്ട്ര നാണയ നിധി (International Monetary Fund - IMF)" }, definition: { en: "A global institution established to evolve an orderly international monetary system and facilitate adjustments in foreign exchange rates.", ml: "അന്താരാഷ്ട്ര സാമ്പത്തിക വ്യവസ്ഥയിൽ ക്രമീകരണം വരുത്തുന്നതിനും വിദേശ വിനിമയ നിരക്കുകൾ നിയന്ത്രിക്കുന്നതിനുമായി രൂപീകരിച്ച ആഗോള സ്ഥാപനമാണ് ഐ.എം.എഫ് (IMF)." } },
    { term: { en: "World Trade Organization (WTO)", ml: "ലോക വ്യാപാര സംഘടന (World Trade Organization - WTO)" }, definition: { en: "A powerful, permanent international body created to govern global trade in goods, services, and intellectual property while resolving trade disputes.", ml: "ആഗോള വ്യാപാരം നിയന്ത്രിക്കുന്നതിനും വ്യാപാര തർക്കങ്ങൾ പരിഹരിക്കുന്നതിനുമായി രൂപീകരിച്ചിട്ടുള്ള ശക്തമായ അന്താരാഷ്ട്ര സംഘടനയാണിത്." } }
  ],
  quiz: [
    {
      q_id: "q1",
      type: "mcq",
      stem: { en: "Manufacturing and trade beyond national boundaries is called?", ml: "രാജ്യത്തിന്റെ അതിരുകൾക്ക് പുറത്ത് നടക്കുന്ന വ്യാപാരവും നിർമ്മാണവും അറിയപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Domestic business", ml: "ആഭ്യന്തര ബിസിനസ്സ്" } },
        { k: "B", text: { en: "International business", ml: "അന്താരാഷ്ട്ര ബിസിനസ്സ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "International business involves activities across borders.", ml: "അതിരുകൾക്കപ്പുറമുള്ള ബിസിനസ്സ് പ്രവർത്തനങ്ങളെ അന്താരാഷ്ട്ര ബിസിനസ്സ് എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q2",
      type: "mcq",
      stem: { en: "Which term is broader in scope?", ml: "താഴെ പറയുന്നവയിൽ വ്യാപ്തി കൂടുതൽ ഏതിനാണ്?" },
      options: [
        { k: "A", text: { en: "International Trade", ml: "അന്താരാഷ്ട്ര വ്യാപാരം" } },
        { k: "B", text: { en: "International Business", ml: "അന്താരാഷ്ട്ര ബിസിനസ്സ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "International business includes trade, services, and investments.", ml: "വ്യാപാരം കൂടാതെ സേവനങ്ങളും നിക്ഷേപങ്ങളും ഇതിൽ ഉൾപ്പെടുന്നതിനാൽ അന്താരാഷ്ട്ര ബിസിനസ്സാണ് കൂടുതൽ വിപുലം." }
    },
    {
      q_id: "q3",
      type: "mcq",
      stem: { en: "Trade in tangible goods is known as?", ml: "കാണാൻ കഴിയുന്ന സാധനങ്ങളുടെ വ്യാപാരം അറിയപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Service trade", ml: "സേവന വ്യാപാരം" } },
        { k: "B", text: { en: "Merchandise trade", ml: "മെർക്കൻഡൈസ് (Merchandise) വ്യാപാരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Merchandise refers to tangible items that can be seen and touched.", ml: "ദൃശ്യമായ സാധനങ്ങളുടെ കൈമാറ്റത്തെ മെർക്കൻഡൈസ് വ്യാപാരം എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "q4",
      type: "mcq",
      stem: { en: "Invisible trade refers to the trade of?", ml: "അദൃശ്യ വ്യാപാരം (Invisible trade) എന്നത് ഏതിന്റെ കൈമാറ്റമാണ്?" },
      options: [
        { k: "A", text: { en: "Goods", ml: "സാധനങ്ങൾ" } },
        { k: "B", text: { en: "Services", ml: "സേവനങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Services like tourism and banking are called invisible trade.", ml: "നേരിട്ട് കാണാൻ കഴിയാത്ത ബാങ്കിംഗ്, ടൂറിസം തുടങ്ങിയ സേവനങ്ങളുടെ വ്യാപാരമാണിത്." }
    },
    {
      q_id: "q5",
      type: "mcq",
      stem: { en: "A fee paid for using another firm's trademark or patent is?", ml: "മറ്റൊരു സ്ഥാപനത്തിന്റെ പേരോ പേറ്റന്റോ ഉപയോഗിക്കുന്നതിന് നൽകുന്ന ഫീസ്?" },
      options: [
        { k: "A", text: { en: "Salary", ml: "ശമ്പളം" } },
        { k: "B", text: { en: "Royalty", ml: "റോയൽറ്റി (Royalty)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Royalty is paid in licensing and franchising arrangements.", ml: "ലൈസൻസിംഗ് കരാറുകളിൽ നൽകുന്ന പ്രതിഫലമാണ് റോയൽറ്റി." }
    },
    {
      q_id: "q6",
      type: "mcq",
      stem: { en: "Franchising is primarily associated with which sector?", ml: "ഫ്രാഞ്ചൈസിംഗ് പ്രധാനമായും ഏത് മേഖലയുമായി ബന്ധപ്പെട്ടതാണ്?" },
      options: [
        { k: "A", text: { en: "Manufacturing", ml: "നിർമ്മാണ മേഖല" } },
        { k: "B", text: { en: "Service", ml: "സേവന മേഖല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Franchising is common in service businesses like McDonald's.", ml: "സേവന മേഖലയിലെ ബിസിനസ്സുകൾ വിപുലീകരിക്കാൻ ഫ്രാഞ്ചൈസിംഗ് ഉപയോഗിക്കുന്നു." }
    },
    {
      q_id: "q7",
      type: "mcq",
      stem: { en: "Which entry mode involves 100% equity investment in a foreign firm?", ml: "ഒരു വിദേശ കമ്പനിയിൽ 100% നിക്ഷേപം നടത്തി നിയന്ത്രണം ഏറ്റെടുക്കുന്ന രീതി?" },
      options: [
        { k: "A", text: { en: "Joint Venture", ml: "സംയുക്ത സംരംഭം" } },
        { k: "B", text: { en: "Wholly Owned Subsidiary", ml: "ഹോളി ഓൺഡ് സബ്സിഡിയറി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It gives the parent company full control over overseas operations.", ml: "വിദേശത്തുള്ള സ്ഥാപനത്തിന് മേൽ പൂർണ്ണ ഉടമസ്ഥാവകാശം ലഭിക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q8",
      type: "mcq",
      stem: { en: "A guarantee issued by an importer's bank to the exporter is?", ml: "കയറ്റുമതിക്കാരന് പണം ലഭിക്കുമെന്ന് ഇറക്കുമതിക്കാരന്റെ ബാങ്ക് നൽകുന്ന ഉറപ്പ്?" },
      options: [
        { k: "A", text: { en: "Bill of Exchange", ml: "ബിൽ ഓഫ് എക്സ്ചേഞ്ച്" } },
        { k: "B", text: { en: "Letter of Credit", ml: "ലെറ്റർ ഓഫ് ക്രെഡിറ്റ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Letter of Credit ensures secure payment in international trade.", ml: "അന്താരാഷ്ട്ര വ്യാപാരത്തിലെ പണമിടപാടുകൾ സുരക്ഷിതമാക്കാൻ ലെറ്റർ ഓഫ് ക്രെഡിറ്റ് സഹായിക്കുന്നു." }
    },
    {
      q_id: "q9",
      type: "mcq",
      stem: { en: "What is the primary reason for international trade?", ml: "അന്താരാഷ്ട്ര വ്യാപാരം നടക്കാനുള്ള പ്രധാന കാരണം?" },
      options: [
        { k: "A", text: { en: "Unequal distribution of resources", ml: "വിഭവങ്ങളുടെ അസമമായ വിതരണം" } },
        { k: "B", text: { en: "Same production costs everywhere", ml: "എല്ലായിടത്തും ഒരേ ഉൽപ്പാദന ചെലവ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Nations trade because they cannot produce everything efficiently due to resource limits.", ml: "എല്ലാ വിഭവങ്ങളും എല്ലാ രാജ്യങ്ങളിലും ഒരേപോലെ ലഭ്യമല്ലാത്തതിനാൽ വ്യാപാരം ആവശ്യമായി വരുന്നു." }
    },
    {
      q_id: "q10",
      type: "mcq",
      stem: { en: "The order received from an importer is called?", ml: "ഇറക്കുമതിക്കാരനിൽ നിന്ന് ലഭിക്കുന്ന ഓർഡറിനെ എന്തു വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Invoice", ml: "ഇൻവോയ്സ്" } },
        { k: "B", text: { en: "Indent", ml: "ഇൻഡന്റ് (Indent)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Indent is a formal order for goods in export trade.", ml: "കയറ്റുമതിക്ക് ലഭിക്കുന്ന ഔദ്യോഗിക ഓർഡറിനെയാണ് ഇൻഡന്റ് എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "q11",
      type: "mcq",
      stem: { en: "Which number is mandatory for any export/import transaction in India?", ml: "ഇന്ത്യയിൽ കയറ്റുമതിക്കോ ഇറക്കുമതിക്കോ നിർബന്ധമായും വേണ്ട നമ്പർ?" },
      options: [
        { k: "A", text: { en: "PAN", ml: "PAN" } },
        { k: "B", text: { en: "IEC Number", ml: "ഐ.ഇ.സി (IEC) നമ്പർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "IEC stands for Import Export Code.", ml: "കയറ്റുമതി-ഇറക്കുമതി ഇടപാടുകൾക്കായി ഡയറക്ടർ ജനറൽ ഓഫ് ഫോറിൻ ട്രേഡ് നൽകുന്ന കോഡാണിത്." }
    },
    {
      q_id: "q12",
      type: "mcq",
      stem: { en: "Who issues the Mate's Receipt?", ml: "മേറ്റ്സ് റസീത് (Mate's Receipt) നൽകുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Importer", ml: "ഇറക്കുമതിക്കാരൻ" } },
        { k: "B", text: { en: "Commanding officer of the ship", ml: "കപ്പലിലെ ഉദ്യോഗസ്ഥൻ (Captain)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is issued when cargo is loaded on board the ship.", ml: "കപ്പലിൽ സാധനങ്ങൾ കയറ്റി കഴിയുമ്പോൾ കപ്പലിലെ ഉദ്യോഗസ്ഥൻ നൽകുന്ന രസീതാണിത്." }
    },
    {
      q_id: "q13",
      type: "mcq",
      stem: { en: "Which document is an official contract from the shipping company to carry goods?", ml: "സാധനങ്ങൾ കൊണ്ടുപോകാമെന്ന് സമ്മതിച്ച് ഷിപ്പിംഗ് കമ്പനി നൽകുന്ന കരാർ?" },
      options: [
        { k: "A", text: { en: "Mate's receipt", ml: "മേറ്റ്സ് റസീത്" } },
        { k: "B", text: { en: "Bill of Lading", ml: "ബിൽ ഓഫ് ലാഡിംഗ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Bill of Lading is both a receipt and a contract of carriage.", ml: "ഷിപ്പിംഗ് കമ്പനി നൽകുന്ന പ്രധാന ഉടമ്പടിയാണ് ബിൽ ഓഫ് ലാഡിംഗ്." }
    },
    {
      q_id: "q14",
      type: "mcq",
      stem: { en: "The document filed by an importer for customs clearance is?", ml: "ഇറക്കുമതി സാധനങ്ങൾ പരിശോധന കഴിഞ്ഞ് പുറത്തെടുക്കാൻ സമർപ്പിക്കേണ്ട രേഖ?" },
      options: [
        { k: "A", text: { en: "Shipping bill", ml: "ഷിപ്പിംഗ് ബിൽ" } },
        { k: "B", text: { en: "Bill of Entry", ml: "ബിൽ ഓഫ് എൻട്രി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Bill of Entry is used to assess customs duty on imports.", ml: "ഇറക്കുമതി ചെയ്യുന്ന സാധനങ്ങളുടെ നികുതി കണക്കാക്കാൻ ബിൽ ഓഫ് എൻട്രി ആവശ്യമാണ്." }
    },
    {
      q_id: "q15",
      type: "mcq",
      stem: { en: "WTO was established on?", ml: "ലോക വ്യാപാര സംഘടന (WTO) നിലവിൽ വന്നത് എന്ന്?" },
      options: [
        { k: "A", text: { en: "January 1, 1990", ml: "ജനുവരി 1, 1990" } },
        { k: "B", text: { en: "January 1, 1995", ml: "ജനുവരി 1, 1995" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "WTO replaced GATT in 1995.", ml: "1995 ജനുവരി 1-നാണ് ഡബ്ല്യു.ടി.ഒ ഔദ്യോഗികമായി പ്രവർത്തനം തുടങ്ങിയത്." }
    },
    {
      q_id: "q16",
      type: "mcq",
      stem: { en: "Which institution is the successor to GATT?", ml: "ഗാട്ടിന് (GATT) പകരമായി വന്ന സ്ഥാപനം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "IMF", ml: "ഐ.എം.എഫ്" } },
        { k: "B", text: { en: "WTO", ml: "ഡബ്ല്യു.ടി.ഒ (WTO)" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "WTO was formed to handle global trade more effectively than GATT.", ml: "ജനറൽ എഗ്രിമെന്റ് ഓൺ താരിഫ് ആൻഡ് ട്രേഡിന് (GATT) പകരമാണ് ഡബ്ല്യു.ടി.ഒ വന്നത്." }
    },
    {
      q_id: "q17",
      type: "mcq",
      stem: { en: "The IMF's primary role is to?", ml: "ഐ.എം.എഫിന്റെ (IMF) പ്രധാന ചുമതല എന്ത്?" },
      options: [
        { k: "A", text: { en: "Provide long-term infrastructure loans", ml: "ദീർഘകാല വായ്പകൾ നൽകുക" } },
        { k: "B", text: { en: "Promote exchange rate stability", ml: "വിനിമയ നിരക്കിലെ സ്ഥിരത ഉറപ്പാക്കുക" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "IMF focuses on global monetary cooperation and stability.", ml: "സാമ്പത്തിക സ്ഥിരതയും വിനിമയ നിരക്കിലെ നിയന്ത്രണവുമാണ് ഐ.എം.എഫിന്റെ ലക്ഷ്യം." }
    },
    {
      q_id: "q18",
      type: "mcq",
      stem: { en: "World Bank was formed at which conference?", ml: "ലോകബാങ്ക് രൂപീകൃതമായത് ഏത് സമ്മേളനത്തിലാണ്?" },
      options: [
        { k: "A", text: { en: "G20 Summit", ml: "G20 സമ്മിറ്റ്" } },
        { k: "B", text: { en: "Bretton Woods Conference", ml: "ബ്രെട്ടൺ വുഡ്സ് സമ്മേളനം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "World Bank and IMF were born out of the Bretton Woods conference.", ml: "1944-ലെ ബ്രെട്ടൺ വുഡ്സ് സമ്മേളനത്തിന്റെ ഫലമായാണ് ലോകബാങ്ക് ഉണ്ടായത്." }
    },
    {
      q_id: "q19",
      type: "mcq",
      stem: { en: "Refund of excise and customs duties on export materials is called?", ml: "കയറ്റുമതി ഉൽപ്പന്നങ്ങൾക്കായി നൽകിയ നികുതി തിരികെ നൽകുന്ന രീതി?" },
      options: [
        { k: "A", text: { en: "Subsidy", ml: "സബ്‌സിഡി" } },
        { k: "B", text: { en: "Duty Drawback", ml: "ഡ്യൂട്ടി ഡ്രോബാക്ക്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It makes export products more competitive in price.", ml: "കയറ്റുമതി വർദ്ധിപ്പിക്കാൻ സർക്കാർ നൽകുന്ന നികുതി ഇളവാണിത്." }
    },
    {
      q_id: "q20",
      type: "mcq",
      stem: { en: "FDI stands for?", ml: "FDI എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Foreign Direct Investment", ml: "Foreign Direct Investment" } },
        { k: "B", text: { en: "Fixed Deposit Income", ml: "Fixed Deposit Income" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "FDI involves direct investment in foreign production units.", ml: "വിദേശ ബിസിനസ്സുകളിൽ നേരിട്ട് പണം നിക്ഷേപിച്ച് നിയന്ത്രണം ഏറ്റെടുക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q21",
      type: "mcq",
      stem: { en: "A bill of exchange where documents are handed over against immediate payment is?", ml: "പണം ഉടൻ നൽകിയാൽ മാത്രം രേഖകൾ കൈമാറുന്ന ബിൽ ഓഫ് എക്സ്ചേഞ്ച്?" },
      options: [
        { k: "A", text: { en: "Usance draft", ml: "യൂസൻസ് ഡ്രാഫ്റ്റ്" } },
        { k: "B", text: { en: "Sight draft", ml: "സൈറ്റ് ഡ്രാഫ്റ്റ് (Sight draft)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Sight draft requires payment upon presentation.", ml: "രേഖകൾ കാണിക്കുമ്പോൾ തന്നെ പണമടയ്ക്കേണ്ട ബില്ലാണിത്." }
    },
    {
      q_id: "q22",
      type: "mcq",
      stem: { en: "Quotation document sent by exporter before the actual order is?", ml: "ഓർഡറിന് മുൻപായി വിലയും വിവരങ്ങളും അടങ്ങിയ ക്വട്ടേഷൻ കയറ്റുമതിക്കാരൻ അയക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Indent", ml: "ഇൻഡന്റ്" } },
        { k: "B", text: { en: "Proforma Invoice", ml: "പ്രോഫോർമ ഇൻവോയ്സ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Proforma invoice contains all terms of export.", ml: "കയറ്റുമതി ചെയ്യാനുദ്ദേശിക്കുന്ന സാധനങ്ങളുടെ വിലയും മറ്റും ഇതിൽ രേഖപ്പെടുത്തുന്നു." }
    },
    {
      q_id: "q23",
      type: "mcq",
      stem: { en: "Which investment does not involve management control?", ml: "ഭരണപരമായ നിയന്ത്രണമില്ലാത്ത നിക്ഷേപം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "FDI", ml: "FDI" } },
        { k: "B", text: { en: "Portfolio investment", ml: "പോർട്ട്‌ഫോളിയോ നിക്ഷേപം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Portfolio investment is only for dividends or interest.", ml: "ഓഹരികളിലും മറ്റും നിക്ഷേപം നടത്തി ലാഭം മാത്രം പ്രതീക്ഷിക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "q24",
      type: "mcq",
      stem: { en: "EPZ stands for?", ml: "EPZ എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "Export Processing Zone", ml: "Export Processing Zone" } },
        { k: "B", text: { en: "External Production Zone", ml: "External Production Zone" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "EPZs (now SEZs) are set up to promote exports.", ml: "കയറ്റുമതി വർദ്ധിപ്പിക്കാൻ പ്രത്യേക നികുതിയിളവുകളോടെ സജ്ജീകരിച്ച മേഖലകളാണിവ." }
    },
    {
      q_id: "q25",
      type: "mcq",
      stem: { en: "The document issued by shipping company as a receipt for goods is?", ml: "സാധനങ്ങൾ ലഭിച്ചുവെന്ന് ഷിപ്പിംഗ് കമ്പനി നൽകുന്ന രസീത്?" },
      options: [
        { k: "A", text: { en: "Shipping bill", ml: "ഷിപ്പിംഗ് ബിൽ" } },
        { k: "B", text: { en: "Bill of Lading", ml: "ബിൽ ഓഫ് ലാഡിംഗ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Bill of Lading is the most important shipping document.", ml: "കപ്പൽ വഴി സാധനങ്ങൾ അയക്കുമ്പോൾ ലഭിക്കുന്ന പ്രധാന രേഖയാണിത്." }
    },
    {
      q_id: "q26",
      type: "mcq",
      stem: { en: "International business helps countries earn valuable ____.", ml: "അന്താരാഷ്ട്ര ബിസിനസ്സ് വഴി രാജ്യങ്ങൾക്ക് എന്ത് ലഭിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Local currency", ml: "സ്വന്തം നാണയം" } },
        { k: "B", text: { en: "Foreign exchange", ml: "വിദേശ നാണ്യം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Exports bring in foreign currency like dollars.", ml: "കയറ്റുമതിയിലൂടെ മറ്റ് രാജ്യങ്ങളിലെ നാണയം സമ്പാദിക്കാൻ കഴിയുന്നു." }
    },
    {
      q_id: "q27",
      type: "mcq",
      stem: { en: "ADR stands for?", ml: "ADR എന്നതിന്റെ പൂർണ്ണരൂപം?" },
      options: [
        { k: "A", text: { en: "American Depository Receipt", ml: "American Depository Receipt" } },
        { k: "B", text: { en: "All Day Receipt", ml: "All Day Receipt" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "ADR is for raising funds in the US market.", ml: "അമേരിക്കയിലെ വിപണിയിൽ നിന്ന് മൂലധനം കണ്ടെത്താൻ ADR ഉപയോഗിക്കുന്നു." }
    },
    {
      q_id: "q28",
      type: "mcq",
      stem: { en: "TRIPS and TRIMS are related to which organization?", ml: "TRIPS, TRIMS എന്നിവ ഏത് സംഘടനയുമായി ബന്ധപ്പെട്ടതാണ്?" },
      options: [
        { k: "A", text: { en: "IMF", ml: "IMF" } },
        { k: "B", text: { en: "WTO", ml: "ഡബ്ല്യു.ടി.ഒ (WTO)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "These are agreements under the WTO regarding IP and investments.", ml: "ബൗദ്ധിക സ്വത്തവകാശം, നിക്ഷേപം എന്നിവയുമായി ബന്ധപ്പെട്ട WTO കരാറുകളാണിവ." }
    },
    {
      q_id: "q29",
      type: "mcq",
      stem: { en: "A wholly owned subsidiary involves ____ risk.", ml: "ഹോളി ഓൺഡ് സബ്സിഡിയറി എന്ന രീതിയിൽ ____ റിസ്ക് ഉണ്ട്." },
      options: [
        { k: "A", text: { en: "Low", ml: "കുറഞ്ഞ" } },
        { k: "B", text: { en: "High", ml: "കൂടുതൽ (High)" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Full ownership means 100% exposure to losses.", ml: "മുഴുവൻ നിക്ഷേപവും സ്വന്തമായതിനാൽ നഷ്ടമുണ്ടായാൽ അത് പൂർണ്ണമായും സ്ഥാപനം വഹിക്കേണ്ടി വരും." }
    },
    {
      q_id: "q30",
      type: "mcq",
      stem: { en: "The process of globalization results in ____ integration of economies.", ml: "ആഗോളവൽക്കരണ പ്രക്രിയ വഴി രാജ്യങ്ങൾ തമ്മിലുള്ള ബന്ധം ____." },
      options: [
        { k: "A", text: { en: "Lower", ml: "കുറയുന്നു" } },
        { k: "B", text: { en: "Higher", ml: "കൂടുന്നു" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Globalization connects world markets together.", ml: "ലോകം ഒരു വലിയ വിപണിയായി മാറുന്നതിനെയാണ് ആഗോളവൽക്കരണം എന്ന് പറയുന്നത്." }
    }
  ],
  videos: [
    { title: "11 ബിസിനസ് സ്റ്റഡീസ് അന്താരാഷ്ട്ര വ്യാപാരം", url: "https://www.youtube.com/watch?v=krF58xZqulM" }
  ]
};
