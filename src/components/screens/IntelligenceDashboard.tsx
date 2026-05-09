import React from 'react';
import { 
  ChevronRight, 
  MoreHorizontal, 
  Cpu, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';
import { SurfaceCard, IconButton, Badge } from '@/src/components/ui';
import { motion } from 'motion/react';

export const IntelligenceDashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="px-5 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center mt-2">
        <IconButton icon={ChevronRight} className="w-9 h-9 rotate-180" />
        <h2 className="text-white text-sm font-medium tracking-tight">System Telemetry</h2>
        <IconButton icon={MoreHorizontal} className="w-9 h-9" />
      </div>

      {/* Telemetry Tabs */}
      <div className="flex bg-[#0C0C0E] p-1 rounded-xl border border-white/[0.08]">
        {['Capacity', 'Velocity', 'Agents'].map((tab, i) => (
          <button 
            key={tab}
            className={`flex-1 py-1.5 text-[11px] font-medium tracking-wide rounded-lg transition-all duration-200
              ${i === 0 ? 'bg-white text-black shadow-sm' : 'text-[#A1A1AA] hover:text-white'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Team Capacity Chart */}
      <SurfaceCard className="pt-6 pb-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-white text-[13px] font-medium">Team Burnout Risk</h3>
            <p className="text-[#71717A] text-[11px] mt-0.5 font-mono">92% AVG UTILIZATION</p>
          </div>
          <Badge variant="danger">Critical</Badge>
        </div>

        {/* Engineered Bar Chart */}
        <div className="flex justify-between items-end h-32 mb-2 gap-2 px-1">
          {[60, 75, 40, 110, 85, 95].map((height, i) => {
            const isOverload = height > 100;
            return (
              <div key={i} className="flex flex-col items-center flex-1 gap-2.5 group">
                <div className="w-full h-full relative flex items-end">
                  {/* Threshold line */}
                  <div className="absolute top-[20%] left-0 w-full h-[1px] bg-red-500/10 border-t border-dashed border-red-500/30 z-0" />
                  
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.min(height, 120)}%` }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: "backOut" }}
                    className={`w-full rounded-sm transition-all duration-300 relative z-10
                      ${isOverload ? 'bg-red-500/80 shadow-[0_0_12px_rgba(239,68,68,0.3)]' : 'bg-white/[0.15] group-hover:bg-white/[0.25]'}`}
                  />
                </div>
                <span className={`text-[9px] font-mono uppercase tracking-wider ${isOverload ? 'font-bold text-red-400' : 'text-[#71717A]'}`}>
                  {['Eng', 'Des', 'Ops', 'QA', 'Mkt', 'Sales'][i]}
                </span>
              </div>
            )
          })}
        </div>
      </SurfaceCard>

      {/* Operational Insights */}
      <div>
        <h3 className="text-[#A1A1AA] text-[11px] font-semibold tracking-widest mb-4 flex items-center gap-2 uppercase">
          <Cpu size={12} className="text-[#71717A]" /> Predictive Warnings
        </h3>
        
        <div className="flex flex-col gap-3">
           <SurfaceCard className="flex items-start gap-4 border-red-500/20 bg-red-500/[0.02]">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 text-red-400">
                <AlertCircle size={14} />
              </div>
              <div className="flex-1">
                <h4 className="text-white text-[13px] font-medium mb-1">QA Bottleneck Detected</h4>
                <p className="text-[#A1A1AA] text-[11px] leading-relaxed mb-3">QA team is at 110% capacity. Next sprint delivery at risk of 2-day delay.</p>
                <button className="text-white text-[10px] font-medium bg-white/[0.08] hover:bg-white/[0.12] px-3 py-1.5 rounded-md transition-colors border border-white/[0.05] active:scale-95">
                  Review Workload
                </button>
              </div>
            </SurfaceCard>

            <SurfaceCard className="flex items-start gap-4 border-emerald-500/20 bg-emerald-500/[0.02]">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 text-emerald-400">
                <CheckCircle2 size={14} />
              </div>
              <div className="flex-1">
                <h4 className="text-white text-[13px] font-medium mb-1">Client Health Optimal</h4>
                <p className="text-[#A1A1AA] text-[11px] leading-relaxed">NPS score improved. Project Nexus is tracking 4% ahead of schedule.</p>
              </div>
            </SurfaceCard>
        </div>
      </div>
    </motion.div>
  );
};
