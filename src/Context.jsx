import { createContext, useState, useContext } from "react";
import places from "./data";
const AppContext = createContext();

export const AppProvider = ({children})=> {
    const [items, setItems] = useState(places)
    const [currentItem, setCurrentItem] = useState({
        name: '',
        img: '',
        places: [],
        desc: '',
    })

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (name) => {
        const theItem = items.find((item)=> item.name === name)
        setCurrentItem(theItem)
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
      <AppContext.Provider
        value={{ items, isModalOpen, currentItem, openModal, setIsModalOpen }}
      >
        {children}
      </AppContext.Provider>
    );


}

export const useGlobalContext = () => {
    return useContext(AppContext)
}