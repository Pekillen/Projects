import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({    
    root: {
        minHeight: '100vh',    
        backgroundImage: `url(${'https://images.pexels.com/photos/1202821/pexels-photo-1202821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'})`,       
        backgroundSize: 'auto',
        fontFamily: 'Nunito',
    },   
    center: {
        height: '1100px',
        position: 'relative',        
        textAlign: 'center',    
    },
    verCenter: {
        class: 'text-center',
        margin: '0',
        position: 'absolute',
        top: '30%',
        left: '30%',        
    },
   
    button: {
        height: '600px',
        width: '100vh',
    },        
    text: {
        fontWeight: '700',
        color: 'black',
    },

}));