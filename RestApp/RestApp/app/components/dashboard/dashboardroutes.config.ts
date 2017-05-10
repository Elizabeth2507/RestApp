import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AllProductComponent } from './product/allproducts/allproduct.component';
import { CategoriesComponent } from './product/categories/categories.component';
import { ProductOptionsComponent } from './product/productoptions/productoptions.component';
import { TablesComponent } from './tables/tables.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AllEmployeesComponent } from './employees/allemployees/allemployees.component';
import { RolesComponent } from './employees/roles/roles.component';
import { BillsComponent } from './reports/bills/bills.component';
import { SalesByEmployeeComponent } from './reports/salesbyemployee/salesbyemployee.component';
import { SalesByProductComponent } from './reports/salesbyproduct/salesbyproduct.component';
import { RestaurantSettingsComponent } from './restaurantsettings/restaurantsettings.component';


export const MODULE_ROUTES: Route[] = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    
    {
        path: 'products',
        children: [
            
            { path: 'allproducts', component: AllProductComponent },
            { path: 'categories', component: CategoriesComponent },
            { path: 'productoptions', component: ProductOptionsComponent }
        ]
    },
    { path: 'tables', component: TablesComponent },
    { path: 'inventory', component: InventoryComponent },
    {
        path: 'employees',
        children: [
            { path: 'allemployees', component: AllEmployeesComponent },
            { path: 'roles', component: RolesComponent }
            
        ]
    },
    {
        path: 'reports',
        children: [
            { path: 'salesbyproduct', component: SalesByProductComponent },
            { path: 'bills', component: BillsComponent },
            { path: 'salesbyemployee', component: SalesByEmployeeComponent }

        ]
    },
    { path: 'restaurantsettings', component: RestaurantSettingsComponent },
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: '/dashboard'

    }
    //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    AllProductComponent,
    CategoriesComponent,
    ProductOptionsComponent,
    TablesComponent,
    InventoryComponent,
    AllEmployeesComponent,
    RolesComponent,
    BillsComponent,
    SalesByEmployeeComponent,
    SalesByProductComponent,
    RestaurantSettingsComponent
    
]