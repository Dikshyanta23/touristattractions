import React from 'react'
import { useGlobalContext } from '../Context'
import Item from './Item'
import { nanoid } from 'nanoid'

const Board = () => {
    const {items, openModal} = useGlobalContext()
  return (
    <main>
      <h1>Tourist Attractions in Japan</h1>
      <section className='board'>
        {items.map((item)=> {
            return <Item key = {nanoid()} {...item}/>
        })}
      </section>
    </main>
  )
}

export default Board
