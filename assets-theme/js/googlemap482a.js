var globalGmap=null,globalMarkers=[];
(function(e){e.fn.google_map=function(f){defaults={type_val:"",city_val:"",brand:"",my_lat:28.64,my_long:77.2118,red_pin:"/images/redpin.png",green_pin:"/images/greenpin.png",scroll:1,"static":0,map_id:"googleMap",show_single:0};var d=e.extend({},defaults,f),g=d.type_val,h=d.city_val,k=d.brand,l=d.my_lat,m=d.my_long;f={init:function(){null!==globalGmap?(this.removeMarkersGlobally(globalGmap,globalMarkers),this.mapInit()):this.bind()},bind:function(){var c=this;e("#"+d.map_id).gsp_gmap_lazyload({key:"AIzaSyBVuk3CLChQ3EJhJ6uv9hOjY4VwVp4T2rI",
lazyload:!0,success:function(){c.mapInit()}})},clearAllMarkers:function(){var c=this;e.extend([],c.markers1).forEach(function(a,b){c.removeMarker(a)})},removeMarker:function(c){var a=this;a.gmap.removeMarker(c,function(b){a.markers=b})},bindInfoWindow:function(c){var a=this;a.markers1.forEach(function(b,d){b.setTitle(a.markers1[d].title);b.addListener("click",function(){c.setContent(a.markers1[d].content);c.open(a.map,b)})})},mapInit:function(){var c=this;infowindow=null;markerArray=[];e.get(lang+
"/outlet/markers",d.show_single?{outlet_type:g,city:h,outlet_brand:k,lat:l,long:m}:{outlet_type:g,city:h,outlet_brand:k}).done(function(a){if(a){a=JSON.parse(a);for(var b=0;b<a.length;b++)if(""!=a[b][0]&&""!=a[b][1]){window_html='<ul><li class="slick-center"><div class="adcontain"><b style="color:#6d6d6d !important;"> '+a[b][2]+' </b><p style="font-size:12px !important; color:#707070 !important; width:220px;">'+a[b][3]+" , "+a[b][4]+" "+a[b][5]+" "+a[b][6]+" - "+a[b][7]+' </p></div></li><li class="telno"><div class=""></div><div class="">'+
a[b][8]+"</div><div class=\"direction\"><b><u><a onclick=\"ga_event({'event': 'clicktrack','eventCategory': 'OutletMapNavigation','eventAction': 'clicked','eventLabel': 'Map'})\" target=\"_blank\" a href=\"https://www.google.com/maps?saddr=My+Location&daddr="+a[b][0]+","+a[b][1]+'">Get Directions</a></u></b></div></li></ul>';var f=d.green_pin;parseFloat(a[b][0])==parseFloat(l)&&parseFloat(a[b][1])==parseFloat(m)&&(f=d.red_pin);markerArray.push({position:{lat:parseFloat(a[b][0]),lng:parseFloat(a[b][1])},
icon:f,title:a[b][2],content:window_html})}}c.gmap=e("#"+d.map_id).gsp_gmap({key:"",address:"Delhi",zoom:9,maxZoom:17,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:d.scroll?!0:!1}).marker(markerArray).then(function(a){globalMarkers=c.markers1=a}).infowindow().then(function(a){c.infowindow=a;c.bindInfoWindow(a)}).fit();globalGmap=c.gmap})},removeMarkersGlobally:function(c,a){c.resetPreviousResults();a.forEach(function(a,d){c.removeMarker(a,function(a){})})}};f.init();e.gmap=f}})(jQuery);
