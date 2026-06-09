import { Link } from "react-router"
import { Globe, Map, Plus } from "lucide-react";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <Globe className="home-icon" />
      
      <h1>Minha Bucket List de Viagens</h1>
      
      <p className="home-subtitle">
        Crie sua lista de destinos dos sonhos! Adicione países que você quer visitar,
        marque os lugares que já conheceu e planeje sua próxima aventura pelo mundo.
      </p>

      <section className="card-grid">
        <Link to="/lista" className="card">
          <Map className="card-icon" />
          <h2>Minha Lista</h2>
          <p>
            Veja todos os destinos da sua bucket list e marque os lugares que já visitou
          </p>
        </Link>

        <Link to="/adicionar" className="card">
          <Plus className="card-icon" />
          <h2>Adicionar Destino</h2>
          <p>
            Escolha um país para adicionar à sua lista de viagens dos sonhos
          </p>
        </Link>
      </section>
    </main>
  );
}
