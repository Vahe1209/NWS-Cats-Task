import React from 'react'

const CatsCard = ({ cat }) => {
  return (
    <div className="product-item">
      <div className="product-img">
        <img alt="" src={cat.url} />
      </div>
    </div>
  )
}

export default CatsCard
