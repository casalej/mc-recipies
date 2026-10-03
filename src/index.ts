import dotenv from "dotenv"
import * as MC from "./mc_api.js"
dotenv.config()

const items = [
  'acacia_boat',
  'acacia_button',
  'acacia_chest_boat',
  'acacia_door',
  'acacia_fence',
  'acacia_fence_gate',
  'acacia_hanging_sign',
  'acacia_planks',
  'car',
  'acacia_pressure_plate',
  'acacia_shelf',
  'acacia_sign',
  'acacia_slab',
  'acacia_stairs',
  'acacia_trapdoor',
  'acacia_wood',
  'activator_rail'
]

console.log(await MC.getRecepies(items))