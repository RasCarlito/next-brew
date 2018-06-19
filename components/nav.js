import { Navbar } from 'react-bulma-components'
import Link from 'next/link'
import Icon from './icon'

import './nav.scss'

const { Brand, Item, Burger, Menu, Container } = Navbar

const NavbarComponent = () => (
  <Navbar fixed='top' className='has-shadow'>
    <Brand>
      <Link href='/'>
        <Item>
          <Icon name='beer' />
          <span>Next Brew</span>
        </Item>
      </Link>
      <Burger />
    </Brand>
    <Menu>
      <Container>
        <Link href='/'>
          <Item>
            <Icon name='home' />
            <span>Home</span>
          </Item>
        </Link>
        <Link href='/beers'>
          <Item>
            <Icon name='list-ul' />
            <span>Beers</span>
          </Item>
        </Link>
      </Container>
    </Menu>
  </Navbar>
)

export default NavbarComponent
