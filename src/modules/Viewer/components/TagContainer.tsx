import React from "react";

import { Box, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import ToolTip from "../../../components/ToolTip";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

export default function TagContainer({
  id,
  image,
  imageDark,
  position,
  isSelected,
  isDesktop,
  Part,
  onClick,
}: any) {
  return (
    <Box width={"auto"} height={"auto"} zIndex={999999}>
      <Image
        onClick={(e) => onClick(e, id)}
        position={"absolute"}
        left={isDesktop ? position.left.lg : position.left.sm}
        //top={"10%"}
        transform={isSelected ? "scale(1.1)" : "scale(0.9)"}
        scale={isSelected ? 3 : 1}
        bottom={isDesktop ? position.bottom.lg : position.bottom.sm}
        src={isSelected ? imageDark : image}
        width={"30px"}
        //height={"30px"}
        alt={"Segun Adebayo"}
        zIndex={1}
      />
    </Box>
  );
}
