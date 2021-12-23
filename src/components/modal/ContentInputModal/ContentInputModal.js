import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Button from '../../Button/Button';

import styles from './ContentInputModal.style';
import Modal from 'react-native-modal';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState('');

  function handleSend(e) {
    if (!text) {
      return;
    }
    onSend(text);
  }

  return (
    <Modal
      style={styles.modal_container}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholderTextColor="#9e9e9e"
            style={styles.text_input}
            placeholder="Darla hadi milleti"
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
