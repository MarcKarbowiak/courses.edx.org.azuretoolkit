import { Injectable } from '@angular/core';

@Injectable()
export class DateService{

    public getCurrentDate(): Date{
        return new Date();
    }
}