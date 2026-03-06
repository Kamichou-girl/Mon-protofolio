import { Directive, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appSwipeNav]',
  standalone: true
})
export class SwipeNavDirective {
  private readonly router = inject(Router);

  private startX: number | null = null;
  private startY: number | null = null;
  private startTime: number | null = null;

  private readonly routesInOrder = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/experience',
    '/skills',
    '/contact'
  ];

  @HostListener('touchstart', ['$event'])
  onTouchStart(e: TouchEvent) {
    if (e.touches.length !== 1) return;
    if (this.isFormElement(e.target)) return;

    const t = e.touches[0];
    this.startX = t.clientX;
    this.startY = t.clientY;
    this.startTime = Date.now();
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(e: TouchEvent) {
    if (this.startX == null || this.startY == null || this.startTime == null) return;
    if (this.isFormElement(e.target)) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - this.startX;
    const dy = t.clientY - this.startY;
    const dt = Date.now() - this.startTime;

    this.startX = null;
    this.startY = null;
    this.startTime = null;

    // Quick, mostly horizontal swipe
    if (dt > 700) return;
    if (Math.abs(dx) < 70) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.2) return;

    const current = this.normalizeUrl(this.router.url);
    const idx = this.routesInOrder.indexOf(current);
    if (idx === -1) return;

    // Swipe left => next, swipe right => prev
    const nextIdx = dx < 0 ? idx + 1 : idx - 1;
    const clamped = Math.max(0, Math.min(this.routesInOrder.length - 1, nextIdx));
    if (clamped === idx) return;

    void this.router.navigateByUrl(this.routesInOrder[clamped]);
  }

  private normalizeUrl(url: string): string {
    const clean = url.split('?')[0].split('#')[0] || '/';
    if (clean === '') return '/';
    return clean.startsWith('/') ? clean : `/${clean}`;
  }

  private isFormElement(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) return false;
    const tag = target.tagName.toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select' || target.isContentEditable;
  }
}

