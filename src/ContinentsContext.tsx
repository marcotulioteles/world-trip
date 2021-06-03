import { useRouter } from "next/dist/client/router";
import { createContext, useState, ReactNode, useEffect,SetStateAction } from "react";
import { api } from "./services/api";

export interface CityData {
  city_image: string;
  name: string;
  from: string;
  flag: string
}

export interface ContinentData {
  name: string;
  id: number;
  definition: string;
  description: string;
  banner_home: string;
  banner_continent: string;
  countries_amount: number;
  languages_amount: number;
  main_cities_amount: number;
  cities: CityData[];
}

interface ContinentsContextData {
  continents: ContinentData[];
  isLoading: boolean
  setContinentIndex: React.Dispatch<SetStateAction<number>>
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
  continentIndex: number
}

interface ContinentsProviderProps {
  children: ReactNode;
}

export const ContinentsContext = createContext<ContinentsContextData>({} as ContinentsContextData);


export function ContinentsProvider({ children }: ContinentsProviderProps) {
  const [continents, setContinents] = useState<ContinentData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [continentIndex, setContinentIndex] = useState(2)

  useEffect(() => {
    async function loadContinents() {
      try {
        const response = await api.get<ContinentData[]>('continents')
        const data = response.data
        setContinents(data)
      } catch(error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
      loadContinents()
  }, [])

  return (
    <ContinentsContext.Provider value={{continents, isLoading, continentIndex, setContinentIndex, setIsLoading}}>
      {children}
    </ContinentsContext.Provider>
  )
}