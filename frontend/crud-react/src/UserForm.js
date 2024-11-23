import React, { useState, useEffect } from "react";
import api from "./api";

const UserForm = ({ selectedUser, onSave }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
        } else {
            setName("");
            setEmail("");
        }
    }, [selectedUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedUser) {
                await api.put(`/${selectedUser.id}`, { name, email });
            } else {
                await api.post("", { name, email });
            }
            alert("Usuário salvo com sucesso!");
            onSave(); 
            window.location.reload();
        } catch (error) {
            console.error("Erro ao salvar usuário:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h2>{selectedUser ? "Editar Usuário" : "Adicionar Usuário"}</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Nome
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-success">
                Salvar
            </button>
        </form>
    );
};

export default UserForm;
