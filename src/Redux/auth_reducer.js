const SET_USER = 'SET_USER';

const initialState = {
  email: false,
  password: false,
  rememberMe : false
}

const auth_reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER :
      return{
        ...state,
        ...action.payload
      }
    default :
      return state

  }
}

export const setAuthUserData = ({type: SET_USER, payload: {email, password, rememberMe}});


export default auth_reducer;