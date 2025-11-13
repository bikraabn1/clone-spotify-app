'use client'
import { useQuery } from "@tanstack/react-query";

export function useSearch(query : string) {
    return useQuery({
        queryKey: ['v1', `search?q=${query}&type=track`],
        enabled: !!query
    }).data
}