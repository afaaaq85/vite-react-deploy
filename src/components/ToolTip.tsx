import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import React from "react";

export default function ToolTip({
  image,
  title,
  description,
  isDesktop,
  left,
  bottom,
  placement = "left",
}: any) {
  return (
    <Flex
      width={!isDesktop ? "90%" : "300px"}
      maxW="370px"
      left={left}
      bottom={bottom}
      zIndex="9999"
      //shadow={"lg"}
      boxSizing={"content-box"}
      height={!isDesktop ? "125px" : ""}
      transform={isDesktop ? (placement != "top" ? "translateY(42px) translateX(-312px)" : "translateY(-48px) translateX(-150px)") : ""}
      bg="white"
      position={!isDesktop ? "relative" : "absolute"}
      p={0}
      // mt="0px"
      _before={
        !isDesktop
          ? {
              content: '""',
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              height: "0",
              width: "0",
              borderLeft: "28px solid transparent",
              borderRight: "28px solid transparent",
              borderBottom: "15px solid white",
            }
          : ( placement != "top" ? {
              content: '""',
              position: "absolute",
              bottom: "50%",
              right: "-10px",
              transform: "translateY(50%)",
              height: "0",
              width: "0",
              zIndex: "9999",
              borderTop: "15px solid transparent",
              borderBottom: "15px solid transparent",
              borderLeft: "10px solid white",
            } : {
              content: '""',
              position: "absolute",
              bottom: "0%",
              left: "135px",
              transform: "translateY(50%)",
              height: "0",
              width: "0",
              zIndex: "9999",
              borderTop: "15px solid white",
              borderLeft: "28px solid transparent",
              borderRight: "28px solid transparent",
            })
      }
    >
      <Box width={"40%"}>
        <img src={image} className="max-h-full w-full" loading={"lazy"} alt="image" />
      </Box>
      <Box width={"60%"} color="#262626" pl={!isDesktop ? "10px" : "10px"} pr="10px">
        <Text
          //as="h3"
          fontSize={"17px"}
          pb="2px"
          //fontWeight={"normal"}
          pt={["12px", "10px"]}
        >
          {title}
        </Text>
        <Text
          fontSize={!isDesktop ? "14px" : "12px"}
          dangerouslySetInnerHTML={{ __html: description }}
        ></Text>
      </Box>
    </Flex>
  );
}
