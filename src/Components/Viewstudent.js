import React from 'react'
import Header from './Header'

const Viewstudent = () => {
    var studentlist=[{"name":"seena","admno":"mzc20","cgpa":"7.46"},
                   {"name":"sneha","admno":"mzc21","cgpa":"8.48"},
                   {"name":"sreya","admno":"mzc22","cgpa":"8.46"},
                   {"name":"sayan","admno":"mzc23","cgpa":"9.46"},
                   {"name":"reny","admno":"mzc24","cgpa":"6.49"},
]
  return (
    <div>
        <Header/>
       <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <table class="table table-info">
  <thead>
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