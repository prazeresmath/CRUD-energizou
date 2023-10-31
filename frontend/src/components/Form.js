import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ onEdit }) => {
    const ref = useRef();

    useEffect(() => {
      if (onEdit) {
        const user = ref.current;

        user.clienteNome.value = onEdit.clienteNome;
        user.CEP.value = onEdit.CEP;
        user.endereco.value = onEdit.endereco;
        user.numero.value = onEdit.numero;
        user.fone.value = onEdit.fone;
        user.email.value = onEdit.email;
      }
    }, [onEdit]);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const user = ref.current;

      if (
        !user.clienteNome.value ||
        !user.CEP.value ||
        !user.endereco.value ||
        !user.numero.value ||
        !user.fone.value ||
        !user.email.value
      ) {
        return toast.warn("Preencha todos os campos!");
      }

      if (onEdit) {
        await axios
          .put("http://localhost:8800/" + onEdit.id, {
            clienteNome: user.clienteNome.value,
            CEP: user.CEP.value,
            endereco: user.endereco.value,
            numero: user.numero.value,
            fone: user.fone.value,
            email: user.email.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
            <Label>Nome</Label>
            <Input name="clienteNome" />
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email" />
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone" />
            </InputArea>
            <InputArea>
                <Label>Data de nascimento</Label>
                <Input name="data_nascimento" type="date" />
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;