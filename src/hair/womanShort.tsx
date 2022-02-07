import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export default function hairWomanShort(props: { color: string }): any {
  const { color } = props;
  const xml = ` 

    <svg
      style={{
        position: "absolute",
        bottom: "25%",
        width: "92%",
        height: "75%",
        left: "-0.8%"
      }}
      width="261"
      height="240"
      viewBox="0 0 261 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M121.837 79.8195C121.051 78.0776 121.051 78.0779 121.05 78.0783L121.047 78.0794L121.04 78.0828L121.015 78.0942C120.994 78.1038 120.964 78.1177 120.925 78.1357C120.89 78.1518 120.848 78.1714 120.799 78.1943C120.74 78.2223 120.67 78.2553 120.591 78.2932C120.301 78.4313 119.882 78.6353 119.352 78.9045C118.291 79.4426 116.782 80.2418 114.972 81.2948C111.356 83.3984 106.515 86.527 101.628 90.626C91.9116 98.7764 81.7052 111.03 81.0904 126.926C80.8259 133.765 79.9706 166.806 80.1619 179.433C80.323 190.065 85.8253 201.481 93.4581 212.008C100.109 221.18 108.508 229.857 116.832 237.008C79.0664 238.501 50.4555 233.546 31.1209 228.121C21.038 225.292 13.4742 222.334 8.44733 220.094C6.46024 219.208 4.86951 218.434 3.67627 217.825C12.7707 211.141 20.3578 199.682 25.3638 182.675C30.8537 164.024 33.288 138.554 31.1521 104.963C29.2166 74.5247 44.0087 48.8092 66.3601 30.629C88.7347 12.4301 118.55 1.9109 146.238 1.91092C161.221 1.91093 173.377 4.84484 183.177 11.9616C192.98 19.081 200.668 30.5619 206.363 48.1322L206.758 49.3516L208.036 49.4485C220.412 50.3865 229.115 55.4881 235.532 63.6621C242.017 71.924 246.24 83.4216 249.336 97.232C251.376 106.332 249.389 115.311 247.001 125.651L246.89 126.133C244.553 136.25 241.952 147.505 243.096 160.666C244.126 172.51 248.853 184.135 252.782 193.074C253.287 194.222 253.776 195.321 254.242 196.368C255.617 199.455 256.793 202.096 257.586 204.253C258.118 205.698 258.425 206.79 258.523 207.566C258.573 207.963 258.555 208.168 258.542 208.254C258.097 208.665 257.273 209.12 255.957 209.522C254.588 209.94 252.864 210.248 250.882 210.442C246.921 210.828 242.138 210.738 237.544 210.296C232.942 209.853 228.638 209.067 225.623 208.108C224.092 207.622 223.033 207.134 222.436 206.711C222.345 206.646 222.275 206.591 222.222 206.546C222.594 205.259 223.132 203.723 223.753 201.949C226.947 192.824 232.348 177.398 228.855 157.08C226.766 144.924 221.189 123.457 216.162 105.11C213.643 95.9192 211.255 87.4828 209.496 81.3444C208.616 78.275 207.894 75.7798 207.391 74.0515C207.14 73.1874 206.944 72.515 206.81 72.0584L206.658 71.5384L206.619 71.4055L206.609 71.3717L206.607 71.3632L206.606 71.361C206.606 71.3605 206.606 71.3602 204.772 71.8993L206.606 71.3602L205.677 68.2011L203.395 70.5745L203.395 70.5751L203.391 70.579L203.372 70.5991C203.353 70.6178 203.325 70.6471 203.286 70.6867C203.208 70.7659 203.088 70.8861 202.928 71.0445C202.607 71.3612 202.123 71.8304 201.482 72.4293C200.199 73.6271 198.286 75.343 195.784 77.3943C190.779 81.4982 183.428 86.9376 174.067 92.2568C156.25 102.382 131.216 112.037 101.246 111.29C110.86 102.359 116.392 95.0181 119.562 89.7007C121.329 86.736 122.36 84.4028 122.955 82.7777C123.252 81.9654 123.44 81.3309 123.555 80.8839C123.613 80.6605 123.653 80.484 123.68 80.3558C123.693 80.2917 123.703 80.2397 123.711 80.1998C123.714 80.1799 123.717 80.1631 123.72 80.1493L123.723 80.1309L123.724 80.1235L123.724 80.1202C123.725 80.1187 123.725 80.1172 121.837 79.8195ZM121.837 79.8195L121.051 78.0776L124.276 76.6229L123.725 80.1172L121.837 79.8195ZM222.068 206.388C222.071 206.388 222.082 206.402 222.097 206.428C222.073 206.401 222.066 206.388 222.068 206.388Z" fill={color || "black"} stroke="black" strokeWidth="3.82184" />
    </svg>

   `;
  return ( <SvgXml xml={xml} width="100%" height="100%" /> );
}
