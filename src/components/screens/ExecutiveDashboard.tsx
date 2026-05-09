import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Sparkles, 
  AlertCircle, 
  TrendingUp, 
  BrainCircuit, 
  Target,
  CheckCircle2
} from 'lucide-react';
import { SurfaceCard, IconButton, Badge } from '@/src/components/ui';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface Task {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  icon: any;
  iconColor: string;
  badges: Array<{ text: string; variant?: 'default' | 'danger' | 'ai' | 'success' }>;
  isBlocker?: boolean;
}

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Security Audit Blocked',
    subtitle: 'Acme Corp • Pending AWS credentials',
    time: '2h ago',
    icon: AlertCircle,
    iconColor: 'text-red-400',
    isBlocker: true,
    badges: [
      { text: 'High Priority', variant: 'danger' },
      { text: 'Wait: Client' }
    ]
  },
  {
    id: '2',
    title: 'Generate Q3 Reports',
    subtitle: 'Internal • Parsing Stripe Data',
    time: 'Active',
    icon: Sparkles,
    iconColor: 'text-indigo-400',
    badges: [
      { text: 'Agent: DataOS', variant: 'ai' },
      { text: '85% Complete' }
    ]
  },
  {
    id: '3',
    title: 'Review Design System',
    subtitle: 'Nexus App • 4 pending comments',
    time: 'Due Today',
    icon: Target,
    iconColor: 'text-[#71717A]',
    badges: [
      { text: '@sarah' },
      { text: 'Design' }
    ]
  }
];

export const ExecutiveDashboard = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [completingId, setCompletingId] = useState<string | null>(null);

  const completeTask = (id: string) => {
    // Simulated Haptic Feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
    
    setCompletingId(id);
    
    // Wait for animation before removing
    setTimeout(() => {
      setTasks(prev => prev.filter(t => t.id !== id));
      setCompletingId(null);
    }, 400);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="px-5 flex flex-col gap-6"
    >
      {/* Global Operational Header */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2A2A2E] to-[#18181B] p-[1px] border border-white/[0.1]">
              <img src="https://i.pravatar.cc/150?img=33" alt="Admin" className="w-full h-full rounded-full object-cover grayscale opacity-80" />
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#050505]" />
          </div>
          <div>
            <h1 className="text-white text-sm font-medium tracking-tight">AgencyOS</h1>
            <p className="text-[#71717A] text-[11px] font-mono mt-0.5">SYS.STATE: NOMINAL</p>
          </div>
        </div>
        <div className="flex gap-2">
          <IconButton icon={Search} className="w-9 h-9" />
          <IconButton icon={Bell} className="w-9 h-9 relative">
             <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-[#050505]" />
          </IconButton>
        </div>
      </div>

      {/* Operational Momentum */}
      <SurfaceCard className="relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500" />
        <p className="text-[#A1A1AA] text-xs font-medium tracking-wide mb-1 flex items-center justify-between">
          OPERATIONAL MOMENTUM
          <Badge variant="ai"><Sparkles size={10} /> Copilot Active</Badge>
        </p>
        <div className="flex items-baseline gap-2 mb-3">
          <h2 className="text-white text-4xl font-semibold tracking-tighter">94.2</h2>
          <span className="text-[#71717A] text-sm">pt/wk</span>
        </div>
        
        <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden mb-3">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '78%' }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-full bg-white rounded-full" 
          />
        </div>
        
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="text-emerald-400 flex items-center font-medium">
            <TrendingUp size={12} className="mr-1"/> +12%
          </span>
          <span className="text-[#71717A]">vs last cycle. Bottlenecks cleared.</span>
        </div>
      </SurfaceCard>

      {/* AI Action Layer */}
      <div className="bg-indigo-500/[0.03] border border-indigo-500/20 rounded-xl p-3.5 flex items-start gap-3">
         <div className="mt-0.5 text-indigo-400"><BrainCircuit size={16} /></div>
         <div>
           <h4 className="text-indigo-100 text-[13px] font-medium mb-1">AI Orchestration Active</h4>
           <p className="text-indigo-200/60 text-[11px] leading-relaxed">Automatically reallocated 2 frontend engineers to unblock 'Stripe Integration'. Client comms drafted.</p>
         </div>
      </div>

      {/* Execution Queue */}
      <div>
        <div className="flex justify-between items-center mb-3 px-1">
          <h3 className="text-white text-[13px] font-medium tracking-wide uppercase">EXECUTION QUEUE</h3>
          <button 
            className="text-[#A1A1AA] text-xs hover:text-white transition-colors"
            onClick={() => setTasks(initialTasks)}
          >
            Reset
          </button>
        </div>
        
        <div className="flex flex-col gap-2.5">
          <AnimatePresence mode="popLayout">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: completingId === task.id ? 0.5 : 1, 
                  x: 0,
                  scale: completingId === task.id ? 0.95 : 1
                }}
                exit={{ 
                  opacity: 0, 
                  x: 20,
                  transition: { duration: 0.2 } 
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <SurfaceCard 
                  noPadding 
                  className={cn(
                    "transition-colors duration-300 relative group",
                    task.isBlocker ? "border-red-500/20 bg-red-500/[0.02]" : "hover:border-white/20",
                    completingId === task.id && "bg-emerald-500/10 border-emerald-500/30"
                  )}
                >
                  <div className="p-3.5 flex items-start gap-4">
                    <button 
                      onClick={() => completeTask(task.id)}
                      className="mt-1 shrink-0 group-hover:scale-110 transition-transform active:scale-95 outline-none"
                    >
                      <AnimatePresence mode="wait">
                        {completingId === task.id ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-emerald-400"
                          >
                            <CheckCircle2 size={16} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="icon"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={task.iconColor}
                          >
                            <task.icon size={16} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={cn(
                          "text-white text-[13px] font-medium truncate transition-all duration-300",
                          completingId === task.id && "text-emerald-400 line-through opacity-50"
                        )}>
                          {task.title}
                        </h4>
                        <span className="text-[#71717A] text-[10px] font-mono shrink-0">{task.time}</span>
                      </div>
                      <p className="text-[#A1A1AA] text-[11px] mb-2.5 truncate">{task.subtitle}</p>
                      <div className="flex gap-2">
                         {task.badges.map((badge, idx) => (
                           <Badge key={idx} variant={badge.variant}>{badge.text}</Badge>
                         ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Completion Progress Overlay (Visual ONLY) */}
                  <AnimatePresence>
                    {completingId === task.id && (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-400 origin-left"
                      />
                    )}
                  </AnimatePresence>
                </SurfaceCard>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {tasks.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center px-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3 border border-emerald-500/20">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="text-white text-sm font-medium mb-1">Queue Optimized</h4>
              <p className="text-[#71717A] text-[11px]">All delivery critical items have been cleared for this cycle.</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
