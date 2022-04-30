import React from "react";
import { View } from 'react-native';
import { Svg, Path, Mask, Rect, Circle, G } from 'react-native-svg';

export default function hairTappered(props: { color: string }): any {
  const { color } = props;
  return (
    <View
    style={{
      position: "absolute",
      bottom: "27.5%",
      width: "110.6%",
      height: "90.5%",
      left: "-8.2%"
    }}>
    <Svg viewBox="0 0 138 149" fill="none" >
    <Path opacity="0.35" d="M104.519 66.2611C100.284 62.8729 92.9607 62.5554 89.9608 62.8201L85.7256 48.791C92.9254 50.4851 102.666 61.4966 104.519 66.2611Z" fill="#717376"/>
    <Path opacity="0.44" d="M40.7266 94.5825C36.915 80.1829 52.3734 72.4358 59.5203 70.23C48.9399 65.9021 46.0288 64.3139 38.3518 61.9316C25.9111 76.7548 31.1975 91.9358 34.1092 101.465L42.3224 103.754L40.7266 94.5825Z" fill="#717376"/>
    <Path d="M86.6942 41.7776L86.7544 41.8051L86.8176 41.8245C87.675 42.0873 88.2088 42.4375 88.5713 42.7967C88.9378 43.16 89.1785 43.5812 89.3858 44.0646C89.4861 44.2985 89.5735 44.5341 89.6686 44.7907L89.6842 44.8327C89.7818 45.0957 89.8903 45.3863 90.0175 45.6662C90.275 46.2331 90.648 46.848 91.3183 47.295C92.4865 48.0741 93.6584 47.977 94.537 47.9042C94.6532 47.8945 94.7644 47.8853 94.8697 47.8786C95.7753 47.8211 96.6822 47.8448 97.9098 48.7218C98.7052 49.29 99.1495 49.875 99.411 50.4372C99.6769 51.0087 99.7802 51.6127 99.814 52.2581C99.831 52.5827 99.8302 52.9072 99.8267 53.2445C99.8262 53.2896 99.8257 53.3351 99.8252 53.3811C99.8218 53.6689 99.8183 53.9729 99.8273 54.2632C99.8475 54.9208 99.9313 55.7074 100.372 56.3901C100.834 57.1061 101.483 57.4401 102.102 57.6206C102.482 57.7314 102.949 57.804 103.344 57.8656C103.504 57.8905 103.653 57.9136 103.779 57.9367C104.291 58.0303 104.736 58.1564 105.142 58.4058C105.537 58.6483 105.956 59.044 106.345 59.7638C107.118 61.1943 106.81 62.6 106.129 64.1534C105.961 64.5387 105.775 64.9193 105.584 65.3065C105.563 65.3496 105.541 65.3929 105.52 65.4363C105.352 65.7761 105.18 66.1247 105.026 66.464C104.978 66.57 104.93 66.6781 104.883 66.7881C103.247 65.4099 100.907 64.7695 98.7082 64.4694C96.522 64.1712 95.0057 65.2995 93.8114 66.2089L93.7505 66.2553C92.5121 67.1985 91.5895 67.9012 90.2888 67.9012H90.2684L90.248 67.902C88.4159 67.9765 87.2168 67.3748 86.118 66.724C86.0126 66.6616 85.904 66.5961 85.793 66.529C85.3464 66.2594 84.8598 65.9656 84.3813 65.7561C83.744 65.4771 83.0208 65.2962 82.1894 65.4289C80.5106 65.6967 79.025 66.6548 77.7862 67.4821C77.7046 67.5366 77.6242 67.5904 77.5449 67.6435C76.3287 68.4574 75.3724 69.0973 74.446 69.3105C73.0008 69.6431 70.7961 69.4775 68.4594 69.2824L68.342 69.2726C67.253 69.1816 66.1547 69.0898 65.1809 69.067C64.3528 69.0476 63.5248 69.074 62.8276 69.2311C56.8583 66.7793 44.1085 61.4758 37.598 58.534C36.6874 56.153 37.1322 53.8558 38.0038 51.8415C38.4611 50.7847 39.0274 49.8275 39.556 49.0024C39.7295 48.7316 39.9091 48.4605 40.0814 48.2006C40.3473 47.7992 40.5956 47.4244 40.7765 47.1185C42.4504 45.7725 43.8315 45.6533 45.1549 45.7461C45.494 45.7698 45.8269 45.8078 46.1781 45.8478C46.1996 45.8503 46.2212 45.8527 46.2429 45.8552C46.6093 45.8969 46.9992 45.9404 47.3894 45.9609C48.1775 46.0023 49.0355 45.9557 49.9123 45.5893C50.7336 45.2461 51.2201 44.6542 51.556 44.0535C51.7568 43.6945 51.9456 43.2401 52.1108 42.8423C52.186 42.6613 52.2564 42.492 52.3207 42.3488C52.5587 41.8193 52.8243 41.3491 53.2282 40.9403C53.6256 40.5381 54.2019 40.1505 55.1193 39.8638C56.8804 39.3133 58.322 39.7585 59.8113 40.4219C60.0383 40.523 60.2789 40.6355 60.5259 40.751C61.0449 40.9935 61.5928 41.2496 62.1042 41.4425C62.8942 41.7404 63.7738 41.9644 64.7197 41.8629C65.4808 41.7813 66.1926 41.4749 66.824 41.1288C67.3711 40.829 67.922 40.4618 68.434 40.1206C68.5115 40.069 68.588 40.018 68.6635 39.9679C69.9073 39.1427 70.8704 38.5859 71.7599 38.5859C72.8367 38.5859 73.6007 38.763 74.175 39.0054C74.7484 39.2475 75.1821 39.5751 75.5812 39.9458C75.773 40.1239 75.9505 40.3057 76.1416 40.5015L76.181 40.5418C76.38 40.7455 76.5994 40.9689 76.8335 41.1753C77.3142 41.5994 77.9068 41.9983 78.7158 42.1541C79.5351 42.312 80.2842 42.2217 80.9585 42.066C81.3374 41.9786 81.7762 41.8458 82.1787 41.7239C82.4154 41.6523 82.6397 41.5844 82.8319 41.5317C83.972 41.2195 85.1305 41.0627 86.6942 41.7776Z" fill={color} stroke="black" strokeWidth="2.01171"/>
    </Svg>


    </View>
  );
}
