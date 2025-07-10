import http from "../http-common";

const getAll = () => {
  console.log("#############################################")
  console.log(process.env.REACT_APP_STUDENT_APP_API_URL);
  return http.get("/api/students", { headers: { "Access-Control-Allow-Origin": "*" } });
};


const get = id => {
  return http.get(`/api/students/${id}`);
};

const create = data => {
  return http.post("/api/students", data);
};

const update = (id, data) => {

  return http.put(`/api/students/${id}`, data);
};

const remove = id => {
  return http.delete(`/api/students/${id}`);
};

const removeAll = () => {
  return http.delete(`/api/students`);
};

const findByFirstName = firstName => {
  return http.get(`/api/students?firstName=${firstName}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByFirstName: findByFirstName
};
