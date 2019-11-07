import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NgForm } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the SignOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-sign-out",
  templateUrl: "sign-out.html"
})
export class SignOutPage {
  constructor(public navCtrl: NavController, private auth: AuthProvider) {}

  confirmLogout() {
    this.auth.logout();
  }

  denyLogout() {
    this.navCtrl.parent.select(0); //navega para pagina 0 root
  }
}
