import React,{createContext,useState} from 'react'
import SHOP_DATA from '../shop'


export const ProductsContext = createContext();//first create context and export 

const ProductsContextProvider =({ children })=>{ // keep children as argument (any children wrapped with provider will have access to shop_data)

const [products] = useState(SHOP_DATA);

return (
    <ProductsContext.Provider value={{products}}>
        {
            children
        }
    </ProductsContext.Provider>
)

}


export default ProductsContextProvider
