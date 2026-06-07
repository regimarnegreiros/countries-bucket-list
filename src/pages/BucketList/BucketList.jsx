import { useState, /* useEffect */ } from "react";
import Card from "../../components/Card/Card";
import "./BucketList.css";

/* async function getCountries() {
  try {
    const res = await fetch("http://localhost:3000/countries");

    return await res.json();
  }
  catch {
    return [];
  }
} */

export default function BucketList() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [visitFilter, setVisitFilter] = useState("");

  /* useEffect(() => {
    getCountries().then(setCountries);
  }, []); */

  function removeCountry(index) {
    setCountries((prev) => prev.filter((_, i) => i !== index));
  }

  function toggleVisited(index) {
    setCountries((prev) =>
      prev.map((c, i) => (i === index ? { ...c, visited: !c.visited } : c))
    );
  }

  const visited = countries.filter((c) => c.visited);
  const percent = Math.round((visited.length / countries.length) * 100) || 0;

  const regions = [...new Set(countries.flatMap((c) => c.continents ?? []))].sort();

  const filtered = countries.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      c.name.common.toLowerCase().includes(q) ||
      (c.capital ?? []).some((cap) => cap.toLowerCase().includes(q));
    const matchRegion = !regionFilter || (c.continents ?? []).includes(regionFilter);
    const matchVisit =
      !visitFilter ||
      (visitFilter === "visited" ? c.visited : !c.visited);
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
        <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
          <option value="">Todas as regiões</option>
          {regions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <select value={visitFilter} onChange={(e) => setVisitFilter(e.target.value)}>
          <option value="">Todos os destinos</option>
          <option value="visited">Visitados</option>
          <option value="notVisited">Não visitados</option>
        </select>
        <p>{filtered.length} destinos encontrados</p>
      </search>

      <section className="cards-grid">
        {filtered.map((country) => (
          <Card
            key={country.name.common}
            cardData={country}
            visited={country.visited ?? false}
            onToggle={() => toggleVisited(countries.indexOf(country))}
            onDelete={() => removeCountry(countries.indexOf(country))}
          />
        ))}
      </section>
    </main>
  );
}
