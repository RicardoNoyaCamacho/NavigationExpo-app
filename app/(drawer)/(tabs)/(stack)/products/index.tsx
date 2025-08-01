import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ProductsScreen = () => {
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text className='text-2xl font-work-black'>{item.title}</Text>
                        <Text className=''>{item.description}</Text>

                        <View className='flex flex-row justify-between'>
                            <Text className='font-work-black'>{item.price}</Text>
                            <Link href={`/products/${item.id}`} className='text-primary'> Details </Link>

                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default ProductsScreen