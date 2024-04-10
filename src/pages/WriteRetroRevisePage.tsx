import { MdPeopleAlt } from 'react-icons/md';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ManageTeamMembers from '@/components/writeRetro/revise/ManageTeamMembers';
import ReviseSetting from '@/components/writeRetro/revise/ReviseSetting';
import * as S from '@/styles/writeRetroStyles/ReviseLayout.style';

const WriteRetroReviseTeamPage = () => {
  return (
    <>
      <S.TitleBox>
        <div style={{ display: 'flex' }}>
          <MdPeopleAlt size="60px" color="#434343" />
          <S.TitleText>FistRetro</S.TitleText>
        </div>
      </S.TitleBox>
      {/* <SettingMenu></SettingMenu> */}
      <S.SettingMenuStyle>
        <Tabs colorScheme="brand" isFitted>
          <TabList margin="0 40px" fontSize={60}>
            <Tab>회고 설정</Tab>
            <Tab>팀원 관리</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ReviseSetting />
            </TabPanel>
            <TabPanel>
              <ManageTeamMembers />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </S.SettingMenuStyle>
    </>
  );
};

export default WriteRetroReviseTeamPage;
