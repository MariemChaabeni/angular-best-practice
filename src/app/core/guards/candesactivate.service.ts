import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CanDeactivate } from "@angular/router";
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: "root",
})
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  constructor() {}
  canDeactivate(component: CanComponentDeactivate) {
    // if (component.canDeactivate) {
    //   let canDeactivate = component.canDeactivate();
    //   if (!canDeactivate) {
    //     return this.alertService
    //       .confirmation(
    //         "Des modifications ont été effectuées, souhaitez-vous les annuler ?"
    //       )
    //       .then((res) => {
    //         return res.value ? true : false;
    //       });
    //   } else {
    //     return true;
    //   }
    // }
    return true;
  }
}
