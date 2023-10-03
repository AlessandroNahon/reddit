import { useContext, useRef } from 'react'

import loadingGif from '../assets/loading.gif'
import AppContext from '../context/appContext'
import Video from '../components/Video'

import videojs from 'video.js'

export default function Content() {
  const { fetchedContent, selectedContent, contentLoading } = useContext(AppContext)
  const post = fetchedContent?.[0].data.children[0].data;

  const playerRef = useRef(null);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  const isImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i
  console.log('post', post)
  return (
    <div id='content'>
      {contentLoading && !selectedContent && <h1 id='empty-text'>Select something.</h1>}
      {contentLoading && selectedContent && <img className="loading-img" src={loadingGif} alt='loading' />}
      
      {
        post?.is_reddit_media_domain && !contentLoading && (
          <div>
            <h1>{post.title}</h1>
            {
              post?.is_video &&
              <Video options={
                {
                  width: post?.media.reddit_video.width,
                  height: post?.media.reddit_video.height,
                  autoplay: true,
                  controls: true,
                  responsive: true,
                  fluid: true,
                  sources: [{
                    src: post?.media.reddit_video.dash_url,
                  }]
                }
              } onReady={handlePlayerReady} />
            }
            {
              isImageUrl.test(post?.url) && <img id="content-img" src={post?.url} alt={post?.permalink} />
            }
          </div>
        )
      }
    </div>
  )
}