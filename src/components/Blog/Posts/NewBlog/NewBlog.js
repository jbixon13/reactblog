import React, { Component } from 'react';
import styles from './NewBlog.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class NewBlog extends Component {
    render() {
        return (
            <div className={styles.NewBlog}> 
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>New Year, New (First) Blog</h1>
                        <p>Trying my best.</p>
                    </ArticleHeader>   
                    <p>
                        Now that I’ve spent an unfortunate amount of time debating the best way to share my work on the internet, I guess I should write about it a little. If anything maybe it will make me feel like it was worth it.
                    </p>
                    <p>
                        I’ve never maintained a blog before (excluding the website me and my neighbor made when we were 8 where we gave completely inaccurate advice on pet ownership to people who are unquestionably worse off due to it) and I can’t promise that I’ll maintain this one either.
                    </p>
                    <p>
                        I listen to the <a href='https://www.datacamp.com/community/podcast'>DataFramed Podcast</a> a lot and a piece of advice that is invariably given by data science experts is to maintain a blog where you share your work publically. That doesn’t make it feel any less silly to share my work into the void that this will likely be, but if anything it will be a good way to practice hosting projects on the internet.
                    </p>
                    <p>
                        Working with modern web frameworks is not exactly my forte, and I would probably continue actively avoiding anything even close to web development if that were possible. That being said, I am aware of how much more impactful data can be when it’s interactive and painfully aware of <a href='https://d3js.org/'>how little I know about it.</a> Thankfully, I can achieve a healthy dose of interactivity without having to learn <code>JavaScript</code> through packages like <a href='http://www.htmlwidgets.org/'>HTMLwidgets</a>, <a href='http://rstudio.github.io/leaflet/'>Leaflet</a>, <a href='https://plot.ly/r/'>Plotly</a>, and others. That allows me to spend more time working on the applied research questions I want to investigate and less time figuring out how to share them.
                    </p>
                    <p>
                        The takeaway should not be that you can avoid learning how web frameworks work, as I know I will need to learn them eventually if I want to take my analyses to the point that I envision them in my head. My point is that as someone new to “data science” and programming in general, the <code>R</code> ecosystem has made my life inexpressibly less stressful due to its integration with modern tools for sharing my work.
                    </p>
                </ArticleContainer>
            </div>
        )
    }
}

export default NewBlog
