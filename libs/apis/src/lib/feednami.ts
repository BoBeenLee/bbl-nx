import axios from 'axios';
/* eslint-disable prefer-const */
const feednami: {
  load: (e: any, n: any) => void;
  loadGoogleFormat: (e: any, n: any) => void;
} = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  load: (e, n) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  loadGoogleFormat: (e, n) => {},
};

(feednami.load = function (e: any, n: any) {
  let o = 'https://api.feednami.com/api/v1',
    a = e;
  'object' === typeof e && (a = e.url);
  let t = 'url=' + a;
  e.format && (t += '&include_xml_document&format=' + e.format),
    e.includeXml && (t += '&include_xml_document');
  let d = o + '/feeds/load?' + t;
  // if (window.XDomainRequest) {
  //   const l = document.createElement("script"),
  //     i =
  //       "jsonp_callback_" +
  //       new Date().getTime() +
  //       "_" +
  //       Math.round(1e6 * Math.random());
  //   (d += "&jsonp_callback=" + i),
  //     (window[i] = function(e) {
  //       n(e), document.body.removeChild(l), (window[i] = null);
  //       try {
  //         delete window[i];
  //       } catch (o) {
  //         // NOTHING
  //       }
  //     }),
  //     (l.src = d),
  //     document.body.appendChild(l);
  // } else {
  // const r = new XMLHttpRequest();
  // (r.onreadystatechange = function() {
  //   4 === r.readyState && n(JSON.parse(r.responseText));
  // }),
  //   r.open("GET", d),
  //   r.send();
  // }
  axios
    .get(d)
    .then((result) => {
      n(result.data);
    })
    .catch((error) => {
      n(undefined, error);
    });
}),
  (feednami.loadGoogleFormat = function (e: any, n: any) {
    return feednami.load({ url: e, format: 'google', includeXml: !0 }, n);
  });
export const feednamiApi = (rssUrl: string) =>
  new Promise((resolve, reject) => {
    feednami.load(rssUrl, (data: any, error: any) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });
