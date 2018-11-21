export class Category {
  constructor(
    public name: string,
    public imageSrc: string,
    public isDisplayOnMainPage?: boolean,
    public id?: number,
  ){}
}

export interface Categories {
  categories: Category[];
}
