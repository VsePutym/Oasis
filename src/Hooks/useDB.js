import {useEffect, useState} from "react";

const useDB = database => {
  const [hookDb, setHookDb] = useState(null);

  useEffect(() => {
    const dbRef = database.ref('goods');
    dbRef.on('value', snapshot => {
      setHookDb(snapshot.val())
    })
  }, [database])

  return hookDb;
}

export default useDB;