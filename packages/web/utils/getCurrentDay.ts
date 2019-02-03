const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export const getCurrentDay = (): string => days[new Date().getDay()];
