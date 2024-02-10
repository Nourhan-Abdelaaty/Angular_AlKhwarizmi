export interface TreeItem {
  id:string
  name:string
  parentId:string | null
  children:TreeItem[]
}


