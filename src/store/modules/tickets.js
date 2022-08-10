const TEST   = 'TICKETS_TEST';


// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadTest() {
  return { type: TEST };
}


