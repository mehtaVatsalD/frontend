Good typescript blogs used while learning
https://bobbyhadz.com/blog/typescript-object-parameter-default-value

# Installation steps for angular
1. Install Node and npm in your machine.
1. Install vscode or any editor of your preference.
1. Install angular cli globally using command: ```npm i -g @anular/cli```. You can also use npx to do so [Link for help for the same](https://stackoverflow.com/questions/54184357/npx-with-angular-cli-how-to-install-angular-cli-and-use-it-afterwards).
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

## Interceptors
New interceptors could be added using command  `ng g inerceptor <interceptorName>`

## Route
- Import RouteModule
- forRoot method allows us to add multiple route config
    - should be configured only once
- default route
- dynamic route
- wildcard route


## Template Driven Forms
- Import FormsModule

## Router service
Programatic navigation to other url can be done using a service named `Router`. From the instance of this service we get two methods namely `navigate` and `navigateByUrl` to programatically route user to other page in the app.

## Feature Module and Routing

Concept named SCAM - Single component and module. For every new component, a new module is to be created and that new component should be coded/developed in that newly created module.
Command to create new module: `ng g m <moduleName> --routing --flat=true`
--routing flog will provide routing module alongside and --flat flag is helping in NOT creating new folder for this new module.

- One component can be added as part of only single module
- If a component in some module is to be used by componet of some other module, then that module (one that is being used) needs to be exported in the module which declares the component
- Routes are checked for in sequence. If the routing module of main app is registered before the feature module having its own routing module, there are chances that routes in routing module of feature module might not work! Hence always have feature module registered before main app routing module in main app module.

## Nested routes and child route
- Add routes with variables(dynamic) after those without values

## Production build

`ng build -c=production`

## Lazy Loaded Module

While creating such lazy loaded module, not to keep code dependency of other module on this lazy loaded module.
If there is any such case, abstract that out in yet another module and share that across! Lazy loaded module should not be dependent on.
Only user interaction should ask for lazy loaded module!

To generate lazy loaded module
`ng g m <lazyLoadedModuleName> --routing --route=<routeNameWhereWeNeedToVisitThisModule> --module=<moduleToLazyLoadThisModule>`

To generate module (non lazy loaded and then add components later)
`ng g m <moduleName>`
`ng g c <moduleName>` <---- This will create component with same name as module name.

## ProvidedIn

- root - create singleton instance of any service
- any - one for ALL non-lazy loaded modules and then one for EACH lazy loaded modules

Sample example provided in lecture -> create injection token and use it in such service (providedIn any). Then for lazy loaded component,
if that value of injection token dependency is provided differently(using providers array in component), then service created for lazy loaded module,
will get this new value!

## Routing Events and Route Guards

router.events provides all flowing events when routing.
This can even be filtered using pipe() for specific module.

canActivae
canActiveChild
canLoad - prevents even loading of lazy loaded module if canLoad returns false!

## Reactive Forms
- Setting up reactive forms
- Creating Form
- Adding controls dynamically
- Built-in validations
- Submit and reset forms
- Listening to form value changes using valueChanges
- patch value vs setValue
    - setValue needs value for all fields where as it is not the case with patchValue
- using rxjs map operators
- Implementing custom validations

- Import ReactiveFormsModule to module
- In reactive forms we create forms using typescript
- It is good for developers who like to have more control in ts file
- Uses forms api like FormGroup, FormControl, Form directives like FormControl 

- Use FormControl class to create Form Controls
- Use FormGroup to group multiple controls
- Use FormBuilder (this is a service ) to build complex forms

`
addControl and removeControl to add and remove controls of forms respectively =.


[formArrayName] using proper name -> [formGroupName] using index value -> [formControlName] exact repeated form control's name
so when name of array, group and control is not available and is reapeated index is to be used.

to access each form field model, 
addExpenseForm.get('metadata')?.get('tags')?.get(i.toString())?.get('tagVal')?.hasError('pattern')
or
addExpenseForm.get('metadata.tags.' + i + '.tagVal')?.hasError('pattern')
or
addExpenseForm.get(['metadata', 'tags', i, 'tagVal'])?.hasError('pattern')

*ngIf="reactiveFormGroup.get('someDynamicallyAddedField')" <--- helps to only render if field is added by some user action

`


To add validations one of the standard way is same like in template driven forms wherein we add required, min, pattern etc attibutes to input
Other way is via Validators class which can be seen in corresponding ts file 

** updatOn **
- change (default) - for any value change
- submit - on form submission
- blur - when input field is out for focus
Same is also possible in template driven forms using [ngModelOptions]