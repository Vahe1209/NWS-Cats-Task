import { CateActionTypes } from '../types/actionTypes'

const initialState = {
  cats: [],
  categories: [],
  categoric: 'random',
  page: 1,
}

export const catAPI = (state = initialState, action) => {
  switch (action.type) {
    case CateActionTypes.GET_DATA:
      return {
        ...state,
        categories: action.payload.categories,
        cats: action.payload.catesData,
        categoric: action.payload.categoric,
      }
    case CateActionTypes.GET_MORE_DATA:
      return {
        ...state,
        cats: [...state.cats, ...action.payload.catesData],
        page: action.payload.page,
      }
    default:
      return state
  }
}
