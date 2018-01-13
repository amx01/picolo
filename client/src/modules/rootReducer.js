export const CONST_NAME = 'CONST_NAME'

const initialState = {
  
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST_NAME:
      return {
        ...state,
        isConst: true
      }

    default:
      return state
  }
}
