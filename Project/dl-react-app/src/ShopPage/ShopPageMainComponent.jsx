import React, { useEffect, useContext, Fragment } from 'react'
import { Link, useRouteMatch, useLocation , useParams} from 'react-router-dom'
import { linkNameCreator } from '../business/appLinkWorkers'
import { currencyFormating } from '../business/currencyConverter'
import APP_CONSTANTS from '../state/constants'
import { Context } from '../state/appMainState'
import './style.css'


const ShopPageComponent = props => {

    const context = useContext(Context);
    useEffect(() => {
        context.getAllShopData()
    }, [])
    return(
        <React.Fragment>
            <div className="app-container">
                <h1>Shop</h1>
                <ShopProductCard allProducts={context.shopData.allProducts} />
                
            </div>
        </React.Fragment>
    )
}



const ShopProductCard = props => {
    const {path, url} = useRouteMatch();

    const location = useLocation();
    const linkParams = useParams();
    console.log(path, url, location, linkParams);
    return(
        <Fragment>
            <ul className="shop-products-wrapper">
                    { 
                        props.allProducts 
                        ? props.allProducts.map((shopItem, i) => {
                            let price = currencyFormating({ price: shopItem.price });
                            return(
                                <li key={shopItem.id} className="product-card">
                                    <Link  to={{
                                        pathname:  `${url.endsWith('/') ? url.replace(/.$/,"") : url}/${linkNameCreator(shopItem.name)}?id=${shopItem.id}`,
                                        query: { id: shopItem.id }
                                    }}>
                                        <div  className="product-card-inner">
                                            <img src={ APP_CONSTANTS.HOST + shopItem.image[0]} alt={shopItem.name} />
                                            <h4>{shopItem.name}</h4>
                                            <h4 className="product-price">{ price }</h4>
                                        </div> 
                                    </Link>
                                </li>    
                            )
                        }) 
                        : 'Loadig...' 
                    } 
               
            </ul>
        </Fragment>
    )
}

export default ShopPageComponent