import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

function useCollection() {
const [data,setData] =useState(null)

useEffect(()=>{
const getCollectionData =async()=>{
    const querySnapshot = await getDocs(collection(db, "recipies"));
    const allData =[];
    querySnapshot.forEach((doc) => {
    allData.push({
      id:doc.id, 
      ...doc.data(),
    })
   });
  setData(allData)
}
getCollectionData()
},[])

  return {data};
}

export {useCollection}