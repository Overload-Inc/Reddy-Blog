import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NoSpace {

  static noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    let controlValue = control.value as string;

    if(controlValue.indexOf(' ') >= 0) {
      return { noSpace: true };
    }
    else {
      return null;
    }
  }
}
