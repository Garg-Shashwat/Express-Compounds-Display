import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compound-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.css']
})
export class CompoundListComponent implements OnInit {
  compounds: any[] = [];
  displayedCompounds: any[] = [];
  currentPage = 1;
  pageSize = 8;
  defaultImage = '../../favicon.ico';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchCompounds();
  }  

  fetchCompounds(): void {
    const apiUrl = 'http://localhost:9000/api/compounds';
    this.http.get<any[]>(apiUrl).subscribe((response) => {
      this.compounds = response;
      this.updateDisplayedCompounds();
    });
  }

  updateDisplayedCompounds(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedCompounds = this.compounds.slice(startIndex, endIndex);
  }

  onCardClick(compoundId: number): void {
    this.router.navigate(['/compounds', compoundId]);
  }

  changePage(next: boolean): void {
    this.currentPage = next ? this.currentPage + 1 : this.currentPage - 1;
    this.updateDisplayedCompounds();
  }

  handleImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImage;
  }
}
