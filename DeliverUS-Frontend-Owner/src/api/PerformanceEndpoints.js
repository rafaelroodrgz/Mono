// This is a new file for solution!
import { post } from './helpers/ApiRequestsHelper'

function create (data) {
  return post('/performances/', data)
}

export { create }
