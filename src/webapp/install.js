/* 
        <script defer id="install" src="install.js"
                manifest="http://radare.org/manifest.webapp"
                packaged="false"></script>
*/
(function () {
	var ins = undefined;
	var scripts = document.getElementsByTagName ("script");
	if (!scripts)
		return;
	for (var i = 0; i<scripts.length; i++) {
		if ("install.js" == scripts[i].getAttribute("src")) {
			ins = scripts[i];
			break;
		}
	}
	if (!ins) return;
	//var ins = document.getElementById ("install");
	const manifest = ins.getAttribute ("manifest");
	const packaged = (ins.getAttribute ("packaged") == "true")? "Package": "";
	const appi = navigator.mozApps;

	function install() {
		try {
			if (!manifest)
				throw ("install.js requires pkgname and manifest");
			eval ("var myapp = appi.install"+ packaged + "(manifest);");
			myapp.onsuccess = function (data) {
				this.parentNode.removeChild(this);
			};
			myapp.onerror = function() {
				alert (this.error.name);
			};
		} catch (e) {
			alert ("e:"+e);
		} 
	};

	var request = appi.checkInstalled (manifest);
	request.onsuccess = function() {
		if (!request.result)
			install ();
	};
	request.onerror = function() {
		alert ('Error checking installation status: ' + this.error.message);
	};
})();
