import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEdit = (user) => {
        setSelectedUser(user);
    };

    const handleSave = () => {
        setSelectedUser(null); // Limpa o formulário após salvar
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Gerenciamento de Usuários</h1>
            <UserForm selectedUser={selectedUser} onSave={handleSave} />
            <UserList onEdit={handleEdit} />
        </div>
    );
};

export default App;
