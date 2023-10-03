import { useContext } from 'react'

import Posts from '../components/Posts'
import Search from '../components/Search'
import AppContext from '../context/appContext'
import Navigation from '../components/Navigation'

export default function MainView() {
  const { content, search } = useContext(AppContext)

  return <main>
    <Search search={search} />
    <Posts posts={content} />
    <Navigation />
  </main>
}
