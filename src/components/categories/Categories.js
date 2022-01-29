import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { CATEGORY_ROUTE, HOME_PAGE_ROUTE } from '../../constants/routes'
import './Categories.scss'

const Categories = ({ categories = [] }) => {
  const renderCategories = useCallback((name, key = '') => {
    return (
      <NavLink to={HOME_PAGE_ROUTE} className="taskByData" key={key}>
        <div className="tab">
          <label className="tab-label" htmlFor="rd1">
            {name}
          </label>
        </div>
      </NavLink>
    )
  }, [])

  return (
    <div>
      {renderCategories('random')}
      {categories.map((item) => (
        <NavLink
          to={`${HOME_PAGE_ROUTE}${CATEGORY_ROUTE}/${item.id}`}
          key={item.id}
          className="taskByData"
        >
          <div className="tab">
            <label className="tab-label" htmlFor="rd1">
              {item.name}
            </label>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Categories
