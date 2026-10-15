'use client'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { readinessTrend, student } from '@/lib/data'

const chartConfig = {
  score: {
    label: 'Readiness',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export function ReadinessTrend() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Skill readiness over time</CardTitle>
        <CardDescription>
          Recomputed after each assessment and completed course
        </CardDescription>
        <CardAction>
          <Badge variant="secondary" className="font-mono">
            +{student.readinessDelta} pts
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-56 w-full"
        >
          <AreaChart
            data={readinessTrend}
            margin={{ left: -18, right: 8, top: 8, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillScore" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-score)"
                  stopOpacity={0.28}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-score)"
                  stopOpacity={0.02}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
              tickCount={5}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="score"
              type="monotone"
              stroke="var(--color-score)"
              strokeWidth={2}
              fill="url(#fillScore)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
