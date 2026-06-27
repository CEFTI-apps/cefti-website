export interface Stat {
  value: string;
  label: string;
  icon: 'book' | 'wrench' | 'calendar' | 'users';
  pending?: boolean;
}
