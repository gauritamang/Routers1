import React from 'react'
import {Link} from 'react-router-dom';
import { getinvoices } from '../data';
import { Outlet } from 'react-router-dom'
 const Invoices=()=> {
    let invoices=getinvoices();
    console.log('this is invoices',invoices)
  return (
   <>
    <div>Invoices</div>
    {invoices.map(invoice=>(
        <Link 
         key={invoice.number}
         to={`/invoices/${invoice.number}`}
         >
            {invoice.name}
         </Link>
    ))}
    <Outlet></Outlet>



   </>
  )
}

export default Invoices