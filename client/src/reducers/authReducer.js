import axios from 'axios';
import { createSlice } from 'redux-starter-kit';

const auth = createSlice({
  slice: 'auth',
  initialState: {},
  reducers: {
    fetchUser: (state, action) => {
      state = action.payload || false;
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = auth;

export const _fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  const payload = res.data;
  dispatch(actions.fetchUser(payload));
};

export const _handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  const payload = res.data;
  dispatch(actions.fetchUser(payload));
};

// Extract and export each action creator by name
export const { fetchUser } = actions;
// Export the reducer, either as a default or named export
export default reducer;
