import React from 'react';

export const MobileFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[380px] h-[820px] rounded-[3rem] border-[8px] border-[#18181B] bg-[#050505] shadow-2xl overflow-hidden shrink-0 ring-1 ring-white/[0.05]">
    {/* Dynamic Island Simulation */}
    <div className="absolute top-0 w-full h-8 flex justify-center z-50 pointer-events-none">
       <div className="w-1/3 h-6 bg-black rounded-b-3xl border-x border-b border-white/[0.05]" />
    </div>
    
    {/* Main Content Area */}
    <div className="w-full h-full relative z-10 pt-12 pb-24 overflow-y-auto no-scrollbar scroll-smooth">
      {children}
    </div>
  </div>
);
