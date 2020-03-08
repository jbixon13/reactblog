import React from 'react';
import DeckGL from '@deck.gl/react';
import { TerrainLayer } from '@deck.gl/geo-layers';

const INITIAL_VIEW_STATE = {
  latitude: 37.1,
  longitude: -118.86,
  zoom: 13,
  bearing: -100,
  pitch: 56
};

export default function TerrainTest({
  initialViewState = INITIAL_VIEW_STATE
}) {

  const layer = new TerrainLayer({
    minZoom: 0,
    maxZoom: 18,
    strategy: 'no-overlap',
    elevationDecoder: {
      rScaler: 256,
      gScaler: 1,
      bScaler: 1/256,
      offset: -32768
    },
    terrainImage: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
    surfaceImage: 'https://wms.chartbundle.com/tms/1.0.0/sec/{z}/{x}/{y}.png?origin=nw'
  });

  return <DeckGL initialViewState={initialViewState} controller={true} layers={[layer]} />;
};