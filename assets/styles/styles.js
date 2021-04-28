import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#fff',
        fontFamily: 'montserrat-regular',
        display: 'flex',
        flexDirection: 'column'
    },
    collectionsWrapper: {
        marginTop: 20,
        fontFamily: 'montserrat-regular',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    blockTitle: {
        fontSize: 17,
        fontWeight: "600",
        fontFamily: 'montserrat-regular',
        marginBottom: 10,
    },
    button: {
        margin: 20,
        alignItems: 'center',
        fontFamily: 'montserrat-regular',
        justifyContent: 'center',
    },
    collection: {
        marginRight: 10,
        padding: 20,
        fontFamily: 'montserrat-regular',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e1e1e1', 
        height: 100,
        width: 150,
    },
    image: {
        resizeMode: 'cover',
        justifyContent: 'center',
        width: 150,
        height:100,
    },
    flatList: {
        paddingBottom: 5,
    },
    title: {
        fontFamily: 'montserrat-regular',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    bookName: {
        fontFamily: 'montserrat-regular',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e1e1e1'
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40,
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    hobbies: {
        alignItems: 'flex-start',
        display: 'flex',
        marginTop: 20,
    },
    hobby: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    hobbyText: {
        marginLeft: 10,
        fontFamily: 'montserrat-regular',
    },
    appButtonContainer: {
        borderWidth:1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        width: '20%',
        backgroundColor: '#e1e1e1',
        borderColor: '#e1e1e1',
    },
    addInput: {
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#e1e1e1',
        width: '60%',
        fontFamily: 'montserrat-regular',
        padding: 20,
    },
    appButtonText: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        fontFamily: 'montserrat-bold',
        color: "gray",
    },
    text: {
        fontFamily: 'montserrat-regular',
        marginBottom: 20,
    },
    container: {
        height: 'auto',
        padding: 20,
        paddingBottom: 100
    },
    bookName: {
        fontFamily: 'montserrat-regular',
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e1e1e1'
    },
    title: {
        fontFamily: 'montserrat-regular',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e1e1e1'
    },
    button: {
        alignContent: 'flex-end',
        marginLeft: 10,
    },  
    bookName: {
          fontFamily: 'montserrat-regular',
          flex: 1,
          maxWidth: '50%',
          overflow: 'hidden',
          marginRight: 20,
    }
});