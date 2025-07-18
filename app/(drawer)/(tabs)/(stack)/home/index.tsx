
import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { router, useNavigation } from 'expo-router'
import React from 'react'
import { SafeAreaView, View } from 'react-native'

const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer);
    }

    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>

                <CustomButton
                    color='primary'
                    className='mb-2'
                    onPress={() => router.push('/products')}
                >
                    Products
                </CustomButton>

                <CustomButton
                    className='mb-2'
                    color='secondary'
                    onPress={() => router.push('/profile')}
                >
                    Profile
                </CustomButton>

                <CustomButton
                    className='mb-2'
                    color='tertiary'
                    onPress={() => router.push('/settings')}
                >
                    Settings
                </CustomButton>

                <CustomButton
                    className='mb-2'
                    color='primary'
                    onPress={onToggleDrawer}
                >
                    Open Menu
                </CustomButton>

                {/* <Link href='/products' asChild>
                    <CustomButton variant='text-only' className='mb-10' color='secondary'>Productos</CustomButton>
                </Link> */}

                {/* <Link className='mb-5' href='/products'>Productos{' '}</Link>
                <Link className='mb-5' href='/profile'>Perfil{' '}</Link>
                <Link className='mb-5' href='/settings'>Ajustes {' '}</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen