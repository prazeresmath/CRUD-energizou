import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [clienteNome, setclienteNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [CEP, setCEP] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const navigate = useNavigate() // Aqui está a correção
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {clienteNome, email, fone, CEP, endereco, numero})
        .then(res => {
            navigate('/');
        }).catch(err => console.log(err));
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add user</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Insira o nome' className='form-control'
                        onChange={e => setclienteNome(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Insira o email' className='form-control'
                        onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder='Insira seu telefone' className='form-control'
                        onChange={e => setFone(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">CEP</label>
                        <input type="number" placeholder='Informe o CEp' className='form-control'
                        onChange={e => setCEP(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Endereço</label>
                        <input type="text" placeholder='Informe seu endereço' className='form-control'
                        onChange={e => setEndereco(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Numero</label>
                        <input type="number" placeholder='Insira o numero da empresa' className='form-control'
                        onChange={e => setNumero(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create