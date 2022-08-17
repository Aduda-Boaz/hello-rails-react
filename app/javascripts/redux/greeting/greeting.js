const GET_GREETING = 'hello-rails-react/greeting/GET_GREETINGs';

const initialState = '';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export const getGreeting = (payload) => {
  return {
    type: GET_GREETING,
    payload
  };
}

export const getGreetingAsync = () => {
  return (dispatch) => {
    return fetch('v1/greeting')
      .then(response => response.json())
      .then(json => dispatch(getGreeting(json.greeting)));
  }
}