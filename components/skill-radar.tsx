'use client'

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

const data = [
  { axis: 'Programming', technical: 88, soft: 62 },
  { axis: 'Data & SQL', technical: 74, soft: 58 },
  { axis: 'Systems', technical: 62, soft: 60 },
  { axis: 'Cloud/DevOps', technical: 48, soft: 55 },
  { axis: 'Communication', technical: 54, soft: 81 },
  { axis: 'Teamwork', technical: 60, soft: 90 },
  { axis: 'Ownership', technical: 58, soft: 72 },
  { axis: 'Problem Framing', technical: 66, soft: 66 },
]

const chartConfig = {
  technical: { label: 'Technical', color: 'var(--chart-1)' },
  soft: { label: 'Soft skills', color: 'var(--chart-2)' },
} satisfies ChartConfig

export function SkillRadar() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Technical vs soft skills</CardTitle>
        <CardDescription>
          Scored from your latest assessment, normalised to 100
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[340px] w-full"
        >
          <RadarChart data={data} outerRadius="72%">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarGrid />
            <PolarAngleAxis dataKey="axis" tick={{ fontSize: 11 }} />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              dataKey="technical"
              stroke="var(--color-technical)"
              fill="var(--color-technical)"
              fillOpacity={0.24}
              strokeWidth={2}
            />
            <Radar
              dataKey="soft"
              stroke="var(--color-soft)"
              fill="var(--color-soft)"
              fillOpacity={0.18}
              strokeWidth={2}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span
            className="size-2 rounded-full bg-chart-1"
            aria-hidden="true"
          />
          Technical
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-chart-2" aria-hidden="true" />
          Soft skills
        </span>
      </CardFooter>
    </Card>
  )
}
