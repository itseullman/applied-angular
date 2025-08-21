import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        class="btn btn-primary"
        (click)="count.set(count() - 1)"
        [disabled]="count() === 0"
      >
        -
      </button>
      <span>{{ count() }}</span>
      <button class="btn btn-primary" (click)="count.set(count() + 1)">
        +
      </button>
    </div>
    <div>{{ fizzBuzz() }}</div>
  `,
  styles: ``,
})
export class CounterUI {
  count = signal<number>(0);

  fizzBuzz = computed(() => {
    let result = '';
    if (this.count() === 0) return result;
    if (this.count() % 3 === 0) result += 'Fizz';
    if (this.count() % 5 === 0) result += 'Buzz';
    return result;
  });
}
