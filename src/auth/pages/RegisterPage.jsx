import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { startCreatingUserWithEmailAndPassword } from "../../store/slices/auth"
import { 
  ComponentFormButton,
  ComponentFormContainer, 
  ComponentFormField, 
  ComponentFormInput, 
  ComponentFormLabel, 
  ComponentFormTextContainer,
  ComponentFormDanger,
  ComponentFormError} from "../components"
import { AuthLayout } from "../layout"

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  displayName: [ ( value ) => value.length >= 1, 'El nombre es obligatorio' ],
  email: [ ( value ) => value.includes('@'), 'El email debe ser valido' ],
  password: [ ( value ) => value.length >= 6, 'El password debe contener al menos 6 caracteres' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( store => store.auth );

  const [formSubmitted, setformSubmitted] = useState(false);

  const { 
    formState, displayName, email, password, 
    isValidForm, displayNameValid, emailValid, passwordValid,
    onInputChange } = useForm( formData, formValidations );

  const onRegisterUser = (e) => {

    e.preventDefault();
    setformSubmitted( true );
    
    if ( !isValidForm ) return;
    
    dispatch(startCreatingUserWithEmailAndPassword(formState));

  }
    
  return (
    <AuthLayout title="Crea una cuenta" subtitle="Ingresa tus datos para crear tu cuenta">
      
      <ComponentFormContainer 
        onSubmit={ onRegisterUser }
      >

        <ComponentFormField>
          <ComponentFormLabel htmlFor="name">Nombre</ComponentFormLabel>
          <ComponentFormDanger 
            style={{ color: `${ (formSubmitted && !!displayNameValid ) ? 'red' : 'white' }` }}>{ displayNameValid }</ComponentFormDanger>
          <ComponentFormInput 
            value={ displayName }
            name="displayName"
            onChange={ onInputChange }
            placeholder="Saulo Roman Santillan Nava"
            type="text" 
            id="name" 
          />
        </ComponentFormField>
        
        <ComponentFormField>
          <ComponentFormLabel htmlFor="email">Ingresa un correo</ComponentFormLabel>
          <ComponentFormDanger
            style={{ color: `${ (formSubmitted && !!emailValid ) ? 'red' : 'white' }` }}
          >{ emailValid }</ComponentFormDanger>
          <ComponentFormInput 
            value={ email }
            name="email"
            onChange={ onInputChange }
            placeholder="correo@correo.com"
            type="email" 
            id="email" 
          />
        </ComponentFormField>

        <ComponentFormField>
          <ComponentFormLabel htmlFor="password">Crea un password</ComponentFormLabel>
          <ComponentFormDanger
            style={{ color: `${ (formSubmitted && !!passwordValid ) ? 'red' : 'white' }` }}
          >{ passwordValid  }</ComponentFormDanger>
          <ComponentFormInput 
            value={ password }
            name="password"
            onChange={ onInputChange }
            placeholder="Tu password"
            type="password" 
            id="password" 
          />
        </ComponentFormField>

        <ComponentFormError
          style={{ display: !!errorMessage ? '' : 'none' }}
        >{ errorMessage } </ComponentFormError>

        <ComponentFormButton type="submit">Crear cuenta</ComponentFormButton>

        <ComponentFormTextContainer>
          <p>Ya tienes una cuenta?</p>
          <Link to='/auth/login'>Ingresar con tu cuenta</Link>
        </ComponentFormTextContainer>

      </ComponentFormContainer>

    </AuthLayout> 
  )
}
