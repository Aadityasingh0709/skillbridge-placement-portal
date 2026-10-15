import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { deadlines } from '@/lib/data'

export function DeadlineList() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Upcoming deadlines</CardTitle>
        <CardDescription>Sorted by closing date</CardDescription>
        <CardAction>
          <Button
            variant="ghost"
            size="sm"
            render={
              <Link href="/applications">
                View all
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            }
          />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col">
        {deadlines.map((item, index) => (
          <div key={item.id} className="flex flex-col">
            {index > 0 ? <Separator className="my-3" /> : null}
            <div className="flex items-center gap-3">
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate text-sm font-medium">
                  {item.role}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {item.company}
                </span>
              </div>
              <div className="ml-auto flex shrink-0 flex-col items-end gap-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.due}
                </span>
                <Badge
                  variant={item.daysLeft <= 3 ? 'destructive' : 'secondary'}
                  className="font-mono"
                >
                  {item.daysLeft}d left
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
