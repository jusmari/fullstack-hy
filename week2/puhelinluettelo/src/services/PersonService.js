
import Axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  return Axios
    .get(baseUrl)
}

const create = (newPerson) => {
  return Axios
    .post(baseUrl, newPerson)
}

const destroy = (person) => {
  return Axios
    .delete(`${baseUrl}/${person.id}`)
}

const update = (person) => {
  return Axios
    .put(`${baseUrl}/${person.id}`, person)
}


export default { getAll, create, destroy, update }