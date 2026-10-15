'use client'

import * as React from 'react'
import { FileText, GraduationCap, Trash2, Upload } from 'lucide-react'
import { toast } from 'sonner'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { student } from '@/lib/data'

type UploadItem = { id: string; name: string; size: string; kind: string }

const initialResume: UploadItem[] = [
  {
    id: 'r-1',
    name: 'aarav-menon-resume-2026.pdf',
    size: '218 KB',
    kind: 'Resume',
  },
]

const initialCerts: UploadItem[] = [
  {
    id: 'c-1',
    name: 'aws-cloud-practitioner.pdf',
    size: '540 KB',
    kind: 'Certificate',
  },
  {
    id: 'c-2',
    name: 'dbt-fundamentals.pdf',
    size: '312 KB',
    kind: 'Certificate',
  },
]

function UploadPanel({
  title,
  description,
  accept,
  items,
  setItems,
}: {
  title: string
  description: string
  accept: string
  items: UploadItem[]
  setItems: React.Dispatch<React.SetStateAction<UploadItem[]>>
}) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files?.length) return
    const next = Array.from(files).map((file) => ({
      id: `${file.name}-${Date.now()}`,
      name: file.name,
      size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
      kind: title,
    }))
    setItems((prev) => [...prev, ...next])
    toast.success(`${next.length} file uploaded`, { description: title })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border p-6 text-center transition-colors hover:border-primary/50 hover:bg-primary/[0.03]"
        >
          <Upload className="size-5 text-muted-foreground" />
          <span className="text-sm font-medium">Click to upload</span>
          <span className="text-xs text-muted-foreground">
            {accept} · up to 5 MB
          </span>
        </button>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={accept}
          className="sr-only"
          onChange={(event) => handleFiles(event.target.files)}
        />

        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-lg border border-border p-2.5"
          >
            <FileText className="size-4 shrink-0 text-muted-foreground" />
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm">{item.name}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {item.size}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              className="ml-auto shrink-0"
              aria-label={`Remove ${item.name}`}
              onClick={() =>
                setItems((prev) => prev.filter((f) => f.id !== item.id))
              }
            >
              <Trash2 />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function SettingsForm() {
  const [resume, setResume] = React.useState(initialResume)
  const [certs, setCerts] = React.useState(initialCerts)

  return (
    <Tabs defaultValue="personal" className="gap-5">
      <TabsList>
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="academics">Academics</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
      </TabsList>

      <TabsContent value="personal">
        <Card>
          <CardHeader>
            <CardTitle>Personal details</CardTitle>
            <CardDescription>
              Shared with recruiters when you apply to a posting.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input id="name" defaultValue={student.name} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">College email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={student.email}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input id="phone" type="tel" defaultValue={student.phone} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="city">Current city</FieldLabel>
                  <Input id="city" defaultValue={student.location} />
                </Field>
              </div>

              <FieldSeparator />

              <Field>
                <FieldLabel htmlFor="bio">Short bio</FieldLabel>
                <Textarea
                  id="bio"
                  rows={4}
                  defaultValue="Third-year CS student focused on data engineering. I build small pipelines for campus datasets and write about what breaks."
                />
                <FieldDescription>
                  Appears at the top of your shared profile. Two or three
                  sentences works best.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button variant="outline">Discard</Button>
            <Button onClick={() => toast.success('Personal details saved')}>
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="academics">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="size-4" />
              Academic record
            </CardTitle>
            <CardDescription>
              Used to check eligibility filters on placement drives.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="college">Institution</FieldLabel>
                  <Input id="college" defaultValue={student.college} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="branch">Programme</FieldLabel>
                  <Input id="branch" defaultValue="B.Tech Computer Science" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="year">Graduation year</FieldLabel>
                  <Select defaultValue="2027">
                    <SelectTrigger id="year" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {['2026', '2027', '2028', '2029'].map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="cgpa">CGPA</FieldLabel>
                  <Input id="cgpa" defaultValue="8.62" />
                  <FieldDescription>Out of 10, current semester.</FieldDescription>
                </Field>
              </div>
            </FieldGroup>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button variant="outline">Discard</Button>
            <Button onClick={() => toast.success('Academic record saved')}>
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="documents">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="font-mono">
              {resume.length + certs.length} files
            </Badge>
            <span className="text-xs text-muted-foreground">
              Recruiters can only see documents you attach to an application.
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <UploadPanel
              title="Resume"
              description="Keep one current PDF. Older versions are archived automatically."
              accept=".pdf,.docx"
              items={resume}
              setItems={setResume}
            />
            <UploadPanel
              title="Certificates"
              description="Course completions and credentials that back up your skill claims."
              accept=".pdf,.png,.jpg"
              items={certs}
              setItems={setCerts}
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
