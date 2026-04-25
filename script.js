const quoteData = [
  // MOTIVATION - 25
  ["Push yourself, because no one else is going to do it for you.", "Unknown", "motivation"],
  ["Dream big and dare to fail.", "Norman Vaughan", "motivation"],
  ["Do something today that your future self will thank you for.", "Unknown", "motivation"],
  ["Great things never come from comfort zones.", "Unknown", "motivation"],
  ["Start where you are. Use what you have. Do what you can.", "Arthur Ashe", "motivation"],
  ["Doubt kills more dreams than failure ever will.", "Suzy Kassem", "motivation"],
  ["Your only limit is your mind.", "Unknown", "motivation"],
  ["Wake up with determination and sleep with satisfaction.", "Unknown", "motivation"],
  ["The harder you work for something, the greater you will feel when you achieve it.", "Unknown", "motivation"],
  ["Little by little, one travels far.", "J.R.R. Tolkien", "motivation"],
  ["Believe you can and you are halfway there.", "Theodore Roosevelt", "motivation"],
  ["Do not stop until you are proud.", "Unknown", "motivation"],
  ["Every day is a chance to get better.", "Unknown", "motivation"],
  ["Your dreams are waiting for your discipline.", "Unknown", "motivation"],
  ["Every sunrise is a new chance to try again.", "Unknown", "motivation"],
  ["Do not fear slow progress. Fear standing still.", "Unknown", "motivation"],
  ["Your effort today is your confidence tomorrow.", "Unknown", "motivation"],
  ["Keep going even when it feels slow.", "Unknown", "motivation"],
  ["Make today count.", "Unknown", "motivation"],
  ["You become strong by doing hard things.", "Unknown", "motivation"],
  ["Every small effort is a step toward your dream.", "Unknown", "motivation"],
  ["Your future is created by what you do now.", "Unknown", "motivation"],
  ["Keep moving, even if the steps are tiny.", "Unknown", "motivation"],
  ["You do not need perfect timing, you need action.", "Unknown", "motivation"],
  ["Your dream deserves your daily effort.", "Unknown", "motivation"],

  // STUDY - 25
  ["Small progress every day adds up to big results.", "Unknown", "study"],
  ["One focused hour is better than five distracted hours.", "Unknown", "study"],
  ["Study while others are sleeping, and you will shine while others are wishing.", "Unknown", "study"],
  ["Your future depends on what you do today.", "Mahatma Gandhi", "study"],
  ["Success in exams comes from daily discipline, not last-minute panic.", "Unknown", "study"],
  ["Study hard in silence and let your results make the noise.", "Unknown", "study"],
  ["The expert in anything was once a beginner.", "Helen Hayes", "study"],
  ["Focus on understanding, not just finishing.", "Unknown", "study"],
  ["A little study every day keeps fear away.", "Unknown", "study"],
  ["Learn today, lead tomorrow.", "Unknown", "study"],
  ["Do not study to pass, study to grow.", "Unknown", "study"],
  ["Revision turns learning into confidence.", "Unknown", "study"],
  ["Your notes today are your marks tomorrow.", "Unknown", "study"],
  ["One chapter, one problem, one step at a time.", "Unknown", "study"],
  ["Your study table is where your future is built.", "Unknown", "study"],
  ["Concentration is a skill. Practice it daily.", "Unknown", "study"],
  ["Study with focus, revise with patience.", "Unknown", "study"],
  ["Marks improve when habits improve.", "Unknown", "study"],
  ["A clear goal makes studying easier.", "Unknown", "study"],
  ["Do not chase motivation. Build a routine.", "Unknown", "study"],
  ["Your books are building your future quietly.", "Unknown", "study"],
  ["Study today like you are thanking your future self.", "Unknown", "study"],
  ["A strong revision plan creates strong results.", "Unknown", "study"],
  ["Focus is the best study material.", "Unknown", "study"],
  ["Every solved problem removes one fear.", "Unknown", "study"],

  // LIFE - 25
  ["Life becomes beautiful when you stop comparing and start improving.", "Unknown", "life"],
  ["Life is not about being perfect. It is about being better than yesterday.", "Unknown", "life"],
  ["Be kind, stay patient, and keep growing.", "Unknown", "life"],
  ["Life is a journey, not a race.", "Unknown", "life"],
  ["Enjoy the little things, because one day they may become big memories.", "Unknown", "life"],
  ["A calm mind brings inner strength.", "Unknown", "life"],
  ["Life gets better when you choose peace over pressure.", "Unknown", "life"],
  ["Do not let a bad day make you feel like you have a bad life.", "Unknown", "life"],
  ["Grow through what you go through.", "Unknown", "life"],
  ["Your life changes when your habits change.", "Unknown", "life"],
  ["Be gentle with yourself. You are still learning.", "Unknown", "life"],
  ["Every season of life has something to teach you.", "Unknown", "life"],
  ["Choose progress over perfection.", "Unknown", "life"],
  ["Life rewards those who keep learning.", "Unknown", "life"],
  ["Peace is also a form of success.", "Unknown", "life"],
  ["Your mindset shapes your day.", "Unknown", "life"],
  ["Let go of what makes your heart heavy.", "Unknown", "life"],
  ["Simple days can still be beautiful.", "Unknown", "life"],
  ["Be patient with your own becoming.", "Unknown", "life"],
  ["You are allowed to start again.", "Unknown", "life"],
  ["Life feels lighter when you stop rushing yourself.", "Unknown", "life"],
  ["A peaceful heart makes every day softer.", "Unknown", "life"],
  ["Your story is still being written.", "Unknown", "life"],
  ["The little steps matter more than you think.", "Unknown", "life"],
  ["Life grows brighter when gratitude becomes a habit.", "Unknown", "life"],

  // SUCCESS - 25
  ["Success is the sum of small efforts repeated day after day.", "Robert Collier", "success"],
  ["Success does not come from comfort zones.", "Unknown", "success"],
  ["Dream big, start small, but start today.", "Unknown", "success"],
  ["Success is not luck, it is preparation meeting opportunity.", "Unknown", "success"],
  ["Work hard until your results introduce you.", "Unknown", "success"],
  ["Success starts with self-belief.", "Unknown", "success"],
  ["The secret of success is consistency.", "Unknown", "success"],
  ["Success is built on discipline, focus, and patience.", "Unknown", "success"],
  ["Do not wait for opportunity. Create it.", "Unknown", "success"],
  ["Success begins the moment you refuse to quit.", "Unknown", "success"],
  ["Big achievements are made of small daily actions.", "Unknown", "success"],
  ["Success is not final, failure is not fatal.", "Winston Churchill", "success"],
  ["Keep going. Your hard work is not wasted.", "Unknown", "success"],
  ["Success loves preparation.", "Unknown", "success"],
  ["Big goals need small routines.", "Unknown", "success"],
  ["Your consistency is your superpower.", "Unknown", "success"],
  ["Results come to those who keep showing up.", "Unknown", "success"],
  ["Success grows from focused action.", "Unknown", "success"],
  ["Your work will speak one day.", "Unknown", "success"],
  ["Winners are beginners who never stopped.", "Unknown", "success"],
  ["Success is built when nobody is watching.", "Unknown", "success"],
  ["Every sacrifice today becomes strength tomorrow.", "Unknown", "success"],
  ["Success follows people who respect their routine.", "Unknown", "success"],
  ["Your patience is part of your success story.", "Unknown", "success"],
  ["Small wins create big confidence.", "Unknown", "success"],

  // LOVE - 25
  ["Love is not about perfection, it is about patience and understanding.", "Unknown", "love"],
  ["The right person will make peace feel exciting.", "Unknown", "love"],
  ["Love grows when respect and trust are watered daily.", "Unknown", "love"],
  ["True love feels like home.", "Unknown", "love"],
  ["A healthy love gives you calm, not confusion.", "Unknown", "love"],
  ["Love is choosing each other even on ordinary days.", "Unknown", "love"],
  ["Real love is soft, loyal, and patient.", "Unknown", "love"],
  ["The best love makes you feel safe to be yourself.", "Unknown", "love"],
  ["Love is not loud always; sometimes it is quiet care.", "Unknown", "love"],
  ["A beautiful relationship is built with friendship and respect.", "Unknown", "love"],
  ["Love is in the little things done with a big heart.", "Unknown", "love"],
  ["When love is real, effort feels natural.", "Unknown", "love"],
  ["The best kind of love makes life lighter.", "Unknown", "love"],
  ["Love becomes stronger with honest communication.", "Unknown", "love"],
  ["Soft love is still powerful.", "Unknown", "love"],
  ["Choose love that feels safe.", "Unknown", "love"],
  ["The best relationships grow slowly and deeply.", "Unknown", "love"],
  ["Loyalty is love in action.", "Unknown", "love"],
  ["Real love respects dreams.", "Unknown", "love"],
  ["Care is the sweetest language.", "Unknown", "love"],
  ["Love feels beautiful when both hearts feel heard.", "Unknown", "love"],
  ["A loyal heart is a rare blessing.", "Unknown", "love"],
  ["True love adds peace to your life.", "Unknown", "love"],
  ["Love is effort wrapped in kindness.", "Unknown", "love"],
  ["A strong bond is built through small honest moments.", "Unknown", "love"],

  // CONFIDENCE - 25
  ["Confidence grows when you keep promises to yourself.", "Unknown", "confidence"],
  ["You are stronger than the excuses your mind creates.", "Unknown", "confidence"],
  ["Believe in your work even when the results are not visible yet.", "Unknown", "confidence"],
  ["Confidence is built by action, not overthinking.", "Unknown", "confidence"],
  ["You do not need to be perfect to be powerful.", "Unknown", "confidence"],
  ["Trust yourself. You have survived difficult days before.", "Unknown", "confidence"],
  ["Your voice matters. Speak with courage.", "Unknown", "confidence"],
  ["Be proud of how far you have come.", "Unknown", "confidence"],
  ["Confidence is quiet. Insecurity is loud.", "Unknown", "confidence"],
  ["You are capable of more than you think.", "Unknown", "confidence"],
  ["Stand tall. You are becoming your best version.", "Unknown", "confidence"],
  ["Self-belief is your strongest outfit.", "Unknown", "confidence"],
  ["Do not shrink yourself to fit small spaces.", "Unknown", "confidence"],
  ["Confidence is built in private moments.", "Unknown", "confidence"],
  ["You are enough, even while improving.", "Unknown", "confidence"],
  ["Walk like you trust your journey.", "Unknown", "confidence"],
  ["Your courage is louder than your fear.", "Unknown", "confidence"],
  ["Stop doubting the strength you already have.", "Unknown", "confidence"],
  ["You can be nervous and still be powerful.", "Unknown", "confidence"],
  ["Show up as yourself.", "Unknown", "confidence"],
  ["Confidence starts when you stop needing everyone’s approval.", "Unknown", "confidence"],
  ["Your growth is proof of your strength.", "Unknown", "confidence"],
  ["Believe in the version of you that is still growing.", "Unknown", "confidence"],
  ["You are allowed to take up space.", "Unknown", "confidence"],
  ["Your confidence rises when your actions match your goals.", "Unknown", "confidence"],

  // HAPPINESS - 25
  ["Happiness is found in simple moments and grateful thoughts.", "Unknown", "happiness"],
  ["A calm mind can turn an ordinary day into a beautiful one.", "Unknown", "happiness"],
  ["Happiness begins when you stop waiting for perfect conditions.", "Unknown", "happiness"],
  ["Smile at the little things. They are not little.", "Unknown", "happiness"],
  ["Joy grows where gratitude lives.", "Unknown", "happiness"],
  ["Choose happiness, even in small doses.", "Unknown", "happiness"],
  ["A peaceful heart is a happy heart.", "Unknown", "happiness"],
  ["Happiness is not having everything; it is appreciating what you have.", "Unknown", "happiness"],
  ["Create a life that feels good inside, not just looks good outside.", "Unknown", "happiness"],
  ["Collect moments, not worries.", "Unknown", "happiness"],
  ["Happiness is a habit, not a destination.", "Unknown", "happiness"],
  ["Let your heart rest. You deserve peace.", "Unknown", "happiness"],
  ["The happiest people find light in simple days.", "Unknown", "happiness"],
  ["Happiness grows when you notice good things.", "Unknown", "happiness"],
  ["A grateful heart sees beauty everywhere.", "Unknown", "happiness"],
  ["Laugh a little louder today.", "Unknown", "happiness"],
  ["Peaceful routines create happy days.", "Unknown", "happiness"],
  ["Happiness is a quiet kind of strength.", "Unknown", "happiness"],
  ["Choose joy without guilt.", "Unknown", "happiness"],
  ["Let small wins make you smile.", "Unknown", "happiness"],
  ["Happiness comes when you stop ignoring small blessings.", "Unknown", "happiness"],
  ["A soft heart can still live a strong life.", "Unknown", "happiness"],
  ["Joy is found in peaceful moments.", "Unknown", "happiness"],
  ["Your smile is also progress.", "Unknown", "happiness"],
  ["A happy day starts with a grateful thought.", "Unknown", "happiness"],

  // DISCIPLINE - 25
  ["Discipline turns dreams into daily action.", "Unknown", "discipline"],
  ["Discipline is choosing what you want most over what you want now.", "Unknown", "discipline"],
  ["Motivation starts the journey, but discipline completes it.", "Unknown", "discipline"],
  ["Discipline is doing it even when the mood is missing.", "Unknown", "discipline"],
  ["A disciplined mind creates a powerful life.", "Unknown", "discipline"],
  ["Consistency is stronger than intensity.", "Unknown", "discipline"],
  ["Your routine decides your future.", "Unknown", "discipline"],
  ["Discipline builds the bridge between goals and results.", "Unknown", "discipline"],
  ["Show up daily. That is where the magic happens.", "Unknown", "discipline"],
  ["Discipline is self-love in action.", "Unknown", "discipline"],
  ["Win the morning, win the day.", "Unknown", "discipline"],
  ["The pain of discipline is better than the regret of delay.", "Unknown", "discipline"],
  ["Small daily actions create strong character.", "Unknown", "discipline"],
  ["Discipline is your promise to your future.", "Unknown", "discipline"],
  ["Do it before your excuses become louder.", "Unknown", "discipline"],
  ["Discipline makes confidence automatic.", "Unknown", "discipline"],
  ["A strong routine creates a strong person.", "Unknown", "discipline"],
  ["Every disciplined day is a vote for your dream.", "Unknown", "discipline"],
  ["Your habits are writing your future.", "Unknown", "discipline"],
  ["Do the work, even quietly.", "Unknown", "discipline"],
  ["Discipline is the daily proof that you care about your future.", "Unknown", "discipline"],
  ["Your routine is louder than your wishes.", "Unknown", "discipline"],
  ["Discipline makes difficult things normal.", "Unknown", "discipline"],
  ["Strong habits create a strong life.", "Unknown", "discipline"],
  ["Do not negotiate with excuses.", "Unknown", "discipline"]
];

const quotes = quoteData.map((item, index) => ({
  text: item[0],
  originalText: item[0],
  author: item[1],
  originalAuthor: item[1],
  category: item[2],
  image: `https://picsum.photos/seed/quote-${index + 1}/1300/850`
}));

let currentCategory = "all";
let currentQuote = null;
let currentFilteredQuotes = [...quotes];
let isMusicPlaying = false;
let audioContext;
let moodOscillator;
let moodGain;

const appTitle = document.getElementById("appTitle");
const appSubtitle = document.getElementById("appSubtitle");
const dailyTitle = document.getElementById("dailyTitle");
const favoritesTitle = document.getElementById("favoritesTitle");
const languageLabel = document.getElementById("languageLabel");

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteImage = document.getElementById("quoteImage");
const quoteCard = document.getElementById("quoteCard");
const message = document.getElementById("message");
const favoritesList = document.getElementById("favoritesList");
const searchInput = document.getElementById("searchInput");
const quoteCounter = document.getElementById("quoteCounter");
const categoryCount = document.getElementById("categoryCount");
const dailyQuoteText = document.getElementById("dailyQuoteText");
const dailyQuoteAuthor = document.getElementById("dailyQuoteAuthor");

const newQuoteBtn = document.getElementById("newQuoteBtn");
const apiQuoteBtn = document.getElementById("apiQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const tweetBtn = document.getElementById("tweetBtn");
const whatsappBtn = document.getElementById("whatsappBtn");
const downloadBtn = document.getElementById("downloadBtn");
const speakBtn = document.getElementById("speakBtn");
const moodMusicBtn = document.getElementById("moodMusicBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const themeBtn = document.getElementById("themeBtn");
const languageSelect = document.getElementById("languageSelect");

const categoryLabels = {
  all: { en: "All", kn: "ಎಲ್ಲಾ", hi: "सभी", ta: "அனைத்தும்", te: "అన్నీ", ml: "എല്ലാം", mr: "सर्व", bn: "সব", gu: "બધા", pa: "ਸਾਰੇ", ur: "سب", or: "ସମସ୍ତ" },
  motivation: { en: "Motivation", kn: "ಪ್ರೇರಣೆ", hi: "प्रेरणा", ta: "ஊக்கம்", te: "ప్రేరణ", ml: "പ്രചോദനം", mr: "प्रेरणा", bn: "অনুপ্রেরণা", gu: "પ્રેરણા", pa: "ਪ੍ਰੇਰਣਾ", ur: "حوصلہ افزائی", or: "ପ୍ରେରଣା" },
  study: { en: "Study", kn: "ಅಧ್ಯಯನ", hi: "अध्ययन", ta: "படிப்பு", te: "చదువు", ml: "പഠനം", mr: "अभ्यास", bn: "পড়াশোনা", gu: "અભ્યાસ", pa: "ਪੜ੍ਹਾਈ", ur: "مطالعہ", or: "ପଢ଼ା" },
  life: { en: "Life", kn: "ಜೀವನ", hi: "जीवन", ta: "வாழ்க்கை", te: "జీవితం", ml: "ജീവിതം", mr: "जीवन", bn: "জীবন", gu: "જીવન", pa: "ਜ਼ਿੰਦਗੀ", ur: "زندگی", or: "ଜୀବନ" },
  success: { en: "Success", kn: "ಯಶಸ್ಸು", hi: "सफलता", ta: "வெற்றி", te: "విజయం", ml: "വിജയം", mr: "यश", bn: "সাফল্য", gu: "સફળતા", pa: "ਸਫਲਤਾ", ur: "کامیابی", or: "ସଫଳତା" },
  love: { en: "Love", kn: "ಪ್ರೀತಿ", hi: "प्यार", ta: "காதல்", te: "ప్రేమ", ml: "സ്നേഹം", mr: "प्रेम", bn: "ভালোবাসা", gu: "પ્રેમ", pa: "ਪਿਆਰ", ur: "محبت", or: "ପ୍ରେମ" },
  confidence: { en: "Confidence", kn: "ಆತ್ಮವಿಶ್ವಾಸ", hi: "आत्मविश्वास", ta: "நம்பிக்கை", te: "ఆత్మవిశ్వాసం", ml: "ആത്മവിശ്വാസം", mr: "आत्मविश्वास", bn: "আত্মবিশ্বাস", gu: "આત્મવિશ્વાસ", pa: "ਆਤਮ ਵਿਸ਼ਵਾਸ", ur: "اعتماد", or: "ଆତ୍ମବିଶ୍ୱାସ" },
  happiness: { en: "Happiness", kn: "ಸಂತೋಷ", hi: "खुशी", ta: "மகிழ்ச்சி", te: "ఆనందం", ml: "സന്തോഷം", mr: "आनंद", bn: "সুখ", gu: "ખુશી", pa: "ਖੁਸ਼ੀ", ur: "خوشی", or: "ଖୁସି" },
  discipline: { en: "Discipline", kn: "ಶಿಸ್ತು", hi: "अनुशासन", ta: "ஒழுக்கம்", te: "క్రమశిక్షణ", ml: "അച്ചടക്കം", mr: "शिस्त", bn: "শৃঙ্খলা", gu: "શિસ્ત", pa: "ਅਨੁਸ਼ਾਸਨ", ur: "نظم و ضبط", or: "ଶୃଙ୍ଖଳା" }
};

const uiTranslations = {
  en: ["✨ Random Quote Generator", "Bright quotes for your mood, mindset and motivation", "🌟 Quote of the Day", "Search quotes... example: study, success, love", "🌐 Language:", "💖 Favorite Quotes", "New Quote", "API Quote", "Copy", "Tweet", "WhatsApp", "Download Image", "Read Aloud", "Mood Music", "Favorite", "🌙 Dark"],
  kn: ["✨ ಯಾದೃಚ್ಛಿಕ ಉಲ್ಲೇಖ ಜನರೇಟರ್", "ನಿಮ್ಮ ಮನಸ್ಥಿತಿ ಮತ್ತು ಪ್ರೇರಣೆಗೆ ಪ್ರಕಾಶಮಾನವಾದ ಉಲ್ಲೇಖಗಳು", "🌟 ಇಂದಿನ ಉಲ್ಲೇಖ", "ಉಲ್ಲೇಖಗಳನ್ನು ಹುಡುಕಿ...", "🌐 ಭಾಷೆ:", "💖 ಇಷ್ಟವಾದ ಉಲ್ಲೇಖಗಳು", "ಹೊಸ ಉಲ್ಲೇಖ", "API ಉಲ್ಲೇಖ", "ನಕಲಿಸಿ", "ಟ್ವೀಟ್", "ವಾಟ್ಸಾಪ್", "ಚಿತ್ರ ಡೌನ್‌ಲೋಡ್", "ಜೋರಾಗಿ ಓದಿ", "ಮೂಡ್ ಸಂಗೀತ", "ಇಷ್ಟಪಟ್ಟದ್ದು", "🌙 ಡಾರ್ಕ್"],
  hi: ["✨ रैंडम कोट जनरेटर", "आपके मूड और मोटिवेशन के लिए सुंदर कोट्स", "🌟 आज का कोट", "कोट खोजें...", "🌐 भाषा:", "💖 पसंदीदा कोट्स", "नया कोट", "API कोट", "कॉपी", "ट्वीट", "व्हाट्सएप", "इमेज डाउनलोड", "जोर से पढ़ें", "मूड म्यूजिक", "फेवरेट", "🌙 डार्क"]
};

const speechLanguages = {
  en: "en-US", kn: "kn-IN", hi: "hi-IN", ta: "ta-IN", te: "te-IN", ml: "ml-IN",
  mr: "mr-IN", bn: "bn-IN", gu: "gu-IN", pa: "pa-IN", ur: "ur-IN", or: "or-IN"
};

const moodFrequencies = {
  motivation: 520, study: 432, life: 396, success: 600,
  love: 330, confidence: 480, happiness: 700, discipline: 410,
  all: 440, api: 440
};

newQuoteBtn.addEventListener("click", generateQuote);
apiQuoteBtn.addEventListener("click", getApiQuote);
copyBtn.addEventListener("click", copyQuote);
tweetBtn.addEventListener("click", tweetQuote);
whatsappBtn.addEventListener("click", shareWhatsApp);
downloadBtn.addEventListener("click", downloadQuoteImage);
speakBtn.addEventListener("click", readQuoteAloud);
moodMusicBtn.addEventListener("click", toggleMoodMusic);
favoriteBtn.addEventListener("click", saveFavorite);
themeBtn.addEventListener("click", toggleTheme);
languageSelect.addEventListener("change", changeLanguage);
searchInput.addEventListener("input", generateQuote);

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    searchInput.value = "";
    generateQuote();
  });
});

function getFilteredQuotes() {
  const searchText = searchInput.value.toLowerCase().trim();

  let filtered = currentCategory === "all"
    ? quotes
    : quotes.filter(quote => quote.category === currentCategory);

  if (searchText !== "") {
    filtered = filtered.filter(quote =>
      quote.originalText.toLowerCase().includes(searchText) ||
      quote.originalAuthor.toLowerCase().includes(searchText) ||
      quote.category.toLowerCase().includes(searchText)
    );
  }

  return filtered;
}

function generateQuote() {
  currentFilteredQuotes = getFilteredQuotes();
  updateCategoryCount();

  if (currentFilteredQuotes.length === 0) {
    quoteText.textContent = "No quote found. Try another search word.";
    quoteAuthor.textContent = "— Search Result";
    quoteCounter.textContent = "0 quotes found";
    quoteImage.src = "https://picsum.photos/seed/no-result/1300/850";
    return;
  }

  const randomIndex = Math.floor(Math.random() * currentFilteredQuotes.length);
  currentQuote = currentFilteredQuotes[randomIndex];

  updateQuoteUI(currentQuote);
  showMessage("");
}

async function getApiQuote() {
  showMessage("Loading API quote...");

  try {
    const response = await fetch("https://api.quotable.io/quotes/random");

    if (!response.ok) throw new Error("API failed");

    const data = await response.json();
    const apiData = Array.isArray(data) ? data[0] : data;

    currentQuote = {
      text: apiData.content,
      originalText: apiData.content,
      author: apiData.author,
      originalAuthor: apiData.author,
      category: "api",
      image: `https://picsum.photos/seed/api-${Date.now()}/1300/850`
    };

    updateQuoteUI(currentQuote);
    quoteCounter.textContent = "Real API Quote";
    showMessage("API quote loaded!");
  } catch (error) {
    showMessage("API not available now, showing local quote.");
    generateQuote();
  }
}

function updateQuoteUI(quote) {
  quoteCard.classList.remove("fade");
  void quoteCard.offsetWidth;
  quoteCard.classList.add("fade");

  quote.text = quote.originalText;
  quote.author = quote.originalAuthor;

  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `— ${quote.author}`;
  quoteImage.src = quote.image;
  document.body.style.backgroundImage = `url('${quote.image}')`;

  const globalIndex = quotes.findIndex(item => item.originalText === quote.originalText);
  quoteCounter.textContent = globalIndex >= 0 ? `Quote ${globalIndex + 1} of ${quotes.length}` : "Real API Quote";

  translateCurrentQuote(languageSelect.value);
}

function updateCategoryCount() {
  const lang = languageSelect.value;
  const categoryName = categoryLabels[currentCategory]?.[lang] || categoryLabels[currentCategory]?.en || currentCategory;
  categoryCount.textContent = `${categoryName} : ${currentFilteredQuotes.length} quotes available`;
}

function showQuoteOfTheDay() {
  const today = new Date();
  const dayNumber = today.getFullYear() + today.getMonth() + today.getDate();
  const dailyQuote = quotes[dayNumber % quotes.length];

  dailyQuoteText.textContent = `"${dailyQuote.originalText}"`;
  dailyQuoteAuthor.textContent = `— ${dailyQuote.originalAuthor}`;
}

function copyQuote() {
  if (!currentQuote) return showMessage("Please generate a quote first.");

  navigator.clipboard.writeText(`${quoteText.textContent} ${quoteAuthor.textContent}`)
    .then(() => showMessage("Quote copied!"))
    .catch(() => showMessage("Copy failed. Try again."));
}

function tweetQuote() {
  if (!currentQuote) return showMessage("Please generate a quote first.");

  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quoteText.textContent} ${quoteAuthor.textContent}`)}`, "_blank");
}

function shareWhatsApp() {
  if (!currentQuote) return showMessage("Please generate a quote first.");

  window.open(`https://wa.me/?text=${encodeURIComponent(`${quoteText.textContent} ${quoteAuthor.textContent}`)}`, "_blank");
}

function readQuoteAloud() {
  if (!currentQuote) return showMessage("Please generate a quote first.");

  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(`${quoteText.textContent} ${quoteAuthor.textContent}`);
  speech.lang = speechLanguages[languageSelect.value] || "en-US";
  speech.rate = 0.9;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
  showMessage("Reading quote aloud...");
}

function toggleMoodMusic() {
  if (isMusicPlaying) {
    stopMoodMusic();
  } else {
    playMoodMusic();
  }
}

function playMoodMusic() {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  moodOscillator = audioContext.createOscillator();
  moodGain = audioContext.createGain();

  const mood = currentQuote ? currentQuote.category : currentCategory;
  const frequency = moodFrequencies[mood] || 440;

  moodOscillator.type = "sine";
  moodOscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  moodGain.gain.setValueAtTime(0.04, audioContext.currentTime);

  moodOscillator.connect(moodGain);
  moodGain.connect(audioContext.destination);
  moodOscillator.start();

  isMusicPlaying = true;
  moodMusicBtn.textContent = "Stop Music";
  showMessage("Mood music started...");
}

function stopMoodMusic() {
  if (moodOscillator) moodOscillator.stop();

  isMusicPlaying = false;
  updateUITranslation(languageSelect.value);
  showMessage("Mood music stopped.");
}

function saveFavorite() {
  if (!currentQuote) return showMessage("Please generate a quote first.");

  let favorites = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];

  const savedQuote = {
    text: quoteText.textContent.replaceAll('"', ""),
    author: quoteAuthor.textContent.replace("— ", ""),
    category: currentQuote.category,
    image: currentQuote.image
  };

  const alreadySaved = favorites.some(item => item.text === savedQuote.text);

  if (alreadySaved) return showMessage("Already added to favorites.");

  favorites.push(savedQuote);
  localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));

  showMessage("Added to favorites!");
  displayFavorites();
}

function displayFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];
  favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    favoritesList.innerHTML = `<p class="empty">No favorite quotes yet.</p>`;
    return;
  }

  favorites.forEach((quote, index) => {
    const item = document.createElement("div");
    item.className = "favorite-item";

    item.innerHTML = `
      <p>"${quote.text}"</p>
      <span>— ${quote.author}</span>
      <br>
      <button class="delete-btn" onclick="deleteFavorite(${index})">Delete</button>
    `;

    favoritesList.appendChild(item);
  });
}

function deleteFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];
  favorites.splice(index, 1);
  localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
  showMessage("Favorite deleted.");
  displayFavorites();
}

function downloadQuoteImage() {
  if (!currentQuote) return showMessage("Please generate a quote first.");

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 1200;
  canvas.height = 800;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#ff4ecd");
  gradient.addColorStop(0.5, "#6a00f4");
  gradient.addColorStop(1, "#00c2ff");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.18)";
  ctx.fillRect(80, 100, 1040, 600);

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";

  ctx.font = "bold 52px Segoe UI";
  wrapText(ctx, quoteText.textContent, 600, 330, 930, 68);

  ctx.font = "bold 34px Segoe UI";
  ctx.fillText(quoteAuthor.textContent, 600, 570);

  ctx.font = "bold 24px Segoe UI";
  ctx.fillText("Random Quote Generator", 600, 690);

  const link = document.createElement("a");
  link.download = "quote-image.png";
  link.href = canvas.toDataURL("image/png");
  link.click();

  showMessage("Quote image downloaded!");
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let lines = [];

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && i > 0) {
      lines.push(line);
      line = words[i] + " ";
    } else {
      line = testLine;
    }
  }

  lines.push(line);
  const startY = y - ((lines.length - 1) * lineHeight) / 2;

  lines.forEach((singleLine, index) => {
    ctx.fillText(singleLine, x, startY + index * lineHeight);
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light";
    localStorage.setItem("theme", "dark");
  } else {
    updateUITranslation(languageSelect.value);
    localStorage.setItem("theme", "light");
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️ Light";
  }
}

function changeLanguage() {
  const lang = languageSelect.value;
  updateUITranslation(lang);
  updateCategoryButtons(lang);
  updateCategoryCount();

  if (currentQuote) translateCurrentQuote(lang);
  translateDailyQuote(lang);

  showMessage("Language changed.");
}

function updateUITranslation(lang) {
  const t = uiTranslations[lang] || uiTranslations.en;

  appTitle.textContent = t[0];
  appSubtitle.textContent = t[1];
  dailyTitle.textContent = t[2];
  searchInput.placeholder = t[3];
  languageLabel.textContent = t[4];
  favoritesTitle.textContent = t[5];

  newQuoteBtn.textContent = t[6];
  apiQuoteBtn.textContent = t[7];
  copyBtn.textContent = t[8];
  tweetBtn.textContent = t[9];
  whatsappBtn.textContent = t[10];
  downloadBtn.textContent = t[11];
  speakBtn.textContent = t[12];

  if (!isMusicPlaying) moodMusicBtn.textContent = t[13];

  favoriteBtn.textContent = t[14];

  if (!document.body.classList.contains("dark")) {
    themeBtn.textContent = t[15];
  }
}

function updateCategoryButtons(lang) {
  document.querySelectorAll(".category").forEach(button => {
    const key = button.dataset.category;
    button.textContent = categoryLabels[key]?.[lang] || categoryLabels[key]?.en || key;
  });
}

async function translateCurrentQuote(lang) {
  if (!currentQuote) return;

  if (lang === "en") {
    quoteText.textContent = `"${currentQuote.originalText}"`;
    quoteAuthor.textContent = `— ${currentQuote.originalAuthor}`;
    return;
  }

  try {
    showMessage("Translating quote...");

    const translatedQuote = await translateText(currentQuote.originalText, lang);
    const translatedAuthor = await translateText(currentQuote.originalAuthor, lang);

    quoteText.textContent = `"${translatedQuote}"`;
    quoteAuthor.textContent = `— ${translatedAuthor}`;

    showMessage("Quote translated.");
  } catch (error) {
    showMessage("Translation not available now.");
  }
}

async function translateDailyQuote(lang) {
  const today = new Date();
  const dayNumber = today.getFullYear() + today.getMonth() + today.getDate();
  const dailyQuote = quotes[dayNumber % quotes.length];

  if (lang === "en") {
    dailyQuoteText.textContent = `"${dailyQuote.originalText}"`;
    dailyQuoteAuthor.textContent = `— ${dailyQuote.originalAuthor}`;
    return;
  }

  try {
    const translatedQuote = await translateText(dailyQuote.originalText, lang);
    const translatedAuthor = await translateText(dailyQuote.originalAuthor, lang);

    dailyQuoteText.textContent = `"${translatedQuote}"`;
    dailyQuoteAuthor.textContent = `— ${translatedAuthor}`;
  } catch (error) {
    dailyQuoteText.textContent = `"${dailyQuote.originalText}"`;
    dailyQuoteAuthor.textContent = `— ${dailyQuote.originalAuthor}`;
  }
}

async function translateText(text, targetLanguage) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.responseData.translatedText;
}

function showMessage(text) {
  message.textContent = text;

  if (text !== "") {
    setTimeout(() => {
      message.textContent = "";
    }, 2500);
  }
}

/* Animated particles background */
const canvas = document.getElementById("particlesCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 78, 205, 0.75)";
    ctx.fill();

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

resizeCanvas();
createParticles();
animateParticles();

loadTheme();
showQuoteOfTheDay();
updateUITranslation("en");
updateCategoryButtons("en");
generateQuote();
displayFavorites();