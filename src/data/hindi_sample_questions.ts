export interface HindiSampleQuestion {
  question_number: number;
  marks?: number;
  question_hindi: string;
  answer_hindi: string;
  question_english: string;
  answer_english: string;
  question_malayalam?: string;
  answer_malayalam?: string;
}

export interface HindiSampleQuestionSet {
  id: string;
  title: {
    en: string;
    ml: string;
    ar: string;
  };
  questions: HindiSampleQuestion[];
}

const set1: HindiSampleQuestion[] = [
  {
    "question_number": 1,
    "marks": 1,
    "question_hindi": "**सूचना:** 'खिड़की' लघुकथा का यह अंश पढ़ें और 1 से 3 तक के प्रश्नों के उत्तर लिखें।\n\n**अनुच्छेद:** मैंने पत्नी को इशारा किया, तो उसने आँखें तरेरकर मुझे चुप रहने का संकेत दिया । “अच्छा पाँच पीस लूँ तो कितने को दोगी?” \"दो सौ रुपए पर पीस ले लेना दीदी!” \"न ! सौ रुपए पर पीस!” “दीदी! सौ तो बहुत कम है।\" - कहते हुए उसका गला रुँध गया और उसकी कजरारी आँखें भर आई।\n\n**प्रश्न 1:** सही विकल्प चुनकर लिखें ।\n- (क) वह + के = उसका\n- (ख) वह + की = उसका\n- (ग) वह + का = उसका\n- (घ) वह + को = उसका",
    "question_english": "**Instruction:** Read this excerpt from the short story 'Khidki' and answer questions 1 to 3.\n\n**Passage:** I gestured to my wife, but she glared at me, signaling me to stay quiet. \"Okay, if I take five pieces, how much will you give them for?\" \"Take them for two hundred rupees per piece, sister!\" \"No! One hundred rupees per piece!\" \"Sister! A hundred is too little.\" - saying this, her voice choked and her dark eyes welled up with tears.\n\n**Question 1:** Choose the correct option.\n- (a) vah + ke = uska\n- (b) vah + ki = uska\n- (c) vah + ka = uska\n- (d) vah + ko = uska",
    "answer_hindi": "**(ग) वह + का = उसका**",
    "answer_english": "**(c) vah + ka = uska**",
    "question_malayalam": "**സൂചന:** 'ഖിഡ്കി' (ജനൽ) എന്ന ചെറുകഥയിലെ ഈ ഭാഗം വായിച്ച് 1 മുതൽ 3 വരെയുള്ള ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** ഞാൻ ഭാര്യയെ ഒന്ന് ആംഗ്യം കാണിച്ചു, അവൾ കണ്ണുരുട്ടി എന്നോട് മിണ്ടാതിരിക്കാൻ ആംഗ്യം കാണിച്ചു. “ശരി, അഞ്ച് എണ്ണം എടുക്കുകയാണെങ്കിൽ എത്ര രൂപയ്ക്ക് തരും?” “ഓരോന്നിനും ഇരുനൂറ് രൂപ നിരക്കിൽ എടുത്തോളൂ ചേച്ചീ!” “ഇല്ല! ഒന്നിന് നൂറ് രൂപ!” “ചേച്ചീ! നൂറ് എന്നത് വളരെ കുറവാണ്!” – ഇത് പറയുമ്പോൾ അവളുടെ തൊണ്ട ഇടറുകയും ആ മനോഹരമായ കണ്ണുകൾ നിറയുകയും ചെയ്തു.\n\n**ചോദ്യം 1:** ശരിയായ ഓപ്ഷൻ തിരഞ്ഞെടുത്ത് എഴുതുക.\n- (ക) വഹ് + കെ = ഉസ്ക\n- (ഖ) വഹ് കി = ഉസ്ക\n- (ഗ) വഹ് + കാ = ഉസ്ക\n- (ഘ) വഹ് + കോ = ഉസ്ക",
    "answer_malayalam": "**(ഗ) വഹ് + കാ = ഉസ്ക**"
  },
  {
    "question_number": 2,
    "marks": 2,
    "question_hindi": "**अनुच्छेद:** मैंने पत्नी को इशारा किया... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 2:** युवती की आँखें भर आई। क्यों?",
    "question_english": "**Passage:** I gestured to my wife... [Passage provided above]\n\n**Question 2:** The young woman's eyes welled up with tears. Why?",
    "answer_hindi": "युवती की आँखें भर आईं क्योंकि:\n\n- वह बहुत गरीब थी और शॉल बेचकर अपनी आजीविका कमाने के लिए कड़ा संघर्ष कर रही थी।\n- जब लेखिका की पत्नी ने शॉल के दाम बहुत कम (केवल सौ रुपये) लगाए, तो उसे अपनी मेहनत का उचित फल न मिलने का एहसास हुआ।\n- अपनी इसी लाचारी और बेबसी के कारण वह भावुक हो गई।",
    "answer_english": "The young woman's eyes welled up with tears because:\n\n- She was very poor and struggling hard to earn her livelihood by selling shawls.\n- When the author's wife bargained ruthlessly and offered a very low price (only one hundred rupees), the woman realized she wouldn't get a fair price for her hard work.\n- This deep feeling of helplessness and desperation made her emotional.",
    "question_malayalam": "**അനുച്ഛേദം:** ഞാൻ ഭാര്യയെ ഒന്ന് ആംഗ്യം കാണിച്ചു... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 2:** യുവതിയുടെ കണ്ണുകൾ നിറഞ്ഞു. എന്തുകൊണ്ട്?",
    "answer_malayalam": "യുവതിയുടെ കണ്ണുകൾ നിറയാൻ കാരണം:\n\n- അവൾ വളരെ ദരിദ്രയായിരുന്നു, ഷാളുകൾ വിറ്റ് ജീവിതം മുന്നോട്ട് കൊണ്ടുപോകാൻ അവൾ കഠിനമായി പരിശ്രമിക്കുകയായിരുന്നു.\n- എഴുത്തുകാരന്റെ ഭാര്യ വളരെ കുറഞ്ഞ വില (നൂറ് രൂപ മാത്രം) പറഞ്ഞപ്പോൾ, തന്റെ അധ്വാനത്തിന് അർഹമായ പ്രതിഫലം ലഭിക്കില്ലെന്ന് അവൾ തിരിച്ചറിഞ്ഞു.\n- തന്റെ നിസ്സഹായാവസ്ഥയും ഗതികേടും കാരണം അവൾ വികാരാധീനയാവുകയായിരുന്നു."
  },
  {
    "question_number": 3,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** मैंने पत्नी को इशारा किया... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 3:** लघुकथा के इस प्रसंग पर पटकथा का एक दृश्य लिखें ।",
    "question_english": "**Passage:** I gestured to my wife... [Passage provided above]\n\n**Question 3:** Write a screenplay scene based on this context of the short story.",
    "answer_hindi": "**दृश्य विवरण:**\n- **स्थान:** सड़क के किनारे की एक जगह।\n- **समय:** दिन का समय।\n- **पात्र:** लेखक, उसकी पत्नी, और एक साँवली-सलोनी शॉल बेचने वाली युवती।\n\n*(युवती कंधे पर शॉलों का भारी गट्ठर लिए आती है और गाड़ी के पास खड़ी पत्नी से बात करती है।)*\n\n**युवती** (उम्मीद भरी नज़रों से): दीदी जम्मू की शॉल ले लो! बहुत बढ़िया है!\n\n**पत्नी** (शॉल देखते हुए कड़क आवाज़ में): कितने की है?\n\n**युवती**: अढ़ाई सौ की!\n\n**पत्नी** (हैरानी और व्यंग्य से): इत्ती महँगी!\n\n**युवती** (मिन्नत करते हुए): ज़्यादा पीस लोगी, तो कम कर दूँगी।\n\n**पत्नी** (कठोरता से): मुझे दुकान खोलनी है क्या? अच्छा पाँच पीस लूँ तो कितने को दोगी?\n\n**युवती**: दो सौ रुपए पर पीस ले लेना दीदी!\n\n**पत्नी**: न! सौ रुपए पर पीस!\n\n*(लेखक पत्नी को चुप रहने का इशारा करता है, पर पत्नी उसे आँखें तरेर कर चुप करा देती है।)*\n\n**युवती** (रुँधे हुए गले और डबडबाई आँखों से): दीदी! सौ तो बहुत कम है...",
    "answer_english": "**Scene Details:**\n- **Location:** A roadside area.\n- **Time:** Daytime.\n- **Characters:** Author, his wife, and a dark, beautiful shawl-selling young woman.\n\n*(The young woman approaches carrying a heavy bundle of shawls on her shoulders and talks to the wife standing near the car.)*\n\n**Young Woman** (with hopeful eyes): Sister, buy a Jammu shawl! It's very nice!\n\n**Wife** (inspecting the shawl, in a strict voice): How much is it for?\n\n**Young Woman**: Two hundred and fifty!\n\n**Wife** (with surprise and sarcasm): So expensive!\n\n**Young Woman** (pleading): If you buy more pieces, I will reduce the price.\n\n**Wife** (harshly): Do I have to open a shop? Okay, if I take five pieces, how much will you give them for?\n\n**Young Woman**: Take them for two hundred rupees a piece, sister!\n\n**Wife**: No! One hundred rupees a piece!\n\n*(The author gestures to his wife to stop, but she glares at him, silencing him.)*\n\n**Young Woman** (with a choked voice and teary eyes): Sister! A hundred is too little...",
    "question_malayalam": "**അനുച്ഛേദം:** ഞാൻ ഭാര്യയെ ഒന്ന് ആംഗ്യം കാണിച്ചു... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 3:** ചെറുകഥയിലെ ഈ സന്ദർഭത്തെ ആസ്പദമാക്കി ഒരു തിരക്കഥാ രംഗം തയ്യാറാക്കുക.",
    "answer_malayalam": "**രംഗ വിവരണം:**\n- **സ്ഥലം:** റോഡരികിലെ ഒരിടം.\n- **സമയം:** പകൽ സമയം.\n- **കഥാപാത്രങ്ങൾ:** എഴുത്തുകാരൻ, ഭാര്യ, ഷാൾ വിൽക്കുന്ന യുവതി.\n\n*(യുവതി തോളിൽ ഷാൾക്കെട്ടുമായി വരുന്നു, കാറിനടുത്ത് നിൽക്കുന്ന ഭാര്യയോട് സംസാരിക്കുന്നു.)*\n\n**യുവതി:** ചേച്ചീ, ജമ്മുവിലെ ഷാൾ എടുത്തോളൂ, നല്ലതാണ്.\n\n**ഭാര്യ:** എത്രയാണ് വില?\n\n**യുവതി:** ഇരുനൂറ്റമ്പത് രൂപ.\n\n**ഭാര്യ:** ഇത്ര വിലയോ!\n\n**യുവതി:** കൂടുതൽ എണ്ണം എടുക്കുകയാണെങ്കിൽ കുറച്ചുതരാം.\n\n**ഭാര്യ:** എനിക്ക് കട തുടങ്ങാനൊന്നുമല്ല. അഞ്ചെണ്ണം എടുക്കുകയാണെങ്കിൽ എത്രയാകും?\n\n**യുവതി:** ഒന്നിന് ഇരുനൂറ് രൂപ നിരക്കിൽ തരാം.\n\n**ഭാര്യ:** ഇല്ല, ഒന്നിന് നൂറ് രൂപ!\n\n*(എഴുത്തുകാരൻ തടയാൻ ശ്രമിക്കുന്നുണ്ടെങ്കിലും ഭാര്യ അവനെ വിലക്കുന്നു.)*\n\n**യുവതി (നിറഞ്ഞ കണ്ണുകളോടെ):** ചേച്ചീ, നൂറ് രൂപ എന്നത് വളരെ കുറവാണ്..."
  },
  {
    "question_number": 4,
    "marks": 2,
    "question_hindi": "**सूचना:** 'व्हाइट कैप' कहानी का यह अंश पढ़ें, प्रश्न 4 और 5 के उत्तर लिखें।\n\n**अनुच्छेद:** कोई भी team उसे अपनी तरफ़ खिलाने को तैयार नहीं होती थी। कई बार केशव ने अपने माता-पिता से उसके लिए भी बल्ला और बॉल खरीद देने का आग्रह किया था। मगर माता-पिता ने उसे डपट दिया था। \"जब तू अच्छे नंबर से पाँचवीं पास कर लेगा तो एक बॉल खरीद ही देंगे!”\n\n**प्रश्न 4:** केशव को कोई भी टीम अपनी तरफ़ खिलाने को तैयार नहीं थी। क्यों?",
    "question_english": "**Instruction:** Read this excerpt from the story 'White Cap' and answer questions 4 and 5.\n\n**Passage:** No team was ready to let him play on their side. Many times Keshav had urged his parents to buy a bat and ball for him too. But his parents had scolded him. \"When you pass the fifth grade with good marks, we will buy you a ball!\"\n\n**Question 4:** No team was ready to let Keshav play on their side. Why?",
    "answer_hindi": "केशव को कोई भी टीम अपनी तरफ़ खिलाने को तैयार नहीं थी, इसके मुख्य कारण निम्नलिखित थे:\n\n1. **खेल सामग्री का अभाव:** उसके पास अपना खुद का बल्ला (बैट) और गेंद (बॉल) नहीं था। गली क्रिकेट में अक्सर उन्हीं बच्चों को टीम में जल्दी लिया जाता है जो अपना खेल का सामान खुद लाते हैं।\n2. **शारीरिक कमज़ोरी:** इसके अलावा, वह शारीरिक रूप से अन्य बच्चों की तुलना में कमज़ोर भी था।",
    "answer_english": "No team was ready to let Keshav play on their side due to the following main reasons:\n\n1. **Lack of Sports Equipment:** He did not have his own cricket bat and ball. In gully cricket, children who bring their own playing equipment are often readily included in the team.\n2. **Physical Weakness:** Additionally, he was physically weaker compared to the other children.",
    "question_malayalam": "**സൂചന:** 'വൈറ്റ് ക്യാപ്' എന്ന കഥയിലെ ഈ ഭാഗം വായിച്ച് 4, 5 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** കേശവിനെ തങ്ങളുടെ ടീമിൽ കളിപ്പിക്കാൻ ഒരു ടീമും തയ്യാറായിരുന്നില്ല. പലതവണ കേശവ് തന്റെ മാതാപിതാക്കളോട് തനിക്കായി ഒരു ബാറ്റും പന്തും വാങ്ങിത്തരാൻ ആവശ്യപ്പെട്ടിരുന്നു. പക്ഷേ മാതാപിതാക്കൾ അവനെ വഴക്കുപറഞ്ഞു. \"നീ നല്ല മാർക്കോടെ അഞ്ചാം ക്ലാസ്സ് പാസ്സാവുമ്പോൾ ഒരു പന്ത് വാങ്ങിത്തരാം!\"\n\n**ചോദ്യം 4:** കേശവിനെ തങ്ങളുടെ ടീമിൽ കളിപ്പിക്കാൻ ഒരു ടീമും തയ്യാറായിരുന്നില്ല. എന്തുകൊണ്ട്?",
    "answer_malayalam": "കേശവിനെ ടീമിൽ ഉൾപ്പെടുത്താൻ ആരും തയ്യാറാകാത്തതിന് പ്രധാന കാരണങ്ങൾ ഇവയായിരുന്നു:\n\n1. **കളിക്കോപ്പുകളുടെ അഭാവം:** അവന്റെ കൈയ്യിൽ സ്വന്തമായി ബാറ്റും പന്തും ഇല്ലായിരുന്നു. സാധാരണയായി സ്വന്തമായി കളിക്കോപ്പുകൾ കൊണ്ടുവരുന്ന കുട്ടികളെയാണ് ടീമിൽ എളുപ്പത്തിൽ ഉൾപ്പെടുത്താറുള്ളത്.\n2. **ശാരീരിക ബലഹീനത:** കൂടാതെ അവൻ ശാരീരികമായി മറ്റു കുട്ടികളേക്കാൾ അല്പം ബലഹീനനുമായിരുന്നു."
  },
  {
    "question_number": 5,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** कोई भी टीम उसे अपनी तरफ़... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 5:** प्रस्तुत प्रसंग पर माता-पिता और केशव के बीच की संभावित बातचीत लिखें।",
    "question_english": "**Passage:** No team was ready... [Passage provided above]\n\n**Question 5:** Write the probable conversation between the parents and Keshav based on the given context.",
    "answer_hindi": "**केशव** (उदास और मिन्नत भरे स्वर में): माँ, क्या मुझे भी एक क्रिकेट का बल्ला और बॉल मिल सकता है?\n\n**माँ** (घर का काम करते हुए): अभी नहीं केशव, तुम जानते हो न कि अभी हमारे पास फ़ालतू खर्च के लिए पैसे नहीं हैं।\n\n**केशव**: लेकिन माँ, बिना बैट-बॉल के कोई भी टीम मुझे अपने साथ खेलने नहीं देती। मैं बस दूर से उन्हें देखता रहता हूँ। मुझे भी खेलना है।\n\n**पिता** (अखबार पढ़ते हुए, कड़क आवाज़ में): खेलकूद से ज़्यादा ध्यान अपनी पढ़ाई पर लगाओ! तुम्हें पता है तुम्हारी परीक्षाएँ आ रही हैं?\n\n**केशव** (डरते हुए): हाँ पिताजी, मैं पढ़ाई भी करूँगा। बस खेलने के लिए एक बॉल ही दिला दीजिए।\n\n**पिता** (डपटते हुए): पहले अच्छे नंबरों से पाँचवीं कक्षा पास करके दिखाओ। जब तू अच्छे नंबर ले आएगा, तो एक बॉल खरीद ही देंगे। अभी चुपचाप जाकर अपनी किताबें खोलो और पढ़ाई करो!",
    "answer_english": "**Keshav** (in a sad and pleading tone): Mom, can I also get a cricket bat and ball?\n\n**Mother** (while doing household chores): Not right now, Keshav. You know we don't have money for extra expenses right now.\n\n**Keshav**: But Mom, without a bat and ball, no team lets me play with them. I just keep watching them from afar. I want to play too.\n\n**Father** (reading the newspaper, in a strict voice): Focus more on your studies than on playing! Do you know your exams are coming up?\n\n**Keshav** (timidly): Yes father, I will study too. Just buy me a ball to play with.\n\n**Father** (scolding): First, show us by passing the fifth grade with good marks. When you get good marks, we will definitely buy you a ball. Now go quietly, open your books and study!",
    "question_malayalam": "**അനുച്ഛേദം:** കേശവിനെ തങ്ങളുടെ ടീമിൽ... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 5:** നൽകിയിരിക്കുന്ന സന്ദർഭത്തെ ആസ്പദമാക്കി കേശവും മാതാപിതാക്കളും തമ്മിലുള്ള സാധ്യമായ ഒരു സംഭാഷണം തയ്യാറാക്കുക.",
    "answer_malayalam": "**കേശവ്** (സങ്കടത്തോടെ): അമ്മേ, എനിക്കും ഒരു ബാറ്റും പന്തും വാങ്ങിത്തരുമോ?\n\n**അമ്മ:** ഇപ്പോൾ പറ്റില്ല കേശവ്, അനാവശ്യ ചിലവുകൾക്ക് നമ്മുടെ കൈയ്യിൽ പണമില്ലെന്ന് നിനക്കറിയില്ലേ?\n\n**കേശവ്:** പക്ഷേ അമ്മേ, ബാറ്റും പന്തും ഇല്ലാതെ ആരും എന്നെ കളിപ്പിക്കില്ല. എനിക്കും കളിക്കണം.\n\n**അച്ഛൻ** (ഗൗരവത്തിൽ): കളിയേക്കാൾ കൂടുതൽ പഠനത്തിൽ ശ്രദ്ധിക്ക്. പരീക്ഷ വരികയല്ലേ.\n\n**കേശവ്** (പേടിയോടെ): ഞാൻ പഠിച്ചോളാം അച്ഛാ, എനിക്ക് ഒരു പന്തെങ്കിലും വാങ്ങിത്തരൂ.\n\n**അച്ഛൻ:** ആദ്യം അഞ്ചാം ക്ലാസ്സ് നല്ല മാർക്കോടെ പാസ്സാവൂ, എന്നിട്ട് വാങ്ങിത്തരാം. ഇപ്പോൾ പോയി പഠിക്ക്!"
  },
  {
    "question_number": 6,
    "marks": 1,
    "question_hindi": "**सूचना:** तुलसी का दोहा पढ़ें, प्रश्न 6 और 7 के उत्तर लिखें।\n\n**दोहा:**\nदया धर्म का मूल है, पाप मूल अभिमान।\nतुलसी दया न छोड़िये, जब तक घट में प्राण॥\n\n**प्रश्न 6:** 'घट' समानार्थी शब्द क्या है?\n- (क) स्वभाव\n- (ख) शरीर\n- (ग) वचन\n- (घ) नाश",
    "question_english": "**Instruction:** Read Tulsi's couplet and answer questions 6 and 7.\n\n**Couplet:**\nDaya dharm ka mool hai, paap mool abhiman.\nTulsi daya na chhodiye, jab tak ghat mein pran.",
    "question_malayalam": "**സൂചന:** തുളസീദാസിന്റെ ഈ ദോഹ വായിച്ച് 6, 7 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**ദോഹ:** ദയയാണ് ധർമ്മത്തിന്റെ അടിസ്ഥാനം, അഹങ്കാരമാണ് പാപത്തിന്റെ അടിസ്ഥാനം. ശരീരത്തിൽ ജീവനുള്ള കാലത്തോളം ദയ ഉപേക്ഷിക്കരുത്.\n\n**ചോദ്യം 6:** 'ഘട്ട്' (ഘട) എന്ന വാക്കിന്റെ സമാനാർത്ഥ പദം ഏതാണ്?\n- (ക) സ്വഭാവം\n- (ഖ) ശരീരം\n- (ഗ) വചനം\n- (ഘ) നാശം",
    "answer_hindi": "**(ख) शरीर**",
    "answer_english": "**(b) Body**",
    "answer_malayalam": "**(ഖ) ശരീരം**"
  },
  {
    "question_number": 7,
    "marks": 2,
    "question_hindi": "**दोहा:** दया धर्म का मूल है... [ऊपर दिया गया दोहा]\n\n**प्रश्न 7:** तुलसी के प्रस्तुत दोहे का आशय लिखें।",
    "question_english": "**Couplet:** Daya dharm ka mool hai... [Couplet provided above]\n\n**Question 7:** Write the meaning of the presented couplet by Tulsi.",
    "answer_hindi": "इस दोहे में गोस्वामी तुलसीदास जी ने जीवन के दो महत्वपूर्ण मूल्यों को स्पष्ट किया है:\n\n- **करुणा का महत्व:** मनुष्य के धर्म की असली जड़ (मूल) 'दया' या करुणा है।\n- **अहंकार का पतन:** हर प्रकार के पाप और बुराई की जड़ 'अभिमान' (घमंड) है।\n\n**निष्कर्ष:** इसलिए, जब तक हमारे शरीर (घट) में प्राण बचे हैं, तक तक हमें दयालुता का त्याग नहीं करना चाहिए और सबके प्रति करुणा का भाव रखना चाहिए।",
    "answer_english": "In this couplet, Goswami Tulsidas clarifies two important life values:\n\n- **Importance of Compassion:** Compassion (mercy) is the true root of a person's religion and morality.\n- **Downfall of Arrogance:** Arrogance (pride) is the root of all sins and evils.\n\n**Conclusion:** Therefore, as long as there is life in our body, we should never abandon compassion and should always maintain a feeling of kindness towards everyone.",
    "question_malayalam": "**ദോഹ:** ദയയാണ് ധർമ്മത്തിന്റെ... [മുകളിൽ നൽകിയിരിക്കുന്ന ദോഹ]\n\n**ചോദ്യം 7:** തുളസീദാസിന്റെ ഈ ദോഹയുടെ ആശയം എഴുതുക.",
    "answer_malayalam": "ഈ ദോഹയിലൂടെ തുളസീദാസ് രണ്ട് പ്രധാന കാര്യങ്ങൾ വ്യക്തമാക്കുന്നു:\n\n- **കരുണയുടെ പ്രാധാന്യം:** ദയയാണ് ധർമ്മത്തിന്റെ യഥാർത്ഥ അടിസ്ഥാനം.\n- **അഹങ്കാരത്തിന്റെ പതനം:** അഹങ്കാരമാണ് എല്ലാ പാപങ്ങൾക്കും കാരണമാകുന്നത്.\n\n**ഉപസംഹാരം:** അതിനാൽ ശരീരത്തിൽ ജീവനുള്ളിടത്തോളം കാലം ദയ കൈവിടരുതെന്നും എല്ലാവരോടും കരുണയുള്ളവരായിരിക്കണമെന്നും അദ്ദേഹം ഓർമ്മിപ്പിക്കുന്നു."
  },
  {
    "question_number": 8,
    "marks": 2,
    "question_hindi": "**सूचना:** 'मेरी दुनिया के तमाम बच्चे' कविता का यह अंश पढ़ें और प्रश्न 8 के उत्तर लिखें।\n\n**कवितांश:**\nवो तुम्हारी दीवारों में\nछेद कर देंगे एक दिन\nऔर आर-पर देखने की कोशिश करेंगे\nवो सहसा चीखेंगे !\nऔर कहेंगे-\n\"देखो ! उस पार भी मौसम तो हमारे यहाँ जैसा ही है\"\n\n**प्रश्न 8:** “देखो ! उस पार भी मौसम तो हमारे यहाँ जैसा ही है” इससे आपने क्या समझा?",
    "question_english": "**Instruction:** Read this excerpt from the poem 'Meri Duniya Ke Tamam Bachche' and answer question 8.\n\n**Poetry Excerpt:**\nThey will make holes in your walls one day,\nand try to look through,\nthey will suddenly scream!\nAnd say-\n\"Look! The weather on the other side is just like ours.\"\n\n**Question 8:** \"Look! The weather on the other side is just like ours.\" What did you understand from this?",
    "answer_hindi": "इस पंक्ति के माध्यम से कवि निम्नलिखित बातें स्पष्ट करना चाहते हैं:\n\n- **बच्चों की मासूमियत:** बच्चे मासूम होते हैं और वे बड़ों द्वारा बनाई गई नफरत, धर्म या देशों की सरहदों (कृत्रिम दीवारों) को नहीं मानते।\n- **मानवीय समानता:** जब बच्चे इन दीवारों के आर-पार देखेंगे, तो उन्हें यह एहसास होगा कि सीमा के उस पार रहने वाले लोग भी बिल्कुल हमारे जैसे ही इंसान हैं।\n- **प्रकृति की एकता:** वहाँ की प्रकृति और मौसम भी हमारे जैसा ही है, इसलिए इंसानों के बीच आपस में कोई दुश्मनी या भेदभाव नहीं होना चाहिए।",
    "answer_english": "Through this line, the poet wants to clarify the following points:\n\n- **Innocence of Children:** Children are innocent and do not believe in the borders (artificial walls) of hatred, religion, or countries created by adults.\n- **Human Equality:** When children look across these artificial walls, they will realize that the people living on the other side are humans exactly like us.\n- **Unity of Nature:** The nature and weather there are also exactly like ours, so there should be no enmity or discrimination among humans.",
    "question_malayalam": "**സൂചന:** 'എന്റെ ലോകത്തിലെ എല്ലാ കുട്ടികളും' എന്ന കവിതയിലെ ഈ ഭാഗം വായിച്ച് 8-ാം ചോദ്യത്തിന് ഉത്തരമെഴുതുക.\n\n**കവിതാഭാഗം:** ഒരു ദിവസം അവർ നിങ്ങളുടെ മതിലുകളിൽ സുഷിരങ്ങളുണ്ടാക്കും, അപ്പുറത്തേക്ക് നോക്കാൻ ശ്രമിക്കും. അവർ പെട്ടെന്ന് വിളിച്ചുപറയും- \"നോക്കൂ! അപ്പുറത്തും കാലാവസ്ഥ നമ്മുടെ ഇവിടെയുള്ളതുപോലെ തന്നെയാണ്\"\n\n**ചോദ്യം 8:** “നോക്കൂ ! അപ്പുറത്തും കാലാവസ്ഥ നമ്മുടെ ഇവിടെയുള്ളതുപോലെ തന്നെയാണ്” ഇതിൽ നിന്ന് നിങ്ങൾക്ക് എന്ത് മനസ്സിലായി?",
    "answer_malayalam": "ഈ വരികളിലൂടെ കവി താഴെ പറയുന്ന കാര്യങ്ങൾ വ്യക്തമാക്കുന്നു:\n\n- **കുട്ടികളുടെ നിഷ്കളങ്കത:** മുതിർന്നവർ കെട്ടിപ്പൊക്കിയ വെറുപ്പിന്റെയും വിവേചനത്തിന്റെയും മതിലുകളെ കുട്ടികൾ അംഗീകരിക്കുന്നില്ല.\n- **മനുഷ്യസമത്വം:** മതിലുകൾക്കപ്പുറമുള്ളവരും നമ്മളെപ്പോലെ തന്നെയാണെന്ന് കുട്ടികൾ തിരിച്ചറിയുന്നു.\n- **പ്രകൃതിയുടെ ഐക്യം:** അവിടുത്തെ പ്രകൃതിയും കാലാവസ്ഥയും ഒരുപോലെയാണെന്ന് മനസ്സിലാക്കുന്നതിലൂടെ ലോകത്ത് സമാധാനവും സ്നേഹവും ഉണ്ടാകുമെന്ന് കവി പ്രത്യാശിക്കുന്നു."
  },
  {
    "question_number": 9,
    "marks": 2,
    "question_hindi": "**सूचना:** 'परी लड़की' कहानी का यह अंश पढ़ें, प्रश्न 9 और 10 के उत्तर लिखें।\n\n**अनुच्छेद:** जब ट्रेन रुकी, तो गार्ड ने मेरी बाँह पकड़ी। उसने मुझे अंधेरे में उतार दिया। रात की हवा में गोलियों की आवाज़ गूंजने लगी। मेरे कपड़े उतार दिए गए और मेरी तलाशी ली गई। मुझे एक यूनिफॉर्म और काम सौंपा गया। \"बैरेक में जाओ\" - एक गार्ड चिल्लाया।\n\n**प्रश्न 9:** हरमन के माँ से बिछुड़ने का कारण क्या है?",
    "question_english": "**Instruction:** Read this excerpt from the story 'Pari Ladki' and answer questions 9 and 10.\n\n**Passage:** When the train stopped, the guard grabbed my arm. He pulled me down into the darkness. The sound of bullets started echoing in the night air. I was stripped of my clothes and searched. I was given a uniform and assigned a task. \"Go to the barracks\" - a guard shouted.\n\n**Question 9:** What is the reason for Herman separating from his mother?",
    "answer_hindi": "हरमन के अपनी माँ से बिछुड़ने के मुख्य कारण निम्नलिखित थे:\n\n1. **बंदी बनाया जाना:** युद्ध के दौरान उन्हें नाज़ी सैनिकों द्वारा बंदी बनाकर एक यातना शिविर (कंसंट्रेशन कैंप) में लाया गया था।\n2. **परिवारों को अलग करना:** वहाँ पहुँचते ही क्रूरतापूर्वक बच्चों को उनके माता-पिता से अलग कर दिया गया।\n3. **मज़दूरी के लिए धकेलना:** हरमन को गार्ड द्वारा ज़बरदस्ती खींचा गया, तलाशी ली गई और यूनिफॉर्म देकर मज़दूरी के लिए बैरेक में धकेल दिया गया, जिससे वह अपनी माँ से हमेशा के लिए अलग हो गया।",
    "answer_english": "The main reasons for Herman separating from his mother were:\n\n1. **Taken Captive:** During the war, they were taken captive by Nazi soldiers and brought to a concentration camp.\n2. **Families Separated:** Upon arrival, children were cruelly separated from their parents.\n3. **Pushed into Forced Labor:** Herman was forcibly dragged away by a guard, searched, given a uniform, and pushed into the barracks for forced labor, which separated him from his mother forever.",
    "question_malayalam": "**സൂചന:** 'മാലാഖ പെൺകുട്ടി' എന്ന കഥയിലെ ഈ ഭാഗം വായിച്ച് 9, 10 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** ട്രെയിൻ നിന്നപ്പോൾ ഗാർഡ് എന്റെ കൈയ്യിൽ പിടിച്ചു. അവൻ എന്നെ ഇരുട്ടിലേക്ക് ഇറക്കി വിട്ടു. രാത്രിവായുവിൽ വെടിയൊച്ചകൾ മുഴങ്ങി. എന്റെ വസ്ത്രങ്ങൾ അഴിപ്പിക്കുകയും എന്നെ പരിശോധിക്കുകയും ചെയ്തു. എനിക്ക് ഒരു യൂണിഫോമും ജോലിയും നൽകി. “ബാരക്കിലേക്ക് പോകൂ” - ഒരു ഗാർഡ് അലറി.\n\n**ചോദ്യം 9:** ഹർമൻ അമ്മയിൽ നിന്ന് വേർപിരിയാൻ കാരണമെന്ത്?",
    "answer_malayalam": "ഹർമൻ അമ്മയിൽ നിന്ന് വേർപിരിയാൻ പ്രധാന കാരണങ്ങൾ ഇവയായിരുന്നു:\n\n1. **തടവിലാക്കപ്പെടൽ:** യുദ്ധകാലത്ത് നാസി സൈനികർ അവരെ തടവുകാരായി പിടികൂടി തടങ്കൽ പാളയത്തിലേക്ക് എത്തിച്ചു.\n2. **കുടുംബങ്ങളെ വേർപിരിക്കൽ:** അവിടെ എത്തിയ ഉടനെ കുട്ടികളെ മാതാപിതാക്കളിൽ നിന്ന് ക്രൂരമായി വേർപിരിച്ചു.\n3. **നിർബന്ധിത ജോലി:** ഹർമനെ ബലമായി പിടിച്ച് മാറ്റി ബാരക്കിലേക്ക് അയക്കുകയും ജോലി ചെയ്യിപ്പിക്കുകയും ചെയ്തതോടെ അവൻ അമ്മയിൽ നിന്ന് എന്നെന്നേക്കുമായി വേർപിരിഞ്ഞു."
  },
  {
    "question_number": 10,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** जब ट्रेन रुकी, तो गार्ड ने मेरी बाँह पकड़ी... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 10:** बैरेक के अनुभवों का जिक्र करते हुए हरमन की डायरी लिखें।",
    "question_english": "**Passage:** When the train stopped... [Passage provided above]\n\n**Question 10:** Write Herman's diary mentioning the experiences of the barrack.",
    "answer_hindi": "**१५ मार्च १९४४, रात ९ बजे**\n\n*प्रिय डायरी,*\n\nआज का दिन मेरे जीवन का सबसे खौफनाक और मनहूस दिन था। ट्रेन के रुकते ही एक कठोर गार्ड ने मुझे मेरी माँ से खींच लिया। मैंने अपनी माँ की ओर असहाय होकर देखा, पर वे मुझे बचा न सकीं。\n\nरात के उस घने अंधेरे में गूँजती गोलियों की आवाज़ों ने मेरे दिल में दहशत भर दी है। उन क्रूर लोगों ने मेरे सारे कपड़े उतार दिए, मेरी तलाशी ली और मुझे एक खुरदरी सी कैदी वाली यूनिफॉर्म पहना दी।\n\nअब मुझे इस अजनबी, बदबूदार और ठंडे बैरक में काम करने के लिए धकेल दिया गया है। मुझे यहाँ बहुत डर लग रहा है। माँ की बहुत याद आ रही है। क्या मैं उन्हें फिर कभी देख पाऊँगा? पता नहीं कल मेरे साथ क्या होगा।\n\n*- हरमन*",
    "answer_english": "**March 15, 1944, 9 PM**\n\n*Dear Diary,*\n\nToday was the most terrifying and wretched day of my life. As soon as the train stopped, a harsh guard dragged me away from my mother. I looked at her helplessly, but she couldn't save me.\n\nThe echoing sound of gunshots in the thick darkness of the night has filled my heart with terror. Those cruel people stripped off all my clothes, searched me, and made me wear a rough prisoner's uniform.\n\nNow, I have been shoved into this strange, smelly, and cold barrack to work. I am very scared here. I miss my mother so much. Will I ever be able to see her again? I don't know what will happen to me tomorrow.\n\n*- Herman*",
    "question_malayalam": "**അനുച്ഛേദം:** ട്രെയിൻ നിന്നപ്പോൾ ഗാർഡ്... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 10:** ബാരക്കിലെ അനുഭവങ്ങൾ വിവരിച്ചുകൊണ്ട് ഹർമന്റെ ഡയറി തയ്യാറാക്കുക.",
    "answer_malayalam": "**15 മാർച്ച് 1944, രാത്രി 9 മണി**\n\n*പ്രിയ ഡയറി,*\n\nഇന്ന് എന്റെ ജീവിതത്തിലെ ഏറ്റവും ഭയാനകമായ ദിവസമായിരുന്നു. ട്രെയിൻ നിന്ന ഉടനെ പട്ടാളക്കാർ എന്നെ അമ്മയിൽ നിന്ന് ബലമായി പിടിച്ചുമാറ്റി. അമ്മയുടെ നിസ്സഹായാവസ്ഥ എനിക്ക് കാണാമായിരുന്നു.\n\nരാത്രിയിലെ വെടിയൊച്ചകൾ എന്നെ വല്ലാതെ ഭയപ്പെടുത്തുന്നു. അവർ എന്റെ വസ്ത്രങ്ങൾ മാറ്റി തടവുകാരന്റെ യൂണിഫോം നൽകി. മടുപ്പിക്കുന്ന ഗന്ധമുള്ള ഈ തണുത്ത ബാരക്കിലേക്ക് എന്നെ തള്ളിവിട്ടു. എനിക്ക് വല്ലാത്ത പേടി തോന്നുന്നു. അമ്മയെ ഇനി കാണാൻ കഴിയുമോ എന്നറിയില്ല. നാളെ എന്താകുമെന്ന് ആലോചിക്കുമ്പോൾ പേടിയാകുന്നു.\n\n*- ഹർമൻ*"
  },
  {
    "question_number": 11,
    "marks": 4,
    "question_hindi": "**सूचना:** 'दिल्ली में उनींदे' संस्मरण का यह अंश पढ़ें, प्रश्न 11 का उत्तर लिखें।\n\n**अनुच्छेद:** \"मुझे यहीं बैठा रहने दीजिए। मैं आपका सोफ़ा गंदा नहीं करना चाहता।” मैं कल की अपनी जान पहचान के नाते उसे दोस्ताना मुसकान देती हूँ। उसके शरीर में, चेहरे पर, हाथ-पाँव में इतनी सारी नीली रगें हैं- मैंने पहले नहीं देखा था। वह बैठता है, तो जैसे सारी भूख-प्यास उसके साथ बैठ जाती है।\n\n**प्रश्न 11:** ऑटो ड्राइवर राजाराम के चरित्र पर टिप्पणी लिखें।",
    "question_english": "**Instruction:** Read this excerpt from the memoir 'Dilli Mein Uninde' and answer question 11.\n\n**Passage:** \"Let me sit right here. I don't want to dirty your sofa.\" Based on our acquaintance from yesterday, I give him a friendly smile. There are so many blue veins in his body, on his face, hands, and feet- I hadn't seen them before. When he sits down, it's as if all his hunger and thirst sit down with him.\n\n**Question 11:** Write a comment on the character of the auto driver Rajaram.",
    "answer_hindi": "राजाराम एक बेहद गरीब, मेहनती और स्वाभिमानी ऑटो ड्राइवर है। उसके चरित्र की मुख्य विशेषताएँ इस प्रकार हैं:\n\n- **कठोर परिश्रमी:** वह सालों से बिना ठीक से सोए, दिन-रात दिल्ली की सड़कों पर ऑटो चलाकर अपना गुज़ारा करता है और उसी ऑटो में सोता भी है।\n- **संघर्षमय जीवन:** उसका जीवन अत्यधिक संघर्षपूर्ण है, जिसके निशान उसके चेहरे और हाथों की उभरी हुई नीली रगों में साफ दिखाई देते हैं।\n- **विनम्र और संकोची:** राजाराम बहुत विनम्र स्वभाव का व्यक्ति है। वह लेखिका के घर जाकर ज़मीन पर ही बैठना पसंद करता है क्योंकि वह उनके साफ-सुथरे सोफे को गंदा नहीं करना चाहता।\n- **स्वाभिमानी:** उसकी भयंकर भूख, प्यास और शारीरिक थकान साफ झलकती है, फिर भी वह किसी के आगे हाथ नहीं फैलाता और पूरी ईमानदारी से अपना कठिन जीवन जीता है।",
    "answer_english": "Rajaram is an extremely poor, hardworking, and self-respecting auto driver. His main character traits are as follows:\n\n- **Hardworking:** For years, he has been surviving by driving an auto on the streets of Delhi day and night without sleeping properly, and he even sleeps in that same auto.\n- **A Life of Struggle:** His life is full of immense struggle, the marks of which are clearly visible in the bulging blue veins of his face and hands.\n- **Polite and Hesitant:** Rajaram is a very polite person. He prefers to sit on the floor when he visits the author's house because he does not want to dirty her clean sofa.\n- **Self-respecting:** His severe hunger, thirst, and physical exhaustion are clearly visible, yet he does not beg from anyone and lives his difficult life with complete honesty and dignity.",
    "question_malayalam": "**സൂചന:** 'ഡൽഹിയിൽ ഉറക്കമില്ലാത്തവർ' എന്ന ഓർമ്മക്കുറിപ്പിലെ ഈ ഭാഗം വായിച്ച് 11-ാം ചോദ്യത്തിന് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** “എന്നെ ഇവിടെത്തന്നെ ഇരിക്കാൻ അനുവദിക്കൂ. എനിക്ക് നിങ്ങളുടെ സോഫ അഴുക്കാക്കാൻ വയ്യ.” അയാളുടെ ശരീരത്തിലും മുഖത്തും കൈകാലുകളിലും ധാരാളം നീല ഞരമ്പുകളുണ്ട്. അയാൾ ഇരിക്കുമ്പോൾ അയാളുടെ എല്ലാ വിശപ്പും ദാഹവും അയാളോടൊപ്പം ഇരിക്കുന്നതുപോലെ തോന്നുന്നു.\n\n**ചോദ്യം 11:** ഓട്ടോ ഡ്രൈവർ രാജാറാമിന്റെ സ്വഭാവത്തെക്കുറിച്ച് ഒരു കുറിപ്പ് തയ്യാറാക്കുക.",
    "answer_malayalam": "രാജാറാം അങ്ങേയറ്റം ദരിദ്രനും എന്നാൽ കഠിനാധ്വാനിയുമായ ഒരു ഓട്ടോ ഡ്രൈവറാണ്. അദ്ദേഹത്തിന്റെ പ്രധാന സ്വഭാവ സവിശേഷതകൾ ഇവയാണ്:\n\n- **കഠിനാധ്വാനം:** വർഷങ്ങളായി ഡൽഹിയിലെ തെരുവുകളിൽ വിശ്രമമില്ലാതെ ഓട്ടോ ഓടിച്ചാണ് അദ്ദേഹം കഴിയുന്നത്. തന്റെ ഓട്ടോറിക്ഷ തന്നെയാണ് അദ്ദേഹത്തിന്റെ വീട്.\n- **സമരഭриതമായ ജീവിതം:** അദ്ദേഹത്തിന്റെ കഷ്ടപ്പാടുകൾ നിറഞ്ഞ ജീവിതം ആ ശരീരത്തിൽ തെളിഞ്ഞുനിൽക്കുന്നു.\n- **വിനയം:** തികച്ചും വിനീതനായ അദ്ദേഹം തന്റെ ദാരിദ്ര്യത്തിനിടയിലും മറ്റുള്ളവരെ ബുദ്ധിമുട്ടിക്കാൻ ആഗ്രഹിക്കുന്നില്ല.\n- **സ്വാഭിമാനം:** വിശപ്പും തളർച്ചയും ഉണ്ടെങ്കിലും ആരുടെയും മുമ്പിൽ കൈനീട്ടാൻ അദ്ദേഹം തയ്യാറല്ല. അഭിമാനത്തോടെ തന്റെ തൊഴിൽ ചെയ്ത് അദ്ദേഹം ജീവിക്കുന്നു."
  },
  {
    "question_number": 12,
    "marks": 4,
    "question_hindi": "**सूचना:** 'पैदल चलता हुआ आदमी' कविता का यह अंश पढ़ें प्रश्न 12 का उत्तर लिखें।\n\n**कवितांश:**\nवह अनाज उगाना बंद कर दें\nतो वे भूखों मर जाएँगे,\nउनके मकान न बनाए तो उन्हें\nसिर छिपाने की जगह नहीं मिलेगी।\n\n**प्रश्न 12:** कवि और कविता का परिचय देते हुए कवितांश का आशय लिखें।",
    "question_english": "**Instruction:** Read this excerpt from the poem 'Paidal Chalta Hua Aadmi' and answer question 12.\n\n**Poetry Excerpt:**\nIf they stop growing grain,\nthey will die of starvation,\nif they don't build their houses,\nthey won't find a place to hide their heads.\n\n**Question 12:** Write the meaning of the poetry excerpt while introducing the poet and the poem.",
    "answer_hindi": "**कविता का संदर्भ:**\nप्रस्तुत कवितांश 'पैदल चलता हुआ आदमी' नामक कविता से लिया गया है। इन पंक्तियों में कवि ने समाज के उपेक्षित लेकिन सबसे महत्वपूर्ण वर्ग—मेहनतकश, मज़दूर और किसानों—के महत्व को गहराई से दर्शाया है।\n\n**कवितांश का आशय:**\n- **असली निर्माता:** कवि का आशय है कि जो लोग पैदल चलते हैं (अर्थात् समाज का गरीब मज़दूर और किसान वर्ग), वे ही इस दुनिया के असली निर्माता और पालनहार हैं।\n- **अन्नदाता का महत्व:** यदि ये किसान खेतों में पसीना बहाकर अनाज उगाना बंद कर दें, तो महलों में रहने वाले अमीर और सत्ताधारी लोग भी भूख से मर जाएँगे।\n- **श्रम का आधार:** इसी तरह, यदि ये मज़दूर बड़ी-बड़ी इमारतें और मकान बनाना बंद कर दें, तो सुविधासंपन्न लोगों को सिर छिपाने के लिए छत तक नसीब नहीं होगी।\n\n**निष्कर्ष:** स्पष्ट रूप से, पूरा समाज और उसकी सुख-सुविधाएँ इन्हीं पैदल चलने वाले मज़दूरों की मेहनत पर टिकी हुई हैं।",
    "answer_english": "**Context of the Poem:**\nThe presented excerpt is taken from the poem 'Paidal Chalta Hua Aadmi' (The Walking Man). In these lines, the poet profoundly highlights the importance of the neglected but most crucial class of society—the hardworking laborers and farmers.\n\n**Meaning of the Excerpt:**\n- **True Builders:** The poet means that the people who walk on foot (i.e., the poor labor and farming class of society) are the real builders and sustainers of this world.\n- **Importance of the Provider:** If these farmers stop shedding their sweat and growing grain in the fields, the rich and powerful people living in palaces will die of starvation.\n- **Foundation of Labor:** Similarly, if these laborers stop building huge mansions and houses, the privileged people will not even have a roof to shelter their heads.\n\n**Conclusion:** Clearly, the entire society and its luxuries rest entirely upon the hard work of these walking laborers.",
    "question_malayalam": "**സൂചന:** 'കാൽനടയായി പോകുന്ന മനുഷ്യൻ' എന്ന കവിതയിലെ ഈ ഭാഗം വായിച്ച് 12-ാം ചോദ്യത്തിന് ഉത്തരമെഴുതുക.\n\n**കവിതാഭാഗം:** അവൻ ധാന്യം വിളയിക്കുന്നത് നിർത്തിയാൽ അവർ പട്ടിണി കിടന്നു മരിക്കും, അവൻ അവരുടെ വീടുകൾ പണിതില്ലെങ്കിൽ അവർക്ക് തല ചായ്ക്കാൻ ഒരിടവും ലഭിക്കില്ല.\n\n**ചോദ്യം 12:** കവിയെയും കവിതയെയും പരിചയപ്പെടുത്തിക്കൊണ്ട് നൽകിയിരിക്കുന്ന വരികളുടെ ആശയം എഴുതുക.",
    "answer_malayalam": "**കവിതയുടെ പശ്ചാത്തലം:** സ്വപ്നിൽ ശ്രീവാസ്തവയുടെ 'പൈദൽ ചൽത്താ ഹുആ ആദ്മി' എന്ന കവിതയിലെ വരികളാണിത്. സമൂഹത്തിലെ സാധാരണക്കാരായ തൊഴിലാളികളുടെയും കർഷകരുടെയും പ്രാധാന്യമാണ് കവി ഇതിലൂടെ ഓർമ്മിപ്പിക്കുന്നത്.\n\n**വരികളുടെ ആശയം:**\n- **യഥാർത്ഥ നിർമ്മാതാക്കൾ:** അധ്വാനിക്കുന്ന ഈ മനുഷ്യർ പണി നിർത്തിയാൽ ലോകത്തിന്റെ ഗതി തന്നെ നിലച്ചുപോകും.\n- **കർഷകരുടെ പ്രാധാന്യം:** അവർ കൃഷി ചെയ്തില്ലെങ്കിൽ ലോകം പട്ടിണിയിലാകും.\n- **തൊഴിലാളികളുടെ പ്രാധാന്യം:** അവർ വീടുകൾ പണിതില്ലെങ്കിൽ ആർക്കും തല ചായ്ക്കാൻ ഒരിടമുണ്ടാകില്ല.\n\n**ഉപസംഹാരം:** സമ്പന്നരുടെ ആഡംബരങ്ങൾ നിലനിൽക്കുന്നത് ഈ സാധാരണക്കാരുടെ അധ്വാനം കൊണ്ടാണെന്ന് കവി വ്യക്തമാക്കുന്നു."
  },
  {
    "question_number": 13,
    "marks": 1,
    "question_hindi": "**सूचना:** 'गैलीलियो' लेख का यह अंश पढ़ें प्रश्न 13 और 14 का उत्तर लिखें।\n\n**अनुच्छेद:** आज से करीब चार सौ साल पहले की बात है। पूर्णमासी की एक रात थी। बारह साल का एक लड़का चाँद को देखते हुए एक पहाड़ी पर चढ़ रहा था। उसे लगा कि चाँद भी उसके साथ चढ़ रहा है। उसे बड़ा मज़ा आया।\n\n**प्रश्न 13:** पहचानकर लिखें कि कौन-सा क्रम सही है।\n- (i) गैलीलियो\n- (ii) डॉक्टर बनना चाहते थे ।\n- (iii) पिता\n- (iv) बचपन से आलसी थे ।\n- (v) महान वैज्ञानिक थे ।\n\n- (क) v\n- (ख) i और ii\n- (ग) i और v\n- (घ) i और iv",
    "question_english": "**Instruction:** Read this excerpt from the article 'Galileo' and answer questions 13 and 14.\n\n**Passage:** This is about four hundred years ago. It was a full moon night. A twelve-year-old boy was climbing a hill while looking at the moon. He felt that the moon was also climbing with him. He enjoyed it very much.\n\n**Question 13:** Identify and write which sequence is correct.\n- (i) Galileo\n- (ii) wanted to become a doctor.\n- (iii) Father\n- (iv) was lazy from childhood.\n- (v) was a great scientist.\n\n- (a) v\n- (b) i and ii\n- (c) i and v\n- (d) i and iv",
    "answer_hindi": "**(ग) i और v (गैलीलियो महान वैज्ञानिक थे)**",
    "answer_english": "**(c) i and v (Galileo was a great scientist)**",
    "question_malayalam": "**സൂചന:** 'ഗലീലിയോ' എന്ന ലേഖനത്തിലെ ഈ ഭാഗം വായിച്ച് 13, 14 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**ചോദ്യം 13:** നൽകിയിരിക്കുന്നവയിൽ ഏത് ക്രമമാണ് ശരിയെന്ന് കണ്ടെത്തി എഴുതുക.\n- (i) ഗലീലിയോ\n- (ii) ഡോക്ടർ ആകാൻ ആഗ്രഹിച്ചു\n- (iii) പിതാവ്\n- (iv) കുട്ടിക്കാലം മുതൽ മടിയനായിരുന്നു\n- (v) വലിയ ശാസ്ത്രജ്ഞനായിരുന്നു\n\n- (ക) v\n- (ഖ) i ഉം ii ഉം\n- (ഗ) i ഉം v ഉം\n- (ഘ) i ഉം iv ഉം",
    "answer_malayalam": "**(ഗ) i ഉം v ഉം (ഗലീലിയോ വലിയ ശാസ്ത്രജ്ഞനായിരുന്നു)**"
  },
  {
    "question_number": 14,
    "marks": 3,
    "question_hindi": "**अनुच्छेद:** आज से करीब चार सौ साल पहले की बात है... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 14:** वाक्य विस्तार करें। (पिता ने, पढ़ने के लिए, डाक्टरी) गैलीलियो को भेज दिया।",
    "question_english": "**Passage:** This is about four hundred years ago... [Passage provided above]\n\n**Question 14:** Expand the sentence. (Father, to study, medicine) sent Galileo.",
    "answer_hindi": "**विस्तारित वाक्य:**\nपिता ने गैलीलियो को डाक्टरी पढ़ने के लिए भेज दिया।\n\n**संदर्भ (व्याख्या):**\nगैलीलियो की स्वाभाविक रुचि गणित और विज्ञान में थी, लेकिन उनके पिता उन्हें एक doctor बनाना चाहते थे, इसलिए उनके पिता ने उन्हें आयुर्विज्ञान का अध्ययन करने के लिए विश्वविद्यालय भेज दिया था।",
    "answer_english": "**Expanded Sentence:**\nThe father sent Galileo to study medicine.\n\n**Context (Explanation):**\nGalileo's natural interest was in mathematics and science, but his father wanted him to become a doctor, so his father sent him to the university to study medicine.",
    "question_malayalam": "**അനുച്ഛേദം:** ഏകദേശം നാനൂറ് വർഷം മുമ്പുള്ള... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 14:** വാക്യം വികസിപ്പിക്കുക. (പിതാവ്, പഠിക്കാൻ, വൈദ്യശാസ്ത്രം) ഗലീലിയോയെ അയച്ചു.",
    "answer_malayalam": "**വികസിപ്പിച്ച വാക്യം:** പിതാവ് ഗലീലിയോയെ വൈദ്യശാസ്ത്രം പഠിക്കാൻ അയച്ചു."
  },
  {
    "question_number": 15,
    "marks": 1,
    "question_hindi": "**सूचना:** नीचे दिए खंड पढ़कर प्रश्न 15 से 17 तक के उत्तर लिखें।\n\n**अनुच्छेद:** प्लास्टिक प्रदूषण हर जगह मौजूद है, हमारे महासागरों को दबा रहा है और दुनिया भर के समुदायों को जहर दे रहा है। हमें एक अलग रास्ता तय करना होगा। प्लास्टिक एक अत्यंत उपयोगी सामग्री है, लेकिन बहुत अधिक प्लास्टिक का उपयोग केवल एक बार ही किया जाता है और बहुत कम पुनर्चक्रण हो पाता है। इन एकल-उपयोग, कम मूल्य वाले प्लास्टिक की पहचान करना और उन्हें हटाना, प्लास्टिक प्रदूषण को समाप्त करने की दिशा में पहला कदम है।\n\n**प्रश्न 15:** विशेषण शब्द चुनकर लिखें ।\n- (क) पहचान\n- (ख) मौजूद\n- (ग) बहुत\n- (घ) प्रदूषण",
    "question_english": "**Instruction:** Read the passage below and answer questions 15 to 17.\n\n**Passage:** Plastic pollution is present everywhere, choking our oceans and poisoning communities around the world. We need to chart a different course. Plastic is an extremely useful material, but too much plastic is used only once and very little is recycled. Identifying and removing these single-use, low-value plastics is the first step towards ending plastic pollution.\n\n**Question 15:** Choose and write the adjective word.\n- (a) Identification\n- (b) Present\n- (c) Very/A lot\n- (d) Pollution",
    "answer_hindi": "**(ग) बहुत**",
    "answer_english": "**(c) Very / A lot**",
    "question_malayalam": "**സൂചന:** താഴെ നൽകിയിരിക്കുന്ന ഭാഗം വായിച്ച് 15 മുതൽ 17 വരെയുള്ള ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**ചോദ്യം 15:** നാമവിശേഷണം (Adjective) കണ്ടെത്തി എഴുതുക.\n- (ക) തിരിച്ചറിയൽ\n- (ഖ) നിലവിലുള്ള\n- (ഗ) ബഹുത് (വളരെ)\n- (ഘ) മലിനീകരണം",
    "answer_malayalam": "**(ഗ) ബഹുത് (വളരെ)**"
  },
  {
    "question_number": 16,
    "marks": 1,
    "question_hindi": "**अनुच्छेद:** प्लास्टिक प्रदूषण हर जगह मौजूद है... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 16:** नमूने के अनुसार वाक्य बदलकर लिखें। \n\n**नमूना:** प्लास्टिक प्रदूषण बढ़ता है। -> प्लास्टिक प्रदूषण बढ़ेगा। \n**प्रश्न:** प्लास्टिक के कारण बीमारियाँ बढ़ती हैं। -> ............... ।",
    "question_english": "**Passage:** Plastic pollution is present everywhere... [Passage provided above]\n\n**Question 16:** Change and write the sentence according to the example.\n\n**Example:** Plastic pollution increases. -> Plastic pollution will increase.\n**Question:** Diseases increase due to plastic. -> ............... .",
    "answer_hindi": "**उत्तर:** प्लास्टिक के कारण बीमारियाँ बढ़ेंगी।",
    "answer_english": "**Answer:** Diseases will increase due to plastic.",
    "question_malayalam": "**ചോദ്യം 16:** മാതൃകയനുസരിച്ച് വാക്യം മാറ്റി എഴുതുക. മാതൃക: പ്ലാസ്റ്റിക് മലിനീകരണം കൂടുന്നു -> പ്ലാസ്റ്റിക് മലിനീകരണം കൂടും. ചോദ്യം: പ്ലാസ്റ്റിക് കാരണം രോഗങ്ങൾ കൂടുന്നു -> ...............",
    "answer_malayalam": "**ഉത്തരം:** പ്ലാസ്റ്റിക് കാരണം രോഗങ്ങൾ കൂടും."
  },
  {
    "question_number": 17,
    "marks": 2,
    "question_hindi": "**अनुच्छेद:** प्लास्टिक प्रदूषण हर जगह मौजूद है... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 17:** प्लास्टिक प्रदूषण कम करने का पहला कदम क्या है?",
    "question_english": "**Passage:** Plastic pollution is present everywhere... [Passage provided above]\n\n**Question 17:** What is the first step to reduce plastic pollution?",
    "answer_hindi": "गद्यांश के अनुसार, प्लास्टिक प्रदूषण को कम करने का पहला कदम निम्नलिखित है:\n\n- **पहचान करना:** उन 'एकल-उपयोग' (सिंगल-यूज़) और कम मूल्य वाले प्लास्टिक उत्पादों की पहचान करना।\n- **उन्हें हटाना:** ऐसे प्लास्टिक को उपयोग से हमेशा के लिए हटाना या प्रतिबंधित करना।\n\n**कारण:** ऐसा करना इसलिए ज़रूरी है क्योंकि इन प्लास्टिक उत्पादों का पुनर्चक्रण (रिसाइकलिंग) बहुत कम हो पाता है, जिससे ये पर्यावरण में प्रदूषण का मुख्य कारण बनते हैं।",
    "answer_english": "According to the passage, the first step to reduce plastic pollution is as follows:\n\n- **Identification:** Identifying those 'single-use' and low-value plastic products.\n- **Removal:** Permanently eliminating or banning the use of such plastics.\n\n**Reason:** This is necessary because these plastic products are rarely recycled, making them a major cause of environmental pollution.",
    "question_malayalam": "**ചോദ്യം 17:** പ്ലാസ്റ്റിക് മലിനീകരണം കുറയ്ക്കാനുള്ള ആദ്യപടി എന്താണ്?",
    "answer_malayalam": "ലേഖനമനുസരിച്ച് പ്ലാസ്റ്റിക് മലിനീകരണം കുറയ്ക്കാനുള്ള ആദ്യ പടികൾ ഇവയാണ്:\n\n- **തിരിച്ചറിയുക:** ഒറ്റത്തവണ മാത്രം ഉപയോഗിക്കുന്നതും (single-use) റീസൈക്കിൾ ചെയ്യാൻ കഴിയാത്തതുമായ പ്ലാസ്റ്റിക് ഉൽപ്പന്നങ്ങളെ തിരിച്ചറിയുക.\n- **ഒഴിവാക്കുക:** അത്തരം പ്ലാസ്റ്റിക്കുകൾ ഉപയോഗത്തിൽ നിന്ന് എന്നെന്നേക്കുമായി ഒഴിവാക്കുകയോ നിരോധിക്കുകയോ ചെയ്യുക.\n\n**കാരണം:** ഇത്തരം ഉൽപ്പന്നങ്ങൾ റീസൈക്കിൾ ചെയ്യാൻ പ്രയാസമായതിനാലാണ് ഇങ്ങനെ ചെയ്യുന്നത്."
  }
];

const set2: HindiSampleQuestion[] = [
  {
    "question_number": 1,
    "marks": 1,
    "question_hindi": "**सूचना:** 'दिल्ली में उनींदे' संस्मरण का यह अंश पढ़कर प्रश्न 1 और 2 के उत्तर लिखें।\n\n**अनुच्छेद:** “आपका मतलब, आप इस तीन फीट लंबी पिछली सीट पर सोते हैं?” “हाँ।” “और आपकी चीज़ें?” \"उनपर आप बैठी हैं...\" वह बताता है कि जिस सीट पर मैं बैठी हूँ, उसके नीचे उसका बक्सा है, जिसमें एक कंबल है, एक जोड़ी कपड़े हैं और एक कटोरा है। कटोरा पानी पीने के काम भी आता है और खाना रखने के भी। \"आप खाना कहाँ खाते हैं?” “किसी भी ढाबे में।”\n\n**प्रश्न 1:** ऑटोवाला राजा राम कहाँ सोता है?\n- (क) ढाबे में\n- (ख) ऑटो में\n- (ग) नए घर\n- (घ) अस्पताल में",
    "question_english": "**Instruction:** Read this excerpt from the memoir 'Dilli Mein Uninde' and answer questions 1 and 2.\n\n**Passage:** \"You mean, you sleep on this three feet long back seat?\" \"Yes.\" \"And your things?\" \"You are sitting on them...\" he tells me that under the seat I am sitting on, there is his box, which contains a blanket, a pair of clothes, and a bowl. The bowl is used for drinking water and also for keeping food. \"Where do you eat?\" \"At any dhaba.\"\n\n**Question 1:** Where does the auto driver Raja Ram sleep?\n- (a) In a dhaba\n- (b) In the auto\n- (c) In a new house\n- (d) In a hospital",
    "answer_hindi": "**(ख) ऑटो में**",
    "answer_english": "**(b) In the auto**",
    "question_malayalam": "**സൂചന:** 'ഡൽഹിയിൽ ഉറക്കമില്ലാത്തവർ' (Dilli Mein Uninde) എന്ന ഓർമ്മക്കുറിപ്പിലെ ഈ ഭാഗം വായിച്ച് 1, 2 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** “അതായത്, നിങ്ങൾ ഈ മൂന്നടി നീളമുള്ള പിൻസീറ്റിലാണോ ഉറങ്ങുന്നത്?” “അതെ.” “പിന്നെ നിങ്ങളുടെ സാധനങ്ങളോ?” \"അവയുടെ മുകളിലാണ് നിങ്ങൾ ഇരിക്കുന്നത്...\" ഞാൻ ഇരിക്കുന്ന സീറ്റിന് താഴെ അയാളുടെ ഒരു പെട്ടിയുണ്ടെന്ന് അയാൾ പറയുന്നു. അതിൽ ഒരു പുതപ്പും ഒരു ജോഡി വസ്ത്രവും ഒരു പാത്രവുമുണ്ട്. ആ പാത്രം വെള്ളം കുടിക്കാനും ഭക്ഷണം കഴിക്കാനും ഉപയോഗിക്കുന്നു. \"നിങ്ങൾ എവിടെ നിന്നാണ് ഭക്ഷണം കഴിക്കുന്നത്?” “ഏതെങ്കിലും ധാബയിൽ നിന്ന്.”\n\n**ചോദ്യം 1:** ഓട്ടോ ഡ്രൈവർ രാജാറാം എവിടെയാണ് ഉറങ്ങുന്നത്?\n- (ക) ധാബയിൽ\n- (ഖ) ഓട്ടോയിൽ\n- (ഗ) പുതിയ വീട്ടിൽ\n- (ഘ) ആശുപത്രിയിൽ",
    "answer_malayalam": "**(ഖ) ഓട്ടോയിൽ**"
  },
  {
    "question_number": 2,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** “आपका मतलब, आप इस तीन फीट लंबी पिछली सीट पर सोते हैं?”... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 2:** इस प्रसंग के आधार पर ऑटोवाला और लेखिका के बीच की बातचीत लिखें।",
    "question_english": "**Passage:** \"You mean, you sleep on this three feet long back seat?\"... [Passage provided above]\n\n**Question 2:** Write the conversation between the auto driver and the author based on this context.",
    "answer_hindi": "**लेखिका** (हैरानी से): आपका मतलब, आप इस तीन फीट लंबी पिछली सीट पर सोते हैं?\n\n**राजाराम** (सहजता से): हाँ जी, यही मेरा बिस्तर है।\n\n**लेखिका** (और भी आश्चर्यचकित होते हुए): और आपकी चीज़ें, कपड़े-लत्ते कहाँ हैं?\n\n**राजाराम** (मुस्कुराते हुए): उन पर तो आप बैठी हैं जी। जिस सीट पर आप हैं, उसके नीचे मेरा एक छोटा सा बक्सा है। उसी में मेरा एक कंबल, एक जोड़ी कपड़े और एक कटोरा है।\n\n**लेखिका**: बस इतनी सी चीज़ें? और वह कटोरा किस काम आता है?\n\n**राजाराम**: जी, वही कटोरा पानी पीने के काम भी आता है और खाना रखने के भी।\n\n**लेखिका** (करुणा भाव से): तो आप खाना कहाँ खाते हैं?\n\n**राजाराम**: कहीं भी... किसी भी ढाबे में खा लेता हूँ जी।",
    "answer_english": "**Author** (with surprise): You mean, you sleep on this three feet long back seat?\n\n**Rajaram** (casually): Yes, this is my bed.\n\n**Author** (even more surprised): And where are your things, your clothes?\n\n**Rajaram** (smiling): You are sitting on them. Under the seat you are on, there is my small box. In it, I have a blanket, a pair of clothes, and a bowl.\n\n**Author**: Just these few things? And what is that bowl used for?\n\n**Rajaram**: Well, that bowl is used for drinking water and also for keeping food.\n\n**Author** (with compassion): Then where do you eat?\n\n**Rajaram**: Anywhere... I eat at any dhaba.",
    "question_malayalam": "**അനുച്ഛേദം:** “അതായത്, നിങ്ങൾ ഈ മൂന്നടി നീളമുള്ള പിൻസീറ്റിലാണോ ഉറങ്ങുന്നത്?”... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 2:** ഈ സന്ദർഭത്തെ ആസ്പദമാക്കി ഓട്ടോ ഡ്രൈവറും എഴുത്തുകാരിയും തമ്മിലുള്ള സംഭാഷണം തയ്യാറാക്കുക.",
    "answer_malayalam": "**എഴുത്തുകാരി** (അത്ഭുതത്തോടെ): അതായത്, നിങ്ങൾ ഈ മൂന്നടി നീളമുള്ള പിൻസീറ്റിലാണോ ഉറങ്ങുന്നത്?\n\n**രാജാറാം** (സാവധാനം): അതെ, ഇതാണ് എന്റെ കിടക്ക.\n\n**എഴുത്തുകാരി** (കൂടുതൽ അത്ഭുതപ്പെട്ടുകൊണ്ട്): പിന്നെ നിങ്ങളുടെ സാധനങ്ങളും വസ്ത്രങ്ങളുമൊക്കെ എവിടെയാണ്?\n\n**രാജാറാം** (ചിരിച്ചുകൊണ്ട്): അവയുടെ മുകളിലാണല്ലോ നിങ്ങൾ ഇരിക്കുന്നത്. നിങ്ങൾ ഇരിക്കുന്ന സീറ്റിന് താഴെ എനിക്കൊരു ചെറിയ പെട്ടിയുണ്ട്. അതിൽ ഒരു പുതപ്പും ഒരു ജോഡി വസ്ത്രവും ഒരു പാത്രവുമുണ്ട്.\n\n**എഴുത്തുകാരി**: ഇത്രയും സാധനങ്ങൾ മാത്രമോ? ആ പാത്രം എന്തിനാണ് ഉപയോഗിക്കുന്നത്?\n\n**രാജാറാം**: ഇത് വെള്ളം കുടിക്കാനും ഭക്ഷണം കഴിക്കാനും ഉപയോഗിക്കാം.\n\n**എഴുത്തുകാരി** (അലിവോടെ): അപ്പോൾ നിങ്ങൾ എവിടെ നിന്നാണ് ഭക്ഷണം കഴിക്കുന്നത്?\n\n**രാജാറാം**: എവിടെയെങ്കിലും... ഏതെങ്കിലും ധാബയിൽ നിന്ന് കഴിക്കും."
  },
  {
    "question_number": 3,
    "marks": 2,
    "question_hindi": "**सूचना:** 'खिड़की' लघुकथा का यह अंश पढ़कर प्रश्न 3 और 4 के उत्तर लिखें。\n\n**अनुच्छेद:** \"दीदी जम्मू की शॉल ले लो! बहुत बढ़िया है!\" रंग-बिरंगी शॉलों का भारी गठर उठाए एक साँवली-सलोनी कजरारी आँखों वाली युवती पत्नी को इसरार करने लगी। \"कितने की है?\" \"अढ़ाई सौ की!\" \"इत्ती महँगी!\" \"ज़्यादा पीस लोगी, तो कम कर दूँगी।\" \"मुझे दुकान खोलनी है क्या?\"\n\n**प्रश्न 3:** युवती ने पत्नी को क्यों इसरार किया ?",
    "question_english": "**Instruction:** Read this excerpt from the short story 'Khidki' and answer questions 3 and 4.\n\n**Passage:** \"Sister, buy a Jammu shawl! It's very nice!\" A dark, beautiful young woman with dark eyes, carrying a heavy bundle of colorful shawls, started insisting to the wife. \"How much is it for?\" \"Two hundred and fifty!\" \"So expensive!\" \"If you buy more pieces, I will reduce the price.\" \"Do I have to open a shop?\"\n\n**Question 3:** Why did the young woman insist to the wife?",
    "answer_hindi": "युवती ने लेखिका की पत्नी को शॉल खरीदने के लिए इसलिए इसरार किया (ज़िद की) क्योंकि वह बहुत गरीब थी और किसी भी तरह अपनी शॉलें बेचकर कुछ पैसे कमाना चाहती थी, ताकि वह अपनी रोज़ी-रोटी और आजीविका चला सके।",
    "answer_english": "The young woman insisted that the author's wife buy a shawl because she was very poor and desperately wanted to sell her shawls to earn some money, so that she could make a living and feed herself.",
    "question_malayalam": "**സൂചന:** 'ഖിഡ്കി' (ജനൽ) എന്ന ചെറുകഥയിലെ ഈ ഭാഗം വായിച്ച് 3, 4 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** \"ചേച്ചീ, ജമ്മുവിലെ ഷാൾ എടുത്തോളൂ! വളരെ നല്ലതാണ്!\" വർണ്ണാഭമായ ഷാളുകളുടെ വലിയൊരു കെട്ടുമായി വന്ന മനോഹരമായ കണ്ണുകളുള്ള ഒരു യുവതി ഭാര്യയോട് നിർബന്ധിക്കാൻ തുടങ്ങി. \"എത്രയാണ് വില?\" \"ഇരുനൂറ്റമ്പത് രൂപ!\" \"ഇത്രയും വിലയോ!\" \"കൂടുതൽ എണ്ണം എടുക്കുകയാണെങ്കിൽ വില കുറച്ചുതരാം.\" \"എനിക്ക് കട തുടങ്ങാനൊന്നുമല്ലല്ലോ?\" \n\n**ചോദ്യം 3:** യുവതി ഭാര്യയെ എന്തിനാണ് നിർബന്ധിച്ചത്?",
    "answer_malayalam": "താൻ കൊണ്ടുവന്ന ഷാളുകൾ വിറ്റ് കുറച്ച് പണം സമ്പാദിക്കാനും അതിലൂടെ തന്റെ ജീവിതോപാധി കണ്ടെത്താനും വേണ്ടിയാണ് ആ യുവതി എഴുത്തുകാരന്റെ ഭാര്യയെ ഷാൾ വാങ്ങാൻ നിർബന്ധിച്ചത്. അവൾ വളരെ ദരിദ്രയായിരുന്നു."
  },
  {
    "question_number": 4,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** \"दीदी जम्मू की शॉल ले लो! बहुत बढ़िया है!\"... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 4:** लघुकथा के इस अंश के आधार पर पटकथा का एक दृश्य लिखें।",
    "question_english": "**Passage:** \"Sister, buy a Jammu shawl! It's very nice!\"... [Passage provided above]\n\n**Question 4:** Write a screenplay scene based on this excerpt of the short story.",
    "answer_hindi": "**दृश्य विवरण:**\n- **स्थान:** सड़क के किनारे, एक रुकी हुई कार के पास।\n- **समय:** दिन का समय।\n- **पात्र:** कार में बैठी पत्नी और एक साँवली-सलोनी शॉल बेचने वाली युवती।\n\n*(युवती कंधे पर रंग-बिरंगी शॉलों का भारी गट्ठर उठाए आती है और कार की खिड़की के पास खड़ी पत्नी से गुज़ारिश करती है।)*\n\n**युवती** (उत्साह और उम्मीद से): दीदी जम्मू की शॉल ले लो! बहुत बढ़िया है!\n\n**पत्नी** (शॉल को परखते हुए, रूखेपन से): कितने की है?\n\n**युवती**: अढ़ाई सौ की!\n\n**पत्नी** (आँखें तरेर कर, व्यंग्य से): इत्ती महँगी!\n\n**युवती** (दाम कम करने का लालच देते हुए): ज़्यादा पीस लोगी, तो कम कर दूँगी दीदी।\n\n**पत्नी** (कठोरता से मुँह बनाते हुए): मुझे दुकान खोलनी है क्या? जो मैं ज़्यादा पीस लूँ!",
    "answer_english": "**Scene Details:**\n- **Location:** By the roadside, near a parked car.\n- **Time:** Daytime.\n- **Characters:** The wife sitting in the car and a dark, beautiful shawl-selling young woman.\n\n*(The young woman approaches carrying a heavy bundle of colorful shawls on her shoulders and requests the wife standing near the car window.)*\n\n**Young Woman** (with enthusiasm and hope): Sister, buy a Jammu shawl! It's very nice!\n\n**Wife** (inspecting the shawl, dryly): How much is it for?\n\n**Young Woman**: Two hundred and fifty!\n\n**Wife** (glaring, with sarcasm): So expensive!\n\n**Young Woman** (tempting with a discount): If you buy more pieces, I will reduce the price, sister.\n\n**Wife** (making a harsh face): Do I have to open a shop? Why would I buy more pieces!",
    "question_malayalam": "**അനുച്ഛേദം:** \"ചേച്ചീ, ജമ്മുവിലെ ഷാൾ എടുത്തോളൂ! വളരെ നല്ലതാണ്!\"... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 4:** ചെറുകഥയിലെ ഈ സന്ദർഭത്തെ ആസ്പദമാക്കി ഒരു തിരക്കഥാ രംഗം തയ്യാറാക്കുക.",
    "answer_malayalam": "**രംഗ വിവരണം:**\n- **സ്ഥലം:** റോഡരികിൽ നിർത്തിയിട്ടിരിക്കുന്ന കാറിനടുത്ത്.\n- **സമയം:** പകൽ സമയം.\n- **കഥാപാത്രങ്ങൾ:** കാറിലിരിക്കുന്ന ഭാര്യയും ഷാൾ വിൽക്കുന്ന യുവതിയും.\n\n*(യുവതി തോളിൽ ഷാൾക്കെട്ടുമായി വരുന്നു, കാറിന്റെ ജനലിനടുത്ത് നിൽക്കുന്ന ഭാര്യയോട് അഭ്യർത്ഥിക്കുന്നു.)*\n\n**യുവതി** (പ്രതീക്ഷയോടെ): ചേച്ചീ, ജമ്മുവിലെ ഷാൾ എടുത്തോളൂ! വളരെ നല്ലതാണ്!\n\n**ഭാര്യ** (ഷാൾ പരിശോധിച്ചുകൊണ്ട്, പരുഷമായി): എത്രയാണ് ഇതിന്?\n\n**യുവതി**: ഇരുനൂറ്റമ്പത് രൂപ!\n\n**ഭാര്യ** (പരിഹാസത്തോടെ): ഇത്രയും വിലയോ!\n\n**യുവതി**: കൂടുതൽ എണ്ണം എടുക്കുകയാണെങ്കിൽ വില കുറച്ചുതരാം ചേച്ചീ.\n\n**ഭാര്യ** (മുഖം തിരിച്ചുപിടിച്ച്): എനിക്ക് കട തുടങ്ങാനൊന്നുമല്ല. എന്തിനാണ് ഞാൻ കൂടുതൽ എണ്ണം എടുക്കുന്നത്!"
  },
  {
    "question_number": 5,
    "marks": 3,
    "question_hindi": "**सूचना:** 'रैन बसेरे में...' यात्रावृत्त का यह अंश पढ़कर प्रश्न 5 और 6 के उत्तर लिखें।\n\n**अनुच्छेद:** पड़ोस के युवक से कहा, \"रात को एक पागल ने हमें बहुत परेशान किया। घंटे-डेढ़ घंटे तक हमें इधर डराता-धमकाता रहा। वह हमें पीट भी सकता था।\"\n\n**प्रश्न 5:** वाक्य विस्तार करें।\n(रात को, मंदिर में, हमें)\nपागल ने परेशान किया।",
    "question_english": "**Instruction:** Read this excerpt from the travelogue 'Rain Basere Mein...' and answer questions 5 and 6.\n\n**Passage:** Said to the neighborhood youth, \"At night a madman troubled us a lot. For an hour or an hour and a half, he kept threatening us here. He could have even beaten us.\"\n\n**Question 5:** Expand the sentence.\n(at night, in the temple, us)\nThe madman troubled.",
    "answer_hindi": "**विस्तारित वाक्य:**\nरात को मंदिर में एक पागल ने हमें बहुत परेशान किया।",
    "answer_english": "**Expanded Sentence:**\nAt night in the temple, a madman troubled us a lot.",
    "question_malayalam": "**സൂചന:** 'റൈൻ ബസേര മേം...' (രാത്രി പാർപ്പിടത്തിൽ) എന്ന യാത്രാവിവരണത്തിലെ ഈ ഭാഗം വായിച്ച് 5, 6 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** അയൽപക്കത്തെ യുവാവിനോട് പറഞ്ഞു, \"രാത്രിയിൽ ഒരു ഭ്രാന്തൻ ഞങ്ങളെ വല്ലാതെ ശല്യപ്പെടുത്തി. ഒന്നൊന്നര മണിക്കൂർ അയാൾ ഞങ്ങളെ പേടിപ്പിച്ചു കൊണ്ടിരുന്നു. അയാൾ ഞങ്ങളെ ഉപദ്രവിക്കുമായിരുന്നു.\"\n\n**ചോദ്യം 5:** വാക്യം വികസിപ്പിക്കുക.\n(രാത്രിയിൽ, ക്ഷേത്രത്തിൽ, ഞങ്ങളെ)\nഭ്രാന്തൻ ശല്യപ്പെടുത്തി.",
    "answer_malayalam": "**വികസിപ്പിച്ച വാക്യം:**\nരാത്രിയിൽ ക്ഷേത്രത്തിൽ വെച്ച് ഒരു ഭ്രാന്തൻ ഞങ്ങളെ വല്ലാതെ ശല്യപ്പെടുത്തി."
  },
  {
    "question_number": 6,
    "marks": 2,
    "question_hindi": "**अनुच्छेद:** पड़ोस के युवक से कहा... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 6:** निम्नलिखित वाक्य के रेखांकित सर्वनाम 'वह' और 'हम' किस-किसकी ओर संकेत देते हैं?\n'वह हमें पीट भी सकता था।'\n- वह :\n- हम :",
    "question_english": "**Passage:** Said to the neighborhood youth... [Passage provided above]\n\n**Question 6:** To whom do the underlined pronouns 'vah' (he) and 'hum' (us) refer in the following sentence?\n'He could have even beaten us.'\n- He (vah):\n- Us (hum):",
    "answer_hindi": "- **वह:** पागल आदमी की ओर संकेत करता है।\n- **हम:** लेखक (संस्मरणकार) और छोटू की ओर संकेत करता है।",
    "answer_english": "- **He (vah):** refers to the madman.\n- **Us (hum):** refers to the author (memoirist) and Chhotu.",
    "question_malayalam": "**അനുച്ഛേദം:** അയൽപക്കത്തെ യുവാവിനോട് പറഞ്ഞു... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 6:** നൽകിയിരിക്കുന്ന വാക്യത്തിലെ അടിവരയിട്ട സർവ്വനാമങ്ങൾ ('അയാൾ', 'ഞങ്ങൾ') ആരെയൊക്കെയാണ് സൂചിപ്പിക്കുന്നത്?\n'അയാൾ ഞങ്ങളെ ഉപദ്രവിക്കുമായിരുന്നു.'\n- അയാൾ :\n- ഞങ്ങൾ :",
    "answer_malayalam": "- **അയാൾ:** ഭ്രാന്തനായ മനുഷ്യനെ സൂചിപ്പിക്കുന്നു.\n- **ഞങ്ങൾ:** എഴുത്തുകാരനെയും (യാത്രികൻ) ചോട്ടുവിനെയും സൂചിപ്പിക്കുന്നു."
  },
  {
    "question_number": 7,
    "marks": 1,
    "question_hindi": "**सूचना:** 'व्हाइट कैप' कहानी का यह अंश पढ़ें और 7 से 9 तक के प्रश्नों के उत्तर लिखें।\n\n**अनुच्छेद:** \"अब जब तुम लौटोगे केशव, तो हमारी टीम से खेलना।\" पहली टीम के कप्तान ने केशव को ऑफ़र दिया। लड़कों ने अपने हाथों का बल्ला, पैड़, स्टम्प, बॉल और शील्ड जो किसी टीम की नहीं हो सकी थी, ऑटो के पीछे की जगह में केशव को दिखाते हुए धर दिया।\n\n**प्रश्न 7:** पहली टीम के कप्तान ने केशव को क्या वादा दिया ?\n- (क) अपनी टीम में खेलने का\n- (ख) अपने साथ स्कूल ले जाने का\n- (ग) अपनी टीम के कप्तान बनने का\n- (घ) व्हाइट कैप खरीद देने का",
    "question_english": "**Instruction:** Read this excerpt from the story 'White Cap' and answer questions 7 to 9.\n\n**Passage:** \"Now when you return, Keshav, play for our team.\" The captain of the first team offered Keshav. The boys placed the bat, pad, stump, ball, and the shield which could not belong to any team, in the space behind the auto, showing them to Keshav.\n\n**Question 7:** What promise did the captain of the first team give to Keshav?\n- (a) To play in his team\n- (b) To take him to school along with him\n- (c) To become the captain of his team\n- (d) To buy a white cap",
    "answer_hindi": "**(क) अपनी टीम में खेलने का**",
    "answer_english": "**(a) To play in his team**",
    "question_malayalam": "**സൂചന:** 'വൈറ്റ് ക്യാപ്' എന്ന കഥയിലെ ഈ ഭാഗം വായിച്ച് 7 മുതൽ 9 വരെയുള്ള ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** \"കേശവ്, നീ തിരിച്ചുവരുമ്പോൾ ഞങ്ങളുടെ ടീമിന് വേണ്ടി കളിക്കണം.\" ഒന്നാമത്തെ ടീമിന്റെ ക്യാപ്റ്റൻ കേശവിനോട് പറഞ്ഞു. ആർക്കും ലഭിക്കാതിരുന്ന ഷീൽഡും ബാറ്റും പാഡും പന്തുമെല്ലാം കുട്ടികൾ കേശവിനെ കാണിച്ചുകൊണ്ട് ഓട്ടോയുടെ പിന്നിൽ വെച്ചുകൊടുത്തു.\n\n**ചോദ്യം 7:** ഒന്നാമത്തെ ടീമിന്റെ ക്യാപ്റ്റൻ കേശവിന് നൽകിയ വാഗ്ദാനം എന്താണ്?\n- (ക) സ്വന്തം ടീമിൽ കളിപ്പിക്കാമെന്ന്\n- (ഖ) കൂടെ സ്കൂളിൽ കൊണ്ടുപോകാമെന്ന്\n- (ഗ) സ്വന്തം ടീമിന്റെ ക്യാപ്റ്റനാക്കാമെന്ന്\n- (ഘ) വൈറ്റ് ക്യാപ് വാങ്ങിത്തരാമെന്ന്",
    "answer_malayalam": "**(ക) സ്വന്തം ടീമിൽ കളിപ്പിക്കാമെന്ന്**"
  },
  {
    "question_number": 8,
    "marks": 2,
    "question_hindi": "**अनुच्छेद:** \"अब जब तुम लौटोगे केशव... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 8:** कॉलोनी के लड़कों ने केशव को कैसे विदा दिया?",
    "question_english": "**Passage:** \"Now when you return, Keshav... [Passage provided above]\n\n**Question 8:** How did the boys of the colony bid farewell to Keshav?",
    "answer_hindi": "कॉलोनी के लड़कों ने केशव को बहुत भावभीनी और सम्मानजनक विदाई दी। जाते समय उन्होंने अपने हाथों का सारा खेल का सामान (बल्ला, पैड, स्टम्प, बॉल) और वह जीती हुई शील्ड (जो उस दिन किसी टीम की नहीं हो सकी थी) ऑटो के पीछे की जगह में केशव को दिखाते हुए रख दी, मानो वे उसे उसके असली विजेता को सौंप रहे हों।",
    "answer_english": "The boys of the colony gave Keshav a very emotional and respectful farewell. While he was leaving, they placed all their sports equipment (bat, pad, stump, ball) and the winning shield (which could not belong to any team that day) in the space behind the auto, showing them to Keshav, as if they were handing it over to its true rightful winner.",
    "question_malayalam": "**അനുച്ഛേദം:** \"കേശവ്, നീ തിരിച്ചുവരുമ്പോൾ... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 8:** കോളനിയിലെ കുട്ടികൾ കേശവിന് എങ്ങനെയാണ് യാത്രയയപ്പ് നൽകിയത്?",
    "answer_malayalam": "കോളനിയിലെ കുട്ടികൾ കേശവിന് വളരെ വൈകാരികവും ആദരവ് നിറഞ്ഞതുമായ യാത്രയയപ്പാണ് നൽകിയത്. അവൻ പോകുമ്പോൾ തങ്ങളുടെ കളിപ്പാട്ടങ്ങളും ഉപകരണങ്ങളും (ബാറ്റ്, പാഡ്, പന്ത്) അന്ന് ആർക്കും സ്വന്തമാക്കാൻ കഴിയാതിരുന്ന ഷീൽഡും അവർ അവനെ കാണിച്ചുകൊണ്ട് ഓട്ടോയുടെ പിന്നിൽ വെച്ചുകൊടുത്തു. അത് കേശവിനെ ഒരു യഥാർത്ഥ വിജയിയായി അവർ അംഗീകരിച്ചതിന് തെളിവായിരുന്നു."
  },
  {
    "question_number": 9,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** \"अब जब तुम लौटोगे केशव... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 9:** केशव ने अपने घर पहुंचकर आज के अनुभवों को डायरी में लिखा। केशव की संभावित डायरी लिखें।",
    "question_english": "**Passage:** \"Now when you return, Keshav... [Passage provided above]\n\n**Question 9:** Keshav wrote his experiences of the day in a diary after reaching home. Write Keshav's probable diary.",
    "answer_hindi": "**२० मार्च २०२५, रात ९ बजे**\n\n*प्रिय डायरी,*\n\nआज का दिन मेरे जीवन का सबसे अनोखा और खुशी भरा दिन था। आज जब मैं अस्पताल जाने के लिए निकल रहा था, तो कॉलोनी के सभी लड़कों ने मुझे एक हीरो की तरह विदा किया। जो लड़के मुझे पहले अपनी टीम में खेलने तक नहीं देते थे, आज पहली टीम के कप्तान ने खुद मुझे अपनी टीम से खेलने का न्योता दिया!\n\nसबसे ज़्यादा भावुक पल तो वह था जब लड़कों ने अपना सारा क्रिकेट का सामान—बल्ला, पैड, स्टम्प, बॉल और यहाँ तक कि वह विजेता शील्ड भी—मेरे ऑटो के पीछे रख दी। मुझे ऐसा लगा जैसे मैंने कोई बहुत बड़ी जीत हासिल कर ली हो। उनका यह प्यार और सम्मान देखकर मेरी आँखें भर आईं। अब मैं जल्दी से पूरी तरह ठीक होकर उनके साथ मैदान में खेलना चाहता हूँ।\n\n*- केशव*",
    "answer_english": "**March 20, 2025, 9 PM**\n\n*Dear Diary,*\n\nToday was the most unique and happiest day of my life. Today, when I was leaving for the hospital, all the boys in the colony bid me farewell like a hero. The boys who wouldn't even let me play in their team before, today the captain of the first team himself invited me to play for his team!\n\nThe most emotional moment was when the boys put all their cricket gear—bat, pad, stumps, ball, and even the winning shield—behind my auto. I felt as if I had achieved a very big victory. Seeing their love and respect, my eyes welled up with tears. Now I just want to recover quickly and play on the field with them.\n\n*- Keshav*",
    "question_malayalam": "**അനുച്ഛേദം:** \"കേശവ്, നീ തിരിച്ചുവരുമ്പോൾ... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 9:** വീട്ടിലെത്തിയ കേശവ് അന്നത്തെ അനുഭവങ്ങൾ ഡയറിയിൽ കുറിച്ചു. കേശവിന്റെ ഡയറി തയ്യാറാക്കുക.",
    "answer_malayalam": "**2025 മാർച്ച് 20, രാത്രി 9 മണി**\n\n*പ്രിയ ഡയറി,*\n\nഇന്ന് എന്റെ ജീവിതത്തിലെ ഏറ്റവും സന്തോഷകരമായ ദിവസമായിരുന്നു. ആശുപത്രിയിലേക്ക് പോകുമ്പോൾ കോളനിയിലെ കുട്ടികൾ എന്നെ ഒരു ഹീറോയെപ്പോലെയാണ് യാത്രയാക്കിയത്. എന്നെ ടീമിൽ ഉൾപ്പെടുത്താതിരുന്ന ആ പഴയ കുട്ടികൾക്കിടയിൽ നിന്ന് ഒന്നാമത്തെ ടീമിന്റെ ക്യാപ്റ്റൻ തന്നെ എന്നെ തന്റെ ടീമിൽ കളിക്കാൻ ക്ഷണിച്ചു!\n\nഏറ്റവും വൈകാരികമായ നിമിഷം കുട്ടികൾ അവരുടെ കളിസാമഗ്രികളും ആ ഷീൽഡും എന്റെ ഓട്ടോയിൽ വെച്ചതായിരുന്നു. എനിക്ക് വലിയൊരു വിജയം ലഭിച്ചതുപോലെ തോന്നി. അവരുടെ സ്നേഹം കണ്ട് എന്റെ കണ്ണുകൾ നിറഞ്ഞുപോയി. വേഗം സുഖം പ്രാപിച്ച് അവരോടൊപ്പം മൈതാനത്ത് കളിക്കണം.\n\n*- കേശവ്*"
  },
  {
    "question_number": 10,
    "marks": 2,
    "question_hindi": "**सूचना:** 'गैलीलियो' शीर्षक लेख का यह अंश पढ़कर प्रश्न 10 और 11 के उत्तर लिखें।\n\n**अनुच्छेद:** गैलीलियो ने आगे चलकर ढेर सारी दूसरी खोजें कीं। इनमें पहली दूरबीन भी शामिल है। गैलीलियो ने विज्ञान में प्रयोग तथा गणित को सही जगह देकर खुद आधुनिक या नए विज्ञान की खोज की।\n\n**प्रश्न 10:**\n(क) 'इनमें पहली दूरबीन भी शामिल है।' इस वाक्य से विशेषण शब्द चुनकर लिखें\n(ख) नमूने के अनुसार लिखें-\nइनमें = ये + में\nउनमें = ___ + ___",
    "question_english": "**Instruction:** Read this excerpt from the article 'Galileo' and answer questions 10 and 11.\n\n**Passage:** Galileo went on to make many other discoveries. This includes the first telescope as well. By giving experiment and mathematics their rightful place in science, Galileo himself discovered modern or new science.\n\n**Question 10:**\n(a) 'This includes the first telescope as well.' Choose and write the adjective word from this sentence.\n(b) Write according to the example-\ninmein = ye + mein\nunmein = ___ + ___",
    "answer_hindi": "**(क)** विशेषण शब्द: **पहली**\n**(ख)** उनमें = **वे** + **में**",
    "answer_english": "**(a)** Adjective word: **First (Pehli)**\n**(b)** unmein = **ve** + **mein**",
    "question_malayalam": "**സൂചന:** 'ഗലീലിയോ' എന്ന ലേഖനത്തിലെ ഈ ഭാഗം വായിച്ച് 10, 11 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** ഗലീലിയോ പിന്നീട് ഒട്ടേറെ കണ്ടെത്തലുകൾ നടത്തി. ആദ്യത്തെ ടെലിസ്കോപ്പും ഇതിൽ ഉൾപ്പെടുന്നു. ശാസ്ത്രത്തിൽ പരീക്ഷണങ്ങൾക്കും ഗണിതശാസ്ത്രത്തിനും അർഹമായ പ്രാധാന്യം നൽകിക്കൊണ്ട് ഗലീലിയോ ആധുനിക ശാസ്ത്രത്തിന് തുടക്കം കുറിച്ചു.\n\n**ചോദ്യം 10:**\n(ക) 'ആദ്യത്തെ ടെലിസ്കോപ്പും ഇതിൽ ഉൾപ്പെടുന്നു.' - ഈ വാക്യത്തിലെ നാമവിശേഷണം (Adjective) കണ്ടെത്തുക.\n(ഖ) മാതൃകയനുസരിച്ച് എഴുതുക-\nഇതിൽ = ഇത് + ഇൽ\nഅതിൽ = ___ + ___",
    "answer_malayalam": "**(ക)** നാമവിശേഷണം: **ആദ്യത്തെ**\n**(ഖ)** അതിൽ = **അത്** + **ഇൽ**"
  },
  {
    "question_number": 11,
    "marks": 2,
    "question_hindi": "**अनुच्छेद:** गैलीलियो ने आगे चलकर... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 11:** गैलीलियो ने कैसे नए विज्ञान की खोज की?",
    "question_english": "**Passage:** Galileo went on... [Passage provided above]\n\n**Question 11:** How did Galileo discover new science?",
    "answer_hindi": "उत्तर: गद्यांश के अनुसार, गैलीलियो ने विज्ञान के क्षेत्र में केवल पुरानी मान्यताओं पर निर्भर रहने के बजाय **प्रयोग (Experiments)** और **गणित (Mathematics)** को सही जगह और महत्व दिया। इसी वैज्ञानिक और तार्किक दृष्टिकोण को अपनाकर उन्होंने आधुनिक या नए विज्ञान की खोज की।",
    "answer_english": "According to the passage, instead of relying solely on old beliefs in the field of science, Galileo gave proper place and importance to **Experiments** and **Mathematics**. By adopting this scientific and logical approach, he discovered modern or new science.",
    "question_malayalam": "**അനുച്ഛേദം:** ഗലീലിയോ പിന്നീട് ഒട്ടേറെ... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 11:** ഗലീലിയോ എങ്ങനെയാണ് പുതിയ ശാസ്ത്രം കണ്ടെത്തിയത്?",
    "answer_malayalam": "പഴയ വിശ്വാസങ്ങളെ മാത്രം മുറുകെ പിടിക്കാതെ ശാസ്ത്രരംഗത്ത് പരീക്ഷണങ്ങൾക്കും (Experiments) ഗണിതശാസ്ത്രത്തിനും (Mathematics) കൃത്യമായ പ്രാധാന്യം നൽകിക്കൊണ്ടാണ് ഗലീലിയോ ആധുനിക ശാസ്ത്രം കണ്ടെത്തിയത്."
  },
  {
    "question_number": 12,
    "marks": 1,
    "question_hindi": "**सूचना:** 'दोहे' पढ़कर प्रश्न 12 और 13 के उत्तर लिखें।\n\n**दोहे:**\nऐसी बाणी बोलिए, मन का आपा खोय।\nअपना तन सीतल करें, औरन को सुख होय।।\n\nसाधू ऐसा चाहिए, जैसा सूप सुभाय।\nसार-सार को गहि रहै, थोथा देइ उड़ाय ।।\n\n**प्रस्ताव:**\n- (i) अपनी वाणी से तन-मन को शांत किया जा सकता है।\n- (ii) दूसरों को सताना सज्जनों का स्वभाव है।\n- (iii) अपनी बातों से दूसरों को सुख प्रदान करना है।\n- (iv) औरों को सताने से मन में शांति आती है\n\n**प्रश्न 12:** उपरोक्त दोहों के आधार पर सही प्रस्ताव क्या हैं?\n- (क) प्रस्ताव i और ii सही है।\n- (ख) प्रस्ताव iii और iv सही है।\n- (ग) प्रस्ताव i और iii सही है।\n- (घ) प्रस्ताव ii और iv सही है।",
    "question_english": "**Instruction:** Read the 'Dohe' (couplets) and answer questions 12 and 13.\n\n**Couplets:**\nAisi bani boliye, man ka aapa khoy.\nApna tan seetal karein, auran ko sukh hoy.\n\nSadhu aisa chahiye, jaisa soop subhay.\nSaar-saar ko gahi rahai, thotha dei uday.\n\n**Propositions:**\n- (i) Body and mind can be calmed with one's words.\n- (ii) Tormenting others is the nature of gentlemen.\n- (iii) One should provide happiness to others with their words.\n- (iv) Tormenting others brings peace to the mind.\n\n**Question 12:** Based on the above couplets, which propositions are correct?\n- (a) Propositions i and ii are correct.\n- (b) Propositions iii and iv are correct.\n- (c) Propositions i and iii are correct.\n- (d) Propositions ii and iv are correct.",
    "answer_hindi": "**(ग) प्रस्ताव i और iii सही है।**",
    "answer_english": "**(c) Propositions i and iii are correct.**",
    "question_malayalam": "**സൂചന:** താഴെ നൽകിയിരിക്കുന്ന ദോഹകൾ വായിച്ച് 12, 13 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**ദോഹകൾ:**\nമറ്റുള്ളവർക്ക് സന്തോഷം നൽകുന്നതും സ്വന്തം മനസ്സിനെ ശാന്തമാക്കുന്നതുമായ സംസാരം വേണം നാം ശീലിക്കാൻ.\n\nയഥാർത്ഥ ജ്ഞാനി എന്നത് 'സൂപിനെപ്പോലെ' (ചുള) ആയിരിക്കണം. അത് സത്തയെ മാത്രം സ്വീകരിക്കുകയും പാഴ്വസ്തുക്കളെ പുറന്തള്ളുകയും ചെയ്യുന്നു.\n\n**ചോദ്യം 12:** മുകളിൽ നൽകിയിരിക്കുന്ന വരികളെ ആസ്പദമാക്കി ശരിയായ പ്രസ്താവനകൾ ഏവ?\n- (i) സ്വന്തം സംസാരത്തിലൂടെ ശരീരത്തെയും മനസ്സിനെയും ശാന്തമാക്കാം.\n- (ii) മറ്റുള്ളവരെ ഉപദ്രവിക്കുന്നത് സജ്ജനങ്ങളുടെ സ്വഭാവമാണ്.\n- (iii) സ്വന്തം വാക്കുകളിലൂടെ മറ്റുള്ളവർക്ക് സന്തോഷം നൽകണം.\n- (iv) മറ്റുള്ളവരെ ദ്രോഹിക്കുന്നതിലൂടെ മനസ്സിൽ ശാന്തി ലഭിക്കുന്നു.\n\n- (ക) i ഉം ii ഉം\n- (ഖ) iii ഉം iv ഉം\n- (ഗ) i ഉം iii ഉം\n- (ഘ) ii ഉം iv ഉം",
    "answer_malayalam": "**(ഗ) i ഉം iii ഉം ശരിയാണ്**"
  },
  {
    "question_number": 13,
    "marks": 1,
    "question_hindi": "**दोहे:** ऐसी बाणी बोलिए... [ऊपर दिए गए दोहे]\n\n**प्रश्न 13:** 'सार्थक बातों को अपनाकर बेकार की बातों को छोडना है।' यह आशय वाली पंक्ति चुनकर लिखें।",
    "question_english": "**Couplets:** Aisi bani boliye... [Couplets provided above]\n\n**Question 13:** 'One should adopt meaningful things and leave useless things.' Choose and write the line with this meaning.",
    "answer_hindi": "**सार-सार को गहि रहै, थोथा देइ उड़ाय ।।**",
    "answer_english": "**Saar-saar ko gahi rahai, thotha dei uday ||** (Grasp the essence/substance, and let the chaff/useless blow away)",
    "question_malayalam": "**ചോദ്യം 13:** 'സാരമായ കാര്യങ്ങൾ സ്വീകരിക്കുകയും നിരർത്ഥകമായവ ഉപേക്ഷിക്കുകയും വേണം' - ഈ ആശയമുള്ള വരികൾ കണ്ടെത്തുക.",
    "answer_malayalam": "**സാർ-സാർ കോ ഗഹി രഹൈ, തോഥാ ദേഇ ഉഡായ ।।** (സത്തയെ മാത്രം സ്വീകരിക്കുക, പാഴ്വസ്തുക്കളെ പറത്തി വിടുക)"
  },
  {
    "question_number": 14,
    "marks": 1,
    "question_hindi": "**सूचना:** 'परी लड़की' कहानी का यह अंश पढ़कर प्रश्न 14 और 15 के उत्तर लिखें।\n\n**अनुच्छेद:** “क्या तुम्हारे पास कुछ खाना है?” – मैं फुसफुसाया। मेरी परी लड़की ने सिर हिलाया। हम देखते रहे, इंतज़ार करते रहे। एक गलत कदम का मतलब था मौत। मेरी मौत। उसकी मौत। जब सही समय आया, तो उसने बाड़ के पार से एक सेब फेंका।\n\n**प्रश्न 14:** किसने किसको सेब फेंक दिया?\n- (क) हरमन ने माँ को\n- (ख) रोमा ने हरमन को\n- (ग) हरमन ने रोमा को\n- (घ) हरमन ने भाई को",
    "question_english": "**Instruction:** Read this excerpt from the story 'Pari Ladki' and answer questions 14 and 15.\n\n**Passage:** \"Do you have any food?\" – I whispered. My fairy girl nodded. We kept looking, kept waiting. One wrong step meant death. My death. Her death. When the right time came, she threw an apple across the fence.\n\n**Question 14:** Who threw the apple to whom?\n- (a) Herman to his mother\n- (b) Roma to Herman\n- (c) Herman to Roma\n- (d) Herman to his brother",
    "answer_hindi": "**(ख) रोमा ने हरमन को**",
    "answer_english": "**(b) Roma to Herman**",
    "question_malayalam": "**സൂചന:** 'പരി ലഡ്കി' (മാലാഖ പെൺകുട്ടി) എന്ന കഥയിലെ ഈ ഭാഗം വായിച്ച് 14, 15 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** “നിങ്ങളുടെ കൈയ്യിൽ ആഹാരമുണ്ടോ?” – ഞാൻ ചോദിച്ചു. എന്റെ മാലാഖ പെൺകുട്ടി തലയാട്ടി. ഞങ്ങൾ കാത്തിരുന്നു. ഒരു തെറ്റായ ചുവടുവെപ്പ് മരണത്തിന് കാരണമായേക്കാം. എന്റെ മരണം. അവളുടെ മരണം. ശരിയായ സമയം വന്നപ്പോൾ അവൾ വേലിക്കപ്പുറത്തുനിന്ന് ഒരു ആപ്പിൾ എറിഞ്ഞുതന്നു.\n\n**ചോദ്യം 14:** ആരാണ് ആർക്കാണ് ആപ്പിൾ നൽകിയത്?\n- (ക) ഹർമൻ അമ്മയ്ക്ക്\n- (ഖ) റോമ ഹർമന്\n- (ഗ) ഹർമൻ റോമയ്ക്ക്\n- (ഘ) ഹർമൻ സഹോദരന്",
    "answer_malayalam": "**(ഖ) റോമ ഹർമന്**"
  },
  {
    "question_number": 15,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** “क्या तुम्हारे पास कुछ खाना है?”... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 15:** संकेतों की मदद से हरमन की चरित्रगत विशेषताओं पर टिप्पणी लिखें।\n- कष्टताएँ सहना\n- यादों में खोना\n- आत्मविश्वास रखना\n- माँ से प्यार करना",
    "question_english": "**Passage:** \"Do you have any food?\"... [Passage provided above]\n\n**Question 15:** With the help of the hints, write a comment on the character traits of Herman.\n- Enduring hardships\n- Lost in memories\n- Maintaining self-confidence\n- Loving his mother",
    "answer_hindi": "**हरमन का चरित्र चित्रण:**\n\nहरमन एक बेहद साहसी और संघर्षशील लड़का है, जिसने बचपन में ही नाज़ी यातना शिविरों का क्रूर दंश झेला। उसके चरित्र की मुख्य विशेषताएँ निम्नलिखित हैं:\n\n- **कष्टताएँ सहने वाला:** बचपन में ही अपने परिवार से बिछड़ जाने के बाद, उसने कैंप की भीषण ठंड, भूख और क्रूरता का डटकर सामना किया। मौत के साये में भी वह जीवित रहने के लिए कठोर संघर्ष करता रहा।\n- **आत्मविश्वास से भरा:** इतनी कम उम्र में भयंकर परिस्थितियों के बीच भी, उसने अपना आत्मविश्वास नहीं खोया। उसने कभी हार नहीं मानी और आज़ादी की उम्मीद की किरण जलाए रखी।\n- **यादों में खोने वाला:** अपनी माँ से ज़बरदस्ती अलग किए जाने के बाद, वह अक्सर अपनी माँ और परिवार की पुरानी यादों में खो जाता है, जो उसे भीतर से मजबूत भी बनाती हैं।\n- **माँ से प्यार करने वाला:** हरमन का अपनी माँ से बहुत गहरा लगाव था। माँ से अलग होने का दर्द उसे जीवन भर सालता रहा, और वह हमेशा उनकी ममता और अंतिम शब्दों को याद करता रहा।\n\nसंक्षेप में, हरमन अदम्य जिजीविषा (जीने की प्रबल इच्छा) और असीम साहस का एक अनूठा प्रतीक है।",
    "answer_english": "**Character Sketch of Herman:**\n\nHerman is an extremely courageous and resilient boy who suffered the cruel sting of Nazi concentration camps in his childhood. His main character traits are as follows:\n\n- **Enduring hardships:** After being separated from his family at an early age, he bravely faced the extreme cold, hunger, and cruelty of the camp. Even in the shadow of death, he struggled hard to survive.\n- **Full of self-confidence:** Even amidst terrible circumstances at such a young age, he did not lose his self-confidence. He never gave up and kept the ray of hope for freedom alive.\n- **Lost in memories:** After being forcibly separated from his mother, he often gets lost in the old memories of his mother and family, which also makes him stronger from within.\n- **Loving his mother:** Herman was deeply attached to his mother. The pain of separation from his mother tormented him throughout his life, and he always remembered her affection and her last words.\n\nIn short, Herman is a unique symbol of indomitable will to live and boundless courage.",
    "question_malayalam": "**അനുച്ഛേദം:** “നിങ്ങളുടെ കൈയ്യിൽ ആഹാരമുണ്ടോ?”... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 15:** സൂചനകളുടെ അടിസ്ഥാനത്തിൽ ഹർമന്റെ സ്വഭാവ സവിശേഷതകളെക്കുറിച്ച് കുറിപ്പ് തയ്യാറാക്കുക.\n- കഷ്ടപ്പാടുകൾ സഹിക്കാനുള്ള കഴിവ്\n- ഓർമ്മകളിൽ മുഴുകിയിരിക്കുക\n- ആത്മവിശ്വാസം\n- അമ്മയോടുള്ള സ്നേഹം",
    "answer_malayalam": "**ഹർമന്റെ സ്വഭാവചിത്രീകരണം:**\nബാല്യത്തിൽ തന്നെ നാസി തടങ്കൽപ്പാളയത്തിലെ ക്രൂരതകൾ അനുഭവിക്കേണ്ടി വന്ന ധീരനായ ഒരു ബാലനാണ് ഹർമൻ. അവന്റെ സ്വഭാവ സവിശേഷതകൾ താഴെ പറയുന്നവയാണ്:\n\n- **കഷ്ടപ്പാടുകൾ സഹിക്കുന്നവൻ:** കുടുംബത്തിൽ നിന്ന് വേർപിരിയേണ്ടി വന്നിട്ടും ക്യാമ്പിലെ കൊടുംതണുപ്പിനെയും വിശപ്പിനെയും അവൻ ധീരമായി നേരിട്ടു. മരണത്തിന്റെ നിഴലിലും ജീവിക്കാനായി അവൻ പൊരുതി.\n- **ആത്മവിശ്വാസമുള്ളവൻ:** കഠിനമായ സാഹചര്യങ്ങളിലും അവൻ തന്റെ ആത്മവിശ്വാസം കൈവിട്ടില്ല. സ്വാതന്ത്ര്യം ലഭിക്കുമെന്ന പ്രതീക്ഷ അവൻ എപ്പോഴും കാത്തുസൂക്ഷിച്ചു.\n- **ഓർമ്മകളിൽ ജീവിക്കുന്നവൻ:** അമ്മയിൽ നിന്ന് വേർപിരിഞ്ഞ ശേഷം അവൻ എപ്പോഴും കുടുംബത്തോടൊപ്പമുള്ള പഴയ നല്ല ഓർമ്മകളിൽ മുഴുകാറുണ്ട്. ഇത് അവനെ മാനസികമായി കരുത്തനാക്കി.\n- **അമ്മയോടുള്ള സ്നേഹം:** ഹർമന് തന്റെ അമ്മയോട് വലിയ ആത്മബന്ധമുണ്ടായിരുന്നു. വേർപിരിയലിന്റെ വേദന അവനെ എന്നും വേട്ടയാടിയിരുന്നു.\n\nചുരുക്കത്തിൽ, അസാമാന്യമായ ആത്മബലത്തിന്റെയും അതിജീവനത്തിന്റെയും പ്രതീകമാണ് ഹർമൻ."
  },
  {
    "question_number": 16,
    "marks": 1,
    "question_hindi": "**सूचना:** निम्नलिखित कविता की पंक्तियाँ पढ़कर प्रश्न 16 और 17 के उत्तर लिखें।\n\n**कवितांश:**\nहै जनम लेते जगह में एक ही,\nएक ही पौधा उन्हें है पालता\nरात में उनपर चमकता चाँद भी\nएक ही सी चाँदनी है डालता।\nमेह उनपर है बरसता एक-सा,\nएक-सी उनपर हवाएँ हैं बहीं\nपर सदा ही यह दिखाता है समय,\nढंग उनके एक-से होते नहीं।\n\n**प्रश्न 16:** फूल और काँटे का जनम कहाँ होता है?",
    "question_english": "**Instruction:** Read the following lines of the poem and answer questions 16 and 17.\n\n**Poetry Excerpt:**\nThey are born in the exact same place,\nthe same plant nurtures them.\nThe moon shining on them at night\nalso casts the exact same moonlight.\nThe rain falls on them identically,\nthe identical winds have blown over them.\nBut time always shows this,\ntheir ways are never the same.\n\n**Question 16:** Where are the flower and the thorn born?",
    "answer_hindi": "फूल और काँटे का जनम एक ही जगह अर्थात् **एक ही पौधे में** होता है।",
    "answer_english": "The flower and the thorn are born in the same place, that is, **on the same plant**.",
    "question_malayalam": "**സൂചന:** താഴെ നൽകിയിരിക്കുന്ന കവിതാഭാഗം വായിച്ച് 16, 17 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**കവിതാഭാഗം:**\nപൂവും മുള്ളും ഒരേ സ്ഥലത്താണ് ജനിക്കുന്നത്,\nഒരേ ചെടിയാണ് അവയെ വളർത്തുന്നത്.\nരാത്രിയിൽ ചന്ദ്രൻ പെയ്യുന്ന നിലാവും\nരണ്ടിനും ഒരേപോലെയാണ് ലഭിക്കുന്നത്.\nമഴയും കാറ്റും ഒരേപോലെയാണ് അവയിൽ പതിക്കുന്നത്,\nഎങ്കിലും സ്വഭാവം കൊണ്ട് അവ ഒരേപോലെയല്ല.\n\n**ചോദ്യം 16:** പൂവും മുള്ളും എവിടെയാണ് ജനിക്കുന്നത്?",
    "answer_malayalam": "പൂവും മുള്ളും ഒരേ സ്ഥലത്ത്, അതായത് **ഒരേ ചെടിയിലാണ്** ജനിക്കുന്നത്।"
  },
  {
    "question_number": 17,
    "marks": 4,
    "question_hindi": "**कवितांश:** है जनम लेते जगह में एक ही... [ऊपर दी गई कविता]\n\n**प्रश्न 17:** कवि और कविता का परिचय देते हुए कवितांश का आशय लिखें।",
    "question_english": "**Poetry Excerpt:** They are born in the exact same place... [Poem provided above]\n\n**Question 17:** Write the meaning of the poetry excerpt while introducing the poet and the poem.",
    "answer_hindi": "**कवि और कविता का परिचय:**\nप्रस्तुत कवितांश 'फूल और काँटा' नामक कविता से लिया गया है। इसके रचयिता प्रसिद्ध कवि **अयोध्यासिंह उपाध्याय 'हरिऔध'** जी हैं।\n\n**कवितांश का आशय:**\n- **समान पालन-पोषण:** कवि इन पंक्तियों में बताते हैं कि फूल और काँटा दोनों एक ही पौधे पर जन्म लेते हैं। प्रकृति उनके साथ कोई भेदभाव नहीं करती—दोनों पर एक जैसी चाँदनी पड़ती है, दोनों पर एक समान बारिश (मेह) होती है और दोनों को एक जैसी हवा मिलती है।\n- **भिन्न स्वभाव:** लेकिन, इतने समान पालन-पोषण के बावजूद समय आने पर उनके 'ढंग' (स्वभाव और व्यवहार) बिल्कुल अलग होते हैं। फूल जहाँ अपनी सुगंध और सुंदरता से सबको सुख देता है, वहीं काँटा दूसरों को चुभकर पीड़ा पहुँचाता है।\n\n**निष्कर्ष:** कवि का आशय यह है कि किसी भी मनुष्य की महानता उसके उच्च कुल या जन्म स्थान से तय नहीं होती, बल्कि उसके अच्छे कर्मों और सद्व्यवहार से होती है।",
    "answer_english": "**Introduction to the Poet and Poem:**\nThe presented excerpt is taken from the poem 'Phool aur Kaanta' (The Flower and the Thorn). Its creator is the famous poet **Ayodhya Singh Upadhyay 'Harioudh'**.",
    "question_malayalam": "**കവിതാഭാഗം:** പൂവും മുള്ളും ഒരേ സ്ഥലത്താണ്... [മുകളിൽ നൽകിയിരിക്കുന്ന കവിത]\n\n**ചോദ്യം 17:** കവിയെയും കവിതയെയും പരിചയപ്പെടുത്തിക്കൊണ്ട് വരികളുടെ ആശയം എഴുതുക.",
    "answer_malayalam": "**കവിപരിചയം:** പ്രശസ്ത കവി അയോധ്യ സിംഗ് ഉപാധ്യായ 'ഹരിഔധ്' രചിച്ച 'ഫൂൽ ഔർ കാംറ്റ' (പൂവും മുള്ളും) എന്ന കവിതയിലെ വരികളാണിത്.\n\n**ആശയം:** പൂവും മുള്ളും ഒരേ ചെടിയിൽ ഒരേ സാഹചര്യങ്ങളിലാണ് വളരുന്നത്. പ്രകൃതി രണ്ടിനോടും തുല്യമായാണ് പെരുമാറുന്നത്. എങ്കിലും വളർന്നു വരുമ്പോൾ പൂവ് സുഗന്ധം കൊണ്ട് എല്ലാവർക്കും സന്തോഷം നൽകുന്നു, എന്നാൽ മുള്ള് മറ്റുള്ളവരെ വേദനിപ്പിക്കുന്നു. മനുഷ്യന്റെ മഹത്വം അവന്റെ ജന്മം കൊണ്ടല്ല, മറിച്ച് അവന്റെ കർമ്മങ്ങൾ കൊണ്ടാണ് നിശ്ചയിക്കപ്പെടുന്നത് എന്നാണ് കവി ഇതിലൂടെ വ്യക്തമാക്കുന്നത്।"
  }
];

const set3: HindiSampleQuestion[] = [
  {
    "question_number": 1,
    "marks": 1,
    "question_hindi": "**सूचना:** 'रैन बसेरे में...' यात्रावृत्त का यह अंश पढ़ें, प्रश्न 1 और 2 के उत्तर लिखें।\n\n**अनुच्छेद:** अंत में दो-तीन किताबें निकालीं। किताबें उसने खोलकर देखीं, फिर ज्यों की त्यों वापस रख दीं। हमारी ओर मुड़कर छोटू से बोला, \"बॉट इज युअर नेम?\" छोटू ने सहमते हुए कहा, \"मुझे अंग्रेज़ी नहीं आती । \" मुझसे पूछा, \"तुम क्या करते हो?\" मैंने कहा, \"मैं शिक्षक था, बच्चों को पढ़ाता था, अब रिटायर हो गया हूँ।\"\n\n**प्रश्न 1:** सही विकल्प चुनकर लिखें।\n- (क) मैं + की = मुझे\n- (ख) मैं + के = मुझे\n- (ग) मैं + को = मुझे\n- (घ) मैं + का = मुझे",
    "question_english": "**Instruction:** Read this excerpt from the travelogue 'Rain Basere Mein...' and answer questions 1 and 2.\n\n**Passage:** In the end, he took out two-three books. He opened and looked at the books, then put them back exactly as they were. Turning towards us, he said to Chhotu, \"What is your name?\" Chhotu said timidly, \"I don't know English.\" He asked me, \"What do you do?\" I said, \"I was a teacher, used to teach children, now I am retired.\"\n\n**Question 1:** Choose and write the correct option.\n- (a) main + ki = mujhe\n- (b) main + ke = mujhe\n- (c) main + ko = mujhe\n- (d) main + ka = mujhe",
    "answer_hindi": "**(ग) मैं + को = मुझे**",
    "answer_english": "**(c) main + ko = mujhe**",
    "question_malayalam": "**സൂചന:** 'റൈൻ ബസേര മേം...' എന്ന യാത്രാവിവരണത്തിലെ ഈ ഭാഗം വായിച്ച് 1, 2 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** അവസാനം അയാൾ രണ്ട്-മൂന്ന് പുസ്തകങ്ങൾ പുറത്തെടുത്തു. അവ തുറന്നു നോക്കിയ ശേഷം ഇരുന്നതുപോലെ തന്നെ തിരിച്ചു വെച്ചു. ഞങ്ങളുടെ നേരെ തിരിഞ്ഞ് ചോട്ടുവിനോട് ചോദിച്ചു, \"ബോട്ട് ഇസ് യുവർ നെയിം?\" ചോട്ടു പേടിയോടെ പറഞ്ഞു, \"എനിക്ക് ഇംഗ്ലീഷ് അറിയില്ല.\" എന്നോട് ചോദിച്ചു, \"നിങ്ങൾ എന്ത് ചെയ്യുന്നു?\" ഞാൻ പറഞ്ഞു, \"ഞാൻ അധ്യാപകനായിരുന്നു, കുട്ടികളെ പഠിപ്പിക്കുമായിരുന്നു, ഇപ്പോൾ വിരമിച്ചു.\"\n\n**ചോദ്യം 1:** ശരിയായ ഓപ്ഷൻ തിരഞ്ഞെടുത്ത് എഴുതുക.\n- (ക) മൈം + കി = മുഝെ\n- (ഖ) മൈം + കെ = മുഝെ\n- (ഗ) മൈം + കോ = മുഝെ\n- (ഘ) മൈം + കാ = മുഝെ",
    "answer_malayalam": "**(ഗ) മൈം + കോ = മുഝെ**"
  },
  {
    "question_number": 2,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** अंत में दो-तीन किताबें निकालीं... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 2:** प्रस्तुत प्रसंग के आधार पर पटकथा का एक दृश्य लिखें ।",
    "question_english": "**Passage:** In the end, he took out two-three books... [Passage provided above]\n\n**Question 2:** Write a screenplay scene based on the presented context.",
    "answer_hindi": "**दृश्य विवरण:**\n- **स्थान:** रैन बसेरे के अंदर का एक कमरा।\n- **समय:** रात का समय।\n- **पात्र:** एक अजीब/पागल सा आदमी, संस्मरणकार (लेखक) और एक छोटा लड़का (छोटू)।\n\n*(आदमी एक झोले से दो-तीन किताबें निकालता है। वह उन्हें खोलकर ध्यान से देखता है, फिर कुछ सोचे बिना ज्यों की त्यों वापस रख देता है। वह अचानक लेखक और छोटू की ओर मुड़ता है।)*\n\n**आदमी** (अजीब सी गंभीरता और अंग्रेज़ी लहज़े में छोटू से): बॉट इज युअर नेम?\n\n**छोटू** (सहमते हुए, घबराई हुई आवाज़ में): मु... मुझे अंग्रेज़ी नहीं आती जी।\n\n**आदमी** (छोटू को छोड़कर लेखक की ओर घूरता है): तुम क्या करते हो?\n\n**लेखक** (शांत और सहज स्वर में): मैं शिक्षक था... बच्चों को पढ़ाता था। पर अब रिटायर हो गया हूँ।\n\n*(आदमी लेखक की बात सुनकर कुछ पल उसे घूरता रहता है और फिर बिना कुछ कहे मुँह फेर लेता है।)*",
    "answer_english": "**Scene Details:**\n- **Location:** Inside a room of the night shelter (Rain Basera).\n- **Time:** Night time.\n- **Characters:** A strange/mad man, the author (memoirist), and a young boy (Chhotu).\n\n*(The man takes out two-three books from a bag. He opens them and looks closely, then puts them back exactly as they were without thinking much. He suddenly turns towards the author and Chhotu.)*\n\n**Man** (with strange seriousness and an English accent to Chhotu): What is your name?\n\n**Chhotu** (timidly, in a nervous voice): I... I don't know English, sir.\n\n**Man** (leaves Chhotu and stares at the author): What do you do?\n\n**Author** (in a calm and easy tone): I was a teacher... used to teach children. But now I am retired.\n\n*(The man stares at the author for a few moments after hearing his words and then turns his face away without saying anything.)*",
    "question_malayalam": "**അനുച്ഛേദം:** അവസാനം അയാൾ രണ്ട്-മൂന്ന് പുസ്തകങ്ങൾ... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 2:** ഈ സന്ദർഭത്തെ ആസ്പദമാക്കി ഒരു തിരക്കഥാ രംഗം തയ്യാറാക്കുക.",
    "answer_malayalam": "**രംഗ വിവരണം:**\n- **സ്ഥലം:** രാത്രി പാർപ്പിടത്തിനുള്ളിലെ (Rain Basera) ഒരു മുറി.\n- **സമയം:** രാത്രി.\n- **കഥാപാത്രങ്ങൾ:** വിചിത്രനായ ഒരു മനുഷ്യൻ, എഴുത്തുകാരൻ, ചോട്ടു.\n\n*(ഒരാൾ തന്റെ ബാഗിൽ നിന്ന് രണ്ട് മൂന്ന് പുസ്തകങ്ങൾ എടുക്കുന്നു. അയാൾ അവ തുറന്നു നോക്കിയ ശേഷം ഒന്നും ചിന്തിക്കാതെ തിരികെ വെക്കുന്നു. പെട്ടെന്ന് എഴുത്തുകാരന്റെയും ചോട്ടുവിന്റെയും നേരെ തിരിയുന്നു.)*\n\n**മനുഷ്യൻ** (ഗൗരവത്തോടെ ചോട്ടുവിനോട്): ബോട്ട് ഇസ് യുവർ നെയിം?\n\n**ചോട്ടു** (പേടിയോടെ): എ... എനിക്ക് ഇംഗ്ലീഷ് അറിയില്ല സാർ.\n\n**മനുഷ്യൻ** (എഴുത്തുകാരനെ ഉറ്റുനോക്കിക്കൊണ്ട്): നിങ്ങൾ എന്ത് ചെയ്യുന്നു?\n\n**എഴുത്തുകാരൻ** (ശാന്തനായി): ഞാൻ ഒരു അധ്യാപകനായിരുന്നു. കുട്ടികളെ പഠിപ്പിക്കുമായിരുന്നു. ഇപ്പോൾ വിരമിച്ചു.\n\n*(മനുഷ്യൻ കുറച്ചുനേരം എഴുത്തുകാരനെ നോക്കി നിന്ന ശേഷം ഒന്നും മിണ്ടാതെ മുഖം തിരിക്കുന്നു.)*"
  },
  {
    "question_number": 3,
    "marks": 1,
    "question_hindi": "**सूचना:** कबीर का दोहा पढ़ें, प्रश्न 3 और 4 के उत्तर लिखें ।\n\n**दोहा:**\nसाधू ऐसा चाहिए, जैसा सूप सुभाय ।\nसार-सार को गहि रहै, थोथा देई उड़ाय ।।\n\n**प्रश्न 3:** 'सुभाय' का समानार्थी शब्द क्या है ?\n- (क) वचन\n- (ख) स्वभाव\n- (ग) शरीर\n- (घ) अहंभाव",
    "question_english": "**Instruction:** Read Kabir's couplet and answer questions 3 and 4.\n\n**Couplet:**\nSadhu aisa chahiye, jaisa soop subhay.\nSaar-saar ko gahi rahai, thotha dei uday.\n\n**Question 3:** What is the synonym of 'Subhay'?\n- (a) Word\n- (b) Nature\n- (c) Body\n- (d) Ego",
    "answer_hindi": "**(ख) स्वभाव**",
    "answer_english": "**(b) Nature**",
    "question_malayalam": "**സൂചന:** കബീർദാസിന്റെ ഈ ദോഹ വായിച്ച് 3, 4 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**ദോഹ:** ജ്ഞാനി എന്നത് സത്തയെ മാത്രം സ്വീകരിക്കുന്ന 'സൂപിനെപ്പോലെ' (മുറം) ആയിരിക്കണം.\n\n**ചോദ്യം 3:** 'സുഭായ്' (സുഭായ) എന്ന വാക്കിന്റെ സമാനാർത്ഥ പദം ഏതാണ്?\n- (ക) വചനം\n- (ഖ) സ്വഭാവം\n- (ഗ) ശരീരം\n- (ഘ) അഹംഭാവം",
    "answer_malayalam": "**(ഖ) സ്വഭാവം**"
  },
  {
    "question_number": 4,
    "marks": 2,
    "question_hindi": "**दोहा:** साधू ऐसा चाहिए... [ऊपर दिया गया दोहा]\n\n**प्रश्न 4:** कबीर के प्रस्तुत दोहे का आशय लिखें ।",
    "question_english": "**Couplet:** Sadhu aisa chahiye... [Couplet provided above]\n\n**Question 4:** Write the meaning of the presented couplet by Kabir.",
    "answer_hindi": "इस दोहे में कबीरदास जी कहते हैं कि एक सज्जन (साधु) व्यक्ति का स्वभाव अनाज साफ करने वाले 'सूप' (छाज) के समान होना चाहिए। जैसे सूप काम की चीज़ (सार या अनाज) को अपने पास रख लेता है और बेकार चीज़ (थोथा या भूसे) को उड़ाकर बाहर फेंक देता है, वैसे ही एक ज्ञानी व्यक्ति को भी संसार की अच्छी और सार्थक बातों को अपना लेना चाहिए और बेकार या बुरी बातों को त्याग देना चाहिए।",
    "answer_english": "In this couplet, Kabirdas ji says that the nature of a gentleman (Sadhu) should be like a 'Soop' (winnowing basket) used for cleaning grain. Just as the winnowing basket retains the useful part (the grain/essence) and blows away the useless part (the chaff), similarly, a wise person should adopt the good and meaningful things of the world and discard the useless or bad things.",
    "question_malayalam": "**ദോഹ:** സാധൂ ഐസാ ചാഹിയെ... [മുകളിൽ നൽകിയിരിക്കുന്ന ദോഹ]\n\n**ചോദ്യം 4:** കബീർദാസിന്റെ ഈ ദോഹയുടെ ആശയം എഴുതുക.",
    "answer_malayalam": "ഒരു സജ്ജന്റെ സ്വഭാവം മുറത്തെപ്പോലെ (സൂപ്) ആയിരിക്കണം. മുറം ധാന്യങ്ങളിലെ സത്തയെ (അരി) നിലനിർത്തുകയും ചവിട്ടും പതിരും പുറന്തള്ളുകയും ചെയ്യുന്നു. അതുപോലെ ഒരു ജ്ഞാനി ലോകത്തിലെ നല്ല കാര്യങ്ങൾ മാത്രം സ്വീകരിക്കുകയും ചീത്ത കാര്യങ്ങൾ ഉപേക്ഷിക്കുകയും വേണം."
  },
  {
    "question_number": 5,
    "marks": 2,
    "question_hindi": "**सूचना:** 'दिल्ली में उनींदे' संस्मरण का यह अंश पढ़ें, प्रश्न 5 और 6 के उत्तर लिखें।\n\n**अनुच्छेद:** \"आप दिल्ली में कब आए थे?\" \"1979 में।\" \"घर कहाँ है आपका?\" \"यही है।\" वह मुझे ऑटो के आईने में से देखता है। ज्यों घर आए मेहमान को देख रहा हो। \"आपका मतलब है, आप तब से सड़क पर ही हैं?\" \"हॉ।\" यानी उसे बिना सोए चौदह साल बीत गए !\n\n**प्रश्न 5:** 'उसे बिना सोए चौदह साल बीत गए।' लेखिका की इस सोच का कारण क्या है ?",
    "question_english": "**Instruction:** Read this excerpt from the memoir 'Dilli Mein Uninde' and answer questions 5 and 6.\n\n**Passage:** \"When did you come to Delhi?\" \"In 1979.\" \"Where is your house?\" \"It is right here.\" He looks at me through the auto's rearview mirror. As if looking at a guest who has come to his house. \"You mean, you have been on the street since then?\" \"Yes.\" That means 14 years have passed for him without sleeping!\n\n**Question 5:** '14 years have passed for him without sleeping.' What is the reason for the author's thought?",
    "answer_hindi": "लेखिका की इस सोच का कारण यह था कि ऑटो ड्राइवर राजाराम पिछले 14 सालों से (1979 से) दिल्ली में रह रहा था और उसका अपना कोई घर नहीं था। वह दिन-रात ऑटो चलाता था और रात को उसी छोटी सी तीन फीट लंबी ऑटो की पिछली सीट पर सिकुड़ कर सोता था। सड़क के शोर और ऑटो की असहज सीट पर कोई इंसान 14 सालों तक चैन की नींद कैसे सो सकता है, इसी बेबसी को देखकर लेखिका को लगा कि वह 14 सालों से ठीक से सोया ही नहीं है।",
    "answer_english": "The reason for the author's thought was that the auto driver Rajaram had been living in Delhi for the past 14 years (since 1979) and had no home of his own. He drove the auto day and night and at night, he slept huddled on the small three-feet long back seat of that very auto. Seeing the helplessness of how a person could sleep peacefully for 14 years amidst the noise of the street and on the uncomfortable seat of an auto, the author felt that he hadn't slept properly for 14 years.",
    "question_malayalam": "**സൂചന:** 'ഡൽഹിയിൽ ഉറക്കമില്ലാത്തവർ' എന്ന ഓർമ്മക്കുറിപ്പിലെ ഈ ഭാഗം വായിച്ച് 5, 6 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** \"നിങ്ങൾ എപ്പോഴാണ് ഡൽഹിയിൽ വന്നത്?\" \"1979-ൽ.\" \"നിങ്ങളുടെ വീട് എവിടെയാണ്?\" \"ഇവിടെത്തന്നെ.\" അയാൾ ഓട്ടോയുടെ കണ്ണാടിയിലൂടെ എന്നെ നോക്കുന്നു. വീട്ടിൽ വന്ന ഒരു അതിഥിയെ നോക്കുന്നതുപോലെ. \"അതായത്, നിങ്ങൾ അന്നുമുതൽ റോഡിലാണോ കഴിയുന്നത്?\" \"അതെ.\" അതായത് അയാൾ ഉറങ്ങിയിട്ട് പതിനാല് വർഷങ്ങൾ കഴിഞ്ഞിരിക്കുന്നു!",
    "answer_malayalam": "രാജാറാം എന്ന ഓട്ടോ ഡ്രൈവർ കഴിഞ്ഞ 14 വർഷമായി ഡൽഹിയിലെ തെരുവുകളിൽ ഓട്ടോ ഓടിച്ചാണ് കഴിയുന്നത്. അയാൾക്ക് സ്വന്തമായി വീടില്ല. രാത്രിയിൽ തന്റെ ചെറിയ ഓട്ടോറിക്ഷയുടെ പിൻസീറ്റിലാണ് അയാൾ ഉറങ്ങുന്നത്. റോഡിലെ ബഹളത്തിനിടയിൽ ആ അസൗകര്യമുള്ള സീറ്റിൽ ഒരാൾക്ക് എങ്ങനെ സമാധാനമായി ഉറങ്ങാൻ കഴിയും എന്ന് ചിന്തിച്ചപ്പോഴാണ് എഴുത്തുകാരിക്ക് അങ്ങനെ തോന്നിയത്."
  },
  {
    "question_number": 6,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** \"आप दिल्ली में कब आए थे?\"... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 6:** ऑटो ड्राइवर के साथ हुए अनुभव का जिक्र करते हुए लेखिका की डायरी लिखें।",
    "question_english": "**Passage:** \"When did you come to Delhi?\"... [Passage provided above]\n\n**Question 6:** Write the author's diary mentioning the experience she had with the auto driver.",
    "answer_hindi": "**१२ अगस्त, रात १० बजे**\n\n*प्रिय डायरी,*\n\nआज एक ऑटो वाले, राजाराम से मिलकर मेरा मन बहुत विचलित है। उसकी आँखें और उसके चेहरे की उभरी नीली नसें उसके जीवन के कठोर संघर्ष की गवाही दे रही थीं। बातों-बातों में उसने बताया कि वह 1979 से दिल्ली की सड़कों पर है और उसका ऑटो ही उसका घर है।\n\nमैं यह सोचकर सिहर उठी कि वह पिछले 14 सालों से उस छोटी सी तीन फीट की सीट पर सो रहा है। क्या उसे कभी चैन की नींद आई होगी? उसके पास कुल जमा पूँजी एक कंबल, कपड़े और एक कटोरा है, जिसे वह सोफे पर भी नहीं रखना चाहता था ताकि मेरा सोफा गंदा न हो जाए। उसकी इस ईमानदारी और स्वाभिमान ने मुझे भीतर तक झकझोर दिया है। दिल्ली की इन चकाचौंध भरी सड़कों पर न जाने कितने राजाराम उनींदे (बिना सोए) अपनी ज़िंदगी गुज़ार रहे हैं।\n\n*- गीता (लेखिका)*",
    "answer_english": "**August 12, 10 PM**\n\n*Dear Diary,*\n\nMy mind is very disturbed today after meeting an auto driver, Rajaram. His eyes and the bulging blue veins on his face were testifying to the harsh struggles of his life. During the conversation, he told me that he has been on the streets of Delhi since 1979 and his auto is his only home.\n\nI shuddered to think that he has been sleeping on that small three-feet seat for the last 14 years. Could he ever have had a peaceful sleep? His total accumulated wealth is a blanket, some clothes, and a bowl, which he didn't even want to place on my sofa so it wouldn't get dirty. His honesty and self-respect shook me to the core. Who knows how many Rajarams are spending their lives sleeplessly on these dazzling streets of Delhi.\n\n*- Geeta (Author)*",
    "question_malayalam": "**അനുച്ഛേദം:** \"നിങ്ങൾ എപ്പോഴാണ് ഡൽഹിയിൽ വന്നത്?\"... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 6:** ഓട്ടോ ഡ്രൈവറുമായുള്ള അനുഭവം വിവരിച്ചുകൊണ്ട് എഴുത്തുകാരിയുടെ ഡയറി തയ്യാറാക്കുക.",
    "answer_malayalam": "**ആഗസ്റ്റ് 12, രാത്രി 10 മണി**\n\n*പ്രിയ ഡയറി,*\n\nഇന്ന് രാജാറാം എന്ന ഓട്ടോ ഡ്രൈവറെ കണ്ടുമുട്ടിയത് എന്റെ മനസ്സിനെ വല്ലാതെ വിഷമിപ്പിച്ചു. 1979 മുതൽ അയാൾ ഡൽഹിയിലെ തെരുവുകളിൽ കഴിയുകയാണ്. തന്റെ ഓട്ടോറിക്ഷ തന്നെയാണ് അയാളുടെ വീട്. കഴിഞ്ഞ 14 വർഷമായി ആ ചെറിയ സീറ്റിൽ കിടന്നാണ് അയാൾ ഉറങ്ങുന്നത്. അയാൾക്ക് എപ്പോഴെങ്കിലും നല്ലൊരു ഉറക്കം ലഭിച്ചിട്ടുണ്ടാകുമോ? അയാളുടെ ആത്മാഭിമാനവും ലാളിത്യവും എന്നെ അത്ഭുതപ്പെടുത്തി. ഡൽഹിയിലെ ഈ തിളക്കമുള്ള തെരുവുകളിൽ ഉറക്കമില്ലാത്ത എത്രയെത്ര രാജാറാമുമാർ ഉണ്ടാകും!\n\n*- ഗീത (എഴുത്തുകാരി)*"
  },
  {
    "question_number": 7,
    "marks": 2,
    "question_hindi": "**सूचना:** 'मेरी दुनिया के तमाम बच्चे' कविता का यह अंश पढ़ें, प्रश्न 7 का उत्तर लिखें ।\n\n**कवितांश:**\nवो तुम्हारी टैंकों में बालू भर देंगे एक दिन\nऔर तुम्हारी बंदूकों को\nमिट्टी में गहरा दबा देंगे\nवो सड़कों पर गड्ढे खोदेंगे\nऔर पानी भर देंगे\nऔर पानियों में छपा-छपा लोटेंगे\nवो प्यार करेंगे एक दिन उन सबसे\nजिसने तुमने नफ़रत करना सिखाया है।\n\n**प्रश्न 7:** समान आशय वाली पंक्तियाँ कवितांश से चुनकर लिखें।\n**आशय:** बच्चे नफ़रत की भावनाओं को छोड़ देंगे।",
    "question_english": "**Instruction:** Read this excerpt from the poem 'Meri Duniya Ke Tamam Bachche' and answer question 7.\n\n**Poetry Excerpt:**\nThey will fill your tanks with sand one day\nAnd your guns\nthey will bury deep in the mud\nThey will dig holes in the streets\nAnd fill them with water\nAnd splash and roll in the waters\nThey will love one day everyone\nWhom you have taught to hate.\n\n**Question 7:** Choose and write the lines from the poetry excerpt that have the same meaning.\n**Meaning:** Children will abandon the feelings of hatred.",
    "answer_hindi": "**समान आशय वाली पंक्तियाँ:**\n\"वो प्यार करेंगे एक दिन उन सबसे\nजिसने तुमने नफ़रत करना सिखाया है।\"",
    "answer_english": "**Lines with the same meaning:**\n\"They will love one day everyone\nWhom you have taught to hate.\"",
    "question_malayalam": "**സൂചന:** 'എന്റെ ലോകത്തിലെ എല്ലാ കുട്ടികളും' എന്ന കവിതയിലെ ഈ ഭാഗം വായിച്ച് 7-ാം ചോദ്യത്തിന് ഉത്തരമെഴുതുക.\n\n**കവിതാഭാഗം:** അവർ നിങ്ങളുടെ ടാങ്കുകളിൽ മണൽ നിറയ്ക്കും, തോക്കുകൾ മണ്ണിൽ കുഴിച്ചുമൂടും. അവർ തെരുവുകളിൽ കുഴികളുണ്ടാക്കി വെള്ളം നിറച്ച് അതിൽ കളിക്കും. നിങ്ങൾ ആരെയാണോ വെറുക്കാൻ പഠിപ്പിച്ചത് അവരെയെല്ലാം അവർ സ്നേഹിക്കും.\n\n**ചോദ്യം 7:** 'കുട്ടികൾ വെറുപ്പിന്റെ വികാരങ്ങൾ ഉപേക്ഷിക്കും' എന്ന ആശയമുള്ള വരികൾ കവിതയിൽ നിന്ന് കണ്ടെത്തുക.",
    "answer_malayalam": "**\"വോ പ്യാർ കരേംഗേ ഏക് ദിൻ ഉൻ സബ്സെ\nജിസ്നെ തുംനേ നഫ്രത്ത് കർനാ സിഖായാ ഹൈ\"**"
  },
  {
    "question_number": 8,
    "marks": 4,
    "question_hindi": "**सूचना:** 'व्हाइट कैप' कहानी का यह अंश पढ़ें, प्रश्न 8 का उत्तर लिखें।\n\n**अनुच्छेद:** अचानक निराश लड़कों के बीच उनकी बॉल आकर गिरी। चकराए चकित लड़कों ने देखा कि उस इमारत की छत पर केशव मुस्कुराता हुआ खड़ा था और वहाँ से हाथ हिला रहा था। लड़के उछल पड़े। एक बड़े लड़के ने खुश होकर कहा, \"वाह! टार्जन है ये तो! चलो यार, काम बन गया ।\"\n\n**प्रश्न 8:** केशव के चरित्र पर टिप्पणी लिखें ।",
    "question_english": "**Instruction:** Read this excerpt from the story 'White Cap' and answer question 8.\n\n**Passage:** Suddenly their ball fell among the disappointed boys. The puzzled and surprised boys saw that Keshav was standing smiling on the roof of that building and waving from there. The boys jumped up. An older boy said happily, \"Wow! He is Tarzan! Come on man, the job is done.\"\n\n**Question 8:** Write a comment on the character of Keshav.",
    "answer_hindi": "**केशव का चरित्र चित्रण:**\n\n- **दृढ़ निश्चयी और उत्साही:** केशव एक शारीरिक रूप से कमज़ोर लड़का है, लेकिन क्रिकेट के प्रति उसका उत्साह और जुनून बहुत गहरा है। वह हमेशा मैदान में लड़कों को खेलते हुए देखता रहता है।\n- **संघर्षशील:** कमज़ोर होने के बावजूद, वह अपनी कमज़ोरियों से हार नहीं मानता। जब लड़कों की गेंद एक ऊँची इमारत की छत पर चली जाती है और वे निराश हो जाते हैं, तब केशव किसी तरह अपनी बीमारी/चोट की परवाह किए बिना छत पर चढ़ जाता है और गेंद नीचे फेंककर अपनी शक्ति साबित करता है।\n- **बहादुर और निडर:** छत पर चढ़कर गेंद ढूँढना उसकी निडरता को दर्शाता है। उसकी इसी बहादुरी को देखकर कॉलोनी के लड़के उसे 'टार्जन' कहकर बुलाते हैं।\n- **सकारात्मक दृष्टिकोण:** वह अपनी कमज़ोरी को अपने आत्मविश्वास के आड़े नहीं आने देता और मुस्कुराते हुए जीवन की हर चुनौती (और लड़कों की उपेक्षा) का सामना करता है।",
    "answer_english": "**Character Sketch of Keshav:**\n\n- **Determined and Enthusiastic:** Keshav is a physically weak boy, but his enthusiasm and passion for cricket are very deep. He always watches the boys playing on the field.\n- **Resilient:** Despite being weak, he does not surrender to his weaknesses. When the boys' ball goes onto the roof of a high building and they become disappointed, Keshav somehow climbs the roof regardless of his illness/injury and proves his strength by throwing the ball down.\n- **Brave and Fearless:** Climbing the roof to find the ball shows his fearlessness. Seeing this bravery, the boys of the colony call him 'Tarzan'.\n- **Positive Attitude:** He doesn't let his weakness come in the way of his self-confidence and faces every challenge in life (and the boys' neglect) with a smile.",
    "question_malayalam": "**സൂചന:** 'വൈറ്റ് ക്യാപ്' എന്ന കഥയിലെ ഈ ഭാഗം വായിച്ച് 8-ാം ചോദ്യത്തിന് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** പെട്ടെന്ന് നിരാശരായ കുട്ടികൾക്കിടയിലേക്ക് അവരുടെ പന്ത് വന്നു വീണു. അത്ഭുതപ്പെട്ട കുട്ടികൾ നോക്കിയപ്പോൾ കെട്ടിടത്തിന് മുകളിൽ കേശവ് ചിരിച്ചുകൊണ്ട് നിൽക്കുന്നതാണ് കണ്ടത്. അവൻ അവിടെ നിന്ന് കൈവീശി കാണിക്കുന്നുണ്ടായിരുന്നു. കുട്ടികൾ ആഹ്ലാദത്താൽ തുള്ളിച്ചാടി. \"ഇവൻ ടാർസൻ തന്നെ!\" ഒരു കുട്ടി വിളിച്ചുപറഞ്ഞു.\n\n**ചോദ്യം 8:** കേശവിന്റെ സ്വഭാവത്തെക്കുറിച്ച് ഒരു കുറിപ്പ് തയ്യാറാക്കുക.",
    "answer_malayalam": "ശാരീരികമായി ബലഹീനനെങ്കിലും ക്രിക്കറ്റിനോട് വലിയ ആവേശമുള്ള കുട്ടിയാണ് കേശവ്. അവൻ എപ്പോഴും കുട്ടികളുടെ കളി നോക്കി നിൽക്കാറുണ്ട്. കുട്ടികളുടെ പന്ത് ഉയരമുള്ള കെട്ടിടത്തിന് മുകളിൽ പോയപ്പോൾ സ്വന്തം അവശതകൾ മറന്ന് അവൻ അവിടെ കയറി പന്ത് എടുത്തു നൽകി. അവന്റെ ധീരതയും ആത്മവിശ്വാസവുമാണ് ഇതിലൂടെ വെളിവാകുന്നത്. അതുകൊണ്ടാണ് കുട്ടികൾ അവനെ 'ടാർസൻ' എന്ന് വിളിച്ചത്. പ്രതിസന്ധികളെ പുഞ്ചിരിയോടെ നേരിടാനുള്ള അവന്റെ കഴിവ് ശ്രദ്ധേയമാണ്."
  },
  {
    "question_number": 9,
    "marks": 2,
    "question_hindi": "**सूचना:** 'परी लड़की' कहानी का यह अंश पढ़ें, प्रश्न 9 और 10 का उत्तर लिखें ।\n\n**अनुच्छेद:** मैं अपनी माँ के पतले शरीर से लिपट गया । \" माँ, मैं तुम्हारे साथ ही चलूँगा \" - मैं फुसफुसाया। पर माँ ने मुझे अपने बड़े भाइयों की ओर धकेल दिया, और वो खुद एक खुली ट्रेन की बोगी की ओर चल पड़ीं। आँखें आगे की ओर शरीर अकड़ा हुआ। सिर ऊँचा । \"हरमन\" माँ ने कहा। \"अब समय आ गया है कि तुम्हारे एक आदमी बनने का ।\"\n\n**प्रश्न 9:** \"अब समय आ गया है कि तुम्हारे एक आदमी बनने का ।\" - माँ ने ऐसा क्यों कहा होगा ?",
    "question_english": "**Instruction:** Read this excerpt from the story 'Pari Ladki' and answer questions 9 and 10.\n\n**Passage:** I clung to my mother's thin body. \"Mother, I will come with you\" - I whispered. But mother pushed me towards my older brothers, and she herself walked towards an open train bogie. Eyes looking forward, body stiff. Head held high. \"Herman,\" Mother said. \"The time has come for you to become a man.\"\n\n**Question 9:** \"The time has come for you to become a man.\" - Why must the mother have said so?",
    "answer_hindi": "माँ ने ऐसा इसलिए कहा होगा क्योंकि वे जानती थीं कि नाज़ी यातना शिविर में अब वे अपने बेटे हरमन से हमेशा के लिए अलग होने वाली हैं और शायद वे फिर कभी ज़िंदा न मिल सकें। ऐसे में वह चाहती थीं कि उनका छोटा बच्चा हरमन कमज़ोर न पड़े, रोए नहीं, बल्कि एक ज़िम्मेदार और बहादुर 'आदमी' (पुरुष) की तरह इन कठोर परिस्थितियों का डटकर सामना करे और खुद को ज़िंदा रखने के लिए संघर्ष करे।",
    "answer_english": "The mother must have said so because she knew that in the Nazi concentration camp, she was now going to be separated from her son Herman forever and they might never meet alive again. In such a situation, she wanted her young child Herman not to be weak or cry, but to bravely face these harsh circumstances like a responsible and courageous 'man' and fight to keep himself alive.",
    "question_malayalam": "**സൂചന:** 'മാലാഖ പെൺകുട്ടി' എന്ന കഥയിലെ ഈ ഭാഗം വായിച്ച് 9, 10 ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** ഞാൻ അമ്മയെ കെട്ടിപ്പിടിച്ചു. \"അമ്മേ, ഞാനും കൂടെ വരാം\" - ഞാൻ മന്ത്രിച്ചു. എന്നാൽ അമ്മ എന്നെ ജ്യേഷ്ഠന്മാരുടെ അടുത്തേക്ക് തള്ളിവിട്ടു. എന്നിട്ട് അമ്മ ഒരു ട്രെയിൻ ബോഗിയിലേക്ക് നടന്നുപോയി. തല ഉയർത്തിപ്പിടിച്ച് ഉറച്ച ചുവടുകളോടെയാണ് അമ്മ നടന്നത്. \"ഹർമൻ,\" അമ്മ പറഞ്ഞു. \"നീ ഒരു പുരുഷനാകേണ്ട സമയം അതിക്രമിച്ചിരിക്കുന്നു.\"\n\n**ചോദ്യം 9:** \"നീ ഒരു പുരുഷനാകേണ്ട സമയം അതിക്രമിച്ചിരിക്കുന്നു\" - അമ്മ എന്തുകൊണ്ടായിരിക്കും ഇങ്ങനെ പറഞ്ഞത്?",
    "answer_malayalam": "നാസി തടങ്കൽപ്പാളയത്തിൽ വെച്ച് മകനിൽ നിന്ന് എന്നെന്നേക്കുമായി വേർപിരിയുകയാണെന്ന് അമ്മയ്ക്ക് അറിയാമായിരുന്നു. ഇനി അവൻ ഒറ്റയ്ക്കാണ് അതിജീവിക്കേണ്ടത്. ആ സാഹചര്യത്തിൽ അവൻ കരഞ്ഞു തളരാതെ ഒരു പുരുഷനെപ്പോലെ ധീരമായി പ്രതിസന്ധികളെ നേരിടണമെന്നും സ്വന്തം കാര്യം നോക്കാൻ പ്രാപ്തനാകണമെന്നും അമ്മ ആഗ്രഹിച്ചു. അതുകൊണ്ടാണ് അമ്മ അവനോട് അങ്ങനെ പറഞ്ഞത്."
  },
  {
    "question_number": 10,
    "marks": 4,
    "question_hindi": "**अनुच्छेद:** मैं अपनी माँ के पतले शरीर से लिपट गया... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 10:** प्रस्तुत प्रसंग के आधार पर माँ और हरमन के बीच की संभावित बातचीत लिखें ।",
    "question_english": "**Passage:** I clung to my mother's thin body... [Passage provided above]\n\n**Question 10:** Write the probable conversation between the mother and Herman based on the presented context.",
    "answer_hindi": "**हरमन** (रोते हुए, अपनी माँ के पतले शरीर से कसकर लिपटते हुए): माँ! मैं तुम्हें छोड़कर कहीं नहीं जाऊँगा। मुझे अपने साथ ही रहने दो।\n\n**माँ** (हरमन को खुद से अलग करते हुए और अपने आँसू छिपाते हुए): नहीं हरमन! तुम्हें अपने बड़े भाइयों के साथ जाना होगा। यहाँ हमें अलग होना ही पड़ेगा।\n\n**हरमन** (फुसफुसाते हुए, गिड़गिड़ाकर): लेकिन माँ, मुझे डर लग रहा है। मैं तुम्हारे साथ ही चलूँगा।\n\n**माँ** (हरमन को बड़े भाइयों की ओर धकेलते हुए, एकदम कठोर और सीधे खड़े होकर): हरमन! मेरी तरफ देखो। अब रोने का समय नहीं है। अब समय आ गया है कि तुम्हारे एक आदमी (मज़बूत इंसान) बनने का। कमज़ोर मत पड़ना।\n\n**हरमन** (आँसू पोंछते हुए): माँ... क्या हम फिर कभी मिलेंगे?\n\n**माँ** (मुस्कुराने की कोशिश करते हुए, सिर ऊँचा करके): अपना ख्याल रखना हरमन। बस ज़िंदा रहना...।",
    "answer_english": "**Herman** (crying, clinging tightly to his mother's thin body): Mother! I won't go anywhere without you. Let me stay with you.\n\n**Mother** (separating Herman from herself and hiding her tears): No Herman! You will have to go with your older brothers. We have to separate here.\n\n**Herman** (whispering, pleading): But Mother, I am scared. I will come with you.\n\n**Mother** (pushing Herman towards the older brothers, standing absolutely stiff and straight): Herman! Look at me. This is no time to cry. The time has come for you to become a man (a strong person). Don't be weak.\n\n**Herman** (wiping his tears): Mother... will we ever meet again?\n\n**Mother** (trying to smile, head held high): Take care of yourself, Herman. Just stay alive...",
    "question_malayalam": "**അനുച്ഛേദം:** ഞാൻ അമ്മയെ കെട്ടിപ്പിടിച്ചു... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 10:** അമ്മയും ഹർമനും തമ്മിലുള്ള സാധ്യമായ ഒരു സംഭാഷണം തയ്യാറാക്കുക.",
    "answer_malayalam": "**ഹർമൻ** (കരഞ്ഞുകൊണ്ട്): അമ്മേ! ഞാൻ അമ്മയെ വിട്ടു എങ്ങും പോകില്ല. എന്നെയും കൂടെ കൊണ്ടുപോകൂ.\n\n**അമ്മ:** വേണ്ട ഹർമൻ! നീ ജ്യേഷ്ഠന്മാരുടെ കൂടെ പോകണം. നമുക്ക് ഇവിടെ പിരിയേണ്ടി വരും.\n\n**ഹർമൻ:** എനിക്ക് പേടിയാകുന്നു അമ്മേ. ഞാൻ അമ്മയുടെ കൂടെ വരാം.\n\n**അമ്മ:** ഹർമൻ! എന്നെ നോക്കൂ. ഇത് കരയാനുള്ള സമയമല്ല. നീ ധീരനാകണം. ഒരു പുരുഷനെപ്പോലെ പൊരുതണം. തളർന്നുപോകരുത്.\n\n**ഹർമൻ:** നമ്മൾ ഇനി എന്നാണ് കാണുക?\n\n**അമ്മ:** നീ നിന്റെ കാര്യം നോക്കണം. സുരക്ഷിതനായിരിക്കണം. നമുക്ക് കാണാം..."
  },
  {
    "question_number": 11,
    "marks": 4,
    "question_hindi": "**सूचना:** 'सिला बीनती लड़कियाँ' कविता का यह अंश पढ़ें, प्रश्न 11 का उत्तर लिखें ।\n\n**कवितांश:**\nउनके बालों में हँसते रहते हैं\nकनेर के फूल\nऔर एक गुलाबी रोशनी\nउनके चेहरे से फूटकर\nफैलती रहती है धरती पर\nजब झुकने लगते हैं दिन के कंधे\nऔर उन्हें लगता है कि इतनी\nबालियों से हो जाएगा तैयार\nएक जून के लिए बटकी भर भात\nवे लौट जाती हैं घर\n\n**प्रश्न 11:** कवि और कविता का परिचय देते हुए कवितांश का आशय लिखें",
    "question_english": "**Instruction:** Read this excerpt from the poem 'Sila Beenti Ladkiyan' and answer question 11.\n\n**Poetry Excerpt:**\nIn their hair keep smiling\nthe Kaner flowers\nAnd a pink light\nbursting from their faces\nkeeps spreading on the earth\nWhen the shoulders of the day begin to droop\nand they feel that with this many\nears of grain, it will be ready\na pot full of rice for one meal\nthey return home\n\n**Question 11:** Write the meaning of the poetry excerpt while introducing the poet and the poem.",
    "answer_hindi": "**उत्तर: कविता और कवि का परिचय:**\nप्रस्तुत कवितांश **'सिला बीनती लड़कियाँ'** नामक कविता से लिया गया है। यह कविता समाज की ग़रीबी और उसमें छिपे सौंदर्य तथा संघर्ष को दर्शाती है।\n\n**कवितांश का आशय:**\n- **प्राकृतिक सौंदर्य और खुशी:** कवि बताते हैं कि खेतों में 'सिला बीनने' (कटी हुई फसल के बचे हुए दाने चुनने) वाली गरीब लड़कियों के बालों में पीले कनेर के फूल सजे हुए हैं। उनकी मेहनत और मासूमियत के कारण उनके चेहरों से एक अजीब सी चमक (गुलाबी रोशनी) निकलकर पूरी धरती पर फैल रही है। यानी गरीबी के बावजूद वे प्रकृति से जुड़ी हैं और खुश हैं।\n- **संघर्ष और संतोष:** जब शाम होने लगती है (दिन के कंधे झुकने लगते हैं) और दिन भर की कड़ी मेहनत के बाद उनके पास इतनी बालियाँ (अनाज) इकटठी हो जाती हैं जिनसे उनके परिवार के लिए कम से कम 'एक जून' (एक समय) का भोजन (बटकी भर भात) बन सके, तो वे पूरी तरह संतुष्ट होकर अपने घर लौट जाती हैं।\n\n**निष्कर्ष:** यह अंश गरीब वर्ग की लड़कियों के कठिन परिश्रम, उनकी छोटी-छोटी खुशियों और ज़िंदगी के प्रति उनके संतोष को बहुत ही मार्मिक ढंग से प्रस्तुत करता है।",
    "answer_english": "**Introduction to Poem and Poet:**\nThe presented excerpt is taken from the poem **'Sila Beenti Ladkiyan'** (Girls Gleaning Grain). This poem depicts the poverty of society and the hidden beauty and struggle within it.\n\n**Meaning of the Excerpt:**\n- **Natural Beauty and Joy:** The poet explains that the poor girls who are 'gleaning' (picking up leftover grains after the harvest) in the fields have yellow Kaner flowers adorned in their hair. Due to their hard work and innocence, a strange glow (pink light) bursts from their faces and spreads across the earth. This means despite poverty, they are connected to nature and are happy.\n- **Struggle and Satisfaction:** When evening approaches (the shoulders of the day begin to droop), and after a long day of hard work they have collected enough ears of grain to prepare at least 'one meal' (a pot full of rice) for their family, they return to their homes completely satisfied.\n\n**Conclusion:** This excerpt very touchingly presents the hard labor of poor-class girls, their small joys, and their satisfaction towards life.",
    "question_malayalam": "**സൂചന:** 'സില ബീന്തീ ലഡ്കിയാം' (ധാന്യം പെറുക്കുന്ന പെൺകുട്ടികൾ) എന്ന കവിതയിലെ ഈ ഭാഗം വായിച്ച് 11-ാം ചോദ്യത്തിന് ഉത്തരമെഴുതുക.\n\n**കവിതാഭാഗം:** അവരുടെ മുടിയിൽ മഞ്ഞപ്പൂക്കൾ ചിരിക്കുന്നു. അവരുടെ മുഖത്തുനിന്ന് ഒരു തിളക്കം ഭൂമിയിലേക്ക് പടരുന്നു. വൈകുന്നേരം അവർ തങ്ങൾ ശേഖരിച്ച ധാന്യങ്ങളുമായി സന്തോഷത്തോടെ വീട്ടിലേക്ക് മടങ്ങുന്നു. അത് അവരുടെ ഒരു നേരത്തെ ഭക്ഷണത്തിന് തികയുമായിരുന്നു.\n\n**ചോദ്യം 11:** കവിയെയും കവിതയെയും പരിചയപ്പെടുത്തിക്കൊണ്ട് നൽകിയിരിക്കുന്ന വരികളുടെ ആശയം എഴുതുക.",
    "answer_malayalam": "**കവിതയും കവിയും:** പ്രശസ്ത കവി നിർമ്മല പുതുലിന്റെ 'സില ബീന്തീ ലഡ്കിയാം' എന്ന കവിതയിലെ വരികളാണിത്. സാധാരണക്കാരുടെ കഷ്ടപ്പാടുകളും അതിനിടയിലെ സന്തോഷവുമാണ് ഇതിൽ വിവരിക്കുന്നത്.\n\n**ആശയം:** പാടങ്ങളിൽ കൊയ്ത്തു കഴിഞ്ഞ് അവശേഷിക്കുന്ന ധാന്യമണികൾ പെറുക്കി ജീവിക്കുന്ന ദരിദ്രരായ പെൺകുട്ടികളുടെ ജീവിതമാണ് കവി ഇവിടെ ചിത്രീകരിക്കുന്നത്. കടുത്ത ദാരിദ്ര്യത്തിലും അവർ പ്രകൃതിയോട് ഇണങ്ങി ജീവിക്കുന്നു. ഒരു നേരത്തെ ഭക്ഷണത്തിനുള്ള ധാന്യം ലഭിക്കുമ്പോൾ അവർ സംതൃപ്തിയോടെ മടങ്ങുന്നു. കഠിനാധ്വാനത്തിന്റെയും സംതൃപ്തിയുടെയും മനോഹരമായ ചിത്രമാണിത്."
  },
  {
    "question_number": 12,
    "marks": 1,
    "question_hindi": "**सूचना:** 'गैलीलियो' लेख का यह अंश पढ़ें, 12 से 14 तक के प्रश्नों के उत्तर लिखें।\n\n**अनुच्छेद:** इसपर पिता ने नाराज़ होने के बजाय खुश हुए और कहा, \"मैं तुमसे यही सुनना चाहता था और इस भावना को हमेशा बनाए रखना। तभी तुम सच्चे वैज्ञानिक बन पाओगे।\" गैलीलियो ने पिता की बात को हमेशा याद रखा।\n\n**प्रश्न 12:** पहचानकर लिखें कि कौन-से प्रस्ताव सही हैं।\n- (i) गैलीलियो महान वैज्ञानिक थे।\n- (ii) गैलीलियो बचपन में आलसी थे।\n- (iii) गैलीलियो डॉक्टर बनना चाहते थे।\n- (iv) गैलीलियो ने पेंडुलम नियम खोजा था।\n\n- (क) i और iii सही हैं।\n- (ख) ii और iii सही हैं।\n- (ग) i और iv सही हैं।\n- (घ) iii और iv सही हैं।",
    "question_english": "**Instruction:** Read this excerpt from the article 'Galileo' and answer questions 12 to 14.\n\n**Passage:** At this, instead of getting angry, the father became happy and said, \"This is exactly what I wanted to hear from you, and always maintain this feeling. Only then will you be able to become a true scientist.\" Galileo always remembered his father's words.\n\n**Question 12:** Identify and write which propositions are correct.\n- (i) Galileo was a great scientist.\n- (ii) Galileo was lazy in his childhood.\n- (iii) Galileo wanted to become a doctor.\n- (iv) Galileo discovered the law of the pendulum.\n\n- (a) i and iii are correct.\n- (b) ii and iii are correct.\n- (c) i and iv are correct.\n- (d) iii and iv are correct.",
    "answer_hindi": "**(ग) i और iv सही हैं।**",
    "answer_english": "**(c) i and iv are correct.**",
    "question_malayalam": "**സൂചന:** 'ഗലീലിയോ' എന്ന ലേഖനത്തിലെ ഈ ഭാഗം വായിച്ച് 12 മുതൽ 14 വരെയുള്ള ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** ഇതിൽ പിതാവ് ദേഷ്യപ്പെടുന്നതിന് പകരം സന്തോഷിച്ചു. \"എനിക്ക് നിന്നിൽ നിന്ന് ഇത് തന്നെയാണ് കേൾക്കേണ്ടിയിരുന്നത്. ഈ താൽപ്പര്യം എപ്പോഴും നിലനിർത്തണം. എങ്കിൽ മാത്രമേ നിനക്കൊരു ശാസ്ത്രജ്ഞനാകാൻ കഴിയൂ.\" ഗലീലിയോ തന്റെ അച്ഛന്റെ വാക്ക് എപ്പോഴും ഓർമ്മിച്ചു.\n\n**ചോദ്യം 12:** ശരിയായ പ്രസ്താവനകൾ കണ്ടെത്തുക.\n- (i) ഗലീലിയോ വലിയ ശാസ്ത്രജ്ഞനായിരുന്നു.\n- (ii) ഗലീലിയോ മടിയനായിരുന്നു.\n- (iii) ഗലീലിയോ ഡോക്ടർ ആകാൻ ആഗ്രഹിച്ചു.\n- (iv) ഗലീലിയോ പെൻഡുലം നിയമം കണ്ടെത്തി.\n\n- (ക) i ഉം iii ഉം\n- (ഖ) ii ഉം iii ഉം\n- (ഗ) i ഉം iv ഉം\n- (ഘ) iii ഉം iv ഉം",
    "answer_malayalam": "**(ഗ) i ഉം iv ഉം ശരിയാണ്**"
  },
  {
    "question_number": 13,
    "marks": 3,
    "question_hindi": "**अनुच्छेद:** इसपर पिता ने नाराज़ होने के बजाय खुश हुए... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 13:** वाक्य विस्तार करें।\n( खुश होकर, गैलीलियो से, तब)\nपिताजी ने कहा।",
    "question_english": "**Passage:** At this, instead of getting angry... [Passage provided above]\n\n**Question 13:** Expand the sentence.\n(happily, to Galileo, then)\nFather said.",
    "answer_hindi": "**विस्तारित वाक्य:**\nतब पिताजी ने खुश होकर गैलीलियो से कहा।",
    "answer_english": "**Expanded Sentence:**\nThen father said to Galileo happily.",
    "question_malayalam": "**അനുച്ഛേദം:** ഇതിൽ പിതാവ് ദേഷ്യപ്പെടുന്നതിന് പകരം... [മുകളിൽ നൽകിയിരിക്കുന്ന ഖണ്ഡിക]\n\n**ചോദ്യം 13:** വാക്യം വികസിപ്പിക്കുക. (സന്തോഷത്തോടെ, ഗലീലിയോയോട്, അപ്പോൾ) അച്ഛൻ പറഞ്ഞു.",
    "answer_malayalam": "**വികസിപ്പിച്ച വാക്യം:** അപ്പോൾ അച്ഛൻ സന്തോഷത്തോടെ ഗലീലിയോയോട് പറഞ്ഞു."
  },
  {
    "question_number": 14,
    "marks": 2,
    "question_hindi": "**अनुच्छेद:** इसपर पिता ने नाराज़ होने के बजाय खुश हुए... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 14:** गैलीलियो के पिताजी नाराज़ होने के बजाय खुश हो गए। क्यों?",
    "question_english": "**Passage:** At this, instead of getting angry... [Passage provided above]\n\n**Question 14:** Galileo's father became happy instead of getting angry. Why?",
    "answer_hindi": "गैलीलियो के पिताजी इसलिए खुश हो गए क्योंकि उन्होंने गैलीलियो के अंदर हर चीज़ को तार्किक रूप से देखने, सवाल पूछने और प्रयोग करने की गहरी जिज्ञासा (वैज्ञानिक दृष्टिकोण) देखी। पिता समझ गए थे कि गैलीलियो लकीर का फकीर नहीं है, बल्कि वह खुद चीज़ों को साबित करना चाहता है, जो एक सच्चे वैज्ञानिक की निशानी होती है।",
    "answer_english": "Galileo's father became happy because he saw in Galileo a deep curiosity to look at everything logically, to ask questions, and to experiment (a scientific approach). The father understood that Galileo was not just a blind follower, but he wanted to prove things himself, which is the mark of a true scientist.",
    "question_malayalam": "**ചോദ്യം 14:** ഗലീലിയോയുടെ അച്ഛൻ ദേഷ്യപ്പെടുന്നതിന് പകരം സന്തോഷിക്കാൻ കാരണമെന്ത്?",
    "answer_malayalam": "ഗലീലിയോയ്ക്ക് കാര്യങ്ങളെ യുക്തിസഹമായി ചിന്തിക്കാനും ചോദ്യങ്ങൾ ചോദിക്കാനും പരീക്ഷണങ്ങൾ നടത്താനുമുള്ള താൽപ്പര്യമുണ്ടെന്ന് അച്ഛൻ മനസ്സിലാക്കി. ഒരു യഥാർത്ഥ ശാസ്ത്രജ്ഞന്റെ ഗുണങ്ങൾ മകനിൽ കണ്ടതുകൊണ്ടാണ് അദ്ദേഹം സന്തോഷിച്ചത്."
  },
  {
    "question_number": 15,
    "marks": 1,
    "question_hindi": "**सूचना:** नीचे दिए खंड पढ़कर 15 से 17 तक के प्रश्नों के उत्तर लिखें।\n\n**अनुच्छेद:** बात 1945 की है, जब जापान के दो शहरों- हिरोशिमा और नागसाकी में पहला एटम बम गिरा। पाँच लाख की आबादी वाला शहर हिरोशिमा तहस-नहस हो गया। बम गिराए जाने की एक महीने के बाद हिरोशिमा में विभिन्न प्रकार की बीमारियाँ फैल गई। स्वस्थ दिखाई देते लोग अचानक बीमार और कमज़ोर हो जाते, कुछ ही समय में मर जाते। यह सब इतना अजीब था कि लोगों को समझ ही नहीं आ रहा था कि यह क्या हो रहा हैं?\n\n**प्रश्न 15:** विशेषण शब्द चुनकर लिखें ।\n- (क) बीमारियाँ\n- (ख) शहर\n- (ग) महीना\n- (घ) पहला",
    "question_english": "**Instruction:** Read the passage below and answer questions 15 to 17.\n\n**Passage:** It's about 1945, when the first atom bomb fell on two Japanese cities - Hiroshima and Nagasaki. The city of Hiroshima, with a population of five lakh, was completely devastated. One month after the bombing, various kinds of diseases spread in Hiroshima. People who looked healthy would suddenly become sick and weak, and die in a short time. All this was so strange that people could not understand what was happening.\n\n**Question 15:** Choose and write the adjective word.\n- (a) Diseases\n- (b) City\n- (c) Month\n- (d) First",
    "answer_hindi": "**(घ) पहला**",
    "answer_english": "**(d) First**",
    "question_malayalam": "**സൂചന:** താഴെ നൽകിയിരിക്കുന്ന ഭാഗം വായിച്ച് 15 മുതൽ 17 വരെയുള്ള ചോദ്യങ്ങൾക്ക് ഉത്തരമെഴുതുക.\n\n**അനുച്ഛേദം:** 1945-ൽ ജപ്പാനിലെ ഹിരോഷിമയിലും നാഗസാക്കിയിലും ആദ്യത്തെ ആറ്റം ബോംബ് വീണു. ലക്ഷക്കണക്കിന് ആളുകൾ കൊല്ലപ്പെട്ടു. ബോംബ് വീണ് ഒരു മാസത്തിന് ശേഷം അവിടെ വിചിത്രമായ അസുഖങ്ങൾ പടർന്നു പിടിച്ചു. ആരോഗ്യവാനായി ഇരിക്കുന്നവർ പെട്ടെന്ന് മരിച്ചു വീഴുന്നു. എന്താണ് സംഭവിക്കുന്നതെന്ന് ആർക്കും മനസ്സിലായില്ല.\n\n**ചോദ്യം 15:** നാമവിശേഷണം (Adjective) കണ്ടെത്തുക.\n- (ക) രോഗങ്ങൾ\n- (ഖ) നഗരം\n- (ഗ) മാസം\n- (ഘ) ആദ്യത്തെ",
    "answer_malayalam": "**(ഘ) ആദ്യത്തെ**"
  },
  {
    "question_number": 16,
    "marks": 1,
    "question_hindi": "**अनुच्छेद:** बात 1945 की है... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 16:** नमूने के अनुसार वाक्य बदलकर लिखें ।\n\n**नमूना:** हिरोशिमा में बम गिरा -> हिरोशिमा में बम गिरा था\n**प्रश्न:** हज़ारों लोग मरे -> ....................",
    "question_english": "**Passage:** It's about 1945... [Passage provided above]\n\n**Question 16:** Change and write the sentence according to the example.\n\n**Example:** Bomb fell in Hiroshima -> Bomb had fallen in Hiroshima\n**Question:** Thousands of people died -> ....................",
    "answer_hindi": "**उत्तर:** हज़ारों लोग मरे थे।",
    "answer_english": "**Answer:** Thousands of people had died.",
    "question_malayalam": "**മാതൃകയനുസരിച്ച് മാറ്റിയെഴുതുക:**\nഹിരോഷിമയിൽ ബോംബ് വീണു -> ഹിരോഷിമയിൽ ബോംബ് വീണിരുന്നു.\nആയിരക്കണക്കിന് ആളുകൾ മരിച്ചു -> ...............",
    "answer_malayalam": "ആയിരക്കണക്കിന് ആളുകൾ മരിച്ചിരുന്നു."
  },
  {
    "question_number": 17,
    "marks": 2,
    "question_hindi": "**अनुच्छेद:** बात 1945 की है... [ऊपर दिया गया गद्यांश]\n\n**प्रश्न 17:** हिरोशिमा में अणु बम गिराए जाने का नतीजा क्या हुआ ?",
    "question_english": "**Passage:** It's about 1945... [Passage provided above]\n\n**Question 17:** What was the result of the atomic bombing in Hiroshima?",
    "answer_hindi": "हिरोशिमा में अणु बम गिराए जाने का नतीजा बहुत ही भयानक हुआ:\n\n1. **विनाश:** पाँच लाख की आबादी वाला पूरा शहर पूरी तरह से तहस-नहस और नष्ट हो गया।\n2. **बीमारियाँ:** बम गिराए जाने के एक महीने बाद वहाँ विभिन्न प्रकार की अजीब बीमारियाँ (रेडिएशन के कारण) फैल गईं।\n3. **मौतें:** जो लोग स्वस्थ दिखाई देते थे, वे भी अचानक बीमार और कमज़ोर होकर तड़प-तड़प कर मरने लगे।",
    "answer_english": "The result of dropping the atom bomb in Hiroshima was completely horrifying:\n\n1. **Destruction:** The entire city with a population of five lakhs was completely devastated and destroyed.\n2. **Diseases:** One month after the bombing, various types of strange diseases (due to radiation) spread there.\n3. **Deaths:** Even those people who appeared completely healthy suddenly became sick and weak and started dying in agony.",
    "question_malayalam": "**ചോദ്യം 17:** ഹിരോഷിമയിൽ ബോംബ് വീണതിന്റെ ആഘാതം എന്തായിരുന്നു?",
    "answer_malayalam": "ബോംബ് പ്രഹരത്തിൽ നഗരം പൂർണ്ണമായും തകർന്നു. വികിരണം മൂലം വിചിത്രമായ രോഗങ്ങൾ പടരുകയും ആരോഗ്യവാന്മാരായ ആളുകൾ പോലും പെട്ടെന്ന് മരിച്ചു വീഴുകയും ചെയ്തു. വലിയൊരു ജനവിഭാഗം ദുരിതത്തിലായി."
  }
];

export const hindiSampleQuestionsSets: HindiSampleQuestionSet[] = [
  {
    id: 'set-1',
    title: {
      en: 'Set 1',
      ml: 'സെറ്റ് 1',
      ar: 'सेट 1'
    },
    questions: set1
  },
  {
    id: 'set-2',
    title: {
      en: 'Set 2',
      ml: 'സെറ്റ് 2',
      ar: 'सेट 2'
    },
    questions: set2
  },
  {
    id: 'set-3',
    title: {
      en: 'Set 3',
      ml: 'സെറ്റ് 3',
      ar: 'सेट 3'
    },
    questions: set3
  }
];

// For backward compatibility
export const hindiSampleQuestions = set1;
