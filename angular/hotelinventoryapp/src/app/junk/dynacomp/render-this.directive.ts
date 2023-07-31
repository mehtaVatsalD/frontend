import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hinvRenderThis]'
})
export class RenderThisDirective implements OnInit {

  constructor(private vc: ViewContainerRef, private tr: TemplateRef<any> ) { }

  ngOnInit(): void {
      this.vc.createEmbeddedView(this.tr);
  }

}
