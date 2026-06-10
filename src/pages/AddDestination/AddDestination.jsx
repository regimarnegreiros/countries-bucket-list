import { useState, useEffect } from "react";
import { Save, MapPin } from "lucide-react";
import "./AddDestination.css";
import { criar } from "../../services/api";

export default function AddDestination() {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags")
      .then((res) => res.json())
      .then((data) => {
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common),
        );
        setCountries(sortedCountries);

        const uniqueRegions = [...new Set(data.map((c) => c.region))].sort();
        setRegions(uniqueRegions);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter(
    (c) => c.region === selectedRegion,
  );

  const selectedCountryDetails = selectedCountryName
    ? filteredCountries.find((c) => c.name.common === selectedCountryName)
    : null;

  const handleClear = () => {
    setSelectedRegion("");
    setSelectedCountryName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRegion || !selectedCountryName) return;

    try {
      setSaving(true);

      const newDestination = {
        name: selectedCountryName,
        region: selectedRegion,
        capital: selectedCountryDetails?.capital?.[0] || "Não informada",
        flagUrl: selectedCountryDetails?.flags?.png,
        visited: false,
      };

      await criar(newDestination);

      alert(`Destino adicionado: ${selectedCountryName}!`);
      handleClear();
    } catch (erro) {
      alert("Erro ao tentar adicionar o destino!");
      console.error(erro);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="add-container-loading">
        <p>Carregando países...</p>
      </main>
    );
  }

  return (
    <main className="add-container">
      <section className="form-column">
        <article className="form-card">
          <h2>Adicionar Destino</h2>
          <p className="form-description">
            Escolha um país para adicionar à sua lista de viagens
          </p>

          <form onSubmit={handleSubmit}>
            <p className="input-group">
              <label htmlFor="region">Região / Continente *</label>
              <select
                id="region"
                value={selectedRegion}
                onChange={(e) => {
                  setSelectedRegion(e.target.value);
                  setSelectedCountryName("");
                }}
                required
              >
                <option value="">Selecione uma região</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </p>

            <p className="input-group">
              <label htmlFor="country">País *</label>
              <select
                id="country"
                value={selectedCountryName}
                onChange={(e) => setSelectedCountryName(e.target.value)}
                disabled={!selectedRegion}
                required
              >
                <option value="">
                  {selectedRegion
                    ? "Selecione um país"
                    : "Primeiro selecione uma região"}
                </option>
                {filteredCountries.map((country) => (
                  <option key={country.name.common} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </p>

            <footer className="btn-group">
              <button
                type="submit"
                className="btn-primary"
                disabled={!selectedCountryName || saving}
              >
                <Save className="btn-icon" />
                {saving ? "Salvando..." : "Adicionar"}
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={handleClear}
              >
                Limpar
              </button>
            </footer>
          </form>
        </article>
      </section>

      <section className="preview-column">
        <article className="preview-card">
          <h3>Preview do Card</h3>

          {selectedCountryDetails ? (
            <article className="preview-active-content">
              <figure className="flag-wrapper">
                <img
                  src={selectedCountryDetails.flags.png}
                  alt={selectedCountryDetails.name.common}
                  className="preview-flag"
                />
              </figure>
              <section className="card-info">
                <h4>{selectedCountryDetails.name.common}</h4>
                <p>
                  Capital:{" "}
                  {selectedCountryDetails.capital?.[0] || "Não informada"}
                </p>
                <p className="region-text">{selectedRegion}</p>
                <span className="badge-not-visited">Não visitado</span>
              </section>
            </article>
          ) : (
            <aside className="preview-placeholder">
              <MapPin className="pin-icon" />
              <p>Selecione uma região e um país para ver o preview</p>
            </aside>
          )}
        </article>
      </section>
    </main>
  );
}
