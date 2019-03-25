import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#364150',
    width: 360
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    marginTop: 40
    //justifyContent:'center'
  },

  title: {
    color: '#FFF',
    marginTop: 10,
    width: 270,
    textAlign: 'center',
    // opacity:0.7
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20
  }


})
export default styles;