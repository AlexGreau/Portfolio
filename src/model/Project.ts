import type { Status } from './Status'
import type { Tech, TechName } from './Tech'

export interface Project {
  name: string
  status: Status
  id: number
  techStack: TechName[]
  route?: string
  description?: string
  image?: string
}
