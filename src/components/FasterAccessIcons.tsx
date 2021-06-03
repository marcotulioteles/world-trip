import { Flex, Icon, Image, Text, HStack } from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri"

type FasterAccessIconsProps = {
  imageName: string;
  title: string
}

export function FasterAccessIcons({ imageName, title }: FasterAccessIconsProps) {
  return (
    <>
      <Flex
        display={{ base: "none", xl: "inherit" }}
        direction="column"
        justify="center"
        align="center"
        width="158px"
      >
        <Flex width="100%" justify="center">
          <Image
            src={`/images/${imageName}.svg`}
            width="85px"
            height="85px"
          />
        </Flex>
        <Text
          fontSize="1.25rem"
          fontWeight="600"
          lineHeight="36px"
          marginTop="24px"
          textAlign="center"
        >
          {title}
        </Text>
      </Flex>

      <HStack 
        display={{ base: "", xl: "none" }}
        width="max-content"
      >
        <Icon as={RiCheckboxBlankCircleFill} color="yellow.400"/>
        <Text
          as="span"
          fontSize="1.25rem"
          fontWeight="600"
        >
          {title}
        </Text>
      </HStack>
    </>
  )
}