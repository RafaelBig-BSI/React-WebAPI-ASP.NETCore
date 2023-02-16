import React, { useState, useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import logoCadastro from './assets/logo.png';
import logoCreate from './assets/create.png';
import logoUpdate from './assets/update.png';
import logoDelete from './assets/delete.png';

function App() {

  const baseUrl = "https://localhost:44380/api/alunos";

                              // *** Hooks ***
  /* Método useState([])
  * data: variável que guarda o estado em si
  * setData: variável que é uma função que será usada para atualizar o valor do estado
  * useState([]): atribui um array vazio como valor inicial
  */
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState(true);

  const [alunoSelecionado, setAlunoSelecionado] = useState({
    id: '',
    nome: '',
    email: '',
    idade: ''
  });

  const [modalIncluir, setModalIncluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);

  const abrirFecharModalIncluir = () => {
    setModalIncluir(!modalIncluir);  
  }

  const abrirFecharModalEditar = () => {
    setModalEditar(!modalEditar);
  }

  const abrirFecharModalExcluir = () => {
    setModalExcluir(!modalExcluir);
  }

  const selecionarAluno = (aluno, opcao) => {
    setAlunoSelecionado(aluno);
    (opcao === "Editar") ? abrirFecharModalEditar() : abrirFecharModalExcluir();
  }

  //Método que irá captar os valores do formulário
  const handleChange = e => {
    const {name, value} = e.target;
    setAlunoSelecionado({
      ...alunoSelecionado, //estado
      [name]: value //valor
    });
  }

  //Obter todos os alunos [GET]
  const pedidoGet = async() => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.log("ERRO: ", err);
      })
  }

  //Criar um aluno [POST]
  const pedidoPost = async() => {
    delete alunoSelecionado.id; //deleta pois no BD o campo id é serial
    alunoSelecionado.idade = parseInt(alunoSelecionado.idade);

    await axios.post(baseUrl, alunoSelecionado)
      .then(response => {
        setData(data.concat(response.data));
        setUpdateData(true);
        abrirFecharModalIncluir();
      })
      .catch(err => {
        console.log("ERRO: ", err);
      })
  }

  //Alterar um aluno [PUT]
  const pedidoPut = async() => {
    alunoSelecionado.idade = parseInt(alunoSelecionado.idade);
    
    await axios.put(baseUrl + "/" + alunoSelecionado.id, alunoSelecionado)
      .then(response => {
        var resposta = response.data;
        var dadosAux = data;

        dadosAux.forEach(aluno => {
          if(aluno.id === alunoSelecionado.id){
            aluno.nome = resposta.nome;
            aluno.email = resposta.email;
            aluno.idade = resposta.idade;
          }
          
        });
        setUpdateData(true);
        abrirFecharModalEditar();
      })
      .catch(err => {
        console.log("ERRO: ", err);
      })
  }

  //Deletar um aluno [DELETE]
  const pedidoDelete = async() => {
    await axios.delete(baseUrl + "/" + alunoSelecionado.id)
      .then(response => {
        setData(data.filter(aluno => aluno.id !== response.data));
        setUpdateData(true);
        abrirFecharModalExcluir();
      })
      .catch(err => {
        console.log("ERRO: ", err);
      })
  }

  useEffect(() => {
    if(updateData){
      pedidoGet();
      setUpdateData(false);
    }
  }, [updateData]);

  return (
    <>
      <div className='main-container'>
        <div className="aluno-container">
          <br />
          <h3>Cadastro de Alunos</h3>

          <header className="App-header">
            <img src={logoCadastro} alt='Cadastro' />
            <button onClick={() => abrirFecharModalIncluir()}>Incluir Novo Aluno</button>
          </header>

          <table className='table table-condensed'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Operação</th>
              </tr>
            </thead>
            <tbody>
              {data.map(aluno => (
                <tr key={aluno.id}>
                  <td>{aluno.id}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.email}</td>
                  <td>{aluno.idade}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => selecionarAluno(aluno, "Editar")}>Editar</button> {"  "}
                    <button className='btn btn-danger' onClick={() => selecionarAluno(aluno, "Excluir")}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal isOpen={modalIncluir} className='modalAlunos'>
            <ModalHeader>Incluir Alunos <img src={logoCreate} alt='Incluir' />
            </ModalHeader>
            <ModalBody className='modalAlunosBody'>
              <div className='form-group'>
                <label>Nome:</label><br />
                <input type="text" className='form-control' name='nome' onChange={handleChange} /><br />

                <label>Email:</label><br />
                <input type="text" className='form-control' name='email' onChange={handleChange} /><br />

                <label>Idade:</label><br />
                <input type="text" className='form-control' name='idade' onChange={handleChange} /><br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className='btn btn-success' onClick={() => pedidoPost()}>Incluir</button>
              <button className='btn btn-danger' onClick={() => abrirFecharModalIncluir()}>Cancelar</button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={modalEditar} className='modalAlunos'>
            <ModalHeader>Editar Alunos <img src={logoUpdate} alt='Editar' /></ModalHeader>
            <ModalBody className='modalAlunosBody'>
              <div className='form-group'>
                <label>ID</label> <br />
                <input type="text" className='form-control' name='id' disabled style={{ backgroundColor: 'darkgrey' }}
                  value={alunoSelecionado && alunoSelecionado.id} />

                <label>Nome:</label><br />
                <input type="text" className='form-control' name='nome' onChange={handleChange}
                  value={alunoSelecionado && alunoSelecionado.nome} />

                <label>Email:</label><br />
                <input type="text" className='form-control' name='email' onChange={handleChange}
                  value={alunoSelecionado && alunoSelecionado.email} />

                <label>Idade:</label><br />
                <input type="text" className='form-control' name='idade' onChange={handleChange}
                  value={alunoSelecionado && alunoSelecionado.idade} />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className='btn btn-primary' onClick={() => pedidoPut()}>Editar</button>
              <button className='btn btn-danger' onClick={() => abrirFecharModalEditar()}>Cancelar</button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={modalExcluir} className='modalAlunos'>
            <ModalHeader>Excluir Alunos <img src={logoDelete} alt='Excluir' /> </ModalHeader>
            <ModalBody>
              Confirma a exclusão deste(a) aluno(a): <strong>{alunoSelecionado && alunoSelecionado.nome}</strong> ?
            </ModalBody>
            <ModalFooter>
              <button className='btn btn-danger' onClick={() => pedidoDelete()}>Sim</button>
              <button className='btn btn-secondary' onClick={() => abrirFecharModalExcluir()}>Não</button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
      <footer class="rodape">
        <p>Web API + React</p>
      </footer>
    </>
  );
}

export default App;
