"use client";

import Image from "next/image";
import styled from "styled-components";
import editIcon from "/public/modal_edit.svg";
import deleteIcon from "/public/modal_delete.svg";


interface ContextMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  $right?: string;
  $top?: string;
}

export default function ContextMenu({ onEdit, onDelete, $right, $top }: ContextMenuProps) {
  return (
    <MenuBox $right={$right} $top={$top}>
      <MenuItem onClick={onEdit}>
        수정
        <span><Image src={editIcon} alt="edit" /></span>
      </MenuItem>
      <MenuItem onClick={onDelete}>
        삭제
        <span><Image src={deleteIcon} alt="delete" /></span>
      </MenuItem>
    </MenuBox>
  );
}

const MenuBox = styled.div<{ $right?: string; $top?: string }>`
  background: #2b2d31;
  color: #fff;
  border-radius: 8px;
  width: 158px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
  position: absolute;
  right: ${(props) => props.$right || '0'}; 
  top: ${(props) => props.$top || '0'};
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  color: #A5B4C5;
  padding: 13.5px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #383a40;
  }

  &:first-child:hover {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:last-child:hover {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
