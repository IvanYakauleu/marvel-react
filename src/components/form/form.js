import './form.scss'

import useMarvelService from '../../services/marvelService';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';

const FormGetChar = () => {
    const [char, setChar] = useState(null);
    const { clearError, getCharacterByName} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const onRequest = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded)
    }

    const result = !char ? null : char.length > 0 ?
                        <div className="form__search-wrapper">
                            <div className="form__search-success">There is! Visit {char[0].name} page?</div>
                            <Link to={`/characters/${char[0].id}`} className="button button_grey button_main">
                                <div className="inner">To page</div>
                            </Link>
                        </div> : 
                        <div className="form__search-error">
                            The character was not found. Check the name and try again
                        </div>;

    return (
        <Formik
            initialValues={{ name: '' }}
            validate={values => {
                const errors = {};
                if(!values.name) {
                    errors.name = 'This field is required'
                }
                return errors;
            }}
            onSubmit={({name}) => {
                onRequest(name)
            }}
        >
            <Form className='form'>
                <h2 className='from__title'>Or find a character by name:</h2>
                <div className="form__wrapper">
                    <div>
                        <Field type='text' name='name' id='name' placeholder='Enter name'/>
                        <ErrorMessage className='error' name='name' component='div' />
                    </div>
                    <button className='button button_red button_main' type="submit">
                        FIND
                    </button>
                </div>
                {result}
            </Form>
        </Formik>
    )
}

export default FormGetChar;
