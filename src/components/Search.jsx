export default function Search({search}) {
  return (
    <form onKeyDown={(e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      return false;
    }
    }} onSubmit={async () => await search.handleSubmit()}>
      <input type="text" placeholder="/r" onChange={(e) => search.setSearchValue(e.target.value)} />
    </form>

  )
}