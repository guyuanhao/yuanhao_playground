package com.yuanhao.yuanhao_playground.Service;

import com.yuanhao.yuanhao_playground.Model.Article;

import java.util.List;
import java.util.Optional;

public interface ArticleService {

    Optional<Article> findById(Long id);

    List<Article> findAllArticles();

    Article addArticle(Article article);
}
