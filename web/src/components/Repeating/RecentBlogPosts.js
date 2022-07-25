import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogRecentPostGrid from "../Blog/BlogRecentPostGrid";
import GraphQLErrorList from "../Blog/graphql-error-list";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../../lib/helpers";

const RecentBlogPosts = ({ props, heading, className }) => {
  const data = useStaticQuery(graphql`
    {
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
  `);

  const errors = props;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <section className={` ${className || "mb-16 md:mb-32"}`}>
      <div className="container">
        {heading === false ? null : (
          <header className="mb-8 md:mb-14 text-center max-w-3xl mx-auto">
            <h2>What We’re Blogging About</h2>
            <p className="font-display italic text-xl md:text-2xl">
              Learn from our expertise—our knowledge is your knowledge.
            </p>
          </header>
        )}
        {postNodes && postNodes.length > 0 && (
          <BlogRecentPostGrid nodes={postNodes} />
        )}
      </div>
    </section>
  );
};

export default RecentBlogPosts;
