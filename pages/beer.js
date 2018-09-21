import { Heading, Container, Section } from 'react-bulma-components'

import Nav from '../components/nav'
import Main from '../components/main'

import api from '../utils/api'

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
      </Main>
      <Section>
        <Container>
          {beer.description}
        </Container>
      </Section>
    </div>
  )
}

Beer.getInitialProps = async ({ query: { id } }) => {
  try {
    const beer = api.getBeer(id)

    return { beer }
  } catch (err) {
    console.log(err)
  }
}

export default Beer
