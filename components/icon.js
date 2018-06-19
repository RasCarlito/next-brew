import React from 'react'

export default (props) => {
  const size = props.size ? `is-${props.size}` : ''
  return (
    <span className={`icon ${size} icon-component`}>
      <i className={`fa fa-${props.name}`} />
    </span>
  )
}
