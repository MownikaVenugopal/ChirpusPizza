import { CurrencyPipe } from "@angular/common";

export interface MenuItem {
    item: string;
    Category: string;
    price: number | CurrencyPipe;
}
