import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'] 
})

export class PlaceholderComponent implements OnInit {
  isModal = false;

  ngOnInit() {}

  onModal() {
    this.isModal = true;
  }
}
