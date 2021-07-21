import { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase";

export default function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = firestore.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsub();
  }, [collection]);

  return { docs };
}