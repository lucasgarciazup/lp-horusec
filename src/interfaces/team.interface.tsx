type RoleType = "Quality Assurance Engineer" | "Software Engineer" | "Tech Lead"

export interface TeamInterface {
  name: string
  role: RoleType
  github?: string
  linkedin?: string
}