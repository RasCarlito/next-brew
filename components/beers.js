import { chunk } from 'lodash'
import Link from 'next/link'
import { Card, Columns, Content, Heading, Media } from 'react-bulma-components'

const { Column } = Columns

const Beer = ({ beer }) => {
  return (
    <Link href={`/beer?id=${beer.id}`} as={`/beer/${beer.id}`}>
      <a>
        <Card style={{ height: '100%' }}>
          {/* <Card.Image src={beer.image_url} /> */}
          <Card.Content>
            <Media>
              <Media.Item>
                <Heading size={4}>
                  {beer.name}
                </Heading>
                <Heading subtitle size={6}>
                  {beer.tagline}
                </Heading>
              </Media.Item>
            </Media>
            <Content style={{ fontSize: '.8rem' }}>
              {beer.description}
            </Content>
          </Card.Content>
        </Card>
      </a>
    </Link>
  )
}

const BeerList = ({ beers }) => {
  const rows = chunk(beers, 3)

  return rows.map((items, i) => (
    <Columns key={i}>
      {items.map((beer, j) => (
        <Column key={j}>
          <Beer beer={beer} />
        </Column>
      ))}
    </Columns>
  ))
}

export default BeerList
