import React from 'react'
import { useGlobalContext } from '../Context'

const Item = ({name, desc, img, places}) => {
  const {openModal} = useGlobalContext()
  return (
    <article className="item">
      <img src={img} alt={name} className="item-img" />
      <div className="item-text">
        <h2>{name}</h2>
        <button className="item-btn" onClick={() => openModal(name)}>
          Explore
        </button>
      </div>
    </article>
  );
}

export default Item
