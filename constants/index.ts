import { SidebarLinkType } from "@/types";

export const themes = [
  {
    value: "light",
    label: "Light",
    icon: "/assets/icons/sun.svg",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "/assets/icons/moon.svg",
  },
  {
    value: "system",
    label: "System",
    icon: "/assets/icons/computer.svg",
  },
];

export const sidebarLinks: SidebarLinkType[] = [
  {
    route: "/",
    label: "Home",
    icon: "/assets/icons/home.svg",
  },
  {
    route: "/community",
    label: "Community",
    icon: "/assets/icons/users.svg",
  },
  {
    route: "/collection",
    label: "Collections",
    icon: "/assets/icons/star.svg",
  },
  {
    route: "/find-jobs",
    label: "Find Jobs",
    icon: "/assets/icons/suitcase.svg",
  },
  {
    route: "/tags",
    label: "Tags",
    icon: "/assets/icons/tag.svg",
  },
  {
    route: "/profile",
    label: "Profile",
    icon: "/assets/icons/user.svg",
  },
  {
    route: "/ask-question",
    label: "Ask a Question",
    icon: "/assets/icons/question.svg",
  },
];
