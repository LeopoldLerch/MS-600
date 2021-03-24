export interface ICsomWpProps {
  description: string;
  siteUrl: string;
}

export interface ICsomWpState {
  listTitles: string[];
  loadingLists: boolean;
  error: string;
}
