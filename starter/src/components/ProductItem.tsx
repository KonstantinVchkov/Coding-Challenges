import Image from "next/image";
import React from "react";
export interface IItem {
  id: string | number;
  description?: string;
  title: string;
  price: `${number}`;
  img: string;
  gender?: string;
}
const ProductItem: React.FC<IItem> = ({ title, price, img }) => {
  return (
    <div className="block2 m-3">
      <div className="block2-pic hov-img0">
        <img src={img} alt="IMG-PRODUCT" />

        <div className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
          viewDetails
        </div>
      </div>

      <div className="block2-txt flex-w flex-t p-t-14">
        <div className="block2-txt-child1 flex-col-l ">
          <div className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
            {title}
          </div>

          <span className="stext-105 cl3">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
