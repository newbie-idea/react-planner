import {BoxHelper, Box3, ObjectLoader} from 'three';
import {loadObjWithMaterial} from '../../utils/load-obj';
import path from 'path';
import convert from 'convert-units';

import React from 'react';

import {hinges, textOffsetBD, xOffset1, xOffset2, doorOffset1, doorOffset2, kickboardOffset, textOffset1, textOffset2} from '../../utils/obj-exports';
import {sceneValues, cbu750GableArrays} from '../../utils/mtl-exports';

let globalTexture;
let worktopTexture;
let cbu750GableLeftValue;
let cbu750GableRightValue;
let kickboardValue;
let hingeNumber;

const mtl = require('./corner-base-unit-750.mtl');
const obj = require('./corner-base-unit-750.obj');
const img1 = require('../../textures/white.jpg');
const img2 = require('../../textures/beech.jpg');
const img3 = require('../../textures/ivory.jpg');
const img4 = require('../../textures/light-oak.jpg');
const img5 = require('../../textures/lissa-oak.jpg');
const img6 = require('../../textures/maple.jpg');
const img7 = require('../../textures/medium-walnut.jpg');
const img8 = require('../../textures/natural-oak.jpg');
const img9 = require('../../textures/pippy-oak.jpg');
const img10 = require('../../textures/cream.jpg');
const img11 = require('../../textures/metal.jpg');

const width = {length: 750, unit: 'mm'};
const depth = {length: 750, unit: 'mm'};
const height = {length: 870, unit: 'mm'};

let cachedJSONCornerBaseUnit750 = null;

export default {
  name: 'Corner Base Unit 750',
  prototype: 'items',

  info: {
    title: 'CBU 750',
    tag: ['corner', 'base'],
    description: 'Corner Base Unit 750',
    image: require('../../images/CBU-750.png')
  },

  properties: {
    width: {
      label: 'width',
      type: 'hidden',
      defaultValue: {
        length: 750,
        unit: 'mm'
      }
    },
    depth: {
      label: 'depth',
      type: 'hidden',
      defaultValue: {
        length: 750,
        unit: 'mm'
      }
    },
    height: {
      label: 'height',
      type: 'hidden',
      defaultValue: {
        length: 870,
        unit: 'mm'
      }
    },
    altitude: {
      label: 'altitude',
      type: 'hidden',
      defaultValue: {
        length: 0,
        unit: 'mm'
      }
    },
    patternColor: {
      label: '2D color',
      type: 'color',
      defaultValue: '#FEF9E7'
    },
	  gableLeft: {
		  label: 'Gabel Left',
		  type: 'checkbox',
		  defaultValue: false,
		  checked: true
	  },
	  gableRight: {
		  label: 'Gable Right',
		  type: 'checkbox',
		  defaultValue: false,
		  checked: true
    },
    hingeSide: {
      label: 'Hinge Side',
      type: 'enum',
      defaultValue: hinges[0],
      values: hinges
    },
    kickboard: {
      label: 'Kickboard',
      type: 'checkbox',
      defaultValue: true,
      checked: false
    },
    kickboardLength: {
      label: 'Kickboard Length',
      type: 'hidden',
      defaultValue: {
        length: 405,
        unit: 'mm'
      }
    },
    comment: {
      label: 'Comment',
      type: 'string',
      defaultValue: ''
    },
    numberOfFeet: {
      label: 'Number of Feet',
      type: 'hidden',
      defaultValue: 8
    },
    numberOfHandles: {
      label: 'Number of Handles',
      type: 'hidden',
      defaultValue: 2
    }
  },

  render2D: function (element, layer, scene) {

    globalTexture = scene.globalTexture;
    worktopTexture = scene.worktopTexture;
    sceneValues(globalTexture, worktopTexture);

    cbu750GableLeftValue = element.properties.get('gableLeft');
    cbu750GableRightValue = element.properties.get('gableRight');
    cbu750GableArrays(cbu750GableLeftValue, cbu750GableRightValue);

    kickboardValue = element.properties.get('kickboard');

    hingeNumber = element.properties.get('hingeSide');

    let newWidth = element.properties.getIn(['width', 'length']) * 0.1;
    let newDepth = element.properties.getIn(['depth', 'length']) * 0.1;
    let fillValue = element.selected ? '#99c3fb' : element.properties.get('patternColor');
    let angle = element.rotation + 90;

    let textOffsetA = 7.5;
	  let textOffsetC = 5;

    let textRotation = 0;
    if (Math.sin(angle * Math.PI / 180) < 0) {
      textRotation = 180;

      textOffsetA = 5;
	    textOffsetC = 7.5;
    }

    let doorInvert1 = 0;
    let doorInvert2 = 0;
    
    if (hingeNumber == 1) {

      doorInvert1 = doorOffset1;
      doorInvert2 = doorOffset2;
    }

    let lineStyle = { stroke: element.selected ? '#0096fd' : '#000', strokeWidth: '1px' };
    let lineStyleB = { stroke: '#000', strokeWidth: '0px' };
    let lineStyleA = { stroke: '#000', strokeWidth: '0px' };
    let kickboardLineStyle = { stroke: '#E74C3C', strokeWidth: '0px' };
    
    if (true == cbu750GableLeftValue) {
	    lineStyleB = { stroke: '#000', strokeWidth: '1px' };
    }
    
    if (true == cbu750GableRightValue) {
	    lineStyleA = { stroke: '#000', strokeWidth: '1px' };
    }
    
    if (true == kickboardValue) {
	    kickboardLineStyle = { stroke: '#E74C3C', strokeWidth: '1px' };
    }

    return (
      <g transform={`translate(${-newWidth / 1},${-newDepth / 1}) scale(2,2)`}>
        <rect key='1' x={newWidth - 59} y={0} width={59} height={newDepth}
          style={{ stroke: element.selected ? '#0096fd' : '#000', strokeWidth: '0px', fill: fillValue }} />
		    <rect key='2' x={0} y={newDepth -59} width={newWidth} height={59}
          style={{ stroke: element.selected ? '#0096fd' : '#000', strokeWidth: '0px', fill: fillValue }} />
		    //C Side
		    <line
		      x1={newWidth}
		      y1={newDepth}
		      x2={0} 
		      y2={newDepth}
          style={lineStyle}
		    />
		    //D Side
		    <line
		      x1={newWidth}
		      y1={newDepth}
		      x2={newWidth} 
		      y2={0}
          style={lineStyle}
		    />
		    //A Side
		    <line
		      x1={newWidth}
		      y1={0}
		      x2={newWidth - 59} 
		      y2={0}
          style={lineStyle}
		    />
		    //A Side X
		    <line 
		      x1={newWidth - 44.25 - xOffset1}
		      y1={0}
		      x2={newWidth - 44.25 + xOffset1}
		      y2={0 + xOffset2}
          style={lineStyleA}
		    />
		    <line 
		      x1={newWidth - 44.25 + xOffset1}
		      y1={0}
		      x2={newWidth - 44.25 - xOffset1}
		      y2={0 + xOffset2}
          style={lineStyleA}
		    />
		    //B Side
		    <line
		      x1={0}
		      y1={newDepth}
		      x2={0} 
		      y2={newDepth - 59}
          style={lineStyle}
		    />
		    //B Side X
		    <line 
		      x1={0}
		      y1={newDepth - 44.25 + xOffset1}
		      x2={0 + xOffset2}
		      y2={newDepth - 44.25 - xOffset1}
          style={lineStyleB}
		    />
		    <line 
		      x1={0}
		      y1={newDepth - 44.25 - xOffset1}
		      x2={0 + xOffset2}
		      y2={newDepth - 44.25 + xOffset1}
          style={lineStyleB}
		    />
		    //Inner A
		    <line
		      x1={newWidth - 59} 
		      y1={0}
		      x2={newWidth - 59} 
		      y2={newDepth - 59}
          style={lineStyle}
		    />
		    //Inner A Door
		    <line
		      x1={newWidth - 59 - doorInvert2} 
		      y1={0 + doorInvert2}
		      x2={newWidth - 59 - doorOffset2 + doorInvert2} 
		      y2={newDepth - 59 - doorOffset2 + doorInvert2}
          style={lineStyle}
		    />
		    //Inner B
		    <line
		      x1={0}
		      y1={newDepth - 59}
		      x2={newWidth - 59} 
		      y2={newDepth - 59}
          style={lineStyle}
		    />
		    //Inner B Door
		    <line
		      x1={0 + doorInvert1}
		      y1={newDepth - 59 - doorInvert1}
		      x2={newWidth - 59 - doorOffset1 + doorInvert1} 
		      y2={newDepth - 59 - doorOffset1 + doorInvert1}
          style={lineStyle}
		    />
        //Kickboard
        <line
		      x1={newWidth - 59 + kickboardOffset} 
		      y1={0}
		      x2={newWidth - 59 + kickboardOffset} 
		      y2={newDepth - 59 + kickboardOffset}
          style={kickboardLineStyle}
		    />
        <line
		      x1={0}
		      y1={newDepth - 59 + kickboardOffset}
		      x2={newWidth - 59 + kickboardOffset} 
		      y2={newDepth - 59 + kickboardOffset}
          style={kickboardLineStyle}
		    />
        <text key='2' x='0' y='0'
          transform={`translate(${newWidth - 59}, ${newDepth - 59 + textOffset1}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: '11px' }}>
          {element.name}
        </text>
        <text key='3' x='0' y='0'
          transform={`translate(${newWidth - 29.5}, ${0 - textOffsetA}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: element.selected ? '11px' : '0px' }}>
          {"A"}
        </text>
		    <text key='4' x='0' y='0'
          transform={`translate(${0 - textOffsetBD}, ${newDepth - 29.5}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: element.selected ? '11px' : '0px' }}>
          {"B"}
        </text>
		    <text key='5' x='0' y='0'
          transform={`translate(${newWidth / 2}, ${newDepth + textOffsetC}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: element.selected ? '11px' : '0px' }}>
          {"C"}
        </text>
		    <text key='6' x='0' y='0'
          transform={`translate(${newWidth + textOffsetBD}, ${newDepth / 2}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: element.selected ? '11px' : '0px' }}>
          {"D"}
        </text>
      </g>
    )
  },

  render3D: function (element, layer, scene) {

    let onLoadItem = (object) => {
      let newWidth = element.properties.getIn(['width', 'length']);
      let newDepth = element.properties.getIn(['depth', 'length']);
      let newHeight = element.properties.getIn(['height', 'length']);
      let newAltitude = element.properties.getIn(['altitude', 'length']) * 2 / 10;

      object.scale.set(newWidth / width.length, newHeight / height.length, newDepth / depth.length);

      let box = new BoxHelper(object, 0x99c3fb);
      box.material.linewidth = 2;
      box.material.depthTest = false;
      box.renderOrder = 1000;
      box.visible = element.selected;
      object.add(box);

      // Normalize the origin of this item
      let boundingBox = new Box3().setFromObject(object);

      let center = [
        (boundingBox.max.x - boundingBox.min.x) / 2 + boundingBox.min.x,
        (boundingBox.max.y - boundingBox.min.y) / 2 + boundingBox.min.y,
        (boundingBox.max.z - boundingBox.min.z) / 2 + boundingBox.min.z];

      object.position.x -= center[0];
      object.position.y += newHeight / 10 + newAltitude - 88;
      object.position.z -= center[2];

      return object;
    };

    if (cachedJSONCornerBaseUnit750) {
      let loader = new ObjectLoader();
      let object = loader.parse(cachedJSONCornerBaseUnit750);
      return Promise.resolve(onLoadItem(object));
    }

    return loadObjWithMaterial(mtl, obj, path.dirname(img1) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img2) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img3) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img4) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img5) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img6) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img7) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img8) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img9) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img10) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img11) + '/')
      .then(object => {
        cachedJSONCornerBaseUnit750 = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONCornerBaseUnit750))
      });
  },

  updateRender3D: ( element, layer, scene, mesh, oldElement, differences, selfDestroy, selfBuild ) => {

    let noPerf = () => { selfDestroy(); return selfBuild(); };

    if( differences.indexOf('selected') !== -1 )
    {
      mesh.traverse(( child ) => {
        if ( child instanceof BoxHelper ) {
          child.visible = element.selected;
        }
      });

      return Promise.resolve(mesh);
    }

    if( differences.indexOf('rotation') !== -1 ) {
      mesh.rotation.y = element.rotation * Math.PI / 180;
      return Promise.resolve(mesh);
    }

    return noPerf();
  }
};
