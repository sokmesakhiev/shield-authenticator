import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Text, { TextProps, TextVariantTypes } from './Text';

type SiteTokenProps = {
  value: string;
  variant?: 'primary' | 'tertiary';
  size?: TextProps['size'];
};

const SiteToken: FC<SiteTokenProps> = ({
  value,
  variant = 'primary',
  size = 'headlineSmall',
}) => {
  return (
    <View style={styles.container}>
      {value.match(/\d{3}/g)?.map((num, index) => (
        <View style={styles.number} key={index}>
          <Text size={size} variant={[variant, 'marginless', 'bold']}>
            {num}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    marginTop: 4,
  },
  number: {
    // backgroundColor: colors.light,
    alignItems: 'center',
    flexDirection: 'column',
    // padding: 8,
    // borderRadius: 8,
    justifyContent: 'space-around',
  },
});

export default SiteToken;
