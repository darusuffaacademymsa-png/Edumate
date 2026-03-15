const fs = require('fs');

const data = {
  // Part 1
  "pl-ps-11-p1-u1": [
    { term: { en: "Constitution", ml: "ഭരണഘടന" }, definition: { en: "A compilation of basic principles that govern or form a country.", ml: "ഒരു രാജ്യത്തെ ഭരിക്കുകയോ രൂപീകരിക്കുകയോ ചെയ്യുന്ന അടിസ്ഥാന തത്വങ്ങളുടെ സമാഹാരം." } },
    { term: { en: "Constituent Assembly", ml: "ഭരണഘടനാ നിർമ്മാണ സഭ" }, definition: { en: "An indirectly elected body of representatives that framed the constitution of India between 1946 and 1949.", ml: "1946 നും 1949 നും ഇടയിൽ ഇന്ത്യൻ ഭരണഘടനയ്ക്ക് രൂപം നൽകിയ, പരോക്ഷമായി തിരഞ്ഞെടുക്കപ്പെട്ട ജനപ്രതിനിധി സഭ." } },
    { term: { en: "Objectives Resolution", ml: "ലക്ഷ്യപ്രമേയം" }, definition: { en: "A resolution moved by Nehru in 1946 clarifying the values and goals of the Constitution.", ml: "ഭരണഘടനയുടെ മൂല്യങ്ങളും ലക്ഷ്യങ്ങളും വ്യക്തമാക്കി 1946-ൽ നെഹ്റു അവതരിപ്പിച്ച പ്രമേയം." } },
    { term: { en: "Universal Suffrage", ml: "സാർവ്വത്രിക വോട്ടവകാശം" }, definition: { en: "The principle of giving voting rights to everyone who has reached a certain age, irrespective of caste, religion, education, gender, or income.", ml: "ജാതി, മതം, വിദ്യാഭ്യാസം, ലിംഗം, വരുമാനം എന്നിവ നോക്കാതെ ഒരു നിശ്ചിത പ്രായമെത്തിയ എല്ലാവർക്കും വോട്ടവകാശം നൽകുന്ന തത്വം." } },
    { term: { en: "Dr. B.R. Ambedkar", ml: "ഡോ. ബി.ആർ. അംബേദ്കർ" }, definition: { en: "Chairman of the Drafting Committee of the Constituent Assembly.", ml: "ഭരണഘടനാ നിർമ്മാണ സഭയുടെ ഡ്രാഫ്റ്റിംഗ് കമ്മിറ്റി ചെയർമാൻ." } },
    { term: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്റു" }, definition: { en: "A national leader who moved the Objectives Resolution and headed major committees in the Constituent Assembly.", ml: "ഒബ്ജക്റ്റീവ്സ് റെസല്യൂഷൻ അവതരിപ്പിക്കുകയും നിർമ്മാണ സഭയിലെ പ്രധാന കമ്മിറ്റികൾക്ക് നേതൃത്വം നൽകുകയും ചെയ്ത ദേശീയ നേതാവ്." } },
    { term: { en: "Rajendra Prasad", ml: "രാജേന്ദ്ര പ്രസാദ്" }, definition: { en: "President of the Constituent Assembly.", ml: "ഭരണഘടനാ നിർമ്മാണ സഭയുടെ പ്രസിഡന്റ്." } }
  ],
  "pl-ps-11-p1-u2": [
    { term: { en: "Bill of Rights", ml: "അവകാശപത്രിക" }, definition: { en: "A list of rights specifically enshrined in the constitution to prevent government from violating individual rights.", ml: "വ്യക്തികളുടെ അവകാശങ്ങൾക്ക് മേൽ ഗവൺമെന്റ് കടന്നുകയറുന്നത് തടയാൻ ഭരണഘടനയിൽ പ്രത്യേകമായി രേഖപ്പെടുത്തിയിട്ടുള്ള അവകാശങ്ങളുടെ പട്ടിക." } },
    { term: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" }, definition: { en: "Important rights specifically protected and guaranteed by the Constitution.", ml: "ഭരണഘടന പ്രത്യേകം സംരക്ഷിക്കുകയും ഉറപ്പുനൽകുകയും ചെയ്യുന്ന സുപ്രധാന അവകാശങ്ങൾ." } },
    { term: { en: "Preventive Detention", ml: "കരുതൽ തടങ്കൽ" }, definition: { en: "The practice of detaining a person without trial on the suspicion that they might engage in unlawful activities.", ml: "ഒരാൾ നിയമവിരുദ്ധ പ്രവർത്തനങ്ങളിൽ ഏർപ്പെട്ടേക്കാം എന്ന സംശയത്തിന്റെ പേരിൽ വിചാരണ കൂടാതെ തടങ്കലിൽ വെക്കുന്ന രീതി." } },
    { term: { en: "Directive Principles of State Policy", ml: "നിർദ്ദേശക തത്വങ്ങൾ" }, definition: { en: "Guidelines included in the Constitution to ensure the welfare and equality of citizens.", ml: "പൗരന്മാരുടെ ക്ഷേമവും സമത്വവും ഉറപ്പാക്കുന്നതിനായി ഭരണഘടനയിൽ ഉൾപ്പെടുത്തിയിട്ടുള്ള മാർഗ്ഗനിർദ്ദേശങ്ങൾ." } },
    { term: { en: "Writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari)", ml: "റിട്ടുകൾ (ഹേബിയസ് കോർപ്പസ്, മാൻഡമസ്, പ്രൊഹിബിഷൻ, ക്വോ വാറന്റോ, സെർഷ്യോററി)" }, definition: { en: "Special orders issued by courts to protect fundamental rights.", ml: "മൗലികാവകാശങ്ങൾ സംരക്ഷിക്കാൻ കോടതികൾ പുറപ്പെടുവിക്കുന്ന പ്രത്യേക ഉത്തരവുകൾ." } },
    { term: { en: "Machal Lalung", ml: "മചൽ ലാലുങ്" }, definition: { en: "A native of Assam who had to spend 54 years in prison without trial; an example of a violation of the right to life.", ml: "വിചാരണ കൂടാതെ 54 വർഷം ജയിലിൽ കഴിയേണ്ടി വന്ന ആസാം സ്വദേശി; ജീവിക്കാനുള്ള അവകാശ ലംഘനത്തിന്റെ ഉദാഹരണം." } },
    { term: { en: "Jotirao Phuley", ml: "ജ്യോതിറാവു ഫൂലെ" }, definition: { en: "A social reformer from Maharashtra who argued that rights must include freedom and equality.", ml: "അവകാശങ്ങൾ എന്നത് സ്വാതന്ത്ര്യവും സമത്വവും ഉൾക്കൊള്ളുന്നതാണെന്ന് വാദിച്ച മഹാരാഷ്ട്രയിലെ സാമൂഹിക പരിഷ്കർത്താവ്." } }
  ],
  "pl-ps-11-p1-u3": [
    { term: { en: "First Past the Post (FPTP) / Plurality System", ml: "ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ് (FPTP) / പ്ലൂറാലിറ്റി സിസ്റ്റം" }, definition: { en: "An electoral system where the candidate with the highest number of votes in a constituency wins.", ml: "ഒരു മണ്ഡലത്തിൽ ഏറ്റവും കൂടുതൽ വോട്ട് നേടുന്ന സ്ഥാനാർത്ഥി വിജയിക്കുന്ന തിരഞ്ഞെടുപ്പ് രീതി." } },
    { term: { en: "Proportional Representation (PR)", ml: "ആനുപാതിക പ്രാതിനിധ്യം (PR)" }, definition: { en: "A system where a party gets seats in proportion to the percentage of votes it receives.", ml: "ഒരു പാർട്ടിക്ക് ലഭിക്കുന്ന വോട്ടുകളുടെ ശതമാനത്തിന് ആനുപാതികമായി സീറ്റുകൾ ലഭിക്കുന്ന സമ്പ്രദായം." } },
    { term: { en: "Reserved Constituencies", ml: "സംവരണ മണ്ഡലങ്ങൾ" }, definition: { en: "Constituencies where everyone can vote but only candidates from a specific category (SC/ST) can contest.", ml: "എല്ലാവർക്കും വോട്ട് ചെയ്യാമെങ്കിലും ഒരു പ്രത്യേക വിഭാഗത്തിൽ (SC/ST) പെട്ട സ്ഥാനാർത്ഥികൾക്ക് മാത്രം മത്സരിക്കാൻ കഴിയുന്ന മണ്ഡലങ്ങൾ." } },
    { term: { en: "Delimitation Commission", ml: "ഡിലിമിറ്റേഷൻ കമ്മീഷൻ" }, definition: { en: "An independent commission appointed by the President to draw constituency boundaries and determine reserved seats.", ml: "മണ്ഡലങ്ങളുടെ അതിർത്തി നിശ്ചയിക്കാനും സംവരണ സീറ്റുകൾ തീരുമാനിക്കാനും രാഷ്ട്രപതി നിയമിക്കുന്ന സ്വതന്ത്ര കമ്മീഷൻ." } },
    { term: { en: "Universal Adult Franchise", ml: "സാർവത്രിക പ്രായപൂർത്തി വോട്ടവകാശം" }, definition: { en: "The democratic right of all adult citizens to vote.", ml: "പ്രായപൂർത്തിയായ എല്ലാ പൗരന്മാർക്കും വോട്ട് ചെയ്യാനുള്ള ജനാധിപത്യ അവകാശം." } },
    { term: { en: "Election Commission of India", ml: "ഇന്ത്യൻ തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" }, definition: { en: "An independent body established under Article 324 to conduct free and fair elections in India.", ml: "ഇന്ത്യയിൽ സ്വതന്ത്രവും നീതിയുക്തവുമായ തിരഞ്ഞെടുപ്പുകൾ നടത്താൻ ആർട്ടിക്കിൾ 324 പ്രകാരം രൂപീകരിച്ച സ്വതന്ത്ര സംവിധാനം." } }
  ],
  "pl-ps-11-p1-u4": [
    { term: { en: "Executive", ml: "കാര്യനിർവ്വഹണ വിഭാഗം" }, definition: { en: "The branch of government responsible for implementing laws and policies passed by the legislature.", ml: "നിയമസഭ പാസാക്കുന്ന നിയമങ്ങളും നയങ്ങളും നടപ്പിലാക്കാൻ ചുമതലപ്പെട്ട ഗവൺമെന്റ് വിഭാഗം." } },
    { term: { en: "Parliamentary System", ml: "പാർലമെന്ററി സമ്പ്രദായം" }, definition: { en: "A system of government headed by a Prime Minister who is responsible to the legislature.", ml: "പ്രധാനമന്ത്രി തലവനായുള്ളതും നിയമനിർമ്മാണ സഭയോട് ഉത്തരവാദിത്വമുള്ളതുമായ ഭരണസംവിധാനം." } },
    { term: { en: "Presidential System", ml: "പ്രസിഡൻഷ്യൽ സമ്പ്രദായം" }, definition: { en: "A centralized system of government where the President is both the head of state and the head of government.", ml: "രാഷ്ട്രപതി രാഷ്ട്രത്തലവനും ഗവൺമെന്റ് തലവനുമായിരിക്കുന്ന അധികാര കേന്ദ്രീകൃതമായ ഭരണസംവിധാനം." } },
    { term: { en: "Pocket Veto", ml: "പോക്കറ്റ് വീറ്റോ" }, definition: { en: "An unofficial power of the President to indefinitely postpone signing or returning a bill passed by the Parliament.", ml: "പാർലമെന്റ് പാസാക്കിയ ഒരു ബില്ലിൽ ഒപ്പിടുകയോ തിരിച്ചയക്കുകയോ ചെയ്യാതെ അനിശ്ചിതമായി മാറ്റിവെക്കാനുള്ള രാഷ്ട്രപതിയുടെ അനൗദ്യോഗിക അധികാരം." } },
    { term: { en: "Collective Responsibility", ml: "കൂട്ടുത്തരവാദിത്തം" }, definition: { en: "The principle that the Council of Ministers is collectively responsible to the Lok Sabha.", ml: "മന്ത്രിസഭ കൂട്ടായി ലോക്സഭയോട് ഉത്തരവാദിത്വപ്പെട്ടിരിക്കുന്നു എന്ന തത്വം." } },
    { term: { en: "Bureaucracy / Permanent Executive", ml: "ഉദ്യോഗസ്ഥ വൃന്ദം / സ്ഥിരം എക്സിക്യൂട്ടീവ്" }, definition: { en: "The permanent administrative machinery that assists ministers in formulating and implementing policies.", ml: "നയങ്ങൾ രൂപീകരിക്കാനും നടപ്പിലാക്കാനും മന്ത്രിമാരെ സഹായിക്കുന്ന സ്ഥിരം ഉദ്യോഗസ്ഥ വൃന്ദം." } }
  ],
  "pl-ps-11-p1-u5": [
    { term: { en: "Bicameral Legislature", ml: "ദ്വിമണ്ഡല നിയമസഭ" }, definition: { en: "A legislature with two houses (e.g., the Rajya Sabha and Lok Sabha in India).", ml: "രണ്ട് സഭകളുള്ള നിയമനിർമ്മാണ സംവിധാനം (ഉദാഹരണത്തിന്, ഇന്ത്യയിലെ രാജ്യസഭയും ലോക്സഭയും)." } },
    { term: { en: "Rajya Sabha", ml: "രാജ്യസഭ" }, definition: { en: "The upper house of Parliament that represents the states of India, elected indirectly.", ml: "ഇന്ത്യൻ സംസ്ഥാനങ്ങളെ പ്രതിനിധീകരിക്കുന്ന, പരോക്ഷമായി തിരഞ്ഞെടുക്കപ്പെടുന്ന പാർലമെന്റിന്റെ ഉപരിസഭ." } },
    { term: { en: "Lok Sabha", ml: "ലോകസഭ" }, definition: { en: "The lower house of Parliament directly elected by the people.", ml: "ജനങ്ങളാൽ നേരിട്ട് തിരഞ്ഞെടുക്കപ്പെടുന്ന പാർലമെന്റിന്റെ അധോസഭ." } },
    { term: { en: "Money Bill", ml: "ധനകാര്യ ബിൽ" }, definition: { en: "A bill related to taxation and government expenditure that can only be introduced in the Lok Sabha.", ml: "നികുതി, ഗവൺമെന്റ് ചെലവുകൾ എന്നിവയുമായി ബന്ധപ്പെട്ട, ലോക്സഭയിൽ മാത്രം അവതരിപ്പിക്കാൻ കഴിയുന്ന ബിൽ." } },
    { term: { en: "Question Hour", ml: "ചോദ്യോത്തരവേള" }, definition: { en: "Time set aside during parliamentary sessions to ask direct questions to ministers, meant to control the executive.", ml: "എക്സിക്യൂട്ടീവിനെ നിയന്ത്രിക്കുന്നതിനായി, മന്ത്രിമാരോട് നേരിട്ട് ചോദ്യങ്ങൾ ചോദിക്കാൻ പാർലമെന്റ് സമ്മേളനങ്ങളിൽ മാറ്റിവെക്കുന്ന സമയം." } },
    { term: { en: "Anti-defection Law", ml: "കൂറുമാറ്റ നിരോധന നിയമം" }, definition: { en: "A law brought in to prevent elected representatives from switching parties after being elected (52nd, 91st amendments).", ml: "തിരഞ്ഞെടുക്കപ്പെട്ട ശേഷം ജനപ്രതിനിധികൾ പാർട്ടി മാറുന്നത് തടയാൻ കൊണ്ടുവന്ന നിയമം (52, 91 ഭേദഗതികൾ)." } }
  ],
  "pl-ps-11-p1-u6": [
    { term: { en: "Rule of Law", ml: "നിയമവാഴ്ച" }, definition: { en: "The principle that everyone, rich or poor, is subject to the same law.", ml: "സമ്പന്നനോ ദരിദ്രനോ ആകട്ടെ, എല്ലാവരും ഒരേ നിയമത്തിന് വിധേയരാണെന്ന തത്വം." } },
    { term: { en: "Independence of Judiciary", ml: "സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ" }, definition: { en: "The freedom of the judiciary to function without fear or interference from the executive or legislature.", ml: "എക്സിക്യൂട്ടീവിന്റെയോ ലെജിസ്ലേച്ചറിന്റെയോ ഇടപെടലുകളില്ലാതെ, നിർഭയമായി പ്രവർത്തിക്കാനുള്ള ജുഡീഷ്യറിയുടെ സ്വാതന്ത്ര്യം." } },
    { term: { en: "Original Jurisdiction", ml: "തനതധികാരം" }, definition: { en: "The exclusive power of the Supreme Court to directly resolve disputes between the union and states.", ml: "കേന്ദ്രവും സംസ്ഥാനങ്ങളും തമ്മിലുള്ള തർക്കങ്ങൾ നേരിട്ട് പരിഹരിക്കാനുള്ള സുപ്രീം കോടതിയുടെ തനതധികാരം." } },
    { term: { en: "Appellate Jurisdiction", ml: "അപ്പീൽ അധികാരം" }, definition: { en: "The power of the Supreme Court to hear appeals in civil, criminal, and constitutional cases.", ml: "സിവിൽ, ക്രിമിനൽ, ഭരണഘടനാപരമായ കേസുകളിൽ അപ്പീൽ കേൾക്കാനുള്ള സുപ്രീം കോടതിയുടെ അധികാരം." } },
    { term: { en: "Public Interest Litigation (PIL)", ml: "പൊതുതാൽപ്പര്യ ഹർജി (PIL)" }, definition: { en: "A provision where anyone can approach the court on matters of public interest on behalf of the weak and poor.", ml: "സമൂഹത്തിലെ ദുർബലർക്കും പാവപ്പെട്ടവർക്കും വേണ്ടി പൊതുതാൽപ്പര്യമുള്ള വിഷയങ്ങളിൽ ആർക്കും കോടതിയെ സമീപിക്കാമെന്ന വ്യവസ്ഥ." } },
    { term: { en: "Judicial Review", ml: "ജുഡീഷ്യൽ റിവ്യൂ" }, definition: { en: "The power of the Supreme Court to examine and invalidate laws that violate the Constitution.", ml: "ഭരണഘടനയ്ക്ക് വിരുദ്ധമായ നിയമങ്ങൾ പരിശോധിക്കാനും അസാധുവാക്കാനും സുപ്രീം കോടതിക്കുള്ള അധികാരം." } },
    { term: { en: "Basic Structure Doctrine", ml: "അടിസ്ഥാന ഘടനാ സിദ്ധാന്തം" }, definition: { en: "The principle declared by the Supreme Court in the Kesavananda Bharati case that Parliament cannot alter or destroy the basic structure of the Constitution.", ml: "ഭരണഘടനയുടെ അടിസ്ഥാന സ്വഭാവം മാറ്റാനോ നശിപ്പിക്കാനോ പാർലമെന്റിന് അധികാരമില്ല എന്ന് കേശവാനന്ദ ഭാരതി കേസിൽ സുപ്രീം കോടതി പ്രഖ്യാപിച്ച തത്വം." } }
  ],
  "pl-ps-11-p1-u7": [
    { term: { en: "Federalism", ml: "ഫെഡറലിസം" }, definition: { en: "A system of government where power is divided between a national government and regional governments.", ml: "ദേശീയ തലത്തിലും പ്രാദേശിക തലത്തിലുമായി രണ്ട് ഗവൺമെന്റുകൾക്ക് അധികാരങ്ങൾ വിഭജിച്ച് നൽകുന്ന ഭരണസംവിധാനം." } },
    { term: { en: "Union List, State List, Concurrent List", ml: "യൂണിയൻ ലിസ്റ്റ്, സ്റ്റേറ്റ് ലിസ്റ്റ്, കൺകറന്റ് ലിസ്റ്റ്" }, definition: { en: "Constitutional lists that divide legislative powers between the central and state governments.", ml: "കേന്ദ്ര-സംസ്ഥാന ഗവൺമെന്റുകൾക്കിടയിൽ നിയമനിർമ്മാണ അധികാരങ്ങൾ വിഭജിക്കുന്ന ഭരണഘടനാ പട്ടികകൾ." } },
    { term: { en: "Residuary Powers", ml: "അവശിഷ്ട അധികാരങ്ങൾ" }, definition: { en: "The power of the center to make laws on new subjects not included in any of the three constitutional lists.", ml: "ഭരണഘടനയുടെ മൂന്ന് ലിസ്റ്റുകളിലും ഉൾപ്പെടാത്ത പുതിയ വിഷയങ്ങളിൽ നിയമം നിർമ്മിക്കാൻ കേന്ദ്രത്തിനുള്ള അധികാരം." } },
    { term: { en: "Article 356 (President's Rule)", ml: "ആർട്ടിക്കിൾ 356 (രാഷ്ട്രപതി ഭരണം)" }, definition: { en: "A provision for the central government to take over the administration of a state when its constitutional machinery breaks down.", ml: "ഒരു സംസ്ഥാനത്തെ ഭരണഘടനാ സംവിധാനം തകരുമ്പോൾ ഭരണച്ചുമതല കേന്ദ്രം ഏറ്റെടുക്കുന്ന വ്യവസ്ഥ." } },
    { term: { en: "Asymmetric Federalism", ml: "അസമമായ ഫെഡറലിസം" }, definition: { en: "The special status and autonomy granted by the Constitution to certain states with specific socio-historical backgrounds.", ml: "പ്രത്യേക സാമൂഹിക-ചരിത്ര പശ്ചാത്തലമുള്ള ചില സംസ്ഥാനങ്ങൾക്ക് ഭരണഘടന നൽകുന്ന പ്രത്യേക പദവിയും സ്വയംഭരണവും." } }
  ],
  "pl-ps-11-p1-u8": [
    { term: { en: "Local Government", ml: "തദ്ദേശ സ്വയംഭരണം" }, definition: { en: "The government closest to the people, dealing with their daily problems at the village and district levels.", ml: "ഗ്രാമ-ജില്ലാ തലങ്ങളിൽ ജനങ്ങളുടെ ദൈനംദിന പ്രശ്നങ്ങളിൽ ഇടപെടുന്ന, ജനങ്ങൾക്ക് ഏറ്റവും അടുത്തുള്ള സർക്കാർ." } },
    { term: { en: "73rd Amendment", ml: "73-ാം ഭേദഗതി" }, definition: { en: "A constitutional amendment that provided a uniform three-tier structure for rural local bodies (Panchayati Raj) across the country.", ml: "ഗ്രാമീണ തദ്ദേശ സ്ഥാപനങ്ങൾക്ക് (പഞ്ചായത്ത് രാജ്) രാജ്യത്തുടനീളം ഏകീകൃതമായ ത്രിതല ഘടന നൽകിയ ഭരണഘടനാ ഭേദഗതി." } },
    { term: { en: "74th Amendment", ml: "74-ാം ഭേദഗതി" }, definition: { en: "An amendment that provided structure and powers to urban local bodies (Nagarpalikas).", ml: "നഗരങ്ങളിലെ തദ്ദേശ സ്ഥാപനങ്ങൾക്ക് (നഗരപാലികകൾ) ഘടനയും അധികാരങ്ങളും നൽകിയ ഭേദഗതി." } },
    { term: { en: "Gram Sabha", ml: "ഗ്രാമസഭ" }, definition: { en: "A mandatory assembly consisting of all adult citizens on the voter list of a Panchayat.", ml: "ഒരു പഞ്ചായത്തിലെ വോട്ടർപട്ടികയിലുള്ള എല്ലാ മുതിർന്ന പൗരന്മാരും ഉൾപ്പെടുന്ന നിർബന്ധിത ഗ്രാമസഭ." } },
    { term: { en: "State Election Commission", ml: "സംസ്ഥാന തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" }, definition: { en: "A commission formed to conduct independent elections to local self-government bodies.", ml: "തദ്ദേശ സ്വയംഭരണ സ്ഥാപനങ്ങളിലേക്ക് സ്വതന്ത്രമായി തിരഞ്ഞെടുപ്പ് നടത്താൻ രൂപീകരിച്ച കമ്മീഷൻ." } },
    { term: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" }, definition: { en: "A leader who strongly advocated for the decentralization of power and village autonomy (Gram Swaraj).", ml: "അധികാര വികേന്ദ്രീകരണത്തിനും ഗ്രാമങ്ങളുടെ സ്വയംഭരണത്തിനും (ഗ്രാമസ്വരാജ്) വേണ്ടി ശക്തമായി വാദിച്ച നേതാവ്." } }
  ],
  "pl-ps-11-p1-u9": [
    { term: { en: "Living Document", ml: "ചലനാത്മക രേഖ" }, definition: { en: "The concept that a constitution is a dynamic document capable of changing and adapting to new circumstances over time.", ml: "കാലത്തിനനുസരിച്ച് മാറാനും പുതിയ സാഹചര്യങ്ങളോട് പൊരുത്തപ്പെടാനും കഴിയുന്ന ചലനാത്മകമായ രേഖയാണ് ഭരണഘടന എന്ന സങ്കൽപ്പം." } },
    { term: { en: "Article 368", ml: "ആർട്ടിക്കിൾ 368" }, definition: { en: "The article that specifies the procedures for amending the Constitution.", ml: "ഭരണഘടന ഭേദഗതി ചെയ്യുന്നതിനുള്ള നടപടിക്രമങ്ങളെക്കുറിച്ച് വ്യക്തമാക്കുന്ന അനുച്ഛേദം." } },
    { term: { en: "Special Majority", ml: "പ്രത്യേക ഭൂരിപക്ഷം" }, definition: { en: "A provision requiring constitutional amendments to be supported by more than half of the total members of the House, and a two-thirds majority of those voting.", ml: "ഭരണഘടനാ ഭേദഗതികൾക്ക് സഭയിലെ ആകെ അംഗങ്ങളുടെ പകുതിയിലധികവും, വോട്ട് ചെയ്യുന്നവരിൽ മൂന്നിൽ രണ്ടും പിന്തുണയ്ക്കണം എന്ന വ്യവസ്ഥ." } },
    { term: { en: "Kesavananda Bharati Case (1973)", ml: "കേശവാനന്ദ ഭാരതി കേസ് (1973)" }, definition: { en: "A landmark case ruling that Parliament cannot alter the basic structure of the Constitution.", ml: "ഭരണഘടനയുടെ അടിസ്ഥാന ഘടനയെ മാറ്റാൻ പാർലമെന്റിന് കഴിയില്ല എന്ന് വിധിച്ച ചരിത്രപ്രധാനമായ കേസ്." } },
    { term: { en: "42nd Amendment", ml: "42-ാം ഭേദഗതി" }, definition: { en: "A controversial amendment passed during the Emergency attempting to curtail the powers of the judiciary.", ml: "അടിയന്തരാവസ്ഥ കാലത്ത് പാസാക്കപ്പെട്ടതും, ജുഡീഷ്യറിയുടെ അധികാരങ്ങൾ വെട്ടിക്കുറയ്ക്കാൻ ശ്രമിച്ചതുമായ വിവാദ ഭേദഗതി." } }
  ],
  "pl-ps-11-p1-u10": [
    { term: { en: "Political Philosophy Approach", ml: "രാഷ്ട്രീയ തത്വശാസ്ത്ര സമീപനം" }, definition: { en: "A method of understanding the constitution not just as a rulebook, but by grasping the moral vision and ideology it presents.", ml: "ഭരണഘടനയെ വെറുമൊരു നിയമപുസ്തകമായി കാണാതെ, അത് മുന്നോട്ടുവെക്കുന്ന ധാർമ്മിക കാഴ്ചപ്പാടും ആശയഘടനയും മനസ്സിലാക്കുന്ന രീതി." } },
    { term: { en: "Individual Freedom", ml: "വ്യക്തി സ്വാതന്ത്ര്യം" }, definition: { en: "A liberal value in the Indian Constitution that ensures freedom of expression and protection from arbitrary arrest.", ml: "അഭിപ്രായ സ്വാതന്ത്ര്യവും അന്യായമായ അറസ്റ്റിൽ നിന്നുള്ള സംരക്ഷണവും ഉറപ്പാക്കുന്ന ഇന്ത്യൻ ഭരണഘടനയിലെ ലിബറൽ മൂല്യം." } },
    { term: { en: "Social Justice", ml: "സാമൂഹിക നീതി" }, definition: { en: "The Constitution's commitment to ensure equality in society by providing measures like reservations for historically marginalized groups.", ml: "ചരിത്രപരമായി അടിച്ചമർത്തപ്പെട്ട വിഭാഗങ്ങൾക്ക് സംവരണം പോലുള്ളവ നൽകി സമൂഹത്തിൽ സമത്വം ഉറപ്പാക്കാനുള്ള ഭരണഘടനയുടെ പ്രതിബദ്ധത." } },
    { term: { en: "Principled Distance", ml: "തത്വാധിഷ്ഠിത അകലം" }, definition: { en: "The model of Indian secularism maintaining a measured distance from all religions, intervening or abstaining as needed.", ml: "എല്ലാ മതങ്ങളിൽ നിന്നും ഒരു നിശ്ചിത അകലം പാലിച്ച്, ആവശ്യാനുസരണം ഇടപെടുകയോ വിട്ടുനിൽക്കുകയോ ചെയ്യുന്ന ഇന്ത്യൻ മതേതരത്വ മാതൃകാ രീതി." } },
    { term: { en: "Universal Franchise", ml: "സാർവത്രിക വോട്ടവകാശം" }, definition: { en: "A revolutionary decision to grant equal voting rights to all citizens, putting aside traditional social discriminations.", ml: "പരമ്പരാഗതമായ സാമൂഹിക വിവേചനങ്ങൾ മാറ്റിവെച്ച് എല്ലാ പൗരന്മാർക്കും തുല്യ വോട്ടവകാശം നൽകാനുള്ള വിപ്ലവകരമായ തീരുമാനം." } },
    { term: { en: "Rammohan Roy", ml: "റാം മോഹൻ റോയ്" }, definition: { en: "A 19th-century social reformer who advocated for freedom of the press and women's rights.", ml: "പത്രസ്വാതന്ത്ര്യത്തിനും സ്ത്രീകളുടെ അവകാശങ്ങൾക്കും വേണ്ടി വാദിച്ച പത്തൊൻപതാം നൂറ്റാണ്ടിലെ സാമൂഹിക പരിഷ്കർത്താവ്." } }
  ],

  // Part 2
  "pl-ps-11-p2-u1": [
    { term: { en: "Politics", ml: "രാഷ്ട്രീയം" }, definition: { en: "The process of making collective decisions to find solutions to a society's common problems and promote development.", ml: "ഒരു സമൂഹത്തിന്റെ പൊതുവായ പ്രശ്നങ്ങൾക്ക് പരിഹാരം കണ്ടെത്താനും വികസനം പ്രോത്സാഹിപ്പിക്കാനും വേണ്ടിയുള്ള കൂട്ടായ തീരുമാനങ്ങൾ എടുക്കുന്ന പ്രക്രിയ." } },
    { term: { en: "Political Theory", ml: "രാഷ്ട്രീയ സിദ്ധാന്തം" }, definition: { en: "A discipline that systematically studies the meaning and significance of political concepts like freedom, equality, and justice.", ml: "സ്വാതന്ത്ര്യം, സമത്വം, നീതി തുടങ്ങിയ രാഷ്ട്രീയ ആശയങ്ങളുടെ അർത്ഥവും പ്രാധാന്യവും ചിട്ടയായി പഠിക്കുന്ന ശാഖ." } },
    { term: { en: "Socrates", ml: "സോക്രട്ടീസ്" }, definition: { en: "An ancient Greek philosopher who logically questioned the beliefs and notions of justice in his society.", ml: "സമൂഹത്തിലെ വിശ്വാസങ്ങളെയും നീതിയെക്കുറിച്ചുള്ള ധാരണകളെയും യുക്തിയുക്തമായി ചോദ്യം ചെയ്ത പുരാതന ഗ്രീക്ക് തത്വചിന്തകൻ." } },
    { term: { en: "Plato", ml: "പ്ലേറ്റോ" }, definition: { en: "A disciple of Socrates who investigated the meaning of justice through his book 'The Republic'.", ml: "സോക്രട്ടീസിന്റെ ശിഷ്യനും, 'ദ റിപ്പബ്ലിക്' എന്ന പുസ്തകത്തിലൂടെ നീതിയുടെ അർത്ഥം അന്വേഷിച്ച വ്യക്തിയും." } }
  ],
  "pl-ps-11-p2-u2": [
    { term: { en: "Freedom", ml: "സ്വാതന്ത്ര്യം" }, definition: { en: "A state characterized by the absence of external constraints and the condition for humans to develop their abilities.", ml: "ബാഹ്യ നിയന്ത്രണങ്ങളുടെ അഭാവവും മനുഷ്യർക്ക് അവരുടെ കഴിവുകൾ വികസിപ്പിക്കാനുള്ള സാഹചര്യവുമുള്ള അവസ്ഥ." } },
    { term: { en: "Swaraj", ml: "സ്വരാജ്" }, definition: { en: "A concept put forward by Gandhiji, carrying dual meanings of 'self-rule' and 'rule over oneself'.", ml: "'സ്വയം ഭരണം', 'സ്വന്തം മേലുള്ള ഭരണം' എന്നിങ്ങനെ രണ്ട് അർത്ഥങ്ങളുള്ള, ഗാന്ധിജി മുന്നോട്ടുവെച്ച ആശയം." } },
    { term: { en: "Harm Principle", ml: "ഹാനിയുടെ തത്വം" }, definition: { en: "J.S. Mill's theory that intervention in a person's liberty is justified only to prevent serious harm to others.", ml: "മറ്റുള്ളവർക്ക് സംഭവിക്കുന്ന ഗുരുതരമായ ദോഷം തടയാൻ മാത്രമേ ഒരു വ്യക്തിയുടെ സ്വാതന്ത്ര്യത്തിൽ ഇടപെടാവൂ എന്ന ജെ.എസ്. മില്ലിന്റെ സിദ്ധാന്തം." } },
    { term: { en: "Negative Liberty", ml: "നെഗറ്റീവ് ലിബർട്ടി" }, definition: { en: "The idea of an area of individual activity where no external authority should interfere.", ml: "ഒരു വ്യക്തിയുടെ പ്രവർത്തികളിൽ പുറത്തുനിന്നുള്ള യാതൊരു അധികാരവും ഇടപെടാൻ പാടില്ലാത്ത മേഖലയെക്കുറിച്ചുള്ള ആശയം." } },
    { term: { en: "Positive Liberty", ml: "പോസിറ്റീവ് ലിബർട്ടി" }, definition: { en: "The freedom that provides the material, social, and political conditions necessary for personality development.", ml: "വ്യക്തിത്വ വികസനത്തിന് ആവശ്യമായ ഭൗതികവും സാമൂഹികവും രാഷ്ട്രീയവുമായ സാഹചര്യങ്ങൾ ഒരുക്കിക്കൊടുക്കുന്ന സ്വാതന്ത്ര്യം." } },
    { term: { en: "Nelson Mandela", ml: "നെൽസൺ മണ്ടേല" }, definition: { en: "Author of 'Long Walk to Freedom', who spent 28 years in prison fighting against apartheid in South Africa.", ml: "ദക്ഷിണാഫ്രിക്കയിലെ വർണ്ണവിവേചനത്തിനെതിരെ പോരാടി 28 വർഷം ജയിൽവാസം അനുഭവിച്ച, 'ലോംഗ് വാക്ക് ടു ഫ്രീഡം' എന്ന പുസ്തകത്തിന്റെ രചയിതാവ്." } },
    { term: { en: "Aung San Suu Kyi", ml: "ഓങ് സാൻ സൂ ചി" }, definition: { en: "A leader from Myanmar who defined true freedom as 'freedom from fear'.", ml: "യഥാർത്ഥ സ്വാതന്ത്ര്യം എന്നത് 'ഭയത്തിൽ നിന്നുള്ള മോചനമാണ്' എന്ന് നിർവചിച്ച മ്യാൻമർ നേതാവ്." } },
    { term: { en: "John Stuart Mill", ml: "ജോൺ സ്റ്റുവർട്ട് മിൽ" }, definition: { en: "A 19th-century thinker who strongly defended freedom of expression and formulated the Harm Principle.", ml: "ആവിഷ്കാര സ്വാതന്ത്ര്യത്തെ ശക്തമായി പ്രതിരോധിക്കുകയും ഹാനിയുടെ തത്വം (Harm Principle) രൂപീകരിക്കുകയും ചെയ്ത 19-ാം നൂറ്റാണ്ടിലെ ചിന്തകൻ." } }
  ],
  "pl-ps-11-p2-u3": [
    { term: { en: "Equality", ml: "സമത്വം" }, definition: { en: "The core idea that all human beings are deserving of equal value and respect, regardless of caste, colour, or gender.", ml: "ജാതി, വർണ്ണം, ലിംഗം എന്നിവയ്ക്ക് അതീതമായി എല്ലാ മനുഷ്യർക്കും ഒരേ മൂല്യവും ബഹുമാനവും അർഹതയുണ്ടെന്ന ആശയം." } },
    { term: { en: "Equality of Opportunities", ml: "അവസര സമത്വം" }, definition: { en: "Ensuring equal opportunities and conditions for everyone to develop their abilities and achieve their goals.", ml: "എല്ലാവർക്കും അവരുടെ കഴിവുകൾ വികസിപ്പിക്കാനും ലക്ഷ്യങ്ങൾ നേടാനുമുള്ള തുല്യ അവസരങ്ങളും സാഹചര്യങ്ങളും ഉറപ്പാക്കൽ." } },
    { term: { en: "Natural Inequalities", ml: "പ്രകൃതിദത്ത അസമത്വങ്ങൾ" }, definition: { en: "Inequalities arising from differences in innate abilities and characteristics from birth.", ml: "മനുഷ്യരുടെ ജനനത്താലുള്ള കഴിവുകളിലെയും സവിശേഷതകളിലെയും വ്യത്യാസങ്ങൾ കാരണം ഉണ്ടാകുന്ന അസമത്വങ്ങൾ." } },
    { term: { en: "Social Inequalities", ml: "സാമൂഹിക അസമത്വങ്ങൾ" }, definition: { en: "Unjust inequalities created by society itself based on factors like caste and gender.", ml: "ജാതി, ലിംഗം തുടങ്ങിയവയുടെ അടിസ്ഥാനത്തിൽ സമൂഹം തന്നെ സൃഷ്ടിച്ചെടുക്കുന്ന അന്യായമായ അസമത്വങ്ങൾ." } },
    { term: { en: "Feminism", ml: "സ്ത്രീവാദം" }, definition: { en: "A theory arguing for equal rights for men and women and opposing patriarchy.", ml: "സ്ത്രീകൾക്കും പുരുഷന്മാർക്കും തുല്യ അവകാശങ്ങൾ വേണമെന്ന് വാദിക്കുകയും പുരുഷാധിപത്യത്തെ എതിർക്കുകയും ചെയ്യുന്ന സിദ്ധാന്തം." } },
    { term: { en: "Socialism", ml: "സോഷ്യലിസം" }, definition: { en: "An ideology calling for government interventions to reduce economic inequalities and ensure fair resource distribution.", ml: "സാമ്പത്തിക അസമത്വങ്ങൾ കുറയ്ക്കുന്നതിനും വിഭവങ്ങൾ നീതിയുക്തമായി വിതരണം ചെയ്യുന്നതിനുമായി സർക്കാർ ഇടപെടലുകൾ ആവശ്യപ്പെടുന്ന പ്രത്യയശാസ്ത്രം." } },
    { term: { en: "Affirmative Action", ml: "പോസിറ്റീവ് വിവേചനം (Affirmative Action)" }, definition: { en: "Positive steps, like reservations, providing special consideration to vulnerable sections that have faced historical discrimination.", ml: "കാലാകാലങ്ങളായി വിവേചനം അനുഭവിക്കുന്ന ദുർബല വിഭാഗങ്ങൾക്ക് സംവരണം പോലെയുള്ള പ്രത്യേക പരിഗണന നൽകുന്ന പോസിറ്റീവ് നടപടികൾ." } },
    { term: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" }, definition: { en: "A thinker who argued that private ownership of essential resources is the root cause of inequality and exploitation.", ml: "പ്രധാന വിഭവങ്ങളുടെ മേലുള്ള സ്വകാര്യ ഉടമസ്ഥതയാണ് അസമത്വങ്ങളുടെയും ചൂഷണത്തിന്റെയും അടിസ്ഥാന കാരണം എന്ന് വാദിച്ച ചിന്തകൻ." } },
    { term: { en: "Rammanohar Lohia", ml: "റാംമനോഹർ ലോഹ്യ" }, definition: { en: "An Indian socialist thinker who envisioned 'Saptakranti', pointing out the need to fight five types of inequalities simultaneously.", ml: "അഞ്ചുതരം അസമത്വങ്ങൾക്കെതിരെ ഒരേസമയം പോരാടേണ്ടതുണ്ടെന്ന് ചൂണ്ടിക്കാണിച്ച് 'സപ്തക്രാന്തി' വിഭാവനം ചെയ്ത ഇന്ത്യൻ സോഷ്യലിസ്റ്റ് ചിന്തകൻ." } }
  ],
  "pl-ps-11-p2-u4": [
    { term: { en: "Justice", ml: "നീതി" }, definition: { en: "The principle of giving each person what they are due and ensuring the overall well-being of society.", ml: "ഓരോ വ്യക്തിക്കും അർഹമായത് നൽകുകയും സമൂഹത്തിന്റെ മൊത്തത്തിലുള്ള ക്ഷേമം ഉറപ്പാക്കുകയും ചെയ്യുന്ന തത്വം." } },
    { term: { en: "Equal Treatment for Equals", ml: "തുല്യരോട് തുല്യ പരിഗണന" }, definition: { en: "The principle that all individuals, as human beings, should be given the same rights and equal consideration without discrimination.", ml: "മനുഷ്യരെന്ന നിലയിൽ എല്ലാവർക്കും യാതൊരു വിവേചനവുമില്ലാതെ ഒരേ അവകാശങ്ങളും തുല്യ പരിഗണനയും നൽകണം എന്ന തത്വം." } },
    { term: { en: "Proportionate Justice", ml: "ആനുപാതിക നീതി" }, definition: { en: "The principle that rewards should be given according to the level of effort, risk, and skill involved.", ml: "വ്യക്തികൾ എടുക്കുന്ന പരിശ്രമത്തിന്റെയും അവർ നേരിടുന്ന അപകടസാധ്യതകളുടെയും വൈദഗ്ധ്യത്തിന്റെയും തോതനുസരിച്ച് പ്രതിഫലം നൽകണമെന്ന തത്വം." } },
    { term: { en: "Recognition of Special Needs", ml: "പ്രത്യേക ആവശ്യങ്ങളുടെ അംഗീകാരം" }, definition: { en: "The principle that, instead of treating everyone exactly alike, the special needs of those with historical disadvantages or physical limitations must be considered.", ml: "എല്ലാവരെയും ഒരുപോലെ പരിഗണിക്കുന്നതിന് പകരം, ചരിത്രപരമായ പിന്നോക്കാവസ്ഥയോ ശാരീരിക പരിമിതികളോ ഉള്ളവരുടെ പ്രത്യേക ആവശ്യങ്ങൾ പരിഗണിക്കണമെന്ന തത്വം." } },
    { term: { en: "Veil of Ignorance", ml: "അജ്ഞതയുടെ മൂടുപടം" }, definition: { en: "John Rawls's concept that creating rules while unaware of one's future position will ensure justice for the weakest in society.", ml: "സ്വന്തം ഭാവിയോ സ്ഥാനമോ അറിയാത്ത ഒരു 'അജ്ഞതയുടെ മൂടുപടത്തിനുള്ളിൽ' നിന്ന് നിയമങ്ങൾ ഉണ്ടാക്കുമ്പോൾ അത് സമൂഹത്തിലെ ഏറ്റവും ദുർബലർക്ക് നീതി ഉറപ്പാക്കുമെന്ന് ജോൺ റോൾസ് അവതരിപ്പിച്ച ആശയം." } },
    { term: { en: "Immanuel Kant", ml: "ഇമ്മാനുവൽ കാന്റ്" }, definition: { en: "A philosopher who argued that every human has their own dignity and should never be seen merely as a tool.", ml: "ഓരോ മനുഷ്യനും അവരുടേതായ അന്തസ്സുണ്ടെന്നും ആരെയും ഒരു ഉപകരണമായി മാത്രം കാണരുതെന്നും വാദിച്ച തത്വചിന്തകൻ." } },
    { term: { en: "John Rawls", ml: "ജോൺ റോൾസ്" }, definition: { en: "A philosopher who theorized on how a just society could be built on the basis of reason rather than mere sympathy or morality.", ml: "ദയയുടെയോ ധാർമ്മികതയുടെയോ അടിസ്ഥാനത്തിലല്ലാതെ, യുക്തിയുടെ അടിസ്ഥാനത്തിൽ നീതിയുക്തമായ ഒരു സമൂഹം എപ്രകാരം കെട്ടിപ്പടുക്കാം എന്ന് സിദ്ധാന്തിച്ച തത്വചിന്തകൻ." } }
  ],
  "pl-ps-11-p2-u5": [
    { term: { en: "Rights", ml: "അവകാശങ്ങൾ" }, definition: { en: "Legitimate claims recognized by society and the state as essential for living with respect and dignity.", ml: "ബഹുമാനത്തോടും അന്തസ്സോടും കൂടി ജീവിക്കാൻ അത്യന്താപേക്ഷിതമെന്ന് സമൂഹവും ഭരണകൂടവും അംഗീകരിച്ച ന്യായമായ അവകാശവാദങ്ങൾ." } },
    { term: { en: "Natural Rights", ml: "പ്രകൃതിദത്ത അവകാശങ്ങൾ" }, definition: { en: "An old idea that life, liberty, and property are natural or God-given and cannot be taken away by anyone.", ml: "ജീവൻ, സ്വാതന്ത്ര്യം, സ്വത്ത് എന്നിവ പ്രകൃതിദത്തമോ ഈശ്വരദത്തമോ ആയതിനാൽ ആർക്കും എടുത്തുമാറ്റാനാകില്ല എന്ന പഴയ ആശയം." } },
    { term: { en: "Human Rights", ml: "മനുഷ്യാവകാശങ്ങൾ" }, definition: { en: "Fundamental entitlements due to every individual simply by virtue of being human and possessing intrinsic value.", ml: "ഓരോ വ്യക്തിക്കും ഒരു മനുഷ്യനായതുകൊണ്ട് മാത്രം, ആന്തരിക മൂല്യമുള്ളതുകൊണ്ട് അർഹതപ്പെട്ട അടിസ്ഥാനപരമായ കാര്യങ്ങൾ." } },
    { term: { en: "Legal Rights", ml: "നിയമപരമായ അവകാശങ്ങൾ" }, definition: { en: "Rights officially recognized and protected by government laws or the constitution.", ml: "ഗവൺമെന്റിന്റെ നിയമങ്ങൾ വഴിയോ ഭരണഘടന വഴിയോ ഔദ്യോഗികമായി അംഗീകരിക്കപ്പെട്ടതും സംരക്ഷിക്കപ്പെടുന്നതുമായ അവകാശങ്ങൾ." } },
    { term: { en: "Political Rights", ml: "രാഷ്ട്രീയ അവകാശങ്ങൾ" }, definition: { en: "Rights that afford citizens the opportunity to vote, contest elections, and participate in governance.", ml: "വോട്ട് ചെയ്യാനും തിരഞ്ഞെടുപ്പിൽ മത്സരിക്കാനും ഭരണപ്രക്രിയയിൽ പങ്കാളികളാകാനും പൗരന്മാർക്ക് അവസരം നൽകുന്ന അവകാശങ്ങൾ." } },
    { term: { en: "Economic Rights", ml: "സാമ്പത്തിക അവകാശങ്ങൾ" }, definition: { en: "Rights ensuring fair wages, shelter, and health, enabling citizens to effectively use their political rights.", ml: "മാന്യമായ വേതനം, പാർപ്പിടം, ആരോഗ്യം തുടങ്ങിയവ ഉറപ്പാക്കി രാഷ്ട്രീയ അവകാശങ്ങൾ ഫലപ്രദമായി ഉപയോഗിക്കാൻ പ്രാപ്തരാക്കുന്ന അവകാശങ്ങൾ." } },
    { term: { en: "Cultural Rights", ml: "സാംസ്കാരിക അവകാശങ്ങൾ" }, definition: { en: "Rights allowing minority groups to protect their own language, culture, and educational institutions.", ml: "ന്യൂനപക്ഷ വിഭാഗങ്ങൾക്ക് അവരുടെ സ്വന്തം ഭാഷ, സംസ്കാരം, വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ എന്നിവ സംരക്ഷിക്കാനുള്ള അവകാശങ്ങൾ." } }
  ],
  "pl-ps-11-p2-u6": [
    { term: { en: "Citizenship", ml: "പൗരത്വം" }, definition: { en: "Full and equal membership in a political community, conferring equal rights to its citizens.", ml: "ഒരു രാജ്യത്തിലെ പൗരന്മാർക്ക് എല്ലാ അവകാശങ്ങളും തുല്യമായി നൽകുന്ന, ഒരു രാഷ്ട്രീയ സമൂഹത്തിലെ പൂർണ്ണവും തുല്യവുമായ അംഗത്വം." } },
    { term: { en: "Universal Citizenship", ml: "സാർവത്രിക പൗരത്വം" }, definition: { en: "A broad democratic concept of citizenship that is inclusive, even embracing stateless refugees.", ml: "സ്വന്തമായി രാജ്യവും പൗരത്വവുമില്ലാത്ത അഭയാർത്ഥികളെയും ഉൾക്കൊള്ളുന്ന വിശാലമായ ജനാധിപത്യ പൗരത്വ സങ്കൽപ്പം." } },
    { term: { en: "Global Citizenship", ml: "ആഗോള പൗരത്വം" }, definition: { en: "The idea that the world is interconnected and global cooperation is necessary to solve transnational humanitarian issues.", ml: "ലോകം പരസ്പരം ബന്ധപ്പെട്ടിരിക്കുന്ന ഒന്നാണെന്നും, അതിർത്തികൾക്കപ്പുറത്ത് മാനുഷിക പ്രശ്നങ്ങൾ പരിഹരിക്കാൻ ആഗോള സഹകരണം വേണമെന്നുമുള്ള ആശയം." } },
    { term: { en: "T.H. Marshall", ml: "ടി.എച്ച്. മാർഷൽ" }, definition: { en: "A British sociologist who viewed citizenship as a tool to eliminate social inequalities and categorized rights into three types.", ml: "പൗരത്വത്തെ സമൂഹത്തിലെ അസമത്വങ്ങൾ ഇല്ലാതാക്കാനുള്ള ഉപകരണമായി കണ്ട, അവകാശങ്ങളെ മൂന്നായി തരംതിരിച്ച ബ്രിട്ടീഷ് സാമൂഹ്യശാസ്ത്രജ്ഞൻ." } },
    { term: { en: "Martin Luther King Jr.", ml: "മാർട്ടിൻ ലൂഥർ കിംഗ് ജൂനിയർ" }, definition: { en: "Leader of African Americans who spearheaded peaceful protests against segregation laws in America.", ml: "അമേരിക്കയിലെ വർണ്ണവിവേചന നിയമങ്ങൾക്കെതിരെ സമാധാനപരമായ പോരാട്ടത്തിന് നേതൃത്വം നൽകിയ കറുത്ത വർഗ്ഗക്കാരുടെ നേതാവ്." } }
  ],
  "pl-ps-11-p2-u7": [
    { term: { en: "Nation", ml: "രാഷ്ട്രം" }, definition: { en: "An imagined community of people bound together by common beliefs, history, territory, and political ideals.", ml: "ഒരേ വിശ്വാസം, ചരിത്രം, പ്രദേശം, രാഷ്ട്രീയ ആശയങ്ങൾ എന്നിവയാൽ പരസ്പരം ബന്ധിക്കപ്പെട്ടിരിക്കുന്ന ആളുകളുടെ ഒരു കൂട്ടായ്മ (Imagined community)." } },
    { term: { en: "Nationalism", ml: "ദേശീയത" }, definition: { en: "A potent political idea that united divided peoples to form new nations, and yet also led to the collapse of empires and separatism.", ml: "വിഘടിച്ചുനിന്ന ജനങ്ങളെ ഒരുമിപ്പിച്ചു പുതിയ രാജ്യങ്ങൾ ഉണ്ടാക്കാനും, അതോടൊപ്പം സാമ്രാജ്യങ്ങളുടെ തകർച്ചയ്ക്കും വിഘടനവാദത്തിനും കാരണമായ ശക്തമായ രാഷ്ട്രീയ ആശയം." } },
    { term: { en: "National Self-determination", ml: "ദേശീയ സ്വയംനിർണ്ണയാവകാശം" }, definition: { en: "The claim by a group of people that they possess the right to determine their own future and govern themselves.", ml: "തങ്ങളുടെ സ്വന്തം ഭാവി തീരുമാനിക്കാനും സ്വയം ഭരിക്കാനും തങ്ങൾക്കവകാശമുണ്ടെന്ന് ഒരു വിഭാഗം ജനങ്ങൾ ഉന്നയിക്കുന്ന വാദം." } },
    { term: { en: "Rabindranath Tagore", ml: "രവീന്ദ്രനാഥ ടാഗോർ" }, definition: { en: "A thinker who sharply criticized narrow nationalism and warned that nationalism should never rise above universal humanity.", ml: "സങ്കുചിതമായ ദേശീയതയെ നിശിതമായി വിമർശിക്കുകയും, ദേശീയത ഒരിക്കലും സാർവലൗകിക മനുഷ്യത്വത്തിന് മുകളിലാകരുതെന്ന് ഓർമ്മിപ്പിക്കുകയും ചെയ്ത ചിന്തകൻ." } }
  ],
  "pl-ps-11-p2-u8": [
    { term: { en: "Secularism", ml: "മതേതരത്വം" }, definition: { en: "The principle opposing domination by one religious group over another, as well as the oppression of the vulnerable within a religion.", ml: "ഒരു മതവിഭാഗം മറ്റൊരു മതത്തെ ആധിപത്യം നടത്തുന്നതിനെയും, മതത്തിനകത്ത് തന്നെ ദുർബലരെ അടിച്ചമർത്തുന്നതിനെയും എതിർക്കുന്ന തത്വം." } },
    { term: { en: "Theocratic State", ml: "മതാധിഷ്ഠിത രാജ്യം" }, definition: { en: "A state ruled directly by a priestly class, where religious institutions and the state are not separated.", ml: "മതസ്ഥാപനങ്ങളും ഭരണകൂടവും വേർതിരിക്കപ്പെടാതെ, നേരിട്ട് പുരോഹിത വർഗ്ഗം ഭരിക്കുന്ന രാജ്യം." } },
    { term: { en: "Western Secularism", ml: "പാശ്ചാത്യ മതേതരത്വം" }, definition: { en: "A model of mutual exclusion where religion and state do not interfere in each other's affairs, treating religion strictly as a private matter.", ml: "മതവും ഭരണകൂടവും പരസ്പരം കാര്യങ്ങളിൽ ഇടപെടാതിരിക്കുന്ന (Mutual exclusion), മതത്തെ വ്യക്തിപരമായ കാര്യമായി മാത്രം കാണുന്ന മതേതരത്വ മാതൃക." } },
    { term: { en: "Indian Secularism", ml: "ഇന്ത്യൻ മതേതരത്വം" }, definition: { en: "A model that maintains a principled distance from all religions while allowing the state to intervene in religious affairs for social good.", ml: "എല്ലാ മതങ്ങളിൽ നിന്നും ഒരു നിശ്ചിത അകലം പാലിക്കുകയും (Principled distance), എന്നാൽ സാമൂഹിക നന്മയ്ക്കായി മതകാര്യങ്ങളിൽ ഇടപെടാൻ സർക്കാരിനെ അനുവദിക്കുകയും ചെയ്യുന്ന മാതൃക." } },
    { term: { en: "Kemal Ataturk", ml: "കമാൽ അത്താതുർക്ക്" }, definition: { en: "A leader who strictly wielded state power over religious affairs to enforce secularism in Turkey through Westernization.", ml: "തുർക്കിയിൽ പാശ്ചാത്യവൽക്കരണത്തിലൂടെ മതേതരത്വം നടപ്പിലാക്കാൻ, മതപരമായ കാര്യങ്ങളിൽ ഭരണകൂടത്തിന്റെ അധികാരം കർശനമായി പ്രയോഗിച്ച നേതാവ്." } }
  ],
  "pl-ps-11-p2-u9": [
    { term: { en: "Peace", ml: "സമാധാനം" }, definition: { en: "The creation of a just, harmonious, and violence-free society, going beyond the mere absence of war.", ml: "കേവലം യുദ്ധമില്ലാത്ത അവസ്ഥ മാത്രമല്ല, അക്രമങ്ങളില്ലാത്തതും യോജിപ്പോടെയുള്ളതുമായ നീതിയുക്തമായ സമൂഹത്തിന്റെ സൃഷ്ടി." } },
    { term: { en: "Structural Violence", ml: "ഘടനാപരമായ അക്രമം" }, definition: { en: "Invisible violence stemming from social structures and institutions such as the caste system, class divisions, and patriarchy.", ml: "ജാതി വ്യവസ്ഥ, വർഗ്ഗ വ്യത്യാസം, പുരുഷാധിപത്യം തുടങ്ങിയ സാമൂഹിക ഘടനകളിൽ നിന്നും സ്ഥാപനങ്ങളിൽ നിന്നും ഉടലെടുക്കുന്ന അദൃശ്യമായ അക്രമം." } },
    { term: { en: "Pacifism", ml: "സമാധാനവാദം" }, definition: { en: "A philosophy that completely opposes violence or war for problem-solving, preferring peaceful methods instead.", ml: "പ്രശ്നപരിഹാരത്തിനായി യുദ്ധമോ അക്രമമോ ഉപയോഗിക്കുന്നതിനെ പൂർണ്ണമായി എതിർക്കുകയും സമാധാനപരമായ വഴികൾ തിരഞ്ഞെടുക്കുകയും ചെയ്യുന്ന സിദ്ധാന്തം." } },
    { term: { en: "Friedrich Nietzsche", ml: "ഫ്രെഡറിക് നീച്ച" }, definition: { en: "A 19th-century philosopher who glorified war, believing that a culture could only grow through conflict.", ml: "സംഘർഷങ്ങളിലൂടെ മാത്രമേ ഒരു സംസ്കാരത്തിന് വളരാൻ കഴിയൂ എന്ന് വിശ്വസിച്ച് യുദ്ധത്തെ പുകഴ്ത്തിയ 19-ാം നൂറ്റാണ്ടിലെ ചിന്തകൻ." } },
    { term: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" }, definition: { en: "A leader who demonstrated to the world that nonviolence is not mere withdrawal but an active and courageous fight for good and justice.", ml: "അഹിംസയെന്നത് കേവലം മാറിനിൽക്കലല്ലെന്നും, നന്മയ്ക്കും നീതിക്കും വേണ്ടിയുള്ള സജീവവും ധീരവുമായ പോരാട്ടമാണെന്നും ലോകത്തിന് കാണിച്ചുകൊടുത്ത നേതാവ്." } }
  ],
  "pl-ps-11-p2-u10": [
    { term: { en: "Development", ml: "വികസനം" }, definition: { en: "A process directed at improving the quality of life and progress of the people, extending beyond mere economic growth.", ml: "കേവലം സാമ്പത്തിക വളർച്ചയ്ക്ക് അപ്പുറം ജനങ്ങളുടെ ജീവിതനിലവാരം മെച്ചപ്പെടുത്തുന്നതും പുരോഗതി ലക്ഷ്യമാക്കുന്നതുമായ ഒരു പ്രക്രിയ." } },
    { term: { en: "Human Development Index (HDI)", ml: "മാനവ വികസന സൂചിക (HDI)" }, definition: { en: "A UNDP mechanism to measure countries' development based on social indicators like literacy, education, and life expectancy.", ml: "സാക്ഷരത, വിദ്യാഭ്യാസം, ആയുർദൈർഘ്യം തുടങ്ങിയ സാമൂഹിക സൂചകങ്ങളുടെ അടിസ്ഥാനത്തിൽ രാജ്യങ്ങളുടെ വികസനം അളക്കുന്ന UNDP യുടെ സംവിധാനം." } },
    { term: { en: "Environmentalism", ml: "പരിസ്ഥിതിവാദം" }, definition: { en: "A movement arguing for environmental protection while questioning industrial development models that exploit natural resources.", ml: "പ്രകൃതി വിഭവങ്ങളെ ചൂഷണം ചെയ്യുന്ന വ്യാവസായിക വികസന രീതികളെ ചോദ്യം ചെയ്യുകയും പരിസ്ഥിതി സംരക്ഷണത്തിനായി വാദിക്കുകയും ചെയ്യുന്ന പ്രസ്ഥാനം." } },
    { term: { en: "Ken Saro-Wiwa", ml: "കെൻ സാരോ-വിവ" }, definition: { en: "A writer and activist from Nigeria who became a martyr fighting peacefully against oil companies exploiting indigenes and the environment.", ml: "നൈജീരിയയിലെ തദ്ദേശീയരെയും പരിസ്ഥിതിയെയും ചൂഷണം ചെയ്ത എണ്ണ കമ്പനികൾക്കെതിരെ സമാധാനപരമായി പോരാടി രക്തസാക്ഷിയായ എഴുത്തുകാരനും ആക്ടിവിസ്റ്റും." } }
  ]
};

let content = fs.readFileSync('src/data/plusone_political_science.ts', 'utf8');

for (const [unitId, glossaryItems] of Object.entries(data)) {
  const findRegex = new RegExp('id:\\s*"' + unitId + '"[\\\\s\\\\S]*?quiz:\\s*\\\\[', 'g');
  const match = findRegex.exec(content);
  if (!match) {
    console.log("NOT FOUND ERROR for unitId", unitId);
    continue;
  }

  const chapterBlock = match[0];
  const glossaryRegex = /glossary:\s*\[([\s\S]*?)\]\s*,?\s*quiz:\s*\[/;
  const glossaryMatch = chapterBlock.match(glossaryRegex);
  
  if (glossaryMatch) {
    let existingGlossaryStr = glossaryMatch[1];
    
    // Check if new items are already partially present so we don't duplicate. We can just append.
    let newEntriesStr = glossaryItems.map(item => {
      return "    { term: { en: " + JSON.stringify(item.term.en) + ", ml: " + JSON.stringify(item.term.ml) + " }, definition: { en: " + JSON.stringify(item.definition.en) + ", ml: " + JSON.stringify(item.definition.ml) + " } }";
    }).join(',\\n');
    
    // Instead of appending to existing, because the existing might be duplicated or incomplete,
    // the prompt said "add these to corresponding chapters' glossary ... don't skip any of the note".
    // Wait, the prompt implies "add these", so we should keep existing items.
    
    if (existingGlossaryStr.trim()) {
      newEntriesStr = existingGlossaryStr + ',\\n' + newEntriesStr;
    }
    
    const replacement = 'glossary: [\\n' + newEntriesStr + '\\n  ],\\n  quiz: [';
    const newChapterBlock = chapterBlock.replace(glossaryRegex, replacement);
    content = content.replace(chapterBlock, newChapterBlock);
  }
}

fs.writeFileSync('src/data/plusone_political_science.ts', content);
console.log('Update Complete.');
