import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import { PhoneNumberFormat, PhoneNumberUtil, parsePhoneNumberFromString } from 'google-libphonenumber';

// Vue.filter("first4Chars", str => str.substring(0, 4))
// Vue.filter("last4Chars", str => str.substring(str.length - 4))

Vue.filter('mobileFormat', (value) => {
  if (!value || value.length === 0) {
    return true;
  }
  const instanceNumber = PhoneNumberUtil.getInstance();
  const num = instanceNumber.parseAndKeepRawInput(value, 'IR');
  console.log(instanceNumber.getNumberType(num));
  return value;
});
