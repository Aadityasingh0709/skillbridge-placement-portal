'use client'

import * as React from 'react'
import * as motion from 'motion/react-client'
import { Clock, KanbanSquare, Table2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import {
  applications,
  stageMeta,
  type Application,
  type ApplicationStage,
} from '@/lib/data'

const stageOrder: ApplicationStage[] = [
  'applied',
  'shortlisted',
  'interview',
  'offered',
  'rejected',
]

function ApplicationCard({
  application,
  index,
}: {
  application: Application
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: index * 0.04, ease: 'easeOut' }}
    >
      <Card size="sm" className="gap-2">
        <CardContent className="flex flex-col gap-2.5">
          <div className="flex items-start gap-2.5">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-secondary font-mono text-xs font-semibold text-secondary-foreground">
              {application.logo}
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium">
                {application.role}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {application.company}
              </span>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {application.nextStep}
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[0.7rem] text-muted-foreground">
            <Clock className="size-3" />
            {application.updated}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function KanbanView() {
  return (
    <ScrollArea className="w-full">
      <div className="flex min-w-max gap-4 pb-4">
        {stageOrder.map((stage) => {
          const items = applications.filter((item) => item.stage === stage)
          return (
            <section
              key={stage}
              className="flex w-72 shrink-0 flex-col gap-3 rounded-xl bg-muted/50 p-3"
              aria-label={stageMeta[stage].label}
            >
              <header className="flex items-center gap-2 px-1">
                <span
                  className={cn(
                    'size-2 rounded-full',
                    stageMeta[stage].tone,
                  )}
                  aria-hidden="true"
                />
                <h3 className="text-sm font-semibold">
                  {stageMeta[stage].label}
                </h3>
                <Badge variant="outline" className="ml-auto font-mono">
                  {items.length}
                </Badge>
              </header>
              <div className="flex flex-col gap-2.5">
                {items.length === 0 ? (
                  <p className="rounded-lg border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
                    Nothing here yet
                  </p>
                ) : (
                  items.map((item, index) => (
                    <ApplicationCard
                      key={item.id}
                      application={item}
                      index={index}
                    />
                  ))
                )}
              </div>
            </section>
          )
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

function TableView() {
  return (
    <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead className="hidden md:table-cell">Applied</TableHead>
            <TableHead className="hidden lg:table-cell">Next step</TableHead>
            <TableHead className="text-right">Last update</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.role}</TableCell>
              <TableCell className="text-muted-foreground">
                {item.company}
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className={cn('size-2 rounded-full', stageMeta[item.stage].tone)}
                    aria-hidden="true"
                  />
                  <span className="text-sm">{stageMeta[item.stage].label}</span>
                </span>
              </TableCell>
              <TableCell className="hidden font-mono text-xs text-muted-foreground md:table-cell">
                {item.appliedOn}
              </TableCell>
              <TableCell className="hidden max-w-52 truncate text-xs text-muted-foreground lg:table-cell">
                {item.nextStep}
              </TableCell>
              <TableCell className="text-right font-mono text-xs text-muted-foreground">
                {item.updated}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function ApplicationsTracker() {
  return (
    <Tabs defaultValue="board" className="gap-5">
      <TabsList>
        <TabsTrigger value="board">
          <KanbanSquare data-icon="inline-start" />
          Board
        </TabsTrigger>
        <TabsTrigger value="table">
          <Table2 data-icon="inline-start" />
          Table
        </TabsTrigger>
      </TabsList>
      <TabsContent value="board">
        <KanbanView />
      </TabsContent>
      <TabsContent value="table">
        <TableView />
      </TabsContent>
    </Tabs>
  )
}
