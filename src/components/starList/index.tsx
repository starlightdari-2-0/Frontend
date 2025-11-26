import { StarItemData } from '../../types/starItem';
import { StarListItem } from '../starListItem';
import Image from "next/image";
import add from "/public/addStar_light.svg";
import { AddButton, AddLi, AddText, ListUL } from './styles';

export function AddStarItem({ onClick }: { onClick?: () => void }) {
    return (
        <AddLi>
            <AddButton onClick={onClick}><Image src={add} alt="" /></AddButton>
            <AddText onClick={onClick}>새로운 별자리 추가</AddText>
        </AddLi>
    );
}

export function StarList({ items, onItemClick }: { items: StarItemData[]; onItemClick?: (d: StarItemData) => void }) {
    return (
        <>
            <ListUL>
                {items.map((it) => (
                    <StarListItem key={it.id} data={it} onClick={onItemClick} />
                ))}
                <AddStarItem onClick={() => alert('새 별자리 추가 클릭')} />
            </ListUL>
        </>
    );
}
