import {BoxHelper, Box3, ObjectLoader, BoxGeometry, Mesh} from 'three';
import {loadObjWithMaterial} from '../../utils/load-obj';
import path from 'path';
import convert from 'convert-units';

import React from 'react';

import {hinges, textOffsetBD, xOffset1, xOffset2, doorOffset1, doorOffset2, kickboardOffset, textOffset1, textOffset2} from '../../utils/obj-exports';
import {sceneValues} from '../../utils/mtl-exports';

let globalTexture;
let worktopTexture;
let kickboardValue;
let hingeNumber;

const mtl = require('./washing-machine.mtl');
const obj = require('./washing-machine.obj');
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

const width = {length: 600, unit: 'mm'};
const depth = {length: 590, unit: 'mm'};
const height = {length: 870, unit: 'mm'};

let cachedJSONWashingMachine = null;

export default {
  name: 'Washing Machine',
  prototype: 'items',

  info: {
    title: 'WM',
    tag: ['single', 'base'],
    description: 'Washing Machine',
    image: require('../../images/WM.png')
  },

  properties: {
    width: {
      label: 'width',
      type: 'length-measure',
      defaultValue: {
        length: 600,
        unit: 'mm'
      }
    },
    depth: {
      label: 'depth',
      type: 'length-measure',
      defaultValue: {
        length: 590,
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
    comment: {
      label: 'Comment',
      type: 'string',
      defaultValue: ''
    }
  },

  render2D: function (element, layer, scene) {

    globalTexture = scene.globalTexture;
    worktopTexture = scene.worktopTexture;
    sceneValues(globalTexture, worktopTexture);

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
    
    if (hingeNumber == 1) {

      doorInvert1 = doorOffset1;
    }

    let lineStyle = { stroke: element.selected ? '#0096fd' : '#000', strokeWidth: '1px' };
    let kickboardLineStyle = { stroke: '#E74C3C', strokeWidth: '0px' };

    if (true == kickboardValue) {
	    kickboardLineStyle = { stroke: '#E74C3C', strokeWidth: '1px' };
    }

    return (
      <g transform={`translate(${-newWidth / 1},${-newDepth / 1}) scale(2,2)`}>
        <rect key='1' x='0' y='0' width={newWidth} height={newDepth}
          style={{ stroke: element.selected ? '#0096fd' : '#000', strokeWidth: '1px', fill: fillValue }} />
        //Door
		    <line
		      x1={0 + doorInvert1}
		      y1={0 - doorInvert1}
		      x2={newWidth - doorOffset1 + doorInvert1} 
		      y2={0 - doorOffset1 + doorInvert1}
          style={lineStyle}
		    />
        //Kickboard
        <line
		      x1={0}
		      y1={0 + kickboardOffset}
		      x2={newWidth} 
		      y2={0 + kickboardOffset}
          style={kickboardLineStyle}
		    />
        <text key='2' x='0' y='0'
          transform={`translate(${newWidth / 2}, ${0 + textOffset2}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: '11px' }}>
          {element.name}
        </text>
        <text key='3' x='0' y='0'
          transform={`translate(${newWidth / 2}, ${0 + textOffset1}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: '11px' }}>
          {newWidth * 10}
        </text>
        <text key='4' x='0' y='0'
          transform={`translate(${newWidth / 2}, ${0 - textOffsetA}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: element.selected ? '11px' : '0px' }}>
          {"A"}
        </text>
		    <text key='5' x='0' y='0'
          transform={`translate(${0 - textOffsetBD}, ${newDepth / 2}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: element.selected ? '11px' : '0px' }}>
          {"B"}
        </text>
		    <text key='6' x='0' y='0'
          transform={`translate(${newWidth / 2}, ${newDepth + textOffsetC}) scale(0.5,-0.5) rotate(${textRotation})`}
          style={{ textAnchor: 'middle', fontSize: element.selected ? '11px' : '0px' }}>
          {"C"}
        </text>
		    <text key='7' x='0' y='0'
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
      let geometry = new BoxGeometry(newWidth, newHeight, newDepth);

      object.scale.set(newWidth / width.length, newHeight / height.length, newDepth / depth.length);

      let mesh = new Mesh(geometry);

      let box = new BoxHelper(mesh, object, 0x99c3fb);
      box.material.linewidth = 2;
      box.material.depthTest = false;
      box.renderOrder = 1000;
      box.visible = element.selected;
      object.add(box);
      mesh.add(box);

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

    if (cachedJSONWashingMachine) {
      let loader = new ObjectLoader();
      let object = loader.parse(cachedJSONWashingMachine);
      return Promise.resolve(onLoadItem(object));
    }

    return loadObjWithMaterial(mtl, obj, path.dirname(img1) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img2) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img3) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img4) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img5) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img6) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img7) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img8) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img9) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img10) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
      });
	  
	  return loadObjWithMaterial(mtl, obj, path.dirname(img11) + '/')
      .then(object => {
        cachedJSONWashingMachine = object.toJSON();
        let loader = new ObjectLoader();
        return onLoadItem(loader.parse(cachedJSONWashingMachine))
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
