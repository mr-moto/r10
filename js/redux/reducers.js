import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import ConductReducer from './modules/conduct';
import SessionReducer from './modules/sessions';
import SpeakerReducer from './modules/speaker';
import FavesReducer from './modules/faves';

export default combineReducers({
  navigation: NavigationReducer,
  conduct: ConductReducer,
  session: SessionReducer,
  speaker: SpeakerReducer,
  favourites: FavesReducer,
});
