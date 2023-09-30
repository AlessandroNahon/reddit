import playSvg from '../assets/play.svg'
import noImageSvg from '../assets/no-image.svg'

export default function Posts({posts}) {

  const isImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i;

  if (!posts) return <>loading...</>

  return posts.map(({ url_overridden_by_dest, permalink, subreddit, title, is_video, media, thumbnail, subreddit_name_prefixed }) => (
    <a href={url_overridden_by_dest} target="_blank" rel="noreferrer" id="post" key={permalink}>
        <div id="post-metadata">
          <h4>
            <a href={`https://www.reddit.com/${subreddit_name_prefixed}`} target="_blank" rel="noreferrer">
            /{subreddit}
            </a>
            
          </h4>
          <h3 id="post-title">
            {title}
          </h3>
        </div>
        <div id="post-media">
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
              <img src={isImageUrl.test(thumbnail) ? thumbnail : noImageSvg} alt={title} id="post-image" />
          }
        </div>
      </a>
    )
  )
}