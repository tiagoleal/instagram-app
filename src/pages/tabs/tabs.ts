import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  home: string = "HomePage";
  profile: string = "ProfilePage";
  post: string = "NewPostPage";
  search: string = "SearchPage";
  logout: string = "SignOutPage";
}
