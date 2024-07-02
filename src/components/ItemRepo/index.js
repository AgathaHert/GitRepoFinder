/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, onClick }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Ver repositório
      </a>
      <br></br>
      <a href="#" className="remover" onClick={() => onClick(repo.id)}>
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
