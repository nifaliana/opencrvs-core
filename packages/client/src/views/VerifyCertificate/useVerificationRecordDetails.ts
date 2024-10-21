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

import { gql, useQuery } from '@apollo/client'
import { FetchRecordDetailsForVerificationQuery } from '@client/utils/gateway'
import { useParams } from 'react-router'

const FETCH_RECORD_DETAILS_FOR_VERIFICATION = gql`
  query fetchRecordDetailsForVerification($id: ID!) {
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

export const useVerificationRecordDetails = () => {
  const { declarationId } = useParams<{ declarationId: string }>()
  const {
    loading,
    error,
    data: queryData
  } = useQuery<FetchRecordDetailsForVerificationQuery>(
    FETCH_RECORD_DETAILS_FOR_VERIFICATION,
    {
      variables: { id: declarationId },
      fetchPolicy: 'network-only'
    }
  )
  const data = queryData?.fetchRecordDetailsForVerification

  return { loading, error, data }
}

export type RegistrationToBeVerified = NonNullable<
  FetchRecordDetailsForVerificationQuery['fetchRecordDetailsForVerification']
>
