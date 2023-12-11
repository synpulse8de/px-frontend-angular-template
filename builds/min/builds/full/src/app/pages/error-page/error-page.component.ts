import { Component, OnInit } from '@angular/core'
import { ErrorEntity } from '../../shared/models/error-entity.model'
import { ActivatedRoute, Params } from '@angular/router'
import { ErrorParams } from '../../shared/models/error-params.model'

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  errorInfo: ErrorEntity = {
    code: 'Unknown',
    type: 'Unknown',
    message: 'An unknown error occurred.',
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const errorParams = params as ErrorParams

      this.errorInfo = {
        code: errorParams.code || 'Unknown',
        type: errorParams.type || 'Unknown',
        message: errorParams.message || 'An unknown error occurred.',
      }
    })
  }
}
