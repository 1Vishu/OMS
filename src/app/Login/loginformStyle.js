import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingVertical:20,
        width:300,
        backgroundColor:'#eceef1',
        borderRadius:5,
       
    },
    
    title:{
        marginBottom:20,
        textAlign:'center',
        color: '#40c8d4',
        fontWeight: '300',
        fontSize: 26,
       // opacity:0.7
    },

    input: {
        height: 45,
        backgroundColor: "#dde3ec",
        marginBottom: 12,
        color: '#777a7e',
        paddingHorizontal: 10,
        borderRadius:4
    },
    select:{
        height: 45,
        backgroundColor: "#dde3ec",
        marginBottom: 12,
        //color: '#777a7e',
        paddingHorizontal: 10,
        borderRadius:4,
        color:'#747474',
    },

    btnContainer: {
        width: "50%", 
        marginLeft: 60, 
        backgroundColor: '#40c8d4',
        textAlign:'center',
        borderRadius:20
    },
    btnText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
})
export default styles;