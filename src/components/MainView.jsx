import Posts from './Posts'

export default function MainView({subreddit}) {
  return <main><Posts posts={subreddit} /></main>
}
