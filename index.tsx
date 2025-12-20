
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// 初始化 AI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const BirthdayCake: React.FC = () => (
  <div className="relative w-40 h-40 mx-auto mb-8 animate-cake-pop">
    {/* 蜡烛 */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <div className="relative">
        <div className="w-1 h-8 bg-yellow-200 mx-auto rounded-full"></div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-5 bg-orange-500 rounded-full animate-flame blur-[1px]"></div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-pink-600 font-bold text-xl drop-shadow-md">19</div>
      </div>
    </div>
    {/* 蛋糕主体 */}
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
    {/* 托盘 */}
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-2 bg-gray-200 rounded-full shadow-sm"></div>
  </div>
);

const App: React.FC = () => {
  const [wish, setWish] = useState<string>("正在为你准备十九岁的惊喜...");
  const [loading, setLoading] = useState(false);
  const [showCake, setShowCake] = useState(false);

  // 生成 AI 祝福
  const fetchWish = async () => {
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "为我的好朋友‘向闫’写一段19岁生日祝福。要求：语气温柔动人，包含‘十九岁’这个关键词，50字左右。",
      });
      setWish(response.text || "祝你19岁生日快乐，愿你眼里有光，心中有爱。");
    } catch (e) {
      setWish("祝向闫19岁生日快乐！愿你岁岁平安，万事顺遂，永远做最快乐的女孩。");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWish();
    // 延迟显示蛋糕，制造一种“跳出来”的感觉
    setTimeout(() => setShowCake(true), 500);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* 动态背景装饰 */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute animate-float text-2xl" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + Math.random() * 3}s`
          }}>
            {['🎂', '🎈', '💖', '✨', '🌸', '🎁'][i % 6]}
          </div>
        ))}
      </div>

      {/* 生日蛋糕动画 */}
      {showCake && <BirthdayCake />}

      {/* 主内容卡片 */}
      <div className={`z-10 w-full max-w-md bg-white/80 backdrop-blur-lg border border-white p-8 rounded-[2.5rem] shadow-2xl text-center space-y-6 transition-all duration-1000 transform ${showCake ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <header>
          <div className="inline-block bg-pink-100 text-pink-500 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
            HAPPY 19TH BIRTHDAY 🎂
          </div>
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">向闫，生日快乐</h1>
        </header>

        <div className="py-6 px-4 bg-white/50 rounded-3xl border border-pink-50 relative min-h-[120px] flex items-center justify-center shadow-inner">
          {loading ? (
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          ) : (
            <p className="text-gray-700 italic leading-relaxed text-lg">“{wish}”</p>
          )}
        </div>

        <button 
          onClick={fetchWish}
          className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-pink-200 hover:-translate-y-1 transition-all active:scale-95"
        >
          再收一份祝福 ✨
        </button>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400">愿你的十九岁，眼里有星辰大海</p>
        </div>
      </div>

      {/* 音乐播放器组件 */}
      <div className="mt-10 z-10 transition-all hover:scale-105">
        <iframe 
          frameBorder="no" 
          width={330} 
          height={86} 
          src="//music.163.com/outchain/player?type=2&id=2021388467&auto=1&height=66"
          className="rounded-2xl shadow-xl"
        />
      </div>

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
        .animate-float {
          animation: float infinite ease-in-out;
        }
        .animate-cake-pop {
          animation: cake-pop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-flame {
          animation: flame 0.6s infinite alternate;
        }
      `}</style>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
