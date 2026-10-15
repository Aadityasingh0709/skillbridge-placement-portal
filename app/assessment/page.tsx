import type { Metadata } from 'next'

import { AppShell } from '@/components/app-shell'
import { AssessmentForm } from '@/components/assessment-form'
import { PageBody, PageHeader } from '@/components/page-shell'
import { Badge } from '@/components/ui/badge'
import { totalQuestions } from '@/lib/assessment'

export const metadata: Metadata = {
  title: 'Skill Assessment · SkillBridge',
  description:
    'A four-step skill assessment covering technical fundamentals, soft skills, self-evaluation and placement preferences.',
}

export default function AssessmentPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Skill Assessment"
        title="Map your current skills"
        description="Four short steps. Your answers drive the match scores, gap list and role recommendations across the portal."
        actions={
          <Badge variant="outline" className="h-8 px-3 font-mono">
            {totalQuestions} questions · ~9 min
          </Badge>
        }
      />
      <PageBody>
        <div className="w-full max-w-3xl">
          <AssessmentForm />
        </div>
      </PageBody>
    </AppShell>
  )
}
