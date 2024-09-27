export interface Category {
    id: number,
    categoryId: number,
    name: string,
    description: string,
    state: boolean,
    remove?: boolean,
 }
 
 export interface CategoryBody {
    categoryId:number,
    name: string,
    description: string,
 }