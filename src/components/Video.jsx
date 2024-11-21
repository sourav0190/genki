import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video
        src="/video1.mp4" // Path to video file in the public folder
        autoPlay
        loop // Optional: Loops the video automatically
        muted // Optional: Mutes the video by default
        controls={false} // Hide native controls
        playsInline // Ensures video plays inline on mobile
      />
    </div>
  );
};

export default VideoPlayer;
