'use client';

import { LargeSidebar } from '@/components/large-sidebar';
import { Button } from '@/components/ui/button';
import { playlists } from '@/data/playlist';
import { BellIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function DashboardLayout({ children }: any) {
  const pathname = usePathname();

  console.log('pathname:', pathname.split('/'));

  return (
    <div className="flex h-full">
      <LargeSidebar playlists={playlists} className="h-screen flex flex-col justify-between min-w-fit" />
      <div className="flex flex-col w-full">
        <div className="h-12 w-full border-b text-sm flex items-center justify-between px-7">
          <h2 className="text-sm tracking-tight capitalize">sporty {pathname.split('/').join(' / ')}</h2>
          <Button size="sm" variant="ghost">
            <BellIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="bg-gray-500 w-full h-full">{children}</div>
      </div>
    </div>
  );
}
