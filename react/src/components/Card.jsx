import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';  // Importa o ícone de seta para a esquerda
import { useLocation } from 'react-router-dom'; // Importa useLocation


const CardContainer = styled.div`
  position: relative;  // Permite o posicionamento absoluto da seta
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 400px;
  margin: 200px auto;
  padding: 20px;
  background-color: #042804;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const BackIcon = styled(FaArrowLeft)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 1.5em;
  color: #D5ED9F;
  cursor: pointer;

  &:hover {
    color: #D5ED9F;  // Muda a cor ao passar o mouse
  }
`;

const Title = styled.h3`
  font-size: 1.8em;
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif  ;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Value = styled.div`
  font-size: 2.5em;
  color: #28a745;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #D5ED9F;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Card = () => {

  const location = useLocation();
  const { state } = location;

  // Acessa os dados passados via state

  const value = state ?.value || 'Valor não disponível';
  const description = state ?.description || 'Descrição não disponível';

  return (
    <CardContainer>
        <Link to={"/entrada"}><BackIcon /></Link>
        <Title>Entrada</Title>
        <Value>R$ {value}</Value>
        <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
