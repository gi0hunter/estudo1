import React, { useState, useEffect } from "react";
import api from "./api";

const UserList = ({ onEdit }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get("");
            setUsers(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/${id}`);
            fetchUsers(); // Refresh the list after deletion
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };

    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul className="list-group">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <strong>{user.name}</strong> ({user.email})
                        </div>
                        <div>
                            <button
                                className="btn btn-primary btn-sm me-2"
                                onClick={() => onEdit(user)}
                            >
                                Editar
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(user.id)}
                            >
                                Excluir
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
