import { render } from 'preact';
import { App } from './components/App';
import './index.css';

const element = document.getElementById('root');
if (!element) throw new Error('nope');

render(<App />, element);
