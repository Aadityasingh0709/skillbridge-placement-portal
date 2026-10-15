import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'

import { AppShell } from '@/components/app-shell'
import { DeadlineList } from '@/components/deadline-list'
import { OpportunityCard } from '@/components/opportunity-card'
import { PageBody, PageHeader } from '@/components/page-shell'
import { ReadinessTrend } from '@/components/readiness-trend'
import { StatCards } from '@/components/stat-cards'
import { Button } from '@/components/ui/button'
import { opportunities, student } from '@/lib/data'

export default function DashboardPage() {
  const recommended = opportunities.slice(0, 3)

  return (
    <AppShell>
      <PageHeader
        eyebrow="Dashboard"
        title={`Welcome back, ${student.name.split(' ')[0]}`}
        description={`${student.program} · ${student.college}. You have 4 deadlines this fortnight and 2 interviews scheduled.`}
        actions={
          <>
            <Button
              size="lg"
              className="glow-cta"
              render={
                <Link href="/assessment">
                  <Sparkles data-icon="inline-start" />
                  Take Skill Assessment
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/opportunities">Browse opportunities</Link>}
            />
          </>
        }
      />

      <PageBody>
        <StatCards />

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <ReadinessTrend />
          </div>
          <DeadlineList />
        </div>

        <section className="flex flex-col gap-4">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold tracking-tight">
                Recommended for you
              </h2>
              <p className="text-sm text-muted-foreground">
                Ranked against your current skill map
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              render={
                <Link href="/opportunities">
                  See all {opportunities.length}
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              }
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recommended.map((item, index) => (
              <OpportunityCard
                key={item.id}
                opportunity={item}
                index={index}
              />
            ))}
          </div>
        </section>
      </PageBody>
    </AppShell>
  )
}
