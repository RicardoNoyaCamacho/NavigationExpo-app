import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DawerLayout = () => {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                // headerShown: false,
                overlayColor: 'rgba(0, 0, 0, 0.5)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the url from root
                options={{
                    headerShown: false,
                    drawerLabel: 'Tabs + Stack',
                    title: 'Tabs + Stack',
                    drawerIcon: ({ color, size }) =>
                        <Ionicons name='albums-outline' size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Home',
                    title: 'User',
                    drawerIcon: ({ color, size }) =>
                        <Ionicons name='person-circle-outline' size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Schedule',
                    title: 'schedule',
                    drawerIcon: ({ color, size }) =>
                        <Ionicons name='calendar-outline' size={size} color={color} />
                }}
            />

        </Drawer >
    )
}

export default DawerLayout;