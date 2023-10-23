import react from 'react';


const Button = ({isloading, children,...rest}) => {
    
return (
<button {...rest}>
    {isloading ? 
            'Loading...':children}</button>
            );
}

export default Button;