import React, {useEffect, useState} from "react" ;
import {Link, useLocation} from "react-router-dom";
import {apiProduct} from "../../config/api";
import axios from "axios"
import currencyFormat from "../../helper/currencyFormat";

const Search = () => {

    const [searchResults, setSearchResult] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [infoPage, setInfoPage] = useState({currentPage: 1, totalPages: 1, pagesArr: []})

    const searchParams = useLocation().search
    let getParams = new URLSearchParams(searchParams)
    const nameParams = getParams.get("name")

    var startPage, endPage;
    const showPages = () => {
        // more than 10 total pages so calculate start and end pages
        if (infoPage.currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (infoPage.currentPage + 4 >= infoPage.totalPages) {
            startPage = infoPage.totalPages - 9;
            endPage = infoPage.totalPages;
        } else {
            startPage = infoPage.currentPage - 5;
            endPage = infoPage.currentPage + 4;
        }

    }

    useEffect(async () => {
        const getData = await axios.get(apiProduct, {params: {name: nameParams, page: infoPage.currentPage}})
        setLoading(false)
        setSearchResult(getData.data.data.docs)
        await setInfoPage({
            ...infoPage,
            totalPages: getData.data.data.items.total / 10,
        })

        await showPages()
        await setInfoPage({
            ...infoPage, totalPages: getData.data.data.items.total / 10,
            pagesArr: [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)
        })
    }, [nameParams])
    return (
        <>
            {isLoading && <pre>LOADING...</pre>}
            <div className="products container">
                <div className="product-list card-deck">
                    {searchResults.length == 0 && <h1>Not found items</h1>}
                    {searchResults.map(value => {
                        return (
                            <div className="product-item card text-center" key={value._id}>
                                <h4>Name : {value.name}</h4>
                                <p>Giá bán : {currencyFormat().format(value.price)}   </p>
                            </div>
                        )
                    })}
                </div>

            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${infoPage.currentPage === 1 ? 'disabled' : ''} `}>
                        <Link className="page-link">First</Link>
                    </li>
                    <li className={`page-item   ${infoPage.currentPage === 1 ? 'disabled' : ''} `}>
                        <Link className="page-link">Previous</Link>
                    </li>

                    {infoPage.pagesArr.map((page, index) =>
                        <li key={index} className={`page-item ${infoPage.currentPage === page ? 'active' : ''} `}>
                            <Link className="page-link"
                                  onClick={() => setInfoPage({...infoPage, currentPage: page})}>{page} </Link>
                        </li>
                    )}

                    <li className={`page-item ${infoPage.currentPage === infoPage.totalPages ? 'disabled' : ''}`}>
                        <Link className="page-link">Next</Link>
                    </li>
                    <li className={`page-item ${infoPage.currentPage === infoPage.totalPages ? 'disabled' : ''}`}>
                        <Link className="page-link">Last: {infoPage.totalPages}</Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Search
