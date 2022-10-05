import { PRES_STATUS } from 'src/app/shared';

export class PresentationDto {
  id?: number;
  title?: string;
  subtitle?: string;
  address?: string;
  maxCapacity?: number;
  presentationStatus?: PRES_STATUS;
  presentationDate?: string;
  presentationDay?: string;
  presentationTime?: string;
}
