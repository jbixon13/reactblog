import React, { Component } from 'react';
import styles from './MTADoom.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';
import Scrolly from '../../Scrolly';
import Chart from '../../Chart';
import { ParentSize } from '@vx/responsive';

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
                            <iframe title='MTA ridership plot' frameBorder='0' src='../plot_assets/MTA_article/plotly_ridership.html'/>
                        </figure>
                        <article>
                        </article>
                    </section>
                </Scrolly>
                <Scrolly>
                    <section>
                        <figure>
                            <iframe title='MTA ridership plot' frameBorder='0' src='../plot_assets/MTA_article/plotly_otp.html'/>
                        </figure>
                        <article>
                            <div>
                                <p>
                                    “Terminal On-Time Performance measures the percentage of trains arriving at their destination terminals as scheduled. A train is counted as on-time if it arrives at its destination early, on time, or no more than five minutes late, and has not skipped any planned stops. TOTP is a legacy metric that provides a measure of trains arriving within the standard, and not a direct measure of customer travel time, particularly since relatively few customers travel all the way to the end of a line.” — MTA
                                </p>
                            </div>
                        </article>
                    </section>
                </Scrolly>
                <Scrolly>
                    <section>
                        <figure>
                            <iframe title='MTA wait assessment plot' frameBorder='0' src='../plot_assets/MTA_article/plotly_wait.html'/>
                        </figure>
                        <article>
                            <div>
                                <p>
                                    “Wait Assessment measures how regularly the trains are spaced during peak hours. To meet the standard, the headway (time between trains) can be no greater than 25% more than the scheduled headway. This provides a percentage of trains passing the standard, but does not account for extra service operated, is not weighted to how many customers are waiting for the trains at different stations, does not distinguish between relatively minor gaps in service and major delays, and is not a true measurement of time customers spend waiting on the platform.” — MTA
                                </p>
                            </div>
                        </article>
                    </section>
                </Scrolly>
                <Scrolly>
                    <section>
                        <figure>
                            <iframe title='MTA mean distance between failures plot' frameBorder='0' src='../plot_assets/MTA_article/plotly_fail.html'/>
                        </figure>
                        <article>
                            <div>
                                <p>
                                    “Mean Distance Between Failures (MDBF) reports how frequently car-related problems such as door failures, loss of motor power, or brake issues cause a delay of over five minutes. It is calculated by dividing the number of miles train cars run in service by the number of incidents due to car‐related problems.” — MTA
                                </p>
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
                <img src='../image_assets/MTA_article/dash_otp.jpg' alt='otp chart from the MTA dashboard' />
                <img src='../image_assets/MTA_article/dash_wait.jpg' alt='mean wait time chart from the MTA dashboard' />
                <p>
                    This is a perfect opportunity to weigh in on the <a href='https://qz.com/418083/its-ok-not-to-start-your-y-axis-at-zero/'>perennial debate</a> around <a href='https://guides.library.duke.edu/datavis/topten'>truncated y axes</a> with a concrete example. As is the case in most methodology questions, there are very few decisions that have a clear cut answer without room for nuance. When considering truncated y axes, one should express the question they are answering about their data in the decision.
                </p>
                <p>
                    In subway performance metrics, I don’t believe an axis that goes from 0-100% is truthfully expressing the question of whether the network is increasing or decreasing in performance. We do not care about a subway system that has a 0% On-Time Performance because such a system would not exist. We care more about comparing historic to current performance, and leaving a chart full of white space implies stability and lack of change in performance where that is not the case. It would be equally misleading if I were to reduce the axes to a percent or two to imply volatility where there is none, but there is a clear and consistent trend of worsening performance that is not insignificant across multiple metrics. For these reasons, the MTA should reconsider their philosophy for how they communicate data to the public.
                </p>
                <ParentSize>
                    {({ width, height }) => <Chart width={width} height={400} />}
                </ParentSize>
                </ArticleContainer>            
            </div>
        )
    }
}

export default MTADoom
