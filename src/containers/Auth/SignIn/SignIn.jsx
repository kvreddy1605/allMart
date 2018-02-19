import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import classes from './SignIn.scss';

class SignIn extends Component{
    state = {
        signInForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'EMail'
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                label: 'E-Mail'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Password'
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                label: 'Password'
            }
        },
        formIsValid: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedSignInForm = {
            ...this.state.signInForm 
        }
        const updatedFormElement = {
            ...this.state.signInForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedSignInForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedSignInForm){
            formIsValid = updatedSignInForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({signInForm: updatedSignInForm, formIsValid: formIsValid});
    }

    checkValidity(value, rules){
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }

    onSignIn = (event) => {
        event.preventDefault();
        const formData = {};
        for(let formElementIdentifier in this.state.signInForm){
            formData[formElementIdentifier] = this.state.signInForm[formElementIdentifier].value;
        }
        const signInData = {
            signIn: formData
        }
        console.log(signInData);
    }


    render(){   
        const formElememtsArray = [];
        for( let key in this.state.signInForm){
            formElememtsArray.push({
                id: key,
                config: this.state.signInForm[key]
            })
        }
        return(
            <div className={classes.SignIn}>
                <h1>SignIn</h1>
                <form onSubmit={this.onSignIn}>
                    {formElememtsArray.map(formElement => (
                        <Input key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event)=>this.inputChangedHandler(event, formElement.id)}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            valueType={formElement.id}
                            label={formElement.config.label}
                        />
                    ))}
                    <Button className={classes.SignInButton} btnType="Success" disabled={!this.state.formIsValid}>SignIn</Button>
                </form>
            </div>
        )
    }
}

export default SignIn;