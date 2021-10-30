import ReactDOM from 'react-dom';
import PriceListEntry from '@/entries/PriceList';
import './scss/index.scss';

const priceListEl = document.getElementById('price-list');
ReactDOM.render(<PriceListEntry />, priceListEl);