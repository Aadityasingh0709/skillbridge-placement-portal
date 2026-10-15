export type McqQuestion = {
  id: string
  kind: 'mcq'
  prompt: string
  hint?: string
  options: { value: string; label: string }[]
}

export type RatingQuestion = {
  id: string
  kind: 'rating'
  prompt: string
  low: string
  high: string
}

export type SelfQuestion = {
  id: string
  kind: 'self'
  prompt: string
  placeholder: string
  minLength?: number
}

export type Question = McqQuestion | RatingQuestion | SelfQuestion

export type Step = {
  id: string
  title: string
  caption: string
  questions: Question[]
}

export const assessmentSteps: Step[] = [
  {
    id: 'technical',
    title: 'Technical fundamentals',
    caption: 'Four questions on programming, data and systems.',
    questions: [
      {
        id: 'q-complexity',
        kind: 'mcq',
        prompt:
          'What is the average time complexity of a lookup in a well-distributed hash table?',
        hint: 'Assume a good hash function and load factor below 1.',
        options: [
          { value: 'a', label: 'O(1)' },
          { value: 'b', label: 'O(log n)' },
          { value: 'c', label: 'O(n)' },
          { value: 'd', label: 'O(n log n)' },
        ],
      },
      {
        id: 'q-sql',
        kind: 'mcq',
        prompt:
          'Which SQL clause filters rows after aggregation has been applied?',
        options: [
          { value: 'a', label: 'WHERE' },
          { value: 'b', label: 'HAVING' },
          { value: 'c', label: 'QUALIFY ROW' },
          { value: 'd', label: 'GROUP BY' },
        ],
      },
      {
        id: 'q-git',
        kind: 'mcq',
        prompt:
          'You committed to the wrong branch but have not pushed. What is the cleanest fix?',
        options: [
          { value: 'a', label: 'Force push over the target branch' },
          { value: 'b', label: 'Cherry-pick the commit, then reset the source branch' },
          { value: 'c', label: 'Delete the repo and re-clone' },
          { value: 'd', label: 'Rename the branch and open a pull request' },
        ],
      },
      {
        id: 'q-api',
        kind: 'mcq',
        prompt:
          'A client retries a failed POST and the server creates a duplicate record. What prevents this?',
        options: [
          { value: 'a', label: 'A longer request timeout' },
          { value: 'b', label: 'An idempotency key on the request' },
          { value: 'c', label: 'Switching the endpoint to GET' },
          { value: 'd', label: 'Client-side input validation' },
        ],
      },
    ],
  },
  {
    id: 'soft',
    title: 'Soft skills',
    caption: 'Rate yourself honestly — this calibrates your gap list.',
    questions: [
      {
        id: 'r-communication',
        kind: 'rating',
        prompt: 'Explaining technical decisions to a non-technical audience',
        low: 'Struggle',
        high: 'Confident',
      },
      {
        id: 'r-teamwork',
        kind: 'rating',
        prompt: 'Collaborating on shared code and giving useful review feedback',
        low: 'Rarely',
        high: 'Consistently',
      },
      {
        id: 'r-ownership',
        kind: 'rating',
        prompt: 'Taking a loosely defined task to a finished outcome unprompted',
        low: 'Need direction',
        high: 'Fully autonomous',
      },
      {
        id: 'r-ambiguity',
        kind: 'rating',
        prompt: 'Working through ambiguous problems without a clear spec',
        low: 'Uncomfortable',
        high: 'Thrive',
      },
    ],
  },
  {
    id: 'self',
    title: 'Self-evaluation',
    caption: 'Two short written answers. Aim for three or four sentences.',
    questions: [
      {
        id: 's-project',
        kind: 'self',
        prompt:
          'Describe the project you are most proud of and the part you personally built.',
        placeholder:
          'I built a pipeline that ingested campus event data into Postgres and served it through a small API...',
        minLength: 60,
      },
      {
        id: 's-goal',
        kind: 'self',
        prompt:
          'Which role are you targeting after graduation, and what is the biggest thing standing in your way?',
        placeholder:
          'I am aiming for a data engineering role. My weakest area is deployment and containers...',
        minLength: 60,
      },
    ],
  },
  {
    id: 'preferences',
    title: 'Placement preferences',
    caption: 'Used to rank and filter the opportunities you see.',
    questions: [
      {
        id: 'p-type',
        kind: 'mcq',
        prompt: 'What are you looking for right now?',
        options: [
          { value: 'internship', label: 'Internship (3–6 months)' },
          { value: 'fulltime', label: 'Full-time placement' },
          { value: 'coop', label: 'Extended co-op' },
          { value: 'open', label: 'Open to anything relevant' },
        ],
      },
      {
        id: 'p-mode',
        kind: 'mcq',
        prompt: 'Preferred work arrangement',
        options: [
          { value: 'onsite', label: 'On-site' },
          { value: 'hybrid', label: 'Hybrid' },
          { value: 'remote', label: 'Remote' },
          { value: 'any', label: 'No preference' },
        ],
      },
      {
        id: 'p-relocate',
        kind: 'rating',
        prompt: 'Willingness to relocate for the right role',
        low: 'Stay local',
        high: 'Anywhere',
      },
    ],
  },
]

export const totalQuestions = assessmentSteps.reduce(
  (sum, step) => sum + step.questions.length,
  0,
)
