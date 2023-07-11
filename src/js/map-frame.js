const insertMapFrame = () => {
  const testIDRef = document.getElementById("test-id");

  let src =
    "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dubai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

  testIDRef.innerHTML = `<div class="mapouter">
<div class="gmap_canvas">
<iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src=${src}>
</iframe>
<a href="https://gachanox.io/">Gacha Nox</a>
</div>
<style>
.mapouter{position:relative;text-align:right;width:100%;height:400px;}
.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}
.gmap_iframe {height:400px!important;}
</style>
</div>`;
};

window.addEventListener("DOMContentLoaded", insertMapFrame);