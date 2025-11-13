'use client'
import { useQuery } from "@tanstack/react-query";
import { Welcome } from "../types/artists-types";

export function useArtists() {
    return useQuery<Welcome>({
        queryKey: ['v1', 'search?q=genre:"pop"&type=artist'],
    }).data
}