import React, { isValidElement, useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] =  useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
      ]);
      setModalVisible(false);
  };

  const removeGoal = goalId => {
    console.log(goalId);
    console.log(courseGoals);
    setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
    });
    console.log(courseGoals);
  };

  const cancelGoalAdditionHandler = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setModalVisible(true)} />
      <GoalInput 
        onAddGoal={addGoalHandler}
        visible={isModalVisible}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem id= {itemData.item.id} title={itemData.item.value} onDelete={removeGoal} />
        )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});
