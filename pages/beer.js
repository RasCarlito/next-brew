import { Heading, Content } from 'react-bulma-components'

import Nav from '../components/nav'
import Main from '../components/main'
import { Ingredients } from '../components/beer'

import api from '../utils/api'

import './beer.scss'

const Beer = ({ beer }) => {
  return (
    <div>
      <Nav />
      <Main>
        <Heading>
          {beer.name}
        </Heading>
        <Heading subtitle>
          {beer.tagline}
        </Heading>
        <Content>
          <img className='beer-image' src={beer.image_url} />
          <p>{beer.description}</p>
        </Content>
      </Main>
      <Ingredients {...beer} />
      <Main>
        <Heading subtitle>
          What should you eat with this awsome beer?
        </Heading>
        <ul className='food-pairing'>
          {beer.food_pairing.map((food, index) => <li key={index}>{food}</li>)}
        </ul>
      </Main>
    </div>
  )
}

Beer.getInitialProps = async ({ query: { id } }) => {
  const beer = await api.getBeer(id)

  return { beer }
}

export default Beer
