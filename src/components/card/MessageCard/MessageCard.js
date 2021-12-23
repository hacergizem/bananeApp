import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './MessageCard.style';

import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessageCard = ({message, onBanane}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.user_container}>
        <Text style={styles.username}>{message.userName}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>

      <Text style={styles.content}>{message.text}</Text>

      <View style={styles.dislike_container}>
        {<Text style={styles.dislike_counter}>{message.dislike}</Text>}
        <TouchableOpacity style={styles.dislike_button} onPress={onBanane}>
          <Text style={styles.dislike_text}>banane?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageCard;
