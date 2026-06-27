export interface Filiere {
  slug: string;
  code: string;
  cat: 'pro' | 'aca';
  section: string;
  cycle?: string;
  name: string;
  desc: string;
  objectifs: string[];
  debouches: string[];
  conditions?: string;
  image: string;
}
