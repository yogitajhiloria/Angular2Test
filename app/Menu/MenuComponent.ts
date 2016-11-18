import { Component } from '@angular/core';
@Component({
selector:'at-menu',
templateUrl:'app/Menu/Menu-Component.html'
})
export class MenuComponent {
pageTitle: string='Main Page';
menuList:any[]=[
{
"nme":"Home",
"url":"tests"
},
{
"name":"Movie",
"url":"tests"
},
{
"name":"Movie2",
"url":"tests"
}
];
}
