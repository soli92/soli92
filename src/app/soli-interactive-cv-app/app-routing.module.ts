import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from 'app/modules/about-page/component/about-page.component';
import { ErrorPageComponent } from 'app/modules/error-page/component/error-page.component';
import { HomePageComponent } from 'app/modules/home-page/component/home-page.component';
import { ProjectsPageComponent } from 'app/modules/projects-page/component/projects-page.component';

const routes: Routes = [
  {
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
  {
		path: 'home',
		pathMatch: 'full',
		component: HomePageComponent,
		loadChildren: () => import('app/modules/home-page/home-page.module').then(m => m.HomePageModule)
	},
  {
		path: 'projects',
		pathMatch: 'full',
		component: ProjectsPageComponent,
		loadChildren: () => import('app/modules/projects-page/projects-page.module').then(m=> m.ProjectsPageModule)
	},
  {
		path: 'about',
		pathMatch: 'full',
		component: AboutPageComponent,
		loadChildren: () => import('app/modules/about-page/about-page.module').then(m => m.AboutPageModule),
	},
	{
		path: 'error-page',
		pathMatch: 'full',
		component: ErrorPageComponent,
		loadChildren: () => import('app/modules/error-page/error-page.module').then(m=>m.ErrorPageModule),
	},
  {
		path: '**',
		redirectTo: 'home'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
