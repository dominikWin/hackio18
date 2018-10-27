
var parsePrereqs = function(prereqString){
	return prereqString.split(" or ");
}
var csv = "Course,Name,Desc,Prereqs\n" +
"CSE 1212,,,CSE 1211\n"+
"CSE 1211,,,\n"+
"CSE 2221,Software I: Software Components,,CSE 1211 or CSE 1212\n"+
"CSE 2231,Software II: Software Development and Design,,CSE 2221\n" + 
"CSE 2501,\"Social, Ethical, and Professional Issues in Computing\",,CSE 2231";

//read in the courses
var courses = Papa.parse(csv);

//remove the column headers
courses.data.splice(0, 1);
console.log(courses);

//each prereq
var prereqEdges = [];

//add each course as a node
var courseNodes = [];
for(i = 0; i < courses.data.length; i++){
	//parse the prereqs into a list
	courses.data[i][3] = parsePrereqs(courses.data[i][3]);
	courseNodes.push({data: { id: courses.data[i][0]}});
	
}
for(i = 0; i < courses.data.length; i++){
	for(j = 0; j < courses.data[i][3].length; j++){
		if(courses.data[i][3][j].length > 0){
			prereqEdges.push({ data: { target: courses.data[i][3][j], source: courses.data[i][0] } })

		}
	}
}
console.log(courseNodes);
console.log(prereqEdges);

var cy = window.cy = cytoscape({
	container: document.getElementById('cy'),
  
	boxSelectionEnabled: false,
	autounselectify: true,
  
	layout: {
	  name: 'dagre'
	},
  
	style: [
	  {
		selector: 'node',
		style: {
		  'content': 'data(id)',
		  'text-opacity': 0.5,
		  'text-valign': 'center',
		  'text-halign': 'right',
		  'background-color': '#11479e'
		}
	  },
  
	  {
		selector: 'edge',
		style: {
		  'curve-style': 'bezier',
		  'width': 4,
		  'target-arrow-shape': 'triangle',
		  'line-color': '#9dbaea',
		  'target-arrow-color': '#9dbaea'
		}
	  }
	],
  
	elements: {
	  nodes: courseNodes,
	  edges: prereqEdges
	//   edges: [
	// 	{ data: { source: 'CSE 2221', target: 'CSE 1223' } },
	//   ]
	},
  });
