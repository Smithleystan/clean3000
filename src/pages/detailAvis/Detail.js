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
        <div >
            <div><Link to='/listeavisdepassage' >precedent</Link></div>
            <div>
                <div className='text-center detail'>

                    <div><h2>{avi.nom}</h2></div>

                    <div><h2>{avi.date}</h2></div>
                    <div><h2>observation : </h2></div>
                    <div>{avi.observation} </div>
                </div>

            </div>
        </div>
    )
}

export default Detail