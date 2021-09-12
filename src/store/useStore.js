import create from 'zustand'

import { egyptianMealsSlice } from './egyptianMealsSlice'
import { italianMealsSlice } from './italianMealsSlice'
import { indianMealsSlice } from './indianMealsSlice'

const useStore = create((set) => ({
    ...egyptianMealsSlice(set),
    ...italianMealsSlice(set),
    ...indianMealsSlice(set)
}))

export default useStore