export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz mail adresi';

    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';

    case 'auth/weak-password':
      return 'Şifre çok zayıf';

    case 'auth/wrong-password':
      return 'Şifre geçersiz';

    default:
      return errorCode;
  }
}
