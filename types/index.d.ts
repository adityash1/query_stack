export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface SidebarLinkType {
  route: string;
  label: string;
  icon: string;
}
