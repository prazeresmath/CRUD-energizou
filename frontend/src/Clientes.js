import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Clientes() {
    const [clientes, setClientes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setClientes(res.data))
        .catch(err => console.log(err));
    }, [])


    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-75 bg-white rounded p-3'>
                <button className='btn btn-success'>Adicionar +</button>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientes.map((data, i)=> {
                                <tr key={i}>
                                    <td>{data.clienteNome}</td>
                                    <td>{data.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Clientes