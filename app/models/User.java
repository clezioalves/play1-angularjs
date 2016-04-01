package models;

import com.google.gson.annotations.Expose;
import play.data.validation.Max;
import play.data.validation.Min;
import play.data.validation.Required;

import javax.persistence.Entity;

/**
 * Created by clezio on 18/03/16.
 */
@Entity(name = "users")
public class User extends BaseModel {

    @Expose
    @Required()
    private String name;

    public User() {}

    public User(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
