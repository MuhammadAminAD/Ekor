export interface FilterType {
  id: string;
  value: string;
  title: string;
}

export interface FilterMenu {
  id: string;
  name: string;
  types?: FilterType[];
  value?: FilterType[];
}

export interface FilterState {
  menus: FilterMenu[];
  selected: { [key: string]: string };
  loading: boolean;
}
