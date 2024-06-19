import { doc, getDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom"
import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";


// loader
export const loader =async({params})=>{
const docRef = doc(db, "recipies",params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  console.log("No such document!");
}
return null
}

function SingleRecipe() {
  const data =useLoaderData()
  console.log(data);
  return(
    <>
    {data && (
      <div>
        <h1  className="text-3xl mb-4 font-bold">{data.title}</h1>
        <img className="w-full h-96 object-cover rounded-xl mb-5 bg-white object-center" src={data.image} alt="" />
         <div className="flex gap-4 items-center mb-4">
          <h2 className="text-xl font-bold items-center">Ingredients:</h2>
            <button type="submit" className="btn">tuz</button>
            <button type="submit" className="btn">guruch</button>
            <button type="submit" className="btn">go'sht</button>
            <button type="submit" className="btn">sabzi</button>
         </div>
         <div className="flex items-center gap-4 mb-4">
           <h2 className="text-xl font-bold">Cooking time:</h2>
           <button type="submit" className="btn">60 minuts</button>
         </div>
          <div className="items-center gap-4 mb-4">
             <h2 className="text-xl font-bold mb-2">Method</h2>
             <p className="font-normal text-[16px] text-slate-600">Palov haqida afsona 17455O‘zbekistonga tashrif buyurgan va haqiqiy o‘zbek palovini ta’mini tatib ko‘rmagan mehmon o‘zbek madaniyatining mohiatini va mehmondo‘stligini anglamagan hisoblanadi.Ehtimol u hali bu yerda bo‘lgan emas.</p>
          </div>
          <div className="text-right">
           <Link to="/" className=" btn btn-primary ">
            Back
        </Link>
      </div>
      </div>
    )}
   </>
  ) 
}

export default SingleRecipe