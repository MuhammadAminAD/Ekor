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

export interface FilterResponse {
  ok: boolean;
  data: {
    categories: FilterMenu[];
  };
}


export interface FilterSubCategory {
  id: string;
  title: string;
}

export interface FilterCategory {
  id: string;
  title: string;
  submenu: FilterSubCategory[];
}

export interface FilterCategoriesResponse {
  ok: boolean;
  data: {
    categories: FilterCategory[];
  };
}
