import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      {/* unsplashから画像を利用する場合 */}
      {/* 「photos/」を削除、unsplashの前に「source.」をつけると画像が表示される。 */}
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  fonc-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
