import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import CatsBlok from '../components/cats/CatsBlok'
import './Home.scss'

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
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div>
            {catsPhotos}
            <div className="button_container" style={{}}>
              <button
                type="button"
                className="button_see_more"
                onClick={() => {
                  seeMore()
                }}
              >
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
