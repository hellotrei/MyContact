import Axios from 'axios';

export const TIMEOUT = 5000;
export const BASE_URL = 'https://contact.herokuapp.com';

const config = {
  baseURL: BASE_URL,
  timeout: TIMEOUT,
};

export async function fetchAllContact() {
  return await Axios.get('/contact', config);
}

export async function fetchContact(id) {
  return await Axios.get(`/contact/${id}`, config);
}

export async function addContact({firstName, lastName, age, photo}) {
  return await Axios.post(
    '/contact',
    {firstName, lastName, age, photo},
    config,
  );
}

export async function editContact({id, firstName, lastName, age, photo}) {
  return await Axios.put(
    `/contact/${id}`,
    {firstName, lastName, age, photo},
    config,
  );
}

export async function deleteContact(id) {
  return await Axios.delete(`/contact/${id}`, config);
}
