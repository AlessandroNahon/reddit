import Posts from './Posts'
import Search from './Search'

export default function MainView({subreddit, search}) {
  return <main>
    <Search search={search} />
    <Posts posts={subreddit} />
  </main>
}
