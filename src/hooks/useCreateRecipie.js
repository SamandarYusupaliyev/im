import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase/firebaseConfig";
import { useState } from "react";


function useCreateRecipie() {
    const [data,setdata] =useState(null)
    const addNewDoc =async(recipie)=>{
        const docRef = await addDoc(collection(db, "recipies"), recipie);
        setdata(docRef.id)
    }
  return {data,addNewDoc}
}

export  {useCreateRecipie}