import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex
        align="center"
    >
        <Box mr="4" textAlign="right" >
            <Text>Rod Andrade</Text>
            <Text color="gray.300" fontSize="small">
                rodrigoandradebcc@gmail.com
            </Text>
        </Box>

        <Avatar size="md" name="Rodrigo Andreade" src="https://avatars.githubusercontent.com/u/3511851?v=4"/>
    </Flex>
    );
}