/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors located at https://github.com/opencrvs/opencrvs-core/blob/master/AUTHORS.
 */

import { gql } from '@apollo/client'
import { client } from '@client/utils/apolloClient'
import { FetchViewRecordByCompositionQuery } from '@client/utils/gateway'

export const FETCH_VIEW_RECORD_BY_COMPOSITION = gql`
  query fetchViewRecordByComposition($id: ID!) {
    fetchEvent(id: $id) {
      id
      actions {
        fields {
          fieldId
          value
        }
      }
    }
  }
`

async function fetchDuplicateDeclarations(id: string) {
  return (
    client &&
    client.query<FetchViewRecordByCompositionQuery>({
      query: FETCH_VIEW_RECORD_BY_COMPOSITION,
      variables: { id },
      fetchPolicy: 'network-only'
    })
  )
}

async function fetchDeclarationForViewing(id: string) {
  return (
    client &&
    client.query({
      query: FETCH_VIEW_RECORD_BY_COMPOSITION,
      variables: { id },
      fetchPolicy: 'cache-first'
    })
  )
}

export const ViewRecordQueries = {
  fetchDuplicateDeclarations,
  fetchDeclarationForViewing
}
