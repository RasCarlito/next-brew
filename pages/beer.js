import { Heading, Content, Columns } from 'react-bulma-components'

import Nav from '../components/nav'
import Main from '../components/main'

import api from '../utils/api'

import './beer.scss'

const { Column } = Columns

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
      <Main>
        <Heading subtitle>
          Beer ingredients
        </Heading>
        <Columns>
          <Column>
            <strong>Malt</strong>
            {beer.ingredients.malt.map(malt => (
              <p key={malt.name}>{malt.name} - {malt.amount.value} {malt.amount.unit}</p>
            ))}
          </Column>
          <Column>
            <strong>Hops</strong>
            {beer.ingredients.hops.map(hop => (
              <p key={hop.name}>{hop.name} - {hop.amount.value} {hop.amount.unit}</p>
            ))}
          </Column>
        </Columns>
      </Main>
      <Main>
        <Heading subtitle>
          What should you eat with this awsome beer?
        </Heading>
        <ul>
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
