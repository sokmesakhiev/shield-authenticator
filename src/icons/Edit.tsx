import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '../constants/colors';
import { ComponentWithColor, ComponentWithSize } from '../types';

export const EditIcon: FC<ComponentWithColor & ComponentWithSize> = ({
  width = 48,
  height = 48,
  color = colors.primary,
}) => {
  return (
    <Svg viewBox="0 0 135.47 135.47" width={width} height={height}>
      <Path
        d="m 6.1363003,113.45411 c -0.797617,-0.38536 -1.4802297,-1.90419 -1.275249,-2.83746 0.09037,-0.41146 0.465374,-1.03096 0.833337,-1.37666 l 0.669022,-0.62854 38.0552617,-0.0688 38.05526,-0.0688 0.797748,0.67126 c 0.956659,0.80498 1.273365,1.98388 0.824243,3.06816 -0.686131,1.65646 1.813555,1.55927 -39.595807,1.53964 C 18.424965,113.74051 6.5375533,113.64796 6.1363003,113.4541 Z M 55.89237,96.310556 c -0.80545,-0.325038 -1.417373,-1.304798 -1.417373,-2.269373 0,-1.247942 5.777058,-22.785908 6.559693,-24.45577 0.582729,-1.243335 4.034353,-4.815178 23.706951,-24.532639 18.476319,-18.518451 23.318829,-23.234084 24.512669,-23.870393 3.935,-2.097332 8.31424,-2.131808 12.38888,-0.09753 2.07129,1.0341 7.28526,6.250027 8.43457,8.437743 2.1266,4.047981 2.18755,8.360044 0.17432,12.33295 -0.57352,1.131803 -4.84057,5.930048 -8.15294,9.167884 -0.50839,0.496946 -6.18961,6.170173 -9.19238,9.179446 -0.34117,0.341905 -7.16874,7.095825 -15.172387,15.008713 -13.11621,12.967475 -14.708856,14.455621 -16.140895,15.081813 -1.484185,0.648997 -23.777947,6.299509 -24.709275,6.262743 -0.233656,-0.0092 -0.679982,-0.119737 -0.991833,-0.245584 z m 14.012674,-8.319253 c 4.484703,-1.096121 8.711422,-2.238126 9.392708,-2.537788 0.978585,-0.43043 4.0308,-3.333827 14.534884,-13.826193 L 107.12882,58.345969 100.05175,51.265265 92.974686,44.18456 79.792031,57.348006 C 70.720228,66.406588 66.415637,70.8871 65.988113,71.716071 c -0.466077,0.903724 -5.163116,17.650041 -5.163116,18.408019 0,0.07397 0.208359,0.07276 0.463021,-0.0027 0.254661,-0.07544 4.132323,-1.033986 8.617026,-2.130107 z m 39.409486,-45.984095 -7.07589,-7.079535 -2.716617,2.707373 -2.71662,2.707372 7.075887,7.079536 7.0759,7.079535 2.71661,-2.707373 2.71662,-2.707372 z m 16.58211,-3.514677 c 0.46128,-1.222044 0.56948,-1.946439 0.47437,-3.175814 -0.1862,-2.406928 -1.06317,-3.841258 -4.23267,-6.922752 -2.44076,-2.372979 -2.95495,-2.747892 -4.30832,-3.141327 -1.91798,-0.557573 -4.0846,-0.398504 -5.69501,0.418115 -0.64431,0.326721 -2.27634,1.675026 -3.62674,2.996231 l -2.45527,2.402191 7.08547,7.097173 7.08548,7.097175 2.53755,-2.593917 c 2.05688,-2.102556 2.65076,-2.893811 3.13514,-4.177075 z M 5.9900983,90.730883 C 4.6131276,89.92887 4.4492136,87.655703 5.6846523,86.494915 l 0.678634,-0.637628 19.9584797,-0.07104 c 22.191857,-0.07899 21.194746,-0.155197 21.960849,1.678347 0.462754,1.107527 0.273773,1.99019 -0.616775,2.880741 l -0.671335,0.671332 -20.27069,-0.008 C 13.448089,91.003351 6.2933443,90.907508 5.9900983,90.730883 Z m 0.651386,-22.502425 c -0.923309,-0.266279 -1.906173,-1.544764 -1.906173,-2.479503 0,-1.036079 0.975898,-2.206897 2.089411,-2.506736 0.721278,-0.194218 7.2231977,-0.261544 20.4629467,-0.211884 21.651264,0.08121 20.457657,-0.02724 21.099338,1.917073 0.436038,1.32121 -0.283962,2.790359 -1.584926,3.23401 -1.157295,0.394655 -38.8023627,0.43875 -40.1605967,0.04704 z M 6.0496283,45.177602 C 4.5346936,44.151159 4.3668086,42.411219 5.6581083,41.11992 l 0.638672,-0.638672 H 39.361421 72.426063 l 0.814049,0.684977 c 0.657719,0.553434 0.814051,0.887047 0.814051,1.737188 0,0.578713 -0.128646,1.292585 -0.28588,1.586378 -0.705273,1.317813 0.226333,1.283123 -34.459202,1.283123 H 6.9282543 Z"
        fill={color}
      />
    </Svg>
  );
};