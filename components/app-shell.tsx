import type * as React from 'react'

import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0">
        <main className="flex min-h-svh flex-col">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
