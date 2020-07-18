import React, {useState, useEffect, createContext} from 'react';

export const PwaContext = createContext();

export const PwaProvider = (props) => {
    const [pwaData, setPwaData] = useState('');
    
    


    const loadData = () =>{
        fetch('https://example.com/wp-json/data')
        .then(response => response.json())
        .then(data =>  setPwaData(data) )  
    }

    useEffect(  () => {
        loadData()
    },[]);

    

    return (
        <PwaContext.Provider value={[pwaData, setPwaData]}>
            {props.children}
        </PwaContext.Provider>
    );
}