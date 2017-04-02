// Use the right jQuery source in iframe tests
document.write( "<script id='jquery-js1' src='" +
	parent.document.getElementById("jquery-js1").src.replace( /^(?![^\/?#]+:)/,
		parent.location.pathname.replace( /[^\/]$/, "$0/" ) ) +
"'><\x2Fscript>" );
