export const surahTitleFilter = (title: string) => (surah: any) =>
    surah.title?.toLowerCase().includes(title.toLowerCase())