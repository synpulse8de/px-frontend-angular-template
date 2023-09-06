import { Params } from '@angular/router'

export interface ErrorParams extends Params {
  code: number | string
  type: string
  message: string
}
