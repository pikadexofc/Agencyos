import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  BrainCircuit, 
  Network, 
  Sparkles, 
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Cpu,
  Target,
  Clock,
  MoreHorizontal
} from 'lucide-react';
import { SurfaceCard, Badge } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

// --- Sub components ---

const MetricHero = ({ value, label, trend, subtitle, isWarning }: any) => (
  <div className="flex flex-col gap-2">
    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
      {isWarning && <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />}
      {!isWarning && <div className="w-1 px-1 h-1 bg-white/20" />}
      {label}
    </div>
    <div className="flex items-baseline gap-3">
      <span className="text-5xl lg:text-6xl tracking-tighter font-semibold text-zinc-100">
        {value}
      </span>
      <span className={cn("text-xs font-mono flex items-center gap-1 tracking-wider", trend > 0 ? "text-emerald-400" : (trend < 0 ? "text-red-400" : "text-zinc-500"))}>
        {trend > 0 ? '+' : ''}{trend}% 
      </span>
    </div>
    <div className="text-xs text-zinc-600 mt-1 h-4">{subtitle}</div>
  </div>
);

// --- Store ---
const initialQueue = [
  { id: '1', status: 'blocked', title: 'Security Audit Clearance', meta: 'AWS SecOps • Missing Root MSA', time: '2h delay', impact: 'High', agentActive: false },
  { id: '2', status: 'agent', title: 'Q3 Financial Parsing', meta: 'Stripe API • Revenue Pipeline', time: 'Active', impact: 'Critical', agentActive: true },
  { id: '3', status: 'human', title: 'Nexus UI Code Review', meta: 'Frontend • 4 Comments Active', time: 'Due 16:00', impact: 'Medium', agentActive: false },
  { id: '4', status: 'human', title: 'Client Briefing Prep', meta: 'Acme Corp • Strategy Deck', time: 'Due 18:00', impact: 'Medium', agentActive: false },
  { id: '5', status: 'agent', title: 'Lead Scoring Processing', meta: 'Hubspot Data • 420 updates', time: 'Queue', impact: 'Low', agentActive: true },
];

export const MainDashboard = () => {
  const [queue, setQueue] = useState(initialQueue);

  const completeItem = (id: string) => {
    setQueue(q => q.filter(item => item.id !== id));
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
      
      {/* Dynamic Environment Lighting */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-indigo-500/[0.03] blur-[150px] rounded-[100%] pointer-events-none" />
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-emerald-500/[0.02] blur-[120px] rounded-[100%] pointer-events-none" />

      {/* Header bar */}
      <header className="h-16 flex items-center justify-between px-8 border-b border-white/[0.02] shrink-0 z-10">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h1 className="text-[13px] font-medium tracking-tight text-zinc-200 uppercase">Operational Radar</h1>
        </div>
        <div className="flex items-center gap-6 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3 bg-zinc-800" />
            CYCLE 42.A
          </div>
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-zinc-600" />
            140ms Latency
          </div>
        </div>
      </header>

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex relative z-10">
        <div className="flex-1 flex flex-col xl:flex-row min-h-full">
          
          {/* LEFT/MAIN STAGE */}
          <div className="flex-1 p-8 flex flex-col gap-12 border-r border-white/[0.02]">
            
            {/* Massive Hero Telemetry */}
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12 shrink-0">
              <MetricHero 
                label="System Throughput" 
                value="94.2" 
                trend={12} 
                subtitle="Points per week. Velocity nominal." 
              />
              <MetricHero 
                label="Operator Burnout Risk" 
                value="14%" 
                trend={-2} 
                subtitle="Design team load reducing." 
                isWarning={false} 
              />
              <MetricHero 
                label="Unblocked Value" 
                value="$42K" 
                trend={8} 
                subtitle="Pending delivery this cycle." 
              />
            </div>

            {/* Execution Queue - Table Format */}
            <div className="flex-1 flex flex-col min-h-[400px]">
              <div className="flex items-center justify-between mb-4 border-b border-white/[0.03] pb-2">
                <h2 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Active Execution Stream</h2>
                <button className="text-[10px] text-zinc-600 hover:text-zinc-300 flex items-center gap-2 uppercase tracking-widest transition-colors font-mono">
                  View All <ArrowRight size={10} />
                </button>
              </div>

              <div className="flex flex-col">
                <AnimatePresence mode="popLayout">
                  {queue.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                      className={cn(
                        "group relative flex items-center gap-6 py-4 border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors px-2 -mx-2 rounded-xl",
                      )}
                    >
                      {/* Interactive Hover Area & Icon */}
                      <button 
                        onClick={() => completeItem(item.id)}
                        className="w-10 h-10 shrink-0 rounded-full border border-white/[0.05] bg-black group-hover:border-white/20 group-hover:bg-zinc-900 transition-all flex items-center justify-center relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.status === 'blocked' && <AlertTriangle size={14} className="text-red-500" />}
                        {item.status === 'agent' && <Sparkles size={14} className="text-indigo-400" />}
                        {item.status === 'human' && <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-emerald-400 transition-colors" />}
                      </button>

                      {/* Main Data */}
                      <div className="flex-1 min-w-0 flex items-center">
                        <div className="w-1/3 pr-4 truncate">
                          <h3 className={cn(
                            "text-sm font-medium tracking-tight mb-1 truncate",
                            item.status === 'blocked' ? "text-red-100" : "text-zinc-200"
                          )}>{item.title}</h3>
                          <div className="text-[11px] text-zinc-600 truncate">{item.meta}</div>
                        </div>
                        
                        {/* Meta columns */}
                        <div className="flex-1 flex items-center gap-8 justify-end text-[11px] font-mono text-zinc-500">
                          {item.agentActive && (
                            <Badge variant="ai" className="bg-transparent border-0 px-0">
                              <BrainCircuit size={10} className="mr-1" /> Copilot
                            </Badge>
                          )}
                          <div className={cn("w-24 whitespace-nowrap text-right", item.status === 'blocked' && "text-red-400")}>
                            {item.time}
                          </div>
                        </div>
                      </div>

                      {/* Line marker for blockers */}
                      {item.status === 'blocked' && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-1/2 bg-red-500/50 rounded-r-full" />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {queue.length === 0 && (
                  <div className="py-20 text-center text-zinc-600 text-sm font-mono uppercase tracking-widest">
                    No active processes in stream.
                  </div>
                )}
              </div>
            </div>

            {/* Simulated Technical Chart Area */}
            <div className="h-48 border border-white/[0.03] rounded-2xl relative overflow-hidden bg-zinc-950/20 mt-auto shrink-0 flex flex-col justify-end p-6">
               <div className="absolute top-6 left-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">System Frequency Output</div>
               {/* Decorative grid */}
               <div className="absolute inset-0" style={{ backgroundSize: '10px 10px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)' }} />
               {/* Synthetic wave using divs */}
               <div className="relative w-full h-1/2 flex items-end gap-1 opacity-50 px-2 lg:px-12">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const h = 20 + Math.sin(i * 0.4) * 15 + Math.random() * 20;
                    return (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.02, ease: "easeOut" }}
                        className={cn("flex-1 min-w-[2px] rounded-t-sm", i > 30 ? "bg-indigo-500/80" : "bg-white/20")}
                      />
                    );
                  })}
               </div>
            </div>

          </div>

          {/* RIGHT RAIL - AI Orchestration & Intelligence */}
          <aside className="w-full xl:w-[400px] bg-zinc-950/40 border-l border-white/[0.02] flex flex-col pt-8 pb-8 shrink-0">
            
            <div className="px-8 pb-6 border-b border-white/[0.02]">
              <div className="flex items-center gap-3 text-indigo-400 mb-2">
                <BrainCircuit size={16} />
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Orchestration Layer</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Autonomous agents are currently managing 2 active streams. Monitoring for anomaly resolution.
              </p>
            </div>

            {/* Live Feed */}
            <div className="flex-1 overflow-y-auto px-8 pt-6 flex flex-col gap-6">
              
              <div className="relative">
                <div className="absolute left-[7px] top-4 bottom-[-24px] w-px bg-white/[0.05]" />
                
                <div className="flex gap-4 relative">
                  <div className="w-4 h-4 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center shrink-0 mt-0.5 z-10">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-[13px] text-zinc-200 font-medium tracking-tight mb-1">Financial Data Stream Parsing</h4>
                    <p className="text-[11px] text-zinc-500 leading-relaxed max-w-[240px]">Agent DataOS is extracting Q3 revenue markers via Stripe API.</p>
                    <div className="mt-3 bg-black border border-white/[0.04] rounded-lg p-3 inline-block">
                       <span className="text-[10px] font-mono text-zinc-500 block mb-1">Confidence Score</span>
                       <div className="flex items-center gap-2">
                         <span className="text-indigo-400 text-sm font-mono">98.4%</span>
                         <div className="w-16 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                           <div className="w-[98%] h-full bg-indigo-400" />
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex gap-4 relative">
                  <div className="w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5 z-10">
                    <AlertTriangle size={8} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-[13px] text-red-200 font-medium tracking-tight mb-1">Capacity Anomaly Detected</h4>
                    <p className="text-[11px] text-zinc-500 leading-relaxed max-w-[240px]">Design team velocity dropped 14%. Projected miss on Nexus delivery.</p>
                    <button className="mt-3 flex items-center gap-2 text-[10px] font-mono text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-3 py-1.5 rounded-md border border-white/[0.05] transition-all">
                       <BrainCircuit size={10} /> Auto-Reallocate Resources
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
