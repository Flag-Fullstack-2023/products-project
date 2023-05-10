import React, { useState } from 'react';
import Button from '../button/button';
import { products } from '../product-list/data';

function Filter({ name, type, values, setData }) {
    const [active, setActive] = useState(false);

    const rangeFilterData = () => {
        setActive(!active);
        !active
            ? setData(products.filter((el) => {
              if(values.length>1){
                return el.price >= values[0] && el.price < values[1]
              } else if (values.length===1) {
                return el.price>= values[0]
              }
            }))
            : setData(products);
    };

    if (type === 'range') {
        return (
            <Button
                preset={active ? 'primary' : 'danger'}
                onClick={rangeFilterData}
            >
                {name}€ 
            </Button>
        );
    }
}

export default Filter;
