import React from 'react';
import styles from './Chart.module.scss';
import { appleStock } from '@vx/mock-data';
import { Group } from '@vx/group';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AreaClosed } from '@vx/shape';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { LinearGradient } from '@vx/gradient';
import { extent, max } from 'd3-array';
import { useTooltip, TooltipWithBounds } from '@vx/tooltip';
import { localPoint } from '@vx/event';

const Chart = ({width, height}) => {

    const data = appleStock;

    const {
      tooltipData,
      tooltipLeft,
      tooltipTop,
      tooltipOpen,
      showTooltip,
      hideTooltip,
    } = useTooltip();

    const handleMouseOver = (event, datum) => {
      const coords = localPoint(event.target.ownerSVGElement, event);
      showTooltip({
        tooltipLeft: coords.x,
        tooltipTop: coords.y,
        tooltipData:datum
      });
    }
    
    const x = d => new Date(d.date);
    const y = d => d.close;

    // Bounds
    const margin = {
      top: 60,
      bottom: 60,
      left: 80,
      right: 80,
    };

    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const xScale = scaleTime({
      range: [0, xMax],
      domain: extent(data, x)
    });

    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(data, y)],
    });

    return (
        <div className={styles.Chart}>
            <svg width={width} height={height}>
                <LinearGradient
                from='#fbc2eb'
                to='#a6c1ee'
                id='gradient'
                />

                <Group top={margin.top} left={margin.left}>

                    <AreaClosed
                    data={data}
                    yScale={yScale}
                    x={d => xScale(x(d))}
                    y={d => yScale(y(d))}
                    fill={"url(#gradient)"}
                    stroke={""}
                    onMouseOver={handleMouseOver}
                    onMouseOut={hideTooltip}
                    />

                    <AxisLeft
                    scale={yScale}
                    top={0}
                    left={0}
                    label={'Close Price ($)'}
                    stroke={'#1b1a1e'}
                    tickTextFill={'#1b1a1e'}
                    />

                    <AxisBottom
                    scale={xScale}
                    top={yMax}
                    label={'Years'}
                    stroke={'#1b1a1e'}
                    tickTextFill={'#1b1a1e'}
                    />

                </Group>
            </svg>

            {tooltipOpen && (
              <TooltipWithBounds
              key={Math.random()}
              top={tooltipTop}
              left={tooltipLeft}
              >
                Data value <strong>{tooltipData}</strong>
              </TooltipWithBounds>
            )}
        </div>
    )

}

export default Chart