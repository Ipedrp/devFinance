import React, {useEffect, useState} from "react"
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContainerTitle = styled.div`
  margin-top: 30vh;
  background-color: #042804;
`;

const SubTitle = styled.h1`
    font-size: 1.5em;
    color: #FFF;
    padding-left: 9px;
`;

// Estilos usando styled-components
const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  max-width: 800px;
  border-collapse: separate; /* Mude de collapse para separate */
  border-spacing: 0; /* Remove o espaço entre as células */
  border-radius: 9px;
  overflow: hidden; /* Esconde qualquer conteúdo que ultrapasse a borda arredondada */
  background-color: #D5ED9F;
`;


const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #042804;
  color: #fff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #b8d476;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  color: #042804;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #042804;
  color: white;
  border: none;
  border-radius: 5px;


  &:hover {
    background-color: #042804;
    cursor: pointer;
  }
`;

function Saida(){

    const [registros, setRegistros] = useState([]);
    const navigate = useNavigate(); // Cria uma instância do hook useNavigate

    useEffect(() => {
      axios.get('http://localhost:5000/saida')
        .then((response) => {
          setRegistros(response.data);
        })
        .catch((error) => {
          console.error('Houve um erro ao buscar os registros:', error);
        });
    }, []);

    const verDetalhe = (item) => {
      // Redireciona para a rota do Card com os dados no estado
      try {
        
        navigate('/cardSaida', { state: { title: item.titulo, value: item.valor, description: item.descricao } });
      } catch (error) {
        console.log(error)
      }
      console.log(item)
    };

    return(
        <>  
            <ContainerTitle>
                <SubTitle>Saida</SubTitle>
            </ContainerTitle>
            <TableContainer>
                <Table>
                    <thead>
                        <TableRow>
                            <TableHeader>Valor</TableHeader>
                            <TableHeader>Descrição</TableHeader>
                            <TableHeader>Tipo</TableHeader>
                            <TableHeader>Ações</TableHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                    {registros.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.valor}</TableCell>
                          <TableCell>{item.descricao}</TableCell>
                          <TableCell>{item.tipo}</TableCell>
                          <TableCell>
                              <Button onClick={() => verDetalhe(item)}>Ver detalhes</Button>
                          </TableCell>
                        </TableRow>
                    ))}
                    </tbody>
                </Table>
            </TableContainer>
        </>
    )
}


export default Saida;