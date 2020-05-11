import React, { Component } from 'react';
import styles from './MTADoom.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';
import Scrolly from '../../Scrolly';
// workaround for plotly causing JS heap out of memory errors
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

export class MTADoom extends Component {
    render() {
        return (
            <div className={styles.MTADoom}>
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>MTA Doom and Gloom</h1>
                        <p>Is the NYC Subway system as dire as we say it is?</p>
                    </ArticleHeader>   
                <p>
                    It's no secret that New Yorkers love to hate their subway system. I was inspired to more critically analyze it after reading this <a href='https://www.citylab.com/transportation/2018/04/why-new-york-city-stopped-building-subways/557567/'>CityLab</a> article that contextualizes the history of the MTA. I am specifically interested in whether it truly is degrading by using their publically maintained performance metrics. Some of these metrics have opaque names, so I'll specify where necessary. 
                </p>
                <Scrolly>
                    <section>
                        <figure>
                            <iframe frameborder='0' src='https://mario-plumber.herokuapp.com/MTA_article/plot1'/>
                        </figure>
                        <article>
                            <div>
                                <p>This is a plotly chart</p>
                            </div>
                            <div>
                                <p>This is some narration</p>
                            </div>
                            <div>
                                <p>More narration</p>
                            </div>
                        </article>
                    </section>
                </Scrolly>
                <p>
                    There is a lot of information that can be lost in rapid-fire chart presentation, but the overall theme is that the subways of New York City are less reliable, break down more, and yet are responsible for moving more and more people.
                </p>
                <p>
                    An interesting note is that when looking at the MTA’s <a href='http://dashboard.mta.info/'>performance dashboard</a>, their charts use the same underlying data to tell a very different story.
                </p>
                <p>
                    Images here
                </p>
                <p>
                    This is a perfect opportunity to weigh in on the perennial debate around truncated y axes with a concrete example. As is the case in most methodology questions, there are very few decisions that have a clear cut answer without room for nuance. When considering truncated y axes, one should express the question they are answering about their data in the decision.
                </p>
                <p>
                    In subway performance metrics, I don’t believe an axis that goes from 0-100% is truthfully expressing the question of whether the network is increasing or decreasing in performance. We do not care about a subway system that has a 0% On-Time Performance because such a system would not exist. We care more about comparing historic to current performance, and leaving a chart full of white space implies stability and lack of change in performance where that is not the case. It would be equally misleading if I were to reduce the axes to a percent or two to imply volatility where there is none, but there is a clear and consistent trend of worsening performance that is not insignificant across multiple metrics. For these reasons, the MTA should reconsider their philosophy for how they communicate data to the public.
                </p>
                <Plot
                    data={[
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        },
                        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                    ]}
                    layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
                />
                </ArticleContainer>            
            </div>
        )
    }
}

export default MTADoom
