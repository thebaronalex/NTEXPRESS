import { TestBed, async } from '@angular/core/testing';
import { ValueComponent } from './value.component';

describe('ValueComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ValueComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ValueComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NTExpressApp'`, () => {
    const fixture = TestBed.createComponent(ValueComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NTExpressApp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ValueComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to NTExpressApp!');
  });
});
