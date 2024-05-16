// @ts-expect-error virtual file
import { id } from '#virtual-id' 

const a = () => import('./a.js')
const b = () => import('./b.js')

export const shared = 'test'

console.log([a, b, id])
