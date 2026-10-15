import type { Metadata } from 'next'
import { CalendarPlus, Star } from 'lucide-react'

import { AppShell } from '@/components/app-shell'
import { PageBody, PageHeader } from '@/components/page-shell'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
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
import { mentors } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Mentorships · SkillBridge',
  description:
    'Book sessions with industry mentors matched to the gaps in your skill profile.',
}

export default function MentorshipsPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Mentorships"
        title="Mentors for your gaps"
        description="Matched to Kubernetes, system design and interview practice — the three items flagged on your profile."
      />
      <PageBody>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="h-full">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Avatar className="size-10 shrink-0">
                    <AvatarFallback className="bg-brand-soft text-xs font-semibold text-accent-foreground">
                      {mentor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <CardTitle className="text-base">{mentor.name}</CardTitle>
                    <CardDescription className="text-pretty">
                      {mentor.title}
                    </CardDescription>
                  </div>
                </div>
                <CardAction>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
                    <Star className="size-3.5" />
                    {mentor.rating}
                  </span>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5">
                {mentor.focus.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="justify-between gap-3">
                <span className="text-xs text-muted-foreground">
                  {mentor.slots}
                </span>
                <Button
                  size="sm"
                  variant={mentor.slots === 'Waitlist' ? 'outline' : 'default'}
                >
                  <CalendarPlus data-icon="inline-start" />
                  {mentor.slots === 'Waitlist' ? 'Join waitlist' : 'Book'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </PageBody>
    </AppShell>
  )
}
