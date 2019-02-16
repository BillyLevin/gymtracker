import { ingredientSchema } from '@gym-tracker/common';
import { Field, Formik } from 'formik';
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { IngredientWithoutId } from '../../types/Ingredient';
import InputGroup from '../InputGroup';
import './IngredientForm.scss';

interface FormValues {
  name: string;
  calories: number;
  protein: number;
}

interface Props {
  addIngredient: (ingredient: IngredientWithoutId) => void;
}

const IngredientForm: React.FC<Props> = ({ addIngredient }) => (
  <div className="ingredient-form-container">
    <h3 className="subheading">Add an Ingredient</h3>
    <Formik<FormValues>
      initialValues={{ name: '', calories: 0, protein: 0 }}
      onSubmit={(input, { resetForm }) => {
        addIngredient(input);
        resetForm();
      }}
      validationSchema={ingredientSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="ingredient-form">
          <Field name="name" placeholder="Ingredient name" label="Name" component={InputGroup} />
          <Field
            name="calories"
            placeholder="Number of calories"
            label="Calories"
            component={InputGroup}
            type="number"
          />
          <Field
            name="protein"
            placeholder="Amount of protein (g)"
            label="Protein (g)"
            component={InputGroup}
            type="number"
          />
          <button type="submit" disabled={isSubmitting}>
            <FaPlusCircle />
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default IngredientForm;
