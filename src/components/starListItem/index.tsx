import { StarItemData } from '../../types/starItem';
import { ItemImg, ItemLi, ItemName } from './styles';
import animal from "/public/default_animal.svg";

export function StarListItem({ data, onClick }: { data: StarItemData; onClick?: (d: StarItemData) => void }) {
  return (
    <ItemLi>
      <ItemImg src={animal} alt="" width={40} height={40} />
      <ItemName>{data.name}</ItemName>
    </ItemLi>
  );
}