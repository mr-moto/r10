import {
  createRouter
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Layout from './NavigationLayout';

const Router = createRouter(() => ({
  layout: () => Layout,
  about: () => About,
  schedule: () => Schedule
}));

export default Router;