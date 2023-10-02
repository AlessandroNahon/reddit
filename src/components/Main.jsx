import { useContext } from 'react'

import Posts from './Posts'
import Search from './Search'
import AppContext from '../context/appContext'
import Navigation from './Navigation'

export default function MainView() {
  const { content, search } = useContext(AppContext)

  return <main>
    <Search search={search} />
    <Posts posts={content} />
    <Navigation />
  </main>
}
