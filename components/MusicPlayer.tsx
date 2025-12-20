
import React from 'react';

const MusicPlayer: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-pink-100">
      <h3 className="text-pink-600 font-bold mb-2 flex items-center gap-2">
        <span className="text-xl">🎵</span> 专属生日背景音
      </h3>
      <div className="w-full max-w-[330px] overflow-hidden rounded-xl shadow-inner">
        <iframe 
          frameBorder="no" 
          width={330} 
          height={86} 
          src="//music.163.com/outchain/player?type=2&id=2021388467&auto=1&height=66"
          allow="autoplay"
        />
      </div>
      <p className="text-xs text-pink-400">正在为你播放温馨的生日音乐...</p>
    </div>
  );
};

export default MusicPlayer;
