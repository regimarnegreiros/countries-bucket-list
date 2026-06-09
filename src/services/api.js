const BASE_URL = "http://localhost:3000/paises";

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

export async function obter(id=null) {
    try {
        return (await fetch(`${BASE_URL}/${id ?? ""}`)).json();
    }
    catch (err) {
        return { message: err.message ?? "ID não existe" };
    }
}

export async function atualizar(id, pais={}) {
    const opts = {
        method: "PATCH",
        body: JSON.stringify(pais),
    };

    try {
        const resp = await fetch(`${BASE_URL}/${id}`, opts);
    }
    catch (err) {
        return { message: err.message ?? "ID não existe" };
    }
}

export async function deletar(id) {
    const opts = {
        method: "DELETE",
        body: JSON.stringify(pais),
    };

    try {
        const resp = await fetch(`${BASE_URL}/id`, opts);

        return resp.json();
    }
    catch (err) {
        return { message: err.message ?? "ID não existe" };
    }
}
