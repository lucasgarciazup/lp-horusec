export interface PaginateInterface {
  totalItems: number
  rowsPerPage: number
  params?: {
    [x: string]: string | number
  }
}

export interface PaginationInterface {
  paginate: PaginateInterface
  rowsPerPageOptions: number[]
  onChange?: (callback?: "prev" | "next" | number) => void
}
