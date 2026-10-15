'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  LayoutDashboard,
  Radar,
  Settings,
  UsersRound,
} from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { student } from '@/lib/data'

const primaryNav = [
  { title: 'Dashboard', href: '/', icon: LayoutDashboard },
  { title: 'Skill Profile', href: '/profile', icon: Radar },
  { title: 'Internships', href: '/opportunities?type=internship', icon: BriefcaseBusiness },
  { title: 'Placements', href: '/opportunities?type=fulltime', icon: Building2 },
  { title: 'Applications', href: '/applications', icon: ClipboardList, badge: '8' },
  { title: 'Mentorships', href: '/mentorships', icon: UsersRound },
]

const secondaryNav = [{ title: 'Settings', href: '/settings', icon: Settings }]

export function AppSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    const base = href.split('?')[0]
    if (base === '/') return pathname === '/'
    return pathname.startsWith(base)
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2.5 px-1 py-1.5">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary font-mono text-sm font-semibold text-primary-foreground">
            SB
          </div>
          <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
            <span className="truncate text-sm font-semibold">SkillBridge</span>
            <span className="truncate text-xs text-muted-foreground">
              Placement Portal
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigate</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {primaryNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={isActive(item.href)}
                    tooltip={item.title}
                    render={
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                  {item.badge ? (
                    <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={isActive(item.href)}
                    tooltip={item.title}
                    render={
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-2 group-data-[collapsible=icon]:border-transparent group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-0">
          <Avatar className="size-8 shrink-0">
            <AvatarFallback className="bg-brand-soft text-xs font-semibold text-accent-foreground">
              {student.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
            <span className="truncate text-sm font-medium">{student.name}</span>
            <span className="truncate text-xs text-muted-foreground">
              Readiness {student.readiness}%
            </span>
          </div>
          <Badge
            variant="secondary"
            className="ml-auto shrink-0 font-mono group-data-[collapsible=icon]:hidden"
          >
            &apos;27
          </Badge>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
