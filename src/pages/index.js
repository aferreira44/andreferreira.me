import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import GitHubButton from "react-github-btn";
import { Helmet } from "react-helmet";
import { Row, Col, Divider, Typography } from "antd";
import Layout from "../components/Layouts/Layout";
import LatestArticles from "../components/Articles/LatestArticles";
// import MostPopular from "../components/Articles/MostPopular";
import Work from "../components/Portfolio/Work";
// import Talks from "../components/Portfolio/Talks";

const { Title, Text } = Typography;

export default ({ children }) => (
  <Layout>
    <Helmet>
      <title>André Ferreira : Full Stack Developer</title>
      <meta name="description" content="Full Stack Developer"></meta>
    </Helmet>
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data) => (
        <Row justify="center">
          <Col span={12}>
            <Row>
              <Col span={12}>
                <Title>
                  Hey, I'm André{" "}
                  <span role="img" aria-label="Waving Hand">
                    👋
                  </span>
                </Title>
                <Text
                  css={{
                    fontSize: "1.3rem",
                  }}
                >
                  I'm a software engineer creating{" "}
                  <Link to="/portfolio"> startups </Link>
                  and <Link to="/">writing</Link> about modern technologies and
                  other things.
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div css={{ marginTop: "30px" }}>
                  <GitHubButton
                    href="https://github.com/aferreira44"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Follow @aferreira44 on GitHub"
                  >
                    @aferreira44
                  </GitHubButton>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    />
    <Divider />
    <LatestArticles />
    <Divider />
    {/* <MostPopular />
    <Divider /> */}
    <Work />
    <Divider />
    {/* <Talks /> */}
    {children}
  </Layout>
);
