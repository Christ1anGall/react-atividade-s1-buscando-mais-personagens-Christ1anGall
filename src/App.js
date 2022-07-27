import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters/Characters";
import Button from "./components/Button/button";

function App() {
  const [characterList, SetCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  console.log();
  function nextPage() {
    setPage((oldNumber) => {
      return oldNumber === characterList.info.pages ? oldNumber : oldNumber + 1;
    });
  }

  function previusPage() {
    setPage((oldNumber) => {
      return oldNumber === 1 ? 1 : oldNumber - 1;
    });
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => SetCharacterList(response))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div className="App">
      <h1>Meus personagens: </h1>
      <nav className="navBar">
        <Button onClick={previusPage}>Anterior</Button>
        <p className="pageNumber">Pagina:{page}</p>
        <Button onClick={nextPage}>Proxima</Button>
      </nav>

      <header className="App-header">
        <Characters characterList={characterList} />
      </header>
    </div>
  );
}

export default App;
