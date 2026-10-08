import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "./firebase";

export interface QuizResult {
  id: string;
  uid?: string;
  name?: string | null;
  email?: string | null;
  score: number;
  totalQuestions: number;
  accuracy: number;
  createdAt?: any;
}

// Save quiz score to Firestore
export async function saveQuizResult(
  score: number,
  totalQuestions: number,
  accuracy: number
) {
  try {
    const user = auth.currentUser;
    if (!user) return;

    await addDoc(collection(db, "quizResults"), {
      uid: user.uid,
      name: user.displayName || null,
      email: user.email || null,
      score,
      totalQuestions,
      accuracy,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving quiz result:", error);
    throw error;
  }
}

// Fetch quiz results for a user without requiring a Firestore composite index
export async function getQuizResults(uid: string): Promise<QuizResult[]> {
  try {
    if (!uid) return [];

    // Query collection quizResults filtered strictly by uid
    // Do NOT use orderBy("createdAt") to avoid missing composite index errors
    const q = query(
      collection(db, "quizResults"),
      where("uid", "==", uid)
    );

    const snapshot = await getDocs(q);

    const results: QuizResult[] = snapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        uid: data.uid,
        name: data.name,
        email: data.email,
        score: typeof data.score === "number" ? data.score : 0,
        totalQuestions:
          typeof data.totalQuestions === "number" ? data.totalQuestions : 0,
        accuracy: typeof data.accuracy === "number" ? data.accuracy : 0,
        createdAt: data.createdAt,
      };
    });

    // In-memory sort: newest attempts first
    results.sort((a, b) => {
      const getTime = (val: any): number => {
        if (!val) return 0;
        if (typeof val.toMillis === "function") return val.toMillis();
        if (typeof val.toDate === "function") return val.toDate().getTime();
        if (typeof val.seconds === "number") return val.seconds * 1000;
        if (val instanceof Date) return val.getTime();
        if (typeof val === "number") return val;
        if (typeof val === "string") {
          const parsed = Date.parse(val);
          return isNaN(parsed) ? 0 : parsed;
        }
        return 0;
      };
      return getTime(b.createdAt) - getTime(a.createdAt);
    });

    return results;
  } catch (error) {
    console.error("Error fetching quiz results from Firestore:", error);
    return [];
  }
}