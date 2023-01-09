import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { avis } from '../../slices'
import './Detail.scss'



const Detail = () => {
    const data = useSelector(data => data.data)
    const id = useParams().id


    const avi = data.find((avis) => Number(id) === avis.id)
    console.log(avi)



    return (
        <div className='global'>
             <div><Link to='/listeavisdepassage'  ><input type="button" value="Precedent" className='btnPrecedent'/></Link></div>
        
        <div className='mainDetail'>
           
            
            <div>
                <div className='text-center detail'>

                <div className='text-center'><h1>Detail du client "{avi.nom}"</h1> </div>

                    <div><h2>le {avi.date}</h2></div>
                    <div><h2>observation : </h2></div>
                    <div>{avi.observation} </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Detail