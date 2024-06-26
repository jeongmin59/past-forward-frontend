import { Flex, Text } from '@chakra-ui/react';
import Logo from '@/../public/PastForwardLogo.svg';
import * as S from '@/styles/layout/layout.style';
const LogoBox = () => {
  return (
    <>
      <S.LogoText href="/#">
        <Flex alignContent="center">
          <img src={Logo} style={{ minWidth: 'fit-content', padding: '2px 0' }} />
        </Flex>
        <Text margin="auto 0" minWidth="fit-content" display={{ base: 'none', md: 'block' }}>
          Past Forward
        </Text>
      </S.LogoText>
    </>
  );
};

export default LogoBox;
