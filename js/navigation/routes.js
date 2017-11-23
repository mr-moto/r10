import {
  createRouter
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session'
import Faves from '../scenes/Faves';
import Maps from '../scenes/Map';
import Layout from './NavigationLayout';

const Router = createRouter(() => ({
  layout: () => Layout,
  about: () => About,
  schedule: () => Schedule,
  session: () => Session,
  faves: () => Faves,
  map: () => Maps
}));

export default Router;