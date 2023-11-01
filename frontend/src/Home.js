import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Home() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })
    return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-70 p-3'>
                <h2>crud</h2>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CEP</th>
                            <th>endereco</th>
                            <th>email</th>
                            <th>fone</th>
                            <td>ação</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (d, i) => (
                            <tr key={i}>
                                <td>{d.clienteNome}</td>
                                <td>{d.CEP}</td>
                                <td>{d.endereco}</td>
                                <td>{d.email}</td>
                                <td>{d.fone}</td>
                                <td>
                                    <button className='btn btn-sm btn-primary'>Update</button>
                                    <button className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home