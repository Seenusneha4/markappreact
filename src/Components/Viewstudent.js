import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewstudent = () => {
    var[studentlist,setstudentlist]=useState([])
    axios.get("http://localhost:4500/api/viewall").then((response)=>{
        console.log(response.data)
        setstudentlist(response.data.data)
    })
  return (
    <div>
        <Header/>
       <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <table class="table table-info">
  <thead className="table-primary">
    <tr>
      
      <th scope="col">NAME</th>
      <th scope="col">ADMISSION NO</th>
      <th scope="col">CGPA</th>
    </tr>
  </thead>
  <tbody>
      {studentlist.map((value,key)=>{return<tr>
   
     
      <td>{value.name}</td>
      <td>{value.admno}</td>
      <td>{value.cgpa}</td>
    </tr>
   })}
  </tbody>
</table>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewstudent