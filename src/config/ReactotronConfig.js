import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '10.0.0.104' })
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
