import { useState } from 'react';

export default function ClearList(props) {
  const [text, setText] = useState('');

  const clearHours = () => {
    let result = text;
    const matches = [...text.matchAll(/ ?- ?(([\d\.]+)hour ?)?((\d+)min)?/g)];

    matches.map(match => result = result.replace(match[0], ''));

    return result;
  };

  return <div className="price-list">
    <div className="price-list__left">
      <textarea value={text} type="text" onChange={e => setText(e.target.value)}></textarea>
    </div>

    <div className="price-list__right">
      <textarea value={clearHours()} readOnly></textarea>
    </div>
  </div>;
}