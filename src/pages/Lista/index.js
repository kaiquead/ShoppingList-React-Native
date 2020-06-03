import React from 'react';

import styles from './styles';
import { View, Text } from 'react-native';

export default function Lista(){
    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Lista de compras
                </Text>

                <Text style={styles.familyDescription}>
                    Familia: <Text style={styles.familyDescriptionBold}>Damacena</Text>
                </Text>                
            </View>

            <View style={styles.itens}>
                <Text style={styles.description}>Item:</Text>
                <Text style={styles.values}>Coca-cola</Text>

                <Text style={styles.description}>Quantidade:</Text>
                <Text style={styles.values}>3</Text>
            </View>
        </View>

    );
}
