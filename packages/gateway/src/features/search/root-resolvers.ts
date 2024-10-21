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
import { GQLResolver } from '@gateway/graphql/schema'

import { ApolloError } from 'apollo-server-hapi'

export class RateLimitError extends ApolloError {
  constructor(message: string) {
    super(message, 'DAILY_QUOTA_EXCEEDED')
    Object.defineProperty(this, 'name', { value: 'DailyQuotaExceeded' })
  }
}

// Complete definition of the Search response
interface IShardsResponse {
  total: number
  successful: number
  failed: number
  skipped: number
}

interface IExplanation {
  value: number
  description: string
  details: IExplanation[]
}

export interface ISearchResponse<T> {
  took: number
  timed_out: boolean
  _scroll_id?: string
  _shards: IShardsResponse
  hits: {
    total: { value: number; eq: string }
    max_score: number
    hits: Array<{
      _index: string
      _type: string
      _id: string
      _score: number
      _source: T
      _version?: number
      _explanation?: IExplanation
      fields?: any
      highlight?: any
      inner_hits?: any
      matched_queries?: string[]
      sort?: string[]
    }>
  }
  aggregations?: any
}

export const resolvers: GQLResolver = {
  Query: {
    async searchEvents(
      _,
      {
        userId,
        advancedSearchParameters,
        count,
        skip,
        sortColumn,
        sort = 'desc',
        sortBy
      },
      { headers: authHeader }
    ) {
      return {
        totalItems: 1,
        results: [
          /* @todo */
          {
            status: 'REGISTERED',
            id: '10a219cd-50a6-41b5-90b2-676949d3f192',
            type: 'birth',
            createdAt: '2021-08-10T10:00:00Z',
            createdAtLocation: 'cd3d7dec-6e86-48bc-a7a5-0dc66d442594',
            modifiedAt: '2021-08-10T10:00:00Z',
            assignedTo: {
              practitionerId: 'e4e731fc-c320-4f51-b6a3-91750ad17aa3',
              firstName: 'Riku',
              lastName: 'Rouvila',
              officeName: 'Helsinki office',
              avatarURL:
                'https://gravatar.com/avatar/9ebd6a2a7bbad60d44806ab340fe5efd?s=400&d=robohash&r=x'
            }
          }
        ]
      }
    }
  }
}
