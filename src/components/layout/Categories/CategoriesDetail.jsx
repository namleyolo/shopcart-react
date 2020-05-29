import React, {useEffect, useState} from "react";
import axios from "axios";
import {apiCategories, apiImage} from "../../../config/api";
import currencyFormat from './../../../helper/currencyFormat'
import Menu from "../Menu";


export default function CategoriesDetail({match}) {
    const getCateId = match.params.id
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [err, setErr] = useState("")

    useEffect(() => {
        const fetchDataCategories = async () => {
            const result = await axios.get(apiCategories + getCateId + "/products"
            ).catch(err => {
                setErr("Not found")
            });
            setLoading(false)
            setProducts(result.data.data.docs)

        };
        fetchDataCategories();
    }, [getCateId]);

    return (
        <>{isLoading && <pre>LOADING...</pre>}
            {err && <pre>{err}</pre>}
            <Menu/>
            <div className="container ">
                <div className="row">
                    {products.map(value => (
                        <>
                            <div className="col-3">
                                <div className="rounded bg-primary m-1 p-2">
                                    <h2> Name : {value.name} </h2>
                                    <figure>
                                        <img src={apiImage + "/" + value.image}/>
                                    </figure>
                                    <p>Price: {currencyFormat().format(value.price)}</p>
                                </div>
                            </div>

                        </>

                    ))}
                </div>
            </div>
        </>

    )
}
