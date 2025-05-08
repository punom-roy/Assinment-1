function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => typeof item.rating === 'number' && item.rating >= 4);
}