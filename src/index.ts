import axios from "axios"

export interface Recipe 	{ 
  id: string,
  name: string, 
  recipes: number
}

const getItems = async():Promise<Array<Recipe>>=>{
  const path = `https://mc-api.bisai.dev/v1/recipes`
  const response = await axios.get(path)
  const result: Array<Recipe> = response.data.items
  return result
}


const  test = async ()=>{
  const recipes = await getItems()
  return recipes.map((r)=>r.id)

}

console.log(await test())