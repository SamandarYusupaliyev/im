import { Form, useActionData,useNavigate } from "react-router-dom"
import FormInput from "../components/FormInput"
import { useEffect, useState } from "react"
import { useCreateRecipie } from "../hooks/useCreateRecipie"

// action

export const action =async({request})=>{
   let formData = await request.formData();
   const title =formData.get("title")
   const method=formData.get("method")
   const image =formData.get("image")
   const cookingTime =formData.get("cookingTime")

   return{title,method,image,cookingTime}
}


function Create() {
const {data,addNewDoc}  =useCreateRecipie()
 const createData =useActionData();
 const [inredients,setIngredients]=useState([])
 const [inredient,setIngredient]=useState("")

 const navigate =useNavigate()

 const addIngredient =(e)=>{
 e.preventDefault()
 console.log(inredient);

 if(!inredients.includes(inredient)){
   setIngredients((prev)=>{
      return [...prev,inredient]
   })
 }
 setIngredient("")
}

useEffect(()=>{
   if(createData && !data){
      const newRecipe ={
         ...createData,
         inredients,
      }
      addNewDoc(newRecipe)
   }

   if(data){
     navigate("/");
   }
},[createData,data])


return (
   <div className="grid place-items-center">
      <div className="max-w-96 w-full">
         <h1 className="text-3xl text-center font-bold">Creata New Recipe</h1>
         <Form method="POST">
            <FormInput name="title" label="Title" type="text"/>
               <div className="flex justify-center flex-col">
                 <div className="flex items-center gap-5 w-full">
                 <label className="form-control w-full mb-3 ">
                  <div className="label">
                     <span className="label-text">Ingredient</span>
                  </div>
                  <input 
                  onChange={(e)=>setIngredient(e.target.value)}
                  type="text"
                  name="ingredients"
                  placeholder="Type here" 
                  className="input input-bordered w-full" 
                  value={inredient}
                   />
                  </label>
                 <button onClick={addIngredient}  className="btn btn-secondary mt-5">Add</button>
                 </div>
                 <p className="text-left -mt-2 mb-3">
                   Inredients:
                  {inredients.map((ing)=>{
                     return<span key={ing}>{ing},</span>
                  })}
               
                 </p>
               </div>
            <FormInput name="cookingTime" label="Cooking Time" type="number"/>
            <FormInput name="method" label="Method" type="text"/>
            <FormInput name="image" label="Image" type="url"/>
            <div>
            <button  className="btn btn-secondary w-full mb-3" type="submit">
              Submit
            </button>
            </div>
         </Form>
      </div>
   </div>
  )
}

export default Create