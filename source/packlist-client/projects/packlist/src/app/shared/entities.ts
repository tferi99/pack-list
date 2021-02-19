export class Category {
  id!: number;
  name!: string;
  order!: number;
  categoryGroup!: CategoryGroup;
}

export class CategoryGroup {
  id!: number;
  name!: string;
}

export class Item {
  id!: number;
  name!: string;
  order!: number;
  category!: Category;
}

export class Packing {
  id!: number;
  name!: string;
}

export class PackingItem {
  id!: number;
  packed!: boolean;
}

export class Trip {
  id!: number;
  name!: string;
}

/*export class User {
  id!: number;
  username!: string;
  password!: string;
  admin!: boolean;
  active!: boolean;
  trips?: Trip[];
  categories?: Category[];
  packings?: Packing[];
}*/

export class User {
  id: number;
  username: string;
  admin: boolean;
  active: boolean;
}

