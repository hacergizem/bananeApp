import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input';

import styles from './Login.style';

const initialFormValues = {
  userMail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleSignup() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.userMail,
        formValues.password,
      );
      showMessage({
        message: 'Giriş yaptın kanka',
        type: 'success',
      });
      navigation.navigate('Messages');
      setLoading(false);
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.userMail}
              onType={handleChange('userMail')}
              placeholder="E-mail giriniz"
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="Şifre giriniz"
              isSecure={true}
            />
            <Button onPress={handleSubmit} text="Giriş Yap" loading={loading} />
          </>
        )}
      </Formik>
      <Button onPress={handleSignup} theme="secondaryStyle" text="Kayıt Ol" />
    </View>
  );
};

export default Login;
