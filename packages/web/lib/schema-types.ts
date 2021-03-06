/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateExercise
// ====================================================

export interface CreateExercise_createExercise_exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  userId: string;
}

export interface CreateExercise_createExercise_errors {
  path: string;
  message: string;
}

export interface CreateExercise_createExercise {
  exercise: CreateExercise_createExercise_exercise | null;
  errors: CreateExercise_createExercise_errors[];
}

export interface CreateExercise {
  createExercise: CreateExercise_createExercise;
}

export interface CreateExerciseVariables {
  input: CreateExerciseInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteExercise
// ====================================================

export interface DeleteExercise_deleteExercise {
  ok: boolean;
}

export interface DeleteExercise {
  deleteExercise: DeleteExercise_deleteExercise;
}

export interface DeleteExerciseVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateExercise
// ====================================================

export interface UpdateExercise_updateExercise_exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
}

export interface UpdateExercise_updateExercise_errors {
  path: string;
  message: string;
}

export interface UpdateExercise_updateExercise {
  exercise: UpdateExercise_updateExercise_exercise | null;
  errors: UpdateExercise_updateExercise_errors[];
}

export interface UpdateExercise {
  updateExercise: UpdateExercise_updateExercise;
}

export interface UpdateExerciseVariables {
  input: UpdateExerciseInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExercises
// ====================================================

export interface GetExercises_getExercises_exercises {
  id: string;
  name: string;
  reps: number;
  sets: number;
  userId: string;
}

export interface GetExercises_getExercises {
  exercises: GetExercises_getExercises_exercises[];
}

export interface GetExercises {
  getExercises: GetExercises_getExercises;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMeal
// ====================================================

export interface CreateMeal_createMeal_meal {
  id: string;
  name: string;
  totalCalories: number;
  totalProtein: number;
}

export interface CreateMeal_createMeal_errors {
  path: string;
  message: string;
}

export interface CreateMeal_createMeal {
  meal: CreateMeal_createMeal_meal | null;
  errors: CreateMeal_createMeal_errors[];
}

export interface CreateMeal {
  createMeal: CreateMeal_createMeal;
}

export interface CreateMealVariables {
  input: CreateMealInput;
  id?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveMealFromDay
// ====================================================

export interface RemoveMealFromDay_removeMealFromDay_errors {
  path: string;
  message: string;
}

export interface RemoveMealFromDay_removeMealFromDay {
  errors: RemoveMealFromDay_removeMealFromDay_errors[];
}

export interface RemoveMealFromDay {
  removeMealFromDay: RemoveMealFromDay_removeMealFromDay;
}

export interface RemoveMealFromDayVariables {
  input: UpdateMealDaysInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateMealDays
// ====================================================

export interface UpdateMealDays_updateMealDays_meal {
  id: string;
  name: string;
  totalCalories: number;
  totalProtein: number;
  days: string[];
}

export interface UpdateMealDays_updateMealDays_errors {
  path: string;
  message: string;
}

export interface UpdateMealDays_updateMealDays {
  meal: UpdateMealDays_updateMealDays_meal | null;
  errors: UpdateMealDays_updateMealDays_errors[];
}

export interface UpdateMealDays {
  updateMealDays: UpdateMealDays_updateMealDays;
}

export interface UpdateMealDaysVariables {
  input: UpdateMealDaysInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMealById
// ====================================================

export interface GetMealById_getMealById_meal_ingredients {
  id: string;
  name: string;
  calories: number;
  protein: number;
}

export interface GetMealById_getMealById_meal {
  id: string;
  name: string;
  totalCalories: number;
  totalProtein: number;
  days: string[];
  ingredients: GetMealById_getMealById_meal_ingredients[];
}

export interface GetMealById_getMealById {
  meal: GetMealById_getMealById_meal | null;
}

export interface GetMealById {
  getMealById: GetMealById_getMealById;
}

export interface GetMealByIdVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMeals
// ====================================================

export interface GetMeals_getMeals_meals {
  id: string;
  name: string;
  totalCalories: number;
  totalProtein: number;
  days: string[];
}

export interface GetMeals_getMeals {
  meals: GetMeals_getMeals_meals[];
}

export interface GetMeals {
  getMeals: GetMeals_getMeals;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMealsByDay
// ====================================================

export interface GetMealsByDay_getMealsByDay_meals {
  id: string;
  name: string;
  totalCalories: number;
  totalProtein: number;
  days: string[];
}

export interface GetMealsByDay_getMealsByDay {
  meals: GetMealsByDay_getMealsByDay_meals[];
}

export interface GetMealsByDay {
  getMealsByDay: GetMealsByDay_getMealsByDay;
}

export interface GetMealsByDayVariables {
  day: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateRoutine
// ====================================================

export interface CreateRoutine_createRoutine_routine {
  id: string;
  name: string;
  day: string;
}

export interface CreateRoutine_createRoutine_errors {
  path: string;
  message: string;
}

export interface CreateRoutine_createRoutine {
  routine: CreateRoutine_createRoutine_routine | null;
  errors: CreateRoutine_createRoutine_errors[];
}

export interface CreateRoutine {
  createRoutine: CreateRoutine_createRoutine;
}

export interface CreateRoutineVariables {
  input: CreateRoutineInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteRoutine
// ====================================================

export interface DeleteRoutine_deleteRoutine {
  ok: boolean;
}

export interface DeleteRoutine {
  deleteRoutine: DeleteRoutine_deleteRoutine;
}

export interface DeleteRoutineVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateRoutine
// ====================================================

export interface UpdateRoutine_updateRoutine_routine {
  id: string;
  name: string;
  day: string;
}

export interface UpdateRoutine_updateRoutine_errors {
  path: string;
  message: string;
}

export interface UpdateRoutine_updateRoutine {
  routine: UpdateRoutine_updateRoutine_routine | null;
  errors: UpdateRoutine_updateRoutine_errors[];
}

export interface UpdateRoutine {
  updateRoutine: UpdateRoutine_updateRoutine;
}

export interface UpdateRoutineVariables {
  input: UpdateRoutineInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExercisesByRoutine
// ====================================================

export interface GetExercisesByRoutine_getExercisesByRoutine_exercises {
  id: string;
  name: string;
  sets: number;
  reps: number;
  userId: string;
}

export interface GetExercisesByRoutine_getExercisesByRoutine_errors {
  path: string;
  message: string;
}

export interface GetExercisesByRoutine_getExercisesByRoutine {
  exercises: GetExercisesByRoutine_getExercisesByRoutine_exercises[] | null;
  errors: GetExercisesByRoutine_getExercisesByRoutine_errors[];
}

export interface GetExercisesByRoutine {
  getExercisesByRoutine: GetExercisesByRoutine_getExercisesByRoutine;
}

export interface GetExercisesByRoutineVariables {
  routineId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRoutineById
// ====================================================

export interface GetRoutineById_getRoutineById_routine {
  id: string;
  name: string;
  day: string;
}

export interface GetRoutineById_getRoutineById_errors {
  path: string;
  message: string;
}

export interface GetRoutineById_getRoutineById {
  routine: GetRoutineById_getRoutineById_routine | null;
  errors: GetRoutineById_getRoutineById_errors[];
}

export interface GetRoutineById {
  getRoutineById: GetRoutineById_getRoutineById;
}

export interface GetRoutineByIdVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRoutines
// ====================================================

export interface GetRoutines_getRoutines_routines {
  id: string;
  name: string;
  day: string;
  userId: string;
}

export interface GetRoutines_getRoutines {
  routines: GetRoutines_getRoutines_routines[];
}

export interface GetRoutines {
  getRoutines: GetRoutines_getRoutines;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_user {
  id: string;
  email: string;
}

export interface LoginMutation_login_errors {
  path: string;
  message: string;
}

export interface LoginMutation_login {
  user: LoginMutation_login_user | null;
  errors: LoginMutation_login_errors[];
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  data: UserInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Logout
// ====================================================

export interface Logout {
  logout: boolean;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register_errors {
  path: string;
  message: string;
}

export interface RegisterMutation_register {
  errors: RegisterMutation_register_errors[];
}

export interface RegisterMutation {
  register: RegisterMutation_register;
}

export interface RegisterMutationVariables {
  data: UserInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me {
  id: string;
  email: string;
}

export interface Me {
  me: Me_me | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MealInfo
// ====================================================

export interface MealInfo {
  id: string;
  name: string;
  totalCalories: number;
  totalProtein: number;
  days: string[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateExerciseInput {
  name: string;
  reps: number;
  sets: number;
}

export interface CreateMealInput {
  name: string;
  ingredients: IngredientInput[];
}

export interface CreateRoutineInput {
  name: string;
  day: string;
  exercises: ExerciseInput[];
}

export interface ExerciseInput {
  id: string;
  name: string;
  reps: number;
  sets: number;
  userId: string;
}

export interface IngredientInput {
  id: string;
  name: string;
  calories: number;
  protein: number;
}

export interface UpdateExerciseInput {
  id: string;
  name: string;
  reps: number;
  sets: number;
}

export interface UpdateMealDaysInput {
  id: string;
  day: string;
}

export interface UpdateRoutineInput {
  name: string;
  day: string;
  exercises: ExerciseInput[];
  id: string;
}

export interface UserInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
