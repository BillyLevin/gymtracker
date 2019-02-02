import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Ingredient } from '../../types/Ingredient';

interface Props {
  ingredient: Ingredient;
  removeIngredient: (id: string) => void;
}

const IngredientComponent: React.FC<Props> = ({
  ingredient: { name, calories, protein, id },
  removeIngredient,
}) => (
  <tr className="ingredient">
    <td>{name}</td>
    <td>{calories}</td>
    <td>{protein}g</td>
    <td>
      <FaTimes onClick={() => removeIngredient(id)} />
    </td>
  </tr>
);

export default IngredientComponent;
