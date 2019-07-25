import '@/style/index.css';
import 'jquery';

// WebpackDemo
$('#colorpicker').on('input', function(e){
	console.log('colorpicker change:'+(<HTMLInputElement>e.target).value);
	window.frames[0].postMessage((<HTMLInputElement>e.target).value, '*');
})

// WebpackDemo2
// window.addEventListener('message', function (e) {
// 	console.log(e.data);
// 	$('#colorpicker').attr('value',e.data);
// });
