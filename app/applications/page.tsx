import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus } from 'lucide-react'

import { AppShell } from '@/components/app-shell'
import { ApplicationsTracker } from '@/components/applications-tracker'
import { PageBody, PageHeader } from '@/components/page-shell'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { applications, stageMeta, type ApplicationStage } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Applications · SkillBridge',
  description:
    'Track every application from applied through shortlisted, interview, offer and rejection.',
}

const stages: ApplicationStage[] = [
  'applied',
  'shortlisted',
  'interview',
  'offered',
  'rejected',
]

export default function ApplicationsPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Applications"
        title="Application tracker"
        description="Eight applications across five stages. Timestamps update whenever a recruiter moves your candidacy."
        actions={
          <Button
            size="lg"
            render={
              <Link href="/opportunities">
                <Plus data-icon="inline-start" />
                Apply to something new
              </Link>
            }
          />
        }
      />
      <PageBody>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {stages.map((stage) => {
            const count = applications.filter(
              (item) => item.stage === stage,
            ).length
            return (
              <Card key={stage} size="sm">
                <CardContent className="flex flex-col gap-1">
                  <CardDescription className="flex items-center gap-1.5 text-xs">
                    <span
                      className={`size-2 rounded-full ${stageMeta[stage].tone}`}
                      aria-hidden="true"
                    />
                    {stageMeta[stage].label}
                  </CardDescription>
                  <CardTitle className="font-mono text-2xl">{count}</CardTitle>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <ApplicationsTracker />
      </PageBody>
    </AppShell>
  )
}
