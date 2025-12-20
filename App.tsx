
import React, { useState, useEffect } from 'react';
import FloatingElements from './components/FloatingElements';
import MusicPlayer from './components/MusicPlayer';
import { generateBirthdayWish } from './services/geminiService';

const App: React.FC = () => {
  const [aiWish, setAiWish] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const fetchAiWish = async () => {
    setLoading(true);
    const wish = await generateBirthdayWish("向闫", 19);
    setAiWish(wish);
    setLoading(false);
  };

  useEffect(() => {
    // Initial fetch
    fetchAiWish();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4 relative">
      <FloatingElements />

      {/* Hero Section */}
      <div className="z-10 text-center mb-10">
        <div className="inline-block p-4 rounded-full bg-pink-100 mb-6 shadow-inner animate-bounce">
          <span className="text-5xl">👑</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-2 drop-shadow-sm">
          向闫，生日快乐！
        </h1>
        <p className="text-xl md:text-2xl text-pink-400 font-light">
          Happy <span className="font-bold text-pink-500">19th</span> Birthday
        </p>
      </div>

      {/* Interactive Birthday Card */}
      <div className="z-10 w-full max-w-md perspective-1000 mb-12">
        <div 
          onClick={() => setIsOpened(!isOpened)}
          className={`relative bg-white p-8 rounded-3xl shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 border-t-8 border-pink-400 ${isOpened ? 'rotate-y-10 scale-100' : 'rotate-y-0'}`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-pink-300 text-sm">To: 向闫</span>
            <span className="text-pink-300 text-sm">2024.xx.xx</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-pink-700 mb-4">✨ 十九岁的你 ✨</h2>
            <div className="h-[200px] bg-pink-50 rounded-2xl flex items-center justify-center overflow-hidden mb-4 border border-pink-100 relative group">
              <img 
                src="https://picsum.photos/seed/birthday/400/300" 
                alt="Birthday Vibes" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent flex items-end p-4">
                <p className="text-white font-medium">愿你被这个世界温柔以待</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-dashed border-pink-300 min-h-[100px] flex items-center justify-center text-center">
              {loading ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
                  <p className="text-sm text-pink-400">正在为你采集星光...</p>
                </div>
              ) : (
                <p className="text-pink-700 leading-relaxed italic">
                  “{aiWish}”
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-pink-100 flex justify-between items-center">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                fetchAiWish();
              }}
              className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition-colors shadow-md active:scale-95"
            >
              换一个祝福 🪄
            </button>
            <div className="text-pink-400 text-xs">点击卡片会有小惊喜</div>
          </div>
          
          {isOpened && (
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              🎉 点击收起
            </div>
          )}
        </div>
      </div>

      {/* Music Section */}
      <div className="z-10 w-full max-w-sm">
        <MusicPlayer />
      </div>

      {/* Footer Quote */}
      <div className="z-10 mt-16 text-center max-w-lg px-4">
        <p className="text-pink-400/80 text-sm italic mb-8">
          十九岁，是一个充满无限可能的年纪。<br/>
          愿你眼里常有笑意，心中常有梦想。<br/>
          无论走到哪里，都有繁花相伴。
        </p>
        <div className="flex justify-center gap-4">
          <span className="w-12 h-0.5 bg-pink-200 self-center"></span>
          <span className="text-pink-300">💖 祝向闫生日大快乐 💖</span>
          <span className="w-12 h-0.5 bg-pink-200 self-center"></span>
        </div>
      </div>

      {/* Decorative Sparkles */}
      <div className="fixed bottom-4 left-4 text-3xl opacity-50 animate-bounce">🎈</div>
      <div className="fixed bottom-4 right-4 text-3xl opacity-50 animate-bounce delay-700">🎂</div>
    </div>
  );
};

export default App;
