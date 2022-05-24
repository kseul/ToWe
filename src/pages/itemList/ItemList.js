import React, { useEffect, useState } from 'react';
import ProductCategory from './components/ProductCategory.js';
import ListItem from './components/ListItem.js';
import LitsFilter from './components/ListFilter.js';
import './ItemList.scss';

const ItemList = () => {
  const [listItems, setListItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/data/ListItems.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setListItems(data);
      });
  }, []);

  const filter = categoey => {
    setFilterCategory(categoey);
  };
  const categoeyFilter = listItems.filter(listItem =>
    listItem.categoey.includes(filterCategory)
  );

  return (
    <div>
      <div className="listContainer">
        <div className="listTitle">전체상품</div>
        <ProductCategory filter={filter} />
        <LitsFilter />
        <ListItem listItems={categoeyFilter} />
      </div>
    </div>
  );
};

export default ItemList;
