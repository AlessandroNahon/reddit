import { useContext } from 'react'

import AppContext from '../context/appContext'

export default function Navigation() {
  const { pagination, setPagination, fetchedSubreddit, selectedSubreddit  } = useContext(AppContext)
  return (
    <>
      <button
        id="prev"
        onClick={(e) =>
          setPagination({ clicked: e.target.id, after: (selectedSubreddit || fetchedSubreddit)?.after, before: (selectedSubreddit || fetchedSubreddit)?.before, count: pagination.count - 25 })
        }
      >
        prev
      </button>
      <button
        id="next"
        onClick={(e) =>
          setPagination({ clicked: e.target.id, after: (selectedSubreddit || fetchedSubreddit)?.after, before: (selectedSubreddit || fetchedSubreddit)?.before, count: pagination.count + 25 })
        }
      >
        next
      </button>
    </>
  )
}