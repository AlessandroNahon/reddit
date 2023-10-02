import { isMobile } from '../utils/device'

export default function Search({ search }) {
  function onKeyDown(e) {
    if(e.key === 'Enter') {
      e.preventDefault()
      return false
    }
  }

  function onKeyup(e) {
    if (search.searchValue === '') {
      e.preventDefault()
      search.setSearchValue('popular')
    }
  }

  function setValue(e) {
    e.preventDefault()
    search.setSearchValue(e.target.value || 'popular')
  }

  function onPointerEnter(e) {
    if (isMobile) setValue(e)
  }
    
  return (
    <form onKeyDown={onKeyDown} onKeyUp={onKeyup}>
      <input type="text" placeholder='/r' onChange={setValue} onPointerEnter={onPointerEnter} />
      <h4>/{ search.searchValue }</h4>
    </form>

  )
}