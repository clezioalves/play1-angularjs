package controllers;

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

    public static final String VALIDATION_MIN_SIZE = "validation.minSize";

    public static final String VALIDATION_MAX_SIZE = "validation.maxSize";

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
            response.setCookie(MY_FAVORITE_LANGUAGE, "pt-br", TIME_FAVORITE_LANGUAGE_COOKIE);
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
                            VALIDATION_MIN_SIZE.equals(error.getMessageKey()) ||
                            VALIDATION_MAX_SIZE.equals(error.getMessageKey())) {
                        errors.add(getMessage(error.getMessageKey(), getMessage(error.getKey())));
                    }else{
                        try {
                            errors.add(getMessage(error.getMessageKey()));
                        }catch(Exception e){
                            errors.add(error.getMessageKey());
                        }
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
