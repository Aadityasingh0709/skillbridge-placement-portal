export type Opportunity = {
  id: string
  company: string
  logo: string
  role: string
  type: 'Internship' | 'Full-time' | 'Co-op'
  location: string
  mode: 'Remote' | 'Hybrid' | 'On-site'
  duration: string
  stipend: string
  match: number
  skills: string[]
  deadline: string
  posted: string
}

export const student = {
  name: 'Aarav Menon',
  initials: 'AM',
  program: 'B.Tech Computer Science · Class of 2027',
  college: 'Northgate Institute of Technology',
  email: 'aarav.menon@nit.edu',
  phone: '+91 98220 41188',
  location: 'Pune, Maharashtra',
  readiness: 76,
  readinessDelta: 8,
  lastAssessment: 'Aug 14, 2026',
}

export const opportunities: Opportunity[] = [
  {
    id: 'op-1',
    company: 'Northwind Analytics',
    logo: 'NA',
    role: 'Data Engineering Intern',
    type: 'Internship',
    location: 'Bengaluru, IN',
    mode: 'Hybrid',
    duration: '6 months',
    stipend: '₹45,000 / mo',
    match: 94,
    skills: ['Python', 'SQL', 'Airflow', 'dbt'],
    deadline: 'Sep 02, 2026',
    posted: '2 days ago',
  },
  {
    id: 'op-2',
    company: 'Lumen Robotics',
    logo: 'LR',
    role: 'Embedded Systems Intern',
    type: 'Internship',
    location: 'Pune, IN',
    mode: 'On-site',
    duration: '3 months',
    stipend: '₹32,000 / mo',
    match: 88,
    skills: ['C++', 'RTOS', 'Git', 'Sensors'],
    deadline: 'Aug 29, 2026',
    posted: '4 days ago',
  },
  {
    id: 'op-3',
    company: 'Fernwell Health',
    logo: 'FH',
    role: 'Frontend Engineer (New Grad)',
    type: 'Full-time',
    location: 'Remote, IN',
    mode: 'Remote',
    duration: 'Permanent',
    stipend: '₹14.5 LPA',
    match: 82,
    skills: ['React', 'TypeScript', 'Accessibility', 'Testing'],
    deadline: 'Sep 12, 2026',
    posted: '1 week ago',
  },
  {
    id: 'op-4',
    company: 'Halberd Payments',
    logo: 'HP',
    role: 'Backend Intern — Platform',
    type: 'Internship',
    location: 'Hyderabad, IN',
    mode: 'Hybrid',
    duration: '6 months',
    stipend: '₹50,000 / mo',
    match: 79,
    skills: ['Go', 'Postgres', 'Kubernetes', 'gRPC'],
    deadline: 'Sep 06, 2026',
    posted: '3 days ago',
  },
  {
    id: 'op-5',
    company: 'Clearpath Mobility',
    logo: 'CM',
    role: 'ML Research Intern',
    type: 'Internship',
    location: 'Chennai, IN',
    mode: 'On-site',
    duration: '4 months',
    stipend: '₹40,000 / mo',
    match: 71,
    skills: ['PyTorch', 'Computer Vision', 'NumPy', 'Papers'],
    deadline: 'Sep 20, 2026',
    posted: '5 days ago',
  },
  {
    id: 'op-6',
    company: 'Verity Cloud',
    logo: 'VC',
    role: 'Site Reliability Co-op',
    type: 'Co-op',
    location: 'Gurugram, IN',
    mode: 'Hybrid',
    duration: '8 months',
    stipend: '₹38,000 / mo',
    match: 68,
    skills: ['Linux', 'Terraform', 'Observability', 'Bash'],
    deadline: 'Oct 01, 2026',
    posted: '1 week ago',
  },
  {
    id: 'op-7',
    company: 'Silverbrook Studio',
    logo: 'SS',
    role: 'Product Design Intern',
    type: 'Internship',
    location: 'Remote, IN',
    mode: 'Remote',
    duration: '3 months',
    stipend: '₹28,000 / mo',
    match: 61,
    skills: ['Figma', 'User Research', 'Prototyping'],
    deadline: 'Sep 15, 2026',
    posted: '2 weeks ago',
  },
  {
    id: 'op-8',
    company: 'Ridgeline Capital',
    logo: 'RC',
    role: 'Quant Analyst Intern',
    type: 'Internship',
    location: 'Mumbai, IN',
    mode: 'On-site',
    duration: '2 months',
    stipend: '₹65,000 / mo',
    match: 57,
    skills: ['Statistics', 'Python', 'Excel', 'Probability'],
    deadline: 'Sep 08, 2026',
    posted: '6 days ago',
  },
]

export const deadlines = [
  {
    id: 'dl-1',
    company: 'Lumen Robotics',
    role: 'Embedded Systems Intern',
    due: 'Aug 29',
    daysLeft: 3,
  },
  {
    id: 'dl-2',
    company: 'Northwind Analytics',
    role: 'Data Engineering Intern',
    due: 'Sep 02',
    daysLeft: 7,
  },
  {
    id: 'dl-3',
    company: 'Halberd Payments',
    role: 'Backend Intern — Platform',
    due: 'Sep 06',
    daysLeft: 11,
  },
  {
    id: 'dl-4',
    company: 'Ridgeline Capital',
    role: 'Quant Analyst Intern',
    due: 'Sep 08',
    daysLeft: 13,
  },
]

export type ApplicationStage =
  | 'applied'
  | 'shortlisted'
  | 'interview'
  | 'offered'
  | 'rejected'

export type Application = {
  id: string
  company: string
  logo: string
  role: string
  stage: ApplicationStage
  updated: string
  appliedOn: string
  nextStep: string
}

export const stageMeta: Record<
  ApplicationStage,
  { label: string; tone: string }
> = {
  applied: { label: 'Applied', tone: 'bg-muted-foreground' },
  shortlisted: { label: 'Shortlisted', tone: 'bg-chart-3' },
  interview: { label: 'Interview', tone: 'bg-chart-4' },
  offered: { label: 'Offered', tone: 'bg-brand' },
  rejected: { label: 'Rejected', tone: 'bg-destructive' },
}

export const applications: Application[] = [
  {
    id: 'ap-1',
    company: 'Northwind Analytics',
    logo: 'NA',
    role: 'Data Engineering Intern',
    stage: 'interview',
    updated: 'Aug 24, 09:12',
    appliedOn: 'Aug 08',
    nextStep: 'Technical round · Aug 28, 11:00',
  },
  {
    id: 'ap-2',
    company: 'Halberd Payments',
    logo: 'HP',
    role: 'Backend Intern — Platform',
    stage: 'shortlisted',
    updated: 'Aug 23, 16:40',
    appliedOn: 'Aug 12',
    nextStep: 'Awaiting interview slot',
  },
  {
    id: 'ap-3',
    company: 'Fernwell Health',
    logo: 'FH',
    role: 'Frontend Engineer (New Grad)',
    stage: 'offered',
    updated: 'Aug 22, 10:05',
    appliedOn: 'Jul 29',
    nextStep: 'Respond by Sep 05',
  },
  {
    id: 'ap-4',
    company: 'Verity Cloud',
    logo: 'VC',
    role: 'Site Reliability Co-op',
    stage: 'applied',
    updated: 'Aug 21, 18:22',
    appliedOn: 'Aug 21',
    nextStep: 'Resume screening',
  },
  {
    id: 'ap-5',
    company: 'Clearpath Mobility',
    logo: 'CM',
    role: 'ML Research Intern',
    stage: 'applied',
    updated: 'Aug 20, 14:03',
    appliedOn: 'Aug 20',
    nextStep: 'Resume screening',
  },
  {
    id: 'ap-6',
    company: 'Ridgeline Capital',
    logo: 'RC',
    role: 'Quant Analyst Intern',
    stage: 'rejected',
    updated: 'Aug 18, 08:55',
    appliedOn: 'Aug 02',
    nextStep: 'Aptitude cutoff not met',
  },
  {
    id: 'ap-7',
    company: 'Lumen Robotics',
    logo: 'LR',
    role: 'Embedded Systems Intern',
    stage: 'interview',
    updated: 'Aug 25, 12:30',
    appliedOn: 'Aug 05',
    nextStep: 'Hardware task review · Aug 27',
  },
  {
    id: 'ap-8',
    company: 'Silverbrook Studio',
    logo: 'SS',
    role: 'Product Design Intern',
    stage: 'shortlisted',
    updated: 'Aug 19, 11:11',
    appliedOn: 'Aug 09',
    nextStep: 'Portfolio walkthrough pending',
  },
]

export const skillRadar = [
  { skill: 'Programming', technical: 88, soft: 0 },
  { skill: 'Data & SQL', technical: 74, soft: 0 },
  { skill: 'Systems', technical: 62, soft: 0 },
  { skill: 'Cloud & DevOps', technical: 48, soft: 0 },
  { skill: 'Communication', technical: 0, soft: 81 },
  { skill: 'Teamwork', technical: 0, soft: 90 },
  { skill: 'Ownership', technical: 0, soft: 72 },
  { skill: 'Problem Framing', technical: 0, soft: 66 },
]

export const radarSeries = [
  { axis: 'Programming', score: 88 },
  { axis: 'Data & SQL', score: 74 },
  { axis: 'Systems', score: 62 },
  { axis: 'Cloud/DevOps', score: 48 },
  { axis: 'Communication', score: 81 },
  { axis: 'Teamwork', score: 90 },
  { axis: 'Ownership', score: 72 },
  { axis: 'Problem Framing', score: 66 },
]

export const strengths = [
  { label: 'Python', level: 'Advanced' },
  { label: 'SQL & Modelling', level: 'Advanced' },
  { label: 'Team Collaboration', level: 'Advanced' },
  { label: 'Data Structures', level: 'Strong' },
  { label: 'Written Communication', level: 'Strong' },
  { label: 'Git Workflow', level: 'Strong' },
]

export const gaps = [
  {
    label: 'Kubernetes & Containers',
    severity: 'High' as const,
    note: 'Blocks 4 of your 6 saved platform roles.',
    action: 'CNCF fundamentals track · 12 hrs',
  },
  {
    label: 'System Design',
    severity: 'High' as const,
    note: 'Common in second-round interviews for backend roles.',
    action: 'Design primer + 3 mock rounds',
  },
  {
    label: 'Cloud (AWS core services)',
    severity: 'Medium' as const,
    note: 'Requested by 58% of matched postings.',
    action: 'Hands-on lab: VPC, S3, IAM · 8 hrs',
  },
  {
    label: 'Structured Interviewing',
    severity: 'Low' as const,
    note: 'Rating dipped on behavioural self-evaluation.',
    action: 'Book a mentor mock · 45 min',
  },
]

export const recommendedTracks = [
  {
    role: 'Data Engineer',
    industry: 'Analytics & Fintech',
    fit: 92,
    why: 'Python + SQL depth aligns with pipeline-heavy roles.',
  },
  {
    role: 'Backend Engineer',
    industry: 'SaaS Platforms',
    fit: 84,
    why: 'Strong DS/algo scores; close the Kubernetes gap to reach 90+.',
  },
  {
    role: 'Analytics Engineer',
    industry: 'Healthcare & Retail',
    fit: 78,
    why: 'Modelling and communication ratings both above cohort median.',
  },
]

export const mentors = [
  {
    id: 'me-1',
    name: 'Divya Rao',
    initials: 'DR',
    title: 'Staff Data Engineer · Northwind Analytics',
    focus: ['Data Engineering', 'System Design'],
    slots: '2 slots this week',
    rating: 4.9,
  },
  {
    id: 'me-2',
    name: 'Sameer Khatri',
    initials: 'SK',
    title: 'Engineering Manager · Halberd Payments',
    focus: ['Backend', 'Interview Prep'],
    slots: '1 slot this week',
    rating: 4.8,
  },
  {
    id: 'me-3',
    name: 'Nadia Fernandes',
    initials: 'NF',
    title: 'Principal SRE · Verity Cloud',
    focus: ['Cloud', 'Kubernetes'],
    slots: 'Waitlist',
    rating: 4.7,
  },
]

export const readinessTrend = [
  { month: 'Mar', score: 41 },
  { month: 'Apr', score: 48 },
  { month: 'May', score: 55 },
  { month: 'Jun', score: 59 },
  { month: 'Jul', score: 68 },
  { month: 'Aug', score: 76 },
]
