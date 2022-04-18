/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const createCotiza = /* GraphQL */ `
  mutation CreateCotiza(
    $input: CreateCotizaInput!
    $condition: ModelCotizaConditionInput
  ) {
    createCotiza(input: $input, condition: $condition) {
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
export const updateCotiza = /* GraphQL */ `
  mutation UpdateCotiza(
    $input: UpdateCotizaInput!
    $condition: ModelCotizaConditionInput
  ) {
    updateCotiza(input: $input, condition: $condition) {
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
export const deleteCotiza = /* GraphQL */ `
  mutation DeleteCotiza(
    $input: DeleteCotizaInput!
    $condition: ModelCotizaConditionInput
  ) {
    deleteCotiza(input: $input, condition: $condition) {
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
