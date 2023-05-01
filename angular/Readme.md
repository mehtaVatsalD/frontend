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

- DatePipe
- UpperCasePipe
- TitleCasePipe
- LowerCasePipe
- CurrencyPipe
- DecimalPipe - name is decimal but pipe name is number
- PercentPipe
- JsonPipe
- SlicePipe
- AsyncPipe


## Adding bootstrap

Few alternatives

1.  Add ngx-bootstrap or ng-bootstrap to the app using commands 
```ng add ngx-bootstrap``` and  ```ng add ng-bootstrap``` respectively.
1. Install bootstrap directly using ```npm i bootstrap``` and then add import to global stysheet using 
```@import '~path/to/bootstrap/node/module';```
1. Add path to css to the angular styles in angular.json (This can work for any css and not just bootstrap)


## Lifecycle hooks


1. ngOnChanges
1. ngOnInit
1. ngDoCheck
1. ngAfterContentInit
1. ngAfterContentChecked
1. ngAfterViewInit
1. ngAfterViewChecked
1. ngOnDestroy