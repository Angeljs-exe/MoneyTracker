import {StyleSheet, ScrollView, View, Text} from 'react-native';
import React from 'react';
import {
  Button,
  Gap,
  Header,
  TextInput,
  Transaction,
  Transaction2,
  Transaction3,
} from '../../components';

const CashonBank = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Cash on Bank'}
        onBack={() => navigation.navigate('Home')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.transactionWrapper}>
          <TextInput text={'Description'} placeholder="Add the Description" />
          <Gap height={17} />
          <TextInput text={'Type'} placeholder="Debit / Credit" />
          <Gap height={24} />
          <Button title={'Save'} />
          <Gap height={64} />
        </View>
        <Gap height={24} />
        <View style={styles.lastTransaction}>
          <Text style={styles.transaction}>Last 3 Transaction</Text>
          <Transaction />
          <Transaction2 />
          <Transaction3 />
        </View>
      </ScrollView>
    </View>
  );
};

export default CashonBank;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  transactionWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginTop: 24,
  },
  lastTransaction: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  transaction: {
    fontSize: 16,
    fontFamily: 'Poppins-Black',
    marginBottom: 10,
    color: 'black',
  },
});
