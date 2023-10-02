import { useContext } from 'react'

import playSvg from '../assets/play.svg'
import redditSvg from '../assets/reddit.svg'
import loadingGif from '../assets/loading.gif'

import AppContext from '../context/appContext'

export default function Posts({ posts }) {
  const {loading, routeToSub} = useContext(AppContext)
  const isImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i

  function goToSubreddit(e, subreddit) {
    e.preventDefault()
    routeToSub(subreddit)
  }

  if (!posts || loading) return <img style={{width: '50px', marginTop: '25px'}} src={loadingGif} alt="loading" />

  return posts.map(({ url_overridden_by_dest, permalink, subreddit, title, is_video, media, thumbnail, subreddit_name_prefixed }) => (
    <a href={url_overridden_by_dest} target="_blank" rel="noreferrer" id="post" key={permalink}>
        <div id="post-info">
          <h4>
            <button id='post-sub' onClick={(e) => goToSubreddit(e, subreddit)}>
              /{subreddit}
            </button>
          </h4>
          <h3 id="post-title">
            {title}
          </h3>
        </div>
      <div id="post-media">
        <span>

       
          {
            is_video ?
            <video
                muted
                poster={playSvg}
                src={media.reddit_video.scrubber_media_url}
                onMouseOver={e => e.target.play()}
                onMouseLeave={e => e.target.load()}
            >  
              </video> :
              <img src={isImageUrl.test(thumbnail) ? thumbnail : redditSvg} alt={title} id="post-image" />
          }
           </span>
        </div>
      </a>
    )
  )
}