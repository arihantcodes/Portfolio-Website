import { render } from 'preact';
import { App } from './app.jsx';
import './index.css';
import { inject } from '@vercel/analytics';

inject(); // Invoke inject() separately

render(<App />, document.getElementById('app'));
