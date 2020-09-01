//Model generic to list
export interface GridCommon<t> {
    page: number,
    total_results: number,
    total_pages: number,
    results: t[];
}
