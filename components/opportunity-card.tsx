'use client'

import * as React from 'react'
import * as motion from 'motion/react-client'
import { CalendarClock, Check, MapPin, Timer, Wallet } from 'lucide-react'
import { toast } from 'sonner'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Opportunity } from '@/lib/data'

function MatchBadge({ match }: { match: number }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-mono text-xs font-semibold',
        match >= 85
          ? 'bg-brand-soft text-accent-foreground'
          : match >= 70
            ? 'bg-primary/10 text-primary'
            : 'bg-muted text-muted-foreground',
      )}
    >
      <span
        className={cn(
          'size-1.5 rounded-full',
          match >= 85 ? 'bg-brand' : match >= 70 ? 'bg-primary' : 'bg-muted-foreground',
        )}
        aria-hidden="true"
      />
      {match}% match
    </span>
  )
}

export function OpportunityCard({
  opportunity,
  index = 0,
}: {
  opportunity: Opportunity
  index?: number
}) {
  const [applied, setApplied] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: Math.min(index * 0.05, 0.3), ease: 'easeOut' }}
    >
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-sm font-semibold text-secondary-foreground">
              {opportunity.logo}
            </div>
            <div className="flex min-w-0 flex-col gap-0.5">
              <CardTitle className="text-base leading-snug text-pretty">
                {opportunity.role}
              </CardTitle>
              <CardDescription className="truncate">
                {opportunity.company} · {opportunity.type}
              </CardDescription>
            </div>
          </div>
          <CardAction>
            <MatchBadge match={opportunity.match} />
          </CardAction>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0" />
              <span className="truncate">
                {opportunity.location} · {opportunity.mode}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <Timer className="size-3.5 shrink-0" />
              {opportunity.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Wallet className="size-3.5 shrink-0" />
              {opportunity.stipend}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarClock className="size-3.5 shrink-0" />
              Closes {opportunity.deadline}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {opportunity.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="font-mono">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="justify-between gap-3">
          <span className="text-xs text-muted-foreground">
            Posted {opportunity.posted}
          </span>
          <Button
            size="sm"
            variant={applied ? 'outline' : 'default'}
            disabled={applied}
            onClick={() => {
              setApplied(true)
              toast.success('Application submitted', {
                description: `${opportunity.role} at ${opportunity.company}`,
              })
            }}
          >
            {applied ? (
              <>
                <Check data-icon="inline-start" />
                Applied
              </>
            ) : (
              'Apply'
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
