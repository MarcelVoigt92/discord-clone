import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useChannel = (_collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // realtime data for individual document
  useEffect(
    () => {
      const ref = db.collection("servers").doc(id).collection(_collection);

      //realtime db and each document as snapshot
      const unsub = ref.onSnapshot(
        (snapshot) => {
          //check if document exists
          if (snapshot.data()) {
            // firebase method to get data and get the id
            setDocument({ ...snapshot.data(), id: snapshot.id });
            setError(null);
          } else {
            setError("server doesn't exist");
          }
          // getting the error
        },
        (err) => {
          setError(err.message);
        }
      );
      //cleanup function
      return () => unsub();
    },
    // we want to update when/if the collection or id changes
    [_collection, id]
  );
  //finally return values we need
  return { document, error };
};
