import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "./BucketList.css";
import { obter, atualizar, deletar } from "../../services/api";

/**
 * @description Página de listagem de países
 * @returns {JSX.Element}
 */
export default function BucketList() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [visitFilter, setVisitFilter] = useState("");

  useEffect(() => {
    async function carregarLista() {
      try {
        const dados = await obter();
        setCountries(dados);
      } catch (err) {
        console.error("Erro ao carregar lista", err);
      }
    }
    carregarLista();
  }, []);

  async function removeCountry(id) {
    if (!window.confirm("Tem certeza que deseja remover?")) return;

    try {
      await deletar(id);
      setCountries((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Erro ao deletar", err);
    }
  }

  async function toggleVisited(id, currentStateVisited) {
    try {
      await atualizar(id, { visited: !currentStateVisited });
      setCountries((prev) => prev.map((country) => (
        country.id === id ? { ...country, visited: !country.visited } : country
      )));
    } catch (err) {
      console.error("Erro ao atualizar", err);
    }
  }

  const visited = countries.filter((country) => country.visited);
  const percent = Math.round((visited.length / countries.length) * 100) || 0;

  const regions = [
    ...new Set(countries.map((country) => country.region).filter(Boolean)),
  ].sort();

  const filtered = countries.filter((country) => {
    const query = search.toLowerCase();

    const matchSearch =
      !query ||
      (country.name && country.name.toLowerCase().includes(query)) ||
      (country.capital && country.capital.toLowerCase().includes(query));

    const matchRegion = !regionFilter || country.region === regionFilter;

    const matchVisit =
      !visitFilter || (visitFilter === "visited" ? country.visited : !country.visited);

    return matchSearch && matchRegion && matchVisit;
  });

  return (
    <main>
      <header>
        <div>
          <h1>Minha Bucket List</h1>
          <p>{`${visited.length} de ${countries.length} destinos visitados`}</p>
        </div>
        <div className="percent">
          <strong>{percent}%</strong>
          <p>concluído</p>
        </div>
      </header>

      <search className="filters">
        <input
          type="search"
          placeholder="Buscar por país ou capital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="">Todas as regiões</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <select
          value={visitFilter}
          onChange={(e) => setVisitFilter(e.target.value)}
        >
          <option value="">Todos os destinos</option>
          <option value="visited">Visitados</option>
          <option value="notVisited">Não visitados</option>
        </select>
        <p>{filtered.length} destinos encontrados</p>
      </search>

      <section className="cards-grid">
        {filtered.map((country) => (
          <Card
            key={country.id}
            cardData={country}
            visited={country.visited ?? false}
            onToggle={() => toggleVisited(country.id, country.visited)}
            onDelete={() => removeCountry(country.id)}
          />
        ))}
      </section>
    </main>
  );
}
