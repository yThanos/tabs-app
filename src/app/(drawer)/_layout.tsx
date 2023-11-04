import { Drawer } from 'expo-router/drawer';

const layout = () => {
  return ( 
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="teste"
        options={{
          drawerLabel: "User",
          title: "overview",
        }}
      />
    </Drawer>
  )
}

export default layout;