import { Heading } from 'react-bulma-components'

import Nav from '../components/nav'
import Main from '../components/main'
import BeerList from '../components/beers'

import api from '../utils/api'

const BeersPage = ({ beers }) => {
  return (
    <div>
      <Nav />
      <Main>
        <Heading>
          List of Brewdog beers!
        </Heading>
        <Heading subtitle>
          Browses through the most awesome beers. Cheers!
        </Heading>
        <BeerList beers={beers} />
      </Main>
    </div>
  )
}

BeersPage.getInitialProps = async () => {
  const beers = api.getBeers()

  return { beers }
}

export default BeersPage
