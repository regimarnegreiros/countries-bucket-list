import { X } from "lucide-react";
import "./Card.css";

/**
 * @typedef CardParams
 * @property {{ capital?: string, region?: string, name?: string, flagUrl?: string }} cardData
 * @property {() => void} onToggle
 * @property {() => void} onDelete
 * @property {boolean} visited
 */

/**
 * @description Cartão com dados de cada país cadastrado
 * @param {CardParams}
 * @returns {JSX.Element}
 */
export default function Card({ cardData, onToggle, onDelete, visited }) {
  // Dados corrigidos caso estejam faltando
  const data = {
    flag: cardData.flagUrl || "",

    capitals: `Capital: ${cardData.capital || "Não informada"}`,

    continents: cardData.region || "Sem região",

    name: cardData.name || "País desconhecido",

    alt: cardData.name || "Bandeira",
  };

  return (
    <article>
      <img
        src={data.flag}
        className={visited ? "isVisited" : undefined}
        alt={data.alt}
      />
      <section className="infos">
        <h3>{data.name}</h3>
        <p className="capital">{data.capitals}</p>
        <p className="continent">{data.continents}</p>
        <span className={`visitedStatus ${visited ? "visited" : "notVisited"}`}>
          {visited ? "Visitado" : "Não visitado"}
        </span>
        <div className="buttons">
          <button
            onClick={onToggle}
            className={`confirm ${visited ? "isVisited" : ""}`}
          >
            {visited ? "Desmarcar" : "Marcar visitado"}
          </button>
          <button onClick={onDelete} className="delete">
            <X />
          </button>
        </div>
      </section>
    </article>
  );
}
