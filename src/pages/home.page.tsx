import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Rocket from "../assets/images/rocket.png"
import Computer from "../assets/images/computer.png"


const Home = () => {
    return <Box h={"100%"} p={"50px"} bgGradient={"linear(to-br, rgba(255,255,255,1) 0%, rgba(195,202,255,1) 100%, rgba(7,255,227,1) 100%)"}>
        <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={"80px"} h={"100%"}>
            <Box>
                <Flex justifyContent={"center"}>
                    <Text fontSize={"60px"} fontWeight={"bold"} lineHeight={"80px"} color={"#FB7E21"}>코드</Text>
                    <Text fontSize={"60px"} fontWeight={"bold"} lineHeight={"80px"}>
                        에서
                    </Text>
                </Flex>
                <Text fontSize={"60px"} fontWeight={"bold"} lineHeight={"80px"}> 시작되는 팀빌딩</Text>
            </Box>
            <Flex flexDirection={"column"} alignItems={"center"}>
                <Text fontSize={"20px"}>다른 사람이 등록한 코드를 보고</Text>
                <Text fontSize={"20px"} > 나와 맞는 팀원을 찾아보세요</Text>
            </Flex>
            <Button p={"15px 50px"} color={"white"} fontSize={"18px"} fontWeight={"bold"} borderRadius={"30px"} bgGradient={"linear(to-r, rgba(255,135,43,1) 0%, rgba(147,176,255,1) 100%, rgba(8,254,228,1) 100%)"} >픽코드 시작하기</Button>
        </Flex>
        <Image src={Rocket} w={"300px"}
            transition='0.5s linear' position={"absolute"} bottom={90} right={90} />
        <Image src={Computer} w={"200px"}
            transition='0.5s linear'
            position={"absolute"} top={70} left={80} transform={'rotate(-30deg)'} />
    </Box >
}

export default Home;