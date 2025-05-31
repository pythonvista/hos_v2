import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sidebarDropDown]',
  exportAs: 'sidebarDropDown'
})
export class SidebarDropDownDirective {
  toggle = true;

  constructor(public el: ElementRef) {
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: Event): void {
     if (!this.el.nativeElement.contains(event.target)) {
        // clicked outside => close dropdown list
     this.toggle = true;
     }
  }
  @HostListener('click',  ['$event.target'])
  onClick() {
    this.toggle = !this.toggle;
  }
  
}
