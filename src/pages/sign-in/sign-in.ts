import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NgForm } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-sign-in",
  templateUrl: "sign-in.html"
})
export class SignInPage {
  constructor(private auth: AuthProvider, private navCtrl: NavController) {}

  onLogin(form: NgForm) {
    this.auth.login(form.value.email, form.value.password);
  }

  goToSignUpPage() {
    this.navCtrl.push("SignUpPage");
  }
}
