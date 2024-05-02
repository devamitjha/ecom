import React from 'react';
import { Link } from "react-router-dom";
function Category() {
  return (
    <>
      <div className="page-title wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i className="fa fa-user-md bg-grey"></i> Health <small className="hidden-xs-down hidden-sm-down">Nulla felis eros, varius sit amet volutpat non. </small></h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item">Category</li>
                            <li className="breadcrumb-item active">Fashion</li>
                        </ol>
                    </div>                
                </div>
            </div>
        </div>
        <section className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="portfolio row">
                                <div className="col-lg-4 col-sm-6 col-12 pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <Link to="/post/single" title="">
                                                <img src="/upload/menu_01.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="bg-grey"><Link to="/category/fashion" title="">Spa</Link></span>
                                            <h4><Link to="/post/single" title="">What is your favorite leather color</Link></h4>
                                            <small><Link to="/author/author" title="">By: Jessica</Link></small>
                                            <small>21 July, 2017</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-12 pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <Link to="/post/single" title="">
                                                <img src="/upload/menu_02.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="bg-grey"><Link to="/category/fashion" title="">Beauty</Link></span>
                                            <h4><Link to="/post/single" title="">This year green glasses trend</Link></h4>
                                            <small><Link to="/author/author" title="">By: Jenny</Link></small>
                                            <small>19 July, 2017</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-12 pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <Link to="/post/single" title="">
                                                <img src="/upload/menu_03.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="bg-grey"><Link to="/category/fashion" title="">Spa</Link></span>
                                            <h4><Link to="/post/single" title="">Put on a hat for a better look</Link></h4>
                                            <small><Link to="/author/author" title="">By: Amanda</Link></small>
                                            <small>18 July, 2017</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-12 pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <Link to="/post/single" title="">
                                                <img src="/upload/menu_04.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="bg-grey"><Link to="/category/fashion" title="">Beauty</Link></span>
                                            <h4><Link to="/post/single" title="">We have been talking about one of the pioneers of male fashion</Link></h4>
                                            <small><Link to="/author/author" title="">By: Jessica</Link></small>
                                            <small>16 July, 2017</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-12 pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <Link to="/post/single" title="">
                                                <img src="/upload/menu_22.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="bg-grey"><Link to="/category/fashion" title="">Spa</Link></span>
                                            <h4><Link to="/post/single" title="">Things to watch out for when choosing sunglasses</Link></h4>
                                            <small><Link to="/author/author" title="">By: Jenny</Link></small>
                                            <small>14 July, 2017</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-12 pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <Link to="/post/single" title="">
                                                <img src="/upload/menu_23.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="bg-grey"><Link to="/category/fashion" title="">Spa</Link></span>
                                            <h4><Link to="/post/single" title="">A makeup made with honey and wax for your body</Link></h4>
                                            <small><Link to="/author/author" title="">By: Amanda</Link></small>
                                            <small>13 July, 2017</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-12 pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <Link to="/post/single" title="">
                                                <img src="/upload/menu_24.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="bg-grey"><Link to="/category/fashion" title="">Spa</Link></span>
                                            <h4><Link to="/post/single" title="">Fabulous treatment methods of nature</Link></h4>
                                            <small><Link to="/author/author" title="">By: Martines</Link></small>
                                            <small>12 July, 2017</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-12 pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <Link to="/post/single" title="">
                                                <img src="/upload/menu_25.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="bg-grey"><Link to="/category/fashion" title="">Beauty</Link></span>
                                            <h4><Link to="/post/single" title="">Shake your soap and candle-smelling body</Link></h4>
                                            <small><Link to="/author/author" title="">By: Amanda</Link></small>
                                            <small>11 July, 2017</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-12 pitem item-w1 item-h1">
                                    <div className="blog-box">
                                        <div className="post-media">
                                            <Link to="/post/single" title="">
                                                <img src="/upload/menu_26.jpg" alt="" className="img-fluid"/>
                                                <div className="hovereffect">
                                                    <span></span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="bg-grey"><Link to="/category/fashion" title="">Spa</Link></span>
                                            <h4><Link to="/post/single" title="">Experience a unique experience in candlelight</Link></h4>
                                            <small><Link to="/author/author" title="">By: Amanda</Link></small>
                                            <small>11 July, 2017</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Category