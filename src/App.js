import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import api from './services/api'
import './styles.css'



 function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})


  async function handleSearch() {
    if(input === '') {
      alert("Informe o seu CEP.")
      return
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data) 
      // console.log(response.data)
      setInput('')
    } catch {
      alert('Ops! Erro ao buscar o CEP')
      setInput('')
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu cep..." 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {}

      <main className='main'>
          <h2>CEP:  {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemeto: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

      </main>

    </div>
  )
}

export default App
