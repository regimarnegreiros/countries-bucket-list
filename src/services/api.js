const BASE_URL = "http://localhost:3000/paises";

/**
 * @description Registra um país na lista de viagem. Caso exista, ignora
 * @param {Object} pais Dados do país
 * @returns {Object}
 */
export async function criar(pais) {
    const opts = {
        method: "POST",
        body: JSON.stringify(pais),
    };

    try {
        const paises = await obter();

        if (paises.message !== undefined) return paises;

        if (paises.some(reg => reg.name === pais.name))
            return { message: "País já registrado" };

        const resp = await fetch(`${BASE_URL}`, opts);

        return resp.json();
    }
    catch (err) {
        return { message: err.message ?? "País já registrado" };
    }
}

/**
 * @description Obtém um país ou vários. Caso não haja, ignora
 * @param {string?} id ID do país no banco de dados. Se nulo, obtém todos os países registrados
 * @returns {Object}
 */
export async function obter(id = null) {
    try {
        return (await fetch(`${BASE_URL}/${id ?? ""}`)).json();
    }
    catch (err) {
        return { message: err.message ?? "ID não existe" };
    }
}

/**
 * @description Atualiza um país registrado. Caso não exista, ignora
 * @param {Object} pais Dados do país
 * @param {id} id ID do país no banco
 * @returns {Object}
 */
export async function atualizar(id, pais={}) {
    const opts = {
        method: "PATCH",
        body: JSON.stringify(pais),
    };

    try {
        const resp = await fetch(`${BASE_URL}/${id}`, opts);

        return resp.json()
    }
    catch (err) {
        return { message: err.message ?? "ID não existe" };
    }
}

/**
 * @description Remove um pais da lista. Caso não exista, ignora
 * @param {id} id ID do país no banco
 * @returns {Object}
 */
export async function deletar(id) {
    const opts = {
        method: "DELETE",
    };

    try {
        const resp = await fetch(`${BASE_URL}/${id}`, opts);

        return resp.json();
    }
    catch (err) {
        return { message: err.message ?? "ID não existe" };
    }
}
