package com.yuanhao.yuanhao_playground.Controller;

import com.yuanhao.yuanhao_playground.Model.Article;
import com.yuanhao.yuanhao_playground.Service.ArticleServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ArticleController {

    private final ArticleServiceImpl articleService;

    public ArticleController(ArticleServiceImpl articleService) {
        this.articleService = articleService;
    }

    @RequestMapping("/test")
    @ResponseBody
    public List<Article> test(){
        return articleService.findAllArticles();
    }

    @RequestMapping(value = "/addArticle", method = RequestMethod.POST)
    @ResponseBody
    public Article testPost(@RequestBody Article article){
        System.out.println("AAA: " + article);
        Article a = new Article("Test Article");
        a.setContent("lalala");
        return articleService.addArticle(a);
    }

}
