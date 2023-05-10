import React, { createContext, useEffect, useState } from 'react';
import Popup from '../popup/popup';
import FilterMenu from '../filter-menu/FilterMenu';
import ProductList from '../product-list/product-list';
import axios from 'axios';
import { FavouritesContext } from '../favourite-context/FavouritesContext';




export const Products = () => {
    // useState -> manutenção de um estado
    const [popupProperties, setPopupProperties] = useState({});
    const [data, setData] = useState([]);
    const [favourites, setFavourites] = useState([]);

    // useEffect -> reação
    useEffect(() => {
        axios.get('https://flag-2023.proxy.beeceptor.com/products')
        .then((res) => { setData(res.data)})
        .catch((err) => { console.log(err) })
        .finally(() => { console.log('finally') })
    }, []);

    return (
        <FavouritesContext.Provider value={{favourites, setFavourites}}>
            <Popup
                title={popupProperties.title}
                description={popupProperties.description}
                type={popupProperties.type}
                setPopupProperties={setPopupProperties}
            />
            <div style={{ display: 'flex' }}>
                <FilterMenu setData={setData} />
                <ProductList
                    setPopupProperties={setPopupProperties}
                    data={data}
                />
            </div>
        </FavouritesContext.Provider>
    );
};
