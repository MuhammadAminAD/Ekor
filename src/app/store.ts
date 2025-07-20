import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch