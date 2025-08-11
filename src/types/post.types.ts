export interface Post {
  _id: string;
  creator_id: string;
  name: string; 
  price: number;
  cover: string; 
  number_sales: number;
  _v: number;
  owner: {
    firstName: string;
    lastName: string;
  };
}
