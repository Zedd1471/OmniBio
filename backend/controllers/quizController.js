const db = require('../services/firebaseService');

// Utility to shuffle array elements (Fisher-Yates)
function shuffleArray(arr) {
  const array = arr.slice(); // copy
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

exports.getQuestions = async (req, res) => {
  try {
    const questionsSnapshot = await db.collection('questions').get();
    let questions = [];
    questionsSnapshot.forEach(doc => {
      let data = doc.data();

      // Randomize options order
      if (data.options && Array.isArray(data.options)) {
        data.options = shuffleArray(data.options);
      }

      questions.push({ id: doc.id, ...data });
    });

    // Shuffle questions and pick first 5
    questions = shuffleArray(questions).slice(0, 5);

    res.status(200).json({
      message: 'Questions fetched successfully',
      questions,
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.submitResult = async (req, res) => {
  try {
    const { studentId, score, answers, startedAt, submittedAt } = req.body;

    if (!studentId || score === undefined || !answers || !startedAt || !submittedAt) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if student already submitted (prevent retake)
    const existingResult = await db.collection('results').doc(studentId).get();
    if (existingResult.exists) {
      return res.status(403).json({ message: 'Retake not allowed' });
    }

    // Check time limit: 2.5 minutes = 150,000 ms
    if (submittedAt - startedAt > 150000) {
      return res.status(400).json({ message: 'Quiz time exceeded 2.5 minutes' });
    }

    // Save the result
    await db.collection('results').doc(studentId).set({
      score,
      answers,
      startedAt,
      submittedAt,
      submittedOn: new Date().toISOString(),
    });

    res.status(200).json({ message: 'Result submitted successfully' });
  } catch (error) {
    console.error('Error submitting result:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.uploadQuestions = async (req, res) => {
  try {
    const adminKey = req.headers['x-admin-key'];
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const { questions } = req.body;
    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ message: 'Questions must be a non-empty array' });
    }

    const batch = db.batch();
    questions.forEach(q => {
      const docRef = db.collection('questions').doc();
      batch.set(docRef, q);
    });

    await batch.commit();

    res.status(201).json({ message: 'Questions uploaded successfully' });
  } catch (error) {
    console.error('Error uploading questions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
