import { request, gql } from "graphql-request";

const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT_CONTENT;

////////////////////////
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

export const getRecentPosts = async () => {
  //Only get the selected fields from  each of the three matching post nodes
  const query = gql`
    query GetPostDetails(){
      posts(orderBy:createdAt_ASC last:3){
        title
        slug
        createdAt
        featuredImage{
          url
        }
      }
    }

  `;
  const results = await request(graphqlEndpoint, query);
  return results.posts;
};
export const getSimilarPosts = async (category, slug) => {
  //slug_not:$slug -> don't include the post with same slug as the one suppied, cos it's the post being viewed
  // include posts where category match supplied categories
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(where:{slug_not:$slug, AND: categories_some:{slug_in:$categories}} last:3) {
        title
        slug
        createdAt
        featuredImage {
          url
        }
      }
    }
  `;
  const results = await request(graphqlEndpoint, query);
  return results.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const results = await request(graphqlEndpoint, query);
  return results.categories;
};
