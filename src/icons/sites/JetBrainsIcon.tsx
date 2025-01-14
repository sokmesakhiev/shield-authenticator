import { FC } from 'react';
import Svg, { G, LinearGradient, Path, Stop } from 'react-native-svg';
import colors from '../../constants/colors';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const JetBrainsIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 130 130 " width={width} height={height || width}>
      <G transform="translate(5.011 .048)">
        <LinearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="31.841"
          y1="120.558"
          x2="110.24"
          y2="73.24"
        >
          <Stop offset="0" stopColor={color || '#fcee39'} />
          <Stop offset="1" stopColor={color || '#f37b3d'} />
        </LinearGradient>
        <Path
          d="M118.6 71.8c.9-.8 1.4-1.9 1.5-3.2.1-2.6-1.8-4.7-4.4-4.9-1.2-.1-2.4.4-3.3 1.1l-83.8 45.9c-1.9.8-3.6 2.2-4.7 4.1-2.9 4.8-1.3 11 3.6 13.9 3.4 2 7.5 1.8 10.7-.2.2-.2.5-.3.7-.5l78-54.8c.4-.3 1.5-1.1 1.7-1.4z"
          fill="url(#a)"
        />
        <LinearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="48.361"
          y1="6.908"
          x2="119.918"
          y2="69.555"
        >
          <Stop offset="0" stopColor={color || '#ef5a6b'} />
          <Stop offset="0.57" stopColor={color || '#f26f4e'} />
          <Stop offset="1" stopColor={color || '#f37b3d'} />
        </LinearGradient>
        <Path
          d="M118.8 65.1L55 2.5C53.6 1 51.6 0 49.3 0c-4.3 0-7.7 3.5-7.7 7.7 0 2.1.8 3.9 2.1 5.3.4.4.8.7 1.2 1l67.4 57.7c.8.7 1.8 1.2 3 1.3 2.6.1 4.7-1.8 4.9-4.4 0-1.3-.5-2.6-1.4-3.5z"
          fill="url(#b)"
        />
        <LinearGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          x1="52.947"
          y1="63.641"
          x2="10.538"
          y2="37.156"
        >
          <Stop offset="0" stopColor={color || '#7c59a4'} />
          <Stop offset="0.385" stopColor={color || '#af4c92'} />
          <Stop offset="0.765" stopColor={color || '#dc4183'} />
          <Stop offset="0.957" stopColor={color || '#ed3d7d'} />
        </LinearGradient>
        <Path
          d="M57.1 59.5c-.1 0-39.4-31-40.2-31.5l-1.8-.9c-5.8-2.2-12.2.8-14.4 6.6-1.9 5.1.2 10.7 4.6 13.4.7.4 1.3.7 2 .9.4.2 45.4 18.8 45.4 18.8 1.8.8 3.9.3 5.1-1.2 1.5-1.9 1.2-4.6-.7-6.1z"
          fill="url(#c)"
        />
        <LinearGradient
          id="d"
          gradientUnits="userSpaceOnUse"
          x1="52.174"
          y1="3.702"
          x2="10.771"
          y2="37.897"
        >
          <Stop offset="0" stopColor={color || '#ef5a6b'} />
          <Stop offset="0.364" stopColor={color || '#ee4e72'} />
          <Stop offset="1" stopColor={color || '#ed3d7d'} />
        </LinearGradient>
        <Path
          d="M49.3 0c-1.7 0-3.3.6-4.6 1.5L4.9 28.3c-.1.1-.2.1-.2.2h-.1c-1.7 1.2-3.1 3-3.9 5.1-2.2 5.8.8 12.3 6.6 14.4 3.6 1.4 7.5.7 10.4-1.4.7-.5 1.3-1 1.8-1.6l34.6-31.2c1.8-1.4 3-3.6 3-6.1 0-4.2-3.5-7.7-7.8-7.7z"
          fill="url(#d)"
        />
        <Path fill={color || colors.dark} d="M34.6 37.4h51v51h-51z" />
        <Path fill="#fff" d="M39 78.8h19.1V82H39z" />
        <G fill="#fff">
          <Path d="M38.8 50.8l1.5-1.4c.4.5.8.8 1.3.8.6 0 .9-.4.9-1.2v-5.3h2.3V49c0 1-.3 1.8-.8 2.3-.5.5-1.3.8-2.3.8-1.5.1-2.3-.5-2.9-1.3zM45.3 43.8H52v1.9h-4.4V47h4v1.8h-4v1.3h4.5v2h-6.7zM55 45.8h-2.5v-2h7.3v2h-2.5v6.3H55zM39 54h4.3c1 0 1.8.3 2.3.7.3.3.5.8.5 1.4 0 1-.5 1.5-1.3 1.9 1 .3 1.6.9 1.6 2 0 1.4-1.2 2.3-3.1 2.3H39zm4.8 2.6c0-.5-.4-.7-1-.7h-1.5v1.5h1.4c.7-.1 1.1-.3 1.1-.8zM43 59h-1.8v1.5H43c.7 0 1.1-.3 1.1-.8s-.4-.7-1.1-.7zM46.8 54h3.9c1.3 0 2.1.3 2.7.9.5.5.7 1.1.7 1.9 0 1.3-.7 2.1-1.7 2.6l2 2.9h-2.6l-1.7-2.5h-1v2.5h-2.3zm3.8 4c.8 0 1.2-.4 1.2-1 0-.7-.5-1-1.2-1h-1.5v2z" />
          <Path d="M56.8 54H59l3.5 8.4H60l-.6-1.5h-3.2l-.6 1.5h-2.4zm2 5l-.9-2.3L57 59zM62.8 54h2.3v8.3h-2.3zM65.7 54h2.1l3.4 4.4V54h2.3v8.3h-2L68 57.8v4.6h-2.3zM73.7 61.1l1.3-1.5c.8.7 1.7 1 2.7 1 .6 0 1-.2 1-.6 0-.4-.3-.5-1.4-.8-1.8-.4-3.1-.9-3.1-2.6 0-1.5 1.2-2.7 3.2-2.7 1.4 0 2.5.4 3.4 1.1l-1.2 1.6c-.8-.5-1.6-.8-2.3-.8-.6 0-.8.2-.8.5 0 .4.3.5 1.4.8 1.9.4 3.1 1 3.1 2.6 0 1.7-1.3 2.7-3.4 2.7-1.5.1-2.9-.4-3.9-1.3z" />
        </G>
      </G>
    </Svg>
  );
};
