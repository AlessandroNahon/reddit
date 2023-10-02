import { useContext } from 'react'

import AppContext from '../context/appContext'

export default function Navigation() {

  const { pagination, setPagination, fetchedSubreddit, setPageNumber, pageNumber } = useContext(AppContext)

  const rest = { after: fetchedSubreddit?.after, before: fetchedSubreddit?.before }

  function handlePrev(e) {
    setPagination({ ...rest, clicked: e.target.id, count: pagination.count === 25 ? 25 : pagination.count - 25 })
    setPageNumber(pageNumber - 1)
  }

  function handleNext(e) {
    setPagination({ ...rest, clicked: e.target.id, count: pagination.count + 25 })
    setPageNumber(pageNumber + 1)
  }

  return (
    <span>
      <button
        disabled={pageNumber === 1}
        id="prev"
        onClick={handlePrev}
      >
        prev
      </button>
      <span id='page-number'>{pageNumber}</span>
      <button
        id="next"
        onClick={handleNext}
      >
        next
      </button>
    </span>
  )
}