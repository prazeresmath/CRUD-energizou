import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Create() {
    const navigate = useNavigate()
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:8081/create', data)
        .then(res => {
            navigate('/');
        }).catch(err => console.log(err));
    }

    const checkCEP = (e) => {
        const CEP = e.target.value.replace(/\D/g, '');
        console.log(CEP);
        fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        .then(res => res.json()).then(data => {
            console.log(data);
            setValue('endereco', data.logradouro);
        })
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Adicionar usuário</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Insira o nome' className='form-control' {...register('clienteNome')} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Insira o email' className='form-control' {...register('email')} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder='Insira seu telefone' className='form-control' {...register('fone')} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">CEP</label>
                        <input type="number" placeholder='Informe o CEP (apenas numeros)' className='form-control' {...register('CEP')} onBlur={checkCEP} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Endereço</label>
                        <input type="text" placeholder='Informe seu endereço' className='form-control' {...register('endereco')} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Numero</label>
                        <input type="number" placeholder='Insira o numero da empresa' className='form-control' {...register('numero')} />
                    </div>
                    <button className='btn btn-success'>Adicionar</button>
                </form>
            </div>
        </div>
    )
}

export default Create
