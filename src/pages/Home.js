import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import Categories from '../components/categories/Categories'
import CatsBlok from '../components/cats/CatsBlok'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const { getHomeData, getMorePhoto } = useActions()
  const { categories, cats, page } = useSelector((state) => state.cat)

  useEffect(() => {
    setLoading(true)
    if (id) {
      getHomeData(id)
    } else {
      getHomeData('random')
    }
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (categories.length > 0) {
      setLoading(false)
    }
  }, [categories])

  const seeMore = () => {
    getMorePhoto(id, page)
  }

  const catsPhotos = useMemo(() => {
    return loading || <CatsBlok cats={cats} />
  }, [loading, cats])

  return (
    <>
      {loading ? (
        <div style={{ fontSize: '130%', marginTop: '15%' }}>...loading</div>
      ) : (
        <>
          <Categories categories={categories} />
          <div>
            {catsPhotos}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" className="button_see_more" onClick={() => seeMore()}>
                see more
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
