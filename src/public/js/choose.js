/**
 * Created by dell on 2016/12/21.
 */
[].slice.call( document.querySelectorAll('nav > a') ).forEach( function(el) {
  el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
} );

