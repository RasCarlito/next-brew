import { Heading } from 'react-bulma-components'

import Nav from '../components/nav'
import Main from '../components/main'

const BeersPage = () => (
  <div>
    <Nav />
    <Main>
      <Heading>
        List of Brewdog beers!
      </Heading>
      <Heading subtitle>
        Browses through the most awesome beers. Cheers!
      </Heading>
    </Main>
  </div>
)

export default BeersPage
