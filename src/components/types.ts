export interface Bikecardprops {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

export interface Sendprops {
  sendData: Bikecardprops[];
  onFilterClick?: (filterCriteria: string) => void;
}
