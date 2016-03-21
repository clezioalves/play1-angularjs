package controllers;

import play.mvc.Controller;

/**
 * Created by prodeb on 18/03/16.
 */
public class BaseController extends Controller {
    public static void index() {
        render("main.html");
    }
}
