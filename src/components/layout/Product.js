import React , {useEffect, useState}from 'react'
import logo from './../../assets/images/product-12.png'
import axios from 'axios' ;

import {api}  from './../../config/api'
export default function Product() {
    const [ data, setData ] = useState([])
    const [ isLoading, setLoading ] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(api,
            ).catch(err => {
                    console.log(err)
            });
            setLoading(false)
            console.log(result.data.data)
            setData(result.data.data)

        };
        fetchData();
    }, []);
    return (
            <>
            {isLoading && <pre>LOADING...</pre>}
            <div className="products">
                <h3>Sản phẩm nổi bật</h3>
                <div className="product-list card-deck">

                    <div className="product-item card text-center">
                        <a href="#"><img src={logo} /></a>
                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                </div>
                <h3>Sản phẩm mới</h3>

                <div className="product-list card-deck">
                    <div className="product-item card text-center">
                    <a href="#"><img src={logo} /></a>
                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                    <div className="product-item card text-center">
                    <a href="#"><img src={logo} /></a>
                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                    <div className="product-item card text-center">
                    <a href="#"><img src={logo} /></a>                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                </div>
            </div>
            </>
    )
}
