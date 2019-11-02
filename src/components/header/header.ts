import { Component, Input } from "@angular/core";

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "shared-header",
  templateUrl: "header.html"
})
export class HeaderComponent {
  @Input() pageTitle = "";
}
