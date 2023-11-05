import Image from "next/image";
import React from "react";
export interface IRBlogs {
  img:string;
  title:string;
}
const RelatedBlogs: React.FC<IRBlogs> = ({img,title}) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        <li className="mb-4">
          <a className="wrao-pic-w">
            <Image src={img} alt="PRODUCT" width={130} height={100} className="img-fluid" />

            <div className="p-t-8 mt-1">
              <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">{title}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RelatedBlogs;