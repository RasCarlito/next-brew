import { Fragment } from 'react'
import { Heading, Columns } from 'react-bulma-components'
import { filter } from 'lodash'

import Main from './main'

const { Column } = Columns

const Malt = ({ name, amount }) => {
  return (
    <p>{name} - {amount.value} {shortUnit(amount.unit)}</p>
  )
}

const Hop = ({ name, amount, attribute }) => {
  return (
    <p>
      {name} - {amount.value} {shortUnit(amount.unit)}
    </p>
  )
}

const Hops = ({ hops }) => {
  const start = filter(hops, { add: 'start' })
  const middle = filter(hops, { add: 'middle' })
  const end = filter(hops, { add: 'end' })
  const dryHop = filter(hops, { add: 'dry hop' })

  return (
    <Fragment>
      <strong>Hops</strong>
      <div className='hops-container'>
        <fieldset>
          <legend>Start</legend>
          {start.map(hop => <Hop key={hop.name} {...hop} />)}
        </fieldset>
        <fieldset>
          <legend>Middle</legend>
          {middle.map(hop => <Hop key={hop.name} {...hop} />)}
        </fieldset>
        <fieldset>
          <legend>End</legend>
          {end.map(hop => <Hop key={hop.name} {...hop} />)}
        </fieldset>
        <fieldset>
          <legend>Dry Hop</legend>
          {dryHop.map(hop => <Hop key={hop.name} {...hop} />)}
        </fieldset>
      </div>
    </Fragment>
  )
}

const Ingredients = ({ ingredients: { malt, hops } }) => {
  return (
    <Main>
      <Heading subtitle>
        Beer ingredients
      </Heading>
      <Columns>
        <Column className='is-one-third'>
          <strong>Malt</strong>
          {malt.map(malt => <Malt key={malt.name} {...malt} />)}
        </Column>
        <Column>
          <Hops hops={hops} />
        </Column>
      </Columns>
    </Main>
  )
}

function shortUnit (unit) {
  const units = {
    kilograms: 'kg',
    grams: 'g'
  }

  return units[unit]
}

export {
  Ingredients
}
