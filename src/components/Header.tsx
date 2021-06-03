import { Flex, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

export function Header() {
  const { asPath } = useRouter()

  return (asPath === "/") ? (
    <Flex
      width="100vw"
      height="100px"
      justify="center"
      align="center"
    >
      <Image
        src="images/Logo.svg"
        width="186px"
        height="46px"
      />
    </Flex>
  ) : (
    <Flex
      width="100vw"
      height="100px"
      justify="center"
      align="center"
    >
      <Flex width={{ base: "100%", xl: "1440px" }} align="center" justify="center" position="relative">
        <Link
          href="http://localhost:3000"
          position="absolute"
          left={{ base: "5vw", xl: "140px" }}
        >
          <Image src="/images/backButton.svg" />
        </Link>
      <Image
        src="images/Logo.svg"
        width="186px"
        height="46px"
      />
      </Flex>
    </Flex>
  )
}