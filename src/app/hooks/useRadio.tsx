'use client'
import { useQuery } from "@tanstack/react-query";
import { Welcome } from "../types/radio-types";

export function useRadio() {
    return useQuery<Welcome>({ queryKey: ['v1', 'search?q=genre:"pop"&type=album'] }).data
}