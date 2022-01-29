import React from 'react'
import CatsCard from './CatsCard'
import './Cats.scss'

const CatsBlok = ({ cats = [] }) => {
  return (
    <div>
      <div className="list-filter-container">
        {cats.map((item) => (
          <CatsCard key={item.id} cat={item} />
        ))}
      </div>
    </div>
  )
}

export default CatsBlok
