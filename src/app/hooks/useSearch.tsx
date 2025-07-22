'use client'
import { useQuery } from "@tanstack/react-query";
import { Welcome } from "../types/search-types";

export function useSearch() {
    return useQuery<Welcome>({
        queryKey: ['v1', 'search?q=genre:"pop"&type=artist'],
    }).data
}