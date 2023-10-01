export default function Search({ search }) {
  function onKeyDown(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
      return false;
    }
  }

  function onKeyup(e) {
    if (search.searchValue === '') {
      search.setSearchValue('all')
    }
  }
    
  return (
    <form onKeyDown={onKeyDown} onKeyUp={onKeyup}>
      <input type="text" placeholder="/r" onChange={(e) => search.setSearchValue(e.target.value)} />
    </form>

  )
}