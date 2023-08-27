import React from 'react'
import { useGlobalContext } from '../Context'
import {AiOutlineClose} from 'react-icons/ai';


const Modal = () => {
    const {currentItem, isModalOpen, setIsModalOpen} = useGlobalContext();
    
    const {name, desc, img, places} = currentItem
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <section className="modal">
        <div className="modal-header">
          <h2>{name}</h2>
          <button className="close-modal" type = 'button' onClick = {()=> setIsModalOpen(false)} ><AiOutlineClose /></button>
        </div>
        <img src={img} alt={name} className="modal-img" />
        <p>{desc}</p>
        <div className="places">
          <h4>Some iconic landmarks</h4>
          {places.map((place, index) => {
            return <p key={index}>{place} </p>;
          })}
        </div>
      </section>
    </div>
  );
}

export default Modal
