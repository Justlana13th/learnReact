import React, {Component} from 'react';
import Counter from './Counter';


class CardProduct extends Component {

    



    render(){
        return(
            
                
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/5/3945508/3945508_97813602-6f70-48cc-9875-44815b3e97cf_300_300.jpg" alt=""/>
                    </div>
                    <div className="product-title">Daging Ayam berbumbu rasa original</div>
                    <div className="product-price">Rp 410.000</div>
                    <Counter/>
                </div>
        )
    }
}

export default CardProduct;