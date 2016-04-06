package controllers;

import play.cache.Cache;
import play.data.validation.Error;
import play.i18n.Messages;
import play.mvc.Before;
import play.mvc.Controller;
import play.mvc.Http;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by clezio on 18/03/16.
 */
public class BaseController extends Controller {

    public static final int HTTP_UNPROCESSABLE_ENTITY = 422;

    public static final String VALIDATION_MIN = "validation.min";

    public static final String VALIDATION_MAX = "validation.max";

    public static final String VALIDATION_REQUIRED = "validation.required";

    public static final String MY_FAVORITE_LANGUAGE = "myFavoriteLanguage";

    private static final java.lang.String TIME_FAVORITE_LANGUAGE_COOKIE = "30d";

    public static void language(String language) {
        response.setCookie(MY_FAVORITE_LANGUAGE, language, TIME_FAVORITE_LANGUAGE_COOKIE);
        renderText(language);
    }

    @Before
    public static void beforeFilter() {
        Http.Cookie cookie = request.cookies.get(MY_FAVORITE_LANGUAGE);
        if(cookie == null){
            response.setCookie(MY_FAVORITE_LANGUAGE, "en", TIME_FAVORITE_LANGUAGE_COOKIE);
        }
    }

    public static void index() {
        render("main.html");
    }

    protected static List<String> getListErrors(Map<String, List<Error>> errorsMap) {
        List<String> errors = new ArrayList<String>();
        for(String key : errorsMap.keySet()){
            if(key.contains(".")) {
                for(Error error: errorsMap.get(key)) {
                    if(VALIDATION_REQUIRED.equals(error.getMessageKey()) ||
                            VALIDATION_MIN.equals(error.getMessageKey()) ||
                            VALIDATION_MAX.equals(error.getMessageKey())) {
                        errors.add(getMessage(error.getMessageKey(), getMessage(error.getKey())));
                    }else{
                        errors.add(getMessage(error.getMessageKey()));
                    }
                }
            }
        }
        return errors;
    }

    protected static String getMessage(Object key, Object... args) {
        return Messages.getMessage(request.cookies.get(MY_FAVORITE_LANGUAGE).value, key, args);
    }
}
