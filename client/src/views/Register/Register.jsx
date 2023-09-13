import { Link, useNavigate } from "react-router-dom"
import CustomButton from "../../components/CustomButton/CustomButton"
import CustomInput from "../../components/CustomInput/CustomInput"
import { BiPlusCircle } from 'react-icons/bi'
import { Formik } from 'formik'
import { SignupSchema } from "../../constants/signUpValidation"
import { registerUser } from "../../services/user.service"
import { useState } from "react"

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const navigate = useNavigate();

  return (
    <section className="container mx-auto h-full flex items-center justify-center p-12">
        <div className="w-[36rem] bg-base-softbackground rounded-[15px] p-12 flex flex-col items-center gap-6">

          <span className="text-heading-6 mb-6">
            Zarejestruj się
          </span>

          <Formik
            initialValues={{ name: '', email: '', password: '', confirmpassword: '' }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              const register = await registerUser(values);
              register === 200 ? navigate('/') : setRegisterError('Nie udało się zarejestrować!');
            }}
          >
             {
              ({
                values,
                handleChange,
                handleSubmit,
                errors,
                touched
              }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <CustomInput
                      className={"text-body-1 text-typography-subtext md:w-[30rem] h-[30px] md:pl-[20px] border-2 rounded focus:outline-none"}
                      disabled={false}
                      name={'name'}
                      onChange={handleChange}
                      value={values.name}
                      placeholder={'Name'}
                      type={'text'}
                  >
                  </CustomInput>

                  <CustomInput
                      className={"text-body-1 text-typography-subtext md:w-[30rem] h-[30px] md:pl-[20px] border-2 rounded focus:outline-none"}
                      disabled={false}
                      name={'email'}
                      onChange={handleChange}
                      value={values.email}
                      placeholder={'E-mail'}
                      type={'text'}
                  >
                  </CustomInput>

                  <CustomInput
                      className={"text-body-1 text-typography-subtext md:w-[30rem] h-[30px] md:pl-[20px] border-2 rounded focus:outline-none"}
                      disabled={false}
                      name={'password'}
                      onChange={handleChange}
                      value={values.password}
                      placeholder={'Hasło'}
                      type={'text'}
                  >
                  </CustomInput>

                  <CustomInput
                      className={"text-body-1 text-typography-subtext md:w-[30rem] h-[30px] md:pl-[20px] border-2 rounded focus:outline-none"}
                      disabled={false}
                      name={'confirmpassword'}
                      onChange={handleChange}
                      value={values.confirmpassword}
                      placeholder={'Powtórz hasło'}
                      type={'text'}
                  >
                  </CustomInput>
                  {errors.name && touched.name ? (
                    <div className="container flex justify-center text-red-600 text-body-5">{errors.name}</div>
                  ) : null}
                  {errors.email && touched.email ? (
                    <div className="container flex justify-center text-red-600 text-body-5">{errors.email}</div>
                  ) : null}
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <div className="container flex justify-center text-red-600 text-body-5">{errors.confirmpassword}</div>
                  ) : null}
                  {registerError ? (
                    <div className="container flex justify-center text-red-600 text-body-5">{registerError}</div>
                  ) : null}

                  <CustomButton 
                    styles="text-body-4 bg-main-primary hover:bg-main-third text-white px-6 py-2"
                    type="submit"
                  >
                      <span>
                          Zarejestruj
                      </span>
                      <BiPlusCircle className="ml-[6px] w-4 h-4"/>
                  </CustomButton>
                </form>
              )
            }
          </Formik>

          <span>
            Masz już konto? <Link to='/login' className="underline text-main-primary">Zaloguj się</Link>
          </span>

        </div>
    </section>
  )
}

export default Register