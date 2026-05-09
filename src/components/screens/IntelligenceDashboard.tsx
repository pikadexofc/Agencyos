import React, { useState } from 'react';
import { 
  ChevronRight, 
  MoreHorizontal, 
  Cpu, 
  AlertCircle, 
  CheckCircle2,
  Users
} from 'lucide-react';
import { SurfaceCard, IconButton, Badge } from '@/src/components/ui';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const teamData = [
  { team: 'Eng', full: 'Engineering', height: 60, status: 'Stable', users: 24, cause: 'Nominal operational flow. Sprint cadence maintained.' },
  { team: 'Des', full: 'Design', height: 75, status: 'Elevated', users: 8, cause: 'Upcoming brand refresh causing slight capacity constraint.' },
  { team: 'Ops', full: 'Operations', height: 40, status: 'Optimal', users: 12, cause: 'Automation workflows have cleared recent bottlenecks.' },
  { team: 'QA', full: 'Quality Assurance', height: 110, status: 'Critical', users: 15, cause: 'Release bottleneck. Severe regression test backlog.' },
  { team: 'Mkt', full: 'Marketing', height: 85, status: 'Warning', users: 10, cause: 'Campaign launch timeline crunched. Weekend work flagged.' },
  { team: 'Sales', full: 'Sales', height: 95, status: 'Critical', users: 18, cause: 'End-of-quarter quota panic. Lead response latency high.' },
];

export const IntelligenceDashboard = () => {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      className="flex-1 flex flex-col w-full h-full p-8 overflow-y-auto no-scrollbar relative"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-center mb-8 shrink-0 relative z-10 border-b border-white/[0.02] pb-6">
        <div className="flex items-center gap-4">
          <IconButton icon={ChevronRight} className="rotate-180 bg-zinc-900/50 hover:bg-zinc-800/80 border-white/[0.03]" />
          <div>
            <h2 className="text-zinc-100 text-lg font-medium tracking-tight">System Telemetry</h2>
            <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase mt-1">Real-time Operational Metrics</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Telemetry Tabs */}
          <div className="flex bg-zinc-950/50 p-1 rounded-xl border border-white/[0.03] backdrop-blur-md">
            {['Capacity', 'Velocity', 'Agents'].map((tab, i) => (
              <button 
                key={tab}
                className={`py-1.5 px-4 text-[11px] font-mono uppercase tracking-widest rounded-lg transition-all duration-300
                  ${i === 0 ? 'bg-zinc-800/60 text-zinc-100 shadow-[0_0_15px_rgba(255,255,255,0.03)]' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <IconButton icon={MoreHorizontal} className="bg-zinc-900/50 hover:bg-zinc-800/80 border-white/[0.03]" />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 relative z-10">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Team Capacity Chart - ENHANCED */}
          <SurfaceCard className="pt-6 pb-6 relative z-20">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="text-zinc-100 text-sm font-medium tracking-tight">Team Burnout Risk</h3>
                <p className="text-zinc-500 text-[11px] mt-1 font-mono tracking-widest uppercase">92% System Avg Utilization</p>
              </div>
              <Badge variant="danger" className="animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.2)] border-red-500/20">Critical Alert</Badge>
            </div>

            {/* Interactive Engineered Bar Chart */}
            <div className="flex justify-between items-end h-[240px] mb-2 gap-4 px-2 relative" onMouseLeave={() => setHoveredTeam(null)}>
              
              {/* Global Threshold line */}
              <div className="absolute top-[20%] left-0 w-full flex items-center gap-3 z-0 pointer-events-none">
                <span className="text-[9px] font-mono text-red-500/50 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">100% Load</span>
                <div className="flex-1 h-px bg-red-500/20 border-t border-dashed border-red-500/40" />
              </div>

              {teamData.map((data, i) => {
                const isOverload = data.height > 100;
                const isHovered = hoveredTeam === data.team;
                const isDimmed = hoveredTeam !== null && !isHovered;
                
                return (
                  <div 
                    key={data.team} 
                    className="flex flex-col items-center flex-1 h-full gap-4 relative group"
                    onMouseEnter={() => setHoveredTeam(data.team)}
                  >
                    {/* Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 bg-zinc-950/95 backdrop-blur-3xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.5)] p-4 rounded-xl z-50 pointer-events-none"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{data.full}</span>
                            </div>
                            <span className={cn("text-[10px] font-mono tracking-wider", isOverload ? "text-red-400" : "text-emerald-400")}>
                              {data.height}% LOAD
                            </span>
                          </div>
                          <div className="text-zinc-200 text-xs font-medium tracking-tight mb-2 leading-relaxed">
                            {data.cause}
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-white/[0.03]">
                            <div className="flex items-center gap-1.5 text-zinc-500">
                              <Users size={12} />
                              <span className="text-[10px] font-mono">{data.users} OPERATORS</span>
                            </div>
                            <Badge variant={isOverload ? 'danger' : 'default'} className="scale-90 origin-right border-0">{data.status}</Badge>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bar */}
                    <div className="w-full h-full relative flex items-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.min(data.height, 120)}%` }}
                        transition={{ delay: i * 0.05, duration: 1, type: "spring", bounce: 0.2 }}
                        className={cn(
                          "w-full rounded-md transition-all duration-300 relative z-10 cursor-crosshair",
                          isOverload 
                            ? "bg-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:bg-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]" 
                            : "bg-zinc-800 hover:bg-zinc-600 shadow-[0_0_10px_rgba(255,255,255,0.02)] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]",
                          isDimmed && "opacity-30 saturate-0 scale-[0.98]" // Contextual compression
                        )}
                      />
                    </div>
                    
                    {/* Label */}
                    <span 
                      className={cn(
                        "text-[10px] font-mono uppercase tracking-widest transition-colors duration-300",
                        isOverload ? "font-bold text-red-500/80" : "text-zinc-600",
                        isHovered && "text-zinc-200",
                        isDimmed && "opacity-40"
                      )}
                    >
                      {data.team}
                    </span>
                  </div>
                )
              })}
            </div>
          </SurfaceCard>
        </div>

        {/* Right Column (Insights) */}
        <div className="w-full xl:w-[420px] flex flex-col gap-6 shrink-0">
          <SurfaceCard className="bg-zinc-950/60 border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.03)] p-0 overflow-hidden">
            <div className="p-5 border-b border-white/[0.02] flex items-center gap-3">
              <Cpu size={14} className="text-indigo-400" /> 
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-indigo-100">Predictive Intelligence</span>
            </div>
            
            <div className="flex flex-col p-2">
               <div className="group p-4 rounded-xl hover:bg-white/[0.02] transition-colors flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-400/10 flex items-center justify-center shrink-0 border border-red-500/20 text-red-400 mt-0.5 group-hover:scale-110 group-hover:bg-red-400/20 transition-all duration-300">
                    <AlertCircle size={14} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-zinc-100 text-[13px] font-medium tracking-tight">QA Bottleneck Extreme</h4>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Act Now</span>
                    </div>
                    <p className="text-zinc-500 text-[11px] leading-relaxed mb-3 pr-2">QA team load exceeded safe limits. Critical regression testing is blocking Nexus app major release.</p>
                    <button className="text-zinc-300 text-[10px] font-mono uppercase tracking-widest bg-zinc-800/50 hover:bg-zinc-700/80 hover:text-white px-4 py-2 rounded-lg transition-all border border-white/[0.05] active:scale-95 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      Rebalance Queue
                    </button>
                  </div>
                </div>

                <div className="group p-4 rounded-xl hover:bg-white/[0.02] transition-colors flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center shrink-0 border border-emerald-500/20 text-emerald-400 mt-0.5 group-hover:scale-110 group-hover:bg-emerald-400/20 transition-all duration-300">
                    <CheckCircle2 size={14} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-zinc-100 text-[13px] font-medium tracking-tight mb-1">Ops Stability Restored</h4>
                    <p className="text-zinc-500 text-[11px] leading-relaxed pr-2">Recently deployed automated workflows have absorbed 40% of standard operations tickets.</p>
                  </div>
                </div>
            </div>
          </SurfaceCard>
        </div>

      </div>
    </motion.div>
  );
};
