export function getUrlPara( name:string ):string {
  var reg = new RegExp( '(^|&)' + name + '=([^&]*)(&|$)', 'i' );
  var r = window.location.search.substr( 1 ).match( reg );
  if ( r != null ) return decodeURI( r[ 2 ] );
  return null;
}

export function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function determineAppServerKey() {
  var vapidPublicKey = 'BAyb_WgaR0L0pODaR7wWkxJi__tWbM1MPBymyRDFEGjtDCWeRYS9EF7yGoCHLdHJi6hikYdg4MuYaK0XoD0qnoY';
  return this.urlBase64ToUint8Array(vapidPublicKey);
} 
