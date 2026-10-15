import type { Metadata } from 'next'

import { AppShell } from '@/components/app-shell'
import { PageBody, PageHeader } from '@/components/page-shell'
import { SettingsForm } from '@/components/settings-form'

export const metadata: Metadata = {
  title: 'Profile settings · SkillBridge',
  description:
    'Update your personal details, upload your resume and manage certificates.',
}

export default function SettingsPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Settings"
        title="Profile settings"
        description="Keep your details current — recruiters see this profile alongside every application you submit."
      />
      <PageBody>
        <SettingsForm />
      </PageBody>
    </AppShell>
  )
}
