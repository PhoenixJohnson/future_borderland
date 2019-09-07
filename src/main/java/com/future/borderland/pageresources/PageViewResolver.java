package com.future.borderland.pageresources;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by jiangyunfan on 2019/9/7.
 */
@Controller
public class PageViewResolver {

    @GetMapping("/fb-eden")
    public String greeting() {
        return "index";
    }
}
