import React, {useState} from 'react'
// import logo from './../../assets/images/logo.svg'
import {withRouter} from 'react-router-dom'

const Header = (props) => {
    const [keyword, setKeyword] = useState("")
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        const history = props.history
        history.push({pathname: "/search", search: `name=${keyword}`})
    }
    return (
        <div>
            <div id="header">
            <div className="container">
                <div className="row">
                <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
                    {/*<h1><a href="#"><img className="img-fluid"  alt="logo"/></a></h1>*/}
                </div>
                <div id="search" className="col-lg-6 col-md-6 col-sm-12">
                    <form className="form-inline" onSubmit={handleSubmitSearch}>
                        <input className="form-control mt-3" type="search" placeholder="Tìm kiếm" aria-label="Search"
                               value={keyword}
                               onChange={(e) => setKeyword(e.target.value)}/>
                        <button className="btn btn-danger mt-3" type="submit">Tìm kiếm</button>
                    </form>
                </div>
                <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
                    <a className="mt-4 mr-2" href="#">Giỏ hàng</a><span className="mt-3">8</span>
                </div>
                </div>
            </div>
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon" />
            </button>
            </div>
        </div>
    )
}

export default withRouter(Header);
