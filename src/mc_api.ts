import axios from "axios"
import fs from "fs"
import dotenv from "dotenv"
import type { Recipe,ItemQueryResult } from "./types.js"

const apiKey = process.env.API_KEY

export const getItemIds = async():Promise<Array<Recipe>>=>{
  const headers = {"X-API-Key":apiKey}
  const path = `https://mc-api.bisai.dev/v1/recipes`
  const response = await axios.get(path,{headers})
  const result: Array<Recipe> = response.data.items
  return result
}

export const getRecipeById = async(itemId: string):Promise<Recipe>=>{
  const headers = {"X-API-Key":apiKey}
  const path = `https://mc-api.bisai.dev/v1/recipes/${itemId}`
  let result:Recipe

  try {
    const response = await axios.get(path, {headers})
    result = response.data
  } catch (error) {
    result = {id: itemId}
  }
  return result
}

export const getRecepies = async(ids:Array<string>):Promise<Array<Recipe>>=>{
  const promises = ids.map((id)=>getRecipeById(id))
  return await Promise.all(promises)
}

export const getItemTexture = async(itemId: string):Promise<ItemQueryResult>=>{
  const headers = {"X-API-Key":apiKey}
  const path = `https://mc-api.bisai.dev/v1/assets/items/${itemId}/texture.png`
  let success: boolean

  try {
    const response = await axios({url:path,method: "GET", responseType: 'arraybuffer',headers})
    fs.writeFileSync(`./src/assets/img/items/${itemId}.png`,response.data)
    success = true
  } catch (error) {
    success = false
  }
  return {id:itemId,success}
}

export const getItemTextures = async(ids:Array<string>):Promise<Array<ItemQueryResult>>=>{
  const promises = ids.map((id)=>getItemTexture(id))
  return await Promise.all(promises)
}