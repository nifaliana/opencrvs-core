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
import { IndexedEvent, SearchEventsQuery } from '@client/utils/gateway'
import { IntlShape } from 'react-intl'

export const isBirthEvent = (req: IndexedEvent) => {
  return req.type === 'Birth'
}

export const isDeathEvent = (req: IndexedEvent) => {
  return req.type === 'Death'
}

export const isMarriageEvent = (reg: IndexedEvent) => {
  return reg.type === 'Marriage'
}

export const transformData = (
  data: SearchEventsQuery['searchEvents'],
  intl: IntlShape
) => {
  if (!data || !data.results) {
    return []
  }

  return data.results
    .filter((req): req is IndexedEvent => req !== null)
    .map((event: IndexedEvent) => {
      const status = event.status

      return {
        id: event.id,
        name: '@todo',
        dob: '@todo',
        dod: '@todo',
        dateOfEvent: '@todo',
        registrationNumber: '@todo',
        trackingId: '@todo',
        event: event.type,
        declarationStatus: status,
        contactNumber: '@todo',
        contactEmail: '@todo',
        duplicates: [],
        rejectionReasons: '@todo',
        rejectionComment: '@todo',
        createdAt: '@todo',
        assignment: event.assignedTo,
        modifiedAt: '@todo',
        operationHistories: []
      }
    })
}
