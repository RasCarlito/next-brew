import { Heading } from 'react-bulma-components'

import Nav from '../components/nav'
import Main from '../components/main'

import './index.scss'

const HomePage = () => (
  <div>
    <Nav />
    <Main>
      <Heading>
        Welcome to Next Brew!
      </Heading>
      <Heading subtitle>
        A Next.js demo application listing Brewdogs beers using the Punk API
      </Heading>
    </Main>
  </div>
)

export default HomePage
