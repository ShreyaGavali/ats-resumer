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
    {label: "My Document", href: "/document/mydocument", icon: AlignEndHorizontal},
    {label: "Shared Files", href: "/document/sharedfiles", icon: AlignEndHorizontal},
    {label: "Recent File", href: "/document/recentfile", icon: AlignEndHorizontal},
    {label: "Upload New", href: "/document/upload", icon: AlignEndHorizontal},
    {label: "Trash", href: "/document/trash", icon: AlignEndHorizontal},
    {label: "Cloud Storage", href: "/document/cloudstorage", icon: AlignEndHorizontal}
  ],
  seeting: [
    {label: "My Profile", href: "/seeting/myprofile", icon: AlignEndHorizontal},
    {label: "Edit Profile", href: "/seeting/editprofile", icon: AlignEndHorizontal},
    {label: "Logout", href: "/seeting/logout", icon: AlignEndHorizontal},
  ]
};
