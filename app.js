function hvtrsDecode(hvtrs) {
  hvtrs = decodeURIComponent(hvtrs);

  hvtrs = hvtrs
    .replace(/^hvtrs8-/, '')
    .replace(/,/g, '.')
    .replace(/;/g, ':');

  return 'https://' + hvtrs;
}

function getHVTRS() {
  // Get everything after /Learning/
  let path = location.pathname.split('/Learning/')[1];

  // If user pasted manually
  if (!path || !path.startsWith('hvtrs')) {
    path = prompt("Paste HVTRS link:");
  }

  return path;
}

const hvtrs = getHVTRS();
const url = hvtrsDecode(hvtrs);

document.getElementById("frame").src = url;
