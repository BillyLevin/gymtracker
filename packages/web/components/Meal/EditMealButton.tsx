import Link from 'next/link';
import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Button from '../Button';

interface Props {
  id: string;
}

const EditMealButton: React.FC<Props> = ({ id }) => (
  <Link href={`/edit-meal/${id}`}>
    <Button theme="secondary" type="button">
      <FaPencilAlt className="edit-meal-button" />
    </Button>
  </Link>
);

export default EditMealButton;
