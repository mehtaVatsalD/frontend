import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'hinv-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',

  // can also provide inline html, css, scss etc.

  // template: '<h1>Hello Angular!</h1>',
  // template: `<h1>Hello Angular!</h1>
  // <h2>Angular app name: {{title}}</h2>`,
  // styles: [
  //   `h1 {
  //     color: blueviolet;
  //   }`,
  //   `h2 {
  //     color: red;
  //   }`
  // ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'helloWorld';
  closeContainer = false;

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponentChildren !: QueryList<HeaderComponent>;

  @ViewChild('headerPlace', {read: ViewContainerRef}) viewContainerRef !: ViewContainerRef;

  @ViewChild('customDecorableDiv', {static: true}) customDecorableDiv !: ElementRef;

  constructor(private cd:ChangeDetectorRef){}

  ngOnInit(): void {
      console.log(this.headerComponent);
      this.customDecorableDiv.nativeElement.innerHTML = "This is custom decorated using ViewChild";
      this.customDecorableDiv.nativeElement.style.border = "2px solid blue";
      this.customDecorableDiv.nativeElement.style.padding = "10px";
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    // const componentRef = this.viewContainerRef.createComponent(HeaderComponent);
    // componentRef.instance.appName = "Angular Tutorial"
    
    let i = 1;
    this.headerComponentChildren.forEach(headerComponent => headerComponent.appName = `Dup App Name ` + i++)

    this.headerComponent.appName = 'Angular Tutorial Title';
    this.cd.detectChanges();
  }




}
