import { combineReducers } from 'redux';

import user from './user.reducer';
import chats from './chat.reducer';

const rootReducer = combineReducers({
  user,
  chats
})

export default rootReducer