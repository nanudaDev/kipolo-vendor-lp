import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_RESPONSE } from '../common';
import { BaseService } from '../core';
import { PresentationDto } from '../dto';
import { getServices } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class PresentationService extends BaseService {
  // get scheduled
  getScheduledPresentation(): Observable<API_RESPONSE<PresentationDto[]>> {
    return this.get<API_RESPONSE<PresentationDto[]>>(
      this.parameterSwitcher(getServices.presentation.findAllPresentation)
    );
  }
}
