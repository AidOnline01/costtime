import { useState } from 'react';
import declinationOfNum from '@/utils/declinationOfNum';

const price = 20;
const roundTo = 1;
const currency = '$';

export default function PriceList(props) {
  const [text, setText] = useState('');
  const [price, setPrice] = useState(500);
  const [roundTo, setRoundTo] = useState(50);
  const [currency, setCurrency] = useState('грн');
  let totalPrice = 0;
  let totalHours = 0;
  let totalDays = 0;

  const convertTimeToPrice = () => {
    // hours + mins
    const matches = [...text.matchAll(/((\d+)hour\s?)?((\d+)min)?/g)];
    let result = text;
    for(let match of matches) {
      const hours = +match[2] || 0;
      const mins = +match[4] || 0;
      if(!hours && !mins) continue;

      const matchHours = hours + mins / 60;
      const matchPrice = Math.ceil(price * matchHours / roundTo) * roundTo;
      totalPrice += matchPrice;
      totalHours += matchHours;

      result = result.replace(match[0], matchPrice + currency);

      result = result.replace(hours + 'hours' + ' ' + mins + 'mins', matchHours);
    }

    totalDays = Math.ceil(totalHours / 4);

    return result;
  };

  return <div className="price-list">
    <div className="price-list__top">
      <div className="price-list__field">
        <label>Цена</label>
        <input placeholder="Цена" value={price} onChange={e => setPrice(+e.target.value)} />
      </div>

      <div className="price-list__field">
        <label>Валюта</label>
        <input placeholder="Валюта" value={currency} onChange={e => setCurrency(e.target.value)} />
      </div>

      <div className="price-list__field">
        <label>Округлять до</label>
        <input placeholder="Округлять до" value={roundTo} onChange={e => setRoundTo(+e.target.value)} />
      </div>
    </div>

    <div className="price-list__left">
      <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
    </div>

    <div className="price-list__right">
      <textarea value={convertTimeToPrice()} readOnly></textarea>
    </div>

    <div className="price-list__total">
      <b>Итого:</b> {totalPrice}{currency}, <b>Сроки:</b> {totalDays * 2} {declinationOfNum(totalDays * 2, ['день', 'дня', 'дней'])}
    </div>
  </div>;
}