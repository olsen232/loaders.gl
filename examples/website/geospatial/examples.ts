// loaders.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

import type {Example} from './components/example-panel';

export const INITIAL_LOADER_NAME = 'GeoParquet';
export const INITIAL_EXAMPLE_NAME = 'Airports';
// export const INITIAL_LOADER_NAME = 'GeoJSON';
// export const INITIAL_EXAMPLE_NAME = 'Vancouver';

export const LOADERS_URL = 'https://raw.githubusercontent.com/visgl/loaders.gl/master';
const DECKGL_DATA_URL = 'https://raw.githubusercontent.com/visgl/deck.gl-data/master';
const PARQUET_PATH = '/formats/geoparquet';

const GEOARROW_TEST_DATA = `${LOADERS_URL}/modules/arrow/test/data/geoarrow`;

export const EXAMPLES: Record<string, Record<string, Example>> = {
  GeoArrow: {
    multipolygon_hole: {
      format: 'geoarrow',
      data: `${GEOARROW_TEST_DATA}/multipolygon_hole.arrow`,
      viewState: {longitude: 10.388, latitude: 1.447, zoom: 4}
    }
  },
  GeoParquet: {
    Airports: {
      format: 'geoparquet',
      data: `${LOADERS_URL}/modules/parquet/test/data/geoparquet/airports.parquet`,
      viewState: {longitude: -4.65, latitude: -29.76, zoom: 1.76}
    },
    'Countries (zstd)': {
      format: 'geoparquet',
      data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/formats/geoparquet/countries/countries_zstd.parquet',
      viewState: {
        height: 600,
        width: 800,
        pitch: 45,
        maxPitch: 60,
        bearing: 0,
        minZoom: 1,
        maxZoom: 30,
        zoom: 1.76,
        longitude: -4.65,
        latitude: -29.76
      },
      getTooltipData: function ({object}) {
        const {ADMIN, ...properties} = object?.properties || {};
        return {
          title: ADMIN as string,
          properties
        };
      }
    },
    'Major rivers (gzip)': {
      format: 'geoparquet',
      data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/formats/geoparquet/major-rivers/major-rivers_0.4.0_gzip.parquet',
      viewState: {
        height: 600,
        width: 800,
        pitch: 45,
        maxPitch: 60,
        bearing: 0,
        minZoom: 1,
        maxZoom: 30,
        zoom: 1.76,
        longitude: -4.65,
        latitude: -29.76
      },
      getTooltipData: function ({object}) {
        const {NAME, ...properties} = object?.properties || {};
        return {
          title: NAME as string,
          properties
        };
      }
    },
    'Fort Collins streets (brotli)': {
      format: 'geoparquet',
      data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/formats/geoparquet/fort-collins-streets/fort-collins-streets_0.4.0_brotli.parquet',
      viewState: {
        height: 600,
        width: 800,
        pitch: 45,
        maxPitch: 60,
        bearing: 0,
        minZoom: 1,
        maxZoom: 30,
        zoom: 13,
        longitude: -105.073,
        latitude: 40.542
      },
      getTooltipData: function ({object}) {
        const {STRNAME, ...properties} = object?.properties || {};
        return {
          title: STRNAME as string,
          properties
        };
      }
    },
    'Fort Collins address (no_compression)': {
      format: 'geoparquet',
      data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/formats/geoparquet/fort-collins-address/fort-collins-address_0.4.0_no_compression.parquet',
      viewState: {
        height: 600,
        width: 800,
        pitch: 45,
        maxPitch: 60,
        bearing: 0,
        minZoom: 1,
        maxZoom: 30,
        longitude: -105.1003626,
        latitude: 40.5529294,
        zoom: 13
      },
      layerProps: {
        getPointRadius: 5,
        pointRadiusScale: 1,
        pointRadiusUnits: 'meters'
      },
      getTooltipData: function ({object}) {
        const {STRNAME, UNIT, NUMBER, ...properties} = object?.properties || {};
        return {
          title: `${UNIT || NUMBER} ${STRNAME}`,
          properties
        };
      }
    }
  },
  GeoJSON: {
    Vancouver: {
      format: 'geojson',
      data: `${DECKGL_DATA_URL}/examples/geojson/vancouver-blocks.json`,
      viewState: {latitude: 49.254, longitude: -123.13}
    },
    Countries: {
      format: 'geojson',
      data: `${LOADERS_URL}/modules/geojson/test/data/countries.json`,
      viewState: {longitude: -4.65, latitude: -29.76, zoom: 1.76}
    }
  },
  GeoPackage: {
    Rivers: {
      format: 'geopackage',
      data: 'https://raw.githubusercontent.com/ngageoint/geopackage-js/master/test/fixtures/rivers.gpkg',
      viewState: {longitude: -4.65, latitude: 0, zoom: 1.76}
    }
  },
  FlatGeobuf: {
    Countries: {
      format: 'flatgeobuf',
      data: `${LOADERS_URL}/modules/flatgeobuf/test/data/countries.fgb`,
      viewState: {longitude: -4.65, latitude: -29.76, zoom: 1.76},
      layerProps: {getFillColor: (_, {index}) => [index % 255, 0, 0]}
    }
  },
  Shapefile: {
    'Countries and Graticules': {
      format: 'shapefile',
      data: `${LOADERS_URL}/modules/shapefile/test/data/graticules-and-countries/99bfd9e7-bb42-4728-87b5-07f8c8ac631c2020328-1-1vef4ev.lu5nk.shp`,
      viewState: {longitude: -4.65, latitude: -29.76, zoom: 1.76},
      layerProps: {getFillColor: (_, {index}) => [0, index % 255, 0]}
    },
    'SF Topography': {
      format: 'shapefile',
      data: `${DECKGL_DATA_URL}/test-data/shapefile/geo_export_14556060-0002-4a9e-8ef0-03da3e246166.shp`,
      viewState: {latitude: 37.75, longitude: -122.4, zoom: 11}
    }
  },

  KML: {
    'Congressional Districts': {
      format: 'kml',
      data: `${DECKGL_DATA_URL}/formats/kml/congressional-districts/cb_2022_us_cd118_20m.kml`,
      viewState: {latitude: 14.5, longitude: -78.13, zoom: 2.6},
      layerProps: {getFillColor: (_, {index}) => [index % 255, 0, 0]}
    }
  },

  TCX: {
    'TXC Sample': {
      format: 'tcx',
      data: `${LOADERS_URL}/modules/kml/test/data/tcx/tcx_sample.tcx`,
      viewState: {latitude: 37.89544935, longitude: -122.4883889, zoom: 16}
    }
  },

  GPX: {
    Trek: {
      format: 'gpx',
      data: `${LOADERS_URL}/modules/kml/test/data/gpx/trek.gpx`,
      viewState: {latitude: 44.907783722, longitude: 6.08, zoom: 13}
    }
  },

  GeoArrowTest: {
    line: {format: 'geoarrow', data: `${GEOARROW_TEST_DATA}/line.arrow`},
    multiline: {format: 'geoarrow', data: `${GEOARROW_TEST_DATA}/multiline.arrow`},
    multipoint: {format: 'geoarrow', data: `${GEOARROW_TEST_DATA}/multipoint.arrow`},
    multipolygon: {
      format: 'geoarrow',
      data: `${GEOARROW_TEST_DATA}/multipolygon.arrow`
    },
    multipolygon_hole: {
      format: 'geoarrow',
      data: `${GEOARROW_TEST_DATA}/multipolygon_hole.arrow`
    },
    point: {format: 'geoarrow', data: `${GEOARROW_TEST_DATA}/point.arrow`},
    polygon: {format: 'geoarrow', data: `${GEOARROW_TEST_DATA}/polygon.arrow`}
  },

  GeoParquetTest: getGeoParquetTestExamples(),

  KMLTests: {
    // TODO - size of features is excessive.
    'KML Sample': {
      format: 'kml',
      data: `${LOADERS_URL}/modules/kml/test/data/kml/KML_Samples.kml`,
      viewState: {latitude: 37.65, longitude: -121.7, zoom: 11}
    }
  }
};

// Add Geoparquet datasets

function getGeoParquetTestExamples() {
  const GeoParquet: Record<string, Example> = {};

  const compressions = ['snappy', 'gzip', 'brotli', 'no_compression'];
  const PARQUET_VERSION = '0.4.0';
  const parquetExtension = '.parquet';

  const files = [
    {name: 'Countries', urlPrefix: 'countries/countries', hasZstd: true},
    {name: 'Major rivers', urlPrefix: 'major-rivers/major-rivers'},
    {
      name: 'Fort Collins streets',
      urlPrefix: 'fort-collins-streets/fort-collins-streets',
      hasZstd: true,
      viewState: {
        longitude: -105.1003626,
        latitude: 40.5529294,
        zoom: 13
      }
    },
    {
      name: 'Fort Collins address',
      urlPrefix: 'fort-collins-address/fort-collins-address',
      viewState: {
        longitude: -105.1003626,
        latitude: 40.5529294,
        zoom: 13
      },
      layerProps: {
        getPointRadius: 5,
        pointRadiusScale: 1,
        pointRadiusUnits: 'meters'
      }
    }
  ];

  for (const file of files) {
    const {name, urlPrefix, hasZstd, layerProps, viewState} = file;
    for (const compression of compressions) {
      const data = `${DECKGL_DATA_URL}${PARQUET_PATH}/${urlPrefix}_${PARQUET_VERSION}_${compression}${parquetExtension}`;
      GeoParquet[`${name} (${compression})`] = {
        format: 'geoparquet',
        data,
        layerProps,
        viewState: {
          longitude: -4.65,
          latitude: -29.76,
          zoom: 1.76,
          ...viewState
        }
      };
    }
    if (hasZstd) {
      const data = `${DECKGL_DATA_URL}${PARQUET_PATH}/${urlPrefix}_zstd${parquetExtension}`;
      GeoParquet[`${name} (zstd)`] = {
        format: 'geoparquet',
        data,
        layerProps,
        viewState: {
          longitude: -4.65,
          latitude: -29.76,
          zoom: 1.76,
          ...viewState
        }
      };
    }
  }

  GeoParquet.NZBuildingFootprints = {
    format: 'geoparquet',
    data: 'https://storage.googleapis.com/open-geodata/linz-examples/nz-building-outlines.parquet',
    viewState: {
      latitude: 47.65,
      longitude: 7,
      zoom: 4.5,
      maxZoom: 20,
      maxPitch: 89,
      bearing: 0
    }
  };

  return GeoParquet;
}
