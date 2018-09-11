package com.hrsys.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author zap
 * @version 1.0, 2018/9/11
 */
@RestController
public class IndexController {

    @RequestMapping("/index")
    public String index() {
        return "index";
    }

}
