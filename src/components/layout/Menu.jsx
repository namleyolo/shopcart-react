import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {apiCategories} from "../../config/api";


export default function Menu() {
    const [categoriesData, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDataCategories = async () => {
            const result = await axios.get(apiCategories
            ).catch(err => {
                console.log(err)
            });
            setLoading(false)
            setData(result.data.data.docs)

        };
        fetchDataCategories();
    }, []);
    // debugger

    return (
        <>
            <div id="menu" className="collapse navbar-collapse">
                <ul>
                    {categoriesData.map(value => {
                        return (
                            <li className="menu-item" key={value._id}><Link
                                to={"/categories/" + value._id}> {value.name}</Link></li>
                        )
                    })}
                </ul>

            </div>
        </>
    )
}
