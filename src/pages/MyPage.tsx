import ImageUploader from '@/components/my/component/ImageUploader';
import * as S from '@/styles/my/myPage.style';
import { useState } from 'react';
import DeleteAccountButton from '@/components/my/DeleteAccountBox';
import PasswordBox from '@/components/my/PasswordBox';
import EmailBox from '@/components/my/EmailBox';

const MyPage = () => {
  const [image, setImage] = useState<string>('');
  return (
    <>
      <S.ProfileContainer>
        <div style={{ margin: '0 auto' }}>Profile</div>
      </S.ProfileContainer>

      <S.MyPageBGContainer>
        <S.MyPageContainer>
          <ImageUploader image={image} setImage={setImage} />
          <S.MainName>닉네임 </S.MainName>
          <S.DivingLine />
          <S.NicknameInput />
          <EmailBox />
          <PasswordBox />
          <DeleteAccountButton />
          <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
            <S.OrdinaryButton color="#C3CAD9">CANCEL</S.OrdinaryButton>
            <S.OrdinaryButton color="#C3CAD9">SAVE</S.OrdinaryButton>
          </div>
        </S.MyPageContainer>
      </S.MyPageBGContainer>
    </>
  );
};

export default MyPage;
