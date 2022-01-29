import React from 'react'
import { NavLink } from 'react-router-dom'

const Categories = ({ categories }) => {
  return (
    <div className="data_box">
      <NavLink to="/home" className="taskByData">
        <div className="tab">
          {/* eslint-disable-next-line */}
          <label className="tab-label" htmlFor="rd1">
            random
          </label>
        </div>
      </NavLink>
      {categories.map((item) => (
        <NavLink to={`/home/category/${item.id}`} key={item.id} className="taskByData">
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
