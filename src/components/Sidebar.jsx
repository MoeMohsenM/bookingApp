// Sidebar.jsx
import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiMail,
  FiBookOpen,
  FiSettings,
} from "react-icons/fi";

const navItems = [
  { label: "Home", icon: FiHome },
  { label: "Contact", icon: FiMail },
  { label: "Bookings", icon: FiBookOpen },
  { label: "Settings", icon: FiSettings },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <Flex minH="100vh">
      {/* Sidebar */}
      <Box
        bg="gray.800"
        color="white"
        transition="width 0.3s ease"
        width={collapsed ? "60px" : "200px"}
        px={collapsed ? 2 : 4}
        py={4}
      >
        {/* Toggle Button at the Top */}
        <IconButton
          aria-label="Toggle Sidebar"
          icon={<FiMenu />}
          size="sm"
          onClick={toggleSidebar}
          mb={6}
          bg="gray.700"
          _hover={{ bg: "gray.600" }}
        />

        {/* Navigation Icons */}
        <VStack spacing={4} align="stretch">
          {navItems.map(({ label, icon: Icon }) => (
            <Flex
              key={label}
              align="center"
              p={2}
              borderRadius="md"
              _hover={{ bg: "gray.700", cursor: "pointer" }}
              transition="all 0.2s"
            >
              <Tooltip
                label={collapsed ? label : ""}
                placement="right"
                hasArrow
              >
                <Box as={Icon} fontSize="20px" mr={collapsed ? 0 : 3} />
              </Tooltip>
              {!collapsed && <Text fontSize="sm">{label}</Text>}
            </Flex>
          ))}
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={8}>
        <Text fontSize="xl">Main Content Goes Here</Text>
      </Box>
    </Flex>
  );
}