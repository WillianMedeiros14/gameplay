import React from 'react';
import { Image} from 'react-native';

import { styles } from './styles';


export function GuildIcon() {
    const uri = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-5-1.png'
  return (
    <Image
        source={{ uri: uri}}
        style={styles.image}
        resizeMode="cover"
    />
  );
}
