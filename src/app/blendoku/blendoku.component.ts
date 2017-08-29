import { Component, OnInit } from '@angular/core';
import { Cube } from '../cube.model';
import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-blendoku',
  templateUrl: './blendoku.component.html',
  styleUrls: ['./blendoku.component.css']
})
export class BlendokuComponent implements OnInit {
  private hideElement: boolean = true;

 cubes: Cube[] = [
   new Cube("cube1", false),
   new Cube("cube2", false),
   new Cube("cube3", false),
   new Cube("cube4", false),
   new Cube("cube5", false)
   ];
  constructor() { }

  ngOnInit() {
  }




  showLink() {
    if(this.hideElement){
      this.hideElement = false;
    }else{
      this.hideElement = true;

    }
  }

}
