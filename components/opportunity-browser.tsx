'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal } from 'lucide-react'

import { OpportunityCard } from '@/components/opportunity-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { opportunities } from '@/lib/data'

const typeOptions = [
  { value: 'all', label: 'All' },
  { value: 'Internship', label: 'Internships' },
  { value: 'Full-time', label: 'Placements' },
  { value: 'Co-op', label: 'Co-op' },
]

const locations = [
  'All locations',
  'Bengaluru, IN',
  'Pune, IN',
  'Hyderabad, IN',
  'Chennai, IN',
  'Mumbai, IN',
  'Gurugram, IN',
  'Remote, IN',
]

const durations = ['Any duration', '2 months', '3 months', '4 months', '6 months', '8 months', 'Permanent']

export function OpportunityBrowser() {
  const searchParams = useSearchParams()
  const preset = searchParams.get('type')

  const initialType =
    preset === 'internship'
      ? 'Internship'
      : preset === 'fulltime'
        ? 'Full-time'
        : 'all'

  const [query, setQuery] = React.useState('')
  const [type, setType] = React.useState<string>(initialType)
  const [location, setLocation] = React.useState('All locations')
  const [duration, setDuration] = React.useState('Any duration')

  React.useEffect(() => {
    setType(initialType)
  }, [initialType])

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return opportunities.filter((item) => {
      const matchesQuery =
        q.length === 0 ||
        item.role.toLowerCase().includes(q) ||
        item.company.toLowerCase().includes(q) ||
        item.skills.some((skill) => skill.toLowerCase().includes(q))
      const matchesType = type === 'all' || item.type === type
      const matchesLocation =
        location === 'All locations' || item.location === location
      const matchesDuration =
        duration === 'Any duration' || item.duration === duration
      return matchesQuery && matchesType && matchesLocation && matchesDuration
    })
  }, [query, type, location, duration])

  const resetFilters = () => {
    setQuery('')
    setType('all')
    setLocation('All locations')
    setDuration('Any duration')
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 rounded-xl bg-card p-4 ring-1 ring-foreground/10">
        <InputGroup>
          <InputGroupInput
            placeholder="Search role, company or skill…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search opportunities"
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <ToggleGroup
            value={[type]}
            onValueChange={(next) => setType(next[0] ?? 'all')}
            variant="outline"
            spacing={0}
            className="w-full lg:w-auto"
          >
            {typeOptions.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                className="flex-1 lg:flex-none"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <div className="flex flex-1 flex-wrap items-center gap-2">
            <Select value={location} onValueChange={(v) => setLocation(String(v))}>
              <SelectTrigger className="min-w-40 flex-1 lg:flex-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {locations.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={duration} onValueChange={(v) => setDuration(String(v))}>
              <SelectTrigger className="min-w-36 flex-1 lg:flex-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {durations.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button variant="ghost" size="sm" onClick={resetFilters}>
              <SlidersHorizontal data-icon="inline-start" />
              Reset
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="font-mono">
          {results.length} result{results.length === 1 ? '' : 's'}
        </Badge>
        <span className="text-xs text-muted-foreground">
          Sorted by match score
        </span>
      </div>

      {results.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Search />
            </EmptyMedia>
            <EmptyTitle>No matching opportunities</EmptyTitle>
            <EmptyDescription>
              Try widening the location or duration filter, or search for a
              broader skill.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {results
            .slice()
            .sort((a, b) => b.match - a.match)
            .map((item, index) => (
              <OpportunityCard
                key={item.id}
                opportunity={item}
                index={index}
              />
            ))}
        </div>
      )}
    </div>
  )
}
