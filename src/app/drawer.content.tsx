import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Option 1"
        onPress={() => {
          navigation.navigate('cadastros/pessoa');
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
