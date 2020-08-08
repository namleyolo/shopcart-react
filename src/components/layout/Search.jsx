import React, {useEffect, useState} from "react" ;
import {Link, useLocation} from "react-router-dom";
import {apiProduct} from "../../config/api";
import axios from "axios"
import currencyFormat from "../../helper/currencyFormat";

const Search = () => {

    const [searchResults, setSearchResult] = useState([])
    const [isLoading, setLoading] = useState(true)

    const [currentPage , setCurrentPage] = useState(1)
    const [totalPage , setTotalPage] = useState(0)
    const [infoPage, setInfoPage] = useState({ pagesArr: []})

    const searchParams = useLocation().search
    let getParams = new URLSearchParams(searchParams)
    var nameParams =  getParams.get("name")
    console.log(nameParams)
    var startPage, endPage;
    const showPages = () => {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPage) {
            startPage = totalPage - 9;
            endPage = totalPage;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }

    }

    useEffect( () => {
        const getData = async () => {
            const result = await axios.get(apiProduct, {params: {name: nameParams, page: currentPage}})
            setSearchResult(result.data.data.docs);
            setTotalPage(Math.ceil(result.data.data.items.total /10));
            setLoading(false)

        }
        getData();

    },[nameParams, currentPage])

        // await setInfoPage({
        //     ...infoPage,
        //     totalPages: getData.data.data.items.total / 10,
        // })
        //
        // await showPages()
        // await setInfoPage({
        //     ...infoPage, totalPages: getData.data.data.items.total / 10,
        //     pagesArr: [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)
        // })
    return (
        <>
            {isLoading && <pre>LOADING...</pre>}
            <div className="products container">
                <div className="product-list card-deck">
                    {searchResults.length === 0 && <h1>Not found items</h1>}
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
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''} `}>
                        <Link className="page-link" to="">First</Link>
                    </li>
                    <li className={`page-item   ${currentPage === 1 ? 'disabled' : ''} `}>
                        <Link className="page-link" to="">Previous</Link>
                    </li>

                    {infoPage.pagesArr.map((page, index) =>
                        <li key={index} className={`page-item ${currentPage === page ? 'active' : ''} `}>
                            <Link className="page-link"
                                  onClick={() => setInfoPage({...infoPage, currentPage: page})}>{page} </Link>
                        </li>
                    )}

                    <li className={`page-item ${currentPage === totalPage ? 'disabled' : ''}`}>
                        <Link className="page-link" to="">Next</Link>
                    </li>
                    <li className={`page-item ${currentPage === totalPage ? 'disabled' : ''}`}>
                        <Link className="page-link" onClick={ () => setCurrentPage(totalPage)} >Last: {totalPage}</Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Search
