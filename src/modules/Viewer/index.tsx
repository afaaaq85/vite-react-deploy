import React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Table,
  Thead,
  Image,
  Tr,
  Stack,
  Container,
} from "@chakra-ui/react";
import Product_White_Image from "..//..//assets/Products/product_white.png";
import Product_White_Image_Lg from "..//..//assets/Products/product_white_lg.png";

import Product_Black_Image from "..//..//assets/Products/product_black.png";
import Product_Black_Image_Lg from "..//..//assets/Products/product_black_lg.png";

import { useMediaQuery } from "@chakra-ui/react";

import ProductOneTags from "./Viewer.Data";
import ToolTip from "../../components/ToolTip";

const Viewer = ({ props }: any) => {
  const [selectedTag, setSelectedTag] = React.useState(1);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1000px)");
  const [product, setProduct] = React.useState("dark");
  const handleSelect = (e: any, id: any) => {
    e.stopPropagation();
    setSelectedTag(id);
  };

  return (
    <Box
      //bg="white"
      color="white"
      h="100vh"
      w="100vw"
      display={"grid"}
      bg="white"
      placeItems={["", "center"]}
    >
      <Stack
        px={isLargerThan1280 ? "20px" : ""}
        maxWidth={"1000px"}
        bg={"white"}
        pb={["0px", "0px"]}
        width="100%"
        onClick={() => setSelectedTag(0)}
        height={isLargerThan1280 ? "100vh" : "100%"}
      >
        <Container
          //bg={"red"}
          width={"100%"}
          //overflow={"hidden"}
          //height={"80%"}
          display={"grid"}
          placeItems={"center"}
          height={isLargerThan1280 ? "100%" : "100vw"}
          position={"relative"}
          bg="red"
        >
          <Image
            position={"absolute"}
            onLoad={() => console.log("loaded")}
            onClick={() => setSelectedTag(0)}
            src={
              isLargerThan1280
                ? product !== "dark"
                  ? Product_White_Image_Lg
                  : Product_Black_Image_Lg
                : product !== "dark"
                ? Product_White_Image
                : Product_Black_Image
            }
            width={"100%"}
            maxW={"100%"}
            minWidth={"100%"}
            p={0}
            height={isLargerThan1280 ? "100vh" : "100%"}
            alt={"Segun Adebayo"}
            zIndex={0}
          />
          <Box zIndex={1} w={"100%"} height="100%">
            {ProductOneTags.map((tag) => {
              return (
                <tag.ImageComponent
                  key={tag.id}
                  id={tag.id}
                  isDesktop={isLargerThan1280}
                  isSelected={selectedTag === tag.id}
                  Part={tag.part}
                  image={tag.image}
                  imageDark={tag.imageDark}
                  onClick={handleSelect}
                  position={tag.position}
                />
              );
            })}

            {isLargerThan1280 &&
              ProductOneTags.map((tag) => {
                if (selectedTag === tag.id) {
                  return (
                    <ToolTip
                      key={tag.id}
                      left={tag.position.left}
                      //top={"10%"}
                      bottom={tag.position.bottom}
                      placement={tag.id === 2 ? "top" : "left"}
                      isDesktop={isLargerThan1280}
                      image={tag.part.image}
                      title={tag.part.title}
                      description={tag.part.description}
                    />
                  );
                }
              })}

            <div className="flex space-x-2 pointer-events-auto z-50 absolute bottom-0 right-0 pr-2 pb-2 ">
              <div
                className={
                  product !== "dark"
                    ? "grid place-content-center h-8 w-8 rounded-full"
                    : "grid place-content-center h-8 w-8 bg-transparent rounded-full cursor-pointer border-2 border-[#F2F2F2]"
                }
              >
                <div
                  onClick={() => setProduct("dark")}
                  className={"w-6 h-6 rounded-full cursor-pointer bg-[#262626]"}
                ></div>
              </div>

              <div
                className={
                  product !== "light"
                    ? "grid place-content-center h-8 w-8 rounded-full"
                    : "grid place-content-center h-8 w-8 bg-transparent rounded-full cursor-pointer border-2 border-[#262626]"
                }
              >
                <div
                  onClick={() => setProduct("light")}
                  className={"w-6 h-6 rounded-full cursor-pointer bg-[#F2F2F2]"}
                ></div>
              </div>
            </div>
          </Box>
        </Container>

        {!isLargerThan1280 && selectedTag && (
          <Box
            //bg={"brand.900"}
            width={"100%"}
            bg={"#eeedea"}
            //height={selectedTag !== 0 ? "100%" : "0px"}
            pb={["20px", "20px"]}
            //height={"20%"}
            display={"grid"}
            //pt={"10px"}
            mt={"0px !important"}
            pt={"15px"}
            //mt={"0px"}
            placeItems={"center"}
          >
            {ProductOneTags.map((tag) => {
              if (selectedTag === tag.id) {
                return (
                  <ToolTip
                    key={tag.id}
                    image={tag.part.image}
                    title={tag.part.title}
                    description={tag.part.description}
                  />
                );
              }
            })}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

Viewer.propTypes = {};

export default Viewer;
