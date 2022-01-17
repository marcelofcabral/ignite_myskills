import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import Button from '../../components/Button';
import SkillCard from '../../components/SkillCard';
import styles from './styles';

interface SkillData {
  id: string;
  name: string;
}

const Home = () => {
  const newSkillRef = useRef('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  const handleAddNewSkill = () => {
    showLog();
    if (newSkillRef.current !== '') {
      const data = {
        id: String(new Date().getTime()),
        name: newSkillRef.current,
      };
      setMySkills([...mySkills, data]);
    }
  };

  const handleDeleteNewSkill = () => {
    setMySkills(mySkills.slice(0, mySkills.length - 1));
  };

  function showLog() {
    console.log('passou por aqui');
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreetings('Good morning!');
    else if (currentHour < 18) setGreetings('Good afternoon!');
    else setGreetings('Good night!');
  }, []);

  return (
    <View testID="container" style={styles.container}>
      <Text style={styles.greetings} testID="welcome">
        Welcome, Marcelo
      </Text>
      <Text style={styles.title}>{greetings}</Text>
      <TextInput
        testID="input"
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={text => (newSkillRef.current = text)}
      />
      <Button
        testID="add-button"
        type="add"
        text="Add"
        onPress={handleAddNewSkill}
      />
      <Button type="delete" text="Delete" onPress={handleDeleteNewSkill} />
      <Text style={[styles.title, {marginVertical: 30}]}>My Skills</Text>
      {mySkills && (
        <FlatList
          testID="skills-flat-list"
          keyboardShouldPersistTaps="never"
          showsVerticalScrollIndicator={false}
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SkillCard skill={item.name} />}
        />
      )}
    </View>
  );
};

export default Home;
