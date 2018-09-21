import { find, toNumber } from 'lodash'
import beers from './beers.json'

function getBeers () {
  return beers
}

function getBeer (id) {
  id = toNumber(id)
  return find(beers, {id})
}

export default {
  getBeers,
  getBeer
}
