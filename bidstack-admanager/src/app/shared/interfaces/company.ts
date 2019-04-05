export interface Company {
  company_name: string;
  logo: string;
  companies: {
    title: string;
    active: boolean;
  }[];
  active_games:string [];
}
