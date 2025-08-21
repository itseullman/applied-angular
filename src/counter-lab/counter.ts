import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="flex flex-row gap-4">
      <a routerLink="ui" class="btn btn-sm btn-primary">UI</a>
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class Counter {}
