import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compound-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './compound-update.component.html',
  styleUrls: ['./compound-update.component.css']
})
export class CompoundUpdateComponent implements OnInit {
  updateForm!: FormGroup;
  compoundId!: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.compoundId = this.route.snapshot.paramMap.get('id') || '';
    if (this.compoundId) {
      this.fetchCompoundDetails(this.compoundId);
    }

    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  fetchCompoundDetails(id: string): void {
    this.http.get<any>(`http://localhost:9000/api/compounds/${id}`)
      .subscribe(data => {
        this.updateForm.patchValue({
          name: data.name,
          description: data.description,
          image: data.image
        });
      });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.http.put<any>(`http://localhost:9000/api/compounds/${this.compoundId}`, this.updateForm.value)
        .subscribe({
          next: () => {
            alert('Compound updated successfully!');
            this.router.navigate(['/compounds']);
          },
          error: (err) => {
            console.error('Error updating compound:', err);
            alert('Failed to update the compound. Please try again.');
          }
        });
    } else {
      alert('Please fill out all fields before submitting.');
    }
  }
}
