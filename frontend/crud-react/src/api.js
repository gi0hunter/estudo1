import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/users", // Certifique-se de que a baseURL está correta
});

export default api;
