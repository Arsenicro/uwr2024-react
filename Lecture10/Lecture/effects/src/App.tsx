import { useEffect, useRef, useState } from "react";
import { createConnection } from "./chat";

function VideoPlayer({ isPlaying }: { isPlaying: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  console.log("Outside 1");

  useEffect(() => {
    console.log("Inside");
    // On się wykonuje po renderowaniu komponentu
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]); // Array zależności bez niej wykonują sie przy każdym renderze, z nią tylko jak zmieni się isPlaying

  console.log("Outside 2");

  return (
    <div>
      <video
        ref={videoRef}
        loop
        playsInline
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}

function Example1() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <VideoPlayer isPlaying={isPlaying} />
      <button
        className="p-2 border bg-cyan-300"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        className="p-2 border bg-cyan-300"
        onClick={() => setCounter((curr) => curr + 1)}
      >
        {counter}
      </button>
    </div>
  );
}

function ChatBox({ room }: { room: string }) {
  useEffect(() => {
    // Start Sync
    const connection = createConnection(room);
    connection.connect();

    return () => {
      //Stop Sync
      connection.disconnect();
    };
  }, [room]); // Jeśli to sie zmieni, to stop sync i start sync

  return <>ChatBox</>;
}

function App() {
  const [room, setRoom] = useState("room1");
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {counter <= 10 && <ChatBox room={room} />}
      <input
        type="text"
        className="p-2 border bg-slate-500"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button
        className="p-2 border bg-cyan-300"
        onClick={() => setCounter((curr) => curr + 1)}
      >
        {counter}
      </button>
    </div>
  );
}

export default App;
