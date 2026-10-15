'use client'

import * as React from 'react'
import * as motion from 'motion/react-client'
import { Bell, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string
  title: string
  description?: string
  actions?: React.ReactNode
}) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="flex h-14 items-center gap-2 px-4 lg:px-6">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-1 h-5" />
        <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </span>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-4 pb-5 lg:flex-row lg:items-end lg:justify-between lg:px-6">
        <div className="flex flex-col gap-1.5">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="text-2xl leading-tight font-semibold tracking-tight text-balance lg:text-3xl"
          >
            {title}
          </motion.h1>
          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.06, ease: 'easeOut' }}
              className="max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground"
            >
              {description}
            </motion.p>
          ) : null}
        </div>
        {actions ? (
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {actions}
          </div>
        ) : null}
      </div>
    </header>
  )
}

export function PageBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pb-16 lg:p-6">
      {children}
    </div>
  )
}
