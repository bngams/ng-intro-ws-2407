import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  standalone: false,
  selector: 'select',
})
export class SelectDirective implements OnInit {

  @Input({required: true}) selectFrom!: string[]; // /!\

  // Dependency Injection
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    debugger
    const data = this.selectFrom;
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      // Create the embedded view with a context object that contains
      // the data via the key `$implicit`.
      $implicit: data,
    });
  }

}
