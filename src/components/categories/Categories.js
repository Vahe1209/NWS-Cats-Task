import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CATEGORY_ROUTE, HOME_PAGE_ROUTE } from '../../constants/routes'
import './Categories.scss'

const Categories = () => {
  const { categories } = useSelector((state) => state.cat)

  const renderCategories = useCallback((name, key = '') => {
    return (
      <Link to={HOME_PAGE_ROUTE} className="taskByData" key={key}>
        <div className="tab">
          <label className="tab-label" htmlFor="rd1">
            {name}
          </label>
        </div>
      </Link>
    )
  }, [])

  return (
    <div className="categories-container">
      {renderCategories('random')}
      {categories.map((item) => (
        <Link
          to={`${HOME_PAGE_ROUTE}${CATEGORY_ROUTE}/${item.id}`}
          key={item.id}
          className="taskByData"
        >
          <div className="tab">
            <label className="tab-label" htmlFor="rd1">
              {item.name}
            </label>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories
