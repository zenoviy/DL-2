import React, { useEffect, useContext, Fragment } from 'react'
import { convertSearchToObject} from '../../business/appLinkWorkers'
import { currencyFormating } from '../../business/currencyConverter'
import { itemfinder } from '../../business/appLinkWorkers'
import { Link, useRouteMatch, useLocation, useParams } from 'react-router-dom'
import { linkNameCreator } from '../../business/appLinkWorkers'
import APP_CONSTANTS from '../../state/constants'
import { Context } from '../../state/appMainState'
import '../style.css'


const ShopSidePanelComponent = props => { 
    //console.log(props)


    if(!props.allProducts || !props.singleProduct ) return(<h1>Loading</h1>)
    return (
        <div className="side-panel">
            <p>Other Products</p>
            <ul>
                { props.allProducts.map(prod => {
                    const {
                        id,
                        name,
                        price,
                        image
                    } = prod;
                    return(
                        <li className={prod.id === props.singleProduct.id? "side-panel-card selected-image" : "side-panel-card"} key={id}>
                            <Link to={{
                                 pathname:  `${linkNameCreator(name)}?id=${id}`,
                                 query: { id: id }
                            }}>
                                <img src={APP_CONSTANTS.HOST + image[0]} />
                                <h4>{ name }</h4>
                                <h4>{ currencyFormating({price}) }</h4>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}



export default ShopSidePanelComponent