import { Component, OnInit } from '@angular/core';
import { GetEntriesService } from '../services/get-entries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: Object = {}
  id: string

  constructor(
    private getEntriesService: GetEntriesService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      console.log(params.id)
      this.id = params.id

    this.getEntriesService.getOneJournalEntries(this.id)
    .subscribe(res=>{
      this.entry = res
      })
    })
  }
}
