export interface User {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  dob: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number;
  image_url: string;
}
