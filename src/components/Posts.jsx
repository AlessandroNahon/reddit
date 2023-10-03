import { useContext } from 'react'

import playSvg from '../assets/play.svg'
import redditSvg from '../assets/reddit.svg'
import loadingGif from '../assets/loading.gif'

import AppContext from '../context/appContext'

export default function Posts({ posts }) {
  const {subredditLoading, routeToSub, setSelectedContent} = useContext(AppContext)
  const isImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i

  function goToSubreddit(e, subreddit) {
    e.preventDefault()
    routeToSub(subreddit)
  }

  function selectContent(e, data) {
    e.preventDefault()
    if (data.is_reddit_media_domain) {
      setSelectedContent(data.permalink)
    } else {
      window.open(data.url);
    }
  }

  if (!posts || subredditLoading) return <img src={loadingGif} alt="loading" className="loading-img" />

  return posts.map(({ permalink, subreddit, title, is_video, media, thumbnail, is_reddit_media_domain, url }) => (
    <div id="post" onClick={(e) => selectContent(e, { permalink, is_reddit_media_domain, url })} key={permalink}>
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
                id="preview-video"
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
      </div>
    )
  )
}