import '@/style/index.css';
import 'jquery';

$('#colorpicker').on('input', function(e){
	console.log('colorpicker change:'+(<HTMLInputElement>e.target).value);
	window.frames[0].postMessage((<HTMLInputElement>e.target).value, '*');
})
