import React, { useRef, useEffect } from 'react'
import Video from '../components/Video'
import style from '../styles/room.scss';

// const socket = io('/')
// const myPeer = new Peer(undefined, {
//   host: '/',
//   port: '3005'
// })

// let videoArr = []
// const myVideo = document.createElement('video')
// myVideo.muted = true
// const peers = {}


// function addVideoStream(video, stream) {
//   video.srcObject = stream
//   video.addEventListener('loadedmetadata', () => {
//     video.play()
//   })
//   videoArr.push(myVideo)
// }

const Room = () => {
  const localVideoRef = useRef(null);
  const videoStart = () => {
    navigator.mediaDevices.getUserMedia({
      video: {
        height: 350,
        width: 350,
      },
      audio: false
    }).then(stream => {
      localVideoRef.current.srcObject = stream;
    })
  }
  useEffect(() => {
    videoStart();
  }, [])

  return (
    <div id="video-grid">
      <video autoPlay muted playsInline ref={localVideoRef} />
    </div>
  );
};

export default Room;