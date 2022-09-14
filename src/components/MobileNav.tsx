import { Stack, useColorModeValue } from "@chakra-ui/react";
import { INAVITEMS, NAV_ITEMS } from "./DesktopNav";
import { MobileNavItem } from "./MobileNavItem";

export const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem: INAVITEMS) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };