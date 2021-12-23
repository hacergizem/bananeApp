import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal';

import styles from './Messages.style';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/card/MessageCard';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  const handleSendContent = content => {
    handleInputToggle();
    sendContent(content);
  };

  const sendContent = content => {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      userName: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };

    database().ref('messages/').push(contentObject);
  };

  function handleBanane(item) {
    database()
      .ref(`messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  }

  const renderContent = ({item}) => (
    <MessageCard message={item} onBanane={() => handleBanane(item)} />
  );

  return (
    <View style={styles.contanier}>
      <FlatList data={contentList} renderItem={renderContent} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
    </View>
  );
};

export default Messages;
