import { RouteInfo } from './sidebar.metadata';


export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: ' fa fa-home', class: ''},
    {
        path: 'products', title: 'Products', icon: 'fa fa-cutlery', class: '',
        children: [
            { path: 'products/allproducts', title: 'All Products', icon: '', class: '' },
            { path: 'products/categories', title: 'Categories', icon: '', class: '' },
            { path: 'products/productoptions', title: 'Product Options', icon: '', class: ''}
        ]
    },
    { path: 'tables', title: 'Tables', icon: 'fa fa-table', class: ''},

    { path: 'inventory', title: 'Inventory', icon: 'fa fa-cubes', class: '' },

    {
        path: 'employees', title: 'Employees', icon: 'fa fa-users', class: '',
        children: [
            { path: 'employees/allemployees', title: 'All Employees', icon: '', class: '' },
            { path: 'employees/roles', title: 'Roles', icon: '', class: ''}
        ]
    },
    {
        path: 'reports', title: 'Reports', icon: 'fa fa-bar-chart-o', class: '',
        children:[
            { path: 'reports/salesbyproduct', title: 'Sales by Product', icon: '', class: ''},
            { path: 'reports/bills', title: 'Bills', icon: '', class: '' },
            { path: 'reports/salesbyemployee', title: 'Sales by Employee', icon: '', class: ''}
        ]
    },
    {
        path: 'restaurantsettings', title: 'Settings', icon: 'fa fa-cogs', class: ''
        
    },
    
];
