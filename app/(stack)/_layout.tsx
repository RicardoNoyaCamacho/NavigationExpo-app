import { Stack } from 'expo-router'
import React from 'react'

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Inicio',
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Products Screen',
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Profle Screen',
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Settings Screen',
                }}
            />
        </Stack>
    )
}

export default StackLayout