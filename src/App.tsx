/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from '@/src/components/layout/Sidebar';
import { MainDashboard } from '@/src/components/screens/Dashboard';
import { IntelligenceDashboard } from '@/src/components/screens/IntelligenceDashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('radar');

  return (
    <div className="h-screen w-screen bg-[#020202] text-zinc-100 font-sans selection:bg-white/20 flex overflow-hidden fixed inset-0">
      
      {/* Deep Architectural Background - Noisy grids replaced with sheer depth */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10 opacity-60" />
      </div>

      {/* Main Layout Structure */}
      <Sidebar className="relative z-20" activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 relative z-10 flex h-full overflow-hidden bg-[#050505]">
         {activeTab === 'telemetry' ? <IntelligenceDashboard /> : <MainDashboard />}
      </main>
    </div>
  );
}

