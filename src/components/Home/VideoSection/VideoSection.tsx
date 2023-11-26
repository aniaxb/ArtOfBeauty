import {useState} from 'react';

export default function VideoSection() {

  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoEnd = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full overflow-hidden gap-8 bg-darkgreen">
        <video controls loop
          src="/src/assets/beauty_salon_video.mp4"
          className="object-cover object-center w-full lg:w-1/2"
          autoPlay={isPlaying}
          onEnded={handleVideoEnd}
        />
      </div>
    </>
  );
}
