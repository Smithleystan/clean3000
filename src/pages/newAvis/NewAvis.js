import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "../../Bootstrap/css/bootstrap.css"
import { add } from '../../slices'
import './newAvis.scss'
import { Button, Modal } from 'antd'




const NewAvis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // antd
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // fin antd

  const [form, setForm] = useState({
    nom: "",
    date: "",
    observation: ""
  })

  const saisie = (e) => {
    const { name, value } = e.target
    setForm((state) => ({
      ...state,
      [name]: value
    }))

  }
  const dispatch = useDispatch()
  const valider = () => {

    dispatch(add({ nom: form.nom, date: form.date, observation: form.observation }))
    setForm({
      nom: '',
      date: '',
      observation: ''
    })
    showModal()


  }



  return (

    <div className='main '>
      <div className=' screenNewAvis'>
        <div><h1 className='text-center'>Avis de passage</h1></div>
        <div className='text-center'>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div><label htmlFor="nom"><h2>Nom entreprise ou client</h2></label></div>
            <div><input type="text" id='nom' name='nom' placeholder='saisir nom' value={form.nom} onChange={saisie} required /></div>
            <div><label htmlFor="date" ><h2>Date d'intervention</h2></label></div>
            <div><input type="date" name='date' id='date' value={form.date} onChange={saisie} required /></div>
            <label htmlFor="observation" ><h2>Observation</h2></label>
            <div><textarea rows={5} name='observation' id='observation' placeholder='saisir observation' value={form.observation} onChange={saisie} required /></div>
            <div><h2>Merci de votre confiance</h2> </div>
            <input type="submit" value="Valider" onClick={valider} className="btnValider" />
          </form>
        </div>
      </div>

     
      <Modal title="Confirmation" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <div>Avis du client ajouter à la base de donnée</div>
      </Modal>

    </div>



  )
}

export default NewAvis