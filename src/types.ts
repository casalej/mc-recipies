
export interface Recipe { 
  id: string
  name?: string
  recipes?: number
}

export type ItemQueryResult = {
  id:string
  success:boolean
}