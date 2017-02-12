import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">
        Acitve
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
  )
}

export default Footer
