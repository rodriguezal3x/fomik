import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Select from "./components/Select";

const validate = ( values ) => {
  const errors= {}

  if (!values.name) {
    errors.name = 'Requerido'        
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  if (!values.lastname) {
    errors.lastname = 'Requerido'        
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto'
  }

  if (!values.radio) {
    errors.radio ='Requerido'
  }

  return errors
}

function App() {
  return (
    <Formik
        initialValues={{ name:'', lastname:'', email:'', genero:'', radio:'' }}
        validate={ validate }
        onSubmit={ values => console.log(values) } 
    >
        <Form>
            <TextInput name='name' label='Nombre'/>
            <br/>
            <TextInput name='lastname' label='Apellido'/>
            <br/>
            <TextInput name='email' label='Correo'/>
            <Select label='Genero' name='genero'>
                <option value=''>Selecione uno</option>
                <option value='mujer'>Mujer</option>
                <option value='hombre'>Hombre</option>
                <option value='otro'>Otro</option>
            </Select>
            <Checkbox name="accep">
                Aceptar terminos y Condiciones
            </Checkbox>
            <Radio  name='radio' value='chanchito1' label='Chanchito 1' />
            <Radio  name='radio' value='chanchito2' label='Chanchito 2' />
            <Radio  name='radio' value='chanchito3' label='Chanchito 3' />
            <ErrorMessage name="radio"/>
            <button type="submit">Enviar</button>
        </Form>
    </Formik>
  );
}

export default App;
