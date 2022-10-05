import { Component } from '@angular/core';
import { PresentationDto } from './dto';
import { PresentationService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly presenatationService: PresentationService) {}
  title = 'kipolo-vendor-lp';
  presentation!: PresentationDto[];
  nextPresentationDate!: Date;

  ngOnInit() {
    console.log('initializing');
    this.presenatationService.getScheduledPresentation().subscribe({
      next: (presentation) => {
        this.presentation = presentation.data;
        this.nextPresentationDate = new Date(
          presentation.data[0].presentationDate as string
        );
      },
    });
  }

  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
