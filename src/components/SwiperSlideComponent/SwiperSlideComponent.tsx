import { useContext } from "react";
import { Flex, Spinner } from "@chakra-ui/react"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/swiper-bundle.css"

import { SwiperSlideContent } from "./SwiperSlideContent";
import { ContinentsContext } from "../../ContinentsContext";

import styles from './styles.module.scss'

SwiperCore.use([Navigation, Pagination])

export function SwiperSlideComponent() {
  const { continents, isLoading } = useContext(ContinentsContext)

  if (isLoading) return <>
    <Flex
      justify="center"
      align="center"
      width="100%"
      height="240px"
    >
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
      <Swiper
        navigation={true}
        pagination={true}
        className={styles.sliderWrapper}
        onInit={(swiper) => {
          const newIndex = swiper.activeIndex.toString()
          localStorage.setItem('@world-trip/continentIndex', newIndex)
        }}
        onSlidePrevTransitionEnd={(swiper) => {
          const newIndex = swiper.activeIndex.toString()
          localStorage.setItem('@world-trip/continentIndex', newIndex)
        }}
        onSlideNextTransitionEnd={(swiper) => {
          const newIndex = swiper.activeIndex.toString()
          localStorage.setItem('@world-trip/continentIndex', newIndex)
        }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <SwiperSlideContent
              continent_name={continent.name}
              continent_definition={continent.definition}
              continent_banner={continent.banner_home}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}