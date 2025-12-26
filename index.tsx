
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const WISHES = [
  "从2025年4月21日相识到2025年12月26日，转眼间迎来了你的20岁。刘小娟，愿你二十岁的每一天都像阳光一样灿烂！",
  "祝刘小娟20岁生日快乐！很高兴在这一路时光里有你相伴。愿你岁岁平安，万事顺遂。",
  "二十岁，是青春最美好的注脚。刘小娟，愿你眼里有星辰大海，心中有万丈光芒，生日快乐！",
  "从初识到现在的二十岁，愿你被这个世界温柔以待。独立且自由，热烈且赤诚，前程似锦。",
  "刘小娟，祝你20岁生日快乐！愿你前路繁花似锦，不负韶华，在最美好的年纪里闪闪发光。"
];

const BirthdayCake: React.FC = () => (
  <div className="relative w-40 h-40 mx-auto mb-8 animate-cake-pop">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <div className="relative">
        <div className="w-1 h-8 bg-yellow-200 mx-auto rounded-full shadow-[0_0_10px_rgba(253,224,71,0.5)]"></div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-5 bg-orange-500 rounded-full animate-flame blur-[1px]"></div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-pink-600 font-bold text-xl drop-shadow-md">20</div>
      </div>
    </div>
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-16 bg-pink-200 rounded-t-lg shadow-inner border-b-4 border-pink-300 z-10">
      <div className="flex justify-around pt-2">
        <div className="w-4 h-4 bg-white rounded-full opacity-50"></div>
        <div className="w-4 h-4 bg-white rounded-full opacity-50"></div>
        <div className="w-4 h-4 bg-white rounded-full opacity-50"></div>
      </div>
    </div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-12 bg-rose-300 rounded-lg shadow-md">
      <div className="w-full h-2 bg-white/30 mt-2"></div>
    </div>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-2 bg-gray-200 rounded-full shadow-sm"></div>
  </div>
);

const App: React.FC = () => {
  const [wishIndex, setWishIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setWishIndex(Math.floor(Math.random() * WISHES.length));
  }, []);

  const handleStart = () => {
    setHasStarted(true);
    setTimeout(() => setShowContent(true), 300);
  };

  const handleNextWish = () => {
    setWishIndex((prev) => (prev + 1) % WISHES.length);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-start p-6 relative overflow-x-hidden font-sans">
      
      {/* 封面：解决自动播放限制 */}
      {!hasStarted && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 p-6 text-center">
          <div className="animate-bounce mb-8">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl text-6xl relative">
                🎁
                <span className="absolute -top-2 -right-2 text-2xl animate-pulse">🐑</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-pink-600 mb-4">刘小娟，你有一份特别的礼物</h1>
          <p className="text-pink-400 mb-8 font-light">来自“飞翔的羊羊”的 20 岁祝福</p>
          <button 
            onClick={handleStart}
            className="bg-pink-500 text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            点击开启 ✨
          </button>
        </div>
      )}

      {/* 动态背景装饰 */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute animate-float text-2xl" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}>
            {['🎂', '🎈', '💖', '✨', '☁️', '🎁', '🐑'][i % 7]}
          </div>
        ))}
      </div>

      {showContent && (
        <>
          <div className="mt-8 mb-4 transition-all duration-1000">
             <BirthdayCake />
          </div>

          <div className={`z-10 w-full max-w-md bg-white/80 backdrop-blur-lg border border-white p-8 rounded-[2.5rem] shadow-2xl text-center space-y-6 transition-all duration-1000 transform ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
            <header>
              <div className="inline-block bg-pink-100 text-pink-500 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
                SINCE 2025.4.21 🌸
              </div>
              <h1 className="text-4xl font-bold text-gray-800 tracking-tight">刘小娟，生日快乐</h1>
              <p className="text-pink-400 mt-2 font-medium">2025.12.26 • 20th Birthday</p>
            </header>

            {/* 故事时光轴 */}
            <div className="flex justify-between items-center px-4 py-4 bg-pink-50/50 rounded-2xl border border-pink-100 relative">
                <div className="text-center">
                    <p className="text-[10px] text-pink-300 uppercase">初识</p>
                    <p className="text-sm font-bold text-pink-500">2025.4.21</p>
                </div>
                <div className="flex-1 h-[2px] bg-pink-200 mx-2 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-400">✈️</div>
                </div>
                <div className="text-center">
                    <p className="text-[10px] text-pink-300 uppercase">二十岁</p>
                    <p className="text-sm font-bold text-pink-500">2025.12.26</p>
                </div>
            </div>

            <div className="py-8 px-6 bg-white/50 rounded-3xl border border-pink-50 relative min-h-[140px] flex flex-col items-center justify-center shadow-inner">
              <p className="text-gray-700 italic leading-relaxed text-lg mb-4">
                “{WISHES[wishIndex]}”
              </p>
              <div className="w-full text-right pr-2">
                <span className="text-pink-500 font-bold text-sm">—— 飞翔的羊羊 🐑</span>
              </div>
            </div>

            <button 
              onClick={handleNextWish}
              className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-pink-200 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center mx-auto gap-2"
            >
              <span>再看一个祝福</span>
              <span className="text-xl">✨</span>
            </button>
          </div>

          {/* 底部音乐播放器 */}
          <div className="mt-10 z-10 transition-all hover:scale-105 mb-10">
            <iframe 
              frameBorder="no" 
              width={330} 
              height={86} 
              src="//music.163.com/outchain/player?type=2&id=2021388467&auto=1&height=66"
              className="rounded-2xl shadow-xl"
              allow="autoplay"
            />
          </div>
        </>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-30px) rotate(8deg); }
        }
        @keyframes cake-pop {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          70% { transform: scale(1.1) rotate(5deg); }
          100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        @keyframes flame {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
          50% { transform: translateX(-50%) scale(1.2) translateY(-2px); opacity: 1; }
        }
        .animate-float { animation: float infinite ease-in-out; }
        .animate-cake-pop { animation: cake-pop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-flame { animation: flame 0.6s infinite alternate; }
      `}</style>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><App /></React.StrictMode>);
