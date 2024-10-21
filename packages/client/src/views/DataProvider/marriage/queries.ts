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
import { Action, DownloadAction } from '@client/forms'

const GET_MARRIAGE_REGISTRATION_FOR_REVIEW = gql`
  query fetchMarriageRegistrationForReview($id: ID!) {
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

const GET_MARRIAGE_REGISTRATION_FOR_CERTIFICATE = gql`
  query fetchMarriageRegistrationForCertificate($id: ID!) {
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
export function getMarriageQueryMappings(action: Action) {
  switch (action) {
    case DownloadAction.LOAD_REVIEW_DECLARATION:
      return {
        query: GET_MARRIAGE_REGISTRATION_FOR_REVIEW,
        dataKey: 'fetchMarriageRegistration'
      }
    case DownloadAction.LOAD_CERTIFICATE_DECLARATION:
      return {
        query: GET_MARRIAGE_REGISTRATION_FOR_CERTIFICATE,
        dataKey: 'fetchMarriageRegistration'
      }
    default:
      return null
  }
}
