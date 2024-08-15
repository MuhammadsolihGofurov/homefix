import Head from "next/head";

const Seo = ({ children, title, description, keywords, image, url, type }) => {
  return (
    <Head>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      {/* Facebook meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Homefix"></meta>
      <title>{title}</title>

      {children}
    </Head>
  );
};

Seo.defaultProps = {
  title: "",
  description: "New Description",
  keywords: "New Keywords",
  image: "/images/banner.png",
  url: "https://homefixuz.com",
  type: "Homefix",
};

export default Seo;
