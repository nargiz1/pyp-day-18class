import './App.css';
import React, { useEffect, useState } from 'react'
import { supplierNetwork } from './network/requests/supplierNetwork';
import { useForm } from "react-hook-form";

function App() {

  const [suppliers, setsuppliers] = useState([]);
  const {register, handleSubmit} = useForm();

  useEffect(() => {
    supplierNetwork.getAllSuppliers()
      .then(data => {
        setsuppliers(data);
      })
  }, [])

  const addSupplier = (data) => {
    console.log(data)
    supplierNetwork.addSupplier(data)
      .then(res => console.log(res))
  }

  const deleteSupplier = (id) => {
    supplierNetwork.deleteSupplier(id)
  }


  return (
    <div style={{ width: '87%', margin: 'auto', paddingTop: '30px' }}>
      <form style={{ marginBottom: '30px' }} onSubmit={handleSubmit(addSupplier)}>
        <div>
          <input type='text' placeholder='company name' name='companyName' {...register("companyName")} />
        </div>
        <div>
          <input type='text' placeholder='contact name' name='contactName' {...register("contactName")}/>
        </div>
        <div>
          <input type='text' placeholder='contact title' name='contactTitle' {...register("contactTitle")}/>
        </div>
        <button type='submit'>Save</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            suppliers && suppliers.map((item, key) => {
              return <tr key={key}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td style={{color: 'red', cursor: 'pointer'}}
                  onClick={()=> deleteSupplier(item.id)}
                >Delete</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
