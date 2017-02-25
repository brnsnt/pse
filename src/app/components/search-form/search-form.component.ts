import {Component, Input, OnChanges, Output, EventEmitter} from "@angular/core";
import {Search} from "../../model/search";
import {Catalogue} from "../../model/catalogue";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'search-form',
  styleUrls: ['search-form.component.css'],
  templateUrl: 'search-form.component.html'
})

export class SearchFormComponent implements OnChanges {

  @Input() catalogue:Catalogue;
  @Output() searchRequest:EventEmitter<Search> = new EventEmitter<Search>();

  constructor(private fb: FormBuilder,) {}

  searchForm: FormGroup

  versions: string[] = [];

  onSubmit():void {
    this.searchRequest.emit(this.searchForm.value) //emit the search object as event
  }

  /**
   * Create the search form.
   */
  createForm() {
    this.searchForm = this.fb.group({
      catalogue: this.catalogue,
      version: [ this.versions[this.versions.length -1 ],Validators.required],
      searchTerm: ['',Validators.required],
    });
  }

  /**
   * Reset form values.
   */
  ngOnChanges() {
    //called when Input value changes.
    this.versions = this.catalogue.versions //set versions
    this.createForm()
    this.searchForm.setValue({
      catalogue: this.catalogue,
      version: this.versions[this.versions.length-1] || '', // select a version
      searchTerm: ''
    });
  }



}

