import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import PageTitle from "../../components/PageTitle";
import RelatedBlogs, { IRBlogs } from "../../components/RelatedBlogs";
import { API_KEY } from "..";
import { IBlogItem } from "../../components/BlogItem";
import Image from "next/image";
export interface IblogDetail {
  blogDetail:IBlogItem,
  randomBlogs:IRBlogs[]
}
const BlogDetail: NextPage<IblogDetail> = ({blogDetail,randomBlogs}) => {
  return (
    <>
      <Head>
        <title>Store - title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={blogDetail.title}/>

      <section className="bg0 p-t-52 p-b-20">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                <div className="wrap-pic-w how-pos5-parent">
                  <Image src={`${blogDetail.img}`} alt="IMG-BLOG" width={100} height={70} layout="responsive"/>
                </div>

                <div className="p-t-32">
                  <span className="flex-w align-items-center flex-m stext-111 cl2 p-b-19">
                    <span className="flex-c-m mr-3 bor7 p-lr-15 trans-04">{blogDetail.category}</span>

                    <span>
                      <span className="cl4">By</span> {blogDetail.author}
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>{blogDetail.date}</span>
                  </span>

                  <h4 className="ltext-109 cl2 p-b-28">{blogDetail.title}</h4>

                  <p className="stext-117 cl6 p-b-26">{blogDetail.first_content}</p>

                  <p className="stext-117 cl6 p-b-26">{blogDetail.second_content}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
               {randomBlogs.map((blog) => (
                 <RelatedBlogs key={blog.title} {...blog}/>
               ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productId = query.id as string;
  const res = await fetch(`${API_KEY}/blogs`);
  const resRandom = await res.json();
  const blogDetailId = await fetch(`${API_KEY}/blogs/${productId}`);
  const blogDetail = await blogDetailId.json();
  const randomNo = Math.floor(Math.random() * (resRandom.length - 3));

  const resRelateProducts = await fetch(`${API_KEY}/blogs?_start=${randomNo}&_limit=3`);
  const randomBlogs = await resRelateProducts.json();
  return {
    props: {
      blogDetail,
      randomBlogs,
    },
  };
};
export default BlogDetail;
