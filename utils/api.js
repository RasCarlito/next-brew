import { find, toNumber } from 'lodash'
import beers from './beers.json'

async function getBeers () {
  return beers
}

async function getBeer (id) {
  id = toNumber(id)
  return find(beers, {id})
}

export default {
  getBeers,
  getBeer
}
