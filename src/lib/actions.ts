import axios from "axios";
import { NewProduct } from "../types";
const baseUrl = "http://localhost:3000/api/products";

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then(res => res.data);
}

const get = async (id: string) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then(res => res.data);
}

const create = async (newObj: NewProduct) => {
  const request = axios.post(baseUrl, newObj);
  return request.then(res => res.data);
}

const deleteEntry = async (id: string) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(res => res.data);
}

const update = async (id: string, newObj: NewProduct) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  return request.then(res => res.data);
}

export default { getAll, get, create, deleteEntry, update }

