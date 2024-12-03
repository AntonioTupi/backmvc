const baseUrl = "http://localhost:3000/users"; // URL do backend

// Função para exibir a resposta na tela
function displayResponse(data) {
    const responseElement = document.getElementById("response");
    responseElement.textContent = JSON.stringify(data, null, 2);
}

// Event Listeners para os botões
document.getElementById("getAll").addEventListener("click", async () => {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const data = await response.json();
        displayResponse(data);
    } catch (error) {
        displayResponse({ error: "Erro ao buscar todos os usuários" });
        console.error("Erro no GET ALL:", error);
    }
});

document.getElementById("getById").addEventListener("click", async () => {
    const id = prompt("Digite o ID do usuário:");
    if (id) {
        try {
            const response = await fetch(`${baseUrl}/${id}`);
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const data = await response.json();
            displayResponse(data);
        } catch (error) {
            displayResponse({ error: "Erro ao buscar o usuário pelo ID" });
            console.error("Erro no GET BY ID:", error);
        }
    }
});

document.getElementById("postUser").addEventListener("click", async () => {
    const name = prompt("Digite o nome do usuário:");
    const email = prompt("Digite o email do usuário:");
    if (name && email) {
        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email }),
            });
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const data = await response.json();
            displayResponse(data);
        } catch (error) {
            displayResponse({ error: "Erro ao criar o usuário" });
            console.error("Erro no POST USER:", error);
        }
    }
});

document.getElementById("putUser").addEventListener("click", async () => {
    const id = prompt("Digite o ID do usuário a ser atualizado:");
    const name = prompt("Digite o novo nome do usuário:");
    const email = prompt("Digite o novo email do usuário:");
    if (id && name && email) {
        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email }),
            });
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const data = await response.json();
            displayResponse(data);
        } catch (error) {
            displayResponse({ error: "Erro ao atualizar o usuário" });
            console.error("Erro no PUT USER:", error);
        }
    }
});

document.getElementById("deleteUser").addEventListener("click", async () => {
    const id = prompt("Digite o ID do usuário a ser excluído:");
    if (id) {
        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const data = await response.json();
            displayResponse(data);
        } catch (error) {
            displayResponse({ error: "Erro ao excluir o usuário" });
            console.error("Erro no DELETE USER:", error);
        }
    }
});
