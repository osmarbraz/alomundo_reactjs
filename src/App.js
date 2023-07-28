import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Cria um estado para armazenar a mensagem
  const [mensagem, setMensagem] = useState("");

  // Busca a mensagem da API
  useEffect(() => {
    fetch("http://localhost:8000/mensagem")
      .then((res) => res.json())
      .then((data) => setMensagem(data.mensagem));
  }, []);

  // Renderiza a página
  return (
    <div className="App">
      <h1>{mensagem}</h1>
    </div>
  );
}

export default App