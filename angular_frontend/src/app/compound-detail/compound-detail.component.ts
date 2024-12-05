import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compound-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css']
})
export class CompoundDetailComponent implements OnInit {
  compound: any = null;
  defaultImage = '../../favicon.ico';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const compoundId = this.route.snapshot.paramMap.get('id');
    if (compoundId) {
      this.fetchCompoundDetails(compoundId);
    }
  }

  fetchCompoundDetails(id: string) {
    this.http.get<any>(`http://localhost:9000/api/compounds/${id}`)
      .subscribe(data => {
        this.compound = data;
      });
  }

  handleImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImage;
  }
}
