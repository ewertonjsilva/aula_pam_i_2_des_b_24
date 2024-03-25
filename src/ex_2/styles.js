import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {        
        padding: 18,      
        alignItems: 'center', 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#e3f2fd', 
        borderRadius: 20, 
    },  
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold', 
    }, 
    imagem: {
        width: '80%', 
        resizeMode: 'center', // stretch
    },
});

export default styles;

