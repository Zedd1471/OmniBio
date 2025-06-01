const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

async function saveQuizResult(resultData) {
  const { studentId, score, timestamp } = resultData;

  const existing = await db.collection('quizResults').doc(studentId).get();
  if (existing.exists) {
    throw new Error('Quiz already submitted by this student.');
  }

  await db.collection('quizResults').doc(studentId).set({
    studentId,
    score,
    timestamp: timestamp || new Date().toISOString(),
  });

  return true;
}

async function getQuizResult(studentId) {
  const doc = await db.collection('quizResults').doc(studentId).get();
  if (!doc.exists) return null;
  return doc.data();
}

module.exports = { saveQuizResult, getQuizResult };
