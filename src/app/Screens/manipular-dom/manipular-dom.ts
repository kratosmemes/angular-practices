import { Component, ElementRef, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-empty-screen',
  imports: [],
  templateUrl: './manipular-dom.html',
  styleUrl: './manipular-dom.scss',
})
export class ManipularDomComponent {
  @ViewChild('myInput') myInput!: ElementRef;
  @ViewChild('myDiv') myDiv!: ElementRef;
  @ViewChildren('myItems') listItems!: ElementRef[];

  items = ['1', '2', '3', '4', '5'];
  items2 = ['11', '21', '31', '41', '51'];

  ngAfterViewInit() { }

  manipularDom1() {
    //Input
    this.myInput.nativeElement.focus();
    this.myInput.nativeElement.value = 'Hello, World!';

    //Div
    this.myDiv.nativeElement.style.backgroundColor = 'red';
    this.myDiv.nativeElement.style.color = 'white';
    this.myDiv.nativeElement.style.padding = '10px';
    this.myDiv.nativeElement.style.borderRadius = '5px';
    this.myDiv.nativeElement.innerText = 'This div has been styled using ElementRef!';
  
    //List Items
    this.listItems.forEach((item, index) => {
      item.nativeElement.append(`- Manipulado y inyectado con datos`);
      item.nativeElement.style.fontWeight = 'bold';
      item.nativeElement.style.margin = 'black 5px bold';
    });
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  manipularDom2() {
    const div = this.elementRef.nativeElement.querySelector('#myDiv2');
    this.renderer.setStyle(div, 'backgroundColor', 'blue');
    this.renderer.addClass(div, 'bordered');
    
    const newElement = this.renderer.createElement('p');
    this.renderer.setProperty(newElement, 'innerText', 'This paragraph was added using Renderer2!');
    this.renderer.appendChild(div, newElement);

    const list = this.elementRef.nativeElement.querySelector('#myItems2');
    // Seleccionar los elementos hijos dentro del contenedor
    const items = list.querySelectorAll('div');
    items.forEach((item: Element) => {
      this.renderer.setProperty(item, 'innerText', 'Manipulado e inyectado con datos');
    });
  }
}
