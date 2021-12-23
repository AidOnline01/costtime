import ReactDOM from 'react-dom';
import ClearList from '@/entries/ClearList';
import './scss/index.scss';

const clearListEl = document.getElementById('clear-list');
ReactDOM.render(<ClearList />, clearListEl);