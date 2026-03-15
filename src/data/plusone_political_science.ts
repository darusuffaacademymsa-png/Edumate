import { Lesson } from './curriculum';

export const plusOnePoliticalSciencePart1Unit1: Lesson = {
  id: "pl-ps-11-p1-u1",
  title: { en: "Constitution: Why and How?", ml: "ഭരണഘടന: എന്തിന്? എങ്ങനെ? (Constitution: Why and How?)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=KYkeZKDALfQ",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the functions of a constitution in a society", ml: "ഒരു സമൂഹത്തിൽ ഭരണഘടന നിർവ്വഹിക്കുന്ന ചുമതലകൾ മനസ്സിലാക്കുക" },
    { en: "Analyze how constitutions limit the power of government", ml: "ഭരണഘടനകൾ എങ്ങനെയാണ് ഗവൺമെന്റിന്റെ അധികാരം പരിമിതപ്പെടുത്തുന്നത് എന്ന് വിശകലനം ചെയ്യുക" },
    { en: "Explore the historical process of making the Indian Constitution", ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ രൂപീകരണത്തിന്റെ ചരിത്രപരമായ പ്രക്രിയ പരിശോധിക്കുക" },
    { en: "Identify provisions borrowed from other constitutions", ml: "മറ്റു രാജ്യങ്ങളുടെ ഭരണഘടനകളിൽ നിന്ന് കടമെടുത്ത വ്യവസ്ഥകൾ തിരിച്ചറിയുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the foundational aspects of the Indian Constitution, its functions, and the historical process of its creation.", 
      ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ അടിസ്ഥാന വശങ്ങൾ, അതിന്റെ ചുമതലകൾ, രൂപീകരണത്തിന്റെ ചരിത്രപരമായ പ്രക്രിയ എന്നിവ ഈ അധ്യായം പരിശോധിക്കുന്നു." 
    },
    core: { 
      en: "A detailed study of the functions, authority, and drafting of the Indian Constitution, including borrowed provisions.", 
      ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ ചുമതലകൾ, അധികാരം, രൂപീകരണം, മറ്റു ഭരണഘടനകളിൽ നിന്നുള്ള കടമെടുക്കലുകൾ എന്നിവയെക്കുറിച്ചുള്ള വിശദമായ പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the foundational aspects of the Indian Constitution. It explains what a constitution is, the essential functions it performs for a society, and how it governs the allocation of power. Furthermore, it details the historical process of how the Indian Constitution was crafted by the Constituent Assembly, the values that guided its makers, and the institutional arrangements they established.', ml: 'ഇന്ത്യൻ ഭരണഘടനയുടെ അടിസ്ഥാന വശങ്ങളെക്കുറിച്ചാണ് ഈ അധ്യായം പ്രതിപാദിക്കുന്നത്. എന്താണ് ഭരണഘടനയെന്നും അത് ഒരു സമൂഹത്തിൽ നിർവ്വഹിക്കുന്ന പ്രധാന ചുമതലകൾ എന്താണെന്നും അധികാരം എങ്ങനെയാണ് വിഭജിക്കപ്പെട്ടിരിക്കുന്നത് എന്നും ഇത് വിവരിക്കുന്നു. കൂടാതെ, ഭരണഘടനാ നിർമ്മാണ സഭ (Constituent Assembly) എങ്ങനെയാണ് ഇന്ത്യൻ ഭരണഘടന രൂപീകരിച്ചത് എന്നും അതിന്റെ ശില്പികളെ നയിച്ച മൂല്യങ്ങൾ എന്തായിരുന്നു എന്നും ഏതുതരത്തിലുള്ള സ്ഥാപനപരമായ ക്രമീകരണങ്ങളാണ് അവർ ഉണ്ടാക്കിയത് എന്നും ഈ അധ്യായം വിശദീകരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Constitution', ml: 'ഭരണഘടന (Constitution)'}, {en: 'A compact document or set of documents containing fundamental principles according to which a state is governed.', ml: 'ഒരു രാജ്യം ഭരിക്കപ്പെടേണ്ട അടിസ്ഥാന നിയമങ്ങളും തത്വങ്ങളും അടങ്ങിയ രേഖയെ ഭരണഘടന എന്ന് വിളിക്കുന്നു.'}, {en: 'The Constitution of India', ml: 'ഇന്ത്യൻ ഭരണഘടന (The Constitution of India)'}],
          [{en: 'Constituent Assembly', ml: 'ഭരണഘടനാ നിർമ്മാണ സഭ (Constituent Assembly)'}, {en: 'The representative body of indirectly elected members tasked with drafting the constitution.', ml: 'ഭരണഘടന തയ്യാറാക്കുന്നതിനായി പരോക്ഷമായി തിരഞ്ഞെടുക്കപ്പെട്ട അംഗങ്ങൾ അടങ്ങിയ പ്രതിനിധി സഭ.'}, {en: 'Held its first sitting on 9 December 1946.', ml: '1946 ഡിസംബർ 9-ന് ആദ്യ യോഗം ചേർന്നു.'}],
          [{en: 'Public Reason', ml: 'പൊതുയുക്തി (Public Reason)'}, {en: 'The act of engaging in discussion and reasoned argument, giving principled reasons to others rather than just advancing narrow personal interests.', ml: 'വ്യക്തിപരമായ താൽപ്പര്യങ്ങൾക്കുപരിയായി യുക്തിസഹമായ വാദങ്ങളിലൂടെയും ചർച്ചകളിലൂടെയും പൊതുവായ തീരുമാനങ്ങളിൽ എത്തുന്ന രീതി.'}, {en: 'Rigorous debates in the Constituent Assembly.', ml: 'ഭരണഘടനാ നിർമ്മാണ സഭയിലെ ഗൗരവകരമായ സംവാദങ്ങൾ.'}],
          [{en: 'Objectives Resolution', ml: 'ലക്ഷ്യപ്രമേയം (Objectives Resolution)'}, {en: 'A resolution that encapsulated the aspirations, values, and fundamental commitments behind the Constitution.', ml: 'ഭരണഘടനയുടെ മൂല്യങ്ങൾ, ലക്ഷ്യങ്ങൾ, അടിസ്ഥാനപരമായ പ്രതിബദ്ധതകൾ എന്നിവ ഉൾക്കൊള്ളുന്ന പ്രമേയം.'}, {en: 'Moved by Jawaharlal Nehru in 1946.', ml: '1946-ൽ ജവഹർലാൽ നെഹ്‌റു അവതരിപ്പിച്ചു.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 The Functions of a Constitution', ml: '3.1 ഭരണഘടനയുടെ ചുമതലകൾ (The Functions of a Constitution)' },
      { type: 'p', en: 'A constitution performs several critical roles to ensure society functions smoothly and fairly:', ml: 'സമൂഹം സുഗമമായും നീതിപൂർവ്വമായും പ്രവർത്തിക്കുന്നുവെന്ന് ഉറപ്പാക്കാൻ ഒരു ഭരണഘടന നിരവധി സുപ്രധാന പങ്കുകൾ വഹിക്കുന്നു:' },
      { type: 'ul', items: [
        { en: 'Allows Coordination and Assurance: It provides a set of basic, legally enforceable rules that allow for minimal coordination amongst diverse members of a society.', ml: 'ഏകോപനവും ഉറപ്പും നൽകുന്നു (Allows Coordination and Assurance): സമൂഹത്തിലെ വിവിധ വിഭാഗങ്ങൾക്കിടയിൽ കുറഞ്ഞ അളവിലെങ്കിലും ഏകോപനം സാധ്യമാക്കുന്നതിന് നിയമപരമായ അടിസ്ഥാന നിയമങ്ങൾ നൽകുന്നു.' },
        { en: 'Specifies Decision-Making Powers: It specifies the basic allocation of power in a society and decides who has the authority to make laws and how the government will be constituted.', ml: 'തീരുമാനമെടുക്കാനുള്ള അധികാരം നിശ്ചയിക്കുന്നു (Specifies Decision-Making Powers): സമൂഹത്തിൽ അധികാരം എങ്ങനെ വിഭജിക്കണമെന്നും നിയമങ്ങൾ നിർമ്മിക്കാൻ ആർക്കാണ് അധികാരമെന്നും ഗവൺമെന്റ് എങ്ങനെ രൂപീകരിക്കണമെന്നും ഇത് നിശ്ചയിക്കുന്നു.' },
        { en: 'Limits the Powers of Government: It sets fundamental limits on what a government can impose on its citizens, most commonly by specifying Fundamental Rights that cannot be violated.', ml: 'ഗവൺമെന്റിന്റെ അധികാരം പരിമിതപ്പെടുത്തുന്നു (Limits the Powers of Government): പൗരന്മാരുടെ മേൽ ഗവൺമെന്റിന് ചുമത്താവുന്ന കാര്യങ്ങളിൽ അടിസ്ഥാനപരമായ നിയന്ത്രണങ്ങൾ ഏർപ്പെടുത്തുന്നു. ഇതിനായി ലംഘിക്കാൻ പാടില്ലാത്ത മൗലികാവകാശങ്ങൾ (Fundamental Rights) ഭരണഘടന ഉറപ്പുനൽകുന്നു.' },
        { en: 'Fulfills Aspirations and Goals: It enables and empowers the government to take positive measures to fulfill the aspirations of a society and create conditions for a just society (e.g., ending caste or racial discrimination).', ml: 'ലക്ഷ്യങ്ങളും അഭിലാഷങ്ങളും നിറവേറ്റുന്നു (Fulfills Aspirations and Goals): സമൂഹത്തിന്റെ അഭിലാഷങ്ങൾ നിറവേറ്റുന്നതിനും നീതിയുക്തമായ ഒരു സമൂഹം കെട്ടിപ്പടുക്കുന്നതിനും ആവശ്യമായ നടപടികൾ സ്വീകരിക്കാൻ ഗവൺമെന്റിനെ ശാക്തീകരിക്കുന്നു (ഉദാഹരണത്തിന് ജാതിവിവേചനം അവസാനിപ്പിക്കുക).' },
        { en: 'Expresses Fundamental Identity: It gives people a collective political and moral identity by defining overarching frameworks and fundamental values.', ml: 'അടിസ്ഥാന വ്യക്തിത്വം പ്രകടിപ്പിക്കുന്നു (Expresses Fundamental Identity): ജനങ്ങൾക്ക് ഒരു കൂട്ടായ രാഷ്ട്രീയ-ധാർമ്മിക വ്യക്തിത്വം നൽകുന്നു.' }
      ]},

      { type: 'h3', en: '3.2 The Authority of a Constitution', ml: '3.2 ഭരണഘടനയുടെ അധികാരം (The Authority of a Constitution)' },
      { type: 'p', en: 'The effectiveness and real-world impact of a constitution depend on three key factors:', ml: 'ഭരണഘടനയുടെ ഫലപ്രാപ്തിയും സ്വാധീനവും പ്രധാനമായും മൂന്ന് ഘടകങ്ങളെ ആശ്രയിച്ചിരിക്കുന്നു:' },
      { type: 'ul', items: [
        { en: 'Mode of Promulgation: A constitution is successful when crafted by credible, popular leaders who command public respect. The Indian Constitution drew immense legitimacy from the nationalist movement.', ml: 'പ്രഖ്യാപന രീതി (Mode of Promulgation): ജനവിശ്വാസമുള്ള നേതാക്കൾ ഭരണഘടന നിർമ്മിക്കുമ്പോഴാണ് അത് വിജയിക്കുന്നത്. ഇന്ത്യൻ ഭരണഘടനയ്ക്ക് ദേശീയ പ്രസ്ഥാനത്തിൽ നിന്ന് വലിയ തോതിലുള്ള അംഗീകാരം ലഭിച്ചു.' },
        { en: 'Substantive Provisions: It must give everyone in society a reason to go along with its provisions by preserving the freedom and equality of all its members.', ml: 'ഉള്ളടക്കത്തിലെ സവിശേഷതകൾ (Substantive Provisions): സമൂഹത്തിലെ എല്ലാ വിഭാഗങ്ങൾക്കും ഭരണഘടനയോട് കൂറ് കാണിക്കാൻ തക്കവണ്ണം അവരുടെ സ്വാതന്ത്ര്യവും സമത്വവും ഉറപ്പാക്കുന്ന വ്യവസ്ഥകൾ അതിൽ ഉണ്ടായിരിക്കണം.' },
        { en: 'Balanced Institutional Design: Power must be intelligently fragmented across different institutions (e.g., Legislature, Executive, Judiciary, Election Commission) so that no single group can subvert the constitution. It must also strike a balance between being authoritative (rigid) and adaptable (flexible).', ml: 'സന്തുലിതമായ സ്ഥാപന രൂപകല്പന (Balanced Institutional Design): അധികാരം ഒരു സ്ഥലത്ത് മാത്രം കേന്ദ്രീകരിക്കാതെ വിവിധ സ്ഥാപനങ്ങൾക്കിടയിൽ (നിയമസഭ, കാര്യനിർവ്വഹണ വിഭാഗം, നീതിന്യായ വിഭാഗം, തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ) വിഭജിക്കണം. കൂടാതെ, ഭരണഘടന കണിശമായതും (Rigid) അതേസമയം മാറ്റങ്ങൾ ഉൾക്കൊള്ളാൻ കഴിയുന്നവിധം അയവുള്ളതും (Flexible) ആയിരിക്കണം.' }
      ]},

      { type: 'h3', en: '3.3 Making of the Indian Constitution', ml: '3.3 ഇന്ത്യൻ ഭരണഘടനയുടെ രൂപീകരണം (Making of the Indian Constitution)' },
      { type: 'p', en: 'The Indian Constitution was drafted under a specific structural plan (Cabinet Mission Plan):', ml: 'ക്യാബിനറ്റ് മിഷൻ പ്ലാൻ (Cabinet Mission Plan) പ്രകാരമാണ് ഇന്ത്യൻ ഭരണഘടന തയ്യാറാക്കിയത്:' },
      { type: 'ul', items: [
        { en: 'Seats were allotted to Provinces and Princely States proportional to their population (ratio of roughly 1:10,00,000).', ml: 'സംസ്ഥാനങ്ങൾക്കും നാട്ടുരാജ്യങ്ങൾക്കും അവരുടെ ജനസംഖ്യാനുപാതത്തിലാണ് സീറ്റുകൾ അനുവദിച്ചത് (ഏകദേശം 10 ലക്ഷം പേർക്ക് 1 സീറ്റ് എന്ന ക്രമത്തിൽ).' },
        { en: 'Provinces elected 292 members, while Princely States were allotted a minimum of 93 seats.', ml: 'ബ്രിട്ടീഷ് പ്രവിശ്യകളിൽ നിന്ന് 292 അംഗങ്ങളും നാട്ടുരാജ്യങ്ങളിൽ നിന്ന് 93 അംഗങ്ങളും ഉണ്ടായിരുന്നു.' },
        { en: 'Provincial seats were distributed among Muslims, Sikhs, and General communities in proportion to their population.', ml: 'പ്രവിശ്യകളിലെ സീറ്റുകൾ മുസ്ലീങ്ങൾ, സിക്കുകൾ, ജനറൽ വിഭാഗം എന്നിങ്ങനെ ജനസംഖ്യാനുപാതത്തിൽ വീതിച്ചു.' }
      ]},

      { type: 'h3', en: 'Process Table: Timeline of Constitution Making', ml: 'പ്രക്രിയ പട്ടിക: ഭരണഘടനാ നിർമ്മാണത്തിന്റെ നാഴികക്കല്ലുകൾ (Process Table: Timeline of Constitution Making)' },
      { type: 'table', tableData: {
        headers: [{en: 'Step', ml: 'ഘട്ടം (Step)'}, {en: 'Event', ml: 'സംഭവം (Event)'}, {en: 'Description', ml: 'വിവരണം (Description)'}],
        rows: [
          [{en: '1', ml: '1'}, {en: 'First Sitting', ml: 'ആദ്യ യോഗം (First Sitting)'}, {en: 'The Constituent Assembly for undivided India met on 9 December 1946.', ml: 'അവിഭജിത ഇന്ത്യയുടെ ഭരണഘടനാ നിർമ്മാണ സഭ 1946 ഡിസംബർ 9-ന് ആദ്യമായി യോഗം ചേർന്നു.'}],
          [{en: '2', ml: '2'}, {en: 'Reassembly', ml: 'പുനഃസമാഗമം (Reassembly)'}, {en: 'Reassembled for divided India on 14 August 1947. Membership reduced to 299.', ml: 'വിഭജിത ഇന്ത്യയ്ക്കായി 1947 ഓഗസ്റ്റ് 14-ന് വീണ്ടും ചേർന്നു. അംഗസംഖ്യ 299 ആയി കുറഞ്ഞു.'}],
          [{en: '3', ml: '3'}, {en: 'Adoption', ml: 'അംഗീകാരം (Adoption)'}, {en: 'The Constitution was formally adopted on 26 November 1949.', ml: '1949 നവംബർ 26-ന് ഭരണഘടന ഔദ്യോഗികമായി അംഗീകരിച്ചു.'}],
          [{en: '4', ml: '4'}, {en: 'Signing', ml: 'ഒപ്പിടൽ (Signing)'}, {en: '284 members appended their signatures on 24 January 1950.', ml: '1950 ജനുവരി 24-ന് 284 അംഗങ്ങൾ ഭരണഘടനയിൽ ഒപ്പുവെച്ചു.'}],
          [{en: '5', ml: '5'}, {en: 'Enforcement', ml: 'നടപ്പിലാക്കൽ (Enforcement)'}, {en: 'The Constitution officially came into force on 26 January 1950.', ml: '1950 ജനുവരി 26-ന് ഭരണഘടന നിലവിൽ വന്നു.'}]
        ]
      }},

      { type: 'h3', en: '3.4 Procedures and the Principle of Deliberation', ml: '3.4 നടപടിക്രമങ്ങളും ചർച്ചാ തത്വങ്ങളും (Procedures and the Principle of Deliberation)' },
      { type: 'ul', items: [
        { en: 'Committees: The Assembly had eight major Committees chaired by leaders like Nehru, Rajendra Prasad, Patel, or Ambedkar.', ml: 'കമ്മിറ്റികൾ (Committees): സഭയ്ക്ക് എട്ട് പ്രധാന കമ്മിറ്റികൾ ഉണ്ടായിരുന്നു. നെഹ്‌റു, രാജേന്ദ്ര പ്രസാദ്, പട്ടേൽ, അംബേദ്കർ തുടങ്ങിയവരായിരുന്നു ഇവയുടെ അധ്യക്ഷന്മാർ.' },
        { en: 'Debate and Consensus: Provisions were debated by the entire Assembly with an attempt to reach consensus.', ml: 'സംവാദവും സമന്വയവും (Debate and Consensus): ഭരണഘടനാ വ്യവസ്ഥകൾ സഭയിൽ വിശദമായി ചർച്ച ചെയ്യുകയും പരമാവധി സമവായത്തിൽ എത്താൻ ശ്രമിക്കുകയും ചെയ്തു.' },
        { en: 'Universal Suffrage: The introduction of universal suffrage (voting rights for all citizens reaching a certain age) was the only provision passed without virtually any debate.', ml: 'സാർവ്വത്രിക വോട്ടവകാശം (Universal Suffrage): ഒരു വിവേചനവുമില്ലാതെ എല്ലാ പൗരന്മാർക്കും വോട്ടവകാശം നൽകുന്ന ഈ വ്യവസ്ഥ മാത്രമാണ് കാര്യമായ തർക്കങ്ങളില്ലാതെ പാസാക്കിയത്.' }
      ]},

      { type: 'h3', en: '3.5 Provisions Adapted from Other Countries', ml: '3.5 മറ്റു രാജ്യങ്ങളിൽ നിന്ന് കടമെടുത്ത വ്യവസ്ഥകൾ (Provisions Adapted from Other Countries)' },
      { type: 'table', tableData: {
        headers: [{en: 'Source Constitution', ml: 'സ്രോതസ്സ് (Source Constitution)'}, {en: 'Provisions Adapted', ml: 'കടമെടുത്ത വ്യവസ്ഥകൾ (Provisions Adapted)'}],
        rows: [
          [{en: 'British (ബ്രിട്ടീഷ്)', ml: 'ബ്രിട്ടീഷ് (British)'}, {en: 'First Past the Post system, Parliamentary Form of Government, Rule of Law, Institution of Speaker, Law-making procedure.', ml: 'ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ് രീതി, പാർലമെന്ററി ഭരണരീതി, നിയമവാഴ്ച, സ്പീക്കർ പദവി, നിയമനിർമ്മാണ രീതി.'}],
          [{en: 'United States (യുണൈറ്റഡ് സ്റ്റേറ്റ്സ്)', ml: 'യുണൈറ്റഡ് സ്റ്റേറ്റ്സ് (United States)'}, {en: 'Charter of Fundamental Rights, Power of Judicial Review, Independence of the Judiciary.', ml: 'മൗലികാവകാശങ്ങൾ, ജുഡീഷ്യൽ റിവ്യൂ, സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ.'}],
          [{en: 'Irish (ഐറിഷ്)', ml: 'ഐറിഷ് (Irish)'}, {en: 'Directive Principles of State Policy.', ml: 'നിർദ്ദേശക തത്വങ്ങൾ (Directive Principles of State Policy).'}],
          [{en: 'French (ഫ്രഞ്ച്)', ml: 'ഫ്രഞ്ച് (French)'}, {en: 'Principles of Liberty, Equality, and Fraternity.', ml: 'സ്വാതന്ത്ര്യം, സമത്വം, സാഹോദര്യം എന്നീ തത്വങ്ങൾ.'}],
          [{en: 'Canadian (കനേഡിയൻ)', ml: 'കനേഡിയൻ (Canadian)'}, {en: 'Quasi-federal form (strong central government), Residual Powers.', ml: 'അർദ്ധ-ഫെഡറൽ രീതി (ശക്തമായ കേന്ദ്ര ഗവൺമെന്റ്), അവശിഷ്ട അധികാരങ്ങൾ (Residual Powers).'}]
        ]
      }},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'The Constitution fragments power horizontally across the Legislature, Executive, and Judiciary.', ml: 'നിയമസഭ, കാര്യനിർവ്വഹണ വിഭാഗം, നീതിന്യായ വിഭാഗം എന്നിവയ്ക്കിടയിൽ അധികാരം തിരശ്ചീനമായി (Horizontally) വിഭജിച്ചിരിക്കുന്നു.' },
        { en: 'The Constituent Assembly met for 166 days, spread over two years and eleven months.', ml: 'രണ്ടു വർഷവും 11 മാസവും 18 ദിവസവും എടുത്താണ് ഭരണഘടന പൂർത്തിയാക്കിയത്. സഭ 166 ദിവസം യോഗം ചേർന്നു.' },
        { en: 'Objectives Resolution formed the moral commitment to establish a government fulfilling the promises of the nationalist movement.', ml: 'ദേശീയ പ്രസ്ഥാനത്തിന്റെ വാഗ്ദാനങ്ങൾ നിറവേറ്റുന്ന ഒരു ഗവൺമെന്റ് സ്ഥാപിക്കാനുള്ള ധാർമ്മികമായ പ്രതിബദ്ധതയായിരുന്നു ലക്ഷ്യപ്രമേയം (Objectives Resolution).' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'A constitution provides basic rules for coordination and limits government authority.', ml: 'ഭരണഘടന ഏകോപനത്തിനുള്ള അടിസ്ഥാന നിയമങ്ങൾ നൽകുകയും ഗവൺമെന്റ് അധികാരം പരിമിതപ്പെടുത്തുകയും ചെയ്യുന്നു.' },
        { en: 'Indian Constitution was crafted by a Constituent Assembly under the Cabinet Mission Plan.', ml: 'ക്യാബിനറ്റ് മിഷൻ പ്ലാൻ പ്രകാരം രൂപീകരിച്ച ഭരണഘടനാ നിർമ്മാണ സഭയാണ് ഇന്ത്യൻ ഭരണഘടന നിർമ്മിച്ചത്.' },
        { en: 'Key provisions were adapted from British, American, Irish, French, and Canadian constitutions.', ml: 'ബ്രിട്ടീഷ്, അമേരിക്കൻ, ഐറിഷ്, ഫ്രഞ്ച്, കനേഡിയൻ ഭരണഘടനകളിൽ നിന്ന് പ്രധാന വ്യവസ്ഥകൾ കടമെടുത്തിട്ടുണ്ട്.' }
      ]}
    ]
  },
  quiz: [
    {
      q_id: "ps-c1-q1",
      type: "mcq",
      stem: { en: "When did the Constituent Assembly for undivided India meet for the first time?", ml: "അവിഭജിത ഇന്ത്യയുടെ ഭരണഘടനാ നിർമ്മാണ സഭ ആദ്യമായി യോഗം ചേർന്നത് എന്ന്?" },
      options: [
        { k: "A", text: { en: "15 August 1947", ml: "1947 ഓഗസ്റ്റ് 15" } },
        { k: "B", text: { en: "26 January 1950", ml: "1950 ജനുവരി 26" } },
        { k: "C", text: { en: "9 December 1946", ml: "1946 ഡിസംബർ 9" } },
        { k: "D", text: { en: "26 November 1949", ml: "1949 നവംബർ 26" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The first sitting was held on 9 December 1946.", ml: "ആദ്യ യോഗം 1946 ഡിസംബർ 9-നാണ് നടന്നത്." }
    },
    {
      q_id: "ps-c1-q2",
      type: "mcq",
      stem: { en: "Who moved the 'Objectives Resolution' in the Constituent Assembly?", ml: "ഭരണഘടനാ നിർമ്മാണ സഭയിൽ 'ലക്ഷ്യപ്രമേയം' (Objectives Resolution) അവതരിപ്പിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Dr. B.R. Ambedkar", ml: "ഡോ. ബി.ആർ. അംബേദ്കർ" } },
        { k: "B", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } },
        { k: "C", text: { en: "Sardar Patel", ml: "സർദാർ പട്ടേൽ" } },
        { k: "D", text: { en: "Dr. Rajendra Prasad", ml: "ഡോ. രാജേന്ദ്ര പ്രസാദ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Jawaharlal Nehru moved the Objectives Resolution in 1946.", ml: "1946-ൽ ജവഹർലാൽ നെഹ്‌റുവാണ് ലക്ഷ്യപ്രമേയം അവതരിപ്പിച്ചത്." }
    },
    {
      q_id: "ps-c1-q3",
      type: "mcq",
      stem: { en: "Which provision was passed by the Constituent Assembly without any debate?", ml: "ഭരണഘടനാ നിർമ്മാണ സഭയിൽ യാതൊരു ചർച്ചയും കൂടാതെ പാസാക്കിയ വ്യവസ്ഥ ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" } },
        { k: "B", text: { en: "Universal Suffrage", ml: "സാർവ്വത്രിക വോട്ടവകാശം" } },
        { k: "C", text: { en: "Parliamentary System", ml: "പാർലമെന്ററി ഭരണരീതി" } },
        { k: "D", text: { en: "Directive Principles", ml: "നിർദ്ദേശക തത്വങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Introduction of universal suffrage was the only provision passed without virtually any debate.", ml: "സാർവ്വത്രിക വോട്ടവകാശം മാത്രമാണ് കാര്യമായ ചർച്ചകളില്ലാതെ പാസാക്കിയത്." }
    },
    {
      q_id: "ps-c1-q4",
      type: "mcq",
      stem: { en: "The 'Directive Principles of State Policy' were borrowed from which constitution?", ml: "'നിർദ്ദേശക തത്വങ്ങൾ' കടമെടുത്തത് ഏത് രാജ്യത്തിന്റെ ഭരണഘടനയിൽ നിന്നാണ്?" },
      options: [
        { k: "A", text: { en: "British", ml: "ബ്രിട്ടീഷ്" } },
        { k: "B", text: { en: "United States", ml: "യുണൈറ്റഡ് സ്റ്റേറ്റ്സ്" } },
        { k: "C", text: { en: "Irish", ml: "ഐറിഷ്" } },
        { k: "D", text: { en: "Canadian", ml: "കനേഡിയൻ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Directive Principles were adapted from the Irish Constitution.", ml: "ഐറിഷ് ഭരണഘടനയിൽ നിന്നാണ് നിർദ്ദേശക തത്വങ്ങൾ സ്വീകരിച്ചത്." }
    },
    {
      q_id: "ps-c1-q5",
      type: "mcq",
      stem: { en: "The ratio of seats allotted to population in the Constituent Assembly was roughly:", ml: "ഭരണഘടനാ നിർമ്മാണ സഭയിലെ ഓരോ സീറ്റും എത്ര ജനസംഖ്യയെയാണ് പ്രതിനിധീകരിച്ചിരുന്നത്?" },
      options: [
        { k: "A", text: { en: "1 : 1,00,000", ml: "1 : 1,00,000" } },
        { k: "B", text: { en: "1 : 5,00,000", ml: "1 : 5,00,000" } },
        { k: "C", text: { en: "1 : 10,00,000", ml: "1 : 10,00,000" } },
        { k: "D", text: { en: "1 : 20,00,000", ml: "1 : 20,00,000" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The ratio was roughly 1 seat for every 10 lakh (1 million) people.", ml: "ഏകദേശം പത്തു ലക്ഷം പേർക്ക് ഒരു സീറ്റ് എന്നതായിരുന്നു അനുപാതം." }
    },
    {
      q_id: "ps-c1-q6",
      type: "mcq",
      stem: { en: "Which country's constitution provided the 'First Past the Post' system?", ml: "'ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ്' (First Past the Post) തിരഞ്ഞെടുപ്പ് രീതി കടമെടുത്തത് ഏത് രാജ്യത്തു നിന്നാണ്?" },
      options: [
        { k: "A", text: { en: "United States", ml: "യുണൈറ്റഡ് സ്റ്റേറ്റ്സ്" } },
        { k: "B", text: { en: "British", ml: "ബ്രിട്ടീഷ്" } },
        { k: "C", text: { en: "Canadian", ml: "കനേഡിയൻ" } },
        { k: "D", text: { en: "French", ml: "ഫ്രഞ്ച്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The FPTP system was adapted from the British Constitution.", ml: "ബ്രിട്ടീഷ് ഭരണഘടനയിൽ നിന്നാണ് ഈ രീതി സ്വീകരിച്ചത്." }
    },
    {
      q_id: "ps-c1-q7",
      type: "mcq",
      stem: { en: "On which date was the Indian Constitution formally adopted?", ml: "ഇന്ത്യൻ ഭരണഘടന ഔദ്യോഗികമായി അംഗീകരിച്ച (Adopted) തീയതി ഏത്?" },
      options: [
        { k: "A", text: { en: "26 January 1950", ml: "1950 ജനുവരി 26" } },
        { k: "B", text: { en: "15 August 1947", ml: "1947 ഓഗസ്റ്റ് 15" } },
        { k: "C", text: { en: "26 November 1949", ml: "1949 നവംബർ 26" } },
        { k: "D", text: { en: "24 January 1950", ml: "1950 ജനുവരി 24" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The Constitution was adopted on 26 November 1949.", ml: "1949 നവംബർ 26-നാണ് ഭരണഘടന അംഗീകരിച്ചത്." }
    },
    {
      q_id: "ps-c1-q8",
      type: "mcq",
      stem: { en: "How many members were present to sign the Constitution on 24 January 1950?", ml: "1950 ജനുവരി 24-ന് ഭരണഘടനയിൽ ഒപ്പുവെക്കാൻ എത്ര അംഗങ്ങളാണ് ഉണ്ടായിരുന്നത്?" },
      options: [
        { k: "A", text: { en: "299", ml: "299" } },
        { k: "B", text: { en: "284", ml: "284" } },
        { k: "C", text: { en: "389", ml: "389" } },
        { k: "D", text: { en: "272", ml: "272" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "284 members were present to sign the document.", ml: "284 അംഗങ്ങളാണ് അന്ന് ഒപ്പിട്ടത്." }
    },
    {
      q_id: "ps-c1-q9",
      type: "mcq",
      stem: { en: "The 'Judicial Review' and 'Independence of Judiciary' were borrowed from:", ml: "'ജുഡീഷ്യൽ റിവ്യൂ', 'സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ' എന്നിവ ഏത് രാജ്യത്തു നിന്നും കടമെടുത്തതാണ്?" },
      options: [
        { k: "A", text: { en: "British Constitution", ml: "ബ്രിട്ടീഷ് ഭരണഘടന" } },
        { k: "B", text: { en: "French Constitution", ml: "ഫ്രഞ്ച് ഭരണഘടന" } },
        { k: "C", text: { en: "Irish Constitution", ml: "ഐറിഷ് ഭരണഘടന" } },
        { k: "D", text: { en: "US Constitution", ml: "യുഎസ് ഭരണഘടന" } }
      ],
      answer: "D",
      difficulty: "medium",
      explanation: { en: "These provisions were adapted from the US Constitution.", ml: "അമേരിക്കൻ ഭരണഘടനയിൽ നിന്നാണ് ഇവ സ്വീകരിച്ചത്." }
    },
    {
      q_id: "ps-c1-q10",
      type: "mcq",
      stem: { en: "Under which plan was the Constituent Assembly formed?", ml: "ഏത് പദ്ധതി പ്രകാരമാണ് ഭരണഘടനാ നിർമ്മാണ സഭ രൂപീകരിച്ചത്?" },
      options: [
        { k: "A", text: { en: "Mountbatten Plan", ml: "മൗണ്ട്ബാറ്റൺ പ്ലാൻ" } },
        { k: "B", text: { en: "Cabinet Mission Plan", ml: "ക്യാബിനറ്റ് മിഷൻ പ്ലാൻ" } },
        { k: "C", text: { en: "Cripps Mission", ml: "ക്രിപ്‌സ് മിഷൻ" } },
        { k: "D", text: { en: "Simon Commission", ml: "സൈമൺ കമ്മീഷൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The assembly was formed according to the Cabinet Mission Plan.", ml: "ക്യാബിനറ്റ് മിഷൻ പ്ലാൻ പ്രകാരമാണ് സഭ രൂപീകരിച്ചത്." }
    },
    {
      q_id: "ps-c1-q11",
      type: "mcq",
      stem: { en: "The idea of 'Residual Powers' was taken from which constitution?", ml: "'അവശിഷ്ട അധികാരങ്ങൾ' (Residual Powers) എന്ന ആശയം ഏത് രാജ്യത്തു നിന്നാണ് എടുത്തത്?" },
      options: [
        { k: "A", text: { en: "Canadian", ml: "കനേഡിയൻ" } },
        { k: "B", text: { en: "Australian", ml: "ഓസ്‌ട്രേലിയൻ" } },
        { k: "C", text: { en: "United States", ml: "യുണൈറ്റഡ് സ്റ്റേറ്റ്സ്" } },
        { k: "D", text: { en: "British", ml: "ബ്രിട്ടീഷ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The idea of residual powers for the center was taken from Canada.", ml: "കനേഡിയൻ ഭരണഘടനയിൽ നിന്നാണ് ഈ ആശയം സ്വീകരിച്ചത്." }
    },
    {
      q_id: "ps-c1-q12",
      type: "mcq",
      stem: { en: "The Constituent Assembly reassembled for divided India on:", ml: "വിഭജിത ഇന്ത്യയ്ക്കായി ഭരണഘടനാ നിർമ്മാണ സഭ വീണ്ടും ചേർന്നത് എന്ന്?" },
      options: [
        { k: "A", text: { en: "26 January 1950", ml: "1950 ജനുവരി 26" } },
        { k: "B", text: { en: "14 August 1947", ml: "1947 ഓഗസ്റ്റ് 14" } },
        { k: "C", text: { en: "3 June 1947", ml: "1947 ജൂൺ 3" } },
        { k: "D", text: { en: "15 August 1947", ml: "1947 ഓഗസ്റ്റ് 15" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It reassembled for divided India on 14 August 1947.", ml: "1947 ഓഗസ്റ്റ് 14-നാണ് സഭ വീണ്ടും ചേർന്നത്." }
    },
    {
      q_id: "ps-c1-q13",
      type: "mcq",
      stem: { en: "The 'Liberty, Equality, and Fraternity' principles were taken from:", ml: "'സ്വാതന്ത്ര്യം, സമത്വം, സാഹോദര്യം' എന്നീ തത്വങ്ങൾ കടമെടുത്തത് എവിടെ നിന്നാണ്?" },
      options: [
        { k: "A", text: { en: "US Constitution", ml: "യുഎസ് ഭരണഘടന" } },
        { k: "B", text: { en: "French Constitution", ml: "ഫ്രഞ്ച് ഭരണഘടന" } },
        { k: "C", text: { en: "Russian Constitution", ml: "റഷ്യൻ ഭരണഘടന" } },
        { k: "D", text: { en: "Irish Constitution", ml: "ഐറിഷ് ഭരണഘടന" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "These were adapted from the French Constitution.", ml: "ഫ്രഞ്ച് ഭരണഘടനയിൽ നിന്നാണ് ഇവ സ്വീകരിച്ചത്." }
    },
    {
      q_id: "ps-c1-q14",
      type: "mcq",
      stem: { en: "How many days did the Constituent Assembly meet in total?", ml: "ഭരണഘടനാ നിർമ്മാണ സഭ ആകെ എത്ര ദിവസമാണ് യോഗം ചേർന്നത്?" },
      options: [
        { k: "A", text: { en: "100 days", ml: "100 ദിവസം" } },
        { k: "B", text: { en: "166 days", ml: "166 ദിവസം" } },
        { k: "C", text: { en: "365 days", ml: "365 ദിവസം" } },
        { k: "D", text: { en: "200 days", ml: "200 ദിവസം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The assembly met for 166 days over nearly three years.", ml: "ഏകദേശം മൂന്ന് വർഷത്തിനിടെ 166 ദിവസമാണ് സഭ യോഗം ചേർന്നത്." }
    },
    {
      q_id: "ps-c1-q15",
      type: "mcq",
      stem: { en: "What is the function of a constitution regarding the allocation of power?", ml: "അധികാര വിഭജനത്തെ സംബന്ധിച്ച ഭരണഘടനയുടെ ചുമതല എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Concentrate all power in the Judiciary", ml: "എല്ലാ അധികാരവും നീതിന്യായ വിഭാഗത്തിൽ കേന്ദ്രീകരിക്കുക" } },
        { k: "B", text: { en: "Fragment power to prevent any single group from subverting it", ml: "ഒരു വിഭാഗം മാത്രം അധികാരം ദുരുപയോഗം ചെയ്യാതിരിക്കാൻ അധികാരം വിഭജിക്കുക" } },
        { k: "C", text: { en: "Give all power to the Prime Minister", ml: "എല്ലാ അധികാരവും പ്രധാനമന്ത്രിക്ക് നൽകുക" } },
        { k: "D", text: { en: "Abolish the power of states", ml: "സംസ്ഥാനങ്ങളുടെ അധികാരം ഇല്ലാതാക്കുക" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Balanced institutional design fragments power to ensure checks and balances.", ml: "അധികാരം ഒരു സ്ഥലത്ത് കേന്ദ്രീകരിക്കാതെ വിവിധ സ്ഥാപനങ്ങൾക്കിടയിൽ വിഭജിക്കുന്നത് ഭരണഘടനയുടെ ഒരു പ്രധാന ചുമതലയാണ്." }
    },
    {
      q_id: "ps-c1-q16",
      type: "mcq",
      stem: { en: "After partition, the membership of the Constituent Assembly was reduced to:", ml: "വിഭജനത്തിന് ശേഷം ഭരണഘടനാ നിർമ്മാണ സഭയിലെ അംഗസംഖ്യ എത്രയായി കുറഞ്ഞു?" },
      options: [
        { k: "A", text: { en: "389", ml: "389" } },
        { k: "B", text: { en: "299", ml: "299" } },
        { k: "C", text: { en: "250", ml: "250" } },
        { k: "D", text: { en: "300", ml: "300" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The membership was reduced to 299 after the partition of India.", ml: "വിഭജനത്തിന് ശേഷം അംഗസംഖ്യ 299 ആയി കുറഞ്ഞു." }
    },
    {
      q_id: "ps-c1-q17",
      type: "mcq",
      stem: { en: "Which of the following describes 'Public Reason'?", ml: "താഴെ പറയുന്നവയിൽ 'പൊതുയുക്തി' (Public Reason) എന്നതിനെ വിശേഷിപ്പിക്കുന്നത് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Advancing narrow personal interests", ml: "വ്യക്തിപരമായ താൽപ്പര്യങ്ങൾ സംരക്ഷിക്കൽ" } },
        { k: "B", text: { en: "Engaging in reasoned argument for common goals", ml: "പൊതുവായ ലക്ഷ്യങ്ങൾക്കായി യുക്തിസഹമായി സംവദിക്കൽ" } },
        { k: "C", text: { en: "Ignoring the views of minority groups", ml: "ന്യൂനപക്ഷങ്ങളുടെ അഭിപ്രായങ്ങൾ അവഗണിച്ചാൽ" } },
        { k: "D", text: { en: "Military command", ml: "സൈനിക ഉത്തരവ്" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Public reason involves principled discussion rather than narrow interests.", ml: "വ്യക്തിപരമായ താൽപ്പര്യങ്ങൾക്കുപരിയായി യുക്തിസഹമായ വാദങ്ങളിലൂടെ തീരുമാനങ്ങളിൽ എത്തുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-c1-q18",
      type: "mcq",
      stem: { en: "The first president of the Constituent Assembly was:", ml: "ഭരണഘടനാ നിർമ്മാണ സഭയുടെ ആദ്യത്തെ അധ്യക്ഷൻ ആരായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Dr. B.R. Ambedkar", ml: "ഡോ. ബി.ആർ. അംബേദ്കർ" } },
        { k: "B", text: { en: "Sardar Patel", ml: "സർദാർ പട്ടേൽ" } },
        { k: "C", text: { en: "Dr. Rajendra Prasad", ml: "ഡോ. രാജേന്ദ്ര പ്രസാദ്" } },
        { k: "D", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Dr. Rajendra Prasad was the permanent chairman/president of the Assembly.", ml: "ഡോ. രാജേന്ദ്ര പ്രസാദായിരുന്നു സഭയുടെ സ്ഥിരം അധ്യക്ഷൻ." }
    },
    {
      q_id: "ps-c1-q19",
      type: "mcq",
      stem: { en: "A constitution sets limits on government power primarily by specifying:", ml: "ഗവൺമെന്റ് അധികാരം പരിമിതപ്പെടുത്താൻ ഭരണഘടന പ്രധാനമായും ചെയ്യുന്നത് എന്തിനെയാണ്?" },
      options: [
        { k: "A", text: { en: "Military rules", ml: "സൈനിക നിയമങ്ങൾ" } },
        { k: "B", text: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" } },
        { k: "C", text: { en: "Police authority", ml: "പോലീസ് അധികാരം" } },
        { k: "D", text: { en: "Taxes", ml: "നികുതികൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Fundamental Rights set limits on what a government can impose on citizens.", ml: "പൗരന്മാരുടെ മൗലികാവകാശങ്ങൾ ഗവൺമെന്റ് ലംഘിക്കാൻ പാടില്ലാത്ത അടിസ്ഥാന നിയന്ത്രണങ്ങളാണ്." }
    },
    {
      q_id: "ps-c1-q20",
      type: "mcq",
      stem: { en: "The 'Rule of Law' is a feature borrowed from:", ml: "'നിയമവാഴ്ച' (Rule of Law) എന്ന ആശയം എവിടെ നിന്നാണ് എടുത്തത്?" },
      options: [
        { k: "A", text: { en: "British Constitution", ml: "ബ്രിട്ടീഷ് ഭരണഘടന" } },
        { k: "B", text: { en: "US Constitution", ml: "യുഎസ് ഭരണഘടന" } },
        { k: "C", text: { en: "French Constitution", ml: "ഫ്രഞ്ച് ഭരണഘടന" } },
        { k: "D", text: { en: "German Constitution", ml: "ജർമ്മൻ ഭരണഘടന" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Rule of Law is a cornerstone of the British legal system adapted by India.", ml: "ബ്രിട്ടീഷ് ഭരണഘടനയിൽ നിന്നാണ് ഈ ആശയം സ്വീകരിച്ചത്." }
    },
    {
      q_id: "ps-c1-q21",
      type: "mcq",
      stem: { en: "The seats for the Princely States in the Constituent Assembly were allotted:", ml: "നാട്ടുരാജ്യങ്ങൾക്ക് ഭരണഘടനാ നിർമ്മാണ സഭയിൽ അനുവദിച്ച സീറ്റുകളുടെ എണ്ണം എത്ര?" },
      options: [
        { k: "A", text: { en: "292", ml: "292" } },
        { k: "B", text: { en: "93", ml: "93" } },
        { k: "C", text: { en: "100", ml: "100" } },
        { k: "D", text: { en: "75", ml: "75" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "93 seats were allotted to the Princely States.", ml: "നാട്ടുരാജ്യങ്ങൾക്ക് 93 സീറ്റുകളാണ് അനുവദിച്ചിരുന്നത്." }
    },
    {
      q_id: "ps-c1-q22",
      type: "mcq",
      stem: { en: "Which of the following is NOT a function of the constitution?", ml: "താഴെ പറയുന്നവയിൽ ഭരണഘടനയുടെ ചുമതല അല്ലാത്തത് ഏത്?" },
      options: [
        { k: "A", text: { en: "Set limits on government power", ml: "ഗവൺമെന്റ് അധികാരം പരിമിതപ്പെടുത്തുക" } },
        { k: "B", text: { en: "Ensure military rule", ml: "സൈനിക ഭരണം ഉറപ്പാക്കുക" } },
        { k: "C", text: { en: "Provide basic rules for coordination", ml: "ഏകോപനത്തിനായി അടിസ്ഥാന നിയമങ്ങൾ നൽകുക" } },
        { k: "D", text: { en: "Express collective political identity", ml: "കൂട്ടായ രാഷ്ട്രീയ വ്യക്തിത്വം പ്രകടിപ്പിക്കുക" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "A constitution in a democracy ensures civil governance, not military rule.", ml: "ജനാധിപത്യ ഭരണഘടന സൈനിക ഭരണത്തെയല്ല പിന്തുണയ്ക്കുന്നത്." }
    },
    {
      q_id: "ps-c1-q23",
      type: "mcq",
      stem: { en: "Who was the chairman of the Drafting Committee of the Indian Constitution?", ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ ഡ്രാഫ്റ്റിംഗ് കമ്മിറ്റി ചെയർമാൻ ആരായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } },
        { k: "B", text: { en: "Dr. B.R. Ambedkar", ml: "ഡോ. ബി.ആർ. അംബേദ്കർ" } },
        { k: "C", text: { en: "Sardar Patel", ml: "സർദാർ പട്ടേൽ" } },
        { k: "D", text: { en: "B.N. Rau", ml: "ബി.എൻ. റാവു" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Dr. Ambedkar chaired the Drafting Committee.", ml: "ഡോ. അംബേദ്കർ ആയിരുന്നു ഡ്രാഫ്റ്റിംഗ് കമ്മിറ്റി ചെയർമാൻ." }
    },
    {
      q_id: "ps-c1-q24",
      type: "mcq",
      stem: { en: "The 'Parliamentary Form of Government' was adopted from:", ml: "'പാർലമെന്ററി ഭരണരീതി' കടമെടുത്തത് എവിടെ നിന്നാണ്?" },
      options: [
        { k: "A", text: { en: "US Constitution", ml: "യുഎസ് ഭരണഘടന" } },
        { k: "B", text: { en: "Irish Constitution", ml: "ഐറിഷ് ഭരണഘടന" } },
        { k: "C", text: { en: "British Constitution", ml: "ബ്രിട്ടീഷ് ഭരണഘടന" } },
        { k: "D", text: { en: "French Constitution", ml: "ഫ്രഞ്ച് ഭരണഘടന" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The parliamentary form of government was taken from the UK (British).", ml: "ബ്രിട്ടീഷ് ഭരണഘടനയിൽ നിന്നാണ് പാർലമെന്ററി രീതി സ്വീകരിച്ചത്." }
    },
    {
      q_id: "ps-c1-q25",
      type: "mcq",
      stem: { en: "The Indian Constitution officially came into force on:", ml: "ഇന്ത്യൻ ഭരണഘടന ഔദ്യോഗികമായി നിലവിൽ വന്നത് എന്ന്?" },
      options: [
        { k: "A", text: { en: "15 August 1947", ml: "1947 ഓഗസ്റ്റ് 15" } },
        { k: "B", text: { en: "26 November 1949", ml: "1949 നവംബർ 26" } },
        { k: "C", text: { en: "26 January 1950", ml: "1950 ജനുവരി 26" } },
        { k: "D", text: { en: "24 January 1950", ml: "1950 ജനുവരി 24" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The Constitution came into force on 26 January 1950.", ml: "1950 ജനുവരി 26-നാണ് ഭരണഘടന നിലവിൽ വന്നത്." }
    },
    {
      q_id: "ps-c1-q26",
      type: "mcq",
      stem: { en: "The 'Speaker of the Lok Sabha' position is modeled after which country?", ml: "ലോകസഭാ സ്പീക്കർ പദവി ഏത് രാജ്യത്തിന്റെ മാതൃകയിൽ നിന്നാണ് ഉണ്ടായത്?" },
      options: [
        { k: "A", text: { en: "United States", ml: "യുണൈറ്റഡ് സ്റ്റേറ്റ്സ്" } },
        { k: "B", text: { en: "Britain", ml: "ബ്രിട്ടൻ" } },
        { k: "C", text: { en: "Canada", ml: "കാനഡ" } },
        { k: "D", text: { en: "Australia", ml: "ഓസ്‌ട്രേലിയ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The institution of the Speaker was adapted from the British system.", ml: "ബ്രിട്ടീഷ് പാർലമെന്ററി രീതിയിൽ നിന്നാണ് സ്പീക്കർ പദവി കടമെടുത്തത്." }
    },
    {
      q_id: "ps-c1-q27",
      type: "mcq",
      stem: { en: "Which document encapsulated the aspirations and values behind the Constitution?", ml: "ഭരണഘടനയുടെ മൂല്യങ്ങളും ലക്ഷ്യങ്ങളും ഉൾക്കൊള്ളുന്ന രേഖ ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Preamble", ml: "ആമുഖം" } },
        { k: "B", text: { en: "Objectives Resolution", ml: "ലക്ഷ്യപ്രമേയം" } },
        { k: "C", text: { en: "Bill of Rights", ml: "ബിൽ ഓഫ് റൈറ്റ്‌സ്" } },
        { k: "D", text: { en: "National Charter", ml: "നാഷണൽ ചാർട്ടർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The Objectives Resolution set the goals for the new Constitution.", ml: "ഭരണഘടനയുടെ ലക്ഷ്യങ്ങൾ വ്യക്തമാക്കിയത് ലക്ഷ്യപ്രമേയമായിരുന്നു." }
    },
    {
      q_id: "ps-c1-q28",
      type: "mcq",
      stem: { en: "The Fragmenting of power across institutions is to ensure:", ml: "സ്ഥാപനങ്ങൾക്കിടയിൽ അധികാരം വിഭജിക്കുന്നത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "Chaos in administration", ml: "ഭരണത്തിൽ ആശയക്കുഴപ്പമുണ്ടാക്കാൻ" } },
        { k: "B", text: { en: "Checks and balances", ml: "നിയന്ത്രണങ്ങളും സന്തുലനവും ഉറപ്പാക്കാൻ" } },
        { k: "C", text: { en: "Slow decision making", ml: "തീരുമാനങ്ങൾ വൈകിപ്പിക്കാൻ" } },
        { k: "D", text: { en: "Military control", ml: "സൈനിക നിയന്ത്രണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Fragmenting power ensures no single body becomes too powerful.", ml: "അധികാരം വിഭജിക്കുന്നത് ആരും അത് ദുരുപയോഗം ചെയ്യുന്നില്ലെന്ന് ഉറപ്പാക്കാനാണ്." }
    },
    {
      q_id: "ps-c1-q29",
      type: "mcq",
      stem: { en: "How many major committees did the Constituent Assembly have?", ml: "ഭരണഘടനാ നിർമ്മാണ സഭയ്ക്ക് എത്ര പ്രധാന കമ്മിറ്റികൾ ഉണ്ടായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Five", ml: "അഞ്ച്" } },
        { k: "B", text: { en: "Eight", ml: "എട്ട്" } },
        { k: "C", text: { en: "Ten", ml: "പത്ത്" } },
        { k: "D", text: { en: "Twelve", ml: "പന്ത്രണ്ട്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The Assembly had eight major committees for different aspects.", ml: "എട്ട് പ്രധാന കമ്മിറ്റികളാണ് സഭയ്ക്ക് ഉണ്ടായിരുന്നത്." }
    },
    {
      q_id: "ps-c1-q30",
      type: "mcq",
      stem: { en: "What does a 'Quasi-federal' government imply?", ml: "'അർദ്ധ-ഫെഡറൽ' (Quasi-federal) ഭരണരീതി എന്നാൽ എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Strong state governments", ml: "ശക്തമായ സംസ്ഥാന ഗവൺമെന്റുകൾ" } },
        { k: "B", text: { en: "Strong central government", ml: "ശക്തമായ കേന്ദ്ര ഗവൺമെന്റ്" } },
        { k: "C", text: { en: "No central government", ml: "കേന്ദ്ര ഗവൺമെന്റ് ഇല്ലാത്ത അവസ്ഥ" } },
        { k: "D", text: { en: "Only local governments", ml: "പ്രാദേശിക ഗവൺമെന്റുകൾ മാത്രം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Quasi-federal refers to a federal system with a strong bias towards the center.", ml: "ശക്തമായ കേന്ദ്രമുള്ള ഫെഡറൽ സംവിധാനത്തെയാണ് ഇത് അർത്ഥമാക്കുന്നത്." }
    }
  ],
  glossary: [
    {
      term: { en: "Universal Suffrage", ml: "സാർവ്വത്രിക വോട്ടവകാശം" },
      definition: { en: "The right to vote for all citizens above a certain age without any discrimination.", ml: "ഒരു നിശ്ചിത പ്രായത്തിന് മുകളിലുള്ള എല്ലാ പൗരന്മാർക്കും വിവേചനമില്ലാതെ വോട്ട് ചെയ്യാനുള്ള അവകാശം." }
    },
    {
      term: { en: "Constituent Assembly", ml: "ഭരണഘടനാ നിർമ്മാണ സഭ" },
      definition: { en: "A body of representatives elected for the purpose of drafting a constitution.", ml: "ഭരണഘടന തയ്യാറാക്കുന്നതിനായി തിരഞ്ഞെടുക്കപ്പെട്ട പ്രതിനിധികളുടെ സഭ." }
    }
  ]
};

export const plusOnePoliticalSciencePart1Unit2: Lesson = {
  id: "pl-ps-11-p1-u2",
  title: { en: "Rights in the Indian Constitution", ml: "ഇന്ത്യൻ ഭരണഘടനയിലെ അവകാശങ്ങൾ (Rights in the Indian Constitution)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=YPIkzf9aeS8",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the importance of Fundamental Rights", ml: "മൗലികാവകാശങ്ങളുടെ പ്രാധാന്യം മനസ്സിലാക്കുക" },
    { en: "Analyze the specific rights guaranteed by the Indian Constitution", ml: "ഇന്ത്യൻ ഭരണഘടന ഉറപ്പുനൽകുന്ന പ്രത്യേക അവകാശങ്ങൾ വിശകലനം ചെയ്യുക" },
    { en: "Distinguish between Fundamental Rights and Directive Principles", ml: "മൗലികാവകാശങ്ങളും നിർദ്ദേശക തത്വങ്ങളും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയുക" },
    { en: "Explore the role of the judiciary in protecting rights", ml: "അവകാശങ്ങൾ സംരക്ഷിക്കുന്നതിൽ നീതിന്യായ വ്യവസ്ഥയുടെ പങ്ക് പരിശോധിക്കുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explains the Fundamental Rights enshrined in Part Three of the Indian Constitution and the relationship between Fundamental Rights and Directive Principles.", 
      ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ മൂന്നാം ഭാഗത്ത് ഉൾപ്പെടുത്തിയിരിക്കുന്ന മൗലികാവകാശങ്ങളെക്കുറിച്ചും മൗലികാവകാശങ്ങളും നിർദ്ദേശക തത്വങ്ങളും തമ്മിലുള്ള ബന്ധത്തെക്കുറിച്ചും ഈ അധ്യായം വിശദീകരിക്കുന്നു." 
    },
    core: { 
      en: "A detailed study of the six Fundamental Rights, the power of writs, and the Directive Principles of State Policy.", 
      ml: "ആറ് മൗലികാവകാശങ്ങൾ, റിട്ടുകൾ പുറപ്പെടുവിക്കാനുള്ള അധികാരം, നിർദ്ദേശക തത്വങ്ങൾ എന്നിവയെക്കുറിച്ചുള്ള വിശദമായ പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explains the Fundamental Rights enshrined in Part Three of the Indian Constitution. It details the specific rights guaranteed to citizens, how the judiciary protects and interprets these rights, and the limits placed upon them. Furthermore, it explores the distinction and relationship between Fundamental Rights and the Directive Principles of State Policy.', ml: 'ഇന്ത്യൻ ഭരണഘടനയുടെ മൂന്നാം ഭാഗത്ത് ഉൾപ്പെടുത്തിയിരിക്കുന്ന മൗലികാവകാശങ്ങളെക്കുറിച്ചാണ് ഈ അധ്യായം പ്രതിപാദിക്കുന്നത്. പൗരന്മാർക്ക് ഉറപ്പുനൽകിയിട്ടുള്ള പ്രത്യേക അവകാശങ്ങൾ, നീതിന്യായ വ്യവസ്ഥ എങ്ങനെയാണ് ഈ അവകാശങ്ങളെ സംരക്ഷിക്കുകയും വ്യാഖ്യാനിക്കുകയും ചെയ്യുന്നത്, ഈ അവകാശങ്ങൾക്കുള്ള പരിധികൾ എന്നിവ ഇത് വിശദീകരിക്കുന്നു. കൂടാതെ, മൗലികാവകാശങ്ങളും നിർദ്ദേശക തത്വങ്ങളും (Directive Principles of State Policy) തമ്മിലുള്ള വ്യത്യാസവും അവ തമ്മിലുള്ള ബന്ധവും ഈ അധ്യായം പരിശോധിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Bill of Rights', ml: 'അവകാശപത്രിക (Bill of Rights)'}, {en: 'A list of rights mentioned and protected by the constitution, which prohibits the government from acting against individual rights.', ml: 'ഭരണഘടനയിൽ ഉൾപ്പെടുത്തിയിട്ടുള്ളതും സംരക്ഷിക്കപ്പെടുന്നതുമായ അവകാശങ്ങളുടെ പട്ടിക. വ്യക്തികളുടെ അവകാശങ്ങൾക്കെതിരെ പ്രവർത്തിക്കുന്നതിൽ നിന്ന് ഇത് ഗവൺമെന്റിനെ തടയുന്നു.'}, {en: 'A warranty card for citizens\' freedoms.', ml: 'പൗരന്മാരുടെ സ്വാതന്ത്ര്യത്തിനുള്ള ഉറപ്പ് രേഖ.'}],
          [{en: 'Preventive Detention', ml: 'കരുതൽ തടങ്കൽ (Preventive Detention)'}, {en: 'Arresting a person simply out of an apprehension that they are likely to engage in unlawful activity, without a regular trial.', ml: 'നിയമവിരുദ്ധമായ പ്രവർത്തനങ്ങളിൽ ഏർപ്പെട്ടേക്കാം എന്ന സംശയത്തിന്റെ അടിസ്ഥാനത്തിൽ വിചാരണ കൂടാതെ ഒരാളെ അറസ്റ്റ് ചെയ്യുന്ന രീതി.'}, {en: 'Used to deal with anti-social elements.', ml: 'സാമൂഹിക വിരുദ്ധരെ നേരിടാൻ ഉപയോഗിക്കുന്നു.'}],
          [{en: 'Begar', ml: 'ബെഗാർ (Begar / Forced Labour)'}, {en: 'Forced labour without payment, a form of exploitation prohibited by the Constitution.', ml: 'പ്രതിഫലം നൽകാതെ നിർബന്ധപൂർവ്വം പണിയെടുപ്പിക്കുന്ന രീതി. ഭരണഘടന ഇത് നിരോധിച്ചിരിക്കുന്നു.'}, {en: 'Historically imposed by landlords.', ml: 'ചരിത്രപരമായി ജന്മിമാർ നടപ്പിലാക്കിയിരുന്ന രീതി.'}],
          [{en: 'Secularism', ml: 'മതേതരത്വം (Secularism)'}, {en: 'The principle that the government will not favour any particular religion and will treat all religions equally.', ml: 'ഭരണകൂടം ഏതെങ്കിലും പ്രത്യേക മതത്തെ അനുകൂലിക്കാതിരിക്കുകയും എല്ലാ മതങ്ങളെയും ഒരുപോലെ കാണുകയും ചെയ്യുന്ന നയം.'}, {en: 'India does not have any official state religion.', ml: 'ഇന്ത്യയ്ക്ക് ഔദ്യോഗിക മതമില്ല.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 Importance of Rights and the Bill of Rights', ml: '3.1 അവകാശങ്ങളുടെ പ്രാധാന്യവും അവകാശപത്രികയും (Importance of Rights and the Bill of Rights)' },
      { type: 'ul', items: [
        { en: 'A democracy must ensure that individuals have certain rights recognized and protected by the government.', ml: 'ഒരു ജനാധിപത്യ രാജ്യത്ത് വ്യക്തികൾക്ക് ഗവൺമെന്റ് അംഗീകരിച്ചതും സംരക്ഷിക്കപ്പെടുന്നതുമായ ചില അവകാശങ്ങൾ ഉണ്ടായിരിക്കണം.' },
        { en: 'The Motilal Nehru committee demanded a bill of rights in India as early as 1928.', ml: '1928-ൽ തന്നെ മോത്തിലാൽ നെഹ്‌റു കമ്മിറ്റി ഇന്ത്യയിൽ ഒരു അവകാശപത്രിക വേണമെന്ന് ആവശ്യപ്പെട്ടിരുന്നു.' },
        { en: 'Fundamental Rights are so important that the Constitution itself ensures they are not violated by the government.', ml: 'മൗലികാവകാശങ്ങൾ അത്രത്തോളം പ്രധാനമായതുകൊണ്ട് ഭരണഘടന തന്നെ അവ ലംഘിക്കപ്പെടില്ലെന്ന് ഉറപ്പുവരുത്തുന്നു.' }
      ]},

      { type: 'h3', en: 'Comparison Table: Ordinary Legal Rights vs. Fundamental Rights', ml: 'താരതമ്യ പട്ടിക: സാധാരണ നിയമപരമായ അവകാശങ്ങളും മൗലികാവകാശങ്ങളും (Ordinary Legal Rights vs. Fundamental Rights)' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത (Feature)'}, {en: 'Ordinary Legal Rights', ml: 'സാധാരണ നിയമപരമായ അവകാശങ്ങൾ (Ordinary Legal Rights)'}, {en: 'Fundamental Rights', ml: 'മൗലികാവകാശങ്ങൾ (Fundamental Rights)'}],
        rows: [
          [{en: 'Protection', ml: 'സംരക്ഷണം (Protection)'}, {en: 'Protected and enforced by ordinary law.', ml: 'സാധാരണ നിയമത്താൽ സംരക്ഷിക്കപ്പെടുന്നു.'}, {en: 'Protected and guaranteed by the constitution.', ml: 'ഭരണഘടനയാൽ സംരക്ഷിക്കപ്പെടുകയും ഉറപ്പുനൽകുകയും ചെയ്യുന്നു.'}],
          [{en: 'Amendment Process', ml: 'ഭേദഗതി രീതി (Amendment Process)'}, {en: 'Can be changed by the legislature through ordinary law-making.', ml: 'സാധാരണ നിയമനിർമ്മാണത്തിലൂടെ മാറ്റം വരുത്താം.'}, {en: 'Can only be changed by amending the Constitution itself.', ml: 'ഭരണഘടനാ ഭേദഗതിയിലൂടെ മാത്രമേ മാറ്റാൻ കഴിയൂ.'}]
        ]
      }},

      { type: 'h3', en: '3.2 Right to Equality', ml: '3.2 സമത്വത്തിനുള്ള അവകാശം (Right to Equality)' },
      { type: 'ul', items: [
        { en: 'Provides equal access to public places like shops, hotels, and places of worship without discrimination.', ml: 'ജാതി, മതം, വർഗ്ഗം, ലിംഗം, ജനനസ്ഥലം എന്നിവയുടെ അടിസ്ഥാനത്തിലുള്ള വിവേചനമില്ലാതെ പൊതുസ്ഥലങ്ങൾ ഉപയോഗിക്കാനുള്ള അവകാശം.' },
        { en: 'Abolishes the practice of untouchability.', ml: 'ഐത്തം (Untouchability) നിരോധിച്ചിരിക്കുന്നു.' },
        { en: 'Abolishes titles (except military or academic).', ml: 'ബഹുമതി നാമങ്ങൾ നൽകുന്നത് നിരോധിച്ചിരിക്കുന്നു (സൈനിക, വിദ്യാഭ്യാസ മേഖലകളിലെ ഒഴികെ).' },
        { en: 'Article 16(4): Reservations in jobs for backward classes is not a violation of the right to equality.', ml: 'ആർട്ടിക്കിൾ 16(4): പിന്നോക്ക വിഭാഗക്കാർക്ക് ജോലിയിൽ സംവരണം നൽകുന്നത് സമത്വത്തിനുള്ള അവകാശത്തിന്റെ ലംഘനമല്ല.' }
      ]},

      { type: 'h3', en: '3.3 Right to Freedom', ml: '3.3 സ്വാതന്ത്ര്യത്തിനുള്ള അവകാശം (Right to Freedom)' },
      { type: 'ul', items: [
        { en: 'Life and Personal Liberty (Article 21): No citizen can be denied life or liberty except by procedure laid down by law.', ml: 'ജീവനും വ്യക്തിസ്വാതന്ത്ര്യത്തിനുമുള്ള അവകാശം (Article 21): നിയമപരമായ നടപടിക്രമങ്ങളിലൂടെയല്ലാതെ ഒരാളുടെയും ജീവനോ സ്വാതന്ത്ര്യമോ ഹരിക്കാൻ പാടില്ല.' },
        { en: 'Rights of the Accused: No person can be punished for the same offence twice, and no one can be forced to give evidence against themselves.', ml: 'കുറ്റം ചുമത്തപ്പെട്ടവർക്കുള്ള അവകാശങ്ങൾ: ഒരു കുറ്റത്തിന് ഒരാളെ ഒന്നിലധികം തവണ ശിക്ഷിക്കാൻ പാടില്ല. തനിക്കെതിരെ തന്നെ സാക്ഷി പറയാൻ ഒരാളെ നിർബന്ധിക്കാൻ പാടില്ല.' }
      ]},

      { type: 'h3', en: '3.4 Right against Exploitation', ml: '3.4 ചൂഷണത്തിനെതിരെയുള്ള അവകാശം (Right against Exploitation)' },
      { type: 'ul', items: [
        { en: 'Prohibits human trafficking and forced labour (begar).', ml: 'മനുഷ്യക്കടത്തും നിർബന്ധിത ജോലിയും (ബെഗാർ) നിരോധിച്ചിരിക്കുന്നു.' },
        { en: 'Forbids the employment of children below 14 years in dangerous jobs like factories and mines.', ml: '14 വയസ്സിന് താഴെയുള്ള കുട്ടികളെ ഫാക്ടറികളിലോ ഖനികളിലോ അപകടകരമായ ജോലികളിലോ ഏർപ്പെടുത്തുന്നത് നിരോധിച്ചിരിക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.5 Right to Freedom of Religion', ml: '3.5 മതസ്വാതന്ത്ര്യത്തിനുള്ള അവകാശം (Right to Freedom of Religion)' },
      { type: 'ul', items: [
        { en: 'Includes freedom of conscience and the right to freely profess, practice, and propagate any religion.', ml: 'ഏതൊരു മതത്തിലും വിശ്വസിക്കാനും ആചരിക്കാനും പ്രചരിപ്പിക്കാനുമുള്ള അവകാശം.' },
        { en: 'Subject to restrictions based on public order, morality, and health.', ml: 'പൊതുസമാധാനം, സദാചാരം, ആരോഗ്യം എന്നിവയുടെ അടിസ്ഥാനത്തിൽ നിയന്ത്രണങ്ങൾ ഏർപ്പെടുത്താം.' }
      ]},

      { type: 'h3', en: '3.6 Cultural and Educational Rights', ml: '3.6 സാംസ്കാരികവും വിദ്യാഭ്യാസപരവുമായ അവകാശങ്ങൾ (Cultural and Educational Rights)' },
      { type: 'ul', items: [
        { en: 'Protects the rights of linguistic and religious minorities to conserve and develop their own culture and language.', ml: 'ഭാഷാ-മത ന്യൂനപക്ഷങ്ങൾക്ക് അവരുടെ സംസ്കാരവും ഭാഷയും സംരക്ഷിക്കാനുള്ള അവകാശം നൽകുന്നു.' },
        { en: 'Minorities have the right to establish and administer their own educational institutions.', ml: 'ന്യൂനപക്ഷങ്ങൾക്ക് സ്വന്തമായി വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ തുടങ്ങാനും നടത്താനും അധികാരമുണ്ട്.' }
      ]},

      { type: 'h3', en: '3.7 Right to Constitutional Remedies', ml: '3.7 ഭരണഘടനാപരമായ പരിഹാരങ്ങൾക്കുള്ള അവകാശം (Right to Constitutional Remedies)' },
      { type: 'p', en: 'Dr. B.R. Ambedkar considered this the "heart and soul of the constitution" because it allows citizens to approach the High Court or Supreme Court if their rights are violated.', ml: 'മൗലികാവകാശങ്ങൾ ലംഘിക്കപ്പെട്ടാൽ കോടതിയെ സമീപിക്കാനുള്ള അവകാശമാണിത്. ഡോ. ബി.ആർ. അംബേദ്കർ ഈ അവകാശത്തെ ഭരണഘടനയുടെ "ഹൃദയവും ആത്മാവും" എന്ന് വിശേഷിപ്പിച്ചു.' },
      { type: 'h3', en: 'Classification Table: Types of Writs', ml: 'വർഗ്ഗീകരണ പട്ടിക: വിവിധ തരം റിട്ടുകൾ (Types of Writs)' },
      { type: 'table', tableData: {
        headers: [{en: 'Writ', ml: 'റിട്ട് (Writ)'}, {en: 'Purpose / Description', ml: 'ലക്ഷ്യം / വിവരണം (Purpose / Description)'}],
        rows: [
          [{en: 'Habeas Corpus', ml: 'ഹേബിയസ് കോർപ്പസ് (Habeas Corpus)'}, {en: 'The court orders an arrested person to be presented before it.', ml: 'അന്യായമായി തടങ്കലിൽ വെച്ചിരിക്കുന്ന ഒരാളെ കോടതിയിൽ ഹാജരാക്കാൻ ഉത്തരവിടുന്നു.'}],
          [{en: 'Mandamus', ml: 'മാൻഡമസ് (Mandamus)'}, {en: 'Issued when a particular office holder is not doing their legal duty.', ml: 'ഒരു ഉദ്യോഗസ്ഥൻ തന്റെ നിയമപരമായ കർത്തവ്യം നിർവ്വഹിക്കാത്തപ്പോൾ അത് ചെയ്യാൻ ആവശ്യപ്പെടുന്നു.'}],
          [{en: 'Prohibition', ml: 'പ്രൊഹിബിഷൻ (Prohibition)'}, {en: 'Issued by a higher court when a lower court considers a case beyond its jurisdiction.', ml: 'താഴ്ന്ന കോടതികൾ തങ്ങളുടെ അധികാരപരിധിക്ക് പുറത്തുള്ള കേസുകൾ കൈകാര്യം ചെയ്യുന്നത് തടയുന്നു.'}],
          [{en: 'Quo Warranto', ml: 'ക്വോ വാറന്റോ (Quo Warranto)'}, {en: 'Issued if the court finds a person is holding an office they are not entitled to hold.', ml: 'ഒരാൾ ഏത് അധികാരത്തിലാണ് ഒരു പദവി വഹിക്കുന്നത് എന്ന് ചോദ്യം ചെയ്യുന്നു.'}],
          [{en: 'Certiorari', ml: 'സെർഷ്യോററി (Certiorari)'}, {en: 'The court orders a lower authority to transfer a pending matter to a higher authority.', ml: 'താഴ്ന്ന കോടതിയിലോ അതോറിറ്റിയിലോ ഉള്ള കേസുകൾ ഉയർന്ന കോടതിയിലേക്ക് മാറ്റാൻ ഉത്തരവിടുന്നു.'}]
        ]
      }},

      { type: 'h3', en: '3.8 Directive Principles of State Policy (DPSP) and Fundamental Duties', ml: '3.8 നിർദ്ദേശക തത്വങ്ങളും മൗലിക കർത്തവ്യങ്ങളും (DPSP and Fundamental Duties)' },
      { type: 'ul', items: [
        { en: 'DPSP are non-justiciable guidelines to bring about equality and well-being.', ml: 'നിർദ്ദേശക തത്വങ്ങൾ (DPSP) കോടതി വഴി നടപ്പിലാക്കാൻ കഴിയാത്ത നിർദ്ദേശങ്ങളാണ്.' },
        { en: 'Fundamental Duties: Inserted by the 42nd Amendment in 1976.', ml: 'മൗലിക കർത്തവ്യങ്ങൾ (Fundamental Duties): 1976-ലെ 42-ാം ഭേദഗതിയിലൂടെ ഉൾപ്പെടുത്തി.' }
      ]},

      { type: 'h3', en: '3.9 Relationship Between Fundamental Rights and DPSP', ml: '3.9 മൗലികാവകാശങ്ങളും നിർദ്ദേശക തത്വങ്ങളും തമ്മിലുള്ള ബന്ധം (Relationship Between Fundamental Rights and DPSP)' },
      { type: 'ul', items: [
        { en: 'Fundamental Rights restrain the government, while Directive Principles exhort the government to act.', ml: 'മൗലികാവകാശങ്ങൾ ഗവൺമെന്റിന്റെ അധികാരത്തെ നിയന്ത്രിക്കുമ്പോൾ നിർദ്ദേശക തത്വങ്ങൾ ഗവൺമെന്റിനോട് പ്രവർത്തിക്കാൻ ആവശ്യപ്പെടുന്നു.' },
        { en: 'In 1978, the 44th Amendment removed the right to property from the Fundamental Rights list.', ml: '1978-ലെ 44-ാം ഭേദഗതിയിലൂടെ സ്വത്തിനുള്ള അവകാശം മൗലികാവകാശങ്ങളുടെ പട്ടികയിൽ നിന്ന് നീക്കം ചെയ്തു.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Fundamental rights are not absolute; reasonable restrictions can be placed on them.', ml: 'മൗലികാവകാശങ്ങൾ പരിമിതമല്ലാത്തതല്ല. പൊതുനന്മയ്ക്കായി അവയിൽ ന്യായമായ നിയന്ത്രണങ്ങൾ ഏർപ്പെടുത്താം.' },
        { en: 'The National Human Rights Commission (NHRC) was established in 1993.', ml: 'ദേശീയ മനുഷ്യാവകാശ കമ്മീഷൻ (NHRC) 1993-ലാണ് സ്ഥാപിതമായത്.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'The Constitution guarantees Fundamental Rights in Part 3.', ml: 'ഭരണഘടനയുടെ മൂന്നാം ഭാഗം മൗലികാവകാശങ്ങൾ ഉറപ്പുനൽകുന്നു.' },
        { en: 'Right to Constitutional Remedies is essential for protecting all other rights.', ml: 'മറ്റു അവകാശങ്ങൾ സംരക്ഷിക്കാൻ ഭരണഘടനാപരമായ പരിഹാരങ്ങൾക്കുള്ള അവകാശം അത്യാവശ്യമാണ്.' },
        { en: 'DPSP are moral guidelines for the state to achieve social and economic welfare.', ml: 'സാമൂഹിക-സാമ്പത്തിക ക്ഷേമം കൈവരിക്കുന്നതിനുള്ള മാർഗ്ഗനിർദ്ദേശങ്ങളാണ് നിർദ്ദേശക തത്വങ്ങൾ.' }
      ]}
    ]
  },
  quiz: [
    {
      q_id: "ps-c2-q1",
      type: "mcq",
      stem: { en: "In which part of the Indian Constitution are Fundamental Rights mentioned?", ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ ഏത് ഭാഗത്താണ് മൗലികാവകാശങ്ങൾ ഉൾപ്പെടുത്തിയിരിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Part II", ml: "ഭാഗം II" } },
        { k: "B", text: { en: "Part III", ml: "ഭാഗം III" } },
        { k: "C", text: { en: "Part IV", ml: "ഭാഗം IV" } },
        { k: "D", text: { en: "Part V", ml: "ഭാഗം V" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Fundamental Rights are enshrined in Part III of the Constitution.", ml: "ഭരണഘടനയുടെ മൂന്നാം ഭാഗത്താണ് മൗലികാവകാശങ്ങൾ ഉൾപ്പെടുത്തിയിരിക്കുന്നത്." }
    },
    {
      q_id: "ps-c2-q2",
      type: "mcq",
      stem: { en: "Who called the Right to Constitutional Remedies the 'heart and soul' of the Constitution?", ml: "ഭരണഘടനാപരമായ പരിഹാരങ്ങൾക്കുള്ള അവകാശത്തെ ഭരണഘടനയുടെ 'ഹൃദയവും ആത്മാവും' എന്ന് വിളിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } },
        { k: "B", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" } },
        { k: "C", text: { en: "Dr. B.R. Ambedkar", ml: "ഡോ. ബി.ആർ. അംബേദ്കർ" } },
        { k: "D", text: { en: "Sardar Patel", ml: "സർദാർ പട്ടേൽ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Dr. Ambedkar considered this right as the most important provision.", ml: "ഡോ. അംബേദ്കറാണ് ഈ അവകാശത്തെ ഭരണഘടനയുടെ ഹൃദയവും ആത്മാവും എന്ന് വിളിച്ചത്." }
    },
    {
      q_id: "ps-c2-q3",
      type: "mcq",
      stem: { en: "Which Fundamental Right was removed by the 44th Amendment in 1978?", ml: "1978-ലെ 44-ാം ഭേദഗതിയിലൂടെ നീക്കം ചെയ്യപ്പെട്ട മൗലികാവകാശം ഏത്?" },
      options: [
        { k: "A", text: { en: "Right to Equality", ml: "സമത്വത്തിനുള്ള അവകാശം" } },
        { k: "B", text: { en: "Right to Property", ml: "സ്വത്തിനുള്ള അവകാശം" } },
        { k: "C", text: { en: "Right against Exploitation", ml: "ചൂഷണത്തിനെതിരെയുള്ള അവകാശം" } },
        { k: "D", text: { en: "Right to Freedom", ml: "സ്വാതന്ത്ര്യത്തിനുള്ള അവകാശം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The Right to Property was converted into a legal right by the 44th Amendment.", ml: "44-ാം ഭേദഗതിയിലൂടെ സ്വത്തിനുള്ള അവകാശം മൗലികാവകാശങ്ങളുടെ പട്ടികയിൽ നിന്ന് നീക്കി." }
    },
    {
      q_id: "ps-c2-q4",
      type: "mcq",
      stem: { en: "The writ of 'Habeas Corpus' is used for:", ml: "'ഹേബിയസ് കോർപ്പസ്' റിട്ട് ഉപയോഗിക്കുന്നത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "Order a lower court to stop a case", ml: "താഴ്ന്ന കോടതിയുടെ കേസ് തടയാൻ" } },
        { k: "B", text: { en: "Present an arrested person before the court", ml: "തടവിലാക്കിയ ഒരാളെ കോടതിയിൽ ഹാജരാക്കാൻ" } },
        { k: "C", text: { en: "Direct an official to perform their duty", ml: "ഒരു ഉദ്യോഗസ്ഥനോട് ജോലി ചെയ്യാൻ ആവശ്യപ്പെടാൻ" } },
        { k: "D", text: { en: "Transfer a case to a higher court", ml: "കേസ് ഉയർന്ന കോടതിയിലേക്ക് മാറ്റാൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Habeas Corpus protects personal liberty against unlawful detention.", ml: "അന്യായമായി തടങ്കലിൽ വെച്ചിരിക്കുന്ന ഒരാളെ വിട്ടുപിടിപ്പിക്കാനാണ് ഈ റിട്ട് ഉപയോഗിക്കുന്നത്." }
    },
    {
      q_id: "ps-c2-q5",
      type: "mcq",
      stem: { en: "Directive Principles of State Policy are:", ml: "നിർദ്ദേശക തത്വങ്ങൾ (DPSP) എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Justiciable", ml: "കോടതി വഴി നടപ്പിലാക്കാവുന്നതാണ്" } },
        { k: "B", text: { en: "Non-justiciable", ml: "കോടതി വഴി നടപ്പിലാക്കാൻ കഴിയില്ല" } },
        { k: "C", text: { en: "Absolute rights", ml: "പരിമിതമല്ലാത്ത അവകാശങ്ങൾ" } },
        { k: "D", text: { en: "Enforced by police only", ml: "പോലീസ് മാത്രം നടപ്പിലാക്കുന്നവ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Directive Principles are guidelines for the government and cannot be enforced by courts.", ml: "നിർദ്ദേശക തത്വങ്ങൾ കോടതി വഴി നടപ്പിലാക്കാൻ കഴിയില്ല." }
    },
    {
      q_id: "ps-c2-q6",
      type: "mcq",
      stem: { en: "In which year was the National Human Rights Commission (NHRC) established?", ml: "ദേശീയ മനുഷ്യാവകാശ കമ്മീഷൻ (NHRC) സ്ഥാപിതമായ വർഷം ഏത്?" },
      options: [
        { k: "A", text: { en: "1947", ml: "1947" } },
        { k: "B", text: { en: "1950", ml: "1950" } },
        { k: "C", text: { en: "1993", ml: "1993" } },
        { k: "D", text: { en: "2005", ml: "2005" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "NHRC was established in 1993 to protect human rights in India.", ml: "1993-ലാണ് ദേശീയ മനുഷ്യാവകാശ കമ്മീഷൻ രൂപീകരിച്ചത്." }
    },
    {
      q_id: "ps-c2-q7",
      type: "mcq",
      stem: { en: "Which article of the Constitution protects Life and Personal Liberty?", ml: "ഭരണഘടനയുടെ ഏത് ആർട്ടിക്കിൾ ആണ് ജീവനും വ്യക്തിസ്വാതന്ത്ര്യത്തിനും സംരക്ഷണം നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Article 14", ml: "ആർട്ടിക്കിൾ 14" } },
        { k: "B", text: { en: "Article 19", ml: "ആർട്ടിക്കിൾ 19" } },
        { k: "C", text: { en: "Article 21", ml: "ആർട്ടിക്കിൾ 21" } },
        { k: "D", text: { en: "Article 32", ml: "ആർട്ടിക്കിൾ 32" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Article 21 guarantees the right to life and personal liberty.", ml: "ആർട്ടിക്കിൾ 21 ജീവിക്കാനുള്ള അവകാശവും വ്യക്തിസ്വാതന്ത്ര്യവും ഉറപ്പുനൽകുന്നു." }
    },
    {
      q_id: "ps-c2-q8",
      type: "mcq",
      stem: { en: "Forced labour without payment is known as:", ml: "പ്രതിഫലം നൽകാതെയുള്ള നിർബന്ധിത ജോലി അറിയപ്പെടുന്നത്:" },
      options: [
        { k: "A", text: { en: "Slavery", ml: "അടിമത്തം" } },
        { k: "B", text: { en: "Begar", ml: "ബെഗാർ" } },
        { k: "C", text: { en: "Contract labour", ml: "കരാർ ജോലി" } },
        { k: "D", text: { en: "Public service", ml: "പൊതുസേവനം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "'Begar' is a prohibited form of exploitation under Article 23.", ml: "പ്രതിഫലം നൽകാതെ പണിയെടുപ്പിക്കുന്ന 'ബെഗാർ' സമ്പ്രദായം ഭരണഘടന നിരോധിച്ചിരിക്കുന്നു." }
    },
    {
      q_id: "ps-c2-q9",
      type: "mcq",
      stem: { en: "Minorities have the right to establish educational institutions under which category of rights?", ml: "ന്യൂനപക്ഷങ്ങൾക്ക് വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ തുടങ്ങാനുള്ള അവകാശം ഏത് വിഭാഗത്തിൽ ഉൾപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Right to Equality", ml: "സമത്വത്തിനുള്ള അവകാശം" } },
        { k: "B", text: { en: "Right to Freedom", ml: "സ്വാതന്ത്ര്യത്തിനുള്ള അവകാശം" } },
        { k: "C", text: { en: "Cultural and Educational Rights", ml: "സാംസ്കാരികവും വിദ്യാഭ്യാസപരവുമായ അവകാശങ്ങൾ" } },
        { k: "D", text: { en: "Right to Freedom of Religion", ml: "മതസ്വാതന്ത്ര്യത്തിനുള്ള അവകാശം" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Articles 29 and 30 protect the interests of minorities.", ml: "സാംസ്കാരികവും വിദ്യാഭ്യാസപരവുമായ അവകാശങ്ങൾ പ്രകാരമാണ് ന്യൂനപക്ഷങ്ങൾക്ക് ഈ അധികാരം ലഭിക്കുന്നത്." }
    },
    {
      q_id: "ps-c2-q10",
      type: "mcq",
      stem: { en: "Which writ literally means 'By what authority'?", ml: "'ഏത് അധികാരത്താൽ' എന്ന് അർത്ഥം വരുന്ന റിട്ട് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Mandamus", ml: "മാൻഡമസ്" } },
        { k: "B", text: { en: "Quo Warranto", ml: "ക്വോ വാറന്റോ" } },
        { k: "C", text: { en: "Certiorari", ml: "സെർഷ്യോററി" } },
        { k: "D", text: { en: "Prohibition", ml: "പ്രൊഹിബിഷൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Quo Warranto questions the authority of a person holding a public office.", ml: "ക്വോ വാറന്റോ എന്നാൽ 'ഏത് അധികാരത്താൽ' എന്നാണ് അർത്ഥമാക്കുന്നത്." }
    },
    {
      q_id: "ps-c2-q11",
      type: "mcq",
      stem: { en: "Fundamental Duties were added to the Constitution by which amendment?", ml: "മൗലിക കർത്തവ്യങ്ങൾ ഭരണഘടനയിൽ ഉൾപ്പെടുത്തിയത് ഏത് ഭേദഗതിയിലൂടെയാണ്?" },
      options: [
        { k: "A", text: { en: "42nd Amendment", ml: "42-ാം ഭേദഗതി" } },
        { k: "B", text: { en: "44th Amendment", ml: "44-ാം ഭേദഗതി" } },
        { k: "C", text: { en: "52nd Amendment", ml: "52-ാം ഭേദഗതി" } },
        { k: "D", text: { en: "86th Amendment", ml: "86-ാം ഭേദഗതി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Fundamental Duties were added by the 42nd Amendment in 1976.", ml: "1976-ലെ 42-ാം ഭേദഗതിയിലൂടെയാണ് മൗലിക കർത്തവ്യങ്ങൾ ഉൾപ്പെടുത്തിയത്." }
    },
    {
      q_id: "ps-c2-q12",
      type: "mcq",
      stem: { en: "The 'Motilal Nehru Committee' demanded a Bill of Rights in India in:", ml: "മോത്തിലാൽ നെഹ്‌റു കമ്മിറ്റി ഇന്ത്യയിൽ ഒരു അവകാശപത്രിക ആവശ്യപ്പെട്ട വർഷം?" },
      options: [
        { k: "A", text: { en: "1919", ml: "1919" } },
        { k: "B", text: { en: "1928", ml: "1928" } },
        { k: "C", text: { en: "1935", ml: "1935" } },
        { k: "D", text: { en: "1946", ml: "1946" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The Nehru Report of 1928 contained a list of fundamental rights.", ml: "1928-ലാണ് മോത്തിലാൽ നെഹ്‌റു കമ്മിറ്റി റിപ്പോർട്ട് സമർപ്പിച്ചത്." }
    },
    {
      q_id: "ps-c2-q13",
      type: "mcq",
      stem: { en: "Which article abolishes 'Untouchability'?", ml: "'ഐത്തം' നിർത്തലാക്കുന്ന ഭരണഘടനാ വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 15", ml: "ആർട്ടിക്കിൾ 15" } },
        { k: "B", text: { en: "Article 16", ml: "ആർട്ടിക്കിൾ 16" } },
        { k: "C", text: { en: "Article 17", ml: "ആർട്ടിക്കിൾ 17" } },
        { k: "D", text: { en: "Article 18", ml: "ആർട്ടിക്കിൾ 18" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Article 17 abolishes untouchability and forbids its practice.", ml: "ആർട്ടിക്കിൾ 17 പ്രകാരം ഐത്തം ആചരിക്കുന്നത് കുറ്റകരമാണ്." }
    },
    {
      q_id: "ps-c2-q14",
      type: "mcq",
      stem: { en: "The 'Right against Exploitation' prohibits employment of children below what age in factories?", ml: "ചൂഷണത്തിനെതിരെയുള്ള അവകാശം പ്രകാരം എത്ര വയസ്സിൽ താഴെയുള്ള കുട്ടികളെയാണ് ഫാക്ടറികളിൽ ജോലിക്ക് വെക്കാൻ പാടില്ലാത്തത്?" },
      options: [
        { k: "A", text: { en: "12 years", ml: "12 വയസ്സ്" } },
        { k: "B", text: { en: "14 years", ml: "14 വയസ്സ്" } },
        { k: "C", text: { en: "16 years", ml: "16 വയസ്സ്" } },
        { k: "D", text: { en: "18 years", ml: "18 വയസ്സ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Child labour is prohibited for children below 14 years.", ml: "14 വയസ്സിൽ താഴെയുള്ള കുട്ടികളെ ജോലിക്ക് വെക്കുന്നത് ഭരണഘടനാ വിരുദ്ധമാണ്." }
    },
    {
      q_id: "ps-c2-q15",
      type: "mcq",
      stem: { en: "The writ of 'Mandamus' literally means:", ml: "'മാൻഡമസ്' എന്ന റിട്ടിന്റെ അർത്ഥം എന്താണ്?" },
      options: [
        { k: "A", text: { en: "We command", ml: "ഞങ്ങൾ കൽപ്പിക്കുന്നു" } },
        { k: "B", text: { en: "To be certified", ml: "സാക്ഷ്യപ്പെടുത്താൻ" } },
        { k: "C", text: { en: "By what warrant", ml: "ഏത് അധികാരത്താൽ" } },
        { k: "D", text: { en: "You may have the body", ml: "ശരീരം ഹാജരാക്കുക" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Mandamus is an order issued to a public official to perform their legal duty.", ml: "'ഞങ്ങൾ കൽപ്പിക്കുന്നു' എന്നാണ് മാൻഡമസ് എന്ന വാക്കിന്റെ അർത്ഥം." }
    },
    {
      q_id: "ps-c2-q16",
      type: "mcq",
      stem: { en: "Which case ruled that basic features of the Constitution cannot be changed?", ml: "ഭരണഘടനയുടെ അടിസ്ഥാന സവിശേഷതകളിൽ മാറ്റം വരുത്താൻ കഴിയില്ലെന്ന് പ്രഖ്യാപിച്ച കേസ് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Golaknath case", ml: "ഗോലക്നാഥ് കേസ്" } },
        { k: "B", text: { en: "Kesavananda Bharati case", ml: "കേശവാനന്ദ ഭാരതി കേസ്" } },
        { k: "C", text: { en: "Minerva Mills case", ml: "മിനർവ മിൽസ് കേസ്" } },
        { k: "D", text: { en: "Shah Bano case", ml: "ഷാ ബാനു കേസ്" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "The 1973 Kesavananda Bharati case established the 'basic structure' doctrine.", ml: "1973-ലെ കേശവാനന്ദ ഭാരതി കേസിലാണ് ഈ ചരിത്രപരമായ വിധി ഉണ്ടായത്." }
    },
    {
      q_id: "ps-c2-q17",
      type: "mcq",
      stem: { en: "A person arrested under 'Preventive Detention' can initially be kept in custody for up to:", ml: "'കരുതൽ തടങ്കൽ' പ്രകാരം ഒരാളെ വിചാരണ കൂടാതെ പരമാവധി എത്ര കാലം തടവിൽ വെക്കാം?" },
      options: [
        { k: "A", text: { en: "1 month", ml: "1 മാസം" } },
        { k: "B", text: { en: "3 months", ml: "3 മാസം" } },
        { k: "C", text: { en: "6 months", ml: "6 മാസം" } },
        { k: "D", text: { en: "1 year", ml: "1 വർഷം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The maximum duration for preventive detention without an advisory board's review is 3 months.", ml: "മൂന്ന് മാസത്തേക്കാണ് കരുതൽ തടങ്കൽ പ്രകാരം ഒരാളെ തടവിൽ വെക്കാൻ കഴിയുന്നത്." }
    },
    {
      q_id: "ps-c2-q18",
      type: "mcq",
      stem: { en: "The Right to Freedom of Religion is subject to restrictions based on:", ml: "മതസ്വാതന്ത്ര്യം ഏത് സാഹചര്യത്തിലാണ് നിയന്ത്രിക്കപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Public order, morality, and health", ml: "പൊതുസമാധാനം, സദാചാരം, ആരോഗ്യം" } },
        { k: "B", text: { en: "Economic status", ml: "സാമ്പത്തിക സ്ഥിതി" } },
        { k: "C", text: { en: "Education level", ml: "വിദ്യാഭ്യാസ നിലവാരം" } },
        { k: "D", text: { en: "Number of believers", ml: "വിശ്വാസികളുടെ എണ്ണം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Religious practices can be restricted if they threaten public peace or health.", ml: "പൊതുജനാരോഗ്യത്തിനോ സമാധാനത്തിനോ ഭീഷണിയായാൽ മതസ്വാതന്ത്ര്യം നിയന്ത്രിക്കാം." }
    },
    {
      q_id: "ps-c2-q19",
      type: "mcq",
      stem: { en: "Which amendment converted the Right to Property into a legal right?", ml: "സ്വത്തിനുള്ള അവകാശത്തെ ഒരു നിയമപരമായ അവകാശമാക്കി മാറ്റിയ ഭേദഗതി ഏത്?" },
      options: [
        { k: "A", text: { en: "42nd Amendment", ml: "42-ാം ഭേദഗതി" } },
        { k: "B", text: { en: "44th Amendment", ml: "44-ാം ഭേദഗതി" } },
        { k: "C", text: { en: "73rd Amendment", ml: "73-ാം ഭേദഗതി" } },
        { k: "D", text: { en: "86th Amendment", ml: "86-ാം ഭേദഗതി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The 44th amendment shifted the right to property to Article 300A.", ml: "44-ാം ഭേദഗതിയിലൂടെ ഇത് മൗലികാവകാശങ്ങളുടെ പട്ടികയിൽ നിന്ന് ഒഴിവാക്കപ്പെട്ടു." }
    },
    {
      q_id: "ps-c2-q20",
      type: "mcq",
      stem: { en: "Which of the following is NOT a Fundamental Right?", ml: "താഴെ പറയുന്നവയിൽ മൗലികാവകാശം അല്ലാത്തത് ഏത്?" },
      options: [
        { k: "A", text: { en: "Right to Equality", ml: "സമത്വത്തിനുള്ള അവകാശം" } },
        { k: "B", text: { en: "Right to Work", ml: "ജോലി ചെയ്യാനുള്ള അവകാശം" } },
        { k: "C", text: { en: "Right against Exploitation", ml: "ചൂഷണത്തിനെതിരെയുള്ള അവകാശം" } },
        { k: "D", text: { en: "Right to Freedom of Religion", ml: "മതസ്വാതന്ത്ര്യത്തിനുള്ള അവകാശം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Right to work is a Directive Principle, not a Fundamental Right.", ml: "ജോലി ചെയ്യാനുള്ള അവകാശം ഒരു നിർദ്ദേശക തത്വമാണ്, മൗലികാവകാശമല്ല." }
    },
    {
      q_id: "ps-c2-q21",
      type: "mcq",
      stem: { en: "The writ of 'Certiorari' is issued to:", ml: "'സെർഷ്യോററി' റിട്ട് നൽകുന്നത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "Release a person from jail", ml: "ഒരാളെ ജയിലിൽ നിന്ന് മോചിപ്പിക്കാൻ" } },
        { k: "B", text: { en: "Quash the order of a lower court", ml: "താഴ്ന്ന കോടതിയുടെ ഉത്തരവ് റദ്ദാക്കാൻ" } },
        { k: "C", text: { en: "Ask an official why they hold office", ml: "ഒരാൾ ഏത് അധികാരത്തിലാണ് പദവി വഹിക്കുന്നത് എന്ന് ചോദിക്കാൻ" } },
        { k: "D", text: { en: "Order a government job to be given", ml: "ഗവൺമെന്റ് ജോലി നൽകാൻ ആവശ്യപ്പെടാൻ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Certiorari is used to review and quash the records of a lower court.", ml: "താഴ്ന്ന കോടതികളുടെ തെറ്റായ വിധികൾ റദ്ദാക്കാനാണ് ഇത് ഉപയോഗിക്കുന്നത്." }
    },
    {
      q_id: "ps-c2-q22",
      type: "mcq",
      stem: { en: "Fundamental Rights are defended and guaranteed by:", ml: "മൗലികാവകാശങ്ങൾ സംരക്ഷിക്കുകയും ഉറപ്പുനൽകുകയും ചെയ്യുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "The Parliament", ml: "പാർലമെന്റ്" } },
        { k: "C", text: { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { k: "D", text: { en: "The Prime Minister", ml: "പ്രധാനമന്ത്രി" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The Judiciary (Supreme Court and High Courts) is the protector of Fundamental Rights.", ml: "നീതിന്യായ വ്യവസ്ഥയാണ് മൗലികാവകാശങ്ങളുടെ സംരക്ഷകർ." }
    },
    {
      q_id: "ps-c2-q23",
      type: "mcq",
      stem: { en: "Separation of religion from the state is known as:", ml: "മതവും ഭരണകൂടവും വേർതിരിക്കപ്പെട്ടിരിക്കുന്ന അവസ്ഥയെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Socialism", ml: "സോഷ്യലിസം" } },
        { k: "B", text: { en: "Secularism", ml: "മതേതരത്വം" } },
        { k: "C", text: { en: "Democracy", ml: "ജനാധിപത്യം" } },
        { k: "D", text: { en: "Sovereignty", ml: "പരമാധികാരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Secularism ensures that the state treats all religions equally and has no official religion.", ml: "മതേതരത്വം എന്നാൽ എല്ലാ മതങ്ങളെയും തുല്യമായി പരിഗണിക്കുന്ന രീതിയാണ്." }
    },
    {
      q_id: "ps-c2-q24",
      type: "mcq",
      stem: { en: "The Directive Principles of State Policy are mentioned in which Part?", ml: "നിർദ്ദേശക തത്വങ്ങൾ ഭരണഘടനയുടെ ഏത് ഭാഗത്താണ് ഉൾപ്പെടുത്തിയിരിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Part III", ml: "ഭാഗം III" } },
        { k: "B", text: { en: "Part IV", ml: "ഭാഗം IV" } },
        { k: "C", text: { en: "Part IV-A", ml: "ഭാഗം IV-A" } },
        { k: "D", text: { en: "Part V", ml: "ഭാഗം V" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Part IV contains the Directive Principles of State Policy.", ml: "നാലാം ഭാഗത്താണ് നിർദ്ദേശക തത്വങ്ങൾ ഉള്ളത്." }
    },
    {
      q_id: "ps-c2-q25",
      type: "mcq",
      stem: { en: "Article 16(4) of the Indian Constitution is related to:", ml: "ഭരണഘടനയിലെ ആർട്ടിക്കിൾ 16(4) ഏതുമായി ബന്ധപ്പെട്ടതാണ്?" },
      options: [
        { k: "A", text: { en: "Freedom of Speech", ml: "പ്രസംഗ സ്വാതന്ത്ര്യം" } },
        { k: "B", text: { en: "Reservation in jobs", ml: "ജോലി സംവരണം" } },
        { k: "C", text: { en: "Abolition of titles", ml: "ബഹുമതികൾ നിർത്തലാക്കൽ" } },
        { k: "D", text: { en: "Right to Education", ml: "വിദ്യാഭ്യാസത്തിനുള്ള അവകാശം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Article 16(4) empowers the state to make provisions for reservation in appointments.", ml: "പിന്നോക്ക വിഭാഗക്കാർക്ക് ജോലിയിൽ സംവരണം നൽകാൻ ഗവൺമെന്റിന് അധികാരം നൽകുന്ന വകുപ്പാണിത്." }
    },
    {
      q_id: "ps-c2-q26",
      type: "mcq",
      stem: { en: "Fundamental Duties were inserted into the Constitution on the recommendation of which committee?", ml: "ഏത് കമ്മിറ്റിയുടെ ശുപാർശ പ്രകാരമാണ് മൗലിക കർത്തവ്യങ്ങൾ ഉൾപ്പെടുത്തിയത്?" },
      options: [
        { k: "A", text: { en: "Verma Committee", ml: "വർമ്മ കമ്മിറ്റി" } },
        { k: "B", text: { en: "Sarkaria Commission", ml: "സർക്കാരിയ കമ്മീഷൻ" } },
        { k: "C", text: { en: "Swaran Singh Committee", ml: "സ്വരൺ സിംഗ് കമ്മിറ്റി" } },
        { k: "D", text: { en: "Mandal Commission", ml: "മണ്ഡൽ കമ്മീഷൻ" } }
      ],
      answer: "C",
      difficulty: "hard",
      explanation: { en: "The Swaran Singh Committee recommended the inclusion of Fundamental Duties.", ml: "സ്വരൺ സിംഗ് കമ്മിറ്റിയുടെ നിർദ്ദേശപ്രകാരമാണ് ഇവ ഉൾപ്പെടുത്തിയത്." }
    },
    {
      q_id: "ps-c2-q27",
      type: "mcq",
      stem: { en: "Which writ stops a lower court from overstepping its jurisdiction?", ml: "താഴ്ന്ന കോടതികൾ തങ്ങളുടെ അധികാരപരിധി കടന്ന് പ്രവർത്തിക്കുന്നത് തടയുന്ന റിട്ട് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Prohibition", ml: "പ്രൊഹിബിഷൻ" } },
        { k: "B", text: { en: "Mandamus", ml: "മാൻഡമസ്" } },
        { k: "C", text: { en: "Certiorari", ml: "സെർഷ്യോററി" } },
        { k: "D", text: { en: "Quo Warranto", ml: "ക്വോ വാറന്റോ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Prohibition is issued to prevent a lower court from continuing a case beyond its powers.", ml: "പ്രൊഹിബിഷൻ എന്നാൽ 'തടയുക' എന്നാണ് അർത്ഥമാക്കുന്നത്." }
    },
    {
      q_id: "ps-c2-q28",
      type: "mcq",
      stem: { en: "The idea of 'Shelter' and 'Livelihood' are included in the expanded scope of:", ml: "'അഭയം', 'ഉപജീവനം' എന്നിവ ഏത് അവകാശത്തിന്റെ വിപുലമായ അർത്ഥത്തിൽ ഉൾപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Right to Equality", ml: "സമത്വത്തിനുള്ള അവകാശം" } },
        { k: "B", text: { en: "Right to Life (Article 21)", ml: "ജീവിക്കാനുള്ള അവകാശം (Article 21)" } },
        { k: "C", text: { en: "Right against Exploitation", ml: "ചൂഷണത്തിനെതിരെയുള്ള അവകാശം" } },
        { k: "D", text: { en: "Right to Religion", ml: "മതത്തിനുള്ള അവകാശം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The Supreme Court has interpreted Article 21 to include all aspects of human dignity.", ml: "ജീവിക്കാനുള്ള അവകാശത്തിന്റെ ഭാഗമായി സുപ്രീം കോടതി ഇതിനെ വ്യാഖ്യാനിച്ചിട്ടുണ്ട്." }
    },
    {
      q_id: "ps-c2-q29",
      type: "mcq",
      stem: { en: "How many Fundamental Duties are currently listed in the Constitution?", ml: "നിലവിൽ എത്ര മൗലിക കർത്തവ്യങ്ങളാണ് ഭരണഘടനയിൽ ഉള്ളത്?" },
      options: [
        { k: "A", text: { en: "8", ml: "8" } },
        { k: "B", text: { en: "10", ml: "10" } },
        { k: "C", text: { en: "11", ml: "11" } },
        { k: "D", text: { en: "12", ml: "12" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Originally there were 10, but the 86th Amendment added one more, making it 11.", ml: "തുടക്കത്തിൽ 10 എണ്ണമായിരുന്നെങ്കിലും പിന്നീട് ഒന്ന് കൂടി ചേർത്ത് 11 എണ്ണമാക്കി." }
    },
    {
      q_id: "ps-c2-q30",
      type: "mcq",
      stem: { en: "An 'Ex Post Facto' law means:", ml: "'എക്സ് പോസ്റ്റ് ഫാക്റ്റോ' (Ex Post Facto) നിയമം എന്നാൽ:", ar: "മറ്റൊരു തീയതി മുതൽ പ്രാബല്യത്തിൽ വരുന്നത്" },
      options: [
        { k: "A", text: { en: "Law made for the future", ml: "ഭാവിയിലേക്ക് ഉണ്ടാക്കുന്ന നിയമം" } },
        { k: "B", text: { en: "Law applied retrospectively to past actions", ml: "മുൻകാല പ്രവർത്തനങ്ങൾക്ക് മുൻകാല പ്രാബല്യത്തോടെ നടപ്പിലാക്കുന്ന നിയമം" } },
        { k: "C", text: { en: "A law that is already cancelled", ml: "റദ്ദാക്കിയ നിയമം" } },
        { k: "D", text: { en: "Military law", ml: "സൈനിക നിയമം" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Retrospective criminal laws are prohibited under the Right to Freedom.", ml: "മുൻകാല പ്രാബല്യത്തോടെ ക്രിമിനൽ നിയമങ്ങൾ നിർമ്മിക്കാൻ കഴിയില്ല." }
    }
  ],
  glossary: [
    {
      term: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" },
      definition: { en: "Basic human rights guaranteed by the Constitution to all citizens.", ml: "ഭരണഘടന എല്ലാ പൗരന്മാർക്കും ഉറപ്പുനൽകുന്ന അടിസ്ഥാന അവകാശങ്ങൾ." }
    },
    {
      term: { en: "Writs", ml: "റിട്ടുകൾ" },
      definition: { en: "Written orders issued by the Supreme Court or High Courts to protect fundamental rights.", ml: "മൗലികാവകാശങ്ങൾ സംരക്ഷിക്കാൻ കോടതികൾ പുറപ്പെടുവിക്കുന്ന പ്രത്യേക ഉത്തരവുകൾ." }
    }
  ]
};

export const plusOnePoliticalSciencePart1Unit3: Lesson = {
  id: "pl-ps-11-p1-u3",
  title: { en: "Election and Representation", ml: "തിരഞ്ഞെടുപ്പും പ്രാതിനിധ്യവും (Election and Representation)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=cFSDgVcUnZE",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Compare different methods of election", ml: "വിവിധ തിരഞ്ഞെടുപ്പ് രീതികൾ താരതമ്യം ചെയ്യുക" },
    { en: "Understand the characteristics of the FPTP system used in India", ml: "ഇന്ത്യയിൽ ഉപയോഗിക്കുന്ന ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ് രീതിയുടെ സവിശേഷതകൾ മനസ്സിലാക്കുക" },
    { en: "Analyze the importance of the independent Election Commission", ml: "സ്വതന്ത്ര തിരഞ്ഞെടുപ്പ് കമ്മീഷന്റെ പ്രാധാന്യം വിശകലനം ചെയ്യുക" },
    { en: "Explore the provision of reserved constituencies", ml: "സംവരണ മണ്ഡലങ്ങളെക്കുറിച്ചുള്ള വ്യവസ്ഥകൾ പരിശോധിക്കുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explains how elections are conducted in India, the different methods of representation, and the role of the Election Commission.", 
      ml: "ഇന്ത്യയിൽ തിരഞ്ഞെടുപ്പുകൾ എങ്ങനെയാണ് നടക്കുന്നത്, വിവിധ പ്രാതിനിധ്യ രീതികൾ, തിരഞ്ഞെടുപ്പ് കമ്മീഷന്റെ പങ്ക് എന്നിവ ഈ അധ്യായം വിശദീകരിക്കുന്നു." 
    },
    core: { 
      en: "A detailed study of FPTP vs PR systems, reserved constituencies, and electoral reforms in India.", 
      ml: "ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ് vs പ്രൊപ്പോർഷണൽ റെപ്രസന്റേഷൻ രീതികൾ, സംവരണ മണ്ഡലങ്ങൾ, ഇന്ത്യയിലെ തിരഞ്ഞെടുപ്പ് പരിഷ്കാരങ്ങൾ എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explains how elections are conducted in India and the different methods of representation used in democratic systems. It compares the First Past the Post (FPTP) system with Proportional Representation (PR), details the unique features of Indian elections like the reservation of constituencies, and examines the role and independence of the Election Commission of India.', ml: 'ഇന്ത്യയിൽ തിരഞ്ഞെടുപ്പുകൾ എങ്ങനെയാണ് നടക്കുന്നത് എന്നും ജനാധിപത്യ സംവിധാനങ്ങളിൽ ഉപയോഗിക്കുന്ന വിവിധ പ്രാതിനിധ്യ രീതികളെക്കുറിച്ചും ഈ അധ്യായം വിശദീകരിക്കുന്നു. ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ് (FPTP) രീതിയും ആനുപാതിക പ്രാതിനിധ്യ (PR) രീതിയും തമ്മിലുള്ള താരതമ്യം, സംവരണ മണ്ഡലങ്ങൾ പോലുള്ള ഇന്ത്യൻ തിരഞ്ഞെടുപ്പ് രീതിയുടെ പ്രത്യേകതകൾ, തിരഞ്ഞെടുപ്പ് കമ്മീഷന്റെ പങ്ക്, അതിന്റെ സ്വതന്ത്ര സ്വഭാവം എന്നിവയും ഇവിടെ ചർച്ച ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'FPTP System', ml: 'ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ് രീതി (FPTP System)'}, {en: 'A system where the candidate who secures more votes than all other candidates is declared elected.', ml: 'മറ്റെല്ലാ സ്ഥാനാർത്ഥികളെക്കാളും കൂടുതൽ വോട്ട് നേടുന്ന ആൾ വിജയിക്കുന്ന രീതി. മൊത്തം വോട്ടിന്റെ ഭൂരിപക്ഷം (Majority) വേണമെന്ന് നിർബന്ധമില്ല.'}, {en: 'Used in Lok Sabha elections in India.', ml: 'ഇന്ത്യയിലെ ലോക്‌സഭാ തിരഞ്ഞെടുപ്പുകളിൽ ഉപയോഗിക്കുന്നു.'}],
          [{en: 'Proportional Representation', ml: 'ആനുപാതിക പ്രാതിനിധ്യം (Proportional Representation)'}, {en: 'A system where parties get seats in proportion to the percentage of votes they receive.', ml: 'ഓരോ രാഷ്ട്രീയ പാർട്ടിക്കും അവർക്ക് ലഭിക്കുന്ന വോട്ടിന്റെ ശതമാനത്തിന് ആനുപാതികമായി സീറ്റുകൾ ലഭിക്കുന്ന രീതി.'}, {en: 'Used in Israel and Netherlands.', ml: 'ഇസ്രായേൽ, നെതർലാൻഡ്‌സ് എന്നിവിടങ്ങളിൽ ഉപയോഗിക്കുന്നു.'}],
          [{en: 'Delimitation Commission', ml: 'മണ്ഡല പുനർനിർണ്ണയ കമ്മീഷൻ (Delimitation Commission)'}, {en: 'An independent body tasked with drawing boundaries of constituencies.', ml: 'രാജ്യത്തെ തിരഞ്ഞെടുപ്പ് മണ്ഡലങ്ങളുടെ അതിർത്തി നിശ്ചയിക്കുന്ന സ്വതന്ത്ര സമിതി.'}, {en: 'Appointed by the President.', ml: 'പ്രസിഡന്റ് നിയമിക്കുന്നു.'}],
          [{en: 'Universal Adult Franchise', ml: 'സാർവ്വത്രിക പ്രായപൂർത്തി വോട്ടവകാശം (Universal Adult Franchise)'}, {en: 'Every adult citizen is entitled to vote without discrimination.', ml: 'ഒരു വിവേചനവുമില്ലാതെ പ്രായപൂർത്തിയായ എല്ലാ പൗരന്മാർക്കും വോട്ട് ചെയ്യാനുള്ള അധികാരം.'}, {en: 'In India, age 18 or above.', ml: 'ഇന്ത്യയിൽ 18 വയസ്സോ അതിൽ കൂടുതലോ പ്രായമുള്ളവർക്ക് വോട്ട് ചെയ്യാം.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 Election and Democracy', ml: '3.1 തിരഞ്ഞെടുപ്പും ജനാധിപത്യവും (Election and Democracy)' },
      { type: 'ul', items: [
        { en: 'In a large democracy, citizens choose representatives through elections to take part in decision-making.', ml: 'വലിയ ജനാധിപത്യ രാജ്യങ്ങളിൽ പൗരന്മാർ തിരഞ്ഞെടുപ്പിലൂടെ പ്രതിനിധികളെ തിരഞ്ഞെടുക്കുന്നു.' },
        { en: 'The Constitution lays down basic rules about eligibility to vote and contest, and how elections are supervised.', ml: 'വോട്ട് ചെയ്യാനും മത്സരിക്കാനും ആർക്കൊക്കെ അവകാശമുണ്ട്, തിരഞ്ഞെടുപ്പ് എങ്ങനെ നിയന്ത്രിക്കണം തുടങ്ങിയ കാര്യങ്ങൾ ഭരണഘടന വ്യക്തമാക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.2 Methods of Election', ml: '3.2 തിരഞ്ഞെടുപ്പ് രീതികൾ (Methods of Election)' },
      { type: 'h4', en: 'A. First Past the Post (FPTP) System', ml: 'A. ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ് രീതി (FPTP System)' },
      { type: 'ul', items: [
        { en: 'The country is divided into small geographical units called constituencies.', ml: 'രാജ്യത്തെ ചെറിയ ഭൗമമേഖലകളായി (മണ്ഡലങ്ങൾ) തിരിക്കുന്നു.' },
        { en: 'Every constituency elects one representative.', ml: 'ഓരോ മണ്ഡലവും ഒരു പ്രതിനിധിയെ തിരഞ്ഞെടുക്കുന്നു.' },
        { en: 'Voters vote for a candidate.', ml: 'വോട്ടർമാർ സ്ഥാനാർത്ഥിക്കാണ് വോട്ട് ചെയ്യുന്നത്.' },
        { en: 'Example: UK and India.', ml: 'ഉദാഹരണം: യുകെ, ഇന്ത്യ.' }
      ]},
      { type: 'h4', en: 'B. Proportional Representation (PR) System', ml: 'B. ആനുപാതിക പ്രാതിനിധ്യ രീതി (PR System)' },
      { type: 'ul', items: [
        { en: 'Large geographical areas are demarcated as constituencies; the entire country may be a single constituency.', ml: 'വലിയ മേഖലകളെ മണ്ഡലങ്ങളായി തിരിക്കുന്നു. ചിലപ്പോൾ രാജ്യം മുഴുവൻ ഒരു മണ്ഡലമായിരിക്കും.' },
        { en: 'More than one representative may be elected from one constituency.', ml: 'ഒരു മണ്ഡലത്തിൽ നിന്ന് ഒന്നിലധികം പ്രതിനിധികളെ തിരഞ്ഞെടുക്കാം.' },
        { en: 'Voters vote for the party.', ml: 'വോട്ടർമാർ പാർട്ടിക്കാണ് വോട്ട് ചെയ്യുന്നത്.' },
        { en: 'Example: Israel and Netherlands.', ml: 'ഉദാഹരണം: ഇസ്രായേൽ, നെതർലാൻഡ്‌സ്.' }
      ]},

      { type: 'h3', en: 'Comparison Table: FPTP vs. PR System', ml: 'താരതമ്യ പട്ടിക: FPTP vs. PR രീതികൾ (FPTP vs. PR System)' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത (Feature)'}, {en: 'FPTP System', ml: 'FPTP രീതി'}, {en: 'PR System', ml: 'PR രീതി'}],
        rows: [
          [{en: 'Constituency', ml: 'മണ്ഡലം'}, {en: 'Small units.', ml: 'ചെറിയ മണ്ഡലങ്ങൾ.'}, {en: 'Large units.', ml: 'വലിയ മണ്ഡലങ്ങൾ.'}],
          [{en: 'Voting Choice', ml: 'വോട്ടിംഗ് രീതി'}, {en: 'Voter votes for a candidate.', ml: 'സ്ഥാനാർത്ഥിക്ക് വോട്ട് ചെയ്യുന്നു.'}, {en: 'Voter votes for a party.', ml: 'പാർട്ടിക്ക് വോട്ട് ചെയ്യുന്നു.'}],
          [{en: 'Seat Allocation', ml: 'സീറ്റുകളുടെ എണ്ണം'}, {en: 'Party may get more seats than vote share.', ml: 'ലഭിക്കുന്ന വോട്ടിനേക്കാൾ കൂടുതൽ സീറ്റുകൾ കിട്ടിയേക്കാം.'}, {en: 'Seats exactly in proportion to votes.', ml: 'വോട്ടിന്റെ ശതമാനത്തിന് അനുസരിച്ചുള്ള സീറ്റുകൾ.'}]
        ]
      }},

      { type: 'h3', en: '3.3 Why did India adopt the FPTP System?', ml: '3.3 ഇന്ത്യ എന്തുകൊണ്ട് FPTP രീതി സ്വീകരിച്ചു?' },
      { type: 'ul', items: [
        { en: 'Simplicity: Easy to understand for ordinary voters.', ml: 'ലളിതമായ രീതി: സാധാരണക്കാർക്ക് എളുപ്പത്തിൽ മനസ്സിലാക്കാം.' },
        { en: 'Clear Choice: Voters can choose specific candidates, not just parties.', ml: 'വ്യക്തമായ തിരഞ്ഞെടുപ്പ്: പാർട്ടിയെ മാത്രമല്ല, ഇഷ്ടപ്പെട്ട സ്ഥാനാർത്ഥിയെയും തിരഞ്ഞെടുക്കാം.' },
        { en: 'Stability: Facilitates the formation of a stable government.', ml: 'സ്ഥിരതയുള്ള ഭരണകൂടം: ഭരണം സുഗമമായി നടത്താൻ ഇത് സഹായിക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.4 Reservation of Constituencies', ml: '3.4 സംവരണ മണ്ഡലങ്ങൾ (Reservation of Constituencies)' },
      { type: 'ul', items: [
        { en: 'Scheduled Castes (SC) and Scheduled Tribes (ST) have reserved seats.', ml: 'പട്ടികജാതി (SC), പട്ടികവർഗ്ഗ (ST) വിഭാഗങ്ങൾക്കായി സീറ്റുകൾ സംവരണം ചെയ്തിട്ടുണ്ട്.' },
        { en: 'Currently, in Lok Sabha: 84 seats for SC and 47 for ST.', ml: 'നിലവിൽ ലോക്‌സഭയിൽ: 84 സീറ്റുകൾ SC വിഭാഗത്തിനും 47 സീറ്റുകൾ ST വിഭാഗത്തിനുമായി സംവരണം ചെയ്തിരിക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.5 Independent Election Commission (ECI)', ml: '3.5 സ്വതന്ത്ര തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ (ECI)' },
      { type: 'ul', items: [
        { en: 'Article 324 provides for an independent commission.', ml: 'ആർട്ടിക്കിൾ 324 സ്വതന്ത്രമായ ഒരു തിരഞ്ഞെടുപ്പ് കമ്മീഷനെ വിഭാവനം ചെയ്യുന്നു.' },
        { en: 'Composition: Three-member body since 1993 (1 CEC and 2 ECs).', ml: 'ഘടന: 1993 മുതൽ മൂന്നംഗ സമിതി (ഒരു ചീഫ് ഇലക്ഷൻ കമ്മീഷണറും രണ്ട് ഇലക്ഷൻ കമ്മീഷണർമാരും).' },
        { en: 'Removal: CEC can be removed only through impeachment by Parliament.', ml: 'നീക്കം ചെയ്യൽ: പാർലമെന്റിലെ പ്രത്യേക ഭൂരിപക്ഷം വഴിയല്ലാതെ (ഇംപീച്ച്‌മെന്റ്) CEC-യെ നീക്കം ചെയ്യാൻ കഴിയില്ല.' }
      ]},

      { type: 'h3', en: 'Functions of the Election Commission', ml: 'തിരഞ്ഞെടുപ്പ് കമ്മീഷന്റെ ചുമതലകൾ (Functions of ECI)' },
      { type: 'ul', items: [
        { en: 'Preparation of voters\' lists.', ml: 'വോട്ടർ പട്ടിക തയ്യാറാക്കുക.' },
        { en: 'Recognition of political parties and allotment of symbols.', ml: 'രാഷ്ട്രീയ പാർട്ടികൾക്ക് അംഗീകാരം നൽകുക, ചിഹ്നങ്ങൾ അനുവദിക്കുക.' },
        { en: 'Ensuring Model Code of Conduct.', ml: 'മാതൃകാ പെരുമാറ്റച്ചട്ടം നടപ്പിലാക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Voting age was lowered from 21 to 18 in 1989 (61st Amendment).', ml: '1989-ൽ 61-ാം ഭേദഗതിയിലൂടെ വോട്ടിംഗ് പ്രായം 21-ൽ നിന്ന് 18 ആയി കുറച്ചു.' },
        { en: 'Rajya Sabha elections use the Single Transferable Vote (STV) system.', ml: 'രാജ്യസഭാ തിരഞ്ഞെടുപ്പുകളിൽ ഏക കൈമാറ്റ വോട്ട് (STV) രീതിയാണ് ഉപയോഗിക്കുന്നത്.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'FPTP system is simple and stable.', ml: 'FPTP രീതി ലളിതവും ഭരണസ്ഥിരത നൽകുന്നതുമാണ്.' },
        { en: 'Election Commission ensures free and fair elections.', ml: 'തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ സ്വതന്ത്രവും നിഷ്പക്ഷവുമായ തിരഞ്ഞെടുപ്പ് ഉറപ്പാക്കുന്നു.' },
        { en: 'Universal Adult Franchise is the foundation of Indian democracy.', ml: 'സാർവ്വത്രിക പ്രായപൂർത്തി വോട്ടവകാശമാണ് ഇന്ത്യൻ ജനാധിപത്യത്തിന്റെ അടിത്തറ.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "First Past the Post (FPTP)",
      "ml": "ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ് (FPTP) / പ്ലൂരാലിറ്റി സിസ്റ്റം"
    },
    "definition": {
      "en": "An electoral system where the candidate who wins the most votes in a constituency is elected.",
      "ml": "ഒരു മണ്ഡലത്തിൽ ഏറ്റവും കൂടുതൽ വോട്ട് നേടുന്ന സ്ഥാനാർത്ഥി വിജയിക്കുന്ന തിരഞ്ഞെടുപ്പ് രീതി."
    }
  },
  {
    "term": {
      "en": "Proportional Representation (PR)",
      "ml": "ആനുപാതിക പ്രാതിനിധ്യം (Proportional Representation)"
    },
    "definition": {
      "en": "A system where a party receives seats in proportion to the percentage of votes it receives.",
      "ml": "ഒരു പാർട്ടിക്ക് ലഭിക്കുന്ന വോട്ടുകളുടെ ശതമാനത്തിന് ആനുപാതികമായി സീറ്റുകൾ ലഭിക്കുന്ന സമ്പ്രദായം."
    }
  },
  {
    "term": {
      "en": "Reserved Constituencies",
      "ml": "സംവരണ മണ്ഡലങ്ങൾ (Reserved Constituencies)"
    },
    "definition": {
      "en": "Constituencies where everyone can vote but only candidates from a specific category (SC/ST) can contest.",
      "ml": "എല്ലാവർക്കും വോട്ട് ചെയ്യാമെങ്കിലും ഒരു പ്രത്യേക വിഭാഗത്തിൽ (SC/ST) പെട്ട സ്ഥാനാർത്ഥികൾക്ക് മാത്രം മത്സരിക്കാൻ കഴിയുന്ന മണ്ഡലങ്ങൾ."
    }
  },
  {
    "term": {
      "en": "Delimitation Commission",
      "ml": "ഡീലിമിറ്റേഷൻ കമ്മീഷൻ (Delimitation Commission)"
    },
    "definition": {
      "en": "An independent commission appointed by the President to determine the boundaries of constituencies and decide on reserved seats.",
      "ml": "മണ്ഡലങ്ങളുടെ അതിർത്തി നിശ്ചയിക്കാനും സംവരണ സീറ്റുകൾ തീരുമാനിക്കാനും രാഷ്ട്രപതി നിയമിക്കുന്ന സ്വതന്ത്ര കമ്മീഷൻ."
    }
  },
  {
    "term": {
      "en": "Universal Adult Franchise",
      "ml": "സാർവ്വത്രിക പ്രായപൂർത്തി വോട്ടവകാശം (Universal Adult Franchise)"
    },
    "definition": {
      "en": "The democratic right of all adult citizens to vote.",
      "ml": "പ്രായപൂർത്തിയായ എല്ലാ പൗരന്മാര്‍ക്കും വോട്ട് ചെയ്യാനുള്ള ജനാധിപത്യ അവകാശം."
    }
  },
  {
    "term": {
      "en": "Election Commission of India",
      "ml": "ഇന്ത്യൻ തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ (Election Commission of India)"
    },
    "definition": {
      "en": "An independent body formed under Article 324 to conduct free and fair elections in India.",
      "ml": "ഇന്ത്യയിൽ സ്വതന്ത്രവും നീതിയുക്തവുമായ തിരഞ്ഞെടുപ്പുകൾ നടത്താൻ ആർട്ടിക്കിൾ 324 പ്രകാരം രൂപീകരിച്ച സ്വതന്ത്ര സംവിധാനം."
    }
  }
],
  quiz: [
    {
      q_id: "ps-c3-q1",
      type: "mcq",
      stem: { en: "Which system of election is followed in India for Lok Sabha elections?", ml: "ഇന്ത്യയിൽ ലോക്‌സഭാ തിരഞ്ഞെടുപ്പുകളിൽ പിന്തുടരുന്ന രീതി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Proportional Representation", ml: "ആനുപാതിക പ്രാതിനിധ്യം" } },
        { k: "B", text: { en: "First Past the Post System", ml: "ഫസ്റ്റ് പാസ്റ്റ് ദ പോസ്റ്റ് രീതി" } },
        { k: "C", text: { en: "Single Transferable Vote", ml: "ഏക കൈമാറ്റ വോട്ട് രീതി" } },
        { k: "D", text: { en: "Mixed System", ml: "മിശ്ര രീതി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "India uses the FPTP system for direct elections to Lok Sabha and State Assemblies.", ml: "ലോക്‌സഭയിലേക്കും നിയമസഭകളിലേക്കും നേരിട്ടുള്ള തിരഞ്ഞെടുപ്പുകൾക്ക് FPTP രീതിയാണ് ഇന്ത്യ ഉപയോഗിക്കുന്നത്." }
    },
    {
      q_id: "ps-c3-q2",
      type: "mcq",
      stem: { en: "What is the current voting age in India?", ml: "ഇന്ത്യയിലെ നിലവിലെ വോട്ടിംഗ് പ്രായം എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "21 years", ml: "21 വയസ്സ്" } },
        { k: "B", text: { en: "18 years", ml: "18 വയസ്സ്" } },
        { k: "C", text: { en: "25 years", ml: "25 വയസ്സ്" } },
        { k: "D", text: { en: "16 years", ml: "16 വയസ്സ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The voting age was lowered to 18 years in 1989.", ml: "1989 മുതൽ വോട്ടിംഗ് പ്രായം 18 വയസ്സായി നിശ്ചയിച്ചു." }
    },
    {
      q_id: "ps-c3-q3",
      type: "mcq",
      stem: { en: "Which article of the Constitution deals with the Election Commission?", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷനെക്കുറിച്ച് പ്രതിപാദിക്കുന്ന ഭരണഘടനാ വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 324", ml: "ആർട്ടിക്കിൾ 324" } },
        { k: "B", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } },
        { k: "C", text: { en: "Article 370", ml: "ആർട്ടിക്കിൾ 370" } },
        { k: "D", text: { en: "Article 312", ml: "ആർട്ടിക്കിൾ 312" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Article 324 provides for the establishment of the Election Commission.", ml: "ഭരണഘടനയുടെ 324-ാം വകുപ്പിലാണ് തിരഞ്ഞെടുപ്പ് കമ്മീഷനെക്കുറിച്ച് പറയുന്നത്." }
    },
    {
      q_id: "ps-c3-q4",
      type: "mcq",
      stem: { en: "Which amendment lowered the voting age from 21 to 18?", ml: "വോട്ടിംഗ് പ്രായം 21-ൽ നിന്ന് 18 ആയി കുറച്ച ഭേദഗതി ഏത്?" },
      options: [
        { k: "A", text: { en: "42nd Amendment", ml: "42-ാം ഭേദഗതി" } },
        { k: "B", text: { en: "44th Amendment", ml: "44-ാം ഭേദഗതി" } },
        { k: "C", text: { en: "61st Amendment", ml: "61-ാം ഭേദഗതി" } },
        { k: "D", text: { en: "73rd Amendment", ml: "73-ാം ഭേദഗതി" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The 61st Amendment in 1989 lowered the voting age.", ml: "1989-ലെ 61-ാം ഭേദഗതിയിലൂടെയാണ് വോട്ടിംഗ് പ്രായം കുറച്ചത്." }
    },
    {
      q_id: "ps-c3-q5",
      type: "mcq",
      stem: { en: "Who appoints the Chief Election Commissioner of India?", ml: "ചീഫ് ഇലക്ഷൻ കമ്മീഷണറെ നിയമിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "B", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" } },
        { k: "D", text: { en: "Speaker", ml: "സ്പീക്കർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The President appoints the CEC and other Election Commissioners.", ml: "പ്രസിഡന്റാണ് ഇലക്ഷൻ കമ്മീഷണർമാരെ നിയമിക്കുന്നത്." }
    },
    {
      q_id: "ps-c3-q6",
      type: "mcq",
      stem: { en: "How many seats are currently reserved for SC in the Lok Sabha?", ml: "ലോക്‌സഭയിൽ പട്ടികജാതിക്കാർക്കായി (SC) എത്ര സീറ്റുകളാണ് നിലവിൽ സംവരണം ചെയ്തിരിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "79", ml: "79" } },
        { k: "B", text: { en: "84", ml: "84" } },
        { k: "C", text: { en: "47", ml: "47" } },
        { k: "D", text: { en: "93", ml: "93" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Currently, 84 seats are reserved for SC in the Lok Sabha.", ml: "നിലവിൽ 84 സീറ്റുകളാണ് SC വിഭാഗത്തിനായി മാറ്റിവെച്ചിരിക്കുന്നത്." }
    },
    {
      q_id: "ps-c3-q7",
      type: "mcq",
      stem: { en: "The system of 'Single Transferable Vote' is a form of:", ml: "'ഏക കൈമാറ്റ വോട്ട്' രീതി ഏത് തിരഞ്ഞെടുപ്പ് സമ്പ്രദായത്തിന്റെ ഭാഗമാണ്?" },
      options: [
        { k: "A", text: { en: "FPTP", ml: "FPTP രീതി" } },
        { k: "B", text: { en: "Proportional Representation", ml: "ആനുപാതിക പ്രാതിനിധ്യം" } },
        { k: "C", text: { en: "Direct Democracy", ml: "നേരിട്ടുള്ള ജനാധിപത്യം" } },
        { k: "D", text: { en: "Communal Representation", ml: "വർഗ്ഗീയ പ്രാതിനിധ്യം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "STV is a variety of the PR system used for indirect elections in India.", ml: "ആനുപാതിക പ്രാതിനിധ്യ രീതിയുടെ ഒരു രൂപമാണ് ഏക കൈമാറ്റ വോട്ട്." }
    },
    {
      q_id: "ps-c3-q8",
      type: "mcq",
      stem: { en: "The boundaries of constituencies are drawn by:", ml: "തിരഞ്ഞെടുപ്പ് മണ്ഡലങ്ങളുടെ അതിർത്തി നിർണ്ണയിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Parliament", ml: "പാർലമെന്റ്" } },
        { k: "B", text: { en: "Election Commission alone", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ മാത്രം" } },
        { k: "C", text: { en: "Delimitation Commission", ml: "മണ്ഡല പുനർനിർണ്ണയ കമ്മീഷൻ" } },
        { k: "D", text: { en: "State Governments", ml: "സംസ്ഥാന ഗവൺമെന്റുകൾ" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The Delimitation Commission is responsible for drawing constituency boundaries.", ml: "മണ്ഡല പുനർനിർണ്ണയ കമ്മീഷനാണ് ഈ ചുമതല നിർവ്വഹിക്കുന്നത്." }
    },
    {
      q_id: "ps-c3-q9",
      type: "mcq",
      stem: { en: "In the FPTP system, who is declared the winner?", ml: "FPTP രീതിയിൽ ആരാണ് വിജയിയായി പ്രഖ്യാപിക്കപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "One who gets 50% votes", ml: "50% വോട്ട് നേടുന്നയാൾ" } },
        { k: "B", text: { en: "One who gets more votes than all other candidates", ml: "മറ്റെല്ലാ സ്ഥാനാർത്ഥികളെക്കാളും കൂടുതൽ വോട്ട് നേടുന്നയാൾ" } },
        { k: "C", text: { en: "One nominated by the party", ml: "പാർട്ടി നാമനിർദ്ദേശം ചെയ്യുന്നയാൾ" } },
        { k: "D", text: { en: "One who is the oldest", ml: "ഏറ്റവും പ്രായം കൂടിയയാൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The candidate with the highest number of votes wins, even without a majority.", ml: "മറ്റുള്ളവരേക്കാൾ കൂടുതൽ വോട്ട് കിട്ടുന്ന ആൾ ജയിക്കും." }
    },
    {
      q_id: "ps-c3-q10",
      type: "mcq",
      stem: { en: "When did the Election Commission of India become a multi-member body permanently?", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ എന്നുമുതലാണ് സ്ഥിരമായി ഒരു ബഹുഅംഗ സമിതിയായത്?" },
      options: [
        { k: "A", text: { en: "1950", ml: "1950" } },
        { k: "B", text: { en: "1989", ml: "1989" } },
        { k: "C", text: { en: "1993", ml: "1993" } },
        { k: "D", text: { en: "2001", ml: "2001" } }
      ],
      answer: "C",
      difficulty: "hard",
      explanation: { en: "The ECI became a three-member body in 1993.", ml: "1993 മുതലാണ് കമ്മീഷൻ മൂന്നംഗ സമിതിയായി മാറിയത്." }
    },
    {
      q_id: "ps-c3-q11",
      type: "mcq",
      stem: { en: "In which country is the entire nation treated as a single constituency in PR system?", ml: "PR രീതിയിൽ രാജ്യം മുഴുവൻ ഒരു മണ്ഡലമായി പരിഗണിക്കുന്ന രാജ്യം ഏത്?" },
      options: [
        { k: "A", text: { en: "India", ml: "ഇന്ത്യ" } },
        { k: "B", text: { en: "UK", ml: "യുകെ" } },
        { k: "C", text: { en: "Israel", ml: "ഇസ്രായേൽ" } },
        { k: "D", text: { en: "USA", ml: "യുഎസ്എ" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Israel uses the entire country as one constituency.", ml: "ഇസ്രായേലിൽ രാജ്യം മുഴുവൻ ഒരു തിരഞ്ഞെടുപ്പ് മണ്ഡലമാണ്." }
    },
    {
      q_id: "ps-c3-q12",
      type: "mcq",
      stem: { en: "Who can remove the Chief Election Commissioner before their term ends?", ml: "കാലാവധി കഴിയുന്നതിന് മുൻപ് CEC-യെ നീക്കം ചെയ്യാൻ ആർക്കാണ് അധികാരം?" },
      options: [
        { k: "A", text: { en: "The Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "B", text: { en: "The President on recommendation of Parliament", ml: "പാർലമെന്റിന്റെ ശുപാർശ പ്രകാരം പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { k: "D", text: { en: "The voters", ml: "വോട്ടർമാർ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "The removal process is similar to that of a Supreme Court judge.", ml: "പാർലമെന്റ് ഇംപീച്ച്‌മെന്റ് നടപടികൾ വഴിയാണ് CEC-യെ നീക്കം ചെയ്യുന്നത്." }
    },
    {
      q_id: "ps-c3-q13",
      type: "mcq",
      stem: { en: "Reserved constituencies for ST currently number:", ml: "പട്ടികവർഗ്ഗക്കാർക്കായി (ST) ലോക്‌സഭയിൽ എത്ര സീറ്റുകളാണ് ഉള്ളത്?" },
      options: [
        { k: "A", text: { en: "84", ml: "84" } },
        { k: "B", text: { en: "47", ml: "47" } },
        { k: "C", text: { en: "50", ml: "50" } },
        { k: "D", text: { en: "33", ml: "33" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "There are 47 seats reserved for Scheduled Tribes.", ml: "47 സീറ്റുകളാണ് ST വിഭാഗത്തിനായി സംവരണം ചെയ്തിരിക്കുന്നത്." }
    },
    {
      q_id: "ps-c3-q14",
      type: "mcq",
      stem: { en: "The 'Model Code of Conduct' is enforced by:", ml: "തിരഞ്ഞെടുപ്പ് പെരുമാറ്റച്ചട്ടം നടപ്പിലാക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The Police", ml: "പോലീസ്" } },
        { k: "B", text: { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { k: "C", text: { en: "The Election Commission", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" } },
        { k: "D", text: { en: "Political Parties", ml: "രാഷ്ട്രീയ പാർട്ടികൾ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The ECI issues and monitors the code of conduct during elections.", ml: "തിരഞ്ഞെടുപ്പ് കാലത്തെ പെരുമാറ്റച്ചട്ടം കമ്മീഷനാണ് നിയന്ത്രിക്കുന്നത്." }
    },
    {
      q_id: "ps-c3-q15",
      type: "mcq",
      stem: { en: "What was the main reason for India adopting the FPTP system?", ml: "ഇന്ത്യ എന്തുകൊണ്ടാണ് FPTP രീതി തിരഞ്ഞെടുത്തത്?" },
      options: [
        { k: "A", text: { en: "It is the most expensive", ml: "ഇത് ഏറ്റവും ചിലവേറിയതാണ്" } },
        { k: "B", text: { en: "It is simple and ensures stability", ml: "ഇത് ലളിതവും ഭരണസ്ഥിരത നൽകുന്നതുമാണ്" } },
        { k: "C", text: { en: "It is used in Russia", ml: "ഇത് റഷ്യയിൽ ഉപയോഗിക്കുന്നു" } },
        { k: "D", text: { en: "It prevents parties from winning", ml: "ഇത് പാർട്ടികൾ വിജയിക്കുന്നത് തടയുന്നു" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Simplicity and political stability were the primary reasons.", ml: "ലളിതമായ രീതിയും രാഷ്ട്രീയ സ്ഥിരതയും കാരണമാണ് ഇന്ത്യ ഇത് സ്വീകരിച്ചത്." }
    },
    {
      q_id: "ps-c3-q16",
      type: "mcq",
      stem: { en: "In PR system, voters cast their vote for:", ml: "ആനുപാതിക പ്രാതിനിധ്യ രീതിയിൽ വോട്ടർമാർ വോട്ട് ചെയ്യുന്നത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "A candidate", ml: "സ്ഥാനാർത്ഥിക്ക്" } },
        { k: "B", text: { en: "A political party", ml: "രാഷ്ട്രീയ പാർട്ടിക്ക്" } },
        { k: "C", text: { en: "The Prime Minister", ml: "പ്രധാനമന്ത്രിക്ക്" } },
        { k: "D", text: { en: "The President", ml: "പ്രസിഡന്റിന്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "In most PR systems, votes are cast for party lists.", ml: "PR രീതിയിൽ സാധാരണയായി പാർട്ടിക്കാണ് വോട്ട് രേഖപ്പെടുത്തുന്നത്." }
    },
    {
      q_id: "ps-c3-q17",
      type: "mcq",
      stem: { en: "The Delimitation Commission is usually chaired by:", ml: "മണ്ഡല പുനർനിർണ്ണയ കമ്മീഷന്റെ അധ്യക്ഷൻ സാധാരണയായി ആരായിരിക്കും?" },
      options: [
        { k: "A", text: { en: "A retired Supreme Court Judge", ml: "വിരമിച്ച സുപ്രീം കോടതി ജഡ്ജി" } },
        { k: "B", text: { en: "The Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "C", text: { en: "The Home Minister", ml: "ആഭ്യന്തര മന്ത്രി" } },
        { k: "D", text: { en: "A Governor", ml: "ഗവർണർ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "A retired judge of the Supreme Court heads this commission.", ml: "വിരമിച്ച സുപ്രീം കോടതി ജഡ്ജിയാണ് ഈ കമ്മീഷനെ നയിക്കുന്നത്." }
    },
    {
      q_id: "ps-c3-q18",
      type: "mcq",
      stem: { en: "Rajya Sabha elections follow which system?", ml: "രാജ്യസഭാ തിരഞ്ഞെടുപ്പുകൾ പിന്തുടരുന്ന രീതി ഏത്?" },
      options: [
        { k: "A", text: { en: "FPTP", ml: "FPTP രീതി" } },
        { k: "B", text: { en: "Single Transferable Vote (STV)", ml: "ഏക കൈമാറ്റ വോട്ട് രീതി (STV)" } },
        { k: "C", text: { en: "Direct Election", ml: "നേരിട്ടുള്ള തിരഞ്ഞെടുപ്പ്" } },
        { k: "D", text: { en: "Lottery System", ml: "നറുക്കെടുപ്പ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Rajya Sabha uses a variant of the Proportional Representation system.", ml: "രാജ്യസഭയിലേക്ക് ഓരോ സംസ്ഥാനത്തെയും നിയമസഭാംഗങ്ങൾ STV രീതി വഴിയാണ് തിരഞ്ഞെടുക്കുന്നത്." }
    },
    {
      q_id: "ps-c3-q19",
      type: "mcq",
      stem: { en: "The right of all citizens above a certain age to vote is called:", ml: "പ്രായപൂർത്തിയായ എല്ലാ പൗരന്മാർക്കും വോട്ട് ചെയ്യാനുള്ള അവകാശം അറിയപ്പെടുന്നത്:" },
      options: [
        { k: "A", text: { en: "Restricted Franchise", ml: "പരിമിത വോട്ടവകാശം" } },
        { k: "B", text: { en: "Universal Adult Franchise", ml: "സാർവ്വത്രിക പ്രായപൂർത്തി വോട്ടവകാശം" } },
        { k: "C", text: { en: "Communal Franchise", ml: "വർഗ്ഗീയ വോട്ടവകാശം" } },
        { k: "D", text: { en: "Direct Franchise", ml: "നേരിട്ടുള്ള വോട്ടവകാശം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Universal Adult Franchise means one person, one vote.", ml: "ജാതിമത ഭേദമന്യേ എല്ലാവർക്കും വോട്ട് നൽകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-c3-q20",
      type: "mcq",
      stem: { en: "Who prepares the up-to-date voters' lists?", ml: "വോട്ടർ പട്ടിക പുതുക്കി തയ്യാറാക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The Police", ml: "പോലീസ്" } },
        { k: "B", text: { en: "The Election Commission", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" } },
        { k: "C", text: { en: "Political Parties", ml: "രാഷ്ട്രീയ പാർട്ടികൾ" } },
        { k: "D", text: { en: "The Municipality", ml: "മുനിസിപ്പാലിറ്റി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It is a primary function of the ECI to keep voters' list ready.", ml: "അർഹരായ എല്ലാവരെയും ഉൾപ്പെടുത്തി പട്ടിക തയ്യാറാക്കുന്നത് കമ്മീഷനാണ്." }
    },
    {
      q_id: "ps-c3-q21",
      type: "mcq",
      stem: { en: "A party wins 40% of votes but 80% of seats. This is possible in:", ml: "ഒരു പാർട്ടിക്ക് 40% വോട്ട് ലഭിക്കുന്നു, എന്നാൽ 80% സീറ്റുകൾ വിജയിക്കുന്നു. ഇത് സാധ്യമാകുന്നത് ഏത് രീതിയിലാണ്?" },
      options: [
        { k: "A", text: { en: "PR System", ml: "PR രീതി" } },
        { k: "B", text: { en: "FPTP System", ml: "FPTP രീതി" } },
        { k: "C", text: { en: "Direct Democracy", ml: "നേരിട്ടുള്ള ജനാധിപത്യം" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "In FPTP, seat share can be disproportionate to vote share.", ml: "വോട്ടിന്റെ ശതമാനവും സീറ്റുകളുടെ എണ്ണവും തമ്മിൽ വലിയ വ്യത്യാസം വരാൻ സാധ്യതയുള്ളത് FPTP രീതിയിലാണ്." }
    },
    {
      q_id: "ps-c3-q22",
      type: "mcq",
      stem: { en: "The current composition of ECI is:", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷനിലെ നിലവിലെ അംഗങ്ങളുടെ എണ്ണം എത്ര?" },
      options: [
        { k: "A", text: { en: "Single-member", ml: "ഒരംഗം" } },
        { k: "B", text: { en: "Two-member", ml: "രണ്ടംഗം" } },
        { k: "C", text: { en: "Three-member", ml: "മൂന്നംഗം" } },
        { k: "D", text: { en: "Five-member", ml: "അഞ്ചംഗം" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "It consists of 1 CEC and 2 Election Commissioners.", ml: "ഒരു ചീഫ് ഇലക്ഷൻ കമ്മീഷണറും രണ്ട് ഇലക്ഷൻ കമ്മീഷണർമാരും അടങ്ങുന്നതാണ് സമിതി." }
    },
    {
      q_id: "ps-c3-q23",
      type: "mcq",
      stem: { en: "In reserved constituencies, who is allowed to vote?", ml: "സംവരണ മണ്ഡലങ്ങളിൽ വോട്ട് ചെയ്യാൻ അധികാരമുള്ളത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "Only reserved category people", ml: "സംവരണ വിഭാഗക്കാർക്ക് മാത്രം" } },
        { k: "B", text: { en: "All eligible voters in that area", ml: "ആ മണ്ഡലത്തിലെ എല്ലാ വോട്ടർമാർക്കും" } },
        { k: "C", text: { en: "Only candidates", ml: "സ്ഥാനാർത്ഥികൾക്ക് മാത്രം" } },
        { k: "D", text: { en: "Only males", ml: "പുരുഷന്മാർക്ക് മാത്രം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Everyone votes, but only a person from the reserved community can contest.", ml: "എല്ലാവർക്കും വോട്ട് ചെയ്യാം, എന്നാൽ നിശ്ചിത വിഭാഗത്തിലുള്ളവർക്ക് മാത്രമേ സ്ഥാനാർത്ഥിയാകാൻ കഴിയൂ." }
    },
    {
      q_id: "ps-c3-q24",
      type: "mcq",
      stem: { en: "Which of the following is an electoral reform suggestion?", ml: "താഴെ പറയുന്നവയിൽ തിരഞ്ഞെടുപ്പ് പരിഷ്കരണത്തിനായുള്ള നിർദ്ദേശം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Increase election spending", ml: "തിരഞ്ഞെടുപ്പ് ചിലവ് വർദ്ധിപ്പിക്കുക" } },
        { k: "B", text: { en: "One-third reservation for women", ml: "സ്ത്രീകൾക്ക് മൂന്നിലൊന്ന് സീറ്റ് സംവരണം നൽകുക" } },
        { k: "C", text: { en: "Allow candidates with criminal records", ml: "ക്രിമിനലുകളെ മത്സരിക്കാൻ അനുവദിക്കുക" } },
        { k: "D", text: { en: "Ban voting for old people", ml: "പ്രായമായവരുടെ വോട്ട് നിരോധിക്കുക" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Reserving seats for women is a major suggested reform.", ml: "സ്ത്രീ സംവരണം എന്നത് പ്രധാനപ്പെട്ട ഒരു പരിഷ്കരണ നിർദ്ദേശമാണ്." }
    },
    {
      q_id: "ps-c3-q25",
      type: "mcq",
      stem: { en: "Who decides the recognition of a party as national or state party?", ml: "ഒരു പാർട്ടിയെ ദേശീയ പാർട്ടിയായോ സംസ്ഥാന പാർട്ടിയായോ അംഗീകരിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The Governor", ml: "ഗവർണർ" } },
        { k: "B", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "The Election Commission", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" } },
        { k: "D", text: { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The ECI sets criteria for party recognition.", ml: "വോട്ടിന്റെയും സീറ്റിന്റെയും അടിസ്ഥാനത്തിൽ കമ്മീഷനാണ് അംഗീകാരം നൽകുന്നത്." }
    },
    {
      q_id: "ps-c3-q26",
      type: "mcq",
      stem: { en: "The term of the Election Commissioners is:", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷണർമാരുടെ കാലാവധി എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "5 years or age 62", ml: "5 വർഷം അല്ലെങ്കിൽ 62 വയസ്സ്" } },
        { k: "B", text: { en: "6 years or age 65", ml: "6 വർഷം അല്ലെങ്കിൽ 65 വയസ്സ്" } },
        { k: "C", text: { en: "Until they want to retire", ml: "വിരമിക്കാൻ ആഗ്രഹിക്കുന്നത് വരെ" } },
        { k: "D", text: { en: "4 years", ml: "4 വർഷം" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "ECs serve for 6 years or until they reach age 65.", ml: "6 വർഷം അല്ലെങ്കിൽ 65 വയസ്സ് - ഏതാണോ ആദ്യം വരുന്നത് അതുവരെയാണ് കാലാവധി." }
    },
    {
      q_id: "ps-c3-q27",
      type: "mcq",
      stem: { en: "What ensures that CEC cannot be easily removed by the ruling party?", ml: "ഭരണകക്ഷിക്ക് CEC-യെ എളുപ്പത്തിൽ നീക്കം ചെയ്യാൻ കഴിയില്ലെന്ന് ഉറപ്പാക്കുന്നത് എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Support of the Army", ml: "സൈന്യത്തിന്റെ പിന്തുണ" } },
        { k: "B", text: { en: "Special Majority requirement in Parliament", ml: "പാർലമെന്റിലെ പ്രത്യേക ഭൂരിപക്ഷം" } },
        { k: "C", text: { en: "Support of the media", ml: "മാധ്യമങ്ങളുടെ പിന്തുണ" } },
        { k: "D", text: { en: "Their high salary", ml: "അവരുടെ ഉയർന്ന ശമ്പളം" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "The constitutional protection of their tenure ensures independence.", ml: "പാർലമെന്റിലെ കണിശമായ നടപടിക്രമങ്ങൾ CEC-ക്ക് ഔദ്യോഗിക സുരക്ഷ നൽകുന്നു." }
    },
    {
      q_id: "ps-c3-q28",
      type: "mcq",
      stem: { en: "The 'Order of re-poll' can be given by ECI if:", ml: "ഒരു സ്ഥലത്ത് വീണ്ടും വോട്ടെടുപ്പ് നടത്താൻ കമ്മീഷൻ ഉത്തരവിടുന്നത് എപ്പോഴാണ്?" },
      options: [
        { k: "A", text: { en: "Turnout was low", ml: "വോട്ടിംഗ് കുറവായാൽ" } },
        { k: "B", text: { en: "The environment was vitiated by rigging or violence", ml: "ക്രമക്കേടുകളോ അക്രമമോ നടന്നാൽ" } },
        { k: "C", text: { en: "A rich person lost", ml: "ഒരു സമ്പന്നൻ പരാജയപ്പെട്ടാൽ" } },
        { k: "D", text: { en: "Rain occured", ml: "മഴ പെയ്താൽ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "To ensure fair elections, contaminated polls are cancelled.", ml: "അക്രമമോ കള്ളവോട്ടോ നടന്നാൽ ആ ബൂത്തിൽ വീണ്ടും തിരഞ്ഞെടുപ്പ് നടത്താൻ കമ്മീഷന് അധികാരമുണ്ട്." }
    },
    {
      q_id: "ps-c3-q29",
      type: "mcq",
      stem: { en: "In FPTP, candidates of which group are most likely to lose out despite having some votes?", ml: "FPTP രീതിയിൽ വോട്ടുണ്ടായിട്ടും പ്രതിനിധ്യം കിട്ടാതെ പോകാൻ സാധ്യതയുള്ളത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "Large parties", ml: "വലിയ പാർട്ടികൾ" } },
        { k: "B", text: { en: "Small and scattered minorities", ml: "ചിതറിക്കിടക്കുന്ന ചെറിയ വിഭാഗങ്ങൾ" } },
        { k: "C", text: { en: "The winners", ml: "വിജയികൾ" } },
        { k: "D", text: { en: "Rich candidates", ml: "സമ്പന്നരായ സ്ഥാനാർത്ഥികൾ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Scattered minority groups may not win any single constituency.", ml: "ചിതറിക്കിടക്കുന്ന ചെറിയ വിഭാഗങ്ങൾക്ക് ഒരു മണ്ഡലത്തിലും വിജയിക്കാൻ കഴിയാതെ വന്നേക്കാം." }
    },
    {
      q_id: "ps-c3-q30",
      type: "mcq",
      stem: { en: "The 61st Amendment came into effect in which year?", ml: "61-ാം ഭേദഗതി പ്രാബല്യത്തിൽ വന്ന വർഷം ഏത്?" },
      options: [
        { k: "A", text: { en: "1950", ml: "1950" } },
        { k: "B", text: { en: "1976", ml: "1976" } },
        { k: "C", text: { en: "1989", ml: "1989" } },
        { k: "D", text: { en: "1993", ml: "1993" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "It was passed in 1988 and came into force in 1989.", ml: "1989-ലാണ് ഇത് നടപ്പിലാക്കിയത്." }
    }
  ]
};

export const plusOnePoliticalSciencePart1Unit4: Lesson = {
  id: "pl-ps-11-p1-u4",
  title: { en: "Executive", ml: "കാര്യനിർവ്വഹണ വിഭാഗം (Executive)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=c_1uz9c_5y0",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the composition and functions of the executive", ml: "കാര്യനിർവ്വഹണ വിഭാഗത്തിന്റെ ഘടനയും ചുമതലകളും മനസ്സിലാക്കുക" },
    { en: "Compare different types of executive systems", ml: "വിവിധ തരം കാര്യനിർവ്വഹണ രീതികൾ താരതമ്യം ചെയ്യുക" },
    { en: "Analyze the powers of the President and Prime Minister of India", ml: "ഇന്ത്യൻ പ്രസിഡന്റിന്റെയും പ്രധാനമന്ത്രിയുടെയും അധികാരങ്ങൾ വിശകലനം ചെയ്യുക" },
    { en: "Identify the role of the permanent executive (Bureaucracy)", ml: "സ്ഥിര കാര്യനിർവ്വഹണ വിഭാഗത്തിന്റെ (ബ്യൂറോക്രസി) പങ്ക് തിരിച്ചറിയുക" }
  ],
  content: {
    intro: { 
      en: "This chapter discusses the composition, structure, and functions of the executive organ of government.", 
      ml: "ഗവൺമെന്റിന്റെ കാര്യനിർവ്വഹണ വിഭാഗത്തിന്റെ ഘടന, ചുമതലകൾ എന്നിവയെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്." 
    },
    core: { 
      en: "A detailed study of parliamentary, presidential, and semi-presidential systems, and the Indian executive machinery.", 
      ml: "പാർലമെന്ററി, പ്രസിഡൻഷ്യൽ, സെമി-പ്രസിഡൻഷ്യൽ രീതികളെക്കുറിച്ചും ഇന്ത്യൻ കാര്യനിർവ്വഹണ സംവിധാനത്തെക്കുറിച്ചുമുള്ള വിശദമായ പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter discusses the composition, structure, and functions of the executive organ of government. It explains the differences between parliamentary, presidential, and semi-presidential systems, and examines why India chose the parliamentary system. Furthermore, it details the constitutional position and powers of the President of India, the vital role of the Prime Minister and Council of Ministers, and the functioning of the permanent executive or bureaucracy.', ml: 'ഗവൺമെന്റിന്റെ കാര്യനിർവ്വഹണ വിഭാഗത്തിന്റെ ഘടന, ചുമതലകൾ എന്നിവയെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. പാർലമെന്ററി, പ്രസിഡൻഷ്യൽ, സെമി-പ്രസിഡൻഷ്യൽ രീതികൾ തമ്മിലുള്ള വ്യത്യാസങ്ങൾ ഇത് വിവരിക്കുകയും ഇന്ത്യ എന്തുകൊണ്ട് പാർലമെന്ററി രീതി തിരഞ്ഞെടുത്തു എന്ന് പരിശോധിക്കുകയും ചെയ്യുന്നു. കൂടാതെ ഇന്ത്യൻ പ്രസിഡന്റിന്റെ ഭരണഘടനാപരമായ സ്ഥാനവും അധികാരങ്ങളും, പ്രധാനമന്ത്രിയുടെയും മന്ത്രിസഭയുടെയും നിർണ്ണായക പങ്ക്, സ്ഥിര കാര്യനിർവ്വഹണ വിഭാഗമായ ഉദ്യോഗസ്ഥവൃന്ദത്തിന്റെ (Bureaucracy) പ്രവർത്തനം എന്നിവയും ഇവിടെ വിശദീകരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Executive', ml: 'കാര്യനിർവ്വഹണ വിഭാഗം (Executive)'}, {en: 'The branch of government responsible for implementing laws and policies adopted by the legislature.', ml: 'നിയമസഭ അംഗീകരിച്ച നിയമങ്ങളും നയങ്ങളും നടപ്പിലാക്കാൻ ഉത്തരവാദിത്തമുള്ള ഗവൺമെന്റ് വിഭാഗം.'}, {en: 'Includes Presidents, Prime Ministers, and administration.', ml: 'പ്രസിഡന്റുമാർ, പ്രധാനമന്ത്രിമാർ, ഭരണയന്ത്രം എന്നിവർ ഇതിൽ ഉൾപ്പെടുന്നു.'}],
          [{en: 'Political Executive', ml: 'രാഷ്ട്രീയ കാര്യനിർവ്വഹണ വിഭാഗം (Political Executive)'}, {en: 'Heads of government and ministers responsible for overall government policy.', ml: 'ഗവൺമെന്റ് നയങ്ങൾക്ക് ഉത്തരവാദികളായ ഭരണത്തലവന്മാരും മന്ത്രിമാരും.'}, {en: 'Prime Minister and Cabinet Ministers.', ml: 'പ്രധാനമന്ത്രിയും ക്യാബിനറ്റ് മന്ത്രിമാരും.'}],
          [{en: 'Permanent Executive', ml: 'സ്ഥിര കാര്യനിർവ്വഹണ വിഭാഗം (Permanent Executive)'}, {en: 'Trained and skilled administrative officers responsible for day-to-day administration.', ml: 'ദൈനംദിന ഭരണത്തിന് ഉത്തരവാദികളായ പരിശീലനം ലഭിച്ച ഉദ്യോഗസ്ഥർ.'}, {en: 'Civil servants like IAS and IPS officers.', ml: 'ഐ.എ.എസ് (IAS), ഐ.പി.എസ് (IPS) ഉദ്യോഗസ്ഥർ.'}],
          [{en: 'Collective Responsibility', ml: 'കൂട്ടുത്തരവാദിത്തം (Collective Responsibility)'}, {en: 'The principle that the ministry acts as an executive committee of the Parliament; a no-confidence vote against one minister leads to the resignation of the entire Council.', ml: 'മന്ത്രിസഭ ഒന്നടങ്കം പാർലമെന്റിനോട് ഉത്തരവാദിത്തമുള്ളവരായിരിക്കൽ; ഒരു മന്ത്രിക്കെതിരെയുള്ള അവിശ്വാസം മന്ത്രിസഭയുടെ മൊത്തം രാജിയായി കണക്കാക്കുന്നു.'}, {en: 'Ensures cabinet solidarity.', ml: 'മന്ത്രിസഭയുടെ ഐക്യം ഉറപ്പാക്കുന്നു.'}],
          [{en: 'Pocket Veto', ml: 'പോക്കറ്റ് വീറ്റോ (Pocket Veto)'}, {en: 'An informal power where the President keeps a bill pending indefinitely without granting assent or sending it back.', ml: 'ബില്ലുകളിൽ ഒപ്പുവെക്കാതെ അനിശ്ചിതമായി മാറ്റിവെക്കാനുള്ള പ്രസിഡന്റിന്റെ അധികാരം.'}, {en: 'Used by President Gyani Zail Singh in 1986.', ml: '1986-ൽ പ്രസിഡന്റ് ഗ്യാനി സെയിൽ സിംഗ് ഉപയോഗിച്ചു.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is an Executive', ml: '3.1 എന്താണ് കാര്യനിർവ്വഹണ വിഭാഗം? (What is an Executive?)' },
      { type: 'ul', items: [
        { en: 'In any organization or government, the executive is the body that takes policy decisions, supervises, and implements rules and regulations in actual practice.', ml: 'ഏതൊരു സംഘടനയിലോ ഗവൺമെന്റിലോ നയപരമായ തീരുമാനങ്ങൾ എടുക്കുകയും അവയുടെ നടത്തിപ്പിന് മേൽനോട്ടം വഹിക്കുകയും ചെയ്യുന്ന വിഭാഗമാണ് കാര്യനിർവ്വഹണ വിഭാഗം.' },
        { en: 'It involves not just the top political leaders but extends to the entire administrative machinery.', ml: 'ഇത് വെറും രാഷ്ട്രീയ നേതാക്കളിൽ മാത്രം ഒതുങ്ങുന്നതല്ല, മറിച്ച് മുഴുവൻ ഭരണയന്ത്രത്തിലേക്കും വ്യാപിച്ചുകിടക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.2 Types of Executive', ml: '3.2 കാര്യനിർവ്വഹണ വിഭാഗത്തിന്റെ തരങ്ങൾ (Types of Executive)' },
      { type: 'p', en: 'There are different types of executives worldwide based on the distribution of power between the head of state and the head of government.', ml: 'രാഷ്ട്രത്തലവനും ഭരണത്തലവനും തമ്മിലുള്ള അധികാര വിഭജനത്തിന്റെ അടിസ്ഥാനത്തിൽ ലോകമെമ്പാടും വിവിധ തരം കാര്യനിർവ്വഹണ രീതികളുണ്ട്.' },
      { type: 'h3', en: 'Comparison Table: Types of Executive Systems', ml: 'താരതമ്യ പട്ടിക: വിവിധ തരം കാര്യനിർവ്വഹണ രീതികൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Presidential System', ml: 'പ്രസിഡൻഷ്യൽ രീതി'}, {en: 'Parliamentary System', ml: 'പാർലമെന്ററി രീതി'}, {en: 'Semi-Presidential System', ml: 'സെമി-പ്രസിഡൻഷ്യൽ രീതി'}],
        rows: [
          [{en: 'Head of State', ml: 'രാഷ്ട്രത്തലവൻ'}, {en: 'President', ml: 'പ്രസിഡന്റ്'}, {en: 'President or Monarch (Nominal)', ml: 'പ്രസിഡന്റ് അല്ലെങ്കിൽ രാജാവ് (നാമമാത്ര പദവി)'}, {en: 'President', ml: 'പ്രസിഡന്റ്'}],
          [{en: 'Head of Government', ml: 'ഭരണത്തലവൻ'}, {en: 'President', ml: 'പ്രസിഡന്റ്'}, {en: 'Prime Minister', ml: 'പ്രധാനമന്ത്രി'}, {en: 'Prime Minister', ml: 'പ്രധാനമന്ത്രി'}],
          [{en: 'Power Distribution', ml: 'അധികാര വിഭജനം'}, {en: 'President holds powerful executive powers.', ml: 'പ്രസിഡന്റിന് വലിയ അധികാരങ്ങളുണ്ട്.'}, {en: 'PM and Cabinet wield effective power.', ml: 'പ്രധാനമന്ത്രിക്കും മന്ത്രിസഭയ്ക്കുമാണ് യഥാർത്ഥ അധികാരം.'}, {en: 'Both share power.', ml: 'രണ്ടുപേരും അധികാരം പങ്കിടുന്നു.'}],
          [{en: 'Examples', ml: 'ഉദാഹരണങ്ങൾ'}, {en: 'USA, Brazil.', ml: 'അമേരിക്ക, ബ്രസീൽ.'}, {en: 'India, UK, Germany.', ml: 'ഇന്ത്യ, യുകെ, ജർമ്മനി.'}, {en: 'France, Russia, Sri Lanka.', ml: 'ഫ്രാൻസ്, റഷ്യ, ശ്രീലങ്ക.'}]
        ]
      }},

      { type: 'h3', en: '3.3 Parliamentary Executive in India', ml: '3.3 ഇന്ത്യയിലെ പാർലമെന്ററി കാര്യനിർവ്വഹണ വിഭാഗം' },
      { type: 'ul', items: [
        { en: 'India chose the parliamentary system to ensure the executive is sensitive to public expectations and controlled by the legislature.', ml: 'കാര്യനിർവ്വഹണ വിഭാഗം ജനങ്ങളോട് ഉത്തരവാദിത്തമുള്ളവരായിരിക്കാനും നിയമസഭയുടെ നിയന്ത്രണത്തിലായിരിക്കാനും വേണ്ടിയാണ് ഇന്ത്യ പാർലമെന്ററി രീതി തിരഞ്ഞെടുത്തത്.' },
        { en: 'It provides safeguards against the "personality cult" danger inherent in the presidential system.', ml: 'പ്രസിഡൻഷ്യൽ രീതിയിലുണ്ടാകാൻ സാധ്യതയുള്ള "വ്യക്തിപൂജ" (Personality cult) തടയാൻ ഇത് സഹായിക്കുന്നു.' },
        { en: 'National level: President, PM, and Council of Ministers. State level: Governor, CM, and Council of Ministers.', ml: 'ദേശീയ തലത്തിൽ: പ്രസിഡന്റ്, പ്രധാനമന്ത്രി, മന്ത്രിസഭ. സംസ്ഥാന തലത്തിൽ: ഗവർണർ, മുഖ്യമന്ത്രി, മന്ത്രിസഭ.' }
      ]},

      { type: 'h3', en: '3.4 The President of India', ml: '3.4 ഇന്ത്യൻ പ്രസിഡന്റ് (The President of India)' },
      { type: 'ul', items: [
        { en: 'Election and Term: Elected indirectly for five years by an electoral college of MLAs and MPs through proportional representation with a single transferable vote.', ml: 'തിരഞ്ഞെടുപ്പും കാലാവധിയും: എം.എൽ.എമാരും എം.പിമാരും അടങ്ങുന്ന ഇലക്ടറൽ കോളേജ് അഞ്ച് വർഷത്തേക്ക് പരോക്ഷമായി തിരഞ്ഞെടുക്കുന്നു. ആനുപാതിക പ്രാതിനിധ്യവും ഏക കൈമാറ്റ വോട്ടും ഉപയോഗിച്ചാണ് ഇത് നടക്കുന്നത്.' },
        { en: 'Impeachment: Can only be removed by Parliament through a special majority for the violation of the Constitution.', ml: 'ഇംപീച്ച്‌മെന്റ് (Impeachment): ഭരണഘടനാ ലംഘനത്തിന് പാർലമെന്റിലെ പ്രത്യേക ഭൂരിപക്ഷം വഴി മാത്രമേ നീക്കം ചെയ്യാൻ കഴിയൂ.' },
        { en: 'Role: Formal head of state; exercises power primarily on the binding advice of the Council of Ministers (Article 74(1)).', ml: 'സ്ഥാനം: നാമമാത്ര രാഷ്ട്രത്തലവൻ; ആർട്ടിക്കിൾ 74(1) പ്രകാരം മന്ത്രിസഭയുടെ ഉപദേശപ്രകാരം പ്രവർത്തിക്കുന്നു.' }
      ]},

      { type: 'h4', en: 'Discretionary Powers of the President', ml: 'പ്രസിഡന്റിന്റെ വിവേചനാധികാരങ്ങൾ (Discretionary Powers)' },
      { type: 'ul', items: [
        { en: 'Reconsideration of Advice: Can send advice back once if it has flaws.', ml: 'ഉപദേശം പുനഃപരിശോധിക്കുക: മന്ത്രിസഭയുടെ നിർദ്ദേശത്തിൽ തെറ്റുകളുണ്ടെങ്കിൽ ഒരു തവണ തിരിച്ചയക്കാം.' },
        { en: 'Veto Power: Can use "pocket veto" by keeping a bill pending indefinitely.', ml: 'വീറ്റോ അധികാരം (Veto Power): ബില്ലുകളിൽ തീരുമാനമെടുക്കാതെ അനിശ്ചിതമായി നീട്ടിവെക്കാം (പോക്കറ്റ് വീറ്റോ).' },
        { en: 'Appointing the Prime Minister: In case of a hung Parliament with no clear majority.', ml: 'പ്രധാനമന്ത്രിയെ നിയമിക്കൽ: സഭയിൽ ആർക്കും ഭൂരിപക്ഷമില്ലാത്ത സാഹചര്യത്തിൽ വിവേചനാധികാരം ഉപയോഗിക്കാം.' }
      ]},

      { type: 'h3', en: '3.5 Prime Minister and Council of Ministers', ml: '3.5 പ്രധാനമന്ത്രിയും മന്ത്രിസഭയും (PM and Council of Ministers)' },
      { type: 'ul', items: [
        { en: 'The PM is the "linchpin of Government," acting as the link between the Council, the President, and Parliament.', ml: 'ഗവൺമെന്റിന്റെ നെടുംതൂണാണ് (Linchpin) പ്രധാനമന്ത്രി. മന്ത്രിസഭയ്ക്കും പ്രസിഡന്റിനും പാർലമെന്റിനും ഇടയിലുള്ള കണ്ണിയായി അദ്ദേഹം പ്രവർത്തിക്കുന്നു.' },
        { en: 'The 91st Amendment Act (2003): Restricted the size of the Council of Ministers to 15% of the total members of the Lok Sabha.', ml: '91-ാം ഭേദഗതി നിയമം (2003): മന്ത്രിസഭയിലെ അംഗങ്ങളുടെ എണ്ണം ലോക്‌സഭയിലെ ആകെ അംഗങ്ങളുടെ 15 ശതമാനമായി പരിമിതപ്പെടുത്തി.' },
        { en: 'Collective Responsibility: The Council is collectively responsible to the Lok Sabha. If the government loses a confidence vote, the entire Council falls.', ml: 'കൂട്ടുത്തരവാദിത്തം (Collective Responsibility): മന്ത്രിസഭ ഒന്നടങ്കം ലോക്‌സഭയോട് ഉത്തരവാദിത്തമുള്ളവരായിരിക്കും. ഗവൺമെന്റിന് ഭൂരിപക്ഷം നഷ്ടപ്പെട്ടാൽ മന്ത്രിസഭ മുഴുവൻ രാജിവെക്കണം.' }
      ]},

      { type: 'h3', en: '3.6 Permanent Executive: Bureaucracy', ml: '3.6 സ്ഥിര കാര്യനിർവ്വഹണ വിഭാഗം: ഉദ്യോഗസ്ഥവൃന്ദം (Bureaucracy)' },
      { type: 'ul', items: [
        { en: 'Consists of permanent, trained civil servants who assist ministers.', ml: 'മന്ത്രിമാരെ സഹായിക്കുന്ന പരിശീലനം ലഭിച്ച സ്ഥിര ഉദ്യോഗസ്ഥരാണിവർ.' },
        { en: 'Neutral Bureaucracy: They must be politically neutral and serve whichever party is in power.', ml: 'നിഷ്പക്ഷ ഉദ്യോഗസ്ഥവൃന്ദം: രാഷ്ട്രീയ താല്പര്യങ്ങളില്ലാതെ ഏത് ഭരണകൂടത്തെയും സേവിക്കാൻ ഇവർ ബാധ്യസ്ഥരാണ്.' },
        { en: 'Recruitment: Conducted by UPSC at the center and State PSCs at the state level.', ml: 'നിയമനം: കേന്ദ്രത്തിൽ യു.പി.എസ്.സി (UPSC) വഴിയും സംസ്ഥാനങ്ങളിൽ പി.എസ്.സി (PSC) വഴിയും.' }
      ]},

      { type: 'h3', en: 'Classification Table: Types of Civil Services', ml: 'സിവിൽ സർവീസുകളുടെ തരംതിരിക്കൽ (Types of Civil Services)' },
      { type: 'table', tableData: {
        headers: [{en: 'Service Type', ml: 'സർവീസ് വിഭാഗം'}, {en: 'Meaning / Scope', ml: 'അർത്ഥം / വ്യാപ്തി'}, {en: 'Example', ml: 'ഉദാഹരണം'}],
        rows: [
          [{en: 'All-India Services', ml: 'അഖിലേന്ത്യാ സർവീസുകൾ'}, {en: 'Recruited centrally but work in states.', ml: 'കേന്ദ്രത്തിൽ നിയമിക്കപ്പെട്ട് സംസ്ഥാനങ്ങളിൽ ജോലി ചെയ്യുന്നു.'}, {en: 'IAS, IPS.', ml: 'ഐ.എ.എസ് (IAS), ഐ.പി.എസ് (IPS).'}],
          [{en: 'Central Services', ml: 'കേന്ദ്ര സർവീസുകൾ'}, {en: 'Work in central government offices.', ml: 'കേന്ദ്ര ഗവൺമെന്റ് ഓഫീസുകളിൽ ജോലി ചെയ്യുന്നു.'}, {en: 'IFS.', ml: 'ഐ.എഫ്.എസ് (IFS).'}],
          [{en: 'State Services', ml: 'സംസ്ഥാന സർവീസുകൾ'}, {en: 'Recruited by State PSC.', ml: 'സംസ്ഥാന പി.എസ്.സി നിയമിക്കുന്നു.'}, {en: 'State Civil Services.', ml: 'സംസ്ഥാന സിവിൽ സർവീസുകൾ.'}]
        ]
      }},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Vice President acts as ex-officio Chairman of the Rajya Sabha.', ml: 'വൈസ് പ്രസിഡന്റ് രാജ്യസഭയുടെ ഔദ്യോഗിക ചെയർമാനായി പ്രവർത്തിക്കുന്നു.' },
        { en: '91st Amendment prevents "jumbo cabinets" by imposing a 15% limit.', ml: '91-ാം ഭേദഗതി മന്ത്രിസഭയുടെ വലിപ്പം 15 ശതമാനമായി കുറച്ചു.' },
        { en: 'Bureaucracy should be an instrument of welfare, but often faces criticism for insensitivity.', ml: 'ഉദ്യോഗസ്ഥവൃന്ദം ജനക്ഷേമത്തിനുള്ള ഉപാധിയാകണം, പക്ഷേ പലപ്പോഴും അത് ജനവികാരം ഉൾക്കൊള്ളുന്നില്ലെന്ന് വിമർശിക്കപ്പെടാറുണ്ട്.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Executive implements laws; divided into political and permanent sections.', ml: 'കാര്യനിർവ്വഹണ വിഭാഗം നിയമങ്ങൾ നടപ്പിലാക്കുന്നു; ഇതിനെ രാഷ്ട്രീയമെന്നും സ്ഥിരമെന്നും രണ്ടായി തിരിക്കാം.' },
        { en: 'India chose parliamentary system to ensure accountability.', ml: 'ജനങ്ങളോടുള്ള ഉത്തരവാദിത്തം ഉറപ്പാക്കാൻ ഇന്ത്യ പാർലമെന്ററി രീതി തിരഞ്ഞെടുത്തു.' },
        { en: 'President has discretionary powers despite being a nominal head.', ml: 'നാമമാത്ര തലവനാണെങ്കിലും പ്രസിഡന്റിന് ചില വിവേചനാധികാരങ്ങൾ ഉണ്ട്.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Executive",
      "ml": "കാര്യനിർവ്വഹണ വിഭാഗം (Executive)"
    },
    "definition": {
      "en": "The branch of government responsible for implementing the laws and policies passed by the legislature.",
      "ml": "നിയമസഭ പാസാക്കുന്ന നിയമങ്ങളും നയങ്ങളും നടപ്പിലാക്കാൻ ചുമതലപ്പെട്ട ഗവൺമെന്റ് വിഭാഗം."
    }
  },
  {
    "term": {
      "en": "Parliamentary System",
      "ml": "പാർലമെന്ററി സമ്പ്രദായം (Parliamentary System)"
    },
    "definition": {
      "en": "A governance system led by a Prime Minister and responsible to the legislature.",
      "ml": "പ്രധാനമന്ത്രി തലവനായുള്ളതും നിയമനിർമ്മാണ സഭയോട് ഉത്തരവാദിത്വമുള്ളതുമായ ഭരണസംവിധാനം."
    }
  },
  {
    "term": {
      "en": "Presidential System",
      "ml": "പ്രസിഡൻഷ്യൽ സമ്പ്രദായം (Presidential System)"
    },
    "definition": {
      "en": "A centralized governance system where the President is both the head of state and the head of government.",
      "ml": "രാഷ്ട്രപതി രാഷ്ട്രത്തലവനും ഗവൺമെന്റ് തലവനുമായിരിക്കുന്ന അധികാര കേന്ദ്രീകൃതമായ ഭരണസംവിധാനം."
    }
  },
  {
    "term": {
      "en": "Pocket Veto",
      "ml": "പോക്കറ്റ് വീറ്റോ (Pocket Veto)"
    },
    "definition": {
      "en": "The President's unofficial power to indefinitely postpone a bill passed by Parliament without signing or returning it.",
      "ml": "പാർലമെന്റ് പാസാക്കിയ ഒരു ബില്ലിൽ ഒപ്പിടുകയോ തിരിച്ചയക്കുകയോ ചെയ്യാതെ അനിശ്ചിതമായി മാറ്റിവെക്കാനുള്ള രാഷ്ട്രപതിയുടെ അനൗദ്യോഗിക അധികാരം."
    }
  },
  {
    "term": {
      "en": "Collective Responsibility",
      "ml": "കൂട്ടുത്തരവാദിത്തം (Collective Responsibility)"
    },
    "definition": {
      "en": "The principle that the Council of Ministers is collectively responsible to the Lok Sabha.",
      "ml": "മന്ത്രിസഭ കൂട്ടായി ലോക്സഭയോട് ഉത്തരവാദിത്വപ്പെട്ടിരിക്കുന്നു എന്ന തത്വം."
    }
  },
  {
    "term": {
      "en": "Bureaucracy",
      "ml": "ഉദ്യോഗസ്ഥവൃന്ദം (Bureaucracy) / സ്ഥിരം കാര്യനിർവ്വഹണ വിഭാഗം"
    },
    "definition": {
      "en": "The permanent civil service that helps ministers formulate and implement policies.",
      "ml": "നയങ്ങൾ രൂപീകരിക്കാനും നടപ്പിലാക്കാനും മന്ത്രിമാരെ സഹായിക്കുന്ന സ്ഥിരം ഉദ്യോഗസ്ഥ വൃന്ദം."
    }
  }
],
  quiz: [
    {
      q_id: "ps-c4-q1",
      type: "mcq",
      stem: { en: "Which organ of government is responsible for implementing laws?", ml: "നിയമങ്ങൾ നടപ്പിലാക്കാൻ ഉത്തരവാദിത്തമുള്ള ഗവൺമെന്റ് വിഭാഗം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Legislature", ml: "നിയമസഭ" } },
        { k: "B", text: { en: "Executive", ml: "കാര്യനിർവ്വഹണ വിഭാഗം" } },
        { k: "C", text: { en: "Judiciary", ml: "നീതിന്യായ വിഭാഗം" } },
        { k: "D", text: { en: "Press", ml: "മാധ്യമങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Executive implements policies and laws passed by the legislature.", ml: "നിയമസഭ പാസാക്കുന്ന നിയമങ്ങൾ പ്രാവർത്തികമാക്കുന്നത് കാര്യനിർവ്വഹണ വിഭാഗമാണ്." }
    },
    {
      q_id: "ps-c4-q2",
      type: "mcq",
      stem: { en: "Ministers who are elected political leaders belong to the:", ml: "തിരഞ്ഞെടുക്കപ്പെട്ട രാഷ്ട്രീയ നേതാക്കളായ മന്ത്രിമാർ ഏത് വിഭാഗത്തിൽ ഉൾപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Permanent Executive", ml: "സ്ഥിര കാര്യനിർവ്വഹണ വിഭാഗം" } },
        { k: "B", text: { en: "Political Executive", ml: "രാഷ്ട്രീയ കാര്യനിർവ്വഹണ വിഭാഗം" } },
        { k: "C", text: { en: "Judiciary", ml: "നീതിന്യായ വിഭാഗം" } },
        { k: "D", text: { en: "Local Bodies", ml: "പ്രാദേശിക ഭരണകൂടങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Elected leaders form the political executive for a fixed term.", ml: "തിരഞ്ഞെടുക്കപ്പെട്ട മന്ത്രിമാരാണ് രാഷ്ട്രീയ കാര്യനിർവ്വഹണ വിഭാഗം." }
    },
    {
      q_id: "ps-c4-q3",
      type: "mcq",
      stem: { en: "Who are the members of the permanent executive?", ml: "സ്ഥിര കാര്യനിർവ്വഹണ വിഭാഗത്തിലെ അംഗങ്ങൾ ആരെല്ലാം?" },
      options: [
        { k: "A", text: { en: "Members of Parliament", ml: "എം.പിമാർ" } },
        { k: "B", text: { en: "Cabinet Ministers", ml: "ക്യാബിനറ്റ് മന്ത്രിമാർ" } },
        { k: "C", text: { en: "Civil Servants (Bureaucrats)", ml: "സിവിൽ സർവീസ് ഉദ്യോഗസ്ഥർ (ബ്യൂറോക്രാറ്റുകൾ)" } },
        { k: "D", text: { en: "Voters", ml: "വോട്ടർമാർ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Bureaucracy consists of appointed permanent officials.", ml: "നിയമിക്കപ്പെടുന്ന സ്ഥിര ഉദ്യോഗസ്ഥരാണ് ബ്യൂറോക്രസി." }
    },
    {
      q_id: "ps-c4-q4",
      type: "mcq",
      stem: { en: "The principle that the entire ministry resigns if they lose a confidence vote is:", ml: "ഭൂരിപക്ഷം നഷ്ടപ്പെട്ടാൽ മന്ത്രിസഭ ഒന്നടങ്കം രാജിവെക്കണം എന്ന തത്വം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Individual Responsibility", ml: "വ്യക്തിപരമായ ഉത്തരവാദിത്തം" } },
        { k: "B", text: { en: "Collective Responsibility", ml: "കൂട്ടുത്തരവാദിത്തം" } },
        { k: "C", text: { en: "Judicial Review", ml: "ജുഡീഷ്യൽ റിവ്യൂ" } },
        { k: "D", text: { en: "Federalism", ml: "ഫെഡറലിസം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Collective responsibility ensures the ministry acts as one team.", ml: "മന്ത്രിസഭയുടെ കൂട്ടായ ഉത്തരവാദിത്തത്തെയാണ് ഇത് സൂചിപ്പിക്കുന്നത്." }
    },
    {
      q_id: "ps-c4-q5",
      type: "mcq",
      stem: { en: "Which President of India famously used the 'Pocket Veto' in 1986?", ml: "1986-ൽ 'പോക്കറ്റ് വീറ്റോ' ഉപയോഗിച്ച ഇന്ത്യൻ പ്രസിഡന്റ് ആര്?" },
      options: [
        { k: "A", text: { en: "Dr. S. Radhakrishnan", ml: "ഡോ. എസ്. രാധാകൃഷ്ണൻ" } },
        { k: "B", text: { en: "Gyani Zail Singh", ml: "ഗ്യാനി സെയിൽ സിംഗ്" } },
        { k: "C", text: { en: "A.P.J. Abdul Kalam", ml: "എ.പി.ജെ. അബ്ദുൽ കലാം" } },
        { k: "D", text: { en: "Pranab Mukherjee", ml: "പ്രണബ് മുഖർജി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "He kept the Post Office Amendment Bill pending without action.", ml: "ഗ്യാനി സെയിൽ സിംഗാണ് പോസ്റ്റ് ഓഫീസ് ഭേദഗതി ബില്ലിൽ ഈ അധികാരം ഉപയോഗിച്ചത്." }
    },
    {
      q_id: "ps-c4-q6",
      type: "mcq",
      stem: { en: "In a Parliamentary system, the head of state is usually:", ml: "പാർലമെന്ററി രീതിയിൽ രാഷ്ട്രത്തലവൻ സാധാരണയായി എങ്ങനെയുള്ളവരായിരിക്കും?" },
      options: [
        { k: "A", text: { en: "Directly elected with full powers", ml: "നേരിട്ട് തിരഞ്ഞെടുക്കപ്പെട്ട സർവ്വാധികാരി" } },
        { k: "B", text: { en: "Nominal or Ceremonial head", ml: "നാമമാത്ര അല്ലെങ്കിൽ ഔദ്യോഗിക തലവൻ" } },
        { k: "C", text: { en: "A military leader", ml: "സൈനിക നേതാവ്" } },
        { k: "D", text: { en: "The Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Real power stays with the PM, while the head of state is symbolic.", ml: "പാർലമെന്ററി രീതിയിൽ പ്രസിഡന്റ് അല്ലെങ്കിൽ രാജാവ് വെറും ഒരു പ്രതീകാത്മക തലവനാണ്." }
    },
    {
      q_id: "ps-c4-q7",
      type: "mcq",
      stem: { en: "Which of the following is an example of a Presidential system?", ml: "താഴെ പറയുന്നവയിൽ പ്രസിഡൻഷ്യൽ രീതിക്ക് ഉദാഹരണം ഏത്?" },
      options: [
        { k: "A", text: { en: "India", ml: "ഇന്ത്യ" } },
        { k: "B", text: { en: "USA", ml: "അമേരിക്ക (USA)" } },
        { k: "C", text: { en: "United Kingdom", ml: "യുകെ (UK)" } },
        { k: "D", text: { en: "Germany", ml: "ജർമ്മനി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "USA follows a system where the President is both head of state and government.", ml: "അമേരിക്കയിൽ പ്രസിഡന്റിനാണ് ഭരണപരമായ എല്ലാ അധികാരങ്ങളും." }
    },
    {
      q_id: "ps-c4-q8",
      type: "mcq",
      stem: { en: "Sri Lanka follows which type of executive system?", ml: "ശ്രീലങ്ക പിന്തുടരുന്ന കാര്യനിർവ്വഹണ രീതി ഏത്?" },
      options: [
        { k: "A", text: { en: "Pure Parliamentary", ml: "പാർലമെന്ററി മാത്രം" } },
        { k: "B", text: { en: "Semi-Presidential", ml: "സെമി-പ്രസിഡൻഷ്യൽ" } },
        { k: "C", text: { en: "Absolute Monarchy", ml: "ഏകാധിപത്യ രാജഭരണം" } },
        { k: "D", text: { en: "Communist", ml: "കമ്മ്യൂണിസ്റ്റ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Sri Lanka has both an executive President and a Prime Minister.", ml: "ശ്രീലങ്കയിൽ പ്രസിഡന്റും പ്രധാനമന്ത്രിയും അധികാരം പങ്കിടുന്ന രീതിയാണുള്ളത്." }
    },
    {
      q_id: "ps-c4-q9",
      type: "mcq",
      stem: { en: "Why did India adopt the Parliamentary system?", ml: "ഇന്ത്യ എന്തുകൊണ്ടാണ് പാർലമെന്ററി രീതി തിരഞ്ഞെടുത്തത്?" },
      options: [
        { k: "A", text: { en: "To prevent personality cult and ensure responsibility", ml: "വ്യക്തിപൂജ ഒഴിവാക്കാനും ഉത്തരവാദിത്തം ഉറപ്പാക്കാനും" } },
        { k: "B", text: { en: "Because it was easy to manage", ml: "അത് നിയന്ത്രിക്കാൻ എളുപ്പമായതുകൊണ്ട്" } },
        { k: "C", text: { en: "To give all powers to the President", ml: "പ്രസിഡന്റിന് എല്ലാ അധികാരവും നൽകാൻ" } },
        { k: "D", text: { en: "Because of military order", ml: "സൈനിക ഉത്തരവ് പ്രകാരം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Makers wanted a system where the executive is controlled by representatives.", ml: "ജനങ്ങളോട് മറുപടി പറയാൻ ബാധ്യസ്ഥരായ ഒരു ഭരണകൂടത്തെയാണ് ശില്പികൾ ആഗ്രഹിച്ചത്." }
    },
    {
      q_id: "ps-c4-q10",
      type: "mcq",
      stem: { en: "How is the President of India elected?", ml: "ഇന്ത്യൻ പ്രസിഡന്റിനെ എങ്ങനെയാണ് തിരഞ്ഞെടുക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Directly by the people", ml: "ജനങ്ങളാൽ നേരിട്ട്" } },
        { k: "B", text: { en: "By an Electoral College of MPs and MLAs", ml: "എം.എൽ.എമാരും എം.പിമാരും അടങ്ങുന്ന സമിതി" } },
        { k: "C", text: { en: "By the Supreme Court", ml: "സുപ്രീം കോടതി വഴി" } },
        { k: "D", text: { en: "By the Speaker", ml: "സ്പീക്കർ വഴി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The election is indirect, involving elected representatives of states and union.", ml: "ജനപ്രതിനിധികൾ അടങ്ങുന്ന ഇലക്ടറൽ കോളേജ് ആണ് പ്രസിഡന്റിനെ തിരഞ്ഞെടുക്കുന്നത്." }
    },
    {
      q_id: "ps-c4-q11",
      type: "mcq",
      stem: { en: "Who can remove the President through Impeachment?", ml: "ഇംപീച്ച്‌മെന്റ് വഴി പ്രസിഡന്റിനെ നീക്കം ചെയ്യാൻ ആർക്കാണ് അധികാരം?" },
      options: [
        { k: "A", text: { en: "The Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "B", text: { en: "The Parliament", ml: "പാർലമെന്റ്" } },
        { k: "C", text: { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { k: "D", text: { en: "The Police", ml: "പോലീസ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Parliament can remove the President for violation of the Constitution.", ml: "ഭരണഘടനാ ലംഘനം നടന്നാൽ പാർലമെന്റിന് പ്രസിഡന്റിനെ പുറത്താക്കാം." }
    },
    {
      q_id: "ps-c4-q12",
      type: "mcq",
      stem: { en: "Article 74(1) of the Constitution deals with:", ml: "ഭരണഘടനയുടെ 74(1) വകുപ്പ് ഏതുമായി ബന്ധപ്പെട്ടതാണ്?" },
      options: [
        { k: "A", text: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" } },
        { k: "B", text: { en: "Advice of Council of Ministers to the President", ml: "മന്ത്രിസഭ പ്രസിഡന്റിന് നൽകുന്ന ഉപദേശം" } },
        { k: "C", text: { en: "Election rules", ml: "തിരഞ്ഞെടുപ്പ് നിയമങ്ങൾ" } },
        { k: "D", text: { en: "Village Panchayats", ml: "ഗ്രാമപഞ്ചായത്തുകൾ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "The President must act according to the advice of the Council of Ministers.", ml: "മന്ത്രിസഭയുടെ ഉപദേശപ്രകാരം പ്രസിഡന്റ് പ്രവർത്തിക്കണമെന്ന് ഈ വകുപ്പ് പറയുന്നു." }
    },
    {
      q_id: "ps-c4-q13",
      type: "mcq",
      stem: { en: "The power to send back advice for reconsideration is a _______ power.", ml: "നിർദ്ദേശം പുനഃപരിശോധിക്കാൻ തിരിച്ചയക്കുന്നത് പ്രസിഡന്റിന്റെ എന്ത് അധികാരമാണ്?" },
      options: [
        { k: "A", text: { en: "Mandatory", ml: "നിർബന്ധിത" } },
        { k: "B", text: { en: "Discretionary", ml: "വിവേചനാധികാരം" } },
        { k: "C", text: { en: "Military", ml: "സൈനിക" } },
        { k: "D", text: { en: "Legislative", ml: "നിയമനിർമ്മാണ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is one of the situations where the President uses his own judgment.", ml: "പ്രസിഡന്റിന് സ്വന്തം നിലയ്ക്ക് ചെയ്യാവുന്ന കാര്യമാണിത്." }
    },
    {
      q_id: "ps-c4-q14",
      type: "mcq",
      stem: { en: "If the Council of Ministers returns the same advice after reconsideration, the President:", ml: "പുനഃപരിശോധനയ്ക്ക് ശേഷം അതേ നിർദ്ദേശം തന്നെ മന്ത്രിസഭ നൽകിയാൽ പ്രസിഡന്റ്:" },
      options: [
        { k: "A", text: { en: "Can reject it again", ml: "വീണ്ടും തള്ളിക്കളയാം" } },
        { k: "B", text: { en: "Is bound to follow it", ml: "അത് അനുസരിക്കാൻ ബാധ്യസ്ഥനാണ്" } },
        { k: "C", text: { en: "Can dissolve the Parliament", ml: "പാർലമെന്റ് പിരിച്ചുവിടാം" } },
        { k: "D", text: { en: "Can call the army", ml: "സൈന്യത്തെ വിളിക്കാം" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "The second time, the advice of the Council is binding on the President.", ml: "രണ്ടാം തവണ നൽകുന്ന ഉപദേശം അനുസരിക്കാൻ പ്രസിഡന്റ് ബാധ്യസ്ഥനാണ്." }
    },
    {
      q_id: "ps-c4-q15",
      type: "mcq",
      stem: { en: "The President can use discretion to appoint a PM when:", ml: "പ്രധാനമന്ത്രിയെ നിയമിക്കുന്നതിൽ പ്രസിഡന്റ് എപ്പോഴാണ് വിവേചനാധികാരം ഉപയോഗിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Always", ml: "എപ്പോഴും" } },
        { k: "B", text: { en: "In case of a hung Parliament (no clear majority)", ml: "ആർക്കും ഭൂരിപക്ഷമില്ലാത്ത അവസ്ഥയിൽ (തൂക്കുമന്ത്രിസഭ)" } },
        { k: "C", text: { en: "Only after a war", ml: "യുദ്ധത്തിന് ശേഷം മാത്രം" } },
        { k: "D", text: { en: "Every year", ml: "എല്ലാ വർഷവും" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "In such cases, the President decides who can provide a stable government.", ml: "ആർക്കും ഭൂരിപക്ഷമില്ലാത്തപ്പോൾ ആര് ഭരിക്കണമെന്ന് പ്രസിഡന്റ് തീരുമാനിക്കുന്നു." }
    },
    {
      q_id: "ps-c4-q16",
      type: "mcq",
      stem: { en: "Who is described as the 'linchpin of Government'?", ml: "ഗവൺമെന്ററിന്റെ നെടുംതൂൺ എന്ന് വിശേഷിപ്പിക്കപ്പെടുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "C", text: { en: "Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" } },
        { k: "D", text: { en: "Governor", ml: "ഗവർണർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The PM is the central point around which the government functions.", ml: "ഭരണസംവിധാനത്തിലെ കേന്ദ്രബിന്ദു പ്രധാനമന്ത്രിയാണ്." }
    },
    {
      q_id: "ps-c4-q17",
      type: "mcq",
      stem: { en: "Who formally appoints the Prime Minister?", ml: "പ്രധാനമന്ത്രിയെ ഔദ്യോഗികമായി നിയമിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The Speaker", ml: "സ്പീക്കർ" } },
        { k: "B", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "The People", ml: "ജനങ്ങൾ" } },
        { k: "D", text: { en: "Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The President appoints the leader of the majority party as PM.", ml: "ഭൂരിപക്ഷ നേതാവിനെ പ്രസിഡന്റാണ് പ്രധാനമന്ത്രിയായി നിയമിക്കുന്നത്." }
    },
    {
      q_id: "ps-c4-q18",
      type: "mcq",
      stem: { en: "The 91st Amendment (2003) restricted the size of Council of Ministers to:", ml: "91-ാം ഭേദഗതി പ്രകാരം മന്ത്രിസഭയുടെ പരമാവധി അംഗസംഖ്യ എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "10% of Lok Sabha", ml: "ലോക്‌സഭയുടെ 10%" } },
        { k: "B", text: { en: "15% of Lok Sabha", ml: "ലോക്‌സഭയുടെ 15%" } },
        { k: "C", text: { en: "20% of Lok Sabha", ml: "ലോക്‌സഭയുടെ 20%" } },
        { k: "D", text: { en: "50 members", ml: "50 അംഗങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "This amendment prevents jumbo cabinets.", ml: "വലിയ മന്ത്രിസഭകൾ ഒഴിവാക്കാനാണ് ഈ പരിധി കൊണ്ടുവന്നത്." }
    },
    {
      q_id: "ps-c4-q19",
      type: "mcq",
      stem: { en: "Collective Responsibility means that if a government loses a confidence vote:", ml: "കൂട്ടുത്തരവാദിത്തം അനുസരിച്ച് ഗവൺമെന്റിന് ഭൂരിപക്ഷം നഷ്ടപ്പെട്ടാൽ:" },
      options: [
        { k: "A", text: { en: "Only PM resigns", ml: "പ്രധാനമന്ത്രി മാത്രം രാജിവെക്കുന്നു" } },
        { k: "B", text: { en: "The entire Council of Ministers must resign", ml: "മന്ത്രിസഭ ഒന്നടങ്കം രാജിവെക്കണം" } },
        { k: "C", text: { en: "Nothing happens", ml: "ഒന്നും സംഭവിക്കുന്നില്ല" } },
        { k: "D", text: { en: "President is removed", ml: "പ്രസിഡന്റിനെ മാറ്റുന്നു" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The entire ministry is responsible to the legislature as a single body.", ml: "മന്ത്രിസഭ ഒന്നടങ്കമാണ് ജനങ്ങളോട് ഉത്തരവാദിത്തം പുലർത്തേണ്ടത്." }
    },
    {
      q_id: "ps-c4-q20",
      type: "mcq",
      stem: { en: "Political neutrality is an expected feature of:", ml: "രാഷ്ട്രീയ നിഷ്പക്ഷത ആരുടെ സവിശേഷതയാണ്?" },
      options: [
        { k: "A", text: { en: "Political Executive", ml: "രാഷ്ട്രീയ കാര്യനിർവ്വഹണ വിഭാഗം" } },
        { k: "B", text: { en: "Permanent Executive (Bureaucracy)", ml: "സ്ഥിര കാര്യനിർവ്വഹണ വിഭാഗം (ബ്യൂറോക്രസി)" } },
        { k: "C", text: { en: "Political Parties", ml: "രാഷ്ട്രീയ പാർട്ടികൾ" } },
        { k: "D", text: { en: "Candidates", ml: "സ്ഥാനാർത്ഥികൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Civil servants should serve the government of the day without bias.", ml: "ഉദ്യോഗസ്ഥർ രാഷ്ട്രീയ പക്ഷഭേദമില്ലാതെ പ്രവർത്തിക്കണം." }
    },
    {
      q_id: "ps-c4-q21",
      type: "mcq",
      stem: { en: "Who conducts recruitment for All-India services like IAS and IPS?", ml: "ഐ.എ.എസ്, ഐ.പി.എസ് പോലുള്ള സർവീസുകളിലേക്ക് നിയമനം നടത്തുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "State PSC", ml: "സ്റ്റേറ്റ് പി.എസ്.സി" } },
        { k: "B", text: { en: "UPSC", ml: "യു.പി.എസ്.സി (UPSC)" } },
        { k: "C", text: { en: "Police Department", ml: "പോലീസ് വകുപ്പ്" } },
        { k: "D", text: { en: "Cabinet", ml: "മന്ത്രിസഭ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Union Public Service Commission conducts these exams centrally.", ml: "കേന്ദ്രതലത്തിൽ യു.പി.എസ്.സി ആണ് ഇത്തരം പരീക്ഷകൾ നടത്തുന്നത്." }
    },
    {
      q_id: "ps-c4-q22",
      type: "mcq",
      stem: { en: "The primary purpose of job reservations in civil services is to:", ml: "സിവിൽ സർവീസിൽ സംവരണം നൽകുന്നതിന്റെ പ്രധാന ലക്ഷ്യം:" },
      options: [
        { k: "A", text: { en: "Ensure representation of marginalized groups", ml: "പിന്നോക്ക വിഭാഗങ്ങൾക്ക് പ്രാതിനിധ്യം ഉറപ്പാക്കാൻ" } },
        { k: "B", text: { en: "Help only rich people", ml: "സമ്പന്നരെ മാത്രം സഹായിക്കാൻ" } },
        { k: "C", text: { en: "Reduce the number of jobs", ml: "ജോലികളുടെ എണ്ണം കുറയ്ക്കാൻ" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Reservations help in making the administration socially inclusive.", ml: "എല്ലാ വിഭാഗങ്ങൾക്കും ഭരണത്തിൽ പങ്കാളിത്തം നൽകാനാണ് സംവരണം." }
    },
    {
      q_id: "ps-c4-q23",
      type: "mcq",
      stem: { en: "Which of these is an example of an All-India Service?", ml: "താഴെ പറയുന്നവയിൽ അഖിലേന്ത്യാ സർവീസിന് ഉദാഹരണം ഏത്?" },
      options: [
        { k: "A", text: { en: "Sales Tax Service", ml: "സെയിൽസ് ടാക്സ് സർവീസ്" } },
        { k: "B", text: { en: "Indian Police Service (IPS)", ml: "ഐ.പി.എസ് (IPS)" } },
        { k: "C", text: { en: "State Civil Service", ml: "സംസ്ഥാന സിവിൽ സർവീസ്" } },
        { k: "D", text: { en: "Village Office", ml: "വില്ലേജ് ഓഫീസ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "IPS and IAS are All-India services serving both center and states.", ml: "ഐ.എ.എസ് ഉം ഐ.പി.എസ് ഉം അഖിലേന്ത്യാ സർവീസുകളാണ്." }
    },
    {
      q_id: "ps-c4-q24",
      type: "mcq",
      stem: { en: "The Indian Foreign Service (IFS) is a:", ml: "ഇന്ത്യൻ ഫോറിൻ സർവീസ് (IFS) ഏത് വിഭാഗത്തിൽ പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "State Service", ml: "സംസ്ഥാന സർവീസ്" } },
        { k: "B", text: { en: "Central Service", ml: "കേന്ദ്ര സർവീസ് (Central Service)" } },
        { k: "C", text: { en: "Local Service", ml: "പ്രാദേശിക സർവീസ്" } },
        { k: "D", text: { en: "Military Service", ml: "സൈനിക സർവീസ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Central services work directly under the Union government.", ml: "കേന്ദ്ര ഗവൺമെന്റിന് കീഴിൽ വരുന്നതാണ് IFS." }
    },
    {
      q_id: "ps-c4-q25",
      type: "mcq",
      stem: { en: "Who is the ex-officio Chairman of the Rajya Sabha?", ml: "രാജ്യസഭയുടെ ഔദ്യോഗിക ചെയർമാൻ ആരാണ്?" },
      options: [
        { k: "A", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "B", text: { en: "Vice President", ml: "വൈസ് പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "Speaker", ml: "സ്പീക്കർ" } },
        { k: "D", text: { en: "President", ml: "പ്രസിഡന്റ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Vice President of India heads the Rajya Sabha.", ml: "ഇന്ത്യയുടെ വൈസ് പ്രസിഡന്റാണ് രാജ്യസഭയുടെ അധ്യക്ഷൻ." }
    },
    {
      q_id: "ps-c4-q26",
      type: "mcq",
      stem: { en: "How is the Vice President elected?", ml: "വൈസ് പ്രസിഡന്റിനെ എങ്ങനെയാണ് തിരഞ്ഞെടുക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "By members of both houses of Parliament", ml: "പാർലമെന്റിലെ ഇരുസഭകളിലുമുള്ള അംഗങ്ങളാൽ" } },
        { k: "B", text: { en: "Directly by the people", ml: "ജനങ്ങളാൽ നേരിട്ട്" } },
        { k: "C", text: { en: "By State MLAs only", ml: "എം.എൽ.എമാർ മാത്രം വഴി" } },
        { k: "D", text: { en: "By the PM", ml: "പ്രധാനമന്ത്രി വഴി" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Both Lok Sabha and Rajya Sabha members (MPs) elect the VP.", ml: "എം.പിമാരാണ് വൈസ് പ്രസിഡന്റിനെ തിരഞ്ഞെടുക്കുന്നത്." }
    },
    {
      q_id: "ps-c4-q27",
      type: "mcq",
      stem: { en: "In coalition governments, the Prime Minister acts more as a:", ml: "സഖ്യകക്ഷികളുടെ ഭരണത്തിൽ പ്രധാനമന്ത്രി എങ്ങനെയാണ് പ്രവർത്തിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Supreme Leader", ml: "സർവ്വാധികാരി" } },
        { k: "B", text: { en: "Negotiator and coordinator", ml: "ചർച്ചകൾ നടത്തുന്നവരും ഏകോപിപ്പിക്കുന്നവരും" } },
        { k: "C", text: { en: "Dictator", ml: "ഏകാധിപതി" } },
        { k: "D", text: { en: "Police Officer", ml: "പോലീസ് ഓഫീസർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Coalitions require managing different party interests.", ml: "സഖ്യകക്ഷികളെ ഒപ്പം കൊണ്ടുപോകേണ്ടതുകൊണ്ട് വിട്ടുവീഴ്ചകൾ ചെയ്യേണ്ടി വരും." }
    },
    {
      q_id: "ps-c4-q28",
      type: "mcq",
      stem: { en: "The formal head at the state level is:", ml: "സംസ്ഥാന തലത്തിലുള്ള ഔദ്യോഗിക തലവൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Chief Minister", ml: "മുഖ്യമന്ത്രി" } },
        { k: "B", text: { en: "Governor", ml: "ഗവർണർ" } },
        { k: "C", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "D", text: { en: "Collector", ml: "കളക്ടർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Governor is the constitutional head of a state.", ml: "സംസ്ഥാനത്തിന്റെ ഔദ്യോഗിക തലവൻ ഗവർണറാണ്." }
    },
    {
      q_id: "ps-c4-q29",
      type: "mcq",
      stem: { en: "Why is the pocket veto called an 'informal' power?", ml: "എന്തുകൊണ്ടാണ് പോക്കറ്റ് വീറ്റോ ഒരു 'അനൗദ്യോഗിക' അധികാരമായി അറിയപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Because there is no time limit set in the Constitution for signing a bill", ml: "ബില്ലുകളിൽ ഒപ്പിടാൻ ഭരണഘടന സമയപരിധി വെച്ചിട്ടില്ലാത്തതുകൊണ്ട്" } },
        { k: "B", text: { en: "Because it is illegal", ml: "അത് നിയമവിരുദ്ധമായതുകൊണ്ട്" } },
        { k: "C", text: { en: "Because only poor people use it", ml: "പാവപ്പെട്ടവർ മാത്രം ഉപയോഗിക്കുന്നതുകൊണ്ട്" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Since no time limit exists, the President can keep it pending forever.", ml: "ഭരണഘടനയിലെ ഈ അവ്യക്തതയാണ് പ്രസിഡന്റിന് ഇങ്ങനെയൊരു അധികാരം നൽകുന്നത്." }
    },
    {
      q_id: "ps-c4-q30",
      type: "mcq",
      stem: { en: "The real executive power in India is exercised by:", ml: "ഇന്ത്യയിൽ യഥാർത്ഥത്തിൽ അധികാരം പ്രയോഗിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "The Prime Minister and the Council of Ministers", ml: "പ്രധാനമന്ത്രിയും മന്ത്രിസഭയും" } },
        { k: "C", text: { en: "The Army", ml: "സൈന്യം" } },
        { k: "D", text: { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Effective political decisions are made by the PM and cabinet.", ml: "യഥാർത്ഥ അധികാരങ്ങൾ ഉപയോഗിക്കുന്നത് പ്രധാനമന്ത്രിയും മന്ത്രിമാരുമാണ്." }
    }
  ]
};
export const plusOnePoliticalSciencePart1Unit5: Lesson = {
  id: "pl-ps-11-p1-u5",
  title: { en: "Legislature", ml: "നിയമനിർമ്മാണ വിഭാഗം (Legislature)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=vs984NfifWE",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the importance of the legislature in a democracy", ml: "ജനാധിപത്യത്തിൽ നിയമനിർമ്മാണ വിഭാഗത്തിന്റെ പ്രാധാന്യം മനസ്സിലാക്കുക" },
    { en: "Distinguish between the powers of Lok Sabha and Rajya Sabha", ml: "ലോക്‌സഭയുടെയും രാജ്യസഭയുടെയും അധികാരങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയുക" },
    { en: "Explain the process of law-making in India", ml: "ഇന്ത്യയിലെ നിയമനിർമ്മാണ പ്രക്രിയ വിവരിക്കുക" },
    { en: "Analyze how Parliament controls the executive", ml: "പാർലമെന്റ് എങ്ങനെയാണ് കാര്യനിർവ്വഹണ വിഭാഗത്തെ നിയന്ത്രിക്കുന്നത് എന്ന് വിശകലനം ചെയ്യുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the legislative organ of the government, focusing on the Parliament of India and its two houses.", 
      ml: "ഗവൺമെന്റിന്റെ നിയമനിർമ്മാണ വിഭാഗത്തെക്കുറിച്ചും ഇന്ത്യൻ പാർലമെന്റിനെക്കുറിച്ചും അതിന്റെ രണ്ട് സഭകളെക്കുറിച്ചും ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of the composition, powers, and functions of Lok Sabha and Rajya Sabha, along with the law-making process and anti-defection law.", 
      ml: "ലോക്‌സഭ, രാജ്യസഭ എന്നിവയുടെ ഘടന, അധികാരങ്ങൾ, ചുമതലകൾ എന്നിവയോടൊപ്പം നിയമനിർമ്മാണ പ്രക്രിയയെയും കൂറുമാറ്റ നിരോധന നിയമത്തെയും കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the legislative organ of the government, focusing on the Parliament of India and State Legislatures. It explains why a two-house (Bicameral) system is used, the composition and powers of the Rajya Sabha and Lok Sabha, how laws are made, and how the Parliament controls the executive.', ml: 'ഗവൺമെന്റിന്റെ നിയമനിർമ്മാണ വിഭാഗത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. ഇന്ത്യൻ പാർലമെന്റ്, സംസ്ഥാന നിയമസഭകൾ എന്നിവയ്ക്ക് ഇവിടെ ഊന്നൽ നൽകുന്നു. എന്തുകൊണ്ടാണ് ദ്വിമണ്ഡല സഭ (Bicameral system) ഉപയോഗിക്കുന്നത് എന്നും രാജ്യസഭ, ലോക്‌സഭ എന്നിവയുടെ ഘടനയും അധികാരങ്ങളും നിയമനിർമ്മാണ രീതിയും പാർലമെന്റ് എങ്ങനെയാണ് കാര്യനിർവ്വഹണ വിഭാഗത്തെ നിയന്ത്രിക്കുന്നത് എന്നും ഇത് വിശദീകരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Bicameral Legislature', ml: 'ദ്വിമണ്ഡല നിയമസഭ (Bicameral Legislature)'}, {en: 'A legislature consisting of two houses or chambers.', ml: 'രണ്ട് സഭകളുള്ള നിയമനിർമ്മാണ സഭ.'}, {en: 'The Indian Parliament (LS & RS).', ml: 'ഇന്ത്യൻ പാർലമെന്റ് (ലോക്‌സഭയും രാജ്യസഭയും).'}],
          [{en: 'Money Bill', ml: 'ധനകാര്യ ബില്ല് (Money Bill)'}, {en: 'A bill related to taxation, borrowing, etc.', ml: 'നികുതി, കടമെടുപ്പ് തുടങ്ങിയ സാമ്പത്തിക കാര്യങ്ങളുമായി ബന്ധപ്പെട്ട ബില്ല്.'}, {en: 'Introduced only in Lok Sabha.', ml: 'ലോക്‌സഭയിൽ മാത്രമേ അവതരിപ്പിക്കാൻ കഴിയൂ.'}],
          [{en: 'No-Confidence Motion', ml: 'അവിശ്വാസ പ്രമേയം (No-Confidence Motion)'}, {en: 'A vote stating that the government is no longer fit to rule.', ml: 'ഗവൺമെന്റിന് സഭയുടെ പിന്തുണയില്ലെന്ന് വ്യക്തമാക്കുന്ന പ്രമേയം.'}, {en: 'Used to remove the Council of Ministers.', ml: 'മന്ത്രിസഭയെ പുറത്താക്കാൻ ഉപയോഗിക്കുന്നു.'}],
          [{en: 'Anti-Defection Law', ml: 'കൂറുമാറ്റ നിരോധന നിയമം (Anti-Defection Law)'}, {en: 'Law preventing members from changing parties after election.', ml: 'തിരഞ്ഞെടുപ്പിന് ശേഷം രാഷ്ട്രീയ പാർട്ടി മാറുന്ന അംഗങ്ങളെ അയോഗ്യരാക്കുന്ന നിയമം.'}, {en: '10th Schedule of the Constitution.', ml: 'ഭരണഘടനയുടെ 10-ാം ഷെഡ്യൂൾ.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 Why do we need a Parliament?', ml: '3.1 നമുക്ക് എന്തുകൊണ്ട് ഒരു പാർലമെന്റ് വേണം?' },
      { type: 'ul', items: [
        { en: 'Legislature is the center of all democratic political processes.', ml: 'എല്ലാ ജനാധിപത്യ രാഷ്ട്രീയ പ്രക്രിയകളുടെയും കേന്ദ്രമാണ് നിയമനിർമ്മാണ സഭ.' },
        { en: 'It is the place where protest, unanimity, and cooperation are expressed.', ml: 'പ്രതിഷേധങ്ങളും സഹകരണങ്ങളും സമവായങ്ങളും പ്രകടിപ്പിക്കപ്പെടുന്ന ഇടമാണിത്.' },
        { en: 'It ensures that the executive is accountable to the people.', ml: 'കാര്യനിർവ്വഹണ വിഭാഗത്തിന് ജനങ്ങളോട് ഉത്തരവാദിത്തമുണ്ടെന്ന് ഇത് ഉറപ്പാക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.2 Why Two Houses of Parliament?', ml: '3.2 എന്തുകൊണ്ട് രണ്ട് സഭകൾ?' },
      { type: 'p', en: 'The Indian Parliament consists of the President and two Houses: Rajya Sabha and Lok Sabha.', ml: 'ഇന്ത്യൻ പാർലമെന്റിൽ പ്രസിഡന്റും രണ്ട് സഭകളും (രാജ്യസഭ, ലോക്‌സഭ) ഉൾപ്പെടുന്നു.' },
      { type: 'ul', items: [
        { en: 'Provides representation to all sections and regions.', ml: 'സമൂഹത്തിലെ എല്ലാ വിഭാഗങ്ങൾക്കും പ്രദേശങ്ങൾക്കും പ്രാതിനിധ്യം നൽകുന്നു.' },
        { en: 'Ensures a double check on every decision.', ml: 'ഓരോ തീരുമാനവും രണ്ട് സഭകളിലും ചർച്ച ചെയ്യപ്പെടുന്നു എന്ന് ഉറപ്പാക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.3 Rajya Sabha (Council of States)', ml: '3.3 രാജ്യസഭ (Rajya Sabha)' },
      { type: 'ul', items: [
        { en: 'Representation: Represents the States of India.', ml: 'പ്രാതിനിധ്യം: ഇന്ത്യയിലെ സംസ്ഥാനങ്ങളെ പ്രതിനിധീകരിക്കുന്നു.' },
        { en: 'Term: Permanent house; members elected for 6 years.', ml: 'കാലാവധി: ഇതൊരു സ്ഥിരം സഭയാണ്. അംഗങ്ങളുടെ കാലാവധി 6 വർഷമാണ്.' },
        { en: 'Composition: 233 elected + 12 nominated by the President.', ml: 'ഘടന: 233 തിരഞ്ഞെടുക്കപ്പെട്ടവരും 12 പേർ പ്രസിഡന്റ് നാമനിർദ്ദേശം ചെയ്തവരുമാണ്.' }
      ]},

      { type: 'h3', en: '3.4 Lok Sabha (House of the People)', ml: '3.4 ലോക്‌സഭ (Lok Sabha)' },
      { type: 'ul', items: [
        { en: 'Representation: Represents the people directly.', ml: 'പ്രാതിനിധ്യം: ജനങ്ങളെ നേരിട്ട് പ്രതിനിധീകരിക്കുന്നു.' },
        { en: 'Term: 5 years (can be dissolved earlier).', ml: 'കാലാവധി: 5 വർഷം (അതിനു മുൻപും പിരിച്ചുവിടാം).' },
        { en: 'Composition: Currently 543 elected members.', ml: 'ഘടന: നിലവിൽ 543 തിരഞ്ഞെടുക്കപ്പെട്ട അംഗങ്ങൾ.' }
      ]},

      { type: 'h3', en: '3.5 Functions of Parliament', ml: '3.5 പാർലമെന്റിന്റെ ചുമതലകൾ (Functions of Parliament)' },
      { type: 'ul', items: [
        { en: 'Legislative: Making laws for the entire country.', ml: 'നിയമനിർമ്മാണം: രാജ്യത്തിനാവശ്യമായ നിയമങ്ങൾ നിർമ്മിക്കുന്നു.' },
        { en: 'Financial: Approving the government’s budget and taxes.', ml: 'സാമ്പത്തികം: ബജറ്റും നികുതികളും അംഗീകരിക്കുന്നു.' },
        { en: 'Constituent: Power to amend the Constitution.', ml: 'ഭരണഘടനാപരമായത്: ഭരണഘടന ഭേദഗതി ചെയ്യാനുള്ള അധികാരം.' }
      ]},

      { type: 'h3', en: '3.6 How does the Parliament make Laws?', ml: '3.6 പാർലമെന്റ് എങ്ങനെയാണ് നിയമങ്ങൾ നിർമ്മിക്കുന്നത്?' },
      { type: 'p', en: 'A Bill is a draft of a proposed law. It becomes an Act after passing through both houses and getting the President\'s assent.', ml: 'നിയമത്തിന്റെ കരട് രൂപത്തെയാണ് ബില്ല് എന്ന് വിളിക്കുന്നത്. രണ്ട് സഭകളും പാസാക്കി പ്രസിഡന്റ് ഒപ്പുവെക്കുന്നതോടെ ഇത് നിയമമായി മാറുന്നു.' },
      { type: 'ul', items: [
        { en: 'Money Bills: Only Lok Sabha can initiate them. Rajya Sabha can only delay for 14 days.', ml: 'ധനകാര്യ ബില്ലുകൾ: ലോക്‌സഭയിൽ മാത്രമേ അവതരിപ്പിക്കാൻ കഴിയൂ. രാജ്യസഭയ്ക്ക് ഇത് 14 ദിവസം വരെ മാത്രമേ വൈകിപ്പിക്കാൻ കഴിയൂ.' }
      ]},

      { type: 'h3', en: '3.7 How does the Parliament Control the Executive?', ml: '3.7 പാർലമെന്റ് എങ്ങനെയാണ് കാര്യനിർവ്വഹണ വിഭാഗത്തെ നിയന്ത്രിക്കുന്നത്?' },
      { type: 'ul', items: [
        { en: 'Question Hour: 11 AM to 12 PM for asking questions to ministers.', ml: 'ചോദ്യോത്തര വേള (Question Hour): മന്ത്രിമാരോട് ചോദ്യങ്ങൾ ചോദിക്കാനുള്ള സമയം.' },
        { en: 'Zero Hour: Members can raise any important issue.', ml: 'ശൂന്യവേള (Zero Hour): പ്രധാനപ്പെട്ട ഏത് വിഷയവും ഉന്നയിക്കാം.' },
        { en: 'No-Confidence Motion: Most powerful tool to remove the government.', ml: 'അവിശ്വാസ പ്രമേയം: ഗവൺമെന്റിനെ പുറത്താക്കാനുള്ള ഏറ്റവും ശക്തമായ മാർഗ്ഗം.' }
      ]},

      { type: 'h3', en: '3.8 Anti-Defection Law (10th Schedule)', ml: '3.8 കൂറുമാറ്റ നിരോധന നിയമം (Anti-Defection Law)' },
      { type: 'ul', items: [
        { en: 'Prevents elected members from changing parties after election.', ml: 'തിരഞ്ഞെടുക്കപ്പെട്ട അംഗങ്ങൾ പാർട്ടി മാറുന്നത് തടയുന്നു.' },
        { en: 'Presiding Officer (Speaker/Chairman) decides on disqualification.', ml: 'സഭാധ്യക്ഷനാണ് അയോഗ്യത സംബന്ധിച്ച് തീരുമാനമെടുക്കുന്നത്.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Rajya Sabha has special powers to protect State interests (Article 249).', ml: 'സംസ്ഥാനങ്ങളുടെ താൽപ്പര്യങ്ങൾ സംരക്ഷിക്കാൻ രാജ്യസഭയ്ക്ക് പ്രത്യേക അധികാരമുണ്ട് (ആർട്ടിക്കിൾ 249).' },
        { en: 'A Joint Session is presided over by the Speaker.', ml: 'സഭകളുടെ സംയുക്ത സമ്മേളനത്തിൽ സ്പീക്കറാണ് അധ്യക്ഷത വഹിക്കുന്നത്.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Lok Sabha is more powerful in financial matters.', ml: 'സാമ്പത്തിക കാര്യങ്ങളിൽ ലോക്‌സഭയ്ക്കാണ് കൂടുതൽ അധികാരം.' },
        { en: 'Question Hour is key for accountability.', ml: 'ചോദ്യോത്തര വേള ഗവൺമെന്റിന്റെ ഉത്തരവാദിത്തം ഉറപ്പാക്കുന്നു.' },
        { en: 'Anti-Defection law ensures political stability.', ml: 'കൂറുമാറ്റ നിരോധന നിയമം രാഷ്ട്രീയ സ്ഥിരത ഉറപ്പാക്കുന്നു.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Bicameral Legislature",
      "ml": "ദ്വിമണ്ഡല നിയമസഭ (Bicameral Legislature)"
    },
    "definition": {
      "en": "A legislative system with two houses (e.g., Rajya Sabha and Lok Sabha in India).",
      "ml": "രണ്ട് സഭകളുള്ള നിയമനിർമ്മാണ സംവിധാനം (ഉദാഹരണത്തിന്, ഇന്ത്യയിലെ രാജ്യസഭയും ലോക്സഭയും)."
    }
  },
  {
    "term": {
      "en": "Rajya Sabha",
      "ml": "രാജ്യസഭ (Rajya Sabha)"
    },
    "definition": {
      "en": "The upper house of Parliament, which represents the Indian states and is indirectly elected.",
      "ml": "ഇന്ത്യൻ സംസ്ഥാനങ്ങളെ പ്രതിനിധീകരിക്കുന്ന, പരോക്ഷമായി തിരഞ്ഞെടുക്കപ്പെടുന്ന പാർലമെന്റിന്റെ ഉപരിസഭ."
    }
  },
  {
    "term": {
      "en": "Lok Sabha",
      "ml": "ലോകസഭ (Lok Sabha)"
    },
    "definition": {
      "en": "The lower house of Parliament, directly elected by the people.",
      "ml": "ജനങ്ങളാൽ നേരിട്ട് തിരഞ്ഞെടുക്കപ്പെടുന്ന പാർലമെന്റിന്റെ അധോസഭ."
    }
  },
  {
    "term": {
      "en": "Money Bill",
      "ml": "ധനബിൽ (Money Bill)"
    },
    "definition": {
      "en": "A bill related to taxes and government expenditures that can only be introduced in the Lok Sabha.",
      "ml": "നികുതി, ഗവൺമെന്റ് ചെലവുകൾ എന്നിവയുമായി ബന്ധപ്പെട്ട, ലോക്സഭയിൽ മാത്രം അവതരിപ്പിക്കാൻ കഴിയുന്ന ബിൽ."
    }
  },
  {
    "term": {
      "en": "Question Hour",
      "ml": "ചോദ്യോത്തര വേള (Question Hour)"
    },
    "definition": {
      "en": "A time set aside during parliamentary sessions for directly asking questions to ministers to control the executive.",
      "ml": "എക്സിക്യൂട്ടീവിനെ നിയന്ത്രിക്കുന്നതിനായി, മന്ത്രിമാരോട് നേരിട്ട് ചോദ്യങ്ങൾ ചോദിക്കാൻ പാർലമെന്റ് സമ്മേളനങ്ങളിൽ മാറ്റിവെക്കുന്ന സമയം."
    }
  },
  {
    "term": {
      "en": "Anti-defection Law",
      "ml": "ഫിരാവൽ നിരോധന നിയമം (Anti-defection Law)"
    },
    "definition": {
      "en": "A law introduced to prevent elected representatives from switching parties (52nd and 91st amendments).",
      "ml": "തിരഞ്ഞെടുക്കപ്പെട്ട ശേഷം ജനപ്രതിനിധികൾ പാർട്ടി മാറുന്നത് തടയാൻ കൊണ്ടുവന്ന നിയമം (52, 91 ഭേദഗതികൾ)."
    }
  }
],
  quiz: [
    {
      q_id: "ps-c5-q1",
      type: "mcq",
      stem: { en: "The Indian Parliament consists of:", ml: "ഇന്ത്യൻ പാർലമെന്റിൽ ഉൾപ്പെടുന്നത് ആരെല്ലാം?" },
      options: [
        { k: "A", text: { en: "Lok Sabha and Rajya Sabha", ml: "ലോക്‌സഭയും രാജ്യസഭയും" } },
        { k: "B", text: { en: "President, Lok Sabha and Rajya Sabha", ml: "പ്രസിഡന്റ്, ലോക്‌സഭ, രാജ്യസഭ" } },
        { k: "C", text: { en: "PM, Lok Sabha and Rajya Sabha", ml: "പ്രധാനമന്ത്രി, ലോക്‌സഭ, രാജ്യസഭ" } },
        { k: "D", text: { en: "Lok Sabha only", ml: "ലോക്‌സഭ മാത്രം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Technically, the Parliament includes the President and the two Houses.", ml: "പ്രസിഡന്റും രണ്ട് സഭകളും ചേർന്നതാണ് പാർലമെന്റ്." }
    },
    {
      q_id: "ps-c5-q2",
      type: "mcq",
      stem: { en: "Which house is known as the 'Permanent House'?", ml: "സ്ഥിരം സഭ എന്നറിയപ്പെടുന്നത് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Lok Sabha", ml: "ലോക്‌സഭ" } },
        { k: "B", text: { en: "Rajya Sabha", ml: "രാജ്യസഭ" } },
        { k: "C", text: { en: "Legislative Assembly", ml: "നിയമസഭ" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Rajya Sabha is never fully dissolved; members retire in rotation.", ml: "രാജ്യസഭ ഒരിക്കലും പൂർണ്ണമായി പിരിച്ചുവിടില്ല." }
    },
    {
      q_id: "ps-c5-q3",
      type: "mcq",
      stem: { en: "What is the term of a member of the Rajya Sabha?", ml: "രാജ്യസഭാംഗത്തിന്റെ കാലാവധി എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "5 years", ml: "5 വർഷം" } },
        { k: "B", text: { en: "6 years", ml: "6 വർഷം" } },
        { k: "C", text: { en: "2 years", ml: "2 വർഷം" } },
        { k: "D", text: { en: "Permanent", ml: "സ്ഥിരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Members of Rajya Sabha are elected for a six-year term.", ml: "ആറ് വർഷമാണ് ഒരു രാജ്യസഭാംഗത്തിന്റെ കാലാവധി." }
    },
    {
      q_id: "ps-c5-q4",
      type: "mcq",
      stem: { en: "Who is the presiding officer of the Lok Sabha?", ml: "ലോക്‌സഭയുടെ അധ്യക്ഷൻ ആരാണ്?" },
      options: [
        { k: "A", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "C", text: { en: "Speaker", ml: "സ്പീക്കർ" } },
        { k: "D", text: { en: "Vice-President", ml: "വൈസ് പ്രസിഡന്റ്" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The Speaker is elected by the Lok Sabha members to preside over its meetings.", ml: "ലോക്‌സഭാംഗങ്ങൾ തങ്ങൾക്കിടയിൽ നിന്ന് തിരഞ്ഞെടുക്കുന്ന ആളാണ് സ്പീക്കർ." }
    },
    {
      q_id: "ps-c5-q5",
      type: "mcq",
      stem: { en: "How many members are nominated by the President to the Rajya Sabha?", ml: "രാജ്യസഭയിലേക്ക് പ്രസിഡന്റ് എത്ര പേരെ നാമനിർദ്ദേശം ചെയ്യുന്നു?" },
      options: [
        { k: "A", text: { en: "2", ml: "2" } },
        { k: "B", text: { en: "10", ml: "10" } },
        { k: "C", text: { en: "12", ml: "12" } },
        { k: "D", text: { en: "15", ml: "15" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "12 members with expertise in art, science, literature, etc., are nominated.", ml: "കല, ശാസ്ത്രം, സാഹിത്യം തുടങ്ങിയ മേഖലകളിൽ കഴിവ് തെളിയിച്ച 12 പേരെയാണ് നാമനിർദ്ദേശം ചെയ്യുന്നത്." }
    },
    {
      q_id: "ps-c5-q6",
      type: "mcq",
      stem: { en: "A Money Bill can be introduced only in:", ml: "ഒരു ധനകാര്യ ബില്ല് എവിടെ മാത്രമേ അവതരിപ്പിക്കാൻ കഴിയൂ?" },
      options: [
        { k: "A", text: { en: "Rajya Sabha", ml: "രാജ്യസഭ" } },
        { k: "B", text: { en: "Lok Sabha", ml: "ലോക്‌സഭ" } },
        { k: "C", text: { en: "Joint Session", ml: "സംയുക്ത സമ്മേളനം" } },
        { k: "D", text: { en: "Planning Commission", ml: "പ്ലാനിംഗ് കമ്മീഷൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Money Bills follow a special procedure and start in the Lok Sabha.", ml: "ധനകാര്യ ബില്ലുകൾ ലോക്‌സഭയിൽ മാത്രമേ ആദ്യമായി അവതരിപ്പിക്കാൻ കഴിയൂ." }
    },
    {
      q_id: "ps-c5-q7",
      type: "mcq",
      stem: { en: "What is the maximum time Rajya Sabha can delay a Money Bill?", ml: "രാജ്യസഭയ്ക്ക് ഒരു ധനകാര്യ ബില്ല് പരമാവധി എത്ര ദിവസം വൈകിപ്പിക്കാം?" },
      options: [
        { k: "A", text: { en: "30 days", ml: "30 ദിവസം" } },
        { k: "B", text: { en: "14 days", ml: "14 ദിവസം" } },
        { k: "C", text: { en: "6 months", ml: "6 മാസം" } },
        { k: "D", text: { en: "Infinite time", ml: "അനിശ്ചിതമായി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The Rajya Sabha must return the Money Bill within 14 days.", ml: "14 ദിവസത്തിനുള്ളിൽ രാജ്യസഭ ബില്ല് തിരിച്ചയക്കണം." }
    },
    {
      q_id: "ps-c5-q8",
      type: "mcq",
      stem: { en: "The Anti-Defection Law is contained in which schedule?", ml: "കൂറുമാറ്റ നിരോധന നിയമം ഏത് ഷെഡ്യൂളിലാണ് ഉള്ളത്?" },
      options: [
        { k: "A", text: { en: "8th Schedule", ml: "8-ാം ഷെഡ്യൂൾ" } },
        { k: "B", text: { en: "9th Schedule", ml: "9-ാം ഷെഡ്യൂൾ" } },
        { k: "C", text: { en: "10th Schedule", ml: "10-ാം ഷെഡ്യൂൾ" } },
        { k: "D", text: { en: "12th Schedule", ml: "12-ാം ഷെഡ്യൂൾ" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The 10th Schedule was added by the 52nd Amendment.", ml: "ഭരണഘടനയുടെ 10-ാം ഷെഡ്യൂളിലാണ് ഈ നിയമമുള്ളത്." }
    },
    {
      q_id: "ps-c5-q9",
      type: "mcq",
      stem: { en: "Which hour in Parliament starts at 11 AM?", ml: "പാർലമെന്റിൽ രാവിലെ 11 മണിക്ക് ആരംഭിക്കുന്ന വേള ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Zero Hour", ml: "ശൂന്യവേള" } },
        { k: "B", text: { en: "Question Hour", ml: "ചോദ്യോത്തര വേള" } },
        { k: "C", text: { en: "Lunch Hour", ml: "ഭക്ഷണ സമയം" } },
        { k: "D", text: { en: "Voting Hour", ml: "വോട്ടിംഗ് സമയം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Question Hour is the first hour of every parliamentary sitting.", ml: "ചോദ്യോത്തര വേളയോടെയാണ് സഭാനടപടികൾ ആരംഭിക്കുന്നത്." }
    },
    {
      q_id: "ps-c5-q10",
      type: "mcq",
      stem: { en: "The minimum number of members required to transact business in the House is:", ml: "സഭാനടപടികൾ നടത്താൻ ആവശ്യമായ കുറഞ്ഞ അംഗസംഖ്യയെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Majority", ml: "ഭൂരിപക്ഷം" } },
        { k: "B", text: { en: "Quorum", ml: "കോറം" } },
        { k: "C", text: { en: "Consensus", ml: "സമവായം" } },
        { k: "D", text: { en: "Attendance", ml: "ഹാജർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Quorum is usually 1/10th of the total membership.", ml: "സഭയിലെ ആകെ അംഗങ്ങളുടെ പത്തിലൊന്ന് അംഗങ്ങളെങ്കിലും ഉണ്ടെങ്കിൽ മാത്രമേ സഭ ചേരാൻ കഴിയൂ." }
    },
    {
      q_id: "ps-c5-q11",
      type: "mcq",
      stem: { en: "Who decides whether a bill is a Money Bill or not?", ml: "ഒരു ബില്ല് ധനകാര്യ ബില്ലാണോ അല്ലയോ എന്ന് തീരുമാനിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "Finance Minister", ml: "ധനമന്ത്രി" } },
        { k: "C", text: { en: "Speaker of Lok Sabha", ml: "ലോക്‌സഭാ സ്പീക്കർ" } },
        { k: "D", text: { en: "Chairman of Rajya Sabha", ml: "രാജ്യസഭാ ചെയർമാൻ" } }
      ],
      answer: "C",
      difficulty: "hard",
      explanation: { en: "The Speaker's decision on a Money Bill is final.", ml: "ലോക്‌സഭാ സ്പീക്കറാണ് ഇക്കാര്യത്തിൽ അവസാന തീരുമാനമെടുക്കുന്നത്." }
    },
    {
      q_id: "ps-c5-q12",
      type: "mcq",
      stem: { en: "A deadlock between Lok Sabha and Rajya Sabha is resolved through:", ml: "ലോക്‌സഭയും രാജ്യസഭയും തമ്മിലുള്ള തർക്കങ്ങൾ എങ്ങനെയാണ് പരിഹരിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "President's decision", ml: "പ്രസിഡന്റിന്റെ തീരുമാനം" } },
        { k: "B", text: { en: "Joint Session", ml: "സംയുക്ത സമ്മേളനം" } },
        { k: "C", text: { en: "Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { k: "D", text: { en: "Referendum", ml: "ജനഹിതപരിശോധന" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The President calls a joint session to resolve deadlocks on ordinary bills.", ml: "സാധാരണ ബില്ലുകളിൽ തർക്കമുണ്ടായാൽ രണ്ട് സഭകളുടെയും സംയുക്ത സമ്മേളനം വിളിക്കാറുണ്ട്." }
    },
    {
      q_id: "ps-c5-q13",
      type: "mcq",
      stem: { en: "Who is the ex-officio Chairman of the Rajya Sabha?", ml: "രാജ്യസഭയുടെ ഔദ്യോഗിക ചെയർമാൻ ആരാണ്?" },
      options: [
        { k: "A", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "Vice-President", ml: "വൈസ് പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "D", text: { en: "Deputy Speaker", ml: "ഡെപ്യൂട്ടി സ്പീക്കർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Vice-President of India acts as the Chairman of Rajya Sabha.", ml: "ഇന്ത്യയുടെ വൈസ് പ്രസിഡന്റാണ് രാജ്യസഭയുടെ അധ്യക്ഷൻ." }
    },
    {
      q_id: "ps-c5-q14",
      type: "mcq",
      stem: { en: "The maximum strength of Lok Sabha is:", ml: "ലോക്‌സഭയിലെ പരമാവധി അംഗസംഖ്യ എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "250", ml: "250" } },
        { k: "B", text: { en: "500", ml: "500" } },
        { k: "C", text: { en: "550", ml: "550" } },
        { k: "D", text: { en: "600", ml: "600" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The maximum strength allowed by the Constitution is 550.", ml: "ലോക്‌സഭയിൽ പരമാവധി 550 അംഗങ്ങളാകാം." }
    },
    {
      q_id: "ps-c5-q15",
      type: "mcq",
      stem: { en: "What happens if a No-Confidence Motion is passed in Lok Sabha?", ml: "ലോക്‌സഭയിൽ അവിശ്വാസ പ്രമേയം പാസായാൽ എന്ത് സംഭവിക്കും?" },
      options: [
        { k: "A", text: { en: "Only PM resigns", ml: "പ്രധാനമന്ത്രി മാത്രം രാജിവെക്കുന്നു" } },
        { k: "B", text: { en: "The entire Council of Ministers resigns", ml: "മന്ത്രിസഭ ഒന്നടങ്കം രാജിവെക്കുന്നു" } },
        { k: "C", text: { en: "Rajya Sabha is dissolved", ml: "രാജ്യസഭ പിരിച്ചുവിടുന്നു" } },
        { k: "D", text: { en: "New elections are held immediately", ml: "ഉടൻ പുതിയ തിരഞ്ഞെടുപ്പ് നടക്കുന്നു" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Passage of no-confidence motion means the government has lost majority.", ml: "അവിശ്വാസ പ്രമേയം പാസാകുന്നത് ഗവൺമെന്റിന്റെ പതനത്തിന് കാരണമാകുന്നു." }
    },
    {
      q_id: "ps-c5-q16",
      type: "mcq",
      stem: { en: "Which system of legislature does India follow at the center?", ml: "ഇന്ത്യൻ പാർലമെന്റ് പിന്തുടരുന്ന നിയമനിർമ്മാണ രീതി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Unicameral", ml: "ഏകമണ്ഡല സഭ" } },
        { k: "B", text: { en: "Bicameral", ml: "ദ്വിമണ്ഡല സഭ" } },
        { k: "C", text: { en: "Tricameral", ml: "ത്രിമണ്ഡല സഭ" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "India has two houses: Lok Sabha and Rajya Sabha.", ml: "രണ്ട് സഭകളുള്ളതുകൊണ്ട് ഇതിനെ ദ്വിമണ്ഡല സഭ എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "ps-c5-q17",
      type: "mcq",
      stem: { en: "A bill passed by both houses becomes a law only after the assent of:", ml: "രണ്ട് സഭകളും പാസാക്കിയ ഒരു ബില്ല് ആരുടെ ഒപ്പോടെയാണ് നിയമമാകുന്നത്?" },
      options: [
        { k: "A", text: { en: "The PM", ml: "പ്രധാനമന്ത്രി" } },
        { k: "B", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "The Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" } },
        { k: "D", text: { en: "The Speaker", ml: "സ്പീക്കർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The President's signature is mandatory for a bill to become an Act.", ml: "പ്രസിഡന്റ് ഒപ്പുവെക്കുന്നതോടെ ബില്ല് നിയമമായി (Act) മാറുന്നു." }
    },
    {
      q_id: "ps-c5-q18",
      type: "mcq",
      stem: { en: "What is 'Zero Hour'?", ml: "എന്താണ് 'ശൂന്യവേള' (Zero Hour)?" },
      options: [
        { k: "A", text: { en: "Time for lunch", ml: "ഭക്ഷണത്തിനുള്ള സമയം" } },
        { k: "B", text: { en: "Time after Question Hour for urgent matters", ml: "ചോദ്യോത്തര വേളയ്ക്ക് ശേഷം പ്രധാന കാര്യങ്ങൾ ഉന്നയിക്കാനുള്ള സമയം" } },
        { k: "C", text: { en: "Time for voting", ml: "വോട്ടിംഗിനുള്ള സമയം" } },
        { k: "D", text: { en: "First hour of the day", ml: "ദിവസത്തെ ആദ്യത്തെ മണിക്കൂർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Zero hour is an informal device to raise matters without prior notice.", ml: "മുൻകൂട്ടി നോട്ടീസ് നൽകാതെ ഗൗരവകരമായ വിഷയങ്ങൾ ഉന്നയിക്കാനുള്ള സമയമാണിത്." }
    },
    {
      q_id: "ps-c5-q19",
      type: "mcq",
      stem: { en: "Which committee examines the government's expenditure and reports of CAG?", ml: "ഗവൺമെന്റ് ചിലവുകളെക്കുറിച്ചും CAG റിപ്പോർട്ടുകളെക്കുറിച്ചും പഠിക്കുന്ന കമ്മിറ്റി ഏത്?" },
      options: [
        { k: "A", text: { en: "Estimates Committee", ml: "എസ്റ്റിമേറ്റ്സ് കമ്മിറ്റി" } },
        { k: "B", text: { en: "Public Accounts Committee (PAC)", ml: "പബ്ലിക് അക്കൗണ്ട്സ് കമ്മിറ്റി" } },
        { k: "C", text: { en: "Ethics Committee", ml: "എത്തിക്സ് കമ്മിറ്റി" } },
        { k: "D", text: { en: "Rules Committee", ml: "റൂൾസ് കമ്മിറ്റി" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "PAC ensures that the government spends money as authorized by Parliament.", ml: "ഗവൺമെന്റ് അക്കൗണ്ടുകൾ പരിശോധിക്കുന്ന പ്രധാന കമ്മിറ്റിയാണിത്." }
    },
    {
      q_id: "ps-c5-q20",
      type: "mcq",
      stem: { en: "The 10th Schedule was added by which amendment?", ml: "കൂറുമാറ്റ നിരോധന നിയമം ഉൾക്കൊള്ളുന്ന 10-ാം ഷെഡ്യൂൾ ഏത് ഭേദഗതിയിലൂടെയാണ് ചേർത്തത്?" },
      options: [
        { k: "A", text: { en: "42nd Amendment", ml: "42-ാം ഭേദഗതി" } },
        { k: "B", text: { en: "44th Amendment", ml: "44-ാം ഭേദഗതി" } },
        { k: "C", text: { en: "52nd Amendment", ml: "52-ാം ഭേദഗതി" } },
        { k: "D", text: { en: "73rd Amendment", ml: "73-ാം ഭേദഗതി" } }
      ],
      answer: "C",
      difficulty: "hard",
      explanation: { en: "The 52nd amendment in 1985 introduced the Anti-Defection Law.", ml: "1985-ലെ 52-ാം ഭേദഗതിയിലൂടെയാണ് ഇത് നിലവിൽ വന്നത്." }
    },
    {
      q_id: "ps-c5-q21",
      type: "mcq",
      stem: { en: "The Rajya Sabha has a total of how many elected members?", ml: "രാജ്യസഭയിൽ എത്ര തിരഞ്ഞെടുക്കപ്പെട്ട അംഗങ്ങളാണ് ഉള്ളത്?" },
      options: [
        { k: "A", text: { en: "250", ml: "250" } },
        { k: "B", text: { en: "233", ml: "233" } },
        { k: "C", text: { en: "245", ml: "243" } },
        { k: "D", text: { en: "238", ml: "238" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Out of 245 current members, 233 are elected by states and UTs.", ml: "ആകെ 245 അംഗങ്ങളിൽ 233 പേർ തിരഞ്ഞെടുക്കപ്പെട്ടവരാണ്." }
    },
    {
      q_id: "ps-c5-q22",
      type: "mcq",
      stem: { en: "Who has the power to disqualify a member under Anti-Defection Law?", ml: "കൂറുമാറ്റ നിരോധന നിയമപ്രകാരം ഒരംഗത്തെ അയോഗ്യനാക്കാൻ അധികാരമുള്ളത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "Election Commission", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" } },
        { k: "C", text: { en: "Speaker or Chairman of the House", ml: "സഭാധ്യക്ഷൻ (സ്പീക്കർ അല്ലെങ്കിൽ ചെയർമാൻ)" } },
        { k: "D", text: { en: "Supreme Court", ml: "സുപ്രീം കോടതി" } }
      ],
      answer: "C",
      difficulty: "hard",
      explanation: { en: "The presiding officer of the house decides on disqualification.", ml: "സ്പീക്കർക്കോ ചെയർമാനോ ആണ് ഈ അധികാരം നൽകിയിരിക്കുന്നത്." }
    },
    {
      q_id: "ps-c5-q23",
      type: "mcq",
      stem: { en: "An ordinary bill can be introduced in:", ml: "ഒരു സാധാരണ ബില്ല് എവിടെ അവതരിപ്പിക്കാം?" },
      options: [
        { k: "A", text: { en: "Lok Sabha only", ml: "ലോക്‌സഭയിൽ മാത്രം" } },
        { k: "B", text: { en: "Rajya Sabha only", ml: "രാജ്യസഭയിൽ മാത്രം" } },
        { k: "C", text: { en: "Either House", ml: "ഏതെങ്കിലും ഒരു സഭയിൽ" } },
        { k: "D", text: { en: "Planning Commission", ml: "പ്ലാനിംഗ് കമ്മീഷൻ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Ordinary bills can start in either house of Parliament.", ml: "സാധാരണ ബില്ലുകൾ ലോക്‌സഭയിലോ രാജ്യസഭയിലോ ആദ്യം അവതരിപ്പിക്കാം." }
    },
    {
      q_id: "ps-c5-q24",
      type: "mcq",
      stem: { en: "The power to spend money is authorized by Parliament through the:", ml: "പണം ചിലവാക്കാൻ പാർലമെന്റ് നൽകുന്ന അനുമതി അറിയപ്പെടുന്നത്:" },
      options: [
        { k: "A", text: { en: "Budget", ml: "ബജറ്റ്" } },
        { k: "B", text: { en: "Notice", ml: "നോട്ടീസ്" } },
        { k: "C", text: { en: "Order", ml: "ഉത്തരവ്" } },
        { k: "D", text: { en: "Regulation", ml: "നിയന്ത്രണം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The Budget or Annual Financial Statement contains expenditure proposals.", ml: "ബജറ്റിലൂടെയാണ് ഗവൺമെന്റ് പണം ചിലവാക്കാൻ അനുമതി വാങ്ങുന്നത്." }
    },
    {
      q_id: "ps-c5-q25",
      type: "mcq",
      stem: { en: "How many members of Rajya Sabha retire every two years?", ml: "ഓരോ രണ്ട് വർഷം കൂടുമ്പോഴും രാജ്യസഭയിലെ എത്ര അംഗങ്ങളാണ് വിരമിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Half", ml: "പകുതി" } },
        { k: "B", text: { en: "One-third", ml: "മൂന്നിലൊന്ന്" } },
        { k: "C", text: { en: "One-fourth", ml: "നാലിലൊന്ന്" } },
        { k: "D", text: { en: "All members", ml: "എല്ലാ അംഗങ്ങളും" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "1/3rd of Rajya Sabha members retire every second year.", ml: "മൂന്നിലൊന്ന് അംഗങ്ങൾ വീതം ഓരോ രണ്ട് വർഷത്തിലും വിരമിക്കുന്നു." }
    },
    {
      q_id: "ps-c5-q26",
      type: "mcq",
      stem: { en: "The presiding officer of a joint session of Parliament is:", ml: "പാർലമെന്റിന്റെ സംയുക്ത സമ്മേളനത്തിൽ അധ്യക്ഷത വഹിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "The Vice-President", ml: "വൈസ് പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "The Speaker of Lok Sabha", ml: "ലോക്‌സഭാ സ്പീക്കർ" } },
        { k: "D", text: { en: "The Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" } }
      ],
      answer: "C",
      difficulty: "hard",
      explanation: { en: "The Speaker of Lok Sabha presides over joint sessions.", ml: "സംയുക്ത സമ്മേളനങ്ങൾക്ക് ലോക്‌സഭാ സ്പീക്കറാണ് നേതൃത്വം നൽകുന്നത്." }
    },
    {
      q_id: "ps-c5-q27",
      type: "mcq",
      stem: { en: "Which article gives special powers to Rajya Sabha regarding state list subjects?", ml: "സംസ്ഥാന പട്ടികയിലെ വിഷയങ്ങളിൽ നിയമനിർമ്മാണം നടത്താൻ രാജ്യസഭയ്ക്ക് അധികാരം നൽകുന്ന വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 249", ml: "ആർട്ടിക്കിൾ 249" } },
        { k: "B", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } },
        { k: "C", text: { en: "Article 370", ml: "ആർട്ടിക്കിൾ 370" } },
        { k: "D", text: { en: "Article 312", ml: "ആർട്ടിക്കിൾ 312" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Article 249 allows RS to authorize Parliament to make laws on state matters.", ml: "ദേശീയ താൽപ്പര്യം മുൻനിർത്തി സംസ്ഥാന ലിസ്റ്റിലുള്ള വിഷയത്തിൽ നിയമമുണ്ടാക്കാൻ പാർലമെന്റിനെ ചുമതലപ്പെടുത്താൻ രാജ്യസഭയ്ക്ക് കഴിയും." }
    },
    {
      q_id: "ps-c5-q28",
      type: "mcq",
      stem: { en: "What ensures that the double-check happens on every bill in Parliament?", ml: "എല്ലാ ബില്ലുകളും പാർലമെന്റിൽ പുനഃപരിശോധിക്കപ്പെടുന്നു എന്ന് ഉറപ്പാക്കുന്നത് എന്താണ്?" },
      options: [
        { k: "A", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "Bicameralism", ml: "ദ്വിമണ്ഡല സഭ" } },
        { k: "C", text: { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { k: "D", text: { en: "The PM", ml: "പ്രധാനമന്ത്രി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Bicameralism ensures that every bill is debated twice by different groups.", ml: "രണ്ട് സഭകളുള്ളതുകൊണ്ട് ഏത് തീരുമാനവും രണ്ട് തവണ ചർച്ച ചെയ്യപ്പെടുന്നു." }
    },
    {
      q_id: "ps-c5-q29",
      type: "mcq",
      stem: { en: "The 'Question Hour' is aimed at:", ml: "'ചോദ്യോത്തര വേള'യുടെ ലക്ഷ്യം എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Passing bills quickly", ml: "വേഗത്തിൽ നിയമങ്ങൾ പാസാക്കുക" } },
        { k: "B", text: { en: "Holding ministers accountable", ml: "മന്ത്രിമാരെ ഉത്തരവാദിത്തമുള്ളവരാക്കുക" } },
        { k: "C", text: { en: "Starting new elections", ml: "പുതിയ തിരഞ്ഞെടുപ്പ് നടത്തുക" } },
        { k: "D", text: { en: "Distributing money", ml: "പണം വിതരണം ചെയ്യുക" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Questions help in extracting information and keeping check on ministers.", ml: "ഗവൺമെന്റ് പ്രവർത്തനങ്ങളെക്കുറിച്ച് മന്ത്രിമാരോട് നേരിട്ട് ചോദിക്കാൻ ഇത് സഹായിക്കുന്നു." }
    },
    {
      q_id: "ps-c5-q30",
      type: "mcq",
      stem: { en: "Who has the power to dissolve the Lok Sabha?", ml: "ലോക്‌സഭ പിരിച്ചുവിടാൻ അധികാരമുള്ളത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "The PM", ml: "പ്രധാനമന്ത്രി" } },
        { k: "B", text: { en: "The President on advice of PM", ml: "പ്രധാനമന്ത്രിയുടെ ഉപദേശപ്രകാരം പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "The Speaker", ml: "സ്പീക്കർ" } },
        { k: "D", text: { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The President dissolves the house when the government loses majority or term ends.", ml: "പ്രധാനമന്ത്രി ആവശ്യപ്പെടുന്നതനുസരിച്ച് പ്രസിഡന്റാണ് സഭ പിരിച്ചുവിടുന്നത്." }
    }
  ]
};

export const plusOnePoliticalSciencePart1Unit6: Lesson = {
  id: "pl-ps-11-p1-u6",
  title: { en: "Judiciary", ml: "നീതിനായക വിഭാഗം (Judiciary)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=8ItFT9LfkDI",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the importance of an independent judiciary", ml: "സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥയുടെ പ്രാധാന്യം മനസ്സിലാക്കുക" },
    { en: "Explain the integrated structure of the Indian judicial system", ml: "ഇന്ത്യൻ നീതിന്യായ വ്യവസ്ഥയുടെ ഏകീകൃത ഘടന വിവരിക്കുക" },
    { en: "Analyze the jurisdictions of the Supreme Court", ml: "സുപ്രീം കോടതിയുടെ അധികാരപരിധികൾ വിശകലനം ചെയ്യുക" },
    { en: "Explore the concepts of Judicial Review and Judicial Activism", ml: "ജുഡീഷ്യൽ റിവ്യൂ, ജുഡീഷ്യൽ ആക്റ്റിവിസം എന്നീ ആശയങ്ങൾ പരിശോധിക്കുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the role and structure of the judiciary in India, focusing on its independence and jurisdictions.", 
      ml: "ഇന്ത്യയിലെ നീതിന്യായ വ്യവസ്ഥയുടെ പങ്ക്, ഘടന, അതിന്റെ സ്വതന്ത്ര സ്വഭാവം, അധികാരപരിധികൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A detailed study of the Supreme Court, High Courts, PIL, and the relationship between the Judiciary and Parliament.", 
      ml: "സുപ്രീം കോടതി, ഹൈക്കോടതികൾ, പൊതുതാൽപര്യ ഹർജി (PIL), നീതിന്യായ വിഭാഗവും പാർലമെന്റും തമ്മിലുള്ള ബന്ധം എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the role and structure of the judiciary in India. It emphasizes the importance of an independent judiciary, the integrated judicial structure, the original and appellate jurisdictions of the Supreme Court, and concepts like Judicial Review and Judicial Activism. It also discusses how the judiciary protects Fundamental Rights.', ml: 'ഇന്ത്യയിലെ നീതിന്യായ വിഭാഗത്തിന്റെ പങ്ക്, ഘടന എന്നിവയെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥയുടെ പ്രാധാന്യം, ഏകീകൃത നീതിന്യായ ഘടന, സുപ്രീം കോടതിയുടെ പ്രാരംഭ-അപ്പീൽ അധികാരപരിധികൾ, ജുഡീഷ്യൽ റിവ്യൂ, ജുഡീഷ്യൽ ആക്റ്റിവിസം തുടങ്ങിയ ആശയങ്ങൾക്ക് ഇവിടെ ഊന്നൽ നൽകുന്നു. നീതിന്യായ വിഭാഗം എങ്ങനെയാണ് മൗലികാവകാശങ്ങളെ സംരക്ഷിക്കുന്നത് എന്നും ഇവിടെ വിവരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Independent Judiciary', ml: 'സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ (Independent Judiciary)'}, {en: 'A system where the judiciary is free from executive and legislative influence.', ml: 'കാര്യനിർവ്വഹണ വിഭാഗത്തിന്റെയും നിയമനിർമ്മാണ വിഭാഗത്തിന്റെയും സ്വാധീനമില്ലാതെ പ്രവർത്തിക്കുന്ന കോടതി സംവിധാനം.'}, {en: 'Essential for the rule of law.', ml: 'നിയമവാഴ്ച ഉറപ്പാക്കാൻ അത്യാവശ്യം.'}],
          [{en: 'Integrated Judiciary', ml: 'ഏകീകൃത നീതിന്യായ വ്യവസ്ഥ (Integrated Judiciary)'}, {en: 'A single system of courts where higher courts\' decisions are binding on lower courts.', ml: 'ഉയർന്ന കോടതികളുടെ തീരുമാനങ്ങൾ താഴ്ന്ന കോടതികൾക്ക് ബാധകമായ ഒറ്റത്തായ കോടതി സംവിധാനം.'}, {en: 'The Supreme Court is at the top.', ml: 'സുപ്രീം കോടതിയാണ് ഇതിന്റെ തലപ്പത്ത്.'}],
          [{en: 'Public Interest Litigation (PIL)', ml: 'പൊതുതാൽപര്യ ഹർജി (PIL)'}, {en: 'Legal action initiated for the protection of public interest (marginalized groups).', ml: 'സമൂഹത്തിലെ ദുർബല വിഭാഗങ്ങളുടെ അവകാശങ്ങൾ സംരക്ഷിക്കാനായി കോടതിയിൽ നൽകുന്ന ഹർജി.'}, {en: 'Also known as Social Action Litigation (SAL).', ml: 'സോഷ്യൽ ആക്ഷൻ ലിറ്റിഗേഷൻ എന്നും അറിയപ്പെടുന്നു.'}],
          [{en: 'Judicial Review', ml: 'നീതിനായക പുനഃപരിശോധന (Judicial Review)'}, {en: 'Power to examine the constitutionality of any law or executive order.', ml: 'നിയമങ്ങളുടെയോ ഉത്തരവുകളുടെയോ ഭരണഘടനാ സാധുത പരിശോധിക്കാനുള്ള കോടതിയുടെ അധികാരം.'}, {en: 'Upholds the supremacy of the Constitution.', ml: 'ഭരണഘടനയുടെ ഔന്നത്യം സംരക്ഷിക്കുന്നു.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 Why do we need an Independent Judiciary?', ml: '3.1 നമുക്ക് എന്തുകൊണ്ട് ഒരു സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ വേണം?' },
      { type: 'ul', items: [
        { en: 'To settle disputes according to the rule of law.', ml: 'നിയമവാഴ്ചയ്ക്കനുസൃതമായി തർക്കങ്ങൾ പരിഹരിക്കാൻ.' },
        { en: 'To ensure no individual or group is above the law.', ml: 'ആരും നിയമത്തിന് മുകളിലല്ലെന്ന് ഉറപ്പാക്കാൻ.' },
        { en: 'To protect the rights of individuals.', ml: 'വ്യക്തികളുടെ അവകാശങ്ങൾ സംരക്ഷിക്കാൻ.' }
      ]},

      { type: 'h4', en: 'How is independence ensured?', ml: 'സ്വാതന്ത്ര്യം എങ്ങനെ ഉറപ്പാക്കുന്നു?' },
      { type: 'ul', items: [
        { en: 'Appointment: Judges are appointed by the President without legislative involvement.', ml: 'നിയമനം: നിയമസഭയുടെ ഇടപെടലില്ലാതെ പ്രസിഡന്റാണ് ജഡ്ജിമാരെ നിയമിക്കുന്നത്.' },
        { en: 'Tenure: Fixed tenure; cannot be removed easily.', ml: 'കാലാവധി: നിശ്ചിത കാലാവധിയുണ്ട്, എളുപ്പത്തിൽ നീക്കം ചെയ്യാൻ കഴിയില്ല.' },
        { en: 'Finance: Salaries are not subject to legislative vote.', ml: 'സാമ്പത്തികം: ശമ്പളം നിയമസഭയുടെ വോട്ടിംഗിന് വിധേയമല്ല.' }
      ]},

      { type: 'h3', en: '3.2 Structure of the Judiciary', ml: '3.2 നീതിന്യായ വിഭാഗത്തിന്റെ ഘടന (Structure of Judiciary)' },
      { type: 'ul', items: [
        { en: 'Supreme Court of India: The highest court; its decisions bind all other courts.', ml: 'ഇന്ത്യൻ സുപ്രീം കോടതി: രാജ്യത്തെ ഏറ്റവും ഉയർന്ന കോടതി.' },
        { en: 'High Courts: One for each state (or group of states).', ml: 'ഹൈക്കോടതികൾ: സംസ്ഥാന തലത്തിലുള്ള ഉയർന്ന കോടതി.' },
        { en: 'District Courts: Deal with cases at the district level.', ml: 'ജില്ലാ കോടതികൾ: ജില്ലാ തലത്തിലുള്ള കേസുകൾ കൈകാര്യം ചെയ്യുന്നു.' },
        { en: 'Subordinate Courts: Lower-level civil and criminal courts.', ml: 'കീഴ്ക്കോടതികൾ: താഴെത്തട്ടിലുള്ള കോടതികൾ.' }
      ]},

      { type: 'h3', en: '3.3 Jurisdiction of the Supreme Court', ml: '3.3 സുപ്രീം കോടതിയുടെ അധികാരപരിധി (Jurisdiction)' },
      { type: 'table', tableData: {
        headers: [{en: 'Jurisdiction', ml: 'അധികാരപരിധി'}, {en: 'Meaning / Scope', ml: 'അർത്ഥം / വ്യാപ്തി'}],
        rows: [
          [{en: 'Original', ml: 'പ്രാരംഭ (Original)'}, {en: 'Cases directly heard only by SC (e.g., Centre-State disputes).', ml: 'സുപ്രീം കോടതിയിൽ മാത്രം നേരിട്ട് നൽകാവുന്ന കേസുകൾ (ഉദാ: കേന്ദ്ര-സംസ്ഥാന തർക്കങ്ങൾ).'}],
          [{en: 'Appellate', ml: 'അപ്പീൽ (Appellate)'}, {en: 'Appeals against HC decisions.', ml: 'ഹൈക്കോടതി വിധികൾക്കെതിരെയുള്ള അപ്പീലുകൾ കേൾക്കാനുള്ള അധികാരം.'}],
          [{en: 'Advisory', ml: 'ഉപദേശക (Advisory)'}, {en: 'President can seek SC\'s opinion on law or public importance.', ml: 'നിയമപരമായ കാര്യങ്ങളിൽ പ്രസിഡന്റിന് ഉപദേശം നൽകാനുള്ള അധികാരം.'}],
          [{en: 'Writ', ml: 'റിട്ട് (Writ)'}, {en: 'Enforcement of Fundamental Rights through writs.', ml: 'മൗലികാവകാശങ്ങൾ നടപ്പിലാക്കാൻ റിട്ടുകൾ പുറപ്പെടുവിക്കാനുള്ള അധികാരം.'}]
        ]
      }},

      { type: 'h3', en: '3.4 Judicial Activism', ml: '3.4 ജുഡീഷ്യൽ ആക്റ്റിവിസം (Judicial Activism)' },
      { type: 'ul', items: [
        { en: 'Judiciary protecting rights by departing from precedent or independent of executive intent.', ml: 'വ്യക്തികളുടെ അവകാശങ്ങൾ സംരക്ഷിക്കാൻ കോടതി സജീവമായി ഇടപെടുന്ന രീതി.' },
        { en: 'PIL (Public Interest Litigation): Any citizen can approach court on behalf of those who cannot.', ml: 'പൊതുതാൽപര്യ ഹർജി: പാവപ്പെട്ടവർക്കോ അവശത അനുഭവിക്കുന്നവർക്കോ വേണ്ടി ആർക്കും കോടതിയെ സമീപിക്കാം.' }
      ]},

      { type: 'h3', en: '3.5 Judiciary and Parliament', ml: '3.5 നീതിന്യായ വിഭാഗവും പാർലമെന്റും' },
      { type: 'ul', items: [
        { en: 'Kesavananda Bharati Case (1973): Parliament cannot change the "Basic Structure" of the Constitution.', ml: 'കേശവാനന്ദ ഭാരതി കേസ് (1973): ഭരണഘടനയുടെ "അടിസ്ഥാന ഘടന" (Basic Structure) മാറ്റാൻ പാർലമെന്റിന് അധികാരമില്ല.' },
        { en: 'Judicial Review: Judiciary can declare laws unconstitutional.', ml: 'ജുഡീഷ്യൽ റിവ്യൂ: ഭരണഘടനാ വിരുദ്ധമായ നിയമങ്ങളെ റദ്ദാക്കാൻ കോടതിക്ക് അധികാരമുണ്ട്.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'CJI is appointed by the President, usually based on seniority.', ml: 'സീനിയോറിറ്റിയുടെ അടിസ്ഥാനത്തിലാണ് സുപ്രീം കോടതി ചീഫ് ജസ്റ്റിസിനെ നിയമിക്കുന്നത്.' },
        { en: 'SC judges retire at 65; HC judges at 62.', ml: 'സുപ്രീം കോടതി ജഡ്ജിമാർ 65-ാം വയസ്സിലും ഹൈക്കോടതി ജഡ്ജിമാർ 62-ാം വയസ്സിലും വിരമിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'India has an integrated, independent judiciary.', ml: 'ഇന്ത്യയിൽ ഏകീകൃതവും സ്വതന്ത്രവുമായ നീതിന്യായ വ്യവസ്ഥയാണുള്ളത്.' },
        { en: 'PIL has improved access to justice for marginalized sections.', ml: 'പൊതുതാൽപര്യ ഹർജി സാധാരണക്കാർക്ക് നീതി ലഭിക്കുന്നത് എളുപ്പമാക്കി.' },
        { en: 'Basic Structure doctrine limits Parliament\'s amending power.', ml: 'അടിസ്ഥാന ഘടന സിദ്ധാന്തം പാർലമെന്റിന്റെ ഭരണഘടനാ ഭേദഗതി അധികാരത്തെ പരിമിതപ്പെടുത്തുന്നു.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Rule of Law",
      "ml": "നിയമവാഴ്ച (Rule of Law)"
    },
    "definition": {
      "en": "The principle that everyone, whether rich or poor, is subject to the same law.",
      "ml": "സമ്പന്നനോ ദരിദ്രനോ ആകട്ടെ, എല്ലാവരും ഒരേ നിയമത്തിന് വിധേയരാണെന്ന തത്വം."
    }
  },
  {
    "term": {
      "en": "Independence of Judiciary",
      "ml": "നീതിന്യായ വ്യവസ്ഥയുടെ സ്വാതന്ത്ര്യം (Independence of Judiciary)"
    },
    "definition": {
      "en": "The freedom of the judiciary to function fearlessly without interference from the executive or legislature.",
      "ml": "എക്സിക്യൂട്ടീവിന്റെയോ ലെജിസ്ലേച്ചറിന്റെയോ ഇടപെടലുകളില്ലാതെ, നിർഭയമായി പ്രവർത്തിക്കാനുള്ള ജുഡീഷ്യറിയുടെ സ്വാതന്ത്ര്യം."
    }
  },
  {
    "term": {
      "en": "Original Jurisdiction",
      "ml": "തനതധികാരം (Original Jurisdiction)"
    },
    "definition": {
      "en": "The Supreme Court's exclusive power to directly resolve disputes between the Center and the States.",
      "ml": "കേന്ദ്രവും സംസ്ഥാനങ്ങളും തമ്മിലുള്ള തർക്കങ്ങൾ നേരിട്ട് പരിഹരിക്കാനുള്ള സുപ്രീം കോടതിയുടെ തനതധികാരം."
    }
  },
  {
    "term": {
      "en": "Appellate Jurisdiction",
      "ml": "അപ്പീൽ അധികാരം (Appellate Jurisdiction)"
    },
    "definition": {
      "en": "The Supreme Court's power to hear appeals in civil, criminal, and constitutional cases.",
      "ml": "സിവിൽ, ക്രിമിനൽ, ഭരണഘടനാപരമായ കേസുകളിൽ അപ്പീൽ കേൾക്കാനുള്ള സുപ്രീം കോടതിയുടെ അധികാരം."
    }
  },
  {
    "term": {
      "en": "Public Interest Litigation (PIL)",
      "ml": "പൊതുതാൽപ്പര്യ ഹർജി (Public Interest Litigation)"
    },
    "definition": {
      "en": "A provision allowing anyone to approach the court on matters of public interest for the weak and poor in society.",
      "ml": "സമൂഹത്തിലെ ദുർബലർക്കും പാവപ്പെട്ടവർക്കും വേണ്ടി പൊതുതാൽപ്പര്യമുള്ള വിഷയങ്ങളിൽ ആർക്കും കോടതിയെ സമീപിക്കാമെന്ന വ്യവസ്ഥ."
    }
  },
  {
    "term": {
      "en": "Judicial Review",
      "ml": "ജുഡീഷ്യൽ റിവ്യൂ (Judicial Review)"
    },
    "definition": {
      "en": "The Supreme Court's power to examine and invalidate laws that violate the Constitution.",
      "ml": "ഭരണഘടനയ്ക്ക് വിരുദ്ധമായ നിയമങ്ങൾ പരിശോധിക്കാനും അസാധുവാക്കാനും സുപ്രീം കോടതിക്കുള്ള അധികാരം."
    }
  },
  {
    "term": {
      "en": "Basic Structure Doctrine",
      "ml": "അടിസ്ഥാന ഘടന സിദ്ധാന്തം (Basic Structure Doctrine)"
    },
    "definition": {
      "en": "The principle declared by the Supreme Court in the Kesavananda Bharati case that Parliament has no power to change or destroy the basic character of the Constitution.",
      "ml": "ഭരണഘടനയുടെ അടിസ്ഥാന സ്വഭാവം മാറ്റാനോ നശിപ്പിക്കാനോ പാർലമെന്റിന് അധികാരമില്ല എന്ന് കേശവാനന്ദ ഭാരതി കേസിൽ സുപ്രീം കോടതി പ്രഖ്യാപിച്ച തത്വം."
    }
  }
],
  quiz: [
    {
      q_id: "ps-c6-q1",
      type: "mcq",
      stem: { en: "The integrated judicial system in India means:", ml: "ഇന്ത്യയിലെ ഏകീകൃത നീതിന്യായ വ്യവസ്ഥ എന്നാൽ എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Different states have different supreme courts", ml: "ഓരോ സംസ്ഥാനത്തിനും ഓരോ സുപ്രീം കോടതിയുണ്ട്" } },
        { k: "B", text: { en: "Decisions of higher courts are binding on lower courts", ml: "ഉയർന്ന കോടതികളുടെ തീരുമാനങ്ങൾ താഴ്ന്ന കോടതികൾക്ക് ബാധകമാണ്" } },
        { k: "C", text: { en: "Courts are under the control of the PM", ml: "കോടതികൾ പ്രധാനമന്ത്രിയുടെ നിയന്ത്രണത്തിലാണ്" } },
        { k: "D", text: { en: "Only Supreme Court can make laws", ml: "സുപ്രീം കോടതിക്ക് മാത്രമേ നിയമമുണ്ടാക്കാൻ കഴിയൂ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Integration ensures a hierarchy where decisions flow downwards.", ml: "രാജ്യം മുഴുവൻ ഒരൊറ്റ കോടതി സംവിധാനത്തിന് കീഴിലായിരിക്കും എന്നതാണ് ഇതുകൊണ്ട് ഉദ്ദേശിക്കുന്നത്." }
    },
    {
      q_id: "ps-c6-q2",
      type: "mcq",
      stem: { en: "What is the retirement age of a Supreme Court judge?", ml: "സുപ്രീം കോടതി ജഡ്ജിയുടെ വിരമിക്കൽ പ്രായം എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "60 years", ml: "60 വയസ്സ്" } },
        { k: "B", text: { en: "62 years", ml: "62 വയസ്സ്" } },
        { k: "C", text: { en: "65 years", ml: "65 വയസ്സ്" } },
        { k: "D", text: { en: "70 years", ml: "70 വയസ്സ്" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "SC judges retire at the age of 65.", ml: "സുപ്രീം കോടതി ജഡ്ജിമാർ 65-ാം വയസ്സിൽ വിരമിക്കുന്നു." }
    },
    {
      q_id: "ps-c6-q3",
      type: "mcq",
      stem: { en: "At what age do High Court judges retire?", ml: "ഹൈക്കോടതി ജഡ്ജിമാർ വിരമിക്കുന്ന പ്രായം എത്ര?" },
      options: [
        { k: "A", text: { en: "60 years", ml: "60 വയസ്സ്" } },
        { k: "B", text: { en: "62 years", ml: "62 വയസ്സ്" } },
        { k: "C", text: { en: "65 years", ml: "65 വയസ്സ്" } },
        { k: "D", text: { en: "58 years", ml: "58 വയസ്സ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "HC judges retire at 62 years.", ml: "ഹൈക്കോടതി ജഡ്ജിമാരുടെ വിരമിക്കൽ പ്രായം 62 ആണ്." }
    },
    {
      q_id: "ps-c6-q4",
      type: "mcq",
      stem: { en: "Which case established the 'Basic Structure' doctrine?", ml: "ഭരണഘടനയുടെ 'അടിസ്ഥാന ഘടന' സിദ്ധാന്തം ആവിഷ്കരിച്ച കേസ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Golaknath Case", ml: "ഗോലക്നാഥ് കേസ്" } },
        { k: "B", text: { en: "Minerva Mills Case", ml: "മിനർവ മിൽസ് കേസ്" } },
        { k: "C", text: { en: "Kesavananda Bharati Case", ml: "കേശവാനന്ദ ഭാരതി കേസ്" } },
        { k: "D", text: { en: "Shah Bano Case", ml: "ഷാ ബാനു കേസ്" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The 1973 ruling limited Parliament's power to amend the Constitution.", ml: "1973-ലെ കേശവാനന്ദ ഭാരതി കേസിലെ വിധി ഭരണഘടനയുടെ അടിസ്ഥാന ഘടന മാറ്റാൻ കഴിയില്ലെന്ന് പ്രഖ്യാപിച്ചു." }
    },
    {
      q_id: "ps-c6-q5",
      type: "mcq",
      stem: { en: "The power of 'Judicial Review' belongs to:", ml: "'ജുഡീഷ്യൽ റിവ്യൂ' അധികാരം ഉള്ളത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "Only Supreme Court", ml: "സുപ്രീം കോടതിക്ക് മാത്രം" } },
        { k: "B", text: { en: "Supreme Court and High Courts", ml: "സുപ്രീം കോടതിക്കും ഹൈക്കോടതികൾക്കും" } },
        { k: "C", text: { en: "All Courts in India", ml: "എല്ലാ കോടതികൾക്കും" } },
        { k: "D", text: { en: "Only District Courts", ml: "ജില്ലാ കോടതികൾക്ക് മാത്രം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Both SC and HCs can review the constitutionality of laws.", ml: "സുപ്രീം കോടതിക്കും ഹൈക്കോടതികൾക്കും നിയമങ്ങൾ പരിശോധിക്കാൻ അധികാരമുണ്ട്." }
    },
    {
      q_id: "ps-c6-q6",
      type: "mcq",
      stem: { en: "Disputes between the Centre and States come under which jurisdiction?", ml: "കേന്ദ്രവും സംസ്ഥാനങ്ങളും തമ്മിലുള്ള തർക്കങ്ങൾ ഏത് അധികാരപരിധിയിൽ വരുന്നു?" },
      options: [
        { k: "A", text: { en: "Appellate", ml: "അപ്പീൽ അധികാരപരിധി" } },
        { k: "B", text: { en: "Advisory", ml: "ഉപദേശക അധികാരപരിധി" } },
        { k: "C", text: { en: "Original", ml: "പ്രാരംഭ (Original) അധികാരപരിധി" } },
        { k: "D", text: { en: "Writ", ml: "റിട്ട് അധികാരപരിധി" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Original jurisdiction means cases that can only be heard by the Supreme Court directly.", ml: "കേന്ദ്ര-സംസ്ഥാന തർക്കങ്ങൾ സുപ്രീം കോടതിക്ക് നേരിട്ട് കൈകാര്യം ചെയ്യാം." }
    },
    {
      q_id: "ps-c6-q7",
      type: "mcq",
      stem: { en: "Who can seek advisory opinion from the Supreme Court?", ml: "സുപ്രീം കോടതിയിൽ നിന്ന് ഉപദേശം തേടാൻ ആർക്കാണ് അവകാശമുള്ളത്?" },
      options: [
        { k: "A", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "B", text: { en: "Parliament", ml: "പാർലമെന്റ്" } },
        { k: "C", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "D", text: { en: "Governor", ml: "ഗവർണർ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The President can refer any question of law or fact to the SC.", ml: "പ്രസിഡന്റിന് നിയമപരമായ കാര്യങ്ങളിൽ സുപ്രീം കോടതിയുടെ ഉപദേശം തേടാം." }
    },
    {
      q_id: "ps-c6-q8",
      type: "mcq",
      stem: { en: "What is PIL?", ml: "എന്താണ് PIL?" },
      options: [
        { k: "A", text: { en: "Public Interest Litigation", ml: "പബ്ലിക് ഇൻട്രസ്റ്റ് ലിറ്റിഗേഷൻ" } },
        { k: "B", text: { en: "Private Individual Law", ml: "പ്രൈവറ്റ് ഇൻഡിവിജ്വൽ ലോ" } },
        { k: "C", text: { en: "Police Inspection List", ml: "പോലീസ് ഇൻസ്പെക്ഷൻ ലിസ്റ്റ്" } },
        { k: "D", text: { en: "Public Insurance Law", ml: "പബ്ലിക് ഇൻഷുറൻസ് ലോ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "PIL allows the judiciary to act on behalf of the public interest.", ml: "പൊതുതാൽപര്യ ഹർജി എന്നാണ് ഇതിന്റെ പൂർണ്ണരൂപം." }
    },
    {
      q_id: "ps-c6-q9",
      type: "mcq",
      stem: { en: "Who was a key figure in starting Judicial Activism in India?", ml: "ഇന്ത്യയിൽ ജുഡീഷ്യൽ ആക്റ്റിവിസത്തിന് തുടക്കം കുറിച്ചവരിൽ പ്രധാനി ആര്?" },
      options: [
        { k: "A", text: { en: "Justice V.R. Krishna Iyer", ml: "ജസ്റ്റിസ് വി.ആർ. കൃഷ്ണയ്യർ" } },
        { k: "B", text: { en: "Dr. Ambedkar", ml: "ഡോ. അംബേദ്കർ" } },
        { k: "C", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } },
        { k: "D", text: { en: "Sardar Patel", ml: "സർദാർ പട്ടേൽ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Justice Krishna Iyer and Justice P.N. Bhagwati were pioneers of PIL.", ml: "ജസ്റ്റിസ് വി.ആർ. കൃഷ്ണയ്യരാണ് ഈ രംഗത്തെ പ്രധാനികളിലൊരാൾ." }
    },
    {
      q_id: "ps-c6-q10",
      type: "mcq",
      stem: { en: "The concept of 'Locus Standi' was relaxed by the courts to allow:", ml: "കോടതികൾ 'ലോകസ് സ്റ്റാൻഡി' നിയമത്തിൽ ഇളവ് വരുത്തിയത് എന്തിനുവേണ്ടിയാണ്?" },
      options: [
        { k: "A", text: { en: "Rich people to file more cases", ml: "സമ്പന്നർക്ക് കൂടുതൽ കേസുകൾ നൽകാൻ" } },
        { k: "B", text: { en: "Public Interest Litigation", ml: "പൊതുതാൽപര്യ ഹർജികൾ സ്വീകരിക്കാൻ" } },
        { k: "C", text: { en: "Police to arrest anyone", ml: "പോലീസിന് ആരെയും അറസ്റ്റ് ചെയ്യാൻ" } },
        { k: "D", text: { en: "Foreigners to vote", ml: "വിദേശികൾക്ക് വോട്ട് ചെയ്യാൻ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Relaxing locus standi meant anyone could represent the poor in court.", ml: "പരാതിക്കാരൻ തന്നെ കോടതിയിൽ വരണമെന്ന നിർബന്ധം ഒഴിവാക്കിയാണ് PIL കൊണ്ടുവന്നത്." }
    },
    {
      q_id: "ps-c6-q11",
      type: "mcq",
      stem: { en: "Who appoints the judges of the Supreme Court?", ml: "സുപ്രീം കോടതി ജഡ്ജിമാരെ നിയമിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The PM", ml: "പ്രധാനമന്ത്രി" } },
        { k: "B", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "The Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" } },
        { k: "D", text: { en: "The Speaker", ml: "സ്പീക്കർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The President appoints SC and HC judges.", ml: "പ്രസിഡന്റാണ് ജഡ്ജിമാരെ നിയമിക്കുന്നത്." }
    },
    {
      q_id: "ps-c6-q12",
      type: "mcq",
      stem: { en: "Independence of judiciary means judges are free from influence of:", ml: "നീതിന്യായ വ്യവസ്ഥയുടെ സ്വാതന്ത്ര്യം എന്നാൽ ആരുടെ സ്വാധീനത്തിൽ നിന്നുള്ള മോചനമാണ്?" },
      options: [
        { k: "A", text: { en: "The People", ml: "ജനങ്ങൾ" } },
        { k: "B", text: { en: "The Executive and Legislature", ml: "കാര്യനിർവ്വഹണ വിഭാഗവും നിയമനിർമ്മാണ വിഭാഗവും" } },
        { k: "C", text: { en: "Other Judges", ml: "മറ്റു ജഡ്ജിമാർ" } },
        { k: "D", text: { en: "The Media", ml: "മാധ്യമങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Judges must act without political pressure.", ml: "ഗവൺമെന്റിൽ നിന്നുള്ള സമ്മർദ്ദമില്ലാതെ പ്രവർത്തിക്കാൻ ജഡ്ജിമാർക്ക് കഴിയണം." }
    },
    {
      q_id: "ps-c6-q13",
      type: "mcq",
      stem: { en: "Salaries of SC judges are not subject to vote in Parliament to ensure:", ml: "ജഡ്ജിമാരുടെ ശമ്പളം പാർലമെന്റിൽ വോട്ടിംഗിന് വെക്കാത്തത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "Savings", ml: "ലാഭത്തിന്" } },
        { k: "B", text: { en: "Independence", ml: "സ്വാതന്ത്ര്യം ഉറപ്പാക്കാൻ" } },
        { k: "C", text: { en: "Speedy trials", ml: "വേഗത്തിലുള്ള വിചാരണയ്ക്ക്" } },
        { k: "D", text: { en: "More income", ml: "കൂടുതൽ വരുമാനത്തിന്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Financial security protects judges from legislative pressure.", ml: "സാമ്പത്തികമായ സ്വാതന്ത്ര്യം നീതിന്യായ വ്യവസ്ഥയുടെ സ്വതന്ത്ര സ്വഭാവം നിലനിർത്തുന്നു." }
    },
    {
      q_id: "ps-c6-q14",
      type: "mcq",
      stem: { en: "A judge of the Supreme Court can be removed through:", ml: "സുപ്രീം കോടതി ജഡ്ജിയെ എങ്ങനെ നീക്കം ചെയ്യാം?" },
      options: [
        { k: "A", text: { en: "Order of the PM", ml: "പ്രധാനമന്ത്രിയുടെ ഉത്തരവ്" } },
        { k: "B", text: { en: "Motion in Parliament with special majority", ml: "പാർലമെന്റിലെ പ്രത്യേക ഭൂരിപക്ഷത്തോടെയുള്ള പ്രമേയം" } },
        { k: "C", text: { en: "The President alone", ml: "പ്രസിഡന്റിന് തനിയെ" } },
        { k: "D", text: { en: "A simple police order", ml: "പോലീസ് ഉത്തരവ്" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Removal is a difficult process to ensure security of tenure.", ml: "പാർലമെന്റിന്റെ ഇരുസഭകളിലും പ്രത്യേക ഭൂരിപക്ഷം വഴിയല്ലാതെ ജഡ്ജിമാരെ നീക്കാൻ കഴിയില്ല." }
    },
    {
      q_id: "ps-c6-q15",
      type: "mcq",
      stem: { en: "High Courts are established for:", ml: "ഹൈക്കോടതികൾ സ്ഥാപിച്ചിരിക്കുന്നത് എവിടെയാണ്?" },
      options: [
        { k: "A", text: { en: "Districts", ml: "ജില്ലകളിൽ" } },
        { k: "B", text: { en: "Villages", ml: "ഗ്രാമങ്ങളിൽ" } },
        { k: "C", text: { en: "States", ml: "സംസ്ഥാനങ്ങളിൽ" } },
        { k: "D", text: { en: "Other Countries", ml: "മറ്റു രാജ്യങ്ങളിൽ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "High courts are the principal civil courts of original jurisdiction in each state.", ml: "സംസ്ഥാന തലത്തിലുള്ള ഏറ്റവും ഉയർന്ന കോടതിയാണിത്." }
    },
    {
      q_id: "ps-c6-q16",
      type: "mcq",
      stem: { en: "Which court is the 'Guardian of Fundamental Rights'?", ml: "മൗലികാവകാശങ്ങളുടെ സംരക്ഷകൻ എന്നറിയപ്പെടുന്ന കോടതി ഏത്?" },
      options: [
        { k: "A", text: { en: "District Court", ml: "ജില്ലാ കോടതി" } },
        { k: "B", text: { en: "Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { k: "C", text: { en: "Village Court", ml: "ഗ്രാമ കോടതി" } },
        { k: "D", text: { en: "Military Court", ml: "സൈനിക കോടതി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Supreme Court has the specific duty to protect citizens' rights.", ml: "മൗലികാവകാശങ്ങൾ ലംഘിക്കപ്പെട്ടാൽ അത് പുനഃസ്ഥാപിക്കാൻ സുപ്രീം കോടതി ബാധ്യസ്ഥമാണ്." }
    },
    {
      q_id: "ps-c6-q17",
      type: "mcq",
      stem: { en: "Appellate jurisdiction means the SC can hear appeals against:", ml: "അപ്പീൽ അധികാരപരിധി എന്നാൽ സുപ്രീം കോടതിക്ക് എന്തിനെതിരെ അപ്പീൽ കേൾക്കാം?" },
      options: [
        { k: "A", text: { en: "Foreign courts", ml: "വിദേശ കോടതികൾക്കെതിരെ" } },
        { k: "B", text: { en: "High Court decisions", ml: "ഹൈക്കോടതി വിധികൾക്കെതിരെ" } },
        { k: "C", text: { en: "Village decisions", ml: "ഗ്രാമ തീരുമാനങ്ങൾക്കെതിരെ" } },
        { k: "D", text: { en: "Elections", ml: "തിരഞ്ഞെടുപ്പുകൾക്കെതിരെ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Appeals flow from High Courts to the Supreme Court.", ml: "ഹൈക്കോടതി വിധികൾ പരിശോധിക്കാനും തിരുത്താനും സുപ്രീം കോടതിക്ക് അധികാരമുണ്ട്." }
    },
    {
      q_id: "ps-c6-q18",
      type: "mcq",
      stem: { en: "Which article gives Supreme Court original jurisdiction?", ml: "സുപ്രീം കോടതിയുടെ പ്രാരംഭ അധികാരപരിധിയെക്കുറിച്ച് പറയുന്ന വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 131", ml: "ആർട്ടിക്കിൾ 131" } },
        { k: "B", text: { en: "Article 32", ml: "ആർട്ടിക്കിൾ 32" } },
        { k: "C", text: { en: "Article 226", ml: "ആർട്ടിക്കിൾ 226" } },
        { k: "D", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Article 131 deals with disputes between Union and States.", ml: "131-ാം വകുപ്പിലാണ് സുപ്രീം കോടതിയുടെ പ്രാരംഭ അധികാരങ്ങളെക്കുറിച്ച് പറയുന്നത്." }
    },
    {
      q_id: "ps-c6-q19",
      type: "mcq",
      stem: { en: "Disrespecting the court or its orders is called:", ml: "കോടതിയെ അപമാനിക്കുന്നതിനെയോ ഉത്തരവുകൾ ലംഘിക്കുന്നതിനെയോ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Judicial Review", ml: "ജുഡീഷ്യൽ റിവ്യൂ" } },
        { k: "B", text: { en: "Contempt of Court", ml: "കോടതി അലക്ഷ്യം" } },
        { k: "C", text: { en: "Locus Standi", ml: "ലോകസ് സ്റ്റാൻഡി" } },
        { k: "D", text: { en: "Writ", ml: "റിട്ട്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Courts can punish people for contempt to maintain dignity.", ml: "കോടതിയുടെ ആജ്ഞകൾ അനുസരിക്കാതിരിക്കുന്നത് ശിക്ഷാർഹമാണ്." }
    },
    {
      q_id: "ps-c6-q20",
      type: "mcq",
      stem: { en: "Can Parliament discuss the conduct of a judge?", ml: "ജഡ്ജിമാരുടെ പെരുമാറ്റത്തെക്കുറിച്ച് പാർലമെന്റിന് ചർച്ച ചെയ്യാൻ കഴിയുമോ?" },
      options: [
        { k: "A", text: { en: "Yes, at any time", ml: "അതെ, എപ്പോഴും" } },
        { k: "B", text: { en: "No, except during removal motion", ml: "ഇല്ല, പുറത്താക്കൽ പ്രമേയ സമയത്ത് ഒഴികെ" } },
        { k: "C", text: { en: "Only if CJI agrees", ml: "ചീഫ് ജസ്റ്റിസ് സമ്മതിച്ചാൽ മാത്രം" } },
        { k: "D", text: { en: "Only in secret sessions", ml: "രഹസ്യ യോഗങ്ങളിൽ മാത്രം" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "The Constitution prohibits discussion on judges' conduct to protect independence.", ml: "പുറത്താക്കൽ നടപടികൾ നടക്കുമ്പോൾ മാത്രമാണ് ജഡ്ജിമാരുടെ പ്രവർത്തനങ്ങൾ ചർച്ചയാകുന്നത്." }
    },
    {
      q_id: "ps-c6-q21",
      type: "mcq",
      stem: { en: "In which year did the Kesavananda Bharati verdict come?", ml: "കേശവാനന്ദ ഭാരതി വിധി വന്ന വർഷം ഏത്?" },
      options: [
        { k: "A", text: { en: "1950", ml: "1950" } },
        { k: "B", text: { en: "1973", ml: "1973" } },
        { k: "C", text: { en: "1976", ml: "1976" } },
        { k: "D", text: { en: "1993", ml: "1993" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The landmark judgment was delivered in 1973.", ml: "1973-ലാണ് ഈ ചരിത്രപ്രധാനമായ വിധി വന്നത്." }
    },
    {
      q_id: "ps-c6-q22",
      type: "mcq",
      stem: { en: "Who has the power to issue writs for Fundamental Rights?", ml: "മൗലികാവകാശങ്ങൾക്കായി റിട്ടുകൾ പുറപ്പെടുവിക്കാൻ അധികാരമുള്ളത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "Supreme Court and High Courts", ml: "സുപ്രീം കോടതിക്കും ഹൈക്കോടതികൾക്കും" } },
        { k: "B", text: { en: "Supreme Court only", ml: "സുപ്രീം കോടതിക്ക് മാത്രം" } },
        { k: "C", text: { en: "District Courts", ml: "ജില്ലാ കോടതികൾക്ക്" } },
        { k: "D", text: { en: "Police Officers", ml: "പോലീസിന്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Article 32 for SC and Article 226 for HCs provide this power.", ml: "മൗലികാവകാശ സംരക്ഷണത്തിനായി റിട്ടുകൾ പുറപ്പെടുവിക്കാൻ ഹൈക്കോടതികൾക്കും അധികാരമുണ്ട്." }
    },
    {
      q_id: "ps-c6-q23",
      type: "mcq",
      stem: { en: "The power to declare a law unconstitutional is called:", ml: "ഒരു നിയമം ഭരണഘടനാ വിരുദ്ധമാണെന്ന് പ്രഖ്യാപിക്കാനുള്ള അധികാരം:" },
      options: [
        { k: "A", text: { en: "Judicial Review", ml: "ജുഡീഷ്യൽ റിവ്യൂ" } },
        { k: "B", text: { en: "Advisory Power", ml: "ഉപദേശക അധികാരം" } },
        { k: "C", text: { en: "Original Jurisdiction", ml: "പ്രാരംഭ അധികാരപരിധി" } },
        { k: "D", text: { en: "Contempt power", ml: "അലക്ഷ്യ അധികാരം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Judicial review ensures laws comply with the Constitution.", ml: "ജുഡീഷ്യൽ റിവ്യൂ വഴിയാണ് നിയമങ്ങൾ ഭരണഘടനയ്ക്ക് അനുസൃതമാണോ എന്ന് നോക്കുന്നത്." }
    },
    {
      q_id: "ps-c6-q24",
      type: "mcq",
      stem: { en: "Seniority principle is usually followed in appointing:", ml: "സീനിയോറിറ്റി തത്വം സാധാരണയായി ആരെ നിയമിക്കാനാണ് ഉപയോഗിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "The President", ml: "പ്രസിഡന്റിനെ" } },
        { k: "B", text: { en: "The Chief Justice of India", ml: "ഇന്ത്യൻ ചീഫ് ജസ്റ്റിസിനെ" } },
        { k: "C", text: { en: "The PM", ml: "പ്രധാനമന്ത്രിയെ" } },
        { k: "D", text: { en: "The Governor", ml: "ഗവർണറെ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Conventionally, the senior-most judge becomes the CJI.", ml: "സുപ്രീം കോടതിയിലെ ഏറ്റവും മുതിർന്ന ജഡ്ജിയെയാണ് ചീഫ് ജസ്റ്റിസായി നിയമിക്കാറുള്ളത്." }
    },
    {
      q_id: "ps-c6-q25",
      type: "mcq",
      stem: { en: "The Supreme Court is located in:", ml: "സുപ്രീം കോടതി സ്ഥിതി ചെയ്യുന്നത് എവിടെയാണ്?" },
      options: [
        { k: "A", text: { en: "Mumbai", ml: "മുംബൈ" } },
        { k: "B", text: { en: "Kolkata", ml: "കൊൽക്കത്ത" } },
        { k: "C", text: { en: "New Delhi", ml: "ന്യൂഡൽഹി" } },
        { k: "D", text: { en: "Chennai", ml: "ചെന്നൈ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "New Delhi is the seat of the Supreme Court of India.", ml: "ഇന്ത്യയുടെ പരമോന്നത കോടതി ന്യൂഡൽഹിയിലാണ്." }
    },
    {
      q_id: "ps-c6-q26",
      type: "mcq",
      stem: { en: "Which court is the highest court of appeal in a state?", ml: "ഒരു സംസ്ഥാനത്തെ ഏറ്റവും ഉയർന്ന അപ്പീൽ കോടതി ഏത്?" },
      options: [
        { k: "A", text: { en: "District Court", ml: "ജില്ലാ കോടതി" } },
        { k: "B", text: { en: "High Court", ml: "ഹൈക്കോടതി" } },
        { k: "C", text: { en: "Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { k: "D", text: { en: "Munsiff Court", ml: "മുൻസിഫ് കോടതി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The High Court is the top court in each state.", ml: "സംസ്ഥാന തലത്തിൽ ഏറ്റവും വലിയ അപ്പീൽ കോടതി ഹൈക്കോടതിയാണ്." }
    },
    {
      q_id: "ps-c6-q27",
      type: "mcq",
      stem: { en: "Judicial Activism has been criticized for:", ml: "ജുഡീഷ്യൽ ആക്റ്റിവിസം ഏത് കാര്യത്തിനാണ് വിമർശിക്കപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Protecting the poor", ml: "പാവപ്പെട്ടവരെ സംരക്ഷിക്കുന്നതിന്" } },
        { k: "B", text: { en: "Overstepping into executive functions", ml: "കാര്യനിർവ്വഹണ വിഭാഗത്തിന്റെ ജോലിയിൽ കടന്നുകയറുന്നതിന്" } },
        { k: "C", text: { en: "Giving fast justice", ml: "വേഗത്തിൽ നീതി നൽകുന്നതിന്" } },
        { k: "D", text: { en: "Reducing corruption", ml: "അഴിമതി കുറയ്ക്കുന്നതിന്" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Critics say courts sometimes try to run the administration.", ml: "കോടതികൾ ഗവൺമെന്റിന്റെ ചുമതലകളിൽ അനാവശ്യമായി ഇടപെടുന്നു എന്ന് ചിലർ വാദിക്കുന്നു." }
    },
    {
      q_id: "ps-c6-q28",
      type: "mcq",
      stem: { en: "Social Action Litigation (SAL) is another name for:", ml: "സോഷ്യൽ ആക്ഷൻ ലിറ്റിഗേഷൻ (SAL) എന്നത് ഏതിന്റെ മറ്റൊരു പേരാണ്?" },
      options: [
        { k: "A", text: { en: "PIL", ml: "പി.ഐ.എൽ (PIL)" } },
        { k: "B", text: { en: "Divorce cases", ml: "വിവാഹമോചന കേസുകൾ" } },
        { k: "C", text: { en: "Criminal trials", ml: "ക്രിമിനൽ കേസുകൾ" } },
        { k: "D", text: { en: "Tax laws", ml: "നികുതി നിയമങ്ങൾ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "SAL and PIL both refer to cases filed for the public good.", ml: "പൊതുതാൽപര്യ ഹർജികളെ ഇങ്ങനെയും വിളിക്കാറുണ്ട്." }
    },
    {
      q_id: "ps-c6-q29",
      type: "mcq",
      stem: { en: "The decisions of the Supreme Court are binding on:", ml: "സുപ്രീം കോടതിയുടെ തീരുമാനങ്ങൾ ആർക്കൊക്കെ ബാധകമാണ്?" },
      options: [
        { k: "A", text: { en: "Only central government", ml: "കേന്ദ്ര ഗവൺമെന്റിന് മാത്രം" } },
        { k: "B", text: { en: "All other courts in India", ml: "ഇന്ത്യയിലെ മറ്റെല്ലാ കോടതികൾക്കും" } },
        { k: "C", text: { en: "Only private citizens", ml: "സ്വകാര്യ വ്യക്തികൾക്ക് മാത്രം" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Supreme Court is the final authority in an integrated system.", ml: "സുപ്രീം കോടതി വിധി രാജ്യത്തെ എല്ലാ കോടതികളും അംഗീകരിക്കാൻ ബാധ്യസ്ഥമാണ്." }
    },
    {
      q_id: "ps-c6-q30",
      type: "mcq",
      stem: { en: "The 'Rule of Law' means:", ml: "'നിയമവാഴ്ച' എന്നാൽ എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Rules made by the police", ml: "പോലീസ് ഉണ്ടാക്കുന്ന നിയമങ്ങൾ" } },
        { k: "B", text: { en: "Law is supreme and applicable to all", ml: "നിയമമാണ് പരമപ്രധാനം, അത് എല്ലാവർക്കും ബാധകമാണ്" } },
        { k: "C", text: { en: "Rich people make rules", ml: "സമ്പന്നർ നിയമങ്ങൾ ഉണ്ടാക്കുന്നു" } },
        { k: "D", text: { en: "Laws only for poor", ml: "പാവപ്പെട്ടവർക്ക് മാത്രമുള്ള നിയമം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Nobody is above the law in a democracy.", ml: "എല്ലാവരും നിയമത്തിന് കീഴിലാണെന്ന തത്വമാണിത്." }
    }
  ]
};

export const plusOnePoliticalSciencePart1Unit7: Lesson = {
  id: "pl-ps-11-p1-u7",
  title: { en: "Federalism", ml: "ഫെഡറലിസം (Federalism)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=1ByBeNaxDtw",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the concept of federalism", ml: "ഫെഡറലിസം എന്ന ആശയം മനസ്സിലാക്കുക" },
    { en: "Analyze the division of powers between the Union and the States", ml: "കേന്ദ്രവും സംസ്ഥാനങ്ങളും തമ്മിലുള്ള അധികാര വിഭജനം വിശകലനം ചെയ്യുക" },
    { en: "Explain why India has a strong central government", ml: "ഇന്ത്യയിൽ എന്തുകൊണ്ട് ശക്തമായ കേന്ദ്ര ഗവൺമെന്റ് നിലനിൽക്കുന്നു എന്ന് വിവരിക്കുക" },
    { en: "Identify areas of conflict and cooperation in Indian federalism", ml: "ഇന്ത്യൻ ഫെഡറലിസത്തിലെ തർക്ക മേഖലകളും സഹകരണ മേഖലകളും തിരിച്ചറിയുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the concept of federalism, the distribution of powers in India, and the relationship between the Center and States.", 
      ml: "ഫെഡറലിസം എന്ന ആശയം, ഇന്ത്യയിലെ അധികാര വിഭജനം, കേന്ദ്ര-സംസ്ഥാന ബന്ധങ്ങൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of the Union, State, and Concurrent lists, provisions for a strong Center, and conflicts in federalism.", 
      ml: "കേന്ദ്ര, സംസ്ഥാന, കൺകറന്റ് ലിസ്റ്റുകൾ, ശക്തമായ കേന്ദ്രത്തിനുള്ള വ്യവസ്ഥകൾ, ഫെഡറലിസത്തിലെ തർക്കങ്ങൾ എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of federalism and how it is practiced in the Indian context. It explains the distribution of powers between the Union and the States, the reasons for a strong central government in India, and the various areas of conflict and cooperation in Indian federalism. Special provisions for certain states are also discussed.', ml: 'ഫെഡറലിസം എന്ന ആശയത്തെക്കുറിച്ചും ഇന്ത്യൻ സാഹചര്യത്തിൽ അത് എങ്ങനെയാണ് നടപ്പിലാക്കുന്നത് എന്നതിനെക്കുറിച്ചുമാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. കേന്ദ്രവും സംസ്ഥാനങ്ങളും തമ്മിലുള്ള അധികാര വിഭജനം, ഇന്ത്യയിൽ എന്തുകൊണ്ട് ശക്തമായ കേന്ദ്ര ഗവൺമെന്റ് ആവശ്യമായി വന്നു, കേന്ദ്ര-സംസ്ഥാന ബന്ധങ്ങളിലെ വിവിധ തർക്കങ്ങളും സഹകരണങ്ങളും എന്നിവ ഇത് വിശദീകരിക്കുന്നു. ചില സംസ്ഥാനങ്ങൾക്കുള്ള പ്രത്യേക വ്യവസ്ഥകളും ഇവിടെ ചർച്ച ചെയ്യുന്നുണ്ട്.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Federalism', ml: 'ഫെഡറലിസം (Federalism)'}, {en: 'System where power is divided between central authority and constituent units.', ml: 'കേന്ദ്ര ഗവൺമെന്റും സംസ്ഥാന ഗവൺമെന്റുകളും തമ്മിൽ അധികാരം പങ്കുവെക്കുന്ന രീതി.'}, {en: 'India, USA, Canada.', ml: 'ഇന്ത്യ, അമേരിക്ക, കാനഡ.'}],
          [{en: 'Union List', ml: 'കേന്ദ്ര പട്ടിക (Union List)'}, {en: 'Subjects on which only the Central Government can make laws.', ml: 'കേന്ദ്ര ഗവൺമെന്റിന് മാത്രം നിയമനിർമ്മാണം നടത്താൻ അധികാരമുള്ള വിഷയങ്ങൾ.'}, {en: 'Defense, Foreign Affairs.', ml: 'പ്രതിരോധം, വിദേശകാര്യം.'}],
          [{en: 'State List', ml: 'സംസ്ഥാന പട്ടിക (State List)'}, {en: 'Subjects on which State Governments have power to make laws.', ml: 'സാധാരണ നിലയിൽ സംസ്ഥാനങ്ങൾക്ക് മാത്രം നിയമമുണ്ടാക്കാൻ അധികാരമുള്ള വിഷയങ്ങൾ.'}, {en: 'Police, Agriculture.', ml: 'പോലീസ്, കൃഷി.'}],
          [{en: 'Concurrent List', ml: 'കൺകറന്റ് പട്ടിക (Concurrent List)'}, {en: 'Subjects on which both Central and State governments can make laws.', ml: 'കേന്ദ്രത്തിനും സംസ്ഥാനത്തിനും നിയമനിർമ്മാണത്തിന് അധികാരമുള്ള വിഷയങ്ങൾ.'}, {en: 'Education, Forests.', ml: 'വിദ്യാഭ്യാസം, വനം.'}],
          [{en: 'Residual Powers', ml: 'അവശിഷ്ട അധികാരങ്ങൾ (Residual Powers)'}, {en: 'Powers not mentioned in any list, belonging to the Centre.', ml: 'മൂന്ന് പട്ടികകളിലും പെടാത്തതും കേന്ദ്രത്തിന് നൽകിയിട്ടുള്ളതുമായ അധികാരങ്ങൾ.'}, {en: 'Cyber Laws.', ml: 'സൈബർ നിയമങ്ങൾ.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is Federalism?', ml: '3.1 എന്താണ് ഫെഡറലിസം? (What is Federalism?)' },
      { type: 'ul', items: [
        { en: 'Federalism aims to balance national unity with regional diversity.', ml: 'ദേശീയ അഖണ്ഡതയും പ്രാദേശിക വൈവിധ്യങ്ങളും തമ്മിൽ സന്തുലിതാവസ്ഥ നിലനിർത്താൻ ഫെഡറലിസം ലക്ഷ്യമിടുന്നു.' },
        { en: 'Key Features: Two levels of government, Written Constitution, Division of powers, Independent Judiciary.', ml: 'പ്രധാന സവിശേഷതകൾ: രണ്ട് തലത്തിലുള്ള ഭരണകൂടങ്ങൾ, എഴുതപ്പെട്ട ഭരണഘടന, അധികാര വിഭജനം, സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ.' }
      ]},

      { type: 'h3', en: '3.2 Federalism in the Indian Constitution', ml: '3.2 ഇന്ത്യൻ ഭരണഘടനയിലെ ഫെഡറലിസം' },
      { type: 'p', en: 'India is described as a "Union of States" (Article 1).', ml: 'ഇന്ത്യയെ ഒരു "സംസ്ഥാനങ്ങളുടെ യൂണിയൻ" (Union of States) എന്നാണ് ഭരണഘടനയുടെ ഒന്നാം വകുപ്പിൽ വിശേഷിപ്പിക്കുന്നത്.' },
      { type: 'h4', en: 'The Division of Powers (Seventh Schedule)', ml: 'അധികാര വിഭജനം (ഏഴാം ഷെഡ്യൂൾ)' },
      { type: 'ul', items: [
        { en: 'Union List (100 subjects): Atomic Energy, Banking, Railways, Currency.', ml: 'കേന്ദ്ര പട്ടിക (100 വിഷയങ്ങൾ): ആണവോർജ്ജം, ബാങ്കിംഗ്, റെയിൽവേ, കറൻസി.' },
        { en: 'State List (61 subjects): Local Government, Public Health, Land, Liquor.', ml: 'സംസ്ഥാന പട്ടിക (61 വിഷയങ്ങൾ): പ്രാദേശിക ഭരണം, പൊതുജനാരോഗ്യം, ഭൂമി, മദ്യം.' },
        { en: 'Concurrent List (52 subjects): Transfer of Property, Trade Unions, Adoption.', ml: 'കൺകറന്റ് പട്ടിക (52 विषयों): സ്വത്ത് കൈമാറ്റം, ട്രേഡ് യൂണിയനുകൾ, ദത്തെടുക്കൽ.' }
      ]},

      { type: 'h3', en: '3.3 Federalism with a Strong Central Government', ml: '3.3 ശക്തമായ കേന്ദ്രമുള്ള ഫെഡറലിസം' },
      { type: 'p', en: 'India needed a strong center to maintain unity and address socio-economic problems.', ml: 'രാജ്യത്തിന്റെ ഐക്യം നിലനിർത്തുന്നതിനും സാമൂഹിക-സാമ്പത്തിക പ്രശ്നങ്ങൾ പരിഹരിക്കുന്നതിനും ശക്തമായ കേന്ദ്രം ആവശ്യമാണെന്ന് ഭരണഘടനാ ശില്പികൾ കരുതി.' },
      { type: 'h4', en: 'Provisions that make the Center strong:', ml: 'കേന്ദ്രത്തെ ശക്തമാക്കുന്ന വ്യവസ്ഥകൾ:' },
      { type: 'ul', items: [
        { en: 'Article 3: Parliament can change state boundaries without their consent.', ml: 'ആർട്ടിക്കിൾ 3: സംസ്ഥാനങ്ങളുടെ അനുമതിയില്ലാതെ തന്നെ അതിർത്തി മാറ്റാൻ പാർലമെന്റിന് അധികാരമുണ്ട്.' },
        { en: 'Emergency Provisions: During an emergency, the system becomes unitary.', ml: 'അടിയന്തരാവസ്ഥാ വ്യവസ്ഥകൾ: അടിയന്തരാവസ്ഥാ സമയത്ത് രാജ്യം ഏകീകൃത (Unitary) ഭരണത്തിലേക്ക് മാറുന്നു.' },
        { en: 'Governor\'s Role: Appointed by the President; acts as a link between Center and State.', ml: 'ഗവർണറുടെ പങ്ക്: പ്രസിഡന്റ് നിയമിക്കുന്ന ഗവർണർ കേന്ദ്രത്തിന്റെ പ്രതിനിധിയായി പ്രവർത്തിക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.4 Conflicts in Indian Federalism', ml: '3.4 ഇന്ത്യൻ ഫെഡറലിസത്തിലെ തർക്കങ്ങൾ (Conflicts)' },
      { type: 'ul', items: [
        { en: 'Demand for Autonomy: States wanting more financial powers.', ml: 'സ്വയംഭരണാധികാരത്തിനായുള്ള വാദം: സംസ്ഥാനങ്ങൾ കൂടുതൽ സാമ്പത്തിക അധികാരങ്ങൾ ആവശ്യപ്പെടുന്നു.' },
        { en: 'President’s Rule (Article 356): Often used controversially to dismiss state governments.', ml: 'രാഷ്ട്രപതി ഭരണം (ആർട്ടിക്കിൾ 356): സംസ്ഥാന ഗവൺമെന്റുകളെ പിരിച്ചുവിടാൻ ഇത് ദുരുപയോഗം ചെയ്യുന്നു എന്ന പരാതിയുണ്ട്.' },
        { en: 'Inter-State Disputes: Conflicts over water (e.g., Cauvery) or boundaries.', ml: 'സംസ്ഥാനങ്ങൾ തമ്മിലുള്ള തർക്കങ്ങൾ: നദീജല തർക്കങ്ങളും (ഉദാ: കാവേരി) അതിർത്തി തർക്കങ്ങളും.' }
      ]},

      { type: 'h3', en: '3.5 Special Provisions', ml: '3.5 പ്രത്യേക വ്യവസ്ഥകൾ (Special Provisions)' },
      { type: 'ul', items: [
        { en: 'Article 371 to 371J: Special provisions for states like Nagaland, Assam, Sikkim, etc.', ml: 'ആർട്ടിക്കിൾ 371 മുതൽ 371J വരെ: നാഗാലാൻഡ്, അസം, സിക്കിം തുടങ്ങിയ സംസ്ഥാനങ്ങൾക്കുള്ള പ്രത്യേക അവകാശങ്ങൾ.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Sarkaria Commission (1983) examined Center-State relations.', ml: 'സർക്കാരിയ കമ്മീഷൻ (1983) കേന്ദ്ര-സംസ്ഥാന ബന്ധങ്ങളെക്കുറിച്ച് പഠിച്ചു.' },
        { en: 'Finance Commission is appointed every 5 years to distribute taxes.', ml: 'നികുതി വരുമാനം വീതിക്കുന്നത് സംബന്ധിച്ച് നിർദ്ദേശം നൽകാൻ 5 വർഷം കൂടുമ്പോൾ ധനകാര്യ കമ്മീഷനെ നിയമിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Federalism balances unity with diversity.', ml: 'ഫെഡറലിസം ഐക്യത്തെയും വൈവിധ്യത്തെയും ഒന്നിപ്പിക്കുന്നു.' },
        { en: 'India has a unitary bias to ensure national integrity.', ml: 'ദേശീയ അഖണ്ഡതയ്ക്കായി ഇന്ത്യയിൽ കേന്ദ്രത്തിന് കൂടുതൽ അധികാരം നൽകിയിട്ടുണ്ട്.' },
        { en: 'Misuse of Article 356 is a major area of conflict.', ml: '356-ാം വകുപ്പിന്റെ ദുരുപയോഗം പ്രധാനപ്പെട്ട ഒരു തർക്കവിഷയമാണ്.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Federalism",
      "ml": "ഫെഡറലിസം (Federalism)"
    },
    "definition": {
      "en": "A governance system where powers are divided between two levels of government, national and regional.",
      "ml": "ദേശീയ തലത്തിലും പ്രാദേശിക തലത്തിലുമായി രണ്ട് ഗവൺമെന്റുകൾക്ക് അധികാരങ്ങൾ വിഭജിച്ച് നൽകുന്ന ഭരണസംവിധാനം."
    }
  },
  {
    "term": {
      "en": "Union List, State List, Concurrent List",
      "ml": "യൂണിയൻ ലിസ്റ്റ്, സ്റ്റേറ്റ് ലിസ്റ്റ്, കൺകറന്റ് ലിസ്റ്റ്"
    },
    "definition": {
      "en": "Constitutional lists that divide legislative powers between the Central and State governments.",
      "ml": "കേന്ദ്ര-സംസ്ഥാന ഗവൺമെന്റുകൾക്കിടയിൽ നിയമനിർമ്മാണ അധികാരങ്ങൾ വിഭജിക്കുന്ന ഭരണഘടനാ പട്ടികകൾ."
    }
  },
  {
    "term": {
      "en": "Residuary Powers",
      "ml": "അവശിഷ്ട അധികാരങ്ങൾ (Residuary Powers)"
    },
    "definition": {
      "en": "The Center's power to make laws on new subjects not included in the three lists of the Constitution.",
      "ml": "ഭരണഘടനയുടെ മൂന്ന് ലിസ്റ്റുകളിലും ഉൾപ്പെടാത്ത പുതിയ വിഷയങ്ങളിൽ നിയമം നിർമ്മിക്കാൻ കേന്ദ്രത്തിനുള്ള അധികാരം."
    }
  },
  {
    "term": {
      "en": "Article 356",
      "ml": "അനുച്ഛേദം 356 (Article 356) / പ്രസിഡന്റ് ഭരണം"
    },
    "definition": {
      "en": "A provision where the Center takes over the administration of a state when its constitutional machinery fails.",
      "ml": "ഒരു സംസ്ഥാനത്തെ ഭരണഘടനാ സംവിധാനം തകരുമ്പോൾ ഭരണച്ചുമതല കേന്ദ്രം ഏറ്റെടുക്കുന്ന വ്യവസ്ഥ."
    }
  },
  {
    "term": {
      "en": "Asymmetric Federalism",
      "ml": "അസമമായ ഫെഡറലിസം (Asymmetric Federalism)"
    },
    "definition": {
      "en": "Special status and autonomy granted by the Constitution to certain states with specific social and historical backgrounds.",
      "ml": "പ്രത്യേക സാമൂഹിക-ചരിത്ര പശ്ചാത്തലമുള്ള ചില സംസ്ഥാനങ്ങൾക്ക് ഭരണഘടന നൽകുന്ന പ്രത്യേക പദവിയും സ്വയംഭരണവും."
    }
  }
],
  quiz: [
    {
      q_id: "ps-c7-q1",
      type: "mcq",
      stem: { en: "Which article of the Constitution describes India as a 'Union of States'?", ml: "ഇന്ത്യയെ ഒരു 'സംസ്ഥാനങ്ങളുടെ യൂണിയൻ' എന്ന് വിശേഷിപ്പിക്കുന്ന ഭരണഘടനാ വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 1", ml: "ആർട്ടിക്കിൾ 1" } },
        { k: "B", text: { en: "Article 14", ml: "ആർട്ടിക്കിൾ 14" } },
        { k: "C", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } },
        { k: "D", text: { en: "Article 370", ml: "ആർട്ടിക്കിൾ 370" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Article 1 states that India shall be a Union of States.", ml: "ഭരണഘടനയുടെ ഒന്നാം വകുപ്പിലാണ് ഇന്ത്യയെ ഇത്തരത്തിൽ വിശേഷിപ്പിക്കുന്നത്." }
    },
    {
      q_id: "ps-c7-q2",
      type: "mcq",
      stem: { en: "Subjects like Defense and Foreign Affairs are included in which list?", ml: "പ്രതിരോധം, വിദേശകാര്യം തുടങ്ങിയ വിഷയങ്ങൾ ഏത് പട്ടികയിലാണ് ഉൾപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "State List", ml: "സംസ്ഥാന പട്ടിക" } },
        { k: "B", text: { en: "Union List", ml: "കേന്ദ്ര പട്ടിക" } },
        { k: "C", text: { en: "Concurrent List", ml: "കൺകറന്റ് പട്ടിക" } },
        { k: "D", text: { en: "Residual List", ml: "അവശിഷ്ട പട്ടിക" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Matters of national importance belong to the Union List.", ml: "ദേശീയ പ്രാധാന്യമുള്ള വിഷയങ്ങൾ കേന്ദ്ര പട്ടികയിൽ ഉൾപ്പെടുന്നു." }
    },
    {
      q_id: "ps-c7-q3",
      type: "mcq",
      stem: { en: "How many subjects are currently in the Union List?", ml: "നിലവിൽ കേന്ദ്ര പട്ടികയിൽ എത്ര വിഷയങ്ങളുണ്ട്?" },
      options: [
        { k: "A", text: { en: "61", ml: "61" } },
        { k: "B", text: { en: "52", ml: "52" } },
        { k: "C", text: { en: "100", ml: "100" } },
        { k: "D", text: { en: "97", ml: "97" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The Union List originally had 97 subjects, now it has 100.", ml: "തുടക്കത്തിൽ 97 ആയിരുന്നെങ്കിലും ഇപ്പോൾ നൂറോളം വിഷയങ്ങൾ കേന്ദ്ര പട്ടികയിലുണ്ട്." }
    },
    {
      q_id: "ps-c7-q4",
      type: "mcq",
      stem: { en: "Education and Forests come under which list?", ml: "വിദ്യാഭ്യാസം, വനം എന്നിവ ഏത് പട്ടികയിൽ ഉൾപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Union List", ml: "കേന്ദ്ര പട്ടിക" } },
        { k: "B", text: { en: "State List", ml: "സംസ്ഥാന പട്ടിക" } },
        { k: "C", text: { en: "Concurrent List", ml: "കൺകറന്റ് പട്ടിക" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "These were moved to the Concurrent List by the 42nd Amendment.", ml: "കൺകറന്റ് ലിസ്റ്റിൽ ഉൾപ്പെടുന്നതുകൊണ്ട് കേന്ദ്രത്തിനും സംസ്ഥാനത്തിനും ഇതിൽ നിയമമുണ്ടാക്കാം." }
    },
    {
      q_id: "ps-c7-q5",
      type: "mcq",
      stem: { en: "Who has the power to make laws on 'Residual' subjects?", ml: "അവശിഷ്ട വിഷയങ്ങളിൽ (Residual subjects) നിയമമുണ്ടാക്കാൻ അധികാരമുള്ളത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "State Governments", ml: "സംസ്ഥാന ഗവൺമെന്റുകൾ" } },
        { k: "B", text: { en: "Central Government", ml: "കേന്ദ്ര ഗവൺമെന്റ്" } },
        { k: "C", text: { en: "Both Central and State", ml: "രണ്ടുപേർക്കും" } },
        { k: "D", text: { en: "Local Bodies", ml: "പ്രാദേശിക സ്വയംഭരണ സ്ഥാപനങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "In India, residual powers belong to the Union Parliament.", ml: "ഇന്ത്യയിൽ അവശിഷ്ട അധികാരങ്ങൾ കേന്ദ്രത്തിനാണ് നൽകിയിരിക്കുന്നത്." }
    },
    {
      q_id: "ps-c7-q6",
      type: "mcq",
      stem: { en: "Which article empowers the Center to take over a state administration (President's Rule)?", ml: "സംസ്ഥാന ഭരണം കേന്ദ്രം ഏറ്റെടുക്കാൻ (രാഷ്ട്രപതി ഭരണം) അനുവാദം നൽകുന്ന വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 352", ml: "ആർട്ടിക്കിൾ 352" } },
        { k: "B", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } },
        { k: "C", text: { en: "Article 360", ml: "ആർട്ടിക്കിൾ 360" } },
        { k: "D", text: { en: "Article 370", ml: "ആർട്ടിക്കിൾ 370" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Article 356 deals with the failure of constitutional machinery in states.", ml: "സംസ്ഥാനങ്ങളിൽ ഭരണഘടനാപരമായ ഭരണം അസാധ്യമാകുമ്പോൾ 356-ാം വകുപ്പ് പ്രകാരം രാഷ്ട്രപതി ഭരണം ഏർപ്പെടുത്താം." }
    },
    {
      q_id: "ps-c7-q7",
      type: "mcq",
      stem: { en: "The Sarkaria Commission was appointed to study:", ml: "സർക്കാരിയ കമ്മീഷൻ ഏതിനെക്കുറിച്ച് പഠിക്കാനാണ് നിയോഗിക്കപ്പെട്ടത്?" },
      options: [
        { k: "A", text: { en: "Electoral Reforms", ml: "തിരഞ്ഞെടുപ്പ് പരിഷ്കാരങ്ങൾ" } },
        { k: "B", text: { en: "Center-State Relations", ml: "കേന്ദ്ര-സംസ്ഥാന ബന്ധങ്ങൾ" } },
        { k: "C", text: { en: "Panchayati Raj", ml: "പ്രാദേശിക ഭരണം" } },
        { k: "D", text: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Sarkaria Commission (1983) made many recommendations for better federal relations.", ml: "കേന്ദ്രവും സംസ്ഥാനങ്ങളും തമ്മിലുള്ള ബന്ധം മെച്ചപ്പെടുത്തുന്നതിനാണ് ഈ കമ്മീഷൻ രൂപീകരിച്ചത്." }
    },
    {
      q_id: "ps-c7-q8",
      type: "mcq",
      stem: { en: "Who appoints the Governor of a state?", ml: "സംസ്ഥാന ഗവർണറെ നിയമിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Chief Minister", ml: "മുഖ്യമന്ത്രി" } },
        { k: "B", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "C", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "D", text: { en: "Chief Justice", ml: "ചീഫ് ജസ്റ്റിസ്" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The Governor is appointed by the President of India.", ml: "പ്രസിഡന്റാണ് ഗവർണറെ നിയമിക്കുന്നത്." }
    },
    {
      q_id: "ps-c7-q9",
      type: "mcq",
      stem: { en: "The power to create new states or change boundaries lies with:", ml: "പുതിയ സംസ്ഥാനങ്ങൾ രൂപീകരിക്കാനോ അതിർത്തി മാറ്റാനോ അധികാരമുള്ളത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "The State Government", ml: "സംസ്ഥാന ഗവൺമെന്റ്" } },
        { k: "B", text: { en: "The Parliament", ml: "പാർലമെന്റ്" } },
        { k: "C", text: { en: "The Supreme Court", ml: "സുപ്രീം കോടതി" } },
        { k: "D", text: { en: "The Governor", ml: "ഗവർണർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Under Article 3, Parliament can alter the territory of any state.", ml: "പാർലമെന്റിന് ഒരു നിയമത്തിലൂടെ സംസ്ഥാനങ്ങളുടെ രൂപീകരണത്തിൽ തീരുമാനമെടുക്കാം." }
    },
    {
      q_id: "ps-c7-q10",
      type: "mcq",
      stem: { en: "Which list contains subjects like Police and Agriculture?", ml: "പോലീസ്, കൃഷി തുടങ്ങിയ വിഷയങ്ങൾ ഏത് പട്ടികയിലാണ്?" },
      options: [
        { k: "A", text: { en: "Union List", ml: "കേന്ദ്ര പട്ടിക" } },
        { k: "B", text: { en: "State List", ml: "സംസ്ഥാന പട്ടിക" } },
        { k: "C", text: { en: "Concurrent List", ml: "കൺകറന്റ് പട്ടിക" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Police and Agriculture are primarily state subjects.", ml: "ഇവ സംസ്ഥാന പട്ടികയിലുള്ള വിഷയങ്ങളാണ്." }
    },
    {
      q_id: "ps-c7-q11",
      type: "mcq",
      stem: { en: "During a National Emergency, the Indian federal system becomes:", ml: "ദേശീയ അടിയന്തരാവസ്ഥാ സമയത്ത് ഇന്ത്യൻ ഫെഡറൽ സംവിധാനം എങ്ങനെ മാറുന്നു?" },
      options: [
        { k: "A", text: { en: "More decentralized", ml: "കൂടുതൽ വികേന്ദ്രീകൃതമാകുന്നു" } },
        { k: "B", text: { en: "Unitary", ml: "ഏകീകൃത (Unitary)മാകുന്നു" } },
        { k: "C", text: { en: "Dissolved", ml: "ഇല്ലാതാകുന്നു" } },
        { k: "D", text: { en: "Dictatorial", ml: "ഏകാധിപത്യമാകുന്നു" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The Union government gets powers to control state matters during emergencies.", ml: "അടിയന്തരാവസ്ഥാ ഘട്ടത്തിൽ ഫെഡറൽ സ്വഭാവം മാറി കേന്ദ്രത്തിന് സർവ്വാധികാരം ലഭിക്കുന്നു." }
    },
    {
      q_id: "ps-c7-q12",
      type: "mcq",
      stem: { en: "Financial allocation between Center and States is recommended by:", ml: "കേന്ദ്രവും സംസ്ഥാനങ്ങളും തമ്മിലുള്ള സാമ്പത്തിക വിഭജനത്തിന് നിർദ്ദേശം നൽകുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Planning Commission", ml: "പ്ലാനിംഗ് കമ്മീഷൻ" } },
        { k: "B", text: { en: "Finance Commission", ml: "ധനകാര്യ കമ്മീഷൻ" } },
        { k: "C", text: { en: "Reserve Bank", ml: "റിസർവ് ബാങ്ക്" } },
        { k: "D", text: { en: "Finance Minister", ml: "ധനമന്ത്രി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Finance Commission is a constitutional body appointed every 5 years.", ml: "5 വർഷം കൂടുമ്പോൾ നിയമിക്കപ്പെടുന്ന ധനകാര്യ കമ്മീഷനാണ് ഇക്കാര്യത്തിൽ തീരുമാനമെടുക്കുന്നത്." }
    },
    {
      q_id: "ps-c7-q13",
      type: "mcq",
      stem: { en: "Which of the following is NOT a feature of federalism?", ml: "താഴെ പറയുന്നവയിൽ ഫെഡറലിസത്തിന്റെ സവിശേഷത അല്ലാത്തത് ഏത്?" },
      options: [
        { k: "A", text: { en: "Written Constitution", ml: "എഴുതപ്പെട്ട ഭരണഘടന" } },
        { k: "B", text: { en: "Single level of government", ml: "ഒരു തലത്തിലുള്ള ഭരണകൂടം മാത്രം" } },
        { k: "C", text: { en: "Division of Powers", ml: "അധികാര വിഭജനം" } },
        { k: "D", text: { en: "Independent Judiciary", ml: "സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Federalism essentially requires at least two levels of government.", ml: "ഫെഡറലിസത്തിൽ കുറഞ്ഞത് രണ്ട് തലത്തിലുള്ള ഭരണകൂടങ്ങൾ ഉണ്ടായിരിക്കണം." }
    },
    {
      q_id: "ps-c7-q14",
      type: "mcq",
      stem: { en: "The concept of Residual Powers in India is borrowed from:", ml: "അവശിഷ്ട അധികാരങ്ങൾ എന്ന ആശയം ഇന്ത്യ കടമെടുത്തത് എവിടെ നിന്നാണ്?" },
      options: [
        { k: "A", text: { en: "USA", ml: "അമേരിക്ക" } },
        { k: "B", text: { en: "Canada", ml: "കാനഡ" } },
        { k: "C", text: { en: "UK", ml: "യുകെ" } },
        { k: "D", text: { en: "Australia", ml: "ഓസ്‌ട്രേലിയ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Canada also has a strong center with residual powers.", ml: "കനേഡിയൻ മാതൃകയിലാണ് ഇന്ത്യയിൽ കേന്ദ്രത്തിന് ഈ അധികാരം നൽകിയിട്ടുള്ളത്." }
    },
    {
      q_id: "ps-c7-q15",
      type: "mcq",
      stem: { en: "Disputes regarding the division of powers are settled by:", ml: "അധികാര വിഭജനം സംബന്ധിച്ച തർക്കങ്ങൾ പരിഹരിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "The Judiciary", ml: "നീതിന്യായ വിഭാഗം" } },
        { k: "C", text: { en: "The Parliament", ml: "പാർലമെന്റ്" } },
        { k: "D", text: { en: "The Police", ml: "പോലീസ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Courts interpret the constitution to resolve such conflicts.", ml: "ഭരണഘടനാപരമായ തർക്കങ്ങളിൽ കോടതിയാണ് അവസാന വാക്ക്." }
    },
    {
      q_id: "ps-c7-q16",
      type: "mcq",
      stem: { en: "Which schedule contains the Union, State, and Concurrent lists?", ml: "കേന്ദ്ര, സംസ്ഥാന, കൺകറന്റ് ലിസ്റ്റുകൾ ഉൾക്കൊള്ളുന്ന ഷെഡ്യൂൾ ഏത്?" },
      options: [
        { k: "A", text: { en: "Fifth Schedule", ml: "അഞ്ചാം ഷെഡ്യൂൾ" } },
        { k: "B", text: { en: "Seventh Schedule", ml: "ഏഴാം ഷെഡ്യൂൾ" } },
        { k: "C", text: { en: "Tenth Schedule", ml: "പത്താം ഷെഡ്യൂൾ" } },
        { k: "D", text: { en: "Twelfth Schedule", ml: "പന്ത്രണ്ടാം ഷെഡ്യൂൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Seventh schedule defines the legislative subjects for each level.", ml: "ഭരണഘടനയുടെ ഏഴാം ഷെഡ്യൂളിലാണ് ഈ പട്ടികകൾ വിവരിക്കുന്നത്." }
    },
    {
      q_id: "ps-c7-q17",
      type: "mcq",
      stem: { en: "The IAS and IPS are known as:", ml: "ഐ.എ.എസ്, ഐ.പി.എസ് എന്നിവ അറിയപ്പെടുന്നത്:" },
      options: [
        { k: "A", text: { en: "State Services", ml: "സംസ്ഥാന സർവീസുകൾ" } },
        { k: "B", text: { en: "All-India Services", ml: "അഖിലേന്ത്യാ സർവീസുകൾ" } },
        { k: "C", text: { en: "Military Services", ml: "സൈനിക സർവീസുകൾ" } },
        { k: "D", text: { en: "Private Services", ml: "സ്വകാര്യ സർവീസുകൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "They are recruited by the Center but serve in States, showing federal cooperation.", ml: "ഇവ അഖിലേന്ത്യാ തലത്തിലുള്ള സർവീസുകളാണ്." }
    },
    {
      q_id: "ps-c7-q18",
      type: "mcq",
      stem: { en: "A 'Unitary bias' in the Indian Constitution means:", ml: "ഇന്ത്യൻ ഭരണഘടനയിലെ 'ഏകീകൃത പ്രവണത' (Unitary bias) എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "States are more powerful", ml: "സംസ്ഥാനങ്ങൾ കൂടുതൽ ശക്തമാണ്" } },
        { k: "B", text: { en: "Center is more powerful", ml: "കേന്ദ്രത്തിന് കൂടുതൽ അധികാരമുണ്ട്" } },
        { k: "C", text: { en: "Local bodies rule the country", ml: "പ്രാദേശിക സ്ഥാപനങ്ങൾ രാജ്യം ഭരിക്കുന്നു" } },
        { k: "D", text: { en: "No government exists", ml: "ഭരണകൂടം ഇല്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "While being federal, the Constitution gives more weight to the Center.", ml: "ഫെഡറൽ സംവിധാനമാണെങ്കിലും കേന്ദ്രത്തിന് മുൻതൂക്കം നൽകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-c7-q19",
      type: "mcq",
      stem: { en: "Which of the following states has special provisions under Article 371?", ml: "ആർട്ടിക്കിൾ 371 പ്രകാരം പ്രത്യേക വ്യവസ്ഥകളുള്ള സംസ്ഥാനം ഏത്?" },
      options: [
        { k: "A", text: { en: "Kerala", ml: "കേരളം" } },
        { k: "B", text: { en: "Nagaland", ml: "നാഗാലാൻഡ്" } },
        { k: "C", text: { en: "Tamil Nadu", ml: "തമിഴ്‌നാട്" } },
        { k: "D", text: { en: "Uttar Pradesh", ml: "ഉത്തർപ്രദേശ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Article 371A provides special protection to Nagaland's culture and land.", ml: "നാഗാലാൻഡ് ഉൾപ്പെടെയുള്ള പല വടക്കുകിഴക്കൻ സംസ്ഥാനങ്ങൾക്കും പ്രത്യേക പരിരക്ഷയുണ്ട്." }
    },
    {
      q_id: "ps-c7-q20",
      type: "mcq",
      stem: { en: "Inter-state water disputes are handled under which article?", ml: "സംസ്ഥാനങ്ങൾ തമ്മിലുള്ള നദീജല തർക്കങ്ങൾ കൈകാര്യം ചെയ്യുന്ന വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 262", ml: "ആർട്ടിക്കിൾ 262" } },
        { k: "B", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } },
        { k: "C", text: { en: "Article 14", ml: "ആർട്ടിക്കിൾ 14" } },
        { k: "D", text: { en: "Article 21", ml: "ആർട്ടിക്കിൾ 21" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Article 262 allows Parliament to adjudicate water disputes.", ml: "262-ാം വകുപ്പ് പ്രകാരമാണ് നദീജല തർക്കങ്ങളിൽ പരിഹാരം കാണുന്നത്." }
    },
    {
      q_id: "ps-c7-q21",
      type: "mcq",
      stem: { en: "Who is the 'link' between the Central Government and the State Government?", ml: "കേന്ദ്ര ഗവൺമെന്റും സംസ്ഥാന ഗവൺമെന്റും തമ്മിലുള്ള 'കണ്ണി'യായി പ്രവർത്തിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The Chief Minister", ml: "മുഖ്യമന്ത്രി" } },
        { k: "B", text: { en: "The Governor", ml: "ഗവർണർ" } },
        { k: "C", text: { en: "The Speaker", ml: "സ്പീക്കർ" } },
        { k: "D", text: { en: "The Collector", ml: "കളക്ടർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Governor reports to the President about the state's affairs.", ml: "ഗവർണറാണ് കേന്ദ്രത്തിന് സംസ്ഥാനത്തെ വിവരങ്ങൾ കൈമാറുന്നത്." }
    },
    {
      q_id: "ps-c7-q22",
      type: "mcq",
      stem: { en: "If there is a conflict between Union and State law on a Concurrent subject, which one prevails?", ml: "കൺകറന്റ് ലിസ്റ്റിലെ ഒരു വിഷയത്തിൽ കേന്ദ്രവും സംസ്ഥാനവും വ്യത്യസ്ത നിയമമുണ്ടാക്കിയാൽ ഏതാണ് നിലനിൽക്കുക?" },
      options: [
        { k: "A", text: { en: "State Law", ml: "സംസ്ഥാന നിയമം" } },
        { k: "B", text: { en: "Union Law", ml: "കേന്ദ്ര നിയമം" } },
        { k: "C", text: { en: "Both are cancelled", ml: "രണ്ടും റദ്ദാകും" } },
        { k: "D", text: { en: "Court decides", ml: "കോടതി തീരുമാനിക്കും" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Union law has supremacy over state law in concurrent subjects.", ml: "കേന്ദ്ര നിയമത്തിനാണ് ഇത്തരം സാഹചര്യങ്ങളിൽ മുൻതൂക്കം ലഭിക്കുന്നത്." }
    },
    {
      q_id: "ps-c7-q23",
      type: "mcq",
      stem: { en: "A major area of conflict in Indian federalism is the misuse of:", ml: "ഇന്ത്യൻ ഫെഡറലിസത്തിലെ പ്രധാന തർക്ക വിഷയം ഏതിന്റെ ദുരുപയോഗമാണ്?" },
      options: [
        { k: "A", text: { en: "Article 1", ml: "ആർട്ടിക്കിൾ 1" } },
        { k: "B", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } },
        { k: "C", text: { en: "Article 32", ml: "ആർട്ടിക്കിൾ 32" } },
        { k: "D", text: { en: "Article 19", ml: "ആർട്ടിക്കിൾ 19" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Imposing President's rule for political reasons is often criticized.", ml: "356-ാം വകുപ്പ് ഉപയോഗിച്ച് സംസ്ഥാന സർക്കാരുകളെ പിരിച്ചുവിടുന്നത് പലപ്പോഴും വിവാദമാകാറുണ്ട്." }
    },
    {
      q_id: "ps-c7-q24",
      type: "mcq",
      stem: { en: "Federalism is a balance between:", ml: "ഫെഡറലിസം ഏവ തമ്മിലുള്ള സന്തുലിതാവസ്ഥയാണ്?" },
      options: [
        { k: "A", text: { en: "Police and Public", ml: "പോലീസും ജനങ്ങളും" } },
        { k: "B", text: { en: "National Unity and Regional Diversity", ml: "ദേശീയ ഐക്യവും പ്രാദേശിക വൈവിധ്യവും" } },
        { k: "C", text: { en: "Rich and Poor", ml: "സമ്പന്നരും പാവപ്പെട്ടവരും" } },
        { k: "D", text: { en: "Men and Women", ml: "സ്ത്രീകളും പുരുഷന്മാരും" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It allows regions to have their own identity while being part of a nation.", ml: "പ്രാദേശിക താൽപ്പര്യങ്ങളും ദേശീയ താൽപ്പര്യങ്ങളും ഒരുമിച്ച് കൊണ്ടുപോകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-c7-q25",
      type: "mcq",
      stem: { en: "The power to change the name of a state belongs to:", ml: "ഒരു സംസ്ഥാനത്തിന്റെ പേര് മാറ്റാൻ അധികാരമുള്ളത് ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "State Legislative Assembly", ml: "സംസ്ഥാന നിയമസഭ" } },
        { k: "B", text: { en: "Union Parliament", ml: "കേന്ദ്ര പാർലമെന്റ്" } },
        { k: "C", text: { en: "Local residents", ml: "പ്രാദേശിക നിവാസികൾ" } },
        { k: "D", text: { en: "Governor", ml: "ഗവർണർ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Parliament can change names or boundaries by a simple majority.", ml: "കേന്ദ്ര പാർലമെന്റിനാണ് ഈ അധികാരം നൽകിയിരിക്കുന്നത്." }
    },
    {
      q_id: "ps-c7-q26",
      type: "mcq",
      stem: { en: "Residuary powers in India are those which:", ml: "ഇന്ത്യയിലെ അവശിഷ്ട അധികാരങ്ങൾ എന്നാൽ എങ്ങനെയുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Belong to the states", ml: "സംസ്ഥാനങ്ങൾക്കുള്ളത്" } },
        { k: "B", text: { en: "Are not mentioned in any of the three lists", ml: "മൂന്ന് ലിസ്റ്റുകളിലും ഉൾപ്പെടാത്തവ" } },
        { k: "C", text: { en: "Are related to the military", ml: "സൈന്യവുമായി ബന്ധപ്പെട്ടവ" } },
        { k: "D", text: { en: "Are cancelled by the court", ml: "കോടതി റദ്ദാക്കിയവ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "New subjects that arise over time (like IT) become residual powers.", ml: "ലിസ്റ്റുകളിൽ പെടാത്ത പുതിയ വിഷയങ്ങളെയാണ് അവശിഷ്ട വിഷയങ്ങൾ എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "ps-c7-q27",
      type: "mcq",
      stem: { en: "Which commission recommended that the Governor should be a non-political person?", ml: "ഗവർണർ രാഷ്ട്രീയമില്ലാത്ത വ്യക്തിയായിരിക്കണമെന്ന് ശുപാർശ ചെയ്ത കമ്മീഷൻ ഏത്?" },
      options: [
        { k: "A", text: { en: "Mandal Commission", ml: "മണ്ഡൽ കമ്മീഷൻ" } },
        { k: "B", text: { en: "Sarkaria Commission", ml: "സർക്കാരിയ കമ്മീഷൻ" } },
        { k: "C", text: { en: "Verma Commission", ml: "വർമ്മ കമ്മീഷൻ" } },
        { k: "D", text: { en: "Planning Commission", ml: "പ്ലാനിംഗ് കമ്മീഷൻ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Sarkaria Commission suggested reforms to make the Governor's role more neutral.", ml: "ഗവർണർ പദവി രാഷ്ട്രീയവൽക്കരിക്കരുത് എന്ന് സർക്കാരിയ കമ്മീഷൻ പറഞ്ഞു." }
    },
    {
      q_id: "ps-c7-q28",
      type: "mcq",
      stem: { en: "Cyber laws are an example of:", ml: "സൈബർ നിയമങ്ങൾ ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Union List", ml: "കേന്ദ്ര പട്ടിക" } },
        { k: "B", text: { en: "Residual Powers", ml: "അവശിഷ്ട അധികാരങ്ങൾ" } },
        { k: "C", text: { en: "State List", ml: "സംസ്ഥാന പട്ടിക" } },
        { k: "D", text: { en: "Concurrent List", ml: "കൺകറന്റ് പട്ടിക" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "IT and Cyber laws were not around when lists were made, so they are residual.", ml: "ഭരണഘടന ഉണ്ടാക്കിയ സമയത്ത് ഇല്ലാതിരുന്ന പുതിയ വിഷയമാണ് സൈബർ നിയമങ്ങൾ." }
    },
    {
      q_id: "ps-c7-q29",
      type: "mcq",
      stem: { en: "A quasi-federal state means:", ml: "ഒരു അർദ്ധ-ഫെഡറൽ രാജ്യം എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Only central power", ml: "കേന്ദ്ര അധികാരം മാത്രം" } },
        { k: "B", text: { en: "A federal system with a strong center", ml: "ശക്തമായ കേന്ദ്രമുള്ള ഫെഡറൽ സംവിധാനം" } },
        { k: "C", text: { en: "Many independent countries", ml: "പല സ്വതന്ത്ര രാജ്യങ്ങൾ" } },
        { k: "D", text: { en: "Military rule", ml: "സൈനിക ഭരണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "India is often called quasi-federal because of its unitary bias.", ml: "പൂർണ്ണമായും ഫെഡറൽ അല്ലാത്തതും എന്നാൽ ഏകീകൃതമല്ലാത്തതുമായ രീതിയാണിത്." }
    },
    {
      q_id: "ps-c7-q30",
      type: "mcq",
      stem: { en: "The Finance Commission is appointed for how many years?", ml: "ധനകാര്യ കമ്മീഷനെ എത്ര വർഷത്തേക്കാണ് നിയമിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "3 years", ml: "3 വർഷം" } },
        { k: "B", text: { en: "5 years", ml: "5 വർഷം" } },
        { k: "C", text: { en: "6 years", ml: "6 വർഷം" } },
        { k: "D", text: { en: "10 years", ml: "10 വർഷം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The President appoints it every five years.", ml: "ഓരോ അഞ്ച് വർഷം കൂടുമ്പോഴുമാണ് ധനകാര്യ കമ്മീഷൻ രൂപീകരിക്കുന്നത്." }
    }
  ]
};

export const plusOnePoliticalSciencePart1Unit8: Lesson = {
  id: "pl-ps-11-p1-u8",
  title: { en: "Local Governments", ml: "പ്രാദേശിക ഗവൺമെന്റുകൾ (Local Governments)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=1IF4x09sdGM",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the importance of local government in a democracy", ml: "ജനാധിപത്യത്തിൽ പ്രാദേശിക ഗവൺമെന്റുകളുടെ പ്രാധാന്യം മനസ്സിലാക്കുക" },
    { en: "Explain the features of the 73rd and 74th Constitutional Amendments", ml: "73, 74 ഭരണഘടനാ ഭേദഗതികളുടെ സവിശേഷതകൾ വിവരിക്കുക" },
    { en: "Analyze the three-tier structure of Panchayati Raj", ml: "പഞ്ചായത്തീരാജ് സംവിധാനത്തിന്റെ മൂന്നുതല ഘടന വിശകലനം ചെയ്യുക" },
    { en: "Identify the challenges faced by local self-governments", ml: "പ്രാദേശിക സ്വയംഭരണ സ്ഥാപനങ്ങൾ നേരിടുന്ന വെല്ലുവിളികൾ തിരിച്ചറിയുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the importance, structure, and historical background of local self-government in India.", 
      ml: "ഇന്ത്യയിലെ പ്രാദേശിക സ്വയംഭരണത്തിന്റെ പ്രാധാന്യം, ഘടന, ചരിത്ര പശ്ചാത്തലം എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of the 73rd and 74th Amendments, the Panchayati Raj structure, and the challenges of grassroots democracy.", 
      ml: "73, 74 ഭേദഗതികൾ, പഞ്ചായത്തീരാജ് ഘടന, അടിത്തട്ടിലുള്ള ജനാധിപത്യം നേരിടുന്ന വെല്ലുവിളികൾ എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the importance and structure of local self-government in India. It details the historical background of local bodies, the significance of the 73rd and 74th Constitutional Amendments, the three-tier structure of Panchayati Raj, and the functions and challenges faced by these local institutions in ensuring grassroots democracy.', ml: 'ഇന്ത്യയിലെ പ്രാദേശിക സ്വയംഭരണത്തിന്റെ പ്രാധാന്യത്തെക്കുറിച്ചും ഘടനയെക്കുറിച്ചുമാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. പ്രാദേശിക സ്ഥാപനങ്ങളുടെ ചരിത്ര പശ്ചാത്തലം, 73, 74 ഭരണഘടനാ ഭേദഗതികളുടെ പ്രാധാന്യം, പഞ്ചായത്തീരാജിന്റെ മൂന്നുതല ഘടന, താഴെത്തട്ടിലുള്ള ജനാധിപത്യം ഉറപ്പാക്കുന്നതിൽ ഈ സ്ഥാപനങ്ങൾ നേരിടുന്ന വെല്ലുവിളികൾ എന്നിവ ഇവിടെ വിശദീകരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Local Government', ml: 'പ്രാദേശിക ഗവൺമെന്റ് (Local Government)'}, {en: 'Government at the village and district level closest to the common people.', ml: 'സാധാരണക്കാരോട് ഏറ്റവും അടുത്ത് നിൽക്കുന്ന ഗ്രാമ-ജില്ലാ തലത്തിലുള്ള ഭരണകൂടം.'}, {en: 'Gram Panchayat, Municipality.', ml: 'ഗ്രാമപഞ്ചായത്ത്, നഗരസഭ.'}],
          [{en: '73rd Amendment', ml: '73-ാം ഭേദഗതി (73rd Amendment)'}, {en: 'Amendment providing a uniform three-tier structure for rural local governments.', ml: 'ഗ്രാമപ്രദേശങ്ങളിലെ പ്രാദേശിക ഭരണത്തിന് ഏകീകൃതമായ മൂന്നുതല ഘടന നൽകിയ ഭേദഗതി.'}, {en: 'Came into force in 1993.', ml: '1993-ൽ നിലവിൽ വന്നു.'}],
          [{en: '74th Amendment', ml: '74-ാം ഭേദഗതി (74th Amendment)'}, {en: 'Amendment providing for urban local governments (Nagarpalikas).', ml: 'നഗരപ്രദേശങ്ങളിലെ പ്രാദേശിക ഭരണത്തിന് (നഗരപാലികകൾ) രൂപം നൽകിയ ഭേദഗതി.'}, {en: 'Deals with towns and cities.', ml: 'പട്ടണങ്ങളും നഗരങ്ങളും.'}],
          [{en: 'Gram Sabha', ml: 'ഗ്രാമസഭ (Gram Sabha)'}, {en: 'The foundation of PRI, consisting of all registered voters in a village.', ml: 'പഞ്ചായത്തീരാജ് സംവിധാനത്തിന്റെ അടിസ്ഥാനം. ഒരു വില്ലേജിലെ എല്ലാ വോട്ടർമാരും ഇതിൽ അംഗങ്ങളാണ്.'}, {en: 'Decisions are discussed here.', ml: 'വികസന കാര്യങ്ങൾ ഇവിടെ ചർച്ച ചെയ്യുന്നു.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 Why Local Governments?', ml: '3.1 എന്തുകൊണ്ട് പ്രാദേശിക ഗവൺമെന്റുകൾ?' },
      { type: 'ul', items: [
        { en: 'Local government is closest to the common citizen.', ml: 'സാധാരണ പൗരനോട് ഏറ്റവും അടുത്ത് നിൽക്കുന്ന ഭരണകൂടമാണിത്.' },
        { en: 'Everyday problems can be solved quickly and at minimum cost.', ml: 'ദൈനംദിന പ്രശ്നങ്ങൾ വേഗത്തിലും കുറഞ്ഞ ചിലവിലും പരിഹരിക്കാൻ സാധിക്കുന്നു.' },
        { en: 'It ensures meaningful participation of people in decision-making.', ml: 'തീരുമാനങ്ങൾ എടുക്കുന്നതിൽ ജനങ്ങളുടെ നേരിട്ടുള്ള പങ്കാളിത്തം ഉറപ്പാക്കുന്നു.' },
        { en: 'Strong local governments ensure grassroots democracy.', ml: 'ശക്തമായ പ്രാദേശിക ഭരണകൂടങ്ങൾ അടിത്തട്ടിലുള്ള ജനാധിപത്യം (Grassroots democracy) ഉറപ്പാക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.2 Growth of Local Government in India', ml: '3.2 പ്രാദേശിക ഭരണകൂടങ്ങളുടെ വളർച്ച' },
      { type: 'ul', items: [
        { en: 'Ancient India: Self-governing village communities existed as Sabhas.', ml: 'പുരാതന ഇന്ത്യ: സഭകൾ എന്നറിയപ്പെട്ടിരുന്ന സ്വയംഭരണ ഗ്രാമങ്ങൾ നിലനിന്നിരുന്നു.' },
        { en: 'Lord Ripon (1882): Called the "Father of Local Self-Government" in India.', ml: 'ലോർഡ് റിപ്പൺ (1882): ഇന്ത്യയിലെ "പ്രാദേശിക സ്വയംഭരണത്തിന്റെ പിതാവ്" എന്നറിയപ്പെടുന്നു.' },
        { en: 'Article 40: Directive Principles directed states to organize village panchayats.', ml: 'ആർട്ടിക്കിൾ 40: ഗ്രാമപഞ്ചായത്തുകൾ രൂപീകരിക്കാൻ സംസ്ഥാനങ്ങൾക്ക് നിർദ്ദേശം നൽകുന്നു.' }
      ]},

      { type: 'h3', en: '3.3 The 73rd Amendment (Rural Local Government)', ml: '3.3 73-ാം ഭേദഗതി (ഗ്രാമ പ്രാദേശിക ഭരണം)' },
      { type: 'h4', en: 'Key Features:', ml: 'പ്രധാന സവിശേഷതകൾ:' },
      { type: 'ul', items: [
        { en: 'Three-Tier Structure: Gram Panchayat (village), Mandal/Block Panchayat (intermediate), Zilla Panchayat (district).', ml: 'മൂന്നുതല ഘടന: ഗ്രാമപഞ്ചായത്ത്, ബ്ലോക്ക് പഞ്ചായത്ത്, ജില്ലാ പഞ്ചായത്ത്.' },
        { en: 'Elections: Direct elections for a term of 5 years.', ml: 'തിരഞ്ഞെടുപ്പ്: 5 വർഷ കാലാവധിയിലേക്ക് നേരിട്ടുള്ള തിരഞ്ഞെടുപ്പ്.' },
        { en: 'Reservations: One-third (33%) seats for women; SC/ST reservations based on population.', ml: 'സംവരണം: സ്ത്രീകൾക്ക് മൂന്നിലൊന്ന് (33%) സീറ്റുകൾ; SC/ST വിഭാഗങ്ങൾക്ക് ജനസംഖ്യാനുപാതത്തിൽ സംവരണം.' },
        { en: 'Eleventh Schedule: 29 subjects transferred to Panchayati Raj.', ml: '11-ാം ഷെഡ്യൂൾ: 29 വിഷയങ്ങൾ പഞ്ചായത്തീരാജിന് കൈമാറി.' },
        { en: 'State Election Commission: To conduct independent elections.', ml: 'സ്റ്റേറ്റ് ഇലക്ഷൻ കമ്മീഷൻ: സ്വതന്ത്രമായ തിരഞ്ഞെടുപ്പ് നടത്താൻ.' }
      ]},

      { type: 'h3', en: '3.4 The 74th Amendment (Urban Local Government)', ml: '3.4 74-ാം ഭേദഗതി (നഗര പ്രാദേശിക ഭരണം)' },
      { type: 'ul', items: [
        { en: 'Deals with Nagarpalikas (Municipalities).', ml: 'നഗരപാലികകളെ (Municipalities) സംബന്ധിച്ചുള്ളതാണിത്.' },
        { en: 'Twelfth Schedule: Lists 18 subjects for urban local bodies.', ml: '12-ാം ഷെഡ്യൂൾ: നഗരസഭകൾക്കായി 18 വിഷയങ്ങൾ നൽകിയിരിക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.5 Implementation and Challenges', ml: '3.5 നടപ്പിലാക്കലും വെല്ലുവിളികളും' },
      { type: 'ul', items: [
        { en: 'Lack of Funds: Heavy dependency on State/Central grants.', ml: 'ഫണ്ടിന്റെ അഭാവം: സംസ്ഥാന-കേന്ദ്ര ഗ്രന്റുകളെ അമിതമായി ആശ്രയിക്കേണ്ടി വരുന്നു.' },
        { en: 'Inadequate Power: Many subjects not yet transferred by states.', ml: 'അധികാരമില്ലായ്മ: പല സംസ്ഥാനങ്ങളും എല്ലാ വിഷയങ്ങളും വിട്ടുകൊടുത്തിട്ടില്ല.' },
        { en: 'Dependency on Bureaucracy: dependence on government officials for implementation.', ml: 'ഉദ്യോഗസ്ഥരെ ആശ്രയിക്കൽ: ഭരണനിർവ്വഹണത്തിന് ഉദ്യോഗസ്ഥരെ അമിതമായി ആശ്രയിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'The 73rd and 74th Amendments gave Constitutional Status to local governments.', ml: '73, 74 ഭേദഗതികൾ പ്രാദേശിക ഭരണകൂടങ്ങൾക്ക് ഭരണഘടനാപരമായ പദവി നൽകി.' },
        { en: 'Over 13 lakh women are elected to local bodies, increasing their political participation.', ml: '13 ലക്ഷത്തിലധികം സ്ത്രീകൾ പ്രാദേശിക സഭകളിലേക്ക് തിരഞ്ഞെടുക്കപ്പെടുന്നു.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: '73rd Amendment handles rural governance (PRI).', ml: '73-ാം ഭേദഗതി ഗ്രാമീണ ഭരണത്തെ (PRI) നിയന്ത്രിക്കുന്നു.' },
        { en: '74th Amendment handles urban governance (Nagarpalika).', ml: '74-ാം ഭേദഗതി നഗര ഭരണത്തെ (നഗരപാലിക) നിയന്ത്രിക്കുന്നു.' },
        { en: '33% reservation for women is a major milestone.', ml: 'സ്ത്രീകൾക്കുള്ള 33% സംവരണം ഒരു സുപ്രധാന നാഴികക്കല്ലാണ്.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Local Government",
      "ml": "പ്രാദേശിക ഗവൺമെന്റ് (Local Government)"
    },
    "definition": {
      "en": "The government closest to the people, dealing with their daily problems at village and district levels.",
      "ml": "ഗ്രാമ-ജില്ലാ തലങ്ങളിൽ ജനങ്ങളുടെ ദൈനംദിന പ്രശ്നങ്ങളിൽ ഇടപെടുന്ന, ജനങ്ങൾക്ക് ഏറ്റവും അടുത്തുള്ള സർക്കാർ."
    }
  },
  {
    "term": {
      "en": "73rd Amendment",
      "ml": "73-ാം ഭേദഗതി (73rd Amendment)"
    },
    "definition": {
      "en": "A constitutional amendment that provided a uniform three-tier structure for rural local bodies (Panchayati Raj) across the country.",
      "ml": "ഗ്രാമീണ തദ്ദേശ സ്ഥാപനങ്ങൾക്ക് (പഞ്ചായത്ത് രാജ്) രാജ്യത്തുടനീളം ഏകീകൃതമായ ത്രിതല ഘടന നൽകിയ ഭരണഘടനാ ഭേദഗതി."
    }
  },
  {
    "term": {
      "en": "74th Amendment",
      "ml": "74-ാം ഭേദഗതി (74th Amendment)"
    },
    "definition": {
      "en": "An amendment that gave structure and powers to local bodies in cities (Nagarpalikas).",
      "ml": "നഗരങ്ങളിലെ തദ്ദേശ സ്ഥാപനങ്ങൾക്ക് (നഗരപാലികകൾ) ഘടനയും അധികാരങ്ങളും നൽകിയ ഭേദഗതി."
    }
  },
  {
    "term": {
      "en": "Gram Sabha",
      "ml": "ഗ്രാമസഭ (Gram Sabha)"
    },
    "definition": {
      "en": "A mandatory village assembly consisting of all adult citizens on the voter list of a Panchayat.",
      "ml": "ഒരു പഞ്ചായത്തിലെ വോട്ടർപട്ടികയിലുള്ള എല്ലാ മുതിർന്ന പൗരന്മാരും ഉൾപ്പെടുന്ന നിർബന്ധിത ഗ്രാമസഭ."
    }
  },
  {
    "term": {
      "en": "State Election Commission",
      "ml": "സംസ്ഥാന തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ (State Election Commission)"
    },
    "definition": {
      "en": "A commission formed to conduct independent elections to local self-government institutions.",
      "ml": "തദ്ദേശ സ്വയംഭരണ സ്ഥാപനങ്ങളിലേക്ക് സ്വതന്ത്രമായി തിരഞ്ഞെടുപ്പ് നടത്താൻ രൂപീകരിച്ച കമ്മീഷൻ."
    }
  },
  {
    "term": {
      "en": "Mahatma Gandhi",
      "ml": "മഹാത്മാഗാന്ധി (Mahatma Gandhi)"
    },
    "definition": {
      "en": "A leader who strongly advocated for decentralization of power and self-rule for villages (Gram Swaraj).",
      "ml": "അധികാര വികേന്ദ്രീകരണത്തിനും ഗ്രാമങ്ങളുടെ സ്വയംഭരണത്തിനും (ഗ്രാമസ്വരാജ്) വേണ്ടി ശക്തമായി വാദിച്ച നേതാവ്."
    }
  }
],
  quiz: [
    {
      q_id: "ps-c8-q1",
      type: "mcq",
      stem: { en: "Who is known as the 'Father of Local Self-Government' in India?", ml: "ഇന്ത്യയിലെ 'പ്രാദേശിക സ്വയംഭരണത്തിന്റെ പിതാവ്' എന്നറിയപ്പെടുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Lord Dalhousie", ml: "ലോർഡ് ഡൽഹൗസി" } },
        { k: "B", text: { en: "Lord Ripon", ml: "ലോർഡ് റിപ്പൺ" } },
        { k: "C", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" } },
        { k: "D", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Lord Ripon introduced local boards in 1882.", ml: "1882-ൽ പ്രാദേശിക ബോർഡുകൾ സ്ഥാപിച്ചതിലൂടെയാണ് അദ്ദേഹത്തിന് ഈ പേര് ലഭിച്ചത്." }
    },
    {
      q_id: "ps-c8-q2",
      type: "mcq",
      stem: { en: "Which constitutional amendment deals with rural local government?", ml: "ഗ്രാമീണ പ്രാദേശിക ഭരണത്തെക്കുറിച്ച് പ്രതിപാദിക്കുന്ന ഭരണഘടനാ ഭേദഗതി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "72nd Amendment", ml: "72-ാം ഭേദഗതി" } },
        { k: "B", text: { en: "73rd Amendment", ml: "73-ാം ഭേദഗതി" } },
        { k: "C", text: { en: "74th Amendment", ml: "74-ാം ഭേദഗതി" } },
        { k: "D", text: { en: "42nd Amendment", ml: "42-ാം ഭേദഗതി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The 73rd Amendment (1992) established the Panchayati Raj system.", ml: "73-ാം ഭേദഗതി ഗ്രാമീണ ഭരണത്തിന് ഭരണഘടനാ പദവി നൽകി." }
    },
    {
      q_id: "ps-c8-q3",
      type: "mcq",
      stem: { en: "Which amendment provided for urban local bodies or Nagarpalikas?", ml: "നഗര പ്രാദേശിക ഭരണകൂടങ്ങൾക്ക് (നഗരപാലികകൾ) രൂപം നൽകിയ ഭേദഗതി ഏത്?" },
      options: [
        { k: "A", text: { en: "73rd Amendment", ml: "73-ാം ഭേദഗതി" } },
        { k: "B", text: { en: "74th Amendment", ml: "74-ാം ഭേദഗതി" } },
        { k: "C", text: { en: "75th Amendment", ml: "75-ാം ഭേദഗതി" } },
        { k: "D", text: { en: "86th Amendment", ml: "86-ാം ഭേദഗതി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The 74th Amendment deals with Municipalities and Municipal Corporations.", ml: "നഗര ഭരണത്തിന് അടിത്തറയിട്ടത് 74-ാം ഭേദഗതിയാണ്." }
    },
    {
      q_id: "ps-c8-q4",
      type: "mcq",
      stem: { en: "How many subjects are listed in the 11th Schedule for Panchayats?", ml: "പഞ്ചായത്തുകൾക്കായി 11-ാം ഷെഡ്യൂളിൽ എത്ര വിഷയങ്ങളാണ് നൽകിയിരിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "18", ml: "18" } },
        { k: "B", text: { en: "29", ml: "29" } },
        { k: "C", text: { en: "61", ml: "61" } },
        { k: "D", text: { en: "97", ml: "97" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The 11th Schedule lists 29 subjects transferred to local bodies.", ml: "പഞ്ചായത്തുകൾക്ക് കൈമാറേണ്ട 29 വികസന വിഷയങ്ങളാണ് ഇതിലുള്ളത്." }
    },
    {
      q_id: "ps-c8-q5",
      type: "mcq",
      stem: { en: "What is the percentage of seats reserved for women in local bodies?", ml: "പ്രാദേശിക ഭരണകൂടങ്ങളിൽ സ്ത്രീകൾക്കായി സംവരണം ചെയ്തിരിക്കുന്ന സീറ്റുകളുടെ ശതമാനം എത്ര?" },
      options: [
        { k: "A", text: { en: "25%", ml: "25%" } },
        { k: "B", text: { en: "33%", ml: "33%" } },
        { k: "C", text: { en: "50%", ml: "50%" } },
        { k: "D", text: { en: "10%", ml: "10%" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Constitution mandates 1/3rd (33%) reservation for women.", ml: "മൂന്നിലൊന്ന് സീറ്റുകൾ സ്ത്രീകൾക്കായി സംവരണം ചെയ്തിരിക്കുന്നു." }
    },
    {
      q_id: "ps-c8-q6",
      type: "mcq",
      stem: { en: "The term of office for all local government bodies is:", ml: "പ്രാദേശിക ഭരണകൂടങ്ങളുടെ കാലാവധി എത്രയാണ്?" },
      options: [
        { k: "A", text: { en: "4 years", ml: "4 വർഷം" } },
        { k: "B", text: { en: "5 years", ml: "5 വർഷം" } },
        { k: "C", text: { en: "6 years", ml: "6 വർഷം" } },
        { k: "D", text: { en: "Until dissolved", ml: "പിരിച്ചുവിടുന്നത് വരെ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Local bodies are elected for a term of five years.", ml: "അഞ്ച് വർഷമാണ് ഇവയുടെ പ്രവർത്തന കാലാവധി." }
    },
    {
      q_id: "ps-c8-q7",
      type: "mcq",
      stem: { en: "Who conducts the elections for local bodies in a state?", ml: "പ്രാദേശിക ഭരണകൂടങ്ങളിലേക്കുള്ള തിരഞ്ഞെടുപ്പ് നടത്തുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Election Commission of India", ml: "ഇന്ത്യൻ തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" } },
        { k: "B", text: { en: "State Election Commission", ml: "സംസ്ഥാന തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" } },
        { k: "C", text: { en: "The Governor", ml: "ഗവർണർ" } },
        { k: "D", text: { en: "The Chief Minister", ml: "മുഖ്യമന്ത്രി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "State Election Commission is an independent body for local polls.", ml: "ഓരോ സംസ്ഥാനത്തുമുള്ള സ്റ്റേറ്റ് ഇലക്ഷൻ കമ്മീഷനാണ് ഈ തിരഞ്ഞെടുപ്പുകൾ നിയന്ത്രിക്കുന്നത്." }
    },
    {
      q_id: "ps-c8-q8",
      type: "mcq",
      stem: { en: "Which body examines the financial position of local governments every 5 years?", ml: "പ്രാദേശിക ഭരണകൂടങ്ങളുടെ സാമ്പത്തിക സ്ഥിതി 5 വർഷം കൂടുമ്പോൾ പരിശോധിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Planning Commission", ml: "പ്ലാനിംഗ് കമ്മീഷൻ" } },
        { k: "B", text: { en: "State Finance Commission", ml: "സംസ്ഥാന ധനകാര്യ കമ്മീഷൻ" } },
        { k: "C", text: { en: "Reserve Bank", ml: "റിസർവ് ബാങ്ക്" } },
        { k: "D", text: { en: "Comptroller and Auditor General", ml: "സി.എ.ജി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "State Finance Commission recommends distribution of revenues.", ml: "സംസ്ഥാന ധനകാര്യ കമ്മീഷനാണ് സാമ്പത്തിക കാര്യങ്ങളിൽ നിർദ്ദേശം നൽകുന്നത്." }
    },
    {
      q_id: "ps-c8-q9",
      type: "mcq",
      stem: { en: "What is the basic unit of the Panchayati Raj system?", ml: "പഞ്ചായത്തീരാജ് സംവിധാനത്തിന്റെ അടിസ്ഥാന യൂണിറ്റ് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Zilla Panchayat", ml: "ജില്ലാ പഞ്ചായത്ത്" } },
        { k: "B", text: { en: "Block Panchayat", ml: "ബ്ലോക്ക് പഞ്ചായത്ത്" } },
        { k: "C", text: { en: "Gram Panchayat", ml: "ഗ്രാമപഞ്ചായത്ത്" } },
        { k: "D", text: { en: "Municipality", ml: "നഗരസഭ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Gram Panchayat works at the village level.", ml: "ഗ്രാമതലത്തിലുള്ള ഭരണസമിതിയാണിത്." }
    },
    {
      q_id: "ps-c8-q10",
      type: "mcq",
      stem: { en: "Gram Sabha consists of:", ml: "ഗ്രാമസഭയിൽ ഉൾപ്പെടുന്നത് ആരെല്ലാം?" },
      options: [
        { k: "A", text: { en: "Only the elected members", ml: "തിരഞ്ഞെടുക്കപ്പെട്ട അംഗങ്ങൾ മാത്രം" } },
        { k: "B", text: { en: "All registered voters of the village", ml: "ഗ്രാമത്തിലെ എല്ലാ വോട്ടർമാരും" } },
        { k: "C", text: { en: "Only the village elders", ml: "ഗ്രാമത്തിലെ മുതിർന്നവർ മാത്രം" } },
        { k: "D", text: { en: "Only male members", ml: "പുരുഷന്മാർ മാത്രം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Gram Sabha is the assembly of all adult voters.", ml: "വോട്ടർ പട്ടികയിലുള്ള എല്ലാ അംഗങ്ങളും ഗ്രാമസഭയുടെ ഭാഗമാണ്." }
    },
    {
      q_id: "ps-c8-q11",
      type: "mcq",
      stem: { en: "Which article of Directive Principles deals with Village Panchayats?", ml: "നിർദ്ദേശക തത്വങ്ങളിലെ ഏത് വകുപ്പാണ് ഗ്രാമപഞ്ചായത്തുകളെക്കുറിച്ച് പറയുന്നത്?" },
      options: [
        { k: "A", text: { en: "Article 14", ml: "ആർട്ടിക്കിൾ 14" } },
        { k: "B", text: { en: "Article 40", ml: "ആർട്ടിക്കിൾ 40" } },
        { k: "C", text: { en: "Article 51", ml: "ആർട്ടിക്കിൾ 51" } },
        { k: "D", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Article 40 directs the state to organize village panchayats.", ml: "ഭരണഘടനയുടെ 40-ാം വകുപ്പിലാണ് ഗ്രാമപഞ്ചായത്തുകൾ രൂപീകരിക്കാൻ നിർദ്ദേശമുള്ളത്." }
    },
    {
      q_id: "ps-c8-q12",
      type: "mcq",
      stem: { en: "How many subjects are listed in the 12th Schedule for urban local bodies?", ml: "നഗരസഭകൾക്കായി 12-ാം ഷെഡ്യൂളിൽ എത്ര വിഷയങ്ങളാണ് ഉള്ളത്?" },
      options: [
        { k: "A", text: { en: "18", ml: "18" } },
        { k: "B", text: { en: "29", ml: "29" } },
        { k: "C", text: { en: "12", ml: "12" } },
        { k: "D", text: { en: "22", ml: "22" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The 12th Schedule contains 18 functional items for Municipalities.", ml: "നഗര ഭരണത്തിനായി 18 വിഷയങ്ങളാണ് 12-ാം ഷെഡ്യൂളിലുള്ളത്." }
    },
    {
      q_id: "ps-c8-q13",
      type: "mcq",
      stem: { en: "What is the main challenge faced by local governments today?", ml: "ഇന്ന് പ്രാദേശിക ഭരണകൂടങ്ങൾ നേരിടുന്ന പ്രധാന വെല്ലുവിളി എന്ത്?" },
      options: [
        { k: "A", text: { en: "Too much power", ml: "കൂടുതൽ അധികാരം" } },
        { k: "B", text: { en: "Lack of funds and dependency on grants", ml: "ഫണ്ടിന്റെ കുറവും ഗ്രന്റുകളെ ആശ്രയിക്കുന്നതും" } },
        { k: "C", text: { en: "No elections", ml: "തിരഞ്ഞെടുപ്പുകൾ ഇല്ലാത്തത്" } },
        { k: "D", text: { en: "No women members", ml: "വനിതാ അംഗങ്ങൾ ഇല്ലാത്തത്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Financial dependency on states limits their independence.", ml: "സ്വന്തമായി വരുമാനമില്ലാത്തതും സംസ്ഥാനങ്ങളെ ആശ്രയിക്കുന്നതും വലിയൊരു പ്രശ്നമാണ്." }
    },
    {
      q_id: "ps-c8-q14",
      type: "mcq",
      stem: { en: "The Mandal or Block Panchayat exists at which level?", ml: "ബ്ലോക്ക് പഞ്ചായത്ത് ഏത് തലത്തിലുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Village level", ml: "ഗ്രാമ തലം" } },
        { k: "B", text: { en: "Intermediate level", ml: "ഇടത്തട്ട് (Intermediate) തലം" } },
        { k: "C", text: { en: "District level", ml: "ജില്ലാ തലം" } },
        { k: "D", text: { en: "State level", ml: "സംസ്ഥാന തലം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It is the middle tier between Gram and Zilla Panchayats.", ml: "ഗ്രാമപഞ്ചായത്തിനും ജില്ലാ പഞ്ചായത്തിനും ഇടയിലുള്ള തലമാണിത്." }
    },
    {
      q_id: "ps-c8-q15",
      type: "mcq",
      stem: { en: "In which year did the 73rd and 74th Amendments come into force?", ml: "73, 74 ഭേദഗതികൾ നിലവിൽ വന്ന വർഷം ഏത്?" },
      options: [
        { k: "A", text: { en: "1950", ml: "1950" } },
        { k: "B", text: { en: "1992", ml: "1992" } },
        { k: "C", text: { en: "1993", ml: "1993" } },
        { k: "D", text: { en: "2000", ml: "2000" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Passed in 1992, they were implemented in 1993.", ml: "1992-ൽ പാസാക്കിയെങ്കിലും 1993-ലാണ് ഇവ നടപ്പിലാക്കിയത്." }
    },
    {
      q_id: "ps-c8-q16",
      type: "mcq",
      stem: { en: "Which state is known for successful 'People's Planning' at the local level?", ml: "ജനകീയാസൂത്രണം (People's Planning) വിജയകരമായി നടപ്പിലാക്കിയ സംസ്ഥാനം ഏത്?" },
      options: [
        { k: "A", text: { en: "Uttar Pradesh", ml: "ഉത്തർപ്രദേശ്" } },
        { k: "B", text: { en: "Kerala", ml: "കേരളം" } },
        { k: "C", text: { en: "Bihar", ml: "ബീഹാർ" } },
        { k: "D", text: { en: "Punjab", ml: "പഞ്ചാബ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Kerala empowered local bodies through a massive planning campaign.", ml: "പ്രാദേശിക തലത്തിൽ വികസന പദ്ധതികൾ തയ്യാറാക്കാൻ കേരളം വലിയ മുൻകൈ എടുത്തു." }
    },
    {
      q_id: "ps-c8-q17",
      type: "mcq",
      stem: { en: "The 73rd Amendment made local government elections:", ml: "73-ാം ഭേദഗതി പ്രാദേശിക തിരഞ്ഞെടുപ്പുകളെ എന്താക്കി മാറ്റി?" },
      options: [
        { k: "A", text: { en: "Indirect", ml: "പരോക്ഷം" } },
        { k: "B", text: { en: "Mandatory and Direct", ml: "നിർബന്ധിതവും നേരിട്ടുള്ളതും" } },
        { k: "C", text: { en: "Optional for states", ml: "സംസ്ഥാനങ്ങൾക്ക് ഐച്ഛികം" } },
        { k: "D", text: { en: "Nominated by Governor", ml: "ഗവർണർ നാമനിർദ്ദേശം ചെയ്യുന്നവ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Regular elections every 5 years became a constitutional necessity.", ml: "അഞ്ച് വർഷം കൂടുമ്പോൾ കൃത്യമായി തിരഞ്ഞെടുപ്പ് നടത്തേണ്ടത് നിർബന്ധമായി." }
    },
    {
      q_id: "ps-c8-q18",
      type: "mcq",
      stem: { en: "Urban local bodies in big cities are called:", ml: "വലിയ നഗരങ്ങളിലെ പ്രാദേശിക ഭരണകൂടങ്ങളെ വിളിക്കുന്നത്:" },
      options: [
        { k: "A", text: { en: "Municipal Councils", ml: "മുനിസിപ്പൽ കൗൺസിലുകൾ" } },
        { k: "B", text: { en: "Municipal Corporations", ml: "മുനിസിപ്പൽ കോർപ്പറേഷനുകൾ" } },
        { k: "C", text: { en: "Nagar Panchayats", ml: "നഗർ പഞ്ചായത്തുകൾ" } },
        { k: "D", text: { en: "Zilla Parishad", ml: "ജില്ലാ പരിഷത്ത്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Metropolitan cities have Municipal Corporations.", ml: "വലിയ പട്ടണങ്ങളിൽ കോർപ്പറേഷനുകളാണ് ഉണ്ടാവുക." }
    },
    {
      q_id: "ps-c8-q19",
      type: "mcq",
      stem: { en: "Reservation for SC/ST in local bodies is based on:", ml: "പ്രാദേശിക ഭരണകൂടങ്ങളിൽ SC/ST സംവരണം നൽകുന്നത് ഏതിന്റെ അടിസ്ഥാനത്തിലാണ്?" },
      options: [
        { k: "A", text: { en: "Area size", ml: "ഭൗമ വിസ്തൃതി" } },
        { k: "B", text: { en: "Population proportion", ml: "ജനസംഖ്യാനുപാതം" } },
        { k: "C", text: { en: "Income level", ml: "വരുമാനം" } },
        { k: "D", text: { en: "Education level", ml: "വിദ്യാഭ്യാസ നിലവാരം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Seats are reserved in proportion to their population in that area.", ml: "ജനസംഖ്യയ്ക്ക് അനുസരിച്ചാണ് ഇവർക്കായി സീറ്റുകൾ മാറ്റിവെക്കുന്നത്." }
    },
    {
      q_id: "ps-c8-q20",
      type: "mcq",
      stem: { en: "Democracy at the level of the village and town is called:", ml: "ഗ്രാമ-നഗര തലത്തിലുള്ള ജനാധിപത്യത്തെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "National Democracy", ml: "ദേശീയ ജനാധിപത്യം" } },
        { k: "B", text: { en: "Grassroots Democracy", ml: "അടിത്തട്ടിലുള്ള ജനാധിപത്യം" } },
        { k: "C", text: { en: "Elite Democracy", ml: "പ്രഭു ജനാധിപത്യം" } },
        { k: "D", text: { en: "Military Rule", ml: "സൈനിക ഭരണം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Grassroots democracy means power directly in hands of local people.", ml: "അടിത്തട്ടിലുള്ള ജനങ്ങളുടെ പങ്കാളിത്തത്തെയാണ് ഇത് സൂചിപ്പിക്കുന്നത്." }
    },
    {
      q_id: "ps-c8-q21",
      type: "mcq",
      stem: { en: "The intermediate level of Panchayati Raj in Kerala is known as:", ml: "കേരളത്തിലെ പഞ്ചായത്തീരാജ് സംവിധാനത്തിലെ ഇടത്തട്ട് ഘടകം അറിയപ്പെടുന്നത്:" },
      options: [
        { k: "A", text: { en: "Mandal Panchayat", ml: "മണ്ഡൽ പഞ്ചായത്ത്" } },
        { k: "B", text: { en: "Block Panchayat", ml: "ബ്ലോക്ക് പഞ്ചായത്ത്" } },
        { k: "C", text: { en: "Taluk Council", ml: "താലൂക്ക് കൗൺസിൽ" } },
        { k: "D", text: { en: "Village Office", ml: "വില്ലേജ് ഓഫീസ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Block Panchayat is the intermediate tier in many states like Kerala.", ml: "ഗ്രാമപഞ്ചായത്തുകൾക്കും ജില്ലാ പഞ്ചായത്തിനും ഇടയിലുള്ള ഘടകമാണിത്." }
    },
    {
      q_id: "ps-c8-q22",
      type: "mcq",
      stem: { en: "Before 1992, local governments were under the control of:", ml: "1992-ന് മുൻപ് പ്രാദേശിക ഭരണകൂടങ്ങൾ ആരുടെ നിയന്ത്രണത്തിലായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "B", text: { en: "The State Governments", ml: "സംസ്ഥാന ഗവൺമെന്റുകൾ" } },
        { k: "C", text: { en: "Independent Commissions", ml: "സ്വതന്ത്ര കമ്മീഷനുകൾ" } },
        { k: "D", text: { en: "Foreign bodies", ml: "വിദേശ സമിതികൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Local government was a state subject and states could dissolve them at will.", ml: "ഭേദഗതികൾ വരുന്നതുവരെ സംസ്ഥാനങ്ങളുടെ താൽപ്പര്യത്തിനനുസരിച്ചാണ് ഇവ പ്രവർത്തിച്ചിരുന്നത്." }
    },
    {
      q_id: "ps-c8-q23",
      type: "mcq",
      stem: { en: "How many elected representatives are there in Indian local bodies currently?", ml: "ഇന്ത്യയിലെ പ്രാദേശിക ഭരണകൂടങ്ങളിൽ നിലവിൽ എത്ര തിരഞ്ഞെടുക്കപ്പെട്ട പ്രതിനിധികളുണ്ട്?" },
      options: [
        { k: "A", text: { en: "10 lakh", ml: "10 ലക്ഷം" } },
        { k: "B", text: { en: "32 lakh", ml: "32 ലക്ഷം" } },
        { k: "C", text: { en: "50 lakh", ml: "50 ലക്ഷം" } },
        { k: "D", text: { en: "5 lakh", ml: "5 ലക്ഷം" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "There are approximately 32 lakh representatives across India.", ml: "ഇതൊരു വലിയ സംഖ്യയാണ്, ജനാധിപത്യ പങ്കാളിത്തം വർദ്ധിച്ചുവെന്ന് ഇത് കാട്ടുന്നു." }
    },
    {
      q_id: "ps-c8-q24",
      type: "mcq",
      stem: { en: "The Twelfth Schedule deals with:", ml: "12-ാം ഷെഡ്യൂൾ ഏതുമായി ബന്ധപ്പെട്ടതാണ്?" },
      options: [
        { k: "A", text: { en: "Rural Local Bodies", ml: "ഗ്രാമീണ പ്രാദേശിക സ്ഥാപനങ്ങൾ" } },
        { k: "B", text: { en: "Urban Local Bodies", ml: "നഗര പ്രാദേശിക സ്ഥാപനങ്ങൾ" } },
        { k: "C", text: { en: "Union List", ml: "കേന്ദ്ര പട്ടിക" } },
        { k: "D", text: { en: "Languages", ml: "ഭാഷകൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "12th schedule lists functions of Municipalities.", ml: "നഗരസഭകളുടെ ചുമതലകളാണ് ഇതിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നത്." }
    },
    {
      q_id: "ps-c8-q25",
      type: "mcq",
      stem: { en: "Who chairs the meetings of the Gram Sabha?", ml: "ഗ്രാമസഭാ യോഗങ്ങളിൽ അധ്യക്ഷത വഹിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Collector", ml: "കളക്ടർ" } },
        { k: "B", text: { en: "Gram Panchayat President (Sarpanch)", ml: "ഗ്രാമപഞ്ചായത്ത് പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "MLA", ml: "എം.എൽ.എ" } },
        { k: "D", text: { en: "BDO", ml: "ബി.ഡി.ഒ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The head of the Gram Panchayat leads the Gram Sabha meetings.", ml: "പഞ്ചായത്ത് പ്രസിഡന്റാണ് ഗ്രാമസഭയ്ക്ക് നേതൃത്വം നൽകുന്നത്." }
    },
    {
      q_id: "ps-c8-q26",
      type: "mcq",
      stem: { en: "What provided constitutional status to local governments in India?", ml: "ഇന്ത്യയിലെ പ്രാദേശിക ഭരണകൂടങ്ങൾക്ക് ഭരണഘടനാ പദവി നൽകിയത് ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Original Constitution", ml: "യഥാർത്ഥ ഭരണഘടന" } },
        { k: "B", text: { en: "73rd and 74th Amendments", ml: "73, 74 ഭേദഗതികൾ" } },
        { k: "C", text: { en: "Supreme Court Ruling", ml: "സുപ്രീം കോടതി വിധി" } },
        { k: "D", text: { en: "Order of PM", ml: "പ്രധാനമന്ത്രിയുടെ ഉത്തരവ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "These amendments made local bodies a permanent part of the Constitution.", ml: "ഭേദഗതികൾ വന്നതോടെ പ്രാദേശിക ഭരണകൂടങ്ങൾ ഭരണഘടനയുടെ അവിഭാജ്യ ഘടകമായി." }
    },
    {
      q_id: "ps-c8-q27",
      type: "mcq",
      stem: { en: "States like Maharashtra and Gujarat had local bodies even before 1992 based on whose recommendation?", ml: "1992-ന് മുൻപ് തന്നെ മഹാരാഷ്ട്ര, ഗുജറാത്ത് തുടങ്ങിയ സംസ്ഥാനങ്ങളിൽ പഞ്ചായത്തുകൾ നിലനിന്നിരുന്നത് ആരുടെ ശുപാർശ പ്രകാരമാണ്?" },
      options: [
        { k: "A", text: { en: "Balwant Rai Mehta Committee", ml: "ബൽവന്ത് റായ് മേത്ത കമ്മിറ്റി" } },
        { k: "B", text: { en: "Sarkaria Commission", ml: "സർക്കാരിയ കമ്മീഷൻ" } },
        { k: "C", text: { en: "Mandal Commission", ml: "മണ്ഡൽ കമ്മീഷൻ" } },
        { k: "D", text: { en: "Planning Commission", ml: "പ്ലാനിംഗ് കമ്മീഷൻ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "This committee in 1957 recommended a three-tier system.", ml: "1957-ലെ ബൽവന്ത് റായ് മേത്ത കമ്മിറ്റിയാണ് മൂന്നുതല പഞ്ചായത്ത് സംവിധാനം ആദ്യം നിർദ്ദേശിച്ചത്." }
    },
    {
      q_id: "ps-c8-q28",
      type: "mcq",
      stem: { en: "A major achievement of PRI is the empowerment of:", ml: "പഞ്ചായത്തീരാജ് സംവിധാനത്തിന്റെ വലിയൊരു നേട്ടം ആരെ ശാക്തീകരിച്ചു എന്നതാണ്?" },
      options: [
        { k: "A", text: { en: "Police", ml: "പോലീസ്" } },
        { k: "B", text: { en: "Women and Marginalized classes", ml: "സ്ത്രീകളും പിന്നോക്ക വിഭാഗങ്ങളും" } },
        { k: "C", text: { en: "Rich farmers", ml: "സമ്പന്ന കർഷകർ" } },
        { k: "D", text: { en: "Central ministers", ml: "കേന്ദ്ര മന്ത്രിമാർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Reservations have brought millions of women and SC/STs into leadership.", ml: "സംവരണത്തിലൂടെ ലക്ഷക്കണക്കിന് സ്ത്രീകളും ദളിതരും ഭരണരംഗത്തേക്ക് വന്നു." }
    },
    {
      q_id: "ps-c8-q29",
      type: "mcq",
      stem: { en: "Who assists the Gram Panchayat in day-to-day administration?", ml: "ഗ്രാമപഞ്ചായത്തിനെ ദൈനംദിന ഭരണത്തിൽ സഹായിക്കുന്ന ഉദ്യോഗസ്ഥൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Tahsildar", ml: "തഹസിൽദാർ" } },
        { k: "B", text: { en: "Panchayat Secretary", ml: "പഞ്ചായത്ത് സെക്രട്ടറി" } },
        { k: "C", text: { en: "Police Inspector", ml: "പോലീസ് ഇൻസ്‌പെക്ടർ" } },
        { k: "D", text: { en: "Collector", ml: "കളക്ടർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The Secretary is an appointed official who handles the administration.", ml: "ഗവൺമെന്റ് നിയമിക്കുന്ന സെക്രട്ടറിയാണ് പഞ്ചായത്ത് രേഖകൾ സൂക്ഷിക്കുന്നതും ഭരണം നടത്തുന്നതും." }
    },
    {
      q_id: "ps-c8-q30",
      type: "mcq",
      stem: { en: "Local government is included in which list of the Constitution?", ml: "പ്രാദേശിക ഭരണം ഭരണഘടനയുടെ ഏത് പട്ടികയിലാണ് ഉൾപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Union List", ml: "കേന്ദ്ര പട്ടിക" } },
        { k: "B", text: { en: "State List", ml: "സംസ്ഥാന പട്ടിക" } },
        { k: "C", text: { en: "Concurrent List", ml: "കൺകറന്റ് പട്ടിക" } },
        { k: "D", text: { en: "Residual List", ml: "അവശിഷ്ട പട്ടിക" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Local government is primarily a State subject.", ml: "ഇത് സംസ്ഥാന പട്ടികയിലുള്ള ഒരു വിഷയമാണ്." }
    }
  ]
};

export const plusOnePoliticalSciencePart1Unit9: Lesson = {
  id: "pl-ps-11-p1-u9",
  title: { en: "Constitution as a Living Document", ml: "ഭരണഘടന ഒരു ജീവസ്സുറ്റ രേഖ (Constitution as a Living Document)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=94A9KvfELNQ",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand why the Constitution is called a living document", ml: "ഭരണഘടനയെ എന്തുകൊണ്ടാണ് ഒരു ജീവസ്സുറ്റ രേഖ എന്ന് വിളിക്കുന്നത് എന്ന് മനസ്സിലാക്കുക" },
    { en: "Explain the procedure for amending the Constitution under Article 368", ml: "ആർട്ടിക്കിൾ 368 പ്രകാരമുള്ള ഭരണഘടനാ ഭേദഗതി രീതികൾ വിവരിക്കുക" },
    { en: "Analyze the role of the judiciary in interpreting the Constitution", ml: "ഭരണഘടനയെ വ്യാഖ്യാനിക്കുന്നതിൽ നീതിന്യായ വ്യവസ്ഥയുടെ പങ്ക് വിശകലനം ചെയ്യുക" },
    { en: "Explore the doctrine of 'Basic Structure'", ml: "ഭരണഘടനയുടെ 'അടിസ്ഥാന ഘടന' എന്ന സിദ്ധാന്തം പരിശോധിക്കുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explains how the Indian Constitution remains relevant today through amendments and judicial interpretations.", 
      ml: "ഭേദഗതികളിലൂടെയും നീതിന്യായ വ്യാഖ്യാനങ്ങളിലൂടെയും ഇന്ത്യൻ ഭരണഘടന ഇന്നും എങ്ങനെ പ്രസക്തമായി തുടരുന്നു എന്ന് ഈ അധ്യായം വിശദീകരിക്കുന്നു." 
    },
    core: { 
      en: "A study of Article 368, types of amendments, the 42nd and 44th amendments, and the Basic Structure doctrine.", 
      ml: "ആർട്ടിക്കിൾ 368, വിവിധ തരം ഭേദഗതികൾ, 42, 44 ഭേദഗതികൾ, അടിസ്ഥാന ഘടന സിദ്ധാന്തം എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explains how the Indian Constitution, despite being written over 70 years ago, remains relevant today. It explores the flexibility of the Constitution, the process of amendments under Article 368, the role of the judiciary in interpreting the Constitution, and the concept of the "Basic Structure" which ensures that the core values of the Constitution remain intact while allowing for necessary changes.', ml: 'ഇന്ത്യൻ ഭരണഘടന നിർമ്മിക്കപ്പെട്ട് 70 വർഷത്തിലധികം കഴിഞ്ഞിട്ടും ഇന്നും അത് പ്രസക്തമായി തുടരുന്നത് എങ്ങനെയെന്നാണ് ഈ അധ്യായം വിശദീകരിക്കുന്നത്. ഭരണഘടനയുടെ അയവുള്ള സ്വഭാവം, ആർട്ടിക്കിൾ 368 പ്രകാരമുള്ള ഭേദഗതി പ്രക്രിയകൾ, ഭരണഘടനയെ വ്യാഖ്യാനിക്കുന്നതിൽ നീതിന്യായ വ്യവസ്ഥയുടെ പങ്ക് എന്നിവ ഇവിടെ ചർച്ച ചെയ്യുന്നു. ഭരണഘടനയുടെ അന്തസ്സത്ത നിലനിർത്തിക്കൊണ്ടുതന്നെ ആവശ്യമായ മാറ്റങ്ങൾ വരുത്താൻ സഹായിക്കുന്ന "അടിസ്ഥാന ഘടന" (Basic Structure) എന്ന ആശയവും ഇവിടെ വിശദീകരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Living Document', ml: 'ജീവസ്സുറ്റ രേഖ (Living Document)'}, {en: 'A document that evolves over time through amendments and interpretations.', ml: 'കാലത്തിനനുസരിച്ച് ഭേദഗതികളിലൂടെയും വ്യാഖ്യാനങ്ങളിലൂടെയും വളരുകയും മാറുകയും ചെയ്യുന്ന രേഖ.'}, {en: 'The Indian Constitution.', ml: 'ഇന്ത്യൻ ഭരണഘടന.'}],
          [{en: 'Article 368', ml: 'ആർട്ടിക്കിൾ 368 (Article 368)'}, {en: 'The article that provides Parliament the power to amend the Constitution.', ml: 'ഭരണഘടന ഭേദഗതി ചെയ്യാൻ പാർലമെന്റിന് അധികാരം നൽകുന്ന വകുപ്പ്.'}, {en: 'Specifies procedure for amendments.', ml: 'ഭേദഗതിയുടെ നടപടിക്രമങ്ങൾ ഇതിൽ പറയുന്നു.'}],
          [{en: 'Basic Structure', ml: 'അടിസ്ഥാന ഘടന (Basic Structure)'}, {en: 'Judicial doctrine stating that core features of the Constitution cannot be changed.', ml: 'ഭരണഘടനയുടെ അടിസ്ഥാനപരമായ സ്വഭാവങ്ങളിൽ മാറ്റം വരുത്താൻ പാർലമെന്റിന് അധികാരമില്ലെന്ന കോടതി വിധി.'}, {en: 'Established in Kesavananda Bharati case.', ml: 'കേശവാനന്ദ ഭാരതി കേസിൽ ആവിഷ്കരിക്കപ്പെട്ടു.'}],
          [{en: 'Rigidity and Flexibility', ml: 'കാഠിന്യവും അയവും (Rigidity and Flexibility)'}, {en: 'The balance between being difficult and easy to change.', ml: 'ഭരണഘടന മാറ്റാനുള്ള പ്രയാസവും എളുപ്പവും തമ്മിലുള്ള സന്തുലിതാവസ്ഥ.'}, {en: 'Indian Constitution is a mix of both.', ml: 'ഇന്ത്യൻ ഭരണഘടന ഇവ രണ്ടിന്റെയും മിശ്രണമാണ്.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 Are Constitutions Static?', ml: '3.1 ഭരണഘടനകൾ മാറ്റമില്ലാത്തതാണോ?' },
      { type: 'ul', items: [
        { en: 'A constitution is not a frozen document; it is a living reality.', ml: 'ഭരണഘടന ഒരു നിശ്ചലമായ രേഖയല്ല; അതൊരു ജീവസ്സുറ്റ യാഥാർത്ഥ്യമാണ്.' },
        { en: 'Makers were aware that no document could be perfect or permanent.', ml: 'യാതൊരു രേഖയും പൂർണ്ണമോ ശാശ്വതമോ അല്ലെന്ന് ഭരണഘടനാ ശില്പികൾക്ക് അറിയാമായിരുന്നു.' },
        { en: 'Society changes, and a constitution must adapt to new challenges.', ml: 'സമൂഹം മാറുന്നതിനനുസരിച്ച് പുതിയ വെല്ലുവിളികൾ ഉൾക്കൊള്ളാൻ ഭരണഘടനയ്ക്ക് കഴിയണം.' }
      ]},

      { type: 'h3', en: '3.2 How to Amend the Constitution? (Article 368)', ml: '3.2 ഭരണഘടന എങ്ങനെ ഭേദഗതി ചെയ്യാം?' },
      { type: 'p', en: 'The Indian Constitution provides three ways to amend:', ml: 'ഇന്ത്യൻ ഭരണഘടനയിൽ മൂന്ന് രീതിയിലാണ് ഭേദഗതികൾ വരുത്താൻ കഴിയുന്നത്:' },
      { type: 'ul', items: [
        { en: 'Simple Majority: Similar to ordinary laws (e.g., creating new states).', ml: 'സാധാരണ ഭൂരിപക്ഷം (Simple Majority): സാധാരണ നിയമങ്ങൾ നിർമ്മിക്കുന്നത് പോലെ (ഉദാ: പുതിയ സംസ്ഥാനങ്ങളുടെ രൂപീകരണം).' },
        { en: 'Special Majority: Majority of total membership and 2/3rd of those present and voting.', ml: 'പ്രത്യേക ഭൂരിപക്ഷം (Special Majority): സഭയിലെ ആകെ അംഗങ്ങളുടെ ഭൂരിപക്ഷവും ഹാജരായി വോട്ട് ചെയ്യുന്നവരുടെ മൂന്നിൽ രണ്ട് ഭാഗവും.' },
        { en: 'Special Majority + Ratification: Special majority plus approval by half of the state legislatures.', ml: 'പ്രത്യേക ഭൂരിപക്ഷവും സംസ്ഥാനങ്ങളുടെ അംഗീകാരവും: പാർലമെന്റിലെ പ്രത്യേക ഭൂരിപക്ഷത്തിന് പുറമെ പകുതി സംസ്ഥാന നിയമസഭകളുടെ കൂടി അംഗീകാരം (ഫെഡറൽ വിഷയങ്ങളിൽ).' }
      ]},

      { type: 'h3', en: 'Comparison Table: Types of Amendments', ml: 'താരതമ്യ പട്ടിക: ഭേദഗതി രീതികൾ (Types of Amendments)' },
      { type: 'table', tableData: {
        headers: [{en: 'Type', ml: 'രീതി'}, {en: 'Procedure', ml: 'നടപടിക്രമം'}, {en: 'Purpose', ml: 'ലക്ഷ്യം'}],
        rows: [
          [{en: 'Simple', ml: 'സാധാരണ'}, {en: '50% + 1 of members present.', ml: 'ഹാജരുള്ളവരുടെ പകുതിയിൽ അധികം.'}, {en: 'Administrative changes.', ml: 'ഭരണപരമായ മാറ്റങ്ങൾ.'}],
          [{en: 'Special', ml: 'പ്രത്യേക'}, {en: '2/3rd of present & voting + 50% of total strength.', ml: '2/3 ഭാഗം ഭൂരിപക്ഷം.'}, {en: 'Fundamental Rights, DPSP.', ml: 'മൗലികാവകാശങ്ങൾ, നിർദ്ദേശക തത്വങ്ങൾ.'}],
          [{en: 'Ratification', ml: 'സംസ്ഥാന അംഗീകാരം'}, {en: 'Special Majority + 50% of State Assemblies.', ml: 'പ്രത്യേക ഭൂരിപക്ഷം + പകുതി സംസ്ഥാനങ്ങൾ.'}, {en: 'Federal matters (SC, HC).', ml: 'ഫെഡറൽ കാര്യങ്ങൾ (കോടതികൾ).'}]
        ]
      }},

      { type: 'h3', en: '3.3 Why have there been so many amendments?', ml: '3.3 എന്തുകൊണ്ട് ഇത്രയധികം ഭേദഗതികൾ?' },
      { type: 'ul', items: [
        { en: 'Technical/Administrative: Clarifying existing rules.', ml: 'സാങ്കേതികമായവ: നിലവിലുള്ള നിയമങ്ങൾ കൂടുതൽ വ്യക്തമാക്കാൻ.' },
        { en: 'Judicial Interpretations: When courts and government differed in intent.', ml: 'നീതിന്യായ വ്യാഖ്യാനങ്ങൾ: കോടതിയും ഗവൺമെന്റും തമ്മിൽ നിയമപരമായ അഭിപ്രായ വ്യത്യാസം ഉണ്ടാകുമ്പോൾ.' },
        { en: 'Political Consensus: Changes in political philosophy.', ml: 'രാഷ്ട്രീയ സമവായങ്ങൾ: രാഷ്ട്രീയ നയങ്ങളിലുണ്ടാകുന്ന മാറ്റങ്ങൾ (ഉദാ: കൂറുമാറ്റ നിരോധനം, സംവരണം).' }
      ]},

      { type: 'h3', en: '3.4 Controversial Amendments', ml: '3.4 വിവാദപരമായ ഭേദഗതികൾ' },
      { type: 'ul', items: [
        { en: '42nd Amendment (1976): Passed during Emergency; called "Mini Constitution". Tried to reduce judiciary power.', ml: '42-ാം ഭേദഗതി (1976): അടിയന്തരാവസ്ഥാ കാലത്ത് പാസാക്കി. ഇതിനെ "ചെറു ഭരണഘടന" (Mini Constitution) എന്ന് വിളിക്കുന്നു. കോടതിയുടെ അധികാരം കുറയ്ക്കാൻ ശ്രമിച്ചു.' },
        { en: '44th Amendment (1978): Reversed many controversial provisions of the 42nd Amendment.', ml: '44-ാം ഭേദഗതി (1978): 42-ാം ഭേദഗതിയിലെ പല വിവാദ വ്യവസ്ഥകളും റദ്ദാക്കി.' }
      ]},

      { type: 'h3', en: '3.5 The Role of the Judiciary and "Basic Structure"', ml: '3.5 നീതിന്യായ വ്യവസ്ഥയും "അടിസ്ഥാന ഘടനയും"' },
      { type: 'p', en: 'In the Kesavananda Bharati case (1973), the court ruled:', ml: '1973-ലെ കേശവാനന്ദ ഭാരതി കേസിൽ സുപ്രീം കോടതി വിധിച്ചു:' },
      { type: 'ul', items: [
        { en: 'Parliament can amend any part but cannot change the "Basic Structure".', ml: 'ഭരണഘടനയുടെ ഏത് ഭാഗവും ഭേദഗതി ചെയ്യാൻ പാർലമെന്റിന് അധികാരമുണ്ട്, പക്ഷേ "അടിസ്ഥാന ഘടന" മാറ്റാൻ കഴിയില്ല.' },
        { en: 'Examples of Basic Structure: Rule of Law, Secularism, Federalism, Independent Judiciary.', ml: 'അടിസ്ഥാന ഘടനയ്ക്ക് ഉദാഹരണങ്ങൾ: നിയമവാഴ്ച, മതേതരത്വം, ഫെഡറലിസം, സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'The Constitution is both a "Sacred Document" and a "Living Document".', ml: 'ഭരണഘടന ഒരു "പവിത്രമായ രേഖ"യും അതേസമയം ഒരു "ജീവസ്സുറ്റ രേഖ"യുമാണ്.' },
        { en: 'As of 2019, there have been 103 amendments to the Constitution.', ml: '2019 വരെ 103 ഭേദഗതികൾ ഇന്ത്യൻ ഭരണഘടനയിൽ വരുത്തിയിട്ടുണ്ട്.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Article 368 is the key to constitutional change.', ml: 'ഭരണഘടനാ മാറ്റത്തിനുള്ള താക്കോലാണ് 368-ാം വകുപ്പ്.' },
        { en: 'Basic Structure doctrine ensures the soul of the Constitution is safe.', ml: 'ഭരണഘടനയുടെ ആത്മാവ് സംരക്ഷിക്കപ്പെടുന്നു എന്ന് അടിസ്ഥാന ഘടന സിദ്ധാന്തം ഉറപ്പാക്കുന്നു.' },
        { en: 'The balance between rigidity and flexibility makes it robust.', ml: 'കാഠിന്യവും അയവും തമ്മിലുള്ള സന്തുലിതാവസ്ഥ ഭരണഘടനയെ കരുത്തുറ്റതാക്കുന്നു.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Living Document",
      "ml": "ജീവനുള്ള രേഖ (Living Document)"
    },
    "definition": {
      "en": "The concept that the Constitution is a dynamic document that can change over time and adapt to new situations.",
      "ml": "കാലത്തിനനുസരിച്ച് മാറാനും പുതിയ സാഹചര്യങ്ങളോട് പൊരുത്തപ്പെടാനും കഴിയുന്ന ചലനാത്മകമായ രേഖയാണ് ഭരണഘടന എന്ന സങ്കൽപ്പം."
    }
  },
  {
    "term": {
      "en": "Article 368",
      "ml": "അനുച്ഛേദം 368 (Article 368)"
    },
    "definition": {
      "en": "An article that specifies the procedures for amending the Constitution.",
      "ml": "ഭരണഘടന ഭേദഗതി ചെയ്യുന്നതിനുള്ള നടപടിക്രമങ്ങളെക്കുറിച്ച് വ്യക്തമാക്കുന്ന അനുച്ഛേദം."
    }
  },
  {
    "term": {
      "en": "Special Majority",
      "ml": "പ്രത്യേക ഭൂരിപക്ഷം (Special Majority)"
    },
    "definition": {
      "en": "The provision that constitutional amendments must be supported by more than half of the total members of the House and two-thirds of those voting.",
      "ml": "ഭരണഘടനാ ഭേദഗതികൾക്ക് സഭയിലെ ആകെ അംഗങ്ങളുടെ പകുതിയിലധികവും, വോട്ട് ചെയ്യുന്നവരിൽ മൂന്നിൽ രണ്ടും പിന്തുണയ്ക്കണം എന്ന വ്യവസ്ഥ."
    }
  },
  {
    "term": {
      "en": "Kesavananda Bharati Case (1973)",
      "ml": "കേശവാനന്ദ ഭാരതി കേസ് (1973)"
    },
    "definition": {
      "en": "A historic case that ruled Parliament cannot change the basic structure of the Constitution.",
      "ml": "ഭരണഘടനയുടെ അടിസ്ഥാന ഘടനയെ മാറ്റാൻ പാർലമെന്റിന് കഴിയില്ല എന്ന് വിധിച്ച ചരിത്രപ്രധാനമായ കേസ്."
    }
  },
  {
    "term": {
      "en": "42nd Amendment",
      "ml": "42-ാം ഭേദഗതി (42nd Amendment)"
    },
    "definition": {
      "en": "A controversial amendment passed during the Emergency that attempted to curtail the powers of the judiciary.",
      "ml": "അടിയന്തരാവസ്ഥ കാലത്ത് പാസാക്കപ്പെട്ടതും, ജുഡീഷ്യറിയുടെ അധികാരങ്ങൾ വെട്ടിക്കുറയ്ക്കാൻ ശ്രമിച്ചതുമായ വിവാദ ഭേദഗതി."
    }
  }
],
  quiz: [
    {
      q_id: "ps-c9-q1",
      type: "mcq",
      stem: { en: "Which article of the Indian Constitution deals with the power of Parliament to amend it?", ml: "ഇന്ത്യൻ ഭരണഘടന ഭേദഗതി ചെയ്യാനുള്ള പാർലമെന്റിന്റെ അധികാരത്തെക്കുറിച്ച് പറയുന്ന വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 352", ml: "ആർട്ടിക്കിൾ 352" } },
        { k: "B", text: { en: "Article 360", ml: "ആർട്ടിക്കിൾ 360" } },
        { k: "C", text: { en: "Article 368", ml: "ആർട്ടിക്കിൾ 368" } },
        { k: "D", text: { en: "Article 370", ml: "ആർട്ടിക്കിൾ 370" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Article 368 provides the procedure and power for constitutional amendments.", ml: "368-ാം വകുപ്പിലാണ് ഭരണഘടനാ ഭേദഗതിയെക്കുറിച്ച് വിവരിക്കുന്നത്." }
    },
    {
      q_id: "ps-c9-q2",
      type: "mcq",
      stem: { en: "The concept of 'Basic Structure' was introduced in which case?", ml: "'അടിസ്ഥാന ഘടന' എന്ന സിദ്ധാന്തം ആവിഷ്കരിച്ചത് ഏത് കേസിലാണ്?" },
      options: [
        { k: "A", text: { en: "Golaknath Case", ml: "ഗോലക്നാഥ് കേസ്" } },
        { k: "B", text: { en: "Kesavananda Bharati Case", ml: "കേശവാനന്ദ ഭാരതി കേസ്" } },
        { k: "C", text: { en: "Minerva Mills Case", ml: "മിനർവ മിൽസ് കേസ്" } },
        { k: "D", text: { en: "Shah Bano Case", ml: "ഷാ ബാനു കേസ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The landmark judgment of 1973 established this doctrine.", ml: "1973-ലെ കേശവാനന്ദ ഭാരതി വിധിയിലൂടെയാണ് ഈ തത്വം ഉണ്ടായത്." }
    },
    {
      q_id: "ps-c9-q3",
      type: "mcq",
      stem: { en: "Which amendment is known as the 'Mini Constitution'?", ml: "'ചെറു ഭരണഘടന' എന്നറിയപ്പെടുന്ന ഭേദഗതി ഏത്?" },
      options: [
        { k: "A", text: { en: "42nd Amendment", ml: "42-ാം ഭേദഗതി" } },
        { k: "B", text: { en: "44th Amendment", ml: "44-ാം ഭേദഗതി" } },
        { k: "C", text: { en: "52nd Amendment", ml: "52-ാം ഭേദഗതി" } },
        { k: "D", text: { en: "73rd Amendment", ml: "73-ാം ഭേദഗതി" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The 42nd amendment brought massive changes to the Constitution.", ml: "ഏറ്റവുമധികം മാറ്റങ്ങൾ വരുത്തിയ 42-ാം ഭേദഗതിയെയാണ് ഇത്തരത്തിൽ വിളിക്കുന്നത്." }
    },
    {
      q_id: "ps-c9-q4",
      type: "mcq",
      stem: { en: "Amendments affecting the federal structure require:", ml: "ഫെഡറൽ സംവിധാനത്തെ ബാധിക്കുന്ന ഭേദഗതികൾക്ക് എന്ത് ആവശ്യമാണ്?" },
      options: [
        { k: "A", text: { en: "Simple Majority", ml: "സാധാരണ ഭൂരിപക്ഷം" } },
        { k: "B", text: { en: "Special Majority only", ml: "പ്രത്യേക ഭൂരിപക്ഷം മാത്രം" } },
        { k: "C", text: { en: "Special Majority + half of State Legislatures", ml: "പ്രത്യേക ഭൂരിപക്ഷവും പകുതി സംസ്ഥാനങ്ങളുടെ അംഗീകാരവും" } },
        { k: "D", text: { en: "Only President's order", ml: "പ്രസിഡന്റിന്റെ ഉത്തരവ് മാത്രം" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "For federal matters, states' consent is necessary to maintain balance.", ml: "ഫെഡറൽ വിഷയങ്ങളിൽ മാറ്റം വരുത്താൻ പകുതി സംസ്ഥാനങ്ങളുടെ അംഗീകാരം കൂടി വേണം." }
    },
    {
      q_id: "ps-c9-q5",
      type: "mcq",
      stem: { en: "Who has the final power to decide what constitutes the 'Basic Structure'?", ml: "എന്താണ് 'അടിസ്ഥാന ഘടന' എന്ന് തീരുമാനിക്കാനുള്ള അന്തിമ അധികാരം ആർക്കാണ്?" },
      options: [
        { k: "A", text: { en: "The Parliament", ml: "പാർലമെന്റ്" } },
        { k: "B", text: { en: "The President", ml: "പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "The Judiciary (Supreme Court)", ml: "നീതിന്യായ വ്യവസ്ഥ (സുപ്രീം കോടതി)" } },
        { k: "D", text: { en: "The People", ml: "ജനങ്ങൾ" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The Supreme Court interprets the Constitution and defines the basic structure.", ml: "സുപ്രീം കോടതിയാണ് ഈ കാര്യത്തിൽ അന്തിമ തീരുമാനമെടുക്കുന്നത്." }
    },
    {
      q_id: "ps-c9-q6",
      type: "mcq",
      stem: { en: "The 44th Amendment was passed in which year?", ml: "44-ാം ഭേദഗതി പാസാക്കിയ വർഷം ഏത്?" },
      options: [
        { k: "A", text: { en: "1975", ml: "1975" } },
        { k: "B", text: { en: "1976", ml: "1976" } },
        { k: "C", text: { en: "1978", ml: "1978" } },
        { k: "D", text: { en: "1980", ml: "1980" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The Janata Party government passed it in 1978 after the Emergency.", ml: "അടിയന്തരാവസ്ഥയ്ക്ക് ശേഷം 1978-ലാണ് ഇത് പാസാക്കിയത്." }
    },
    {
      q_id: "ps-c9-q7",
      type: "mcq",
      stem: { en: "Which of the following is an example of 'Basic Structure'?", ml: "താഴെ പറയുന്നവയിൽ 'അടിസ്ഥാന ഘടന'യ്ക്ക് ഉദാഹരണം ഏത്?" },
      options: [
        { k: "A", text: { en: "Secularism", ml: "മതേതരത്വം" } },
        { k: "B", text: { en: "Parliamentary System", ml: "പാർലമെന്ററി ഭരണരീതി" } },
        { k: "C", text: { en: "Independent Judiciary", ml: "സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ" } },
        { k: "D", text: { en: "All of the above", ml: "ഇവയെല്ലാം" } }
      ],
      answer: "D",
      difficulty: "easy",
      explanation: { en: "All these features are considered part of the core identity of the Constitution.", ml: "ഇവയെല്ലാം ഭരണഘടനയുടെ മാറ്റാൻ കഴിയാത്ത അടിസ്ഥാന തത്വങ്ങളാണ്." }
    },
    {
      q_id: "ps-c9-q8",
      type: "mcq",
      stem: { en: "Special majority means what percentage of members present and voting?", ml: "പ്രത്യേക ഭൂരിപക്ഷം എന്നാൽ ഹാജരായി വോട്ട് ചെയ്യുന്നവരുടെ എത്ര ശതമാനമാണ്?" },
      options: [
        { k: "A", text: { en: "50%", ml: "50%" } },
        { k: "B", text: { en: "66.6% (Two-thirds)", ml: "66.6% (മൂന്നിൽ രണ്ട് ഭാഗം)" } },
        { k: "C", text: { en: "75%", ml: "75%" } },
        { k: "D", text: { en: "100%", ml: "100%" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "A two-thirds majority of those present and voting is required.", ml: "ഹാജരായി വോട്ട് ചെയ്യുന്നവരിൽ മൂന്നിൽ രണ്ട് ഭാഗത്തിന്റെ പിന്തുണ വേണം." }
    },
    {
      q_id: "ps-c9-q9",
      type: "mcq",
      stem: { en: "What makes the Indian Constitution a 'Living Document'?", ml: "ഇന്ത്യൻ ഭരണഘടനയെ ഒരു 'ജീവസ്സുറ്റ രേഖ'യാക്കുന്നത് എന്താണ്?" },
      options: [
        { k: "A", text: { en: "It can never be changed", ml: "ഇതിൽ മാറ്റം വരുത്താൻ കഴിയില്ല" } },
        { k: "B", text: { en: "It adapts to changing needs through amendments", ml: "മാറുന്ന ആവശ്യങ്ങൾക്കനുസരിച്ച് ഭേദഗതികൾ വരുത്താം" } },
        { k: "C", text: { en: "It was written in gold", ml: "ഇത് സ്വർണ്ണ ലിപികളിലാണ് എഴുതിയിരിക്കുന്നത്" } },
        { k: "D", text: { en: "It is very short", ml: "ഇത് വളരെ ചെറുതാണ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The flexibility to change while maintaining core values keep it alive.", ml: "സാഹചര്യങ്ങൾക്കനുസരിച്ച് സ്വയം മാറാനുള്ള കഴിവാണ് ഇതിനെ ജീവസ്സുറ്റതാക്കുന്നത്." }
    },
    {
      q_id: "ps-c9-q10",
      type: "mcq",
      stem: { en: "How many amendments were made to the Constitution up to January 2019?", ml: "2019 ജനുവരി വരെ എത്ര ഭേദഗതികൾ ഭരണഘടനയിൽ വരുത്തിയിട്ടുണ്ട്?" },
      options: [
        { k: "A", text: { en: "50", ml: "50" } },
        { k: "B", text: { en: "75", ml: "75" } },
        { k: "C", text: { en: "103", ml: "103" } },
        { k: "D", text: { en: "150", ml: "150" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "As of early 2019, 103 amendments had been enacted.", ml: "നൂറിലധികം തവണ ഭരണഘടന ഭേദഗതി ചെയ്തിട്ടുണ്ട്." }
    },
    {
      q_id: "ps-c9-q11",
      type: "mcq",
      stem: { en: "Technical amendments usually involve:", ml: "സാങ്കേതികമായ ഭേദഗതികളിൽ സാധാരണയായി ഉൾപ്പെടുന്നത് എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Changing the basic structure", ml: "അടിസ്ഥാന ഘടന മാറ്റൽ" } },
        { k: "B", text: { en: "Clarifying administrative rules", ml: "ഭരണപരമായ നിയമങ്ങൾ കൂടുതൽ വ്യക്തമാക്കൽ" } },
        { k: "C", text: { en: "Removing the President", ml: "പ്രസിഡന്റിനെ നീക്കം ചെയ്യൽ" } },
        { k: "D", text: { en: "Starting a war", ml: "യുദ്ധം തുടങ്ങൽ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Technical amendments fix minor errors or clarify existing laws.", ml: "ചെറിയ പിശകുകൾ തിരുത്താനോ നിയമങ്ങൾ വ്യക്തമാക്കാനോ ആണ് ഇവ ചെയ്യുന്നത്." }
    },
    {
      q_id: "ps-c9-q12",
      type: "mcq",
      stem: { en: "Which part of the Constitution cannot be amended by Parliament according to SC?", ml: "ഭരണഘടനയുടെ ഏത് ഭാഗം ഭേദഗതി ചെയ്യാൻ പാർലമെന്റിന് അധികാരമില്ലെന്നാണ് കോടതി പറഞ്ഞത്?" },
      options: [
        { k: "A", text: { en: "Preamble", ml: "ആമുഖം" } },
        { k: "B", text: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" } },
        { k: "C", text: { en: "Basic Structure", ml: "അടിസ്ഥാന ഘടന (Basic Structure)" } },
        { k: "D", text: { en: "Directive Principles", ml: "നിർദ്ദേശക തത്വങ്ങൾ" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The basic structure is considered the untouchable core of the Constitution.", ml: "അടിസ്ഥാന ഘടനയിലെ തത്വങ്ങളിൽ തൊടാൻ പാർലമെന്റിന് കഴിയില്ല." }
    },
    {
      q_id: "ps-c9-q13",
      type: "mcq",
      stem: { en: "Special majority requires more than what percentage of total membership?", ml: "പ്രത്യേക ഭൂരിപക്ഷം കിട്ടാൻ ആകെ അംഗങ്ങളുടെ എത്ര ശതമാനത്തിൽ കൂടുതൽ വോട്ട് വേണം?" },
      options: [
        { k: "A", text: { en: "33%", ml: "33%" } },
        { k: "B", text: { en: "50%", ml: "50%" } },
        { k: "C", text: { en: "66%", ml: "66%" } },
        { k: "D", text: { en: "10%", ml: "10%" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "It needs support from more than 50% of the total house strength.", ml: "സഭയിലെ ആകെ അംഗങ്ങളുടെ പകുതിയിലധികം പേരുടെ പിന്തുണ നിർബന്ധമാണ്." }
    },
    {
      q_id: "ps-c9-q14",
      type: "mcq",
      stem: { en: "Who acts as the 'interpreter' of the Constitution?", ml: "ഭരണഘടനയുടെ 'വ്യാഖ്യാതാവ്' (Interpreter) ആയി പ്രവർത്തിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "Prime Minister", ml: "പ്രധാനമന്ത്രി" } },
        { k: "B", text: { en: "President", ml: "പ്രസിഡന്റ്" } },
        { k: "C", text: { en: "Judiciary", ml: "നീതിന്യായ വിഭാഗം" } },
        { k: "D", text: { en: "Election Commission", ml: "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Courts clarify the meaning of constitutional provisions.", ml: "ഭരണഘടനാ വകുപ്പുകളുടെ കൃത്യമായ അർത്ഥം കോടതികളാണ് വ്യക്തമാക്കുന്നത്." }
    },
    {
      q_id: "ps-c9-q15",
      type: "mcq",
      stem: { en: "The 42nd Amendment was passed during:", ml: "42-ാം ഭേദഗതി പാസാക്കിയത് ഏത് കാലത്താണ്?" },
      options: [
        { k: "A", text: { en: "World War II", ml: "രണ്ടാം ലോകമഹായുദ്ധം" } },
        { k: "B", text: { en: "The Emergency", ml: "അടിയന്തരാവസ്ഥാ കാലം" } },
        { k: "C", text: { en: "Partition", ml: "വിഭജന കാലം" } },
        { k: "D", text: { en: "First General Elections", ml: "ആദ്യ പൊതുതിരഞ്ഞെടുപ്പ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It was passed in 1976 during the national emergency.", ml: "1976-ലെ അടിയന്തരാവസ്ഥാ കാലത്താണ് ഈ ഭേദഗതി വന്നത്." }
    },
    {
      q_id: "ps-c9-q16",
      type: "mcq",
      stem: { en: "Which of the following is NOT a method of amendment in India?", ml: "താഴെ പറയുന്നവയിൽ ഇന്ത്യയിലെ ഭരണഘടനാ ഭേദഗതി രീതി അല്ലാത്തത് ഏത്?" },
      options: [
        { k: "A", text: { en: "Simple Majority", ml: "സാധാരണ ഭൂരിപക്ഷം" } },
        { k: "B", text: { en: "Special Majority", ml: "പ്രത്യേക ഭൂരിപക്ഷം" } },
        { k: "C", text: { en: "Referendum", ml: "ജനഹിതപരിശോധന" } },
        { k: "D", text: { en: "Ratification by states", ml: "സംസ്ഥാനങ്ങളുടെ അംഗീകാരം" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "India does not use direct popular vote (referendum) for amendments.", ml: "ഇന്ത്യയിൽ ഭേദഗതികൾക്ക് ജനഹിതപരിശോധന ഉപയോഗിക്കാറില്ല." }
    },
    {
      q_id: "ps-c9-q17",
      type: "mcq",
      stem: { en: "Judicial interpretation has helped in expanding which right significantly?", ml: "കോടതികളുടെ വ്യാഖ്യാനം ഏത് അവകാശത്തെയാണ് വലിയ തോതിൽ വിപുലീകരിച്ചത്?" },
      options: [
        { k: "A", text: { en: "Right to Property", ml: "സ്വത്തിനുള്ള അവകാശം" } },
        { k: "B", text: { en: "Right to Life", ml: "ജീവിക്കാനുള്ള അവകാശം" } },
        { k: "C", text: { en: "Right to Bear Arms", ml: "ആയുധം ധരിക്കാനുള്ള അവകാശം" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Article 21 now includes education, environment, and privacy.", ml: "ജീവിക്കാനുള്ള അവകാശത്തിൽ ശുദ്ധവായു, വിദ്യാഭ്യാസം തുടങ്ങിയവയും ഉൾപ്പെടുന്നുവെന്ന് കോടതി വിധിച്ചു." }
    },
    {
      q_id: "ps-c9-q18",
      type: "mcq",
      stem: { en: "The 'Special Majority' procedure is mentioned in which article?", ml: "'പ്രത്യേക ഭൂരിപക്ഷം' എന്ന നടപടിക്രമം വിവരിക്കുന്നത് ഏത് വകുപ്പിലാണ്?" },
      options: [
        { k: "A", text: { en: "Article 1", ml: "ആർട്ടിക്കിൾ 1" } },
        { k: "B", text: { en: "Article 368", ml: "ആർട്ടിക്കിൾ 368" } },
        { k: "C", text: { en: "Article 356", ml: "ആർട്ടിക്കിൾ 356" } },
        { k: "D", text: { en: "Article 14", ml: "ആർട്ടിക്കിൾ 14" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Article 368 contains the rules for special majority amendments.", ml: "368-ാം വകുപ്പിലാണ് ഈ നടപടിക്രമങ്ങൾ ഉള്ളത്." }
    },
    {
      q_id: "ps-c9-q19",
      type: "mcq",
      stem: { en: "A constitution that is very difficult to change is called:", ml: "മാറ്റം വരുത്താൻ വളരെ പ്രയാസമുള്ള ഭരണഘടനയെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Flexible", ml: "അയവുള്ളത്" } },
        { k: "B", text: { en: "Rigid", ml: "കണിശമായത് / കടുപ്പമേറിയത്" } },
        { k: "C", text: { en: "Dynamic", ml: "ചലനാത്മകം" } },
        { k: "D", text: { en: "Temporary", ml: "താൽക്കാലികം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Rigid constitutions require a very tough procedure for changes.", ml: "മാറ്റം വരുത്താൻ പ്രത്യേക നടപടിക്രമങ്ങൾ വേണ്ടതിനെ 'റിജിഡ്' എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "ps-c9-q20",
      type: "mcq",
      stem: { en: "A constitution that can be changed like an ordinary law is:", ml: "സാധാരണ നിയമം പോലെ മാറ്റാൻ കഴിയുന്ന ഭരണഘടന:" },
      options: [
        { k: "A", text: { en: "Rigid", ml: "കടുപ്പമേറിയത്" } },
        { k: "B", text: { en: "Flexible", ml: "അയവുള്ളത്" } },
        { k: "C", text: { en: "Frozen", ml: "നിശ്ചലം" } },
        { k: "D", text: { en: "Static", ml: "മാറ്റമില്ലാത്തത്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Flexible constitutions allow easy changes by simple majority.", ml: "എളുപ്പത്തിൽ മാറ്റം വരുത്താൻ കഴിയുന്നവയെ 'ഫ്ലെക്സിബിൾ' എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "ps-c9-q21",
      type: "mcq",
      stem: { en: "The power of Parliament to amend the Constitution is:", ml: "ഭരണഘടന ഭേദഗതി ചെയ്യാനുള്ള പാർലമെന്റിന്റെ അധികാരം:" },
      options: [
        { k: "A", text: { en: "Absolute", ml: "അതിരുകളില്ലാത്തതാണ്" } },
        { k: "B", text: { en: "Limited by basic structure", ml: "അടിസ്ഥാന ഘടനയാൽ പരിമിതമാണ്" } },
        { k: "C", text: { en: "Non-existent", ml: "ഇല്ലാത്തതാണ്" } },
        { k: "D", text: { en: "Under the Army", ml: "സൈന്യത്തിന്റെ കീഴിലാണ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Parliament cannot use its power to destroy the Constitution's soul.", ml: "ഭരണഘടനയുടെ കാതലായ ഭാഗങ്ങളിൽ മാറ്റം വരുത്താൻ പാർലമെന്റിന് കഴിയില്ല." }
    },
    {
      q_id: "ps-c9-q22",
      type: "mcq",
      stem: { en: "Federal matters require ratification by how many states?", ml: "ഫെഡറൽ വിഷയങ്ങളിലെ ഭേദഗതികൾക്ക് എത്ര സംസ്ഥാനങ്ങളുടെ അംഗീകാരം വേണം?" },
      options: [
        { k: "A", text: { en: "All states", ml: "എല്ലാ സംസ്ഥാനങ്ങളും" } },
        { k: "B", text: { en: "At least half of states", ml: "കുറഞ്ഞത് പകുതി സംസ്ഥാനങ്ങൾ" } },
        { k: "C", text: { en: "Only 5 states", ml: "5 സംസ്ഥാനങ്ങൾ മാത്രം" } },
        { k: "D", text: { en: "None", ml: "ഒന്നുമില്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Half of the state legislatures must approve such amendments.", ml: "പകുതിയിലധികം സംസ്ഥാന നിയമസഭകൾ ഭേദഗതിയെ അനുകൂലിക്കണം." }
    },
    {
      q_id: "ps-c9-q23",
      type: "mcq",
      stem: { en: "Rule of Law is a part of:", ml: "'നിയമവാഴ്ച' എന്നത് ഏതിന്റെ ഭാഗമാണ്?" },
      options: [
        { k: "A", text: { en: "Simple Majority", ml: "സാധാരണ ഭൂരിപക്ഷം" } },
        { k: "B", text: { en: "Basic Structure", ml: "അടിസ്ഥാന ഘടന" } },
        { k: "C", text: { en: "Police rules", ml: "പോലീസ് നിയമം" } },
        { k: "D", text: { en: "Army code", ml: "സൈനിക നിയമം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Rule of Law cannot be removed by any amendment.", ml: "നിയമവാഴ്ച ഭരണഘടനയുടെ ഒരു അടിസ്ഥാന ശിലയാണ്." }
    },
    {
      q_id: "ps-c9-q24",
      type: "mcq",
      stem: { en: "The 44th Amendment restored the power of:", ml: "44-ാം ഭേദഗതി ആരുടെ അധികാരമാണ് പുനഃസ്ഥാപിച്ചത്?" },
      options: [
        { k: "A", text: { en: "The PM", ml: "പ്രധാനമന്ത്രിയുടെ" } },
        { k: "B", text: { en: "The Judiciary", ml: "നീതിന്യായ വിഭാഗത്തിന്റെ" } },
        { k: "C", text: { en: "The Police", ml: "പോലീസിന്റെ" } },
        { k: "D", text: { en: "The Governor", ml: "ഗവർണറുടെ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "It removed restrictions placed on the courts by the 42nd amendment.", ml: "കോടതികൾക്ക് മേൽ 42-ാം ഭേദഗതി ഏർപ്പെടുത്തിയ നിയന്ത്രണങ്ങൾ ഇത് മാറ്റി." }
    },
    {
      q_id: "ps-c9-q25",
      type: "mcq",
      stem: { en: "Changes in the age of retirement of HC judges is an example of:", ml: "ഹൈക്കോടതി ജഡ്ജിമാരുടെ വിരമിക്കൽ പ്രായം മാറ്റുന്നത് ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Controversial amendment", ml: "വിവാദപരമായ ഭേദഗതി" } },
        { k: "B", text: { en: "Technical amendment", ml: "സാങ്കേതികമായ ഭേദഗതി" } },
        { k: "C", text: { en: "Basic structure change", ml: "അടിസ്ഥാന ഘടന മാറ്റം" } },
        { k: "D", text: { en: "Emergency law", ml: "അടിയന്തര നിയമം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "This was done to fix an administrative detail.", ml: "ഇതൊരു സാങ്കേതികമായ മാറ്റം മാത്രമായിരുന്നു." }
    },
    {
      q_id: "ps-c9-q26",
      type: "mcq",
      stem: { en: "The 'Special Majority' requires 2/3rd votes of those:", ml: "പ്രത്യേക ഭൂരിപക്ഷത്തിന് ഹാജരായവരുടെ എത്ര ഭാഗം വോട്ട് വേണം?" },
      options: [
        { k: "A", text: { en: "Present and Voting", ml: "ഹാജരായി വോട്ട് ചെയ്യുന്നവർ" } },
        { k: "B", text: { en: "Living in the country", ml: "രാജ്യത്ത് താമസിക്കുന്നവർ" } },
        { k: "C", text: { en: "Members of the ruling party", ml: "ഭരണകക്ഷി അംഗങ്ങൾ" } },
        { k: "D", text: { en: "Elected in last 10 years", ml: "കഴിഞ്ഞ 10 വർഷത്തിനിടെ തിരഞ്ഞെടുക്കപ്പെട്ടവർ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It is calculated based on members attending the session.", ml: "സഭയിൽ ഹാജരുള്ളവരുടെ എണ്ണത്തെ അടിസ്ഥാനമാക്കിയാണ് ഇത് കണക്കാക്കുന്നത്." }
    },
    {
      q_id: "ps-c9-q27",
      type: "mcq",
      stem: { en: "A constitution provides a 'framework' which means:", ml: "ഭരണഘടന ഒരു 'ചട്ടക്കൂട്' നൽകുന്നു എന്ന് പറഞ്ഞാൽ എന്താണ്?" },
      options: [
        { k: "A", text: { en: "It is a wall", ml: "ഇതൊരു മതിലാണ്" } },
        { k: "B", text: { en: "It provides basic rules for governance", ml: "ഭരണത്തിനാവശ്യമായ അടിസ്ഥാന നിയമങ്ങൾ നൽകുന്നു" } },
        { k: "C", text: { en: "It is a photo frame", ml: "ഇതൊരു ഫോട്ടോ ഫ്രെയിമാണ്" } },
        { k: "D", text: { en: "It is a cage", ml: "ഇതൊരു കൂടാണ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It sets the boundaries and rules for the government.", ml: "ഭരണം എങ്ങനെ വേണമെന്ന് നിശ്ചയിക്കുന്ന അടിസ്ഥാന ഘടനയാണിത്." }
    },
    {
      q_id: "ps-c9-q28",
      type: "mcq",
      stem: { en: "In Kesavananda Bharati case, how many judges were in the bench?", ml: "കേശവാനന്ദ ഭാരതി കേസിൽ എത്ര ജഡ്ജിമാരുടെ ബെഞ്ചാണ് വിധി പറഞ്ഞത്?" },
      options: [
        { k: "A", text: { en: "5", ml: "5" } },
        { k: "B", text: { en: "7", ml: "7" } },
        { k: "C", text: { en: "13", ml: "13" } },
        { k: "D", text: { en: "9", ml: "9" } }
      ],
      answer: "C",
      difficulty: "hard",
      explanation: { en: "It was the largest constitutional bench in Indian history with 13 judges.", ml: "ഇന്ത്യൻ ചരിത്രത്തിലെ ഏറ്റവും വലിയ ബെഞ്ചായിരുന്നു അത് (13 ജഡ്ജിമാർ)." }
    },
    {
      q_id: "ps-c9-q29",
      type: "mcq",
      stem: { en: "Amendments like the Anti-defection law are based on:", ml: "കൂറുമാറ്റ നിരോധന നിയമം പോലുള്ള ഭേദഗതികൾ ഏതിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Technical error", ml: "സാങ്കേതിക പിശക്" } },
        { k: "B", text: { en: "Political Consensus", ml: "രാഷ്ട്രീയ സമവായം" } },
        { k: "C", text: { en: "Judicial order", ml: "നീതിന്യായ ഉത്തരവ്" } },
        { k: "D", text: { en: "Foreign pressure", ml: "വിദേശ സമ്മർദ്ദം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Parties agreed that such a law was needed for stability.", ml: "രാഷ്ട്രീയ പാർട്ടികൾ തമ്മിലുണ്ടാക്കിയ ധാരണയുടെ അടിസ്ഥാനത്തിലാണ് ഇത് വന്നത്." }
    },
    {
      q_id: "ps-c9-q30",
      type: "mcq",
      stem: { en: "Can the Supreme Court add new features to 'Basic Structure' later?", ml: "അടിസ്ഥാന ഘടനയിൽ പുതിയ കാര്യങ്ങൾ കൂട്ടിച്ചേർക്കാൻ സുപ്രീം കോടതിക്ക് കഴിയുമോ?" },
      options: [
        { k: "A", text: { en: "Yes, through new cases", ml: "അതെ, പുതിയ കേസുകളിലൂടെ" } },
        { k: "B", text: { en: "No, it was fixed in 1973", ml: "ഇല്ല, 1973-ൽ ഇത് അവസാനിച്ചു" } },
        { k: "C", text: { en: "Only if Parliament agrees", ml: "പാർലമെന്റ് സമ്മതിച്ചാൽ മാത്രം" } },
        { k: "D", text: { en: "Only if the President allows", ml: "പ്രസിഡന്റ് അനുവദിച്ചാൽ മാത്രം" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "The court decides case-by-case what belongs to the basic structure.", ml: "പുതിയ വിധിന്യായങ്ങളിലൂടെ കോടതി ഈ പട്ടിക വിപുലീകരിക്കാറുണ്ട്." }
    }
  ]
};

export const plusOnePoliticalSciencePart1Unit10: Lesson = {
  id: "pl-ps-11-p1-u10",
  title: { en: "The Philosophy of the Constitution", ml: "ഭരണഘടനയുടെ ദർശനം (The Philosophy of the Constitution)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=Gq40LU5fZkM",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the moral vision underlying the Constitution", ml: "ഭരണഘടനയുടെ അടിസ്ഥാനമായ ധാർമ്മിക ദർശനം മനസ്സിലാക്കുക" },
    { en: "Identify the core values like liberalism, socialism, and secularism", ml: "ലിബറലിസം, സോഷ്യലിസം, മതേതരത്വം തുടങ്ങിയ പ്രധാന മൂല്യങ്ങൾ തിരിച്ചറിയുക" },
    { en: "Distinguish between the Indian and Western models of secularism", ml: "മതേതരത്വത്തിന്റെ ഇന്ത്യൻ-പാശ്ചാത്യ മാതൃകകൾ തമ്മിലുള്ള വ്യത്യാസം മനസ്സിലാക്കുക" },
    { en: "Analyze the procedural achievements and criticisms of the Constitution", ml: "ഭരണഘടനയുടെ നടപടിക്രമപരമായ നേട്ടങ്ങളും വിമർശനങ്ങളും വിശകലനം ചെയ്യുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the underlying values, moral visions, and political ideals that form the basis of the Indian Constitution.", 
      ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ അടിസ്ഥാനമായ മൂല്യങ്ങൾ, ധാർമ്മിക വീക്ഷണങ്ങൾ, രാഷ്ട്രീയ ആദർശങ്ങൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of the Preamble, Indian secularism, individual freedom vs social justice, and constitutional criticisms.", 
      ml: "ആമുഖം, ഇന്ത്യൻ മതേതരത്വം, വ്യക്തിസ്വാതന്ത്ര്യം vs സാമൂഹിക നീതി, ഭരണഘടനാപരമായ വിമർശനങ്ങൾ എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the underlying values and moral vision of the Indian Constitution. It explains what is meant by the "philosophy" of a constitution, the core ideals like liberalism, socialism, and secularism, and how the Constitution seeks to balance individual rights with social justice. It also addresses the procedural achievements and criticisms of the Indian Constitution.', ml: 'ഇന്ത്യൻ ഭരണഘടനയുടെ അടിസ്ഥാന മൂല്യങ്ങളെയും ധാർമ്മിക വീക്ഷണത്തെയുമാണ് ഈ അധ്യായം പരിശോധിക്കുന്നത്. ഒരു ഭരണഘടനയുടെ "ദർശനം" (Philosophy) എന്നാൽ എന്താണ് ഉദ്ദേശിക്കുന്നത്, ലിബറലിസം, സോഷ്യലിസം, മതേതരത്വം തുടങ്ങിയ പ്രധാന ആശയങ്ങൾ ഏതെല്ലാമാണ്, വ്യക്തികളുടെ അവകാശങ്ങളും സാമൂഹിക നീതിയും തമ്മിൽ ഭരണഘടന എങ്ങനെയാണ് സന്തുലിതാവസ്ഥ നിലനിർത്തുന്നത് എന്നിവ ഇത് വിശദീകരിക്കുന്നു. കൂടാതെ ഇന്ത്യൻ ഭരണഘടനയുടെ നേട്ടങ്ങളും അതിനെതിരെയുള്ള വിമർശനങ്ങളും ഇവിടെ ചർച്ച ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Philosophy of the Constitution', ml: 'ഭരണഘടനയുടെ ദർശനം'}, {en: 'The fundamental values and moral visions that form the basis of the constitution.', ml: 'ഭരണഘടനയുടെ അടിസ്ഥാനമായ മൂല്യങ്ങളും ധാർമ്മിക ലക്ഷ്യങ്ങളും.'}, {en: 'Enshrined in the Preamble.', ml: 'ആമുഖത്തിൽ ഉൾപ്പെടുത്തിയിട്ടുണ്ട്.'}],
          [{en: 'Liberalism', ml: 'ലിബറലിസം (Liberalism)'}, {en: 'An ideology centered on individual freedom and rights.', ml: 'വ്യക്തിസ്വാതന്ത്ര്യത്തിനും അവകാശങ്ങൾക്കും മുൻഗണന നൽകുന്ന ചിന്താഗതി.'}, {en: 'Protection of civil liberties.', ml: 'പൗരസ്വാതന്ത്ര്യത്തിന്റെ സംരക്ഷണം.'}],
          [{en: 'Social Justice', ml: 'സാമൂഹിക നീതി (Social Justice)'}, {en: 'Fair relation between individual and society, often involving helping the disadvantaged.', ml: 'സമൂഹത്തിലെ ദുർബല വിഭാഗങ്ങളെ സഹായിച്ചുകൊണ്ട് നീതി ഉറപ്പാക്കുന്ന രീതി.'}, {en: 'Reservations for SC/ST.', ml: 'SC/ST വിഭാഗങ്ങൾക്കുള്ള സംവരണം.'}],
          [{en: 'Secularism', ml: 'മതേതരത്വം (Secularism)'}, {en: 'A system where the state protects all religions equally and remains neutral.', ml: 'ഭരണകൂടം എല്ലാ മതങ്ങളെയും ഒരുപോലെ സംരക്ഷിക്കുകയും നിഷ്പക്ഷത പാലിക്കുകയും ചെയ്യുന്ന രീതി.'}, {en: 'Indian model of secularism.', ml: 'മതേതരത്വത്തിന്റെ ഇന്ത്യൻ മാതൃക.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is meant by Philosophy of the Constitution?', ml: '3.1 ഭരണഘടനയുടെ ദർശനം എന്നാൽ എന്ത്?' },
      { type: 'ul', items: [
        { en: 'A constitution is not merely a legal document; it embodies a moral vision.', ml: 'ഭരണഘടന കേവലം ഒരു നിയമരേഖയല്ല; അത് ഒരു ധാർമ്മിക വീക്ഷണത്തെ ഉൾക്കൊള്ളുന്നു.' },
        { en: 'It provides a framework for how we should live together as a society.', ml: 'ഒരു സമൂഹമായി നമ്മൾ എങ്ങനെ ജീവിക്കണം എന്നതിനുള്ള ചട്ടക്കൂട് ഇത് നൽകുന്നു.' },
        { en: 'To understand the philosophy, we must look at the Preamble and the Constituent Assembly debates.', ml: 'ഈ ദർശനം മനസ്സിലാക്കാൻ ഭരണഘടനയുടെ ആമുഖവും ഭരണഘടനാ നിർമ്മാണ സഭയിലെ ചർച്ചകളും പരിശോധിക്കണം.' }
      ]},

      { type: 'h3', en: "3.2 Core Features of the Indian Constitution's Philosophy", ml: '3.2 ഇന്ത്യൻ ഭരണഘടനാ ദർശനത്തിന്റെ പ്രധാന സവിശേഷതകൾ' },
      { type: 'h4', en: 'A. Individual Freedom', ml: 'A. വ്യക്തിസ്വാതന്ത്ര്യം (Individual Freedom)' },
      { type: 'ul', items: [
        { en: 'The Constitution is committed to individual liberty but balances it with social responsibility.', ml: 'ഭരണഘടന വ്യക്തിസ്വാതന്ത്ര്യത്തിന് വലിയ പ്രാധാന്യം നൽകുന്നുണ്ടെങ്കിലും അതിനെ സാമൂഹിക ഉത്തരവാദിത്തവുമായി ബന്ധിപ്പിച്ചിരിക്കുന്നു.' }
      ]},
      { type: 'h4', en: 'B. Social Justice', ml: 'B. സാമൂഹിക നീതി (Social Justice)' },
      { type: 'ul', items: [
        { en: 'Indian liberalism is linked to social justice, unlike the purely individualistic Western model.', ml: 'പാശ്ചാത്യ മാതൃകയിൽ നിന്ന് വ്യത്യസ്തമായി ഇന്ത്യൻ ലിബറലിസം സാമൂഹിക നീതിയുമായി ആഴത്തിൽ ബന്ധപ്പെട്ടിരിക്കുന്നു.' },
        { en: 'It allows the state to intervene to end social evils like untouchability.', ml: 'ഐത്തം പോലുള്ള സാമൂഹിക തിന്മകൾ അവസാനിപ്പിക്കാൻ ഭരണകൂടത്തിന് ഇടപെടാൻ ഇത് അധികാരം നൽകുന്നു.' }
      ]},
      { type: 'h4', en: 'C. Respect for Diversity and Minority Rights', ml: 'C. വൈവിധ്യത്തോടുള്ള ബഹുമാനവും ന്യൂനപക്ഷ അവകാശങ്ങളും' },
      { type: 'ul', items: [
        { en: 'The Constitution grants community-based rights to ensure minorities feel safe and equal.', ml: 'ന്യൂനപക്ഷങ്ങൾക്ക് സുരക്ഷിതത്വവും സമത്വവും ഉറപ്പാക്കാൻ അവർക്ക് പ്രത്യേക അവകാശങ്ങൾ നൽകുന്നു.' }
      ]},
      { type: 'h4', en: 'D. Secularism', ml: 'D. മതേതരത്വം (Secularism)' },
      { type: 'ul', items: [
        { en: 'Western Model: Complete separation of church and state (Mutual Exclusion).', ml: 'പാശ്ചാത്യ മാതൃക: മതവും ഭരണകൂടവും തമ്മിലുള്ള പൂർണ്ണമായ വേർതിരിവ്.' },
        { en: 'Indian Model: "Principled Distance". The state can interfere for social reform (e.g., banning child marriage).', ml: 'ഇന്ത്യൻ മാതൃക: "തത്വനിഷ്ഠമായ അകലം" (Principled Distance). സാമൂഹിക പരിഷ്കരണത്തിനായി മതപരമായ കാര്യങ്ങളിൽ ഗവൺമെന്റിന് ഇടപെടാം (ഉദാ: ബാലവിവാഹം നിരോധിക്കൽ).' }
      ]},

      { type: 'h3', en: '3.3 The Preamble', ml: '3.3 ആമുഖം (The Preamble)' },
      { type: 'p', en: 'The Preamble is the "identity card" of the Constitution. It declares India to be:', ml: 'ഭരണഘടനയുടെ തിരിച്ചറിയൽ കാർഡാണ് ആമുഖം. ഇന്ത്യയെ ഇപ്രകാരം വിശേഷിപ്പിക്കുന്നു:' },
      { type: 'ul', items: [
        { en: 'Sovereign: Independent from foreign control.', ml: 'പരമാധികാര രാഷ്ട്രം: വിദേശ നിയന്ത്രണങ്ങളിൽ നിന്ന് സ്വതന്ത്രം.' },
        { en: 'Socialist: Aiming for social and economic equality.', ml: 'സോഷ്യലിസ്റ്റ്: സാമൂഹിക-സാമ്പത്തിക സമത്വം ലക്ഷ്യമിടുന്നു.' },
        { en: 'Secular: Treating all religions equally.', ml: 'മതേതരം: എല്ലാ മതങ്ങളെയും ഒരുപോലെ കാണുന്നു.' },
        { en: 'Democratic Republic: People choose the government; head of state is elected.', ml: 'ജനാധിപത്യ റിപ്പബ്ലിക്: ജനങ്ങൾ ഭരണകൂടത്തെ തിരഞ്ഞെടുക്കുന്നു; രാഷ്ട്രത്തലവൻ തിരഞ്ഞെടുക്കപ്പെട്ട വ്യക്തിയായിരിക്കും.' }
      ]},

      { type: 'h3', en: '3.4 Criticisms of the Constitution', ml: '3.4 ഭരണഘടനയ്ക്ക് നേരെയുള്ള വിമർശനങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Unwieldy: It is the longest written constitution, very detailed.', ml: 'വളരെ വലുതാണ്: ലോകത്തിലെ ഏറ്റവും ദൈർഘ്യമേറിയ എഴുതപ്പെട്ട ഭരണഘടനയാണിത്.' },
        { en: 'Unrepresentative: Claim that the Constituent Assembly was not directly elected.', ml: 'പ്രാതിനിധ്യ കുറവ്: സഭയിലെ അംഗങ്ങൾ ജനങ്ങളാൽ നേരിട്ട് തിരഞ്ഞെടുക്കപ്പെട്ടവരല്ല എന്ന വാദം.' },
        { en: 'Alien to Indian conditions: Some say it is a "slavish imitation" of Western constitutions.', ml: 'ഇന്ത്യൻ സാഹചര്യങ്ങൾക്ക് അന്യമായത്: പാശ്ചാത്യ ഭരണഘടനകളുടെ അനുകരണമാണ് ഇതെന്ന് ചിലർ വിമർശിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'The philosophy is not just individualistic but also communitarian.', ml: 'ഇന്ത്യൻ ഭരണഘടനാ ദർശനം വ്യക്തികേന്ദ്രീകൃതം മാത്രമല്ല, സമൂഹത്തെ കൂടി പരിഗണിക്കുന്നതാണ്.' },
        { en: 'The Objectives Resolution (1946) defined the moral framework.', ml: '1946-ലെ ലക്ഷ്യപ്രമേയമാണ് ഭരണഘടനയുടെ ധാർമ്മിക ചട്ടക്കൂട് നിശ്ചയിച്ചത്.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'The Constitution is a moral document reflecting nationalist aspirations.', ml: 'ദേശീയ പ്രസ്ഥാനത്തിന്റെ അഭിലാഷങ്ങൾ പ്രതിഫലിപ്പിക്കുന്ന ധാർമ്മിക രേഖയാണിത്.' },
        { en: 'Indian secularism allows state reform while respecting all faiths.', ml: 'എല്ലാ മതങ്ങളെയും ബഹുമാനിക്കുമ്പോൾ തന്നെ തെറ്റായ ആചാരങ്ങൾ മാറ്റാൻ ഇന്ത്യൻ മതേതരത്വം ഗവൺമെന്റിനെ അനുവദിക്കുന്നു.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Political Philosophy Approach",
      "ml": "രാഷ്ട്രീയ തത്വശാസ്ത്ര സമീപനം (Political Philosophy Approach)"
    },
    "definition": {
      "en": "The method of understanding the moral perspective and conceptual structure put forward by the Constitution, rather than seeing it as just a law book.",
      "ml": "ഭരണഘടനയെ വെറുമൊരു നിയമപുസ്തകമായി കാണാതെ, അത് മുന്നോട്ടുവെക്കുന്ന ധാർമ്മിക കാഴ്ചപ്പാടും ആശയഘടനയും മനസ്സിലാക്കുന്ന രീതി."
    }
  },
  {
    "term": {
      "en": "Individual Freedom",
      "ml": "വ്യക്തിസ്വാതന്ത്ര്യം (Individual Freedom)"
    },
    "definition": {
      "en": "A liberal value in the Indian Constitution that ensures freedom of speech and protection from arbitrary arrest.",
      "ml": "അഭിപ്രായ സ്വാതന്ത്ര്യവും അന്യായമായ അറസ്റ്റിൽ നിന്നുള്ള സംരക്ഷണവും ഉറപ്പാക്കുന്ന ഇന്ത്യൻ ഭരണഘടനയിലെ ലിബറൽ മൂല്യം."
    }
  },
  {
    "term": {
      "en": "Social Justice",
      "ml": "സാമൂഹിക നീതി (Social Justice)"
    },
    "definition": {
      "en": "The commitment of the Constitution to ensure equality in society by providing things like reservation to historically oppressed sections.",
      "ml": "ചരിത്രപരമായി അടിച്ചമർത്തപ്പെട്ട വിഭാഗങ്ങൾക്ക് സംവരണം പോലുള്ളവ നൽകി സമൂഹത്തിൽ സമത്വം ഉറപ്പാക്കാനുള്ള ഭരണഘടനയുടെ പ്രതിബദ്ധത."
    }
  },
  {
    "term": {
      "en": "Principled Distance",
      "ml": "തത്വാധിഷ്ഠിത അകലം (Principled Distance)"
    },
    "definition": {
      "en": "The Indian model of secularism that maintains a certain distance from all religions, intervening or staying away as needed.",
      "ml": "എല്ലാ മതങ്ങളിൽ നിന്നും ഒരു നിശ്ചിത അകലം പാലിച്ച്, ആവശ്യാനുസരണം ഇടപെടുകയോ വിട്ടുനിൽക്കുകയോ ചെയ്യുന്ന ഇന്ത്യൻ മതേതരത്വ മാതൃകാ രീതി."
    }
  },
  {
    "term": {
      "en": "Universal Franchise",
      "ml": "സാർവ്വത്രിക വോട്ടവകാശം (Universal Franchise)"
    },
    "definition": {
      "en": "The revolutionary decision to give equal voting rights to all citizens, setting aside traditional social discrimination.",
      "ml": "പരമ്പരാഗതമായ സാമൂഹിക വിവേചനങ്ങൾ മാറ്റിവെച്ച് എല്ലാ പൗരന്മാർക്കും തുല്യ വോട്ടവകാശം നൽകാനുള്ള വിപ്ലവകരമായ തീരുമാനം."
    }
  },
  {
    "term": {
      "en": "Rammohan Roy",
      "ml": "റാം മോഹൻ റോയ് (Rammohan Roy)"
    },
    "definition": {
      "en": "A 19th-century social reformer who advocated for freedom of the press and women's rights.",
      "ml": "പത്രസ്വാതന്ത്ര്യത്തിനും സ്ത്രീകളുടെ അവകാശങ്ങൾക്കും വേണ്ടി വാദിച്ച പത്തൊൻപതാം നൂറ്റാണ്ടിലെ സാമൂഹിക പരിഷ്കർത്താവ്."
    }
  }
],
  quiz: [
    {
      q_id: "ps-c10-q1",
      type: "mcq",
      stem: { en: "Which document is considered the 'identity card' of the Indian Constitution?", ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ 'തിരിച്ചറിയൽ കാർഡ്' എന്ന് വിശേഷിപ്പിക്കപ്പെടുന്ന രേഖ ഏത്?" },
      options: [
        { k: "A", text: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" } },
        { k: "B", text: { en: "Directive Principles", ml: "നിർദ്ദേശക തത്വങ്ങൾ" } },
        { k: "C", text: { en: "The Preamble", ml: "ആമുഖം" } },
        { k: "D", text: { en: "The Tenth Schedule", ml: "പത്താം ഷെഡ്യൂൾ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "N.A. Palkhivala called the Preamble the 'Identity Card' of the Constitution.", ml: "ഭരണഘടനയുടെ അന്തസ്സത്ത ഉൾക്കൊള്ളുന്നതുകൊണ്ട് ആമുഖത്തെ ഇത്തരത്തിൽ വിളിക്കുന്നു." }
    },
    {
      q_id: "ps-c10-q2",
      type: "mcq",
      stem: { en: "What is the meaning of 'Sovereign' in the Preamble?", ml: "ആമുഖത്തിലെ 'പരമാധികാരം' (Sovereign) എന്നതുകൊണ്ട് അർത്ഥമാക്കുന്നത് എന്ത്?" },
      options: [
        { k: "A", text: { en: "Under the British Rule", ml: "ബ്രിട്ടീഷ് ഭരണത്തിന് കീഴിൽ" } },
        { k: "B", text: { en: "Free from foreign control", ml: "വിദേശ നിയന്ത്രണങ്ങളിൽ നിന്ന് പൂർണ്ണമായും സ്വതന്ത്രം" } },
        { k: "C", text: { en: "Ruled by a King", ml: "രാജാവ് ഭരിക്കുന്നത്" } },
        { k: "D", text: { en: "Part of the UN", ml: "യു.എന്നിന്റെ ഭാഗം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Sovereignty means India is independent both internally and externally.", ml: "ബാഹ്യശക്തികളുടെ നിയന്ത്രണമില്ലാതെ സ്വതന്ത്രമായി തീരുമാനമെടുക്കാനുള്ള രാജ്യത്തിന്റെ കഴിവാണ് പരമാധികാരം." }
    },
    {
      q_id: "ps-c10-q3",
      type: "mcq",
      stem: { en: "The Indian model of secularism is based on the principle of:", ml: "ഇന്ത്യൻ മതേതരത്വ മാതൃക ഏത് തത്വത്തെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Mutual Exclusion", ml: "പരസ്പര നിരാസം" } },
        { k: "B", text: { en: "Principled Distance", ml: "തത്വനിഷ്ഠമായ അകലം" } },
        { k: "C", text: { en: "Atheism", ml: "നിരീശ്വരവാദം" } },
        { k: "D", text: { en: "Religious domination", ml: "മതപരമായ ആധിപത്യം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Principled distance allows the state to interfere for social reforms while being neutral.", ml: "സാമൂഹിക പരിഷ്കരണത്തിനായി ഗവൺമെന്റിന് മതങ്ങളിൽ ഇടപെടാം എന്നതാണ് ഈ തത്വം." }
    },
    {
      q_id: "ps-c10-q4",
      type: "mcq",
      stem: { en: "Which ideology focuses primarily on individual freedom?", ml: "വ്യക്തിസ്വാതന്ത്ര്യത്തിന് പ്രാധാന്യം നൽകുന്ന പ്രത്യയശാസ്ത്രം ഏത്?" },
      options: [
        { k: "A", text: { en: "Socialism", ml: "സോഷ്യലിസം" } },
        { k: "B", text: { en: "Liberalism", ml: "ലിബറലിസം" } },
        { k: "C", text: { en: "Communism", ml: "കമ്മ്യൂണിസം" } },
        { k: "D", text: { en: "Fascism", ml: "ഫാസിസം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Liberalism centers on individual rights and freedom.", ml: "ലിബറലിസം വ്യക്തികൾക്ക് വലിയ പ്രാധാന്യം നൽകുന്നു." }
    },
    {
      q_id: "ps-c10-q5",
      type: "mcq",
      stem: { en: "The term 'Socialist' was added to the Preamble by which amendment?", ml: "'സോഷ്യലിസ്റ്റ്' എന്ന വാക്ക് ആമുഖത്തിൽ ചേർത്തത് ഏത് ഭേദഗതിയിലൂടെയാണ്?" },
      options: [
        { k: "A", text: { en: "42nd Amendment", ml: "42-ാം ഭേദഗതി" } },
        { k: "B", text: { en: "44th Amendment", ml: "44-ാം ഭേദഗതി" } },
        { k: "C", text: { en: "1st Amendment", ml: "1-ാം ഭേദഗതി" } },
        { k: "D", text: { en: "73rd Amendment", ml: "73-ാം ഭേദഗതി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The 42nd Amendment in 1976 added 'Socialist' and 'Secular'.", ml: "1976-ലെ 42-ാം ഭേദഗതിയിലൂടെയാണ് സോഷ്യലിസ്റ്റ്, മതേതരത്വം എന്നീ വാക്കുകൾ ചേർത്തത്." }
    },
    {
      q_id: "ps-c10-q6",
      type: "mcq",
      stem: { en: "Which of the following is a criticism of the Indian Constitution?", ml: "താഴെ പറയുന്നവയിൽ ഇന്ത്യൻ ഭരണഘടനയ്ക്ക് നേരെയുള്ള വിമർശനം ഏത്?" },
      options: [
        { k: "A", text: { en: "It is too short", ml: "ഇത് വളരെ ചെറുതാണ്" } },
        { k: "B", text: { en: "It is unwieldy and long", ml: "ഇത് വളരെ വലുതും സങ്കീർണ്ണവുമാണ്" } },
        { k: "C", text: { en: "It has no rights", ml: "അതിൽ അവകാശങ്ങൾ ഇല്ല" } },
        { k: "D", text: { en: "It ignores minorities", ml: "ന്യൂനപക്ഷങ്ങളെ അവഗണിക്കുന്നു" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Being the longest constitution, it is often criticized for being too detailed.", ml: "ലോകത്തിലെ ഏറ്റവും വലിയ എഴുതപ്പെട്ട ഭരണഘടനയായതിനാൽ ഇതിനെ വിമർശിക്കാറുണ്ട്." }
    },
    {
      q_id: "ps-c10-q7",
      type: "mcq",
      stem: { en: "The Western model of secularism implies:", ml: "മതേതരത്വത്തിന്റെ പാശ്ചാത്യ മാതൃക എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Complete separation of state and religion", ml: "ഭരണകൂടവും മതവും തമ്മിലുള്ള പൂർണ്ണമായ വേർതിരിവ്" } },
        { k: "B", text: { en: "State helps all religions", ml: "ഭരണകൂടം എല്ലാ മതങ്ങളെയും സഹായിക്കുന്നു" } },
        { k: "C", text: { en: "State follows one religion", ml: "ഭരണകൂടം ഒരു മതം മാത്രം പിന്തുടരുന്നു" } },
        { k: "D", text: { en: "State bans religion", ml: "ഭരണകൂടം മതം നിരോധിക്കുന്നു" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "In the West, state and religion do not interfere in each other's affairs.", ml: "മതവും ഭരണകൂടവും പരസ്പരം ഇടപെടാത്ത രീതിയാണിത്." }
    },
    {
      q_id: "ps-c10-q8",
      type: "mcq",
      stem: { en: "A 'Republic' means that the head of state is:", ml: "ഒരു 'റിപ്പബ്ലിക്' എന്നാൽ രാഷ്ട്രത്തലവൻ:" },
      options: [
        { k: "A", text: { en: "A hereditary king", ml: "പരമ്പരാഗത രാജാവാണ്" } },
        { k: "B", text: { en: "An elected person", ml: "തിരഞ്ഞെടുക്കപ്പെട്ട വ്യക്തിയാണ്" } },
        { k: "C", text: { en: "A religious leader", ml: "മതനേതാവാണ്" } },
        { k: "D", text: { en: "The Prime Minister", ml: "പ്രധാനമന്ത്രിയാണ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Republic denotes that office of head of state is open to all citizens.", ml: "രാഷ്ട്രത്തലവൻ തിരഞ്ഞെടുപ്പിലൂടെ വരുന്ന രാജ്യങ്ങളെയാണ് റിപ്പബ്ലിക് എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "ps-c10-q9",
      type: "mcq",
      stem: { en: "The Indian model of liberalism is unique because it includes:", ml: "ഇന്ത്യൻ ലിബറലിസം സവിശേഷമാകാൻ കാരണം അത് ഏതിനെ കൂടി ഉൾക്കൊള്ളുന്നു എന്നതാണ്?" },
      options: [
        { k: "A", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } },
        { k: "B", text: { en: "Social Justice", ml: "സാമൂഹിക നീതി" } },
        { k: "C", text: { en: "No freedom", ml: "സ്വാതന്ത്ര്യം ഇല്ലായ്മ" } },
        { k: "D", text: { en: "Only individual rights", ml: "വ്യക്തിഗത അവകാശങ്ങൾ മാത്രം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "India balances individual liberty with the empowerment of groups.", ml: "വ്യക്തിസ്വാതന്ത്ര്യത്തോടൊപ്പം പിന്നോക്കക്കാരുടെ ഉന്നമനവും ഇതിൽ ലക്ഷ്യമിടുന്നു." }
    },
    {
      q_id: "ps-c10-q10",
      type: "mcq",
      stem: { en: "Universal Adult Franchise is based on the philosophy of:", ml: "സാർവ്വത്രിക പ്രായപൂർത്തി വോട്ടവകാശം ഏത് ദർശനത്തെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Wealth", ml: "സമ്പത്ത്" } },
        { k: "B", text: { en: "Education", ml: "വിദ്യാഭ്യാസം" } },
        { k: "C", text: { en: "Equality", ml: "സമത്വം" } },
        { k: "D", text: { en: "Religion", ml: "മതം" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "It ensures every citizen has equal value in choosing government.", ml: "എല്ലാവർക്കും തുല്യമായ രാഷ്ട്രീയ അധികാരം നൽകുക എന്നതാണ് ഇതിന്റെ ലക്ഷ്യം." }
    },
    {
      q_id: "ps-c10-q11",
      type: "mcq",
      stem: { en: "Which of the following describes the nature of Indian Federalism?", ml: "താഴെ പറയുന്നവയിൽ ഇന്ത്യൻ ഫെഡറലിസത്തിന്റെ സ്വഭാവം ഏത്?" },
      options: [
        { k: "A", text: { en: "Symmetric", ml: "സിമെട്രിക് (തുല്യമായത്)" } },
        { k: "B", text: { en: "Asymmetric", ml: "അസിമെട്രിക് (തുല്യമല്ലാത്തത്)" } },
        { k: "C", text: { en: "Non-existent", ml: "നിലവിലില്ല" } },
        { k: "D", text: { en: "Unitary only", ml: "ഏകീകൃത രൂപം മാത്രം" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Some states have special powers or status to accommodate diversity.", ml: "ചില സംസ്ഥാനങ്ങൾക്ക് പ്രത്യേക പദവികൾ ഉള്ളതുകൊണ്ട് ഇതിനെ അസിമെട്രിക് എന്ന് വിളിക്കുന്നു." }
    },
    {
      q_id: "ps-c10-q12",
      type: "mcq",
      stem: { en: "Who moved the 'Objectives Resolution' which laid the moral basis of the Constitution?", ml: "ഭരണഘടനയ്ക്ക് ധാർമ്മിക അടിത്തറയിട്ട 'ലക്ഷ്യപ്രമേയം' അവതരിപ്പിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" } },
        { k: "B", text: { en: "Dr. B.R. Ambedkar", ml: "ഡോ. ബി.ആർ. അംബേദ്കർ" } },
        { k: "C", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } },
        { k: "D", text: { en: "Sardar Patel", ml: "സർദാർ പട്ടേൽ" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Nehru moved it in December 1946.", ml: "1946 ഡിസംബറിലാണ് ജവഹർലാൽ നെഹ്‌റു ഇത് അവതരിപ്പിച്ചത്." }
    },
    {
      q_id: "ps-c10-q13",
      type: "mcq",
      stem: { en: "The Indian Constitution seeks to achieve 'Social Revolution'. What does it mean?", ml: "ഭരണഘടന 'സാമൂഹിക വിപ്ലവം' ലക്ഷ്യമിടുന്നു. ഇതിന്റെ അർത്ഥം എന്ത്?" },
      options: [
        { k: "A", text: { en: "Starting a war", ml: "യുദ്ധം തുടങ്ങൽ" } },
        { k: "B", text: { en: "Changing social structure to end inequalities", ml: "അസമത്വങ്ങൾ അവസാനിപ്പിക്കാൻ സാമൂഹിക ഘടനയിൽ മാറ്റം വരുത്തുക" } },
        { k: "C", text: { en: "Removing all laws", ml: "എല്ലാ നിയമങ്ങളും നീക്കം ചെയ്യുക" } },
        { k: "D", text: { en: "Copying other countries", ml: "മറ്റു രാജ്യങ്ങളെ അനുകരിക്കുക" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The aim is to improve the lives of marginalized sections through law.", ml: "ജാതി വ്യവസ്ഥയും മറ്റും അവസാനിപ്പിച്ച് പുതിയൊരു സമൂഹം കെട്ടിപ്പടുക്കുക എന്നതാണ് ലക്ഷ്യം." }
    },
    {
      q_id: "ps-c10-q14",
      type: "mcq",
      stem: { en: "Which term implies that India treats all religions with equal respect?", ml: "എല്ലാ മതങ്ങളെയും തുല്യമായി ബഹുമാനിക്കുന്നു എന്ന് വ്യക്തമാക്കുന്ന വാക്ക് ഏത്?" },
      options: [
        { k: "A", text: { en: "Democratic", ml: "ജനാധിപത്യം" } },
        { k: "B", text: { en: "Secular", ml: "മതേതരത്വം" } },
        { k: "C", text: { en: "Sovereign", ml: "പരമാധികാരം" } },
        { k: "D", text: { en: "Republic", ml: "റിപ്പബ്ലിക്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Secularism in India is based on the idea of sarva dharma sambhava.", ml: "ഇന്ത്യൻ മതേതരത്വം എല്ലാ മതങ്ങൾക്കും തുല്യ പരിഗണന നൽകുന്നു." }
    },
    {
      q_id: "ps-c10-q15",
      type: "mcq",
      stem: { en: "One procedural achievement of the Constitution makers was:", ml: "ഭരണഘടനാ ശില്പികളുടെ ഒരു നടപടിക്രമപരമായ നേട്ടം എന്തായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Use of force", ml: "ബലപ്രയോഗം" } },
        { k: "B", text: { en: "Deliberation and Discussion", ml: "വിശദമായ ചർച്ചകളും സംവാദങ്ങളും" } },
        { k: "C", text: { en: "Secret meetings", ml: "രഹസ്യ യോഗങ്ങൾ" } },
        { k: "D", text: { en: "Ignoring minorities", ml: "ന്യൂനപക്ഷങ്ങളെ അവഗണിച്ചത്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Every provision was discussed thoroughly to reach consensus.", ml: "ഏതു കാര്യവും സഭയിൽ പരസ്യമായി ചർച്ച ചെയ്താണ് തീരുമാനിച്ചത്." }
    },
    {
      q_id: "ps-c10-q16",
      type: "mcq",
      stem: { en: "Some critics say the Indian Constitution is 'alien'. Why?", ml: "ഭരണഘടന ഭാരതീയമല്ല എന്ന് ചിലർ വിമർശിക്കുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "It was written in English", ml: "അത് ഇംഗ്ലീഷിൽ എഴുതിയതുകൊണ്ട്" } },
        { k: "B", text: { en: "It borrowed many features from the West", ml: "അതിൽ പല കാര്യങ്ങളും പാശ്ചാത്യ രാജ്യങ്ങളിൽ നിന്ന് കടമെടുത്തതാണ്" } },
        { k: "C", text: { en: "It was written in 1950", ml: "അത് 1950-ൽ എഴുതിയതുകൊണ്ട്" } },
        { k: "D", text: { en: "It has too many pictures", ml: "അതിൽ ഒരുപാട് ചിത്രങ്ങൾ ഉള്ളതുകൊണ്ട്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Critics call it a 'patchwork' of various world constitutions.", ml: "മറ്റു രാജ്യങ്ങളുടെ ഭരണഘടനകളിൽ നിന്ന് കടമെടുത്തതുകൊണ്ട് ഇത്തരത്തിൽ വിമർശിക്കുന്നു." }
    },
    {
      q_id: "ps-c10-q17",
      type: "mcq",
      stem: { en: "Why did the makers provide community rights to minorities?", ml: "ന്യൂനപക്ഷങ്ങൾക്ക് എന്തിനാണ് കമ്മ്യൂണിറ്റി അവകാശങ്ങൾ നൽകിയത്?" },
      options: [
        { k: "A", text: { en: "To make them superior", ml: "അവരെ ഉന്നതരാക്കാൻ" } },
        { k: "B", text: { en: "To ensure they feel safe and preserve their culture", ml: "അവർക്ക് സുരക്ഷിതത്വം ഉറപ്പാക്കാനും സംസ്കാരം സംരക്ഷിക്കാനും" } },
        { k: "C", text: { en: "To divide the country", ml: "രാജ്യത്തെ വിഭജിക്കാൻ" } },
        { k: "D", text: { en: "To ignore the majority", ml: "ഭൂരിപക്ഷത്തെ അവഗണിക്കാൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Diversity requires protecting the distinct identities of smaller groups.", ml: "ന്യൂനപക്ഷങ്ങൾക്ക് ഭയം കൂടാതെ ജീവിക്കാൻ ഇത്തരം സംരക്ഷണങ്ങൾ ആവശ്യമാണ്." }
    },
    {
      q_id: "ps-c10-q18",
      type: "mcq",
      stem: { en: "The term 'Principled Distance' allows the state to:", ml: "'തത്വനിഷ്ഠമായ അകലം' ഭരണകൂടത്തെ എന്തിന് അനുവദിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Ban all religions", ml: "എല്ലാ മതങ്ങളും നിരോധിക്കാൻ" } },
        { k: "B", text: { en: "Interfere in religion for social reform", ml: "സാമൂഹിക പരിഷ്കരണത്തിനായി മതപരമായ കാര്യങ്ങളിൽ ഇടപെടാൻ" } },
        { k: "C", text: { en: "Kill religious leaders", ml: "മതനേതാക്കളെ കൊല്ലാൻ" } },
        { k: "D", text: { en: "Stay away even from crimes", ml: "കുറ്റകൃത്യങ്ങൾ നടന്നാലും മാറിനിൽക്കാൻ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "State can interfere to ensure equality (e.g., untouchability).", ml: "തെറ്റായ ആചാരങ്ങൾ മാറ്റാൻ ഭരണകൂടത്തിന് അധികാരമുണ്ടെന്നാണ് ഇതുകൊണ്ട് അർത്ഥമാക്കുന്നത്." }
    },
    {
      q_id: "ps-c10-q19",
      type: "mcq",
      stem: { en: "In Indian secularism, can the state help religious schools?", ml: "ഇന്ത്യൻ മതേതരത്വ പ്രകാരം വിദ്യാലയങ്ങൾക്ക് ഗവൺമെന്റ് സഹായം നൽകാമോ?" },
      options: [
        { k: "A", text: { en: "Yes, without discrimination", ml: "അതെ, വിവേചനമില്ലാതെ നൽകാം" } },
        { k: "B", text: { en: "No, strictly banned", ml: "ഇല്ല, കർശനമായി നിരോധിച്ചിരിക്കുന്നു" } },
        { k: "C", text: { en: "Only to Hindu schools", ml: "ഹിന്ദു സ്കൂളുകൾക്ക് മാത്രം" } },
        { k: "D", text: { en: "Only to majority", ml: "ഭൂരിപക്ഷത്തിന് മാത്രം" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Indian secularism is not hostile to religion and can provide support.", ml: "എല്ലാ മതവിഭാഗങ്ങൾക്കും തുല്യമായി സഹായം നൽകാൻ ഭരണഘടന അനുവദിക്കുന്നു." }
    },
    {
      q_id: "ps-c10-q20",
      type: "mcq",
      stem: { en: "What ensures that no single community dominates Indian politics?", ml: "ഏതെങ്കിലും ഒരു വിഭാഗം മാത്രം രാഷ്ട്രീയം ഭരിക്കുന്നത് തടയുന്നത് എന്താണ്?" },
      options: [
        { k: "A", text: { en: "The Police", ml: "പോലീസ്" } },
        { k: "B", text: { en: "Secularism and Equality", ml: "മതേതരത്വവും സമത്വവും" } },
        { k: "C", text: { en: "The Army", ml: "സൈന്യം" } },
        { k: "D", text: { en: "Rich people", ml: "സമ്പന്നർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Equal rights for all ensure broad representation.", ml: "എല്ലാവർക്കും തുല്യമായ അവസരങ്ങൾ നൽകുന്നത് ആധിപത്യം തടയുന്നു." }
    },
    {
      q_id: "ps-c10-q21",
      type: "mcq",
      stem: { en: "The Preamble starts with which words?", ml: "ഭരണഘടനയുടെ ആമുഖം തുടങ്ങുന്ന വാക്കുകൾ ഏവ?" },
      options: [
        { k: "A", text: { en: "We, the Leaders", ml: "ഞങ്ങൾ നേതാക്കൾ" } },
        { k: "B", text: { en: "We, the People of India", ml: "ഭാരതത്തിലെ ജനങ്ങളായ ഞങ്ങൾ" } },
        { k: "C", text: { en: "God save India", ml: "ദൈവം ഇന്ത്യയെ രക്ഷിക്കട്ടെ" } },
        { k: "D", text: { en: "Long live India", ml: "ഇന്ത്യ നീണാൾ വാഴട്ടെ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It shows that power comes from the people.", ml: "അധികാരം ജനങ്ങളിലാണെന്ന് ഇത് വ്യക്തമാക്കുന്നു." }
    },
    {
      q_id: "ps-c10-q22",
      type: "mcq",
      stem: { en: "Constitutional 'Accommodation' means:", ml: "ഭരണഘടനാപരമായ 'അക്കോമഡേഷൻ' (Accommodation) എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Staying in a hotel", ml: "താമസ സൗകര്യം" } },
        { k: "B", text: { en: "Balancing different viewpoints through compromise", ml: "വ്യത്യസ്ത അഭിപ്രായങ്ങളെ വിട്ടുവീഴ്ചയിലൂടെ കൂട്ടിയിണക്കൽ" } },
        { k: "C", text: { en: "Buying a house", ml: "വീട് വാങ്ങൽ" } },
        { k: "D", text: { en: "Ignoring differences", ml: "വ്യത്യാസങ്ങൾ അവഗണിക്കുന്നത്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It avoids 'either-or' logic and finds a middle path.", ml: "അഭിപ്രായ വ്യത്യാസങ്ങൾക്കിടയിൽ ഒരു മധ്യമാർഗ്ഗം കണ്ടെത്തലാണിത്." }
    },
    {
      q_id: "ps-c10-q23",
      type: "mcq",
      stem: { en: "Individualism in Indian Constitution is balanced with:", ml: "ഇന്ത്യൻ ഭരണഘടനയിലെ വ്യക്തിവാദം ഏതിലൂടെയാണ് സന്തുലിതമാക്കിയിരിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Communitarian values", ml: "സാമൂഹിക താൽപ്പര്യങ്ങൾ (Communitarian values)" } },
        { k: "B", text: { en: "Greed", ml: "അതിമോഹം" } },
        { k: "C", text: { en: "Selfishness", ml: "സ്വാർത്ഥത" } },
        { k: "D", text: { en: "No rights", ml: "അവകാശമില്ലായ്മ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Rights are for individuals as well as for cultural communities.", ml: "വ്യക്തിഗത അവകാശങ്ങൾക്കൊപ്പം സമൂഹത്തിന്റെ അവകാശങ്ങൾക്കും ഇവിടെ സ്ഥാനമുണ്ട്." }
    },
    {
      q_id: "ps-c10-q24",
      type: "mcq",
      stem: { en: "Is the Indian Constitution a static document?", ml: "ഇന്ത്യൻ ഭരണഘടന നിശ്ചലമായ ഒരു രേഖയാണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No, it is living", ml: "അല്ല, അത് ജീവസ്സുറ്റതാണ്" } },
        { k: "C", text: { en: "Only for leaders", ml: "നേതാക്കൾക്ക് മാത്രം" } },
        { k: "D", text: { en: "It was destroyed", ml: "അത് നശിപ്പിക്കപ്പെട്ടു" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It evolves through time via amendments.", ml: "കാലത്തിനനുസരിച്ച് അതിൽ മാറ്റങ്ങൾ വരുത്താൻ സാധിക്കും." }
    },
    {
      q_id: "ps-c10-q25",
      type: "mcq",
      stem: { en: "Constituent Assembly debates are important because they show:", ml: "ഭരണഘടനാ നിർമ്മാണ സഭയിലെ ചർച്ചകൾ പ്രധാനമാകുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "Who was more angry", ml: "ആർക്കായിരുന്നു കൂടുതൽ ദേഷ്യം എന്ന് കാട്ടുന്നു" } },
        { k: "B", text: { en: "The reason and logic behind each law", ml: "ഓരോ നിയമത്തിന് പിന്നിലെയും യുക്തിയും കാരണങ്ങളും കാട്ടുന്നു" } },
        { k: "C", text: { en: "What they ate", ml: "അവർ എന്ത് കഴിച്ചു എന്ന് കാട്ടുന്നു" } },
        { k: "D", text: { en: "Which city was the best", ml: "ഏത് നഗരമാണ് നല്ലതെന്ന് കാട്ടുന്നു" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Debates help us understand the intent of the framers.", ml: "ഭരണഘടനയുണ്ടാക്കിയവർ എന്ത് ചിന്തിച്ചാണ് ഓരോ വകുപ്പും നിർമ്മിച്ചത് എന്ന് ചർച്ചകളിൽ നിന്ന് മനസ്സിലാക്കാം." }
    },
    {
      q_id: "ps-c10-q26",
      type: "mcq",
      stem: { en: "Democracy in the Preamble refers to:", ml: "ആമുഖത്തിലെ 'ജനാധിപത്യം' എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Only voting", ml: "വോട്ട് ചെയ്യൽ മാത്രം" } },
        { k: "B", text: { en: "Social and economic democracy besides political", ml: "രാഷ്ട്രീയത്തിനൊപ്പം സാമൂഹിക-സാമ്പത്തിക ജനാധിപത്യം കൂടി" } },
        { k: "C", text: { en: "Rule of the rich", ml: "സമ്പന്നരുടെ ഭരണം" } },
        { k: "D", text: { en: "Military command", ml: "സൈനിക ഭരണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "True democracy means equality in all spheres of life.", ml: "ജീവിതത്തിന്റെ എല്ലാ മേഖലകളിലും തുല്യതയും പങ്കാളിത്തവും ഉറപ്പാക്കുന്നതാണ് ജനാധിപത്യം." }
    },
    {
      q_id: "ps-c10-q27",
      type: "mcq",
      stem: { en: "What protects citizens from absolute power of the government?", ml: "ഗവൺമെന്റ് അനിയന്ത്രിതമായ അധികാരം ഉപയോഗിക്കുന്നത് തടയുന്നത് എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Police", ml: "പോലീസ്" } },
        { k: "B", text: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" } },
        { k: "C", text: { en: "Taxes", ml: "നികുതികൾ" } },
        { k: "D", text: { en: "Foreign aid", ml: "വിദേശ സഹായം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Rights set a limit on what government can do to citizens.", ml: "പൗരന്മാരുടെ മേൽ ഗവൺമെന്റിന് ചെയ്യാവുന്ന കാര്യങ്ങൾക്ക് അവകാശങ്ങൾ ഒരു പരിധി നിശ്ചയിക്കുന്നു." }
    },
    {
      q_id: "ps-c10-q28",
      type: "mcq",
      stem: { en: "The 'slavish imitation' criticism means that India:", ml: "'അന്ധമായ അനുകരണം' എന്ന വിമർശനം കൊണ്ട് ഉദ്ദേശിക്കുന്നത് ഇന്ത്യ:" },
      options: [
        { k: "A", text: { en: "Invented new things", ml: "പുതിയ കാര്യങ്ങൾ കണ്ടുപിടിച്ചു" } },
        { k: "B", text: { en: "Blindly copied Western laws", ml: "പാശ്ചാത്യ നിയമങ്ങൾ അന്ധമായി പകർത്തി" } },
        { k: "C", text: { en: "Rejected all foreign ideas", ml: "വിദേശ ആശയങ്ങൾ തള്ളിക്കളഞ്ഞു" } },
        { k: "D", text: { en: "Has no written laws", ml: "എഴുതപ്പെട്ട നിയമങ്ങൾ ഇല്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Critics argued the constitution doesn't reflect Indian culture.", ml: "ഭാരതീയമായ ഒന്നുമില്ലാതെ മറ്റുള്ളവരെ നോക്കി എഴുതിയതാണ് ഭരണഘടന എന്ന് ചിലർ വാദിക്കുന്നു." }
    },
    {
      q_id: "ps-c10-q29",
      type: "mcq",
      stem: { en: "Which part of the Constitution is not legally enforceable but crucial for philosophy?", ml: "നിയമപരമായി നിർബന്ധിതമല്ലെങ്കിലും ദർശനത്തിന് പ്രധാനമായ ഭാഗം ഏത്?" },
      options: [
        { k: "A", text: { en: "Fundamental Rights", ml: "മൗലികാവകാശങ്ങൾ" } },
        { k: "B", text: { en: "Directive Principles (DPSP)", ml: "നിർദ്ദേശക തത്വങ്ങൾ" } },
        { k: "C", text: { en: "Article 21", ml: "ആർട്ടിക്കിൾ 21" } },
        { k: "D", text: { en: "Writs", ml: "റിട്ടുകൾ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "DPSP contains the welfare goals of the country.", ml: "സാമൂഹിക ക്ഷേമത്തിനായുള്ള ആദർശങ്ങൾ ഉൾക്കൊള്ളുന്ന ഭാഗമാണിത്." }
    },
    {
      q_id: "ps-c10-q30",
      type: "mcq",
      stem: { en: "The main goal of Indian secularism is:", ml: "ഇന്ത്യൻ മതേതരത്വത്തിന്റെ പ്രധാന ലക്ഷ്യം:" },
      options: [
        { k: "A", text: { en: "End religion", ml: "മതം അവസാനിപ്പിക്കുക" } },
        { k: "B", text: { en: "Peaceful coexistence of all religions", ml: "എല്ലാ മതങ്ങളുടെയും സമാധാനപരമായ സഹവർത്തിത്വം" } },
        { k: "C", text: { en: "Make everyone change religion", ml: "എല്ലാവരെയും മതപരിവർത്തനം ചെയ്യിക്കുക" } },
        { k: "D", text: { en: "Destroy minorities", ml: "ന്യൂനപക്ഷങ്ങളെ നശിപ്പിക്കുക" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It aims for religious harmony and non-discrimination.", ml: "മതങ്ങൾ തമ്മിലുള്ള ഐക്യവും വിവേചനമില്ലായ്മയുമാണ് ഇതിന്റെ കാതൽ." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit1: Lesson = {
  id: "pl-ps-11-p2-u1",
  title: { en: "Political Theory: An Introduction", ml: "രാഷ്ട്രീയ സിദ്ധാന്തം: ഒരു ആമുഖം (Political Theory: An Introduction)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=DcVGvt1Fxpk",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the broad meaning of politics", ml: "രാഷ്ട്രീയം എന്ന വാക്കിന്റെ വിപുലമായ അർത്ഥം മനസ്സിലാക്കുക" },
    { en: "Identify the core values explored in political theory", ml: "രാഷ്ട്രീയ സിദ്ധാന്തത്തിൽ ചർച്ച ചെയ്യുന്ന പ്രധാന മൂല്യങ്ങൾ തിരിച്ചറിയുക" },
    { en: "Analyze why political concepts are dynamic and context-dependent", ml: "രാഷ്ട്രീയ ആശയങ്ങൾ എന്തുകൊണ്ടാണ് ചലനാത്മകവും സന്ദർഭത്തിനനുസരിച്ചുള്ളതുമാകുന്നത് എന്ന് വിശകലനം ചെയ്യുക" },
    { en: "Explain the importance of studying political theory for citizens", ml: "രാഷ്ട്രീയ സിദ്ധാന്തം പഠിക്കുന്നതിന്റെ പ്രാധാന്യം വിശദീകരിക്കുക" }
  ],
  content: {
    intro: { 
      en: "This chapter introduces the field of Political Theory, its values, and its relevance in understanding our social and political institutions.", 
      ml: "രാഷ്ട്രീയ സിദ്ധാന്തം എന്ന മേഖലയെയും അതിന്റെ മൂല്യങ്ങളെയും നമ്മുടെ സാമൂഹിക-രാഷ്ട്രീയ സ്ഥാപനങ്ങളെ മനസ്സിലാക്കുന്നതിൽ അതിനുള്ള പങ്കിനെയും ഈ അധ്യായം പരിചയപ്പെടുത്തുന്നു." 
    },
    core: { 
      en: "A study of politics beyond party competition, the nature of political concepts, and the significance of political theory for students.", 
      ml: "കക്ഷി രാഷ്ട്രീയത്തിനപ്പുറമുള്ള രാഷ്ട്രീയം, രാഷ്ട്രീയ ആശയങ്ങളുടെ സ്വഭാവം, വിദ്യാർത്ഥികൾക്ക് രാഷ്ട്രീയ സിദ്ധാന്തം പഠിക്കുന്നതിലുള്ള പ്രാധാന്യം എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter introduces the field of Political Theory. It explains what politics is beyond party competitions, the values that form the basis of political life (like freedom, equality, and justice), and why it is important for students to study political theory. It also clarifies how political theory helps us understand the systematic thinking behind our social and political institutions.', ml: 'രാഷ്ട്രീയ സിദ്ധാന്തം (Political Theory) എന്ന മേഖലയെ ഈ അധ്യായം പരിചയപ്പെടുത്തുന്നു. കേവലം കക്ഷിരാഷ്ട്രീയ മത്സരങ്ങൾക്കപ്പുറം എന്താണ് രാഷ്ട്രീയം എന്നും, രാഷ്ട്രീയ ജീവിതത്തിന്റെ അടിസ്ഥാനമായ മൂല്യങ്ങൾ (സ്വാതന്ത്ര്യം, സമത്വം, നീതി തുടങ്ങിയവ) ഏതെല്ലാമാണെന്നും ഇത് വിശദീകരിക്കുന്നു. വിദ്യാർത്ഥികൾ എന്തുകൊണ്ട് രാഷ്ട്രീയ സിദ്ധാന്തം പഠിക്കണം എന്നതും നമ്മുടെ സാമൂഹിക-രാഷ്ട്രീയ സ്ഥാപനങ്ങൾക്ക് പിന്നിലെ ചിന്താപരമായ അടിത്തറ മനസ്സിലാക്കാൻ ഇത് എങ്ങനെ സഹായിക്കുന്നു എന്നും ഇവിടെ ചർച്ച ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Political Theory', ml: 'രാഷ്ട്രീയ സിദ്ധാന്തം (Political Theory)'}, {en: 'Study of ideas and values like freedom and justice that shape political institutions.', ml: 'രാഷ്ട്രീയ സ്ഥാപനങ്ങളെയും രീതികളെയും രൂപപ്പെടുത്തുന്ന സ്വാതന്ത്ര്യം, നീതി തുടങ്ങിയ ആശയങ്ങളെക്കുറിച്ചുള്ള പഠനം.'}, {en: 'Analyzing the meaning of "Equality".', ml: 'സമത്വത്തിന്റെ അർത്ഥം വിശകലനം ചെയ്യൽ.'}],
          [{en: 'Politics', ml: 'രാഷ്ട്രീയം (Politics)'}, {en: 'Activity involving the pursuit of collective goals and resolving conflicts.', ml: 'പൊതുവായ ലക്ഷ്യങ്ങൾ നേടുന്നതിനും തർക്കങ്ങൾ പരിഹരിക്കുന്നതിനുമുള്ള പ്രവർത്തനം.'}, {en: 'Public debates on policies.', ml: 'നയങ്ങളെക്കുറിച്ചുള്ള പൊതു ചർച്ചകൾ.'}],
          [{en: 'Justice', ml: 'നീതി (Justice)'}, {en: 'Principle that people receive what they deserve, linked to fairness.', ml: 'അർഹമായത് ലഭിക്കുന്നു എന്ന് ഉറപ്പാക്കുന്ന തത്വം.'}, {en: 'Fair wages for workers.', ml: 'തൊഴിലാളികൾക്ക് ന്യായമായ വേതനം നൽകൽ.'}],
          [{en: 'Ideology', ml: 'പ്രത്യയശാസ്ത്രം (Ideology)'}, {en: 'A system of ideas that forms the basis of political theory.', ml: 'രാഷ്ട്രീയ നയങ്ങൾക്കും പ്രവർത്തനങ്ങൾക്കും അടിസ്ഥാനമാകുന്ന ആശയങ്ങളുടെ സമാഹാരം.'}, {en: 'Liberalism, Socialism.', ml: 'ലിബറലിസം, സോഷ്യലിസം.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is Politics?', ml: '3.1 എന്താണ് രാഷ്ട്രീയം? (What is Politics?)' },
      { type: 'ul', items: [
        { en: 'Commonly associated with politicians and elections, but politics is much broader.', ml: 'സാധാരണയായി രാഷ്ട്രീയക്കാരും തിരഞ്ഞെടുപ്പുമായി ബന്ധപ്പെടുത്തിയാണ് ഇതിനെ കാണുന്നത്, എന്നാൽ രാഷ്ട്രീയം അതിനേക്കാൾ വിപുലമാണ്.' },
        { en: 'It is an essential part of any society where people live together.', ml: 'മനുഷ്യർ ഒരുമിച്ച് ജീവിക്കുന്ന ഏതൊരു സമൂഹത്തിലും രാഷ്ട്രീയം ഒഴിച്ചുകൂടാനാവാത്ത ഭാഗമാണ്.' },
        { en: 'Politics arises because we have different visions of what is "just" and "desirable".', ml: 'സമൂഹത്തിന് എന്താണ് നല്ലത് എന്നതിനെക്കുറിച്ച് നമുക്ക് വ്യത്യസ്തമായ അഭിപ്രായങ്ങൾ ഉള്ളതുകൊണ്ടാണ് രാഷ്ട്രീയം ഉണ്ടാകുന്നത്.' },
        { en: 'It involves negotiation and cooperation to achieve common goals.', ml: 'പൊതുവായ ലക്ഷ്യങ്ങൾ കൈവരിക്കുന്നതിനായി ചർച്ചകളിലും സഹകരണത്തിലും ഏർപ്പെടുന്നത് ഇതിന്റെ ഭാഗമാണ്.' }
      ]},

      { type: 'h3', en: '3.2 What do we study in Political Theory?', ml: '3.2 രാഷ്ട്രീയ സിദ്ധാന്തത്തിൽ നമ്മൾ എന്താണ് പഠിക്കുന്നത്?' },
      { type: 'ul', items: [
        { en: 'Values: Meaning of Freedom, Equality, Justice, Secularism, and Democracy.', ml: 'മൂല്യങ്ങൾ: സ്വാതന്ത്ര്യം, സമത്വം, നീതി, മതേതരത്വം, ജനാധിപത്യം എന്നിവയുടെ അർത്ഥം.' },
        { en: 'Institutions: Examining if bodies like Parliament fulfill these values.', ml: 'സ്ഥാപനങ്ങൾ: പാർലമെന്റും കോടതികളും ഈ മൂല്യങ്ങൾ നടപ്പിലാക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കുന്നു.' },
        { en: 'Clarity: Aims to clarify concepts like equal opportunity vs equal outcomes.', ml: 'വ്യക്തത: അവസര സമത്വമാണോ അതോ ഫലത്തിലുള്ള സമത്വമാണോ വേണ്ടത് എന്നതിനെക്കുറിച്ച് കൂടുതൽ വ്യക്തത നൽകുന്നു.' }
      ]},

      { type: 'h3', en: '3.3 Are Political Concepts Static?', ml: '3.3 രാഷ്ട്രീയ ആശയങ്ങൾ മാറ്റമില്ലാത്തതാണോ?' },
      { type: 'ul', items: [
        { en: 'No. Unlike physics, the meaning of political terms changes over time and context.', ml: 'അല്ല. ഭൗതികശാസ്ത്രത്തിലെ നിയമങ്ങൾ പോലെ രാഷ്ട്രീയ ആശയങ്ങൾ സ്ഥിരമല്ല; അവ സന്ദർഭത്തിനനുസരിച്ച് മാറുന്നു.' },
        { en: 'Example (Equality): In a queue, it means first-come-first-served. In a hospital, it means prioritizing the most critical patient.', ml: 'ഉദാഹരണം (സമത്വം): കടയിലെ വരിയിൽ അത് "ആദ്യം വരുന്നവർക്ക് ആദ്യം" എന്നാണ്. എന്നാൽ ആശുപത്രിയിൽ അത് "അടിയന്തര ചികിത്സ വേണ്ടവർക്ക് മുൻഗണന" എന്നാണ്.' }
      ]},

      { type: 'h3', en: '3.4 Why should we study Political Theory?', ml: '3.4 നമ്മൾ എന്തിന് രാഷ്ട്രീയ സിദ്ധാന്തം പഠിക്കണം?' },
      { type: 'ul', items: [
        { en: 'For Citizenship: Makes us informed citizens who can participate in debates.', ml: 'പൗരബോധത്തിന്: ചർച്ചകളിൽ യുക്തിസഹമായി പങ്കെടുക്കാൻ കഴിയുന്ന അറിവുള്ള പൗരന്മാരാക്കി നമ്മെ മാറ്റുന്നു.' },
        { en: 'Clarifying Ideas: Helps us think systematically about values.', ml: 'ആശയങ്ങൾ വ്യക്തമാക്കാൻ: മൂല്യങ്ങളെക്കുറിച്ച് ചിട്ടയോടെ ചിന്തിക്കാൻ സഹായിക്കുന്നു.' },
        { en: 'Encouraging Tolerance: Understanding different viewpoints makes us more tolerant.', ml: 'സഹിഷ്ണുത വളർത്താൻ: മറ്റുള്ളവരുടെ അഭിപ്രായങ്ങളെ ബഹുമാനിക്കാൻ പഠിപ്പിക്കുന്നു.' },
        { en: 'Real Life: Helps analyze issues like discrimination or lack of freedom.', ml: 'ദൈനംദിന ജീവിതം: വിവേചനം, സ്വാതന്ത്ര്യമില്ലായ്മ തുടങ്ങിയ വിഷയങ്ങളെ വിശകലനം ചെയ്യാൻ സഹായിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Politics is a medium for social change, not just a "dirty game".', ml: 'രാഷ്ട്രീയം കേവലം ഒരു "വൃത്തികെട്ട കളി"യല്ല, മറിച്ച് സാമൂഹിക മാറ്റത്തിനുള്ള ഒരു ഉപാധിയാണ്.' },
        { en: 'Political theory is a continuing dialogue between different views.', ml: 'വ്യത്യസ്ത കാഴ്ചപ്പാടുകൾ തമ്മിലുള്ള തുടർച്ചയായ സംവാദമാണ് രാഷ്ട്രീയ സിദ്ധാന്തം.' },
        { en: 'It provides tools to analyze and hold the government accountable.', ml: 'ഗവൺമെന്റിനെ ചോദ്യം ചെയ്യാനും വിശകലനം ചെയ്യാനും ഇത് നമുക്ക് കരുത്ത് നൽകുന്നു.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Politics is about pursuing common goals and managing conflicts.', ml: 'പൊതു ലക്ഷ്യങ്ങൾ നേടുന്നതിനും തർക്കങ്ങൾ പരിഹരിക്കുന്നതിനുമാണ് രാഷ്ട്രീയം.' },
        { en: 'Studying political theory creates rational and tolerant citizens.', ml: 'യുക്തിസഹമായി ചിന്തിക്കുന്ന സഹിഷ്ണുതയുള്ള പൗരന്മാരെ ഇത് സൃഷ്ടിക്കുന്നു.' },
        { en: 'Concepts like equality depend on the context.', ml: 'സമത്വം പോലുള്ള ആശയങ്ങൾ ഓരോ സാഹചര്യത്തിനനുസരിച്ച് മാറിക്കൊണ്ടിരിക്കും.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Politics",
      "ml": "രാഷ്ട്രീയം (Politics)"
    },
    "definition": {
      "en": "The process of making collective decisions to find solutions to common problems in a society and promote development.",
      "ml": "ഒരു സമൂഹത്തിന്റെ പൊതുവായ പ്രശ്നങ്ങൾക്ക് പരിഹാരം കണ്ടെത്താനും വികസനം പ്രോത്സാഹിപ്പിക്കാനും വേണ്ടിയുള്ള കൂട്ടായ തീരുമാനങ്ങൾ എടുക്കുന്ന പ്രക്രിയ."
    }
  },
  {
    "term": {
      "en": "Political Theory",
      "ml": "രാഷ്ട്രീയ സിദ്ധാന്തം (Political Theory)"
    },
    "definition": {
      "en": "A branch that systematically studies the meaning and significance of political ideas like freedom, equality, and justice.",
      "ml": "സ്വാതന്ത്ര്യം, സമത്വം, നീതി തുടങ്ങിയ രാഷ്ട്രീയ ആശയങ്ങളുടെ അർത്ഥവും പ്രാധാന്യവും ചിട്ടയായി പഠിക്കുന്ന ശാഖ."
    }
  },
  {
    "term": {
      "en": "Socrates",
      "ml": "സോക്രട്ടീസ് (Socrates)"
    },
    "definition": {
      "en": "An ancient Greek philosopher who rationally questioned the beliefs and notions of justice in society.",
      "ml": "സമൂഹത്തിലെ വിശ്വാസങ്ങളെയും നീതിയെക്കുറിച്ചുള്ള ധാരണകളെയും യുക്തിയുക്തമായി ചോദ്യം ചെയ്ത പുരാതന ഗ്രീക്ക് തത്വചിന്തകൻ."
    }
  },
  {
    "term": {
      "en": "Plato",
      "ml": "പ്ലേറ്റോ (Plato)"
    },
    "definition": {
      "en": "A student of Socrates who sought the meaning of justice through the book 'The Republic'.",
      "ml": "സോക്രട്ടീസിന്റെ ശിഷ്യനും, 'ദ റിപ്പബ്ലിക്' എന്ന പുസ്തകത്തിലൂടെ നീതിയുടെ അർത്ഥം അന്വേഷിച്ച വ്യക്തിയും."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c1-q1",
      type: "mcq",
      stem: { en: "What is the primary focus of Political Theory?", ml: "രാഷ്ട്രീയ സിദ്ധാന്തത്തിന്റെ പ്രാഥമികമായ ലക്ഷ്യം എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Winning elections", ml: "തിരഞ്ഞെടുപ്പിൽ വിജയിക്കൽ" } },
        { k: "B", text: { en: "Study of values like freedom and equality", ml: "സ്വാതന്ത്ര്യം, സമത്വം തുടങ്ങിയ മൂല്യങ്ങളെക്കുറിച്ചുള്ള പഠനം" } },
        { k: "C", text: { en: "Increasing police power", ml: "പോലീസ് അധികാരം വർദ്ധിപ്പിക്കൽ" } },
        { k: "D", text: { en: "Collection of taxes", ml: "നികുതി പിരിക്കൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Political theory clarifies the meaning of foundational ideas.", ml: "നമ്മുടെ സാമൂഹിക ജീവിതത്തിന്റെ അടിസ്ഥാനമായ ആശയങ്ങളെ വിശകലനം ചെയ്യുകയാണ് ഇത് ചെയ്യുന്നത്." }
    },
    {
      q_id: "ps-p2c1-q2",
      type: "mcq",
      stem: { en: "Politics is much broader than just elections because it involves:", ml: "തിരഞ്ഞെടുപ്പിനേക്കാൾ വിപുലമാണ് രാഷ്ട്രീയം എന്ന് പറയാൻ കാരണം അത് ഏതുമായി ബന്ധപ്പെട്ടതാണ്?" },
      options: [
        { k: "A", text: { en: "Collective goals and resolving conflicts", ml: "പൊതുവായ ലക്ഷ്യങ്ങളും തർക്കങ്ങൾ പരിഹരിക്കലും" } },
        { k: "B", text: { en: "Only individual profit", ml: "വ്യക്തിപരമായ ലാഭം മാത്രം" } },
        { k: "C", text: { en: "Watching movies", ml: "സിനിമ കാണൽ" } },
        { k: "D", text: { en: "Buying goods", ml: "സാധനങ്ങൾ വാങ്ങൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Politics is about how societies make decisions collectively.", ml: "സമൂഹം എങ്ങനെയാണ് തീരുമാനങ്ങൾ എടുക്കുന്നത് എന്നും പ്രശ്നങ്ങൾ പരിഹരിക്കുന്നത് എന്നും ഇതിൽ ഉൾപ്പെടുന്നു." }
    },
    {
      q_id: "ps-p2c1-q3",
      type: "mcq",
      stem: { en: "Why are political concepts like 'Equality' called dynamic?", ml: "സമത്വം പോലുള്ള രാഷ്ട്രീയ ആശയങ്ങളെ എന്തുകൊണ്ടാണ് 'ചലനാത്മകം' (Dynamic) എന്ന് വിളിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Because they never change", ml: "അവ ഒരിക്കലും മാറാത്തതുകൊണ്ട്" } },
        { k: "B", text: { en: "Because their meaning depends on context", ml: "അവയുടെ അർത്ഥം സന്ദർഭത്തിനനുസരിച്ച് മാറുന്നതുകൊണ്ട്" } },
        { k: "C", text: { en: "Because they are mathematical", ml: "അവ ഗണിതപരമായതുകൊണ്ട്" } },
        { k: "D", text: { en: "Because only politicians use them", ml: "രാഷ്ട്രീയക്കാർ മാത്രം ഉപയോഗിക്കുന്നതുകൊണ്ട്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Context like a hospital vs a queue changes what equality means.", ml: "സാഹചര്യങ്ങൾ മാറുന്നതിനനുസരിച്ച് ഈ ആശയങ്ങൾ പുതിയ അർത്ഥങ്ങൾ കൈവരിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c1-q4",
      type: "mcq",
      stem: { en: "Who among these were early thinkers of political ideas?", ml: "താഴെ പറയുന്നവരിൽ രാഷ്ട്രീയ ചിന്തകരായിരുന്നവർ ആരെല്ലാം?" },
      options: [
        { k: "A", text: { en: "Socrates and Plato", ml: "സോക്രട്ടീസും പ്ലേറ്റോയും" } },
        { k: "B", text: { en: "Isaac Newton", ml: "ഐസക് ന്യൂട്ടൺ" } },
        { k: "C", text: { en: "William Shakespeare", ml: "വില്യം ഷേക്സ്പിയർ" } },
        { k: "D", text: { en: "Christopher Columbus", ml: "ക്രിസ്റ്റഫർ കൊളംബസ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Greek philosophers like Socrates and Plato explored justice and democracy.", ml: "പുരാതന ഗ്രീസിലെ സോക്രട്ടീസും പ്ലേറ്റോയും നീതിയെക്കുറിച്ചും ജനാധിപത്യത്തെക്കുറിച്ചും ഗൗരവകരമായി ചിന്തിച്ചവരാണ്." }
    },
    {
      q_id: "ps-p2c1-q5",
      type: "mcq",
      stem: { en: "Studying political theory helps in encouraging:", ml: "രാഷ്ട്രീയ സിദ്ധാന്തം പഠിക്കുന്നത് എന്ത് വളർത്താൻ സഹായിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Violence", ml: "അക്രമം" } },
        { k: "B", text: { en: "Tolerance and rational thinking", ml: "സഹിഷ്ണുതയും യുക്തിചിന്തയും" } },
        { k: "C", text: { en: "Corruption", ml: "അഴിമതി" } },
        { k: "D", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Understanding different views makes us respect others' opinions.", ml: "മറ്റുള്ളവരുടെ കാഴ്ചപ്പാടുകൾ മനസ്സിലാക്കുന്നത് സഹിഷ്ണുത വർദ്ധിപ്പിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c1-q6",
      type: "mcq",
      stem: { en: "In a hospital, equality means giving priority to:", ml: "ഒരു ആശുപത്രിയിൽ സമത്വം എന്നാൽ ആർക്ക് മുൻഗണന നൽകുന്നതാണ്?" },
      options: [
        { k: "A", text: { en: "The richest person", ml: "ഏറ്റവും സമ്പന്നന്" } },
        { k: "B", text: { en: "The person who came first", ml: "ആദ്യം വന്ന ആൾക്ക്" } },
        { k: "C", text: { en: "The most critical patient", ml: "ഏറ്റവും ഗുരുതരാവസ്ഥയിലുള്ള രോഗിക്ക്" } },
        { k: "D", text: { en: "The doctor's friend", ml: "ഡോക്ടറുടെ സുഹൃത്തിന്" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "This shows that equality is not always first-come-first-served.", ml: "അവശ്യഘട്ടങ്ങളിൽ അർഹതയുള്ളവർക്ക് മുൻഗണന നൽകുന്നത് നീതിയുടെ ഭാഗമാണ്." }
    },
    {
      q_id: "ps-p2c1-q7",
      type: "mcq",
      stem: { en: "What is meant by 'Locus Standi' in traditional legal terms?", ml: "നീതിന്യായ രംഗത്തെ 'ലോകസ് സ്റ്റാൻഡി' എന്നതുകൊണ്ട് അർത്ഥമാക്കുന്നത് എന്ത്?" },
      options: [
        { k: "A", text: { en: "Right to vote", ml: "വോട്ട് ചെയ്യാനുള്ള അവകാശം" } },
        { k: "B", text: { en: "Right of an affected person to approach the court", ml: "ബാധിക്കപ്പെട്ട വ്യക്തിക്ക് മാത്രം കോടതിയെ സമീപിക്കാനുള്ള അവകാശം" } },
        { k: "C", text: { en: "Police authority to search", ml: "പരിശോധന നടത്താനുള്ള പോലീസിന്റെ അധികാരം" } },
        { k: "D", text: { en: "Right to travel", ml: "യാത്ര ചെയ്യാനുള്ള അവകാശം" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "PIL changed this traditional rule.", ml: "നേരത്തെ പരാതിക്കാരന് മാത്രമേ കോടതിയിൽ വരാൻ കഴിയുമായിരുന്നുള്ളൂ, എന്നാൽ PIL ഇത് മാറ്റിമറിച്ചു." }
    },
    {
      q_id: "ps-p2c1-q8",
      type: "mcq",
      stem: { en: "Political theory aims to bridge the gap between ideals and:", ml: "ആദർശങ്ങളും ഏതും തമ്മിലുള്ള അകലം കുറയ്ക്കാനാണ് രാഷ്ട്രീയ സിദ്ധാന്തം ശ്രമിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Dreams", ml: "സ്വപ്നങ്ങൾ" } },
        { k: "B", text: { en: "Reality", ml: "യാഥാർത്ഥ്യം" } },
        { k: "C", text: { en: "Space", ml: "ബഹിരാകാശം" } },
        { k: "D", text: { en: "Movies", ml: "സിനിമ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It looks at how values like freedom are actually practiced in real life.", ml: "ആദർശങ്ങൾ ജീവിതത്തിൽ എത്രത്തോളം നടപ്പിലാകുന്നു എന്ന് ഇത് പരിശോധിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c1-q9",
      type: "mcq",
      stem: { en: "A person who thinks systematically about political values is called a:", ml: "രാഷ്ട്രീയ മൂല്യങ്ങളെക്കുറിച്ച് ചിട്ടയോടെ ചിന്തിക്കുന്ന ആളെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Politician", ml: "രാഷ്ട്രീയക്കാരൻ" } },
        { k: "B", text: { en: "Political Theorist", ml: "രാഷ്ട്രീയ സിദ്ധാന്തകൻ" } },
        { k: "C", text: { en: "Bureaucrat", ml: "ഉദ്യോഗസ്ഥൻ" } },
        { k: "D", text: { en: "Athlete", ml: "കായികതാരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Political theorists analyze ideas and structures scientifically.", ml: "രാഷ്ട്രീയ ആശയങ്ങളെ ശാസ്ത്രീയമായി വിശകലനം ചെയ്യുന്നവരാണിവർ." }
    },
    {
      q_id: "ps-p2c1-q10",
      type: "mcq",
      stem: { en: "Politics is inseparable from society because we have different ideas about:", ml: "രാഷ്ട്രീയത്തെ സമൂഹത്തിൽ നിന്ന് മാറ്റാൻ കഴിയില്ല എന്ന് പറയാൻ കാരണം നമുക്ക് ഏതിനെക്കുറിച്ച് വ്യത്യസ്തമായ അഭിപ്രായങ്ങൾ ഉണ്ട് എന്നതാണ്?" },
      options: [
        { k: "A", text: { en: "The weather", ml: "കാലാവസ്ഥ" } },
        { k: "B", text: { en: "What is just and desirable", ml: "നീതിയും അഭിലഷണീയമായ കാര്യങ്ങളും" } },
        { k: "C", text: { en: "Food tastes", ml: "ഭക്ഷണ താല്പര്യങ്ങൾ" } },
        { k: "D", text: { en: "Clothing styles", ml: "വസ്ത്ര രീതികൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Different visions of a good society lead to political engagement.", ml: "സമൂഹം എങ്ങനെയായിരിക്കണം എന്നതിനെക്കുറിച്ചുള്ള വിഭിന്നമായ ചിന്തകളാണ് രാഷ്ട്രീയത്തിലേക്ക് നയിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c1-q11",
      type: "mcq",
      stem: { en: "Does political theory provide one final answer to every problem?", ml: "രാഷ്ട്രീയ സിദ്ധാന്തം ഓരോ പ്രശ്നത്തിനും അവസാന വാക്കായി ഒരു ഉത്തരം നൽകുന്നുണ്ടോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No, it encourages dialogue", ml: "അല്ല, അത് ചർച്ചകളെ പ്രോത്സാഹിപ്പിക്കുന്നു" } },
        { k: "C", text: { en: "Only for rich people", ml: "സമ്പന്നർക്ക് മാത്രം നൽകുന്നു" } },
        { k: "D", text: { en: "Only in books", ml: "പുസ്തകങ്ങളിൽ മാത്രം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Political theory is a continuing conversation about values.", ml: "ഒരു അന്തിമ ഉത്തരം നൽകുന്നതിന് പകരം സംവാദങ്ങളിലൂടെ ആശയങ്ങൾ വ്യക്തമാക്കുകയാണ് ഇത് ചെയ്യുന്നത്." }
    },
    {
      q_id: "ps-p2c1-q12",
      type: "mcq",
      stem: { en: "Which of the following is a multi-faceted activity?", ml: "താഴെ പറയുന്നവയിൽ ബഹുമുഖമായ പ്രവർത്തനം (Multi-faceted activity) ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Sleeping", ml: "ഉറക്കം" } },
        { k: "B", text: { en: "Politics", ml: "രാഷ്ട്രീയം" } },
        { k: "C", text: { en: "Counting stars", ml: "നക്ഷത്രങ്ങളെ എണ്ണൽ" } },
        { k: "D", text: { en: "Walking", ml: "നടത്തം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Politics involves many layers from individual beliefs to state decisions.", ml: "വ്യക്തിപരമായ വിശ്വാസങ്ങൾ മുതൽ ഭരണകൂട തീരുമാനങ്ങൾ വരെ നീളുന്ന ഒന്നാണിത്." }
    },
    {
      q_id: "ps-p2c1-q13",
      type: "mcq",
      stem: { en: "Why is political theory important for students?", ml: "വിദ്യാർത്ഥികൾക്ക് രാഷ്ട്രീയ സിദ്ധാന്തം പഠിക്കുന്നത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "To get a government job only", ml: "സർക്കാർ ജോലി കിട്ടാൻ മാത്രം" } },
        { k: "B", text: { en: "To become informed and rational citizens", ml: "അറിവുള്ളവരും യുക്തിയോടെ ചിന്തിക്കുന്നവരുമായ പൗരന്മാരാകാൻ" } },
        { k: "C", text: { en: "To learn how to lie", ml: "അസത്യം പറയാൻ പഠിക്കാൻ" } },
        { k: "D", text: { en: "To avoid politics", ml: "രാഷ്ട്രീയം ഒഴിവാക്കാൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It equips future citizens with the power of reason.", ml: "ഭാവിയിലെ പൗരന്മാരായ വിദ്യാർത്ഥികൾക്ക് സമൂഹത്തെക്കുറിച്ച് കൃത്യമായി ചിന്തിക്കാൻ ഇത് സഹായിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c1-q14",
      type: "mcq",
      stem: { en: "Political theory examines whether political institutions are:", ml: "രാഷ്ട്രീയ സ്ഥാപനങ്ങൾ എങ്ങനെയുള്ളവയാണെന്നാണ് രാഷ്ട്രീയ സിദ്ധാന്തം പരിശോധിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Fulfilling basic values", ml: "അടിസ്ഥാന മൂല്യങ്ങൾ നടപ്പിലാക്കുന്നുണ്ടോ എന്ന്" } },
        { k: "B", text: { en: "Building huge walls", ml: "വലിയ മതിലുകൾ പണിയുന്നുണ്ടോ എന്ന്" } },
        { k: "C", text: { en: "Ignoring the constitution", ml: "ഭരണഘടനയെ അവഗണിക്കുന്നുണ്ടോ എന്ന്" } },
        { k: "D", text: { en: "Only for leaders", ml: "നേതാക്കൾക്ക് വേണ്ടിയാണോ എന്ന്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It tests institutions against ideals like justice and freedom.", ml: "സ്വാതന്ത്ര്യം, നീതി തുടങ്ങിയ ആശയങ്ങൾ സ്ഥാപനങ്ങൾ പാലിക്കുന്നുണ്ടോ എന്ന് ഇത് നോക്കുന്നു." }
    },
    {
      q_id: "ps-p2c1-q15",
      type: "mcq",
      stem: { en: "The systematic thinking in political theory is similar to:", ml: "രാഷ്ട്രീയ സിദ്ധാന്തത്തിലെ ചിട്ടയായ ചിന്ത ഏതിനോട് സാമ്യമുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Scientific investigation", ml: "ശാസ്ത്രീയമായ അന്വേഷണം" } },
        { k: "B", text: { en: "Fortune telling", ml: "പ്രവചനം" } },
        { k: "C", text: { en: "Day dreaming", ml: "ദിവാസ്വപ്നം" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It uses logic and reason like a science.", ml: "ശാസ്ത്രത്തിലേതുപോലെ യുക്തിയും കാരണങ്ങളും ഇതിൽ പ്രധാനമാണ്." }
    },
    {
      q_id: "ps-p2c1-q16",
      type: "mcq",
      stem: { en: "Which thinker wrote 'The Republic'?", ml: "'ദ റിപ്പബ്ലിക്' (The Republic) എന്ന പുസ്തകം എഴുതിയത് ആര്?" },
      options: [
        { k: "A", text: { en: "Aristotle", ml: "അരിസ്റ്റോട്ടിൽ" } },
        { k: "B", text: { en: "Plato", ml: "പ്ലേറ്റോ" } },
        { k: "C", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "D", text: { en: "Rousseau", ml: "റൂസ്സോ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Plato's Republic is a foundational work in political theory.", ml: "നീതിയെക്കുറിച്ചും മാതൃകാപരമായ ഭരണകൂടത്തെക്കുറിച്ചും പ്ലേറ്റോ ഈ പുസ്തകത്തിൽ വിവരിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c1-q17",
      type: "mcq",
      stem: { en: "Politics involves resolve of disputes through:", ml: "തർക്കങ്ങൾ പരിഹരിക്കാൻ രാഷ്ട്രീയം എന്തിനെയാണ് ഉപയോഗിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Negotiation and Compromise", ml: "ചർച്ചകളും വിട്ടുവീഴ്ചകളും" } },
        { k: "B", text: { en: "War only", ml: "യുദ്ധം മാത്രം" } },
        { k: "C", text: { en: "Ignoring them", ml: "അവഗണിക്കൽ" } },
        { k: "D", text: { en: "Giving up rights", ml: "അവകാശങ്ങൾ ഉപേക്ഷിക്കൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Democracy uses peaceful means like dialogue.", ml: "ജനാധിപത്യപരമായ രാഷ്ട്രീയം സംവാദങ്ങളിലൂടെയാണ് പരിഹാരം കാണുന്നത്." }
    },
    {
      q_id: "ps-p2c1-q18",
      type: "mcq",
      stem: { en: "The term 'Politics' is derived from the Greek word:", ml: "'പൊളിറ്റിക്സ്' (Politics) എന്ന വാക്ക് ഏത് ഗ്രീക്ക് വാക്കിൽ നിന്നാണ് ഉണ്ടായത്?" },
      options: [
        { k: "A", text: { en: "Polis", ml: "പോളിസ് (Polis)" } },
        { k: "B", text: { en: "Police", ml: "പോലീസ്" } },
        { k: "C", text: { en: "Policy", ml: "പോളിസി" } },
        { k: "D", text: { en: "Power", ml: "പവർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "'Polis' means city-state.", ml: "'പോളിസ്' എന്നാൽ നഗരരാഷ്ട്രം എന്നാണ് അർത്ഥം." }
    },
    {
      q_id: "ps-p2c1-q19",
      type: "mcq",
      stem: { en: "A well-informed citizen is essential for:", ml: "അറിവുള്ള പൗരന്മാർ ഏത് വ്യവസ്ഥയുടെ വിജയത്തിന് അത്യാവശ്യമാണ്?" },
      options: [
        { k: "A", text: { en: "Monarchy", ml: "രാജഭരണം" } },
        { k: "B", text: { en: "Democracy", ml: "ജനാധിപത്യം" } },
        { k: "C", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } },
        { k: "D", text: { en: "Chaos", ml: "അരാജകത്വം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Voters must be able to judge policies rationally.", ml: "ജനാധിപത്യത്തിന്റെ കാതൽ ബോധമുള്ള പൗരന്മാരാണ്." }
    },
    {
      q_id: "ps-p2c1-q20",
      type: "mcq",
      stem: { en: "Political theory helps us avoid being:", ml: "രാഷ്ട്രീയ സിദ്ധാന്തം നമ്മെ ഏത് രീതിയിൽ മാറ്റാൻ സഹായിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Blind followers of any ideology", ml: "ഏതെങ്കിലും പ്രത്യയശാസ്ത്രത്തിന്റെ അന്ധമായ അനുയായി" } },
        { k: "B", text: { en: "Good citizens", ml: "നല്ല പൗരന്മാർ" } },
        { k: "C", text: { en: "Reasonable", ml: "യുക്തിസഹമായവർ" } },
        { k: "D", text: { en: "Honest", ml: "സത്യസന്ധർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Critically analyzing ideas prevents blind acceptance.", ml: "ആശയങ്ങളെ വിമർശനാത്മകമായി കാണാൻ പഠിക്കുന്നതിലൂടെ അന്ധമായ അനുസരണത്തിൽ നിന്ന് രക്ഷപ്പെടാം." }
    },
    {
      q_id: "ps-p2c1-q21",
      type: "mcq",
      stem: { en: "What is the relationship between Political Theory and Practice?", ml: "സിദ്ധാന്തവും പ്രയോഗവും (Theory and Practice) തമ്മിലുള്ള ബന്ധം എന്ത്?" },
      options: [
        { k: "A", text: { en: "They are unrelated", ml: "അവ തമ്മിൽ ബന്ധമില്ല" } },
        { k: "B", text: { en: "Theory guides and justifies practice", ml: "സിദ്ധാന്തം പ്രയോഗത്തെ നയിക്കുകയും ന്യായീകരിക്കുകയും ചെയ്യുന്നു" } },
        { k: "C", text: { en: "Only practice matters", ml: "പ്രയോഗം മാത്രമാണ് പ്രധാനം" } },
        { k: "D", text: { en: "Theory is only for exams", ml: "സിദ്ധാന്തം പരീക്ഷയ്ക്ക് വേണ്ടി മാത്രമാണ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Ideals shape how governments act in reality.", ml: "ഭരണകൂടങ്ങൾ ഓരോ തീരുമാനമെടുക്കുമ്പോഴും അതിന് പിന്നിൽ ഓരോ സിദ്ധാന്തങ്ങളുണ്ടാകും." }
    },
    {
      q_id: "ps-p2c1-q22",
      type: "mcq",
      stem: { en: "Which thinker is associated with the idea of 'Social Contract'?", ml: "താഴെ പറയുന്നവരിൽ 'സാമൂഹിക ഉടമ്പടി' (Social Contract) എന്ന ആശയവുമായി ബന്ധപ്പെട്ടത് ആര്?" },
      options: [
        { k: "A", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { k: "B", text: { en: "Einstein", ml: "ഐൻസ്റ്റീൻ" } },
        { k: "C", text: { en: "Newton", ml: "ന്യൂട്ടൺ" } },
        { k: "D", text: { en: "Darwin", ml: "ഡാർവിൻ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Jean-Jacques Rousseau was a famous social contract theorist.", ml: "ജനാധിപത്യത്തിന്റെ അടിസ്ഥാന ശിലയായി ഇതിനെ റൂസ്സോ കണ്ടു." }
    },
    {
      q_id: "ps-p2c1-q23",
      type: "mcq",
      stem: { en: "Political theory helps us manage 'Social Conflict' by:", ml: "സമൂഹത്തിലെ തർക്കങ്ങൾ പരിഹരിക്കാൻ രാഷ്ട്രീയ സിദ്ധാന്തം എങ്ങനെയാണ് സഹായിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Encouraging rational discussion", ml: "യുക്തിസഹമായ ചർച്ചകൾ പ്രോത്സാഹിപ്പിച്ചുകൊണ്ട്" } },
        { k: "B", text: { en: "Banning all opinions", ml: "എല്ലാ അഭിപ്രായങ്ങളും നിരോധിച്ചുകൊണ്ട്" } },
        { k: "C", text: { en: "Only one party rule", ml: "ഒരു പാർട്ടി ഭരണം വഴി" } },
        { k: "D", text: { en: "Closing the schools", ml: "സ്കൂളുകൾ അടച്ചുകൊണ്ട്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It provides a common language for debate.", ml: "ആശയപരമായ വ്യക്തതയിലൂടെ തർക്കങ്ങൾ പരിഹരിക്കാൻ ഇത് വഴിതുറക്കുന്നു." }
    },
    {
      q_id: "ps-p2c1-q24",
      type: "mcq",
      stem: { en: "Politics arises because humans are:", ml: "മനുഷ്യർ എങ്ങനെയുള്ളവരായതുകൊണ്ടാണ് രാഷ്ട്രീയം ഉണ്ടാകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Social animals with different views", ml: "വ്യത്യസ്ത അഭിപ്രായങ്ങളുള്ള സാമൂഹിക ജീവികൾ" } },
        { k: "B", text: { en: "Identical in thinking", ml: "ഒരേപോലെ ചിന്തിക്കുന്നവർ" } },
        { k: "C", text: { en: "Living alone", ml: "ഒറ്റയ്ക്ക് ജീവിക്കുന്നവർ" } },
        { k: "D", text: { en: "Not rational", ml: "യുക്തിയില്ലാത്തവർ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Our shared existence combined with diversity necessitates politics.", ml: "മനുഷ്യർ സമൂഹമായി ജീവിക്കുന്നതും അവർക്ക് വ്യത്യസ്ത കാഴ്ചപ്പാടുകൾ ഉള്ളതുമാണ് രാഷ്ട്രീയത്തിന് കാരണം." }
    },
    {
      q_id: "ps-p2c1-q25",
      type: "mcq",
      stem: { en: "Which of the following is NOT a goal of studying political theory?", ml: "താഴെ പറയുന്നവയിൽ രാഷ്ട്രീയ സിദ്ധാന്തം പഠിക്കുന്നതിന്റെ ലക്ഷ്യം അല്ലാത്തത് ഏത്?" },
      options: [
        { k: "A", text: { en: "To become a lawyer or politician", ml: "അഭിഭാഷകനോ രാഷ്ട്രീയക്കാരനോ ആകാൻ" } },
        { k: "B", text: { en: "To understand the systematic thinking behind institutions", ml: "സ്ഥാപനങ്ങൾക്കു പിന്നിലെ ചിട്ടയായ ചിന്ത മനസ്സിലാക്കാൻ" } },
        { k: "C", text: { en: "To blindly follow the ruler", ml: "ഭരണാധികാരിയെ അന്ധമായി അനുസരിക്കാൻ" } },
        { k: "D", text: { en: "To clarify the meaning of freedom", ml: "സ്വാതന്ത്ര്യത്തിന്റെ അർത്ഥം വ്യക്തമാക്കാൻ" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Political theory encourages critical questioning, not blind following.", ml: "അന്ധമായി അനുസരിക്കുക എന്നതല്ല, മറിച്ച് കാര്യങ്ങളെ വിശകലനം ചെയ്യുകയാണ് ഇതിന്റെ ലക്ഷ്യം." }
    },
    {
      q_id: "ps-p2c1-q26",
      type: "mcq",
      stem: { en: "The systematic study of political ideas is as relevant today because:", ml: "രാഷ്ട്രീയ ആശയങ്ങളുടെ ചിട്ടയായ പഠനം ഇന്നും പ്രസക്തമാകാൻ കാരണം:" },
      options: [
        { k: "A", text: { en: "Human nature hasn't changed fundamentally", ml: "മനുഷ്യ സ്വഭാവത്തിൽ വലിയ മാറ്റങ്ങൾ വന്നിട്ടില്ലാത്തതുകൊണ്ട്" } },
        { k: "B", text: { en: "Values like freedom are still contested", ml: "സ്വാതന്ത്ര്യം പോലുള്ള മൂല്യങ്ങൾ ഇന്നും ചർച്ച ചെയ്യപ്പെടുന്നതുകൊണ്ട്" } },
        { k: "C", text: { en: "New challenges arise constantly", ml: "പുതിയ വെല്ലുവിളികൾ നിരന്തരം ഉണ്ടാകുന്നതുകൊണ്ട്" } },
        { k: "D", text: { en: "All of the above", ml: "ഇവയെല്ലാം" } }
      ],
      answer: "D",
      difficulty: "medium",
      explanation: { en: "Political problems are persistent and evolve over time.", ml: "പഴയ രാഷ്ട്രീയ ചോദ്യങ്ങൾ പുതിയ രൂപത്തിൽ ഇന്നും പ്രസക്തമായി തുടരുന്നു." }
    },
    {
      q_id: "ps-p2c1-q27",
      type: "mcq",
      stem: { en: "Ideology forms the basis of:", ml: "പ്രത്യയശാസ്ത്രം ഏതിന്റെ അടിത്തറയാണ്?" },
      options: [
        { k: "A", text: { en: "Economic and political policies", ml: "സാമ്പത്തിക-രാഷ്ട്രീയ നയങ്ങൾ" } },
        { k: "B", text: { en: "Sports rules", ml: "കായിക നിയമങ്ങൾ" } },
        { k: "C", text: { en: "Musical notes", ml: "സംഗീതം" } },
        { k: "D", text: { en: "Weather reports", ml: "കാലാവസ്ഥാ റിപ്പോർട്ടുകൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Ideologies like socialism shape how a government spends money.", ml: "ഒരു ഗവൺമെന്റ് എങ്ങനെ പ്രവർത്തിക്കണം എന്നത് ആ ഗവൺമെന്റിന്റെ പ്രത്യയശാസ്ത്രത്തെ ആശ്രയിച്ചിരിക്കും." }
    },
    {
      q_id: "ps-p2c1-q28",
      type: "mcq",
      stem: { en: "Is political theory only for academics and experts?", ml: "രാഷ്ട്രീയ സിദ്ധാന്തം വിദഗ്ധർക്കും അധ്യാപകർക്കും മാത്രമുള്ളതാണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No, it is for all citizens", ml: "അല്ല, അത് എല്ലാ പൗരന്മാർക്കും വേണ്ടിയുള്ളതാണ്" } },
        { k: "C", text: { en: "Only for rich people", ml: "സമ്പന്നർക്ക് മാത്രം" } },
        { k: "D", text: { en: "Only for politicians", ml: "രാഷ്ട്രീയക്കാർക്ക് മാത്രം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Everyone is affected by political decisions and should understand them.", ml: "രാഷ്ട്രീയ തീരുമാനങ്ങൾ എല്ലാവരെയും ബാധിക്കുന്നതുകൊണ്ട് എല്ലാവരും ഇത് മനസ്സിലാക്കണം." }
    },
    {
      q_id: "ps-p2c1-q29",
      type: "mcq",
      stem: { en: "Which value ensures that no one is discriminated against?", ml: "വിവേചനങ്ങൾ ഇല്ലെന്ന് ഉറപ്പാക്കുന്ന മൂല്യം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Equality", ml: "സമത്വം" } },
        { k: "B", text: { en: "Power", ml: "അധികാരം" } },
        { k: "C", text: { en: "Profit", ml: "ലാഭം" } },
        { k: "D", text: { en: "War", ml: "യുദ്ധം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Equality is the core idea against discrimination.", ml: "എല്ലാവരെയും തുല്യമായി പരിഗണിക്കുക എന്നതാണ് സമത്വത്തിന്റെ കാതൽ." }
    },
    {
      q_id: "ps-p2c1-q30",
      type: "mcq",
      stem: { en: "Politics is a medium for Social Change. This statement is:", ml: "രാഷ്ട്രീയം സാമൂഹിക മാറ്റത്തിനുള്ള ഒരു ഉപാധിയാണ്. ഈ പ്രസ്താവന:" },
      options: [
        { k: "A", text: { en: "True", ml: "ശരിയാണ്" } },
        { k: "B", text: { en: "False", ml: "തെറ്റാണ്" } },
        { k: "C", text: { en: "Only in India", ml: "ഇന്ത്യയിൽ മാത്രം" } },
        { k: "D", text: { en: "Only in the past", ml: "പണ്ട് മാത്രം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Laws and policies made through politics can change society.", ml: "രാഷ്ട്രീയത്തിലൂടെ നിർമ്മിക്കപ്പെടുന്ന നിയമങ്ങൾക്ക് സമൂഹത്തെ പരിവർത്തനം ചെയ്യാൻ കഴിയും." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit2: Lesson = {
  id: "pl-ps-11-p2-u2",
  title: { en: "Freedom", ml: "സ്വാതന്ത്ര്യം (Freedom)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=sL4-GX4LLy0",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the dimensions of freedom", ml: "സ്വാതന്ത്ര്യത്തിന്റെ വിവിധ വശങ്ങൾ മനസ്സിലാക്കുക" },
    { en: "Distinguish between Negative and Positive Liberty", ml: "നെഗറ്റീവ് ലിബർട്ടിയും പോസിറ്റീവ് ലിബർട്ടിയും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയുക" },
    { en: "Explain J.S. Mill's Harm Principle", ml: "ജെ.എസ്. മില്ലിന്റെ 'ഹാം പ്രിൻസിപ്പിൾ' (Harm Principle) വിവരിക്കുക" },
    { en: "Analyze the concept of Swaraj", ml: "സ്വരാജ് എന്ന ആശയത്തെക്കുറിച്ച് വിശകലനം നടത്തുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the concept of freedom, the role of constraints, and the distinction between negative and positive liberty.", 
      ml: "സ്വാതന്ത്ര്യം എന്ന ആശയം, നിയന്ത്രണങ്ങളുടെ പങ്ക്, നെഗറ്റീവ്-പോസിറ്റീവ് ലിബർട്ടികൾ തമ്മിലുള്ള വ്യത്യാസം എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of J.S. Mill's Harm Principle, Gandhi's Swaraj, and the importance of freedom of expression.", 
      ml: "ജെ.എസ്. മില്ലിന്റെ ഹാം പ്രിൻസിപ്പിൾ, ഗാന്ധിജിയുടെ സ്വരാജ്, അഭിപ്രായ സ്വാതന്ത്ര്യത്തിന്റെ പ്രാധാന്യം എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of freedom (liberty). It defines what freedom is, the difference between the "absence of constraints" and the "expansion of capabilities", and the distinction between Negative and Positive Liberty. It also explains the "Harm Principle" as a basis for limiting freedom and why we need reasonable restrictions in a society.', ml: 'സ്വാതന്ത്ര്യം (Liberty) എന്ന ആശയത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. എന്താണ് സ്വാതന്ത്ര്യം, "നിയന്ത്രണങ്ങളുടെ അഭാവവും" "കഴിവുകളുടെ വികാസവും" തമ്മിലുള്ള വ്യത്യാസം, നെഗറ്റീവ്-പോസിറ്റീവ് ലിബർട്ടികൾ തമ്മിലുള്ള വ്യത്യാസം എന്നിവ ഇത് നിർവ്വചിക്കുന്നു. സ്വാതന്ത്ര്യത്തെ പരിമിതപ്പെടുത്തുന്നതിനുള്ള അടിസ്ഥാനമായി "ഹാം പ്രിൻസിപ്പിൾ" (Harm Principle) വിശദീകരിക്കുകയും ഒരു സമൂഹത്തിൽ എന്തുകൊണ്ട് ന്യായമായ നിയന്ത്രണങ്ങൾ ആവശ്യമാണെന്ന് വ്യക്തമാക്കുകയും ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Liberty (Freedom)', ml: 'സ്വാതന്ത്ര്യം (Liberty / Freedom)'}, {en: 'The ability to act according to one\'s own will, restricted only by reasonable laws.', ml: 'ന്യായമായ നിയമങ്ങളുടെ പരിധിക്കുള്ളിൽ നിന്നുകൊണ്ട് സ്വന്തം ഇഷ്ടപ്രകാരം പ്രവർത്തിക്കാനുള്ള കഴിവ്.'}, {en: 'Freedom of speech.', ml: 'അഭിപ്രായ സ്വാതന്ത്ര്യം.'}],
          [{en: 'Constraint', ml: 'നിയന്ത്രണം (Constraint)'}, {en: 'External restrictions imposed on an individual by the state or society.', ml: 'ഭരണകൂടമോ സമൂഹമോ വ്യക്തികൾക്ക് മേൽ ഏർപ്പെടുത്തുന്ന ബാഹ്യമായ നിയന്ത്രണങ്ങൾ.'}, {en: 'Censorship of films.', ml: 'സിനിമകൾക്ക് ഏർപ്പെടുത്തുന്ന സെൻസർഷിപ്പ്.'}],
          [{en: 'Harm Principle', ml: 'ഹാം പ്രിൻസിപ്പിൾ (Harm Principle)'}, {en: 'Power should only be used over an individual to prevent harm to others.', ml: 'മറ്റുള്ളവർക്ക് ദോഷം ഉണ്ടാകുന്നത് തടയാൻ വേണ്ടി മാത്രമേ ഒരാളുടെ സ്വാതന്ത്ര്യത്തിൽ ഇടപെടാവൂ എന്ന തത്വം.'}, {en: 'Advocated by J.S. Mill.', ml: 'ജെ.എസ്. മിൽ അവതരിപ്പിച്ചു.'}],
          [{en: 'Swaraj', ml: 'സ്വരാജ് (Swaraj)'}, {en: 'Concept of self-rule and self-mastery.', ml: 'സ്വയംഭരണവും ആത്മനിയന്ത്രണവും എന്ന ആശയം.'}, {en: 'Popularized by Mahatma Gandhi.', ml: 'മഹാത്മാ ഗാന്ധി പ്രചരിപ്പിച്ചു.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is Freedom?', ml: '3.1 എന്താണ് സ്വാതന്ത്ര്യം? (What is Freedom?)' },
      { type: 'p', en: 'Freedom is understood in two ways:', ml: 'സ്വാതന്ത്ര്യത്തെ രണ്ട് രീതിയിൽ മനസ്സിലാക്കാം:' },
      { type: 'ul', items: [
        { en: 'Absence of External Constraints: Not being subject to external controls or coercion.', ml: 'ബാഹ്യ നിയന്ത്രണങ്ങളുടെ അഭാവം: പുറത്തുനിന്നുള്ള സമ്മർദ്ദങ്ങളോ നിയന്ത്രണങ്ങളോ ഇല്ലാതെ സ്വതന്ത്രമായി തീരുമാനമെടുക്കാൻ കഴിയുന്ന അവസ്ഥ.' },
        { en: 'Expansion of Capabilities: Conditions in which people can develop their talents.', ml: 'കഴിവുകളുടെ വികാസം: വ്യക്തികൾക്ക് അവരുടെ കഴിവുകൾ വളർത്താനും സർഗ്ഗാത്മകത പുറത്തെടുക്കാനും കഴിയുന്ന സാഹചര്യം.' }
      ]},

      { type: 'h3', en: '3.2 The Ideal of Freedom: Swaraj', ml: '3.2 സ്വാതന്ത്ര്യത്തിന്റെ ആദർശം: സ്വരാജ്' },
      { type: 'ul', items: [
        { en: 'Swaraj means "Self-Rule" (Swa = Self, Raj = Rule).', ml: 'സ്വരാജ് എന്നാൽ "സ്വയംഭരണം" എന്നാണ് അർത്ഥം (സ്വ = സ്വന്തം, രാജ് = ഭരണം).' },
        { en: 'For Gandhi, it was political independence and removing obstacles to self-respect.', ml: 'ഗാന്ധിജിയെ സംബന്ധിച്ചിടത്തോളം ഇത് വെറും രാഷ്ട്രീയ സ്വാതന്ത്ര്യം മാത്രമല്ല, ആത്മാഭിമാനത്തോടെ ജീവിക്കാനുള്ള സാഹചര്യം കൂടിയാണ്.' }
      ]},

      { type: 'h3', en: '3.3 Why do we need Constraints?', ml: '3.3 നമുക്ക് എന്തുകൊണ്ട് നിയന്ത്രണങ്ങൾ വേണം?' },
      { type: 'ul', items: [
        { en: 'To prevent the strong from dominating the weak.', ml: 'ശക്തരായവർ ദുർബലരെ അടിച്ചമർത്തുന്നത് തടയാൻ.' },
        { en: 'To resolve conflicts through legal means rather than violence.', ml: 'തർക്കങ്ങൾ അക്രമത്തിലൂടെയല്ലാതെ നിയമപരമായി പരിഹരിക്കാൻ.' },
        { en: 'To respect differences in views and ways of life.', ml: 'വ്യത്യസ്തമായ കാഴ്ചപ്പാടുകളെയും ജീവിതരീതികളെയും ബഹുമാനിക്കാൻ.' }
      ]},

      { type: 'h3', en: '3.4 The Harm Principle (J.S. Mill)', ml: '3.4 ഹാം പ്രിൻസിപ്പിൾ (Harm Principle)' },
      { type: 'p', en: 'J.S. Mill distinguished between two types of actions:', ml: 'ജെ.എസ്. മിൽ പ്രവൃത്തികളെ രണ്ടായി തിരിച്ചിരിക്കുന്നു:' },
      { type: 'ul', items: [
        { en: 'Self-regarding actions: Affect only the individual. The state should NOT interfere.', ml: 'സ്വയം ബാധിക്കുന്ന പ്രവൃത്തികൾ (Self-regarding): വ്യക്തിയെ മാത്രം ബാധിക്കുന്ന കാര്യങ്ങൾ. ഇതിൽ ഭരണകൂടം ഇടപെടാൻ പാടില്ല.' },
        { en: 'Other-regarding actions: Affect others. The state can impose constraints to prevent harm.', ml: 'മറ്റുള്ളവരെ ബാധിക്കുന്ന പ്രവൃത്തികൾ (Other-regarding): മറ്റുള്ളവർക്ക് ദോഷമുണ്ടാക്കുന്ന കാര്യങ്ങൾ. ഇതിൽ നിയന്ത്രണങ്ങൾ ഏർപ്പെടുത്താം.' }
      ]},

      { type: 'h3', en: '3.5 Negative vs. Positive Liberty', ml: '3.5 നെഗറ്റീവ് - പോസിറ്റീവ് ലിബർട്ടികൾ' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Negative Liberty', ml: 'നെഗറ്റീവ് ലിബറിറ്റി'}, {en: 'Positive Liberty', ml: 'പോസിറ്റീവ് ലിബറിറ്റി'}],
        rows: [
          [{en: 'Focus', ml: 'ഊന്നൽ'}, {en: 'Freedom FROM (No obstacles).', ml: 'തടസ്സങ്ങളുടെ അഭാവം.'}, {en: 'Freedom TO (Presence of opportunities).', ml: 'അവസരങ്ങളുടെ സാന്നിധ്യം.'}],
          [{en: 'Supporters', ml: 'പിന്തുണയ്ക്കുന്നവർ'}, {en: 'J.S. Mill, Hayek.', ml: 'ജെ.എസ്. മിൽ, ഹായെക്.'}, {en: 'Rousseau, Gandhi, Marx.', ml: 'റൂസ്സോ, ഗാന്ധി, മാർക്സ്.'}],
          [{en: 'Example', ml: 'ഉദാഹരണം'}, {en: 'Right to privacy.', ml: 'സ്വകാര്യതയ്ക്കുള്ള അവകാശം.'}, {en: 'Access to education.', ml: 'വിദ്യാഭ്യാസത്തിനുള്ള സൗകര്യം.'}]
        ]
      }},

      { type: 'h3', en: '3.6 Freedom of Expression', ml: '3.6 അഭിപ്രായ സ്വാതന്ത്ര്യം (Freedom of Expression)' },
      { type: 'ul', items: [
        { en: 'One of the most fundamental freedoms in a democracy.', ml: 'ജനാധിപത്യത്തിലെ ഏറ്റവും അടിസ്ഥാനപരമായ സ്വാതന്ത്ര്യങ്ങളിലൊന്ന്.' },
        { en: 'Censorship should only be applied in case of "clear and present danger".', ml: 'അടിയന്തരമായ വലിയൊരു അപകടം ഉണ്ടെങ്കിൽ മാത്രമേ സെൻസർഷിപ്പ് (നിയന്ത്രണം) ഏർപ്പെടുത്താൻ പാടുള്ളൂ.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Article 19 allows "Reasonable Restrictions" on freedom.', ml: 'ഭരണഘടനയുടെ 19-ാം വകുപ്പ് സ്വാതന്ത്ര്യത്തിന്മേൽ "ന്യായമായ നിയന്ത്രണങ്ങൾ" അനുവദിക്കുന്നു.' },
        { en: 'Economic inequality is a major constraint on real freedom.', ml: 'സാമ്പത്തിക അസമത്വം യഥാർത്ഥ സ്വാതന്ത്ര്യത്തിന് വലിയൊരു തടസ്സമാണ്.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Freedom means absence of constraints and presence of opportunities.', ml: 'നിയന്ത്രണങ്ങളുടെ അഭാവവും അവസരങ്ങളുടെ സാന്നിധ്യവുമാണ് സ്വാതന്ത്ര്യം.' },
        { en: 'Harm Principle justifies intervention only to prevent harm to others.', ml: 'മറ്റുള്ളവർക്ക് ദോഷമുണ്ടാകുമ്പോൾ മാത്രമേ ഇടപെടൽ പാടുള്ളൂ എന്ന് ഹാം പ്രിൻസിപ്പിൾ പറയുന്നു.' },
        { en: 'Negative liberty is about a protected area for the individual.', ml: 'വ്യക്തിക്കായി സംരക്ഷിക്കപ്പെട്ട ഒരു സ്വതന്ത്ര മേഖലയാണ് നെഗറ്റീവ് ലിബറിറ്റി.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Freedom",
      "ml": "സ്വാതന്ത്ര്യം (Freedom)"
    },
    "definition": {
      "en": "The state of absence of external restraints and the existence of conditions where humans can develop their abilities.",
      "ml": "ബാഹ്യ നിയന്ത്രണങ്ങളുടെ അഭാവവും മനുഷ്യർക്ക് അവരുടെ കഴിവുകൾ വികസിപ്പിക്കാനുള്ള സാഹചര്യവുമുള്ള അവസ്ഥ."
    }
  },
  {
    "term": {
      "en": "Swaraj",
      "ml": "സ്വരാജ് (Swaraj)"
    },
    "definition": {
      "en": "The idea put forward by Gandhi which has two meanings: 'self-rule' and 'rule over oneself'.",
      "ml": "'സ്വയം ഭരണം', 'സ്വന്തം മേലുള്ള ഭരണം' എന്നിങ്ങനെ രണ്ട് അർത്ഥങ്ങളുള്ള, ഗാന്ധിജി മുന്നോട്ടുവെച്ച ആശയം."
    }
  },
  {
    "term": {
      "en": "Harm Principle",
      "ml": "ഹാനിയുടെ തത്വം (Harm Principle)"
    },
    "definition": {
      "en": "J.S. Mill's theory that intervention in an individual's freedom is justified only to prevent serious harm to others.",
      "ml": "മറ്റുള്ളവർക്ക് സംഭവിക്കുന്ന ഗുരുതരമായ ദോഷം തടയാൻ മാത്രമേ ഒരു വ്യക്തിയുടെ സ്വാതന്ത്ര്യത്തിൽ ഇടപെടാവൂ എന്ന ജെ.എസ്. മില്ലിന്റെ സിദ്ധാന്തം."
    }
  },
  {
    "term": {
      "en": "Negative Liberty",
      "ml": "നकारात्मक സ്വാതന്ത്ര്യം (Negative Liberty)"
    },
    "definition": {
      "en": "The concept of an area where no external authority should interfere in an individual's actions.",
      "ml": "ഒരു വ്യക്തിയുടെ പ്രവർത്തികളിൽ പുറത്തുനിന്നുള്ള യാതൊരു അധികാരവും ഇടപെടാൻ പാടില്ലാത്ത മേഖലയെക്കുറിച്ചുള്ള ആശയം."
    }
  },
  {
    "term": {
      "en": "Positive Liberty",
      "ml": "പോസിറ്റീവ് സ്വാതന്ത്ര്യം (Positive Liberty)"
    },
    "definition": {
      "en": "Freedom that provides the material, social, and political conditions necessary for personality development.",
      "ml": "വ്യക്തിത്വ വികസനത്തിന് ആവശ്യമായ ഭൗതികവും സാമൂഹികവും രാഷ്ട്രീയവുമായ സാഹചര്യങ്ങൾ ഒരുക്കിക്കൊടുക്കുന്ന സ്വാതന്ത്ര്യം."
    }
  },
  {
    "term": {
      "en": "Nelson Mandela",
      "ml": "നെൽസൺ മണ്ടേല (Nelson Mandela)"
    },
    "definition": {
      "en": "The author of 'Long Walk to Freedom' who spent 28 years in prison fighting against apartheid in South Africa.",
      "ml": "ദക്ഷിണാഫ്രിക്കയിലെ വർണ്ണവിവേചനത്തിനെതിരെ പോരാടി 28 വർഷം ജയിൽവാസം അനുഭവിച്ച, 'ലോംഗ് വാക്ക് ടു ഫ്രീഡം' എന്ന പുസ്തകത്തിന്റെ രചയിതാവ്."
    }
  },
  {
    "term": {
      "en": "Aung San Suu Kyi",
      "ml": "ഓങ് സാൻ സൂചി (Aung San Suu Kyi)"
    },
    "definition": {
      "en": "The Myanmar leader who defined true freedom as 'freedom from fear'.",
      "ml": "യഥാർത്ഥ സ്വാതന്ത്ര്യം എന്നത് 'ഭയത്തിൽ നിന്നുള്ള മോചനമാണ്' എന്ന് നിർവചിച്ച മ്യാൻമർ നേതാവ്."
    }
  },
  {
    "term": {
      "en": "John Stuart Mill",
      "ml": "ജോൺ സ്റ്റുവർട്ട് മിൽ (John Stuart Mill)"
    },
    "definition": {
      "en": "A 19th-century thinker who strongly defended freedom of expression and formulated the Harm Principle.",
      "ml": "ആവിഷ്കാര സ്വാതന്ത്ര്യത്തെ ശക്തമായി പ്രതിരോധിക്കുകയും ഹാനിയുടെ തത്വം (Harm Principle) രൂപീകരിക്കുകയും ചെയ്ത 19-ാം നൂറ്റാണ്ടിലെ ചിന്തകൻ."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c2-q1",
      type: "mcq",
      stem: { en: "Who is the author of the essay 'On Liberty'?", ml: "'ഓൺ ലിബറിറ്റി' (On Liberty) എന്ന ലേഖനം എഴുതിയത് ആര്?" },
      options: [
        { k: "A", text: { en: "Jeremy Bentham", ml: "ജെറമി ബെന്താം" } },
        { k: "B", text: { en: "J.S. Mill", ml: "ജെ.എസ്. മിൽ" } },
        { k: "C", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "D", text: { en: "Thomas Hobbes", ml: "തോമസ് ഹോബ്സ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "John Stuart Mill wrote this famous essay in 1859.", ml: "1859-ലാണ് ജെ.എസ്. മിൽ ഈ പ്രശസ്തമായ കൃതി രചിച്ചത്." }
    },
    {
      q_id: "ps-p2c2-q2",
      type: "mcq",
      stem: { en: "The term 'Swaraj' literally means:", ml: "'സ്വരാജ്' എന്ന വാക്കിന്റെ അക്ഷരാർത്ഥം എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Rule of others", ml: "മറ്റുള്ളവരുടെ ഭരണം" } },
        { k: "B", text: { en: "Self-rule", ml: "സ്വയംഭരണം" } },
        { k: "C", text: { en: "No rule", ml: "ഭരണമില്ലായ്മ" } },
        { k: "D", text: { en: "Rule of God", ml: "ദൈവഭരണം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Swa (Self) + Raj (Rule) equals Swaraj.", ml: "സ്വന്തം ഭരണം അല്ലെങ്കിൽ സ്വയംഭരണം എന്നാണ് ഇതിന്റെ അർത്ഥം." }
    },
    {
      q_id: "ps-p2c2-q3",
      type: "mcq",
      stem: { en: "According to J.S. Mill, constraints are justified only for:", ml: "ജെ.എസ്. മില്ലിന്റെ അഭിപ്രായത്തിൽ നിയന്ത്രണങ്ങൾ ഏത് സാഹചര്യത്തിൽ മാത്രമേ പാടുള്ളൂ?" },
      options: [
        { k: "A", text: { en: "Increasing taxes", ml: "നികുതി വർദ്ധിപ്പിക്കാൻ" } },
        { k: "B", text: { en: "Preventing harm to others", ml: "മറ്റുള്ളവർക്ക് ദോഷം വരുന്നത് തടയാൻ" } },
        { k: "C", text: { en: "Helping friends", ml: "സുഹൃത്തുക്കളെ സഹായിക്കാൻ" } },
        { k: "D", text: { en: "Controlling thoughts", ml: "ചിന്തകളെ നിയന്ത്രിക്കാൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "This is the core of the 'Harm Principle'.", ml: "മറ്റുള്ളവർക്ക് ദോഷമുണ്ടാക്കുന്ന പ്രവൃത്തികൾ തടയാൻ മാത്രമേ അധികാരം ഉപയോഗിക്കാവൂ എന്നതാണ് ഈ തത്വം." }
    },
    {
      q_id: "ps-p2c2-q4",
      type: "mcq",
      stem: { en: "Negative Liberty focuses on:", ml: "നെഗറ്റീവ് ലിബറിറ്റി എന്തിനാണ് മുൻഗണന നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Absence of interference", ml: "ഇടപെടലുകളുടെ അഭാവം" } },
        { k: "B", text: { en: "Providing food", ml: "ഭക്ഷണം നൽകൽ" } },
        { k: "C", text: { en: "Giving jobs", ml: "ജോലി നൽകൽ" } },
        { k: "D", text: { en: "Social welfare", ml: "സാമൂഹിക ക്ഷേമം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It defines an area where no one can interfere.", ml: "ആരും ഇടപെടാത്ത ഒരു മേഖല വ്യക്തിക്ക് വേണമെന്നതാണ് നെഗറ്റീവ് ലിബറിറ്റി." }
    },
    {
      q_id: "ps-p2c2-q5",
      type: "mcq",
      stem: { en: "Positive Liberty emphasizes:", ml: "പോസിറ്റീവ് ലിബറിറ്റി എന്തിനാണ് ഊന്നൽ നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Removing all laws", ml: "എല്ലാ നിയമങ്ങളും നീക്കം ചെയ്യൽ" } },
        { k: "B", text: { en: "Presence of conditions to realize potential", ml: "കഴിവുകൾ തിരിച്ചറിയാനുള്ള സാഹചര്യങ്ങളുടെ സാന്നിധ്യം" } },
        { k: "C", text: { en: "Leaving people alone", ml: "ആളുകളെ തനിയെ വിടൽ" } },
        { k: "D", text: { en: "Total state control", ml: "പൂർണ്ണമായ ഭരണകൂട നിയന്ത്രണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It views freedom as the capacity to do something meaningful.", ml: "ലക്ഷ്യങ്ങൾ നേടാനുള്ള സാഹചര്യങ്ങൾ വ്യക്തിക്ക് ഉണ്ടായിരിക്കണം എന്നതാണിവരുടെ വാദം." }
    },
    {
      q_id: "ps-p2c2-q6",
      type: "mcq",
      stem: { en: "Which thinker is associated with the idea of Positive Liberty?", ml: "പോസിറ്റീവ് ലിബറിറ്റിയുമായി ബന്ധപ്പെട്ട ചിന്തകൻ ആര്?" },
      options: [
        { k: "A", text: { en: "F.A. Hayek", ml: "എഫ്.എ. ഹായെക്" } },
        { k: "B", text: { en: "Robert Nozick", ml: "റോബർട്ട് നോസിക്" } },
        { k: "C", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { k: "D", text: { en: "Adam Smith", ml: "ആദം സ്മിത്ത്" } }
      ],
      answer: "C",
      difficulty: "hard",
      explanation: { en: "Rousseau, Marx, and Gandhi are supporters of positive liberty.", ml: "റൂസ്സോ, മാർക്സ്, ഗാന്ധിജി എന്നിവർ ഈ ആശയത്തെ പിന്തുണയ്ക്കുന്നു." }
    },
    {
      q_id: "ps-p2c2-q7",
      type: "mcq",
      stem: { en: "What are 'Self-regarding' actions according to Mill?", ml: "മില്ലിന്റെ അഭിപ്രായത്തിൽ 'സ്വയം ബാധിക്കുന്ന' (Self-regarding) പ്രവൃത്തികൾ ഏവ?" },
      options: [
        { k: "A", text: { en: "Actions that affect only the actor", ml: "ചെയ്യുന്ന ആളെ മാത്രം ബാധിക്കുന്ന കാര്യങ്ങൾ" } },
        { k: "B", text: { en: "Actions that affect the neighbors", ml: "അയൽക്കാരെ ബാധിക്കുന്ന കാര്യങ്ങൾ" } },
        { k: "C", text: { en: "Actions that affect the nation", ml: "രാജ്യത്തെ ബാധിക്കുന്ന കാര്യങ്ങൾ" } },
        { k: "D", text: { en: "Criminal actions", ml: "ക്രിമിനൽ പ്രവർത്തനങ്ങൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "State should not interfere in self-regarding actions.", ml: "നമ്മെ മാത്രം ബാധിക്കുന്ന കാര്യങ്ങളിൽ ആരും ഇടപെടരുത് എന്നാണ് ഇതിന്റെ അർത്ഥം." }
    },
    {
      q_id: "ps-p2c2-q8",
      type: "mcq",
      stem: { en: "The quote 'I detest what you say but I will defend your right to say it' is by:", ml: "'നിങ്ങൾ പറയുന്നത് ഞാൻ വെറുക്കുന്നു, എങ്കിലും അത് പറയാനുള്ള നിങ്ങളുടെ അവകാശത്തിനായി ഞാൻ പോരാടും' - ഇത് ആരുടെ വാക്കുകളാണ്?" },
      options: [
        { k: "A", text: { en: "Voltaire", ml: "വോൾട്ടയർ" } },
        { k: "B", text: { en: "Nelson Mandela", ml: "നെൽസൺ മണ്ടേല" } },
        { k: "C", text: { en: "Abraham Lincoln", ml: "എബ്രഹാം ലിങ്കൺ" } },
        { k: "D", text: { en: "Martin Luther King", ml: "മാർട്ടിൻ ലൂതർ കിംഗ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Voltaire was a champion of freedom of speech.", ml: "അഭിപ്രായ സ്വാതന്ത്ര്യത്തിന് വേണ്ടി വാദിച്ച പ്രമുഖനായിരുന്നു വോൾട്ടയർ." }
    },
    {
      q_id: "ps-p2c2-q9",
      type: "mcq",
      stem: { en: "Constraints are necessary in society to:", ml: "സമൂഹത്തിൽ നിയന്ത്രണങ്ങൾ ആവശ്യമായിരിക്കുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "Start wars", ml: "യുദ്ധങ്ങൾ തുടങ്ങാൻ" } },
        { k: "B", text: { en: "Prevent the strong from exploiting the weak", ml: "ശക്തർ ദുർബലരെ ചൂഷണം ചെയ്യുന്നത് തടയാൻ" } },
        { k: "C", text: { en: "Make everyone identical", ml: "എല്ലാവരെയും ഒരേപോലെയാക്കാൻ" } },
        { k: "D", text: { en: "Stop people from thinking", ml: "ആളുകളെ ചിന്തിക്കുന്നതിൽ നിന്ന് തടയാൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Without constraints, there would be chaos and injustice.", ml: "നിയന്ത്രണങ്ങളില്ലെങ്കിൽ അരാജകത്വവും അനീതിയും ഉണ്ടാകും." }
    },
    {
      q_id: "ps-p2c2-q10",
      type: "mcq",
      stem: { en: "Which article of the Indian Constitution lists the right to freedom?", ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ ഏത് വകുപ്പിലാണ് സ്വാതന്ത്ര്യത്തിനുള്ള അവകാശം നൽകിയിട്ടുള്ളത്?" },
      options: [
        { k: "A", text: { en: "Article 14", ml: "ആർട്ടിക്കിൾ 14" } },
        { k: "B", text: { en: "Article 19", ml: "ആർട്ടിക്കിൾ 19" } },
        { k: "C", text: { en: "Article 32", ml: "ആർട്ടിക്കിൾ 32" } },
        { k: "D", text: { en: "Article 44", ml: "ആർട്ടിക്കിൾ 44" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Article 19 guarantees six basic freedoms to citizens.", ml: "ആർട്ടിക്കിൾ 19 ആറ് അടിസ്ഥാന സ്വാതന്ത്ര്യങ്ങൾ ഉറപ്പുനൽകുന്നു." }
    },
    {
      q_id: "ps-p2c2-q11",
      type: "mcq",
      stem: { en: "Censorship is a form of:", ml: "സെൻസർഷിപ്പ് ഏതിന്റെ ഒരു രൂപമാണ്?" },
      options: [
        { k: "A", text: { en: "Constraint", ml: "നിയന്ത്രണം" } },
        { k: "B", text: { en: "Opportunity", ml: "അവസരം" } },
        { k: "C", text: { en: "Equality", ml: "സമത്വം" } },
        { k: "D", text: { en: "Justice", ml: "നീതി" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Censorship limits the freedom of expression.", ml: "അഭിപ്രായങ്ങൾ പ്രകടിപ്പിക്കുന്നതിന് മേലുള്ള ഒരു നിയന്ത്രണമാണിത്." }
    },
    {
      q_id: "ps-p2c2-q12",
      type: "mcq",
      stem: { en: "Who popularized the concept of 'Swaraj' in India?", ml: "ഇന്ത്യയിൽ 'സ്വരാജ്' എന്ന ആശയം പ്രചരിപ്പിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Sardar Patel", ml: "സർദാർ പട്ടേൽ" } },
        { k: "B", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" } },
        { k: "C", text: { en: "Subhash Chandra Bose", ml: "സുഭാഷ് ചന്ദ്രബോസ്" } },
        { k: "D", text: { en: "B.R. Ambedkar", ml: "ബി.ആർ. അംബേദ്കർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Gandhi wrote about Swaraj in his book 'Hind Swaraj'.", ml: "ഗാന്ധിജി തന്റെ 'ഹിന്ദ് സ്വരാജ്' എന്ന പുസ്തകത്തിലൂടെയാണ് ഈ ആശയം വിശദീകരിച്ചത്." }
    },
    {
      q_id: "ps-p2c2-q13",
      type: "mcq",
      stem: { en: "Negative liberty argues for an area that is:", ml: "നെഗറ്റീവ് ലിബറിറ്റി എങ്ങനെയുള്ള ഒരു മേഖലയ്ക്ക് വേണ്ടിയാണ് വാദിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Open to everyone", ml: "എല്ലാവർക്കുമായി തുറന്നിട്ടിരിക്കുന്ന" } },
        { k: "B", text: { en: "Inviolable and free from state interference", ml: "ലംഘിക്കാൻ പാടില്ലാത്തതും ഭരണകൂട ഇടപെടലില്ലാത്തതുമായ" } },
        { k: "C", text: { en: "Controlled by the police", ml: "പോലീസ് നിയന്ത്രിക്കുന്ന" } },
        { k: "D", text: { en: "Managed by the church", ml: "സഭ നിയന്ത്രിക്കുന്ന" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It seeks a 'sacred' personal space for individuals.", ml: "വ്യക്തിയുടെ സ്വകാര്യ കാര്യങ്ങളിൽ ആരും ഇടപെടരുത് എന്ന് ഇത് ആവശ്യപ്പെടുന്നു." }
    },
    {
      q_id: "ps-p2c2-q14",
      type: "mcq",
      stem: { en: "For J.S. Mill, 'harm' must be:", ml: "മില്ലിനെ സംബന്ധിച്ചിടത്തോളം 'ദോഷം' (Harm) എന്നത് എങ്ങനെയുള്ളതായിരിക്കണം?" },
      options: [
        { k: "A", text: { en: "Serious and affecting others", ml: "ഗൗരവകരവും മറ്റുള്ളവരെ ബാധിക്കുന്നതും" } },
        { k: "B", text: { en: "Minor and personal", ml: "ചെറുതും വ്യക്തിപരവും" } },
        { k: "C", text: { en: "Only in thoughts", ml: "ചിന്തകളിൽ മാത്രം" } },
        { k: "D", text: { en: "Unknown", ml: "അറിയപ്പെടാത്തത്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Minor annoyances are not enough to limit freedom.", ml: "ചെറിയ അസ്വസ്ഥതകളല്ല, മറിച്ച് ഗൗരവകരമായ ദോഷങ്ങൾ മാത്രമേ ഇടപെടലിന് കാരണമാകാവൂ." }
    },
    {
      q_id: "ps-p2c2-q15",
      type: "mcq",
      stem: { en: "The distinction between 'freedom from' and 'freedom to' was given by:", ml: "'ഫ്രീഡം ഫ്രം' (Freedom from), 'ഫ്രീഡം ടു' (Freedom to) എന്നിവ തമ്മിലുള്ള വ്യത്യാസം വിവരിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Isaiah Berlin", ml: "ഐസയ ബെർലിൻ" } },
        { k: "B", text: { en: "Adam Smith", ml: "ആദം സ്മിത്ത്" } },
        { k: "C", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "D", text: { en: "Plato", ml: "പ്ലേറ്റോ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Isaiah Berlin's essay 'Two Concepts of Liberty' details this.", ml: "ഐസയ ബെർലിൻ ആണ് നെഗറ്റീവ് - പോസിറ്റീവ് ലിബർട്ടികളെക്കുറിച്ച് ആഴത്തിൽ പഠിച്ചത്." }
    },
    {
      q_id: "ps-p2c2-q16",
      type: "mcq",
      stem: { en: "Is poverty a constraint on freedom?", ml: "ദാരിദ്ര്യം സ്വാതന്ത്ര്യത്തിന് ഒരു തടസ്സമാണോ?" },
      options: [
        { k: "A", text: { en: "Yes, in positive liberty sense", ml: "അതെ, പോസിറ്റീവ് ലിബറിറ്റി പ്രകാരം" } },
        { k: "B", text: { en: "No, never", ml: "അല്ല, ഒരിക്കലുമല്ല" } },
        { k: "C", text: { en: "Only for politicians", ml: "രാഷ്ട്രീയക്കാർക്ക് മാത്രം" } },
        { k: "D", text: { en: "Only in winter", ml: "തണുപ്പുകാലത്ത് മാത്രം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "A starving person cannot exercise their creative potential.", ml: "അടിസ്ഥാന ആവശ്യങ്ങൾ നിറവേറ്റാൻ കഴിയാത്ത ഒരാൾക്ക് യഥാർത്ഥത്തിൽ സ്വാതന്ത്ര്യം ആസ്വദിക്കാൻ കഴിയില്ല." }
    },
    {
      q_id: "ps-p2c2-q17",
      type: "mcq",
      stem: { en: "The 'Reasonable Restrictions' in India are applied by:", ml: "ഇന്ത്യയിൽ സ്വാതന്ത്ര്യത്തിന്മേൽ 'ന്യായമായ നിയന്ത്രണങ്ങൾ' ഏർപ്പെടുത്തുന്നത് ആരാണ്?" },
      options: [
        { k: "A", text: { en: "The State/Government", ml: "ഭരണകൂടം (State/Government)" } },
        { k: "B", text: { en: "Religious leaders", ml: "മതനേതാക്കൾ" } },
        { k: "C", text: { en: "Foreign nations", ml: "വിദേശ രാജ്യങ്ങൾ" } },
        { k: "D", text: { en: "Rich people", ml: "സമ്പന്നർ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The state has power to limit rights for public order.", ml: "പൊതുസമാധാനത്തിനായി നിയമങ്ങളിലൂടെ ഗവൺമെന്റിന് നിയന്ത്രണങ്ങൾ കൊണ്ടുവരാം." }
    },
    {
      q_id: "ps-p2c2-q18",
      type: "mcq",
      stem: { en: "Freedom of expression includes the right to:", ml: "അഭിപ്രായ സ്വാതന്ത്ര്യത്തിൽ ഏത് അവകാശമാണ് ഉൾപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Speak, write and perform art", ml: "സംസാരിക്കാനും എഴുതാനും കലകൾ അവതരിപ്പിക്കാനും" } },
        { k: "B", text: { en: "Physically attack others", ml: "മറ്റുള്ളവരെ കായികമായി ഉപദ്രവിക്കാൻ" } },
        { k: "C", text: { en: "Steal property", ml: "സ്വത്ത് മോഷ്ടിക്കാൻ" } },
        { k: "D", text: { en: "Break traffic rules", ml: "ട്രാഫിക് നിയമങ്ങൾ ലംഘിക്കാൻ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It covers all forms of peaceful expression.", ml: "സമാധാനപരമായ എല്ലാ ആശയവിനിമയ മാർഗ്ഗങ്ങളും ഇതിൽ ഉൾപ്പെടുന്നു." }
    },
    {
      q_id: "ps-p2c2-q19",
      type: "mcq",
      stem: { en: "Self-rule for the individual means:", ml: "വ്യക്തിയെ സംബന്ധിച്ചിടത്തോളം സ്വയംഭരണം എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Doing whatever one likes", ml: "തോന്നിയത് പോലെ പ്രവർത്തിക്കൽ" } },
        { k: "B", text: { en: "Being master of one's own self", ml: "സ്വന്തം കാര്യങ്ങളിൽ സ്വയം അധിപനാകൽ" } },
        { k: "C", text: { en: "Ignoring all others", ml: "മറ്റുള്ളവരെ അവഗണിക്കൽ" } },
        { k: "D", text: { en: "Joining the army", ml: "സൈന്യത്തിൽ ചേരൽ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "This is the essence of autonomy.", ml: "തന്റെ പ്രവൃത്തികൾക്ക് താൻ തന്നെ ഉത്തരവാദിയാകുന്ന അവസ്ഥയാണിത്." }
    },
    {
      q_id: "ps-p2c2-q20",
      type: "mcq",
      stem: { en: "Banning a book is generally considered:", ml: "ഒരു പുസ്തകം നിരോധിക്കുന്നത് സാധാരണയായി എങ്ങനെ കാണപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "A good thing", ml: "നല്ലൊരു കാര്യം" } },
        { k: "B", text: { en: "An extreme measure against freedom", ml: "സ്വാതന്ത്ര്യത്തിന് നേരെയുള്ള അതിരുകടന്ന നടപടി" } },
        { k: "C", text: { en: "Compulsory", ml: "നിർബന്ധമായത്" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Political theory prefers debate over banning.", ml: "നിരോധിക്കുന്നതിന് പകരം ചർച്ചകളിലൂടെ വിയോജിപ്പ് പ്രകടിപ്പിക്കാനാണ് ജനാധിപത്യം പഠിപ്പിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c2-q21",
      type: "mcq",
      stem: { en: "The word 'Liberty' comes from the Latin word 'Liber' which means:", ml: "'ലിബറിറ്റി' (Liberty) എന്ന വാക്കിന്റെ അടിസ്ഥാനമായ 'ലിബർ' (Liber) എന്ന ലാറ്റിൻ വാക്കിന്റെ അർത്ഥം എന്ത്?" },
      options: [
        { k: "A", text: { en: "Free", ml: "സ്വതന്ത്രം" } },
        { k: "B", text: { en: "Lock", ml: "പൂട്ടുക" } },
        { k: "C", text: { en: "Speak", ml: "സംസാരിക്കുക" } },
        { k: "D", text: { en: "Rule", ml: "ഭരിക്കുക" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Liber means free in Latin.", ml: "ലാറ്റിൻ ഭാഷയിൽ 'ലിബർ' എന്നാൽ സ്വതന്ത്രം എന്നാണ്." }
    },
    {
      q_id: "ps-p2c2-q22",
      type: "mcq",
      stem: { en: "Which constraint is most dangerous for freedom?", ml: "സ്വാതന്ത്ര്യത്തിന് ഏറ്റവും ഭീഷണിയായ നിയന്ത്രണം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "State coercion", ml: "ഭരണകൂടത്തിന്റെ അടിച്ചമർത്തൽ" } },
        { k: "B", text: { en: "Self-discipline", ml: "ആത്മനിയന്ത്രണം" } },
        { k: "C", text: { en: "Time management", ml: "സമയക്രമീകരണം" } },
        { k: "D", text: { en: "Study schedule", ml: "പഠന പദ്ധതി" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Unjust laws and police force can destroy freedom.", ml: "ഗവൺമെന്റ് അനാവശ്യമായി ശക്തി ഉപയോഗിക്കുന്നത് സ്വാതന്ത്ര്യത്തിന് വലിയ ഭീഷണിയാണ്." }
    },
    {
      q_id: "ps-p2c2-q23",
      type: "mcq",
      stem: { en: "Positive liberty demands that the state should:", ml: "പോസിറ്റീവ് ലിബറിറ്റി ഭരണകൂടത്തിൽ നിന്ന് എന്ത് ആവശ്യപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Sleep", ml: "ഉറങ്ങാൻ" } },
        { k: "B", text: { en: "Actively create opportunities", ml: "സജീവമായി അവസരങ്ങൾ സൃഷ്ടിക്കാൻ" } },
        { k: "C", text: { en: "Dissolve itself", ml: "പിരിഞ്ഞുപോകാൻ" } },
        { k: "D", text: { en: "Become a monarchy", ml: "രാജഭരണമാകാൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "State should provide health and education.", ml: "ജനങ്ങൾക്ക് വളരാനുള്ള സാഹചര്യം ഒരുക്കിക്കൊടുക്കാൻ ഗവൺമെന്റിന് കടമയുണ്ട്." }
    },
    {
      q_id: "ps-p2c2-q24",
      type: "mcq",
      stem: { en: "The concept of 'Two Concepts of Liberty' is by:", ml: "'ലിബർട്ടിയുടെ രണ്ട് ആശയങ്ങൾ' (Two Concepts of Liberty) എന്ന കൃതി ആരുടേതാണ്?" },
      options: [
        { k: "A", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "B", text: { en: "Isaiah Berlin", ml: "ഐസയ ബെർലിൻ" } },
        { k: "C", text: { en: "Adam Smith", ml: "ആദം സ്മിത്ത്" } },
        { k: "D", text: { en: "John Locke", ml: "ജോൺ ലോക്ക്" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Isaiah Berlin is the most famous for this distinction.", ml: "സ്വാതന്ത്ര്യത്തെ നെഗറ്റീവ് എന്നും പോസിറ്റീവ് എന്നും തരംതിരിച്ചത് അദ്ദേഹമാണ്." }
    },
    {
      q_id: "ps-p2c2-q25",
      type: "mcq",
      stem: { en: "Which of these is a 'Self-regarding' action?", ml: "താഴെ പറയുന്നവയിൽ 'സ്വയം ബാധിക്കുന്ന' പ്രവൃത്തി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Watching a video alone", ml: "സ്വകാര്യമായി ഒരു വീഡിയോ കാണുക" } },
        { k: "B", text: { en: "Driving on wrong side", ml: "തെറ്റായ ദിശയിൽ വണ്ടി ഓടിക്കുക" } },
        { k: "C", text: { en: "Polluting a river", ml: "പുഴ മലിനമാക്കുക" } },
        { k: "D", text: { en: "Theft", ml: "മോഷണം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It doesn't directly hurt others.", ml: "മറ്റുള്ളവരെ ബാധിക്കാത്ത ഇത്തരം കാര്യങ്ങളിൽ നമുക്ക് പൂർണ്ണ സ്വാതന്ത്ര്യമുണ്ട്." }
    },
    {
      q_id: "ps-p2c2-q26",
      type: "mcq",
      stem: { en: "Harm to others should be prevented by:", ml: "മറ്റുള്ളവർക്കുണ്ടാകുന്ന ദോഷം ഏതുവഴി തടയാം?" },
      options: [
        { k: "A", text: { en: "Only by violence", ml: "അക്രമത്തിലൂടെ മാത്രം" } },
        { k: "B", text: { en: "Legal constraints", ml: "നിയമപരമായ നിയന്ത്രണങ്ങളിലൂടെ" } },
        { k: "C", text: { en: "Ignoring the harm", ml: "ദോഷം അവഗണിച്ചുകൊണ്ട്" } },
        { k: "D", text: { en: "Shutting the court", ml: "കോടതികൾ അടച്ചുപൂട്ടിക്കൊണ്ട്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Laws exist to protect one person from another's harm.", ml: "നിയമങ്ങളാണ് ഒരു വ്യക്തിയെ മറ്റൊരാളുടെ അതിക്രമങ്ങളിൽ നിന്ന് സംരക്ഷിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c2-q27",
      type: "mcq",
      stem: { en: "Gandhi's Swaraj is similar to:", ml: "ഗാന്ധിജിയുടെ സ്വരാജ് ഏത് ആശയത്തോട് സാമ്യമുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Positive Liberty", ml: "പോസിറ്റീവ് ലിബറിറ്റി" } },
        { k: "B", text: { en: "Negative Liberty", ml: "നെഗറ്റീവ് ലിബറിറ്റി" } },
        { k: "C", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } },
        { k: "D", text: { en: "Anarchy", ml: "അരാജകത്വം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Swaraj involves self-mastery and social development.", ml: "സ്വയം നിയന്ത്രിക്കാനും വളരാനുമുള്ള അവസരങ്ങളെയാണ് ഗാന്ധിജി സ്വരാജ് എന്ന് വിളിച്ചത്." }
    },
    {
      q_id: "ps-p2c2-q28",
      type: "mcq",
      stem: { en: "Nelson Mandela's book is titled:", ml: "നെൽസൺ മണ്ടേലയുടെ പുസ്തകത്തിന്റെ പേര്:" },
      options: [
        { k: "A", text: { en: "Long Walk to Freedom", ml: "ലോംഗ് വാക്ക് ടു ഫ്രീഡം" } },
        { k: "B", text: { en: "My Experiments with Truth", ml: "എന്റെ സത്യാന്വേഷണ പരീക്ഷണങ്ങൾ" } },
        { k: "C", text: { en: "Discovery of India", ml: "ഡിസ്കവറി ഓഫ് ഇന്ത്യ" } },
        { k: "D", text: { en: "Freedom from Fear", ml: "ഫ്രീഡം ഫ്രം ഫിയർ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Mandela wrote about his 27 years in prison and struggle.", ml: "തന്റെ നീണ്ട ജയിൽവാസത്തെയും സ്വാതന്ത്ര്യ സമരത്തെയും കുറിച്ച് അദ്ദേഹം ഇതിൽ വിവരിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c2-q29",
      type: "mcq",
      stem: { en: "Aung San Suu Kyi's book is titled:", ml: "ഓങ് സാൻ സൂചിയുടെ പുസ്തകത്തിന്റെ പേര്:" },
      options: [
        { k: "A", text: { en: "Freedom from Fear", ml: "ഫ്രീഡം ഫ്രം ഫിയർ" } },
        { k: "B", text: { en: "The Republic", ml: "ദ റിപ്പബ്ലിക്" } },
        { k: "C", text: { en: "On Liberty", ml: "ഓൺ ലിബറിറ്റി" } },
        { k: "D", text: { en: "Das Kapital", ml: "ദാസ് ക്യാപിറ്റൽ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "She believes fear is the greatest constraint on freedom.", ml: "ഭയത്തിൽ നിന്നുള്ള മോചനമാണ് യഥാർത്ഥ സ്വാതന്ത്ര്യം എന്ന് അവർ കരുതി." }
    },
    {
      q_id: "ps-p2c2-q30",
      type: "mcq",
      stem: { en: "Liberalism values which of the following above all?", ml: "ലിബറലിസം ഏറ്റവും കൂടുതൽ വിലമതിക്കുന്നത് ഏതിനെയാണ്?" },
      options: [
        { k: "A", text: { en: "Individual freedom", ml: "വ്യക്തിസ്വാതന്ത്ര്യം" } },
        { k: "B", text: { en: "Social tradition", ml: "സാമൂഹിക ആചാരങ്ങൾ" } },
        { k: "C", text: { en: "Military power", ml: "സൈനിക ശക്തി" } },
        { k: "D", text: { en: "Government profit", ml: "ഗവൺമെന്റ് ലാഭം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Individual liberty is the core of liberalism.", ml: "വ്യക്തിക്ക് മുൻഗണന നൽകുന്ന ചിന്താധാരയാണിത്." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit3: Lesson = {
  id: "pl-ps-11-p2-u3",
  title: { en: "Equality", ml: "സമത്വം (Equality)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=d46SWgNQp84",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the concept and importance of equality", ml: "സമത്വം എന്ന ആശയവും അതിന്റെ പ്രാധാന്യവും മനസ്സിലാക്കുക" },
    { en: "Distinguish between Natural and Social inequalities", ml: "സ്വാഭാവികമായ അസമത്വങ്ങളും സാമൂഹികമായ അസമത്വങ്ങളും തമ്മിലുള്ള വ്യത്യാസം തിരിച്ചറിയുക" },
    { en: "Explain the three dimensions of equality", ml: "സമത്വത്തിന്റെ മൂന്ന് തലങ്ങൾ വിവരിക്കുക" },
    { en: "Analyze how affirmative action promotes equality", ml: "അഫർമേറ്റീവ് ആക്ഷൻ (സംവരണം) എങ്ങനെയാണ് സമത്വം ഉറപ്പാക്കുന്നത് എന്ന് വിശകലനം ചെയ്യുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the concept of equality, its different dimensions, and the methods used to promote it in society.", 
      ml: "സമത്വം എന്ന ആശയം, അതിന്റെ വിവിധ വശങ്ങൾ, സമൂഹത്തിൽ സമത്വം വളർത്തുന്നതിനുള്ള രീതികൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of political, social, and economic equality, natural vs social inequalities, and affirmative action.", 
      ml: "രാഷ്ട്രീയ-സാമൂഹിക-സാമ്പത്തിക സമത്വങ്ങൾ, സ്വാഭാവിക vs സാമൂഹിക അസമത്വങ്ങൾ, സംവരണം (Affirmative Action) എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of equality. It examines why equality matters, the difference between "equality of opportunity" and "equality of outcomes", and the three dimensions of equality (political, social, and economic). It also discusses how we can promote equality through differential treatment and affirmative action.', ml: 'സമത്വം (Equality) എന്ന ആശയത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. എന്തുകൊണ്ട് സമത്വം പ്രധാനമാകുന്നു, "അവസര സമത്വവും" "ഫലത്തിലുള്ള സമത്വവും" തമ്മിലുള്ള വ്യത്യാസം, സമത്വത്തിന്റെ മൂന്ന് തലങ്ങൾ (രാഷ്ട്രീയം, സാമൂഹികം, സാമ്പത്തികം) എന്നിവ ഇത് പരിശോധിക്കുന്നു. കൂടാതെ പ്രത്യേക പരിഗണനകളിലൂടെയും (Differential treatment) സംവരണത്തിലൂടെയും (Affirmative action) എങ്ങനെ സമത്വം ഉറപ്പാക്കാം എന്നും ഇവിടെ ചർച്ച ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Equality', ml: 'സമത്വം (Equality)'}, {en: 'The state of being equal in status, rights, or opportunities.', ml: 'പദവിയിലോ അവകാശങ്ങളിലോ അവസരങ്ങളിലോ തുല്യരായിരിക്കുന്ന അവസ്ഥ.'}, {en: 'One person, one vote.', ml: 'എല്ലാവർക്കും ഓരോ വോട്ട്.'}],
          [{en: 'Affirmative Action', ml: 'അഫർമേറ്റീവ് ആക്ഷൻ (Affirmative Action / Reservations)'}, {en: 'Positive measures by state to help disadvantaged groups.', ml: 'പിന്നോക്ക വിഭാഗങ്ങളെ സഹായിക്കാനായി ഭരണകൂടം സ്വീകരിക്കുന്ന ഗുണപരമായ നടപടികൾ.'}, {en: 'Reservations in education.', ml: 'വിദ്യാഭ്യാസത്തിലെ സംവരണം.'}],
          [{en: 'Social Equality', ml: 'സാമൂഹിക സമത്വം (Social Equality)'}, {en: 'Ensuring no discrimination based on caste, religion, or gender.', ml: 'ജാതി, മതം, ലിംഗം എന്നിവയുടെ അടിസ്ഥാനത്തിൽ ആരും വിവേചനം നേരിടുന്നില്ലെന്ന് ഉറപ്പാക്കൽ.'}, {en: 'Abolition of untouchability.', ml: 'ഐത്തം നിർത്തലാക്കൽ.'}],
          [{en: 'Economic Equality', ml: 'സാമ്പത്തിക സമത്വം (Economic Equality)'}, {en: 'Reducing gap between rich and poor and providing basic needs.', ml: 'സമ്പന്നരും പാവപ്പെട്ടവരും തമ്മിലുള്ള വ്യത്യാസം കുറയ്ക്കുകയും അടിസ്ഥാന ആവശ്യങ്ങൾ ഉറപ്പാക്കുകയും ചെയ്യുക.'}, {en: 'Minimum wage laws.', ml: 'കുറഞ്ഞ വേതന നിയമങ്ങൾ.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 Why does Equality matter?', ml: '3.1 സമത്വം എന്തുകൊണ്ട് പ്രധാനമാകുന്നു?' },
      { type: 'ul', items: [
        { en: 'Equality is based on the idea that all human beings possess "equal worth" by virtue of being human.', ml: 'മനുഷ്യൻ എന്ന നിലയിൽ എല്ലാ വ്യക്തികൾക്കും തുല്യമായ വിലയുണ്ട് (Equal worth) എന്ന ചിന്തയാണ് സമത്വത്തിന്റെ അടിസ്ഥാനം.' },
        { en: 'Equality does not mean everyone should be treated in exactly the same way.', ml: 'എല്ലാവരെയും ഒരേപോലെ കാണുക എന്നല്ല സമത്വം കൊണ്ട് അർത്ഥമാക്കുന്നത്; അർഹമായ പരിഗണന നൽകലാണ്.' }
      ]},

      { type: 'h3', en: '3.2 Equality of Opportunity', ml: '3.2 അവസര സമത്വം (Equality of Opportunity)' },
      { type: 'p', en: 'It means everyone has the same right to pursue their goals, though results may differ based on talent and effort.', ml: 'എല്ലാവർക്കും തങ്ങളുടെ ലക്ഷ്യങ്ങൾ നേടാൻ തുല്യമായ അവകാശമുണ്ടായിരിക്കണം. എന്നാൽ ഓരോരുത്തരുടെയും കഴിവിനും അധ്വാനത്തിനും അനുസരിച്ച് ഫലങ്ങളിൽ വ്യത്യാസം വരാം.' },

      { type: 'h3', en: '3.3 Natural vs. Social Inequalities', ml: '3.3 സ്വാഭാവിക - സാമൂഹിക അസമത്വങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Natural Inequalities: Result of different capabilities and talents (e.g., musical talent).', ml: 'സ്വാഭാവിക അസമത്വങ്ങൾ (Natural Inequalities): വ്യക്തികളുടെ സഹജമായ കഴിവുകളിലും ബുദ്ധിശക്തിയിലുമുള്ള വ്യത്യാസം (ഉദാ: സംഗീത വാസന).' },
        { en: 'Social Inequalities: Created by society, such as those based on caste, race, or gender.', ml: 'സാമൂഹിക അസമത്വങ്ങൾ (Social Inequalities): ജാതി, മതം, ലിംഗം എന്നിവയുടെ അടിസ്ഥാനത്തിൽ സമൂഹം സൃഷ്ടിക്കുന്ന വേർതിരിവുകൾ.' }
      ]},

      { type: 'h3', en: '3.4 Three Dimensions of Equality', ml: '3.4 സമത്വത്തിന്റെ മൂന്ന് തലങ്ങൾ' },
      { type: 'h4', en: 'A. Political Equality', ml: 'A. രാഷ്ട്രീയ സമത്വം (Political Equality)' },
      { type: 'ul', items: [
        { en: 'Granting equal citizenship and voting rights (Universal Adult Franchise).', ml: 'എല്ലാ പൗരന്മാർക്കും തുല്യമായ പൗരത്വവും വോട്ടവകാശവും നൽകുക.' }
      ]},
      { type: 'h4', en: 'B. Social Equality', ml: 'B. സാമൂഹിക സമത്വം (Social Equality)' },
      { type: 'ul', items: [
        { en: 'Removing systemic discrimination like caste or gender bias.', ml: 'ജാതി വിവേചനമോ ലിംഗ വിവേചനമോ പോലുള്ള സാമൂഹിക വ്യവസ്ഥിതികൾ ഇല്ലാതാക്കുക.' }
      ]},
      { type: 'h4', en: 'C. Economic Equality', ml: 'C. സാമ്പത്തിക സമത്വം (Economic Equality)' },
      { type: 'ul', items: [
        { en: 'Providing basic minimum needs (food, shelter, health) to all.', ml: 'എല്ലാവർക്കും അടിസ്ഥാന ആവശ്യങ്ങൾ (ഭക്ഷണം, പാർപ്പിടം, ആരോഗ്യം) ഉറപ്പാക്കുക.' },
        { en: 'Reducing extreme gaps between rich and poor.', ml: 'സമ്പന്നരും പാവപ്പെട്ടവരും തമ്മിലുള്ള വലിയ അന്തരം കുറയ്ക്കുക.' }
      ]},

      { type: 'h3', en: '3.5 How can we promote Equality?', ml: '3.5 എങ്ങനെ സമത്വം വളർത്താം?' },
      { type: 'ul', items: [
        { en: 'Formal Equality: Legal barriers are removed.', ml: 'നിയമപരമായ സമത്വം: വിവേചനങ്ങൾ തടയുന്ന നിയമങ്ങൾ ഉണ്ടാക്കുക.' },
        { en: 'Differential Treatment: Treating people differently to ensure equal competition (e.g., ramps for disabled).', ml: 'പ്രത്യേക പരിഗണന (Differential Treatment): എല്ലാവർക്കും തുല്യമായി മത്സരിക്കാൻ കഴിയുന്ന തരത്തിൽ അവശത അനുഭവിക്കുന്നവർക്ക് സഹായം നൽകൽ.' },
        { en: 'Affirmative Action: Positive discrimination to help oppressed groups (e.g., reservations).', ml: 'സംവരണം (Affirmative Action): ചരിത്രപരമായി അടിച്ചമർത്തപ്പെട്ടവർക്ക് പ്രത്യേക അവസരങ്ങൾ നൽകുക.' }
      ]},

      { type: 'h3', en: '3.6 Feminism', ml: '3.6 ഫെമിനിസം (Feminism)' },
      { type: 'ul', items: [
        { en: 'Ideology advocating equal rights for men and women.', ml: 'സ്ത്രീ പുരുഷ സമത്വത്തിന് വേണ്ടി വാദിക്കുന്ന പ്രത്യയശാസ്ത്രം.' },
        { en: 'Patriarchy: A system that values men over women.', ml: 'പിതൃമേധാവിത്വം (Patriarchy): പുരുഷന്മാർക്ക് കൂടുതൽ പ്രാധാന്യം നൽകുന്ന സാമൂഹിക വ്യവസ്ഥ.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Equality is about the "absence of privilege".', ml: 'ആർക്കും പ്രത്യേക ആനുകൂല്യങ്ങൾ (Privilege) ഇല്ലാത്ത അവസ്ഥയാണ് സമത്വം.' },
        { en: 'Indian Constitution (Articles 14-18) guarantees the Right to Equality.', ml: 'ഭരണഘടനയുടെ 14 മുതൽ 18 വരെയുള്ള വകുപ്പുകൾ സമത്വത്തിനുള്ള അവകാശം നൽകുന്നു.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Equality is based on equal human worth.', ml: 'എല്ലാ മനുഷ്യർക്കും തുല്യ വിലയുണ്ട് എന്നതാണ് ഇതിന്റെ അടിസ്ഥാനം.' },
        { en: 'Affirmative action corrects historical injustices.', ml: 'ചരിത്രപരമായ അനീതികൾ തിരുത്താനാണ് സംവരണം ഉപയോഗിക്കുന്നത്.' },
        { en: 'Social equality targets systemic discrimination.', ml: 'സാമൂഹികമായ വിവേചനങ്ങൾ അവസാനിപ്പിക്കാനാണ് സാമൂഹിക സമത്വം ശ്രമിക്കുന്നത്.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Equality",
      "ml": "സമത്വം (Equality)"
    },
    "definition": {
      "en": "The idea that all humans deserve the same value, respect, and merit regardless of caste, color, or gender.",
      "ml": "ജാതി, വർണ്ണം, ലിംഗം എന്നിവയ്ക്ക് അതീതമായി എല്ലാ മനുഷ്യർക്കും ഒരേ മൂല്യവും ബഹുമാനവും അർഹതയുണ്ടെന്ന ആശയം."
    }
  },
  {
    "term": {
      "en": "Equality of Opportunities",
      "ml": "അവസരസമത്വം (Equality of Opportunities)"
    },
    "definition": {
      "en": "Ensuring equal opportunities and conditions for everyone to develop their abilities and achieve their goals.",
      "ml": "എല്ലാവർക്കും അവരുടെ കഴിവുകൾ വികസിപ്പിക്കാനും ലക്ഷ്യങ്ങൾ നേടാനുമുള്ള തുല്യ അവസരങ്ങളും സാഹചര്യങ്ങളും ഉറപ്പാക്കൽ."
    }
  },
  {
    "term": {
      "en": "Natural Inequalities",
      "ml": "പ്രകൃതിദത്തമായ അസമത്വങ്ങൾ (Natural Inequalities)"
    },
    "definition": {
      "en": "Inequalities arising due to differences in innate abilities and characteristics of humans.",
      "ml": "മനുഷ്യരുടെ ജനനത്താലുള്ള കഴിവുകളിലെയും സവിശേഷതകളിലെയും വ്യത്യാസങ്ങൾ കാരണം ഉണ്ടാകുന്ന അസമത്വങ്ങൾ."
    }
  },
  {
    "term": {
      "en": "Social Inequalities",
      "ml": "സാമൂഹിക അസമത്വങ്ങൾ (Social Inequalities)"
    },
    "definition": {
      "en": "Unjust inequalities created by society itself based on things like caste and gender.",
      "ml": "ജാതി, ലിംഗം തുടങ്ങിയവയുടെ അടിസ്ഥാനത്തിൽ സമൂഹം തന്നെ സൃഷ്ടിച്ചെടുക്കുന്ന അന്യായമായ അസമത്വങ്ങൾ."
    }
  },
  {
    "term": {
      "en": "Feminism",
      "ml": "ഫെമിനിസം (Feminism)"
    },
    "definition": {
      "en": "A theory that advocates for equal rights for men and women and opposes patriarchy.",
      "ml": "സ്ത്രീകൾക്കും പുരുഷന്മാർക്കും തുല്യ അവകാശങ്ങൾ വേണമെന്ന് വാദിക്കുകയും പുരുഷാധിപത്യത്തെ എതിർക്കുകയും ചെയ്യുന്ന സിദ്ധാന്തം."
    }
  },
  {
    "term": {
      "en": "Socialism",
      "ml": "സോഷ്യലിസം (Socialism)"
    },
    "definition": {
      "en": "An ideology that calls for government intervention to reduce economic inequalities and distribute resources fairly.",
      "ml": "സാമ്പത്തിക അസമത്വങ്ങൾ കുറയ്ക്കുന്നതിനും വിഭവങ്ങൾ നീതിയുക്തമായി വിതരണം ചെയ്യുന്നതിനുമായി സർക്കാർ ഇടപെടലുകൾ ആവശ്യപ്പെടുന്ന പ്രത്യയശാസ്ത്രം."
    }
  },
  {
    "term": {
      "en": "Affirmative Action",
      "ml": "അഫർമേറ്റീവ് ആക്ഷൻ (Affirmative Action)"
    },
    "definition": {
      "en": "Positive measures like reservation provided to weak sections experiencing long-term discrimination.",
      "ml": "കാലാകാലങ്ങളായി വിവേചനം അനുഭവിക്കുന്ന ദുർബല വിഭാഗങ്ങൾക്ക് സംവരണം പോലെയുള്ള പ്രത്യേക പരിഗണന നൽകുന്ന പോസിറ്റീവ് നടപടികൾ."
    }
  },
  {
    "term": {
      "en": "Karl Marx",
      "ml": "കാൾ മാർക്സ് (Karl Marx)"
    },
    "definition": {
      "en": "A thinker who argued that private ownership of major resources is the fundamental cause of inequalities and exploitation.",
      "ml": "പ്രധാന വിഭവങ്ങളുടെ മേലുള്ള സ്വകാര്യ ഉടമസ്ഥതയാണ് അസമത്വങ്ങളുടെയും ചൂഷണത്തിന്റെയും അടിസ്ഥാന കാരണം എന്ന് വാദിച്ച ചിന്തകൻ."
    }
  },
  {
    "term": {
      "en": "Rammanohar Lohia",
      "ml": "രാംമനോഹർ ലോഹ്യ (Rammanohar Lohia)"
    },
    "definition": {
      "en": "An Indian socialist thinker who envisioned 'Saptakranti', pointing out the need to fight against five types of inequalities simultaneously.",
      "ml": "അഞ്ചുതരം അസമത്വങ്ങൾക്കെതിരെ ഒരേസമയം പോരാടേണ്ടതുണ്ടെന്ന് ചൂണ്ടിക്കാണിച്ച് 'സപ്തക്രാന്തി' വിഭാവനം ചെയ്ത ഇന്ത്യൻ സോഷ്യലിസ്റ്റ് ചിന്തകൻ."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c3-q1",
      type: "mcq",
      stem: { en: "What is the basis of the claim for equality?", ml: "സമത്വത്തിനുള്ള അവകാശവാദത്തിന്റെ അടിസ്ഥാനം എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Equal income", ml: "തുല്യമായ വരുമാനം" } },
        { k: "B", text: { en: "Equal worth of all humans", ml: "എല്ലാ മനുഷ്യർക്കും തുല്യമായ വിലയുണ്ട് എന്നത്" } },
        { k: "C", text: { en: "Identical talents", ml: "ഒരേപോലെയുള്ള കഴിവുകൾ" } },
        { k: "D", text: { en: "Living in the same city", ml: "ഒരേ നഗരത്തിൽ താമസിക്കുന്നത്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Equality recognizes common humanity despite differences.", ml: "വ്യത്യാസങ്ങൾ ഉണ്ടെങ്കിലും മനുഷ്യർ എന്ന നിലയിൽ എല്ലാവർക്കും ഒരേ സ്ഥാനമാണുള്ളത്." }
    },
    {
      q_id: "ps-p2c3-q2",
      type: "mcq",
      stem: { en: "Which of the following is an example of social inequality?", ml: "താഴെ പറയുന്നവയിൽ സാമൂഹിക അസമത്വത്തിന് ഉദാഹരണം ഏത്?" },
      options: [
        { k: "A", text: { en: "Differing math skills", ml: "ഗണിതത്തിലുള്ള വ്യത്യസ്തമായ കഴിവ്" } },
        { k: "B", text: { en: "Caste-based discrimination", ml: "ജാതി വിവേചനം" } },
        { k: "C", text: { en: "Musical talent", ml: "സംഗീത വാസന" } },
        { k: "D", text: { en: "Physical height", ml: "ശാരീരികമായ ഉയരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Social inequalities are created by societal structures.", ml: "സമൂഹം നിർമ്മിക്കുന്ന വിവേചനങ്ങളെയാണ് സാമൂഹിക അസമത്വം എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c3-q3",
      type: "mcq",
      stem: { en: "The right to vote is a part of:", ml: "വോട്ടവകാശം ഏത് തരം സമത്വത്തിന്റെ ഭാഗമാണ്?" },
      options: [
        { k: "A", text: { en: "Economic Equality", ml: "സാമ്പത്തിക സമത്വം" } },
        { k: "B", text: { en: "Social Equality", ml: "സാമൂഹിക സമത്വം" } },
        { k: "C", text: { en: "Political Equality", ml: "രാഷ്ട്രീയ സമത്വം" } },
        { k: "D", text: { en: "Natural Equality", ml: "സ്വാഭാവിക സമത്വം" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Political equality ensures equal participation in governance.", ml: "ഭരണരംഗത്തുള്ള തുല്യ പങ്കാളിത്തമാണ് രാഷ്ട്രീയ സമത്വം." }
    },
    {
      q_id: "ps-p2c3-q4",
      type: "mcq",
      stem: { en: "Affirmative action is also known as:", ml: "അഫർമേറ്റീവ് ആക്ഷൻ (Affirmative action) അറിയപ്പെടുന്ന മറ്റൊരു പേര്:" },
      options: [
        { k: "A", text: { en: "Negative Discrimination", ml: "നെഗറ്റീവ് വിവേചനം" } },
        { k: "B", text: { en: "Positive Discrimination", ml: "പോസിറ്റീവ് വിവേചനം" } },
        { k: "C", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } },
        { k: "D", text: { en: "Injustice", ml: "അനീതി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It involves taking positive steps to help historically oppressed groups.", ml: "പിന്നോക്കം നിൽക്കുന്നവരെ മുന്നോട്ട് കൊണ്ടുവരാൻ സ്വീകരിക്കുന്ന ക്രിയാത്മകമായ നടപടിയാണിത്." }
    },
    {
      q_id: "ps-p2c3-q5",
      type: "mcq",
      stem: { en: "Feminism argues that inequality between men and women is:", ml: "സ്ത്രീ-പുരുഷ അസമത്വത്തെക്കുറിച്ച് ഫെമിനിസം പറയുന്നത് എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Natural", ml: "സ്വാഭാവികമാണ്" } },
        { k: "B", text: { en: "God-given", ml: "ദൈവീകമാണ്" } },
        { k: "C", text: { en: "Socially constructed by patriarchy", ml: "സമൂഹം പിതൃമേധാവിത്വത്തിലൂടെ നിർമ്മിച്ചതാണ്" } },
        { k: "D", text: { en: "Non-existent", ml: "നിലവിലില്ല" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Feminists believe society values men more, leading to inequality.", ml: "പുരുഷാധിപത്യ വ്യവസ്ഥയാണ് അസമത്വം ഉണ്ടാക്കുന്നത് എന്ന് ഇവർ വിശ്വസിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c3-q6",
      type: "mcq",
      stem: { en: "Absolute economic equality means:", ml: "പൂർണ്ണമായ സാമ്പത്തിക സമത്വം എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Everyone having identical wealth", ml: "എല്ലാവർക്കും ഒരേപോലെ സമ്പത്ത് ഉണ്ടാകുന്നത്" } },
        { k: "B", text: { en: "Providing basic needs to all", ml: "അടിസ്ഥാന ആവശ്യങ്ങൾ എല്ലാവർക്കും നൽകുന്നത്" } },
        { k: "C", text: { en: "Reducing gaps in wealth", ml: "സമ്പന്നരും പാവപ്പെട്ടവരും തമ്മിലുള്ള അകലം കുറയ്ക്കൽ" } },
        { k: "D", text: { en: "Starting a business", ml: "ഒരു ബിസിനസ്സ് തുടങ്ങുന്നത്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Absolute equality is often considered impossible and undesirable.", ml: "എല്ലാവർക്കും തുല്യമായ സമ്പത്തുണ്ടാകുക എന്നത് പ്രായോഗികമല്ല." }
    },
    {
      q_id: "ps-p2c3-q7",
      type: "mcq",
      stem: { en: "The abolition of untouchability promotes:", ml: "ഐത്തം നിർത്തലാക്കുന്നത് ഏത് തരം സമത്വത്തെയാണ് സഹായിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Political Equality", ml: "രാഷ്ട്രീയ സമത്വം" } },
        { k: "B", text: { en: "Social Equality", ml: "സാമൂഹിക സമത്വം" } },
        { k: "C", text: { en: "Economic Equality", ml: "സാമ്പത്തിക സമത്വം" } },
        { k: "D", text: { en: "International Equality", ml: "അന്താരാഷ്ട്ര സമത്വം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Untouchability was a social evil based on status.", ml: "സാമൂഹികമായ വേർതിരിവുകൾ ഇല്ലാതാക്കുന്ന നടപടിയാണിത്." }
    },
    {
      q_id: "ps-p2c3-q8",
      type: "mcq",
      stem: { en: "Natural inequalities are those that:", ml: "സ്വാഭാവിക അസമത്വങ്ങൾ എന്നാൽ ഏവയാണ്?" },
      options: [
        { k: "A", text: { en: "Emerge due to birth and talents", ml: "ജനനവും കഴിവുകളും മൂലം ഉണ്ടാകുന്നവ" } },
        { k: "B", text: { en: "Are created by the government", ml: "ഗവൺമെന്റ് നിർമ്മിക്കുന്നവ" } },
        { k: "C", text: { en: "Depend on wealth", ml: "സമ്പത്തിനെ ആശ്രയിച്ചിരിക്കുന്നവ" } },
        { k: "D", text: { en: "Are changed by law", ml: "നിയമം വഴി മാറ്റുന്നവ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "These are inherent differences between individuals.", ml: "ഓരോ വ്യക്തിയുടെയും ശാരീരികവും മാനസികവുമായ കഴിവുകളിലുള്ള വ്യത്യാസമാണിത്." }
    },
    {
      q_id: "ps-p2c3-q9",
      type: "mcq",
      stem: { en: "The concept of 'Equality of Outcome' focuses on:", ml: "'ഫലത്തിലുള്ള സമത്വം' (Equality of Outcome) എന്തിനാണ് പ്രാധാന്യം നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Only starting positions", ml: "തുടക്കത്തിലെ സാഹചര്യം മാത്രം" } },
        { k: "B", text: { en: "Ensuring actual living standards are more equal", ml: "ജീവിതനിലവാരം എല്ലാവർക്കും ഒരുപോലെ ആകുന്നത് ഉറപ്പാക്കൽ" } },
        { k: "C", text: { en: "Giving more tests", ml: "കൂടുതൽ പരീക്ഷകൾ നടത്തൽ" } },
        { k: "D", text: { en: "No schools", ml: "സ്കൂളുകൾ വേണ്ടെന്ന് വെക്കൽ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "It seeks to equalize the final results of people's lives.", ml: "എല്ലാവർക്കും അവസാനം ലഭിക്കുന്ന ഫലങ്ങൾ തുല്യമാകണം എന്ന് ഇത് ആവശ്യപ്പെടുന്നു." }
    },
    {
      q_id: "ps-p2c3-q10",
      type: "mcq",
      stem: { en: "Reservations for SC and ST in India is an example of:", ml: "ഇന്ത്യയിലെ SC/ST സംവരണം ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Absolute Equality", ml: "പൂർണ്ണമായ സമത്വം" } },
        { k: "B", text: { en: "Affirmative Action", ml: "സംവരണം (Affirmative Action)" } },
        { k: "C", text: { en: "Natural Inequality", ml: "സ്വാഭാവിക അസമത്വം" } },
        { k: "D", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It is a measure to help groups that faced historical injustice.", ml: "പിന്നോക്കം നിൽക്കുന്നവർക്ക് പ്രത്യേക പരിഗണന നൽകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c3-q11",
      type: "mcq",
      stem: { en: "Patriarchy leads to the subordination of:", ml: "പിതൃമേധാവിത്വം ആരെ അടിച്ചമർത്തുന്നതിലേക്കാണ് നയിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Men", ml: "പുരുഷന്മാരെ" } },
        { k: "B", text: { en: "Women", ml: "സ്ത്രീകളെ" } },
        { k: "C", text: { en: "Rich people", ml: "സമ്പന്നരെ" } },
        { k: "D", text: { en: "Police", ml: "പോലീസിനെ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Patriarchy values male authority over women.", ml: "സ്ത്രീകൾക്ക് മേൽ പുരുഷന്മാർക്ക് അധികാരം നൽകുന്ന വ്യവസ്ഥയാണിത്." }
    },
    {
      q_id: "ps-p2c3-q12",
      type: "mcq",
      stem: { en: "Differential treatment is justified when it:", ml: "പ്രത്യേക പരിഗണന (Differential treatment) നൽകുന്നത് എപ്പോഴാണ് ന്യായീകരിക്കപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Helps to achieve real equality", ml: "യഥാർത്ഥ സമത്വം കൈവരിക്കാൻ സഹായിക്കുമ്പോൾ" } },
        { k: "B", text: { en: "Makes someone rich", ml: "ഒരാളെ സമ്പന്നനാക്കുമ്പോൾ" } },
        { k: "C", text: { en: "Increases discrimination", ml: "വിവേചനം കൂട്ടുമ്പോൾ" } },
        { k: "D", text: { en: "Is random", ml: "കാരണമില്ലാതെ നൽകുമ്പോൾ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Treating differently to create level playing field is part of justice.", ml: "അശരണരെ തുല്യനിലയിൽ എത്തിക്കാൻ സഹായിക്കുന്നത് നീതിയുടെ ഭാഗമാണ്." }
    },
    {
      q_id: "ps-p2c3-q13",
      type: "mcq",
      stem: { en: "Marxism relates equality primarily to:", ml: "മാർക്സിസം സമത്വത്തെ ഏതുമായിട്ടാണ് പ്രധാനമായും ബന്ധിപ്പിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Religion", ml: "മതം" } },
        { k: "B", text: { en: "Ownership of resources", ml: "വിഭവങ്ങളുടെ ഉടമസ്ഥാവകാശം" } },
        { k: "C", text: { en: "Voting only", ml: "വോട്ട് ചെയ്യൽ മാത്രം" } },
        { k: "D", text: { en: "Language", ml: "ഭാഷ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Marxists believe economic control is key to all forms of equality.", ml: "സാമ്പത്തിക വിഭജനം ശരിയായാൽ മാത്രമേ എല്ലാ സമത്വവും ഉണ്ടാവൂ എന്ന് ഇവർ വിശ്വസിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c3-q14",
      type: "mcq",
      stem: { en: "Equality of opportunity means:", ml: "അവസര സമത്വം എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "No one should study", ml: "ആരും പഠിക്കാൻ പാടില്ല" } },
        { k: "B", text: { en: "Removal of artificial barriers to success", ml: "വിജയിക്കുന്നതിനുള്ള തടസ്സങ്ങൾ നീക്കം ചെയ്യുക" } },
        { k: "C", text: { en: "Same marks for everyone", ml: "എല്ലാവർക്കും ഒരേ മാർക്ക്" } },
        { k: "D", text: { en: "Only rich get jobs", ml: "സമ്പന്നർക്ക് മാത്രം ജോലി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It ensures a fair start for everyone.", ml: "ജാതിയോ മതമോ വിജയത്തിന് തടസ്സമാകരുത് എന്നതാണ് ഇതിന്റെ തത്വം." }
    },
    {
      q_id: "ps-p2c3-q15",
      type: "mcq",
      stem: { en: "Which article of the Constitution bans Untouchability?", ml: "ഐത്തം നിരോധിക്കുന്ന ഭരണഘടനാ വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 14", ml: "ആർട്ടിക്കിൾ 14" } },
        { k: "B", text: { en: "Article 17", ml: "ആർട്ടിക്കിൾ 17" } },
        { k: "C", text: { en: "Article 21", ml: "ആർട്ടിക്കിൾ 21" } },
        { k: "D", text: { en: "Article 32", ml: "ആർട്ടിക്കിൾ 32" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Article 17 makes untouchability a punishable offense.", ml: "ഐത്തം ആചരിക്കുന്നത് കുറ്റകരമാണെന്ന് 17-ാം വകുപ്പ് പ്രഖ്യാപിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c3-q16",
      type: "mcq",
      stem: { en: "The state providing free education to poor children is an example of:", ml: "പാവപ്പെട്ട കുട്ടികൾക്ക് ഗവൺമെന്റ് സൗജന്യ വിദ്യാഭ്യാസം നൽകുന്നത് ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Injustice", ml: "അനീതി" } },
        { k: "B", text: { en: "Promoting Equality", ml: "സമത്വം വളർത്തൽ" } },
        { k: "C", text: { en: "Ignoring the rich", ml: "സമ്പന്നരെ അവഗണിക്കൽ" } },
        { k: "D", text: { en: "Waste of money", ml: "പണം പാഴാക്കൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Education is a key tool for social and economic equality.", ml: "എല്ലാവർക്കും ഒരേപോലെ വളരാനുള്ള അവസരം ഒരുക്കുകയാണിവിടെ." }
    },
    {
      q_id: "ps-p2c3-q17",
      type: "mcq",
      stem: { en: "Equality before law is mentioned in which article?", ml: "നിയമത്തിന് മുന്നിലെ സമത്വത്തെക്കുറിച്ച് പറയുന്ന വകുപ്പ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Article 14", ml: "ആർട്ടിക്കിൾ 14" } },
        { k: "B", text: { en: "Article 19", ml: "ആർട്ടിക്കിൾ 19" } },
        { k: "C", text: { en: "Article 25", ml: "ആർട്ടിക്കിൾ 25" } },
        { k: "D", text: { en: "Article 44", ml: "ആർട്ടിക്കിൾ 44" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Article 14 ensures everyone is equal before the law.", ml: "നിയമത്തിന് മുന്നിൽ എല്ലാവരും തുല്യരാണെന്ന് 14-ാം വകുപ്പ് പറയുന്നു." }
    },
    {
      q_id: "ps-p2c3-q18",
      type: "mcq",
      stem: { en: "What is meant by 'Equal Worth'?", ml: "'തുല്യ വില' (Equal worth) എന്നതുകൊണ്ട് അർത്ഥമാക്കുന്നത് എന്ത്?" },
      options: [
        { k: "A", text: { en: "Equal money in bank", ml: "ബാങ്കിൽ തുല്യമായ പണം" } },
        { k: "B", text: { en: "Basic respect and dignity for all", ml: "എല്ലാവർക്കും ലഭിക്കേണ്ട അടിസ്ഥാന ബഹുമാനവും മാന്യതയും" } },
        { k: "C", text: { en: "Buying people", ml: "ആളുകളെ വിലയ്ക്ക് വാങ്ങൽ" } },
        { k: "D", text: { en: "Same clothing", ml: "ഒരേ വസ്ത്രം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Each person should be valued as a human being.", ml: "വ്യക്തിയുടെ നിലയോ പണമോ നോക്കാതെ മനുഷ്യൻ എന്ന നിലയിൽ ബഹുമാനിക്കലാണിത്." }
    },
    {
      q_id: "ps-p2c3-q19",
      type: "mcq",
      stem: { en: "Differential treatment for disabled persons is aimed at:", ml: "ഭിന്നശേഷിക്കാർക്ക് പ്രത്യേക പരിഗണന നൽകുന്നത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "Achieving equality of opportunity", ml: "അവസര സമത്വം കൈവരിക്കാൻ" } },
        { k: "B", text: { en: "Insulting them", ml: "അവരെ അപമാനിക്കാൻ" } },
        { k: "C", text: { en: "Ignoring the laws", ml: "നിയമങ്ങൾ അവഗണിക്കാൻ" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "They need extra support to compete fairly with others.", ml: "മറ്റുള്ളവർക്കൊപ്പം എത്താൻ അവർക്ക് ചില അധിക സൗകര്യങ്ങൾ ആവശ്യമാണ്." }
    },
    {
      q_id: "ps-p2c3-q20",
      type: "mcq",
      stem: { en: "Patriarchy is a structure that primarily benefits:", ml: "പിതൃമേധാവിത്വം പ്രധാനമായും ആർക്കാണ് ഗുണകരമാകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Women", ml: "സ്ത്രീകൾക്ക്" } },
        { k: "B", text: { en: "Men", ml: "പുരുഷന്മാർക്ക്" } },
        { k: "C", text: { en: "Children", ml: "കുട്ടികൾക്ക്" } },
        { k: "D", text: { en: "Animals", ml: "മൃഗങ്ങൾക്ക്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It places men in dominant positions in society.", ml: "പുരുഷന് പ്രാധാന്യം നൽകുന്ന ഒരു രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c3-q21",
      type: "mcq",
      stem: { en: "Economic equality means providing a 'basic minimum' to all. This includes:", ml: "സാമ്പത്തിക സമത്വത്തിൽ പറയുന്ന 'അടിസ്ഥാന ആവശ്യങ്ങൾ' ഏവ?" },
      options: [
        { k: "A", text: { en: "Luxury cars", ml: "ആഡംബര കാറുകൾ" } },
        { k: "B", text: { en: "Food, health and shelter", ml: "ഭക്ഷണം, ആരോഗ്യം, പാർപ്പിടം" } },
        { k: "C", text: { en: "Diamonds", ml: "വൈരക്കല്ലുകൾ" } },
        { k: "D", text: { en: "Private jets", ml: "സ്വകാര്യ വിമാനങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "State must ensure no one dies of hunger or lack of medicine.", ml: "ജീവിക്കാൻ അത്യാവശ്യമായ കാര്യങ്ങൾ എല്ലാവർക്കും ഉറപ്പാക്കലാണിത്." }
    },
    {
      q_id: "ps-p2c3-q22",
      type: "mcq",
      stem: { en: "Is absolute equality of wealth desirable?", ml: "സമ്പത്തിൽ പൂർണ്ണമായ തുല്യത വരുന്നത് നല്ലതാണോ?" },
      options: [
        { k: "A", text: { en: "Yes, it is perfect", ml: "അതെ, അതാണ് ഏറ്റവും നല്ലത്" } },
        { k: "B", text: { en: "No, it may reduce motivation to work", ml: "അല്ല, അത് അധ്വാനിക്കാനുള്ള താല്പര്യം കുറയ്ക്കാം" } },
        { k: "C", text: { en: "Only for soldiers", ml: "പട്ടാളക്കാർക്ക് മാത്രം" } },
        { k: "D", text: { en: "Only in the morning", ml: "രാവിലെ മാത്രം" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "Total equality may ignore individual efforts and talents.", ml: "ഓരോരുത്തരുടെ കഴിവിനും പരിശ്രമത്തിനും അനുസരിച്ച് ഫലം ലഭിക്കണം എന്ന് ചിലർ വാദിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c3-q23",
      type: "mcq",
      stem: { en: "Social equality seeks to end discrimination based on:", ml: "സാമൂഹിക സമത്വം ഏത് തരം വിവേചനമാണ് അവസാനിപ്പിക്കാൻ ശ്രമിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Caste, Color and Gender", ml: "ജാതി, നിറം, ലിംഗം" } },
        { k: "B", text: { en: "Mathematical talent", ml: "ഗണിതത്തിലുള്ള കഴിവ്" } },
        { k: "C", text: { en: "Cooking skills", ml: "പാചകത്തിലുള്ള കഴിവ്" } },
        { k: "D", text: { en: "Height only", ml: "ഉയരം മാത്രം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It deals with barriers created by human society.", ml: "സമൂഹം ഉണ്ടാക്കിയ വേർതിരിവുകൾ ഇല്ലാതാക്കലാണ് ലക്ഷ്യം." }
    },
    {
      q_id: "ps-p2c3-q24",
      type: "mcq",
      stem: { en: "Who wrote the famous line 'All men are created equal'?", ml: "'എല്ലാ മനുഷ്യരും തുല്യരായാണ് ജനിക്കുന്നത്' എന്ന് പറഞ്ഞതാര്?" },
      options: [
        { k: "A", text: { en: "US Declaration of Independence", ml: "അമേരിക്കൻ സ്വാതന്ത്ര്യ പ്രഖ്യാപനം" } },
        { k: "B", text: { en: "The British King", ml: "ബ്രിട്ടീഷ് രാജാവ്" } },
        { k: "C", text: { en: "Adolf Hitler", ml: "അഡോൾഫ് ഹിറ്റ്ലർ" } },
        { k: "D", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "This phrase became a symbol of modern democracy.", ml: "ആധുനിക ജനാധിപത്യത്തിന്റെ പ്രമുഖമായ മുദ്രാവാക്യമാണിത്." }
    },
    {
      q_id: "ps-p2c3-q25",
      type: "mcq",
      stem: { en: "A society with extreme gap between rich and poor lacks:", ml: "സമ്പന്നരും പാവപ്പെട്ടവരും തമ്മിൽ വലിയ വ്യത്യാസമുള്ള സമൂഹത്തിൽ ഇല്ലാത്തത് എന്ത്?" },
      options: [
        { k: "A", text: { en: "Economic Equality", ml: "സാമ്പത്തിക സമത്വം" } },
        { k: "B", text: { en: "Political freedom", ml: "രാഷ്ട്രീയ സ്വാതന്ത്ര്യം" } },
        { k: "C", text: { en: "Taxes", ml: "നികുതികൾ" } },
        { k: "D", text: { en: "Buildings", ml: "കെട്ടിടങ്ങൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Large wealth gap is a sign of economic inequality.", ml: "സമ്പത്ത് ഏതാനും കൈകളിൽ കേന്ദ്രീകരിക്കുന്നത് അസമത്വമാണ്." }
    },
    {
      q_id: "ps-p2c3-q26",
      type: "mcq",
      stem: { en: "Differential treatment should NOT be used to:", ml: "പ്രത്യേക പരിഗണന ഏത് കാര്യത്തിനായി ഉപയോഗിക്കാൻ പാടില്ല?" },
      options: [
        { k: "A", text: { en: "Help the weak", ml: "ദുർബലരെ സഹായിക്കാൻ" } },
        { k: "B", text: { en: "Create new privileges for the strong", ml: "ശക്തർക്ക് പുതിയ ആനുകൂല്യങ്ങൾ നൽകാൻ" } },
        { k: "C", text: { en: "Promote justice", ml: "നീതി നടപ്പിലാക്കാൻ" } },
        { k: "D", text: { en: "Encourage competition", ml: "മത്സരം പ്രോത്സാഹിപ്പിക്കാൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Special rights for powerful people creates inequality.", ml: "ശക്തരെ വീണ്ടും സഹായിക്കുന്നത് സമത്വത്തിന് വിരുദ്ധമാണ്." }
    },
    {
      q_id: "ps-p2c3-q27",
      type: "mcq",
      stem: { en: "Patriarchy is an example of:", ml: "പിതൃമേധാവിത്വം ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Natural Inequality", ml: "സ്വാഭാവിക അസമത്വം" } },
        { k: "B", text: { en: "Social Inequality", ml: "സാമൂഹിക അസമത്വം" } },
        { k: "C", text: { en: "Economic Equality", ml: "സാമ്പത്തിക സമത്വം" } },
        { k: "D", text: { en: "Political Stability", ml: "രാഷ്ട്രീയ സ്ഥിരത" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Society created roles that disadvantage women.", ml: "സ്ത്രീകൾ പുരുഷന്മാരേക്കാൾ താഴെയാണെന്ന് വിശ്വസിക്കുന്ന സാമൂഹിക രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c3-q28",
      type: "mcq",
      stem: { en: "The slogan of the French Revolution was:", ml: "ഫ്രഞ്ച് വിപ്ലവത്തിന്റെ മുദ്രാവാക്യം എന്തായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Money and Power", ml: "പണവും അധികാരവും" } },
        { k: "B", text: { en: "Liberty, Equality, Fraternity", ml: "സ്വാതന്ത്ര്യം, സമത്വം, സാഹോദര്യം" } },
        { k: "C", text: { en: "War and Peace", ml: "യുദ്ധവും സമാധാനവും" } },
        { k: "D", text: { en: "Only for Kings", ml: "രാജാക്കന്മാർക്ക് മാത്രം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "These three values are the pillars of modern democracy.", ml: "സ്വാതന്ത്ര്യത്തോടൊപ്പം സമത്വവും സാഹോദര്യവും അവിഭാജ്യമാണെന്ന് ഇത് പഠിപ്പിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c3-q29",
      type: "mcq",
      stem: { en: "Equality of opportunity is often linked to:", ml: "അവസര സമത്വം പലപ്പോഴും ഏതുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Meritocracy", ml: "മെറിറ്റോക്രസി (യോഗ്യതയ്ക്ക് മുൻഗണന)" } },
        { k: "B", text: { en: "Corruption", ml: "അഴിമതി" } },
        { k: "C", text: { en: "Lazy life", ml: "മടി" } },
        { k: "D", text: { en: "No rules", ml: "നിയമമില്ലായ്മ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "It allows the best talent to win after a fair start.", ml: "കഴിവുള്ളവർക്ക് മുന്നേറാൻ അവസരം നൽകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c3-q30",
      type: "mcq",
      stem: { en: "Is equality a fixed destination or a moving ideal?", ml: "സമത്വം എന്നത് എത്തിച്ചേരേണ്ട ഒരു നിശ്ചിത സ്ഥാനമാണോ അതോ ഒരു ലക്ഷ്യമാണോ?" },
      options: [
        { k: "A", text: { en: "Moving Ideal", ml: "മാറിക്കൊണ്ടിരിക്കുന്ന ഒരു ആദർശം" } },
        { k: "B", text: { en: "Finished product", ml: "പൂർത്തിയായ ഒന്നാണ്" } },
        { k: "C", text: { en: "Only for past", ml: "പണ്ട് മാത്രം ഉണ്ടായിരുന്ന ഒന്ന്" } },
        { k: "D", text: { en: "A type of car", ml: "ഒരു തരം കാർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Our understanding of equality grows as society evolves.", ml: "പുതിയ വെല്ലുവിളികൾ വരുന്നതിനനുസരിച്ച് സമത്വത്തിന്റെ അർത്ഥവും വിപുലമാകും." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit4: Lesson = {
  id: "pl-ps-11-p2-u4",
  title: { en: "Social Justice", ml: "സാമൂഹിക നീതി (Social Justice)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=LzJ6v9-DqXM",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the concept of justice and social justice", ml: "നീതി, സാമൂഹിക നീതി എന്നീ ആശയങ്ങൾ മനസ്സിലാക്കുക" },
    { en: "Identify the three principles of justice", ml: "നീതിയുടെ മൂന്ന് തത്വങ്ങൾ തിരിച്ചറിയുക" },
    { en: "Explain John Rawls' theory of the Veil of Ignorance", ml: "ജോൺ റോൾസിന്റെ 'അജ്ഞതയുടെ മറ' (Veil of Ignorance) സിദ്ധാന്തം വിവരിക്കുക" },
    { en: "Analyze the role of state and market in ensuring justice", ml: "നീതി ഉറപ്പാക്കുന്നതിൽ ഭരണകൂടത്തിന്റെയും വിപണിയുടെയും പങ്ക് വിശകലനം ചെയ്യുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the meaning of justice, the principles guiding a just society, and the theories proposed by thinkers like John Rawls.", 
      ml: "നീതിയുടെ അർത്ഥം, ഒരു നീതിയുക്തമായ സമൂഹത്തെ നയിക്കുന്ന തത്വങ്ങൾ, ജോൺ റോൾസ് തുടങ്ങിയ ചിന്തകർ അവതരിപ്പിച്ച സിദ്ധാന്തങ്ങൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of equal treatment, proportionate justice, recognition of special needs, and the debate between free markets and state intervention.", 
      ml: "തുല്യ പരിഗണന, ആനുപാതിക നീതി, പ്രത്യേക ആവശ്യങ്ങളുടെ അംഗീകാരം, സ്വതന്ത്ര വിപണിയും ഭരണകൂട ഇടപെടലും തമ്മിലുള്ള സംവാദം എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of social justice. It defines justice as "giving each person their due", discusses the three principles of justice (equal treatment, proportionate justice, and recognition of special needs), and examines John Rawls\' theory of the "Veil of Ignorance". It also addresses the debate between free markets and state intervention in ensuring a just society.', ml: 'സാമൂഹിക നീതി (Social Justice) എന്ന ആശയത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. നീതി എന്നാൽ "ഓരോരുത്തർക്കും അർഹമായത് നൽകൽ" എന്ന് നിർവ്വചിക്കുകയും നീതിയുടെ മൂന്ന് തത്വങ്ങൾ (തുല്യ പരിഗണന, ആനുപാതിക നീതി, പ്രത്യേക ആവശ്യങ്ങളുടെ അംഗീകാരം) ചർച്ച ചെയ്യുകയും ചെയ്യുന്നു. ജോൺ റോൾസിന്റെ "അജ്ഞതയുടെ മറ" (Veil of Ignorance) എന്ന സിദ്ധാന്തവും ഇവിടെ പരിശോധിക്കുന്നു. ഒരു നീതിയുക്തമായ സമൂഹം കെട്ടിപ്പടുക്കുന്നതിൽ സ്വതന്ത്ര വിപണിയും (Free market) ഗവൺമെന്റ് ഇടപെടലും തമ്മിലുള്ള തർക്കങ്ങളും ഇവിടെ ചർച്ചാവിഷയമാകുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Justice', ml: 'നീതി (Justice)'}, {en: 'The principle that each person should receive what is due to them.', ml: 'ഓരോ വ്യക്തിക്കും അർഹമായത് ലഭിക്കുന്നു എന്ന് ഉറപ്പാക്കുന്ന തത്വം.'}, {en: 'Fair distribution of resources.', ml: 'വിഭവങ്ങളുടെ നീതിയുക്തമായ വിഭജനം.'}],
          [{en: 'Social Justice', ml: 'സാമൂഹിക നീതി (Social Justice)'}, {en: 'The fair relation between individual and society, removing barriers.', ml: 'സാമൂഹിക-സാമ്പത്തിക തടസ്സങ്ങൾ നീക്കം ചെയ്തുകൊണ്ട് വ്യക്തിയും സമൂഹവും തമ്മിലുള്ള നീതിയുക്തമായ ബന്ധം.'}, {en: 'Ending discrimination based on birth.', ml: 'ജനനത്തിന്റെ അടിസ്ഥാനത്തിലുള്ള വിവേചനം അവസാനിപ്പിക്കൽ.'}],
          [{en: 'Veil of Ignorance', ml: 'അജ്ഞതയുടെ മറ (Veil of Ignorance)'}, {en: 'Thinking without knowing one\'s own position in society.', ml: 'സമൂഹത്തിൽ തന്റെ സ്ഥാനം എന്താണെന്ന് അറിയാതെ തീരുമാനങ്ങൾ എടുക്കുന്ന രീതി.'}, {en: 'Proposed by John Rawls.', ml: 'ജോൺ റോൾസ് അവതരിപ്പിച്ചു.'}],
          [{en: 'Minimum Needs', ml: 'അടിസ്ഥാന ആവശ്യങ്ങൾ (Minimum Needs)'}, {en: 'Basic requirements like food and education for a dignified life.', ml: 'മാന്യമായ ജീവിതത്തിന് ആവശ്യമായ ഭക്ഷണം, വിദ്യാഭ്യാസം തുടങ്ങിയ അടിസ്ഥാന കാര്യങ്ങൾ.'}, {en: 'Mid-day meal schemes.', ml: 'ഉച്ചഭക്ഷണ പദ്ധതി.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is Justice?', ml: '3.1 എന്താണ് നീതി? (What is Justice?)' },
      { type: 'ul', items: [
        { en: 'Ancient times: Justice linked to Dharma (social order).', ml: 'പുരാതന കാലം: നീതി എന്നത് ധർമ്മവുമായി (സാമൂഹിക ക്രമം നിലനിർത്തൽ) ബന്ധപ്പെട്ടിരുന്നു.' },
        { en: 'Modern terms: Ensuring well-being of all and protecting rights.', ml: 'ആധുനിക കാലം: എല്ലാ പൗരന്മാരുടെയും ക്ഷേമം ഉറപ്പാക്കുകയും അവകാശങ്ങൾ സംരക്ഷിക്കുകയും ചെയ്യുക.' },
        { en: 'Immanuel Kant: Every human being possesses dignity and must have opportunity to develop talents.', ml: 'ഇമ്മാനുവൽ കാന്റ്: എല്ലാ മനുഷ്യർക്കും അന്തസ്സുണ്ട്; അതിനാൽ ഓരോരുത്തർക്കും കഴിവുകൾ വികസിപ്പിക്കാൻ അവസരം നൽകണം.' }
      ]},

      { type: 'h3', en: '3.2 Three Principles of Justice', ml: '3.2 നീതിയുടെ മൂന്ന് തത്വങ്ങൾ' },
      { type: 'h4', en: 'A. Equal Treatment for Equals', ml: 'A. തുല്യർക്ക് തുല്യ പരിഗണന' },
      { type: 'ul', items: [
        { en: 'Treating all people equally regardless of class, caste, or gender.', ml: 'ജാതി, മതം, ലിംഗം എന്നിവയുടെ അടിസ്ഥാനത്തിലുള്ള വിവേചനമില്ലാതെ എല്ലാവരെയും ഒരുപോലെ കാണുക.' },
        { en: 'Example: Same salary for the same work.', ml: 'ഉദാഹരണം: ഒരേ ജോലിക്ക് ഒരേ ശമ്പളം നൽകുക.' }
      ]},
      { type: 'h4', en: 'B. Proportionate Justice (Proportionality)', ml: 'B. ആനുപാതിക നീതി (Proportionality)' },
      { type: 'ul', items: [
        { en: 'Rewarding people in proportion to effort, skill, and risk.', ml: 'അധ്വാനം, കഴിവ്, അപകടസാധ്യത എന്നിവയ്ക്ക് ആനുപാതികമായി പ്രതിഫലം നൽകുക.' },
        { en: 'Example: A surgeon deserves more reward than a casual worker.', ml: 'ഉദാഹരണം: ഒരു വിദഗ്ധനായ സർജന് സാധാരണ തൊഴിലാളിയേക്കാൾ കൂടുതൽ പ്രതിഫലം നൽകുന്നത് നീതിയാണ്.' }
      ]},
      { type: 'h4', en: 'C. Recognition of Special Needs', ml: 'C. പ്രത്യേക ആവശ്യങ്ങളുടെ അംഗീകാരം' },
      { type: 'ul', items: [
        { en: 'Taking into account physical disabilities or historical disadvantages.', ml: 'ശാരീരിക അവശതകളോ സാമൂഹികമായ പിന്നോക്കാവസ്ഥയോ പരിഗണിക്കുക.' },
        { en: 'This justifies policies like reservations.', ml: 'ഇതാണ് സംവരണം പോലുള്ള നയങ്ങളെ ന്യായീകരിക്കുന്നത്.' }
      ]},

      { type: 'h3', en: '3.3 Just Distribution', ml: '3.3 നീതിപൂർവ്വമായ വിതരണം (Just Distribution)' },
      { type: 'p', en: 'Social justice involves removing barriers and ensuring extreme wealth gaps are reduced.', ml: 'തടസ്സങ്ങൾ നീക്കം ചെയ്യുകയും സമ്പന്നരും പാവപ്പെട്ടവരും തമ്മിലുള്ള വലിയ അന്തരം കുറയ്ക്കുകയും ചെയ്യുക എന്നതാണ് സാമൂഹിക നീതി.' },

      { type: 'h3', en: '3.4 John Rawls\' Theory of Justice', ml: '3.4 ജോൺ റോൾസിന്റെ നീതി സിദ്ധാന്തം' },
      { type: 'ul', items: [
        { en: 'Veil of Ignorance: Deciding rules without knowing your own identity (rich/poor, etc.).', ml: 'അജ്ഞതയുടെ മറ (Veil of Ignorance): താൻ സമൂഹത്തിൽ ആരായിരിക്കുമെന്ന് അറിയാതെ നിയമങ്ങൾ നിശ്ചയിക്കുക.' },
        { en: 'People will choose fair rules because they might end up being in the worst-off position.', ml: 'താൻ ഏറ്റവും ദരിദ്രനായേക്കാം എന്ന പേടിയുള്ളതുകൊണ്ട് എല്ലാവർക്കും നീതി ലഭിക്കുന്ന നിയമങ്ങൾ മനുഷ്യർ തിരഞ്ഞെടുക്കും.' }
      ]},

      { type: 'h3', en: '3.5 Free Markets vs. State Intervention', ml: '3.5 സ്വതന്ത്ര വിപണിയും ഭരണകൂട ഇടപെടലും' },
      { type: 'ul', items: [
        { en: 'Free Market: Competition leads to overall wealth increase; state should not interfere.', ml: 'സ്വതന്ത്ര വിപണി: മത്സരം വരുമാനം കൂട്ടുമെന്നും ഭരണകൂടം ഇടപെടരുതെന്നും വാദിക്കുന്നു.' },
        { en: 'State Intervention: Markets cannot help the poor; state must provide healthcare and food.', ml: 'ഭരണകൂട ഇടപെടൽ: വിപണിക്ക് പാവപ്പെട്ടവരെ സഹായിക്കാൻ കഴിയില്ല; ഗവൺമെന്റ് ഭക്ഷണം, ആരോഗ്യം എന്നിവ ഉറപ്പാക്കണം.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Justice is about "rights" and "dignity", not just "charity".', ml: 'നീതി എന്നത് "അവകാശ"മാണ്, അല്ലാതെ വെറും "ദാനധർമ്മ"മല്ല.' },
        { en: 'Indian Constitution uses schemes like PDS and MNREGA to ensure justice.', ml: 'റേഷൻ കടകളും തൊഴിലുറപ്പ് പദ്ധതിയും വഴി ഇന്ത്യ നീതി നടപ്പിലാക്കാൻ ശ്രമിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Justice means giving each person what they deserve.', ml: 'ഓരോരുത്തർക്കും അർഹമായത് നൽകലാണ് നീതി.' },
        { en: 'Special needs recognition ensures disadvantaged groups are included.', ml: 'പിന്നോക്ക വിഭാഗങ്ങളെക്കൂടി ഉൾക്കൊള്ളാൻ പ്രത്യേക പരിഗണന ആവശ്യമാണ്.' },
        { en: 'Rawls showed that rationality leads to fairness.', ml: 'യുക്തിസഹമായ ചിന്ത നിഷ്പക്ഷതയിലേക്ക് നയിക്കുമെന്ന് റോൾസ് തെളിയിച്ചു.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Justice",
      "ml": "നീതി (Justice)"
    },
    "definition": {
      "en": "The principle of giving each person what they deserve and ensuring the overall well-being of society.",
      "ml": "ഓരോ വ്യക്തിക്കും അർഹമായത് നൽകുകയും സമൂഹത്തിന്റെ മൊത്തത്തിലുള്ള ക്ഷേമം ഉറപ്പാക്കുകയും ചെയ്യുന്ന തത്വം."
    }
  },
  {
    "term": {
      "en": "Equal Treatment for Equals",
      "ml": "തുല്യർക്ക് തുല്യ പരിഗണന (Equal Treatment for Equals)"
    },
    "definition": {
      "en": "The principle that all humans must be given the same rights and equal consideration without any discrimination.",
      "ml": "മനുഷ്യരെന്ന നിലയിൽ എല്ലാവർക്കും യാതൊരു വിവേചനവുമില്ലാതെ ഒരേ അവകാശങ്ങളും തുല്യ പരിഗണനയും നൽകണം എന്ന തത്വം."
    }
  },
  {
    "term": {
      "en": "Proportionate Justice",
      "ml": "ആനുപാതിക നീതി (Proportionate Justice)"
    },
    "definition": {
      "en": "The principle that rewards should be given according to the scale of efforts, risks, and skills individuals take.",
      "ml": "വ്യക്തികൾ എടുക്കുന്ന പരിശ്രമത്തിന്റെയും അവർ നേരിടുന്ന അപകടസാധ്യതകളുടെയും വൈദഗ്ധ്യത്തിന്റെയും തോതനുസരിച്ച് പ്രതിഫലം നൽകണമെന്ന തത്വം."
    }
  },
  {
    "term": {
      "en": "Recognition of Special Needs",
      "ml": "പ്രത്യേക ആവശ്യങ്ങൾ അംഗീകരിക്കുക (Recognition of Special Needs)"
    },
    "definition": {
      "en": "The principle that instead of treating everyone exactly the same, special needs of those with historical backwardness or physical limitations should be considered.",
      "ml": "എല്ലാവരെയും ഒരുപോലെ പരിഗണിക്കുന്നതിന് പകരം, ചരിത്രപരമായ പിന്നോക്കാവസ്ഥയോ ശാരീരിക പരിമിതികളോ ഉള്ളവരുടെ പ്രത്യേക ആവശ്യങ്ങൾ പരിഗണിക്കണമെന്ന തത്വം."
    }
  },
  {
    "term": {
      "en": "Veil of Ignorance",
      "ml": "അജ്ഞതയുടെ മൂടുപടം (Veil of Ignorance)"
    },
    "definition": {
      "en": "John Rawls' idea that when rules are made from behind a 'veil of ignorance' where one's own future position is unknown, it will ensure justice for the weakest in society.",
      "ml": "സ്വന്തം ഭാവിയോ സ്ഥാനമോ അറിയാത്ത ഒരു 'അജ്ഞതയുടെ മൂടുപടത്തിനുള്ളിൽ' നിന്ന് നിയമങ്ങൾ ഉണ്ടാക്കുമ്പോൾ അത് സമൂഹത്തിലെ ഏറ്റവും ദുർബലർക്ക് നീതി ഉറപ്പാക്കുമെന്ന് ജോൺ റോൾസ് അവതരിപ്പിച്ച ആശയം."
    }
  },
  {
    "term": {
      "en": "Immanuel Kant",
      "ml": "ഇമ്മാനുവൽ കാന്റ് (Immanuel Kant)"
    },
    "definition": {
      "en": "A philosopher who argued that every human has their own dignity and should never be seen as a mere tool.",
      "ml": "ഓരോ മനുഷ്യനും അവരുടേതായ അന്തസ്സുണ്ടെന്നും ആരെയും ഒരു ഉപകരണമായി മാത്രം കാണരുതെന്നും വാദിച്ച തത്വചിന്തകൻ."
    }
  },
  {
    "term": {
      "en": "John Rawls",
      "ml": "ജോൺ റോൾസ് (John Rawls)"
    },
    "definition": {
      "en": "A philosopher who theorized how a just society can be built based on reason rather than pity or morality.",
      "ml": "ദയയുടെയോ ധാർമ്മികതയുടെയോ അടിസ്ഥാനത്തിലല്ലാതെ, യുക്തിയുടെ അടിസ്ഥാനത്തിൽ നീതിയുക്തമായ ഒരു സമൂഹം എപ്രകാരം കെട്ടിപ്പടുക്കാം എന്ന് സിദ്ധാന്തിച്ച തത്വചിന്തകൻ."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c4-q1",
      type: "mcq",
      stem: { en: "Who is the author of the book 'A Theory of Justice'?", ml: "'എ തിയറി ഓഫ് ജസ്റ്റിസ്' (A Theory of Justice) എന്ന പുസ്തകം എഴുതിയത് ആര്?" },
      options: [
        { k: "A", text: { en: "John Rawls", ml: "ജോൺ റോൾസ്" } },
        { k: "B", text: { en: "Immanuel Kant", ml: "ഇമ്മാനുവൽ കാന്റ്" } },
        { k: "C", text: { en: "Plato", ml: "പ്ലേറ്റോ" } },
        { k: "D", text: { en: "Aristotle", ml: "അരിസ്റ്റോട്ടിൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "John Rawls is the most prominent 20th-century theorist of justice.", ml: "ഇരുപതാം നൂറ്റാണ്ടിലെ ഏറ്റവും പ്രമുഖനായ നീതി ശാസ്ത്രജ്ഞനാണ് ജോൺ റോൾസ്." }
    },
    {
      q_id: "ps-p2c4-q2",
      type: "mcq",
      stem: { en: "In ancient India, justice was closely linked with:", ml: "പുരാതന ഇന്ത്യയിൽ നീതി ഏതുമായിട്ടാണ് ബന്ധപ്പെട്ടിരുന്നത്?" },
      options: [
        { k: "A", text: { en: "Dharma", ml: "ധർമ്മം" } },
        { k: "B", text: { en: "Profit", ml: "ലാഭം" } },
        { k: "C", text: { en: "War", ml: "യുദ്ധം" } },
        { k: "D", text: { en: "Taxes", ml: "നികുതി" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Dharma meant following the righteous social and moral order.", ml: "ധർമ്മം അനുസരിച്ച് പ്രവർത്തിക്കുന്നതാണ് നീതി എന്ന് പണ്ട് കരുതിയിരുന്നു." }
    },
    {
      q_id: "ps-p2c4-q3",
      type: "mcq",
      stem: { en: "The 'Veil of Ignorance' is a device to achieve:", ml: "'അജ്ഞതയുടെ മറ' എന്ന രീതി ഉപയോഗിക്കുന്നത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "Chaos", ml: "അരാജകത്വം" } },
        { k: "B", text: { en: "Fairness and Impartiality", ml: "നിഷ്പക്ഷതയും നീതിയും" } },
        { k: "C", text: { en: "Corruption", ml: "അഴിമതി" } },
        { k: "D", text: { en: "Military power", ml: "സൈനിക ശക്തി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It forces people to think impartially without knowing their self-interest.", ml: "താൻ ആരാണെന്ന് അറിയാതെ നിയമങ്ങൾ ഉണ്ടാക്കുമ്പോൾ അത് എല്ലാവർക്കും നീതി ലഭിക്കാൻ കാരണമാകുന്നു." }
    },
    {
      q_id: "ps-p2c4-q4",
      type: "mcq",
      stem: { en: "Equal treatment for equals means:", ml: "തുല്യർക്ക് തുല്യ പരിഗണന എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Giving more money to friends", ml: "കൂടുതൽ പണം സുഹൃത്തുക്കൾക്ക് നൽകൽ" } },
        { k: "B", text: { en: "Treating all people equally regardless of caste or gender", ml: "ജാതി ലിംഗ ഭേദമില്ലാതെ എല്ലാവരെയും ഒരുപോലെ കാണുക" } },
        { k: "C", text: { en: "Ignoring the poor", ml: "പാവപ്പെട്ടവരെ അവഗണിക്കൽ" } },
        { k: "D", text: { en: "Supporting only one religion", ml: "ഒരു മതത്തെ മാത്രം പിന്തുണയ്ക്കൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It is the fundamental principle of non-discrimination.", ml: "വിവേചനമില്ലാതെ എല്ലാവരെയും ഒരുപോലെ പരിഗണിക്കുക എന്നതാണ് ഇതിന്റെ അർത്ഥം." }
    },
    {
      q_id: "ps-p2c4-q5",
      type: "mcq",
      stem: { en: "Proportionate justice rewards people based on their:", ml: "ആനുപാതിക നീതി പ്രകാരം പ്രതിഫലം നൽകേണ്ടത് ഏതിന്റെ അടിസ്ഥാനത്തിലാണ്?" },
      options: [
        { k: "A", text: { en: "Age", ml: "പ്രായം" } },
        { k: "B", text: { en: "Effort and Skill", ml: "അധ്വാനവും കഴിവും" } },
        { k: "C", text: { en: "Height", ml: "ഉയരം" } },
        { k: "D", text: { en: "Clothing", ml: "വസ്ത്രധാരണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Harder work and higher skills deserve more rewards.", ml: "കൂടുതൽ അധ്വാനിക്കുന്നവർക്കും കഴിവുള്ളവർക്കും കൂടുതൽ പരിഗണന നൽകുന്നത് നീതിയാണ്." }
    },
    {
      q_id: "ps-p2c4-q6",
      type: "mcq",
      stem: { en: "Recognizing 'Special Needs' is important for justice because:", ml: "'പ്രത്യേക ആവശ്യങ്ങൾ' അംഗീകരിക്കുന്നത് നീതിക്ക് പ്രധാനമാകുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "It makes people lazy", ml: "അത് ആളുകളെ മടിയന്മാരാക്കും" } },
        { k: "B", text: { en: "It helps disadvantaged groups to compete fairly", ml: "പിന്നോക്കം നിൽക്കുന്നവരെ തുല്യനിലയിൽ എത്താൻ സഹായിക്കുന്നു" } },
        { k: "C", text: { en: "It costs too much money", ml: "അതിന് ഒരുപാട് പണം ചിലവാകും" } },
        { k: "D", text: { en: "It is against the law", ml: "അത് നിയമവിരുദ്ധമാണ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Disabled or marginalized people need extra support to achieve equality.", ml: "അവശത അനുഭവിക്കുന്നവർക്ക് കൈത്താങ്ങ് നൽകിയാൽ മാത്രമേ സമൂഹത്തിൽ നീതി പുലരൂ." }
    },
    {
      q_id: "ps-p2c4-q7",
      type: "mcq",
      stem: { en: "Which thinker stated that every human being has dignity?", ml: "ഓരോ മനുഷ്യനും അന്തസ്സുണ്ടെന്ന് പ്രഖ്യാപിച്ച ചിന്തകൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Immanuel Kant", ml: "ഇമ്മാനുവൽ കാന്റ്" } },
        { k: "B", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "C", text: { en: "Adam Smith", ml: "ആദം സ്മിത്ത്" } },
        { k: "D", text: { en: "Thomas Hobbes", ml: "തോമസ് ഹോബ്സ്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Kant argued that dignity means people cannot be treated as mere means to an end.", ml: "മനുഷ്യരെ ഉപകരണങ്ങളായല്ല, മറിച്ച് വ്യക്തിത്വമുള്ളവരായി കാണണമെന്ന് കാന്റ് പറഞ്ഞു." }
    },
    {
      q_id: "ps-p2c4-q8",
      type: "mcq",
      stem: { en: "Justice is often represented as a blindfolded woman holding a:", ml: "നീതിയുടെ ദേവത കണ്ണുകെട്ടി കയ്യിൽ എന്ത് പിടിച്ചിരിക്കുന്നതായാണ് ചിത്രീകരിക്കാറുള്ളത്?" },
      options: [
        { k: "A", text: { en: "Sword", ml: "വാൾ" } },
        { k: "B", text: { en: "Scale (Balance)", ml: "ത്രാസ് (തുലാസ്)" } },
        { k: "C", text: { en: "Book", ml: "പുസ്തകം" } },
        { k: "D", text: { en: "Lamp", ml: "വിളക്ക്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The scale represents the weighing of evidence and fairness.", ml: "എല്ലാവരെയും തുല്യമായി അളക്കുന്നു എന്നതാണ് ത്രാസ് സൂചിപ്പിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c4-q9",
      type: "mcq",
      stem: { en: "The 'Minimum Level' of life includes:", ml: "ജീവിതത്തിന്റെ 'അടിസ്ഥാന നിലവാരം' (Minimum level) എന്നതിൽ ഉൾപ്പെടുന്നത്:" },
      options: [
        { k: "A", text: { en: "Luxury travel", ml: "ആഡംബര യാത്രകൾ" } },
        { k: "B", text: { en: "Clean water, food and basic education", ml: "ശുദ്ധജലം, ഭക്ഷണം, പ്രാഥമിക വിദ്യാഭ്യാസം" } },
        { k: "C", text: { en: "Private jets", ml: "സ്വകാര്യ വിമാനങ്ങൾ" } },
        { k: "D", text: { en: "Gold jewelry", ml: "സ്വർണ്ണാഭരണങ്ങൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "A just state must ensure basic survival needs for all citizens.", ml: "അതിജീവനത്തിന് ആവശ്യമായ കാര്യങ്ങൾ എല്ലാവർക്കും ഉറപ്പാക്കലാണ് സ്റ്റേറ്റിന്റെ കടമ." }
    },
    {
      q_id: "ps-p2c4-q10",
      type: "mcq",
      stem: { en: "Free market supporters believe that justice is achieved through:", ml: "സ്വതന്ത്ര വിപണിയെ പിന്തുണയ്ക്കുന്നവർ നീതി കൈവരിക്കാൻ ആഗ്രഹിക്കുന്നത് ഏതുവഴിയാണ്?" },
      options: [
        { k: "A", text: { en: "Government rules", ml: "ഗവൺമെന്റ് നിയമങ്ങൾ" } },
        { k: "B", text: { en: "Open competition", ml: "തുറന്ന മത്സരം" } },
        { k: "C", text: { en: "Fixed salaries for all", ml: "എല്ലാവർക്കും ഒരേ ശമ്പളം" } },
        { k: "D", text: { en: "Banning business", ml: "ബിസിനസ്സ് നിരോധിക്കൽ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "They believe merit and competition produce the best results for society.", ml: "മത്സരത്തിലൂടെ ഏറ്റവും മികച്ചവർ മുന്നിലെത്തുമെന്നാണ് ഇവർ വിശ്വസിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c4-q11",
      type: "mcq",
      stem: { en: "Justice is not just about 'Charity' but about:", ml: "നീതി എന്നത് കേവലം 'ദാനധർമ്മം' മാത്രമല്ല, മറിച്ച് എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Rights", ml: "അവകാശം" } },
        { k: "B", text: { en: "Mercy", ml: "കരുണ" } },
        { k: "C", text: { en: "Luck", ml: "ഭാഗ്യം" } },
        { k: "D", text: { en: "Dreams", ml: "സ്വപ്നം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Justice implies a legal and moral obligation, not a favor.", ml: "ആളുകൾക്ക് അർഹമായത് നൽകുക എന്നത് ഭരണകൂടത്തിന്റെ കടമയാണ്." }
    },
    {
      q_id: "ps-p2c4-q12",
      type: "mcq",
      stem: { en: "In Rawls' theory, the 'rational' choice leads to:", ml: "റോൾസിന്റെ സിദ്ധാന്ത പ്രകാരം 'യുക്തിസഹമായ' ചിന്ത ഏതിലേക്ക് നയിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Selfishness", ml: "സ്വാർത്ഥത" } },
        { k: "B", text: { en: "Fairness for all", ml: "എല്ലാവർക്കും നീതി ലഭിക്കൽ" } },
        { k: "C", text: { en: "Victory of the rich", ml: "സമ്പന്നരുടെ വിജയം" } },
        { k: "D", text: { en: "Destroying the state", ml: "ഭരണകൂടത്തെ നശിപ്പിക്കൽ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "A rational person would avoid risk and choose a society that protects everyone.", ml: "യുക്തിയോടെ ചിന്തിക്കുന്ന ഒരാൾ ആർക്കും ദോഷമില്ലാത്ത രീതിയെ തിരഞ്ഞെടുക്കും." }
    },
    {
      q_id: "ps-p2c4-q13",
      type: "mcq",
      stem: { en: "Equal treatment might be unjust if:", ml: "എല്ലാവരെയും ഒരേപോലെ കാണുന്നത് എപ്പോൾ അനീതിയാകും?" },
      options: [
        { k: "A", text: { en: "Everyone is identical", ml: "എല്ലാവരും ഒരേപോലെയാണെങ്കിൽ" } },
        { k: "B", text: { en: "Differences in needs are ignored", ml: "വ്യത്യസ്തമായ ആവശ്യങ്ങൾ അവഗണിച്ചാൽ" } },
        { k: "C", text: { en: "People work hard", ml: "ആളുകൾ അധ്വാനിച്ചാൽ" } },
        { k: "D", text: { en: "The state is rich", ml: "രാജ്യം സമ്പന്നമാണെങ്കിൽ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Forcing a disabled person to use stairs like others is equal treatment but unjust.", ml: "പ്രത്യേക പരിഗണന വേണ്ടവരെ സാധാരണക്കാരെപ്പോലെ കാണുന്നത് അനീതിയാണ്." }
    },
    {
      q_id: "ps-p2c4-q14",
      type: "mcq",
      stem: { en: "Social justice aims to provide a:", ml: "സാമൂഹിക നീതി എന്ത് നൽകാനാണ് ലക്ഷ്യമിടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Level playing field", ml: "തുല്യമായ മത്സര സാഹചര്യം (Level playing field)" } },
        { k: "B", text: { en: "Free car for everyone", ml: "എല്ലാവർക്കും സൗജന്യ കാർ" } },
        { k: "C", text: { en: "One religion for all", ml: "എല്ലാവർക്കും ഒരു മതം" } },
        { k: "D", text: { en: "No schools for poor", ml: "പാവപ്പെട്ടവർക്ക് സ്കൂൾ വേണ്ടെന്ന് വെക്കൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It ensures that everyone starts from a similar point of opportunity.", ml: "എല്ലാവർക്കും ജീവിതത്തിൽ മുന്നേറാൻ തുല്യമായ തുടക്കം നൽകലാണിത്." }
    },
    {
      q_id: "ps-p2c4-q15",
      type: "mcq",
      stem: { en: "State intervention is necessary when markets:", ml: "വിപണികൾക്ക് എന്ത് ചെയ്യാൻ കഴിയാത്തപ്പോഴാണ് ഗവൺമെന്റ് ഇടപെടൽ വേണ്ടിവരുന്നത്?" },
      options: [
        { k: "A", text: { en: "Fail to help the weakest sections", ml: "ദുർബല വിഭാഗങ്ങളെ സഹായിക്കുന്നതിൽ പരാജയപ്പെടുമ്പോൾ" } },
        { k: "B", text: { en: "Make too much profit", ml: "കൂടുതൽ ലാഭമുണ്ടാക്കുമ്പോൾ" } },
        { k: "C", text: { en: "Sell good products", ml: "നല്ല സാധനങ്ങൾ വിൽക്കുമ്പോൾ" } },
        { k: "D", text: { en: "Close early", ml: "നേരത്തെ അടച്ചുപൂട്ടുമ്പോൾ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "The state must protect those who cannot compete in the market.", ml: "വിപണിയിലെ മത്സരത്തിൽ തോറ്റുപോകുന്നവരെ സംരക്ഷിക്കാൻ സ്റ്റേറ്റ് വേണം." }
    },
    {
      q_id: "ps-p2c4-q16",
      type: "mcq",
      stem: { en: "The 'Trickle-down' theory assumes that:", ml: "'ട്രിക്ക്ൾ-ഡൗൺ' (Trickle-down) സിദ്ധാന്തം വിശ്വസിക്കുന്നത്:" },
      options: [
        { k: "A", text: { en: "Wealth at the top will eventually benefit the poor", ml: "മുകൾത്തട്ടിലുള്ള സമ്പത്ത് പതുക്കെ താഴെത്തട്ടിലുള്ളവർക്കും ലഭിക്കും" } },
        { k: "B", text: { en: "Poor should give money to rich", ml: "പാവപ്പെട്ടവർ സമ്പന്നർക്ക് പണം നൽകണം" } },
        { k: "C", text: { en: "No one should have money", ml: "ആർക്കും പണം ഉണ്ടാകാൻ പാടില്ല" } },
        { k: "D", text: { en: "Only farmers are important", ml: "കർഷകർ മാത്രമാണ് പ്രധാനം" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Economic growth is expected to flow down to all sections over time.", ml: "സമ്പന്നർക്ക് വളരാൻ സാഹചര്യം നൽകിയാൽ അതിന്റെ ഗുണം പാവപ്പെട്ടവർക്കും കിട്ടും എന്നതാണ് ഈ ചിന്ത." }
    },
    {
      q_id: "ps-p2c4-q17",
      type: "mcq",
      stem: { en: "A just society is one where:", ml: "ഒരു നീതിയുക്തമായ സമൂഹം എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Only few are happy", ml: "കുറച്ചുപേർ മാത്രം സന്തോഷിക്കുന്ന ഇടം" } },
        { k: "B", text: { en: "Basic needs of all are met", ml: "എല്ലാവരുടെയും അടിസ്ഥാന ആവശ്യങ്ങൾ നിറവേറ്റപ്പെടുന്ന ഇടം" } },
        { k: "C", text: { en: "There are no laws", ml: "നിയമങ്ങളില്ലാത്ത ഇടം" } },
        { k: "D", text: { en: "Only army rules", ml: "പട്ടാളം മാത്രം ഭരിക്കുന്ന ഇടം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Dignified life for everyone is the mark of justice.", ml: "എല്ലാ പൗരന്മാർക്കും അന്തസ്സായി ജീവിക്കാൻ കഴിയുന്ന സമൂഹമാണ് നീതിയുക്തം." }
    },
    {
      q_id: "ps-p2c4-q18",
      type: "mcq",
      stem: { en: "Reservation in jobs for backward classes is based on which principle?", ml: "പിന്നോക്ക വിഭാഗങ്ങൾക്ക് ജോലിയിൽ സംവരണം നൽകുന്നത് നീതിയുടെ ഏത് തത്വപ്രകാരമാണ്?" },
      options: [
        { k: "A", text: { en: "Equal treatment for equals", ml: "തുല്യർക്ക് തുല്യ പരിഗണന" } },
        { k: "B", text: { en: "Recognition of special needs", ml: "പ്രത്യേക ആവശ്യങ്ങളുടെ അംഗീകാരം" } },
        { k: "C", text: { en: "Free Market competition", ml: "സ്വതന്ത്ര വിപണി മത്സരം" } },
        { k: "D", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It acknowledges that some groups need extra support due to history.", ml: "ചില വിഭാഗങ്ങൾക്ക് മുന്നേറാൻ പ്രത്യേക സഹായം വേണമെന്ന ബോധ്യത്തിൽ നിന്നാണ് ഇത് ഉണ്ടാകുന്നത്." }
    },
    {
      q_id: "ps-p2c4-q19",
      type: "mcq",
      stem: { en: "What does 'Due' mean in 'giving each person their due'?", ml: "'ഓരോരുത്തർക്കും അർഹമായത് നൽകുക' എന്നതിലെ 'അർഹമായത്' (Due) എന്നാൽ എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Whatever they ask for", ml: "അവർ ചോദിക്കുന്നതെന്തും" } },
        { k: "B", text: { en: "What they deserve as human beings and by their work", ml: "മനുഷ്യൻ എന്ന നിലയിലും അധ്വാനം മൂലവും അവർക്ക് ലഭിക്കേണ്ടത്" } },
        { k: "C", text: { en: "Only what the King gives", ml: "രാജാവ് നൽകുന്നത് മാത്രം" } },
        { k: "D", text: { en: "Nothing", ml: "ഒന്നുമില്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It combines basic human rights with individual merit.", ml: "മനുഷ്യാവകാശങ്ങളും കഴിവിനുള്ള അംഗീകാരവും ഇതിൽ പെടുന്നു." }
    },
    {
      q_id: "ps-p2c4-q20",
      type: "mcq",
      stem: { en: "A just distribution should reduce:", ml: "നീതിപൂർവ്വമായ വിഭജനം ഏതിനെയാണ് കുറയ്ക്കേണ്ടത്?" },
      options: [
        { k: "A", text: { en: "Education", ml: "വിദ്യാഭ്യാസം" } },
        { k: "B", text: { en: "Extreme wealth gaps", ml: "അമിതമായ സമ്പന്ന-ദരിദ്ര അന്തരം" } },
        { k: "C", text: { en: "Number of citizens", ml: "പൗരന്മാരുടെ എണ്ണം" } },
        { k: "D", text: { en: "Food variety", ml: "ഭക്ഷണ വൈവിധ്യം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Extreme inequality is a sign of an unjust society.", ml: "സമ്പന്നരും പാവപ്പെട്ടവരും തമ്മിലുള്ള വലിയ വിടവ് കുറയ്ക്കലാണ് നീതി." }
    },
    {
      q_id: "ps-p2c4-q21",
      type: "mcq",
      stem: { en: "Which thinker is famous for 'Social Contract' and influence on justice?", ml: "നീതിയെ സ്വാധീനിച്ച 'സാമൂഹിക ഉടമ്പടി' എന്ന ആശയത്തിന് പ്രശസ്തൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Rousseau", ml: "റൂസ്സോ" } },
        { k: "B", text: { en: "Newton", ml: "ന്യൂട്ടൺ" } },
        { k: "C", text: { en: "Darwin", ml: "ഡാർവിൻ" } },
        { k: "D", text: { en: "Galileo", ml: "ഗലീലിയോ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Rousseau believed that people agree to live together under fair rules.", ml: "സമൂഹം ഒരു കരാറിലൂടെയാണ് ഉണ്ടായതെന്നും അത് നീതിയുള്ളതായിരിക്കണമെന്നും അദ്ദേഹം കരുതി." }
    },
    {
      q_id: "ps-p2c4-q22",
      type: "mcq",
      stem: { en: "Providing ramps in public buildings is an example of:", ml: "പൊതു കെട്ടിടങ്ങളിൽ റാംപുകൾ നിർമ്മിക്കുന്നത് ഏതിന് ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Preferential treatment for friends", ml: "സുഹൃത്തുക്കൾക്ക് നൽകുന്ന ആനുകൂല്യം" } },
        { k: "B", text: { en: "Recognition of special needs for disabled", ml: "ഭിന്നശേഷിക്കാരുടെ പ്രത്യേക ആവശ്യങ്ങൾ അംഗീകരിക്കൽ" } },
        { k: "C", text: { en: "Waste of space", ml: "സ്ഥലം പാഴാക്കൽ" } },
        { k: "D", text: { en: "Decoration", ml: "അലങ്കാരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It ensures physical access for those with mobility issues.", ml: "എല്ലാവർക്കും കെട്ടിടങ്ങൾ ഉപയോഗിക്കാനുള്ള തുല്യ അവസരം ഇത് നൽകുന്നു." }
    },
    {
      q_id: "ps-p2c4-q23",
      type: "mcq",
      stem: { en: "Who said 'Justice consists in not injuring others'?", ml: "'മറ്റുള്ളവരെ ദ്രോഹിക്കാതിരിക്കുന്നതാണ് നീതി' എന്ന് പറഞ്ഞതാര്?" },
      options: [
        { k: "A", text: { en: "Greeks philosophers (Cephalus etc)", ml: "ഗ്രീക്ക് ചിന്തകർ" } },
        { k: "B", text: { en: "Hitler", ml: "ഹിറ്റ്‌ലർ" } },
        { k: "C", text: { en: "Mussolini", ml: "മുസ്സോളിനി" } },
        { k: "D", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Early discussions on justice in Greece explored these basic ideas.", ml: "പുരാതന ഗ്രീസിലെ നീതിയെക്കുറിച്ചുള്ള ആദ്യകാല ചർച്ചകളിൽ ഇതൊരു വാദമായിരുന്നു." }
    },
    {
      q_id: "ps-p2c4-q24",
      type: "mcq",
      stem: { en: "Is justice only about the laws made by the government?", ml: "നീതി എന്നാൽ ഗവൺമെന്റ് ഉണ്ടാക്കുന്ന നിയമങ്ങൾ മാത്രമാണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No, it also has a moral and social dimension", ml: "അല്ല, അതിന് ധാർമ്മികവും സാമൂഹികവുമായ തലങ്ങളുണ്ട്" } },
        { k: "C", text: { en: "Only in India", ml: "ഇന്ത്യയിൽ മാത്രം" } },
        { k: "D", text: { en: "Only for judges", ml: "ജഡ്ജിമാർക്ക് മാത്രം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Justice goes beyond courts into how we treat each other in society.", ml: "നിയമങ്ങൾക്ക് പുറമെ നമ്മുടെ പെരുമാറ്റത്തിലും സമൂഹത്തിലും നീതി ഉണ്ടാകണം." }
    },
    {
      q_id: "ps-p2c4-q25",
      type: "mcq",
      stem: { en: "In a just society, merit should be:", ml: "നീതിയുക്തമായ ഒരു സമൂഹത്തിൽ യോഗ്യത (Merit):" },
      options: [
        { k: "A", text: { en: "Ignored completely", ml: "അവഗണിക്കപ്പെടണം" } },
        { k: "B", text: { en: "Recognized alongside social needs", ml: "സാമൂഹിക ആവശ്യങ്ങൾക്കൊപ്പം അംഗീകരിക്കപ്പെടണം" } },
        { k: "C", text: { en: "The only criteria for everything", ml: "ഏക മാനദണ്ഡം ആയിരിക്കണം" } },
        { k: "D", text: { en: "Sold for money", ml: "പണത്തിന് വിൽക്കണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "A balance between talent and social fairness is needed.", ml: "കഴിവിനെ ബഹുമാനിക്കുമ്പോൾ തന്നെ പിന്നോക്കക്കാരെ ചേർത്തുപിടിക്കുകയും വേണം." }
    },
    {
      q_id: "ps-p2c4-q26",
      type: "mcq",
      stem: { en: "Who among these argued for state to ensure 'basic minimum'?", ml: "അടിസ്ഥാന ആവശ്യങ്ങൾ സ്റ്റേറ്റ് നൽകണമെന്ന് വാദിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Socialists", ml: "സോഷ്യലിസ്റ്റുകൾ" } },
        { k: "B", text: { en: "Pure Capitalists", ml: "തീവ്ര മുതലാളിത്തവാദികൾ" } },
        { k: "C", text: { en: "Monarchs", ml: "രാജാക്കന്മാർ" } },
        { k: "D", text: { en: "Dictators", ml: "ഏകാധിപതികൾ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Socialists emphasize welfare and state role in helping poor.", ml: "എല്ലാവർക്കും തുല്യ അവസരം ഉറപ്പാക്കാൻ ഗവൺമെന്റ് ഇടപെടണമെന്ന് ഇവർ കരുതുന്നു." }
    },
    {
      q_id: "ps-p2c4-q27",
      type: "mcq",
      stem: { en: "Rawls' theory suggests that rational people choose to:", ml: "യുക്തിസഹമായി ചിന്തിക്കുന്നവർ എന്ത് തിരഞ്ഞെടുക്കുമെന്നാണ് റോൾസ് പറയുന്നത്?" },
      options: [
        { k: "A", text: { en: "Protect the interests of the least advantaged", ml: "ഏറ്റവും ദരിദ്രരായവരുടെ താല്പര്യങ്ങൾ സംരക്ഷിക്കാൻ" } },
        { k: "B", text: { en: "Only protect the rich", ml: "സമ്പന്നരെ മാത്രം സംരക്ഷിക്കാൻ" } },
        { k: "C", text: { en: "Ban all rules", ml: "നിയമങ്ങളെല്ലാം നിരോധിക്കാൻ" } },
        { k: "D", text: { en: "Leave society", ml: "സമൂഹം ഉപേക്ഷിക്കാൻ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Safety first logic makes people choose fairness for the poor.", ml: "താൻ ഒരുപക്ഷേ പാവപ്പെട്ടവനായേക്കാം എന്ന മുൻകരുതൽ പാവങ്ങളെ സഹായിക്കുന്ന നിയമങ്ങൾ ഉണ്ടാക്കാൻ പ്രേരിപ്പിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c4-q28",
      type: "mcq",
      stem: { en: "Which of these is NOT one of the three principles of justice?", ml: "താഴെ പറയുന്നവയിൽ നീതിയുടെ മൂന്ന് തത്വങ്ങളിൽ പെടാത്തത് ഏത്?" },
      options: [
        { k: "A", text: { en: "Equal treatment for equals", ml: "തുല്യർക്ക് തുല്യ പരിഗണന" } },
        { k: "B", text: { en: "Proportionate justice", ml: "ആനുപാതിക നീതി" } },
        { k: "C", text: { en: "Religious domination", ml: "മതപരമായ ആധിപത്യം" } },
        { k: "D", text: { en: "Recognition of special needs", ml: "പ്രത്യേക ആവശ്യങ്ങളുടെ അംഗീകാരം" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Justice opposes any form of group domination.", ml: "ഒരു വിഭാഗം മറ്റൊന്നിന് മേൽ അധികാരം സ്ഥാപിക്കുന്നത് നീതിക്ക് വിരുദ്ധമാണ്." }
    },
    {
      q_id: "ps-p2c4-q29",
      type: "mcq",
      stem: { en: "Economic justice aims at reducing:", ml: "സാമ്പത്തിക നീതി ഏതിനെ ഇല്ലാതാക്കാനാണ് ശ്രമിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Poverty and exploitation", ml: "ദാരിദ്ര്യവും ചൂഷണവും" } },
        { k: "B", text: { en: "Education", ml: "വിദ്യാഭ്യാസം" } },
        { k: "C", text: { en: "Trade", ml: "കച്ചവടം" } },
        { k: "D", text: { en: "Innovation", ml: "പുതുമകൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Ending economic hardship is the goal of economic justice.", ml: "സാമ്പത്തികമായ പ്രയാസങ്ങളും ചൂഷണങ്ങളും അവസാനിപ്പിക്കലാണ് ഇതിന്റെ ലക്ഷ്യം." }
    },
    {
      q_id: "ps-p2c4-q30",
      type: "mcq",
      stem: { en: "In modern times, justice is seen as a key duty of:", ml: "ആധുനിക കാലത്ത് നീതി നടപ്പിലാക്കുക എന്നത് ആരുടെ പ്രധാന കടമയാണ്?" },
      options: [
        { k: "A", text: { en: "The Democratic State", ml: "ജനാധിപത്യ ഭരണകൂടം (State)" } },
        { k: "B", text: { en: "Only private companies", ml: "സ്വകാര്യ കമ്പനികൾ മാത്രം" } },
        { k: "C", text: { en: "Only individuals", ml: "വ്യക്തികൾ മാത്രം" } },
        { k: "D", text: { en: "Foreign countries", ml: "വിദേശ രാജ്യങ്ങൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The state exists to ensure justice for its citizens.", ml: "ജനങ്ങൾക്ക് നീതി ഉറപ്പാക്കുക എന്നതാണ് ഭരണകൂടത്തിന്റെ നിലനിൽപ്പിന്റെ ഉദ്ദേശ്യം." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit5: Lesson = {
  id: "pl-ps-11-p2-u5",
  title: { en: "Rights", ml: "അവകാശങ്ങൾ (Rights)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=io8QuYyExx8",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the definition and importance of rights", ml: "അവകാശങ്ങളുടെ നിർവ്വചനവും പ്രാധാന്യവും മനസ്സിലാക്കുക" },
    { en: "Analyze the origin of rights from natural to human rights", ml: "സ്വാഭാവിക അവകാശങ്ങൾ മുതൽ മനുഷ്യാവകാശങ്ങൾ വരെയുള്ള ഉത്ഭവം വിശകലനം ചെയ്യുക" },
    { en: "Identify different types of rights (political, civil, and economic)", ml: "വിവിധ തരം അവകാശങ്ങൾ (രാഷ്ട്രീയം, സിവിൽ, സാമ്പത്തികം) തിരിച്ചറിയുക" },
    { en: "Explore the relationship between rights and responsibilities", ml: "അവകാശങ്ങളും കടമകളും തമ്മിലുള്ള ബന്ധം പരിശോധിക്കുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the concept of rights, their sources, different categories, and the balance between rights and obligations.", 
      ml: "അവകാശങ്ങൾ എന്ന ആശയം, അവയുടെ ഉറവിടങ്ങൾ, വിവിധ വിഭാഗങ്ങൾ, അവകാശങ്ങളും കടമകളും തമ്മിലുള്ള സന്തുലിതാവസ്ഥ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of natural rights, UDHR, political vs socio-economic rights, and the role of the state in protecting rights.", 
      ml: "സ്വാഭാവിക അവകാശങ്ങൾ, UDHR, രാഷ്ട്രീയ-സാമ്പത്തിക അവകാശങ്ങൾ, അവകാശ സംരക്ഷണത്തിൽ ഭരണകൂടത്തിന്റെ പങ്ക് എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of rights. It explains what rights are, where they come from (legal, moral, and natural origins), the different types of rights (civil, political, and socio-economic), and the relationship between rights and responsibilities. It also discusses how rights act as a check on the power of the state.', ml: 'അവകാശങ്ങൾ എന്ന ആശയത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. എന്താണ് അവകാശങ്ങൾ, അവ എവിടെ നിന്ന് വരുന്നു (നിയമപരമായ, ധാർമ്മികമായ, സ്വാഭാവികമായ ഉറവിടങ്ങൾ), വിവിധ തരം അവകാശങ്ങൾ (സിവിൽ, രാഷ്ട്രീയം, സാമൂഹിക-സാമ്പത്തികം), അവകാശങ്ങളും ഉത്തരവാദിത്തങ്ങളും തമ്മിലുള്ള ബന്ധം എന്നിവ ഇത് വിശദീകരിക്കുന്നു. ഭരണകൂടത്തിന്റെ അമിതാധികാരത്തെ നിയന്ത്രിക്കാൻ അവകാശങ്ങൾ എങ്ങനെ സഹായിക്കുന്നു എന്നും ഇവിടെ ചർച്ച ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Rights', ml: 'അവകാശങ്ങൾ (Rights)'}, {en: 'Justified claims of individuals recognized by society and state.', ml: 'സമൂഹം അംഗീകരിച്ചതും ഭരണകൂടം നടപ്പിലാക്കുന്നതുമായ ന്യായമായ ആവശ്യങ്ങൾ.'}, {en: 'Right to education.', ml: 'വിദ്യാഭ്യാസത്തിനുള്ള അവകാശം.'}],
          [{en: 'Natural Rights', ml: 'സ്വാഭാവിക അവകാശങ്ങൾ (Natural Rights)'}, {en: 'Rights believed to be inherent to all humans by birth.', ml: 'ജനനം കൊണ്ടുതന്നെ എല്ലാ മനുഷ്യർക്കും ലഭിക്കുന്ന അടിസ്ഥാന അവകാശങ്ങൾ.'}, {en: 'Life, Liberty, Property.', ml: 'ജീവൻ, സ്വാതന്ത്ര്യം, സ്വത്ത്.'}],
          [{en: 'Civil Liberties', ml: 'പൗരസ്വാതന്ത്ര്യം (Civil Liberties)'}, {en: 'Rights that protect individuals from government interference.', ml: 'ഭരണകൂടത്തിന്റെ അനാവശ്യ ഇടപെടലുകളിൽ നിന്ന് വ്യക്തിയെ സംരക്ഷിക്കുന്ന അവകാശങ്ങൾ.'}, {en: 'Freedom of speech.', ml: 'അഭിപ്രായ സ്വാതന്ത്ര്യം.'}],
          [{en: 'Human Rights', ml: 'മനുഷ്യാവകാശങ്ങൾ (Human Rights)'}, {en: 'Universal rights belonging to every person regardless of identity.', ml: 'ജാതി, മത, ലിംഗ ഭേദമന്യേ എല്ലാ മനുഷ്യർക്കും അവകാശപ്പെട്ട സാർവ്വത്രിക അവകാശങ്ങൾ.'}, {en: 'UDHR (1948).', ml: 'മനുഷ്യാവകാശ പ്രഖ്യാപനം.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What are Rights?', ml: '3.1 എന്താണ് അവകാശങ്ങൾ? (What are Rights?)' },
      { type: 'ul', items: [
        { en: 'Rights are claims necessary for leading a life of dignity and respect.', ml: 'മാന്യമായും ആത്മാഭിമാനത്തോടെയും ജീവിക്കാൻ ആവശ്യമായ അവകാശവാദങ്ങളെയാണ് അവകാശങ്ങൾ എന്ന് വിളിക്കുന്നത്.' },
        { en: 'A claim must be justified and recognized by others to be a right.', ml: 'വെറുമൊരു ആഗ്രഹമല്ല അവകാശം; അത് ന്യായമായതും മറ്റുള്ളവരാൽ അംഗീകരിക്കപ്പെട്ടതുമായിരിക്കണം.' },
        { en: 'Rights help us develop our mental and creative faculties.', ml: 'നമ്മുടെ ബുദ്ധിപരവും സർഗ്ഗാത്മകവുമായ കഴിവുകൾ വികസിപ്പിക്കാൻ അവകാശങ്ങൾ സഹായിക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.2 Where do Rights come from?', ml: '3.2 അവകാശങ്ങൾ എവിടെ നിന്ന് വരുന്നു?' },
      { type: 'h4', en: 'A. Natural Rights (17th - 18th Century)', ml: 'A. സ്വാഭാവിക അവകാശങ്ങൾ (Natural Rights)' },
      { type: 'ul', items: [
        { en: 'Thinkers like John Locke argued that rights are given by God or Nature.', ml: 'ജോൺ ലോക്കിനെപ്പോലുള്ള ചിന്തകർ അവകാശങ്ങൾ പ്രകൃതിയോ ദൈവമോ നൽകിയതാണെന്ന് വാദിച്ചു.' },
        { en: 'Three natural rights: Life, Liberty, and Property.', ml: 'മൂന്ന് പ്രധാന സ്വാഭാവിക അവകാശങ്ങൾ: ജീവൻ, സ്വാതന്ത്ര്യം, സ്വത്ത്.' }
      ]},
      { type: 'h4', en: 'B. Human Rights (Modern view)', ml: 'B. മനുഷ്യാവകാശങ്ങൾ (Human Rights)' },
      { type: 'ul', items: [
        { en: 'Universal Declaration of Human Rights (UDHR) was adopted in 1948.', ml: '1948-ൽ ഐക്യരാഷ്ട്രസഭ സാർവ്വത്രിക മനുഷ്യാവകാശ പ്രഖ്യാപനം നടത്തി.' },
        { en: 'Being human is enough to have these rights.', ml: 'മനുഷ്യനായി ജനിച്ചു എന്നത് മാത്രം മതി ഈ അവകാശങ്ങൾ ലഭിക്കാൻ.' }
      ]},

      { type: 'h3', en: '3.3 Legal Rights and the State', ml: '3.3 നിയമപരമായ അവകാശങ്ങളും ഭരണകൂടവും' },
      { type: 'ul', items: [
        { en: 'Rights become effective only when written into Law.', ml: 'നിയമമായി എഴുതപ്പെടുമ്പോഴാണ് അവകാശങ്ങൾ ഫലപ്രദമാകുന്നത്.' },
        { en: 'The Constitution is the highest law guaranteeing rights.', ml: 'അവകാശങ്ങൾ ഉറപ്പുനൽകുന്ന ഏറ്റവും ഉയർന്ന നിയമമാണ് ഭരണഘടന.' }
      ]},

      { type: 'h3', en: '3.4 Kinds of Rights', ml: '3.4 അവകാശങ്ങളുടെ തരങ്ങൾ (Kinds of Rights)' },
      { type: 'ul', items: [
        { en: 'Political Rights: Right to vote, contest elections, form parties.', ml: 'രാഷ്ട്രീയ അവകാശങ്ങൾ: വോട്ടവകാശം, തിരഞ്ഞെടുപ്പിൽ മത്സരിക്കാനുള്ള അവകാശം, രാഷ്ട്രീയ പാർട്ടികൾ രൂപീകരിക്കാനുള്ള അവകാശം.' },
        { en: 'Civil Liberties: Right to fair trial, express views freely.', ml: 'പൗരസ്വാതന്ത്ര്യം: നീതിപൂർവ്വമായ വിചാരണയ്ക്കുള്ള അവകാശം, അഭിപ്രായ പ്രകടനത്തിനുള്ള അവകാശം.' },
        { en: 'Socio-Economic Rights: Right to work, shelter, health, and minimum wage.', ml: 'സാമൂഹിക-സാമ്പത്തിക അവകാശങ്ങൾ: ജോലി ചെയ്യാനുള്ള അവകാശം, പാർപ്പിടം, ആരോഗ്യം, കുറഞ്ഞ വേതനം.' }
      ]},

      { type: 'h3', en: '3.5 Rights and Responsibilities', ml: '3.5 അവകാശങ്ങളും ഉത്തരവാദിത്തങ്ങളും' },
      { type: 'ul', items: [
        { en: 'Respect Others\' Rights: Your freedom should not hurt others.', ml: 'മറ്റുള്ളവരുടെ അവകാശങ്ങളെ ബഹുമാനിക്കുക: നമ്മുടെ സ്വാതന്ത്ര്യം മറ്റൊരാൾക്ക് ബുദ്ധിമുട്ടുണ്ടാക്കരുത്.' },
        { en: 'Protect Common Good: Responsibility to protect the environment.', ml: 'പൊതുനന്മ സംരക്ഷിക്കുക: പരിസ്ഥിതി സംരക്ഷണം എല്ലാവരുടെയും ഉത്തരവാദിത്തമാണ്.' }
      ]},

      { type: 'h3', en: '3.6 Rights and the State', ml: '3.6 അവകാശങ്ങളും ഭരണകൂടവും' },
      { type: 'ul', items: [
        { en: 'Rights place limitations on the state power.', ml: 'ഭരണകൂടത്തിന്റെ അധികാരത്തിന്മേൽ അവകാശങ്ങൾ നിയന്ത്രണങ്ങൾ ഏർപ്പെടുത്തുന്നു.' },
        { en: 'The state is the guardian but can also be a threat; hence independent judiciary is vital.', ml: 'ഭരണകൂടം അവകാശങ്ങളുടെ സംരക്ഷകനാണെങ്കിലും ചിലപ്പോൾ ഭീഷണിയുമാകാം; അതിനാൽ സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ അത്യാവശ്യമാണ്.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Human Rights Day is celebrated on December 10.', ml: 'ഡിസംബർ 10 മനുഷ്യാവകാശ ദിനമായി ആചരിക്കുന്നു.' },
        { en: 'Immanuel Kant provided the moral base for modern rights.', ml: 'ഇമ്മാനുവൽ കാന്റിന്റെ ചിന്തകളാണ് ആധുനിക അവകാശങ്ങളുടെ ധാർമ്മിക അടിത്തറ.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Rights are essential for dignity and talent development.', ml: 'അന്തസ്സുള്ള ജീവിതത്തിനും കഴിവുകളുടെ വികാസത്തിനും അവകാശങ്ങൾ അത്യാവശ്യമാണ്.' },
        { en: 'Political rights ensure democracy; socio-economic rights ensure survival.', ml: 'രാഷ്ട്രീയ അവകാശങ്ങൾ ജനാധിപത്യം ഉറപ്പാക്കുന്നു; സാമ്പത്തിക അവകാശങ്ങൾ നിലനിൽപ്പ് ഉറപ്പാക്കുന്നു.' },
        { en: 'Rights are always linked with obligations.', ml: 'അവകാശങ്ങൾ എപ്പോഴും കടമകളുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Rights",
      "ml": "അവകാശങ്ങൾ (Rights)"
    },
    "definition": {
      "en": "Reasonable claims recognized by society and the state as essential for living with respect and dignity.",
      "ml": "ബഹുമാനത്തോടും അന്തസ്സോടും കൂടി ജീവിക്കാൻ അത്യന്താപേക്ഷിതമെന്ന് സമൂഹവും ഭരണകൂടവും അംഗീകരിച്ച ന്യായമായ അവകാശവാദങ്ങൾ."
    }
  },
  {
    "term": {
      "en": "Natural Rights",
      "ml": "പ്രകൃതിദത്ത അവകാശങ്ങൾ (Natural Rights)"
    },
    "definition": {
      "en": "An old idea that life, liberty, and property are natural or God-given and cannot be taken away by anyone.",
      "ml": "ജീവൻ, സ്വാതന്ത്ര്യം, സ്വത്ത് എന്നിവ പ്രകൃതിദത്തമോ ഈശ്വരദത്തമോ ആയതിനാൽ ആർക്കും എടുത്തുമാറ്റാനാകില്ല എന്ന പഴയ ആശയം."
    }
  },
  {
    "term": {
      "en": "Human Rights",
      "ml": "മനുഷ്യാവകാശങ്ങൾ (Human Rights)"
    },
    "definition": {
      "en": "Basic things that every individual deserves just for being human and having intrinsic value.",
      "ml": "ഓരോ വ്യക്തിക്കും ഒരു മനുഷ്യനായതുകൊണ്ട് മാത്രം, ആന്തരിക മൂല്യമുള്ളതുകൊണ്ട് അർഹതപ്പെട്ട അടിസ്ഥാനപരമായ കാര്യങ്ങൾ."
    }
  },
  {
    "term": {
      "en": "Legal Rights",
      "ml": "നിയമപരമായ അവകാശങ്ങൾ (Legal Rights)"
    },
    "definition": {
      "en": "Rights officially recognized and protected through government laws or the Constitution.",
      "ml": "ഗവൺമെന്റിന്റെ നിയമങ്ങൾ വഴിയോ ഭരണഘടന വഴിയോ ഔദ്യോഗികമായി അംഗീകരിക്കപ്പെട്ടതും സംരക്ഷിക്കപ്പെടുന്നതുമായ അവകാശങ്ങൾ."
    }
  },
  {
    "term": {
      "en": "Political Rights",
      "ml": "രാഷ്ട്രീയ അവകാശങ്ങൾ (Political Rights)"
    },
    "definition": {
      "en": "Rights that give citizens the opportunity to vote, contest elections, and participate in the governance process.",
      "ml": "വോട്ട് ചെയ്യാനും തിരഞ്ഞെടുപ്പിൽ മത്സരിക്കാനും ഭരണപ്രക്രിയയിൽ പങ്കാളികളാകാനും പൗരന്മാർക്ക് അവസരം നൽകുന്ന അവകാശങ്ങൾ."
    }
  },
  {
    "term": {
      "en": "Economic Rights",
      "ml": "സാമ്പത്തിക അവകാശങ്ങൾ (Economic Rights)"
    },
    "definition": {
      "en": "Rights that enable the effective use of political rights by ensuring decent wages, housing, health, etc.",
      "ml": "മാന്യമായ വേതനം, പാർപ്പിടം, ആരോഗ്യം തുടങ്ങിയവ ഉറപ്പാക്കി രാഷ്ട്രീയ അവകാശങ്ങൾ ഫലപ്രദമായി ഉപയോഗിക്കാൻ പ്രാപ്തരാക്കുന്ന അവകാശങ്ങൾ."
    }
  },
  {
    "term": {
      "en": "Cultural Rights",
      "ml": "സാംസ്കാരിക അവകാശങ്ങൾ (Cultural Rights)"
    },
    "definition": {
      "en": "Rights for minority groups to protect their own language, culture, and educational institutions.",
      "ml": "ന്യൂനപക്ഷ വിഭാഗങ്ങൾക്ക് അവരുടെ സ്വന്തം ഭാഷ, സംസ്കാരം, വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ എന്നിവ സംരക്ഷിക്കാനുള്ള അവകാശങ്ങൾ."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c5-q1",
      type: "mcq",
      stem: { en: "Who argued that 'Life, Liberty, and Property' are natural rights?", ml: "ജീവൻ, സ്വാതന്ത്ര്യം, സ്വത്ത് എന്നിവ സ്വാഭാവിക അവകാശങ്ങളാണെന്ന് വാദിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "John Locke", ml: "ജോൺ ലോക്ക്" } },
        { k: "B", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "C", text: { en: "Jean-Jacques Rousseau", ml: "റൂസ്സോ" } },
        { k: "D", text: { en: "Thomas Hobbes", ml: "തോമസ് ഹോബ്സ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "John Locke was a 17th-century advocate of natural rights.", ml: "പതിനേഴാം നൂറ്റാണ്ടിലെ പ്രമുഖ ചിന്തകനായ ജോൺ ലോക്കാണ് ഈ അവകാശങ്ങൾക്കായി വാദിച്ചത്." }
    },
    {
      q_id: "ps-p2c5-q2",
      type: "mcq",
      stem: { en: "When was the Universal Declaration of Human Rights (UDHR) adopted?", ml: "സാർവ്വത്രിക മനുഷ്യാവകാശ പ്രഖ്യാപനം (UDHR) ഉണ്ടായത് എന്നാണ്?" },
      options: [
        { k: "A", text: { en: "1945", ml: "1945" } },
        { k: "B", text: { en: "1947", ml: "1947" } },
        { k: "C", text: { en: "1948", ml: "1948" } },
        { k: "D", text: { en: "1950", ml: "1950" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "The UN adopted UDHR on 10 December 1948.", ml: "1948 ഡിസംബർ 10-നാണ് ഐക്യരാഷ്ട്രസഭ മനുഷ്യാവകാശ പ്രഖ്യാപനം നടത്തിയത്." }
    },
    {
      q_id: "ps-p2c5-q3",
      type: "mcq",
      stem: { en: "Rights are necessary for leading a life of:", ml: "എങ്ങനെയുള്ള ജീവിതം നയിക്കാനാണ് അവകാശങ്ങൾ അത്യാവശ്യമാകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Luxury", ml: "ആഡംബരം" } },
        { k: "B", text: { en: "Dignity and Self-respect", ml: "അന്തസ്സും ആത്മാഭിമാനവും" } },
        { k: "C", text: { en: "Violence", ml: "അക്രമം" } },
        { k: "D", text: { en: "Power", ml: "അധികാരം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Rights provide the basis for human dignity.", ml: "മനുഷ്യന് മാന്യമായി ജീവിക്കാനുള്ള സാഹചര്യം ഒരുക്കുകയാണ് അവകാശങ്ങൾ ചെയ്യുന്നത്." }
    },
    {
      q_id: "ps-p2c5-q4",
      type: "mcq",
      stem: { en: "The right to form political parties is a:", ml: "രാഷ്ട്രീയ പാർട്ടികൾ രൂപീകരിക്കാനുള്ള അവകാശം ഒരു:" },
      options: [
        { k: "A", text: { en: "Economic Right", ml: "സാമ്പത്തിക അവകാശം" } },
        { k: "B", text: { en: "Political Right", ml: "രാഷ്ട്രീയ അവകാശം" } },
        { k: "C", text: { en: "Natural Right", ml: "സ്വാഭാവിക അവകാശം" } },
        { k: "D", text: { en: "Right to Property", ml: "സ്വത്തിനുള്ള അവകാശം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Political rights allow participation in governance.", ml: "ഭരണരംഗത്ത് സജീവമാകാൻ സഹായിക്കുന്ന അവകാശങ്ങളെയാണ് രാഷ്ട്രീയ അവകാശങ്ങൾ എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c5-q5",
      type: "mcq",
      stem: { en: "Which of the following is a socio-economic right?", ml: "താഴെ പറയുന്നവയിൽ സാമൂഹിക-സാമ്പത്തിക അവകാശം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Right to vote", ml: "വോട്ടവകാശം" } },
        { k: "B", text: { en: "Right to work", ml: "ജോലി ചെയ്യാനുള്ള അവകാശം" } },
        { k: "C", text: { en: "Right to contest elections", ml: "മത്സരിക്കാനുള്ള അവകാശം" } },
        { k: "D", text: { en: "Freedom of speech", ml: "അഭിപ്രായ സ്വാതന്ത്ര്യം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Economic security rights ensure basic survival.", ml: "ജീവിക്കാനുള്ള സാഹചര്യം ഉറപ്പാക്കുന്നവയാണ് സാമ്പത്തിക അവകാശങ്ങൾ." }
    },
    {
      q_id: "ps-p2c5-q6",
      type: "mcq",
      stem: { en: "What is Human Rights Day?", ml: "മനുഷ്യാവകാശ ദിനം എന്ന്?" },
      options: [
        { k: "A", text: { en: "January 26", ml: "ജനുവരി 26" } },
        { k: "B", text: { en: "August 15", ml: "ഓഗസ്റ്റ് 15" } },
        { k: "C", text: { en: "December 10", ml: "ഡിസംബർ 10" } },
        { k: "D", text: { en: "October 2", ml: "ഒക്ടോബർ 2" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Human Rights Day commemorates the UDHR adoption.", ml: "മനുഷ്യാവകാശ പ്രഖ്യാപനത്തിന്റെ ഓർമ്മയ്ക്കായി ഡിസംബർ 10 മനുഷ്യാവകാശ ദിനമായി ആചരിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c5-q7",
      type: "mcq",
      stem: { en: "Natural rights were believed to be given by:", ml: "സ്വാഭാവിക അവകാശങ്ങൾ നൽകിയത് ആരാണെന്നാണ് പണ്ട് വിശ്വസിച്ചിരുന്നത്?" },
      options: [
        { k: "A", text: { en: "The Police", ml: "പോലീസ്" } },
        { k: "B", text: { en: "God or Nature", ml: "ദൈവം അല്ലെങ്കിൽ പ്രകൃതി" } },
        { k: "C", text: { en: "The King", ml: "രാജാവ്" } },
        { k: "D", text: { en: "Rich people", ml: "സമ്പന്നർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The old view was that rights are inherent and divine.", ml: "മനുഷ്യന് ജന്മനാ ലഭിക്കുന്നതാണ് അവകാശങ്ങൾ എന്നതായിരുന്നു പഴയ വാദം." }
    },
    {
      q_id: "ps-p2c5-q8",
      type: "mcq",
      stem: { en: "Rights are not absolute. This means they are subject to:", ml: "അവകാശങ്ങൾ പരിമിതമല്ലാത്തതല്ല. ഇതിന്റെ അർത്ഥം അവ ഏതിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Reasonable restrictions", ml: "ന്യായമായ നിയന്ത്രണങ്ങൾ" } },
        { k: "B", text: { en: "The will of the rich", ml: "സമ്പന്നരുടെ താല്പര്യം" } },
        { k: "C", text: { en: "Corruption", ml: "അഴിമതി" } },
        { k: "D", text: { en: "No limits", ml: "പരിധികളില്ലായ്മ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Public interest can limit individual rights.", ml: "പൊതുനന്മയ്ക്കായി അവകാശങ്ങളിൽ നിയന്ത്രണങ്ങൾ ഏർപ്പെടുത്താം." }
    },
    {
      q_id: "ps-p2c5-q9",
      type: "mcq",
      stem: { en: "Rights place limitations on the power of:", ml: "അവകാശങ്ങൾ ആരുടെ അധികാരത്തെയാണ് നിയന്ത്രിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Poor people", ml: "പാവപ്പെട്ടവരുടെ" } },
        { k: "B", text: { en: "The State/Government", ml: "ഭരണകൂടത്തിന്റെ (State)" } },
        { k: "C", text: { en: "Children", ml: "കുട്ടികളുടെ" } },
        { k: "D", text: { en: "Students", ml: "വിദ്യാർത്ഥികളുടെ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Rights protect individuals from state tyranny.", ml: "ഭരണകൂടം പൗരന്മാരുടെ മേൽ അനാവശ്യമായി അധികാരം പ്രയോഗിക്കുന്നത് അവകാശങ്ങൾ തടയുന്നു." }
    },
    {
      q_id: "ps-p2c5-q10",
      type: "mcq",
      stem: { en: "Which thinker is associated with human dignity as the base of rights?", ml: "മനുഷ്യന്റെ അന്തസ്സാണ് അവകാശങ്ങളുടെ അടിസ്ഥാനമെന്ന് വാദിച്ച ചിന്തകൻ ആര്?" },
      options: [
        { k: "A", text: { en: "Immanuel Kant", ml: "ഇമ്മാനുവൽ കാന്റ്" } },
        { k: "B", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "C", text: { en: "Adam Smith", ml: "ആദം സ്മിത്ത്" } },
        { k: "D", text: { en: "Thomas Hobbes", ml: "തോമസ് ഹോബ്സ്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Kant said we should treat humanity as an end, never as a means.", ml: "മനുഷ്യരെ ലക്ഷ്യങ്ങളായി കാണണമെന്നും ഉപകരണങ്ങളായി കാണരുതെന്നും കാന്റ് പറഞ്ഞു." }
    },
    {
      q_id: "ps-p2c5-q11",
      type: "mcq",
      stem: { en: "The 'Right to shelter' is a form of:", ml: "പാർപ്പിടത്തിനുള്ള അവകാശം ഏത് വിഭാഗത്തിൽ പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Political Right", ml: "രാഷ്ട്രീയ അവകാശം" } },
        { k: "B", text: { en: "Socio-Economic Right", ml: "സാമൂഹിക-സാമ്പത്തിക അവകാശം" } },
        { k: "C", text: { en: "Right to be King", ml: "രാജാവാകാനുള്ള അവകാശം" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Basic necessities are covered under economic rights.", ml: "ജീവിക്കാൻ ആവശ്യമായ അടിസ്ഥാന സൗകര്യങ്ങൾ സാമ്പത്തിക അവകാശമാണ്." }
    },
    {
      q_id: "ps-p2c5-q12",
      type: "mcq",
      stem: { en: "Citizens should be alert about their rights to ensure:", ml: "പൗരന്മാർ തങ്ങളുടെ അവകാശങ്ങളെക്കുറിച്ച് ജാഗ്രതയുള്ളവരായിരിക്കേണ്ടത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "They can sleep more", ml: "കൂടുതൽ ഉറങ്ങാൻ" } },
        { k: "B", text: { en: "State doesn't take them away slowly", ml: "ഭരണകൂടം അവ സാവധാനം തട്ടിയെടുക്കാതിരിക്കാൻ" } },
        { k: "C", text: { en: "They can ignore taxes", ml: "നികുതി നൽകാതിരിക്കാൻ" } },
        { k: "D", text: { en: "They can fight police", ml: "പോലീസിനോട് വഴക്കിടാൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Vigilance is the price of liberty.", ml: "ജാഗ്രതയുള്ള പൗരന്മാർക്കേ സ്വാതന്ത്ര്യം നിലനിർത്താൻ കഴിയൂ." }
    },
    {
      q_id: "ps-p2c5-q13",
      type: "mcq",
      stem: { en: "A claim is recognized as a right only when it is:", ml: "ഒരു അവകാശവാദം എപ്പോഴാണ് അവകാശമായി മാറുന്നത്?" },
      options: [
        { k: "A", text: { en: "Justified and socially recognized", ml: "ന്യായമായതും സമൂഹം അംഗീകരിച്ചതുമാകുമ്പോൾ" } },
        { k: "B", text: { en: "Kept secret", ml: "രഹസ്യമായി വെക്കുമ്പോൾ" } },
        { k: "C", text: { en: "Illegal", ml: "നിയമവിരുദ്ധമാകുമ്പോൾ" } },
        { k: "D", text: { en: "Expensive", ml: "വിലകൂടിയതാകുമ്പോൾ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Social recognition is key to converting a wish into a right.", ml: "സമൂഹം അംഗീകരിക്കുന്ന ന്യായമായ ആവശ്യങ്ങളെയാണ് അവകാശങ്ങൾ എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c5-q14",
      type: "mcq",
      stem: { en: "Universal Declaration of Human Rights was given by:", ml: "സാർവ്വത്രിക മനുഷ്യാവകാശ പ്രഖ്യാപനം നടത്തിയത് ആര്?" },
      options: [
        { k: "A", text: { en: "United Nations (UN)", ml: "ഐക്യരാഷ്ട്രസഭ" } },
        { k: "B", text: { en: "The British Parliament", ml: "ബ്രിട്ടീഷ് പാർലമെന്റ്" } },
        { k: "C", text: { en: "Indian Government", ml: "ഇന്ത്യൻ ഗവൺമെന്റ്" } },
        { k: "D", text: { en: "US President", ml: "അമേരിക്കൻ പ്രസിഡന്റ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "UN adopted the declaration to protect people worldwide.", ml: "ലോകമെമ്പാടുമുള്ള മനുഷ്യരെ സംരക്ഷിക്കാനാണ് ഐക്യരാഷ്ട്രസഭ ഇത് കൊണ്ടുവന്നത്." }
    },
    {
      q_id: "ps-p2c5-q15",
      type: "mcq",
      stem: { en: "Every right carries a corresponding:", ml: "ഓരോ അവകാശത്തോടൊപ്പം എന്തു കൂടി വരുന്നു?" },
      options: [
        { k: "A", text: { en: "Responsibility / Duty", ml: "ഉത്തരവാദിത്തം / കടമ" } },
        { k: "B", text: { en: "Gift", ml: "സമ്മാനം" } },
        { k: "C", text: { en: "Weapon", ml: "ആയുധം" } },
        { k: "D", text: { en: "Money", ml: "പണം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Rights and duties are two sides of the same coin.", ml: "നമുക്ക് അവകാശങ്ങളുള്ളപ്പോൾ മറ്റുള്ളവരോട് ചില കടമകളും നമുക്കുണ്ട്." }
    },
    {
      q_id: "ps-p2c5-q16",
      type: "mcq",
      stem: { en: "Which of the following protects our rights from the state?", ml: "ഭരണകൂടത്തിൽ നിന്ന് നമ്മുടെ അവകാശങ്ങളെ സംരക്ഷിക്കുന്നത് ആര്?" },
      options: [
        { k: "A", text: { en: "The Army", ml: "സൈന്യം" } },
        { k: "B", text: { en: "Independent Judiciary", ml: "സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ" } },
        { k: "C", text: { en: "Political parties", ml: "രാഷ്ട്രീയ പാർട്ടികൾ" } },
        { k: "D", text: { en: "Private companies", ml: "സ്വകാര്യ കമ്പനികൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Courts act as the protector of constitutional rights.", ml: "അവകാശങ്ങൾ ലംഘിക്കപ്പെടുമ്പോൾ കോടതിയെ സമീപിക്കാൻ നമുക്ക് അവകാശമുണ്ട്." }
    },
    {
      q_id: "ps-p2c5-q17",
      type: "mcq",
      stem: { en: "The 'Right to Education' in India is:", ml: "ഇന്ത്യയിലെ 'വിദ്യാഭ്യാസത്തിനുള്ള അവകാശം':" },
      options: [
        { k: "A", text: { en: "Only for rich", ml: "സമ്പന്നർക്ക് മാത്രം" } },
        { k: "B", text: { en: "A Fundamental Right", ml: "ഒരു മൗലികാവകാശം" } },
        { k: "C", text: { en: "Illegal", ml: "നിയമവിരുദ്ധം" } },
        { k: "D", text: { en: "Optional", ml: "ഐച്ഛികം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Education is essential for individual development.", ml: "എല്ലാവർക്കും പ്രാഥമിക വിദ്യാഭ്യാസം ഉറപ്പാക്കുന്ന മൗലികാവകാശമാണിത്." }
    },
    {
      q_id: "ps-p2c5-q18",
      type: "mcq",
      stem: { en: "My right to play music is limited by:", ml: "പാട്ടു കേൾക്കാനുള്ള എന്റെ അവകാശത്തിനുള്ള പരിധി എന്ത്?" },
      options: [
        { k: "A", text: { en: "Your right to peace and sleep", ml: "സമാധാനമായി ഉറങ്ങാനുള്ള നിങ്ങളുടെ അവകാശം" } },
        { k: "B", text: { en: "My battery life", ml: "ബാറ്ററി ചാർജ്" } },
        { k: "C", text: { en: "The price of the speaker", ml: "സ്പീക്കറുടെ വില" } },
        { k: "D", text: { en: "Language of the song", ml: "പാട്ടിന്റെ ഭാഷ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "One's right ends where another's begins.", ml: "നമ്മുടെ അവകാശങ്ങൾ മറ്റൊരാളുടെ അവകാശത്തിന് തടസ്സമാകരുത്." }
    },
    {
      q_id: "ps-p2c5-q19",
      type: "mcq",
      stem: { en: "UDHR was adopted in the year:", ml: "UDHR നിലവിൽ വന്ന വർഷം ഏത്?" },
      options: [
        { k: "A", text: { en: "1948", ml: "1948" } },
        { k: "B", text: { en: "1950", ml: "1950" } },
        { k: "C", text: { en: "1919", ml: "1919" } },
        { k: "D", text: { en: "2000", ml: "2000" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It was a response to the atrocities of World War II.", ml: "രണ്ടാം ലോകമഹായുദ്ധത്തിന് ശേഷം 1948-ലാണ് ഇത് അംഗീകരിച്ചത്." }
    },
    {
      q_id: "ps-p2c5-q20",
      type: "mcq",
      stem: { en: "Right to express views freely is a:", ml: "അഭിപ്രായം പ്രകടിപ്പിക്കാനുള്ള അവകാശം ഒരു:" },
      options: [
        { k: "A", text: { en: "Civil Liberty", ml: "പൗരസ്വാതന്ത്ര്യം (Civil Liberty)" } },
        { k: "B", text: { en: "Economic privilege", ml: "സാമ്പത്തിക ആനുകൂല്യം" } },
        { k: "C", text: { en: "Military rule", ml: "സൈനിക നിയമം" } },
        { k: "D", text: { en: "Tax exemption", ml: "നികുതി ഇളവ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Civil liberties protect individual expression.", ml: "സ്വതന്ത്രമായി ചിന്തിക്കാനും സംസാരിക്കാനുമുള്ള സാഹചര്യം പൗരസ്വാതന്ത്ര്യമാണ്." }
    },
    {
      q_id: "ps-p2c5-q21",
      type: "mcq",
      stem: { en: "Which natural right was removed from the list of fundamental rights in India?", ml: "ഇന്ത്യയിലെ മൗലികാവകാശ പട്ടികയിൽ നിന്ന് നീക്കം ചെയ്ത സ്വാഭാവിക അവകാശം ഏത്?" },
      options: [
        { k: "A", text: { en: "Life", ml: "ജീവൻ" } },
        { k: "B", text: { en: "Property", ml: "സ്വത്ത്" } },
        { k: "C", text: { en: "Liberty", ml: "സ്വാതന്ത്ര്യം" } },
        { k: "D", text: { en: "Equality", ml: "സമത്വം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Right to property was moved to Article 300A.", ml: "സ്വത്തിനുള്ള അവകാശം ഇപ്പോൾ ഒരു മൗലികാവകാശമല്ല." }
    },
    {
      q_id: "ps-p2c5-q22",
      type: "mcq",
      stem: { en: "Rights are necessary for the development of our:", ml: "ഏതിന്റെ വികാസത്തിനാണ് അവകാശങ്ങൾ അത്യന്താപേക്ഷിതം?" },
      options: [
        { k: "A", text: { en: "Talents and Mental faculties", ml: "കഴിവുകളും മാനസിക ശേഷിയും" } },
        { k: "B", text: { en: "Bank balance only", ml: "ബാങ്ക് ബാലൻസ് മാത്രം" } },
        { k: "C", text: { en: "Physical muscles", ml: "ശാരീരിക ശക്തി" } },
        { k: "D", text: { en: "Height", ml: "ഉയരം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Rights like education and freedom are for growth.", ml: "നമ്മുടെ വ്യക്തിത്വം വികസിപ്പിക്കാൻ സ്വാതന്ത്ര്യവും അവസരങ്ങളും വേണം." }
    },
    {
      q_id: "ps-p2c5-q23",
      type: "mcq",
      stem: { en: "Political rights are useless without basic:", ml: "അടിസ്ഥാനപരമായ എന്തില്ലെങ്കിൽ രാഷ്ട്രീയ അവകാശങ്ങൾ കൊണ്ട് പ്രയോജനമില്ല?" },
      options: [
        { k: "A", text: { en: "Economic security", ml: "സാമ്പത്തിക സുരക്ഷിതത്വം" } },
        { k: "B", text: { en: "Television", ml: "ടെലിവിഷൻ" } },
        { k: "C", text: { en: "Internet", ml: "ഇന്റർനെറ്റ്" } },
        { k: "D", text: { en: "Car", ml: "കാർ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "A starving person cannot think about voting.", ml: "ഭക്ഷണം ഇല്ലാത്ത ഒരാൾക്ക് രാഷ്ട്രീയ പ്രവർത്തനങ്ങളിൽ ഏർപ്പെടാൻ കഴിയില്ല." }
    },
    {
      q_id: "ps-p2c5-q24",
      type: "mcq",
      stem: { en: "Respecting the environment is our:", ml: "പരിസ്ഥിതിയെ ബഹുമാനിക്കുക എന്നത് നമ്മുടെ:" },
      options: [
        { k: "A", text: { en: "Responsibility / Obligation", ml: "ഉത്തരവാദിത്തം / കടമ" } },
        { k: "B", text: { en: "Right", ml: "അവകാശം" } },
        { k: "C", text: { en: "Profit", ml: "ലാഭം" } },
        { k: "D", text: { en: "Law", ml: "നിയമം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Protecting nature is a duty linked to the right to healthy life.", ml: "നല്ല പരിസ്ഥിതിക്ക് നമുക്ക് അവകാശമുള്ളതുപോലെ അത് സംരക്ഷിക്കാൻ നമുക്ക് കടമയുമുണ്ട്." }
    },
    {
      q_id: "ps-p2c5-q25",
      type: "mcq",
      stem: { en: "Why is an independent judiciary vital for rights?", ml: "അവകാശ സംരക്ഷണത്തിന് സ്വതന്ത്ര നീതിന്യായ വ്യവസ്ഥ അത്യാവശ്യമാകുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "To hold state accountable", ml: "ഭരണകൂടത്തെ ഉത്തരവാദിത്തമുള്ളതാക്കാൻ" } },
        { k: "B", text: { en: "To collect more fines", ml: "കൂടുതൽ പിഴ ഈടാക്കാൻ" } },
        { k: "C", text: { en: "To help the rich", ml: "സമ്പന്നരെ സഹായിക്കാൻ" } },
        { k: "D", text: { en: "To close schools", ml: "സ്കൂളുകൾ അടച്ചുപൂട്ടാൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Courts ensure the government follows the Constitution.", ml: "ഭരണകൂടം പൗരന്മാരുടെ അവകാശങ്ങൾ ലംഘിക്കുമ്പോൾ കോടതികൾ അതിനെ ചോദ്യം ചെയ്യുന്നു." }
    },
    {
      q_id: "ps-p2c5-q26",
      type: "mcq",
      stem: { en: "Justified claims become rights when they are recognized by:", ml: "ന്യായമായ ആവശ്യങ്ങൾ ആര് അംഗീകരിക്കുമ്പോഴാണ് അവകാശങ്ങളായി മാറുന്നത്?" },
      options: [
        { k: "A", text: { en: "Society and State", ml: "സമൂഹവും ഭരണകൂടവും" } },
        { k: "B", text: { en: "Only friends", ml: "സുഹൃത്തുക്കൾ മാത്രം" } },
        { k: "C", text: { en: "Foreigners", ml: "വിദേശികൾ" } },
        { k: "D", text: { en: "Only rich", ml: "സമ്പന്നർ മാത്രം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Rights are social claims backed by law.", ml: "സമൂഹത്തിന്റെ അംഗീകാരവും നിയമത്തിന്റെ സംരക്ഷണവും ഇതിന് വേണം." }
    },
    {
      q_id: "ps-p2c5-q27",
      type: "mcq",
      stem: { en: "Immanuel Kant's view focused on:", ml: "ഇമ്മാനുവൽ കാന്റിന്റെ വീക്ഷണം എന്തിലായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Human Dignity", ml: "മനുഷ്യന്റെ അന്തസ്സ്" } },
        { k: "B", text: { en: "Making money", ml: "പണം ഉണ്ടാക്കൽ" } },
        { k: "C", text: { en: "Winning wars", ml: "യുദ്ധം വിജയിക്കൽ" } },
        { k: "D", text: { en: "Destroying art", ml: "കലയെ നശിപ്പിക്കൽ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Kant is the philosopher of human dignity.", ml: "മനുഷ്യൻ ഒരു ഉപകരണമല്ല, മറിച്ച് ബഹുമാനം അർഹിക്കുന്ന വ്യക്തിയാണെന്ന് അദ്ദേഹം പറഞ്ഞു." }
    },
    {
      q_id: "ps-p2c5-q28",
      type: "mcq",
      stem: { en: "Which of these is NOT a kind of right mentioned in the notes?", ml: "കുറിപ്പുകളിൽ വിവരിച്ചിട്ടില്ലാത്ത അവകാശം ഏത്?" },
      options: [
        { k: "A", text: { en: "Political Rights", ml: "രാഷ്ട്രീയ അവകാശങ്ങൾ" } },
        { k: "B", text: { en: "Socio-Economic Rights", ml: "സാമൂഹിക-സാമ്പത്തിക അവകാശങ്ങൾ" } },
        { k: "C", text: { en: "Rights to become a God", ml: "ദൈവമാകാനുള്ള അവകാശം" } },
        { k: "D", text: { en: "Civil Liberties", ml: "പൗരസ്വാതന്ത്ര്യം" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "Rights are human claims within a society.", ml: "മനുഷ്യർക്ക് സമൂഹത്തിൽ മാന്യമായി ജീവിക്കാനുള്ള കാര്യങ്ങളാണ് അവകാശങ്ങൾ." }
    },
    {
      q_id: "ps-p2c5-q29",
      type: "mcq",
      stem: { en: "The 'Right to work' belongs to which category?", ml: "ജോലി ചെയ്യാനുള്ള അവകാശം ഏത് വിഭാഗത്തിലാണ് വരുന്നത്?" },
      options: [
        { k: "A", text: { en: "Socio-Economic Rights", ml: "സാമൂഹിക-സാമ്പത്തിക അവകാശം" } },
        { k: "B", text: { en: "Political Rights", ml: "രാഷ്ട്രീയ അവകാശം" } },
        { k: "C", text: { en: "Military code", ml: "സൈനിക നിയമം" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Survival through labor is an economic right.", ml: "മാന്യമായി പണിയെടുത്ത് ജീവിക്കാനുള്ള സാഹചര്യം ഒരു സാമ്പത്തിക അവകാശമാണ്." }
    },
    {
      q_id: "ps-p2c5-q30",
      type: "mcq",
      stem: { en: "Are rights and duties inseparable?", ml: "അവകാശങ്ങളും കടമകളും വേർതിരിക്കാൻ കഴിയാത്തതാണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "അല്ല" } },
        { k: "C", text: { en: "Only in India", ml: "ഇന്ത്യയിൽ മാത്രം" } },
        { k: "D", text: { en: "Only for children", ml: "കുട്ടികൾക്ക് മാത്രം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Rights without duties lead to anarchy.", ml: "കടമകളില്ലാത്ത അവകാശങ്ങൾ പ്രശ്നങ്ങളുണ്ടാക്കും; അവ രണ്ടും ഒരുമിച്ച് പോകണം." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit6: Lesson = {
  id: "pl-ps-11-p2-u6",
  title: { en: "Citizenship", ml: "പൗരത്വം (Citizenship)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=FSUO5gdrMOw",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the concept of citizenship and its legal basis", ml: "പൗരത്വം എന്ന ആശയവും അതിന്റെ നിയമപരമായ അടിസ്ഥാനവും മനസ്സിലാക്കുക" },
    { en: "Explain the difference between full membership and alien status", ml: "പൂർണ്ണ അംഗത്വവും വിദേശ പദവിയും തമ്മിലുള്ള വ്യത്യാസം വിവരിക്കുക" },
    { en: "Identify the ways of acquiring citizenship in India", ml: "ഇന്ത്യയിൽ പൗരത്വം നേടാനുള്ള വഴികൾ തിരിച്ചറിയുക" },
    { en: "Analyze the challenges of refugees and global citizenship", ml: "അഭയാർത്ഥികൾ നേരിടുന്ന വെല്ലുവിളികളും ആഗോള പൗരത്വവും വിശകലനം ചെയ്യുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the concept of citizenship, the methods of acquiring it, and the emergence of global citizenship.", 
      ml: "പൗരത്വം എന്ന ആശയം, അത് നേടിയെടുക്കാനുള്ള രീതികൾ, ആഗോള പൗരത്വം എന്ന ആശയത്തിന്റെ ഉദയം എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of full and equal membership, the Citizenship Act of 1955, and the issues of stateless persons.", 
      ml: "പൂർണ്ണവും തുല്യവുമായ അംഗത്വം, 1955-ലെ പൗരത്വ നിയമം, പൗരത്വമില്ലാത്തവർ നേരിടുന്ന പ്രശ്നങ്ങൾ എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of citizenship. It explains what it means to be a citizen, the distinction between "full and equal membership" and "aliens", the various ways of acquiring citizenship, and the challenges of "global citizenship" in a world of migration and stateless people.', ml: 'പൗരത്വം (Citizenship) എന്ന ആശയത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. ഒരു പൗരനായിരിക്കുക എന്നതിനർത്ഥം എന്താണ്, "പൂർണ്ണവും തുല്യവുമായ അംഗത്വവും" "വിദേശികളും" (Aliens) തമ്മിലുള്ള വ്യത്യാസം, പൗരത്വം നേടിയെടുക്കാനുള്ള വിവിധ വഴികൾ, കുടിയേറ്റവും പൗരത്വമില്ലായ്മയും നിലനിൽക്കുന്ന ലോകത്ത് "ആഗോള പൗരത്വം" നേരിടുന്ന വെല്ലുവിളികൾ എന്നിവ ഇവിടെ വിശദീകരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Citizenship', ml: 'പൗരത്വം (Citizenship)'}, {en: 'Full and equal membership of a political community (State).', ml: 'ഒരു രാഷ്ട്രീയ സമൂഹത്തിലെ (രാജ്യം) പൂർണ്ണവും തുല്യവുമായ അംഗത്വം.'}, {en: 'Having an Indian Passport.', ml: 'ഇന്ത്യൻ പാസ്‌പോർട്ട് കൈവശം വെക്കുന്നത്.'}],
          [{en: 'Aliens', ml: 'വിദേശികൾ (Aliens)'}, {en: 'Persons living in a country who are not its citizens.', ml: 'ഒരു രാജ്യത്ത് താമസിക്കുന്നവരും എന്നാൽ ആ രാജ്യത്തെ പൗരന്മാരല്ലാത്തവരും.'}, {en: 'Foreign tourists or workers.', ml: 'വിദേശ വിനോദസഞ്ചാരികൾ അല്ലെങ്കിൽ തൊഴിലാളികൾ.'}],
          [{en: 'Stateless Persons', ml: 'പൗരത്വമില്ലാത്തവർ (Stateless Persons)'}, {en: 'Individuals not recognized as citizens by any state.', ml: 'ഒരു രാജ്യവും പൗരന്മാരായി അംഗീകരിക്കാത്ത വ്യക്തികൾ.'}, {en: 'Refugees fleeing war.', ml: 'യുദ്ധം മൂലം പലായനം ചെയ്യുന്ന അഭയാർത്ഥികൾ.'}],
          [{en: 'Global Citizenship', ml: 'ആഗോള പൗരത്വം (Global Citizenship)'}, {en: 'Seeing oneself as a member of a global community beyond borders.', ml: 'ദേശീയ അതിർത്തികൾക്ക് അപ്പുറം ഒരു ആഗോള സമൂഹത്തിലെ അംഗമായി സ്വയം കരുതുന്ന രീതി.'}, {en: 'Cooperating on climate change.', ml: 'കാലാവസ്ഥാ വ്യതിയാനത്തിനെതിരെയുള്ള സഹകരണം.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is Citizenship?', ml: '3.1 എന്താണ് പൗരത്വം? (What is Citizenship?)' },
      { type: 'ul', items: [
        { en: 'Citizenship provides a sense of belonging and identity.', ml: 'പൗരത്വം ഒരു വ്യക്തിക്ക് സ്വത്വബോധവും (Identity) ഒരു സമൂഹത്തിൽ ഉൾപ്പെട്ടിരിക്കുന്നു എന്ന തോന്നലും നൽകുന്നു.' },
        { en: 'It involves both Rights (like voting) and Duties (like paying taxes).', ml: 'ഇതിൽ വോട്ടവകാശം പോലുള്ള അവകാശങ്ങളും നികുതി അടയ്ക്കൽ പോലുള്ള കടമകളും ഉൾപ്പെടുന്നു.' },
        { en: 'T.H. Marshall defined citizenship as "full and equal membership of a community."', ml: 'ടി.എച്ച്. മാർഷൽ പൗരത്വത്തെ "ഒരു സമൂഹത്തിലെ പൂർണ്ണവും തുല്യവുമായ അംഗത്വം" എന്ന് നിർവ്വചിച്ചു.' }
      ]},

      { type: 'h3', en: '3.2 Full and Equal Membership', ml: '3.2 പൂർണ്ണവും തുല്യവുമായ അംഗത്വം' },
      { type: 'ul', items: [
        { en: 'In a democracy, all citizens are supposed to have equal rights regardless of status.', ml: 'ഒരു ജനാധിപത്യ രാജ്യത്ത് പദവി നോക്കാതെ എല്ലാ പൗരന്മാർക്കും തുല്യ അവകാശങ്ങൾ ഉണ്ടായിരിക്കണം.' },
        { en: 'Reality check: Slum dwellers and migrant workers often struggle to enjoy full rights.', ml: 'യാഥാർത്ഥ്യം: ചേരി നിവാസികൾക്കും കുടിയേറ്റ തൊഴിലാളികൾക്കും പലപ്പോഴും തങ്ങളുടെ അവകാശങ്ങൾ പൂർണ്ണമായി ആസ്വദിക്കാൻ കഴിയാറില്ല.' },
        { en: 'Question of "Right to the City": Access to basic housing and work in urban areas.', ml: '"നഗരത്തിനുള്ള അവകാശം": നഗരങ്ങളിൽ അടിസ്ഥാന പാർപ്പിടത്തിനും ജോലിക്കുമുള്ള അവകാശത്തെക്കുറിച്ചുള്ള ചോദ്യം.' }
      ]},

      { type: 'h3', en: '3.3 Citizens and the Nation', ml: '3.3 പൗരന്മാരും രാഷ്ട്രവും' },
      { type: 'ul', items: [
        { en: 'Modern citizenship is linked to a Nation-State.', ml: 'ആധുനിക പൗരത്വം ഒരു രാഷ്ട്രവുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു.' },
        { en: 'Inclusive Citizenship: India\'s identity is secular and democratic, not just religious.', ml: 'ഉൾക്കൊള്ളുന്ന പൗരത്വം: ഇന്ത്യയുടെ പൗരത്വ ദർശനം കേവലം മതാധിഷ്ഠിതമല്ല, മറിച്ച് മതേതരവും ജനാധിപത്യപരവുമാണ്.' }
      ]},

      { type: 'h3', en: '3.4 How is Citizenship acquired?', ml: '3.4 പൗരത്വം എങ്ങനെ നേടിയെടുക്കാം?' },
      { type: 'ul', items: [
        { en: 'Jus Soli (Right of Soil): Based on the place of birth.', ml: 'ജസ് സോളി (Jus Soli): ജനിച്ച സ്ഥലത്തിന്റെ അടിസ്ഥാനത്തിലുള്ള പൗരത്വം.' },
        { en: 'Jus Sanguinis (Right of Blood): Based on nationality of parents.', ml: 'ജസ് സാങ്ക്വിനിസ് (Jus Sanguinis): മാതാപിതാക്കളുടെ പൗരത്വത്തിന്റെ അടിസ്ഥാനത്തിലുള്ളത്.' }
      ]},
      { type: 'h4', en: 'In India:', ml: 'ഇന്ത്യയിൽ:' },
      { type: 'ul', items: [
        { en: 'Acquired by Birth, Descent, Registration, Naturalization, or Incorporation of territory.', ml: 'ജനനം, വംശപരമ്പര, രജിസ്‌ട്രേഷൻ, സ്വാഭാവിക പൗരത്വം (Naturalization), ഭൂപ്രദേശങ്ങൾ കൂട്ടിച്ചേർക്കൽ എന്നിവയിലൂടെ പൗരത്വം നേടാം.' },
        { en: 'Governed by the Citizenship Act of 1955.', ml: 'ഇത് 1955-ലെ പൗരത്വ നിയമം വഴിയാണ് നിയന്ത്രിക്കപ്പെടുന്നത്.' }
      ]},

      { type: 'h3', en: '3.5 Universal Citizenship and Refugees', ml: '3.5 സാർവ്വത്രിക പൗരത്വവും അഭയാർത്ഥികളും' },
      { type: 'ul', items: [
        { en: 'Ideal: Every human being should be a citizen of some state.', ml: 'ആദർശം: ഓരോ മനുഷ്യനും ഏതെങ്കിലും ഒരു രാജ്യത്തെ പൗരനായിരിക്കണം.' },
        { en: 'Refugee Crisis: Wars create millions of stateless persons who lose their rights.', ml: 'അഭയാർത്ഥി പ്രശ്നം: യുദ്ധങ്ങൾ കാരണം ലക്ഷക്കണക്കിന് ആളുകൾക്ക് പൗരത്വം നഷ്ടപ്പെടുകയും അവർ കഷ്ടത അനുഭവിക്കുകയും ചെയ്യുന്നു.' }
      ]},

      { type: 'h3', en: '3.6 Global Citizenship', ml: '3.6 ആഗോള പൗരത്വം (Global Citizenship)' },
      { type: 'ul', items: [
        { en: 'Global Village: We live in an interconnected world.', ml: 'ആഗോള ഗ്രാമം: പരസ്പരം ബന്ധിക്കപ്പെട്ട ഒരു ലോകത്താണ് നാം ജീവിക്കുന്നത്.' },
        { en: 'Global warming and pandemics need collective action beyond national boundaries.', ml: 'ആഗോള താപനം, പകർച്ചവ്യാധികൾ തുടങ്ങിയവ അതിർത്തികൾക്കപ്പുറമുള്ള കൂട്ടായ പ്രവർത്തനം ആവശ്യപ്പെടുന്നു.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Citizenship is a legal status and a political identity.', ml: 'പൗരത്വം ഒരു നിയമപരമായ പദവിയും രാഷ്ട്രീയമായ സ്വത്വവുമാണ്.' },
        { en: 'India provides Single Citizenship (no separate state citizenship).', ml: 'ഇന്ത്യയിൽ ഏക പൗരത്വമാണ് (Single Citizenship) നിലവിലുള്ളത്.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Citizenship means full and equal membership of a state.', ml: 'ഒരു രാജ്യത്തെ പൂർണ്ണവും തുല്യവുമായ അംഗത്വമാണ് പൗരത്വം.' },
        { en: 'Includes both rights guaranteed by the state and duties towards it.', ml: 'സ്റ്റേറ്റ് നൽകുന്ന അവകാശങ്ങളും സ്റ്റേറ്റിനോടുള്ള കടമകളും ഇതിൽ ഉൾപ്പെടുന്നു.' },
        { en: 'Global citizenship handles worldwide challenges collectively.', ml: 'ആഗോള വെല്ലുവിളികളെ നേരിടാൻ ആഗോള പൗരത്വം സഹായിക്കുന്നു.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Citizenship",
      "ml": "പൗരത്വം (Citizenship)"
    },
    "definition": {
      "en": "Full and equal membership in a political community that grants all rights equally to citizens of a country.",
      "ml": "ഒരു രാജ്യത്തിലെ പൗരന്മാർക്ക് എല്ലാ അവകാശങ്ങളും തുല്യമായി നൽകുന്ന, ഒരു രാഷ്ട്രീയ സമൂഹത്തിലെ പൂർണ്ണവും തുല്യവുമായ അംഗത്വം."
    }
  },
  {
    "term": {
      "en": "Universal Citizenship",
      "ml": "സാർവ്വത്രിക പൗരത്വം (Universal Citizenship)"
    },
    "definition": {
      "en": "A broad democratic concept of citizenship that includes refugees who do not have their own country and citizenship.",
      "ml": "സ്വന്തമായി രാജ്യവും പൗരത്വവുമില്ലാത്ത അഭയാർത്ഥികളെയും ഉൾക്കൊള്ളുന്ന വിശാലമായ ജനാധിപത്യ പൗരത്വ സങ്കൽപ്പം."
    }
  },
  {
    "term": {
      "en": "Global Citizenship",
      "ml": "ആഗോള പൗരത്വം (Global Citizenship)"
    },
    "definition": {
      "en": "The idea that the world is interconnected and that global cooperation is needed to solve human problems across borders.",
      "ml": "ലോകം പരസ്പരം ബന്ധപ്പെട്ടിരിക്കുന്ന ഒന്നാണെന്നും, അതിർത്തികൾക്കപ്പുറത്ത് മാനുഷിക പ്രശ്നങ്ങൾ പരിഹരിക്കാൻ ആഗോള സഹകരണം വേണമെന്നുമുള്ള ആശയം."
    }
  },
  {
    "term": {
      "en": "T.H. Marshall",
      "ml": "ടി.എച്ച്. മാർഷൽ (T.H. Marshall)"
    },
    "definition": {
      "en": "A British sociologist who saw citizenship as a tool to eliminate inequalities in society and classified rights into three types.",
      "ml": "പൗരത്വത്തെ സമൂഹത്തിലെ അസമത്വങ്ങൾ ഇല്ലാതാക്കാനുള്ള ഉപകരണമായി കണ്ട, അവകാശങ്ങളെ മൂന്നായി തരംതിരിച്ച ബ്രിട്ടീഷ് സാമൂഹ്യശാസ്ത്രജ്ഞൻ."
    }
  },
  {
    "term": {
      "en": "Martin Luther King Jr.",
      "ml": "മാർട്ടിൻ ലൂതർ കിംഗ് ജൂനിയർ (Martin Luther King Jr.)"
    },
    "definition": {
      "en": "A leader of Black people who led a peaceful struggle against apartheid laws in America.",
      "ml": "അമേരിക്കയിലെ വർണ്ണവിവേചന നിയമങ്ങൾക്കെതിരെ സമാധാനപരമായ പോരാട്ടത്തിന് നേതൃത്വം നൽകിയ കറുത്ത വർഗ്ഗക്കാരുടെ നേതാവ്."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c6-q1",
      type: "mcq",
      stem: { en: "Who defined citizenship as 'full and equal membership of a community'?", ml: "പൗരത്വത്തെ 'ഒരു സമൂഹത്തിലെ പൂർണ്ണവും തുല്യവുമായ അംഗത്വം' എന്ന് നിർവ്വചിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "B", text: { en: "T.H. Marshall", ml: "ടി.എച്ച്. മാർഷൽ" } },
        { k: "C", text: { en: "John Rawls", ml: "ജോൺ റോൾസ്" } },
        { k: "D", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "T.H. Marshall is famous for his theory of citizenship rights.", ml: "പൗരത്വത്തെക്കുറിച്ച് ആഴത്തിൽ പഠിച്ച ചിന്തകനാണ് ടി.എച്ച്. മാർഷൽ." }
    },
    {
      q_id: "ps-p2c6-q2",
      type: "mcq",
      stem: { en: "Persons living in a country who are NOT its citizens are called:", ml: "ഒരു രാജ്യത്ത് താമസിക്കുന്നവരും എന്നാൽ അവിടുത്തെ പൗരന്മാരല്ലാത്തവരും അറിയപ്പെടുന്നത്:" },
      options: [
        { k: "A", text: { en: "Patriots", ml: "ദേശസ്‌നേഹികൾ" } },
        { k: "B", text: { en: "Aliens", ml: "വിദേശികൾ (Aliens)" } },
        { k: "C", text: { en: "Stateless", ml: "പൗരത്വമില്ലാത്തവർ" } },
        { k: "D", text: { en: "Ambassadors", ml: "അംബാസഡർമാർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Aliens enjoy some civil rights but not all political rights like voting.", ml: "വിദേശികൾക്ക് വോട്ടവകാശം പോലുള്ള രാഷ്ട്രീയ അവകാശങ്ങൾ ഉണ്ടാകില്ല." }
    },
    {
      q_id: "ps-p2c6-q3",
      type: "mcq",
      stem: { en: "India follows which type of citizenship?", ml: "ഇന്ത്യയിൽ പിന്തുടരുന്ന പൗരത്വ രീതി ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Dual Citizenship", ml: "ഇരട്ട പൗരത്വം" } },
        { k: "B", text: { en: "Single Citizenship", ml: "ഏക പൗരത്വം" } },
        { k: "C", text: { en: "Triple Citizenship", ml: "ത്രിവിധ പൗരത്വം" } },
        { k: "D", text: { en: "Temporary Citizenship", ml: "താൽക്കാലിക പൗരത്വം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "In India, there is only one citizenship for the whole country.", ml: "സംസ്ഥാനങ്ങൾക്ക് പ്രത്യേക പൗരത്വം ഇന്ത്യയിലില്ല." }
    },
    {
      q_id: "ps-p2c6-q4",
      type: "mcq",
      stem: { en: "The Citizenship Act of India was passed in the year:", ml: "ഇന്ത്യയിലെ പൗരത്വ നിയമം പാസാക്കിയ വർഷം ഏത്?" },
      options: [
        { k: "A", text: { en: "1947", ml: "1947" } },
        { k: "B", text: { en: "1950", ml: "1950" } },
        { k: "C", text: { en: "1955", ml: "1955" } },
        { k: "D", text: { en: "1960", ml: "1960" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "The Citizenship Act of 1955 prescribes acquisition and loss of citizenship.", ml: "1955-ലാണ് പൗരത്വം സംബന്ധിച്ച പ്രധാന നിയമം വന്നത്." }
    },
    {
      q_id: "ps-p2c6-q5",
      type: "mcq",
      stem: { en: "Citizenship based on the 'place of birth' is called:", ml: "ജനിച്ച സ്ഥലത്തിന്റെ അടിസ്ഥാനത്തിലുള്ള പൗരത്വം അറിയപ്പെടുന്നത്:" },
      options: [
        { k: "A", text: { en: "Jus Sanguinis", ml: "ജസ് സാങ്ക്വിനിസ്" } },
        { k: "B", text: { en: "Jus Soli", ml: "ജസ് സോളി" } },
        { k: "C", text: { en: "Naturalization", ml: "സ്വാഭാവിക പൗരത്വം" } },
        { k: "D", text: { en: "Migration", ml: "കുടിയേറ്റം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Jus Soli is the Latin term for 'Right of Soil'.", ml: "മണ്ണ് എന്ന അർത്ഥം വരുന്ന 'സോളി' എന്ന വാക്കിൽ നിന്നാണിത് വന്നത്." }
    },
    {
      q_id: "ps-p2c6-q6",
      type: "mcq",
      stem: { en: "Individuals not recognized as citizens by any country are called:", ml: "ഒരു രാജ്യവും പൗരന്മാരായി അംഗീകരിക്കാത്ത വ്യക്തികളെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Aliens", ml: "വിദേശികൾ" } },
        { k: "B", text: { en: "Stateless Persons", ml: "പൗരത്വമില്ലാത്തവർ" } },
        { k: "C", text: { en: "Tourists", ml: "വിനോദസഞ്ചാരികൾ" } },
        { k: "D", text: { en: "Spies", ml: "ചാരന്മാർ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Statelessness occurs when people lose citizenship due to legal or political reasons.", ml: "നിയമപരമായി പൗരത്വമില്ലാത്ത അവസ്ഥയാണിത്." }
    },
    {
      q_id: "ps-p2c6-q7",
      type: "mcq",
      stem: { en: "Global Citizenship encourages us to act for the benefit of:", ml: "ആഗോള പൗരത്വം എന്തിനുവേണ്ടി പ്രവർത്തിക്കാനാണ് നമ്മെ പ്രേരിപ്പിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Only our family", ml: "നമ്മുടെ കുടുംബത്തിന് വേണ്ടി മാത്രം" } },
        { k: "B", text: { en: "Only our own nation", ml: "സ്വന്തം രാജ്യത്തിന് വേണ്ടി മാത്രം" } },
        { k: "C", text: { en: "Common good of humanity", ml: "മനുഷ്യരാശിയുടെ പൊതുനന്മയ്ക്ക് വേണ്ടി" } },
        { k: "D", text: { en: "Specific political parties", ml: "രാഷ്ട്രീയ പാർട്ടികൾക്ക് വേണ്ടി" } }
      ],
      answer: "C",
      difficulty: "easy",
      explanation: { en: "It transcends national boundaries for global welfare.", ml: "ലോകം മുഴുവൻ ഒരു കുടുംബമാണെന്ന ദർശനമാണിത്." }
    },
    {
      q_id: "ps-p2c6-q8",
      type: "mcq",
      stem: { en: "Which of the following is NOT a way to acquire Indian citizenship?", ml: "താഴെ പറയുന്നവയിൽ ഇന്ത്യയിൽ പൗരത്വം നേടാനുള്ള വഴി അല്ലാത്തത് ഏത്?" },
      options: [
        { k: "A", text: { en: "Birth", ml: "ജനനം" } },
        { k: "B", text: { en: "Descent", ml: "വംശപരമ്പര" } },
        { k: "C", text: { en: "Investing money only", ml: "പണം നിക്ഷേപിക്കുന്നത് കൊണ്ട് മാത്രം" } },
        { k: "D", text: { en: "Registration", ml: "രജിസ്‌ട്രേഷൻ" } }
      ],
      answer: "C",
      difficulty: "medium",
      explanation: { en: "Simply investing does not guarantee citizenship in India.", ml: "പണം നൽകി പൗരത്വം വാങ്ങാൻ ഇന്ത്യയിൽ കഴിയില്ല." }
    },
    {
      q_id: "ps-p2c6-q9",
      type: "mcq",
      stem: { en: "Refugees leave their country primarily because of:", ml: "അഭയാർത്ഥികൾ സ്വന്തം രാജ്യം വിടാനുള്ള പ്രധാന കാരണം എന്ത്?" },
      options: [
        { k: "A", text: { en: "Better weather", ml: "നല്ല കാലാവസ്ഥ തേടി" } },
        { k: "B", text: { en: "War, disasters or persecution", ml: "യുദ്ധം, പ്രകൃതിദുരന്തങ്ങൾ, അല്ലെങ്കിൽ പീഡനങ്ങൾ" } },
        { k: "C", text: { en: "Tourism", ml: "വിനോദസഞ്ചാരം" } },
        { k: "D", text: { en: "Buying property", ml: "സ്ഥലം വാങ്ങാൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Refugees move out of fear for life and safety.", ml: "ജീവനും സ്വത്തിനും ഭീഷണിയുണ്ടാകുമ്പോഴാണ് ആളുകൾ അഭയാർത്ഥികളാകുന്നത്." }
    },
    {
      q_id: "ps-p2c6-q10",
      type: "mcq",
      stem: { en: "The concept of 'Right to the City' relates to:", ml: "'നഗരത്തിനുള്ള അവകാശം' എന്നത് ഏതുമായി ബന്ധപ്പെട്ടതാണ്?" },
      options: [
        { k: "A", text: { en: "Access to housing and work for the poor", ml: "പാവപ്പെട്ടവർക്ക് നഗരത്തിൽ താമസത്തിനും ജോലിക്കുമുള്ള അവകാശം" } },
        { k: "B", text: { en: "Only rich people buying cars", ml: "സമ്പന്നർ കാറുകൾ വാങ്ങുന്നത്" } },
        { k: "C", text: { en: "Building high walls", ml: "മതിലുകൾ പണിയുന്നത്" } },
        { k: "D", text: { en: "Closing city gates", ml: "നഗര കവാടങ്ങൾ അടയ്ക്കുന്നത്" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "It advocates for social justice for slum dwellers and urban workers.", ml: "നഗരത്തിന്റെ വികസനത്തിൽ പങ്കാളികളായ സാധാരണക്കാർക്ക് അവിടെ ജീവിക്കാൻ അവകാശമുണ്ടെന്ന വാദമാണിത്." }
    },
    {
      q_id: "ps-p2c6-q11",
      type: "mcq",
      stem: { en: "Jus Sanguinis refers to citizenship based on:", ml: "ജസ് സാങ്ക്വിനിസ് പൗരത്വം നൽകുന്നത് ഏതിന്റെ അടിസ്ഥാനത്തിലാണ്?" },
      options: [
        { k: "A", text: { en: "Place of birth", ml: "ജനിച്ച സ്ഥലം" } },
        { k: "B", text: { en: "Blood relation / Nationality of parents", ml: "രക്തബന്ധം / മാതാപിതാക്കളുടെ പൗരത്വം" } },
        { k: "C", text: { en: "Education", ml: "വിദ്യാഭ്യാസം" } },
        { k: "D", text: { en: "Wealth", ml: "സമ്പത്ത്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It means 'Right of Blood'.", ml: "രക്തബന്ധത്തിന് പ്രാധാന്യം നൽകുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c6-q12",
      type: "mcq",
      stem: { en: "India's citizenship is 'inclusive' because it is:", ml: "ഇന്ത്യൻ പൗരത്വം എല്ലാവരെയും ഉൾക്കൊള്ളുന്നതാണ് എന്ന് പറയാൻ കാരണം:" },
      options: [
        { k: "A", text: { en: "Based on only one religion", ml: "ഒരു മതത്തെ മാത്രം അടിസ്ഥാനമാക്കിയതുകൊണ്ട്" } },
        { k: "B", text: { en: "Based on democratic and secular values", ml: "ജനാധിപത്യ-മതേതര മൂല്യങ്ങളെ അടിസ്ഥാനമാക്കിയതുകൊണ്ട്" } },
        { k: "C", text: { en: "Only for people with degrees", ml: "പഠിച്ചവർക്ക് മാത്രം ഉള്ളതുകൊണ്ട്" } },
        { k: "D", text: { en: "Only for men", ml: "പുരുഷന്മാർക്ക് മാത്രം ഉള്ളതുകൊണ്ട്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Any person can be a citizen regardless of faith or language.", ml: "ജാതിമത ഭേദമന്യേ എല്ലാവർക്കും തുല്യ അവകാശം ഇന്ത്യ നൽകുന്നു." }
    },
    {
      q_id: "ps-p2c6-q13",
      type: "mcq",
      stem: { en: "Migrant workers contribute to society through their:", ml: "കുടിയേറ്റ തൊഴിലാളികൾ സമൂഹത്തിന് നൽകുന്ന സംഭാവന എന്ത്?" },
      options: [
        { k: "A", text: { en: "Labour and Skills", ml: "അധ്വാനവും കഴിവും" } },
        { k: "B", text: { en: "Taking all the money", ml: "പണം കൊണ്ടുപോകൽ" } },
        { k: "C", text: { en: "Destroying cities", ml: "നഗരങ്ങൾ നശിപ്പിക്കൽ" } },
        { k: "D", text: { en: "Ignoring work", ml: "ജോലി ചെയ്യാതിരിക്കൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "They are the backbone of construction and services in cities.", ml: "അവർ സമൂഹത്തിന്റെ വളർച്ചയിൽ വലിയ പങ്ക് വഹിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c6-q14",
      type: "mcq",
      stem: { en: "Statelessness is a major challenge for:", ml: "പൗരത്വമില്ലായ്മ ഏത് കാര്യത്തിലാണ് വലിയ വെല്ലുവിളി ഉയർത്തുന്നത്?" },
      options: [
        { k: "A", text: { en: "Sports", ml: "കായികം" } },
        { k: "B", text: { en: "Global social justice", ml: "ആഗോള സാമൂഹിക നീതി" } },
        { k: "C", text: { en: "Fashion", ml: "ഫാഷൻ" } },
        { k: "D", text: { en: "Movies", ml: "സിനിമ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "People without citizenship have no legal protection or rights.", ml: "അവകാശങ്ങൾ സംരക്ഷിക്കപ്പെടാൻ പൗരത്വം അനിവാര്യമാണ്." }
    },
    {
      q_id: "ps-p2c6-q15",
      type: "mcq",
      stem: { en: "In which year did the United Nations adopt UDHR?", ml: "ഐക്യരാഷ്ട്രസഭ മനുഷ്യാവകാശ പ്രഖ്യാപനം അംഗീകരിച്ച വർഷം ഏത്?" },
      options: [
        { k: "A", text: { en: "1945", ml: "1945" } },
        { k: "B", text: { en: "1948", ml: "1948" } },
        { k: "C", text: { en: "1950", ml: "1950" } },
        { k: "D", text: { en: "1993", ml: "1993" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "UDHR was a landmark document for world peace.", ml: "1948 ഡിസംബർ 10-നാണ് ഇത് നടന്നത്." }
    },
    {
      q_id: "ps-p2c6-q16",
      type: "mcq",
      stem: { en: "Which of these is a duty of a citizen?", ml: "താഴെ പറയുന്നവയിൽ പൗരന്റെ കടമ ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Voting only", ml: "വോട്ട് ചെയ്യുക മാത്രം" } },
        { k: "B", text: { en: "Defending the country and paying taxes", ml: "രാജ്യത്തെ സംരക്ഷിക്കലും നികുതി അടയ്ക്കലും" } },
        { k: "C", text: { en: "Watching TV", ml: "ടിവി കാണൽ" } },
        { k: "D", text: { en: "Ignoring the law", ml: "നിയമം അനുസരിക്കാതിരിക്കൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Citizenship involves active responsibilities towards the state.", ml: "അവകാശങ്ങൾക്കൊപ്പം തന്നെ പൗരന്മാർക്ക് കടമകളുമുണ്ട്." }
    },
    {
      q_id: "ps-p2c6-q17",
      type: "mcq",
      stem: { en: "Inclusive citizenship in India means NO discrimination based on:", ml: "ഇന്ത്യയിലെ ഉൾക്കൊള്ളുന്ന പൗരത്വം ഏതിന്റെ അടിസ്ഥാനത്തിലുള്ള വിവേചനം അനുവദിക്കുന്നില്ല?" },
      options: [
        { k: "A", text: { en: "Religion, language or gender", ml: "മതം, ഭാഷ, ലിംഗം" } },
        { k: "B", text: { en: "Age only", ml: "പ്രായം മാത്രം" } },
        { k: "C", text: { en: "Education level", ml: "വിദ്യാഭ്യാസ നിലവാരം" } },
        { k: "D", text: { en: "Height", ml: "ഉയരം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Constitution guarantees equality to all citizens.", ml: "എല്ലാവരെയും തുല്യമായി കാണുന്നതാണ് ഇന്ത്യൻ ദർശനം." }
    },
    {
      q_id: "ps-p2c6-q18",
      type: "mcq",
      stem: { en: "Citizenship acquired through long residence and following legal rules is:", ml: "ഒരു രാജ്യത്ത് കുറെക്കാലം താമസിച്ച ശേഷം നിയമപ്രകാരം ലഭിക്കുന്ന പൗരത്വം:" },
      options: [
        { k: "A", text: { en: "Naturalization", ml: "സ്വാഭാവിക പൗരത്വം (Naturalization)" } },
        { k: "B", text: { en: "By birth", ml: "ജനനം വഴി" } },
        { k: "C", text: { en: "By war", ml: "യുദ്ധം വഴി" } },
        { k: "D", text: { en: "Illegal", ml: "നിയമവിരുദ്ധം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Naturalization is for people who were not citizens by birth.", ml: "വിദേശികൾ ഒരു രാജ്യത്തെ നിബന്ധനകൾ പാലിച്ച് പൗരത്വം നേടുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c6-q19",
      type: "mcq",
      stem: { en: "The struggle for citizenship is often a struggle for:", ml: "പൗരത്വത്തിനായുള്ള പോരാട്ടം പലപ്പോഴും ഏതിനുവേണ്ടിയുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Money", ml: "പണം" } },
        { k: "B", text: { en: "Equality and Recognition", ml: "സമത്വവും അംഗീകാരവും" } },
        { k: "C", text: { en: "Power to kill", ml: "കൊല്ലാനുള്ള അധികാരം" } },
        { k: "D", text: { en: "Destruction", ml: "നാശം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Marginalized groups fight for equal rights as citizens.", ml: "അവഗണിക്കപ്പെട്ടവർ തങ്ങളെ പൗരന്മാരായി പരിഗണിക്കണമെന്നാണ് ആവശ്യപ്പെടുന്നത്." }
    },
    {
      q_id: "ps-p2c6-q20",
      type: "mcq",
      stem: { en: "Which world problem is used as an argument for 'Global Citizenship'?", ml: "ആഗോള പൗരത്വം എന്ന ആശയത്തെ ന്യായീകരിക്കാൻ ഉപയോഗിക്കുന്ന പ്രശ്നം ഏത്?" },
      options: [
        { k: "A", text: { en: "Local traffic", ml: "പ്രാദേശിക ട്രാഫിക്" } },
        { k: "B", text: { en: "Global Warming", ml: "ആഗോള താപനം" } },
        { k: "C", text: { en: "Buying a car", ml: "കാർ വാങ്ങൽ" } },
        { k: "D", text: { en: "School tests", ml: "സ്കൂൾ പരീക്ഷകൾ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Environmental issues do not respect national borders.", ml: "ആഗോള താപനം പോലുള്ള പ്രശ്നങ്ങൾ പരിഹരിക്കാൻ ലോകം മുഴുവൻ ഒന്നിക്കണം." }
    },
    {
      q_id: "ps-p2c6-q21",
      type: "mcq",
      stem: { en: "Does an alien have the right to vote in India?", ml: "ഒരു വിദേശിക്ക് ഇന്ത്യയിൽ വോട്ട് ചെയ്യാൻ അവകാശമുണ്ടോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "ഇല്ല" } },
        { k: "C", text: { en: "Only in rich states", ml: "സമ്പന്ന സംസ്ഥാനങ്ങളിൽ മാത്രം" } },
        { k: "D", text: { en: "Only for one year", ml: "ഒരു വർഷത്തേക്ക് മാത്രം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Voting is a political right reserved for citizens.", ml: "പൗരന്മാർക്ക് മാത്രമുള്ള അവകാശമാണ് വോട്ടവകാശം." }
    },
    {
      q_id: "ps-p2c6-q22",
      type: "mcq",
      stem: { en: "Statelessness means people lose their right to have:", ml: "പൗരത്വമില്ലായ്മ എന്നാൽ ആളുകൾക്ക് ഏത് അവകാശമാണ് നഷ്ടപ്പെടുന്നത്?" },
      options: [
        { k: "A", text: { en: "Food only", ml: "ഭക്ഷണം മാത്രം" } },
        { k: "B", text: { en: "Rights guaranteed by a state", ml: "ഒരു രാജ്യം ഉറപ്പുനൽകുന്ന അവകാശങ്ങൾ" } },
        { k: "C", text: { en: "Dreams", ml: "സ്വപ്നങ്ങൾ" } },
        { k: "D", text: { en: "Friends", ml: "സുഹൃത്തുക്കൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "A state is needed to enforce and protect rights.", ml: "അവകാശങ്ങൾ സംരക്ഷിക്കാൻ ഒരു ഭരണകൂടം കൂടെ വേണം." }
    },
    {
      q_id: "ps-p2c6-q23",
      type: "mcq",
      stem: { en: "The idea of 'Global Village' implies:", ml: "'ആഗോള ഗ്രാമം' എന്ന ആശയം അർത്ഥമാക്കുന്നത്:" },
      options: [
        { k: "A", text: { en: "Everyone lives in one small hut", ml: "എല്ലാവരും ഒരു ചെറിയ കൂരയിൽ കഴിയുന്നു" } },
        { k: "B", text: { en: "World is interconnected and small like a village", ml: "ലോകം പരസ്പരം ബന്ധിക്കപ്പെട്ടതും ഒരു ഗ്രാമം പോലെ ചെറുതുമാണ്" } },
        { k: "C", text: { en: "No more cities", ml: "ഇനി നഗരങ്ങൾ ഇല്ല" } },
        { k: "D", text: { en: "Only farmers rule", ml: "കർഷകർ മാത്രം ഭരിക്കുന്നു" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Technology and economy connect people globally.", ml: "ആശയവിനിമയ മാർഗ്ഗങ്ങൾ ലോകത്തെ ഒന്നിപ്പിച്ചു." }
    },
    {
      q_id: "ps-p2c6-q24",
      type: "mcq",
      stem: { en: "Refugees face problems like:", ml: "അഭയാർത്ഥികൾ നേരിടുന്ന പ്രശ്നങ്ങൾ എന്തെല്ലാം?" },
      options: [
        { k: "A", text: { en: "Lack of identity and legal protection", ml: "സ്വത്വമില്ലായ്മയും നിയമപരമായ സംരക്ഷണത്തിന്റെ കുറവും" } },
        { k: "B", text: { en: "Too much vacation", ml: "കൂടുതൽ അവധി ലഭിക്കൽ" } },
        { k: "C", text: { en: "Free shopping", ml: "സൗജന്യ സാധനങ്ങൾ വാങ്ങൽ" } },
        { k: "D", text: { en: "Always being happy", ml: "എപ്പോഴും സന്തോഷത്തോടെ ഇരിക്കൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "They are often unwelcome and lose basic dignity.", ml: "അവർക്ക് ഒരിടത്തും സ്ഥിരമായ പദവി ലഭിക്കാറില്ല." }
    },
    {
      q_id: "ps-p2c6-q25",
      type: "mcq",
      stem: { en: "How can a territory's people become Indian citizens automatically?", ml: "ഒരു പ്രദേശത്തെ ജനങ്ങൾ എങ്ങനെയാണ് തനിയെ ഇന്ത്യൻ പൗരന്മാരായി മാറുന്നത്?" },
      options: [
        { k: "A", text: { en: "By paying tax", ml: "നികുതി അടച്ചാൽ" } },
        { k: "B", text: { en: "By incorporation of that territory into India", ml: "ആ പ്രദേശം ഇന്ത്യയുടെ ഭാഗമാകുമ്പോൾ" } },
        { k: "C", text: { en: "By visiting Delhi", ml: "ഡൽഹി സന്ദർശിച്ചാൽ" } },
        { k: "D", text: { en: "By learning Malayalam", ml: "മലയാളം പഠിച്ചാൽ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Territorial inclusion grants citizenship to the inhabitants.", ml: "പുതിയ സ്ഥലങ്ങൾ ഇന്ത്യയിൽ ചേരുമ്പോൾ അവിടുത്തെ ജനങ്ങൾക്ക് പൗരത്വം ലഭിക്കും." }
    },
    {
      q_id: "ps-p2c6-q26",
      type: "mcq",
      stem: { en: "Citizenship is a political identity. This means:", ml: "പൗരത്വം ഒരു രാഷ്ട്രീയ സ്വത്വമാണ്. ഇതിനർത്ഥം:" },
      options: [
        { k: "A", text: { en: "It defines our role in the government and society", ml: "ഭരണത്തിലും സമൂഹത്തിലും നമുക്കുള്ള സ്ഥാനം അത് നിശ്ചയിക്കുന്നു" } },
        { k: "B", text: { en: "It is a secret name", ml: "അതൊരു രഹസ്യ പേരാണ്" } },
        { k: "C", text: { en: "It is only for actors", ml: "അത് സിനിമാ നടന്മാർക്ക് മാത്രമാണ്" } },
        { k: "D", text: { en: "It has no meaning", ml: "അതിന് ഒരു അർത്ഥവുമില്ല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It gives us the right to participate in public life.", ml: "പൊതുജീവിതത്തിൽ ഇടപെടുമ്പോൾ നമുക്ക് ലഭിക്കുന്ന അംഗീകാരമാണിത്." }
    },
    {
      q_id: "ps-p2c6-q27",
      type: "mcq",
      stem: { en: "Empathy for people in other nations is a feature of:", ml: "മറ്റു രാജ്യങ്ങളിലെ ജനങ്ങളോട് സഹാനുഭൂതി കാണിക്കുന്നത് ഏതിന്റെ സവിശേഷതയാണ്?" },
      options: [
        { k: "A", text: { en: "Selfishness", ml: "സ്വാർത്ഥത" } },
        { k: "B", text: { en: "Global Citizenship", ml: "ആഗോള പൗരത്വം" } },
        { k: "C", text: { en: "Warfare", ml: "യുദ്ധം" } },
        { k: "D", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Global citizens feel responsible for human welfare everywhere.", ml: "ലോകത്തിന്റെ ഏത് ഭാഗത്തുള്ളവർക്കും നല്ലത് വരണമെന്ന് ഇവർ ആഗ്രഹിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c6-q28",
      type: "mcq",
      stem: { en: "Slum dwellers fight for 'Right to the city' to get:", ml: "ചേരി നിവാസികൾ 'നഗരത്തിനുള്ള അവകാശത്തിനായി' പോരാടുന്നത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "Basic shelter and dignity", ml: "അടിസ്ഥാന പാർപ്പിടവും അന്തസ്സും" } },
        { k: "B", text: { en: "Diamonds", ml: "വൈരക്കല്ലുകൾ" } },
        { k: "C", text: { en: "To destroy the city", ml: "നഗരം നശിപ്പിക്കാൻ" } },
        { k: "D", text: { en: "To ban workers", ml: "തൊഴിലാളികളെ നിരോധിക്കാൻ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "They want to be recognized as part of the city's community.", ml: "മാന്യമായി ജീവിക്കാനുള്ള സൗകര്യങ്ങൾ ലഭിക്കാനാണ് ഇവർ ശ്രമിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c6-q29",
      type: "mcq",
      stem: { en: "Dual citizenship is when a person:", ml: "ഇരട്ട പൗരത്വം എന്നാൽ ഒരു വ്യക്തി:" },
      options: [
        { k: "A", text: { en: "Has no citizenship", ml: "പൗരത്വം ഇല്ലാത്ത അവസ്ഥ" } },
        { k: "B", text: { en: "Is a citizen of two countries at once", ml: "ഒരേ സമയം രണ്ട് രാജ്യങ്ങളിൽ പൗരത്വം ഉള്ള അവസ്ഥ" } },
        { k: "C", text: { en: "Is a citizen of only one state", ml: "ഒരു രാജ്യത്തെ മാത്രം പൗരൻ" } },
        { k: "D", text: { en: "Lives in a forest", ml: "കാട്ടിൽ താമസിക്കുന്നു" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "India generally does not allow dual citizenship.", ml: "ചില രാജ്യങ്ങൾ ഇത് അനുവദിക്കുന്നുണ്ട്, എന്നാൽ ഇന്ത്യയിൽ ഇതില്ല." }
    },
    {
      q_id: "ps-p2c6-q30",
      type: "mcq",
      stem: { en: "Vigilant citizens are necessary for a healthy:", ml: "ജാഗ്രതയുള്ള പൗരന്മാർ ഏതിന്റെ നിലനിൽപ്പിന് അത്യാവശ്യമാണ്?" },
      options: [
        { k: "A", text: { en: "Monarchy", ml: "രാജഭരണം" } },
        { k: "B", text: { en: "Democracy", ml: "ജനാധിപത്യം" } },
        { k: "C", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } },
        { k: "D", text: { en: "Army", ml: "സൈന്യം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Democracy fails if citizens are not active and aware.", ml: "പൗരന്മാർ അറിവുള്ളവരാണെങ്കിൽ മാത്രമേ ജനാധിപത്യം വിജയിക്കൂ." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit7: Lesson = {
  id: "pl-ps-11-p2-u7",
  title: { en: "Nationalism", ml: "ദേശീയത (Nationalism)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=RXp97U4LTdg",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the concept of a nation and nationalism", ml: "രാഷ്ട്രം, ദേശീയത എന്നീ ആശയങ്ങൾ മനസ്സിലാക്കുക" },
    { en: "Identify the elements that constitute a nation", ml: "ഒരു രാഷ്ട്രത്തെ രൂപപ്പെടുത്തുന്ന ഘടകങ്ങൾ തിരിച്ചറിയുക" },
    { en: "Analyze the role of national self-determination", ml: "ദേശീയ സ്വയംനിർണ്ണയാധികാരത്തിന്റെ പങ്ക് വിശകലനം ചെയ്യുക" },
    { en: "Distinguish between inclusive and exclusive nationalism", ml: "ഉൾക്കൊള്ളുന്നതും പുറന്തള്ളുന്നതുമായ ദേശീയതകൾ തമ്മിലുള്ള വ്യത്യാസം മനസ്സിലാക്കുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the concept of nationalism, its unifying and divisive faces, and its challenges in a globalized world.", 
      ml: "ദേശീയത എന്ന ആശയം, അതിന്റെ ഏകീകരണ-വിഭജന മുഖങ്ങൾ, ആഗോളവൽക്കരിക്കപ്പെട്ട ലോകത്ത് അത് നേരിടുന്ന വെല്ലുവിളികൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of national identity, self-determination, pluralism, and the difference between nation and state.", 
      ml: "ദേശീയ സ്വത്വം, സ്വയംനിർണ്ണയാധികാരം, ബഹുസ്വരത, രാഷ്ട്രവും രാജ്യവും തമ്മിലുള്ള വ്യത്യാസം എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of nationalism. It details what constitutes a nation, the distinction between a state and a nation, the role of national self-determination, and the debate between exclusive and inclusive forms of nationalism. It also addresses the challenges posed by localism and globalism to the traditional idea of the nation-state.', ml: 'ദേശീയത (Nationalism) എന്ന ആശയത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. ഒരു രാഷ്ട്രം എങ്ങനെ രൂപപ്പെടുന്നു, രാഷ്ട്രവും ഭരണകൂടവും (State) തമ്മിലുള്ള വ്യത്യാസം, സ്വയംനിർണ്ണയാധികാരത്തിന്റെ പങ്ക്, പുറന്തള്ളുന്നതും ഉൾക്കൊള്ളുന്നതുമായ ദേശീയതകൾ തമ്മിലുള്ള തർക്കങ്ങൾ എന്നിവ ഇത് വിശദീകരിക്കുന്നു. കൂടാതെ പ്രാദേശികതയും ആഗോളതയും പരമ്പരാഗത ദേശീയ സങ്കൽപ്പങ്ങൾക്ക് ഉയർത്തുന്ന വെല്ലുവിളികളും ഇവിടെ ചർച്ച ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Nation', ml: 'രാഷ്ട്രം (Nation)'}, {en: 'A "shared belief" or imagined community based on history or culture.', ml: 'ചരിത്രം, സംസ്കാരം എന്നിവയുടെ അടിസ്ഥാനത്തിൽ ഒരുമിച്ചു കഴിയുന്നവരുടെ കൂട്ടായ വിശ്വാസം.'}, {en: 'The Indian Nation.', ml: 'ഇന്ത്യൻ രാഷ്ട്രം.'}],
          [{en: 'Nationalism', ml: 'ദേശീയത (Nationalism)'}, {en: 'Ideology emphasizing loyalty and devotion to a nation.', ml: 'സ്വന്തം രാജ്യത്തോടുള്ള സ്നേഹവും കൂറും പ്രകടിപ്പിക്കുന്ന ചിന്താഗതി.'}, {en: 'Indian freedom struggle.', ml: 'ഇന്ത്യൻ സ്വാതന്ത്ര്യ സമരം.'}],
          [{en: 'State', ml: 'രാജ്യം (State)'}, {en: 'Political entity with territory, population, and sovereignty.', ml: 'ഭൂപ്രദേശം, ജനസംഖ്യ, പരമാധികാരം എന്നിവയുള്ള രാഷ്ട്രീയ സ്ഥാപനം.'}, {en: 'Republic of India.', ml: 'ഇന്ത്യൻ റിപ്പബ്ലിക്.'}],
          [{en: 'Self-Determination', ml: 'സ്വയംനിർണ്ണയാധികാരം (Self-Determination)'}, {en: 'The right of a people to decide their own government.', ml: 'സ്വന്തം ഭരണക്രമം നിശ്ചയിക്കാൻ ഒരു ജനതയ്ക്കുള്ള അവകാശം.'}, {en: 'Demands for separate states.', ml: 'പ്രത്യേക രാജ്യങ്ങൾക്കായുള്ള വാദം.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is a Nation?', ml: '3.1 എന്താണ് ഒരു രാഷ്ട്രം? (What is a Nation?)' },
      { type: 'p', en: 'A nation is a "Community of Communities" based on:', ml: 'ഒരു രാഷ്ട്രം രൂപപ്പെടുന്നത് താഴെ പറയുന്ന ഘടകങ്ങളിലൂടെയാണ്:' },
      { type: 'ul', items: [
        { en: 'Shared Beliefs: People believe they belong together.', ml: 'കൂട്ടായ വിശ്വാസം: തങ്ങൾ ഒരേ സമൂഹത്തിന്റെ ഭാഗമാണെന്ന ജനങ്ങളുടെ വിശ്വാസം.' },
        { en: 'History: A sense of continuous historical identity.', ml: 'ചരിത്രം: തുടർച്ചയായ ചരിത്രപരമായ സ്വത്വം ഉണ്ടെന്ന തോന്നൽ.' },
        { en: 'Territory: Linking the community to a specific "homeland".', ml: 'ഭൂപ്രദേശം: തങ്ങളുടെ ജനതയ്ക്ക് ഒരു പ്രത്യേക മാതൃഭൂമി ഉണ്ടെന്ന ബോധം.' },
        { en: 'Common Political Identity: Seeing oneself as a citizen of that nation.', ml: 'പൊതുവായ രാഷ്ട്രീയ സ്വത്വം: താൻ ആ രാഷ്ട്രത്തിലെ പൗരനാണെന്ന് കരുതുന്ന രീതി.' }
      ]},

      { type: 'h3', en: '3.2 Nationalism and its Faces', ml: '3.2 ദേശീയതയുടെ വിവിധ മുഖങ്ങൾ' },
      { type: 'p', en: 'Nationalism can be both a unifying and a divisive force:', ml: 'ദേശീയത ഒരു ഒന്നിപ്പിക്കുന്ന ശക്തിയായും വിഭജിക്കുന്ന ശക്തിയായും പ്രവർത്തിക്കാം:' },
      { type: 'ul', items: [
        { en: 'Unifying: Helped unite small regions (e.g., Italy) and overthrow colonial rule (e.g., India).', ml: 'ഒന്നിപ്പിക്കുന്നത്: ചെറിയ പ്രദേശങ്ങളെ ഒരുമിപ്പിക്കാനും കോളനി ഭരണം അവസാനിപ്പിക്കാനും സഹായിച്ചു (ഉദാ: ഇന്ത്യ).' },
        { en: 'Divisive: Can lead to world wars and the break-up of large empires (e.g., USSR).', ml: 'വിഭജിക്കുന്നത്: ലോകമഹായുദ്ധങ്ങൾക്കും വലിയ സാമ്രാജ്യങ്ങളുടെ തകർച്ചയ്ക്കും കാരണമാകാറുണ്ട് (ഉദാ: സോവിയറ്റ് യൂണിയൻ).' }
      ]},

      { type: 'h3', en: '3.3 National Self-Determination', ml: '3.3 ദേശീയ സ്വയംനിർണ്ണയാധികാരം' },
      { type: 'ul', items: [
        { en: 'The belief that every culture should have its own state.', ml: 'ഓരോ സംസ്കാരത്തിനും സ്വന്തമായി ഒരു രാജ്യം വേണമെന്ന ചിന്താഗതി.' },
        { en: 'Problem: It is impossible to have a state with only one culture; every state has minorities.', ml: 'പ്രശ്നം: ഒരു സംസ്കാരം മാത്രം ഉള്ള രാജ്യം അപ്രായോഗികമാണ്; എല്ലാ രാജ്യങ്ങളിലും ന്യൂനപക്ഷങ്ങൾ ഉണ്ടായിരിക്കും.' }
      ]},

      { type: 'h3', en: '3.4 Pluralism and Diversity', ml: '3.4 ബഹുസ്വരതയും വൈവിധ്യവും (Pluralism)' },
      { type: 'ul', items: [
        { en: 'Modern democracies allow different groups to live as equal citizens.', ml: 'ആധുനിക ജനാധിപത്യ രാജ്യങ്ങൾ വ്യത്യസ്ത വിഭാഗങ്ങളെ തുല്യ പൗരന്മാരായി ജീവിക്കാൻ അനുവദിക്കുന്നു.' },
        { en: 'India respects pluralism by protecting minority rights.', ml: 'ന്യൂനപക്ഷ അവകാശങ്ങൾ സംരക്ഷിച്ചുകൊണ്ട് ഇന്ത്യ ബഹുസ്വരതയെ മാനിക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.5 Nationalism: Inclusive vs. Exclusive', ml: '3.5 ദേശീയത: ഉൾക്കൊള്ളുന്നതും പുറന്തള്ളുന്നതും' },
      { type: 'ul', items: [
        { en: 'Inclusive (Civic) Nationalism: Based on shared political values. Anyone respecting the constitution is part of the nation.', ml: 'ഉൾക്കൊള്ളുന്ന ദേശീയത: ഭരണഘടനയെ ബഹുമാനിക്കുന്ന ആർക്കും ആ രാഷ്ട്രത്തിന്റെ ഭാഗമാകാം എന്ന രീതി (ഉദാ: ഇന്ത്യൻ സ്വാതന്ത്ര്യ സമരം).' },
        { en: 'Exclusive (Ethnic) Nationalism: Based on a single religion or race. Excludes others.', ml: 'പുറന്തള്ളുന്ന ദേശീയത: ഒരു മതം അല്ലെങ്കിൽ വർഗ്ഗം മാത്രം അടിസ്ഥാനമാക്കിയുള്ളത്. മറ്റുള്ളവരെ ഇത് അംഗീകരിക്കില്ല.' }
      ]},

      { type: 'h3', en: '3.6 Challenges to Nationalism', ml: '3.6 ദേശീയത നേരിടുന്ന വെല്ലുവിളികൾ' },
      { type: 'ul', items: [
        { en: 'Localism: Demands for smaller states based on local identity.', ml: 'പ്രാദേശികവാദം: പ്രാദേശിക താല്പര്യങ്ങൾക്കായി ചെറിയ സംസ്ഥാനങ്ങൾ വേണമെന്ന വാദം.' },
        { en: 'Globalism: Economic connections make national boundaries less important.', ml: 'ആഗോളവാദം: സാമ്പത്തിക-സാങ്കേതിക മാറ്റങ്ങൾ അതിർത്തികളുടെ പ്രാധാന്യം കുറയ്ക്കുന്നു.' },
        { en: 'Migration: Creates multi-cultural societies across borders.', ml: 'കുടിയേറ്റം: വിവിധ സംസ്കാരങ്ങൾ ഒത്തുചേരുന്ന സമൂഹങ്ങളെ സൃഷ്ടിക്കുന്നു.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Nationalism is an "Imagined Community" (Benedict Anderson).', ml: 'ദേശീയത എന്നത് ഒരു "ഭാവനാത്മക സമൂഹം" (Imagined Community) ആണ്.' },
        { en: 'Rabindranath Tagore warned against narrow nationalism and preferred humanism.', ml: 'ഇടുങ്ങിയ ദേശീയത അപകടകരമാണെന്നും മാനവികതയ്ക്കാണ് പ്രാധാന്യം നൽകേണ്ടതെന്നും രവീന്ദ്രനാഥ ടാഗോർ ഓർമ്മിപ്പിച്ചു.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'A nation is built on shared beliefs and history.', ml: 'കൂട്ടായ വിശ്വാസത്തിലും ചരിത്രത്തിലുമാണ് ഒരു രാഷ്ട്രം പടുത്തുയർത്തുന്നത്.' },
        { en: 'Inclusive nationalism succeeds in diverse societies.', ml: 'വൈവിധ്യമുള്ള സമൂഹങ്ങളിൽ ഉൾക്കൊള്ളുന്ന ദേശീയതയാണ് വിജയിക്കുന്നത്.' },
        { en: 'Global challenges require looking beyond narrow borders.', ml: 'ആഗോള വെല്ലുവിളികൾ നേരിടാൻ അതിർത്തികൾക്ക് അപ്പുറം ചിന്തിക്കണം.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Nation",
      "ml": "രാഷ്ട്രം (Nation)"
    },
    "definition": {
      "en": "A community of people interconnected by same belief, history, region, and political ideas (Imagined community).",
      "ml": "ഒരേ വിശ്വാസം, ചരിത്രം, പ്രദേശം, രാഷ്ട്രീയ ആശയങ്ങൾ എന്നിവയാൽ പരസ്പരം ബന്ധിക്കപ്പെട്ടിരിക്കുന്ന ആളുകളുടെ ഒരു കൂട്ടായ്മ (Imagined community)."
    }
  },
  {
    "term": {
      "en": "Nationalism",
      "ml": "ദേശീയത (Nationalism)"
    },
    "definition": {
      "en": "A powerful political idea that united fragmented people to create new countries and also caused the fall of empires and separatism.",
      "ml": "വിഘടിച്ചുനിന്ന ജനങ്ങളെ ഒരുമിപ്പിച്ചു പുതിയ രാജ്യങ്ങൾ ഉണ്ടാക്കാനും, അതോടൊപ്പം സാമ്രാജ്യങ്ങളുടെ തകർച്ചയ്ക്കും വിഘടനവാദത്തിനും കാരണമായ ശക്തമായ രാഷ്ട്രീയ ആശയം."
    }
  },
  {
    "term": {
      "en": "National Self-determination",
      "ml": "ദേശീയ സ്വയംനിർണ്ണയം (National Self-determination)"
    },
    "definition": {
      "en": "The claim by a group of people that they have the right to decide their own future and govern themselves.",
      "ml": "തങ്ങളുടെ സ്വന്തം ഭാവി തീരുമാനിക്കാനും സ്വയം ഭരിക്കാനും തങ്ങൾക്കവകാശമുണ്ടെന്ന് ഒരു വിഭാഗം ജനങ്ങൾ ഉന്നയിക്കുന്ന വാദം."
    }
  },
  {
    "term": {
      "en": "Rabindranath Tagore",
      "ml": "രവീന്ദ്രനാഥ ടാഗോർ (Rabindranath Tagore)"
    },
    "definition": {
      "en": "A thinker who sharply criticized narrow nationalism and reminded that nationalism should never be above universal humanity.",
      "ml": "സങ്കുചിതമായ ദേശീയതയെ നിശിതമായി വിമർശിക്കുകയും, ദേശീയത ഒരിക്കലും സാർവലൗകിക മനുഷ്യത്വത്തിന് മുകളിലാകരുതെന്ന് ഓർമ്മിപ്പിക്കുകയും ചെയ്ത ചിന്തകൻ."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c7-q1",
      type: "mcq",
      stem: { en: "Who called the nation an 'Imagined Community'?", ml: "രാഷ്ട്രത്തെ ഒരു 'ഭാവനാത്മക സമൂഹം' (Imagined Community) എന്ന് വിളിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Benedict Anderson", ml: "ബെനഡിക്ട് ആൻഡേഴ്സൺ" } },
        { k: "B", text: { en: "Karl Marx", ml: "കാൾ മാർക്സ്" } },
        { k: "C", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" } },
        { k: "D", text: { en: "Jawaharlal Nehru", ml: "ജവഹർലാൽ നെഹ്‌റു" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Anderson argued that people feel a bond with millions they will never meet.", ml: "ഒരിക്കലും കണ്ടിട്ടില്ലാത്ത ദശലക്ഷക്കണക്കിന് ആളുകളുമായി നമുക്കുള്ള ബന്ധമാണ് രാഷ്ട്രം എന്ന് അദ്ദേഹം പറഞ്ഞു." }
    },
    {
      q_id: "ps-p2c7-q2",
      type: "mcq",
      stem: { en: "Which of the following is an essential element of a nation?", ml: "താഴെ പറയുന്നവയിൽ ഒരു രാഷ്ട്രത്തിന് അത്യാവശ്യമായ ഘടകം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Shared Beliefs", ml: "കൂട്ടായ വിശ്വാസം" } },
        { k: "B", text: { en: "Only Money", ml: "പണം മാത്രം" } },
        { k: "C", text: { en: "One single family", ml: "ഒരൊറ്റ കുടുംബം" } },
        { k: "D", text: { en: "No history", ml: "ചരിത്രമില്ലാത്ത അവസ്ഥ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Belonging to a nation is primarily a shared psychological bond.", ml: "നമ്മൾ ഒരുമിച്ചുള്ളവരാണെന്ന തോന്നലാണ് ഒരു രാഷ്ട്രത്തിന്റെ അടിസ്ഥാനം." }
    },
    {
      q_id: "ps-p2c7-q3",
      type: "mcq",
      stem: { en: "Nationalism in 19th century Europe acted as a:", ml: "പത്തൊമ്പതാം നൂറ്റാണ്ടിലെ യൂറോപ്പിൽ ദേശീയത ഏത് രീതിയിലാണ് പ്രവർത്തിച്ചത്?" },
      options: [
        { k: "A", text: { en: "Unifying force", ml: "ഒന്നിപ്പിക്കുന്ന ശക്തിയായി" } },
        { k: "B", text: { en: "Force to stop trade", ml: "വ്യാപാരം തടയാൻ" } },
        { k: "C", text: { en: "Force against education", ml: "വിദ്യാഭ്യാസത്തിന് എതിരായി" } },
        { k: "D", text: { en: "Force to increase taxes", ml: "നികുതി കൂട്ടാൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It helped unite smaller principalities into nations like Germany and Italy.", ml: "ചെറിയ നാട്ടുരാജ്യങ്ങളെ ചേർത്ത് വലിയ രാജ്യങ്ങളാക്കാൻ ഇത് സഹായിച്ചു." }
    },
    {
      q_id: "ps-p2c7-q4",
      type: "mcq",
      stem: { en: "The 'One Culture, One State' principle led to:", ml: "'ഒരു സംസ്കാരം, ഒരു രാജ്യം' എന്ന നയം ഏതിലേക്ക് നയിച്ചു?" },
      options: [
        { k: "A", text: { en: "World Peace", ml: "ലോകസമാധാനം" } },
        { k: "B", text: { en: "Conflict and break-up of empires", ml: "തർക്കങ്ങൾക്കും സാമ്രാജ്യങ്ങളുടെ തകർച്ചയ്ക്കും" } },
        { k: "C", text: { en: "Everyone becoming rich", ml: "എല്ലാവരും പണക്കാരാകുന്നതിന്" } },
        { k: "D", text: { en: "End of history", ml: "ചരിത്രത്തിന്റെ അന്ത്യത്തിന്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Trying to force one culture created resistance from minorities.", ml: "വൈവിധ്യങ്ങളെ അംഗീകരിക്കാത്തത് വലിയ രീതിയിലുള്ള തർക്കങ്ങൾക്ക് കാരണമായി." }
    },
    {
      q_id: "ps-p2c7-q5",
      type: "mcq",
      stem: { en: "Who was a prominent critic of narrow nationalism?", ml: "ഇടുങ്ങിയ ദേശീയതയെ രൂക്ഷമായി വിമർശിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Rabindranath Tagore", ml: "രവീന്ദ്രനാഥ ടാഗോർ" } },
        { k: "B", text: { en: "Sardar Patel", ml: "സർദാർ പട്ടേൽ" } },
        { k: "C", text: { en: "Subhash Chandra Bose", ml: "സുഭാഷ് ചന്ദ്രബോസ്" } },
        { k: "D", text: { en: "Adolf Hitler", ml: "അഡോൾഫ് ഹിറ്റ്ലർ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Tagore believed nationalism could lead to hatred between humans.", ml: "ദേശീയതയെക്കാൾ മാനവികതയ്ക്കാണ് പ്രാധാന്യം എന്ന് അദ്ദേഹം വിശ്വസിച്ചു." }
    },
    {
      q_id: "ps-p2c7-q6",
      type: "mcq",
      stem: { en: "Pluralism in a nation means:", ml: "ഒരു രാഷ്ട്രത്തിലെ ബഹുസ്വരത (Pluralism) എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Only one language allowed", ml: "ഒരു ഭാഷ മാത്രം അനുവദിക്കൽ" } },
        { k: "B", text: { en: "Respecting and including diverse groups", ml: "വിവിധ വിഭാഗങ്ങളെ ബഹുമാനിക്കുകയും ഉൾക്കൊള്ളുകയും ചെയ്യുക" } },
        { k: "C", text: { en: "Banning all religions", ml: "എല്ലാ മതങ്ങളും നിരോധിക്കൽ" } },
        { k: "D", text: { en: "Dividing the country", ml: "രാജ്യം വിഭജിക്കൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It allows different cultures to exist as equal citizens.", ml: "വ്യത്യസ്തമായ സംസ്കാരങ്ങൾ ഒരേപോലെ അംഗീകരിക്കപ്പെടുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c7-q7",
      type: "mcq",
      stem: { en: "National Self-Determination is the right of a people to:", ml: "ദേശീയ സ്വയംനിർണ്ണയാധികാരം എന്നത് ഒരു ജനതയ്ക്കുള്ള എന്തിനുള്ള അവകാശമാണ്?" },
      options: [
        { k: "A", text: { en: "Buy more land", ml: "സ്ഥലം വാങ്ങാൻ" } },
        { k: "B", text: { en: "Decide their own government", ml: "സ്വന്തം ഭരണകൂടത്തെ നിശ്ചയിക്കാൻ" } },
        { k: "C", text: { en: "Attack other countries", ml: "മറ്റു രാജ്യങ്ങളെ ആക്രമിക്കാൻ" } },
        { k: "D", text: { en: "Follow no laws", ml: "നിയമങ്ങൾ അനുസരിക്കാതിരിക്കാൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is the right to rule oneself without external pressure.", ml: "തങ്ങളുടെ ഭരണം എങ്ങനെ വേണമെന്ന് ജനങ്ങൾ തന്നെ തീരുമാനിക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c7-q8",
      type: "mcq",
      stem: { en: "Inclusive nationalism is based on:", ml: "ഉൾക്കൊള്ളുന്ന ദേശീയത (Inclusive nationalism) എന്തിനെയാണ് അടിസ്ഥാനമാക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Shared political values and constitution", ml: "പൊതുവായ രാഷ്ട്രീയ മൂല്യങ്ങളും ഭരണഘടനയും" } },
        { k: "B", text: { en: "One single race", ml: "ഒരൊറ്റ വർഗ്ഗം" } },
        { k: "C", text: { en: "Only one book", ml: "ഒരു പുസ്തകം മാത്രം" } },
        { k: "D", text: { en: "Hating others", ml: "മറ്റുള്ളവരെ വെറുക്കൽ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Civic values are more important than ethnicity in this model.", ml: "ഭരണഘടനയെ അംഗീകരിക്കുന്ന എല്ലാവരെയും ഒരേപോലെ കാണുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c7-q9",
      type: "mcq",
      stem: { en: "Exclusive nationalism often excludes:", ml: "പുറന്തള്ളുന്ന ദേശീയത (Exclusive nationalism) ആരെയാണ് ഒഴിവാക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Minorities and outsiders", ml: "ന്യൂനപക്ഷങ്ങളെയും പുറത്തുനിന്നുള്ളവരെയും" } },
        { k: "B", text: { en: "Rich people", ml: "സമ്പന്നരെ" } },
        { k: "C", text: { en: "The ruling party", ml: "ഭരണകക്ഷിയെ" } },
        { k: "D", text: { en: "The Police", ml: "പോലീസിനെ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It defines the nation only for a specific group.", ml: "ഒരു പ്രത്യേക വിഭാഗത്തിന് മാത്രം അവകാശപ്പെട്ടതാണ് രാജ്യം എന്ന ചിന്തയാണിത്." }
    },
    {
      q_id: "ps-p2c7-q10",
      type: "mcq",
      stem: { en: "How does globalism challenge nationalism?", ml: "ആഗോളവാദം (Globalism) എങ്ങനെയാണ് ദേശീയതയ്ക്ക് വെല്ലുവിളിയാകുന്നത്?" },
      options: [
        { k: "A", text: { en: "By making boundaries less significant", ml: "അതിർത്തികളുടെ പ്രാധാന്യം കുറച്ചുകൊണ്ട്" } },
        { k: "B", text: { en: "By building more walls", ml: "കൂടുതൽ മതിലുകൾ പണിതുകൊണ്ട്" } },
        { k: "C", text: { en: "By banning internet", ml: "ഇന്റർനെറ്റ് നിരോധിച്ചുകൊണ്ട്" } },
        { k: "D", text: { en: "By increasing visa fees", ml: "വിസ ഫീസ് കൂട്ടിക്കൊണ്ട്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Economic and digital links connect people across nations.", ml: "ലോകം ഒരു വിപണിയായി മാറുന്നതോടെ അതിർത്തികളുടെ പ്രസക്തി കുറഞ്ഞു വരുന്നു." }
    },
    {
      q_id: "ps-p2c7-q11",
      type: "mcq",
      stem: { en: "Nationalism helped in the 20th century to:", ml: "ഇരുപതാം നൂറ്റാണ്ടിൽ ദേശീയത ഏത് കാര്യത്തിന് സഹായിച്ചു?" },
      options: [
        { k: "A", text: { en: "Overthrow colonial rule", ml: "കോളനി ഭരണം അവസാനിപ്പിക്കാൻ" } },
        { k: "B", text: { en: "Support slavery", ml: "അടിമത്തത്തെ പിന്തുണയ്ക്കാൻ" } },
        { k: "C", text: { en: "Ban all schools", ml: "സ്കൂളുകൾ നിരോധിക്കാൻ" } },
        { k: "D", text: { en: "Ignore human rights", ml: "മനുഷ്യാവകാശങ്ങൾ അവഗണിക്കാൻ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Countries like India won freedom through nationalist movements.", ml: "ഏഷ്യയിലെയും ആഫ്രിക്കയിലെയും പല രാജ്യങ്ങൾക്കും സ്വാതന്ത്ര്യം കിട്ടിയത് ദേശീയതയിലൂടെയാണ്." }
    },
    {
      q_id: "ps-p2c7-q12",
      type: "mcq",
      stem: { en: "A 'Community of Communities' implies a nation is:", ml: "രാഷ്ട്രം എന്നത് 'സമൂഹങ്ങളുടെ സമൂഹം' ആണെന്ന് പറഞ്ഞാൽ അതിനർത്ഥം:" },
      options: [
        { k: "A", text: { en: "Diverse yet united", ml: "വൈവിധ്യമുള്ളതും എന്നാൽ ഒരൊറ്റ സമൂഹവുമാണ്" } },
        { k: "B", text: { en: "Only one small village", ml: "ഒരു ചെറിയ ഗ്രാമം മാത്രം" } },
        { k: "C", text: { en: "Ruled by one family", ml: "ഒരു കുടുംബം ഭരിക്കുന്ന ഒന്നാണ്" } },
        { k: "D", text: { en: "Full of enemies", ml: "ശത്രുക്കൾ നിറഞ്ഞതാണ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It accommodates various social and regional groups.", ml: "വിവിധ ജനവിഭാഗങ്ങൾ ചേർന്നതാണ് ഒരു രാഷ്ട്രം." }
    },
    {
      q_id: "ps-p2c7-q13",
      type: "mcq",
      stem: { en: "Territory is important for a nation because it provides a:", ml: "ഒരു രാഷ്ട്രത്തിന് ഭൂപ്രദേശം പ്രധാനമാകുന്നത് എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "Common homeland", ml: "പൊതുവായ മാതൃഭൂമി" } },
        { k: "B", text: { en: "Place to hide money", ml: "പണം ഒളിപ്പിക്കാനുള്ള സ്ഥലം" } },
        { k: "C", text: { en: "Space for wars only", ml: "യുദ്ധം ചെയ്യാനുള്ള സ്ഥലം മാത്രം" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "People link their identity to a specific land.", ml: "ഒരു പ്രത്യേക ഭൂഭാഗവുമായുള്ള ആത്മബന്ധം ദേശീയതയുടെ ഭാഗമാണ്." }
    },
    {
      q_id: "ps-p2c7-q14",
      type: "mcq",
      stem: { en: "Which empire's break-up is an example of divisive nationalism?", ml: "ദേശീയത കാരണം തകർന്നുപോയ സാമ്രാജ്യത്തിന് ഉദാഹരണം ഏത്?" },
      options: [
        { k: "A", text: { en: "Austro-Hungarian", ml: "ഓസ്ട്രോ-ഹംഗേറിയൻ" } },
        { k: "B", text: { en: "USA", ml: "അമേരിക്ക" } },
        { k: "C", text: { en: "India", ml: "ഇന്ത്യ" } },
        { k: "D", text: { en: "Japan", ml: "ജപ്പാൻ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Different ethnic groups within the empire wanted separate states.", ml: "പല വിഭാഗങ്ങൾ സ്വന്തം രാജ്യം വേണമെന്ന് ആവശ്യപ്പെട്ടതോടെ ഈ സാമ്രാജ്യം ഇല്ലാതായി." }
    },
    {
      q_id: "ps-p2c7-q15",
      type: "mcq",
      stem: { en: "Humanism prioritizes:", ml: "മാനവികത (Humanism) പ്രാധാന്യം നൽകുന്നത് ഏതിനാണ്?" },
      options: [
        { k: "A", text: { en: "Human welfare over narrow borders", ml: "അതിർത്തികൾക്ക് അപ്പുറം മനുഷ്യക്ഷേമത്തിന്" } },
        { k: "B", text: { en: "Only one nation's profit", ml: "ഒരു രാജ്യത്തിന്റെ ലാഭത്തിന് മാത്രം" } },
        { k: "C", text: { en: "Building weapons", ml: "ആയുധം നിർമ്മിക്കാൻ" } },
        { k: "D", text: { en: "Hating foreigners", ml: "വിദേശികളെ വെറുക്കാൻ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Humanity is seen as one large family.", ml: "മനുഷ്യർ എല്ലാവരും ഒന്നാണെന്ന ബോധ്യമാണിത്." }
    },
    {
      q_id: "ps-p2c7-q16",
      type: "mcq",
      stem: { en: "A state has 'Sovereignty'. This means:", ml: "ഒരു രാജ്യത്തിന് 'പരമാധികാരം' ഉണ്ട്. ഇതിനർത്ഥം:" },
      options: [
        { k: "A", text: { en: "It is free to make its own laws", ml: "സ്വന്തം നിയമങ്ങൾ നിർമ്മിക്കാൻ അത് സ്വതന്ത്രമാണ്" } },
        { k: "B", text: { en: "It is ruled by another country", ml: "മറ്റൊരു രാജ്യം ഭരിക്കുന്നു" } },
        { k: "C", text: { en: "It has no police", ml: "പോലീസ് ഇല്ല" } },
        { k: "D", text: { en: "It has no people", ml: "ജനങ്ങളില്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Sovereignty is the supreme power of a state.", ml: "ബാഹ്യ നിയന്ത്രണമില്ലാത്ത അധികാരമാണിത്." }
    },
    {
      q_id: "ps-p2c7-q17",
      type: "mcq",
      stem: { en: "Nationalism is described as a 'Shared Belief'. This means:", ml: "ദേശീയത ഒരു 'കൂട്ടായ വിശ്വാസം' ആണെന്ന് പറഞ്ഞാൽ അർത്ഥം:" },
      options: [
        { k: "A", text: { en: "It exists in the minds of people", ml: "അത് ജനങ്ങളുടെ മനസ്സിലാണ് നിലനിൽക്കുന്നത്" } },
        { k: "B", text: { en: "It is a physical wall", ml: "അതൊരു മതിലാണ്" } },
        { k: "C", text: { en: "It is written in every book", ml: "എല്ലാ പുസ്തകങ്ങളിലും എഴുതിയിട്ടുണ്ട്" } },
        { k: "D", text: { en: "It is a type of food", ml: "അതൊരു തരം ഭക്ഷണമാണ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "People must feel they are a nation for it to exist.", ml: "ജനങ്ങൾക്ക് തങ്ങൾ ഒരു രാഷ്ട്രമാണെന്ന തോന്നൽ ഉണ്ടായാൽ മാത്രമേ അത് യാഥാർത്ഥ്യമാകൂ." }
    },
    {
      q_id: "ps-p2c7-q18",
      type: "mcq",
      stem: { en: "Demands for separate Telangana or Jharkhand were based on:", ml: "പ്രത്യേക തെലങ്കാന അല്ലെങ്കിൽ ജാർഖണ്ഡ് എന്ന വാദം എന്തിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?" },
      options: [
        { k: "A", text: { en: "Local identity and development", ml: "പ്രാദേശിക സ്വത്വവും വികസനവും" } },
        { k: "B", text: { en: "Religious war", ml: "മതപരമായ യുദ്ധം" } },
        { k: "C", text: { en: "Ignoring the country", ml: "രാജ്യത്തെ അവഗണിക്കൽ" } },
        { k: "D", text: { en: "Foreign order", ml: "വിദേശ ഉത്തരവ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Localism often arises from perceived neglect.", ml: "പ്രാദേശികമായ വികാരങ്ങളാണ് ഇത്തരം ആവശ്യങ്ങളിലേക്ക് നയിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c7-q19",
      type: "mcq",
      stem: { en: "In an inclusive nation, citizenship is based on:", ml: "ഉൾക്കൊള്ളുന്ന രാഷ്ട്രത്തിൽ പൗരത്വം ഏതിനെ അടിസ്ഥാനമാക്കിയാണ്?" },
      options: [
        { k: "A", text: { en: "Law and Constitution", ml: "നിയമവും ഭരണഘടനയും" } },
        { k: "B", text: { en: "Only one religion", ml: "ഒരു മതം മാത്രം" } },
        { k: "C", text: { en: "Only one language", ml: "ഒരു ഭാഷ മാത്രം" } },
        { k: "D", text: { en: "Money in bank", ml: "ബാങ്കിലെ പണം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Democratic citizenship ignores personal identities for legal ones.", ml: "ഭരണഘടനയെ അംഗീകരിക്കുന്ന ആർക്കും പൗരത്വത്തിന് അർഹതയുണ്ട്." }
    },
    {
      q_id: "ps-p2c7-q20",
      type: "mcq",
      stem: { en: "Which of the following is a divisive side of nationalism?", ml: "താഴെ പറയുന്നവയിൽ ദേശീയതയുടെ വിഭജന മുഖം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Hatred for other nations", ml: "മറ്റു രാജ്യങ്ങളോടുള്ള വെറുപ്പ്" } },
        { k: "B", text: { en: "Love for motherland", ml: "മാതൃഭൂമിയോടുള്ള സ്നേഹം" } },
        { k: "C", text: { en: "Obeying laws", ml: "നിയമം അനുസരിക്കൽ" } },
        { k: "D", text: { en: "Celebrating festivals", ml: "ആഘോഷങ്ങൾ നടത്തൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Extreme nationalism leads to conflicts and wars.", ml: "മറ്റുള്ളവരെ താഴ്ത്തിക്കെട്ടുന്ന ദേശീയത വലിയ ആപത്താണ്." }
    },
    {
      q_id: "ps-p2c7-q21",
      type: "mcq",
      stem: { en: "Nationalism provides individuals with a sense of:", ml: "ദേശീയത വ്യക്തികൾക്ക് എന്ത് തോന്നലാണ് നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Belonging and Identity", ml: "ഉൾപ്പെട്ടിരിക്കുന്നു എന്ന തോന്നലും സ്വത്വവും" } },
        { k: "B", text: { en: "Loneliness", ml: "ഏകാന്തത" } },
        { k: "C", text: { en: "Confusion", ml: "ആശയക്കുഴപ്പം" } },
        { k: "D", text: { en: "Fear", ml: "ഭയം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It connects the individual to a larger group.", ml: "ഒരു വലിയ സമൂഹത്തിന്റെ ഭാഗമാണെന്ന ബോധം ഇത് നൽകുന്നു." }
    },
    {
      q_id: "ps-p2c7-q22",
      type: "mcq",
      stem: { en: "A 'Nation-State' is a:", ml: "ഒരു 'ദേശീയ രാജ്യം' (Nation-State) എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Political unit for a specific nation", ml: "ഒരു പ്രത്യേക ജനതയ്ക്കായുള്ള രാഷ്ട്രീയ യൂണിറ്റ്" } },
        { k: "B", text: { en: "Small shop", ml: "ഒരു ചെറിയ കട" } },
        { k: "C", text: { en: "Type of car", ml: "ഒരു തരം കാർ" } },
        { k: "D", text: { en: "Only for rich", ml: "സമ്പന്നർക്ക് മാത്രം ഉള്ളത്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It combines the cultural 'nation' with the political 'state'.", ml: "സാംസ്കാരിക സ്വത്വവും രാഷ്ട്രീയ അധികാരവും ഒത്തുചേരുന്ന അവസ്ഥയാണിത്." }
    },
    {
      q_id: "ps-p2c7-q23",
      type: "mcq",
      stem: { en: "Inclusive nationalism was visible in India during:", ml: "ഉൾക്കൊള്ളുന്ന ദേശീയത ഇന്ത്യയിൽ പ്രകടമായത് എപ്പോഴാണ്?" },
      options: [
        { k: "A", text: { en: "Freedom struggle", ml: "സ്വാതന്ത്ര്യ സമര കാലത്ത്" } },
        { k: "B", text: { en: "Before British came", ml: "ബ്രിട്ടീഷുകാർ വരുന്നതിന് മുൻപ്" } },
        { k: "C", text: { en: "Only in 2020", ml: "2020-ൽ മാത്രം" } },
        { k: "D", text: { en: "Never", ml: "ഒരിക്കലുമില്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "People of all faiths fought together for India.", ml: "ജാതിമത ഭേദമന്യേ എല്ലാവരും ഒരേ ലക്ഷ്യത്തിനായി പോരാടിയ കാലമാണത്." }
    },
    {
      q_id: "ps-p2c7-q24",
      type: "mcq",
      stem: { en: "Which technology helps in globalism?", ml: "ആഗോളവാദത്തിന് സഹായിക്കുന്ന സാങ്കേതികവിദ്യ ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Internet and Social Media", ml: "ഇന്റർനെറ്റും സോഷ്യൽ മീഡിയയും" } },
        { k: "B", text: { en: "Paper only", ml: "പേപ്പർ മാത്രം" } },
        { k: "C", text: { en: " Bullock carts", ml: "കാളവണ്ടികൾ" } },
        { k: "D", text: { en: "Stones", ml: "കല്ലുകൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It connects people across boundaries instantly.", ml: "ലോകത്തിന്റെ വിവിധ ഭാഗങ്ങളിലുള്ളവരെ നിമിഷങ്ങൾക്കുള്ളിൽ ബന്ധിപ്പിക്കാൻ ഇതിന് കഴിയുന്നു." }
    },
    {
      q_id: "ps-p2c7-q25",
      type: "mcq",
      stem: { en: "Exclusive nationalism is dangerous for:", ml: "പുറന്തള്ളുന്ന ദേശീയത ഏതിനാണ് ഭീഷണിയാകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Minority groups", ml: "ന്യൂനപക്ഷങ്ങൾക്ക്" } },
        { k: "B", text: { en: "The majority only", ml: "ഭൂരിപക്ഷത്തിന് മാത്രം" } },
        { k: "C", text: { en: "Rich people", ml: "സമ്പന്നർക്ക്" } },
        { k: "D", text: { en: "No one", ml: "ആർക്കും ദോഷമില്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It treats minorities as outsiders or second-class citizens.", ml: "ന്യൂനപക്ഷങ്ങളെ തുല്യമായി പരിഗണിക്കാൻ ഇത് അനുവദിക്കില്ല." }
    },
    {
      q_id: "ps-p2c7-q26",
      type: "mcq",
      stem: { en: "One challenge to nation-state is migration. Why?", ml: "കുടിയേറ്റം ദേശീയ രാജ്യങ്ങൾക്ക് വെല്ലുവിളിയാകുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "It makes society multi-cultural", ml: "അത് സമൂഹത്തെ ബഹു-സാംസ്കാരികമാക്കുന്നു" } },
        { k: "B", text: { en: "It stops rain", ml: "അത് മഴ തടയുന്നു" } },
        { k: "C", text: { en: "It makes people tall", ml: "ആളുകളെ ഉയരമുള്ളവരാക്കുന്നു" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Homogeneous culture is difficult to maintain with migration.", ml: "വ്യത്യസ്ത സംസ്കാരങ്ങൾ കടന്നുവരുന്നത് പഴയ രീതിയിലുള്ള ദേശീയ ചിന്തകളെ മാറ്റുന്നു." }
    },
    {
      q_id: "ps-p2c7-q27",
      type: "mcq",
      stem: { en: "In modern times, nationalism should be balanced with:", ml: "ആധുനിക കാലത്ത് ദേശീയത ഏതുമായിട്ട് സന്തുലിതമാക്കണം?" },
      options: [
        { k: "A", text: { en: "Universal Human Rights", ml: "സാർവ്വത്രിക മനുഷ്യാവകാശങ്ങൾ" } },
        { k: "B", text: { en: "Weapons", ml: "ആയുധങ്ങൾ" } },
        { k: "C", text: { en: "More taxes", ml: "കൂടുതൽ നികുതി" } },
        { k: "D", text: { en: "Ignoring neighbors", ml: "അയൽക്കാരെ അവഗണിക്കുക" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "National interests should not violate basic human dignity.", ml: "രാജ്യസ്നേഹം മനുഷ്യത്വത്തിന് വിരുദ്ധമാകരുത്." }
    },
    {
      q_id: "ps-p2c7-q28",
      type: "mcq",
      stem: { en: "Can a nation exist without a state?", ml: "ഭരണകൂടം (State) ഇല്ലാതെ ഒരു രാഷ്ട്രത്തിന് (Nation) നിലനിൽക്കാൻ കഴിയുമോ?" },
      options: [
        { k: "A", text: { en: "Yes, like people seeking independence", ml: "അതെ, സ്വാതന്ത്ര്യം കൊതിക്കുന്ന ജനതയെപ്പോലെ" } },
        { k: "B", text: { en: "No, impossible", ml: "ഇല്ല, സാധ്യമല്ല" } },
        { k: "C", text: { en: "Only in movies", ml: "സിനിമയിൽ മാത്രം" } },
        { k: "D", text: { en: "Only for rich", ml: "സമ്പന്നർക്ക് മാത്രം" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Many nations exist without having their own independent territory yet.", ml: "സ്വന്തം രാജ്യം കിട്ടുന്നതിന് മുൻപും ഒരു ജനതയ്ക്ക് തങ്ങൾ ഒരു രാഷ്ട്രമാണെന്ന തോന്നൽ ഉണ്ടാകാം." }
    },
    {
      q_id: "ps-p2c7-q29",
      type: "mcq",
      stem: { en: "Which thinker is associated with 'Civic Nationalism'?", ml: "ഉൾക്കൊള്ളുന്ന (Civic) ദേശീയതയുമായി ബന്ധപ്പെട്ടത് ആര്?" },
      options: [
        { k: "A", text: { en: "Renan", ml: "റെനാൻ (Renan)" } },
        { k: "B", text: { en: "Hitler", ml: "ഹിറ്റ്‌ലർ" } },
        { k: "C", text: { en: "Mussolini", ml: "മുസ്സോളിനി" } },
        { k: "D", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Ernest Renan argued that a nation is a daily plebiscite of its people.", ml: "ജനങ്ങളുടെ ഓരോ ദിവസവുമുള്ള സമ്മതമാണ് രാഷ്ട്രത്തിന്റെ അടിസ്ഥാനമെന്ന് അദ്ദേഹം പറഞ്ഞു." }
    },
    {
      q_id: "ps-p2c7-q30",
      type: "mcq",
      stem: { en: "Nationalism helps people feel pride in their:", ml: "ജനങ്ങൾക്ക് ഏത് കാര്യത്തിലാണ് അഭിമാനം നൽകാൻ ദേശീയത സഹായിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Culture and History", ml: "സംസ്കാരവും ചരിത്രവും" } },
        { k: "B", text: { en: "Bank account", ml: "ബാങ്ക് അക്കൗണ്ട്" } },
        { k: "C", text: { en: "Food only", ml: "ഭക്ഷണം മാത്രം" } },
        { k: "D", text: { en: "Height", ml: "ഉയരം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It fosters a positive identity based on shared heritage.", ml: "തങ്ങളുടെ പൈതൃകത്തിൽ ജനങ്ങൾക്ക് അഭിമാനം തോന്നാൻ ഇത് സഹായിക്കുന്നു." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit8: Lesson = {
  id: "pl-ps-11-p2-u8",
  title: { en: "Secularism", ml: "മതേതരത്വം (Secularism)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=w224YzCk3F0",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the meaning and types of religious domination", ml: "മതേതരത്വത്തിന്റെ അർത്ഥവും മതപരമായ ആധിപത്യത്തിന്റെ തരങ്ങളും മനസ്സിലാക്കുക" },
    { en: "Compare the Western and Indian models of secularism", ml: "മതേതരത്വത്തിന്റെ പാശ്ചാത്യ-ഇന്ത്യൻ മാതൃകകൾ താരതമ്യം ചെയ്യുക" },
    { en: "Explain the concept of 'Principled Distance'", ml: "തത്വനിഷ്ഠമായ അകലം' (Principled Distance) എന്ന ആശയം വിവരിക്കുക" },
    { en: "Analyze the criticisms of Indian secularism", ml: "ഇന്ത്യൻ മതേതരത്വത്തിന് നേരെയുള്ള വിമർശനങ്ങൾ വിശകലനം ചെയ്യുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the concept of secularism, its importance in ending religious domination, and the unique features of the Indian model.", 
      ml: "മതേതരത്വം എന്ന ആശയം, മതപരമായ ആധിപത്യം അവസാനിപ്പിക്കുന്നതിൽ അതിനുള്ള പ്രാധാന്യം, ഇന്ത്യൻ മാതൃകയുടെ പ്രത്യേകതകൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of inter-religious vs intra-religious domination, the Western model of mutual exclusion, and principled distance in India.", 
      ml: "മതങ്ങൾ തമ്മിലുള്ളതും മതത്തിനകത്തുള്ളതുമായ ആധിപത്യം, പാശ്ചാത്യ മാതൃകയിലുള്ള വേർതിരിവ്, ഇന്ത്യയിലെ തത്വനിഷ്ഠമായ അകലം എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of secularism. It defines secularism, discusses the differences between inter-religious and intra-religious domination, and compares the Western (American) model of secularism with the Indian model. It also addresses various criticisms of the Indian model of secularism.', ml: 'മതേതരത്വം (Secularism) എന്ന ആശയത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. മതേതരത്വം എന്നാൽ എന്താണെന്നും മതങ്ങൾ തമ്മിലുള്ള ആധിപത്യവും (Inter-religious) മതത്തിനകത്തുള്ള ആധിപത്യവും (Intra-religious) തമ്മിലുള്ള വ്യത്യാസമെന്തെന്നും ഇത് വ്യക്തമാക്കുന്നു. മതേതരത്വത്തിന്റെ പാശ്ചാത്യ (അമേരിക്കൻ) മാതൃകയും ഇന്ത്യൻ മാതൃകയും തമ്മിൽ താരതമ്യം ചെയ്യുന്നതോടൊപ്പം ഇന്ത്യൻ മതേതരത്വത്തിന് നേരെയുള്ള വിവിധ വിമർശനങ്ങളെയും ഇവിടെ പരിശോധിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Secularism', ml: 'മതേതരത്വം (Secularism)'}, {en: 'Separation of religion from political, social, and economic life.', ml: 'മതത്തെ രാഷ്ട്രീയ-സാമൂഹിക-സാമ്പത്തിക ജീവിതത്തിൽ നിന്ന് വേർതിരിക്കുന്ന പ്രത്യയശാസ്ത്രം.'}, {en: 'India is a secular state.', ml: 'ഇന്ത്യ ഒരു മതേതര രാജ്യമാണ്.'}],
          [{en: 'Inter-religious Domination', ml: 'മതങ്ങൾ തമ്മിലുള്ള ആധിപത്യം (Inter-religious Domination)'}, {en: 'When one religious group dominates or oppresses another.', ml: 'ഒരു മതവിഭാഗം മറ്റൊരു മതവിഭാഗത്തിന് മേൽ അധികാരം സ്ഥാപിക്കുകയോ അടിച്ചമർത്തുകയോ ചെയ്യുന്ന അവസ്ഥ.'}, {en: 'Religious riots or discrimination.', ml: 'മതകലാപങ്ങൾ അല്ലെങ്കിൽ വിവേചനം.'}],
          [{en: 'Intra-religious Domination', ml: 'മതത്തിനകത്തുള്ള ആധിപത്യം (Intra-religious Domination)'}, {en: 'When one group within a religion oppresses another group within the same religion.', ml: 'ഒരേ മതത്തിനുള്ളിലെ ഒരു വിഭാഗം മറ്റൊരു വിഭാഗത്തെ അടിച്ചമർത്തുന്ന രീതി.'}, {en: 'Untouchability or suppression of women.', ml: 'ഐത്തം അല്ലെങ്കിൽ സ്ത്രീകൾക്കെതിരെയുള്ള വിവേചനം.'}],
          [{en: 'Principled Distance', ml: 'തത്വനിഷ്ഠമായ അകലം (Principled Distance)'}, {en: 'The state may interfere in religion only to promote values like equality.', ml: 'സമത്വം, നീതി തുടങ്ങിയ മൂല്യങ്ങൾ ഉറപ്പാക്കാൻ മാത്രം ഗവൺമെന്റ് മതത്തിൽ ഇടപെടുന്ന രീതി.'}, {en: 'Banning child marriage.', ml: 'ബാലവിവാഹം നിരോധിക്കൽ.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is Secularism?', ml: '3.1 എന്താണ് മതേതരത്വം? (What is Secularism?)' },
      { type: 'ul', items: [
        { en: 'Secularism provides a safe space for all religions to coexist.', ml: 'എല്ലാ മതങ്ങൾക്കും സമാധാനപരമായി സഹവർത്തിക്കാനുള്ള സാഹചര്യം മതേതരത്വം ഒരുക്കുന്നു.' },
        { en: 'A secular state does not have an official state religion.', ml: 'ഒരു മതേതര രാഷ്ട്രത്തിന് ഔദ്യോഗിക മതമുണ്ടായിരിക്കില്ല.' },
        { en: 'The primary goal is to end religious domination.', ml: 'മതപരമായ ആധിപത്യം അവസാനിപ്പിക്കുക എന്നതാണ് ഇതിന്റെ പ്രധാന ലക്ഷ്യം.' }
      ]},

      { type: 'h3', en: '3.2 Two Types of Domination', ml: '3.2 രണ്ട് തരം ആധിപത്യങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Inter-religious Domination: Ensures the majority religion does not suppress the minority.', ml: 'മതങ്ങൾ തമ്മിലുള്ള ആധിപത്യം (Inter-religious): ഭൂരിപക്ഷ മതം ന്യൂനപക്ഷത്തെ അടിച്ചമർത്തുന്നില്ലെന്ന് ഇത് ഉറപ്പാക്കുന്നു.' },
        { en: 'Intra-religious Domination: Ensures that reform is possible within a religion (e.g., gender equality).', ml: 'മതത്തിനകത്തുള്ള ആധിപത്യം (Intra-religious): മതത്തിനുള്ളിലെ തെറ്റായ ആചാരങ്ങൾ മാറ്റാൻ (ഉദാ: ലിംഗസമത്വം) ഇത് സഹായിക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.3 The Western (American) Model', ml: '3.3 പാശ്ചാത്യ (അമേരിക്കൻ) മാതൃക' },
      { type: 'ul', items: [
        { en: 'Based on the "Wall of Separation" between state and religion.', ml: 'മതവും ഭരണകൂടവും തമ്മിലുള്ള പൂർണ്ണമായ വേർതിരിവ് ("Wall of Separation") ആണ് ഇതിന്റെ അടിസ്ഥാനം.' },
        { en: 'It is a model of "Mutual Exclusion": state cannot help religious bodies.', ml: 'ഭരണകൂടം മതപരമായ സ്ഥാപനങ്ങളെ സഹായിക്കില്ല, മതം ഭരണത്തിൽ ഇടപെടുകയുമില്ല.' }
      ]},

      { type: 'h3', en: '3.4 The Indian Model of Secularism', ml: '3.4 മതേതരത്വത്തിന്റെ ഇന്ത്യൻ മാതൃക' },
      { type: 'ul', items: [
        { en: 'Principled Distance: Indian state can interfere for social reform (e.g., temple entry).', ml: 'തത്വനിഷ്ഠമായ അകലം: സാമൂഹിക പരിഷ്കരണത്തിനായി മതപരമായ കാര്യങ്ങളിൽ ഇടപെടാൻ ഇന്ത്യൻ ഭരണകൂടത്തിന് അധികാരമുണ്ട്.' },
        { en: 'Equal Respect: State gives equal respect to all religions (Sarva Dharma Sambhava).', ml: 'തുല്യ ബഹുമാനം: എല്ലാ മതങ്ങളെയും ഒരേപോലെ ബഹുമാനിക്കുന്നു (സർവ്വധർമ്മ സമഭാവം).' },
        { en: 'Minority Rights: Special rights to protect culture and education.', ml: 'ന്യൂനപക്ഷ അവകാശങ്ങൾ: ന്യൂനപക്ഷങ്ങളുടെ സംസ്കാരവും വിദ്യാഭ്യാസവും സംരക്ഷിക്കാൻ പ്രത്യേക അവകാശങ്ങൾ നൽകുന്നു.' }
      ]},

      { type: 'h3', en: 'Comparison Table: Western vs. Indian Secularism', ml: 'താരതമ്യ പട്ടിക: പാശ്ചാത്യ vs. ഇന്ത്യൻ മതേതരത്വം' },
      { type: 'table', tableData: {
        headers: [{en: 'Feature', ml: 'സവിശേഷത'}, {en: 'Western Model', ml: 'പാശ്ചാത്യ മാതൃക'}, {en: 'Indian Model', ml: 'ഇന്ത്യൻ മാതൃക'}],
        rows: [
          [{en: 'Nature', ml: 'സ്വഭാവം'}, {en: 'Complete Separation.', ml: 'പൂർണ്ണമായ വേർതിരിവ്.'}, {en: 'Flexible Separation.', ml: 'മാറ്റങ്ങൾക്ക് വിധേയമായ വേർതിരിവ്.'}],
          [{en: 'Intervention', ml: 'ഇടപെടൽ'}, {en: 'No interference.', ml: 'ഇടപെടാൻ കഴിയില്ല.'}, {en: 'Interference for reform.', ml: 'പരിഷ്കരണത്തിനായി ഇടപെടാം.'}],
          [{en: 'Rights', ml: 'അവകാശങ്ങൾ'}, {en: 'Individual rights only.', ml: 'വ്യക്തിഗത അവകാശങ്ങൾ മാത്രം.'}, {en: 'Individual and Community rights.', ml: 'വ്യക്തിക്കും സമൂഹത്തിനും അവകാശമുണ്ട്.'}]
        ]
      }},

      { type: 'h3', en: '3.5 Criticisms of Indian Secularism', ml: '3.5 ഇന്ത്യൻ മതേതരത്വത്തിന് നേരെയുള്ള വിമർശനങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Anti-religious: Claim that it threatens religion.', ml: 'മതവിരുദ്ധം: മതേതരത്വം മതത്തെ ഇല്ലാതാക്കുന്നു എന്ന വാദം.' },
        { en: 'Western Import: Claim that it is not suited for India.', ml: 'പാശ്ചാത്യ ഇറക്കുമതി: ഇത് ഇന്ത്യൻ സംസ്കാരത്തിന് ചേരുന്നതല്ലെന്ന വാദം.' },
        { en: 'Minoritism: Claim that it favors minorities (Appeasement).', ml: 'ന്യൂനപക്ഷ പ്രീണനം: ന്യൂനപക്ഷങ്ങളെ പ്രീണിപ്പിക്കുന്നു എന്ന പരാതി.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'The word "Secular" was added by the 42nd Amendment (1976).', ml: '1976-ലെ 42-ാം ഭേദഗതിയിലൂടെയാണ് "മതേതരത്വം" എന്ന വാക്ക് ആമുഖത്തിൽ ചേർത്തത്.' },
        { en: 'Nehru believed secularism was essential for India\'s unity.', ml: 'ഇന്ത്യയുടെ ഐക്യത്തിന് മതേതരത്വം അത്യാവശ്യമാണെന്ന് നെഹ്‌റു വിശ്വസിച്ചു.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Secularism aims to end all forms of religious domination.', ml: 'മതപരമായ ആധിപത്യം അവസാനിപ്പിക്കുകയാണ് മതേതരത്വത്തിന്റെ ലക്ഷ്യം.' },
        { en: 'Indian model follows Principled Distance, not complete exclusion.', ml: 'ഇന്ത്യ പിന്തുടരുന്നത് തത്വനിഷ്ഠമായ അകലമാണ്, പൂർണ്ണമായ വേർതിരിവല്ല.' },
        { en: 'Minority protection is a key pillar of Indian secularism.', ml: 'ന്യൂനപക്ഷ സംരക്ഷണം ഇന്ത്യൻ മതേതരത്വത്തിന്റെ പ്രധാന തൂണാണ്.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Secularism",
      "ml": "മതേതരത്വം (Secularism)"
    },
    "definition": {
      "en": "The principle that opposes dominance of one religious group over another and suppression of the weak within a religion.",
      "ml": "ഒരു മതവിഭാഗം മറ്റൊരു മതത്തെ ആധിപത്യം നടത്തുന്നതിനെയും, മതത്തിനകത്ത് തന്നെ ദുർബലരെ അടിച്ചമർത്തുന്നതിനെയും എതിർക്കുന്ന തത്വം."
    }
  },
  {
    "term": {
      "en": "Theocratic State",
      "ml": "തിയോക്രാറ്റിക് സ്റ്റേറ്റ് (Theocratic State)"
    },
    "definition": {
      "en": "A country ruled directly by a priestly class where religious institutions and the state are not separated.",
      "ml": "മതസ്ഥാപനങ്ങളും ഭരണകൂടവും വേർതിരിക്കപ്പെടാതെ, നേരിട്ട് പുരോഹിത വർഗ്ഗം ഭരിക്കുന്ന രാജ്യം."
    }
  },
  {
    "term": {
      "en": "Western Secularism",
      "ml": "പാശ്ചാത്യ മതേതരത്വം (Western Secularism)"
    },
    "definition": {
      "en": "A secular model where religion and the state do not interfere in each other's affairs (Mutual exclusion), seeing religion as a purely individual matter.",
      "ml": "മതവും ഭരണകൂടവും പരസ്പരം കാര്യങ്ങളിൽ ഇടപെടാതിരിക്കുന്ന (Mutual exclusion), മതത്തെ വ്യക്തിപരമായ കാര്യമായി മാത്രം കാണുന്ന മതേതരത്വ മാതൃക."
    }
  },
  {
    "term": {
      "en": "Indian Secularism",
      "ml": "ഇന്ത്യൻ മതേതരത്വം (Indian Secularism)"
    },
    "definition": {
      "en": "A model that maintains a certain distance from all religions (Principled distance) but allows the government to intervene in religious matters for social well-being.",
      "ml": "എല്ലാ മതങ്ങളിൽ നിന്നും ഒരു നിശ്ചിത അകലം പാലിക്കുകയും (Principled distance), എന്നാൽ സാമൂഹിക നന്മയ്ക്കായി മതകാര്യങ്ങളിൽ ഇടപെടാൻ സർക്കാരിനെ അനുവദിക്കുകയും ചെയ്യുന്ന മാതൃക."
    }
  },
  {
    "term": {
      "en": "Kemal Ataturk",
      "ml": "കെമാൽ അതാതുർക്ക് (Kemal Ataturk)"
    },
    "definition": {
      "en": "The leader who strictly applied the state's authority in religious matters to implement secularism through westernization in Turkey.",
      "ml": "തുർക്കിയിൽ പാശ്ചാത്യവൽക്കരണത്തിലൂടെ മതേതരത്വം നടപ്പിലാക്കാൻ, മതപരമായ കാര്യങ്ങളിൽ ഭരണകൂടത്തിന്റെ അധികാരം കർശനമായി പ്രയോഗിച്ച നേതാവ്."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c8-q1",
      type: "mcq",
      stem: { en: "When was the word 'Secular' added to the Preamble of India?", ml: "ഇന്ത്യൻ ഭരണഘടനയുടെ ആമുഖത്തിൽ 'മതേതരം' എന്ന വാക്ക് ചേർത്തത് എപ്പോഴാണ്?" },
      options: [
        { k: "A", text: { en: "1950", ml: "1950" } },
        { k: "B", text: { en: "1976", ml: "1976" } },
        { k: "C", text: { en: "1992", ml: "1992" } },
        { k: "D", text: { en: "1947", ml: "1947" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The 42nd Constitutional Amendment added this term.", ml: "1976-ലെ 42-ാം ഭരണഘടനാ ഭേദഗതിയിലൂടെയാണ് ഈ വാക്ക് ഉൾപ്പെടുത്തിയത്." }
    },
    {
      q_id: "ps-p2c8-q2",
      type: "mcq",
      stem: { en: "Inter-religious domination refers to:", ml: "മതങ്ങൾ തമ്മിലുള്ള ആധിപത്യം (Inter-religious domination) എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Equality between religions", ml: "മതങ്ങൾ തമ്മിലുള്ള സമത്വം" } },
        { k: "B", text: { en: "One religion dominating another", ml: "ഒരു മതം മറ്റൊരു മതത്തെ അടിച്ചമർത്തുന്നത്" } },
        { k: "C", text: { en: "No religion in the country", ml: "രാജ്യത്ത് മതം ഇല്ലാത്ത അവസ്ഥ" } },
        { k: "D", text: { en: "Fighting within the same religion", ml: "ഒരേ മതത്തിനുള്ളിലെ തർക്കം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It occurs when a majority religion oppresses a minority.", ml: "ഒരു മതവിഭാഗം മറ്റൊരു വിഭാഗത്തിന് മേൽ അധികാരം സ്ഥാപിക്കുന്നതിനെയാണിത് സൂചിപ്പിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c8-q3",
      type: "mcq",
      stem: { en: "The Western model of secularism is characterized by:", ml: "മതേതരത്വത്തിന്റെ പാശ്ചാത്യ മാതൃകയുടെ പ്രത്യേകത എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Mutual exclusion of state and religion", ml: "ഭരണകൂടവും മതവും തമ്മിലുള്ള പൂർണ്ണമായ വേർതിരിവ്" } },
        { k: "B", text: { en: "State helps all religions", ml: "ഗവൺമെന്റ് എല്ലാ മതങ്ങളെയും സഹായിക്കുന്നു" } },
        { k: "C", text: { en: "Official state religion", ml: "ഔദ്യോഗിക രാഷ്ട്ര മതം" } },
        { k: "D", text: { en: "Religious leaders make laws", ml: "മതനേതാക്കൾ നിയമമുണ്ടാക്കുന്നു" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "In the West, there is a clear wall between church and state.", ml: "മതവും ഭരണകൂടവും പരസ്പരം ഇടപെടാത്ത രീതിയാണത്." }
    },
    {
      q_id: "ps-p2c8-q4",
      type: "mcq",
      stem: { en: "What is the unique feature of the Indian model of secularism?", ml: "ഇന്ത്യൻ മതേതരത്വ മാതൃകയുടെ സവിശേഷത എന്താണ്?" },
      options: [
        { k: "A", text: { en: "No religion allowed", ml: "മതങ്ങൾ അനുവദനീയമല്ല" } },
        { k: "B", text: { en: "Principled Distance", ml: "തത്വനിഷ്ഠമായ അകലം" } },
        { k: "C", text: { en: "Theocracy", ml: "മതഭരണം" } },
        { k: "D", text: { en: "Wall of Separation", ml: "പൂർണ്ണമായ വേർതിരിവ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "The state can interfere only for reform and equality.", ml: "ആവശ്യമുള്ളപ്പോൾ മാത്രം മതങ്ങളിൽ ഇടപെടാനുള്ള ഗവൺമെന്റിന്റെ അധികാരമാണിത്." }
    },
    {
      q_id: "ps-p2c8-q5",
      type: "mcq",
      stem: { en: "Intra-religious domination refers to:", ml: "മതത്തിനകത്തുള്ള ആധിപത്യം (Intra-religious domination) എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Conflict between Hindus and Muslims", ml: "മതങ്ങൾ തമ്മിലുള്ള തർക്കം" } },
        { k: "B", text: { en: "Oppression within the same religion (e.g. caste or gender)", ml: "ഒരേ മതത്തിനുള്ളിലെ അടിച്ചമർത്തൽ (ഉദാ: ജാതി അല്ലെങ്കിൽ ലിംഗവിവേചനം)" } },
        { k: "C", text: { en: "World war", ml: "ലോകമഹായുദ്ധം" } },
        { k: "D", text: { en: "No schools", ml: "സ്കൂളുകൾ ഇല്ലാത്തത്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It is about inequalities existing within a single faith community.", ml: "ഒരു മതത്തിനുള്ളിൽ തന്നെ ചില വിഭാഗങ്ങൾ മറ്റുള്ളവരെ അടിച്ചമർത്തുന്നതിനെയാണിത് പറയുന്നത്." }
    },
    {
      q_id: "ps-p2c8-q6",
      type: "mcq",
      stem: { en: "A state ruled by religious leaders is called:", ml: "മതനേതാക്കൾ ഭരിക്കുന്ന രാജ്യത്തെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Democracy", ml: "ജനാധിപത്യം" } },
        { k: "B", text: { en: "Theocracy", ml: "തിയോക്രസി (Theocracy)" } },
        { k: "C", text: { en: "Secular state", ml: "മതേതര രാഷ്ട്രം" } },
        { k: "D", text: { en: "Monarchy", ml: "രാജഭരണം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "In a theocracy, there is no separation between religion and politics.", ml: "മതനിയമങ്ങൾക്കനുസരിച്ച് ഭരണം നടക്കുന്ന രാജ്യമാണിത്." }
    },
    {
      q_id: "ps-p2c8-q7",
      type: "mcq",
      stem: { en: "The term 'Principled Distance' means the state can:", ml: "'തത്വനിഷ്ഠമായ അകലം' എന്നത് കൊണ്ട് അർത്ഥമാക്കുന്നത് ഗവൺമെന്റിന് എന്ത് ചെയ്യാം എന്നാണ്?" },
      options: [
        { k: "A", text: { en: "Interfere in religion for social reform", ml: "സാമൂഹിക പരിഷ്കരണത്തിനായി മതത്തിൽ ഇടപെടാം" } },
        { k: "B", text: { en: "Kill minorities", ml: "ന്യൂനപക്ഷങ്ങളെ കൊല്ലം" } },
        { k: "C", text: { en: "Ban all prayers", ml: "എല്ലാ പ്രാർത്ഥനകളും നിരോധിക്കാം" } },
        { k: "D", text: { en: "Ignore crimes by religious people", ml: "മതത്തിന്റെ പേരിൽ നടക്കുന്ന കുറ്റകൃത്യങ്ങൾ അവഗണിക്കാം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Intervention is allowed to uphold values of equality and dignity.", ml: "തെറ്റായ ആചാരങ്ങൾ മാറ്റാൻ ഇടപെടാൻ ഭരണകൂടത്തിന് അധികാരമുണ്ട്." }
    },
    {
      q_id: "ps-p2c8-q8",
      type: "mcq",
      stem: { en: "Which of the following is a criticism of Indian secularism?", ml: "താഴെ പറയുന്നവയിൽ ഇന്ത്യൻ മതേതരത്വത്തിന് നേരെയുള്ള വിമർശനം ഏത്?" },
      options: [
        { k: "A", text: { en: "It favors only the majority", ml: "ഭൂരിപക്ഷത്തെ മാത്രം സഹായിക്കുന്നു" } },
        { k: "B", text: { en: "It is an 'alien import' from the West", ml: "അത് പാശ്ചാത്യരിൽ നിന്ന് കടമെടുത്തതാണ്" } },
        { k: "C", text: { en: "It gives no freedom to individuals", ml: "വ്യക്തികൾക്ക് സ്വാതന്ത്ര്യം നൽകുന്നില്ല" } },
        { k: "D", text: { en: "It has no laws", ml: "അതിൽ നിയമങ്ങൾ ഒന്നുമില്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Critics often argue secularism is not suited for Indian religious culture.", ml: "ഇത് വിദേശ ആശയമാണെന്നതാണ് ഒരു പ്രമുഖ വിമർശനം." }
    },
    {
      q_id: "ps-p2c8-q9",
      type: "mcq",
      stem: { en: "The state banning untouchability is an example of ending:", ml: "ഐത്തം നിരോധിക്കുന്നത് ഏത് തരം ആധിപത്യം അവസാനിപ്പിക്കാനുള്ള ഉദാഹരണമാണ്?" },
      options: [
        { k: "A", text: { en: "Inter-religious domination", ml: "മതങ്ങൾ തമ്മിലുള്ള ആധിപത്യം" } },
        { k: "B", text: { en: "Intra-religious domination", ml: "മതത്തിനകത്തുള്ള ആധിപത്യം" } },
        { k: "C", text: { en: "Foreign rule", ml: "വിദേശ ഭരണം" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Untouchability is an internal evil within a religious community.", ml: "ഒരു മതത്തിനകത്തുള്ള വിഭാഗീയത അവസാനിപ്പിക്കലാണിത്." }
    },
    {
      q_id: "ps-p2c8-q10",
      type: "mcq",
      stem: { en: "Jawaharlal Nehru was a strong supporter of:", ml: "ജവഹർലാൽ നെഹ്‌റു എന്തിന്റെ ശക്തനായ വക്താവായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Communalism", ml: "വർഗ്ഗീയത" } },
        { k: "B", text: { en: "Secularism", ml: "മതേതരത്വം" } },
        { k: "C", text: { en: "Theocracy", ml: "മതഭരണം" } },
        { k: "D", text: { en: "Dictatorship", ml: "ഏകാധിപത്യം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Nehru believed secularism was vital for modern India.", ml: "ഇന്ത്യയുടെ ഐക്യത്തിന് മതേതരത്വം അനിവാര്യമാണെന്ന് അദ്ദേഹം കരുതി." }
    },
    {
      q_id: "ps-p2c8-q11",
      type: "mcq",
      stem: { en: "The Western model primarily focuses on which aspect of secularism?", ml: "പാശ്ചാത്യ മാതൃക പ്രധാനമായും എന്തിനാണ് ഊന്നൽ നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Separation of church and state", ml: "മതവും ഭരണകൂടവും തമ്മിലുള്ള വേർതിരിവ്" } },
        { k: "B", text: { en: "Equality of all people", ml: "എല്ലാവരുടെയും സമത്വം" } },
        { k: "C", text: { en: "Ending poverty", ml: "ദാരിദ്ര്യം അവസാനിപ്പിക്കൽ" } },
        { k: "D", text: { en: "Building temples", ml: "ക്ഷേത്രങ്ങൾ നിർമ്മിക്കൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The American model seeks to prevent state from interfering in church matters.", ml: "ഭരണകൂടവും മതസ്ഥാപനങ്ങളും തമ്മിലുള്ള വിടവിനാണ് അവിടെ പ്രാധാന്യം." }
    },
    {
      q_id: "ps-p2c8-q12",
      type: "mcq",
      stem: { en: "Can the Indian state fund religious educational institutions?", ml: "ഇന്ത്യയിൽ മതപരമായ വിദ്യാലയങ്ങൾക്ക് ഗവൺമെന്റ് ധനസഹായം നൽകുന്നത് അനുവദനീയമാണോ?" },
      options: [
        { k: "A", text: { en: "Yes, without discrimination", ml: "അതെ, വിവേചനമില്ലാതെ നൽകാം" } },
        { k: "B", text: { en: "No, strictly banned", ml: "ഇല്ല, കർശനമായി നിരോധിച്ചിരിക്കുന്നു" } },
        { k: "C", text: { en: "Only to majority", ml: "ഭൂരിപക്ഷത്തിന് മാത്രം" } },
        { k: "D", text: { en: "Only if the King orders", ml: "രാജാവ് പറഞ്ഞാൽ മാത്രം" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "Indian secularism allows for aid to all religious schools equally.", ml: "മതേതരത്വത്തിന്റെ ഭാഗമായി എല്ലാവർക്കും തുല്യ പരിഗണന നൽകി സഹായം നൽകാം." }
    },
    {
      q_id: "ps-p2c8-q13",
      type: "mcq",
      stem: { en: "Is Indian secularism 'Anti-religious'?", ml: "ഇന്ത്യൻ മതേതരത്വം 'മതവിരുദ്ധം' ആണോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "അല്ല" } },
        { k: "C", text: { en: "Only for Hindus", ml: "ഹിന്ദുക്കൾക്ക് മാത്രം" } },
        { k: "D", text: { en: "Only for Christians", ml: "ക്രിസ്ത്യാനികൾക്ക് മാത്രം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It only opposes religious domination, not religion itself.", ml: "അത് മതപരമായ അടിച്ചമർത്തലിനെ മാത്രമേ എതിർക്കുന്നുള്ളൂ." }
    },
    {
      q_id: "ps-p2c8-q14",
      type: "mcq",
      stem: { en: "Which article protects cultural and educational rights of minorities?", ml: "ന്യൂനപക്ഷങ്ങളുടെ സാംസ്കാരിക-വിദ്യാഭ്യാസ അവകാശങ്ങൾ സംരക്ഷിക്കുന്ന വകുപ്പുകൾ ഏവ?" },
      options: [
        { k: "A", text: { en: "Articles 14-18", ml: "വകുപ്പുകൾ 14-18" } },
        { k: "B", text: { en: "Articles 29-30", ml: "വകുപ്പുകൾ 29-30" } },
        { k: "C", text: { en: "Article 21", ml: "വകുപ്പ് 21" } },
        { k: "D", text: { en: "Article 32", ml: "വകുപ്പ് 32" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "These articles are vital for secular protection of minorities.", ml: "ന്യൂനപക്ഷങ്ങളെ സംരക്ഷിക്കുന്നതിനുള്ള പ്രധാന വകുപ്പുകളാണിവ." }
    },
    {
      q_id: "ps-p2c8-q15",
      type: "mcq",
      stem: { en: "Mutual Exclusion means:", ml: "പരസ്പര നിരാസം (Mutual Exclusion) എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Everyone lives together", ml: "എല്ലാവരും ഒന്നിച്ച് കഴിയുന്നു" } },
        { k: "B", text: { en: "Complete non-interference between state and religion", ml: "ഭരണകൂടവും മതവും തമ്മിൽ യാതൊരു ഇടപെടലുമില്ലാത്ത അവസ്ഥ" } },
        { k: "C", text: { en: "Everyone follows one religion", ml: "എല്ലാവരും ഒരു മതം പിന്തുടരുന്നു" } },
        { k: "D", text: { en: "Only rich sections rule", ml: "സമ്പന്നർ മാത്രം ഭരിക്കുന്നു" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "This is the core of the American model of secularism.", ml: "ഭരണകൂടവും മതവും പരസ്പരം അകലം പാലിക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c8-q16",
      type: "mcq",
      stem: { en: "Secularism is a means to achieve:", ml: "മതേതരത്വം ഏത് നേടാനുള്ള ഒരു മാർഗ്ഗമാണ്?" },
      options: [
        { k: "A", text: { en: "Equality and Freedom", ml: "സമത്വവും സ്വാതന്ത്ര്യവും" } },
        { k: "B", text: { en: "War and Power", ml: "യുദ്ധവും അധികാരവും" } },
        { k: "C", text: { en: "Money and Fame", ml: "പണവും പ്രശസ്തിയും" } },
        { k: "D", text: { en: "Control of the world", ml: "ലോകനിയന്ത്രണം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It ensures no one is oppressed based on faith.", ml: "മതത്തിന്റെ പേരിൽ വിവേചനം ഇല്ലാതാക്കി സ്വാതന്ത്ര്യം ഉറപ്പാക്കലാണിത്." }
    },
    {
      q_id: "ps-p2c8-q17",
      type: "mcq",
      stem: { en: "The claim of 'Minoritism' argues that secularism:", ml: "'ന്യൂനപക്ഷ പ്രീണനം' (Minoritism) എന്ന ആരോപണം പറയുന്നത് മതേതരത്വം:" },
      options: [
        { k: "A", text: { en: "Ignores minorities", ml: "ന്യൂനപക്ഷങ്ങളെ അവഗണിക്കുന്നു" } },
        { k: "B", text: { en: "Favors minorities over others", ml: "ന്യൂനപക്ഷങ്ങളെ അനാവശ്യമായി സഹായിക്കുന്നു" } },
        { k: "C", text: { en: "Treats everyone as kings", ml: "എല്ലാവരെയും രാജാക്കന്മാരായി കാണുന്നു" } },
        { k: "D", text: { en: "Has no religion", ml: "മതം ഒന്നുമില്ലാത്തതാണ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "This is a common political criticism of Indian secularism.", ml: "ന്യൂനപക്ഷങ്ങൾക്ക് മാത്രം കൂടുതൽ ആനുകൂല്യങ്ങൾ നൽകുന്നു എന്ന പരാതിയാണിത്." }
    },
    {
      q_id: "ps-p2c8-q18",
      type: "mcq",
      stem: { en: "Does a secular state have a state religion?", ml: "ഒരു മതേതര രാഷ്ട്രത്തിന് ഒരു ഔദ്യോഗിക മതം ഉണ്ടാകുമോ?" },
      options: [
        { k: "A", text: { en: "Yes", ml: "അതെ" } },
        { k: "B", text: { en: "No", ml: "ഇല്ല" } },
        { k: "C", text: { en: "Only if the majority wants", ml: "ഭൂരിപക്ഷം ആഗ്രഹിച്ചാൽ മാത്രം" } },
        { k: "D", text: { en: "Only for one year", ml: "ഒരു വർഷത്തേക്ക് മാത്രം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Non-identification with any religion is a feature of a secular state.", ml: "ഒരു മതത്തോടും പക്ഷപാതം കാണിക്കാത്തവയാണ് മതേതര രാജ്യങ്ങൾ." }
    },
    {
      q_id: "ps-p2c8-q19",
      type: "mcq",
      stem: { en: "The Indian state interference in temple entry is to promote:", ml: "ക്ഷേത്രപ്രവേശന കാര്യത്തിൽ ഗവൺമെന്റ് ഇടപെട്ടത് എന്തിനുവേണ്ടിയാണ്?" },
      options: [
        { k: "A", text: { en: "Inequality", ml: "അസമത്വം" } },
        { k: "B", text: { en: "Social Justice and Equality", ml: "സാമൂഹിക നീതിയും സമത്വവും" } },
        { k: "C", text: { en: "Confusion", ml: "ആശയക്കുഴപ്പം" } },
        { k: "D", text: { en: "Money collection", ml: "പണം പിരിക്കൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Secularism allows reform against oppressive practices.", ml: "ജാതി വിവേചനം അവസാനിപ്പിക്കാനാണ് ഇത്തരം ഇടപെടലുകൾ നടത്തിയത്." }
    },
    {
      q_id: "ps-p2c8-q20",
      type: "mcq",
      stem: { en: "Which country is the best example of the 'Wall of Separation' model?", ml: "'Wall of Separation' മാതൃകയ്ക്ക് മികച്ച ഉദാഹരണം ഏത് രാജ്യം?" },
      options: [
        { k: "A", text: { en: "India", ml: "ഇന്ത്യ" } },
        { k: "B", text: { en: "USA", ml: "അമേരിക്ക (USA)" } },
        { k: "C", text: { en: "Pakistan", ml: "പാകിസ്ഥാൻ" } },
        { k: "D", text: { en: "Saudi Arabia", ml: "സൗദി അറേബ്യ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The American Constitution explicitly creates this separation.", ml: "അമേരിക്കയിലാണ് മതവും രാഷ്ട്രീയവും തമ്മിൽ വലിയ മതിൽ ഉള്ളത്." }
    },
    {
      q_id: "ps-p2c8-q21",
      type: "mcq",
      stem: { en: "Indian secularism is often called 'interventionist' because:", ml: "ഇന്ത്യൻ മതേതരത്വം പലപ്പോഴും 'ഇടപെടൽ സ്വഭാവമുള്ളത്' (Interventionist) എന്ന് വിളിക്കപ്പെടാൻ കാരണം:" },
      options: [
        { k: "A", text: { en: "State stays away completely", ml: "സ്റ്റേറ്റ് പൂർണ്ണമായും വിട്ടുനിൽക്കുന്നു" } },
        { k: "B", text: { en: "State can interfere for social reform", ml: "പരിഷ്കരണങ്ങൾക്കായി സ്റ്റേറ്റിന് ഇടപെടാം" } },
        { k: "C", text: { en: "State kills everyone", ml: "സ്റ്റേറ്റ് എല്ലാവരെയും കൊല്ലുന്നു" } },
        { k: "D", text: { en: "State has no laws", ml: "സ്റ്റേറ്റിന് നിയമങ്ങൾ ഒന്നുമില്ല" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "This differentiates it from the strict Western model.", ml: "സമൂഹത്തിലെ തെറ്റുകൾ തിരുത്താൻ ഗവൺമെന്റിന് അധികാരമുണ്ട് എന്നതാണ് ഇതിന് കാരണം." }
    },
    {
      q_id: "ps-p2c8-q22",
      type: "mcq",
      stem: { en: "What is the primary goal of secularism regarding minority groups?", ml: "ന്യൂനപക്ഷങ്ങളുടെ കാര്യത്തിൽ മതേതരത്വത്തിന്റെ പ്രധാന ലക്ഷ്യം എന്ത്?" },
      options: [
        { k: "A", text: { en: "Ensuring they feel safe and equal", ml: "അവർക്ക് സുരക്ഷിതത്വവും സമത്വവും ഉറപ്പാക്കൽ" } },
        { k: "B", text: { en: "Making them leave the country", ml: "അവരെ നാടുകടത്തൽ" } },
        { k: "C", text: { en: "Changing their names", ml: "അവരുടെ പേര് മാറ്റൽ" } },
        { k: "D", text: { en: "Building high walls around them", ml: "അവർക്ക് ചുറ്റും മതിൽ പണിയൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Secularism protects smaller communities from majority domination.", ml: "എല്ലാവർക്കും ഭയമില്ലാതെ ജീവിക്കാൻ മതേതരത്വം സാഹചര്യം ഒരുക്കുന്നു." }
    },
    {
      q_id: "ps-p2c8-q23",
      type: "mcq",
      stem: { en: "Sarva Dharma Sambhava means:", ml: "സർവ്വധർമ്മ സമഭാവം എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Equal respect for all religions", ml: "എല്ലാ മതങ്ങൾക്കും തുല്യമായ ബഹുമാനം" } },
        { k: "B", text: { en: "Only one religion is good", ml: "ഒരു മതം മാത്രം നല്ലതാണ്" } },
        { k: "C", text: { en: "No religion at all", ml: "മതം ഒന്നുമില്ലാത്ത അവസ്ഥ" } },
        { k: "D", text: { en: "Hating all gods", ml: "എല്ലാ ദൈവങ്ങളെയും വെറുക്കൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "This is the cultural soul of Indian secularism.", ml: "എല്ലാ വിശ്വാസങ്ങളെയും ബഹുമാനിക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c8-q24",
      type: "mcq",
      stem: { en: "Which of the following is an intra-religious evil?", ml: "താഴെ പറയുന്നവയിൽ മതത്തിനകത്തുള്ള ഒരു തിന്മ ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Religious riots", ml: "മതകലാപങ്ങൾ" } },
        { k: "B", text: { en: "Untouchability within a community", ml: "ഒരു മതത്തിനകത്തുള്ള ഐത്തം" } },
        { k: "C", text: { en: "Foreign invasion", ml: "വിദേശ ആക്രമണം" } },
        { k: "D", text: { en: "High taxes", ml: "ഉയർന്ന നികുതി" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It's an oppression existing within one single faith group.", ml: "ഒരേ മതവിശ്വാസികൾക്കിടയിലുള്ള വിവേചനമാണിത്." }
    },
    {
      q_id: "ps-p2c8-q25",
      type: "mcq",
      stem: { en: "The criticism 'Western Import' argues that secularism is:", ml: "'പാശ്ചാത്യ ഇറക്കുമതി' എന്ന വിമർശനം കൊണ്ട് അർത്ഥമാക്കുന്നത്:" },
      options: [
        { k: "A", text: { en: "Too easy to understand", ml: "വളരെ ലളിതമായത്" } },
        { k: "B", text: { en: "Unsuitable for Indian culture", ml: "ഇന്ത്യൻ സംസ്കാരത്തിന് യോജിക്കാത്തത്" } },
        { k: "C", text: { en: "Very expensive", ml: "വിലകൂടിയത്" } },
        { k: "D", text: { en: "Illegal", ml: "നിയമവിരുദ്ധം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Critics believe it is a foreign idea forced upon India.", ml: "ഇന്ത്യൻ സാഹചര്യങ്ങൾക്ക് ഇത് ചേരില്ലെന്ന് ചിലർ വാദിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c8-q26",
      type: "mcq",
      stem: { en: "A state that favors one religion over others is:", ml: "ഒരു മതത്തെ മാത്രം പിന്തുണയ്ക്കുന്ന രാഷ്ട്രം:" },
      options: [
        { k: "A", text: { en: "Secular", ml: "മതേതരം" } },
        { k: "B", text: { en: "Non-secular / Communal", ml: "മതേതരമല്ലാത്തത് / വർഗ്ഗീയമായത്" } },
        { k: "C", text: { en: "Democratic", ml: "ജനാധിപത്യപരം" } },
        { k: "D", text: { en: "Neutral", ml: "നിഷ്പക്ഷമായത്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Favoritism is against the principle of secularism.", ml: "വിവേചനം കാണിക്കുന്ന ഗവൺമെന്റുകൾ മതേതരത്വത്തിന് വിരുദ്ധമാണ്." }
    },
    {
      q_id: "ps-p2c8-q27",
      type: "mcq",
      stem: { en: "Secularism opposes religious:", ml: "മതേതരത്വം ഏതിനെയാണ് എതിർക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Domination", ml: "ആധിപത്യത്തെ" } },
        { k: "B", text: { en: "Prayer", ml: "പ്രാർത്ഥനയെ" } },
        { k: "C", text: { en: "Festivals", ml: "ആഘോഷങ്ങളെ" } },
        { k: "D", text: { en: "Books", ml: "പുസ്തകങ്ങളെ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Ending all forms of religious oppression is the goal.", ml: "മതത്തിന്റെ പേരിലുള്ള എല്ലാ അടിച്ചമർത്തലുകളും ഇത് എതിർക്കുന്നു." }
    },
    {
      q_id: "ps-p2c8-q28",
      type: "mcq",
      stem: { en: "Is the banning of Sati a secular act in India?", ml: "സതി നിരോധിച്ചത് ഇന്ത്യയിൽ ഒരു മതേതരമായ നടപടിയാണോ?" },
      options: [
        { k: "A", text: { en: "Yes, as a social reform", ml: "അതെ, ഒരു സാമൂഹിക പരിഷ്കരണമായതുകൊണ്ട്" } },
        { k: "B", text: { en: "No, it's anti-religion", ml: "അല്ല, അത് മതത്തിന് വിരുദ്ധമാണ്" } },
        { k: "C", text: { en: "Only for rich families", ml: "സമ്പന്നർക്ക് മാത്രം" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Principled distance allows interference to save lives and dignity.", ml: "മനുഷ്യാവകാശങ്ങൾ സംരക്ഷിക്കാൻ മതപരമായ തെറ്റായ ആചാരങ്ങൾ മാറ്റുന്നത് മതേതരത്വത്തിന് ചേരുന്നതാണ്." }
    },
    {
      q_id: "ps-p2c8-q29",
      type: "mcq",
      stem: { en: "The 42nd Amendment was passed in which year?", ml: "42-ാം ഭേദഗതി പാസാക്കിയ വർഷം ഏത്?" },
      options: [
        { k: "A", text: { en: "1950", ml: "1950" } },
        { k: "B", text: { en: "1976", ml: "1976" } },
        { k: "C", text: { en: "1993", ml: "1993" } },
        { k: "D", text: { en: "2000", ml: "2000" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "This amendment brought 'Secularism' into the Preamble.", ml: "1976-ലാണ് ഈ വാക്ക് ഭരണഘടനയിൽ ചേർത്തത്." }
    },
    {
      q_id: "ps-p2c8-q30",
      type: "mcq",
      stem: { en: "Secularism provides a framework for:", ml: "മതേതരത്വം ഏതിനായുള്ള ചട്ടക്കൂടാണ് നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Conflict", ml: "തർക്കങ്ങൾക്ക്" } },
        { k: "B", text: { en: "Coexistence of diverse faiths", ml: "വിവിധ വിശ്വാസങ്ങളുടെ സഹവർത്തിത്വത്തിന്" } },
        { k: "C", text: { en: "Removing all religions", ml: "മതങ്ങളെല്ലാം ഇല്ലാതാക്കാൻ" } },
        { k: "D", text: { en: "Money making", ml: "പണം ഉണ്ടാക്കാൻ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It enables harmony in a multi-religious society.", ml: "വിവിധ മതവിഭാഗങ്ങൾക്ക് ഒത്തൊരുമയോടെ കഴിയാനുള്ള വഴിയൊരുക്കലാണിത്." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit9: Lesson = {
  id: "pl-ps-11-p2-u9",
  title: { en: "Peace", ml: "സമാധാനം (Peace)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=g3Se8-dooVo",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the broad definition of peace", ml: "സമാധാനം എന്ന വാക്കിന്റെ വിപുലമായ അർത്ഥം മനസ്സിലാക്കുക" },
    { en: "Identify different types of violence including structural violence", ml: "സാമൂഹിക ഘടനയിലുള്ള അക്രമങ്ങൾ ഉൾപ്പെടെയുള്ള വിവിധ തരം അക്രമങ്ങളെ തിരിച്ചറിയുക" },
    { en: "Analyze the role of the state in maintaining peace", ml: "സമാധാനം നിലനിർത്തുന്നതിൽ ഭരണകൂടത്തിനുള്ള പങ്ക് വിശകലനം ചെയ്യുക" },
    { en: "Explore strategies for promoting global and local peace", ml: "ആഗോള-പ്രാദേശിക സമാധാനം വളർത്തുന്നതിനുള്ള മാർഗ്ഗങ്ങൾ പരിശോധിക്കുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the concept of peace, the various forms of violence that threaten it, and strategies for creating a non-violent society.", 
      ml: "സമാധാനം എന്ന ആശയം, അതിന് ഭീഷണിയാകുന്ന വിവിധ തരം അക്രമങ്ങൾ, അക്രമരഹിതമായ ഒരു സമൂഹം സൃഷ്ടിക്കുന്നതിനുള്ള മാർഗ്ഗങ്ങൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of direct vs structural violence, pacifism, the role of the UN, and the importance of disarmament.", 
      ml: "നേരിട്ടുള്ളതും ഘടനാപരവുമായ അക്രമങ്ങൾ, സമാധാനവാദം (Pacifism), ഐക്യരാഷ്ട്രസഭയുടെ പങ്ക്, നിരായുധീകരണത്തിന്റെ പ്രാധാന്യം എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of peace. It defines what peace is, the distinction between the "absence of war" and "structural violence", and the various types of violence that threaten peace (caste, gender, communal, and state-sponsored). It also addresses the role of the state and the various strategies for promoting a culture of peace.', ml: 'സമാധാനം എന്ന ആശയത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. സമാധാനം എന്നാൽ എന്താണെന്നും "യുദ്ധത്തിന്റെ അഭാവവും" "ഘടനാപരമായ അക്രമവും" (Structural violence) തമ്മിലുള്ള വ്യത്യാസമെന്തെന്നും ഇത് വിശദീകരിക്കുന്നു. ജാതി, ലിംഗവിവേചനം, വർഗ്ഗീയത, ഭരണകൂടം സ്പോൺസർ ചെയ്യുന്ന അക്രമങ്ങൾ എന്നിങ്ങനെ സമാധാനത്തിന് ഭീഷണിയാകുന്ന വിവിധ അക്രമങ്ങളെക്കുറിച്ച് ഇത് പ്രതിപാദിക്കുന്നു. സമാധാനം വളർത്തിയെടുക്കുന്നതിൽ ഭരണകൂടത്തിനുള്ള പങ്കും വിവിധ കർമ്മപദ്ധതികളും ഇവിടെ ചർച്ച ചെയ്യുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Peace', ml: 'സമാധാനം (Peace)'}, {en: 'State of harmony and absence of physical and structural violence.', ml: 'അക്രമങ്ങളുടെ അഭാവവും ഐക്യവുമുള്ള അവസ്ഥ.'}, {en: 'Peaceful coexistence.', ml: 'സമാധാനപരമായ സഹവർത്തിത്വം.'}],
          [{en: 'Structural Violence', ml: 'ഘടനാപരമായ അക്രമം (Structural Violence)'}, {en: 'Violence built into the social structure like inequality.', ml: 'സാമൂഹിക വ്യവസ്ഥിതിയുടെ ഭാഗമായ അസമത്വവും അടിച്ചമർത്തലും.'}, {en: 'Caste discrimination.', ml: 'ജാതി വിവേചനം.'}],
          [{en: 'Pacifism', ml: 'സമാധാനവാദം (Pacifism)'}, {en: 'The belief that war and violence are unjustifiable.', ml: 'യുദ്ധവും അക്രമവും ഒരിക്കലും നീതീകരിക്കാനാവില്ലെന്ന വിശ്വാസം.'}, {en: 'Mahatma Gandhi\'s ideas.', ml: 'മഹാത്മാ ഗാന്ധിയുടെ ആശയങ്ങൾ.'}],
          [{en: 'State-sponsored Violence', ml: 'ഭരണകൂട അക്രമം (State-sponsored Violence)'}, {en: 'Violence supported by the government against citizens.', ml: 'പൗരന്മാർക്കെതിരെ ഭരണകൂടം നടത്തുന്ന അല്ലെങ്കിൽ പിന്തുണയ്ക്കുന്ന അക്രമങ്ങൾ.'}, {en: 'Extra-judicial killings.', ml: 'വ്യാജ ഏറ്റുമുട്ടലുകൾ.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is Peace?', ml: '3.1 എന്താണ് സമാധാനം? (What is Peace?)' },
      { type: 'ul', items: [
        { en: 'Peace is more than just the "absence of war".', ml: 'യുദ്ധമില്ലാത്ത അവസ്ഥ മാത്രമല്ല സമാധാനം.' },
        { en: 'True peace is the absence of all forms of violence, including hunger and fear.', ml: 'വിശപ്പ്, ഭയം, അടിച്ചമർത്തൽ എന്നിവ ഇല്ലാത്ത അവസ്ഥയാണ് യഥാർത്ഥ സമാധാനം.' },
        { en: 'A society is not peaceful if its members are oppressed.', ml: 'ജനങ്ങളെ അടിച്ചമർത്തുന്ന ഒരു സമൂഹം സമാധാനമുള്ളതാണെന്ന് പറയാൻ കഴിയില്ല.' }
      ]},

      { type: 'h3', en: '3.2 Types of Violence', ml: '3.2 അക്രമത്തിന്റെ തരങ്ങൾ (Types of Violence)' },
      { type: 'h4', en: 'A. Direct Physical Violence', ml: 'A. നേരിട്ടുള്ള ശാരീരിക അക്രമം' },
      { type: 'ul', items: [
        { en: 'Involves physical harm through war, riots, or attacks.', ml: 'യുദ്ധം, കലാപം, വ്യക്തിപരമായ ആക്രമണങ്ങൾ എന്നിവയിലൂടെ ശാരീരികമായി ഉപദ്രവിക്കുന്നത്.' }
      ]},
      { type: 'h4', en: 'B. Structural Violence', ml: 'B. ഘടനാപരമായ അക്രമം (Structural Violence)' },
      { type: 'ul', items: [
        { en: 'Caste System: Treating groups as "untouchable".', ml: 'ജാതി വ്യവസ്ഥ: ഒരു വിഭാഗത്തെ മാറ്റിനിർത്തുന്നത് അക്രമമാണ്.' },
        { en: 'Patriarchy: Systematic subordination of women.', ml: 'പിതൃമേധാവിത്വം: സ്ത്രീകൾക്ക് രണ്ടാം സ്ഥാനം നൽകുന്ന സാമൂഹിക രീതി.' },
        { en: 'Racism: Discrimination based on skin color.', ml: 'വംശീയത: നിറത്തിന്റെ അടിസ്ഥാനത്തിലുള്ള വിവേചനം.' }
      ]},

      { type: 'h3', en: '3.3 Can Violence ever promote Peace?', ml: '3.3 അക്രമത്തിലൂടെ സമാധാനം നേടാമോ?' },
      { type: 'ul', items: [
        { en: 'Some argue for "just wars" to end evil (e.g. stopping Hitler).', ml: 'തിന്മയെ അവസാനിപ്പിക്കാൻ "നീതിപൂർവ്വമായ യുദ്ധം" വേണമെന്ന് ചിലർ വാദിക്കുന്നു.' },
        { en: 'However, violence often creates a "Cycle of Violence".', ml: 'പക്ഷേ അക്രമം വീണ്ടും അക്രമത്തിലേക്കാണ് നയിക്കുന്നത് (അക്രമത്തിന്റെ വിഷവലയം).' },
        { en: 'Peaceful ends require peaceful means.', ml: 'സമാധാനപരമായ ലക്ഷ്യങ്ങൾ നേടാൻ സമാധാനപരമായ മാർഗ്ഗങ്ങൾ തന്നെ ഉപയോഗിക്കണം.' }
      ]},

      { type: 'h3', en: '3.4 Peace and the State', ml: '3.4 സമാധാനവും ഭരണകൂടവും' },
      { type: 'ul', items: [
        { en: 'The state has a "monopoly on the use of force" to maintain order.', ml: 'ക്രമസമാധാനം നിലനിർത്താൻ ബലം പ്രയോഗിക്കാനുള്ള അധികാരം ഭരണകൂടത്തിനുണ്ട്.' },
        { en: 'Democratic states are generally more peaceful as they allow dialogue.', ml: 'ജനാധിപത്യ രാജ്യങ്ങളിൽ ചർച്ചകൾക്ക് സ്ഥാനമുള്ളതുകൊണ്ട് അവിടെ അക്രമങ്ങൾ കുറവായിരിക്കും.' }
      ]},

      { type: 'h3', en: '3.5 Strategies for Promoting Peace', ml: '3.5 സമാധാനം വളർത്തുന്നതിനുള്ള മാർഗ്ഗങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Balance of Power: Ensuring no nation dominates others.', ml: 'അധികാര സന്തുലനം: ഒരു രാജ്യവും മറ്റുള്ളവയെ അടിച്ചമർത്തുന്നില്ലെന്ന് ഉറപ്പാക്കൽ.' },
        { en: 'Economic Cooperation: Trade makes war too costly.', ml: 'സാമ്പത്തിക സഹകരണം: രാജ്യങ്ങൾ തമ്മിലുള്ള കച്ചവടം യുദ്ധം ഒഴിവാക്കാൻ സഹായിക്കുന്നു.' },
        { en: 'International Organizations: The UN resolves disputes.', ml: 'അന്താരാഷ്ട്ര സംഘടനകൾ: ഐക്യരാഷ്ട്രസഭ തർക്കങ്ങൾ പരിഹരിക്കാൻ വേദിയൊരുക്കുന്നു.' },
        { en: 'Disarmament: Reducing weapons, especially nuclear.', ml: 'നിരായുധീകരണം: മാരകായുധങ്ങളുടെ എണ്ണം കുറയ്ക്കുക.' }
      ]},

      { type: 'h3', en: '3.6 Contemporary Challenges', ml: '3.6 സമകാലിക വെല്ലുവിളികൾ' },
      { type: 'ul', items: [
        { en: 'Terrorism: Use of fear for political goals.', ml: 'ഭീകരവാദം: ഭയത്തിലൂടെ രാഷ്ട്രീയ ലക്ഷ്യങ്ങൾ നേടാൻ ശ്രമിക്കുന്നത്.' },
        { en: 'Nuclear Proliferation: Spread of nuclear weapons.', ml: 'ആണവായുധ വ്യാപനം: ആണവായുധങ്ങൾ കൂടുന്നത് ലോകത്തിന് വലിയ ഭീഷണിയാണ്.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Peace is a process, not just a final destination.', ml: 'സമാധാനം എന്നത് എത്തിച്ചേരേണ്ട ഒരിടമല്ല, മറിച്ച് ഒരു പ്രക്രിയയാണ്.' },
        { en: 'Mahatma Gandhi\'s Non-violence (Ahimsa) is a powerful tool.', ml: 'ഗാന്ധിജിയുടെ അഹിംസ എന്ന സിദ്ധാന്തം സമാധാനത്തിനുള്ള ഏറ്റവും വലിയ ആയുധമാണ്.' },
        { en: 'Social justice is essential for lasting peace.', ml: 'സ്ഥിരമായ സമാധാനം നിലനിൽക്കാൻ സാമൂഹിക നീതി ഉറപ്പാക്കണം.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Peace means no physical or structural violence.', ml: 'ശാരീരികവും മാനസികവുമായ അക്രമങ്ങളുടെ അഭാവമാണ് സമാധാനം.' },
        { en: 'States must use force only according to law.', ml: 'നിയമപരമായ ആവശ്യങ്ങൾക്ക് മാത്രമേ ഭരണകൂടം ശക്തി ഉപയോഗിക്കാൻ പാടുള്ളൂ.' },
        { en: 'Disarmament is vital in the nuclear age.', ml: 'ആണവ യുഗത്തിൽ നിരായുധീകരണം അതിപ്രധാനമാണ്.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Peace",
      "ml": "സമാധാനം (Peace)"
    },
    "definition": {
      "en": "Not merely the absence of war, but the creation of a just society without violence and with harmony.",
      "ml": "കേവലം യുദ്ധമില്ലാത്ത അവസ്ഥ മാത്രമല്ല, അക്രമങ്ങളില്ലാത്തതും യോജിപ്പോടെയുള്ളതുമായ നീതിയുക്തമായ സമൂഹത്തിന്റെ സൃഷ്ടി."
    }
  },
  {
    "term": {
      "en": "Structural Violence",
      "ml": "ഘടനാപരമായ അക്രമം (Structural Violence)"
    },
    "definition": {
      "en": "Invisible violence emerging from social structures and institutions like caste system, class difference, and patriarchy.",
      "ml": "ജാതി വ്യവസ്ഥ, വർഗ്ഗ വ്യത്യാസം, പുരോഗതിയുടെ അഭാവം തുടങ്ങിയ സാമൂഹിക ഘടനകളിൽ നിന്നും സ്ഥാപനങ്ങളിൽ നിന്നും ഉടലെടുക്കുന്ന അദൃശ്യമായ അക്രമം."
    }
  },
  {
    "term": {
      "en": "Pacifism",
      "ml": "പാസിഫിസം (Pacifism)"
    },
    "definition": {
      "en": "A theory that completely opposes using war or violence for problem-solving and chooses peaceful ways.",
      "ml": "പ്രശ്നപരിഹാരത്തിനായി യുദ്ധമോ അക്രമമോ ഉപയോഗിക്കുന്നതിനെ പൂർണ്ണമായി എതിർക്കുകയും സമാധാനപരമായ വഴികൾ തിരഞ്ഞെടുക്കുകയും ചെയ്യുന്ന സിദ്ധാന്തം."
    }
  },
  {
    "term": {
      "en": "Friedrich Nietzsche",
      "ml": "ഫ്രെഡറിക് നീച്ച (Friedrich Nietzsche)"
    },
    "definition": {
      "en": "A 19th-century thinker who praised war, believing that a culture can only grow through conflicts.",
      "ml": "സംഘർഷങ്ങളിലൂടെ മാത്രമേ ഒരു സംസ്കാരത്തിന് വളരാൻ കഴിയൂ എന്ന് വിശ്വസിച്ച് യുദ്ധത്തെ പുകഴ്ത്തിയ 19-ാം നൂറ്റാണ്ടിലെ ചിന്തകൻ."
    }
  },
  {
    "term": {
      "en": "Mahatma Gandhi",
      "ml": "മഹാത്മാഗാന്ധി (Mahatma Gandhi)"
    },
    "definition": {
      "en": "A leader who showed the world that non-violence is not mere withdrawal but an active and courageous struggle for good and justice.",
      "ml": "അഹിംസയെന്നത് കേവലം മാറിനിൽക്കലല്ലെന്നും, നന്മയ്ക്കും നീതിക്കും വേണ്ടിയുള്ള സജീവവും ധീരവുമായ പോരാട്ടമാണെന്നും ലോകത്തിന് കാണിച്ചുകൊടുത്ത നേതാവ്."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c9-q1",
      type: "mcq",
      stem: { en: "True peace is not just the absence of war but the absence of:", ml: "യഥാർത്ഥ സമാധാനം എന്നത് യുദ്ധത്തിന്റെ അഭാവം മാത്രമല്ല, ഏതിന്റെ കൂടി അഭാവമാണ്?" },
      options: [
        { k: "A", text: { en: "Violence in all forms", ml: "എല്ലാ തരം അക്രമങ്ങളുടെയും" } },
        { k: "B", text: { en: "Hospitals", ml: "ആശുപത്രികളുടെ" } },
        { k: "C", text: { en: "Schools", ml: "സ്കൂളുകളുടെ" } },
        { k: "D", text: { en: "Markets", ml: "വിപണികളുടെ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Peace means physical, psychological, and structural harmony.", ml: "അക്രമങ്ങൾ ഒന്നുമില്ലാത്ത ശാന്തമായ അവസ്ഥയെയാണ് സമാധാനം എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c9-q2",
      type: "mcq",
      stem: { en: "Which of the following is an example of 'Structural Violence'?", ml: "താഴെ പറയുന്നവയിൽ 'ഘടനാപരമായ അക്രമത്തിന്' ഉദാഹരണം ഏത്?" },
      options: [
        { k: "A", text: { en: "A fist fight", ml: "രണ്ടുപേർ തമ്മിലുള്ള അടിപിടി" } },
        { k: "B", text: { en: "Caste discrimination", ml: "ജാതി വിവേചനം" } },
        { k: "C", text: { en: "A robbery", ml: "മോഷണം" } },
        { k: "D", text: { en: "Car accident", ml: "വാഹനാപകടം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Structural violence is hidden in social systems like caste or class.", ml: "സമൂഹത്തിലെ തെറ്റായ വ്യവസ്ഥിതികൾ മൂലം ആളുകൾ അനുഭവിക്കുന്ന വിവേചനമാണിത്." }
    },
    {
      q_id: "ps-p2c9-q3",
      type: "mcq",
      stem: { en: "Who is the most famous advocate of Non-violence (Ahimsa) in modern history?", ml: "ആധുനിക ചരിത്രത്തിൽ അഹിംസയുടെ ഏറ്റവും വലിയ വക്താവ് ആര്?" },
      options: [
        { k: "A", text: { en: "Napoleon", ml: "നെപ്പോളിയൻ" } },
        { k: "B", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" } },
        { k: "C", text: { en: "Adolf Hitler", ml: "അഡോൾഫ് ഹിറ്റ്ലർ" } },
        { k: "D", text: { en: "Alexander the Great", ml: "അലക്സാണ്ടർ ചക്രവർത്തി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Gandhi used non-violence as a political and moral tool for freedom.", ml: "ഗാന്ധിജി അഹിംസയെ ഒരു സമരമുറയാക്കി മാറ്റി." }
    },
    {
      q_id: "ps-p2c9-q4",
      type: "mcq",
      stem: { en: "The term 'Pacifism' means the belief that:", ml: "'സമാധാനവാദം' (Pacifism) എന്നാൽ എന്തിലുള്ള വിശ്വാസമാണ്?" },
      options: [
        { k: "A", text: { en: "War is always good", ml: "യുദ്ധം എപ്പോഴും നല്ലതാണ്" } },
        { k: "B", text: { en: "Violence is unjustifiable", ml: "അക്രമം ഒരിക്കലും ന്യായീകരിക്കാനാവില്ല" } },
        { k: "C", text: { en: "Only rich sections should rule", ml: "സമ്പന്നർ മാത്രം ഭരിക്കണം" } },
        { k: "D", text: { en: "Taxes should be high", ml: "നികുതി കൂടുതൽ വേണം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Pacifists seek peaceful resolutions to all conflicts.", ml: "ഒരു പ്രശ്നത്തിനും അക്രമത്തിലൂടെ പരിഹാരം കാണരുത് എന്ന് ഇവർ വിശ്വസിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c9-q5",
      type: "mcq",
      stem: { en: "What is 'Disarmament'?", ml: "എന്താണ് 'നിരായുധീകരണം' (Disarmament)?" },
      options: [
        { k: "A", text: { en: "Buying more tanks", ml: "കൂടുതൽ ടാങ്കുകൾ വാങ്ങൽ" } },
        { k: "B", text: { en: "Reduction of weapons", ml: "ആയുധങ്ങളുടെ എണ്ണം കുറയ്ക്കൽ" } },
        { k: "C", text: { en: "Starting a new army", ml: "പുതിയ സൈന്യത്തെ രൂപീകരിക്കൽ" } },
        { k: "D", text: { en: "Closing the Parliament", ml: "പാർലമെന്റ് അടച്ചുപൂട്ടൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Disarmament aims to reduce the risk of war by having fewer weapons.", ml: "യുദ്ധത്തിനുള്ള സാധ്യത കുറയ്ക്കാനായി ആയുധങ്ങൾ ഉപേക്ഷിക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c9-q6",
      type: "mcq",
      stem: { en: "The United Nations (UN) was established primarily to:", ml: "ഐക്യരാഷ്ട്രസഭ (UN) രൂപീകരിച്ചത് പ്രധാനമായും എന്തിനാണ്?" },
      options: [
        { k: "A", text: { en: "Promote world peace and resolve disputes", ml: "ലോകസമാധാനം വളർത്താനും തർക്കങ്ങൾ പരിഹരിക്കാനും" } },
        { k: "B", text: { en: "Help one country win a war", ml: "ഒരു രാജ്യത്തെ യുദ്ധം ജയിക്കാൻ സഹായിക്കാൻ" } },
        { k: "C", text: { en: "Print more money", ml: "കൂടുതൽ പണം അച്ചടിക്കാൻ" } },
        { k: "D", text: { en: "Stop people from traveling", ml: "യാത്രകൾ തടയാൻ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "The UN provides a platform for global cooperation.", ml: "രാജ്യങ്ങൾ തമ്മിലുള്ള പ്രശ്നങ്ങൾ ചർച്ചയിലൂടെ പരിഹരിക്കാനാണ് UN ശ്രമിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c9-q7",
      type: "mcq",
      stem: { en: "Patriarchy is a form of:", ml: "പിതൃമേധാവിത്വം ഏതിന്റെ ഒരു രൂപമാണ്?" },
      options: [
        { k: "A", text: { en: "Direct violence", ml: "നേരിട്ടുള്ള അക്രമം" } },
        { k: "B", text: { en: "Structural violence", ml: "ഘടനാപരമായ അക്രമം" } },
        { k: "C", text: { en: "State peace", ml: "ഭരണകൂട സമാധാനം" } },
        { k: "D", text: { en: "Individual choice", ml: "വ്യക്തിപരമായ താല്പര്യം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It is an invisible oppression of women built into society.", ml: "സ്ത്രീകൾക്ക് അസമത്വം നൽകുന്ന ഒരു സാമൂഹിക വ്യവസ്ഥയാണിത്." }
    },
    {
      q_id: "ps-p2c9-q8",
      type: "mcq",
      stem: { en: "A 'Just War' is defined as a war fought to:", ml: "ഒരു 'നീതിപൂർവ്വമായ യുദ്ധം' എന്ന് വിളിക്കുന്നത് எന്തിനുവേണ്ടിയുള്ള യുദ്ധത്തെയാണ്?" },
      options: [
        { k: "A", text: { en: "Kill innocent people", ml: "നിരപരാധികളെ കൊല്ലാൻ" } },
        { k: "B", text: { en: "End a greater evil (like Nazism)", ml: "വലിയ തിന്മകളെ അവസാനിപ്പിക്കാൻ" } },
        { k: "C", text: { en: "Steal gold", ml: "സ്വർണ്ണം മോഷ്ടിക്കാൻ" } },
        { k: "D", text: { en: "Increase land area", ml: "സ്ഥലം പിടിച്ചെടുക്കാൻ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Some believe war is justified if it is the only way to stop massive injustice.", ml: "അത്യാവശ്യഘട്ടങ്ങളിൽ തിന്മയ്ക്കെതിരെ പോരാടുന്നത് നീതിയാണെന്ന് ഇവർ വാദിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c9-q9",
      type: "mcq",
      stem: { en: "The use of fear and violence for political goals is called:", ml: "രാഷ്ട്രീയ ലക്ഷ്യങ്ങൾക്കായി ഭയവും അക്രമവും ഉപയോഗിക്കുന്നതിനെ എന്ത് വിളിക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "Secularism", ml: "മതേതരത്വം" } },
        { k: "B", text: { en: "Terrorism", ml: "ഭീകരവാദം (Terrorism)" } },
        { k: "C", text: { en: "Democracy", ml: "ജനാധിപത്യം" } },
        { k: "D", text: { en: "Nationalism", ml: "ദേശീയത" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Terrorism targets civilians to create instability.", ml: "ജനങ്ങളെ ഭയപ്പെടുത്തി അധികാരം സ്ഥാപിക്കാനുള്ള ശ്രമമാണിത്." }
    },
    {
      q_id: "ps-p2c9-q10",
      type: "mcq",
      stem: { en: "Why is the state said to have a 'monopoly on force'?", ml: "ബലം പ്രയോഗിക്കാൻ ഭരണകൂടത്തിന് മാത്രമേ അധികാരമുള്ളൂ എന്ന് പറയുന്നതിനർത്ഥം എന്ത്?" },
      options: [
        { k: "A", text: { en: "Only state can legally use force to maintain order", ml: "നിയമപരമായി സമാധാനം നിലനിർത്താൻ സ്റ്റേറ്റിന് മാത്രമേ ശക്തി ഉപയോഗിക്കാൻ കഴിയൂ" } },
        { k: "B", text: { en: "Everyone can use force", ml: "എല്ലാവർക്കും ശക്തി ഉപയോഗിക്കാം" } },
        { k: "C", text: { en: "Force is forbidden for state", ml: "സ്റ്റേറ്റിന് ശക്തി ഉപയോഗിക്കാൻ അനുവാദമില്ല" } },
        { k: "D", text: { en: "Only rich people can use force", ml: "സമ്പന്നർക്ക് മാത്രമേ ശക്തി ഉപയോഗിക്കാൻ കഴിയൂ" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "This prevents individuals from taking law into their own hands.", ml: "ആളുകൾ സ്വന്തം നിലയ്ക്ക് അക്രമം നടത്താതിരിക്കാനാണ് ഈ അധികാരം സ്റ്റേറ്റിന് നൽകിയിട്ടുള്ളത്." }
    },
    {
      q_id: "ps-p2c9-q11",
      type: "mcq",
      stem: { en: "Nuclear weapons proliferation increases the risk of:", ml: "ആണവായുധ വ്യാപനം ഏതിനായുള്ള സാധ്യതയാണ് വർദ്ധിപ്പിക്കുന്നത്?" },
      options: [
        { k: "A", text: { en: "Total destruction", ml: "സർവ്വനാശം" } },
        { k: "B", text: { en: "Clean air", ml: "ശുദ്ധവായു" } },
        { k: "C", text: { en: "More jobs", ml: "കൂടുതൽ ജോലി" } },
        { k: "D", text: { en: "Equality", ml: "സമത്വം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Nuclear war can end human civilization.", ml: "ആണവയുദ്ധം ലോകത്തെ മുഴുവൻ നശിപ്പിക്കാൻ ശേഷിയുള്ളതാണ്." }
    },
    {
      q_id: "ps-p2c9-q12",
      type: "mcq",
      stem: { en: "A pre-condition for lasting peace is:", ml: "സ്ഥിരമായ സമാധാനം ഉണ്ടാകാനുള്ള മുൻകരുതൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Social Justice", ml: "സാമൂഹിക നീതി" } },
        { k: "B", text: { en: "Secret police", ml: "രഹസ്യ പോലീസ്" } },
        { k: "C", text: { en: "Strict censorship", ml: "കടുത്ത സെൻസർഷിപ്പ്" } },
        { k: "D", text: { en: "Banning elections", ml: "തിരഞ്ഞെടുപ്പുകൾ നിരോധിക്കൽ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Injustice leads to anger and eventually violence.", ml: "നീതിയില്ലാത്ത സമൂഹത്തിൽ ഒരിക്കലും ശാശ്വതമായ സമാധാനം ഉണ്ടാവില്ല." }
    },
    {
      q_id: "ps-p2c9-q13",
      type: "mcq",
      stem: { en: "Economic interdependence between nations helps peace because:", ml: "രാജ്യങ്ങൾ തമ്മിലുള്ള സാമ്പത്തിക സഹകരണം സമാധാനത്തിന് സഹായിക്കുന്നത് എങ്ങനെ?" },
      options: [
        { k: "A", text: { en: "War becomes too expensive and harmful for both", ml: "യുദ്ധം രണ്ടു കൂട്ടർക്കും വലിയ സാമ്പത്തിക നഷ്ടമുണ്ടാക്കും" } },
        { k: "B", text: { en: "They can buy more weapons together", ml: "അവർക്ക് കൂടുതൽ ആയുധങ്ങൾ വാങ്ങാം" } },
        { k: "C", text: { en: "Money makes people angry", ml: "പണം ആളുകളെ ദേഷ്യം പിടിപ്പിക്കും" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Interlinked economies provide a reason to avoid conflict.", ml: "രാജ്യങ്ങൾ പരസ്പരം സാമ്പത്തികമായി ആശ്രയിക്കുമ്പോൾ യുദ്ധം ഒഴിവാക്കാൻ അവർ ശ്രദ്ധിക്കും." }
    },
    {
      q_id: "ps-p2c9-q14",
      type: "mcq",
      stem: { en: "Violence creates a 'Cycle of Violence'. This means:", ml: "അക്രമം ഒരു 'വിഷവലയം' സൃഷ്ടിക്കുന്നു എന്ന് പറഞ്ഞാൽ അർത്ഥം:" },
      options: [
        { k: "A", text: { en: "Violence only happens in a circle", ml: "അക്രമം ഒരു വട്ടത്തിൽ മാത്രമേ നടക്കൂ" } },
        { k: "B", text: { en: "One act of violence leads to another in revenge", ml: "ഒരു അക്രമം പകവീട്ടലിലൂടെ മറ്റൊരു അക്രമത്തിന് കാരണമാകുന്നു" } },
        { k: "C", text: { en: "Violence is like a bicycle", ml: "അക്രമം ഒരു സൈക്കിൾ പോലെയാണ്" } },
        { k: "D", text: { en: "Violence always stops after one fight", ml: "അക്രമം ഒരു വട്ടം കഴിഞ്ഞാൽ തനിയെ നിൽക്കും" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Violence rarely solves problems permanently.", ml: "അക്രമം അടിച്ചമർത്തിയാലും അത് വീണ്ടും പുതിയ രൂപത്തിൽ പുറത്തു വരും." }
    },
    {
      q_id: "ps-p2c9-q15",
      type: "mcq",
      stem: { en: "Who was a key figure in the Civil Rights Movement in USA using non-violence?", ml: "അമേരിക്കയിൽ അഹിംസ ഉപയോഗിച്ച് പൗരാവകാശ സമരം നയിച്ചത് ആര്?" },
      options: [
        { k: "A", text: { en: "Martin Luther King Jr.", ml: "മാർട്ടിൻ ലൂതർ കിംഗ് ജൂനിയർ" } },
        { k: "B", text: { en: "George Washington", ml: "ജോർജ്ജ് വാഷിംഗ്ടൺ" } },
        { k: "C", text: { en: "Christopher Columbus", ml: "ക്രിസ്റ്റഫർ കൊളംബസ്" } },
        { k: "D", text: { en: "Donald Trump", ml: "ഡൊണാൾഡ് ട്രംപ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "He was deeply influenced by Gandhi's methods.", ml: "ഗാന്ധിജിയുടെ ആശയങ്ങൾ അമേരിക്കയിൽ നടപ്പിലാക്കിയത് അദ്ദേഹമാണ്." }
    },
    {
      q_id: "ps-p2c9-q16",
      type: "mcq",
      stem: { en: "Peace is not a final destination but a:", ml: "സമാധാനം എന്നത് എത്തിച്ചേരേണ്ട ഒരിടമല്ല, മറിച്ച് ഒരു:" },
      options: [
        { k: "A", text: { en: "Process", ml: "പ്രക്രിയ (Process)" } },
        { k: "B", text: { en: "Mistake", ml: "തെറ്റ്" } },
        { k: "C", text: { en: "Building", ml: "കെട്ടിടം" } },
        { k: "D", text: { en: "Weapon", ml: "ആയുധം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Maintaining peace requires constant effort and dialogue.", ml: "സമാധാനം നിലനിർത്താൻ നിരന്തരമായ പരിശ്രമം ആവശ്യമാണ്." }
    },
    {
      q_id: "ps-p2c9-q17",
      type: "mcq",
      stem: { en: "Which of the following is visible and immediate?", ml: "താഴെ പറയുന്നവയിൽ പെട്ടെന്ന് കാണാൻ കഴിയുന്ന അക്രമം ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Direct physical violence", ml: "നേരിട്ടുള്ള ശാരീരിക അക്രമം" } },
        { k: "B", text: { en: "Structural violence", ml: "ഘടനാപരമായ അക്രമം" } },
        { k: "C", text: { en: "Peace", ml: "സമാധാനം" } },
        { k: "D", text: { en: "Tolerance", ml: "സഹിഷ്ണുത" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Physical injury or destruction is easily noticed.", ml: "അടിപിടിയോ ബോംബേറോ നടന്നാൽ അത് പെട്ടെന്ന് നമുക്ക് മനസ്സിലാകും." }
    },
    {
      q_id: "ps-p2c9-q18",
      type: "mcq",
      stem: { en: "Racism is a form of violence based on:", ml: "വംശീയത ഏതിനെ അടിസ്ഥാനമാക്കിയുള്ള അക്രമമാണ്?" },
      options: [
        { k: "A", text: { en: "Skin color or origin", ml: "ചർമ്മത്തിന്റെ നിറം അല്ലെങ്കിൽ വംശം" } },
        { k: "B", text: { en: "Musical taste", ml: "സംഗീത താല്പര്യം" } },
        { k: "C", text: { en: "Cooking skills", ml: "പാചകത്തിലുള്ള കഴിവ്" } },
        { k: "D", text: { en: "Hair style", ml: "മുടി സ്റ്റൈൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Discrimination against a race is a violation of peace.", ml: "ഒരാളുടെ നിറത്തിന്റെ പേരിൽ അയാളെ താഴ്ത്തിക്കാട്ടുന്നത് അക്രമമാണ്." }
    },
    {
      q_id: "ps-p2c9-q19",
      type: "mcq",
      stem: { en: "Why is the use of 'Force' by democratic states generally lower?", ml: "ജനാധിപത്യ രാജ്യങ്ങൾ ബലപ്രയോഗം കുറയ്ക്കുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "They allow dialogue and dissent", ml: "അവർ ചർച്ചകൾക്കും വിയോജിപ്പുകൾക്കും അനുവാദം നൽകുന്നു" } },
        { k: "B", text: { en: "They have no weapons", ml: "അവർക്ക് ആയുധങ്ങൾ ഇല്ല" } },
        { k: "C", text: { en: "They have no police", ml: "അവർക്ക് പോലീസ് ഇല്ല" } },
        { k: "D", text: { en: "The people are very small", ml: "അവിടുത്തെ ജനങ്ങൾ കുറവാണ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Democratic systems have peaceful ways to handle anger.", ml: "പ്രശ്നങ്ങൾ സംസാരിച്ച് തീർക്കാനുള്ള സാഹചര്യം ജനാധിപത്യം നൽകുന്നു." }
    },
    {
      q_id: "ps-p2c9-q20",
      type: "mcq",
      stem: { en: "Nuclear weapons were first used in which war?", ml: "ആദ്യമായി ആണവായുധങ്ങൾ ഉപയോഗിച്ചത് ഏത് യുദ്ധത്തിലാണ്?" },
      options: [
        { k: "A", text: { en: "World War I", ml: "ഒന്നാം ലോകമഹായുദ്ധം" } },
        { k: "B", text: { en: "World War II", ml: "രണ്ടാം ലോകമഹായുദ്ധം" } },
        { k: "C", text: { en: "Gulf War", ml: "ഗൾഫ് യുദ്ധം" } },
        { k: "D", text: { en: "Vietnam War", ml: "വിയറ്റ്നാം യുദ്ധം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Hiroshima and Nagasaki were bombed in 1945.", ml: "1945-ൽ ഹിരോഷിമയിലും നാഗസാക്കിയിലുമാണ് ഇവ വർഷിച്ചത്." }
    },
    {
      q_id: "ps-p2c9-q21",
      type: "mcq",
      stem: { en: "Disarmament is vital because nuclear weapons can end:", ml: "ആണവായുധങ്ങൾ ഏതിനെ ഇല്ലാതാക്കുമെന്നതുകൊണ്ടാണ് നിരായുധീകരണം പ്രധാനമാകുന്നത്?" },
      options: [
        { k: "A", text: { en: "All life on earth", ml: "ഭൂമിയിലെ എല്ലാ ജീവജാലങ്ങളെയും" } },
        { k: "B", text: { en: "Only bad people", ml: "മോശം ആളുകളെ മാത്രം" } },
        { k: "C", text: { en: "Only one village", ml: "ഒരു ഗ്രാമത്തെ മാത്രം" } },
        { k: "D", text: { en: "No one", ml: "ആരെയും ഉപദ്രവിക്കില്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Nuclear weapons are weapons of mass destruction.", ml: "ലോകത്തെ മുഴുവൻ നശിപ്പിക്കാൻ ആണവായുധങ്ങൾക്ക് കഴിയും." }
    },
    {
      q_id: "ps-p2c9-q22",
      type: "mcq",
      stem: { en: "Structural violence is implicit. This means it is:", ml: "ഘടനാപരമായ അക്രമം 'പ്രകടമല്ലാത്തതാണ്' (Implicit). ഇതിനർത്ഥം അത്:" },
      options: [
        { k: "A", text: { en: "Hidden and built into the system", ml: "വ്യവസ്ഥയ്ക്കുള്ളിൽ ഒളിഞ്ഞിരിക്കുന്നതാണ്" } },
        { k: "B", text: { en: "Always on TV", ml: "എപ്പോഴും ടിവിയിൽ കാണുന്നതാണ്" } },
        { k: "C", text: { en: "Written on walls", ml: "മതിലുകളിൽ എഴുതിവെച്ചിട്ടുണ്ട്" } },
        { k: "D", text: { en: "Only in dreams", ml: "സ്വപ്നങ്ങളിൽ മാത്രമാണ്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It is often not recognized as violence by many.", ml: "പലപ്പോഴും ഇത് അക്രമമാണെന്ന് ആളുകൾ തിരിച്ചറിയാറില്ല." }
    },
    {
      q_id: "ps-p2c9-q23",
      type: "mcq",
      stem: { en: "State-sponsored violence can include:", ml: "ഭരണകൂടം നടത്തുന്ന അക്രമങ്ങളിൽ ഏത് ഉൾപ്പെടാം?" },
      options: [
        { k: "A", text: { en: "Extra-judicial killings", ml: "വ്യാജ ഏറ്റുമുട്ടലുകൾ" } },
        { k: "B", text: { en: "Helping poor", ml: "പാവങ്ങളെ സഹായിക്കൽ" } },
        { k: "C", text: { en: "Opening schools", ml: "സ്കൂളുകൾ തുറക്കൽ" } },
        { k: "D", text: { en: "Banning smoking", ml: "പുകവലി നിരോധിക്കൽ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "When the state bypasses the law to use force, it is a violation of peace.", ml: "ഭരണകൂടം നിയമം ലംഘിച്ച് അധികാരം ഉപയോഗിക്കുന്നത് തെറ്റാണ്." }
    },
    {
      q_id: "ps-p2c9-q24",
      type: "mcq",
      stem: { en: "Gandhi believed that the 'Means' are as important as the:", ml: "ലക്ഷ്യത്തോടൊപ്പം തന്നെ ഏതും പ്രധാനമാണെന്ന് ഗാന്ധിജി കരുതി?" },
      options: [
        { k: "A", text: { en: "Ends (Results)", ml: "ലക്ഷ്യം (ഫലം)" } },
        { k: "B", text: { en: "Money", ml: "പണം" } },
        { k: "C", text: { en: "Clothes", ml: "വസ്ത്രം" } },
        { k: "D", text: { en: "Speed", ml: "വേഗത" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Peaceful goals cannot be achieved through violent means.", ml: "നല്ല കാര്യങ്ങൾ നേടാൻ നല്ല വഴികൾ തന്നെ സ്വീകരിക്കണം." }
    },
    {
      q_id: "ps-p2c9-q25",
      type: "mcq",
      stem: { en: "A major achievement of the peace movement is:", ml: "സമാധാന പ്രസ്ഥാനങ്ങളുടെ ഒരു പ്രധാന നേട്ടം എന്താണ്?" },
      options: [
        { k: "A", text: { en: "Increase in nuclear tests", ml: "ആണവ പരീക്ഷണങ്ങൾ കൂട്ടിയത്" } },
        { k: "B", text: { en: "Raising awareness against war", ml: "യുദ്ധത്തിനെതിരെ ബോധവൽക്കരണം നടത്തിയത്" } },
        { k: "C", text: { en: "Making more tanks", ml: "കൂടുതൽ ടാങ്കുകൾ നിർമ്മിച്ചത്" } },
        { k: "D", text: { en: "Starting more fights", ml: "കൂടുതൽ വഴക്കുകൾ തുടങ്ങിയത്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "People are now more critical of state aggression.", ml: "യുദ്ധം ഒന്നിനും പരിഹാരമല്ലെന്ന ചിന്ത ജനങ്ങളിൽ വളർത്താൻ അവർക്ക് കഴിഞ്ഞു." }
    },
    {
      q_id: "ps-p2c9-q26",
      type: "mcq",
      stem: { en: "Which thinker said 'An eye for an eye will make the whole world blind'?", ml: "'കണ്ണിന് കണ്ണ് എന്ന രീതി ലോകത്തെ മുഴുവൻ അന്ധമാക്കും' എന്ന് പറഞ്ഞത് ആര്?" },
      options: [
        { k: "A", text: { en: "Mahatma Gandhi", ml: "മഹാത്മാ ഗാന്ധി" } },
        { k: "B", text: { en: "Nelson Mandela", ml: "നെൽസൺ മണ്ടേല" } },
        { k: "C", text: { en: "Martin Luther King Jr.", ml: "മാർട്ടിൻ ലൂതർ കിംഗ് ജൂനിയർ" } },
        { k: "D", text: { en: "Abraham Lincoln", ml: "എബ്രഹാം ലിങ്കൺ" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It is a famous quote against revenge and violence.", ml: "പകവീട്ടൽ ഒന്നിനും പരിഹാരമല്ലെന്ന് ഗാന്ധിജി ഓർമ്മിപ്പിച്ചു." }
    },
    {
      q_id: "ps-p2c9-q27",
      type: "mcq",
      stem: { en: "Is violence ever justified to stop Hitler?", ml: "ഹിറ്റ്‌ലറെ തടയാൻ അക്രമം ഉപയോഗിച്ചത് നീതീകരിക്കാനാവുമോ?" },
      options: [
        { k: "A", text: { en: "Some argue yes (Just War), others prefer non-violence", ml: "ചിലർ അതെ എന്ന് പറയുന്നു (നീതിപൂർവ്വമായ യുദ്ധം), മറ്റു ചിലർ അഹിംസ മതി എന്ന് പറയുന്നു" } },
        { k: "B", text: { en: "No one cares", ml: "ആരും ശ്രദ്ധിക്കുന്നില്ല" } },
        { k: "C", text: { en: "Hitler was a peaceful man", ml: "ഹിറ്റ്‌ലർ സമാധാനപ്രിയനായിരുന്നു" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "hard",
      explanation: { en: "This is a major ethical debate in political theory.", ml: "വലിയൊരു അക്രമം തടയാൻ ചെറിയ തോതിൽ ശക്തി ഉപയോഗിക്കാമോ എന്നത് ഒരു വലിയ തർക്കവിഷയമാണ്." }
    },
    {
      q_id: "ps-p2c9-q28",
      type: "mcq",
      stem: { en: "What is the role of international law in peace?", ml: "സമാധാനത്തിൽ അന്താരാഷ്ട്ര നിയമത്തിന്റെ പങ്ക് എന്ത്?" },
      options: [
        { k: "A", text: { en: "It regulates behavior between nations", ml: "രാജ്യങ്ങൾ തമ്മിലുള്ള ബന്ധങ്ങളെ അത് നിയന്ത്രിക്കുന്നു" } },
        { k: "B", text: { en: "It encourages war", ml: "അത് യുദ്ധത്തെ പ്രോത്സാഹിപ്പിക്കുന്നു" } },
        { k: "C", text: { en: "It has no power", ml: "അതിന് ശക്തിയില്ല" } },
        { k: "D", text: { en: "Only for poor countries", ml: "പാവപ്പെട്ട രാജ്യങ്ങൾക്ക് മാത്രം" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Laws help in avoiding direct conflicts.", ml: "രാജ്യങ്ങൾ പാലിക്കേണ്ട നിയമങ്ങൾ യുദ്ധം ഒഴിവാക്കാൻ സഹായിക്കുന്നു." }
    },
    {
      q_id: "ps-p2c9-q29",
      type: "mcq",
      stem: { en: "Competition for resources like 'Oil' can lead to:", ml: "എണ്ണ പോലുള്ള വിഭവങ്ങൾക്കായുള്ള മത്സരം ഏതിലേക്ക് നയിക്കാം?" },
      options: [
        { k: "A", text: { en: "Future conflicts", ml: "ഭാവിയിലെ തർക്കങ്ങൾ" } },
        { k: "B", text: { en: "More rain", ml: "കൂടുതൽ മഴ" } },
        { k: "C", text: { en: "Total peace", ml: "പൂർണ്ണമായ സമാധാനം" } },
        { k: "D", text: { en: "Happiness for all", ml: "എല്ലാവർക്കും സന്തോഷം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Scarcity of resources often triggers wars.", ml: "വിഭവങ്ങളുടെ കുറവ് രാജ്യങ്ങൾ തമ്മിലുള്ള യുദ്ധത്തിന് കാരണമാകാറുണ്ട്." }
    },
    {
      q_id: "ps-p2c9-q30",
      type: "mcq",
      stem: { en: "The culture of peace is built on:", ml: "സമാധാനത്തിന്റെ സംസ്കാരം എന്തിലാണ് പടുത്തുയർത്തുന്നത്?" },
      options: [
        { k: "A", text: { en: "Mutual respect and dialogue", ml: "പരസ്പര ബഹുമാനവും സംവാദവും" } },
        { k: "B", text: { en: "Military parade", ml: "സൈനിക പരേഡ്" } },
        { k: "C", text: { en: "Winning wars", ml: "യുദ്ധം ജയിക്കൽ" } },
        { k: "D", text: { en: "Ignoring others", ml: "മറ്റുള്ളവരെ അവഗണൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Respecting differences is key to harmony.", ml: "മറ്റുള്ളവരുടെ കാഴ്ചപ്പാടുകളെ ബഹുമാനിക്കുമ്പോൾ സമാധാനം ഉണ്ടാകുന്നു." }
    }
  ]
};

export const plusOnePoliticalSciencePart2Unit10: Lesson = {
  id: "pl-ps-11-p2-u10",
  title: { en: "Development", ml: "വികസനം (Development)" },
  estimated_time_mins: 150,
  videos: [
    {
      title: "Quick Revision",
      url: "https://www.youtube.com/watch?v=nE97p55SsJw",
      description: "You've got this! This quick revision is exam-oriented and designed to boost your confidence. Stay focused, believe in yourself, and you will master these concepts!"
    }
  ],
  learning_objectives: [
    { en: "Understand the broad meaning of development", ml: "വികസനം എന്ന വാക്കിന്റെ വിപുലമായ അർത്ഥം മനസ്സിലാക്കുക" },
    { en: "Identify the costs of the dominant model of development", ml: "പ്രധാന വികസന മാതൃകകളുടെ പ്രത്യാഘാതങ്ങൾ തിരിച്ചറിയുക" },
    { en: "Explain the concepts of Sustainable Development and HDI", ml: "സുസ്ഥിര വികസനം, HDI എന്നീ ആശയങ്ങൾ വിവരിക്കുക" },
    { en: "Analyze the importance of democratic participation in planning", ml: "ആസൂത്രണത്തിൽ ജനാധിപത്യ പങ്കാളിത്തത്തിന്റെ പ്രാധാന്യം വിശകലനം ചെയ്യുക" }
  ],
  content: {
    intro: { 
      en: "This chapter explores the concept of development, the various models used, and the emergence of human-centric and sustainable alternatives.", 
      ml: "വികസനം എന്ന ആശയം, വിവിധ വികസന മാതൃകകൾ, മനുഷ്യകേന്ദ്രീകൃതവും സുസ്ഥിരവുമായ ബദൽ മാർഗ്ഗങ്ങൾ എന്നിവയെക്കുറിച്ച് ഈ അധ്യായം പ്രതിപാദിക്കുന്നു." 
    },
    core: { 
      en: "A study of economic growth vs human development, social and environmental costs, and bottom-up planning.", 
      ml: "സാമ്പത്തിക വളർച്ച vs മാനവ വികസനം, സാമൂഹിക-പരിസ്ഥിതി പ്രത്യാഘാതങ്ങൾ, താഴെത്തട്ടിൽ നിന്നുള്ള ആസൂത്രണം എന്നിവയെക്കുറിച്ചുള്ള പഠനം." 
    },
    blocks: [
      { type: 'h2', en: '1. Overview', ml: '1. അവലോകനം (Overview)' },
      { type: 'p', en: 'This chapter explores the concept of development. It discusses the different meanings of development, the dominant models of development used in the 20th century, the human and environmental costs of these models, and the alternative conceptions of development like "sustainable development" and "human development".', ml: 'വികസനം (Development) എന്ന ആശയത്തെക്കുറിച്ചാണ് ഈ അധ്യായം ചർച്ച ചെയ്യുന്നത്. വികസനത്തിന്റെ വിവിധ അർത്ഥങ്ങൾ, ഇരുപതാം നൂറ്റാണ്ടിൽ നിലനിന്നിരുന്ന പ്രധാന വികസന മാതൃകകൾ, അവയുണ്ടാക്കിയ സാമൂഹിക-പരിസ്ഥിതി പ്രത്യാഘാതങ്ങൾ എന്നിവ ഇത് പരിശോധിക്കുന്നു. കൂടാതെ "സുസ്ഥിര വികസനം" (Sustainable development), "മാനവ വികസനം" (Human development) തുടങ്ങിയ പുതിയ വികസന കാഴ്ചപ്പാടുകളും ഇവിടെ വിവരിക്കുന്നു.' },

      { type: 'h2', en: '2. Key Concepts', ml: '2. പ്രധാന ആശയങ്ങൾ (Key Concepts)' },
      { type: 'h3', en: 'Important Terms', ml: 'പ്രധാന പദങ്ങൾ (Important Terms)' },
      { type: 'table', tableData: {
        headers: [{en: 'Term', ml: 'പദം (Term)'}, {en: 'Meaning', ml: 'അർത്ഥം (Meaning)'}, {en: 'Example / Context', ml: 'ഉദാഹരണം / സന്ദർഭം (Example / Context)'}],
        rows: [
          [{en: 'Development', ml: 'വികസനം (Development)'}, {en: 'A process of change aiming to improve the quality of life.', ml: 'ജീവിതനിലവാരം മെച്ചപ്പെടുത്താൻ ലക്ഷ്യമിട്ടുള്ള മാറ്റത്തിന്റെ പ്രക്രിയ.'}, {en: 'Building schools and hospitals.', ml: 'സ്കൂളുകളും ആശുപത്രികളും നിർമ്മിക്കൽ.'}],
          [{en: 'Sustainable Development', ml: 'സുസ്ഥിര വികസനം (Sustainable Development)'}, {en: 'Development meeting present needs without compromising future ones.', ml: 'ഭാവി തലമുറയുടെ ആവശ്യങ്ങളെ ഹനിക്കാതെ ഇന്നത്തെ ആവശ്യങ്ങൾ നിറവേറ്റുന്ന രീതി.'}, {en: 'Using solar energy.', ml: 'സൗരോർജ്ജം ഉപയോഗിക്കൽ.'}],
          [{en: 'Human Development Index (HDI)', ml: 'മാനവ വികസന സൂചിക (HDI)'}, {en: 'Tool to measure overall achievement in social and economic dimensions.', ml: 'സാമൂഹിക-സാമ്പത്തിക പുരോഗതി അളക്കാനുള്ള അളവുകോൽ.'}, {en: 'Based on health and education.', ml: 'ആരോഗ്യം, വിദ്യാഭ്യാസം എന്നിവയെ അടിസ്ഥാനമാക്കിയുള്ളത്.'}],
          [{en: 'Displacement', ml: 'കുടിയൊഴിപ്പിക്കൽ (Displacement)'}, {en: 'Forced movement of people due to development projects.', ml: 'വികസന പദ്ധതികൾക്കായി ആളുകളെ അവരുടെ സ്ഥലങ്ങളിൽ നിന്ന് മാറ്റുന്ന രീതി.'}, {en: 'Moving people for dam construction.', ml: 'അണക്കെട്ട് നിർമ്മാണത്തിനായി ആളുകളെ മാറ്റൽ.'}]
        ]
      }},

      { type: 'h2', en: '3. Detailed Notes', ml: '3. വിശദമായ കുറിപ്പുകൾ (Detailed Notes)' },
      { type: 'h3', en: '3.1 What is Development?', ml: '3.1 എന്താണ് വികസനം? (What is Development?)' },
      { type: 'ul', items: [
        { en: 'Commonly seen as "Economic Growth" (GDP increase).', ml: 'സാധാരണയായി സാമ്പത്തിക വളർച്ച (GDP വർദ്ധനവ്) എന്നാണ് വികസനത്തെ കണ്ടിരുന്നത്.' },
        { en: 'True development is about increasing choices and freedom of people.', ml: 'യഥാർത്ഥ വികസനം എന്നാൽ ജനങ്ങളുടെ അവസരങ്ങളും സ്വാതന്ത്ര്യവും വർദ്ധിപ്പിക്കലാണ്.' },
        { en: 'It must include social justice and environmental protection.', ml: 'സാമൂഹിക നീതിയും പരിസ്ഥിതി സംരക്ഷണവും ഇതിന്റെ ഭാഗമാകണം.' }
      ]},

      { type: 'h3', en: '3.2 The Dominant Model of Development', ml: '3.2 പ്രബലമായ വികസന മാതൃക' },
      { type: 'ul', items: [
        { en: 'In the 1950s-60s, development meant "Modernization" and copying the West.', ml: '1950-60 കാലഘട്ടത്തിൽ വികസനം എന്നാൽ "ആധുനികവൽക്കരണം" എന്നായിരുന്നു അർത്ഥം.' },
        { en: 'Focus on large dams, steel plants, and mining.', ml: 'വലിയ അണക്കെട്ടുകൾ, ഫാക്ടറികൾ, ഖനനം എന്നിവയിലായിരുന്നു ശ്രദ്ധ.' },
        { en: 'Goal was high growth rate and fast wealth creation.', ml: 'വേഗത്തിലുള്ള സാമ്പത്തിക വളർച്ചയും സമ്പത്ത് വർദ്ധിപ്പിക്കലുമാണ് ലക്ഷ്യമിട്ടത്.' }
      ]},

      { type: 'h3', en: '3.3 Costs of Development', ml: '3.3 വികസനത്തിന്റെ വില (Costs of Development)' },
      { type: 'h4', en: 'A. Social Costs (Displacement)', ml: 'A. സാമൂഹിക പ്രത്യാഘാതങ്ങൾ (കുടിയൊഴിപ്പിക്കൽ)' },
      { type: 'ul', items: [
        { en: 'Displacement of millions, especially tribals and the poor.', ml: 'ലക്ഷക്കണക്കിന് ആളുകളെ, പ്രത്യേകിച്ച് ആദിവാസികളെയും ദരിദ്രരെയും കുടിയൊഴിപ്പിക്കേണ്ടി വരുന്നു.' },
        { en: 'Loss of livelihood, culture, and community bonds.', ml: 'ഉപജീവന മാർഗ്ഗവും സംസ്കാരവും നഷ്ടപ്പെടാൻ ഇത് കാരണമാകുന്നു.' },
        { en: 'Example: Narmada Bachao Andolan against Sardar Sarovar dam.', ml: 'ഉദാഹരണം: സർദാർ സരോവർ അണക്കെട്ടിനെതിരെയുള്ള നർമ്മദ ബച്ചാവോ ആന്ദോളൻ.' }
      ]},
      { type: 'h4', en: 'B. Environmental Costs', ml: 'B. പരിസ്ഥിതി പ്രത്യാഘാതങ്ങൾ' },
      { type: 'ul', items: [
        { en: 'Global Warming, deforestation, and pollution.', ml: 'ആഗോള താപനം, വനനശീകരണം, മലിനീകരണം എന്നിവ വർദ്ധിക്കുന്നു.' },
        { en: 'Short-term profit leads to ecological imbalance.', ml: 'പെട്ടെന്നുള്ള ലാഭത്തിനായുള്ള ഓട്ടം പ്രകൃതിയുടെ സന്തുലിതാവസ്ഥ തകർക്കുന്നു.' }
      ]},

      { type: 'h3', en: '3.4 Alternative Conceptions of Development', ml: '3.4 വികസനത്തിന്റെ ബദൽ കാഴ്ചപ്പാടുകൾ' },
      { type: 'ul', items: [
        { en: 'Sustainable Development: Earth belongs to future generations too.', ml: 'സുസ്ഥിര വികസനം: ഭൂമി ഭാവി തലമുറകൾക്കും അവകാശപ്പെട്ടതാണെന്ന ചിന്ത.' },
        { en: 'Human Development: Measured by quality of life (health, literacy), not just money.', ml: 'മാനവ വികസനം: പണത്തിന് പകരം ജീവിതനിലവാരത്തിന് (ആരോഗ്യം, സാക്ഷരത) മുൻഗണന നൽകുന്നു.' },
        { en: 'Democratic Participation: Consult those affected by projects ("Bottom-up" planning).', ml: 'ജനാധിപത്യ പങ്കാളിത്തം: പദ്ധതികൾ ബാധിക്കുന്നവരുമായി ആലോചിക്കണം (താഴെത്തട്ടിലുള്ള ആസൂത്രണം).' }
      ]},

      { type: 'h3', en: '3.5 Development and Rights', ml: '3.5 വികസനവും അവകാശങ്ങളും' },
      { type: 'ul', items: [
        { en: 'Just development respects the Rights of the Displaced.', ml: 'നീതിപൂർവ്വമായ വികസനം കുടിയൊഴിപ്പിക്കപ്പെട്ടവരുടെ അവകാശങ്ങളെ മാനിക്കണം.' },
        { en: 'Proper rehabilitation must be guaranteed.', ml: 'അവർക്ക് കൃത്യമായ പുനരധിവാസം ഉറപ്പാക്കേണ്ടതുണ്ട്.' }
      ]},

      { type: 'h2', en: '4. Extractions & Highlights', ml: '4. സംഗ്രഹവും പ്രധാന ഭാഗങ്ങളും (Extractions & Highlights)' },
      { type: 'ul', items: [
        { en: 'Development is a multi-dimensional concept.', ml: 'വികസനം എന്നത് ബഹുമുഖമായ ഒരു ആശയമാണ്.' },
        { en: 'UNDP\'s Human Development Report is the global progress benchmark.', ml: 'യു.എൻ.ഡി.പി (UNDP) തയ്യാറാക്കുന്ന മാനവ വികസന റിപ്പോർട്ടാണ് ലോകത്തെ പുരോഗതിയുടെ അളവുകോൽ.' }
      ]},

      { type: 'h2', en: '5. Quick Revision', ml: '5. ദ്രുത പുനരവലോകനം (Quick Revision)' },
      { type: 'ul', items: [
        { en: 'Development should benefit everyone, not just a few.', ml: 'വികസനം കുറച്ചുപേർക്ക് മാത്രമല്ല, എല്ലാവർക്കും ഉപകാരപ്പെടണം.' },
        { en: 'HDI is a better measure of progress than just GDP.', ml: 'ജി.ഡി.പി (GDP) യേക്കാൾ നല്ല അളവുകോലാണ് എച്ച്.ഡി.ഐ (HDI).' },
        { en: 'Sustainable development ensures resources for future generations.', ml: 'ഭാവി തലമുറയ്ക്കും വിഭവങ്ങൾ ഉണ്ടെന്ന് സുസ്ഥിര വികസനം ഉറപ്പാക്കുന്നു.' }
      ]}
    ]
  },
  glossary: [
  {
    "term": {
      "en": "Development",
      "ml": "വികസനം (Development)"
    },
    "definition": {
      "en": "A process aimed at improving people's quality of life and progress beyond mere economic growth.",
      "ml": "കേവലം സാമ്പത്തിക വളർച്ചയ്ക്ക് അപ്പുറം ജനങ്ങളുടെ ജീവിതനിലവാരം മെച്ചപ്പെടുത്തുന്നതും പുരോഗതി ലക്ഷ്യമാക്കുന്നതുമായ ഒരു പ്രക്രിയ."
    }
  },
  {
    "term": {
      "en": "Human Development Index (HDI)",
      "ml": "ഹ്യൂമൻ ഡെവലപ്പ്മെന്റ് ഇൻഡക്സ് (HDI)"
    },
    "definition": {
      "en": "UNDP's system of measuring countries' development based on social indicators like literacy, education, and life expectancy.",
      "ml": "സാക്ഷരത, വിദ്യാഭ്യാസം, ആയുർദൈർഘ്യം തുടങ്ങിയ സാമൂഹിക സൂചകങ്ങളുടെ അടിസ്ഥാനത്തിൽ രാജ്യങ്ങളുടെ വികസനം അളക്കുന്ന UNDP യുടെ സംവിധാനം."
    }
  },
  {
    "term": {
      "en": "Environmentalism",
      "ml": "പരിസ്ഥിതിവാദം (Environmentalism)"
    },
    "definition": {
      "en": "A movement that questions industrial development methods that exploit natural resources and advocates for environmental protection.",
      "ml": "പ്രകൃതി വിഭവങ്ങളെ ചൂഷണം ചെയ്യുന്ന വ്യാവസായിക വികസന രീതികളെ ചോദ്യം ചെയ്യുകയും പരിസ്ഥിതി സംരക്ഷണത്തിനായി വാദിക്കുകയും ചെയ്യുന്ന പ്രസ്ഥാനം."
    }
  },
  {
    "term": {
      "en": "Ken Saro-Wiwa",
      "ml": "കെൻ സാരോ വിവ (Ken Saro-Wiwa)"
    },
    "definition": {
      "en": "A writer and activist who became a martyr fighting peacefully against oil companies that exploited indigenous people and the environment in Nigeria.",
      "ml": "നൈജീരിയയിലെ തദ്ദേശീയരെയും പരിസ്ഥിതിയെയും ചൂഷണം ചെയ്ത എണ്ണ കമ്പനികൾക്കെതിരെ സമാധാനപരമായ പോരാടി രക്തസാക്ഷിയായ എഴുത്തുകാരനും ആക്ടിവിസ്റ്റും."
    }
  }
],
  quiz: [
    {
      q_id: "ps-p2c10-q1",
      type: "mcq",
      stem: { en: "What was development commonly seen as in the middle of the 20th century?", ml: "ഇരുപതാം നൂറ്റാണ്ടിന്റെ പകുതിയോടെ വികസനത്തെ പ്രധാനമായും എങ്ങനെയാണ് കണ്ടിരുന്നത്?" },
      options: [
        { k: "A", text: { en: "Happiness of people", ml: "ജനങ്ങളുടെ സന്തോഷം" } },
        { k: "B", text: { en: "Economic Growth (increase in GDP)", ml: "സാമ്പത്തിക വളർച്ച (ജി.ഡി.പി വർദ്ധനവ്)" } },
        { k: "C", text: { en: "Clean environment", ml: "ശുദ്ധമായ പരിസ്ഥിതി" } },
        { k: "D", text: { en: "Small village farming", ml: "ചെറുകിട ഗ്രാമീണ കൃഷി" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Initially, progress was only measured in terms of money and production.", ml: "ആദ്യകാലങ്ങളിൽ വരുമാനത്തിന്റെ വർദ്ധനവിനെ മാത്രമാണ് പുരോഗതിയായി കണ്ടിരുന്നത്." }
    },
    {
      q_id: "ps-p2c10-q2",
      type: "mcq",
      stem: { en: "What does 'Sustainable Development' focus on?", ml: "'സുസ്ഥിര വികസനം' പ്രധാനമായും എന്തിനാണ് ഊന്നൽ നൽകുന്നത്?" },
      options: [
        { k: "A", text: { en: "Meeting present needs while saving for future", ml: "ഭാവിയിലേക്ക് കൂടി കരുതിവെച്ച് ഇന്നത്തെ ആവശ്യങ്ങൾ നിറവേറ്റൽ" } },
        { k: "B", text: { en: "Fastest possible economic growth", ml: "ഏറ്റവും വേഗത്തിലുള്ള സാമ്പത്തിക വളർച്ച" } },
        { k: "C", text: { en: "Destroying all forests", ml: "എല്ലാ വനങ്ങളും നശിപ്പിക്കൽ" } },
        { k: "D", text: { en: "Using only coal", ml: "കൽക്കരി മാത്രം ഉപയോഗിക്കൽ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Sustainability means long-term survival of the planet.", ml: "ഭാവി തലമുറയ്ക്കും വിഭവങ്ങൾ ബാക്കിവെച്ച് വികസനം നടത്തണം എന്നതാണ് ഇതിന്റെ കാതൽ." }
    },
    {
      q_id: "ps-p2c10-q3",
      type: "mcq",
      stem: { en: "Which organization prepares the Human Development Report (HDR)?", ml: "മാനവ വികസന റിപ്പോർട്ട് തയ്യാറാക്കുന്ന സംഘടന ഏത്?" },
      options: [
        { k: "A", text: { en: "World Bank", ml: "ലോക ബാങ്ക്" } },
        { k: "B", text: { en: "UNDP", ml: "യു.എൻ.ഡി.പി (UNDP)" } },
        { k: "C", text: { en: "WHO", ml: "ഡബ്ല്യു.എച്ച്.ഒ" } },
        { k: "D", text: { en: "IMF", ml: "ഐ.എം.എഫ്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "The United Nations Development Programme tracks global development.", ml: "ഐക്യരാഷ്ട്ര വികസന പദ്ധതിയാണ് മാനവ വികസന സൂചിക പ്രസിദ്ധീകരിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c10-q4",
      type: "mcq",
      stem: { en: "The 'Narmada Bachao Andolan' was a protest against:", ml: "നർമ്മദ ബച്ചാവോ ആന്ദോളൻ ഏതിനെതിരെയുള്ള പ്രതിഷേധമായിരുന്നു?" },
      options: [
        { k: "A", text: { en: "Building of large dams", ml: "വലിയ അണക്കെട്ടുകളുടെ നിർമ്മാണം" } },
        { k: "B", text: { en: "Lack of schools", ml: "സ്കൂളുകളുടെ അഭാവം" } },
        { k: "C", text: { en: "Increase in taxes", ml: "നികുതി വർദ്ധനവ്" } },
        { k: "D", text: { en: "Foreign toys", ml: "വിദേശ കളിപ്പാട്ടങ്ങൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It highlighted the social cost of displacement caused by dams.", ml: "അണക്കെട്ട് മൂലം ആളുകൾ കുടിയൊഴിപ്പിക്കപ്പെടുന്നതിനെതിരെയായിരുന്നു ഈ സമരം." }
    },
    {
      q_id: "ps-p2c10-q5",
      type: "mcq",
      stem: { en: "HDI measures development based on:", ml: "മാനവ വികസന സൂചിക വികസനത്തെ അളക്കുന്നത് എന്തിന്റെ അടിസ്ഥാനത്തിലാണ്?" },
      options: [
        { k: "A", text: { en: "Only Money", ml: "പണം മാത്രം" } },
        { k: "B", text: { en: "Health, Education and Income", ml: "ആരോഗ്യം, വിദ്യാഭ്യാസം, വരുമാനം" } },
        { k: "C", text: { en: "Military power", ml: "സൈനിക ശക്തി" } },
        { k: "D", text: { en: "Number of cars", ml: "കാറുകളുടെ എണ്ണം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "HDI uses multiple social and economic indicators.", ml: "ജീവിതത്തിന്റെ വിവിധ മേഖലകളിലെ പുരോഗതിയാണ് ഇതിൽ പരിശോധിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c10-q6",
      type: "mcq",
      stem: { en: "What is 'Displacement' in the context of development?", ml: "വികസനത്തിന്റെ കാര്യത്തിൽ 'കുടിയൊഴിപ്പിക്കൽ' എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Buying a new house voluntarily", ml: "സ്വയം പുതിയ വീട് വാങ്ങൽ" } },
        { k: "B", text: { en: "Forced movement from homes for projects", ml: "പദ്ധതികൾക്കായി നിർബന്ധപൂർവ്വം വീടുകളിൽ നിന്ന് മാറ്റുന്നത്" } },
        { k: "C", text: { en: "Traveling for a trip", ml: "യാത്ര പോകുന്ന അവസ്ഥ" } },
        { k: "D", text: { en: "Painting a house", ml: "വീടിന് ചായം പൂശൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Projects like dams and mines force local residents to move.", ml: "വികസനത്തിനായി ആളുകൾക്ക് അവരുടെ കിടപ്പാടം നഷ്ടപ്പെടുന്ന അവസ്ഥയാണിത്." }
    },
    {
      q_id: "ps-p2c10-q7",
      type: "mcq",
      stem: { en: "Which group is often most affected by development-related displacement?", ml: "വികസന പദ്ധതികൾ മൂലം കുടിയൊഴിപ്പിക്കപ്പെടുന്നത് പ്രധാനമായും ഏത് വിഭാഗത്തിൽപ്പെട്ടവരാണ്?" },
      options: [
        { k: "A", text: { en: "Tribals and poor people", ml: "ആദിവാസികളും ദരിദ്രരും" } },
        { k: "B", text: { en: "Rich businessmen", ml: "സമ്പന്നരായ വ്യവസായികൾ" } },
        { k: "C", text: { en: "City leaders", ml: "നഗരത്തിലെ നേതാക്കൾ" } },
        { k: "D", text: { en: "Foreign tourists", ml: "വിദേശ ടൂറിസ്റ്റുകൾ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Marginalized groups living in resource-rich areas face the brunt.", ml: "വനമേഖലകളിലും മറ്റും വസിക്കുന്ന പാവപ്പെട്ടവരാണ് ഇത്തരം പദ്ധതികൾക്ക് ഇരയാകുന്നത്." }
    },
    {
      q_id: "ps-p2c10-q8",
      type: "mcq",
      stem: { en: "Environmental costs of development include:", ml: "വികസനം പരിസ്ഥിതിക്കുണ്ടാക്കുന്ന ദോഷങ്ങളിൽ ഏത് ഉൾപ്പെടുന്നു?" },
      options: [
        { k: "A", text: { en: "Deforestation and Global Warming", ml: "വനനശീകരണവും ആഗോള താപനവും" } },
        { k: "B", text: { en: "More rain", ml: "കൂടുതൽ മഴ ലഭിക്കൽ" } },
        { k: "C", text: { en: "Lower temperatures", ml: "ചൂട് കുറയൽ" } },
        { k: "D", text: { en: "Fresh air everywhere", ml: "എല്ലായിടത്തും ശുദ്ധവായു" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Unplanned industrialization harms the planet's health.", ml: "പ്രകൃതിയെ പരിഗണിക്കാത്ത വികസനം ആവാസവ്യവസ്ഥയെ തകർക്കുന്നു." }
    },
    {
      q_id: "ps-p2c10-q9",
      type: "mcq",
      stem: { en: "The 'Bottom-up' planning approach means:", ml: "'താഴെത്തട്ടിൽ നിന്നുള്ള' ആസൂത്രണം എന്നാൽ:" },
      options: [
        { k: "A", text: { en: "Experts decide everything", ml: "വിദഗ്ധർ എല്ലാം തീരുമാനിക്കൽ" } },
        { k: "B", text: { en: "Affected people are consulted", ml: "പദ്ധതികൾ ബാധിക്കുന്ന ആളുകളോട് ചോദിച്ച് തീരുമാനിക്കൽ" } },
        { k: "C", text: { en: "Only Prime Minister decides", ml: "പ്രധാനമന്ത്രി മാത്രം തീരുമാനിക്കൽ" } },
        { k: "D", text: { en: "No planning is needed", ml: "ആസൂത്രണം ആവശ്യമില്ലാത്ത അവസ്ഥ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "It involves local participation in decision-making.", ml: "ജനപങ്കാളിത്തത്തോടെയുള്ള വികസനത്തെയാണ് ഇത് അർത്ഥമാക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c10-q10",
      type: "mcq",
      stem: { en: "The modernization model of the 1950s was mostly copied from:", ml: "1950-കളിൽ പിന്തുടർന്നിരുന്ന വികസന മാതൃക എവിടെ നിന്നാണ് പകർത്തിയത്?" },
      options: [
        { k: "A", text: { en: "Ancient villages", ml: "പുരാതന ഗ്രാമങ്ങളിൽ നിന്ന്" } },
        { k: "B", text: { en: "Western Industrialized countries", ml: "പാശ്ചാത്യ വ്യവസായ രാജ്യങ്ങളിൽ നിന്ന്" } },
        { k: "C", text: { en: "Outer space", ml: "ബഹിരാകാശത്ത് നിന്ന്" } },
        { k: "D", text: { en: "Tribal groups", ml: "ആദിവാസി ഗോത്രങ്ങളിൽ നിന്ന്" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Developing nations tried to replicate the high-consumption model of the West.", ml: "പാശ്ചാത്യ രാജ്യങ്ങളെ അനുകരിക്കാനാണ് അന്നത്തെ ഗവൺമെന്റുകൾ ശ്രമിച്ചത്." }
    },
    {
      q_id: "ps-p2c10-q11",
      type: "mcq",
      stem: { en: "Development is a 'multi-dimensional' concept. This means:", ml: "വികസനം ഒരു 'ബഹുമുഖ' ആശയമാണ് എന്ന് പറഞ്ഞാൽ അർത്ഥം:" },
      options: [
        { k: "A", text: { en: "It only matters for the rich", ml: "അത് സമ്പന്നർക്ക് മാത്രം പ്രധാനമാണ്" } },
        { k: "B", text: { en: "It involves social, political and environmental changes", ml: "അതിൽ സാമൂഹികവും രാഷ്ട്രീയവും പരിസ്ഥിതിപരവുമായ മാറ്റങ്ങൾ ഉൾപ്പെടുന്നു" } },
        { k: "C", text: { en: "It is a 3D movie", ml: "അതൊരു 3D സിനിമയാണ്" } },
        { k: "D", text: { en: "It has only one meaning", ml: "അതിന് ഒരൊറ്റ അർത്ഥമേയുള്ളൂ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Development affects every layer of human life and nature.", ml: "ജീവിതത്തിന്റെ പല വശങ്ങളെ വികസനം ബാധിക്കുന്നു എന്നതിനാലാണിത്." }
    },
    {
      q_id: "ps-p2c10-q12",
      type: "mcq",
      stem: { en: "The 'Trickle-down' theory often fails because:", ml: "'ട്രിക്ക്ൾ-ഡൗൺ' (Trickle-down) സിദ്ധാന്തം പലപ്പോഴും പരാജയപ്പെടുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "Wealth does not always reach the poorest sections", ml: "സമ്പത്ത് എപ്പോഴും പാവപ്പെട്ടവരിലേക്ക് എത്തുന്നില്ല" } },
        { k: "B", text: { en: "There is too much rain", ml: "കൂടുതൽ മഴ പെയ്യുന്നതുകൊണ്ട്" } },
        { k: "C", text: { en: "No one wants money", ml: "ആർക്കും പണം ആവശ്യമില്ലാത്തതുകൊണ്ട്" } },
        { k: "D", text: { en: "The poor are already rich", ml: "പാവപ്പെട്ടവർ പണ്ടേ സമ്പന്നരായതുകൊണ്ട്" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Increased national wealth often gets concentrated at the top.", ml: "മുകൾത്തട്ടിലുള്ളവർ കൂടുതൽ സമ്പന്നരാകുകയും ദരിദ്രർ പഴയപടി തുടരുകയും ചെയ്യാറുണ്ട്." }
    },
    {
      q_id: "ps-p2c10-q13",
      type: "mcq",
      stem: { en: "True development aims at increasing the people's:", ml: "യഥാർത്ഥ വികസനം ലക്ഷ്യമിടുന്നത് ജനങ്ങളുടെ എന്ത് വർദ്ധിപ്പിക്കാനാണ്?" },
      options: [
        { k: "A", text: { en: "Debt", ml: "കടം" } },
        { k: "B", text: { en: "Choices and Freedoms", ml: "അവസരങ്ങളും സ്വാതന്ത്ര്യവും" } },
        { k: "C", text: { en: "Fear", ml: "ഭയം" } },
        { k: "D", text: { en: "Work hours", ml: "ജോലി സമയം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Growth is useless if it doesn't improve personal liberty and capacity.", ml: "ജനങ്ങൾക്ക് മെച്ചപ്പെട്ട ജീവിതം തിരഞ്ഞെടുക്കാൻ കഴിയുന്നതിനെയാണ് വികസനം എന്ന് വിളിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c10-q14",
      type: "mcq",
      stem: { en: "Sustainable development sees humans as:", ml: "സുസ്ഥിര വികസനത്തിൽ മനുഷ്യർ പ്രകൃതിയുടെ ആരാണ്?" },
      options: [
        { k: "A", text: { en: "Owners who can destroy everything", ml: "എല്ലാം നശിപ്പിക്കാൻ അധികാരമുള്ള ഉടമകൾ" } },
        { k: "B", text: { en: "Trustees for future generations", ml: "ഭാവി തലമുറകൾക്ക് വേണ്ടി കാത്തുസൂക്ഷിക്കുന്നവർ" } },
        { k: "C", text: { en: "Enemies of earth", ml: "ഭൂമിയുടെ ശത്രുക്കൾ" } },
        { k: "D", text: { en: "Visitors from space", ml: "ബഹിരാകാശത്ത് നിന്നുള്ള അതിഥികൾ" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "We must use resources wisely to pass them on.", ml: "ഭൂമിയുടെ അവകാശികളല്ല, മറിച്ച് അത് സൂക്ഷിച്ച് വെക്കേണ്ടവരാണ് നാം." }
    },
    {
      q_id: "ps-p2c10-q15",
      type: "mcq",
      stem: { en: "What is an indicator of 'Human Development'?", ml: "മാനവ വികസനത്തിന്റെ ഒരു സൂചിക ഏതാണ്?" },
      options: [
        { k: "A", text: { en: "Literacy rate", ml: "സാക്ഷരതാ നിരക്ക്" } },
        { k: "B", text: { en: "Number of nuclear bombs", ml: "ആണവായുധങ്ങളുടെ എണ്ണം" } },
        { k: "C", text: { en: "Gold price", ml: "സ്വർണ്ണ വില" } },
        { k: "D", text: { en: "Height of buildings", ml: "കെട്ടിടങ്ങളുടെ ഉയരം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Education is a core component of human well-being.", ml: "വിദ്യാഭ്യാസത്തിന് മാനവ വികസനത്തിൽ വലിയ പ്രാധാന്യമുണ്ട്." }
    },
    {
      q_id: "ps-p2c10-q16",
      type: "mcq",
      stem: { en: "The 'Top-down' approach to development is criticized because:", ml: "'മുകളിൽ നിന്നുള്ള' ആസൂത്രണം വിമർശിക്കപ്പെടുന്നത് എന്തുകൊണ്ട്?" },
      options: [
        { k: "A", text: { en: "It ignores local needs and opinions", ml: "അത് പ്രാദേശിക ആവശ്യങ്ങളെയും അഭിപ്രായങ്ങളെയും അവഗണിക്കുന്നു" } },
        { k: "B", text: { en: "It is too fast", ml: "അത് വളരെ വേഗതയുള്ളതുകൊണ്ട്" } },
        { k: "C", text: { en: "It gives too much money to poor", ml: "അത് പാവങ്ങൾക്ക് ഒരുപാട് പണം നൽകുന്നു" } },
        { k: "D", text: { en: "It is done in forests only", ml: "അത് വനങ്ങളിൽ മാത്രം ചെയ്യുന്നു" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "Decisions made by distant experts often fail on the ground.", ml: "ജനങ്ങളുടെ പങ്കാളിത്തമില്ലാത്ത പ്ലാനുകൾ പരാജയപ്പെടാൻ സാധ്യത കൂടുതലാണ്." }
    },
    {
      q_id: "ps-p2c10-q17",
      type: "mcq",
      stem: { en: "Environmentalists argue that we are using resources:", ml: "പരിസ്ഥിതി പ്രവർത്തകർ പറയുന്നത് നാം വിഭവങ്ങൾ എങ്ങനെ ഉപയോഗിക്കുന്നു എന്നാണ്?" },
      options: [
        { k: "A", text: { en: "Too slowly", ml: "വളരെ സാവധാനം" } },
        { k: "B", text: { en: "Faster than nature can replenish them", ml: "പ്രകൃതിക്ക് വീണ്ടെടുക്കാൻ കഴിയുന്നതിനേക്കാൾ വേഗത്തിൽ" } },
        { k: "C", text: { en: "Only at night", ml: "രാത്രിയിൽ മാത്രം" } },
        { k: "D", text: { en: "With too much care", ml: "വളരെ ശ്രദ്ധയോടെ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Over-consumption leads to ecological bankruptcy.", ml: "പ്രകൃതിയുടെ കരുതലുകളേക്കാൾ കൂടുതൽ ഉപയോഗിക്കുന്നത് വിനാശകരമാണ്." }
    },
    {
      q_id: "ps-p2c10-q18",
      type: "mcq",
      stem: { en: "A just model of development must ensure the rehabilitation of:", ml: "നീതിപൂർവ്വമായ വികസന മാതൃക ആരുടെ പുനരധിവാസം ഉറപ്പാക്കണം?" },
      options: [
        { k: "A", text: { en: "Displaced persons", ml: "കുടിയൊഴിപ്പിക്കപ്പെട്ടവരുടെ" } },
        { k: "B", text: { en: "Only project managers", ml: "പ്രോജക്റ്റ് മാനേജർമാരുടെ മാത്രം" } },
        { k: "C", text: { en: "Foreign investors", ml: "വിദേശ നിക്ഷേപകരുടെ" } },
        { k: "D", text: { en: "Robots", ml: "യന്ത്രമനുഷ്യരുടെ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Victims of development projects deserve a new start and fair treatment.", ml: "സ്ഥലം നഷ്ടപ്പെട്ടവർക്ക് പുതിയ ജീവിതം ഉറപ്പാക്കേണ്ടത് സ്റ്റേറ്റിന്റെ കടമയാണ്." }
    },
    {
      q_id: "ps-p2c10-q19",
      type: "mcq",
      stem: { en: "GDP stands for:", ml: "ജി.ഡി.പി (GDP) എന്നാൽ എന്ത്?" },
      options: [
        { k: "A", text: { en: "Gross Domestic Product", ml: "ഗ്രോസ് ഡൊമസ്റ്റിക് പ്രോഡക്റ്റ്" } },
        { k: "B", text: { en: "General Development Plan", ml: "ജനറൽ ഡെവലപ്‌മെന്റ് പ്ലാൻ" } },
        { k: "C", text: { en: "Government Duty Paper", ml: "ഗവൺമെന്റ് ഡ്യൂട്ടി പേപ്പർ" } },
        { k: "D", text: { en: "Gold Distribution Price", ml: "ഗോൾഡ് ഡിസ്ട്രിബ്യൂഷൻ പ്രൈസ്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It is the measure of economic output of a nation.", ml: "ഒരു രാജ്യത്തെ ആകെ ഉൽപ്പാദനത്തിന്റെ മൂല്യത്തെയാണ് ഇങ്ങനെ വിളിക്കുന്നത്." }
    },
    {
      q_id: "ps-p2c10-q20",
      type: "mcq",
      stem: { en: "The 'Human cost' of development projects is often:", ml: "വികസന പദ്ധതികളുടെ 'മാനുഷിക വില' (Human cost) പലപ്പോഴും:" },
      options: [
        { k: "A", text: { en: "Zero", ml: "ശൂന്യമാണ്" } },
        { k: "B", text: { en: "Hidden and ignored", ml: "മറയ്ക്കപ്പെട്ടതും അവഗണിക്കപ്പെട്ടതുമാണ്" } },
        { k: "C", text: { en: "Paid in gold", ml: "സ്വർണ്ണത്തിൽ നൽകുന്നു" } },
        { k: "D", text: { en: "Always beneficial", ml: "എപ്പോഴും ഗുണകരമാണ്" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "Loss of home and community is often not calculated in project budgets.", ml: "ആളുകളുടെ സങ്കടവും നഷ്ടങ്ങളും പലപ്പോഴും കണക്കിലെടുക്കാറില്ല." }
    },
    {
      q_id: "ps-p2c10-q21",
      type: "mcq",
      stem: { en: "Which energy source is more sustainable?", ml: "കൂടുതൽ സുസ്ഥിരമായ ഊർജ്ജ സ്രോതസ്സ് ഏത്?" },
      options: [
        { k: "A", text: { en: "Coal", ml: "കൽക്കരി" } },
        { k: "B", text: { en: "Solar energy", ml: "സൗരോർജ്ജം" } },
        { k: "C", text: { en: "Petrol", ml: "പെട്രോൾ" } },
        { k: "D", text: { en: "Diesel", ml: "ഡീസൽ" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "Solar energy is renewable and does not pollute much.", ml: "സൗരോർജ്ജം പ്രകൃതിക്ക് ദോഷമില്ലാത്തതും ഒരിക്കലും തീരാത്തതുമാണ്." }
    },
    {
      q_id: "ps-p2c10-q22",
      type: "mcq",
      stem: { en: "Democratic participation means people should have a right to be:", ml: "ജനാധിപത്യ പങ്കാളിത്തം എന്നാൽ ജനങ്ങൾക്ക് എന്തിനുള്ള അവകാശം ഉണ്ടായിരിക്കണം എന്നാണ്?" },
      options: [
        { k: "A", text: { en: "Consulted on projects", ml: "പദ്ധതികളെക്കുറിച്ച് ആലോചിക്കപ്പെടാൻ" } },
        { k: "B", text: { en: "Arrested", ml: "അറസ്റ്റ് ചെയ്യപ്പെടാൻ" } },
        { k: "C", text: { en: "Ignored", ml: "അവഗണിക്കപ്പെടാൻ" } },
        { k: "D", text: { en: "Only voters once in 5 years", ml: "5 വർഷത്തിലൊരിക്കൽ വോട്ട് ചെയ്യാൻ മാത്രം" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "People affected by a project must have a voice in its planning.", ml: "തങ്ങളെ ബാധിക്കുന്ന കാര്യങ്ങളിൽ തീരുമാനം പറയാൻ ജനങ്ങൾക്ക് അവകാശമുണ്ട്." }
    },
    {
      q_id: "ps-p2c10-q23",
      type: "mcq",
      stem: { en: "The 'Right to a dignified life' implies access to:", ml: "'മാന്യമായ ജീവിതത്തിനുള്ള അവകാശം' എന്നാൽ എന്തിനുള്ള അവസരമാണ്?" },
      options: [
        { k: "A", text: { en: "Education and Healthcare", ml: "വിദ്യാഭ്യാസവും ആരോഗ്യ പരിരക്ഷയും" } },
        { k: "B", text: { en: "Only one movie a year", ml: "വർഷത്തിൽ ഒരു സിനിമ മാത്രം" } },
        { k: "C", text: { en: "Buying a lottery", ml: "ലോട്ടറി വാങ്ങൽ" } },
        { k: "D", text: { en: "None of these", ml: "ഇതൊന്നുമല്ല" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Basic services are essential for human dignity.", ml: "അടിസ്ഥാന സൗകര്യങ്ങൾ ലഭിക്കുമ്പോഴാണ് ജീവിതം മാന്യമാകുന്നത്." }
    },
    {
      q_id: "ps-p2c10-q24",
      type: "mcq",
      stem: { en: "Climate change is a result of:", ml: "കാലാവസ്ഥാ വ്യതിയാനം ഏതിന്റെ ഫലമാണ്?" },
      options: [
        { k: "A", text: { en: "Too much development with high carbon emissions", ml: "കൂടുതൽ കാർബൺ പുറത്തുവിടുന്ന രീതിയിലുള്ള വികസനം" } },
        { k: "B", text: { en: "Planting trees", ml: "മരങ്ങൾ നടുന്നത് കൊണ്ട്" } },
        { k: "C", text: { en: "Studying hard", ml: "പഠിക്കുന്നത് കൊണ്ട്" } },
        { k: "D", text: { en: "Watching stars", ml: "നക്ഷത്രങ്ങളെ നോക്കുന്നത് കൊണ്ട്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Polluting development models have warmed the planet.", ml: "പരിസ്ഥിതിയെ പരിഗണിക്കാത്ത വികസനമാണ് കാലാവസ്ഥ മാറ്റിയത്." }
    },
    {
      q_id: "ps-p2c10-q25",
      type: "mcq",
      stem: { en: "Is development always a 'blessing' for everyone?", ml: "വികസനം എപ്പോഴും എല്ലാവർക്കും ഒരു 'അനുഗ്രഹം' ആണോ?" },
      options: [
        { k: "A", text: { en: "Yes, always", ml: "അതെ, എപ്പോഴും" } },
        { k: "B", text: { en: "No, it can be destruction for some", ml: "അല്ല, അത് ചിലർക്ക് വിനാശകരമാകാം" } },
        { k: "C", text: { en: "Only for children", ml: "കുട്ടികൾക്ക് മാത്രം" } },
        { k: "D", text: { en: "Only in cities", ml: "നഗരങ്ങളിൽ മാത്രം" } }
      ],
      answer: "B",
      difficulty: "medium",
      explanation: { en: "One person's dam is another person's drowned home.", ml: "ചിലർക്ക് ലാഭമുണ്ടാകുമ്പോൾ മറ്റുള്ളവർക്ക് അവരുടെ കിടപ്പാടം നഷ്ടമായേക്കാം." }
    },
    {
      q_id: "ps-p2c10-q26",
      type: "mcq",
      stem: { en: "Social justice in development ensures:", ml: "വികസനത്തിലെ സാമൂഹിക നീതി ഉറപ്പാക്കുന്നത് എന്ത്?" },
      options: [
        { k: "A", text: { en: "Fair distribution of benefits", ml: "ഗുണഫലങ്ങളുടെ നീതിയുക്തമായ വിതരണം" } },
        { k: "B", text: { en: "Only leaders get rich", ml: "നേതാക്കൾ മാത്രം പണക്കാരാകുന്നത്" } },
        { k: "C", text: { en: "Poor stay poor", ml: "പാവപ്പെട്ടവർ പാവപ്പെട്ടവരായി തുടരുന്നത്" } },
        { k: "D", text: { en: "No schools are built", ml: "സ്കൂളുകൾ പണിയാതിരിക്കുന്നത്" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "Progress should reach the marginalized sections too.", ml: "വികസനത്തിന്റെ ഗുണങ്ങൾ സമൂഹത്തിലെ എല്ലാവരിലും എത്തണം." }
    },
    {
      q_id: "ps-p2c10-q27",
      type: "mcq",
      stem: { en: "A 'Bottom-up' approach encourages:", ml: "ഒരു 'ബോട്ടം-അപ്പ്' (Bottom-up) രീതി പ്രോത്സാഹിപ്പിക്കുന്നത്:" },
      options: [
        { k: "A", text: { en: "Centralized planning", ml: "കേന്ദ്രീകൃത ആസൂത്രണം" } },
        { k: "B", text: { en: "Decentralized planning", ml: "വികേന്ദ്രീകൃത ആസൂത്രണം" } },
        { k: "C", text: { en: "Military planning", ml: "സൈനിക ആസൂത്രണം" } },
        { k: "D", text: { en: "No planning", ml: "ആസൂത്രണമില്ലായ്മ" } }
      ],
      answer: "B",
      difficulty: "hard",
      explanation: { en: "It moves power from high officials to local communities.", ml: "അധികാരം ജനങ്ങളിലേക്ക് എത്തിക്കുന്ന രീതിയാണിത്." }
    },
    {
      q_id: "ps-p2c10-q28",
      type: "mcq",
      stem: { en: "Life expectancy is a measure of:", ml: "ആയുർദൈർഘ്യം (Life expectancy) ഏതിന്റെ അളവുകോലാണ്?" },
      options: [
        { k: "A", text: { en: "Economic Growth", ml: "സാമ്പത്തിക വളർച്ച" } },
        { k: "B", text: { en: "Human Development", ml: "മാനവ വികസനം" } },
        { k: "C", text: { en: "Taxes", ml: "നികുതി" } },
        { k: "D", text: { en: "Money in bank", ml: "ബാങ്കിലെ പണം" } }
      ],
      answer: "B",
      difficulty: "easy",
      explanation: { en: "It reflects the quality of healthcare and nutrition.", ml: "ആരോഗ്യരംഗത്തെ പുരോഗതിയാണ് ഇതിലൂടെ വ്യക്തമാകുന്നത്." }
    },
    {
      q_id: "ps-p2c10-q29",
      type: "mcq",
      stem: { en: "Copying the Western model blindy is called:", ml: "പാശ്ചാത്യ മാതൃക അന്ധമായി അനുകരിക്കുന്നത് അറിയപ്പെടുന്നത്:" },
      options: [
        { k: "A", text: { en: "Modernization", ml: "ആധുനികവൽക്കരണം (Modernization)" } },
        { k: "B", text: { en: "Sustainable path", ml: "സുസ്ഥിര പാത" } },
        { k: "C", text: { en: "Traditional path", ml: "പഴയ രീതി" } },
        { k: "D", text: { en: "Bottom-up approach", ml: "ബോട്ടം-അപ്പ് രീതി" } }
      ],
      answer: "A",
      difficulty: "medium",
      explanation: { en: "It assumed that all nations must follow the same path as the West.", ml: "എല്ലാ രാജ്യങ്ങളും പാശ്ചാത്യരെപ്പോലെയാകണം എന്നതായിരുന്നു ഈ ചിന്ത." }
    },
    {
      q_id: "ps-p2c10-q30",
      type: "mcq",
      stem: { en: "Sustainable development ensures that future generations have:", ml: "സുസ്ഥിര വികസനം ഭാവി തലമുറയ്ക്ക് എന്തുണ്ടെന്ന് ഉറപ്പാക്കുന്നു?" },
      options: [
        { k: "A", text: { en: "The same resources and planet", ml: "അതേ വിഭവങ്ങളും ഭൂമിയും" } },
        { k: "B", text: { en: "Only debt", ml: "കടം മാത്രം" } },
        { k: "C", text: { en: "A destroyed earth", ml: "നശിച്ച ഒരു ഭൂമി" } },
        { k: "D", text: { en: "No air", ml: "വായുവില്ലാത്ത അവസ്ഥ" } }
      ],
      answer: "A",
      difficulty: "easy",
      explanation: { en: "It preserves the environment for those who come after us.", ml: "വരും തലമുറയ്ക്കും ജീവിക്കാൻ ഉതകുന്ന ഭൂമി നിലനിർത്തലാണിവിടെ ലക്ഷ്യം." }
    }
  ]
};
