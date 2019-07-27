/* stats

var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

*/

var loader = new THREE.JSONLoader();

function getFormattedDate(){
	var d = new Date();
	d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);
	return d;
}

current_time = getFormattedDate();

var generateTreeName = function(){
	var text = ""
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for( var i=0; i < 3; i++ ){
		text += letters.charAt(Math.floor(Math.random() * letters.length));
	}
	var tree_name = text.slice(0,1) + Math.floor(Math.random() * 1000000000); + text.slice(1);
	return tree_name;
}


//uncomment line below to reset
//localStorage.setItem("first_opened", current_time);


if( localStorage.getItem("first_opened") === null ){
	localStorage.setItem("first_opened", current_time, function(){
	//document.getElementById("first-opened-holder").innerHTML = 'first opened: ' + localStorage.getItem("first_opened"); 
	});
}else{
	//document.getElementById("first-opened-holder").innerHTML = 'first opened: ' + localStorage.getItem("first_opened"); 
}
if( localStorage.getItem("tree_name") === null ){
	localStorage.setItem("tree_name", generateTreeName(), function(){
		//document.getElementById("first-opened-holder").innerHTML = 'first opened: ' + localStorage.getItem("first_opened"); 
	});
}else{
	//document.getElementById("first-opened-holder").innerHTML = 'first opened: ' + localStorage.getItem("first_opened"); 
}

//document.getElementById("current-date-holder").innerHTML = 'current time: ' + current_time ;

var c = document.getElementById("tree");

var getTree = function(daysElapsed){
	// new model every 73 "days"
	var growthDays = [ 73, 146, 219, 292, 365, 438, 511, 584, 657, 730, 803, 876, 949, 1022, 1095, 1168, 1241, 1314, 1387, 1460, 1533, 1606, 1679, 1752, 1825, 1898, 1971, 2044, 2117, 2190, 2263, 2336, 2409, 2482, 2555, 2628, 2701, 2774, 2847, 2920, 2993, 3066, 3139, 3212, 3285, 3358, 3431, 3504, 3577, 3650]
	if (daysElapsed >= 3650){
		return 3650
	}else{
		for(var i=0; i<growthDays.length;i++){
			if(daysElapsed < growthDays[i]){
				return growthDays[i]
				break
			}
		}
	}
}

var getImages = function(growthDays){
	var root_image_set;
	var graph_image;
	var leaf_count;
	var new_angle;
	var new_y_position;
	var camera_distance;
	var new_mesh_y_position;
	var new_scene_y_position;

	switch (growthDays) {
		case 73:
		    root_image_set = [ 'roots-1', 'roots-2', 'roots-3', 'roots-4', 'roots-5' ];
		    graph_image = 'sketch-1';
		    leaf_count = 500
		    new_angle = 15;
		    new_y_position = 9;
		    camera_distance = 32;
		    new_mesh_y_position = 1.5;
		    new_scene_y_position = 0;
		    break;
		case 146:
		    root_image_set = [ 'roots-1', 'roots-2', 'roots-3', 'roots-4', 'roots-5' ];
		    graph_image = 'sketch-1';
		    leaf_count = 1000
		    new_angle = 15;
		    new_y_position = 9;
		    camera_distance = 32;
			new_mesh_y_position = 1.5;
			new_scene_y_position = 0;
		    break;
		case 219:
		    root_image_set = [ 'roots-1', 'roots-2', 'roots-3', 'roots-4', 'roots-5' ];
		    graph_image = 'sketch-1';
		    leaf_count = 2000
		    new_angle = 18;
		    new_y_position = 9;
		    camera_distance = 32;
		    new_mesh_y_position = 2;
		    new_scene_y_position = 0;
		    break;
		case 292:
	        root_image_set = [ 'roots-1', 'roots-2', 'roots-3', 'roots-4', 'roots-5' ];
	        graph_image = 'sketch-1';
	        leaf_count = 3000
	        new_angle = 22;
	        new_y_position = 10;
	        camera_distance = 33;
	        new_mesh_y_position = 2.5;
	        new_scene_y_position = 0;
	        break;
	    case 365:
	    	console.log(growthDays);
	        root_image_set = [ 'roots-1', 'roots-2', 'roots-3', 'roots-4', 'roots-5' ];
	        graph_image = 'sketch-1';
	        leaf_count = 4000
	        new_angle = 25; 
	        new_y_position = 9;
	        camera_distance = 31;
	        new_mesh_y_position = 3;
	        new_scene_y_position = 0;
	        break;
	    case 438:
	    	console.log(growthDays);
	    	root_image_set = [ 'roots-6', 'roots-7', 'roots-8', 'roots-9', 'roots-10' ];
	        graph_image = 'sketch-2';
	        leaf_count = 5000
	        new_angle = 27;
	        new_y_position = 13;
	        camera_distance = 32;
	        new_mesh_y_position = 4;
	        new_scene_y_position = 0;
	        break;
	    case 511:
	    	console.log(growthDays);
	        root_image_set = [ 'roots-6', 'roots-7', 'roots-8', 'roots-9', 'roots-10' ];
	        graph_image = 'sketch-2';
	        leaf_count = 6000
	        new_angle = 27;
	        new_y_position = 13;
	        camera_distance = 32;
	        new_mesh_y_position = 4;
	        new_scene_y_position = 0;
	        break;
	    case 584:
	        root_image_set = [ 'roots-6', 'roots-7', 'roots-8', 'roots-9', 'roots-10' ];
	        graph_image = 'sketch-2';
	        leaf_count = 7000
	        new_angle = 30;
	        new_y_position = 13;
	        camera_distance = 32;
	        new_mesh_y_position = 4.5;
	        new_scene_y_position = 0;
	        break;
	    case 657:
	        root_image_set = [ 'roots-6', 'roots-7', 'roots-8', 'roots-9', 'roots-10' ];
	        graph_image = 'sketch-2';
	        leaf_count = 8000
	        new_angle = 31;
	        new_y_position = 13;
	        camera_distance = 31;
	        new_mesh_y_position = 5;
	        new_scene_y_position = 0;
	        break;
	    case 730:
	        root_image_set = [ 'roots-6', 'roots-7', 'roots-8', 'roots-9', 'roots-10' ];
	        graph_image = 'sketch-2';
	        leaf_count = 9000
	        new_angle = 33;
	        new_y_position = 12;
	        camera_distance = 34;
	        new_mesh_y_position = 5.5;
	        new_scene_y_position = 0;
	        break;
	    case 803:
	        root_image_set = [ 'roots-11', 'roots-12', 'roots-13', 'roots-14', 'roots-15' ];
	        graph_image = 'sketch-3';
	        leaf_count = 10000
	        new_angle = 32;
	        new_y_position = 12;
	        camera_distance = 36;
	        new_mesh_y_position = 6.5;
	        new_scene_y_position = 1;
	        break;
	    case 876:
	        root_image_set = [ 'roots-11', 'roots-12', 'roots-13', 'roots-14', 'roots-15' ];
	        graph_image = 'sketch-3';
	        leaf_count = 11000
	        new_angle = 31;
	        new_y_position = 11;
	        camera_distance = 38;
	        new_mesh_y_position = 8;
	        new_scene_y_position = 1;
	        break;
	    case 949:
	        root_image_set = [ 'roots-11', 'roots-12', 'roots-13', 'roots-14', 'roots-15' ];
	        graph_image = 'sketch-3';
	        leaf_count = 12000
	        new_angle = 32;
	        new_y_position = 11;
	        camera_distance = 38;
	        new_mesh_y_position = 8;
	        new_scene_y_position = 1;
	        break;
	    case 1022:
	        root_image_set = [ 'roots-11', 'roots-12', 'roots-13', 'roots-14', 'roots-15' ];
	        graph_image = 'sketch-3';
	        leaf_count = 13000
	        new_angle = 33;
	        new_y_position = 12;
	        camera_distance = 41;
	        new_mesh_y_position = 9;
	        new_scene_y_position = 1;
	        break;
	    case 1095:
	        root_image_set = [ 'roots-11', 'roots-12', 'roots-13', 'roots-14', 'roots-15' ];
	        graph_image = 'sketch-3';
	        leaf_count = 14000
	        new_angle = 34;
	        new_y_position = 12;
	        camera_distance = 41;
	        new_mesh_y_position = 9;
	        new_scene_y_position = 1;
	        break;
	    case 1168:
	       root_image_set = [ 'roots-16', 'roots-17', 'roots-18', 'roots-19', 'roots-20' ];
	        graph_image = 'sketch-4';
	        leaf_count = 15000
	        new_angle = 35;
	        new_y_position = 12;
	        camera_distance = 42;
	        new_mesh_y_position = 9;
	        new_scene_y_position = 1;
	        break;
	    case 1241:
	        root_image_set = [ 'roots-16', 'roots-17', 'roots-18', 'roots-19', 'roots-20' ];
	        graph_image = 'sketch-4';
	        leaf_count = 16000
	        new_angle = 36;
	        new_y_position = 12;
	        camera_distance = 43;
	        new_mesh_y_position = 10;
	        new_scene_y_position = 1;
	        break;
	    case 1314:
	        root_image_set = [ 'roots-16', 'roots-17', 'roots-18', 'roots-19', 'roots-20' ];
	        graph_image = 'sketch-4';
	        leaf_count = 17000
	        new_angle = 37;
	        new_y_position = 12;
	        camera_distance = 43;
	        new_mesh_y_position = 11;
	        new_scene_y_position = 1;
	        break;
	    case 1387:
	        root_image_set = [ 'roots-16', 'roots-17', 'roots-18', 'roots-19', 'roots-20' ];
	        graph_image = 'sketch-4';
	        leaf_count = 18000
	        new_angle = 38;
	        new_y_position = 13;
	        camera_distance = 43;
	        new_mesh_y_position = 11;
	        new_scene_y_position = 1;
	        break;
	    case 1460:
	        root_image_set = [ 'roots-16', 'roots-17', 'roots-18', 'roots-19', 'roots-20' ];
	        graph_image = 'sketch-4';
	        leaf_count = 19000
	        new_angle = 39;
	        new_y_position = 13;
	        camera_distance = 44;
	        new_mesh_y_position = 12;
	        new_scene_y_position = 1;
	        break;
	    case 1533:
	        root_image_set = [ 'roots-21', 'roots-22', 'roots-23', 'roots-24', 'roots-25' ];
	        graph_image = 'sketch-5';
	        leaf_count = 20000
	        new_angle = 40;
	        new_y_position = 13;
	        camera_distance = 46;
	        new_mesh_y_position = 12;
	        new_scene_y_position = 1;
	        break;
	    case 1606:
	        root_image_set = [ 'roots-21', 'roots-22', 'roots-23', 'roots-24', 'roots-25' ];
	        graph_image = 'sketch-5';
	        leaf_count = 21000
	        new_angle = 42;
	        new_y_position = 13;
	        camera_distance = 48;
	        new_mesh_y_position = 12;
	        new_scene_y_position = 1;
	        break;
	    case 1679:
	        root_image_set = [ 'roots-21', 'roots-22', 'roots-23', 'roots-24', 'roots-25' ];
	        graph_image = 'sketch-5';
	        leaf_count = 22000
	        new_angle = 44;
	        new_y_position = 13;
	        camera_distance = 49;
	        new_mesh_y_position = 12;
	        new_scene_y_position = 1;
	        break;
	    case 1752:
	        root_image_set = [ 'roots-21', 'roots-22', 'roots-23', 'roots-24', 'roots-25' ];
	        graph_image = 'sketch-5';
	        leaf_count = 23000
	        new_angle = 57;
	        new_y_position = 12;
	        camera_distance = 37;
	        new_mesh_y_position = 14;
	        new_scene_y_position = 1;
	        break;
	    case 1825:
	        root_image_set = [ 'roots-21', 'roots-22', 'roots-23', 'roots-24', 'roots-25' ];
	        graph_image = 'sketch-5';
	        leaf_count = 24000
	        new_angle = 57;
	        new_y_position = 12;
	        camera_distance = 37;
	        new_mesh_y_position = 15;
	        new_scene_y_position = 1;
	        break;
	    case 1898:
	        root_image_set = [ 'roots-26', 'roots-27', 'roots-28', 'roots-29', 'roots-30' ];
	        graph_image = 'sketch-6';
	        leaf_count = 25000
	        new_angle = 57;
	        new_y_position = 12;
	        camera_distance = 39;
	        new_mesh_y_position = 15;
	        new_scene_y_position = 1;
	        break;
	    case 1971:
	        root_image_set = [ 'roots-26', 'roots-27', 'roots-28', 'roots-29', 'roots-30' ];
	        graph_image = 'sketch-6';
	        leaf_count = 26000
	        new_angle = 55;
	        new_y_position = 13;
	        camera_distance = 44;
	        new_mesh_y_position = 16;
	        new_scene_y_position = 3;
	        break;
	    case 2044:
	        root_image_set = [ 'roots-26', 'roots-27', 'roots-28', 'roots-29', 'roots-30' ];
	        graph_image = 'sketch-6';
	        leaf_count = 27000
	        new_angle = 48;
	        new_y_position = 14;
	        camera_distance = 48;
	        new_mesh_y_position = 19;
	        new_scene_y_position = 3;
	        break;
	    case 2117:
	        root_image_set = [ 'roots-26', 'roots-27', 'roots-28', 'roots-29', 'roots-30' ];
	        graph_image = 'sketch-6';
	        leaf_count = 28000
	        new_angle = 46;
	        new_y_position = 15;
	        camera_distance = 50;
	        new_mesh_y_position = 20;
	        new_scene_y_position = 3;
	        break;
	    case 2190:
	        root_image_set = [ 'roots-26', 'roots-27', 'roots-28', 'roots-29', 'roots-30' ];
	        graph_image = 'sketch-6';
	        leaf_count = 29000
	        new_angle = 45;
	        new_y_position = 14;
	        camera_distance = 57;
	        new_mesh_y_position = 20;
	        new_scene_y_position = 4;
	        break;
	    case 2263:
	        root_image_set = [ 'roots-31', 'roots-32', 'roots-33', 'roots-34', 'roots-35' ];
	        graph_image = 'sketch-7';
	        leaf_count = 30000
	        new_angle = 45;
	        new_y_position = 14;
	        camera_distance = 61;
	        new_mesh_y_position = 21;
	        new_scene_y_position = 4;
	        break;
	    case 2336:
	        root_image_set = [ 'roots-31', 'roots-32', 'roots-33', 'roots-34', 'roots-35' ];
	        graph_image = 'sketch-7';
	        leaf_count = 31000
	        new_angle = 44;
	        new_y_position = 13;
	        camera_distance = 66;
	        new_mesh_y_position = 20;
	        new_scene_y_position = 4;
	        break;
	    case 2409:
	        root_image_set = [ 'roots-31', 'roots-32', 'roots-33', 'roots-34', 'roots-35' ];
	        graph_image = 'sketch-7';
	        leaf_count = 32000
	        new_angle = 44;
	        new_y_position = 14;
	        camera_distance = 66;
	        new_mesh_y_position = 21;
	        new_scene_y_position = 4;
	        break;
	    case 2482:
	        root_image_set = [ 'roots-31', 'roots-32', 'roots-33', 'roots-34', 'roots-35' ];
	        graph_image = 'sketch-7';
	        leaf_count = 33000
	        new_angle = 44;
	        new_y_position = 14;
	        camera_distance = 68;
	        new_mesh_y_position = 21;
	        new_scene_y_position = 4;
	        break;
	    case 2555:
	        root_image_set = [ 'roots-31', 'roots-32', 'roots-33', 'roots-34', 'roots-35' ];
	        graph_image = 'sketch-7';
	        leaf_count = 34000
	        new_angle = 45;
	        new_y_position = 14;
	        camera_distance = 70;
	        new_mesh_y_position = 21;
	        new_scene_y_position = 4;
	        break;
	    case 2628:
	        root_image_set = [ 'roots-36', 'roots-37', 'roots-38', 'roots-39', 'roots-40' ];
	        graph_image = 'sketch-8';
	        leaf_count = 35000
	        new_angle = 47;
	        new_y_position = 15;
	        camera_distance = 70;
	        new_mesh_y_position = 21;
	        new_scene_y_position = 4;
	        break;
	    case 2701:
	        root_image_set = [ 'roots-36', 'roots-37', 'roots-38', 'roots-39', 'roots-40' ];
	        graph_image = 'sketch-8';
	        leaf_count = 36000
	        new_angle = 47;
	        new_y_position = 15;
	        camera_distance = 72;
	        new_mesh_y_position = 21;
	        new_scene_y_position = 4;
	        break;
	    case 2774:
	        root_image_set = [ 'roots-36', 'roots-37', 'roots-38', 'roots-39', 'roots-40' ];
	        graph_image = 'sketch-8';
	        leaf_count = 37000
	        new_angle = 50;
	        new_y_position = 15;
	        camera_distance = 72;
	        new_mesh_y_position = 21;
	        new_scene_y_position = 4;
	        break;
	    case 2847:
	        root_image_set = [ 'roots-36', 'roots-37', 'roots-38', 'roots-39', 'roots-40' ];
	        graph_image = 'sketch-8';
	        leaf_count = 38000
	        new_angle = 50;
	        new_y_position = 15;
	        camera_distance = 72;
	        new_mesh_y_position = 22;
	        new_scene_y_position = 4;
	        break;
	    case 2920:
	        root_image_set = [ 'roots-36', 'roots-37', 'roots-38', 'roots-39', 'roots-40' ];
	        graph_image = 'sketch-8';
	        leaf_count = 39000
	        new_angle = 50;
	        new_y_position = 15;
	        camera_distance = 74;
	        new_mesh_y_position = 22;
	        new_scene_y_position = 4;
	        break;
	    case 2993:
	        root_image_set = [ 'roots-41', 'roots-42', 'roots-43', 'roots-44', 'roots-45' ];
	        graph_image = 'sketch-9';
	        leaf_count = 40000
	        new_angle = 50;
	        new_y_position = 16;
	        camera_distance = 74;
	        new_mesh_y_position = 23;
	        new_scene_y_position = 4;
	        break;
	    case 3066:
	        root_image_set = [ 'roots-41', 'roots-42', 'roots-43', 'roots-44', 'roots-45' ];
	        graph_image = 'sketch-9';
	        leaf_count = 41000
	        new_angle = 50;
	        new_y_position = 16;
	        camera_distance = 76;
	        new_mesh_y_position = 24;
	        new_scene_y_position = 4;
	        break;
	    case 3139:
	        root_image_set = [ 'roots-41', 'roots-42', 'roots-43', 'roots-44', 'roots-45' ];
	        graph_image = 'sketch-9';
	        leaf_count = 42000
	        new_angle = 50;
	        new_y_position = 16;
	        camera_distance = 76;
	        new_mesh_y_position = 25;
	        new_scene_y_position = 4;
	        break;
	    case 3212:
	        root_image_set = [ 'roots-41', 'roots-42', 'roots-43', 'roots-44', 'roots-45' ];
	        graph_image = 'sketch-9';
	        leaf_count = 43000
	        new_angle = 49;
	        new_y_position = 20;
	        camera_distance = 78;
	        new_mesh_y_position = 25;
	        new_scene_y_position = 4;
	        break;
	    case 3285:
	        root_image_set = [ 'roots-41', 'roots-42', 'roots-43', 'roots-44', 'roots-45' ];
	        graph_image = 'sketch-9';
	        leaf_count = 44000
	        new_angle = 49;
	        new_y_position = 20;
	        camera_distance = 80;
	        new_mesh_y_position = 26;
	        new_scene_y_position = 4;
	        break;
	    case 3358:
	        root_image_set = [ 'roots-46', 'roots-47', 'roots-48', 'roots-49', 'roots-50' ];
	        graph_image = 'sketch-10';
	        leaf_count = 45000
	        new_angle = 49;
	        new_y_position = 20;
	        camera_distance = 80;
	        new_mesh_y_position = 28;
	        new_scene_y_position = 4;
	        break;
	    case 3431:
	        root_image_set = [ 'roots-46', 'roots-47', 'roots-48', 'roots-49', 'roots-50' ];
	        graph_image = 'sketch-10';
	        leaf_count = 46000
	        new_angle = 50;
	        new_y_position = 20;
	        camera_distance = 81;
	        new_mesh_y_position = 28;
	        new_scene_y_position = 4;
	        break;
	    case 3504:
	        root_image_set = [ 'roots-46', 'roots-47', 'roots-48', 'roots-49', 'roots-50' ];
	        graph_image = 'sketch-10';
	        leaf_count = 47000
	        new_angle = 50;
	        new_y_position = 22;
	        camera_distance = 82;
	        new_mesh_y_position = 28;
	        new_scene_y_position = 4;
	        break;
	    case 3577:
	        root_image_set = [ 'roots-46', 'roots-47', 'roots-48', 'roots-49', 'roots-50' ];
	        graph_image = 'sketch-10';
	        leaf_count = 48000
	        new_angle = 50;
	        new_y_position = 22;
	        camera_distance = 83;
	        new_mesh_y_position = 30;
	        new_scene_y_position = 4;
	        break;
	    case 3650:
	        root_image_set = [ 'roots-46', 'roots-47', 'roots-48', 'roots-49', 'roots-50' ];
	        graph_image = 'sketch-10';
	        leaf_count = 50000
	        new_angle = 50;
	        new_y_position = 22;
	        camera_distance = 84;
	        new_mesh_y_position = 30;
	        new_scene_y_position = 5;
	        break;
	    default:
	        root_image_set = [ 'roots-46', 'roots-47', 'roots-48', 'roots-49', 'roots-50' ];
	        graph_image = 'sketch-10';
	        leaf_count = 50000
	        new_angle = 50;
	        new_y_position = 22;
	        camera_distance = 81;
	        new_mesh_y_position = 30;
	        new_scene_y_position = 5;
	        break;
	} 
	
	return { root_image_set:  root_image_set, graph_image: graph_image, new_angle: new_angle, leaf_count: leaf_count, new_y_position: new_y_position, camera_distance: camera_distance, new_mesh_y_position: new_mesh_y_position, new_scene_y_position: new_scene_y_position };
}






var getDaysElapsed = function(plantedAt){
	var datenow = new Date();
	if(timeskip){
		document.getElementById('approved').style.display = 'none';
		switch (years_skipped) {
			case 2:
				return 730
				break;
			case 4:
				return 1460
				break;
			case 6:
				return 2190
				break;
			case 8:
				return 2920
				break;
		}
	}else{
		//multiplying decreases simulation time.
		//*500 = approx. 7 days
		return (parseFloat(( Date.parse(datenow) - Date.parse(plantedAt) ) / 86400000).toFixed(4)*500);
		//*84000 = approx. 1hr
		//return (parseFloat(( Date.parse(datenow) - Date.parse(plantedAt) ) / 86400000).toFixed(4)*84000)
	}
}

var getTimeLeft = function(daysElapsed){
	if(daysElapsed>=3650){
		console.log('NO  TIME LEFT')
		return 0
	}else{
		return(3650 - daysElapsed);
	}
}

var getCurrentHeight = function(daysElapsed){
	if(daysElapsed>=3650){
		return 51
	}else{
		return((1 + (daysElapsed*0.01369863013)).toFixed(4));
	}
}


var plantedAt = localStorage.getItem("first_opened");
var treeName = localStorage.getItem("tree_name");
var daysElapsed = getDaysElapsed(plantedAt);
var timeLeft = getTimeLeft(daysElapsed);
var currentTree = getTree(daysElapsed);
var currentHeight = getCurrentHeight(daysElapsed);
var mesh_y_lower_amount;
var current_camera_distance;
var tree_hud = document.getElementById("tree-hud");
var tree_updating = false;


var generateTreeHud = function(tree_hud){

	var tree_hud_ctx = tree_hud.getContext("2d");
	tree_hud_ctx.fillStyle = '#a2ca7b';
	tree_hud_ctx.fillRect(0, 1265, 1080, 450);
	tree_hud_ctx.fillStyle = '#fff';
	tree_hud_ctx.font = "30px Consolas,monaco,monospace";
	tree_hud_ctx.fillText('Tree #' + treeName,50,1400);
	tree_hud_ctx.fillRect(50, 1420, 500, 25);
	tree_hud_ctx.font = "20px Consolas,monaco,monospace";
	tree_hud_ctx.fillText('Tree generated: ' + localStorage.getItem("first_opened"),50,1480);
	tree_hud_ctx.fillText('Current session started: ' + current_time,50,1510);
	tree_hud_ctx.fillText('Days elapsed: ',50,1540);
	tree_hud_ctx.fillText('Days until growth complete:',50,1570);
	tree_hud_ctx.fillText('Tree height: ',50,1600);
	tree_hud_ctx.fillText('Modules connected: [Rootcam, LeafView Pro]',50,1630);
	tree_hud_ctx.fillText('Seconds until next update: ',50,1660);
	tree_hud_ctx.fillStyle = "rgba(255, 255, 255, 0)";
	tree_hud_ctx.fillRect(720, 0, 360, 480);
	tree_hud_ctx.fillStyle = 'green';
}

var randomizeStatistic = function(type,current){
	if(Math.floor(Math.random() * 2)){
		if(type=='leafhealth'){
			if(current == 100){
				return current
			}else{
				current+=1;
				return current
			}
		}else if(type=='photosynth'){
			if(current == 50){
				return current
			}else{
				current +=1;
				return current
			}
		}else if(type=='humidity'){
			if(current == 100){
				return current
			}else{
				current +=1;
				return current
			}
		}else if(type=='co2'){
			if(current==15){
				return current;
			}else{
				current+=1;
				return current;
			}
		}
	}else{
		//decrease
		if(type=='leafhealth'){
			if(current == 49){
				return current
			}else{
				current-=1;
				return current
			}
		}else if(type=='photosynth'){
			if(current == 10){
				return current
			}else{
				current-=1;
				return current
			}
		}else if(type=='humidity'){
			if(current == 80){
				return current
			}else{
				current-=1;
				return current
			}
		}else if(type=='co2'){
			if(current==5){
				return current;
			}else{
				current-=1;
				return current;
			}
		}
	}
}


var generateStarterData = function(type,current){
	var num_array=[];

	if(type=='humidity'){
		var current_num = current;
		for(i=0;i<16;i++){
			current_num = randomizeStatistic(type,current_num);
			num_array.push(current_num)
		}
	}else if(type=='leafhealth'){
		var current_num = current;
		for(i=0;i<16;i++){
			current_num = randomizeStatistic(type,current_num);
			num_array.push(current_num)
		}
	}else if(type=='photosynth'){
		var current_num = current;
		for(i=0;i<16;i++){
			current_num = randomizeStatistic(type,current_num);
			num_array.push(current_num/10)
		}
	}else if(type=='co2'){
		var current_num = current;
		for(i=0;i<16;i++){
			current_num = randomizeStatistic(type,current_num);
			num_array.push(current_num/100)
		}
	}
	console.log(num_array);
	return num_array;
}

var ctx = document.getElementById("chart-1-canvas");
var data = {
        labels: ['Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3', 'Item 1', 'Item 2', 'Item 3' , 'Item 1', 'Item 2', 'Item 3'],
        datasets: [{
	    		label: "Simulated CO2 (%)",
	    		borderColor: "rgba(212, 111, 106,1)",
	    		backgroundColor: "rgba(212, 111, 106,0.4)",
	    		pointBorderColor: "rgba(212, 111, 106,1)",
	    		pointBackgroundColor: "#fff",
	    		pointRadius: 5,
	    		pointColor : "rgba(212, 111, 106,1)",
	    		radius: 5,
				pointStrokeColor : "rgba(212, 111, 106,1)",
				data : generateStarterData('co2', 10)
	    },  {
        	    
			label: "Photosynthetic Efficiency (%)",
      		fillColor : "rgba(236, 224, 76,0.5)",
			strokeColor : "rgba(255,255,255,1)",
			borderColor: "rgba(236, 224, 76,1)",
			backgroundColor: "rgba(236, 224, 76,0.4)",
			pointBorderColor: "rgba(236, 224, 76,1)",
			pointBackgroundColor: "#fff",
			pointRadius: 5,
			pointColor : "rgba(0,0,0,1)",
			radius: 5,
			pointStrokeColor : "#777",
			data : ( generateStarterData('photosynth', 34) )
        },
	    {

        		label: "Leaf Health (%)",
        		fillColor : "rgba(0,100,0,0.5)",
				strokeColor : "rgba(131, 181, 77,1)",
				borderColor: "rgba(131, 181, 77,1)",
				backgroundColor: "rgba(131, 181, 77,0.5)",
				pointBorderColor: "rgba(131, 181, 77,1)",
				pointBackgroundColor: "#fff",
				pointRadius: 5,
				pointColor : "rgba(131, 181, 77,1)",
				radius: 5,
				pointStrokeColor : "#777",
				data : generateStarterData('leafhealth', 100)

        },{
        	    
			label: "Simulated Humidity (%)",
      		fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(255,255,255,1)",
			borderColor: "rgba(75,192,192,1)",
			backgroundColor: "rgba(75,192,192,0.4)",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointRadius: 5,
			pointColor : "rgba(0,0,0,1)",
			radius: 5,
			pointStrokeColor : "#777",
			data : generateStarterData('humidity', 95)
        }
      /*,
        {
        		
				label: "Simulated Humidity",
          		fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(255,255,255,1)",
				borderColor: "rgba(75,192,192,1)",
				backgroundColor: "rgba(75,192,192,0.4)",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointRadius: 5,
				pointColor : "rgba(0,0,0,1)",
				radius: 5,
				pointStrokeColor : "#777",
				data : generateStarterData('humidity', 95)

				          		
        }*/]
    }

var options = {
	animation : false,
	scales: {
	    xAxes: [{
	        display: false
	    }]
	}
};

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});



var countdown = 60;
var photosynth = 40;
var leafhealth = 100;
var humidity = 95;
var co2 = 10;


document.getElementById("days-text").innerHTML = daysElapsed;
document.getElementById("timeleft-text").innerHTML = timeLeft;
document.getElementById("height-text").innerHTML = currentHeight + "'";

var scene, camera, renderer;
init();


function init() {
	var tree_info_object = getImages(currentTree)
  	scene = new THREE.Scene();
 	var WIDTH = 250;
    var HEIGHT = 250;
    renderer = new THREE.WebGLRenderer({antialias:true, canvas: c, precision: 'lowp' });
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)
    renderer.shadowMapEnabled = true;
    VIEW_ANGLE = tree_info_object.new_angle,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 1,
    FAR = 1000;
    camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    scene.add(camera);

    renderer.setClearColor(0xffffff, 1);
    //renderer.shadowMapSoft = true;
    //renderer.shadowMapSoft = true;
    renderer.shadowMapType = THREE.PCFSoftShadowMap;
    //renderer.shadowMapType = THREE.PCFShadowMap;
  	//var spotLight = new THREE.SpotLight( 0xffffff, 1 );
	var spotLight = new THREE.SpotLight( 0xffffff, 1 );
  	//spotLight.position.set( 10, 50, 75 );
  	spotLight.position.set( 10, 50, 75 );
    spotLight.castShadow = true;
    //spotLight.shadowCameraFov = 12; 
    spotLight.shadowCameraFov = 38
  	spotLight.shadowBias = 0.001;
  	spotLight.shadowDarkness = 0.2;
  	spotLight.shadowMapWidth = 400; //was 800
  	spotLight.shadowMapHeight = 400; //was 800
  	//second spotlight with different shadow settings for 'up close' shots
  	var spotLight2 = new THREE.SpotLight( 0xffffff, 1 );
  	spotLight2.position.set( 10, 50, 75 );
    spotLight2.castShadow = true;
    //spotLight.shadowCameraFov = 12; 
    spotLight2.shadowCameraFov = 10
  	spotLight2.shadowBias = 0.001;
  	spotLight2.shadowDarkness = 0.25;
  	spotLight2.shadowMapWidth = 300; //was 800
  	spotLight2.shadowMapHeight = 300;

  	var ambientlight = new THREE.AmbientLight( 0x5B5B5B, 0.5 ); // soft white light
	scene.add( ambientlight );


	var smallSpotlightActive;

	if(currentTree < 1314){
		scene.add(spotLight2);
		smallSpotlightActive = true;
	}else{
		scene.add(spotLight);
		smallSpotlightActive = false;
	}

	var updateFog = function(){
		if(daysElapsed>3500){
			scene.fog = new THREE.FogExp2( 0xffffff, 0.005 );
			console.log('fog set to 0.005')
		}else if(daysElapsed>3000){
			scene.fog = new THREE.FogExp2( 0xffffff, 0.0065 );
			console.log('fog set to 0.0075')
		}else if(daysElapsed>2250){
			scene.fog = new THREE.FogExp2( 0xffffff, 0.0075 );
			console.log('fog set to 0.01')
		}else if(daysElapsed>2000){
			scene.fog = new THREE.FogExp2( 0xffffff, 0.0095 );
			console.log('fog set to 0.0115')
		}else if(daysElapsed>1500){
			scene.fog = new THREE.FogExp2( 0xffffff, 0.0105 );
			console.log('fog set to 0.015')
		}else if(daysElapsed>750){
			scene.fog = new THREE.FogExp2( 0xffffff, 0.0125 );
			console.log('fog set to 0.0175')
		}else{
			scene.fog = new THREE.FogExp2( 0xffffff, 0.02 );
		}
	}


	var active_tiled_platform;

	var loadNewTree = function(){

		var tree_info_object = getImages(currentTree)

		var mesh_y_lower_amount = tree_info_object.new_mesh_y_position;

		scene.position.y = 0 - tree_info_object.new_scene_y_position;
		document.getElementById("tree-name-text").innerHTML = 'Updating Tree...';

		if(tree_updating==true){
			//Double load attempted, ie something has gone wrong.
			console.log('Double load attempted')
			document.getElementById("tree-name-text").innerHTML = 'Err: double load attempted.';
			setTimeout(function(){
				window.location.reload(true);
			}, 1000);
	
		}else{
			tree_updating = true;
		}

		

		try{loader.loadAjaxJSON(loader, "./trees/"+ currentTree + ".json", function(geometry, materials){

			if( scene.getObjectByName("active_tree") ){
				scene.getObjectByName("active_tree").geometry.dispose();
				scene.remove( scene.getObjectByName("active_tree") );
				console.log( scene.getObjectByName("active_tree") )
			}


			document.getElementById("tree-name-text").innerHTML = 'Tree loaded, adding material';
			material = new THREE.MeshFaceMaterial ( materials )
			document.getElementById("tree-name-text").innerHTML = 'Creating Mesh';
		    mesh = new THREE.Mesh( geometry, material );
		    document.getElementById("tree-name-text").innerHTML = 'Creating hadow';
			mesh.castShadow = true;
			mesh.receiveShadow = false;
			document.getElementById("tree-name-text").innerHTML = 'Placing';
			mesh.position.y -= mesh_y_lower_amount;
			document.getElementById("tree-name-text").innerHTML = 'Adding to scene';
			mesh.name = "active_tree";
			console.log(mesh.name)
			console.log(currentTree)
			scene.add(mesh);
			tree_updating = false;
			document.getElementById("tree-name-text").innerHTML = 'Tree #' + treeName;
			active_tiled_platform.position.y = 0 - mesh_y_lower_amount
			if(currentTree < 1314 && !(smallSpotlightActive) ){
				console.log('Removing large spotlight, adding small spotlight')
				scene.remove(spotLight);
				scene.add(spotLight2);
				smallSpotlightActive = true;
			}else if(currentTree >= 1314 && smallSpotlightActive ){
				console.log('Removing small spotlight, adding larger spotlight')
				scene.remove(spotLight2);
				scene.add(spotLight);
				smallSpotlightActive = false;
			};
		},"./trees/");
		} catch(e){
			console.log(e)
			document.getElementById("tree-name-text").innerHTML = "Error loading tree!"
		}

		updateFog();

		camera.fov = tree_info_object.new_angle;
		camera.position.y = tree_info_object.new_y_position;
		current_camera_distance = tree_info_object.camera_distance
		camera.updateProjectionMatrix();

	}

	//initial setup;

    loader.load( "./trees/tiled_platform.json", function(geometry, materials){
	    //var ground_material;
	    material = new THREE.MeshFaceMaterial ( materials )
	    mesh = new THREE.Mesh( geometry, material );
	    mesh.castShadow = false;
	    mesh.receiveShadow = true;
	    scene.add(mesh);
	    active_tiled_platform = mesh;
	    loadNewTree();
 	});


	refreshAll = function(){
		console.log('refreshAll activated')
		datenow = new Date();
		daysElapsed = getDaysElapsed(plantedAt);
		timeLeft = getTimeLeft(daysElapsed);
		var newerTree = getTree(daysElapsed);
		console.log('newerTree = ' + newerTree + ', currentTree = '+ currentTree+', daysElapsed =' + daysElapsed)
		if(newerTree!==currentTree && daysElapsed < 3651){
			//big update.
			currentTree = newerTree;
			console.log('loading new tree....');
			loadNewTree();
		}
		currentHeight = getCurrentHeight(daysElapsed);

		document.getElementById("days-text").innerHTML = daysElapsed;
		document.getElementById("timeleft-text").innerHTML = timeLeft;
		document.getElementById("height-text").innerHTML = currentHeight + "'";
	}

	var checkTreeForErrors = function(){
		console.log(renderer.info)
		

		if( !(scene.getObjectByName("active_tree")) ){
			document.getElementById("tree-name-text").innerHTML = 'Err: tree not found';
			setTimeout(function(){
				loadNewTree();
			}, 5000);
			console.log('Err: tree not found')
		}else if(renderer.info.render.faces < 1000 && scene.getObjectByName("active_tree")){
			//tree thinks it exists, but it doesn't.
			document.getElementById("tree-name-text").innerHTML = 'Err: rendering error (C).';
			console.log('Err: rendering error (C).')
			setTimeout(function(){
				window.location.reload(true); 
			}, 5000);
		}else if(renderer.info.memory.textures < 2){
			console.log('Err: rendering error (B).')
			document.getElementById("tree-name-text").innerHTML = 'Err: rendering error (B).';
			setTimeout(function(){
				loadNewTree();
			}, 5000);
		}else if(renderer.info.render.faces < 1000){
			console.log('Err: rendering error (A).')
			document.getElementById("tree-name-text").innerHTML = 'Err: rendering error (A).';
			setTimeout(function(){
				loadNewTree();
			}, 5000);
		}else if(renderer.info.render.faces > 1000 && !(scene.getObjectByName("active_tree")) ){
			//tree thinks it doesn't exist, but it does.
			document.getElementById("tree-name-text").innerHTML = 'Err: no active tree obj';
			console.log('Err: no active tree obj')
			setTimeout(function(){
				window.location.reload(true); 
			}, 5000);
		}else if(renderer.info.memory.geometries > 3){
			document.getElementById("tree-name-text").innerHTML = 'Err: memory leak';
			console.log("Too many geometries active -- possible memory leak")
			setTimeout(function(){
				window.location.reload(true); 
			}, 5000);
		}else if(tree_updating==true){
			document.getElementById("tree-name-text").innerHTML = 'Err: Tree update stuck; please check connection.';
			console.log('tree update stuck.')
			setTimeout(function(){
				window.location.reload(true); 
			}, 5000);
		}
	}


	setInterval(function(){
	    countdown-=1

	    if(countdown == 0){
	    	countdown = 60;
	    	refreshAll()
	    }

	    if(countdown == 30){
	    	checkTreeForErrors();
	    }

	    document.getElementById("countdown-text").innerHTML = countdown;
	    //console.log(countdown)
	    leafhealth = randomizeStatistic('leafhealth', leafhealth)
	    photosynth = randomizeStatistic('photosynth', photosynth)
	    humidity = randomizeStatistic('humidity', humidity)
	    co2 = randomizeStatistic('co2', co2)

	    myLineChart.data.datasets[0].data.shift()
	    myLineChart.data.datasets[0].data.push(  co2/100  );
	    myLineChart.data.datasets[1].data.shift()
	    myLineChart.data.datasets[1].data.push(  photosynth/10  );
	    myLineChart.data.datasets[2].data.shift()
	    myLineChart.data.datasets[2].data.push(  leafhealth  );
	    myLineChart.data.datasets[3].data.shift()
	    myLineChart.data.datasets[3].data.push( humidity   );

	}, 1000);
	

	/*
	// for debugging; click to load new tree....
	window.onclick = function(e){
		console.log(renderer.info)
		//daysElapsed+=73;
		//currentTree+=73;
		//loadNewTree();	
		currentTree = "fake";	
		loadNewTree();
	}
	*/	


}



window.onerror = function(error) {
  document.getElementById("tree-name-text").innerHTML = 'Err: generic error';
  console.log('Generic error.')
  setTimeout(function(){
  	window.location.reload(true); 
  }, 5000);
};


function animate() {

		//stats.begin();

		var timer = Date.now() * 0.000030; 
		camera.position.x = Math.cos( timer ) * current_camera_distance;
		camera.position.z = Math.sin( timer ) * current_camera_distance;
		camera.lookAt( scene.position );
		requestAnimationFrame(animate);
		myLineChart.update();
		renderer.render(scene, camera);

		//stats.end();

		//animate();
}

animate();

var tree_info_object = getImages(currentTree)

//document.getElementById("tree-name-text").innerHTML = '#' + treeName;
document.getElementById("tree-generated-text").innerHTML = localStorage.getItem("first_opened");
document.getElementById("session-started-text").innerHTML = current_time;
document.getElementById("days-text").innerHTML = daysElapsed;
document.getElementById("timeleft-text").innerHTML = timeLeft;
document.getElementById("height-text").innerHTML = currentHeight + "'";
//document.getElementById("leaf-count-text").innerHTML = getImages(currentTree).leaf_count