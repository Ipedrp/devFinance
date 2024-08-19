import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp, FaArrowDown, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from "axios";

const TitleLink = styled(Link)`
  text-decoration: none;
`;

const WidgetsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const WidgetsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 30%;
  height: 200px;
  margin-left: 25px;
  background-color: #D5ED9F;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  min-width: 200px; /* Define uma largura mínima para evitar quebras */
  text-align: center; /* Alinha o texto no centro */
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center; /* Alinha o conteúdo horizontalmente */
`;

const TitleIcon = styled.div`
  margin-left: 10px;
  color: ${props => props.color};
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #042804;
  text-decoration: none;
`;

const Value = styled.div`
  font-size: 2em;
  color: #042804;
`;

function Widgets() {

  const [entrada, setEntrada] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/entrada')
      .then((response) => {
        setEntrada(response.data);
      })
      .catch((error) => {
        console.error('Houve um erro ao buscar os registros:', error);
      });
  }, []);

  let somaEntrada = entrada.reduce((acc, curr) => acc + curr.valor, 0);

  const [saida, setSaida] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/saida')
      .then((response) => {
        setSaida(response.data);
      })
      .catch((error) => {
        console.error('Houve um erro ao buscar os registros:', error);
      });
  }, []);

  let somaSaida = saida.reduce((acc, curr) => acc + curr.valor, 0);

  let total = somaEntrada - somaSaida;

  return (
    <WidgetsContainer>
      <WidgetsContent>
        <TitleWrapper>
          <TitleLink to="/entrada">
            <Title>Entrada</Title>
          </TitleLink>
          <TitleIcon color="green"><FaArrowUp /></TitleIcon>
        </TitleWrapper>
        <Value>R$ {somaEntrada}</Value>
      </WidgetsContent>
      <WidgetsContent>
        <TitleWrapper>
          <TitleLink to="/saida">
            <Title>Saida</Title>
          </TitleLink>
          <TitleIcon color="red"><FaArrowDown /></TitleIcon> 
        </TitleWrapper>
        <Value>R$ {somaSaida}</Value>
      </WidgetsContent>
      <WidgetsContent>
        <TitleWrapper>
        <TitleLink to="/card">
            <Title>Total</Title>
          </TitleLink>
          <TitleIcon color="yellow"><FaDollarSign /></TitleIcon>
        </TitleWrapper>
        <Value>R$ {total}</Value>
      </WidgetsContent>
    </WidgetsContainer>
  );
}

export default Widgets;
