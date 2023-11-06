import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const [clienteNome, setclienteNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [CEP, setCEP] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const navigate = useNavigate();
    const {idCliente} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8081/user/'+idCliente)
        .then(res => {
            const user = res.data;
            setclienteNome(user.clienteNome);
            setEmail(user.email);
            setFone(user.fone);
            setCEP(user.CEP);
            setEndereco(user.endereco);
            setNumero(user.numero);
        }).catch(err => console.log(err));
    }, [idCliente]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+idCliente, {clienteNome, email, fone, CEP, endereco, numero})
        .then(res => {
            navigate('/');
        }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update user</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Insira o nome' className='form-control'
                        value={clienteNome} onChange={e => setclienteNome(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Insira o email' className='form-control'
                        value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder='Insira seu telefone' className='form-control'
                        value={fone} onChange={e => setFone(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">CEP</label>
                        <input type="number" placeholder='Informe o CEp' className='form-control'
                        value={CEP} onChange={e => setCEP(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Endereço</label>
                        <input type="text" placeholder='Informe seu endereço' className='form-control'
                        value={endereco} onChange={e => setEndereco(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Numero</label>
                        <input type="number" placeholder='Insira o numero da empresa' className='form-control'
                        value={numero} onChange={e => setNumero(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update
