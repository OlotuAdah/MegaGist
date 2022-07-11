import { request, gql } from "graphql-request";

const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT_CONTENT;
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            excerpt
            slug
            title
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            author {
              bio
              id
              name
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlEndpoint, query);
  return results.postsConnection.edges;
};
