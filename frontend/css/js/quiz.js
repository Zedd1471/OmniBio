// omniBio-frontend/js/quiz.js

const questionPool = [
  { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], answer: "Mitochondria" },
  { question: "Which molecule carries genetic information?", options: ["RNA", "DNA", "Protein", "Lipid"], answer: "DNA" },
  { question: "Which organelle is responsible for protein synthesis?", options: ["Golgi body", "Mitochondria", "Ribosome", "Lysosome"], answer: "Ribosome" },
  { question: "Which of these is a prokaryote?", options: ["Yeast", "Bacteria", "Mushroom", "Algae"], answer: "Bacteria" },
  { question: "Which process converts glucose to energy?", options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"], answer: "Respiration" },
  { question: "What is the basic unit of life?", options: ["Atom", "Tissue", "Organ", "Cell"], answer: "Cell" },
  { question: "Which vitamin is produced in the skin?", options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin B12"], answer: "Vitamin D" },
  { question: "What is the function of white blood cells?", options: ["Clotting", "Transport oxygen", "Fight infection", "Form bones"], answer: "Fight infection" },
  { question: "Which blood cells help in clotting?", options: ["RBCs", "WBCs", "Platelets", "Plasma"], answer: "Platelets" },
  { question: "What pigment is found in red blood cells?", options: ["Chlorophyll", "Hemoglobin", "Myoglobin", "Melanin"], answer: "Hemoglobin" },
  { question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"], answer: "Cerebellum" },
  { question: "What is the genetic material in viruses?", options: ["DNA", "RNA", "Protein", "Both DNA or RNA"], answer: "Both DNA or RNA" },
  { question: "Which of these is not a carbohydrate?", options: ["Glucose", "Starch", "Cellulose", "Urea"], answer: "Urea" },
  { question: "Which of these helps in nitrogen fixation?", options: ["E. coli", "Rhizobium", "Salmonella", "Lactobacillus"], answer: "Rhizobium" },
  { question: "Which organ removes waste from the blood?", options: ["Liver", "Heart", "Kidney", "Lungs"], answer: "Kidney" },
  { question: "Which enzyme breaks down starch?", options: ["Pepsin", "Amylase", "Lipase", "Trypsin"], answer: "Amylase" },
  { question: "What is the pH of blood?", options: ["6.8", "7.0", "7.4", "8.0"], answer: "7.4" },
  { question: "What structure in the leaf carries out photosynthesis?", options: ["Cuticle", "Stomata", "Chloroplast", "Xylem"], answer: "Chloroplast" },
  { question: "Which plant hormone is responsible for cell elongation?", options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"], answer: "Auxin" },
  { question: "What part of the microscope controls light intensity?", options: ["Objective lens", "Eyepiece", "Diaphragm", "Mirror"], answer: "Diaphragm" }
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

let countdown;

function startQuiz() {
  const studentId = document.getElementById('studentId').value.trim();
  if (!studentId || !studentId.includes("BTH/")) {
    alert("Please enter a valid student ID (e.g., BTH/1234).");
    return;
  }

  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';

  const quizForm = document.getElementById('quizForm');
  const selectedQuestions = shuffleArray([...questionPool]).slice(0, 5);

  selectedQuestions.forEach((q, index) => {
    const options = shuffleArray([...q.options]);
    const qBlock = document.createElement('div');
    qBlock.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${q.question}</p>
      ${options.map(opt => `
        <label>
          <input type="radio" name="q${index}" value="${opt}" required />
          ${opt}
        </label><br>`).join('')}
    `;
    quizForm.appendChild(qBlock);
  });

  sessionStorage.setItem('answers', JSON.stringify(selectedQuestions.map(q => q.answer)));

  let timeLeft = 150;
  countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      submitQuiz();
    } else {
      document.getElementById('timer').textContent = `⏳ ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`;
      timeLeft--;
    }
  }, 1000);
}

function submitQuiz() {
  clearInterval(countdown);
  const form = document.getElementById('quizForm');
  const formData = new FormData(form);
  const userAnswers = [];
  for (let i = 0; i < 5; i++) {
    userAnswers.push(formData.get(`q${i}`));
  }

  const correctAnswers = JSON.parse(sessionStorage.getItem('answers'));
  let score = 0;
  userAnswers.forEach((ans, i) => {
    if (ans === correctAnswers[i]) score++;
  });

  sessionStorage.setItem('score', score);
  window.location.href = 'result.html';
}
