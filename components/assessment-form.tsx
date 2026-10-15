'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react'
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
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { assessmentSteps, totalQuestions, type Question } from '@/lib/assessment'

type Answers = Record<string, string | number>

function QuestionBlock({
  question,
  value,
  onChange,
}: {
  question: Question
  value: string | number | undefined
  onChange: (value: string | number) => void
}) {
  if (question.kind === 'mcq') {
    return (
      <FieldSet>
        <FieldLegend variant="label">{question.prompt}</FieldLegend>
        {question.hint ? (
          <FieldDescription>{question.hint}</FieldDescription>
        ) : null}
        <RadioGroup
          value={typeof value === 'string' ? value : null}
          onValueChange={(next) => onChange(String(next))}
          className="gap-2"
        >
          {question.options.map((option) => (
            <FieldLabel
              key={option.value}
              htmlFor={`${question.id}-${option.value}`}
            >
              <Field orientation="horizontal">
                <RadioGroupItem
                  id={`${question.id}-${option.value}`}
                  value={option.value}
                />
                <span className="text-sm leading-relaxed">{option.label}</span>
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
      </FieldSet>
    )
  }

  if (question.kind === 'rating') {
    const rating = typeof value === 'number' ? value : 3
    return (
      <Field>
        <FieldLabel htmlFor={question.id}>{question.prompt}</FieldLabel>
        <div className="flex flex-col gap-3 pt-2">
          <Slider
            id={question.id}
            min={1}
            max={5}
            step={1}
            value={rating}
            onValueChange={(next) =>
              onChange(Array.isArray(next) ? next[0] : Number(next))
            }
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{question.low}</span>
            <Badge variant="secondary" className="font-mono">
              {rating} / 5
            </Badge>
            <span>{question.high}</span>
          </div>
        </div>
      </Field>
    )
  }

  const text = typeof value === 'string' ? value : ''
  const min = question.minLength ?? 60

  return (
    <Field>
      <FieldLabel htmlFor={question.id}>{question.prompt}</FieldLabel>
      <Textarea
        id={question.id}
        rows={4}
        placeholder={question.placeholder}
        value={text}
        onChange={(event) => onChange(event.target.value)}
      />
      <FieldDescription>
        {text.length >= min
          ? 'Looks good.'
          : `${min - text.length} more characters recommended.`}
      </FieldDescription>
    </Field>
  )
}

export function AssessmentForm() {
  const router = useRouter()
  const [stepIndex, setStepIndex] = React.useState(0)
  const [answers, setAnswers] = React.useState<Answers>({})
  const [submitting, setSubmitting] = React.useState(false)

  const step = assessmentSteps[stepIndex]
  const isLast = stepIndex === assessmentSteps.length - 1

  const answeredCount = React.useMemo(
    () =>
      Object.entries(answers).filter(([, value]) =>
        typeof value === 'string' ? value.trim().length > 0 : true,
      ).length,
    [answers],
  )

  const progress = Math.round((answeredCount / totalQuestions) * 100)

  const stepComplete = step.questions.every((question) => {
    const value = answers[question.id]
    if (question.kind === 'rating') return true
    if (question.kind === 'self')
      return typeof value === 'string' && value.trim().length >= 20
    return typeof value === 'string' && value.length > 0
  })

  const setAnswer = (id: string, value: string | number) =>
    setAnswers((prev) => ({ ...prev, [id]: value }))

  const handleSubmit = () => {
    setSubmitting(true)
    toast.success('Assessment submitted', {
      description: 'Generating your skill profile…',
    })
    window.setTimeout(() => router.push('/profile'), 900)
  }

  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardContent className="flex flex-col gap-4">
          <Progress value={progress} className="flex-wrap gap-2">
            <ProgressLabel>
              Step {stepIndex + 1} of {assessmentSteps.length} · {step.title}
            </ProgressLabel>
            <ProgressValue className="font-mono" />
          </Progress>

          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {assessmentSteps.map((item, index) => {
              const done = index < stepIndex
              const active = index === stepIndex
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setStepIndex(index)}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-lg border border-border p-2.5 text-left transition-colors hover:bg-muted/60',
                      active && 'border-primary bg-primary/5',
                    )}
                  >
                    <span
                      className={cn(
                        'flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-xs',
                        done
                          ? 'bg-brand text-brand-foreground'
                          : active
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground',
                      )}
                      aria-hidden="true"
                    >
                      {done ? <Check className="size-3.5" /> : index + 1}
                    </span>
                    <span className="min-w-0 truncate text-xs font-medium">
                      {item.title}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </CardContent>
      </Card>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{step.title}</CardTitle>
              <CardDescription>{step.caption}</CardDescription>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                {step.questions.map((question) => (
                  <QuestionBlock
                    key={question.id}
                    question={question}
                    value={answers[question.id]}
                    onChange={(value) => setAnswer(question.id, value)}
                  />
                ))}
              </FieldGroup>
            </CardContent>
            <CardFooter className="justify-between gap-3">
              <Button
                variant="outline"
                disabled={stepIndex === 0}
                onClick={() => setStepIndex((prev) => Math.max(0, prev - 1))}
              >
                <ArrowLeft data-icon="inline-start" />
                Back
              </Button>

              {isLast ? (
                <Button
                  size="lg"
                  className="glow-cta"
                  disabled={submitting}
                  onClick={handleSubmit}
                >
                  <Sparkles data-icon="inline-start" />
                  {submitting ? 'Generating profile…' : 'Submit & generate profile'}
                </Button>
              ) : (
                <Button
                  disabled={!stepComplete}
                  onClick={() =>
                    setStepIndex((prev) =>
                      Math.min(assessmentSteps.length - 1, prev + 1),
                    )
                  }
                >
                  Continue
                  <ArrowRight data-icon="inline-end" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
