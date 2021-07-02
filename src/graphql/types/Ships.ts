/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Ships
// ====================================================

export interface Ships_ships {
  __typename: "Ship";
  type: string | null;
  name: string | null;
  weight_kg: number | null;
  image: string | null;
}

export interface Ships {
  ships: (Ships_ships | null)[] | null;
}
