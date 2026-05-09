import React from 'react';
import { 
  LayoutDashboard, 
  Inbox, 
  Command, 
  Activity, 
  Users 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavItem = ({ icon: Icon, isActive, onClick }: { icon: any, isActive: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={cn(
      "p-2.5 rounded-xl transition-all duration-200",
      isActive ? 'text-white bg-white/[0.08]' : 'text-[#71717A] hover:text-white hover:bg-white/[0.04]'
    )}
  >
    <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />
  </button>
);

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => (
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[91%] h-[68px] bg-[#0A0A0C]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl flex items-center justify-between px-4 z-50 shadow-2xl">
    <NavItem 
      icon={LayoutDashboard} 
      isActive={activeTab === 'home'} 
      onClick={() => onTabChange('home')} 
    />
    <NavItem 
      icon={Inbox} 
      isActive={activeTab === 'inbox'} 
      onClick={() => onTabChange('inbox')} 
    />
    
    <div className="relative -top-4">
      <button className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-black shadow-[0_4px_24px_rgba(255,255,255,0.15)] border-4 border-[#050505] hover:scale-105 transition-transform active:scale-95">
        <Command size={22} strokeWidth={2.5} />
      </button>
    </div>
    
    <NavItem 
      icon={Activity} 
      isActive={activeTab === 'telemetry'} 
      onClick={() => onTabChange('telemetry')} 
    />
    <NavItem 
      icon={Users} 
      isActive={activeTab === 'team'} 
      onClick={() => onTabChange('team')} 
    />
  </div>
);
