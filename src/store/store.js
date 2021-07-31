import { configureStore } from '@reduxjs/toolkit'
import CommonReducer from './reducers/Common.reducer'

export const store = configureStore({
    reducer: {
        common: CommonReducer,
    },
})