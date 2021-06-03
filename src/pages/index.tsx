import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import { FasterAccessIcons } from "../components/FasterAccessIcons";
import { Header } from "../components/Header";
import { SwiperSlideComponent } from "../components/SwiperSlideComponent/SwiperSlideComponent"

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        align="center"
        width="100vw"
        height="auto"
        direction="column"
      >
        <Flex
          width={{ base: "100vw", xl: "1440px" }}
          height="335px"
          bgImage="url(/images/Background.jpg)"
          bgSize="cover"
          bgPosition="top"
          bgRepeat="no-repeat"
          justify="center"
        >
          <Flex
            width={{ base: "100vw", xl: "1440px" }}
            height="100%"
            justify="center"
            align="center"
            position="relative"
          >
            <Flex
              width={{ base: "85%", sm:"90%", md:"max-content", lg:"90%", xl:"100%" }}
              direction="column"
              height="100%"
              justify="center"
              marginLeft={{base: "0" ,xl: "140px"}}
            >
              <Text
                as="h1"
                color="gray.50"
                fontWeight="500"
                fontSize={{ base: "1.85rem" ,sm:"2rem" ,xl: "2.25rem" }}
              >
                5 Continentes, <br />infinitas possibilidades
              </Text>
              <Text
                color="gray.100"
                fontWeight="400"
                fontSize={{ base: "1rem", xl: "1.25rem" }}
                marginTop="20px"
              >
                Chegou a hora de tirar do papel a viagem que você <br />sempre sonhou.
              </Text>
            </Flex>
            <Image
              display={{ base: "none" ,lg: "inherit", xl: "inherit" }}
              marginLeft="205px"
              src="/images/Airplane.svg"
              height="270px"
              position="absolute"
              right={{ lg: "90", xl:"140"}}
              bottom="-8"
            />
          </Flex>
        </Flex>

        <Grid
          templateColumns={{ base: "auto auto", xl: "repeat(5, auto)" }}
          templateRows={{ base: "repeat(3, 1fr)" }}
          width={{ base: "95vw",sm:"85vw",md:"70vw" ,lg:"50vw",xl: "1160px" }}
          justifyItems="center"
          alignItems="center"
          height="145px"
          marginTop="114px"
        >
          <FasterAccessIcons
            imageName="cocktail"
            title="vida noturna"
          />
          <FasterAccessIcons
            imageName="surf"
            title="praia"
          />
          <FasterAccessIcons
            imageName="building"
            title="moderno"
          />
          <FasterAccessIcons
            imageName="museum"
            title="clássico"
          />
          <FasterAccessIcons
            imageName="earth"
            title="e mais..."
          />
        </Grid>

        <Box
          borderBottom="2px solid"
          borderColor="gray.600"
          width="90px"
          marginTop="80px"
        />
        <Text
          as="h2"
          fontSize={{ base:"2rem", md: "2.25rem" }}
          fontWeight="500"
          lineHeight="3.375rem"
          textAlign="center"
          marginY="52px"
        >
          Vamos nessa? <br />Então escolha seu continente
        </Text>
        
        <Flex
          width={{ base: "100vw" ,xl: "1240px"}}
          height="auto"
          justify="center"
          align="center"
          marginBottom="40px"
        >
          <SwiperSlideComponent />
        </Flex>
      </Flex>
    </>
  )
}