const BASE_URL = "http://localhost:3000";

export async function criar(produto) {
    const opts = {
        method: "POST",
        body: JSON.stringify(produto),
    };

    try {
        const resp = await fetch(`${BASE_URL}/`, opts);

        return resp.json();
    }
    catch (err) {
        return { message: err.message ?? "ID já existe" };
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

export async function atualizar(id, produto={}) {
    const opts = {
        method: "PATCH",
        body: JSON.stringify(produto),
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
        body: JSON.stringify(produto),
    };

    try {
        const resp = await fetch(`${BASE_URL}/id`, opts);

        return resp.json();
    }
    catch (err) {
        return { message: err.message ?? "ID não existe" };
    }
}
