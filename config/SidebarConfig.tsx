// /config/sidebarConfig.ts
import {
  AlignEndHorizontal,
  AlignHorizontalDistributeCenter,
  BookOpenText,
  ClipboardMinus,
  ClipboardPenLine,
  User,
  UserCog,
} from "lucide-react";

export const sidebarMenus = {
  home: [
    { label: "Analytics Overview", href: "/home/overview", icon: ClipboardMinus },
    { label: "Quick Start", href: "/home/quickstart", icon: AlignEndHorizontal },
    { label: "Recent Activity", href: "/home/recentactivity", icon: AlignEndHorizontal },
    { label: "Performance Matrix", href: "/home/performancemetrix", icon: AlignEndHorizontal },
    { label: "Reports", href: "/home/reports", icon: AlignEndHorizontal },
  ],
  users: [
    { label: "Overview", href: "/users/overview", icon: ClipboardMinus },
    { label: "Job Posting", href: "/users/jobposting", icon: ClipboardPenLine },
    { label: "Assessment", href: "/users/assessment", icon: BookOpenText },
    { label: "Interview Plan", href: "/users/interviewplan", icon: User },
    { label: "Recruiter", href: "/users/recruiter", icon: UserCog },
    {
      label: "Candidates",
      children: [
        { label: "Leads", href: "/users/candidates/leads" },
        { label: "Interviewing", href: "/users/candidates/interviewing" },
      ],
      icon: AlignHorizontalDistributeCenter,
    },
    { label: "Reporting", href: "/users/reporting", icon: AlignEndHorizontal },
  ],
  document: [
    {label: "My Document", href: "/documents/mydocument", icon: AlignEndHorizontal},
    {label: "Shared Files", href: "/documents/sharedfiles", icon: AlignEndHorizontal},
    {label: "Recent File", href: "/documents/recentfile", icon: AlignEndHorizontal},
    {label: "Upload New", href: "/documents/upload", icon: AlignEndHorizontal},
    {label: "Trash", href: "/documents/trash", icon: AlignEndHorizontal},
    {label: "Cloud Storage", href: "/documents/cloudstorage", icon: AlignEndHorizontal}
  ],
  seeting: [
    {label: "My Profile", href: "/settings/myprofile", icon: AlignEndHorizontal},
    {label: "Edit Profile", href: "/settings/editprofile", icon: AlignEndHorizontal},
    {label: "Logout", href: "/settings/logout", icon: AlignEndHorizontal},
  ]
};
