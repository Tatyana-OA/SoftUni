import * as api from './api.js';
// after everything's been imported from api, set host and export login/register/logout
const host = 'http://localhost:3030'
api.settings.host = host
// after they have been imported, they can be exported for further use in view controllers
export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Implement application-specific requests

export async function getFurniture() {
    return await api.get(host+'/data/catalog')
}
export async function getItemById(id) {
    return await api.get(host+'/data/catalog/' + id)
}
export async function getMyFurniture() {
    const userId = sessionStorage.getItem('userId')
    return await api.get(host+`/data/catalog?where=_ownerId%3D%22${userId}%22`)
}
export async function createRecord(data) {
    return await api.post(host+'/data/catalog', data)
}
export async function editRecord (id,data) {
    return await api.put(host+'/data/catalog/' + id, data)
}
export async function deleteRecord(id) {
    return await api.del(host+'/data/catalog/' + id)
}