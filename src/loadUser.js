import httpGet from './http';

export default function loadUser(id) {
  const data = httpGet(`http://server:8000/users/${id}`);
  return JSON.parse(data);
}
