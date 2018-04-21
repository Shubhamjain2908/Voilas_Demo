import {Component, OnInit, ViewChild} from '@angular/core';
import {Forms} from '../../models/form.model';
import {NgForm} from '@angular/forms';
import {AttributeModel} from '../../models/attribute.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  AddForm = false;
  @ViewChild('UploadedFile') UploadedFile;
  sampleForms: Forms[] = [
    new Forms('HCFC 1', 'File 1', new AttributeModel('', '', '', '')),
    new Forms('HCFC 2', 'File 2', new AttributeModel('', '', '', ''))
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.sampleForms);
  }
  openModel() {
    this.AddForm = true;
  }
  onSignIn(form: NgForm) {
    console.log(form.value.fileName + ' : ' + this.UploadedFile.nativeElement.files[0].name);
    this.sampleForms.push(new Forms(form.value.fileName, this.UploadedFile.nativeElement.files[0].name, new AttributeModel('', '', '', '')));
  }
}
