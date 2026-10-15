import { Suspense } from 'react'
import type { Metadata } from 'next'

import { AppShell } from '@/components/app-shell'
import { OpportunityBrowser } from '@/components/opportunity-browser'
import { PageBody, PageHeader } from '@/components/page-shell'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: 'Opportunities · SkillBridge',
  description:
    'Search internships, placements and co-op roles matched against your skill profile.',
}

function BrowserFallback() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="h-36 w-full rounded-xl" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} className="h-64 w-full rounded-xl" />
        ))}
      </div>
    </div>
  )
}

export default function OpportunitiesPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Opportunities"
        title="Internships & placements"
        description="Every posting is scored against your current skill map. Filter by role type, location and duration to narrow the list."
      />
      <PageBody>
        <Suspense fallback={<BrowserFallback />}>
          <OpportunityBrowser />
        </Suspense>
      </PageBody>
    </AppShell>
  )
}
