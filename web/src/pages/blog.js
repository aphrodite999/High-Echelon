import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostPreviewList from "../components/Blog/BlogPostList";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import CallToAction from "../components/Repeating/CTA";

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          categories {
            _id
            title
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Mortgage Blog | MacAsh Home Loans"
        description="Got questions? Get expert advice and mortgage financing tips from the pros at MacAsh, your local, Chicago area independent mortgage broker."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-10 md:pt-12 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-12 md:mb-16">
            <h1>Blog</h1>
          </header>
          {postNodes && postNodes.length > 0 && (
            <BlogPostPreviewList nodes={postNodes} />
          )}
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export default ArchivePage;
