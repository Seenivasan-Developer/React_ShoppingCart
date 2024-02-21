import React from "react";

function Content({ProductDetails}){


    return<>
    {/* Product List */}
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            {ProductDetails.IsSaleBatch ?
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div> : ""}
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src={ProductDetails.ProductImgSrc} alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{ProductDetails.ProductName}</h5>
                                    {/* <!-- Product reviews--> */}
                                    {ProductDetails.IsFavIcon ? 
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div> : ""}
                                    {/* <!-- Product price--> */}
                                    {ProductDetails.ProductPriceMRP===""? <span>{ProductDetails.ProductPrice}</span> : <span><span className="text-muted text-decoration-line-through">{ProductDetails.ProductPriceMRP}</span> {ProductDetails.ProductPrice}</span>}
                                    
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{ProductDetails.BtnValue}</a></div>
                            </div>
                        </div>
                    </div>
                    
               
    </>
}

export default Content