import { Flex, Link, Text, LinkProps } from "@chakra-ui/react"

interface SwiperSlideContentProps extends LinkProps {
  continent_name: string;
  continent_definition: string;
  continent_banner: string
}

export function SwiperSlideContent({ continent_name, continent_definition, continent_banner, ...rest }: SwiperSlideContentProps) {
  return (
    <Link href="/continent" {...rest}>
      <Flex
        width={{ base:"100vw" ,xl: "1240px"}}
        height="450px"
        bgImage={ continent_banner }
        bgColor="rgba(0,0,0,0.35)"
        bgBlendMode="darken"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        align="center"
        justify="center"
      >
        <Flex direction="column" align="center" justify="center" width="100%" height="100%">
          <Text
            color="gray.100"
            fontWeight="700"
            fontSize={{ base:"2.75rem", md: "3rem" }}
            marginBottom="16px"
            textAlign="center"
          >
            { continent_name }
          </Text>
          <Text
            color="gray.100"
            fontWeight="700"
            fontSize={{ base:"1rem", md: "1.25rem", lg: "1.5rem" }}
            maxWidth="75%"
            textAlign="center"
          >
            { continent_definition }
          </Text>
        </Flex>
      </Flex>
    </Link>
  )
}