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
  width: '1250px',
  height: '640px',
  marginTop: '-10px'
};

const center = {
  lat: 30.767883784462025,
  lng: 76.58074212763759
};

const initialMarkers: MarkerPosition[] = JSON.parse(localStorage.getItem('markers') || '[]');
const initialTrees = JSON.parse(localStorage.getItem('trees') || JSON.stringify(treeData));

const paths = [
  { lat: 30.766980345891795, lng: 76.5767939161225 },
  { lat: 30.766058461057437, lng: 76.58477616983781 },
  { lat: 30.76203893999949, lng: 76.58544135764743 },
  { lat: 30.76301617845277, lng: 76.57733035790443 }
];

const options = {
  strokeColor: "blue",
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
  const [markers, setMarkers] = useState<MarkerPosition[]>(initialMarkers);
  const [selectedTree, setSelectedTree] = useState('');
  const [selectedTreePrice, setSelectedTreePrice] = useState(0);
  const [selectedTreeImage, setSelectedTreeImage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [trees, setTrees] = useState(initialTrees);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  }

  const handleTreeClick = (
    treeName: string,
    treePrice: number,
    treeImage: string
  ) => {
    setSelectedTree(treeName);
    setSelectedTreePrice(treePrice);
    setSelectedTreeImage(treeImage);
  }

  const mapRef = useRef<GoogleMap | null>(null);

  const handleMapLoad = useCallback(() => {
    setMapLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('markers', JSON.stringify(markers));
  }, [markers]);

  useEffect(() => {
    localStorage.setItem('trees', JSON.stringify(trees));
  }, [trees]);

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
    const selectedTreeData = trees.find((tree:any) => tree.name === selectedTree);

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
    setTrees((prevTrees:any) => 
      prevTrees.map((tree:any) => 
        tree.name === selectedTree ? { ...tree, left: tree.left - 1 } : tree
      )
    );
  };

  return (
    <div className='-z-10'>
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
                <Marker key={index} position={marker} icon={{ url: marker.image, scaledSize: new google.maps.Size(64, 64) }} />
              ))}
              <Polygon paths={paths} options={options} />
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
          {trees.map((tree:any, index:any) => (
            <div
              key={index}
              className={`flex h-[150px] w-[150px] flex-col items-center justify-center  rounded-lg border p-2 text-center ${selectedTree === tree.name ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => handleTreeClick(tree.name, tree.left, tree.image)}
            >
              <img src={tree.image} alt={tree.name} className='mb-2 h-20' />
              <p>{tree.name}</p>
              <p>{tree.left} Left</p>
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