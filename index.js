const fs = require("fs");

const jsonld = {
  "@context": {
    name: "http://schema.org/name",
    image: {
      "@id": "http://schema.org/image",
      "@type": "@id",
    },
    homepage: {
      "@id": "http://schema.org/url",
      "@type": "@id",
    },
  },
  name: "Manu Sporny",
  homepage: "http://manu.sporny.org/",
  image: "http://manu.sporny.org/images/manu.png",
};

const geojson = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [125.6, 10.1],
  },
  properties: {
    name: "Dinagat Islands",
  },
};

const base = `${__dirname}/dist`;
try {
  fs.accessSync(base);
} catch (e) {
  fs.mkdirSync(base);
}

fs.writeFileSync(`${base}/index.jsonld`, JSON.stringify(jsonld, null, 2), "UTF-8");
fs.writeFileSync(`${base}/index.geojson`, JSON.stringify(geojson, null, 2), "UTF-8");
