import { useState } from "react";
import { ThemeDivInput, ThemeHeader } from "./style";
import SearchResults from "../SearchResults";

function Header({ searchProduct }) {
  const [search, setSearch] = useState("");

  return (
    <ThemeHeader>
      <h1>
        <span className="titleBurguer">Burguer </span>
        <span className="titleKenzie">Kenzie</span>
      </h1>
      <ThemeDivInput>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            placeholder="Digitar Pesquisa"
            onChange={(e) => searchProduct(e.target.value)}
          />
          <button onClick={() => searchProduct(search)}>Pesquisar</button>
        </form>
      </ThemeDivInput>
    </ThemeHeader>
  );
}

export default Header;
