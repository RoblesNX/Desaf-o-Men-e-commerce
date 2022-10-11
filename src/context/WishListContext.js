import { createContext, useContext, useEffect, useState } from "react";

export const WishListContext = createContext()

export const WishListProvider = ({ children }) => {

    const init = JSON.parse(localStorage.getItem('wishlist')) || []

    const [wishList, setWishList] = useState(init)

    const addToWishList = (item) => {
        setWishList([...wishList, item])
    }

    const isInWishList = (id) => {
        return wishList.some((item) => item.id === id)
    }

    const removeItemWishList = (id) => {
        setWishList(wishList.filter((item) => item.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishList))
    }, [wishList])

    return (
        <WishListContext.Provider value={{
            wishList,
            addToWishList,
            isInWishList,
            removeItemWishList,

        }}>
            {children}
        </WishListContext.Provider>)

}

export const useWishListContext = () => {
    return useContext(WishListContext)
}