import {configureStore} from '@reduxjs/toolkit'
import RecpSlice from './slice'
const store = configureStore({
    reducer:RecpSlice
})

export {store};