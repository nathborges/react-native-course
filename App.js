import React, { isValidElement, useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] =  useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random(), value: goalTitle }
      ]);
      setModalVisible(false);
  };

  const removeGoal = goalId => {
    setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const cancelGoalAdditionHandler = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setModalVisible(true)}/>
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
