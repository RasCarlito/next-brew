import { Heading, Content } from 'react-bulma-components'
import Link from 'next/link'

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
        A Next.js application listing Brewdogs beers using the Punk API
      </Heading>
      <Content>
        <p>
          To get started browsing through the awesome Brewdog beers go to <Link href='/beers'><a>the beers page</a></Link>.
        </p>
        <p>
          To know a bit more about this project you can go to <Link href='/about'><a>the about page</a></Link>.
        </p>
        <p>
          But most important: Keep calm and a have a beer!
        </p>
      </Content>
    </Main>
  </div>
)

export default HomePage
