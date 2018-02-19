import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import classes from './SignUp.scss';

class SignUp extends Component{
    state = {
        signUpForm: {
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
        const updatedSignUpForm = {
            ...this.state.signUpForm 
        }
        const updatedFormElement = {
            ...this.state.signUpForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedSignUpForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedSignUpForm){
            formIsValid = updatedSignUpForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({signUpForm: updatedSignUpForm, formIsValid: formIsValid});
    }

    checkValidity(value, rules){
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }

    onSignUp = (event) => {
        event.preventDefault();
        const formData = {};
        for(let formElementIdentifier in this.state.signUpForm){
            formData[formElementIdentifier] = this.state.signUpForm[formElementIdentifier].value;
        }
        const signUpData = {
            signup: formData
        }
        console.log(signUpData);
    }

    render(){   
        const formElememtsArray = [];
        for( let key in this.state.signUpForm){
            formElememtsArray.push({
                id: key,
                config: this.state.signUpForm[key]
            })
        }
        return(
            <div className={classes.SignUp}>
                <h1>SignUp</h1>
                <form onSubmit={this.onSignUp}>
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
                    <Button className={classes.SignUpButton} btnType="Success" disabled={!this.state.formIsValid}>SignUp</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;