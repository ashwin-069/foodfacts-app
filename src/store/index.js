import { configureStore } from '@reduxjs/toolkit'
import savedReducer from './savedSlice'

const store = configureStore({
  reducer: {
    saved: savedReducer
  }
})

// Save to localStorage whenever state changes
store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem(
      'foodfacts',
      JSON.stringify(state.saved.items)
    )
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
})

export default store