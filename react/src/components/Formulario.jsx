import {React, useRef, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from 'sweetalert2'

// Estilos para o container do formulário
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

// Estilos para o formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #042804;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 34px 58px #042804;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

// Estilos para o grupo do formulário
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhamento à esquerda */
  width: 100%; /* Garante que o conteúdo ocupe a largura total */
  margin-bottom: 10px;
`;

const Label = styled.label`
  color: #fff;
  font-weight: bold;
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 7px;
  border-color: aqua;
  border-style: none;
  background-color: #cfc8c8;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #042804;
`;

// Estilização customizada para o input radio parecer com checkbox
const RadioCheckbox = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #042804;
  border: 2px solid #fff;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #042804;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 2px;
  }
`;

const Button = styled.button`
  border-style: none;
  border-radius: 9px;
  box-shadow: #fff;
  background-color: #fff;
  color: #042804;
  font-weight: bold;
  padding: 13px;

  &:hover{
    cursor: pointer;
  }
`;


function Formulario() {

  const [tipo, setTipo] = useState('');
  const valorRef = useRef(null);
  const descricaoRef = useRef(null);

  const enviarFormulario = async (event) => {
    event.preventDefault();

    const valor = valorRef.current.value;
    const descricao = descricaoRef.current.value;

    if (!valor || !descricao || !tipo) {
      return console.log("Campos vazios! Preencha todos os campos!");
    }

    const registro = {
      valor,
      descricao,
      tipo
    };

    try {
      const response = await axios.post('http://localhost:5000/', registro);
      console.log(response.data);
      console.log("Deu certo!");

      Swal.fire({
        title: "Registro enviado!",
        text: "Seu registro acaba de ser salvo em nosso banco de dados.",
        icon: "success",
        confirmButtonText: 'Fechar'
      });

    } catch (error) {
      console.log("deu erro aqui no FORM", error);
      Swal.fire({
        title: 'Error!',
        text: 'Erro ao enviar registro',
        icon: 'error',
        confirmButtonText: 'Fechar'
      })
    }

    valorRef.current.value = '';
    descricaoRef.current.value = '';
    setTipo('');  // Resetar o estado do tipo
  };

  return (
    <FormContainer>
      <Form onSubmit={enviarFormulario}>
        <FormGroup>
          <Label htmlFor="valor">Valor</Label>
          <Input type="number" id="valor" name="valor" ref={valorRef} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Descrição">Descrição</Label>
          <Input type="text" id="Descrição" name="descricao" ref={descricaoRef} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="entrada">Entrada</Label>
          <RadioCheckbox 
            id="entrada" 
            name="tipo" 
            value="entrada" 
            checked={tipo === 'entrada'} 
            onChange={() => setTipo('entrada')} 
            required 
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="saida">Saída</Label>
          <RadioCheckbox 
            id="saida" 
            name="tipo" 
            value="saida" 
            checked={tipo === 'saida'} 
            onChange={() => setTipo('saida')} 
            required 
          />
        </FormGroup>
        <Button type="submit">Enviar</Button>
      </Form>
    </FormContainer>
  );
}

export default Formulario;