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
      search.setSearchValue('all')
    }
  }

  function setValue(e) {
    e.preventDefault()
    search.setSearchValue(e.target.value || 'all')
  }
    
  return (
    <form onKeyDown={onKeyDown} onKeyUp={onKeyup}>
      <input type="text" placeholder="/r" onChange={setValue} onPointerEnter={setValue} />
    </form>

  )
}