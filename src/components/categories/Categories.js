import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import './Categories.scss'

const Categories = ({ categories = [] }) => {
  const renderCategories = useCallback((name, key = '') => {
    return (
      <NavLink to="/home" className="taskByData" key={key}>
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
      {categories.map((item, index) => renderCategories(item.name, index))}
    </div>
  )
}

export default Categories
