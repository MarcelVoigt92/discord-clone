import { useState, useRef, useEffect } from "react";
import db from "../firebase/config";

export const useCollection = (_collection, _query) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const query = useRef(_query).current;

  useEffect(() => {
    let ref = db.collection(_collection);
    if (query) {
      ref = ref.where(...query);
    }

    const unsub = ref.onSnapshot(
      (snapShot) => {
        let result = [];
        snapShot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        console.log(result);
        setDocument(result);
        setError(null);
      },
      (err) => {
        setError("Could not find the Document");
      }
    );

    return () => unsub;
  }, [_collection, query]);
  return { document, error };
};
