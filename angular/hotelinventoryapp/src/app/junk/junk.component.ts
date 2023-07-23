import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LOCAL_STORAGE_TOKEN } from '../AppConfig/localstorage.token';
import { InitService } from '../init.service';


@Component({
  selector: 'hinv-junk',
  templateUrl: './junk.component.html',
  styleUrls: ['./junk.component.scss']
})
export class JunkComponent implements AfterViewInit, OnInit {

  title = 'helloWorld';
  closeContainer = false;

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponentChildren !: QueryList<HeaderComponent>;

  @ViewChild('headerPlace', {read: ViewContainerRef}) viewContainerRef !: ViewContainerRef;

  @ViewChild('customDecorableDiv', {static: true}) customDecorableDiv !: ElementRef;

  public configData:{[key in "env" | "ver"]: string}

  constructor(private cd:ChangeDetectorRef, 
    @Inject(LOCAL_STORAGE_TOKEN)  private localStorage: Storage,
    public initService: InitService){
      this.configData = initService.config;
    }

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
    this.localStorage.setItem("demoAng", "AngTSucks")
  }

}