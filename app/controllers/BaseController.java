package controllers;

import play.mvc.Controller;

/**
 * Created by prodeb on 18/03/16.
 */
public class BaseController extends Controller {

    public static final int HTTP_UNPROCESSABLE_ENTITY = 422;

    public static void index() {
        render("main.html");
    }
}
