import {Component, Input, OnChanges, Output, EventEmitter} from "@angular/core";
import {SearchRequest} from "../../model/search-request";
import {Catalogue} from "../../model/catalogue";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'search-form',
  styleUrls: ['search-form.component.css'],
  templateUrl: 'search-form.component.html'
})

/**
 * 1. Display a form to select the catalogue version and enter a search text.
 * 2. Output on submit a search request with the form values to the parent component.
 */
export class SearchFormComponent implements OnChanges {

  @Input() catalogue:Catalogue;
  @Output() searchRequest:EventEmitter<SearchRequest> = new EventEmitter<SearchRequest>();

  constructor(private fb: FormBuilder,) {}

  searchForm: FormGroup

  versions: string[] = [];

  /**
   * Emit the values of the search form as event.
   */
  onSubmit():void {
    this.searchRequest.emit(this.searchForm.value)
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
   * Update version choices and set search form values.
   */
  ngOnChanges() {
    //called when the Input value changes.
    this.versions = this.catalogue.versions //set versions

    if (!this.searchForm) this.createForm()

    this.searchForm.setValue({
      catalogue: this.catalogue,
      version: this.versions[this.versions.length-1], // select a version
      searchTerm: ''
    });
  }
}

