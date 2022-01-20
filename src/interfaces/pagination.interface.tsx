export interface PaginationInterface {
  items: any[]
  itemsPerPageOptions: number[]
  handleCurrentItems: (items: any[]) => void
}
