import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })

    const navigate = useNavigate();
    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+ id)
        .then(res => navigate('/'))
        .catch(err => console.log(err));
    }
    

    return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-90 p-3'>
                <h2>crud</h2>
                <Link to="/create" className='btn btn-success'>Adicionar +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Número</th>
                            <th>Email</th>
                            <th>CEP</th>
                            <th>Endereço</th>
                            <td>ação</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (d, i) => (
                            <tr key={i}>
                                <td>{d.clienteNome}</td>
                                <td>{d.fone}</td>
                                <td>{d.email}</td>
                                <td>{d.CEP}</td>
                                <td>{d.endereco}</td>
                                <td>
                                    <Link to={`/update/${d.idCliente}`} className='btn btn-sm btn-primary'>Atualizar</Link>
                                    <button onClick={e => handleDelete(d.idCliente)} className='btn btn-sm btn-danger'>Deletar</button>
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