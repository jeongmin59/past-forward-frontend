import React from 'react';
import PlusIconImg from '@/assets/PlusIcon_light.png';
import * as S from '@/styles/createRetro/TeamRetroCreateButton.style';

const TeamRetroCreateButton: React.FC = () => {
  return (
    <>
      <S.CreateButtonBackground>
        <S.CenteredContainer>
          <S.PlusIcon src={PlusIconImg} />
          <S.Text color="white">Team Retrospect</S.Text>
          <S.Text color="rgba(175, 175, 175, 1)" weight="100">
            Kudos / Went Well / To Improve / Action Items
          </S.Text>
        </S.CenteredContainer>
      </S.CreateButtonBackground>
    </>
  );
};

export default TeamRetroCreateButton;
