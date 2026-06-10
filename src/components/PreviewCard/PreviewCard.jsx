import { MapPin } from "lucide-react";
import "./PreviewCard.css";


/**
 * @typedef Country
 * @property {{svg?: string, png?: string}} flags
 * @property {{common: string}} name
 * @property {string[]?} capital
 * @property {string} region
 */

/**
 * @description Preview do Card na página de cadastro
 * @param {{country: Country}} props
 * @returns {JSX.Element}
 */
export default function PreviewCard({ country }) {
  return (
    <section className="preview-column">
      <article className="preview-card">
        <h3>Preview do Card</h3>

        {country ? (
          <article className="preview-active-content">
            <figure className="flag-wrapper">
              <img
                src={country.flags.svg ?? country.flags.png}
                alt={country.name.common}
                className="preview-flag"
              />
            </figure>
            <section className="card-info">
              <h4>{country.name.common}</h4>
              <p>
                Capital:{" "}
                {country.capital?.[0] || "Não informada"}
              </p>
              <p className="region-text">{country.region}</p>
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
  );
}