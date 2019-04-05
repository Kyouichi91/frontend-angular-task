import { Directive, Renderer2, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appView]'
})
export class ViewDirective implements OnInit {

  @Input() viewdata;

  constructor(
    private render: Renderer2,
    private element: ElementRef,
  ) {}
  ngOnInit() {
  }
      @HostListener('mouseenter')onMouseEnter(){
        if (this.viewdata.length>0){
            let viewBox=this.render.createElement('div');
            this.render.addClass(viewBox,'view-box');
            for (let company of this.viewdata){
                let viewItem=this.render.createElement('div');
                this.render.addClass(viewItem,'view-item');
                let companyTitle=this.render.createText(company);
                this.render.appendChild(viewItem,companyTitle);
                this.render.appendChild(viewBox,viewItem);
            }
            this.render.appendChild(this.element.nativeElement,viewBox);
        }
      }
      @HostListener('mouseleave')onMouseLeave(){
        if (this.viewdata.length>0){
            this.element.nativeElement.querySelector('div').remove();
        }
      }
}
