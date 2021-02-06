import React, { useEffect, useContext, Fragment, useState } from 'react'
import { convertSearchToObject} from '../../business/appLinkWorkers'
import { currencyFormating } from '../../business/currencyConverter'
import { pictureSourceDefine } from '../../business/appLinkWorkers'
import { itemfinder } from '../../business/appLinkWorkers'
import { Link, useRouteMatch, useLocation, useParams } from 'react-router-dom'
import APP_CONSTANTS from '../../state/constants'
import { Context } from '../../state/appMainState'

import ShopSidePanelComponent from './ShopSidePanel'
import '../style.css'


const ShopSinglePageComponent = props => {
        const [pictureState, setPictureState] = useState({
            currentPicture: null
        })
        const location = useLocation()
        const context = useContext(Context);
        const linkParams = useParams()
        const productIndex = location.query ? location.query.id : convertSearchToObject(location.search).id;
    
    useEffect( async () => {
        await context.getAllShopData()
        .then(res => {
            if(res.data){
                context.getShopSingleItem({ id : productIndex})
                setPictureState({
                    currentPicture: context.shopData.singleProduct? context.shopData.singleProduct.image[0] : null
                })   
            } 
        })
        return function doSmth(){
            console.log('unsubscribe')
        }
    }, [productIndex])


    useEffect(() => {
        if(context.shopData.singleProduct) {
            setPictureState({ 
                currentPicture: context.shopData.singleProduct.image[0] 
            });
        }
    }, [context.shopData.singleProduct ? context.shopData.singleProduct.id : productIndex])
    
    return(
        <React.Fragment>
            <div className="app-container ">
                <div className="shop-wrapper">
                    <ProductBody pictureState={pictureState} setPictureState={setPictureState} singleProduct={ context.shopData.singleProduct ? context.shopData.singleProduct : null } />
                    <ShopSidePanelComponent singleProduct={ context.shopData.singleProduct ? context.shopData.singleProduct : null } allProducts={ context.shopData.allProducts }/>
                </div>
            </div>
        </React.Fragment>
    )
}


const ProductBody = props => {
    if(!props.singleProduct) return (<div><h2>Loading...</h2></div>)
    const {
        id,
        name,
        title,
        image,
        price,
        details,
        detailDescription,
        shortDescription
    } = props.singleProduct;

    
    let mainImageCheckHyperlink = props.pictureState.currentPicture
    ? pictureSourceDefine(props.pictureState.currentPicture)
    : pictureSourceDefine(props.singleProduct.image[0]); 

    return(
        <div className="page-text-body">
            <div className="media-area">
                <div className="main-image">
                    <img src={mainImageCheckHyperlink
                        ? props.pictureState.currentPicture 
                        : APP_CONSTANTS.HOST + props.pictureState.currentPicture} />
                </div>
                <div className="gallery">
                    { image.map((image, index) => {
                        let checkHyperlink = pictureSourceDefine(image);
                        return(
                            <div key={index} className={
                                image === props.pictureState.currentPicture 
                                ? "gallery-image-wrapper selected-image" 
                                : "gallery-image-wrapper"} 
                            onClick={() => {props.setPictureState({
                                currentPicture: image
                            })}}>
                                <img src={checkHyperlink ? image :APP_CONSTANTS.HOST + image} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="text-area">
                <h1>{ name }</h1>
                <h3>{ title }</h3>
                <p>{ shortDescription }</p>
                <h4>{ currencyFormating({ price}) }</h4>
                <p>{ detailDescription }</p>
            </div>
        </div>
    )
}

export default ShopSinglePageComponent
