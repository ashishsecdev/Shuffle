import React, {useState } from 'react';

import { securityFramework } from "./LandingpageUsecases.jsx";
import CytoscapeComponent from 'react-cytoscapejs';
import frameworkStyle from '../frameworkStyle.jsx';
import uuid from "uuid";

import { 
	Button 
} from '@material-ui/core';

import * as edgehandles from "cytoscape-edgehandles";
import * as cytoscape from "cytoscape";

cytoscape.use(edgehandles);

export const usecases = {
	"None": {
		"manual": [],
		"automated": [],
	},
	"Phishing": {
		"manual": [],
		"automated": [
			{
				"source":	"BOTTOM_LEFT",
				"target":	"COMMS",
				"description": "Email received",
				"human": false,
			},
			{
				"source":	"COMMS",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"human": false,
			},
			{
				"source":	"INTEL",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"ASSETS",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"SIEM",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"INTEL",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"COMMS",
				"human": false,
			},
			{
				"source":	"CASES",
				"target":	"EDR & AV",
				"human": true,
			},
	]},
	"Ransomware": {
		"manual": [],
		"automated": [
			{
				"source":	"BOTTOM_LEFT",
				"target":	"EDR & AV",
				"description": "EDR & AV alert",
				"human": false,
			},
			{
				"source":	"EDR & AV",
				"target":	"SHUFFLE",
				"description": "",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"EDR & AV",
				"human": false,
				"description": "isolate",
			},
			{
				"source":	"SHUFFLE",
				"target":	"IAM",
				"human": false,
				"description": "Block access",
			},
			{
				"source":	"SHUFFLE",
				"target":	"COMMS",
				"description": "Notify oncall and affected user",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"description": "Create enriched alert",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"human": false,
			},
			{
				"source":	"CASES",
				"target":	"EDR & AV",
				"description": "Validate alert",
				"human": true,
			},
		]
	},
	"Exploits": {
		"manual": [],
		"automated": [
			{
				"source":	"TOP_LEFT",
				"target":	"NETWORK",
				"description": "Exploit",
				"human": false,
			},
			{
				"source":	"NETWORK",
				"target":	"SIEM",
				"description": "WAF alert",
				"human": false,
			},
			{
				"source":	"SIEM",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"COMMS",
				"human": false,
			},
			{
				"source":	"INTEL",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"ASSETS",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"IAM",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"CASES",
				"target":	"EDR & AV",
				"human": true,
			},
		]
	},	
	"AWS S3 honeypots": {
		"manual": [],
		"automated": [
			{
				"source":	"TOP_LEFT",
				"target":	"SIEM",
				"description": "S3 logs",
				"human": false,
			},

			{
				"source":	"SIEM",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"INTEL",
				"description": "Add sighting",
				"human": false,
			},
			{
				"source":	"INTEL",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"description": "Create case",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"NETWORK",
				"description": "Block IP",
				"human": false,
			},
		]
	},
	"SIEM alerts": {
		"manual": [],
		"automated": [
			{
				"source":	"TOP_LEFT",
				"target":	"SIEM",
				"description": "Syslog",
				"human": false,
			},
			{
				"source":	"SIEM",
				"target":	"SHUFFLE",
				"description": "Alerts",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"INTEL",
				"description": "Enrich",
				"human": false,
			},
			{
				"source":	"INTEL",
				"target":	"SHUFFLE",
				"human": false,
			},
			{
				"source":	"IAM",
				"target":	"SHUFFLE",
				"human": false,
				"description": "enrich",
			},
			{
				"source":	"SHUFFLE",
				"target":	"IAM",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"COMMS",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"EDR & AV",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"EDR & AV",
				"human": true,
			},
		]
	},
	"New Detections": {
		"manual": [],
		"automated": [
			{
				"source":	"TOP_LEFT",
				"target":	"SIEM",
				"description": "Hypothesis",
				"human": true,
			},
			{
				"source":	"SIEM",
				"target":	"SIEM",
				"description": "Create rule",
				"human": true,
			},
			{
				"source":	"SIEM",
				"target":	"NETWORK",
				"description": "Create rule",
				"human": true,
			},
			{
				"source":	"NETWORK",
				"target":	"EDR & AV",
				"description": "Create rule",
				"human": true,
			},
			{
				"source":	"SIEM",
				"target":	"SHUFFLE",
				"description": "Send alert",
				"human": false,
			},
			{
				"source":	"NETWORK",
				"target":	"SHUFFLE",
				"description": "Send alert",
				"human": false,
			},
			{
				"source":	"EDR & AV",
				"target":	"SHUFFLE",
				"description": "Send alert",
				"human": false,
			},
			{
				"source":	"INTEL",
				"target":	"SHUFFLE",
				"description": "Enrich IOCs",
				"human": false,
			},
			{
				"source":	"ASSETS",
				"target":	"SHUFFLE",
				"description": "Enrich hostnames etc.",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"description": "Create enriched alert",
				"human": false,
			},
		]
	},
	"Vulnerabilities": {
		"manual": [],
		"automated": [
			{
				"source":	"TOP_RIGHT",
				"target":	"ASSETS",
				"description": "New vuln",
				"human": false,
			},
			{
				"source":	"ASSETS",
				"target":	"SHUFFLE",
				"description": "Get vuln",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"description": "Raise ticket",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"COMMS",
				"description": "Notify owner",
				"human": false,
			},
			{
				"source":	"COMMS",
				"target":	"SHUFFLE",
				"description": "",
				"human": true,
			},
			{
				"source":	"SHUFFLE",
				"target":	"ASSETS",
				"description": "Auto-patch",
				"human": false,
			},
		]
	},
	"Approvals": {
		"manual": [],
		"automated": [
			{
				"source":	"TOP_LEFT",
				"target":	"CASES",
				"description": "New inquiry",
				"human": false,
			},
			{
				"source":	"CASES",
				"target":	"SHUFFLE",
				"description": "Get tickets",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"COMMS",
				"description": "Ask for approval",
				"human": false,
			},
			{
				"source":	"COMMS",
				"target":	"SHUFFLE",
				"human": true,
			},
			{
				"source":	"SHUFFLE",
				"target":	"ASSETS",
				"description": "Add to user",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"IAM",
				"description": "Approve access",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"human": false,
			},
		]
	},
	"Enrichment": {
		"manual": [],
		"automated": [
			{
				"source":	"TOP_LEFT",
				"target":	"CASES",
				"description": "Case updated",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"description": "Get and enrich ticket",
				"human": false,
			},
			{
				"source":	"IAM",
				"target":	"SHUFFLE",
				"description": "Get access rights",
				"human": false,
			},
			{
				"source":	"ASSETS",
				"target":	"SHUFFLE",
				"description": "Get relevant assets",
				"human": false,
			},
			{
				"source":	"INTEL",
				"target":	"SHUFFLE",
				"description": "Get relevant IPs",
				"human": false,
			},
			{
				"source":	"COMMS",
				"target":	"SHUFFLE",
				"description": "Find relevant mails & chats",
				"human": false,
			},
			{
				"source":	"EDR & AV",
				"target":	"SHUFFLE",
				"description": "Find incidents for host",
				"human": false,
			},
			{
				"source":	"SIEM",
				"target":	"SHUFFLE",
				"description": "Find info about hostname and user",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"SHUFFLE",
				"description": "Format info",
				"human": false,
			},
			{
				"source":	"SHUFFLE",
				"target":	"CASES",
				"description": "",
				"human": false,
			},
		]
	},
	"Draw": {
	}
}

const Framework = (props) => {
  const {globalUrl, isLoaded, showOptions, selectedOption, rolling, frameworkData, } = props;
	const [cy, setCy] = React.useState()
	const [edgesStarted, setEdgesStarted] = React.useState(false)

	const parsedFrameworkData = frameworkData === undefined ? 
		{
			"Cases": {},
			"IAM": {},
			"SIEM": {},
			"Assets": {},
			"Intel": {},
			"Comms": {},
			"Network": {},
			"EDR & AV": {},
		}
		: 
		frameworkData 

	// 0 = automated, 1 = manual
	const [usecaseType, setUsecaseType] = React.useState(0)
	const [selectedUsecase, setSelectedUsecase] = React.useState(selectedOption !== undefined ? selectedOption : "Phishing")


	const elements = []
	const surfaceColor = "#27292D"

  const onEdgeSelect = (event) => {
		console.log("Edge selected!")
		event.target.remove()
	}

	const changeUsecase = (value, type) => {
		//console.log("Value: ", value)	
		if (value === "Draw" && !edgesStarted) {
			setEdgesStarted(true)
			cy.edgehandles({
				handleNodes: (el) => {
					if (el.isNode() &&
					!el.data("isButton") &&
					!el.data("isDescriptor") &&
					el.data("type") !== "COMMENT") {
							return true 
					}

					return false
				},
				preview: false,
				toggleOffOnLeave: true,
				loopAllowed: function (node) {
					return false;
				},
			})

		}

		setSelectedUsecase(value)

		const allEdges = cy.edges().jsons()
		for (var key in allEdges) {
			const newedge = allEdges[key]
			const foundelement = cy.getElementById(newedge.data.id)
			if (foundelement !== undefined && foundelement !== null) {
				foundelement.remove()
			}
		}

		var found = false

		var parsedType = type === 1 ? "manual" : "automated"
		if (usecases === undefined || usecases === null) {
			return
		}

		const newedges = usecases[value][parsedType]
		for (var key in newedges) {
			newedges[key].label = parseInt(key)+1

			if (newedges[key].description !== undefined && newedges[key].description !== null && newedges[key].description.length > 0) {
				newedges[key].label = (parseInt(key)+1)+" "+newedges[key].description
			}

			cy.add({
				group: "edges", 
				data: newedges[key],
			})
		}

		//var a = cy.edges().animate(
		//{
    //    position: { x: 100, y: 100 }, 
    //    style: { lineColor: '#a79' }
    //},
    //{
    //    duration: 1000,
    //    queue: true
    //})

		//var b = cy.nodes().animate(
		//    {
		//        position: { x: 100, y: 100 },
		//        style: { backgroundColor: 'blue' }
		//    }, 
		//    {
		//        duration: 1000,                // This goes together in one brace
		//        queue: true                    // Use a boolean maybe
		//    }
		//)
		//
		//a.animation().play().promise()
		//.then(() => {
		//  b.animation().play()
		//})
	}


	if (cy !== undefined && cy.elements().length === 0) {
		//'background-image': 'data(small_image)',
		const shiftradius = 115
		const baselocationX = 285
		const baselocationY = 50 
		const shiftmodifier = 3

		const svgSize = 40 

		console.log("Framework: ", parsedFrameworkData)
		const defaultSize = "85px"
		const iconSize = "45px"
		const textMarginDefault = "14px"
		const textMarginImage = "60px"
		const nodes = [
			{
					group: "nodes",
					data: {
						is_valid: true,
						isValid: true,
						errors: [],
						text_margin_y: parsedFrameworkData.Cases.large_image === undefined ? textMarginDefault : textMarginImage,
						margin_x: parsedFrameworkData.Cases.large_image === undefined ? '32px' : "0px",
						margin_y: parsedFrameworkData.Cases.large_image === undefined ? '19px' : "50x",
						width: parsedFrameworkData.Cases.large_image === undefined ? iconSize : defaultSize,
						height: parsedFrameworkData.Cases.large_image === undefined ? iconSize : defaultSize,
						large_image: parsedFrameworkData.Cases.large_image === undefined ? encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.6408 8.39233H18.0922V10.0287H15.6408V8.39233ZM0.115234 8.39233H2.56663V10.0287H0.115234V8.39233ZM9.92083 0.21051V2.66506H8.28656V0.21051H9.92083ZM3.31839 2.25596L5.05889 4.00687L3.89856 5.16051L2.15807 3.42596L3.31839 2.25596ZM13.1485 3.99869L14.8808 2.25596L16.0493 3.42596L14.3088 5.16051L13.1485 3.99869ZM9.10369 4.30142C10.404 4.30142 11.651 4.81863 12.5705 5.73926C13.4899 6.65989 14.0065 7.90854 14.0065 9.21051C14.0065 11.0269 13.0178 12.6141 11.5551 13.4651V14.9378C11.5551 15.1548 11.469 15.3629 11.3158 15.5163C11.1625 15.6698 10.9547 15.756 10.738 15.756H7.46943C7.25271 15.756 7.04487 15.6698 6.89163 15.5163C6.73839 15.3629 6.6523 15.1548 6.6523 14.9378V13.4651C5.18963 12.6141 4.2009 11.0269 4.2009 9.21051C4.2009 7.90854 4.71744 6.65989 5.63689 5.73926C6.55635 4.81863 7.80339 4.30142 9.10369 4.30142ZM10.738 16.5741V17.3923C10.738 17.6093 10.6519 17.8174 10.4986 17.9709C10.3454 18.1243 10.1375 18.2105 9.92083 18.2105H8.28656C8.06984 18.2105 7.862 18.1243 7.70876 17.9709C7.55552 17.8174 7.46943 17.6093 7.46943 17.3923V16.5741H10.738ZM8.28656 14.1196H9.92083V12.3769C11.3345 12.0169 12.3722 10.7323 12.3722 9.21051C12.3722 8.34253 12.0279 7.5101 11.4149 6.89634C10.8019 6.28259 9.97056 5.93778 9.10369 5.93778C8.23683 5.93778 7.40546 6.28259 6.79249 6.89634C6.17953 7.5101 5.83516 8.34253 5.83516 9.21051C5.83516 10.7323 6.87292 12.0169 8.28656 12.3769V14.1196Z" />
							</svg>`) : parsedFrameworkData.Cases.large_image,
						label: securityFramework[0].text.toUpperCase(),
						id: securityFramework[0].text.toUpperCase(),
					},
					renderedPosition: {
						x: baselocationX,
						y: baselocationY,
					}
			},
			{
					group: "nodes",
					data: {
						is_valid: true,
						isValid: true,
						errors: [],
						text_margin_y: parsedFrameworkData.IAM.large_image === undefined ? textMarginDefault : textMarginImage,
						margin_x: parsedFrameworkData.IAM.large_image === undefined ? '32px' : "0px",
						margin_y: parsedFrameworkData.IAM.large_image === undefined ? '19px' : "0px",
						width: parsedFrameworkData.IAM.large_image === undefined ? iconSize : defaultSize,
						height: parsedFrameworkData.IAM.large_image === undefined ? iconSize : defaultSize,
						large_image: parsedFrameworkData.IAM.large_image === undefined ? encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.3318 2.223C13.2598 2.223 13.1878 2.205 13.1248 2.169C11.3968 1.278 9.90284 0.9 8.11184 0.9C6.32984 0.9 4.63784 1.323 3.09884 2.169C2.88284 2.286 2.61284 2.205 2.48684 1.989C2.36984 1.773 2.45084 1.494 2.66684 1.377C4.34084 0.468 6.17684 0 8.11184 0C10.0288 0 11.7028 0.423 13.5388 1.368C13.7638 1.485 13.8448 1.755 13.7278 1.971C13.6468 2.133 13.4938 2.223 13.3318 2.223ZM0.452843 6.948C0.362843 6.948 0.272843 6.921 0.191843 6.867C-0.015157 6.723 -0.0601571 6.444 0.0838429 6.237C0.974843 4.977 2.10884 3.987 3.45884 3.294C6.28484 1.836 9.90284 1.827 12.7378 3.285C14.0878 3.978 15.2218 4.959 16.1128 6.21C16.2568 6.408 16.2118 6.696 16.0048 6.84C15.7978 6.984 15.5188 6.939 15.3748 6.732C14.5648 5.598 13.5388 4.707 12.3238 4.086C9.74084 2.763 6.43784 2.763 3.86384 4.095C2.63984 4.725 1.61384 5.625 0.803843 6.759C0.731843 6.885 0.596843 6.948 0.452843 6.948ZM6.07784 17.811C5.96084 17.811 5.84384 17.766 5.76284 17.676C4.97984 16.893 4.55684 16.389 3.95384 15.3C3.33284 14.193 3.00884 12.843 3.00884 11.394C3.00884 8.721 5.29484 6.543 8.10284 6.543C10.9108 6.543 13.1968 8.721 13.1968 11.394C13.1968 11.646 12.9988 11.844 12.7468 11.844C12.4948 11.844 12.2968 11.646 12.2968 11.394C12.2968 9.216 10.4158 7.443 8.10284 7.443C5.78984 7.443 3.90884 9.216 3.90884 11.394C3.90884 12.69 4.19684 13.887 4.74584 14.859C5.32184 15.894 5.71784 16.335 6.41084 17.037C6.58184 17.217 6.58184 17.496 6.41084 17.676C6.31184 17.766 6.19484 17.811 6.07784 17.811ZM12.5308 16.146C11.4598 16.146 10.5148 15.876 9.74084 15.345C8.39984 14.436 7.59884 12.96 7.59884 11.394C7.59884 11.142 7.79684 10.944 8.04884 10.944C8.30084 10.944 8.49884 11.142 8.49884 11.394C8.49884 12.663 9.14684 13.86 10.2448 14.598C10.8838 15.03 11.6308 15.237 12.5308 15.237C12.7468 15.237 13.1068 15.21 13.4668 15.147C13.7098 15.102 13.9438 15.264 13.9888 15.516C14.0338 15.759 13.8718 15.993 13.6198 16.038C13.1068 16.137 12.6568 16.146 12.5308 16.146ZM10.7218 18C10.6858 18 10.6408 17.991 10.6048 17.982C9.17384 17.586 8.23784 17.055 7.25684 16.092C5.99684 14.841 5.30384 13.176 5.30384 11.394C5.30384 9.936 6.54584 8.748 8.07584 8.748C9.60584 8.748 10.8478 9.936 10.8478 11.394C10.8478 12.357 11.6848 13.14 12.7198 13.14C13.7548 13.14 14.5918 12.357 14.5918 11.394C14.5918 8.001 11.6668 5.247 8.06684 5.247C5.51084 5.247 3.17084 6.669 2.11784 8.874C1.76684 9.603 1.58684 10.458 1.58684 11.394C1.58684 12.096 1.64984 13.203 2.18984 14.643C2.27984 14.877 2.16284 15.138 1.92884 15.219C1.69484 15.309 1.43384 15.183 1.35284 14.958C0.911843 13.779 0.695843 12.609 0.695843 11.394C0.695843 10.314 0.902843 9.333 1.30784 8.478C2.50484 5.967 5.15984 4.338 8.06684 4.338C12.1618 4.338 15.4918 7.497 15.4918 11.385C15.4918 12.843 14.2498 14.031 12.7198 14.031C11.1898 14.031 9.94784 12.843 9.94784 11.385C9.94784 10.422 9.11084 9.639 8.07584 9.639C7.04084 9.639 6.20384 10.422 6.20384 11.385C6.20384 12.924 6.79784 14.364 7.88684 15.444C8.74184 16.29 9.56084 16.758 10.8298 17.109C11.0728 17.172 11.2078 17.424 11.1448 17.658C11.0998 17.865 10.9108 18 10.7218 18Z" />,
							</svg>`) : parsedFrameworkData.IAM.large_image,
						label: securityFramework[3].text.toUpperCase(),
						id: securityFramework[3].text.toUpperCase(),
					},
					renderedPosition: {
						x: baselocationX+shiftradius+(shiftradius/shiftmodifier),
						y: baselocationY+shiftradius-(shiftradius/shiftmodifier),
					}
			},
			{
					group: "nodes",
					data: {
						is_valid: true,
						isValid: true,
						errors: [],
						text_margin_y: parsedFrameworkData.Assets.large_image === undefined ? textMarginDefault : textMarginImage,
						margin_x: parsedFrameworkData.Assets.large_image === undefined ? '32px' : "0px",
						margin_y: parsedFrameworkData.Assets.large_image === undefined ? '19px' : "0px",
						width: parsedFrameworkData.Assets.large_image === undefined ? iconSize : defaultSize,
						height: parsedFrameworkData.Assets.large_image === undefined ? iconSize : defaultSize,
						large_image: parsedFrameworkData.Assets.large_image === undefined ? encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.223 10.971L3.85195 14.4L7.28095 7.029L14.652 3.6L11.223 10.971ZM9.25195 0C8.07006 0 6.89973 0.232792 5.8078 0.685084C4.71587 1.13738 3.72372 1.80031 2.88799 2.63604C1.20016 4.32387 0.251953 6.61305 0.251953 9C0.251953 11.3869 1.20016 13.6761 2.88799 15.364C3.72372 16.1997 4.71587 16.8626 5.8078 17.3149C6.89973 17.7672 8.07006 18 9.25195 18C11.6389 18 13.9281 17.0518 15.6159 15.364C17.3037 13.6761 18.252 11.3869 18.252 9C18.252 7.8181 18.0192 6.64778 17.5669 5.55585C17.1146 4.46392 16.4516 3.47177 15.6159 2.63604C14.7802 1.80031 13.788 1.13738 12.6961 0.685084C11.6042 0.232792 10.4338 0 9.25195 0ZM9.25195 8.01C8.98939 8.01 8.73758 8.1143 8.55192 8.29996C8.36626 8.48563 8.26195 8.73744 8.26195 9C8.26195 9.26256 8.36626 9.51437 8.55192 9.70004C8.73758 9.8857 8.98939 9.99 9.25195 9.99C9.51452 9.99 9.76633 9.8857 9.95199 9.70004C10.1376 9.51437 10.242 9.26256 10.242 9C10.242 8.73744 10.1376 8.48563 9.95199 8.29996C9.76633 8.1143 9.51452 8.01 9.25195 8.01Z" />,
							</svg>`) : parsedFrameworkData.Assets.large_image,
						label: securityFramework[2].text.toUpperCase(), 
						id: securityFramework[2].text.toUpperCase(),
					},
					renderedPosition: {
						x: baselocationX+shiftradius*2,
						y: baselocationY+shiftradius*2,
					}
			},
			{
					group: "nodes",
					data: {
						is_valid: true,
						isValid: true,
						errors: [],
						text_margin_y: parsedFrameworkData.Intel.large_image === undefined ? textMarginDefault : textMarginImage,
						margin_x: parsedFrameworkData.Intel.large_image === undefined ? '32px' : "0px",
						margin_y: parsedFrameworkData.Intel.large_image === undefined ? '19px' : "0px",
						width: parsedFrameworkData.Intel.large_image === undefined ? iconSize : defaultSize,
						height: parsedFrameworkData.Intel.large_image === undefined ? iconSize : defaultSize,
						large_image: parsedFrameworkData.Intel.large_image === undefined ? encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.1091 8.57143H14.8234V5.14286C14.8234 4.19143 14.052 3.42857 13.1091 3.42857H9.68052V2.14286C9.68052 1.57454 9.45476 1.02949 9.0529 0.627628C8.65103 0.225765 8.10599 0 7.53767 0C6.96935 0 6.4243 0.225765 6.02244 0.627628C5.62057 1.02949 5.39481 1.57454 5.39481 2.14286V3.42857H1.96624C1.51158 3.42857 1.07555 3.60918 0.754056 3.93067C0.432565 4.25216 0.251953 4.6882 0.251953 5.14286V8.4H1.53767C2.82338 8.4 3.85195 9.42857 3.85195 10.7143C3.85195 12 2.82338 13.0286 1.53767 13.0286H0.251953V16.2857C0.251953 16.7404 0.432565 17.1764 0.754056 17.4979C1.07555 17.8194 1.51158 18 1.96624 18H5.22338V16.7143C5.22338 15.4286 6.25195 14.4 7.53767 14.4C8.82338 14.4 9.85195 15.4286 9.85195 16.7143V18H13.1091C13.5638 18 13.9998 17.8194 14.3213 17.4979C14.6428 17.1764 14.8234 16.7404 14.8234 16.2857V12.8571H16.1091C16.6774 12.8571 17.2225 12.6314 17.6243 12.2295C18.0262 11.8277 18.252 11.2826 18.252 10.7143C18.252 10.146 18.0262 9.60092 17.6243 9.19906C17.2225 8.79719 16.6774 8.57143 16.1091 8.57143Z" />,
							</svg>`): parsedFrameworkData.Intel.large_image,
						label: securityFramework[4].text.toUpperCase(),
						id: securityFramework[4].text.toUpperCase(),
					},
					renderedPosition: {
						x: baselocationX+shiftradius+(shiftradius/shiftmodifier),
						y: baselocationY+shiftradius*3+(shiftradius/shiftmodifier),
					}
			},
			{
					group: "nodes",
					data: {
						is_valid: true,
						isValid: true,
						errors: [],
						text_margin_y: parsedFrameworkData.Comms.large_image === undefined ? textMarginDefault : textMarginImage,
						margin_x: parsedFrameworkData.Comms.large_image === undefined ? '32px' : "0px",
						margin_y: parsedFrameworkData.Comms.large_image === undefined ? '19px' : "0px",
						width: parsedFrameworkData.Comms.large_image === undefined ? iconSize : defaultSize,
						height: parsedFrameworkData.Comms.large_image === undefined ? iconSize : defaultSize,
						large_image: parsedFrameworkData.Comms.large_image === undefined ? encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.89516 7.71433H8.60945V5.1429H9.89516V7.71433ZM9.89516 10.2858H8.60945V9.00004H9.89516V10.2858ZM14.3952 2.57147H4.10944C3.76845 2.57147 3.44143 2.70693 3.20031 2.94805C2.95919 3.18917 2.82373 3.51619 2.82373 3.85719V15.4286L5.39516 12.8572H14.3952C14.7362 12.8572 15.0632 12.7217 15.3043 12.4806C15.5454 12.2395 15.6809 11.9125 15.6809 11.5715V3.85719C15.6809 3.14361 15.1023 2.57147 14.3952 2.57147Z" />,
							</svg>`) : parsedFrameworkData.Comms.large_image,
						label: securityFramework[5].text.toUpperCase(), 
						id: securityFramework[5].text.toUpperCase(),
					},
					renderedPosition: {
						x: baselocationX,
						y: baselocationY+shiftradius*4,
					}
			},
			{
					group: "nodes",
					data: {
						is_valid: true,
						isValid: true,
						errors: [],
						text_margin_y: parsedFrameworkData["EDR & AV"].large_image === undefined ? textMarginDefault : textMarginImage,
						margin_x: parsedFrameworkData["EDR & AV"].large_image === undefined ? '32px' : "0px",
						margin_y: parsedFrameworkData["EDR & AV"].large_image === undefined ? '19px' : "0px",
						width: parsedFrameworkData["EDR & AV"].large_image === undefined ? iconSize : defaultSize,
						height: parsedFrameworkData["EDR & AV"].large_image === undefined ? iconSize : defaultSize,
						large_image: parsedFrameworkData["EDR & AV"].large_image === undefined ? encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.1722 8.9957L17.0737 6.60487L17.3661 3.44004L14.2615 2.73483L12.6361 -3.28068e-08L9.71206 1.25561L6.78803 -3.28068e-08L5.16261 2.73483L2.05797 3.43144L2.35038 6.59627L0.251953 8.9957L2.35038 11.3865L2.05797 14.56L5.16261 15.2652L6.78803 18L9.71206 16.7358L12.6361 17.9914L14.2615 15.2566L17.3661 14.5514L17.0737 11.3865L19.1722 8.9957ZM10.5721 13.2957H8.85205V11.5757H10.5721V13.2957ZM10.5721 9.85571H8.85205V4.69565H10.5721V9.85571Z" />,
							</svg>`) : parsedFrameworkData["EDR & AV"].large_image,
						label: securityFramework[7].text.toUpperCase(), 
						id: securityFramework[7].text.toUpperCase(),
					},
					renderedPosition: {
						x: baselocationX-shiftradius-(shiftradius/shiftmodifier),
						y: baselocationY+shiftradius*3+(shiftradius/shiftmodifier),
					}
			},
			{
					group: "nodes",
					data: {
						is_valid: true,
						isValid: true,
						errors: [],
						text_margin_y: parsedFrameworkData.Network.large_image === undefined ? textMarginDefault : textMarginImage,
						margin_x: parsedFrameworkData.Network.large_image === undefined ? '32px' : "0px",
						margin_y: parsedFrameworkData.Network.large_image === undefined ? '19px' : "0px",
						width: parsedFrameworkData.Network.large_image === undefined ? iconSize : defaultSize,
						height: parsedFrameworkData.Network.large_image === undefined ? iconSize : defaultSize,
						large_image:  parsedFrameworkData.Network.large_image === undefined ? encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.251953 10.6011H3.8391L9.38052 -4.92572e-08L10.8977 11.5696L15.0377 6.28838L19.3191 10.6011H23.3948V13.1836H18.252L15.2562 10.175L9.1491 18L7.88909 8.41894L5.39481 13.1836H0.251953V10.6011Z" />,
						</svg>`) :  parsedFrameworkData.Network.large_image,
						label:  securityFramework[6].text.toUpperCase(),
						id: securityFramework[6].text.toUpperCase(),
					},
					renderedPosition: {
						x: baselocationX-shiftradius*2,
						y: baselocationY+shiftradius*2,
					}
			},
			{
					group: "nodes",
					data: {
						is_valid: true,
						isValid: true,
						errors: [],
						text_margin_y: parsedFrameworkData.SIEM.large_image === undefined ? textMarginDefault : textMarginImage,
						margin_x: parsedFrameworkData.SIEM.large_image === undefined ? '32px' : "0px",
						margin_y: parsedFrameworkData.SIEM.large_image === undefined ? '19px' : "0px",
						width: parsedFrameworkData.SIEM.large_image === undefined ? iconSize : defaultSize,
						height: parsedFrameworkData.SIEM.large_image === undefined ? iconSize : defaultSize,
						large_image: parsedFrameworkData.SIEM.large_image === undefined ? encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.93767 0C8.71083 0 10.4114 0.704386 11.6652 1.9582C12.919 3.21202 13.6234 4.91255 13.6234 6.68571C13.6234 8.34171 13.0165 9.864 12.0188 11.0366L12.2965 11.3143H13.1091L18.252 16.4571L16.7091 18L11.5662 12.8571V12.0446L11.2885 11.7669C10.116 12.7646 8.59367 13.3714 6.93767 13.3714C5.16451 13.3714 3.46397 12.667 2.21015 11.4132C0.956339 10.1594 0.251953 8.45888 0.251953 6.68571C0.251953 4.91255 0.956339 3.21202 2.21015 1.9582C3.46397 0.704386 5.16451 0 6.93767 0ZM6.93767 2.05714C4.36624 2.05714 2.3091 4.11429 2.3091 6.68571C2.3091 9.25714 4.36624 11.3143 6.93767 11.3143C9.5091 11.3143 11.5662 9.25714 11.5662 6.68571C11.5662 4.11429 9.5091 2.05714 6.93767 2.05714Z" />,
						</svg>`) : parsedFrameworkData.SIEM.large_image,
						label: securityFramework[1].text.toUpperCase(),
						id: securityFramework[1].text.toUpperCase(),
					},
					renderedPosition: {
						x: baselocationX-shiftradius-(shiftradius/shiftmodifier),
						y: baselocationY+shiftradius-(shiftradius/shiftmodifier),
					}
			},
		]

		// Middlenode
		nodes.push({
				group: "nodes",
				data: {
					id: "SHUFFLE",
					is_valid: true,
					isValid: true,
					errors: [],
					middle_node: true,
				},
				renderedPosition: {
					x: baselocationX,
					y: baselocationY+shiftradius*2,
				}
		})

		// Extra nodes
		nodes.push({
				group: "nodes",
				data: {
					is_valid: true,
					isValid: true,
					errors: [],
					large_image: encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.93767 0C8.71083 0 10.4114 0.704386 11.6652 1.9582C12.919 3.21202 13.6234 4.91255 13.6234 6.68571C13.6234 8.34171 13.0165 9.864 12.0188 11.0366L12.2965 11.3143H13.1091L18.252 16.4571L16.7091 18L11.5662 12.8571V12.0446L11.2885 11.7669C10.116 12.7646 8.59367 13.3714 6.93767 13.3714C5.16451 13.3714 3.46397 12.667 2.21015 11.4132C0.956339 10.1594 0.251953 8.45888 0.251953 6.68571C0.251953 4.91255 0.956339 3.21202 2.21015 1.9582C3.46397 0.704386 5.16451 0 6.93767 0ZM6.93767 2.05714C4.36624 2.05714 2.3091 4.11429 2.3091 6.68571C2.3091 9.25714 4.36624 11.3143 6.93767 11.3143C9.5091 11.3143 11.5662 9.25714 11.5662 6.68571C11.5662 4.11429 9.5091 2.05714 6.93767 2.05714Z" />,
					</svg>`),
					id: "TOP_LEFT",
					invisible: true,
				},
				renderedPosition: {
					x: baselocationX-shiftradius*2.5,
					y: baselocationY-50,
				}
		})
		nodes.push({
				group: "nodes",
				data: {
					is_valid: true,
					isValid: true,
					errors: [],
					large_image: encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.93767 0C8.71083 0 10.4114 0.704386 11.6652 1.9582C12.919 3.21202 13.6234 4.91255 13.6234 6.68571C13.6234 8.34171 13.0165 9.864 12.0188 11.0366L12.2965 11.3143H13.1091L18.252 16.4571L16.7091 18L11.5662 12.8571V12.0446L11.2885 11.7669C10.116 12.7646 8.59367 13.3714 6.93767 13.3714C5.16451 13.3714 3.46397 12.667 2.21015 11.4132C0.956339 10.1594 0.251953 8.45888 0.251953 6.68571C0.251953 4.91255 0.956339 3.21202 2.21015 1.9582C3.46397 0.704386 5.16451 0 6.93767 0ZM6.93767 2.05714C4.36624 2.05714 2.3091 4.11429 2.3091 6.68571C2.3091 9.25714 4.36624 11.3143 6.93767 11.3143C9.5091 11.3143 11.5662 9.25714 11.5662 6.68571C11.5662 4.11429 9.5091 2.05714 6.93767 2.05714Z" />,
					</svg>`),
					id: "BOTTOM_LEFT",
					invisible: true,
				},
				renderedPosition: {
					x: baselocationX-shiftradius*2.5-10,
					y: baselocationY+shiftradius*4-10,
				}
		})
		nodes.push({
				group: "nodes",
				data: {
					is_valid: true,
					isValid: true,
					errors: [],
					large_image: encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.93767 0C8.71083 0 10.4114 0.704386 11.6652 1.9582C12.919 3.21202 13.6234 4.91255 13.6234 6.68571C13.6234 8.34171 13.0165 9.864 12.0188 11.0366L12.2965 11.3143H13.1091L18.252 16.4571L16.7091 18L11.5662 12.8571V12.0446L11.2885 11.7669C10.116 12.7646 8.59367 13.3714 6.93767 13.3714C5.16451 13.3714 3.46397 12.667 2.21015 11.4132C0.956339 10.1594 0.251953 8.45888 0.251953 6.68571C0.251953 4.91255 0.956339 3.21202 2.21015 1.9582C3.46397 0.704386 5.16451 0 6.93767 0ZM6.93767 2.05714C4.36624 2.05714 2.3091 4.11429 2.3091 6.68571C2.3091 9.25714 4.36624 11.3143 6.93767 11.3143C9.5091 11.3143 11.5662 9.25714 11.5662 6.68571C11.5662 4.11429 9.5091 2.05714 6.93767 2.05714Z" />,
					</svg>`),
					id: "BOTTOM_RIGHT",
					invisible: true,
				},
				renderedPosition: {
					x: baselocationX+shiftradius*2+50,
					y: baselocationY+shiftradius*4+50,
				}
		})
		nodes.push({
				group: "nodes",
				data: {
					is_valid: true,
					isValid: true,
					errors: [],
					large_image: encodeURI(`data:image/svg+xml;utf-8,<svg fill="rgb(248,90,62)" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.93767 0C8.71083 0 10.4114 0.704386 11.6652 1.9582C12.919 3.21202 13.6234 4.91255 13.6234 6.68571C13.6234 8.34171 13.0165 9.864 12.0188 11.0366L12.2965 11.3143H13.1091L18.252 16.4571L16.7091 18L11.5662 12.8571V12.0446L11.2885 11.7669C10.116 12.7646 8.59367 13.3714 6.93767 13.3714C5.16451 13.3714 3.46397 12.667 2.21015 11.4132C0.956339 10.1594 0.251953 8.45888 0.251953 6.68571C0.251953 4.91255 0.956339 3.21202 2.21015 1.9582C3.46397 0.704386 5.16451 0 6.93767 0ZM6.93767 2.05714C4.36624 2.05714 2.3091 4.11429 2.3091 6.68571C2.3091 9.25714 4.36624 11.3143 6.93767 11.3143C9.5091 11.3143 11.5662 9.25714 11.5662 6.68571C11.5662 4.11429 9.5091 2.05714 6.93767 2.05714Z" />,
					</svg>`),
					id: "TOP_RIGHT",
					invisible: true,
				},
				renderedPosition: {
					x: baselocationX+shiftradius*2,
					y: baselocationY-150,
				}
		})

		console.log("NODES: " , nodes)
		for (var key in nodes) {
			cy.add(nodes[key]).lock()
		}

    cy.on("select", "edge", (e) => onEdgeSelect(e));
		changeUsecase(selectedUsecase, usecaseType)
	}

	if (selectedOption !== undefined && selectedUsecase !== selectedOption) {
		setSelectedUsecase(selectedOption)
		changeUsecase(selectedOption, usecaseType) 
	}

	return (
		<div style={{margin: "auto", }}>
			{showOptions === false ? null : 
				<div style={{textAlign: "center",}}>
					{Object.keys(usecases).map((data, index) => {
						return(
							<Button key={index} color="primary" variant={selectedUsecase === data ? "contained" : "outlined"} style={{margin: 5, }} onClick={() => {
								changeUsecase(data, usecaseType)
							}}>
								{data}
							</Button>
						)
					})}
				</div>
			}
			<CytoscapeComponent 
				elements={elements} 
				minZoom={0.35}
				maxZoom={2.00}
				style={{width: 560, height: 560, backgroundColor: "transparent", margin: "auto",}} 
				stylesheet={frameworkStyle}
				boxSelectionEnabled={false}
				autounselectify={true}
				panningEnabled={false}
				userPanningEnabled={false}
				showGrid={false}
				id="cytoscape_view"
				cy={(incy) => {
					// FIXME: There's something specific loading when
					// you do the first hover of a node. Why is this different?
					//console.log("CY: ", incy)
					setCy(incy)
				}}
			/>
		</div>
	)
}

export default Framework;