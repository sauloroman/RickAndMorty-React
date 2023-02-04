import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { startSignInWithEmailAndPassword, startSignInWithGoogle } from "../../store/slices/auth"
import { 
  ComponentFormContainer, 
  ComponentFormField,
  ComponentFormLabel,
  ComponentFormInput, 
  ComponentFormButton,
  ComponentFormFieldButtons,
  ComponentFormTextContainer,
  ComponentFormError} from "../components"
import { AuthLayout } from "../layout"

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( store => store.auth );

  const { email, password, formState, onInputChange } = useForm( formData )

  const isAuthenticated = useMemo( () => status === 'checking', [status]);

  const onSignInWithEmailAndPassword = (e) => {
    e.preventDefault();
    dispatch( startSignInWithEmailAndPassword( formState ) );
  }
    
  const onGoogleSignIn = () => {
    dispatch( startSignInWithGoogle() );
  }

  return (
    <AuthLayout title="Ingresa con tu cuenta" subtitle="Bienvenido de vuelta! Ingresa tus credenciales">
      
      <ComponentFormContainer
        onSubmit={ onSignInWithEmailAndPassword }
      >
        
        <ComponentFormField>
          <ComponentFormLabel htmlFor="email">Email</ComponentFormLabel>
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
          <ComponentFormLabel htmlFor="password">Password</ComponentFormLabel>
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

        <ComponentFormFieldButtons>
          <ComponentFormButton 
            disabled={ isAuthenticated }
            type="submit"
          >Ingresar</ComponentFormButton>
          <ComponentFormButton
            disabled={ isAuthenticated }
            onClick={ onGoogleSignIn }
          >
            <i className='bx bxl-google'></i>
            Ingresar con Google
          </ComponentFormButton>
        </ComponentFormFieldButtons>

        <ComponentFormTextContainer>
          <p>No tienes una cuenta?</p>
          <Link to='/auth/register'>Crear cuenta</Link>
        </ComponentFormTextContainer>

      </ComponentFormContainer>

    </AuthLayout> 
  )
}
