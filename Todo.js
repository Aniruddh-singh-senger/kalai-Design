import {View, Text, StyleSheet, FlatList,ScrollView} from 'react-native';
import React, {useState} from 'react';
import CommonInputBox from '../../../Components/Common/CommonInputBox';
import CommonButton from '../../../Components/Common/CommonButton';

const Todo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [change, setChange] = useState(false);
  const [isEdit, setIsEdit] = useState(null)

  const [allentry, setAllEntry] = useState([]);

  const addButtonHandler = () => {
    if (email && password) {
      const newentry = {email, password};
      setAllEntry([...allentry, newentry]);
      setEmail('');
      setPassword('');
    } else {
      alert('plz fill all the data');
    }
  };

  const edit = (id)=>{
    const update = allentry.find((editelm,index) => index === id)
    setEmail(update.email)
    setPassword(update.password)
    setChange(true)
    setIsEdit(id)
  }

  const update = () => {
    const newentry = {email, password};
    const updated = allentry.map((elem,index) => {
        if (index === isEdit) {
            return { ...elem, ...newentry }
        } return elem;
    })
    setAllEntry(updated);
    setEmail('');
    setPassword('');
    setChange(false)
    setIsEdit(null)
}

  const removedata = (id) => {
    const remove = allentry.filter((item,index) => index !== id)
    setAllEntry(remove)
}

  return (
    <ScrollView>
      <CommonInputBox
        style={styles.commonButtonStyle}
        value={email}
        callBack={value => setEmail(value)}
        placeholder={'Postcode'}
        lable={'email'}
        important={true}
        valueType="postcode"
      />

      <CommonInputBox
        style={styles.commonButtonStyle}
        value={password}
        callBack={value => setPassword(value)}
        placeholder={'Postcode'}
        lable={'password'}
        important={true}
        valueType="postcode"
        keyboardType={'numeric'}
      />

      <CommonButton
        callBack={!change ?addButtonHandler :update}
        text={!change ? '+ Add':'update'}
        buttonStyle={styles.nextButton}
        textStyle={styles.nextButtonText}
      />
      {allentry.map((item, index) => {
        return (
          <View
            style={{
              margin: 10,
              backgroundColor: '#000',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: '#fff'}}>Name</Text>
              <Text style={{color: '#fff'}}>{item.email}</Text>
            </View>
            <View>
              <Text style={{color: '#fff'}}>password</Text>
              <Text style={{color: '#fff'}}>{item.password}</Text>
            </View>
            <CommonButton
              callBack={()=>edit(index)}
              text={'Edit'}
              buttonStyle={styles.del}
              textStyle={styles.nextButtonText}
            />
            <CommonButton
              callBack={()=>removedata(index)}
              text={'Delete'}
              buttonStyle={styles.del}
              textStyle={styles.nextButtonText}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  commonButtonStyle: {
    marginHorizontal: 10,
  },
  nextButton: {
    backgroundColor: '#A9A0FF',
    marginTop: 36,
    marginHorizontal: 10,
  },
  nextButtonText: {
    color: '#fff',
  },
  del: {
    backgroundColor: '#A9A0FF',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
});

export default Todo;
