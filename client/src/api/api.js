import axios from 'axios';

export const AuthAPI = {
    login(login, password) {
        return axios.post('/api/auth/login', { login, password });
    },
    join(login, password) {
        return axios.post('/api/auth/join', { login, password });
    }
};

export const TanksAPI = {
    getTanks(tLevel, tClass, tNation) {
        return axios.get('/api/tanks', {
            params: { tLevel, tClass, tNation }
        });
    },
    getTank(id) {
        return axios.get(`/api/tanks/${id}`);
    },
    getLevels() {
        return axios.get('/api/levels');
    },
    getClasses() {
        return axios.get('/api/classes');
    },
    getNations() {
        return axios.get('/api/nations');
    }
};

export const AdminAPI = {
    addTank(params) {
        return axios.post('/api/admin/create', params);
    },
    editTank(params) {
        return axios.post('/api/admin/edit', params);
    },
    deleteTank(id) {
        return axios.post('/api/admin/delete', { id });
    },
    getTanks() {
        return axios.get('/api/admin/tanks');
    },
    getClasses() {
        return axios.get('/api/admin/diagram/classes');
    },
    getLevels() {
        return axios.get('/api/admin/diagram/levels');
    },
    getNations() {
        return axios.get('/api/admin/diagram/nations');
    },
};
