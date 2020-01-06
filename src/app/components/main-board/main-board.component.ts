import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {

    new p5(p => {
      let x = 100;
      let y = 100;

      p.setup = () => {
        p.createCanvas(700, 410);
      };

      p.draw = () => {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
      };
    }, this.el.nativeElement);

  }

}
