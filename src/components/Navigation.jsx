import { useContext } from 'react'

import AppContext from '../context/appContext'

export default function Navigation() {
  const { pagination, setPagination, fetchedSubreddit, selectedSubreddit } = useContext(AppContext)
  
  const rest = { after: (selectedSubreddit || fetchedSubreddit)?.after, before: (selectedSubreddit || fetchedSubreddit)?.before}

  return (

    <>
      <button
        id="prev"
        onClick={(e) =>
          setPagination({ ...rest, clicked: e.target.id, count: pagination.count - 25 })
        }
      >
        prev
      </button>
      <button
        id="next"
        onClick={(e) =>
          setPagination({ ...rest, clicked: e.target.id, count: pagination.count + 25 })
        }
      >
        next
      </button>
    </>
  )
}