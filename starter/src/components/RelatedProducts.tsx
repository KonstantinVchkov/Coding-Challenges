import React from "react";
import ProductItem, { IItem } from "./ProductItem";
export interface IRelatedProduct {
  relProduct: IItem[];
}
const RelatedProducts: React.FC<IRelatedProduct> = ({ relProduct }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {relProduct.map((relatedProduct) => (
              <ProductItem key={relatedProduct.id} {...relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default RelatedProducts
