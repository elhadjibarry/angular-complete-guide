import { Injectable } from "@angular/core";

//Optional here @Injectable()
export class LoggingService {

    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}