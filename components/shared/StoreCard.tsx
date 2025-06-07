// import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
// import NextLink from "next/link";
// import React from "react";

// const StoreCard = ({ title, img }: { title: string; img?: string }) => {
//   return (
//     <Link as={NextLink} href={`/store/${title}`}>
//       <Box role="group" cursor={"pointer"}>
//         <Flex h="125px" w={"200px"} pos={"relative"} my={2}>
//           <Image
//             src={img ? img : "/assets/catalogue/img.jpg"}
//             w={"full"}
//             h="full"
//             objectFit={"cover"}
//             borderRadius={"md"}
//             _groupHover={{
//               scale: 1.1,
//             }}
//           />
//           <Box
//             pos={"absolute"}
//             borderRadius={"md"}
//             h={"full"}
//             w={"full"}
//             backdropBlur={"8px"}
//             backgroundColor={"rgba(0, 0, 0, 0.2)"}
//             _hover={{
//               backgroundColor: "rgba(0, 0, 0, 0.4)",
//             }}
//           >
//             <Text
//               display={"flex"}
//               alignItems={"center"}
//               justifyContent={"center"}
//               textAlign={"center"}
//               textTransform={"capitalize"}
//               h={"full"}
//               w={"full"}
//               fontWeight={600}
//               color={"#fdfdfd"}
//             >
//               {title ? title : "Official Store"}
//             </Text>
//           </Box>
//         </Flex>
//       </Box>
//     </Link>
//   );
// };

// export default StoreCard;

import Link from "next/link";
import React from "react";

// Define the props type
interface StoreCardProps {
  title: string;
  img?: string;
}

const StoreCard = ({ title, img }: StoreCardProps) => {
  const imageUrl = img ? img : "/catalogue/img.jpg";

  return (
    <Link href={`/stores/${title}`} className="group cursor-pointer block">
      <div className="relative my-1 w-[200px] h-[125px] overflow-hidden rounded-md shadow-lg">
        <img
          src={imageUrl}
          alt={`${title} store`}
          className="h-full w-full rounded-md object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute overflow-hidden inset-0 h-full w-full rounded-md bg-black/20 transition-colors duration-200 ease-in-out hover:bg-black/40">
          <div className="flex h-full w-full items-center justify-center text-center capitalize text-[#fdfdfd] font-semibold">
            {title ? title : "Official Store"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
