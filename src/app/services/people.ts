import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'


export interface People {
    id: string
    name: string
    gender: string
    birth_year: string,
    height : string,
    mass: string,
    eye_color: string,
    skin_color: string,
    hair_color: string,
    url: string,
}

interface ListResponse<T> {
    count: number
    results: T[]
}

// Define a service using a base URL and expected endpoints
export const swapiApi = createApi({
    reducerPath: 'swapiApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    tagTypes: ["People"],
    endpoints: (build) => ({
        listPeople: build.query<ListResponse<People>, number | void>({
            query: (page = 1) => `people?page=${page}`,
            providesTags: ["People"]
        }),
        getSinglePeople: build.query<People, string | void>({
            query: (id) => `people/${id}`
        })
    }),
})

export const getState = (state: RootState) => swapiApi.endpoints.listPeople.select()(state);

export const { useListPeopleQuery, useGetSinglePeopleQuery } = swapiApi

export default swapiApi;