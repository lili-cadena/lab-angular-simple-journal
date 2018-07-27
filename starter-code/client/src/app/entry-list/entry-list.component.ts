import { Component, OnInit } from '@angular/core';
import { GetEntriesService } from '../services/get-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: Array<any>

  constructor(
    private getEntriesService: GetEntriesService,
  ) { }

  ngOnInit() {
    this.getEntriesService.getAllJournalEntries()
    .subscribe(entry=>{
      this.entries = entry
    })
  }

}
