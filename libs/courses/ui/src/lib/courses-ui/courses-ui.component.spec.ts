import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesUiComponent } from './courses-ui.component';

describe('CoursesUiComponent', () => {
  let component: CoursesUiComponent;
  let fixture: ComponentFixture<CoursesUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
