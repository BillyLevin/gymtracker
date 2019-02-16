import gql from 'graphql-tag';

export const GET_MEALS_BY_DAY = gql`
  query GetMealsByDay($day: String!) {
    getMealsByDay(day: $day) {
      meals {
        id
        name
        totalCalories
        totalProtein
      }
    }
  }
`;
