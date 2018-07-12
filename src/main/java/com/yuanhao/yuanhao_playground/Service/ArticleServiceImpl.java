package com.yuanhao.yuanhao_playground.Service;

import com.yuanhao.yuanhao_playground.Model.Article;
import com.yuanhao.yuanhao_playground.Repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public Optional<Article> findById(Long id) {
        return articleRepository.findById(id);
    }

    @Override
    public List<Article> findAllArticles() {
        return (List<Article>) articleRepository.findAll();
    }

    @Override
    public Article addArticle(Article article) {
        return articleRepository.save(article);
    }


}
