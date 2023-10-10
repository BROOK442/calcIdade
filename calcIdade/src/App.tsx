import { useState } from 'react'
import logo from './assets/brook-removebg-preview.png'
import './App.css'

function App() {
  const [dataNascimento, setdataNascimento] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(null);

  const calculateidade = () => {
    if (!nome || !dataNascimento) {
      alert('Por favor, insira seu nome e sua data de nascimento.');
      return;
    }

    const dataNascimentoObj = new Date(dataNascimento);
    const dataAtual = new Date();

    if (dataNascimentoObj >= dataAtual) { 
      alert('A data de nascimento está errada ou está no futuro!');
      return;
    }

    const idadeMilissegundos = dataAtual - dataNascimentoObj;
    const idadeAnos = Math.floor(idadeMilissegundos / (365 * 24 * 60 * 60 * 1000));
    

    setIdade(idadeAnos); 
  };

  return (
    <div className='principal'>
      <div className='logo'>
            <img src={logo} alt="React logo" />
      </div>
      <div className='informacoes'>
        <h1>Descubra sua idade!</h1>
        <label>Digite seu Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)} 
        />
        <label>Coloque sua data de nascimento</label>
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setdataNascimento(e.target.value)}
        />
        <button onClick={calculateidade}>Calcular Idade</button>
        {idade !== null && <p>{nome}, voce tem {idade} anos</p>}
      </div>
    </div>
  );
}

export default App;

