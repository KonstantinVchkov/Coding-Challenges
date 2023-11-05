import React from "react";
import BlogItem, { IBlogItem } from "./BlogItem";
import Link from "next/link";
import Image from "next/image";

export interface IBlogArr {
  blogs: IBlogItem[];
}
const FeaturedBlogs: React.FC<IBlogArr> = ({ blogs }) => {
  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
        </div>

        <div className="row">
          {/* blog skeleton */}
          {blogs.map((blog) => {
            return (
              <Link key={blog.id} href={`/blog/${blog.id}`} passHref>
                <div className="col-sm-6 col-md-4 p-b-40">
                  <BlogItem
                  {...blog}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
