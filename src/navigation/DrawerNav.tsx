// MyDrawer.tsx
function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Feed"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
        }}
      >
        <Drawer.Screen name="Feed" component={Feed} options={{ drawerLabel: 'Home' }} />
        <Drawer.Screen name="Notifications" component={Notifications} options={{ drawerLabel: 'Updates' }} />
        <Drawer.Screen name="Profile" component={Profile} options={{ drawerLabel: 'Profile' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
