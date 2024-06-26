import React, { useState } from 'react';
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import * as S from '@/styles/survey/GenderRadio.style';

interface Gender {
  onGenderChange: (age: string) => void;
}

const GenderRadio: React.FC<Gender> = ({ onGenderChange }) => {
  const [gender, setGender] = useState<string>('FEMALE');

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGender = event.target.value;
    setGender(newGender);
    onGenderChange(newGender);
  };

  return (
    <>
      <S.CustomContainer>
        <Text fontSize="lg">귀하의 성별은 어떻게 되십니까?</Text>
        <S.RadioContainer>
          <RadioGroup onChange={setGender} value={gender}>
            <Stack direction="row">
              <Radio id="survey_sex_1" colorScheme="brand" value="FEMALE" onChange={handleGenderChange}>
                여성
              </Radio>
              <Radio id="survey_sex_2" colorScheme="brand" value="MALE" onChange={handleGenderChange}>
                남성
              </Radio>
            </Stack>
          </RadioGroup>
        </S.RadioContainer>
      </S.CustomContainer>
    </>
  );
};

export default GenderRadio;
