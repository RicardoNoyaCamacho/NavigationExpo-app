import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DawerLayout = () => {
    return (
        <Drawer>
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Home',
                    title: 'User',
                }}
            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Schedule',
                    title: 'schedule',
                }}
            />

        </Drawer>
    )
}

export default DawerLayout;