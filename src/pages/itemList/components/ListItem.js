import './ListItem.scss';
import ListItemContenst from './ListItemContenst.js';

const ListItem = ({ listItems, onLike, categoryPage }) => {
  return (
    <div className="listItem">
      {listItems.map(listItem => (
        <ListItemContenst
          id={listItem.id}
          name={listItem.name}
          price={listItem.price}
          categoey={listItem.category}
          itemImg={listItem.itemImg}
          hoverImg={listItem.hoverImg}
          age={listItem.age}
          like={listItem.like}
          key={listItem.id}
          onLike={onLike}
          categoryPage={categoryPage}
        />
      ))}
    </div>
  );
};

export default ListItem;
