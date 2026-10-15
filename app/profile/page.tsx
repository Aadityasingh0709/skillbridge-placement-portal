import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  RefreshCw,
  Target,
} from 'lucide-react'

import { AppShell } from '@/components/app-shell'
import { PageBody, PageHeader } from '@/components/page-shell'
import { SkillRadar } from '@/components/skill-radar'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
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
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { gaps, recommendedTracks, strengths, student } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Skill Profile · SkillBridge',
  description:
    'Your generated skill profile: technical and soft skill radar, strengths, gap analysis and recommended roles.',
}

const severityVariant = {
  High: 'destructive',
  Medium: 'secondary',
  Low: 'outline',
} as const

export default function ProfilePage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Skill Profile"
        title="Your skill map"
        description={`Generated from your assessment on ${student.lastAssessment}. Scores refresh whenever you retake it or log a completed course.`}
        actions={
          <>
            <Button
              variant="outline"
              size="lg"
              render={
                <Link href="/assessment">
                  <RefreshCw data-icon="inline-start" />
                  Retake assessment
                </Link>
              }
            />
            <Button
              size="lg"
              render={
                <Link href="/opportunities">
                  Match me to roles
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              }
            />
          </>
        }
      />

      <PageBody>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SkillRadar />
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardDescription>Overall readiness</CardDescription>
                <CardTitle className="font-mono text-4xl tracking-tight">
                  {student.readiness}%
                </CardTitle>
                <CardAction>
                  <Badge variant="secondary" className="font-mono">
                    +{student.readinessDelta}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Progress value={student.readiness} />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  You are above the cohort median of 64%. Closing the Kubernetes
                  gap alone would move you to roughly 84%.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BadgeCheck className="size-4" />
                  Strength badges
                </CardTitle>
                <CardDescription>
                  Verified from assessment answers and project history
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {strengths.map((item) => (
                  <Badge
                    key={item.label}
                    variant={item.level === 'Advanced' ? 'default' : 'secondary'}
                    className="h-7 gap-1.5 px-2.5"
                  >
                    {item.label}
                    <span className="font-mono text-[0.65rem] opacity-75">
                      {item.level}
                    </span>
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="size-4" />
                Skill gaps
              </CardTitle>
              <CardDescription>
                Ranked by how often they block your matched roles
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              {gaps.map((gap, index) => (
                <div key={gap.label} className="flex flex-col">
                  {index > 0 ? <Separator className="my-3" /> : null}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-medium">{gap.label}</span>
                      <Badge
                        variant={severityVariant[gap.severity]}
                        className="ml-auto shrink-0"
                      >
                        {gap.severity}
                      </Badge>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {gap.note}
                    </p>
                    <p className="font-mono text-xs text-primary">
                      {gap.action}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                size="sm"
                render={<Link href="/mentorships">Find a mentor for these</Link>}
              />
            </CardFooter>
          </Card>

          <div className="flex flex-col gap-4">
            <Alert>
              <Target />
              <AlertTitle>Two gaps are blocking your top matches</AlertTitle>
              <AlertDescription>
                Kubernetes and system design appear in 4 of the 6 roles you
                saved. Both are covered by the 12-hour platform track.
              </AlertDescription>
            </Alert>

            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Recommended roles &amp; industries</CardTitle>
                <CardDescription>
                  Derived from your strongest skill clusters
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col">
                {recommendedTracks.map((track, index) => (
                  <div key={track.role} className="flex flex-col">
                    {index > 0 ? <Separator className="my-3" /> : null}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {track.role}
                        </span>
                        <span className="ml-auto shrink-0 font-mono text-xs text-muted-foreground">
                          {track.fit}% fit
                        </span>
                      </div>
                      <Progress value={track.fit} />
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {track.industry} — {track.why}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </PageBody>
    </AppShell>
  )
}
