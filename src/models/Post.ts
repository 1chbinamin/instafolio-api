export interface BasePost {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Post extends BasePost {
  id: number;
}
