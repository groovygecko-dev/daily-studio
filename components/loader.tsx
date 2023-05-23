import React from 'react';

import { Header } from '@/components/header';
import { Icons } from '@/components/icons';

export function Loader({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <div className="flex h-full w-full flex-1 flex-col">
      {showHeader && <Header />}
      <div className="flex h-full w-full flex-1 items-center justify-center bg-muted text-muted-foreground">
        <Icons.spinner className="h-8 w-8 animate-spin" />
      </div>
    </div>
  );
}
