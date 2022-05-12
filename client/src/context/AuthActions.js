export const LoginStart = (userCredentials) => ({
  type: 'LOGIN_START',
})

export const LoginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
})

export const LoginFailure = () => ({
  type: 'LOGIN_FAILURE',
  payload: error,
})

export const Follow = () => ({
  type: 'FOLLOW',
  payload: userId,
})

export const Unfollow = () => ({
  type: 'UNFOLLOW',
  payload: userId,
})
