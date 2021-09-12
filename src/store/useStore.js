import create from 'zustand'
import {devtools} from 'zustand/middleware'

import { egyptianMealsSlice } from './egyptianMealsSlice'
import { italianMealsSlice } from './italianMealsSlice'
import { indianMealsSlice } from './indianMealsSlice'

const store = (set) => ({
    ...egyptianMealsSlice(set),
    ...italianMealsSlice(set),
    ...indianMealsSlice(set)
})
const useStore = create(devtools(store))

export default useStore