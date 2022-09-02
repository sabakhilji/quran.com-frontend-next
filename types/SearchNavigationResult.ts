export enum SearchNavigationType {
  SURAH = 'surah',
  JUZ = 'juz',
  HIZB = 'hizb',
  AYAH = 'ayah',
  SEARCH_PAGE = 'search_page',
  PAGE = 'page',
}

export interface SearchNavigationResult {
  resultType: SearchNavigationType;
  name: string;
  key: number | string;
}
