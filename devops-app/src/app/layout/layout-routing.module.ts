import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'categories',
                loadChildren: './categories/categories.module#CategoriesModule'
            },
            {
                path: 'news',
                loadChildren: './news/news.module#NewsModule'
            },
            {
                path: 'product-updates',
                loadChildren: './product-updates/product-updates.module#ProductUpdatesModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ProductsModule'
            },
            {
                path: 'tools',
                loadChildren: './tools/tools.module#ToolsModule'
            },
            {
                path: 'tutorial-chapters',
                loadChildren: './tutorial-chapters/tutorial-chapters.module#TutorialChaptersModule'
            },
            {
                path: 'tutorials',
                loadChildren: './tutorials/tutorials.module#TutorialsModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'components',
                loadChildren: './material-components/material-components.module#MaterialComponentsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule'
            },
            {
                path: 'grid',
                loadChildren: './grid/grid.module#GridModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'blank-page',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
