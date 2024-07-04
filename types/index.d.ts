export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface SidebarLinkType {
  route: string;
  label: string;
  icon: string;
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface ParamsProps {
  params: { id: string };
}

export interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}
