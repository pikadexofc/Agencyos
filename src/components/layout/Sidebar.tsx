import React from 'react';
import { motion } from 'motion/react';
import { 
  Command, 
  LayoutDashboard, 
  Inbox, 
  Activity, 
  Users,
  Settings,
  Search,
  Sparkles
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { IconButton } from '@/src/components/ui';

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-20 md:w-64 h-full border-r border-white/[0.03] bg-black flex flex-col pt-6 pb-6", className)}>
      {/* Brand & Command */}
      <div className="px-4 md:px-6 mb-8 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.05] flex items-center justify-center shrink-0">
            <Command size={18} className="text-zinc-200" />
          </div>
          <span className="font-medium text-sm tracking-tight text-zinc-100 hidden md:block">AgencyOS</span>
        </div>
        
        {/* Command Trigger */}
        <button className="hidden md:flex items-center justify-between w-full h-9 bg-zinc-900/50 hover:bg-zinc-800/80 transition-colors border border-white/[0.03] rounded-lg px-3 text-zinc-500 text-[11px] group">
          <div className="flex items-center gap-2">
            <Search size={14} className="group-hover:text-zinc-300 transition-colors" />
            <span className="font-mono uppercase tracking-widest group-hover:text-zinc-300 transition-colors">Command</span>
          </div>
          <div className="flex gap-1 font-mono text-[9px] bg-black/50 px-1.5 py-0.5 rounded text-zinc-600">
            <span>⌘</span>
            <span>K</span>
          </div>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col gap-1 px-3 md:px-4">
        <NavItem icon={LayoutDashboard} label="Execution Radar" isActive />
        <NavItem icon={Inbox} label="Communications" badge="3" />
        <NavItem icon={Activity} label="System Telemetry" />
        <NavItem icon={Users} label="Operator Health" />
        
        <div className="my-4 h-px w-full bg-white/[0.02]" />
        
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 px-3 py-2 hidden md:block">Active Agents</div>
        <NavItem icon={Sparkles} label="DataOS" isActiveAI />
        <NavItem icon={Sparkles} label="CommOS" />
      </div>

      {/* User / Settings Footer */}
      <div className="px-4 md:px-6 mt-auto">
        <button className="w-full flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/[0.05] overflow-hidden shrink-0">
             <img src="https://i.pravatar.cc/150?img=33" alt="Admin" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="hidden md:flex flex-col items-start leading-none gap-1">
            <span className="text-[13px] font-medium text-zinc-200">System Admin</span>
            <span className="text-[10px] font-mono text-emerald-500 tracking-wider">SEC: Lvl 5</span>
          </div>
        </button>
      </div>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, isActive, badge, isActiveAI }: any) => (
  <button className={cn(
    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
    isActive ? "bg-white/[0.04] text-zinc-100" : "text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.02]"
  )}>
    <div className={cn(
      "shrink-0",
      isActiveAI ? "text-indigo-400" : (isActive ? "text-zinc-200" : "text-zinc-500 group-hover:text-zinc-300")
    )}>
      <Icon size={18} strokeWidth={1.5} />
    </div>
    <span className="text-[13px] font-medium tracking-tight hidden md:block">{label}</span>
    {badge && (
      <span className="ml-auto hidden md:flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-mono text-zinc-300 px-1.5">
        {badge}
      </span>
    )}
  </button>
);
