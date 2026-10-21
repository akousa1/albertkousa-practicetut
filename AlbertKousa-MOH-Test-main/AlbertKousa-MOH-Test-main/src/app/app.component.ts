import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data/data';
import { TableData, Header } from '../data/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Albert Kousa MOH Test';

  tableData!: TableData;

  // ✅ Add this line
  headerArray: { key: string; data: Header }[] = [];

  constructor(private data: DataService) {
    this.loadData();
  }

  async loadData() {
    this.tableData = await this.data.getTableData();

    // Convert header object → iterable array
    this.headerArray = Object.keys(this.tableData.header).map(key => ({
      key,
      data: this.tableData.header[key],
    }));

    console.log('Header Array:', this.headerArray);
  }
}
