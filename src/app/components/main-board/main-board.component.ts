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
    this.p5_drawing()
  }

  drawing = [];

  p5_drawing(){




    new p5(p => {
      let x = 100;
      let y = 100;
  
      p.setup = () => {
        p.createCanvas(700, 410);
      };
      
      //the main draw function:
      p.draw = () => {
        p.background(0);
        p.fill(255);
        
        if(p.mouseIsPressed){
          var point = {
            x: p.mouseX,
            y:p.mouseY
          }

          this.drawing.push(point)
          console.log(this.drawing);
        }

        p.beginShape();
        p.stroke(255);
        p.strokeWeight(4);
        p.noFill();

        for(var i=0;i<this.drawing.length;i++){
          p.vertex(this.drawing[i].x,this.drawing[i].y)
        }
        p.endShape();






      };
    }, this.el.nativeElement);
  }
}


