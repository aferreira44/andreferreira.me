import React from "react";
import { graphql } from "gatsby";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { Global, css } from "@emotion/core";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../Layouts/Layout";
import { Helmet } from "react-helmet";

const { Title, Text } = Typography;
const shortcodes = { Link }; // Provide common components here

export default ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <Global
        styles={css`
          p {
            font-size: 21px;
            font-family: "Roboto Slab", serif;
            font-weight: 100;
            color: #292929;
          }
        `}
      />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Row justify="center">
        <Col span={12}>
          <Title>{post.frontmatter.title}</Title>
          <Text>
            <span>Published on {post.frontmatter.date}</span> -{" "}
            <span
              css={{
                fontWeight: "bold",
              }}
            >
              Time to read: {post.timeToRead} min.
            </span>
          </Text>
          <br />
          <br />
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Col>
      </Row>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
      timeToRead
    }
  }
`;
