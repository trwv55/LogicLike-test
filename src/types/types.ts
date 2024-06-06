// Определяем типы ключей в LIST_NAME
type ListNameKeys = 'ALL' | 'LOGIC' | 'RIDDLE' | 'PUZZLES' | 'TRAVEL' | 'CHESS' | 'WORLD';

// Определяем типы значений в LIST_NAME
export type ListNameValues = 'Все темы' | 'Логика и мышление' | 'Загадки' | 'Головоломки' | 'Путешествия' | 'Шахматы' | 'Окружающий мир';

// Типизируем LIST_NAME в ./config.ts
export type TListName = {
    [key in ListNameKeys]: ListNameValues;
};

// Типизируем LIST_KEYS в ./config.ts
export type TListKeysType = {
    [key in ListNameValues as string]: string[];
};

// Определение типа для fetch запроса
export type TCoursesData = {
    bgColor: string;
    id: string;
    image: string;
    name: string;
    tags: string[];
}