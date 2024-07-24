'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';
import { treeData } from './data';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface MarkerPosition {
  lat: number;
  lng: number;
  image: string;
}

const containerStyle = {
  width: '81vw',
  height: '95vh',
  marginTop: '-10px'
};

const center = {
  lat: 30.719501131607977,
  lng: 76.75201599220293
};

const paths = [
  { lat: 30.719429242132147, lng: 76.7506715812619 },
  { lat: 30.71842278384273, lng: 76.75150138514417 },
  { lat: 30.719158273626125, lng: 76.75276860502638 },
  { lat: 30.719268873108316, lng: 76.75265925102637 },
  { lat: 30.719362882568426, lng: 76.75280076796754 },
  { lat: 30.719252283194063, lng: 76.7529036893793 },
  { lat: 30.71945689193688, lng: 76.75314169514398 },
  { lat: 30.71976103926572, lng: 76.75324461655573 },
  { lat: 30.720579467313552, lng: 76.75259492514404 },
];

const paths2 = [
  { lat: 30.729037400226122, lng: 76.75301276159112 },
  { lat: 30.730627356783664, lng: 76.75548282631723 },
  { lat: 30.732026577285705, lng: 76.75428353954898 },
  { lat: 30.730520337823958, lng: 76.75177301810231 },
]

const paths3 = [
  { lat: 30.725211051227355, lng: 76.74373823497538 },
  { lat: 30.726800574148175, lng: 76.74653792636099 },
  { lat: 30.72704683591773, lng: 76.74633608814482 },
  { lat: 30.725468510944065, lng: 76.74355592948982 },
]

const options = {
  strokeColor: "green",
  fillColor: "#04ff00",
  strokeOpacity: 1,
  strokeWeight: 1,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
};

const Page = () => {
  const { toast } = useToast();

  const [mapLoaded, setMapLoaded] = useState(false);
  const [markers, setMarkers] = useState<MarkerPosition[]>([]);
  const [selectedTree, setSelectedTree] = useState('');
  const [selectedTreeImage, setSelectedTreeImage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [trees, setTrees] = useState(treeData);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  }

  const handleTreeClick = (
    treeName: string,
    treeImage: string
  ) => {
    setSelectedTree(treeName);
    setSelectedTreeImage(treeImage);
  }

  const mapRef = useRef<GoogleMap | null>(null);

  const handleMapLoad = useCallback(() => {
    setMapLoaded(true);
  }, []);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (!selectedTree) {
      toast({
        title: 'Failed',
        description: "Please select a tree to plant",
        variant: 'destructive'
      });
      return;
    }

    // Get the selected tree data
    const selectedTreeData = trees.find(tree => tree.name === selectedTree);

    if (selectedTreeData && selectedTreeData.left <= 0) {
      toast({
        title: 'Failed',
        description: "Please purchase more plants to add",
        variant: 'destructive'
      });
      return;
    }

    const clickedPosition: MarkerPosition = {
      lat: event.latLng?.lat() || 0,
      lng: event.latLng?.lng() || 0,
      image: selectedTreeImage
    };

    // Check if the clicked position is inside the polygon
    const isInsidePolygon = google.maps.geometry.poly.containsLocation(
      new google.maps.LatLng(clickedPosition.lat, clickedPosition.lng),
      new google.maps.Polygon({ paths })
    );

    if (!isInsidePolygon) {
      toast({
        title: 'Failed',
        description: "Cannot plant tree outside the provided area",
        variant: 'destructive'
      });
      return;
    }

    // Add marker
    setMarkers(prevMarkers => [...prevMarkers, clickedPosition]);

    // Decrease the count of the selected tree
    setTrees(prevTrees =>
      prevTrees.map(tree =>
        tree.name === selectedTree ? { ...tree, left: tree.left - 1 } : tree
      )
    );
  };

  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [isWatering, setIsWatering] = useState(false);

  const handleMarkerClick = (index: number) => {
    setSelectedMarker(index);
  };

  const handleWaterClick = () => {
    if (selectedMarker === null) return; // Ensure a marker is selected
    setIsWatering(true);
    setTimeout(() => {
      setIsWatering(false);
      setSelectedMarker(null);
    }, 10000); // 10 seconds for the animation duration
  };

  return (
    <div className='-z-10 border-none outline-none'>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API!}>
        <GoogleMap
          ref={mapRef}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={handleMapLoad}
          onClick={handleMapClick}
        >
          {mapLoaded && (
            <>
              {markers.map((marker, index) => (
                <React.Fragment key={index}>
                  <Marker
                    position={marker}
                    icon={{ url: marker.image, scaledSize: new google.maps.Size(64, 64) }}
                    onClick={() => handleMarkerClick(index)}
                  />
                  {selectedMarker === index && !isWatering && (
                    <WaterButtonOverlay
                      position={marker}
                      onWaterClick={handleWaterClick}
                    />
                  )}
                  {selectedMarker === index && isWatering && (
                    <WateringAnimationOverlay position={marker} />
                  )}
                </React.Fragment>
              ))}
              <Polygon paths={paths} options={options} />
              <Polygon paths={paths2} options={options} />
              <Polygon paths={paths3} options={options} />
            </>
          )}
        </GoogleMap>
      </LoadScript>

      <div className='fixed top-10 right-0'>
        <div
          className='button absolute right-0 top-20 rounded-l-full bg-black p-4'
          onClick={toggleContent}
        >
          {!isOpen ?
            <ArrowLeftIcon className='text-white' />
            :
            <ArrowRightIcon className='text-white' />
          }
        </div>
        <div
          className={`content oveflow-x-auto absolute right-0 top-36 grid h-[60vh] w-[38vw] transform grid-cols-3 items-center justify-center gap-4 overflow-x-auto rounded-l-lg bg-white p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[50rem]'}`}
        >
          {trees.map((tree, index) => (
            <div
              key={index}
              className={`flex h-[150px] w-[150px] flex-col items-center justify-center  rounded-lg border p-2 text-center ${selectedTree === tree.name ? 'border-blue-500' : 'border-gray-300'
                }`}
              onClick={() =>
                handleTreeClick(tree.name, tree.image)
              }
            >
              <img
                src={tree.image}
                alt={tree.name}
                className='mb-2 h-20'
              />
              <p className='text-sm font-semibold'>{tree.name}</p>
              <p className='text-xs text-gray-500'>Left: {tree.left}</p>
            </div>
          ))}
          {/* Button to unselect plant */}
          <Button onClick={() => setSelectedTree('')}>
            Unselect Plant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;


import { OverlayView } from '@react-google-maps/api';

interface WaterButtonOverlayProps {
  position: google.maps.LatLngLiteral;
  onWaterClick: () => void;
}

const WaterButtonOverlay: React.FC<WaterButtonOverlayProps> = ({ position, onWaterClick }) => {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div style={{ position: 'absolute', transform: 'translate(-50%, -100%)' }} className='mt-10'>
        <Button onClick={onWaterClick}>Water Plant</Button>
      </div>
    </OverlayView>
  );
};


interface WateringAnimationOverlayProps {
  position: google.maps.LatLngLiteral;
}

const WateringAnimationOverlay: React.FC<WateringAnimationOverlayProps> = ({ position }) => {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)' }} className='mt-48 -ml-40'>
        <div className='watering-animation'>
          <div className="water-jar"></div>
          <div className="water"></div>
        </div>
      </div>
    </OverlayView>
  );
};
