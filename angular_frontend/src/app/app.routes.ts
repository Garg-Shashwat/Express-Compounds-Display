import { Routes } from '@angular/router';
import { CompoundListComponent } from './compound-list/compound-list.component';
import { CompoundDetailComponent } from './compound-detail/compound-detail.component';
import { CompoundUpdateComponent } from './compound-update/compound-update.component';

export const routes: Routes = [
  { path: '', redirectTo: '/compounds', pathMatch: 'full' },
  { path: 'compounds', component: CompoundListComponent },
  { path: 'compounds/:id', component: CompoundDetailComponent },
  { path: 'compounds/:id/edit', component: CompoundUpdateComponent },
  { path: '', redirectTo: '/compounds', pathMatch: 'full' }
];
