function VideoPlayer() {
  return (
    <div>
      <video
        loop
        playsInline
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <VideoPlayer />
    </div>
  );
}

export default App;
