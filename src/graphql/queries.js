/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCotiza = /* GraphQL */ `
  query GetCotiza($id: ID!) {
    getCotiza(id: $id) {
      id
      name
      email
      phone
      testArea
      createdAt
      updatedAt
    }
  }
`;
export const listCotizas = /* GraphQL */ `
  query ListCotizas(
    $filter: ModelCotizaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCotizas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        testArea
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
