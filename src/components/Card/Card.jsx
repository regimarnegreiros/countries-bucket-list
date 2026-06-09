import { X } from "lucide-react";
import "./Card.css";

export default function Card({ cardData, onToggle, onDelete, visited }) {
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
      <div className="infos">
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
      </div>
    </article>
  );
}
