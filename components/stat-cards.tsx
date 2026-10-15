'use client'

import * as motion from 'motion/react-client'
import { CalendarClock, Layers, Send, TrendingUp } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { student } from '@/lib/data'

const stats = [
  {
    key: 'readiness',
    label: 'Skill Readiness Score',
    value: `${student.readiness}%`,
    icon: TrendingUp,
    caption: `+${student.readinessDelta} pts since July`,
  },
  {
    key: 'applications',
    label: 'Active Applications',
    value: '5',
    icon: Send,
    caption: '2 in interview stage',
  },
  {
    key: 'deadlines',
    label: 'Upcoming Deadlines',
    value: '4',
    icon: CalendarClock,
    caption: 'Nearest closes in 3 days',
  },
  {
    key: 'roles',
    label: 'Recommended Roles',
    value: '3',
    icon: Layers,
    caption: 'Data, Backend, Analytics',
  },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
        >
          <Card className="h-full gap-3">
            <CardHeader>
              <CardDescription className="flex items-center gap-2">
                <stat.icon className="size-4" />
                {stat.label}
              </CardDescription>
              <CardTitle className="font-mono text-3xl tracking-tight">
                {stat.value}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {stat.key === 'readiness' ? (
                <Progress value={student.readiness} className="gap-2" />
              ) : null}
              <p className="text-xs text-muted-foreground">{stat.caption}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function ReadinessBanner() {
  return (
    <Card className="overflow-hidden border-primary/25 bg-primary/[0.04]">
      <CardHeader>
        <Badge variant="secondary" className="w-fit font-mono">
          Assessment {student.lastAssessment}
        </Badge>
        <CardTitle className="text-lg">Your profile is 76% mapped</CardTitle>
        <CardDescription className="leading-relaxed">
          Retake the assessment after finishing a course to keep your match
          scores accurate.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
