import { get, post } from './helpers/ApiRequestsHelper'

function getDetail (id) {
  return get(`products/${id}`)
}

function getProductCategories () {
  return get('productCategories')
}

function create (data) {
  return post('/products/', data)
}

function update (id, data) {
  return post(`/products/${id}`, data)
}

function remove (id) {
  return post(`/products/${id}/delete`)
}

export { getDetail, getProductCategories, create, update, remove }
