import axios from "axios";
import mapKeys from "lodash/mapKeys";
import { createSlice } from "redux-starter-kit";

const blogs = createSlice({
  slice: "blogs",
  initialState: {},
  reducers: {
    fetchBlog: (state, action) => {
      const blog = action.payload;
      state[blog._id] = blog;
    },
    fetchBlogs: (state, action) => {
      return { ...state, ...mapKeys(action.payload, "_id") };
    }
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = blogs;

export const _fetchBlog = id => async dispatch => {
  const res = await axios.get(`/api/blogs/${id}`);
  const payload = res.data;
  dispatch(actions.fetchBlog(payload));
};

export const _submitBlog = (values, history) => async dispatch => {
  const res = await axios.post("/api/blogs", values);
  history.push("/blogs");
  const payload = res.data;
  dispatch(actions.fetchBlog(payload));
};

export const _fetchBlogs = () => async dispatch => {
  const res = await axios.get("/api/blogs");
  const payload = res.data;
  dispatch(actions.fetchBlogs(payload));
};

// Extract and export each action creator by name
export const { fetchBlog, fetchBlogs } = actions;
// Export the reducer, either as a default or named export
export default reducer;
