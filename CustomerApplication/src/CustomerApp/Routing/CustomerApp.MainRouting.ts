import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { SupplierPageComponent } from '../Supplier/CustomerApp.SupplierPageComponent';

export const MainRoutes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Customer', component: CustomerComponent},
    {path: 'Supplier', component: SupplierPageComponent},
    {path: '', component: HomeComponent }
];
