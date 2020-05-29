import React , {useEffect, useState}from 'react'
import logo from '../../../assets/images/product-12.png'
import axios from 'axios' ;
import { Link } from 'react-router-dom'


import {apiProduct, api}  from '../../../config/api'
export default function Product() {
    const [ data, setData ] = useState([])
    const [ isLoading, setLoading ] = useState(true)
    const [ limit, setLimit ] = useState(3)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(apiProduct, {params: {limit : limit}}
            ).catch(err => {
                    console.log(err)
            });
            setLoading(false)
            // console.log(result.data.data)
            // setData(result.data.data)

        };
        fetchData();
    }, []);

    const convertUrlImage = (imageUrl) => {
        return imageUrl.replace("uploads/","")
    }

    return (
            <>
            {isLoading && <pre>LOADING...</pre>}
            <div className="products">
                <h3>Sản phẩm nổi bật</h3>
                <div className="product-list card-deck">
                    {data.map( value => (
                        <div className="product-item card text-center" key={value._id}>
                            <Link to={"/product/"+ value._id} name={value.detail} >
                                <img alt={value.name} src={ api + convertUrlImage(value.image)} />
                                <h4>{value.name}</h4>
                                <p>Giá Bán: <span>{value.price}</span></p>
                            </Link>
                        </div>
                    ) )}

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
