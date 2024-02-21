import React from "react";
import Navibar from "./Navibar";
import HeadSection from "./HeadSection";
import Footr from "./Footr";
import Content from "./Content";

function App() {
  const data = [
    {
      ProductImgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName: "Fancy Product",
      ProductPriceMRP: "",
      ProductPrice: "$40.00 - $80.00",
      BtnValue: "View Options",
      IsFavIcon: false,
      IsSaleBatch:false,
    },
    {
      ProductImgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName: "Special Item",
      ProductPriceMRP: "$20.00",
      ProductPrice: "$18.00",
      BtnValue: "Add to cart",
      IsFavIcon: true,
      IsSaleBatch:true,
    },
    {
      ProductImgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName: "Sale Item",
      ProductPriceMRP: "$50.00",
      ProductPrice: "$25.00",
      BtnValue: "Add to cart",
      IsFavIcon: false,
      IsSaleBatch:true,
    },
    {
      ProductImgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName: "Popular Item",
      ProductPriceMRP: "",
      ProductPrice: "$40.00",
      BtnValue: "Add to cart",
      IsFavIcon: true,
      IsSaleBatch:false,
    },
    {
      ProductImgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName: "Sale Item",
      ProductPriceMRP: "$50.00",
      ProductPrice: "$25.00",
      BtnValue: "Add to cart",
      IsFavIcon: false,
      IsSaleBatch:true,
    },
    {
      ProductImgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName: "Fancy Product",
      ProductPriceMRP: "",
      ProductPrice: "$120.00 - $280.00",
      BtnValue: "View Options",
      IsFavIcon: false,
      IsSaleBatch:false,
    },
    {
      ProductImgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName: "Special Item",
      ProductPriceMRP: "$20.00",
      ProductPrice: "$18.00",
      BtnValue: "Add to cart",
      IsFavIcon: true,
      IsSaleBatch:true,
    },
    {
      ProductImgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      ProductName: "Popular Item",
      ProductPriceMRP: "",
      ProductPrice: "$40.00",
      BtnValue: "Add to cart",
      IsFavIcon: true,
      IsSaleBatch:false,
    }
  ]
  
  return <>
    <Navibar count={"0"}/>
    <HeadSection />
    {/* <!-- Section--> */}
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            data.map((e, i) => {
             return <Content ProductDetails={e} key={i} />
            })
          }

        </div>
      </div>
    </section>

    <Footr />
  </>
}

export default App