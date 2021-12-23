import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';

import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input';

import styles from './Sign.style';

const initialFormValues = {
  mail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  function handleGoBack() {
    navigation.navigate('LoginPage');
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor.',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.mail,
        formValues.repassword,
      );
      showMessage({
        message: 'Başarıyla üye oldunuz!',
        type: 'success',
      });
      setLoading(false);
    } catch (error) {
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
              value={values.mail}
              onType={handleChange('mail')}
              placeholder="E-mail giriniz"
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="Şifre giriniz"
            />
            <Input
              value={values.repassword}
              onType={handleChange('repassword')}
              placeholder="Şifrenizi tekrar giriniz"
            />
            <Button onPress={handleSubmit} text="Kayıt Ol" loading={loading} />
          </>
        )}
      </Formik>
      <Button onPress={handleGoBack} theme="secondaryStyle" text="Giriş Yap" />
    </View>
  );
};

export default Sign;
