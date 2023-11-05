import React from "react";
import ProductItem, { IItem } from "./ProductItem";
import Link from "next/link";
export interface IfeaturedProducts {
  featuredProducts: IItem[];
}
const FeaturedProducts: React.FC<IfeaturedProducts> = ({
  featuredProducts,
}) => {
  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>

        <div className="tab01">
          <div className="tab-content p-t-50">
            <div
              className="tab-pane fade show active"
              id="best-seller"
              role="tabpanel"
            >
              <div className="wrap-slick2">
                <div className="d-flex">
                  {featuredProducts.map((product) => {
                    return (
                      <Link href={`/shop/${product.id}`} key={product.id}>
                        <a className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                          <ProductItem {...product} />
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
