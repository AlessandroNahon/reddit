import { useContext } from 'react'

import AppContext from '../context/appContext'

export default function Navigation() {
  const { pagination, setPagination, fetchedSubreddit } = useContext(AppContext)

  const rest = { after: fetchedSubreddit?.after, before: fetchedSubreddit?.before}

  return (
    <span>
      <button
        disabled={pagination.count <= 25}
        id="prev"
        onClick={(e) =>
          setPagination({ ...rest, clicked: e.target.id, count: pagination.count === 25 ? 25 : pagination.count - 25 })
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
    </span>
  )
}