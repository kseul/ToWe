import React, { useEffect, useState } from 'react';
import ListItem from './components/ListItem.js';
import './Best10.scss';

const Best10 = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch('/data/LIST_ITEMS.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setListItems(data);
      });
  }, []);

  return (
    <div className="listContainer">
      <div className="listTitle">Best 10</div>
      <ListItem listItems={listItems} />
    </div>
  );
};

export default Best10;
