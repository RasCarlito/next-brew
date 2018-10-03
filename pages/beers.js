import { Component } from 'react'
import { Heading, Form, Columns } from 'react-bulma-components'
import { filter, includes } from 'lodash'

import Nav from '../components/nav'
import Main from '../components/main'
import BeerList from '../components/beers'

import api from '../utils/api'

import './beers.scss'

const { Control, Field, Input } = Form
const { Column } = Columns

class BeersPage extends Component {
  state = {
    search: '',
    beers: this.props.beers
  }

  static async getInitialProps () {
    const beers = await api.getBeers()

    return { beers }
  }

  render () {
    return (
      <div>
        <Nav />
        <Main>
          <Columns>
            <Column>
              <Heading>
                List of Brewdog beers!
              </Heading>
              <Heading subtitle>
                Browses through the most awesome beers. Cheers!
              </Heading>
            </Column>
            <Column className='form-column'>
              <form>
                <Field>
                  <Control>
                    <Input value={this.state.search} onChange={this.handleSearch} placeholder='Filter beers' />
                  </Control>
                </Field>
              </form>
            </Column>
          </Columns>
          <BeerList beers={this.state.beers} />
        </Main>
      </div>
    )
  }

  handleSearch = (e) => {
    const search = e.target.value

    this.setState((prevState) => {
      let beers = this.props.beers

      if (search) {
        beers = filter(
          this.props.beers,
          beer => beer.name.toLowerCase().includes(
            search.toLowerCase()
          )
        )
      }

      return { search, beers }
    })
  }
}

export default BeersPage
