# Installation steps for angular
1. Install Node and npm in your machine.
1. Install vscode or any editor of your preference.
1. Install angular cli globally using command: ```npm i @anular/cli -g```. You can also use npx to do so [Link for help for the same](https://stackoverflow.com/questions/54184357/npx-with-angular-cli-how-to-install-angular-cli-and-use-it-afterwards).
1. Check the version of angular installed using ```ng version```. Note if you used npx then use npx in front of all commands you run like ```npx ng version``` (You can also add alias for ```alias ng=npx ng```). 


## Creating new workspace and application in angular.

Workspace is something where multiple angular projects can reside. There are two ways to create workspace and application/projects.

1. Create empty workspace and then add projects later. 
    ```bash
    ng new hotelinventoryapp --createApplication=false
    ```
    Add projects later

    ```bash
    ng generate app hotelinventoryapp
    ```

    or 

    ```bash
    ng g app hotelinventoryapp
    ```

1. Create workspace with default application.
    ```bash
    ng new hotelinventoryapp
    ```

- You can add environemnt config using 
```ng g environments```
- Provide selector prefix using --prefix= value while creating workspace

## Starting app

Angular app can be started using ```ng serve``` command.


## Creating components

Run following command to generate new component.

```ng generate component <componentName>``` 

You can also use shortcut for generate and component as g and c respectively. So the shortcut command would be

```ng g c <componentName>``` 

## Binding

Three ways to bind
1. Interpolation
2. Property binding
3. Event binding

## Directives

1. Structural
1. Attribution

e.g.

1. *ngFor
1. *ngIf
1. *nfSwitch (*ngSwitchCase, *ngSwitchDefault)
1. ngClass
1. ngStyle

## Pipes

- DatePipe - ` | date : '<formatValue available in angular.io doc>'`
- UpperCasePipe - ` | uppercase`
- TitleCasePipe - ` | titlecase`
- LowerCasePipe - ` | lowercase`
- CurrencyPipe - ` | currency : 'INR'`
- DecimalPipe - name is decimal but pipe name is number - ` | number 'beforeDot.afterDotMin-afterDotMaxInclusive' : locale`
- PercentPipe - ` | percent` (0.5 -> 50%, 1 -> 100%, 0.23 -> 23%)
- JsonPipe - ` | json` (should only use for debugging mostly)
- SlicePipe - ` | slice : 0:1` (: from:to) -> [from, to))
- AsyncPipe - ``


## Adding bootstrap

Few alternatives

1.  Add ngx-bootstrap or ng-bootstrap to the app using commands 
```ng add ngx-bootstrap``` and  ```ng add ng-bootstrap``` respectively.
1. Install bootstrap directly using ```npm i bootstrap``` and then add import to global stysheet using 
```@import '~path/to/bootstrap/node/module';```. Add excluding node_module in the path
1. Add path to css to the angular styles in angular.json (This can work for any css and not just bootstrap). Add including node_module in the path


## Lifecycle hooks


1. ngOnChanges
1. ngOnInit
1. ngDoCheck
1. ngAfterContentInit
1. ngAfterContentChecked
1. ngAfterViewInit
1. ngAfterViewChecked
1. ngOnDestroy


- Each lifecycle hook gets an interface that component needs to install

### ngOnInit

- After constructor completes, ngOnInit will be called.
    - Constructors logic should be very simple and should not have any blocking call to fetch data from other service.
    - ngOnInit is the place where you make some http/rpc calls to fetch data and initialize your component.

### ngOnChanges

#### Component Communication
Ways how two components can communicate or interact with each other. Multiple ways to do so.
1. Using @Input and @Output
1. Using @ViewChild and @ContentChild
1. Using Services

#### Change Detection
- By default when ChangeDetectionStragtegy is Default and not OnPush which means, by default when parent in updated all the children are searched for any changes. This can have performance impact if there are many children.

- OnPush can be used only if data is not modified internally. Should use @Input @Output
- OnPush does not update child if mutable object is updated. Use immutable objects.

-ngOnChanges lifecycle hook can be applied only on the component that has @Input property.


### ngDoCheck
Is triggers if component is active and any other component's data changes
Need not to use and should be used rarely. This is very expensive as is triggered for all changes.
ngOnChanges and ngDoCheck should not be implemented at the same time in the same component.

### ngAfterViewInit

means after view child has initialized. This is case when view child has some blocking code in onInit.
If this is not the case then using ```static: true``` in view child initialization, its instance can also be obtainied in parent.



## DI Providers
https://www.tektutorialshub.com/angular/angular-providers/
There are three types of Dependency Injjection (DI) Providers
1. Class based
1. Value
1. Factory


## Services
Services in angular can be created using angular cli using command
```ng g s <service-name>```

### Resolution Modifiers
- Self - Should be injected by class itself
- SkipSelf - Guaranteed that won't be injected in self and hence self can be skipped while finding service injection
- Optional - Service may or may not be injected
- Host - All compoenents inside the component where service is injected using @Host() will use the injected service. 