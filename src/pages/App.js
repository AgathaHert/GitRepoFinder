/* eslint-disable no-unused-vars */
import gitLogo from "../assets/github.png";
import { Container } from "./styles";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import Button from "../components/Button";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [respos, setRespos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState([]);
  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = respos.find((repo) => repo.id === data.id);
        if (!isExist) {
          setRespos((prev) => [...prev, data]);
          setCurrentRepo("");
          toast.success("Repositório encontrado e adicionado!");
          return;
        } else {
          toast.info("Repositório já existe na lista.");
        }
      } else {
        toast.error("Repositório não encontrado.");
      }
    } catch (error) {
      toast.error("Repositório não encontrado.");
    }
  };

  const handleRemoveRepo = (id) => {
    setRespos((prev) => prev.filter((repo) => repo.id !== id));
    toast.success("Repositório removido com sucesso!");
  };

  return (
    <Container>
      <img src={gitLogo} alt="logo-github" width={72} height={72} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {respos.map((repo) => (
        <ItemRepo repo={repo} onClick={() => handleRemoveRepo(repo.id)} />
      ))}
      <ToastContainer />
    </Container>
  );
}

export default App;
