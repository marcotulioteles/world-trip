import { Flex, Image, Grid, Text } from "@chakra-ui/react"

interface CityCardProps {
  photo: string;
  cityName: string;
  country: string;
  flagIcon: string;
}

export function CityCard({
  photo,
  cityName,
  country,
  flagIcon
}: CityCardProps) {
  return (
    <Flex
      width="256px"
      height="280px"
      direction="column"
    >
      <Flex
        bgImage={`${photo}`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        width="100%"
        height="173px"
        borderRadius="4px 4px 0 0"
      />
      <Grid
        templateColumns="auto 1fr"
        height="auto"
        border="1px solid"
        borderColor="yellow.400"
        borderTop="none"
        borderRadius="0 0 4px 4px"
      >
        <Flex
          height="auto"
          justify="center"
          direction="column"
          marginLeft="24px"
        >
          <Text
            fontSize="20px"
            fontWeight="600"
            fontFamily="Barlow"
            lineHeight="25px"
          >
            {cityName}
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            fontFamily="Barlow"
            lineHeight="26px"
            marginTop="12px"
          >
            {country}
          </Text>
        </Flex>
        <Image
          justifySelf="end"
          src={flagIcon}
          width="30px"
          height="30px"
          marginY="38px"
          marginRight="24px"
        />
      </Grid>
    </Flex>
  )
}