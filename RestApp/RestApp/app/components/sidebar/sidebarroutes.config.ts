import { RouteInfo } from './sidebar.metadata';


export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: ' fa fa-home', class: '' },
    {
        path: 'products', title: 'Products', icon: 'fa fa-cutlery', class: '',
        children: [
            { path: 'allproducts', title: 'All Products', icon: '', class: '' },
            { path: 'categories', title: 'Categories', icon: '', class: '' },
            { path: 'productoptions', title: 'Product Options', icon: ' fa fa-home', class: ''}
        ]
    },
    { path: 'tables', title: 'Tables', icon: 'fa fa-table', class: ''},

    { path: 'inventory', title: 'Inventory', icon: 'fa fa-cubes', class: '' },

    {
        path: 'employees', title: 'Employees', icon: 'fa fa-users', class: '',
        children: [
            { path: 'allemployees', title: 'All Employees', icon: '', class: '' },
            { path: 'roles', title: 'Roles', icon: '', class: ''}
        ]
    },
    {
        path: 'reports', title: 'Reports', icon: 'fa fa-bar-chart-o', class: '',
        children:[
            { path: 'salesbyproduct', title: 'Sales by Product', icon: '', class: ''},
            { path: 'bills', title: 'Bills', icon: '', class: '' },
            { path: 'salesbyemployee', title: 'Sales by Employee', icon: '', class: ''}
        ]
    },
    {
        path: 'settings', title: 'Settings', icon: 'fa fa-cogs', class: '',
        children: [
            { path: 'restarauntinfo', title: 'Restaurant Info', icon: '', class: ''},
            { path: 'support', title: 'Support', icon: '', class: ''}
        ]
    },
    
];
