// src/lib/firestoreHelpers.ts
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
  doc,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';

// Add a question
export async function addQuestion(courseId: string, studentId: string, studentName: string, text: string) {
  const question = {
    courseId,
    studentId,
    studentName,
    text,
    timestamp: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, 'questions'), question);
  return docRef.id;
}

// Get paginated questions for a course
export async function getQuestions(courseId: string, pageSize = 5, lastDoc: any = null) {
  let q = query(
    collection(db, 'questions'),
    orderBy('timestamp', 'desc'),
    limit(pageSize)
  );

  if (lastDoc) {
    q = query(q, startAfter(lastDoc));
  }

  const querySnapshot = await getDocs(q);
  const questions = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  return { questions, lastVisible };
}

// Add an answer to a specific question
export async function addAnswer(questionId: string, authorId: string, authorName: string, role: 'admin' | 'student', text: string) {
  const answer = {
    authorId,
    authorName,
    role,
    text,
    timestamp: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, `questions/${questionId}/answers`), answer);
  return docRef.id;
}

// Fetch all answers for a question
export async function getAnswers(questionId: string) {
  const q = query(
    collection(db, `questions/${questionId}/answers`),
    orderBy('timestamp', 'asc')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
