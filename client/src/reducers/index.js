import { configureStore } from 'redux-starter-kit';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import blogsReducer from './blogsReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
    form: reduxForm,
    blogs: blogsReducer
  }
});
