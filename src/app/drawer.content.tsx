import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        onPress={() => {
          navigation.navigate('home');
        }}
      />
      <DrawerItem
        label="Option 2"
        onPress={() => {
          navigation.navigate('Option2');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
