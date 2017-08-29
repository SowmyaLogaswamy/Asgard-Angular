import { Component, OnInit } from '@angular/core';
import { Cube } from '../cube.model';

@Component({
  selector: 'app-blendoku',
  templateUrl: './blendoku.component.html',
  styleUrls: ['./blendoku.component.css']
})
export class BlendokuComponent implements OnInit {
 ctnr1 = document;
 cubes: Cube[] = [
   new Cube("cube1"),
   new Cube("cube2"),
   new Cube("cube3"),
   new Cube("cube4"),
   new Cube("cube5")
   ];
  constructor() { }

  ngOnInit() {
  }

}
