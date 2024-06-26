import React from 'react';
import PlusIconImg from '@/assets/PlusIcon_dark.png';
import * as S from '@/styles/createRetro/PersonalRetroCreateButton.style';

const PersonalRetroCreateButton: React.FC = () => {
  return (
    <>
      <S.CreateButtonBackground>
        <S.CenteredContainer>
          <S.PlusIcon src={PlusIconImg} />
          <S.Text color="rgba(17, 27, 71, 1)">Personal Retrospect</S.Text>
          <S.Text color="rgba(119, 119, 119, 1)" weight="100">
            Keep / Problem / To Improve / Action Items
          </S.Text>
        </S.CenteredContainer>
      </S.CreateButtonBackground>
    </>
  );
};

export default PersonalRetroCreateButton;
