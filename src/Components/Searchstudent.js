import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Searchstudent = () => {
    const[data,setdata]=useState([{"name":"","cgpa":""}])
const[admno,setadmno]=useState("")
   const subdata=()=>{
       const data={"admno":admno}
       console.log(data)
       axios.post("http://localhost:4500/api/search",data).then((response)=>{
           setdata(response.data.data)
       })
       
   }
  const deleteapi=(id)=>{
      const data={"_id":id}
     console.log(data)
     axios.post("http://localhost:4500/api/delete",data).then((response)=>{
          if(response.data.status=="success")
          {
              alert("successfully deleted")
          }
          else
          {
            alert("error in deletion")
          }

     })
  }
    
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
               
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admission No</label>
                 <input onChange={(a)=>{setadmno(a.target.value)}} type="text" className="form-control"/>
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={subdata} className="btn btn-success">SEARCH</button>
                </div>
            </div>
            {data.map((value,key)=>{
                return <div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
       NAME:<input type="text" value={value.name} className="form-control"/>
        
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
       CGPA:<input type="text" value={value.cgpa} className="form-control"/>
        
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <button onClick={()=>{deleteapi(value._id)}}  className="btn btn-danger">DELETE</button>
    </div>
</div>
         

            
            
            })}
        </div>
    </div>

</div>
    </div>
  )
}

export default Searchstudent