import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { BigPlayButton, Player } from 'video-react';
import { useRef } from 'react';

export default function Home() {
  const videoRef = useRef(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ maxWidth: '1024px', maxHeight: '1366px' }}>
        <Player
          ref={videoRef}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          poster="https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          autoPlay
        >
          <BigPlayButton position="center" />
        </Player>

        <button onClick={() => videoRef?.current?.video?.play()}>
          custom Play
        </button>
        <button onClick={() => videoRef?.current?.video?.pause()}>
          custom pause
        </button>
        <button onClick={() => videoRef?.current?.video?.toggleFullscreen()}>
          full screen
        </button>
      </div>
    </div>
  );
}
