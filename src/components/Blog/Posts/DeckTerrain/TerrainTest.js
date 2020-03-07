import React from 'react';
import DeckGL from '@deck.gl/react';

import { TerrainLayer } from '@deck.gl/geo-layers';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamJpeG9uIiwiYSI6ImNqd3pmYm15djFmajEzeW50bTcyNjlubXoifQ.IKupMx-qfYG4Gchw_Utupg'; 

const INITIAL_VIEW_STATE = {
  latitude: 46.24,
  longitude: -122.18,
  zoom: 11.5,
  bearing: 140,
  pitch: 60
};

const TERRAIN_IMAGE = `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.png?access_token=${MAPBOX_TOKEN}`;
const SURFACE_IMAGE = `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=${MAPBOX_TOKEN}`;

const ELEVATION_DECODER = {
  rScaler: 6553.6,
  gScaler: 25.6,
  bScaler: 0.1,
  offset: -10000
};

export default function TerrainTest({
  surfaceImage = SURFACE_IMAGE,
  wireframe = false,
  initialViewState = INITIAL_VIEW_STATE
}) {
  const layer = new TerrainLayer({
    id: 'terrain',
    minZoom: 0,
    maxZoom: 23,
    strategy: 'no-overlap',
    elevationDecoder: ELEVATION_DECODER,
    terrainImage: TERRAIN_IMAGE,
    surfaceImage,
    wireframe,
    color: [255, 255, 255]
  });

  return <DeckGL initialViewState={initialViewState} controller={true} layers={[layer]} />;
}