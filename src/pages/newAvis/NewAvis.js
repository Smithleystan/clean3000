import React, { useState } from 'react'
import "../../Bootstrap/css/bootstrap.css"


const NewAvis = () => {
const [form, setForm] = useState({
  nom :"",
  date :"",
  observation :""
})

const saisie = (e)=>{
  const {name, value} = e.target
  setForm((state)=>({
    ...state,
    [name] : value
  }))

}

console.log(form)

  return (
    <div >
      <div><h1 className='text-center'>Avis de passage</h1></div>
      <div className='text-center'>
        <form action="">
        <div><label htmlFor="nom">Nom entreprise ou client</label></div>
        <div><input type="text" id='nom' name='nom' onChange={saisie} /></div>
        <div><label htmlFor="date" >Date d'intervention</label></div>
        <div><input type="date" name='date' id='date' onChange={saisie}/></div>
        <label htmlFor="observation" ><h2>Observation</h2></label>
        <div><textarea rows={5} name='observation' id='observation' onChange={saisie}/></div>
        <div>Merci de votre confiance</div>
        <input type="submit" value="Valider" />
        </form>
      </div>

    </div>

  )
}

export default NewAvis