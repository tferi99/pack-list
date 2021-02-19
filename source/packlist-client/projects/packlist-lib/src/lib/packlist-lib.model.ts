export interface ICategory {
  id: number;
  name: string;
  order: number;
  owner?: IUser;
  items?: IItem[];
  categoryGroup: ICategoryGroup;
}

export interface ICategoryGroup  {
  id: number;
  name: string;
}

export interface IItem {
  id: number;
  name: string;
  order: number;
  category?: ICategory;
}



export interface IUser {
  id: number;
  username: string;
  password: string;
  admin: boolean;
  active: boolean;
  trips?: ITrip[];
  categories?: ICategory[];
  packings?: IPacking[];
}

export interface ITrip {
  id: number;
  name: string;
  owner: IUser;
  categories?: ICategory[];
  usedItems?: IItem[];
}

export interface IPacking {
  id: number;
  name: string;
  user?: IUser;
  trip?: ITrip;
}

export class IPackingItem {
  id: number;
  packed: boolean;
  packing?: IPacking;
  item?: IItem;
}
