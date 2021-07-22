import Link from "next/link";
import styled from "styled-components";

type FavoriteCityButtonProps = {
  favoriteCity: string;
};

export const FavoriteCityButton: React.FC<FavoriteCityButtonProps> = ({
  favoriteCity,
}) => {
  return (
    <Link href={`/city/${favoriteCity}`}>
      <FavCityButton>⭐ {favoriteCity} ➝</FavCityButton>
    </Link>
  );
};

const FavCityButton = styled.button`
  padding: 10px;
  color: snow;
  background-color: #2c2c2c;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    font-weight: bolder;
    color: snow;
    background-color: #504d4df7;
    transition: 0.25s;
  }
`;
