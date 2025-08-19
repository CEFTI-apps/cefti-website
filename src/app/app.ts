import { afterEveryRender, Component, Inject, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { distinctUntilChanged, filter, map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { PublicLayout } from "./layouts/public-layout/public-layout";
import { EmptyLayout } from "./layouts/empty-layout/empty-layout";
import { CommonModule } from '@angular/common';
import { isBrowser } from './core/utils/is-broswer';
import { PlatformService } from './core/services/is-browser.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, PublicLayout, EmptyLayout,PublicLayout,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('cefti-website');
   protected readonly router = inject(Router)
   protected readonly activatedRoute =  inject(ActivatedRoute)
  private readonly destroy$ = new Subject<void>();
  private readonly platformService = inject(PlatformService);

  constructor(){
    afterEveryRender(() => {
      console.log('@afterEveryRender',this.title() );
    });
  }
   /** Layout courant selon la route active */
   protected readonly currentLayout$: Observable<    'public' | 'empty'> = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith(null),
    map(() => {
      let route = this.activatedRoute.firstChild;
      while (route?.firstChild) {
        route = route.firstChild;
      }
      return (
        (route?.snapshot.data?.['layout'] as
          | 'public'
          | 'empty') || 'public'
      );
    }),
    distinctUntilChanged()
   )


  protected resetPosition() {
    if (this.platformService.isBrowser()) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  ngOnInit(): void {
      this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        
        setTimeout(() => {
          if (this.platformService.isBrowser()) {
            window.scrollTo({ top: 0, behavior: 'auto' });
          }
        }, 0);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}