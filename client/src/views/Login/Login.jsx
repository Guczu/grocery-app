import { Link } from "react-router-dom"
import CustomButton from "../../components/CustomButton/CustomButton"
import CustomInput from "../../components/CustomInput/CustomInput"
import { BiLogInCircle } from 'react-icons/bi'
import { Formik } from 'formik'

const Login = () => {
  return (
    <section className="container mx-auto flex justify-center p-12">
        <div className="w-[36rem] bg-base-softbackground rounded-[15px] p-12 flex flex-col items-center gap-6">

          <span className="text-heading-6 mb-6">
            Zaloguj się
          </span>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => alert(JSON.stringify(values))}
          >
             {
              ({
                values,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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

                  <CustomButton 
                    styles="text-body-4 bg-main-primary hover:bg-main-third text-white px-6 py-2"
                    type="submit"
                  >
                      <span>
                          Zaloguj
                      </span>
                      <BiLogInCircle className="ml-[6px] w-4 h-4"/>
                  </CustomButton>
                </form>
              )
            }
          </Formik>

          <Link to='/forgot-password' className="underline text-main-primary">Zapomniałem hasła</Link>
          <span>
            Nie masz konta? <Link to='/register' className="underline text-main-primary">Zarejestruj się</Link>
          </span>

        </div>
    </section>
  )
}

export default Login