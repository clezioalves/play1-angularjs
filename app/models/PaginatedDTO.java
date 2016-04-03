package models;

import com.google.gson.annotations.Expose;
import play.modules.paginate.ModelPaginator;

import java.util.List;

/**
 * Created by Clézio on 01/04/16.
 */
public class PaginatedDTO {

    @Expose
    private List list;

    @Expose
    private boolean hasNextPage;

    @Expose
    private final int currentPage;

    @Expose
    private final int pageCount;

    public PaginatedDTO(ModelPaginator modelPaginator) {
        this.list = modelPaginator.getCurrentPage();
        this.hasNextPage = modelPaginator.getHasNextPage();
        this.currentPage = modelPaginator.getPageNumber();
        this.pageCount = modelPaginator.getPageCount();
    }
}
