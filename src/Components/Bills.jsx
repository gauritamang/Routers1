import React from 'react'
import { useParams } from 'react-router-dom'
const  Bills=() =>{
    let params=useParams()
    console.log('this isparams ',params)

  return (
    <>
    <div>Bills</div>
    <h1>{`invoice id ${params.invoiceid}`}</h1>
    </>
  )
}

export default Bills