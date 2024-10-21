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

export const CREATE_BIRTH_REG_CORRECTION = gql`
  mutation createEventCorrection($id: ID!, $details: EventInput!) {
    createEventCorrection(id: $id, details: $details)
  }
`

export const APPROVE_BIRTH_REG_CORRECTION = gql`
  mutation approveEventCorrection($id: ID!, $details: EventInput!) {
    approveEventCorrection(id: $id, details: $details)
  }
`

export const REQUEST_REG_CORRECTION = gql`
  mutation requestEventCorrection($id: ID!, $details: CorrectionInput!) {
    requestEventCorrection(id: $id, details: $details)
  }
`

export const REJECT_REG_CORRECTION = gql`
  mutation rejectEventCorrection(
    $id: ID!
    $details: CorrectionRejectionInput!
  ) {
    rejectEventCorrection(id: $id, details: $details)
  }
`
