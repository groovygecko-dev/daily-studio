import React from 'react';
import { DailyAudio } from '@daily-co/daily-react';

import { Audio } from '@/components/call/tray/audio';
import { Layout } from '@/components/call/tray/layout';
import { Leave } from '@/components/call/tray/leave';
import { Rmp } from '@/components/call/tray/rmp';
import { Screenshare } from '@/components/call/tray/screenshare';
import { Settings } from '@/components/call/tray/settings';
import { Video } from '@/components/call/tray/video';
import { BroadcastModal } from '@/components/room/modals/broadcast';
import { RTMPModal } from '@/components/room/modals/rtmp';
import { Sidebar } from '@/components/room/sidebar';
import { VcsPreview } from '@/components/vcs/vcsPreview';

export function Room() {
  return (
    <div className="flex h-full w-full flex-1 bg-muted">
      <div className="flex h-full w-full flex-col">
        <div className="flex-1">
          <VcsPreview />
        </div>
        <div className="flex h-20 w-full items-center justify-between border-t bg-background p-4">
          <div className="flex items-center">
            <Video />
            <Audio />
            <Screenshare />
            <Rmp />
          </div>
          <Layout />
          <div className="flex items-center">
            <Settings />
            <Leave />
          </div>
        </div>
      </div>
      <Sidebar />
      <RTMPModal />
      <BroadcastModal />
      <DailyAudio />
    </div>
  );
}
