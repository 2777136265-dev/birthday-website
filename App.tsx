
import React, { useState, useEffect } from 'react';
import FloatingElements from './components/FloatingElements';
import MusicPlayer from './components/MusicPlayer';

const WISHES = [
  "二十岁，是青春最灿烂的注脚。愿刘小娟眼里有星辰大海，心中有万丈光芒，生日快乐！",
  "祝刘小娟20岁生日快乐！愿你岁岁平安，万事顺遂，在这个美好的年纪里，永远做最快乐的自己。",
  "步入二十岁，愿你所有的努力都不被辜负，所有的梦想都能如约而至。刘小娟，生日快乐！",
  "二十岁的刘小娟，愿你被这个世界温柔以待，独立且自由，热烈且赤诚，前程似锦。",
  "祝你20岁生日快乐！愿你前路繁花似锦，不负韶华，在最美好的年纪里闪闪发光。"
];

const App: React.FC = () => {
  const [wishIndex, setWishIndex] = useState(0);

  useEffect(() => {
    setWishIndex(Math.floor(Math.random() * WISHES.length));
  }, []);

  const handleNextWish = () => {
    setWishIndex((prev) => (prev + 1) % WISHES.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4 relative bg-pink-50">
      <FloatingElements />

      <div className="z-10 text-center mb-10">
        <div className="inline-block p-4 rounded-full bg-pink-100 mb-6 shadow-inner animate-bounce">
          <span className="text-5xl">👑</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-2 drop-shadow-sm">
          刘小娟，生日快乐！
        </h1>
        <p className="text-xl md:text-2xl text-pink-400 font-light">
          Happy <span className="font-bold text-pink-500">19th</span> Birthday
        </p>
      </div>

      <div className="z-10 w-full max-w-md perspective-1000 mb-12">
        <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-pink-400 transform transition-all hover:scale-[1.02]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-pink-300 text-sm">To: 刘小娟</span>
            <span className="text-pink-300 text-sm">2025</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center">✨ 二十岁的你 ✨</h2>
            
            <div className="bg-pink-50/50 p-6 rounded-2xl border border-dashed border-pink-200 min-h-[120px] flex items-center justify-center text-center shadow-inner">
              <p className="text-pink-700 leading-relaxed italic text-lg">
                “{WISHES[wishIndex]}”
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-pink-100 flex flex-col items-center gap-4">
            <button 
              onClick={handleNextWish}
              className="px-8 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-colors shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>换个祝福</span>
              <span>✨</span>
            </button>
          </div>
        </div>
      </div>

      <div className="z-10 w-full max-w-sm">
        <MusicPlayer />
      </div>

      <div className="z-10 mt-16 text-center max-w-lg px-4">
        <p className="text-pink-400/80 text-sm italic mb-8">
          二十岁，是一个充满无限可能的年纪。<br/>
          愿你眼里常有笑意，心中常有梦想。<br/>
          无论走到哪里，都有繁花相伴。
        </p>
        <div className="flex justify-center gap-4">
          <span className="w-12 h-0.5 bg-pink-200 self-center"></span>
          <span className="text-pink-300 font-bold">💖 刘小娟 20岁 生日快乐 💖</span>
          <span className="w-12 h-0.5 bg-pink-200 self-center"></span>
        </div>
      </div>
    </div>
  );
};

export default App;
