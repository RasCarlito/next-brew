import { Component } from 'react'
import { Navbar } from 'react-bulma-components'
import Link from 'next/link'
import Icon from './icon'
import classnames from 'classnames'

import './nav.scss'

const { Brand, Item, Burger, Menu, Container } = Navbar

class NavbarComponent extends Component {
  state = {
    isMenuActive: false
  }

  render () {
    const menuClasses = classnames({ 'is-active': this.state.isMenuActive })

    return (
      <Navbar fixed='top' className='has-shadow'>
        <Brand>
          <Link href='/'>
            <Item>
              <Icon name='beer' />
              <span>Next Brew</span>
            </Item>
          </Link>
          <Burger onClick={this.toggleMenu} className={menuClasses} />
        </Brand>
        <Menu className={menuClasses}>
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
            <Link href='/about'>
              <Item>
                <Icon name='question' />
                <span>About</span>
              </Item>
            </Link>
          </Container>
        </Menu>
      </Navbar>
    )
  }

  toggleMenu = () => {
    this.setState((prevState) => {
      return { isMenuActive: !prevState.isMenuActive }
    })
  }
}

export default NavbarComponent
