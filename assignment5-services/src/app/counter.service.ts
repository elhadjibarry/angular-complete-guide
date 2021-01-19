export class CounterService {

    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementInactive() {
        this.activeToInactiveCounter++;
        console.log('active->inactive: ' + this.activeToInactiveCounter);
    }

    incrementActive() {
        this.inactiveToActiveCounter++;
        console.log('inactive->active: ' + this.inactiveToActiveCounter);
    }
}