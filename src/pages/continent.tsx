import { Text, Flex, Grid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { ContinentsContext } from "../ContinentsContext";
import { CityCard } from "../components/CityCard"

export default function Continent() {
  const { continents, isLoading, setContinentIndex, continentIndex, setIsLoading } = useContext(ContinentsContext)

  useEffect(() => {
    const newIndex = parseInt(localStorage.getItem("@world-trip/continentIndex"))
    setContinentIndex(newIndex)
  }, [continents[continentIndex]])

  if (isLoading) return <>
    <Header />
    <Flex width="100vw" height="100vh" justify="center" align="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.100"
        color="yellow.400"
        size="xl"
      />
    </Flex>
  </>

  return (
    <>
      <Header />
      <Flex width="100vw" height="auto" direction="column" align="center">
        <Flex
          width={{ base: "100vw", xl: "1440px" }}
          height="500px"
          bgImage={`url(${continents[continentIndex].banner_continent})`}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgColor="rgba(0,0,0,0.25)"
          bgBlendMode="darken"
          align="flex-end"
        >
          <Text
            color="white"
            fontSize="3rem"
            fontWeight="600"
            marginBottom="60px"
            marginLeft={{ base: "50px", xl: "140px" }}
          >
            {continents[continentIndex].name}
          </Text>
        </Flex>

        <Flex
          width={{ base: "90vw", xl: "1440px" }}
          marginTop="80px"
          direction={{ base: "column", xl: "row" }}
        >
          <Text
            width={{ base: "auto", xl: "600px" }}
            minHeight="211px"
            textAlign="justify"
            fontSize={{ base: "1.25rem", xl: "1.5rem" }}
            lineHeight="36px"
            marginLeft={{ base: "0", xl: "140px" }}
          >
            {continents[continentIndex].description}
          </Text>
          <Grid
            templateColumns="repeat(3, auto)"
            columnGap={{ base: "12px", xl: "42px" }}
            marginLeft={{ base: "0", xl: "140px" }}
            alignItems="center"
          >
            <Flex direction="column" align="center">
              <Text
                color="yellow.400"
                fontSize={{ base: "2.75rem", xl: "3rem" }}
                fontWeight="600"
                lineHeight="72px"
              >
                {continents[continentIndex].countries_amount}
              </Text>
              <Text
                fontSize={{ base: "1.125rem", xl: "1.5rem" }}
                fontWeight="600"
                lineHeight="36px"
              >
                países
              </Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
            >
              <Text
                color="yellow.400"
                fontSize={{ base: "2.75rem", xl: "3rem" }}
                fontWeight="600"
                lineHeight="72px"
              >
                {continents[continentIndex].languages_amount}
              </Text>
              <Text
                fontSize={{ base: "1.125rem", xl: "1.5rem" }}
                fontWeight="600"
                lineHeight="36px"
              >
                línguas
              </Text>
            </Flex>
            <Flex direction="column" align="center">
              <Text
                color="yellow.400"
                fontSize={{ base: "2.75rem", xl: "3rem" }}
                fontWeight="600"
                lineHeight="72px"
              >
                {continents[continentIndex].main_cities_amount}
              </Text>
              <Text
                fontSize={{ base: "1.125rem", xl: "1.5rem" }}
                fontWeight="600"
                lineHeight="36px"
              >
                cidades +100
              </Text>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          width={{ base: "auto", xl: "1160px" }}
          height="auto"
          direction="column"
          marginTop="80px"
          marginBottom="38px"
        >
          <Text fontSize="2.25rem" fontWeight="500">Cidades +100</Text>
          <Grid
            templateColumns={{ base: "", xl: "repeat(4, auto)" }}

            marginTop="40px"
            gap="45px"
          >
            {continents[continentIndex].cities.map(city => (
              <CityCard
                key={city.name}
                cityName={city.name}
                country={city.from}
                photo={city.city_image}
                flagIcon={city.flag}
              />
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  )
}