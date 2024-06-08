import { TListKeysType, TListName } from "./types/types"

// Для вывода списка тем
 const LIST_NAME: TListName = {
    ALL: 'Все темы',
    LOGIC: 'Логика и мышление',
    RIDDLE: 'Загадки',
    PUZZLES: 'Головоломки',
    TRAVEL: 'Путешествия',
    CHESS: 'Шахматы',
    WORLD: 'Окружающий мир',
}

// Для сортировки cjcxcs
 const LIST_KEYS: TListKeysType = {
    [LIST_NAME.ALL]: ['Все темы'],
    [LIST_NAME.LOGIC]: ['Логика и мышление'],
    [LIST_NAME.RIDDLE]: ['Загадки'],
    [LIST_NAME.PUZZLES]: ['Головоломки'],
    [LIST_NAME.TRAVEL]: ['Страны и столицы'],
    [LIST_NAME.CHESS]: ['Шахматы'],
    [LIST_NAME.WORLD]: ['Окружающий мир'],
}

const FETCH_URL = "https://logiclike.com/docs/courses.json"


export { LIST_NAME, LIST_KEYS, FETCH_URL }